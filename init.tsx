export async function loadInks(){

     chrome.storage.sync.get(["sync","store"]).then(async ({sync,store})=>{
        let tab=await getCurrentTab();    
        if(sync){
                console.log(" loadInks ***** ",tab," | ",store," url ",tab.url)
                if(store[tab.url])return store[tab.url];
                else return {};

                
            }
            else{
                chrome.storage.local.get("store").then(async ({store})=>{
                    if(store[tab.url])return store[tab.url];
                    else return {};
                })
            }


    })
}

export async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  export async function initXStore(xStore:any,setXStore:any){
  let store=   await chrome.storage.sync.get(["sync","controls","xtraStore"]).then(async ({sync,controls,xtraStore})=>{
        if(sync && controls.keepInks){
// sync 
            return xtraStore;
        }
        else if (sync && !controls.keepInks){
// session
        let {xtraStore}=await chrome.storage.session.get("xtraStore")
        return xtraStore;
        }
        else{
/// local
let {xtraStore}=await chrome.storage.local.get("xtraStore")
return xtraStore;
        }
    })
    
    let tab=await getCurrentTab();
    console.log(" XXXXXTRA STORE ",tab,store,store[tab.url])    
    setXStore(store[tab.url]);

  }