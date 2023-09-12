import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ServiceUsers from "./components/serviceUsers";
import HomeScreen from "./screens/HomeScreen";
import ServiceUserScreen from "./screens/ServiceUserScreen";
import CareWorkerScreen from "./screens/CareWorkerScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/serviceuserscreen/:id" component={ServiceUserScreen} />
        <Route path="/careworkerscreen/:userid" component={CareWorkerScreen} />
      </Switch>
    </Router>
  );
}

export default App;
