import { speak2CS } from "./speak";

export async function auth(signedUser: {[key:string]:string}, setSignedUser:any, event?: any) {
    //console.log(" called the auther ");
    if(event && event.target)console.log("select value",event.target.value)
    let interactive: boolean = false;
    let val=event!==undefined?event.target.value:"";
    if (event && event.target!==undefined  && (event.target.value === "signOut" || event.target.value ==="changeUser") ){
     //   console.log(" turning interactive to false")
       
        await removeCreds(val==="changeUser",setSignedUser);
     //   console.log("comp ",event.target.value==="signOut"," ",event.target.value,val)
        if(val==="signOut"){
         //   console.log(" resetting signed user to not signed in ");
            //setSignedUser({"user":"Not signed in!","selectOption":"currentUser"});
            chrome.storage.sync.get("sync").then((val)=>{
                speak2CS("signedOut")
                if(val.sync) chrome.storage.sync.set({"auth":{"user":"Not signed in!","selectOption":"currentUser","token":"","prompt":"signedOut"},"docs":{"title":"Not Selected","documentId":""}})
                else chrome.storage.local.set({"auth":{"user":"Not signed in!","selectOption":"currentUser","token":"","prompt":"signedOut"},"docs":{"title":"Not Selected","documentId":""}})
             //   setSignedUser({"user":"Not signed in!","selectOption":"currentUser"});
               })
        }
    }
  //  console.log("problem 2",(event!==undefined &&  val==="signIn"))
    if(event!==undefined && (val==="signIn"))interactive=true;
   if(event===undefined){


    //--------- initial loading -------------------
    chrome.identity.getAuthToken({ interactive: false}, function (token) {
        
        if (chrome.runtime.lastError) {
            //setSignedUser({"user":"Not signed in!","selectOption":"currentUser"});
            chrome.storage.sync.get("sync").then((val)=>{
                
                if(val.sync) chrome.storage.sync.set({"auth":{"user":"Not signed in!","selectOption":"currentUser","token":"","prompt":"rejected"},"docs":{"title":"Not Selected","documentId":""}})
                else chrome.storage.local.set({"auth":{"user":"Not signed in!","selectOption":"currentUser","token":"","prompt":"rejected"},"docs":{"title":"Not Selected","documentId":""}})
              //  setSignedUser({"user":"Not signed in!","selectOption":"currentUser"});
               })
          
            //  console.log(" Not SignedIn User ");
        }
        else {
            //    console.log('the event is not signout');
            let init:any={
                method:"GET",
                "async":false,
                headers:{
                Authorization: "Bearer "+token,
                "Content-Type":"Application/json",
                },
                "contentType":"json",
               
            };
            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`).then(async (val)=>{alert();let info=await val.json();console.log(" recieved val ",info)
                   // console.log("setting email to ", info.email)
                   //setSignedUser({"user":info.email,"selectOption":"currentUser"});
                   console.log("hello i am here",{"auth":{"user":info.email,"selectOption":"currentUser","token":token}})
                   chrome.storage.sync.get("sync").then((val)=>{
                    console.log(val.sync," is the sync")
                    if(val.sync) chrome.storage.sync.set({"auth":{"user":info.email,"selectOption":"currentUser","token":token,"prompt":"success"}}).then(()=>console.log("put ",{"auth":{"user":info.email,"selectOption":"currentUser","token":token}}," in sync"))
                    else chrome.storage.local.set({"auth":{"user":info.email,"selectOption":"currentUser","token":token,"prompt":"success"}})
                    
                   })
                

                   chrome.storage.sync.get("sync").then((val)=>{
                    console.log("from sync="," is the sync")
                    if(val.sync) chrome.storage.sync.get("auth").then(({auth})=>{
                       
                       
                        console.log(" retrieved auth details",auth);
                        if(auth.user===info.email)setSignedUser(auth)
                    
                    
                    })
                    else chrome.storage.local.get("auth").then(({auth})=>{
                        console.log(" retrieved auth details",auth);
                        if(auth.user===info.email)
                        setSignedUser(auth)
                    })
                    
                   })
                })
                
            }})



            

    
    
    
   }
    if((event && val==="changeUser") ||(event && val==="signIn")){
        alert(" gonna sign in user ");
    chrome.identity.getAuthToken({ interactive: true}, function (token) {
        if (chrome.runtime.lastError) {
            //setSignedUser({"user":"Not signed in!","selectOption":"currentUser"});
            alert("error")
            chrome.storage.sync.get("sync").then((val)=>{
                if(val.sync) chrome.storage.sync.set({"auth":{"user":"Not signed in!","selectOption":"currentUser","token":"",},"docs":{"title":"Not Selected","documentId":""}})
                else chrome.storage.local.set({"auth":{"user":"Not signed in!","selectOption":"currentUser","token":""},"docs":{"title":"Not Selected","documentId":""}})
              //  setSignedUser({"user":"Not signed in!","selectOption":"currentUser"});
               })
          
            //  console.log(" Not SignedIn User ");
        }
        else {
            //    console.log('the event is not signout');
            alert("success")
            let init:any={
                method:"GET",
                "async":false,
                headers:{
                Authorization: "Bearer "+token,
                "Content-Type":"Application/json",
                },
                "contentType":"json",
               
            };
            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`).then(async (val)=>{alert();let info=await val.json();console.log(" recieved val ",info)
                
                   // console.log("setting email to ", info.email)
                   //setSignedUser({"user":info.email,"selectOption":"currentUser"});
                   console.log("hello i am here",{"auth":{"user":info.email,"selectOption":"currentUser","token":token}})
                   chrome.storage.sync.get("sync").then((val)=>{
                    console.log(val.sync," is the sync")
                    if(val.sync) chrome.storage.sync.set({"auth":{"user":info.email,"selectOption":"currentUser","token":token}}).then(()=>console.log("put ",{"auth":{"user":info.email,"selectOption":"currentUser","token":token}}," in sync"))
                    else chrome.storage.local.set({"auth":{"user":info.email,"selectOption":"currentUser","token":token}})
                    
                   })

                    
                })
            }
        

    })
}

}


async function removeCreds(signIn:boolean,setSignedUser:any){
    chrome.identity.getAuthToken({ interactive: false }, async function (token) {
            if(chrome.runtime.lastError){
                console.log(" ERror in getting auth tokens");
            }
            else{
                console.log("singing out ")
                var url = 'https://accounts.google.com/o/oauth2/revoke?token=' + token;
              await window.fetch(url);

                chrome.identity.removeCachedAuthToken({ token: token }, function () {
                    console.log(" removed access ");
                    //------ setting new information --------
                    if(signIn){
                    chrome.identity.getAuthToken({ interactive: true }, function (token) {
                        if (chrome.runtime.lastError) {
                            setSignedUser({"user":"Not signed in!","selectOption":"currentUser"});
                            console.log(" Not SignedIn User ");
                        }
                        else {
                                console.log('logging new user data');
                                chrome.identity.getProfileUserInfo((info) => {
                                    console.log("setting email to ", info.email)
                                    setSignedUser({"user":info.email,"selectOption":"currentUser"});
                                })
                            }
                        
                
                    })
                }

                    //--------------------------------------
                });
            }
    })
}