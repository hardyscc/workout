import React, { useContext } from "react";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { Route, Router, Switch } from "./Router/index";
import { RootStoreContext } from "./stores/RootStore";

export const Routes = () => {
  const rootStore = useContext(RootStoreContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WorkoutHistory} />
        <Route exact path="/current-workout" component={CurrentWorkout} />
      </Switch>
    </Router>
  );
};
