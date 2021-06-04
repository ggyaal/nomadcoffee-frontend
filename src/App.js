import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isDarkmodeVar, isLoggedInVar } from "./apollo";
import Login from "./screens/Login";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyled, lightTheme } from "./styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const isDarkmode = useReactiveVar(isDarkmodeVar);
  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
      <GlobalStyled />
      <Router>
        <Switch>
          <Route path="/" exact>
            <button onClick={() => isDarkmodeVar(true)}>Dark Mode</button>
            <button onClick={() => isDarkmodeVar(false)}>Light Mode</button>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
