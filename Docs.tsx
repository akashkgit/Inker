import React, { ChangeEvent } from 'react'
import "./app.css";
import { useState, useEffect } from 'react';
import { initSync, syncHandler, uControlsHandler } from "./helper1";
import { auth } from './auth';
import { Selection } from './Selection';

export function Docs(){
    
  
    const [signedUser,setSignedUser]=useState({"user":"Not signed in!","selectOption":"currentUser"});
    //console.group("re rendering docs component !!!!!")
    useEffect(()=>{
      console.log(" loading identity");
     auth(signedUser,setSignedUser);
     chrome.storage.onChanged.addListener(async (changes, namespace) => {

      console.log(" DOCS handler => ",namespace," changed",changes);
            let {sync}=await chrome.storage.sync.get("sync");
            console.log("sync in storage handelr20@docs.tsx ",sync," area ",namespace)
            if(sync && namespace==="sync"){
              console.log(" condition in sync area ",changes.auth && changes.auth.newValue && Object.keys(changes.auth.newValue).length!==0)
                    if(changes.auth && changes.auth.newValue && Object.keys(changes.auth.newValue).length!==0){
                        console.log(" setting controls from sync storage")
                        setSignedUser(changes.auth.newValue)
                    }
            }
            else if(!sync && namespace==="local"){
                console.log(" condition in local area ",changes.auth && changes.auth.newValue && Object.keys(changes.auth.newValue).length!==0)
              
                if(changes.auth && changes.auth.newValue && Object.keys(changes.auth.newValue).length!==0){
                    console.log(" setting controls from sync storage")
                    setSignedUser(changes.auth.newValue)
                }
            }
          })
  
     
      
    }
  
   
,[]);


    

    return < div className='Docs' id="Docs">
    
  <div>
    <label htmlFor='signedUser' >Signedin  as</label><br />
    <select onChange={(ev)=>auth(signedUser,setSignedUser,ev)}  value={signedUser.selectOption} id="signedUser" >
    <option value="currentUser"  id="signedUser">{signedUser.user}</option>
    <option id="SignIn"  value="signIn" style={{display:signedUser.user==="Not signed in!"?"block":"none"}}>Sign in</option>
    <option id="changeUser"  value="changeUser" style={{display:signedUser.user!=="Not signed in!"?"block":"none"}}>Change User</option>
    <option id="signOut"  value="signOut" style={{display:signedUser.user!=="Not signed in!"?"block":"none"}}>sign out</option>
    </select>
    </div>
    <Selection user={signedUser.user}/>
    
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