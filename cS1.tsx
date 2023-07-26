import { checkIfInked, insert, storeSelected } from "./csHelper";
import React, { MouseEventHandler } from "react";

import { createRoot } from "react-dom/client";
import  "./cs1.css"
let text="";
const drag=require("./drag.png");
//------- unling pallete -------------

//-------- save to doc palette ---------

async function postData(event:any){
        let level=document.getElementById("hLevel")
        let heading=document.getElementById("heading")
        
        let {sync}=await chrome.storage.sync.get("sync");
        let {docs}=sync==true?await chrome.storage.sync.get("docs"):await chrome.storage.local.get("docs");

        let {auth}=sync==true?await chrome.storage.sync.get("auth"):await chrome.storage.local.get("docs");
       
                console.log(" token is ",auth.token,"docs ",docs.documentId," ",docs.title);
                
                let init:any={
                        method:"GET",
                        "async":true,
                        headers:{
                        Authorization: "Bearer "+auth.token,
                        "Content-Type":"Application/json",
                        },
                        "contentType":"json",
                       
                    };

                    fetch(`https://docs.googleapis.com/v1/documents/${docs.documentId}`,init).then(async (resp)=>{

                    let jsonVal:any=await resp.json();
                    console.log("json ",jsonVal.documentId);
                    let arr=jsonVal.body.content
                    let len=arr.length;
                    console.log(typeof arr[len-1].endIndex);
                    insert(jsonVal.documentId,(document.getElementById("headingField") as HTMLInputElement).value,(document.getElementById("hLevelSelect") as HTMLSelectElement).value,(document.getElementById("textLevel") as HTMLSelectElement).value,arr[len-1].endIndex,text);
                    



                    })
                
        

}
function Std(){
     
        return <>
        
        <div  className="std"     id="stdDiv">
        
                <div id="heading" onClick={(ev)=>console.log(ev.target)}>
                
                <img id="drag" src={drag} onMouseDown={mousedown} />
                <input placeholder="Headline" type="text" id="headingField"></input>
                
                
                
                
                </div>
                <div id="body">
                <div id="hLevel">
                <label htmlFor="hLevel">Heading Text </label>                        
                <select  id="hLevelSelect">
                        <option  value="HEADING_1">Level 1</option>
                        <option value="HEADING_2">Level 2</option>
                        <option value="HEADING_3">Level 3</option>
                        <option value="HEADING_4">Level 4</option>
                        <option value="HEADING_5">Level 5</option>
                </select>
                </div>
                
                <div id="iLevel">
                <label htmlFor="Inked Text">Inked Text</label>                        
                <select id="textLevel">
                <option  value="NORMAL_TEXT">Normal</option>
                        <option  value="HEADING_1">Level 1</option>
                        <option value="HEADING_2">Level 2</option>
                        <option value="HEADING_3">Level 3</option>
                        <option value="HEADING_4">Level 4</option>
                        <option value="HEADING_5">Level 5</option>
                </select>
                </div>
                <div id="iLevel">
                <label htmlFor="urlSelector">Include Url ?</label>                        
                <select id="urlSelector">
                
                        <option  value="yes">Yes</option>
                        <option value="no">No</option>
                </select>
                </div>
                <div id="saveRclose">
                <button id="saveToDoc" onClick={postData}>Save</button>
                <button id="close" onClick={()=>document.getElementById("stdDiv").style.display="none"}> X </button>
                </div>
        </div>
        </div>
        </>
}
function mousemove(ev:any){
        let rdiv=document.querySelector("#stdDiv") as HTMLDivElement;
        ev =ev || window.Event;
        console.log(" mouse moving ");
        ev.preventDefault();
        ev.stopPropagation();
        ev.cancelBubble=true;
        ev.returnValue=false;
        console.log(ev.pageX,ev.pageY,ev)
        rdiv.style.top=`${ev.pageY}px`
        rdiv.style.left=`${ev.pageX}px`
        return false;

}
function mouseup(ev:any){
        let rdiv=document.querySelector("#stdDiv") as HTMLDivElement;
        rdiv.style.top=`${ev.pageY}px`
        rdiv.style.left=`${ev.pageX}px`
        document.removeEventListener("mousemove",mousemove)
        document.removeEventListener("mouseup",mouseup)
}
function mousedown(ev:any){
        console.log("mousedown");
        ev =ev || window.Event;
        
        ev.preventDefault();
        ev.stopPropagation();
        ev.cancelBubble=true;
        ev.returnValue=false;
        
        document.addEventListener("mousemove",mousemove);
        document.addEventListener("mouseup",mouseup);
        return false;
}
let rdiv=document.createElement("div")
rdiv.setAttribute("id","rdiv");


