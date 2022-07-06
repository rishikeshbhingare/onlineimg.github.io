import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";


const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Search} />

      </Switch>
    </>
  )
}

export default App;