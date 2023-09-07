import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ServiceUserScreen({ match }) {
  const serviceUserId = match.params.id;
  console.log(serviceUserId, "suID");
  const [serviceUser, setServiceUser] = useState({});
  console.log(serviceUser, "suser");

  useEffect(() => {
    async function getServiceUser() {
      const { data } = await axios.get(
        `http://localhost:5000/api/serviceUser/${serviceUserId}`
      );
      setServiceUser(data);
    }
    getServiceUser();
  }, [serviceUserId]);

  return (
    <div>
      {serviceUser ? (
        <>
          <div>{serviceUser.name}</div>
          <div>{serviceUser.address}</div>
          <div>{serviceUser.entryNote}</div>
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
