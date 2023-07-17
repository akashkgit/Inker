import React, { ChangeEvent } from 'react'
import "./app.css";
import { useState, useEffect } from 'react';
import { initSync, syncHandler, uControlsHandler } from "./helper1";
import { Docs } from './Docs';
import { Selection } from './Selection';
import { Controls } from './controls';


export function App() {

    console.log("re rednering")


    return <div id="container" className='container'>
        <div className="grid1">
            <Controls />
        </div>
        <Docs />
    </div>

}
