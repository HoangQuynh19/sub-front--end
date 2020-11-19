
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

const HomePage = lazy(() => import("./Pages/Shopping/components/Main"));
// const Login = lazy(() => import('./Pages//Login'));

function App() {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <GlobalStyles />
      <Suspense fallback={<Fragment />}>
        <Switch>
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </MuiThemeProvider>
    
  );
}

export default App;
