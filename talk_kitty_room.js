//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC56yyIAc9CrRsx34PI8YxTBhQFpnklEgs",
    authDomain: "kwitter-1ad8a.firebaseapp.com",
    projectId: "kwitter-1ad8a",
    storageBucket: "kwitter-1ad8a.appspot.com",
    messagingSenderId: "420671870446",
    appId: "1:420671870446:web:5a369647e899bbb7a7aaff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();