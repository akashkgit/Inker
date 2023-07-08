import React from 'react'
import "./app.css";
import { useState } from 'react';
export function App() {
    const [style, setStyle] = useState("styleSelector")

    
    
    return <div className='top' ><div className="app">

        {/* grid one */}
        <div className='flex'>
        <div className='flex2i'>
                <select className='clear' name="style" id="style" value={style} onChange={(val) => {setStyle((val.target as HTMLSelectElement).value)}}>
                    <option value="styleSelector" selected >Inker Style</option>
                    <option value="underline" >underline It</option>
                    <option value="box" >Box it</option>
                </select>

            </div>
            <div className='flex2i'>
                <select name="boxStyle" id="boxStyle">
                    <option value="dotted" selected >Dotted</option>
                    <option value="inset" style={{ display: (style === "box") ? "block" : "none" }}>Inset</option>
                    <option value="dashed" >Dashed</option>
                    <option value="groove" style={{ display: (style === "box") ? "block" : "none" }}>Groove</option>
                    <option value="double" style={{ display: (style === "box") ? "block" : "none" }} >Double</option>
                </select>
            </div>
            
            <div className="flex2i">
                <input type="color" id="colorPicker"/>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <label className="below" htmlFor='colorPicker'>Color</label>
            </div>

            

        </div>

        {/* grid two  */}

        <div className='flex2'>

            <div className='flex2i'>
                <input type="radio" value="sNE" /><span>&nbsp;&nbsp;&nbsp;</span><label htmlFor='sNE'>Start & End</label>
            </div>
            <div className='flex2i' >
                <input type="radio" value="full" /><span>&nbsp;&nbsp;&nbsp;</span><label htmlFor='fulll'>Full</label>

            </div>
            <div className='flex2i' >
            <input type="checkbox" id="sync" checked /><span>&nbsp;&nbsp;&nbsp;</span><label htmlFor="sync">Sync</label>
            </div>
           
        </div>
        
           
            
        

    </div>
    
    <input type="range" id="thickness" />
    <label htmlFor='thickness' className='thickness'>Thickness</label>
    
    </div>

}