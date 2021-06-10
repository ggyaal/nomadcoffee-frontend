import AuthLayout from "../components/auth/AuthLayout";
import AuthBox from "../components/auth/AuthBox";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import AuthLink from "../components/auth/AuthLink";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import AuthInputCon from "../components/auth/AuthInputCon";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router";
import { Info } from "../components/shared";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $name: String!
    $password: String!
  ) {
    createAccount(
      username: $username
      email: $email
      name: $name
      password: $password
    ) {
      ok
      error
    }
  }
`;

const EMAIL_REGEXP =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

function SignUp() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });
  const { errors } = formState;

  const onCompleted = (data) => {
    const {
      createAccount: { ok, error },
    } = data;
    const { username, password } = getValues();
    if (!ok) {
      return setError("createAccount", { message: error });
    } else {
      history.push(routes.home, {
        message: "Successful Sign Up !",
        username,
        password,
      });
    }
  };

  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });

  const onSubmitValid = (data) => {
    if (loading) return;
    createAccount({ variables: { ...data } });
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign Up" />
      <AuthBox>
        <AuthForm>
          <FontAwesomeIcon icon={faCoffee} size="3x" />
          <Info isInfo={Boolean(errors?.createAccount)} color="tomato">
            {errors?.createAccount?.message}
          </Info>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <AuthInputCon message={errors?.username?.message}>
              <AuthInput
                type="text"
                {...register("username", {
                  required: "Username is Required.",
                  minLength: {
                    value: 3,
                    message: "Please enter 3 or more characters.",
                  },
                })}
                onFocus={() => clearErrors()}
                placeholder="Username"
              />
            </AuthInputCon>
            <AuthInputCon message={errors?.email?.message}>
              <AuthInput
                type="text"
                {...register("email", {
                  required: "Email is Required.",
                  pattern: {
                    value: new RegExp(EMAIL_REGEXP),
                    message: "Please enter your email only.",
                  },
                })}
                onFocus={() => clearErrors()}
                placeholder="Email"
              />
            </AuthInputCon>
            <AuthInputCon message={errors?.name?.message}>
              <AuthInput
                type="text"
                {...register("name", { required: "Name is Required" })}
                placeholder="Name"
              />
            </AuthInputCon>
            <AuthInputCon message={errors?.password?.message}>
              <AuthInput
                type="password"
                {...register("password", {
                  required: "Password is Required.",
                  minLength: {
                    value: 3,
                    message: "Please enter 3 or more characters.",
                  },
                })}
                placeholder="Password"
              />
            </AuthInputCon>
            {/* <PhotoUploader title="avatar" register={register} name="avartar" /> */}
            <AuthButton disabled={!formState.isValid || loading}>
              Sign Up
            </AuthButton>
          </form>
        </AuthForm>
      </AuthBox>
      <AuthBox>
        <span>Already have an account?</span>
        <AuthLink route={routes.home} name="Log In" />
      </AuthBox>
    </AuthLayout>
  );
}

export default SignUp;
