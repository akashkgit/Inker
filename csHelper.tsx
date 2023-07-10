
export let storeSelected=async(box:HTMLDivElement[],request:any)=>{
   console.log(" inside cs helper ");
   let bx:HTMLDivElement[]=Array.from([...box])
    let sync=true;
    let res =await chrome.storage.sync.get("store")      
   if(!res|| !res.store)
   {res=await chrome.storage.local.get("store");sync=false;}
   console.log(" inside cs helper 2",res);
   let pagePresent=false;
   let pageUrl=request.ev.pageUrl;
   let idx:number;
   if(res.store[pageUrl])   {pagePresent=true; idx=res.store[pageUrl].idx;}
   else  idx=0;
   console.log(" inside cs helper 3");
   bx.forEach((div:HTMLDivElement,id:number)=>{
    div.setAttribute("id",String(idx+1)+String(id));
    div.dataset["group"]=String(idx+1);
    
})
let bxInfo=bx.map((val:HTMLDivElement,id:number)=>{
    return {id:val.id,group:val.dataset.group}
})
console.log(" inside cs helper 4");
let toBeStored:any={};
if(pagePresent){
    
    toBeStored[pageUrl]={...res.store[pageUrl],[idx+1]:bxInfo,"idx":idx+1}
    console.log("storing boxes in the store ",toBeStored);
}
else{
    toBeStored[pageUrl]={"idx":idx+1,[idx+1]:bxInfo}
    console.log("storing boxes in the store ",toBeStored);
}

if(sync)await chrome.storage.sync.set({"store":toBeStored}).then(()=>{
        chrome.storage.sync.get("store").then((val:any)=>console.log("Stored sync obj",val.store,val.store[pageUrl][idx+1][0].id))

})
else await chrome.storage.local.set({"store":toBeStored}).then(()=>{
    chrome.storage.local.get("store").then((val:any)=>console.log(" stored  local obj ",val.store,val.store[pageUrl][idx+1][0].id))

})




}



export let checkIfInked=async(event:Event)=>{
    let res=await chrome.storage.sync.get("store")
    if(!res || !res.store){
        res=await chrome.storage.local.get("store");
    }
    let el=(event.target as HTMLDivElement);
    console.log("target element ",el.dataset.group,el.id)
    console.log("stored object ",res.store)
    console.log("keying page url for records ",res.store[window.location.href])
    let record=res.store[window.location.href];
    if(!record)return false;
    if(!record[el.dataset.group])return false;
    let group=record[el.dataset.group];
    let found=false;
    
    for(let i=0;i<group.length;i++){
        let div=group[i]
        console.log("el =>",el.id," ",el.dataset.group," div =>",div.id,)
        if(div.id===el.id)return true;
    }
    return false;

}