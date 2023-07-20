
export let storeSelected=async(box:HTMLDivElement[],request:any)=>{
  
  let {sync}=await chrome.storage.sync.get("sync"); 
  let {controls}=sync==true?await chrome.storage.sync.get("controls"):await chrome.storage.local.get("controls");
  let keepInk=controls.keepInks;
  console.log("@@ storing selected ",sync,keepInk,controls)

  if(keepInk==false){
    console.log("goes unstored and lost between page reload");
    
    chrome.storage.session.get("store").then(({store})=>{
    console.log("got store object from session")
    let pagePresent=false;
    let pageUrl=request.ev.pageUrl;
    let idx:number;
    if(store===undefined)store={};
    if(store[pageUrl])   {pagePresent=true; idx=store[pageUrl].idx;}
    else idx=0;
    let bx:HTMLDivElement[]=Array.from([...box])
    bx.forEach((div:HTMLDivElement,id:number)=>{
      div.setAttribute("id","i"+String(idx+1)+String(id));
      div.dataset["group"]=String(idx+1);
      
  })

  let bxInfo=bx.map((val:HTMLDivElement,id:number)=>{
    return {id:val.id,group:val.dataset.group,top:val.style.top,left:val.style.left,style:val.style.borderBottomStyle,height:val.style.height,width:val.style.width,thickness:val.style.borderBottomWidth,colorPicker:val.style.borderBottomColor}
})
console.log(" inside cs helper 4");
let toBeStored:any={};
if(pagePresent){
    
    toBeStored[pageUrl]={...store[pageUrl],[idx+1]:bxInfo,"idx":idx+1}
    console.log("storing boxes in the store ",toBeStored);
}
else{
    toBeStored[pageUrl]={"idx":idx+1,[idx+1]:bxInfo}
    console.log("storing boxes in the store for the first time  ",toBeStored);
}

chrome.storage.session.set({"store":toBeStored}).then(()=>{
        chrome.storage.session.get("store").then((val:any)=>console.log("Stored sync obj",val.store,val.store[pageUrl][idx+1][0].id))

})
})

  }
  else{
    console.log(" inside cs helper ");
   let bx:HTMLDivElement[]=Array.from([...box])
   let res=sync==true?await chrome.storage.sync.get("store"):await chrome.storage.local.get("store");
   console.log(" inside cs helper 2",res);


   let pagePresent=false;
   let pageUrl=request.ev.pageUrl;
   let idx:number;
   if(res.store[pageUrl])   {pagePresent=true; idx=res.store[pageUrl].idx;}
   else  idx=0;
   console.log(" inside cs helper 3");
   bx.forEach((div:HTMLDivElement,id:number)=>{
    div.setAttribute("id","i"+String(idx+1)+String(id));
    div.dataset["group"]=String(idx+1);
    
})
let bxInfo=bx.map((val:HTMLDivElement,id:number)=>{
  return {id:val.id,group:val.dataset.group,top:val.style.top,left:val.style.left,style:val.style.borderBottomStyle,height:val.style.height,width:val.style.width,thickness:val.style.borderBottomWidth,colorPicker:val.style.borderBottomColor}
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



}



export let checkIfInked=async(event:Event)=>{
    return chrome.storage.sync.get("sync").then(async ({sync})=>{
    let {store,controls}=sync==true?await chrome.storage.sync.get(["store","controls"]):await chrome.storage.local.get(["store","controls"])
    let Store=(controls.keepInks==false)?await chrome.storage.session.get("store"):store
    let res={"store":Store}
    console.log("res ",res)
   
    let el=(event.target as HTMLDivElement);
    console.log("target element ",el.dataset.group,el.id)
    console.log("stored object ",res.store)
    console.log("keying page url for records ",res.store[window.location.href+window.location.hash],window.location.href+window.location.hash,"hash",window.location.hash," obj ",res.store)
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
  });

}
export async function insert(docsId:string,heading:string,level:string,tLevel:String,startIndex:number,text:string){
  
    let {sync}=await chrome.storage.sync.get("sync")
    let {auth} =sync===true?await chrome.storage.sync.get("auth"):await chrome.storage.local.get("auth");
    let {docs} =sync===true?await chrome.storage.sync.get("docs"):await chrome.storage.local.get("docs");


                
                console.log("token",auth.token," heading ",heading, " content ","text, h and t level ",level,tLevel);
                let body={
                    "requests": [
                      {
                        "insertText": {
                          "text": `\n${heading}`,
                          "endOfSegmentLocation": {
                            "segmentId": ""
                          }
                        }
                      },
                      {
                        "updateParagraphStyle": {
                          "paragraphStyle": {
                            "namedStyleType": `${level}`
                          },
                          "fields": "namedStyleType",
                          "range": {
                            "segmentId": "",
                            "startIndex": startIndex,
                            "endIndex": startIndex+heading.length
                          }
                        }
                      },
                      {
                        
                        "insertText": {
                          "text": `\n${text}`,
                          "endOfSegmentLocation": {
                            "segmentId": ""
                          }
                        }
                      },
                      {
                        "updateParagraphStyle": {
                          "paragraphStyle": {
                            "namedStyleType": `${tLevel}`
                          },
                          "fields": "namedStyleType",
                          "range": {
                            "segmentId": "",
                            "startIndex": startIndex+heading.length+1,
                            "endIndex": startIndex+heading.length+1+text.length
                          }
                        }
                      }
                      
                    ]
                  }
                  console.log("selected string ",text);
                let reqBody=JSON.stringify(body);
                
                
                let init:any={
                        method:"POST",
                        "async":true,
                        body:reqBody,
                        headers:{
                        Authorization: "Bearer "+auth.token,
                        "Content-Type":"Application/json",
                        },
                        "contentType":"json",
                       
                    };
                    fetch(`https://docs.googleapis.com/v1/documents/${docs.documentId}:batchUpdate`,init).then((resp)=>console.log("success")).catch((e)=>console.log("Error ",e))


                


}