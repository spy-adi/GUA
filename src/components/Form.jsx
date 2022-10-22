import React, { useState } from "react";
import "../styles.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState(0);
  const [colorbox,setColorActive] = useState(true);
  const [login,setlogin] = useState(true);

  //Validity
  const checkValid = () =>{
    if(username.length < 5) return false;
    if(password < 111 ) return false;
    return true;
  }

  //COLOR CHANGE
  const handleColorChange = (val) => {
    var p = password*10+val;
    setpassword(p);
    if((p>=111 && p <=321)) setColorActive(false);
  };
  console.log(password);

  //form submission
  const submit = () => {
    const pass = 123;
    if(pass == password) alert("YO");
  }

  //LOGIN 
  const loginButton = () => {
    return login?
    <div>
    <button type="submit"  onSubmit={submit} className={`btn btn-primary w-100 ${checkValid()?"":"disabled"}`} >
Submit
</button>
      <p
      style={{ fontSize: "10px", cursor: "pointer" }}
      onClick={(e) => setlogin(false)}
    >
      Create a new Account!
    </p>
    </div>
:  <div>  <button type="submit" className={`btn btn-primary w-100 ${checkValid()?"":"disabled"}`}>
Register
</button>
<p
        style={{ fontSize: "10px", cursor: "pointer" }}
        onClick={(e) => setlogin(true)}
      >
        SignIn
      </p>
      </div>

  }

  //red button
  const red = () =>{
      if(colorbox) {
        handleColorChange(1)
      }
  }

  //red button
  const blue = () =>{
    if(colorbox) {
      handleColorChange(2)
    }
  }
  
  //red button
  const green = () =>{
    if(colorbox) {
      handleColorChange(3)
    }
  }



  return (
    <div className="mx-auto text-center py-3 px-3 border border-dark">
      <div className="mb-3">
        <label >
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) =>setUsername(e.target.value)}
        />
      </div>
      <div className="d-flex flex-row justify-content-between my-4">
        <div
          className="bg-danger circle"
          onClick={red}
        ></div>
        <div
          className="bg-primary circle"
          onClick={blue}
        ></div>
        <div
          className="bg-success circle"
          onClick={green}
        ></div>
      </div>
      {loginButton()}
    </div>
  );
};
export default Form;
