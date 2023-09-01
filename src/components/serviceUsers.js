import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ServiceUsers() {
  const [serviceUsers, setServiceUsers] = useState([]);

  useEffect(() => {
    async function getServiceUsers() {
      const result = await axios.get("http://localhost:5000/api/serviceUser");
      setServiceUsers(result);
    }
    getServiceUsers();
  }, []);
  return <div> Service</div>;
}
