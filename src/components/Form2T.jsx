import React, { useState, useEffect,useRef} from "react";
import {useSpring, animated} from "react-spring";
import { useDrag } from "react-use-gesture";
import $ from 'jquery';
import "../styles.css";


const Form2 = () => {
    const [i1,setI1] = useState();
    const [i2,setI2] = useState();
    const [i3,setI3] = useState();
    const [i4,setI4] = useState();
    const useRefI1 = useRef();

    //value 
    const val = ['0','0','0','0'];

    //drag n drop
    const posI1 = useSpring({x:0, y:0});
    const posI2 = useSpring({x:0, y:0});
    const posI3 = useSpring({x:0, y:0});
    const posI4 = useSpring({x:0, y:0});

    const bindPosI1 = useDrag((params)=>{
        posI1.x.set(params.offset[0]);
        posI1.y.set(params.offset[1]);
        // console.log(posI1.x);
        console.log($("#i1").display.style);
        if ($("#D1").has("img")) {
            console.log("Present in 1");
        }

        
        if ($("#D2").has("img")) {
            console.log("Present in 1");
        }

    });

    
    const bindPosI2 = useDrag((params)=>{
        posI2.x.set(params.offset[0]);
        posI2.y.set(params.offset[1]);
        console.log(posI2);
    });

    
    const bindPosI3 = useDrag((params)=>{
        posI3.x.set(params.offset[0]);
        posI3.y.set(params.offset[1]);
        console.log(posI3);
    });

    
    const bindPosI4 = useDrag((params)=>{
        posI4.x.set(params.offset[0]);
        posI4.y.set(params.offset[1]);
        console.log(posI4);
    });
    

    //setting image url
    useEffect(() => {
        const t1 = JSON.parse(localStorage.getItem('i1'));
        setI1(t1);
        const t2 = JSON.parse(localStorage.getItem('i2'));
        setI2(t2);
        const t3 = JSON.parse(localStorage.getItem('i3'));
        setI3(t3);
        const t4 = JSON.parse(localStorage.getItem('i4'));
        setI4(t4);
    },[]);

    return (
        <>
            <h1 style={{textAlign:'center'}}>Level 2 Authentication</h1>
            <div>
            <div className="container" style={{textAlign:'center'}}>
                <div className="row">
                    <div className="col-4 border border-2" id="D1">
                        <animated.div {...bindPosI1()}  className="parent"   style={{x:posI1.x, y:posI1.y, touchAction:'none'}}>
                        <img src={i1} alt="I1" id="i1" />
                        </animated.div>
                    </div>
                     <div className="col-4 border border-2" id="D2">
                      
                    </div>
                     <div className="col-4 border border-2">
                     
                     <animated.div {...bindPosI2()}   className="parent"  style={{x:posI2.x, y:posI2.y, touchAction:'none'}}>
                            <img src={i2} alt="I2" id="i2"/>
                        </animated.div>
                    </div>
                </div>

                
                <div className="row">
                     <div className="col-4 border border-2">
                     
                     <animated.div {...bindPosI3()} className="parent"   style={{x:posI3.x, y:posI3.y, touchAction:'none'}}>
                            <img src={i3} alt="I3" id="i3"/>
                        </animated.div>
                    </div>
                     <div className="col-4 border border-2">
                     
                    </div>
                     <div className="col-4 border border-2">
                     
                     <animated.div {...bindPosI4()}    className="parent"    style={{x:posI4.x, y:posI4.y, touchAction:'none'}}>
                            <img src={i4} alt="I4" id="i4"/>
                        </animated.div>
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

            <div style={{textAlign:'center', margin:'10px'}}>
            <button type="button" class="btn btn-primary">Submit</button>
            </div>
            </div>
        </>
    );
};

export default Form2;