import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

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

export const client = new ApolloClient({
  uri: "https://nomadcoffee-backend-sexy.herokuapp.com/",
  cache: new InMemoryCache(),
});
