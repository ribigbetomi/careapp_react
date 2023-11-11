import axios from "axios";
import React, { useEffect, useState } from "react";
import UserBox from "./userBox";
import { Link } from "react-router-dom";

export default function ServiceUsers() {
  const [serviceUsers, setServiceUsers] = useState([]);
  console.log(serviceUsers, "sU");

  useEffect(() => {
    async function getServiceUsers() {
      const { data } = await axios.get("http://localhost:5000/api/serviceUser");
      setServiceUsers(data);
    }
    getServiceUsers();
  }, []);

  const createNewServiceUser = async () => {
    const config = {
      headers: {
        // Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/serviceUser",
      config,
      {}
    );
    return data;
  };
  return (
    <div>
      <div>Service Users</div>
      {/* <div> */}
      {serviceUsers ? (
        <>
          {serviceUsers.map((user, i) => (
            <Link to={`/serviceuserscreen/${user._id}`}>
              <UserBox key={i} serviceUser={user} />
            </Link>
          ))}
        </>
      ) : (
        <div>Loading</div>
      )}
      {/* </div> */}
      <button onClick={() => createNewServiceUser()}>
        Create New Service User
      </button>
    </div>
  );
}
