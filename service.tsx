chrome.runtime.onInstalled.addListener((ev)=>{
    
    
    console.log(" installed ");
    
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
        
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        console.log(tab.id);
        try{
        const response = await chrome.tabs.sendMessage(tab.id, {ev});
        }
        catch{
            console.log(" !!! ERROR")
        }
        //console.log(response);
        //console.log("clicked");
        //console.log(ev.selectionText)
    }
    )
    });