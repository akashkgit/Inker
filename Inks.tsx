import React,{useState,useEffect} from "react";
import { getCurrentTab, initXStore, loadInks } from "./init";

import "./inks.css";
import { speak2CS } from "./speak";
const boxIcon=require("./inker_128.png");
export function Inks(){

    let [xStore,setXStore]=useState();
    useEffect(()=>{initXStore(xStore,setXStore);
    
    //-----------------
    chrome.storage.onChanged.addListener(async (changes, namespace) => {

        console.log(" INKS handler => ",namespace," changed",changes);
              let {sync}=await chrome.storage.sync.get("sync");
              console.log("sync in inks,tsx ",sync," area ",namespace)
              if(sync && (namespace==="sync" || namespace==="session") ){
                console.log(" condition in sync area ",changes.xtraStore && changes.xtraStore.newValue )
                      if(changes.xtraStore && changes.xtraStore.newValue){
                          
                          //setSignedUser(changes.auth.newValue)
                          let tab=await getCurrentTab()
                          console.log(" setting |INKS| from sync storage",tab.url,changes.xtraStore.newValue[tab.url],changes.xtraStore.newValue)
                          setXStore(changes.xtraStore.newValue[tab.url])
                      }
              }
              else if(!sync && namespace==="local"){
                console.log(" condition in local area ",changes.xtraStore && changes.xtraStore.newValue )
                if(changes.xtraStore && changes.xtraStore.newValue){
                    console.log(" setting controls from sync storage")
                    //setSignedUser(changes.auth.newValue)
                }
              }
            })







    //-----------------
    
    
    
    
    
    },[])
    
    return <>
    
    <div className="master">
    <div id="inks" className="card_container">
    <label htmlFor="inks" className="fixed">Inks</label>
    <div className="overflow">
      {
      getJSX(xStore)
    }
    </div>
    </div>
    </div>
    </>

}
function viewMe(ev:any){
    let el=ev.target as HTMLUListElement
    speak2CS("scroll2View",el.id);
    
}
function getJSX(xStore:any){
    console.log("JSXGETTER ",xStore)
    if(xStore!==null && xStore!==undefined && Object.entries(xStore).length>=1){

       return Object.keys(xStore).map((keys)=>{
            
            console.log(`<li id=${keys}>${xStore[keys]}</li>`)
            if(keys==="idx")return <></>
          return <div key={keys} onClick={viewMe} className="list" id={keys}>{xStore[keys].slice(0,Math.min(80,xStore[keys].length))+"..."}</div>
        })
      }
      else {console.log("<><center><h2>No Inks!</h2> </center></>");return<><center className="empty"> <img src={boxIcon} id="empty"/>
      <h3>Start Inking!</h3><h4>No Inks found📋</h4></center></>}
}