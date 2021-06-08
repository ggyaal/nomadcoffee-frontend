import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { client, isDarkmodeVar, isLoggedInVar } from "./apollo";
import Login from "./screens/Login";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyled, lightTheme } from "./styles";
import routes from "./routes";
import SignUp from "./screens/SignUp";
import { HelmetProvider } from "react-helmet-async";
import DarkMode from "./components/DarkMode";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isDarkmode = useReactiveVar(isDarkmodeVar);
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
          <GlobalStyled />
          <DarkMode />
          <Router>
            <Switch>
              <Route path={routes.home} exact>
                {isLoggedIn ? <Home /> : <Login />}
              </Route>
              {!isLoggedIn ? (
                <Route path={routes.signUp}>
                  <SignUp />
                </Route>
              ) : null}
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
