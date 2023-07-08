import { createRoot } from 'react-dom/client'
import {App} from './App';
import React from 'react'
import "./popup.css";
let root=createRoot(document.querySelector("body"));
root.render(<><App /></>)
