import ban from "../ban.png";

import { Link } from "react-router-dom";
const AccessDenied = () => {
  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "red" }}>
          <img
            src={ban}
            style={{ width: "70px", marginRight: "15px", marginBottom: "10px" }}
            alt="error"
          ></img>
          {"     "}Access Denied
        </h1>
        <p>You are not authorized to access this page</p>
        <Link to="/"> Back to the Homepage...</Link>
      </div>
    </div>
  );
};
export default AccessDenied;
