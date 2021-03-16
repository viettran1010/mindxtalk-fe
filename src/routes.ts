import React from 'react';
import { routeConstants } from '../src/constants/index';
const ReactLazyPreload = (importStatement: any) => {
  const Component: any = React.lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};
const Homepage = ReactLazyPreload(() => import('../src/containers/Homepage'));
const LoginPage = ReactLazyPreload(() => import('../src/containers/Login'));
const routes = {
  home: { path: '/', exact: true, component: Homepage },
  login: {
    path: routeConstants.ROUTE_LOGIN,
    exact: true,
    component: LoginPage,
  },
};
export default routes;
