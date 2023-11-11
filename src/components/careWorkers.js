import React from "react";

import UserBox from "./userBox";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function CareWorkers() {
  const [careWorkers, setCareWorkers] = useState([]);
  console.log(careWorkers, "sU");

  // useEffect(() => {
  //   async function getCareWorkers() {
  //     const { data } = await axios.get("http://localhost:5000/api/careWorker");
  //     setCareWorkers(data);
  //   }
  //   getCareWorkers();
  // }, []);

  const createNewCareWorker = async () => {
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
      <div>CareWorkers</div>
      {/* <div> */}
      {careWorkers ? (
        <>
          {careWorkers.map((user, i) => (
            <UserBox key={i} careWorker={user} />
          ))}
        </>
      ) : (
        <div>Loading</div>
      )}
      {/* </div> */}
      <button onClick={() => createNewCareWorker()}>
        Create New Service User
      </button>
    </div>
  );
}
