
import './App.css';
import React, { Fragment, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import {defaultTheme} from './themes';
import { CssBaseline } from '@material-ui/core';
import { makeStyles, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';
import GlobalStyles from './GlobalStyles';
import Pace from "./Pages/shared/components/Pace";

const HomePage = lazy(() => import("./Pages/Shopping/components/Main"));
const Account = lazy(() => import("./Pages/Account/components/Main"))
const Auth = lazy(() => import("./Pages/Auth/components/Main"))

// const Login = lazy(() => import('./Pages//Login'));

function App() {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <GlobalStyles />
      <Pace color={defaultTheme.palette.primary.light} />
      <Suspense fallback={<Fragment />}>
        <Switch>
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/account/setting" component={Account} />
          <Route exact path="/account/auth" component={Auth} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </MuiThemeProvider>
    
  );
}

export default App;
