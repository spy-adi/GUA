import React, { useState, useEffect } from "react";
import {useSpring, animated} from "react-spring";
import { useDrag } from "react-use-gesture";
import "../styles.css";

const Form2 = () => {
    const [i1,setI1] = useState();
    const [i2,setI2] = useState();
    const [i3,setI3] = useState();
    const [i4,setI4] = useState();

    //drag n drop
    const posI1 = useSpring({x:0, y:0});

    const bindPosI1 = useDrag((params)=>{
        posI1.x.set(params.offset[0]);
        posI1.x.set(params.offset[1]);
    });
    

    //setting image url
    useEffect(() => {
        const t1 = JSON.parse(localStorage.getItem('i1'));
        setI1(t1);
        const t2 = JSON.parse(localStorage.getItem('i1'));
        setI2(t2);
        const t3 = JSON.parse(localStorage.getItem('i1'));
        setI3(t3);
        const t4 = JSON.parse(localStorage.getItem('i1'));
        setI4(t4);
    },[]);


    return (
        <>
            <h1 style={{textAlign:'center'}}>Level 2 Authentication</h1>
            <div>

            <animated.div  {...bindPosI1()}     style={{x:posI1.x, y:posI1.y}}>
                        <img src={i1} alt="I1" />
                    </animated.div>
            <div className="container" style={{textAlign:'center'}}>
                <div className="row">
                    <div
                    className="col-4 border border-2"
                 >
                 <animated.div  {...bindPosI1()}     style={{x:posI1.x, y:posI1.y}}>
                        <img src={i1} alt="I1" />
                    </animated.div>
                    </div>
                     <div className="col-4 border border-2">
                      
                    </div>
                     <div className="col-4 border border-2">
                     
                    </div>
                </div>

                
                <div className="row">
                     <div className="col-4 border border-2">
                     
                    </div>
                     <div className="col-4 border border-2">
                     
                    </div>
                     <div className="col-4 border border-2">
                     
                    </div>
                </div>


                
                <div className="row">
                     <div className="col-4 border border-2">
                     
                    </div>
                     <div className="col-4 border border-2">
                     
                    </div>
                     <div className="col-4 border border-2">
                     
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Form2;