// rdiv.style.position="absolute"
// rdiv.style.top="0px";
// rdiv.style.bottom="0px";
document.body.appendChild(rdiv);
let root=createRoot(rdiv);

root.render(<><Std /></>)

let stdDiv=document.querySelector("#stdDiv");
// stdDiv.addEventListener("mousedown",mousedown);

//--------------------------------------
let unlinkSingle = document.createElement("p");

unlinkSingle.innerHTML = "Unlink this";
unlinkSingle.style.border = "1px solid black";
unlinkSingle.style.backgroundColor = " grey";

unlinkSingle.id = "unlink-single";
unlinkSingle.style.width = "100%";
unlinkSingle.style.height = "40%";
unlinkSingle.style.display = 'inline';
unlinkSingle.addEventListener("click", (ev) => {
        let el = (ev.target as HTMLParagraphElement)
        let elToBeRemoved = el.dataset.remove;
        console.log(" Removing ", elToBeRemoved, document.getElementById(elToBeRemoved))
        document.body.removeChild(document.getElementById(elToBeRemoved));

})

let unlinkFull = document.createElement("p");

unlinkFull.innerHTML = "Unlink Fully";
unlinkFull.style.border = "1px solid black";
unlinkFull.style.backgroundColor = " grey";
unlinkFull.style.width = "100%";
unlinkFull.style.height = "40%";
unlinkFull.style.display = 'inline';
unlinkFull.id = "unlinkFull";

unlinkFull.addEventListener("click", (ev) => {
        let el = (ev.target as HTMLParagraphElement)
        let elToBeRemoved = el.dataset.remove;
        console.log(" Removing ", elToBeRemoved, document.body.querySelectorAll(`div[data-group="${elToBeRemoved}"]`))
        //document.body.removeChild(document.getElementByAtt);
        let els = document.body.querySelectorAll(`div[data-group="${elToBeRemoved}"]`);
        els.forEach((val, id) => {
                console.log("removing ....", val.id)
                document.body.removeChild(val);

        })

})

let pdiv = document.createElement("div")
pdiv.appendChild(unlinkFull)
pdiv.appendChild(unlinkSingle)
document.body.appendChild(pdiv);
pdiv.style.position = "absolute";
pdiv.style.top = "10px";

pdiv.style.left = "10px";
pdiv.style.display = "none"; 
pdiv.style.zIndex = "100";
pdiv.style.opacity = "0.5";
pdiv.style.width = "200px";
pdiv.style.height = "100px"
pdiv.style.position = "fixed";



console.log("loaded cs");

