var firebaseConfig = {
  apiKey: "AIzaSyAh9AtXRRYMglzX5EXDyw-9vSnhPMeA6gA",
  authDomain: "lets-chat-app-7379e.firebaseapp.com",
  databaseURL: "https://lets-chat-app-7379e-default-rtdb.firebaseio.com",
  projectId: "lets-chat-app-7379e",
  storageBucket: "lets-chat-app-7379e.appspot.com",
  messagingSenderId: "98993113076",
  appId: "1:98993113076:web:1006bc59e2f79d0ba55ba1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Logout() {
  localStorage.removeItem("UserName");
  localStorage.removeItem("roomname");
  window.location="index.html";
}
firebase.initializeApp(firebaseConfig);
UserName=localStorage.getItem("UserName");
document.getElementById("Welcome_Name").innerHTML= "Welcome"+ UserName +"!";
function AddRoom() {
  room_name=document.getElementById("RoomName").value;
  firebase.database().ref("/").child(room_name).update({
        Purpose:"addRoomName"
  });
  localStorage.setItem("roomname",room_name);
  window.location="LetChat_page.html";
};
