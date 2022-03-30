function adduser() {
    UserName= document.getElementById("UserName").value;
    localStorage.setItem("UserName",UserName);
    window.location="Let_Chat_room.html";
}