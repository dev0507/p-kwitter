
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = { apiKey: "AIzaSyC89QJzmDUNKIqreIlq2OOkD6rzffitt8A",
 authDomain: "kwitter-6e51f.firebaseapp.com",
  databaseURL: "https://kwitter-6e51f-default-rtdb.firebaseio.com",
   projectId: "kwitter-6e51f", storageBucket: "kwitter-6e51f.appspot.com",
    messagingSenderId: "367714092610", appId: "1:367714092610:web:4174a5cc02639159524fdb" }; 
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();
 user_name=localStorage.getItem("user_name") ;
document.getElementById("user_name").innerHTML = user_name;
function addRoom() { room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update
 ({ purpose : "adding room name" });
  localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html" }


 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(room_name) ;
row="<div class='room_name' id = " +Room_names+"onclick='RedirectToRoomName(this.id)'> " +Room_names+"</div> <br>" ; 
document.getElementById("output").innerHTML=row ; 
      //End code
      });});}
getData();
function RedirectToRoomName(name){

console.log(name);
localStorage.setItem("room_name",name) ; 
window.location="kwitter_room.html" ;



}
function logout(){
      localStorage.removeItem("user_name") ;
      localStorage.removeItem("room_name") ;
      window.location="index.html" ;
}