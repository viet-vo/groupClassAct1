var name = $("#userInput1").val().trim();
var email = $("#userInput2").val().trim();
var startDate = $("#userInput3").val().trim();
var rate = $("#userInput4").val().trim();

var config = {
    apiKey: "AIzaSyB4Ooeb3AO3GUZ0PlheNtyy2jhedAaIuIQ",
    authDomain: "firstproject-vqv.firebaseapp.com",
    databaseURL: "https://firstproject-vqv.firebaseio.com",
    projectId: "firstproject-vqv",
    storageBucket: "firstproject-vqv.appspot.com",
    messagingSenderId: "578400054546"
};
firebase.initializeApp(config);
var database = firebase.database();
var connectionsRef = database.ref("/connections");
// -------------------------------------------------------------------
var exampleName = "John John";
var exampleEmail = "example@gmail.com";
var exampleDate = "03/23/2007";
var exampleRate = "3500";

var name = exampleName;
var email = exampleEmail;
var date = exampleDate;
var rate = exampleRate;

var rowH = ""
database.ref("/bidderData").on("value", function(snap) {
    name = snap.val().name;
    email = snap.val().email;
    date = snap.val().date;
    rate = snap.val().rate;
    $
});





connectedRef.on("value", function(snap) {
    if (snap.val()) {
        var con = connectionRef.push(true);
        con.onDisconnect().remove();
    }
});
connectionsRef.on("value", function(snap)) {
    console.log(snap.numChildren());
}

