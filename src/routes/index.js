import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import TradeScreen from "../pages/TradeScreen";

import Navbar from "../components/shared/Navbar";

function Routes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={TradeScreen} />
      </Switch>
    </div>
  );
}

export default Routes;
