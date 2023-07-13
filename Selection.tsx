import React, { EventHandler, MouseEventHandler } from "react"
import { useState } from "react"
export function Selection(){
           
            const [doc,setDoc]=useState("Not selected");
            let createDocWrapper=(ev:any)=>{
                createDoc(ev,setDoc);
            }
    return (<div id="Selection">
        <label htmlFor="currentDoc">Selected Document</label>
        <p id="currenctDoc" onClick={changeDoc}>{doc}</p>
        <input type="text" id="selectDoc" placeholder="Enter DocId to use this Doc"></input>
        <button id="expand" >+</button>
        <div id="createDoc">
        <input type="text" id="docName"/>
        <button id="createDocButton" onClick={createDocWrapper}>create Document</button>
        </div>


    </div>)
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