import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ServiceUsers from "./components/serviceUsers";
import HomeScreen from "./screens/HomeScreen";
import ServiceUserScreen from "./screens/ServiceUserScreen";
import CareWorkerScreen from "./screens/CareWorkerScreen";

function App() {
  return (
    // <Router>
    // <div>
    <Routes>
      <Route exact index element={<HomeScreen />} />
      <Route path="/serviceuserscreen/:id" element={<ServiceUserScreen />} />
      <Route path="/careworkerscreen/:userid" element={<CareWorkerScreen />} />
    </Routes>
    // </div>
    // </Router>
  );
}

export default App;
