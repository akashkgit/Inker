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
            setSignedUser({"user":"Not signed in!","selectOption":"currentUser"});
        }
    }
  //  console.log("problem 2",(event!==undefined &&  val==="signIn"))
    if(event!==undefined && (val==="signIn"))interactive=true;
   
    if(event===undefined || (event && val==="changeUser") ||(event && val==="signIn")){
        
    chrome.identity.getAuthToken({ interactive: interactive }, function (token) {
        if (chrome.runtime.lastError) {
            setSignedUser({"user":"Not signed in!","selectOption":"currentUser"});
          //  console.log(" Not SignedIn User ");
        }
        else {
            //    console.log('the event is not signout');
                chrome.identity.getProfileUserInfo((info) => {
                   // console.log("setting email to ", info.email)
                    setSignedUser({"user":info.email,"selectOption":"currentUser"});
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