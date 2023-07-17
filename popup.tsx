import { createRoot } from 'react-dom/client'
import {App} from './App';
import React, { useState } from 'react'
import { createContext } from 'react';
import "./popup.css";
 export let app=createContext({})
 export let docs=createContext({})
 export let selection=createContext({})



function Test(){
    async function changer(ev:any){
        let a=10;
        console.log(ev.target.value)
        await chrome.storage.sync.get("sync")
        console.log(ev.target.value)
        setVal(ev.target.value);
    }
    let [val,setVal]=useState("one");
    return <>
    <select value={val} onChange={changer}>
        <option value="one">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    </>
}

let root=createRoot(document.querySelector("body"));
root.render(<><App /></>)
