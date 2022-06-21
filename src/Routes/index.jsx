import { Switch, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import MyProjects from "../Pages/MyProjects";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/sobre">
        <About />
      </Route>
      <Route exact path="/projetos">
        <MyProjects />
      </Route>
    </Switch>
  );
};

export default Routes;