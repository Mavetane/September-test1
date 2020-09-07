import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import { PrivateRoute, PublicRoute } from '../routes/routesManager';
import Register from '../containers/Register';
import Profile from '../containers/Profile';
import LandingPage from '../containers/LandingPage';
import LogIn from '../containers/LogIn';
import Students from '../containers/Students'


export const loadRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <PublicRoute
          exact
          path="/register"
          component={props => <Register {...props} />}
        />
        <PublicRoute
          exact
          path="/"
          component={props => <LandingPage {...props} />}
        />

        <PublicRoute
          exact
          path="/profile"
          component={props => <Profile {...props} />}
        />
        <PublicRoute
          exact
          path="/students"
          component={props => <Students {...props} />}
        />
        <PublicRoute
          exact
          path="/signin"
          component={props => <LogIn {...props} />}
        />

      </div>
    </Router>
  )

}