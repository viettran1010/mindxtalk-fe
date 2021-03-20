import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.scss';
import Header from './components/Header';
import routes from './routes';
export const browserHistory = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Header />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {Object.keys(routes).map((key) => (
              //@ts-ignore
              <Route key={routes[key].path} {...routes[key]} />
            ))}
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
