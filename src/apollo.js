import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const TOKEN = "TOKEN";
const DARKMODE = "DARKMODE";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const isDarkmodeVar = makeVar(Boolean(localStorage.getItem(DARKMODE)));

export const logInWithToken = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logOutWithToken = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
};

export const darkModeOnOff = () => {
  if (!Boolean(localStorage.getItem(DARKMODE))) {
    localStorage.setItem(DARKMODE, "select");
    isDarkmodeVar(true);
  } else {
    localStorage.removeItem(DARKMODE);
    isDarkmodeVar(false);
  }
};

const httpLink = createHttpLink({
  uri: "https://nomadcoffee-backend-sexy.herokuapp.com/",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
