export async function auth(signedUser: String, setSignedUser: (key: string) => void, event?: any) {
    console.log(" called the auther ")
    let interactive: boolean = false;
    if (event && event.target.id=="signedUser"){
         interactive = true;
        //await removeCreds();
         
    }
    if (event && event.target.id === "signOut") {
        console.log(" turning interactive to false")
        interactive = false;
        removeCreds();
        setSignedUser(" Not signed in ");
    }
    else{

    chrome.identity.getAuthToken({ interactive: interactive }, function (token) {
        if (chrome.runtime.lastError) {
            setSignedUser(" Not SignedIn");
            console.log(" Not SignedIn User ");
        }
        else {
                console.log('the event is not signout')

                // if (event.target.id == "signedUser") {

                //     var url = 'https://accounts.google.com/o/oauth2/revoke?token=' + token;
                //     window.fetch(url);

                //     chrome.identity.removeCachedAuthToken({ token: token }, function () {
                //         alert('removed');
                //     });
                //     chrome.identity.getAuthToken({interactive:true},(token)=>{

                //     })

                // }
                chrome.identity.getProfileUserInfo((info) => {
                    console.log("setting email to ", info.email)


                    setSignedUser(info.email);
                })
            }
        

    })
}

}


async function removeCreds(){
   await chrome.identity.getAuthToken({ interactive: false }, async function (token) {
            if(chrome.runtime.lastError){
                console.log(" ERror in getting auth tokens");
            }
            else{
                console.log("singing out ")
                var url = 'https://accounts.google.com/o/oauth2/revoke?token=' + token;
              await window.fetch(url);

                chrome.identity.removeCachedAuthToken({ token: token }, function () {
                    alert('removed');
                    
                });
            }
    })
}