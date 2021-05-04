//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAKa2YsFatXtfiBqWNqZi40f6LDYcKDCXY",
  authDomain: "talk-kitty.firebaseapp.com",
  databaseURL: "https://talk-kitty-default-rtdb.firebaseio.com",
  projectId: "talk-kitty",
  storageBucket: "talk-kitty.appspot.com",
  messagingSenderId: "82377960355",
  appId: "1:82377960355:web:7e60b54488ca3b41e08816"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();