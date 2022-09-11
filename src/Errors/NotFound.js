import warning from "../warning.png";
import e404 from "../404.png";
import {Link} from "react-router-dom";
const NotFound =()=>{
    return (
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <img
            src={warning}
            style={{ width: "70px", marginRight: "15px" }}
            alt="error"
          ></img>
          {"     "}
          <img src={e404} style={{ width: "70px" }} alt="404"></img>
          <h1 style={{ marginTop: "20px" }}>Sorry</h1>
          <p>This page cannot be found</p>
          <Link to="/"> Back to the Homepage...</Link>
        </div>
      </div>
    );
}
export default NotFound;