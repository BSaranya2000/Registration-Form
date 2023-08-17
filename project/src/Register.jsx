import React, { useState } from "react";
import './Reg.css';
const Reg = () => {
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirPassword] = useState("");
  // const [Gender,setGender] =useState("");
  const [message, setmessage] = useState("");
  const onRegister = () => {
    console.log("Regsiter");
    if (
      Name === "B.Saranya" &&
      PhoneNumber === "1234567890" &&
      Email === "saranya000@gmail.com" &&
      Password === "12345678" &&
      ConfirmPassword === "12345678"
    ) {
      console.log("Regsiter Sucess");
      setmessage("Regsiter Sucess");
    } else {
      setmessage("Register Failure");
    }
  };
  return (
    <div className="container">
      <div className="heading">Regsitration</div>
      <form action="#">
        <div className="Input-details">
          <div className="Input-box">
            <label className="textlable" for="Name">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="Input-box">
            <label className="textlable" for="Phone">
              PhoneNumber
            </label>
            <input
              type="Phone"
              placeholder="PhoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="Input-box">
            <label className="textlable" for="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Input-box">
            <label className="textlable" for="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="Input-box">
            <label className="textlable" for="password">
              ConfirmPassword
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="btn">
          <label for="" />
          <button onClick={() => onRegister()} type="submit">
            Register
          </button>
        </div>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
};

export default Reg;
 