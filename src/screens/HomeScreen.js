import React from "react";
import ServiceUsers from "../components/serviceUsers";
import CareWorkers from "../components/careWorkers";

export default function HomeScreen() {
  return (
    <div>
      <ServiceUsers />
      <CareWorkers />
    </div>
  );
}
