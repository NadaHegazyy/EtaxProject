import React, { useState, useEffect } from "react";
import { Routes, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Profile from "./Profile/Profile";
import RegistrationForm from "./Registration/Registration";
import NotFound from "./Errors/NotFound";
import AccessDenied from "./Errors/AccessDenied";
const App = () => {
  //const [defaultcomp, setDefaultcomp] = useState("RegistrationForm");
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
    mobile: "",
    id: "",
  });
  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(data));
  // }, [data]);
  // useEffect(() => {
  //   localStorage.setItem("login", JSON.stringify(login));
  // }, [login]);
  // useEffect(() => {
  //   const loggedin = JSON.parse(localStorage.getItem("login"));
  //   if (login) {
  //     setLogin(loggedin);
  //   }
  // }, []);

  // const changeComponent = (name) => {
  //   setDefaultcomp(name);
  // };
  const getValid = (valid) => {
    setLogin(valid);
  };

  return (
    /*  {defaultcomp ==='RegistrationForm' ?
    <RegistrationForm setData={setData}  changeComponent={changeComponent}/>
     :
     <Profile data={data}  changeComponent={changeComponent}/>
      }*/

    <Routes>
      <Route
        path="/"
        element={<RegistrationForm setData={setData} validity={getValid} />}
      />

      <Route
        path="/profile"
        element=
        {login ? <Profile data={data} /> : <AccessDenied />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
    // <Router>
      
    //     <Switc>
    //       <Route
    //         path="/"
    //         element={<RegistrationForm setData={setData} validity={getValid} />}
    //       />
    //       <Route
    //         path="/profile"
    //         element={login ? <Profile data={data} /> : <AccessDenied />}
    //       />
    //     </Switc
      
    // </Router>
  );
};

export default App;
