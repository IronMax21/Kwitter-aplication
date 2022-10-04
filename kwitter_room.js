//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD4mL-kqPZwo1VsbTHOke4TuVjT8_PJ8as",
      authDomain: "kwitter-cde60.firebaseapp.com",
      databaseURL: "https://kwitter-cde60-default-rtdb.firebaseio.com",
      projectId: "kwitter-cde60",
      storageBucket: "kwitter-cde60.appspot.com",
      messagingSenderId: "1005257597869",
      appId: "1:1005257597869:web:b5eb1264edb0a77d2d7724",
      measurementId: "G-TKZ1PX8LW6"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome "+user_name+" ! ";


    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding a new room"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
    }
    function getData() { firebase.database().ref("/").on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}

      
      getData();

      function redirectToRoomName(name) { console.log(name);
      localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html"; }

      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }
