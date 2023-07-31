// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyA7azTKQCq-obaEZlG2W5KIVMXAaNjaDcI",
    authDomain: "letschat-5db8f.firebaseapp.com",
    databaseURL: "https://letschat-5db8f-default-rtdb.firebaseio.com",
    projectId: "letschat-5db8f",
    storageBucket: "letschat-5db8f.appspot.com",
    messagingSenderId: "1010345748806",
    appId: "1:1010345748806:web:ffccde12d495ab5d4ddd47",
    measurementId: "G-Y7GC7C2QVY"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



