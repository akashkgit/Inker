import React,{useState,useEffect} from "react";
import { getCurrentTab, initXStore, loadInks } from "./init";
import "./inks.css";
import { speak2CS } from "./speak";
export function Inks(){

    let [xStore,setXStore]=useState();
    useEffect(()=>{initXStore(xStore,setXStore);
    
    //-----------------
    chrome.storage.onChanged.addListener(async (changes, namespace) => {

        console.log(" INKS handler => ",namespace," changed",changes);
              let {sync}=await chrome.storage.sync.get("sync");
              console.log("sync in inks,tsx ",sync," area ",namespace)
              if(sync && namespace==="sync"){
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
    <ul id="inks">
      {
      getJSX(xStore)
    }
    </ul>
    </>

}
function viewMe(ev:any){
    let el=ev.target as HTMLUListElement
    speak2CS("scroll2View",el.id);
    
}
function getJSX(xStore:any){
    console.log("JSXGETTER ",xStore)
    if(xStore!==null && xStore!==undefined && Object.entries(xStore).length!==0){

       return Object.keys(xStore).map((keys)=>{
            console.log(`<li id=${keys}>${xStore[keys]}</li>`)
          return <li key={keys} onClick={viewMe} id={keys}>{xStore[keys].slice(0,20)+"..."}</li>
        })
      }
      else {console.log("<><center><h2>No Inks!</h2> </center></>");return <><center><h2>No Inks!</h2> </center></>}
}