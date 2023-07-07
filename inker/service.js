
console.log(" installed ");
chrome.contextMenus.create({
    id:"save",
    title:"Save to Doc",
    contexts:["all"],
    
    
})
chrome.contextMenus.onClicked.addListener(async (ev)=>{
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {msg :"popup"});
    console.log(response);
    console.log("clicked");
    console.log(ev.selectionText)
}
)