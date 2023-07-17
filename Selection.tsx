import React, { ChangeEvent, EventHandler, MouseEventHandler, useEffect } from "react"
import { useState } from "react"
import "./selection.css"
import { Docs } from "./Docs";
import { DocsPreLoader } from "./helper1";
import {createDoc,useDoc} from "./selectionHelper";
export function  Selection({user}:any){

            
            function docOptionsHandler(ev:ChangeEvent<HTMLSelectElement>){
                setDocOption(ev.target.value);

            }           
            const [doc,setDoc]=useState({"title":"Not Selected","documentId":""});
            const [docOption,setDocOption]=useState("currentDoc");

            useEffect(()=>{
                chrome.storage.onChanged.addListener(async (changes, namespace) => {
            
                    console.log("secondary hanlder ",namespace," changed",changes);
                    let sync=await chrome.storage.sync.get("sync");
                    if(sync && namespace==="sync"){
                            if(changes.docs)setDoc(changes.docs.newValue)
                    }
                    else if(!sync && namespace==="local"){
                      if(changes.docs)setDoc(changes.docs.newValue)
                    }
                    
                    
                
                   
                    
                
                
                  });
            })
            useEffect(()=>{
                console.log(" secondary handler :changing the select value to ",doc.title)    
                setDocOption("currentDoc");
                
            },[doc])
            let createDocWrapper=(ev:any)=>{
                if(user=="Not signed in!"){
                    alert(" Login int google account")        
                    setDoc({"title":"Not Selected","documentId":""});
                }
                else{
                if(docOption==="newDoc")
                createDoc(ev,setDoc);
                else if(docOption==="oldDoc")
                useDoc(ev,setDoc)
                }
                 
            }
            useEffect(()=>{
            DocsPreLoader(doc,setDoc,user);
            },[]);

    return (<div id="Selection">
        
        <div >
        <label htmlFor="currentDoc">Docs</label><br />
        <select value={docOption} onChange={docOptionsHandler}>
        <option value="currentDoc "id="currentDoc" >{doc.title}</option>
        <option value="newDoc" id="newDoc" >Use New Doc</option>
        <option value="oldDoc" id="oldDoc">Use Existing Doc</option>
        </select>
        </div>
        <div style={{display:docOption!=="currentDoc"?"block":"none"}}>
        <input type="text" id="docName" placeholder={docOption==="newDoc"?"Name for new Doc":"Id of old Doc"}></input>
        </div>
        <div style={{display:docOption!=="currentDoc"?"block":"none"}}>
        <button id="createDocButton" onClick={createDocWrapper}>Use</button>
        </div>
    </div>)
}


