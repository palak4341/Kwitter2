var firebaseConfig = {
      apiKey: "AIzaSyD_KDoPwmpZJW9w3cTiL7s0AoeAAMCV4b0",
      authDomain: "kwitter-4e552.firebaseapp.com",
      databaseURL: "https://kwitter-4e552-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e552",
      storageBucket: "kwitter-4e552.appspot.com",
      messagingSenderId: "909960853492",
      appId: "1:909960853492:web:91dc364f873bbd17f2eba1"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name; 

function addRoom()
{
      room_name = document.getElementById("room_name").value ; 

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row = "<div class=' room_name ' id="+Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code

      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
