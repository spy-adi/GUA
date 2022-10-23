import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

const Succes = () => {
    const navigate = useNavigate();

    const b1 = () => {
        navigate("/");
    }

    const b2 = () => {
        localStorage.clear();
        b1();
    }

    return (
        <div>
            <h1>Successfully Logged in</h1>
            <div>
                <button type="button" className="btn btn-primary" onClick={b1}>
                    LOGOUT
                </button>
            </div>
            <div>
                <button type="button" className="btn btn-primary" onClick={b2}>
                    Delete the user
                </button>
            </div>
        </div>
    )
}

export default Succes;