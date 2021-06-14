import React, { Component } from "react";
import { Route } from "react-router-dom";

class RouteWrapper extends Component {
  render() {
    const { component: Component, ...rest } = this.props;

    return <Route {...rest} component={Component} />;
  }
}

export default (RouteWrapper);
