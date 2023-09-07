import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ServiceUserBox = ({ serviceUser }) => {
  console.log(serviceUser, "sUUU");
  const history = useHistory();

  const go = () => {
    history.push(`/serviceuserscreen/${serviceUser._id}`);
  };
  return (
    // <Link to={`/serviceuserscreen/${serviceUser._id}`}>
    <div onClick={go}>
      <div>{serviceUser.name} </div>
      <div>{serviceUser.address} </div>
      <div>{serviceUser.company.name} </div>
    </div>
    // </Link>
  );
};

export default ServiceUserBox;