async function preInk(){

        chrome.storage.sync.get("sync").then(async ({sync})=>{
                                
                                let{store,controls}=sync===true?await   chrome.storage.sync.get(["store","controls"]):await chrome.storage.local.get(["store","controls"]);
                                if(store[window.location.href]){
                                    
                                    
                                   let page:any=store[window.location.href];
                                    let end=page["idx"];
                                    for(let id=0;id<=end;id++){
                                        console.log("ID ",id,page[id],store,window.location.href);
                                        if(page[id]===undefined)continue;
                                        page[id].forEach((val:any,id:any)=>{
                                                  console.log(" appending child ",val)
                                                        let div=document.createElement("div");
                                                        div.setAttribute("id",val.id)
                                                        div.dataset["group"]=val.group
                                                        div.style.position="absolute"
                                                        div.style.top=val.top
                                                        div.style.left=val.left
                                                        div.style.borderBottomWidth=val.thickness;
                                                        div.style.borderBottomColor=val.colorPicker;
                                                        div.style.borderBottomStyle=val.style;
                                                        div.style.zIndex="100";
                                                        div.style.width=val.width;
                                                        div.style.height=val.height;
                                                        document.body.appendChild(div);

                                        })
                                    }
                                }
                                


        })

}
preInk();
document.addEventListener("mouseover", async (ev) => {
        //console.log((ev.target as HTMLDivElement).dataset.group,(ev.target as HTMLDivElement).id)
         
        chrome.storage.sync.get("sync").then(async ({sync})=>{
                console.log(" element ",(ev.target as HTMLDivElement).id," ",(ev.target as HTMLDivElement).dataset.group);
                let {controls}=sync==true?await chrome.storage.sync.get("controls"):await chrome.storage.local.get("controls");
               if(controls.keepInks===true){
        checkIfInked(ev).then((found)=>{

        console.log("element found: ", found," element ",(ev.target as HTMLDivElement).id," ",(ev.target as HTMLDivElement).dataset.group);
        if (found) {
               // let els=document.querySelectorAll(`div[data-group=${(ev.target as HTMLDivElement).dataset.group}`)
                // els.forEach((box:HTMLDivElement,id)=>{
                //                 box.style.boxShadow=
                // })
                
                pdiv.style.display = "block";
                unlinkSingle.dataset["remove"] = (ev.target as HTMLDivElement).id;
                unlinkFull.dataset["remove"] = (ev.target as HTMLDivElement).dataset.group;
        }
});
               }
               else{
                unlinkSingle.dataset["remove"] = (ev.target as HTMLDivElement).id;
                unlinkFull.dataset["remove"] = (ev.target as HTMLDivElement).dataset.group;

               }

})


})







