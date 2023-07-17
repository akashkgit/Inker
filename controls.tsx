import React, { ChangeEvent } from "react"
import { useState } from "react"
import { initSync } from "./helper1";
import { uControlsHandler } from "./helper1";
export function Controls(){

    
    const [controls, setControls] = useState({"lineStyle": "dotted", "colorPicker": "black","sync":true,"thickness":1 })

    initSync(controls,setControls);
    console.log(" re Rendered values ",controls)
    let uControlsBasicHandler = (ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        console.log(" checking 1",ev.target.id,ev.target.value)
        uControlsHandler(ev,setControls,controls,typeof controls);
    }
    return <><div>
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
    </>
}