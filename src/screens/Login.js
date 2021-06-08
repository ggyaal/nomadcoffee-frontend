import AuthLayout from "../components/auth/AuthLayout";
import AuthBox from "../components/auth/AuthBox";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import AuthLink from "../components/auth/AuthLink";
import PageTitle from "../components/PageTitle";
import routes from "../routes";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import AuthInputCon from "../components/auth/AuthInputCon";
import { Info } from "../components/shared";
import { logInWithToken } from "../apollo";
import { useHistory, useLocation } from "react-router";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

function Login() {
  const history = useHistory();
  const location = useLocation();
  const { register, formState, handleSubmit, setError, clearErrors } = useForm({
    mode: "onChange",
    defaultValues: {
      username: location?.state?.username || "",
      password: location?.state?.password || "",
    },
  });
  const { errors } = formState;

  const onCompleted = (data) => {
    const {
      login: { ok, token, error },
    } = data;
    if (!ok) {
      return setError("login", { message: error });
    } else if (token) {
      return logInWithToken(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });

  const onSubmitValid = (data) => {
    if (loading) return;
    const { username, password } = data;
    history.replace();
    return login({ variables: { username, password } });
  };
  return (
    <AuthLayout>
      <PageTitle title="Login" />
      <AuthBox>
        <AuthForm>
          <FontAwesomeIcon icon={faCoffee} size="3x" />
          <Info isInfo={Boolean(errors?.login)} color="tomato">
            {errors?.login?.message}
          </Info>
          <Info isInfo={Boolean(location?.state?.message)} color="#27ae60">
            {location?.state?.message}
          </Info>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <AuthInputCon message={errors?.username?.message}>
              <AuthInput
                type="text"
                {...register("username", { required: "Username is Required." })}
                onFocus={() => clearErrors()}
                placeholder="Username"
              />
            </AuthInputCon>
            <AuthInputCon message={errors?.password?.message}>
              <AuthInput
                type="password"
                {...register("password", { required: "Password is Required." })}
                onFocus={() => clearErrors()}
                placeholder="Password"
              />
            </AuthInputCon>
            <AuthButton>Log In</AuthButton>
          </form>
        </AuthForm>
      </AuthBox>
      <AuthBox>
        <span>Have not you signed up?</span>
        <AuthLink route={routes.signUp} name="Sign Up" />
      </AuthBox>
    </AuthLayout>
  );
}

export default Login;
