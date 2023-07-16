import { createRoot } from 'react-dom/client'
import {App} from './App';
import React from 'react'
import "./popup.css";
import { Popup } from './Selection';

    

let root=createRoot(document.querySelector("body"));
root.render(<><App /><Popup/></>)
