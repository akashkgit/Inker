export async function speak2CS(msg:string,...payload:any){
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    console.log(tab.id);
    try{
    const response = await chrome.tabs.sendMessage(tab.id, {ev:{data:msg,payload:payload}});
    
    }
    catch{
        console.log(" !!! ERROR")
    }
}