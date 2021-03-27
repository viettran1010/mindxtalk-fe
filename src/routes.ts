import React from 'react';
import { routeConstants } from '../src/constants/index';
const ReactLazyPreload = (importStatement: any) => {
  const Component: any = React.lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};
const Homepage = ReactLazyPreload(() => import('../src/containers/Homepage'));
const LoginPage = ReactLazyPreload(() => import('../src/containers/Login'));
const LandingPage = ReactLazyPreload(
  () => import('../src/containers/LandingPage'),
);
const routes = {
  landing: {
    path: '/',
    exact: true,
    component: LandingPage,
  },
  home: { path: routeConstants.HOME_PAGE, exact: true, component: Homepage },
  login: {
    path: routeConstants.ROUTE_LOGIN,
    exact: true,
    component: LoginPage,
  },
};
export default routes;
