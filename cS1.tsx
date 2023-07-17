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
        let sync=true;
        let docsId=await chrome.storage.sync.get("docsId");
        if(docsId===undefined){docsId=await chrome.storage.local.get("docsId");sync=false;}
        //--- getting last index of that 
        
                console.log(docsId)
                let token=await chrome.storage.sync.get("token");
                if(token==undefined)token=await chrome.storage.local.get("token")
                console.log("token",token," docsId ",docsId)
                let init:any={
                        method:"GET",
                        "async":true,
                        headers:{
                        Authorization: "Bearer "+token.token,
                        "Content-Type":"Application/json",
                        },
                        "contentType":"json",
                       
                    };

                    fetch(`https://docs.googleapis.com/v1/documents/${docsId.docsId}`,init).then(async (resp)=>{

                    let jsonVal:any=await resp.json();
                    console.log("json ",jsonVal.documentId);
                    let arr=jsonVal.body.content
                    let len=arr.length;
                    console.log(typeof arr[len-1].endIndex);
                    insert(jsonVal.documentId,(document.getElementById("heading") as HTMLInputElement).value,(document.getElementById("hLevel") as HTMLSelectElement).value,arr[len-1].endIndex,text);
                    



                    })
        

}
function Std(){
     
        return <>
        
        <div  className="std"     id="stdDiv">
        
                <div id="heading">
                
                
                <input placeholder="headline" type="text" id="heading"></input>
                
                <img id="drag" src={drag} onMouseDown={mousedown} />
                
                
                </div>
                <div id="body">
                <div id="hLevel">
                <label htmlFor="hLevel">Heading Text </label>                        
                <select id="hLevel">
                        <option value="1">Level 1</option>
                        <option value="1">Level 2</option>
                        <option value="1">Level 3</option>
                        <option value="1">Level 4</option>
                        <option value="1">Level 5</option>
                </select>
                </div>
                
                <div id="iLevel">
                <label htmlFor="Inked Text">Inked Text</label>                        
                <select id="hLevel">
                        <option value="1">Level 1</option>
                        <option value="1">Level 2</option>
                        <option value="1">Level 3</option>
                        <option value="1">Level 4</option>
                        <option value="1">Level 5</option>
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
document.addEventListener("click", async (ev) => {
        //console.log((ev.target as HTMLDivElement).dataset.group,(ev.target as HTMLDivElement).id)
        let found = await checkIfInked(ev);
        console.log("element found: ", found);
        if (found) {
                pdiv.style.display = "block";
                unlinkSingle.dataset["remove"] = (ev.target as HTMLDivElement).id;
                unlinkFull.dataset["remove"] = (ev.target as HTMLDivElement).dataset.group;
        }


})







//----------------------------
chrome.runtime.onMessage.addListener(async (request, sender, resp) => {

        console.log(" recieved details");

        const req = request;
        console.log(req);
        console.log(req.ev.menuItemId === "unInk")
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
                        if (Controls.style === "box") {
                                div.style.borderWidth = (Number(Controls.thickness) * 1) + "px";
                                div.style.borderColor = Controls.colorPicker
                                div.style.borderStyle = Controls.lineStyle as string;
                                console.log(" boxing ")
                        }
                        else if (Controls.style === "underline") {
                                console.log(" underlining ", Controls.lineStyle as string)
                                div.style.borderBottomWidth = (Number(Controls.thickness) * 1) + "px";
                                div.style.borderBottomColor = Controls.colorPicker
                                div.style.borderBottomStyle = Controls.lineStyle as string;
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

                let store = await chrome.storage.sync.get("store");
                let sync = true;
                if (!store || !store.store) { store = await chrome.storage.local.get("store"); sync = false; }
                console.log(" deleting ", elToBeRemoved, " from storage sync? ", sync, window.location.href, " is the key ")
                delete store.store[window.location.href][elToBeRemoved];

                if (sync) await chrome.storage.sync.set(store).then(() => chrome.storage.sync.get("store").then((val) => console.log(" after deletion ", val)));
                else await chrome.storage.local.set(store).then(() => chrome.storage.local.get("store").then((val) => console.log(" after deletion ", val)));
        }
        else if(req.ev.menuItemId === "saveToDoc"){
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
})

