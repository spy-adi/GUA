import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const ImageUpload = () => {
    const [i1,setI1] = useState();
    const [i2,setI2] = useState();
    const [i3,setI3] = useState();
    const [i4,setI4] = useState();
    const [b1,setB1] = useState(true);
    const [b2,setB2] = useState(true);
    const [b3,setB3] = useState(true);
    const [b4,setB4] = useState(true);
    const navigate = useNavigate();

    const handleChange1 =(e) =>{
        let temp =URL.createObjectURL(e.target.files[0]); 
        setI1(temp);
        setB1(false);
        localStorage.setItem("i1",JSON.stringify(temp));
    }
    
    const handleChange2 =(e) =>{
        let temp =URL.createObjectURL(e.target.files[0]);
        setI2(temp);
        setB2(false);
        localStorage.setItem("i2",JSON.stringify(temp));
    }

    const handleChange3 =(e) =>{
        let temp =URL.createObjectURL(e.target.files[0]);
        setI3(temp);
        setB3(false);
        localStorage.setItem("i3",JSON.stringify(temp));
    }
    
    const handleChange4 =(e) =>{
        let temp =URL.createObjectURL(e.target.files[0]);
        setI4(temp);
        setB4(false);
        localStorage.setItem("i4",JSON.stringify(temp));
    }

    
    //form submission
    const onSubmit = () => {
        navigate("/v2/reg");
    }

    return (
        <>
            <h1 style={{textAlign:'center'}}>Upload 4 images</h1>
            <div>
                <input type="file" onChange={handleChange1} />
                <img src={i1} />
            </div>

            <div>
                <input type="file" onChange={handleChange2} />
                <img src={i2} />
            </div>

            <div>
                <input type="file" onChange={handleChange3} />
                <img src={i3} />
            </div>

            <div>
                <input type="file" onChange={handleChange4} />
                <img src={i4} />
            </div>
            

            <div style={{textAlign:'center', margin:'10px'}}>
            <button type="submit" class="btn btn-primary" disabled={b1||b2||b3||b4} onClick={() => onSubmit()}>Submit</button>
            </div>
        </>
    );
};

export default ImageUpload;