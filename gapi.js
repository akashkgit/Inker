        
  const client = google.accounts.oauth2.initTokenClient({
        client_id: "994911962715-3gvur88rj0l2mrn746puhnqel2od5lcs.apps.googleusercontent.com",
        scope: 'https://www.googleapis.com/auth/documents',
        callback: (response) => {
        console.log(response.json(),response)
        },
        });
        function auth(){
        console.log("auth");
        client.requestAccessToken();
        }
       // alert("loaded gapi.js ");
        document.querySelector("#authMe").addEventListener("click",atuh)