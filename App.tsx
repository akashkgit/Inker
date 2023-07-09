import React, { ChangeEvent } from 'react'
import "./app.css";
import { useState, useEffect } from 'react';
import { initSync, syncHandler, uControlsHandler } from "./helper1";

export function App() {
    
    const [controls, setControls] = useState({ "style": "styleSelector", "lineStyle": "lineStyle", "colorPicker": "black", "sNe":false ,"sync":true,"thickness":1 })
    
    
    // --------initialises sync variable to 
    //---------allow user to choose whether to syn or not 
    initSync(controls,setControls);



    // --------- onchange handlers --------------
   
    let uControlsBasicHandler = (ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        
        uControlsHandler(ev,setControls,controls,typeof controls);
    }
    console.log("re rednering")
    //onChange={(val) => {setStyle((val.target as HTMLSelectElement).value)}}

    return <div className='top' ><div className="app">

        {/* grid one */}
        <div className='flex'>
            <div className='flex2i'>
                <select onChange={uControlsBasicHandler} value={controls.style} className='clear' name="style" id="style"  >
                    <option value="styleSelector" >Inker Style</option>
                    <option value="underline" >underline It</option>
                    <option value="box" >Box it</option>
                </select>

            </div>
            <div className='flex2i'>
                <select value={controls.lineStyle} onChange={uControlsBasicHandler} name="lineStyle" id="lineStyle">
                    <option value="lineStyle" >lineStyle</option>
                    <option value="dotted"  >Dotted</option>
                    <option value="inset" style={{ display: (controls.style === "box") ? "block" : "none" }}>Inset</option>
                    <option value="dashed" >Dashed</option>
                    <option value="groove" style={{ display: (controls.style === "box") ? "block" : "none" }}>Groove</option>
                    <option value="double" style={{ display: (controls.style === "box") ? "block" : "none" }} >Double</option>
                </select>
            </div>

            <div className="flex2i">
                <input value={controls.colorPicker} onChange={uControlsBasicHandler} type="color" id="colorPicker" />
                <span>&nbsp;&nbsp;&nbsp;</span>
                <label className="below" htmlFor='colorPicker'>Color</label>
            </div>



        </div>

        {/* grid two  */}


        <div className='flex2'>
            <div className='flex2i' >
                <input type="checkbox"  checked={controls.sNe} id="sNe"  onChange={uControlsBasicHandler} /><span>&nbsp;&nbsp;&nbsp;</span><label htmlFor="sNe">Inker start and End only</label>
            </div>

            <div className='flex2i' >
                <input type="checkbox" checked={controls.sync} id="sync"  onChange={uControlsBasicHandler}/><span>&nbsp;&nbsp;&nbsp;</span><label htmlFor="sync">Sync</label>
            </div>
            <div className='flex2i'>
                <input value={controls.thickness} type="range" onChange={uControlsBasicHandler} id="thickness" />
                <label htmlFor='thickness' className='thickness'>Thickness</label>
            </div>
        </div>





    </div>



    </div>

}