import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Recents from '../components/recents';
export default function Workrouter() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route component = {Recents} path = {"/recents"}></Route>
      </Switch>
    </div>
  );
}

// from App -> Routes -> MainAppRoute -> BacklogRoute 
