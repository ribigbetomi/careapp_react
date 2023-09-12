import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const UserBox = ({ serviceUser = {}, careWorker = {} }) => {
  console.log(serviceUser, "sUUU");
  // const history = useHistory();

  // const go = () => {
  //   history.push(`/serviceuserscreen/${serviceUser._id}`);
  // };
  return (
    <>
      {serviceUser && (
        <Link to={`/serviceuserscreen/${serviceUser._id}`}>
          {/* <div onClick={go}> */}
          <div>{serviceUser.name} </div>
          <div>{serviceUser.address} </div>
          <div>{serviceUser.company.name} </div>
          {/* </div> */}
        </Link>
      )}
      {careWorker && (
        <>
          <Link to={`/careworkerscreen/${careWorker.userID}`}>
            {/* <div onClick={go}> */}
            <div>{careWorker.name} </div>
            <div>{careWorker.email} </div>
            <div>{careWorker.phoneNumber} </div>
            <div>{careWorker.availability} </div>
            {/* </div> */}
          </Link>
        </>
      )}
    </>
  );
};

export default UserBox;
