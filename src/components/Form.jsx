import React, { useState} from "react";
import "../styles.css";
import {sha256} from 'crypto-hash';
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState(0);
  const [login,setlogin] = useState(true);
  const [colors,setcolors] = useState([]);
  const navigate = useNavigate();
  
  
  
  //Validity
  const checkValid = () =>{
    if(username.length < 5) return false;
    if(colors.length < 4) return false;
    return true;
}

  //COLOR CHANGE
  const handleColorChange = (val) => {
    var p = password*10+val;
    setpassword(p);
  };

  //form submission
  const submit = async () => {
    let s  = colors[0] + colors[1] + colors[2];
    // check s
    var user = localStorage.getItem('username');
    var pass = localStorage.getItem('pass1');
    var res = await sha256(s);

    if(!user) alert('User not find');
    else{
      if(pass==res&&user==username) navigate("/v2");
      else alert("Incorrect username/password");
    }
    
  }

  const Register = async () => {
    let s  = colors[0] + colors[1] + colors[2];
    var res = await sha256(s);
    localStorage.setItem('username',username);
    localStorage.setItem("pass1",res);
    navigate("/v2/upload");
  }

  //LOGIN 
  const loginButton = () => {
    return login?
    <div>
    <button type="submit"  onClick={() => submit()} className={`btn btn-primary w-100 ${checkValid()?"":"disabled"}`} >
LogIn
</button>
      <p
      style={{ fontSize: "10px",marginTop:"8px", cursor: "pointer",textAlign:"right" }}
      onClick={(e) => setlogin(false)}
    >
      Create a new Account!
    </p>
    </div>
:  <div>  <button type="submit" onClick={Register} className={`btn btn-primary w-100 ${checkValid()?"":"disabled"}`}>
Register
</button>
<p
        style={{ fontSize: "10px", cursor: "pointer",textAlign:"right" }}
        onClick={(e) => setlogin(true)}
      >
        <p style={{fontSize:"10px",marginTop:"8px"}}>SignIn</p>
      </p>
      </div>

  }

  //red button
  const red = () =>{
      if(colors.length < 4) {
        colors.push("red");
        handleColorChange(1)
      }
  }

  //red button
  const blue = () =>{
    if(colors.length < 4) {
      colors.push("blue");
      handleColorChange(2)
    }
  }
  
  //red button
  const green = () =>{
    if(colors.length < 4) {
      colors.push("green");
      handleColorChange(3)
    }
  }
  const purple = () =>{
    if(colors.length <4) {
      colors.push("purple");
      handleColorChange(4)
    }
  }
  const getColor = 
    colors.map(c => (
      <div style={{width:"30px",height:"20px"}} className={`border border-black mw-100 mx-1 w-100 px-2 ${c == "red" ? "red":c == "blue"?"blue":c=="green"?"green":"bg-purple"}`}>
    
      </div>
    ));

  return (
    <div className="mx-auto text-center py-5 px-3 border border-dark">
      <div className="mb-3 d-flex justify-content-between">
        <label className="">
          Username
        </label>
        <input
          className="ml-2"
          style={{width:"70%"}}
          type="text"
          value={username}
          onChange={(e) =>setUsername(e.target.value)}
        />
      </div>
      <div className="d-flex flex-row justify-content-between my-4">
        <div
          className="bg-danger text-white circle d-flex flex-column justify-content-center"
          onClick={red}
        ></div>
        <div
          className="bg-primary text-white circle d-flex flex-column justify-content-center"
          onClick={blue}
        ></div>
        <div
          className="bg-success text-white circle d-flex flex-column justify-content-center"
          onClick={green}
        ></div>
                <div
          className="bg-purple text-white circle d-flex flex-column justify-content-center"
          onClick={purple}
        ></div>
      </div>
      {loginButton()}
      <div className="d-flex flex-row justify-content-between">
        <div className="border border-black text-black w-25 bg-danger" style={{borderRadius:"5px",cursor:"pointer"}} onClick={() => {setcolors(colors.slice(0,-1));}}>
          Delete
        </div>
        <div className="d-flex ">
        {/* <getColor /> */}
        {getColor}
        </div>
      </div>
    </div>
  );
};
export default Form;