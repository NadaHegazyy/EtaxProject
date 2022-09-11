import React from "react";
import styles from "./Profile.module.css";
import Pdf from "react-to-pdf";
import jsPDF from "jspdf";
import image from "../Group 30.png";
import { useNavigate } from "react-router-dom";
//import { FaFacebook } from "react-icons/fa";
//import { BsFillArrowRightCircleFill } from "react-icons/bs";
//import { renderToString } from 'react-dom/server';
const ref = React.createRef();


// const colstyle = {
//   width: "30%",
// };
// const tableStyle = {
//   width: "100%",
// };

// const Prints = () => (
//   <div style={stylesnew} className="text-center" ref={ref}>
//     <h1 className="form-style-2-heading">User Information</h1>
//     <div className="row justify-content-center">
//       <div className="col-md-6">
//         <div className={`${styles["content-data"]} mb-4`}>
//           <h3 className={styles.title}>User Name: </h3>

//         </div>
//       </div>
//       <div className="col-md-6">
//         <div className={`${styles["content-data"]} mb-4`}>
//           <h3 className={styles.title}>Email Address: </h3>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <div className={`${styles["content-data"]} mb-4`}>
//           <h3 className={styles.title}>Mobile Phone: </h3>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <div className={`${styles["content-data"]} mb-4`}>
//           <h3 className={styles.title}>Egyptian National ID: </h3>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const string= renderToString(<Prints />);
const print = () => {
  var doc = new jsPDF("p", "pt", "A4");
  doc.html(document.getElementById("divid"), {
    callback: function (doc) {
      doc.save("UserInfo");
    },
    x: 20,
    y: 20,
  });
  // const string = renderToString(<Prints />);
  // const pdf = new jsPDF("l", "mm", "a4");

  // console.log(typeof pdf);
  // pdf.fromHTML(string);
  // pdf.save("pdf");
};

const Profile = ({ data}) => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  // const jsPdfGenerator=()=>{
  //   const string = renderToString(<Registration />);
  //   const pdf = new jsPDF('l', 'mm', 'a4');

  //   pdf.html(string);
  //    pdf.save('UserInfo.pdf');
  //     let doc=new jsPDF({
  //       orientation: 'l',
  //       unit: 'px',
  //       format: 'a4',
  //       putOnlyUsedFonts:true
  //      });
  //      doc.setFontSize(23)
  //      doc.setTextColor('#3b04b9')
  //      doc.setFont("16 px Arial, Helvetica, sans-serif","bold")
  //      const text = "User Information",
  //      xOffset = (doc.internal.pageSize.width / 2)- (doc.getStringUnitWidth(text) * doc.internal.getFontSize() / 2);
  //     doc.text(text, xOffset+30, 80);
  //     doc.setFontSize(14)
  //     doc.text('Username: ',xOffset-100,120);
  //     //doc.save("UserInfo.pdf");
  // }
  return (
    <div className="row" ref={ref} id="divid">
      <div className="col md-6">
        <div className={styles.details}>
          <h3 className={styles.titlespan}>
            Welcome Back
            <span className={styles.title}>{data.username} </span>
          </h3>
          <div>
            <div className="mt-5 mb-3">
              <input
                type="email"
                className={styles.forminput}
                value={data.email}
                disabled
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className={styles.forminput}
                value={data.password}
                disabled
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className={styles.forminput}
                value={data.mobile}
                disabled
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                className={styles.forminput}
                value={data.id}
                disabled
              />
            </div>
          </div>
          <button onClick={logout} className={styles.btnsubmit}>
            Logout
          </button>
          <hr />
          <Pdf
            targetRef={ref}
            filename="UserInformation.pdf"
            className="text-center"
            orientation="landscape"
            x={10}
            y={10}
            scale={1.0}
          >
            {({ toPdf }) => (
              <button
                style={{
                  width: "185px",
                  marginTop: "20px",
                  fontSize: "15px",
                }}
                className={styles.btnpdf}
                onClick={toPdf}
              >
                Save As PDF
              </button>
            )}
          </Pdf>
          {"            "}
          <button
            style={{
              width: "185px",
              marginTop: "20px",
              fontSize: "15px",
              marginLeft: "50px",
            }}
            className={styles.btnpdf}
            onClick={print}
          >
            Generate PDF
          </button>
        </div>
      </div>
      <div className="col md-6">
        <img
          src={image}
          style={{ width: "100%", height: "100vh" }}
          alt="hello"
        />
      </div>
    </div>
  );
  /*<>
      <div id="divid" style={stylesnew} className="card" ref={ref}>
        <img
          src={abouticon}
          style={{ height: "100%", width: "125px", margin: "0 auto" }}
          alt="..."
        ></img>
        <div className="card-body">
          <h2
            style={{ color: "#3b04b9", fontWeight: "bold" }}
            className="card-title"
          >
            User Information
          </h2>
        </div>
        <ul class="list-group list-group-flush">
          <li className="list-group-item">
            <div className={`${styles["content-data"]}`}>
              <img
                src={imageIcon}
                style={{
                  width: "20px",
                  marginRight: "6px",
                  marginBottom: "1px",
                }}
                alt="icon-img"
              />{" "}
              <h3 className={styles.title}>User Name: </h3>
              <p className={styles.p}>{data.username}</p>
            </div>
          </li>
          <li className="list-group-item">
            <div className={`${styles["content-data"]}`}>
              <img
                src={emailicon}
                style={{
                  width: "25px",
                  marginBottom: "5px",
                  marginRight: "5px",
                  marginLeft: "-4px",
                }}
                alt="icon-img"
              />{" "}
              <h3 className={styles.title}>Email Address: </h3>
              <p className={styles.p}>{data.email}</p>
            </div>
          </li>
          <li className="list-group-item">
            <div className={`${styles["content-data"]}`}>
              <img
                src={mobileicon}
                style={{
                  width: "20px",
                  marginRight: "5px",
                  marginBottom: "6px",
                }}
                alt="icon-img"
              />{" "}
              <h3 className={styles.title}>Mobile Phone: </h3>
              <p className={styles.p}>{data.mobile}</p>
            </div>
          </li>
          <li className="list-group-item">
            <div className={`${styles["content-data"]}`}>
              <img
                src={usericon}
                style={{ width: "25px", marginBottom: "6px" }}
                alt="icon-img"
              />{" "}
              <h3 className={styles.title}>Egyptian National ID: </h3>
              <p className={styles.p}>{data.id}</p>
            </div>
          </li>
        </ul>
      </div>

      <div
        style={{ textAlign: "center", width: "400px" }}
        className="card-body"
      >
        <Pdf
          targetRef={ref}
          filename="UserInformation.pdf"
          className="text-center"
          x={10}
          y={10}
          scale={1.0}
        >
          {({ toPdf }) => (
            <button
              style={{
                width: "150px",
                marginTop: "10px",
                fontSize: "20px",
                backgroundColor: "#3b04b9",
                borderColor: "#3b04b9",
              }}
              className="btn btn-primary"
              onClick={toPdf}
            >
              Save As PDF
            </button>
          )}
        </Pdf>
        {"            "}
        <button
          style={{
            width: "150px",
            marginTop: "10px",
            fontSize: "20px",
            backgroundColor: "#3b04b9",
            borderColor: "#3b04b9",
          }}
          className="btn btn-primary"
          onClick={print}
        >
          Generate PDF
        </button>
        <br />
        <button
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "20px",
            backgroundColor: "#3b04b9",
            borderColor: "#3b04b9",
          }}
          className="btn btn-primary"
          onClick={logout}
        >
          Log Out
        </button>
      </div>
    </>*/
};
export default Profile;
