import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CareWorkerScreen({ match }) {
  const careWorkerUserId = match.params.userid;
  console.log(careWorkerUserId, "suID");
  const [careWorker, setCareWorker] = useState({});
  console.log(careWorker, "cW");

  useEffect(() => {
    async function getCareWorker() {
      const { data } = await axios.get(
        `http://localhost:5000/api/careWorker/${careWorkerUserId}`
      );
      setCareWorker(data);
    }
    getCareWorker();
  }, [careWorkerUserId]);

  return (
    <div>
      {careWorker ? (
        <>
          <div>{careWorker.name}</div>
          <div>{careWorker.address}</div>
          <div>{careWorker.entryNote}</div>
          <Link>Edit Care Worker Details</Link>
          {/* <div>
            {serviceUser.visitDays.map((day, i) => (
              <div>{day}</div>
            ))}
          </div> */}
        </>
      ) : (
        <>Loading</>
      )}
    </div>
  );
}
