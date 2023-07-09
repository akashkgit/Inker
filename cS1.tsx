

chrome.runtime.onMessage.addListener((request, sender, resp) => {
    console.log(" recieved details");
    const req=request;
    console.log(req);
    console.log(req.ev.menuItemId === "inkIt")
    if (req.ev.menuItemId === "inkIt") {
            
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
                    div.style.border = "2px solid red"
                    div.style.width = val[1].width + "px";

                    div.style.height = val[1].height + "px";
                    div.style.zIndex="100";
                    
                   (document.body).appendChild(div);
                    div.style.position = "absolute";
                    return div;
                    
            });
            console.log(bx);
            
    }
resp();
})
    