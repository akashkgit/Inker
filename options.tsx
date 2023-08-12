import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import "./options.css";
import { Typewriter } from "./typewriter";
function Options(){


    return <>
    <div className="optionsBody">
    <Typewriter />
    
    </div>
    </>

}

let root=createRoot(document.querySelector("body"))
root.render(<><Options  /></>)