//----------------------------
chrome.runtime.onMessage.addListener(async (request, sender, resp) => {

        console.log(" recieved details");

        const req = request;
        console.log(req);
        console.log(req.ev.menuItemId === "unInk")
        if(req.ev.data ==="signedOut"){
                let stdDiv=document.querySelector("#stdDiv") as HTMLDivElement;
                stdDiv.style.display="none";
                alert(" signin to continue saving to the doc");
        }
        else if(req.ev.data ==="docsRemoved"){
                let stdDiv=document.querySelector("#stdDiv") as HTMLDivElement;
                stdDiv.style.display="none";
                alert(" Docs deprovisioned! Kindly provision a doc in the popup page");
        }
        if (req.ev.menuItemId === "inkIt") {

                console.log(" fetching UI controls data form chrome storage")
                let Storage = await chrome.storage.sync.get("controls")
                if (!Storage || !Storage.controls) {
                        Storage = await chrome.storage.local.get("controls")
                }

                let Controls = Storage.controls;

                let sel = window.getSelection();
                let rnge = sel.getRangeAt(0);
                let boxes = rnge.getClientRects();
                let nodes = rnge.commonAncestorContainer;
                //=(nodes as HTMLElement).style.position="relative";

                let x = window.scrollX;
                let y = window.scrollY


                let bx = Object.entries(boxes).map((val, id) => {
                        let div = document.createElement("div");
                        console.log(" val ", val);
                        div.setAttribute("id", "one");

                        div.style.top = (val[1].y + y) + "px";
                        div.style.left = (val[1].x + x) + "px";
                        //div.style.border = "2px solid red"
                        div.style.width = val[1].width + "px";

                        div.style.height = val[1].height + "px";
                        div.style.zIndex = "100";
                        //--- customizing the inked portion -----
                        console.log("controls ", Controls, Controls.style === "underline", Controls.style === "box")
                        if (true) {
                                console.log(" underlining ", Controls.lineStyle as string)
                                div.style.borderBottomWidth = (Number(Controls.thickness) * 1) + "px";
                                div.style.borderBottomColor = Controls.colorPicker
                                div.style.borderBottomStyle = Controls.lineStyle as string;
                                div.addEventListener("mouseover",(ev)=>{
                                        div.style.boxShadow=`0px 0px 5px 2px ${Controls.colorPicker}`;
                                })
                                div.addEventListener("mouseout",(ev)=>{
                                        div.style.boxShadow="0px 0px 0px 0px rgba(175, 21, 21, 0.84)";
                                })
                                console.log("bototmborder  ", div.style.borderBottom)
                        }


                        //-----------------------------------------
                        //  nodes.appendChild(div);
                
                         (document.body).appendChild(div);
                        div.style.position = "absolute";
                        return (div as HTMLDivElement);

                });
                console.log(" b4 storing bx array ", bx)
                await storeSelected(bx, request)
                console.log(bx);

        }
        else if (req.ev.menuItemId === "unInk") {
                let el = (document.getElementById("unlinkFull") as HTMLParagraphElement)
                let elToBeRemoved = el.dataset.remove;
                console.log(" Removing ", elToBeRemoved, document.body.querySelectorAll(`div[data-group="${elToBeRemoved}"]`))
                //document.body.removeChild(document.getElementByAtt);
                let els = document.body.querySelectorAll(`div[data-group="${elToBeRemoved}"]`);
                els.forEach((val, id) => {
                        console.log("removing ....", val.id)
                        document.body.removeChild(val);


                })
   
               chrome.storage.sync.get("sync").then(({sync})=>sync)
                .then(async (sync)=>{
                        if(sync){
                                let res=await chrome.storage.sync.get(["store","controls"])
                                return {sync:sync,...res};
                        }
                        else 
                        {
                                let res=await chrome.storage.local.get(["store","controls"])
                                return {sync:sync,...res};
                        }
                })
                .then((obj:any)=>{
                        console.log("alertttt 330@cs1",obj);
                        let controls=obj.controls
                        let sync=obj.sync;
                        let store=obj.store
                        console.log("store which has to be deleted item ",store)
                        
                console.log(" deleting ", elToBeRemoved, " from storage sync? ", sync, window.location.href, " is the key ",store[window.location.href][elToBeRemoved])
                delete store[window.location.href][elToBeRemoved];
                console.log(" deleted store ",store)
                if (controls.keepInks==false)chrome.storage.session.set({"store":store}).then(() => chrome.storage.session.get("store").then((val) => console.log(" after deletion ", val)));
                else if (sync) chrome.storage.sync.set({"store":store}).then(() => chrome.storage.sync.get("store").then((val) => console.log(" after deletion ", val)));
                else  chrome.storage.local.set({"store":store}).then(() => chrome.storage.local.get("store").then((val) => console.log(" after deletion ", val)));
                        
               })
        
       
        }
        else if(req.ev.menuItemId === "saveToDoc"){
                
                let {sync}=await chrome.storage.sync.get("sync")
                let {auth}=(sync===true)?await chrome.storage.sync.get("auth"):await chrome.storage.local.get("auth")
                let {docs}=(sync===true)?await chrome.storage.sync.get("docs"):await chrome.storage.local.get("docs")
                console.log(" auth user ",auth.user,auth.user==="Not signed in!")
                if(auth.user==="Not signed in!")alert("sign into ur google account and provision a document. All this can be done in the extension popup in the browser menubar!")
                else if(docs.documentId==="" )alert("Provision a document in popup page. copy the document ID from the url of the document or enter new new to create a document in popup page");
                
                else{
                console.log(" clicked save to doc")
                text=window.getSelection().toString();
                console.log("selected string I",window.getSelection().toString());
                let stdDiv=document.getElementById("stdDiv");
                console.log(" saving doc clicked ",stdDiv.style.display)
                document.getElementById("stdDiv").style.display="grid";
                let x=window.scrollX;
                let y=window.scrollY;
                let selection=window.getSelection();
                let range=selection.getRangeAt(0);
                let boxes=range.getClientRects();
                let bx=boxes[0].x;
                let by=boxes[0].y;
                console.log(boxes[0]);
                stdDiv.style.left=`${(bx+x)}px`
                stdDiv.style.top=`${(by+y)}px`


                let data={

        }

        }
        resp();
}
})

