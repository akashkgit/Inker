import React, { ChangeEvent } from 'react'
import "./app.css";
import { useState, useEffect } from 'react';
import { initSync, syncHandler, uControlsHandler } from "./helper1";
import { Docs } from './Docs';
import { Popup, Selection } from './Selection';


export function App() {
    
    const [controls, setControls] = useState({"lineStyle": "dotted", "colorPicker": "black","sync":true,"thickness":1 })
    
    
    // --------initialises sync variable to 
    //---------allow user to choose whether to syn or not 
    initSync(controls,setControls);



    // --------- onchange handlers --------------
   
    let uControlsBasicHandler = (ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        
        uControlsHandler(ev,setControls,controls,typeof controls);
    }
    console.log("re rednering")
    //onChange={(val) => {setStyle((val.target as HTMLSelectElement).value)}}

    return<div id="container" className='container'>
    <div className="grid1">
            <div>
                <label htmlFor='lineStyle'>Inking Style</label><br/>
                <select value={controls.lineStyle} onChange={uControlsBasicHandler} name="lineStyle" id="lineStyle">
                    <option value="lineStyle" >lineStyle</option>
                    <option value="dotted"  >Dotted....</option>
                    <option value="dashed" >Dashed _ _ _</option> 
                    <option value="double" >Double</option>
                </select>
            </div>

            <div className="flex2i">
                <label className="below" htmlFor='colorPicker'>Color</label><br />
                <div style={{backgroundColor:controls.colorPicker,width:"30%",height:"40%"}} id="cpDiv"><input style={{width:"100%",height:"100%",opacity:0}} value={controls.colorPicker} onChange={uControlsBasicHandler} type="color" id="colorPicker" /></div>
                
                
            </div>
            <div className='flex2i' >
                <input type="checkbox" checked={controls.sync} id="sync"  onChange={uControlsBasicHandler}/><span>&nbsp;</span><label htmlFor="sync">Sync</label>
            </div>

            <div>
                <label htmlFor='thickness'>Weight</label> <br />
                <select value={controls.thickness} onChange={uControlsBasicHandler} id="thickness" >
                <option value ="1">1</option>
                <option value ="2">2</option>
                <option value ="3">3</option>
                <option value ="4">4</option>
                <option value ="5">5</option>

                </select>
                </div>
            
            </div>
            
            
       

        
        <Selection />
       
     
    </div>

}
