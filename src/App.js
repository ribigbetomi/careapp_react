import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ServiceUsers from "./components/serviceUsers";
import HomeScreen from "./screens/HomeScreen";
import ServiceUserScreen from "./screens/ServiceUserScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/serviceuserscreen/:id" component={ServiceUserScreen} />
      </Switch>
    </Router>
  );
}

export default App;
