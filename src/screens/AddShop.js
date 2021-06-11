import AuthLayout from "../components/auth/AuthLayout";
import AuthBox from "../components/auth/AuthBox";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import AuthInputCon from "../components/auth/AuthInputCon";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { Info } from "../components/shared";

const CREATE_COFFEESHOP_MUTATION = gql`
  mutation createCoffeeShop($name: String!, $categories: String) {
    createCoffeeShop(name: $name, categories: $categories) {
      ok
      error
    }
  }
`;

function AddShop() {
  const history = useHistory();
  const { register, handleSubmit, formState, setError, clearErrors } = useForm({
    mode: "onChange",
  });
  const { errors } = formState;

  const onCompleted = (data) => {
    const {
      createCoffeeShop: { ok, error },
    } = data;
    if (!ok) {
      return setError("createCoffeeShop", { message: error });
    } else {
      history.push(routes.home);
    }
  };

  const [createCoffeeShop, { loading }] = useMutation(
    CREATE_COFFEESHOP_MUTATION,
    { onCompleted }
  );

  const onSubmitValid = (data) => {
    if (loading) return;
    createCoffeeShop({ variables: { ...data } });
  };

  return (
    <AuthLayout>
      <PageTitle title="Add Shop" />
      <AuthBox>
        <AuthForm>
          <FontAwesomeIcon icon={faCoffee} size="3x" />
          <Info isInfo={Boolean(errors?.createAccount)} color="tomato">
            {errors?.createCoffeeShop?.message}
          </Info>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <AuthInputCon message={errors?.name?.message}>
              <AuthInput
                type="text"
                {...register("name", {
                  required: "name is Required.",
                  minLength: {
                    value: 3,
                    message: "Please enter 3 or more characters.",
                  },
                })}
                onFocus={() => clearErrors()}
                placeholder="name"
              />
            </AuthInputCon>
            <AuthInputCon message={errors?.categories?.message}>
              <AuthInput
                type="text"
                {...register("categories")}
                onFocus={() => clearErrors()}
                placeholder="categories"
              />
            </AuthInputCon>
            {/* <PhotoUploader title="photos" register={register} name="photos" /> */}
            <AuthButton disabled={!formState.isValid}>Make Shop!</AuthButton>
          </form>
        </AuthForm>
      </AuthBox>
    </AuthLayout>
  );
}

export default AddShop;
