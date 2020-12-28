import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, Link } from "react-router-dom";

const getComponent = (name) => {
  const Comp = lazy(() => import(`./${name}`));

  return (props) => <Comp {...props} />;
};

function Home() {
  return (
    <div>
      <Link to="/box">Box</Link>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/box" component={getComponent("Box")} />
        </Switch>
      </Suspense>
    );
  }
}
export default App;
