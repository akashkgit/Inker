
import React from "react"
import "./typewriter.css"
const aud=require("./typing.mp3")
export function Typewriter(){
    
    const a=new Audio(aud);
    a.play();
    return <>
    <p id="twriter">Welcome to Inker !! </p>
    
    </>
    
} 