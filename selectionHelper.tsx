
export function createDoc(ev:any,setDoc:any){
    console.log(" creating document");
    let name=(document.querySelector("#docName")as HTMLInputElement).value;
    console.log("name of the doc",name);
    let data=JSON.stringify({
        
            "title":name
        
    })

    chrome.identity.getAuthToken({interactive:true},(token)=>{
     
        let init:any={
        method:"POST",
        "async":true,
        body:data,
        headers:{
        Authorization: "Bearer "+token,
        "Content-Type":"Application/json",
        },
        "contentType":"json",
       
    };
    fetch("https://docs.googleapis.com/v1/documents",init).then(async (resp)=>{
        let jsonDets=await resp.json()
        let docsId;
        let {sync}=await chrome.storage.sync.get("sync");
        if(sync===true)
        chrome.storage.sync.set({"docs":{"title":jsonDets.title,"documentId":jsonDets.documentId}})
        else chrome.storage.local.set({"docs":{"title":jsonDets.title,"documentId":jsonDets.documentId}})
        console.log(" setting docs to ",{"docs":{"title":jsonDets.title,"documentId":jsonDets.documentId}})
        setDoc({"title":jsonDets.title,"documentId":jsonDets.documentId})


        
}
        )

});

}

export function useDoc(ev:any,setDoc:any){

    chrome.identity.getAuthToken({interactive:true},(token)=>{
     
        let init:any={
        method:"GET",
        "async":true,
        
        headers:{
        Authorization: "Bearer "+token,
        "Content-Type":"Application/json",
        },
        "contentType":"json",
       
    };
    let docName=document.querySelector("#docName") as HTMLInputElement
    fetch(`https://docs.googleapis.com/v1/documents/${docName.value}`,init).then(
    async (res)=>{
            let resp=await res.json();
            let {sync} =await chrome.storage.sync.get("sync");
            if(sync){
                chrome.storage.sync.set({"docs":{"title":resp.title,"documentId":resp.documentId}})
            }
            else if(sync==false){
                    chrome.storage.sync.set({"docs":{"title":resp.title,"documentId":resp.documentId}})
            }
            else console.log(
                "sync is not true/false while using document",sync
            )
            setDoc({"title":resp.title,"documentId":resp.documentId});

    }

    )
})
}