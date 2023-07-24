export async function speak2CS(msg:string){
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    console.log(tab.id);
    try{
    const response = await chrome.tabs.sendMessage(tab.id, {ev:{data:msg}});
    }
    catch{
        console.log(" !!! ERROR")
    }
}