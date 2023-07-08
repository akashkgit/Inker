chrome.runtime.onInstalled.addListener((ev)=>{
    console.log(" installed ");
    //chrome.runtime.connect({"name":"popup"})
    // chrome.runtime.sendMessage({'msg':"hello installed"},(res)=>console.log(res));
    chrome.contextMenus.create({
        id:"Inker",
        title:"Inker",
        contexts:["all"]
    })
    chrome.contextMenus.create({
        id:"saveToDoc",
        title:"Save to Doc",
        contexts:["all"],    
        parentId:"Inker"
    })
    
    chrome.contextMenus.create({
        id:"inkIt",
        title:"🖍️Ink It!",
        contexts:["all"],
        parentId:"Inker"
    
    })
    chrome.contextMenus.create({
        id:"unInk",
        title:"unInk",
        contexts:["all"],
        parentId:"Inker"
    })
    chrome.contextMenus.onClicked.addListener(async (ev)=>{
        console.log(ev.menuItemId)
        const chosenId=ev.menuItemId;
        if(chosenId == "saveToDoc"){
    
        }
        else if (chosenId == "inkIt"){
    
    
        }
    
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {msg :chosenId});
        //console.log(response);
        //console.log("clicked");
        //console.log(ev.selectionText)
    }
    )
    });