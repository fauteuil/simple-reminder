import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./views/dashboard/Dashboard";

export function RouterViews() {
  return (
    <>
      route:
      <Switch>
        <Route exact path="/">
          <div>home</div>
        </Route>
        <Route path="/about">
          <div>aboout</div>
        </Route>
        <Route exact path="/reminders/:itemId">
          <Dashboard />
        </Route>
        <Route path="/reminders">
          <div>reminder list</div>
        </Route>
        <Route>
          <div>nope</div>
        </Route>
      </Switch>
    </>
  );
}
