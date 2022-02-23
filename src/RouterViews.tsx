import { Route, Switch } from "react-router-dom";

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
        <Route path="/:user">
          <div>user</div>
        </Route>
        <Route>
          <div>nope</div>
        </Route>
      </Switch>
    </>
  );
}
