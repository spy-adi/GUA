import React, { useState } from "react";
import "../styles.css";

const ImageUpload = () => {
    const [i1,setI1] = useState();
    const [i2,setI2] = useState();
    const [i3,setI3] = useState();
    const [i4,setI4] = useState();

    const handleChange1 =(e) =>{
        let temp =URL.createObjectURL(e.target.files[0]); 
        setI1(temp);
        localStorage.setItem("i1",JSON.stringify(temp));
    }
    
    const handleChange2 =(e) =>{
        let temp =URL.createObjectURL(e.target.files[0]);
        setI2(temp);
        localStorage.setItem("i2",JSON.stringify(temp));
    }

    const handleChange3 =(e) =>{
        let temp =URL.createObjectURL(e.target.files[0]);
        setI3(temp);
        localStorage.setItem("i3",JSON.stringify(temp));
    }
    
    const handleChange4 =(e) =>{
        let temp =URL.createObjectURL(e.target.files[0]);
        setI4(temp);
        localStorage.setItem("i4",JSON.stringify(temp));
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
        </>
    );
};

export default ImageUpload;