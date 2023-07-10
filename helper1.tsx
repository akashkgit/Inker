import { ChangeEvent, useEffect } from "react";

//-------------- Initialization code ------------
export let initSync = (controls:{},setControls:(cont:{})=>void)=>{
    return useEffect(() => {

        console.log(" running useeffect for inital sync fetching...")
        console.log("passed in sync ", controls);
        chrome.storage.sync.get(["controls"]).then((val) => {
            console.log(" sync parent object obtained ", val);
            let ls: HTMLSelectElement = document.querySelector("#lineStyle")
            let style: HTMLSelectElement = document.querySelector("#style")
            let sNe: HTMLInputElement = document.querySelector("#sNe")
            let full: HTMLInputElement = document.querySelector("#full")
            let colorPicker: HTMLInputElement = document.querySelector("#colorPicker")
            let thickness: HTMLInputElement = document.querySelector("#thickness")
            if (val === undefined || val.controls === undefined) {
                console.log("not found in sync sstorage ");
                chrome.storage.sync.set({
                    "controls":controls,
                    "store":{}
                }).then(async ()=>{
                    let res= await chrome.storage.sync.get("controls")
                    console.log(" fetched data",res.controls,res);
                })
            }
            else{
                console.log(" prefetching old records found in sync storage....")
                chrome.storage.sync.get("controls").then((val) => {
                    setControls({...(val.controls)})


                })
            }
            //        chrome.storage.sync.remove("sync");

        })
        chrome.storage.onChanged.addListener((changes, namespace) => {
            
            console.log(namespace," changed",changes);
            if(changes && changes.controls && changes.controls.newValue){
            console.log(changes);
            // for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
            // //   console.log(
            // //     `Storage key "${key}" in namespace "${namespace}" changed.`,
            // //     `Old value was "${oldValue}", new value is "${newValue}".`

            // //   );
            console.log(" new value ",changes.controls.newValue)
              
             setControls(changes.controls.newValue)
            //}
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
    let toBeStored:any = {...controls};
    toBeStored[val.target.id]=(val.target.id==="sNe" ||val.target.id==="sync")?  (val.target as HTMLInputElement).checked:(val.target.value);
    console.log(" controls after changing ",toBeStored)
    let res = await chrome.storage.sync.get("controls");
    console.log(" storing ",toBeStored,"id ",val.target.id,"val ",val.target.id," key[id] ", toBeStored[val.target.id])
    if(toBeStored.sync === false){
        //-------- local case
        console.log("stoing in local")
        chrome.storage.local.set({"controls":toBeStored}) 
        if(controls.sync === true)chrome.storage.sync.clear().then(()=>console.log("cleareed sync storage"))
    }
    else{

        //------ sync storage
        console.log("stoing in sync")
        if(controls.sync === false)chrome.storage.local.clear().then(()=>console.log("cleareed local storage"))
        chrome.storage.sync.set({"controls":toBeStored}) 
    }
}

