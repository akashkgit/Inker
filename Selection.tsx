import React, { ChangeEvent, EventHandler, MouseEventHandler } from "react"
import { useState } from "react"
import "./selection.css"
import { Docs } from "./Docs";
export function  Selection(){
            function docOptionsHandler(ev:ChangeEvent<HTMLSelectElement>){
                setDocOption(ev.target.value);

            }           
            const [doc,setDoc]=useState("Not selected");
            const [docOption,setDocOption]=useState("currentDoc");
            let createDocWrapper=(ev:any)=>{
                createDoc(ev,setDoc);
            }
    return (<div id="Selection">
        <Docs />
        <div >
        <label htmlFor="currentDoc">Docs</label><br />
        <select value={docOption} onChange={docOptionsHandler}>
        <option value="currentDoc "id="currenvtDoc" >{doc}</option>
        <option value="newDoc" id="newDoc" >Use New Doc</option>
        <option value="oldDoc" id="oldDoc">Use Existing Doc</option>
        </select>
        </div>
        <div style={{display:docOption!=="currentDoc"?"block":"none"}}>
        <input type="text" id="selectDoc" placeholder={docOption==="newDoc"?"Name for new Doc":"Id of old Doc"}></input>
        </div>
        <div style={{display:docOption!=="currentDoc"?"block":"none"}}>
        <button id="createDocButton" onClick={createDocWrapper}>Use</button>
        </div>
        {/* <button id="expand" onClick={popup}>+</button> */}
        
        {/* <div id="createDoc">
        <input type="text" id="docName"/>
        <button id="createDocButton" onClick={createDocWrapper}>create Document</button>
        </div> */}


    </div>)
}
function popup(ev:any){
    alert()
     let popup=document.querySelector("#popup") as HTMLDivElement;//:not(body), :not(#Selection)");
    //  console.log(popup);
    //  for(let el of popup){
    //     (el as HTMLElement).style.opacity="0.1"
    //  }
    let container=document.querySelector("#container") as HTMLDivElement
    popup.style.display="block";
    container.style.zIndex="-1";
    container.style.opacity="0.5";
    }

export function Popup(){
    return <div id="popup"><p>hello</p></div>
}

function createDoc(ev:any,setDoc:any){
    console.log(" creating document");
    let name=(document.querySelector("#docName")as HTMLInputElement).value;
    console.log("name of the doc",name);
    let data=JSON.stringify({
        
            "title":name
        
    })

    chrome.identity.getAuthToken({interactive:true},(token)=>{
     
        let init:any={
        method:"POST",
        "async":true,
        body:data,
        headers:{
        Authorization: "Bearer "+token,
        "Content-Type":"Application/json",
        },
        "contentType":"json",
       
    };
    fetch("https://docs.googleapis.com/v1/documents",init).then(async (resp)=>{
        let jsonDets=await resp.json()
        let sync=true;
        let docsId=await chrome.storage.sync.get("docsId");
        if(docsId===undefined){docsId=await chrome.storage.local.get("docsId");sync=false;}
        if(sync)chrome.storage.sync.set({"docsId":jsonDets.documentId,"token":token})
        else chrome.storage.local.set({"docsId":jsonDets.documentId,"token":token})
        setDoc(jsonDets.title)


        
}
        )

});

}
function changeDoc(ev:any){

}