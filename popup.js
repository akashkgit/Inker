const sync=document.querySelector("#sync");
sync.addEventListener("change",async (ev)=>{
    window.alert(ev.target.checked);
    await chrome.storage.sync.set({"sync":ev.target.checked});
    if(ev.target.checked===true) await chrome.storage.sync.set({"storage":chrome.storage.sync});
    else await chrome.storage.sync.set({"storage":chrome.storage.local});
    console.log(" wait completed and inserted ")
    chrome.storage.sync.get(["sync"]).then((val)=>console.log(val.sync));
});