import { checkIfInked, storeSelected } from "./csHelper";
//------- unling pallete -------------


let unlink=document.createElement("p");
document.body.appendChild(unlink)
unlink.innerHTML="Unlink";
unlink.style.border="1px solid black";
unlink.style.backgroundColor=" grey";

unlink.id="unlink";
unlink.style.position="absolute";
unlink.style.top="10px";
unlink.style.left="10px";
unlink.style.display="none";
unlink.style.zIndex="100";
unlink.style.opacity="0.5";
unlink.style.width="300px";
unlink.style.height="300px"
unlink.addEventListener("click",(ev)=>{
let el=(ev.target as HTMLParagraphElement)
let elToBeRemoved=el.dataset.remove;
console.log(" Removing ",elToBeRemoved,document.getElementById(elToBeRemoved))
document.body.removeChild(document.getElementById(elToBeRemoved));

})



console.log("loaded cs");
document.addEventListener("click",async (ev)=>{
        //console.log((ev.target as HTMLDivElement).dataset.group,(ev.target as HTMLDivElement).id)
        let found= await checkIfInked(ev);
        console.log("element found: ",found);
        if(found){ unlink.style.display="block";unlink.dataset["remove"]=(ev.target as HTMLDivElement).id;}


    })  







//----------------------------
chrome.runtime.onMessage.addListener(async (request, sender, resp) => {
    
    console.log(" recieved details");
    
    const req=request;
    console.log(req);
    console.log(req.ev.menuItemId === "inkIt")
    if (req.ev.menuItemId === "inkIt") {
            
           console.log(" fetching UI controls data form chrome storage")
                let  Storage= await chrome.storage.sync.get("controls")
                if( !Storage || ! Storage.controls) {
                        Storage=await chrome.storage.local.get("controls")
                }
                
                let Controls=Storage.controls;

            let sel = window.getSelection();
            let rnge = sel.getRangeAt(0);
            let boxes = rnge.getClientRects();
            let nodes=rnge.commonAncestorContainer;
            //=(nodes as HTMLElement).style.position="relative";
            
            let x=window.scrollX;
            let y=window.scrollY
            

            let bx = Object.entries(boxes).map((val, id) => {
                    let div = document.createElement("div");
                    console.log(" val ", val);
                    div.setAttribute("id", "one");
                    
                    div.style.top = (val[1].y + y) + "px";
                    div.style.left = (val[1].x + x) + "px";
                    //div.style.border = "2px solid red"
                    div.style.width = val[1].width + "px";

                    div.style.height = val[1].height + "px";
                    div.style.zIndex="100";
                    //--- customizing the inked portion -----
                       console.log("controls ",Controls,Controls.style==="underline",Controls.style==="box")
                        if(Controls.style==="box"){
                             div.style.borderWidth=(Number(Controls.thickness) * 1)+ "px";
                             div.style.borderColor=Controls.colorPicker
                             div.style.borderStyle=Controls.lineStyle as string;
                             console.log(" boxing ")
                        }
                        else if(Controls.style==="underline"){
                                console.log(" underlining ",Controls.lineStyle as string)
                                div.style.borderBottomWidth= (Number(Controls.thickness) * 1)+ "px";
                                div.style.borderBottomColor=Controls.colorPicker
                                div.style.borderBottomStyle=Controls.lineStyle as string;
                                console.log("bototmborder  ",div.style.borderBottom)
                        }


                    //-----------------------------------------
                   (document.body).appendChild(div);
                    div.style.position = "absolute";
                    return (div as HTMLDivElement);
                    
            });
            console.log(" b4 storing bx array ",bx)
            await storeSelected(bx,request)
            console.log(bx);
            
    }
resp();
})
    
