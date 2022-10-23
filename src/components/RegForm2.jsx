import React, { useState, useEffect,useRef} from "react";
import {useSpring, animated} from "react-spring";
import { useDrag } from "react-use-gesture";
import $ from 'jquery';
import {sha256} from 'crypto-hash';
import "../styles.css";
import { useNavigate } from "react-router-dom";


const RegForm2 = () => {
    const [i1,setI1] = useState();
    const [i2,setI2] = useState();
    const [i3,setI3] = useState();
    const [i4,setI4] = useState();
    const navigate = useNavigate();

    //to get cordinates
    function getTransform(el) {
        var results = $(el).css('transform').match(/matrix(?:(3d)\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))(?:, (\d+)), \d+\)|\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))\))/)
        
        if(!results) return [0, 0, 0];
        if(results[1] == '3d') return results.slice(2,5);
    
        results.push(0);
        return results.slice(5, 8);
    }

    //to check div number
    function checkDiv(x,y){
        if(x>=0&&x<=165){
            if(y>=0&&y<=95) return '1';
            if(y>=200&&y<=295) return '4';
            if(y>=400&&y<=495) return '7';
        }

        if(x>=370&&x<=543){
            if(y>=0&&y<=95) return '2';
            if(y>=200&&y<=295) return '5';
            if(y>=400&&y<=495) return '8';
        }

        if(x>=748&&x<=923){
            if(y>=0&&y<=95) return '3';
            if(y>=200&&y<=295) return '6';
            if(y>=400&&y<=495) return '9';
        }

        return 0;
    }

    //value 
    const val = ['1','1','1','1'];

    //drag n drop
    const posI1 = useSpring({x:0, y:0});
    const posI2 = useSpring({x:0, y:0});
    const posI3 = useSpring({x:0, y:0});
    const posI4 = useSpring({x:0, y:0});

    const bindPosI1 = useDrag((params)=>{
        posI1.x.set(params.offset[0]);
        posI1.y.set(params.offset[1]);
        let cord = getTransform("#iD1");
        val[0] = checkDiv(cord[0],cord[1]);
    });

    
    const bindPosI2 = useDrag((params)=>{
        posI2.x.set(params.offset[0]);
        posI2.y.set(params.offset[1]);
        let cord = getTransform("#iD2");
        val[1] = checkDiv(cord[0],cord[1]);
    });

    
    const bindPosI3 = useDrag((params)=>{
        posI3.x.set(params.offset[0]);
        posI3.y.set(params.offset[1]);
        let cord = getTransform("#iD3");
        val[2] = checkDiv(cord[0],cord[1]);
    });

    
    const bindPosI4 = useDrag((params)=>{
        posI4.x.set(params.offset[0]);
        posI4.y.set(params.offset[1]);
        let cord = getTransform("#iD4");
        val[3] = checkDiv(cord[0],cord[1]);
    });

    //form submission
    const onSubmit = async () => {
        var num = val[3]+val[2]+val[1]+val[0];
        var res = await sha256(num);
        localStorage.setItem('pass2',res);
        navigate('/success');
    }
    

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
                    <div className="col-4 border border-2">
                        <animated.div {...bindPosI1()}  className="parent" id="iD1"  style={{position:'absolute', x:posI1.x, y:posI1.y, touchAction:'none'}}>
                        <img src={i1} alt="I1" id="i1" />
                        </animated.div>
                        
                     <animated.div {...bindPosI2()}   className="parent" id="iD2" style={{position:'absolute',x:posI2.x, y:posI2.y, touchAction:'none'}}>
                            <img src={i2} alt="I2" id="i2"/>
                        </animated.div>

                        
                     <animated.div {...bindPosI3()} className="parent"  id="iD3" style={{position:'absolute',x:posI3.x, y:posI3.y, touchAction:'none'}}>
                            <img src={i3} alt="I3" id="i3"/>
                        </animated.div>

                        
                     <animated.div {...bindPosI4()}    className="parent"  id="iD4"  style={{position:'absolute',x:posI4.x, y:posI4.y, touchAction:'none'}}>
                            <img src={i4} alt="I4" id="i4"/>
                        </animated.div>


                    </div>
                     <div className="col-4 border border-2" id="D2">
                      
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

            <div style={{textAlign:'center', margin:'10px'}}>
            <button type="submit" class="btn btn-primary" onClick={() => onSubmit()}>Submit</button>
            </div>
            </div>
        </>
    );
};

export default RegForm2;