import { ChangeEvent, useEffect } from "react";

//-------------- Initialization code ------------
export let initSync = (controls:{},setControls:(cont:{})=>void)=>{
   // console.log(" init sync ");
    return useEffect(() => {
        //------loading data from storage------
      //  console.log("use effect:::loading data from storage");
        chrome.storage.sync.get("sync").then(({sync})=>{
            if(sync===true){
              //  console.log(" sync found to be true");
                chrome.storage.sync.get("controls").then(({controls})=>{
                  //  console.log(" copying controls ",controls)   
                    
                    setControls(controls);
                })
            }
            else if(sync===false){
              //  console.log(" sync found to be false");
                chrome.storage.local.get("controls").then(({controls})=>{
                 //   console.log(" copying controls ",controls)   
                    setControls(controls);
            })
            }
            else{
                console.log(" sync found to be undefined ",sync)
            }
        })
       
          
//--- handle storage change
        chrome.storage.onChanged.addListener(async (changes, namespace) => {
            
            console.log(namespace," changed",changes);
            let {sync}=await chrome.storage.sync.get("sync");
            console.log("sync in storage handelr 36@h1 ",sync," area ",namespace)
            if(sync && namespace==="sync"){
                console.log(" condition in sync area ",changes.controls && changes.controls.newValue && Object.keys(changes.controls.newValue).length!==0)
                    if(changes.controls && changes.controls.newValue && Object.keys(changes.controls.newValue).length!==0){
                        console.log(" setting controls from sync storage")
                        setControls(changes.controls.newValue)
                    }
            }
            else if(!sync && namespace==="local"){
                console.log(" condition in local area ",changes.controls && changes.controls.newValue && Object.keys(changes.controls.newValue).length!==0)
                if(changes.controls && changes.controls.newValue && Object.keys(changes.controls.newValue).length!==0){
                    console.log(" setting controls from sync storage")
                    setControls(changes.controls.newValue)
                }
            }
            
            
        
           
            
        
        
          });
        

    }, [

    ])
}

// ------- change  handlers -----------------

export let syncHandler = (val: ChangeEvent<HTMLInputElement>, sync: boolean, setSync: (value: boolean) => void) => {

    if (val.target.checked == true) {
        chrome.storage.local.get(null, ((val) => {
            chrome.storage.sync.set({ ...val, "sync": true }).then(
                () => { chrome.storage.sync.get(null, (val) => console.log(" sync storage value ", val)); setSync(true) }
            )
        }));
    }
    else {
        chrome.storage.sync.get(null, ((val) => {
            console.log("all values from sync storage", val);
            chrome.storage.local.set({ ...val, "sync": false }).then(
                () => { chrome.storage.local.get(null, (val) => console.log(" local storage value ", val)); setSync(false) }
            )
        }));
    }
}

export let uControlsHandler = async (val: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>, setControls: (val: {}) => void,controls:any,typedec:any) => {
    console.log(" controls before changing ",controls)
    let cachedId=val.target.id;
    let cachedVal=val.target.id=="sync" || val.target.id=="keepInks"?(val.target as HTMLInputElement).checked:val.target.value;

        
    console.log(" checking 2",val.target.id,val.target.value)
    let toBeStored:any = {...controls};
    
    let {sync}=await chrome.storage.sync.get("sync"); 
    
    console.log(" checking 3",cachedId,cachedVal);
    if(val.target.id==="sync"){

        if(cachedVal=== false){
             
                chrome.storage.sync.get(null,(params)=>{
                        let toBeStored={"controls":{...params.controls,"sync":false},"auth":params.auth,"docs":params.docs};
                        chrome.storage.sync.set({"sync":false,controls:{},auth:{},docs:{}}).then(()=>{
                            chrome.storage.local.set(toBeStored);
                        })
                })

            
        }
        else{
            chrome.storage.local.get(null,(params)=>{
                let toBeStored={"controls":{...params.controls,"sync":true},"auth":params.auth,"docs":params.docs,"sync":true};
                chrome.storage.sync.set(toBeStored).then(()=>{
                    chrome.storage.local.set({"sync":true,controls:{},auth:{},docs:{}});
                })
        })

        }

    }
    else{
        console.log("!!!!!",cachedId,cachedVal)
        let toBeStored={"controls":{...controls,[cachedId]:cachedVal}};
        console.log(" storing ",toBeStored," ",[cachedId],cachedVal)
        if(sync) chrome.storage.sync.set(toBeStored);
        else chrome.storage.local.set(toBeStored)
        setControls(toBeStored.controls)
        
    }
   

}

//---------------- Docs handler ---------------

export async function DocsPreLoader(doc:{[key:string]:string},setDoc:any,user:string){
 //console.group("preloading docs")
    
    let {sync}=await chrome.storage.sync.get("sync")
    console.log("sync ",sync);
    if(sync){
        // if(user==="Not signed in!")chrome.storage.sync.set({"docs":{"title":"Not Selected","documentId":""}});
        // else{

        let {docs}=await chrome.storage.sync.get("docs");
        console.log("docs ",docs)
        if(docs===undefined)chrome.storage.sync.set({docs});
        else setDoc(docs);
        
    }else{
        if(user==="Not signed in!")chrome.storage.sync.set({"docs":{"title":"Not Selected","documentId":""}});
        else{
        let {docs}=await chrome.storage.local.get("docs");
     //   console.log("docs ",docs)
        if(docs===undefined)chrome.storage.local.set({docs});
        else setDoc(docs);
        }
    }
  //  console.groupEnd();

}