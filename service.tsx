chrome.runtime.onInstalled.addListener(async (ev)=>{
    chrome.storage.session.setAccessLevel({accessLevel:"TRUSTED_AND_UNTRUSTED_CONTEXTS"})
    let sync=await chrome.storage.sync.get("sync");
    if(sync.sync===true){
        
    } 
    else if(sync.sync===false){

    } 
   else {
        console.log(" loading data for first time ",sync.sync,sync);
        let payLoad={
            "lineStyle":"dotted",
            "colorPicker":"black",
            "thickness":1,
            "sync":true,
            "keepInks":false,
        }
         
       chrome.storage.sync.set({"controls":payLoad,"sync":true,"store":{},auth:{"user":"Not signed in!","selectOption":"currentUser"}});
    }
    
     
    
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
        title:"Ink It!",
        contexts:["all"],
        parentId:"Inker"
    
    })
    chrome.contextMenus.create({
        id:"unInk",
        title:"Un-Ink",
        contexts:["all"],
        parentId:"Inker"
    })
    
    });

    chrome.contextMenus.onClicked.addListener(async (ev)=>{
        console.log(" the frame id is ",ev.frameId)
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