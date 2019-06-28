//var app_fireBase = {};
function inicializar(){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBAfgaWX4_12X2kTByaPZp66cYHnRpTQjQ",
        authDomain: "mapa-historico-27a7b.firebaseapp.com",
        databaseURL: "https://mapa-historico-27a7b.firebaseio.com",
        projectId: "mapa-historico-27a7b",
        storageBucket: "mapa-historico-27a7b.appspot.com",
        messagingSenderId: "834297125012"
      };
      firebase.initializeApp(config);
    
          app_firebase = firebase;
    }
    inicializar();
    
////////////////////////////////// SCRIPT REGISTRO  /////////////////////////////////////////////////////


    function registro(){
        
        var email=document.getElementById('email').value;
        var password=document.getElementById('pass').value;
        var rePass=document.getElementById('conf').value;
        var name=document.getElementById('nombre').value;
        var apellido=document.getElementById('ape').value;
    
    
        if(password==rePass){
            
            firebase.auth().createUserWithEmailAndPassword(email, password)
            
            .catch(function(error) {
    
            alert('El error fue:'+error.message);
          
             
        })
            setTimeout(function(){
                var userId=firebase.auth().currentUser.uid;
                EnviarDatos(userId, name, apellido, email);
                console.log('Ya se enviaron los datos');
            },5000)
        }else{
            console.log('Las contraseñas no son iguales');
        }
    
    
        
    }
    
    /*
     function auth(){
    
        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        
        
        var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'menu.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
           firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        
           firebase.auth.EmailAuthProvider.PROVIDER_ID, // te crea el login de ingreso con email y usuario
        ],
        // Terms of service url.
        tosUrl: 'index.html',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
      };
    
      // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
    } ;
    */



////////////////////////////////// SCRIPT LOGIN  ///////////////////////////////////////////////////// 


  



function login(){

        var user_email = document.getElementById("email_login").value;
        var user_pass = document.getElementById("password_login").value;


        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
            
              var user = firebase.auth().currentUser;

              window.location.replace('main.html');
        
        
            } else {
              // No user is signed in.
        
              
        
            }
          });

        firebase.auth().signInWithEmailAndPassword(user_email, user_pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;


            window.alert("Error : " + errorMessage);

            // ...
          });
}


function logout(){

    firebase.auth().signOut();
    window.location.replace('index.html');

}

function regis(){

    window.location.replace('registro.html');
}
