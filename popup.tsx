import { createRoot } from 'react-dom/client'
import {App} from './App';
import React from 'react'

let root=createRoot(document.querySelector("body"));
root.render(<><App /></>)
