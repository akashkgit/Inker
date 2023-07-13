import React, { ChangeEvent } from 'react'
import "./app.css";
import { useState, useEffect } from 'react';
import { initSync, syncHandler, uControlsHandler } from "./helper1";
import { auth } from './auth';
import { Selection } from './Selection';

export function Docs(){
    
    const [signedUser,setSignedUser]=useState(" Sign in");
    console.group("re rendering docs component !!!!!")
    useEffect(()=>{
      console.log(" loading identity");
     auth(signedUser,setSignedUser);


},[]);

    

    return < div className='Docs'>
    <label htmlFor='signedUser' style={{display:signedUser!==""?"block":"none"}}>Signedin  as</label>
    <button value={signedUser} onClick={(ev)=>auth(signedUser,setSignedUser,ev)} id="signedUser">{signedUser}</button>
    <button id="signOut" onClick={(ev)=>auth(signedUser,setSignedUser,ev)}  style={{display:signedUser!==""?"block":"none"}}>sign out</button>
    
    </div>
}



function button() {
   try{
     chrome.identity.getAuthToken({interactive: true}, function(token) {
      let secretToker=token;

      (chrome.identity.getProfileUserInfo((info)=>console.log("userinfo ",info)))
      let body={
          "requests": [
            {
              "insertText": {
                "text": "hello from inker rest endpoint",
                "location": {
                  "segmentId": "",
                  "index": 1
                }
              }
            }
          ]
        }
      let init:any={
          method:"POST",
          "async":true,
          body:JSON.stringify(body),
          headers:{
          Authorization: "Bearer "+token,
          "Content-Type":"Application/json",
          },
          "contentType":"json",
         
      };
      let documentId="16Pozm4OYfI2fUfLUCZoMInAqItlxVFNJgrxvh0m-PHw";
      fetch(`https://docs.googleapis.com/v1/documents/${documentId}:batchUpdate?`,init)
      .then((resp)=>resp.json()).then((data)=>console.log(data)).catch((e)=>console.log("Error",e))
          }        
         
    );
 }
      catch(E){
        console.log("Error ",E)
      }
 
};