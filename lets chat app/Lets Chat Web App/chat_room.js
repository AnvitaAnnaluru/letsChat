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
  firebase.initializeApp(firebaseConfig)
  user_name= localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="Welcome" + user_name
  function addRoom(){
    room_name= document.getElementById("room_name").value
    localStorage.setItem("room_name",room_name)
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding roomname"
        
    });
    window.location="chat_room.html"
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("roomnames").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("roomname",+Room_names)
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("roomnames").innerHTML +=row
   //End code
   });});}
getData();
function redirectToRoomName(id){
    localStorage.setItem("room_name",id)
    window.location="chat_page.html"
}
function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location="index.html"
}