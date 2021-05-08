//YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyC89QJzmDUNKIqreIlq2OOkD6rzffitt8A",
 authDomain: "kwitter-6e51f.firebaseapp.com",
  databaseURL: "https://kwitter-6e51f-default-rtdb.firebaseio.com",
   projectId: "kwitter-6e51f",
    storageBucket: "kwitter-6e51f.appspot.com",
     messagingSenderId: "367714092610",
      appId: "1:367714092610:web:4174a5cc02639159524fdb" };
       firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name") ;
room_name = localStorage.getItem("room_name") ;
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id) ;
console.log(message_data) ;
name = message_data['name'] ;
message = message_data['message'] ;
like = message_data['like'] ;
name_with_tag ="<h4>"+name+"<img src ='tick.png' class = 'user_tick' > </h4>" ;
message_with_tag ="<h4>"+message+"</h4>" ;
 like_button = "<button class=' btn btn-warning' id =" +firebase_message_id+"value="+like+"onclick='update_like(this.id)'</button>" ;

 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row = name_with_tag+message_with_tag +like_button_span+span_with_tag ;
  document.getElementById("output").innerHTML = row ;
//End code
      } });  }); }
getData();
function updateLike(message_id)
 { console.log("clicked on like button - " + message_id); 
 button_id = message_id; likes = document.getElementById(button_id).value; updated_likes = Number(likes) 
 + 1; console.log(updated_likes);
 firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
 }
function logout(){
      localStorage.removeItem("user_name") ;
      localStorage.removeItem("room_name") ;
      window.location="index.html" ;
}

function send(){
       msg=document.getElementById("msg").value ; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      }
      );
      document.getElementById("msg").value = "" ;
}
function set(){
      localStorage.setItem="msg" ; 
      
      
}