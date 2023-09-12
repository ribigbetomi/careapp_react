import axios from "axios";
import React, { useEffect, useState } from "react";

export default function EditCareWorkerScreen({ match, history }) {
  const careWorkerUserId = match.params.id;

  console.log(careWorkerUserId, "suID");
  const [careWorker, setCareWorker] = useState({});
  console.log(careWorker, "cW");

  const [name, setName] = useState(careWorker.name);
  const [email, setEmail] = useState(careWorker.email);
  const [withCompany, setWithCompany] = useState(careWorker.withCompany);
  const [availability, setAvailability] = useState(careWorker.availability);

  useEffect(() => {
    async function getCareWorker() {
      const { data } = await axios.get(
        `http://localhost:5000/api/careWorker/${careWorkerUserId}`
      );
      setCareWorker(data);
    }
    getCareWorker();
  }, [careWorkerUserId]);

  const updateInfo = async () => {
    const config = {
      authorization: "",
      "Content-Type": "application/json",
    };
    const { data } = await axios.put(
      `http://localhost:5000/api/caeWorker'/update/${careWorkerUserId}`,
      config,
      { name, email, withCompany, availability }
    );
    history.push(`/careworkerscreen/${careWorkerUserId}`);
  };

  return (
    <div>
      <input
        value={name}
        placeholder={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        placeholder={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={withCompany}
        placeholder={withCompany}
        onChange={(e) => setWithCompany(e.target.value)}
      />
      <input
        value={availability}
        placeholder={availability}
        onChange={(e) => setAvailability(e.target.value)}
      />
    </div>
  );
}
