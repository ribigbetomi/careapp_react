import React, { useState } from "react";

export default function EditCareWorkerScreen() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [withCompany, setWithCompany] = useState();
  return (
    <div>
      <input
        value={name}
        placeholder={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
