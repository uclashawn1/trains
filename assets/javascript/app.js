// Initialize firebase
var config = {
    apiKey: "AIzaSyB3YaNcNPVAQ-1vzpxqaN4JNSuI6YncBgM",
    authDomain: "trains-88c8a.firebaseapp.com",
    databaseURL: "https://trains-88c8a.firebaseio.com",
    projectId: "trains-88c8a",
    storageBucket: "trains-88c8a.appspot.com",
    messagingSenderId: "278499986707"
  };
  firebase.initializeApp(config);


 var trains = firebase.database();


// Show users current time
$("#currentTime").append(moment().format("hh:mm A"));
// button for adding trains
$("#addTrainBtn").on("click", function (){
    event.preventDefault;
    // grab user input
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = moment($("#firstTrainInput").val().trim(), "hh:mm").subtract( 10, "years").format("X");
    var frequency = $("#frequencyInput").val().trim();

// create object to hold train data
var newTrain = {
name: trainName,
destination: destination,
firstTrain: firstTrain,
frequency: frequency

}
// upload train data to database
trains.ref().push(newTrain);
// Alert and clear all text areas

alert(newTrain.name + " added.");

$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#firstTrainInput").val("");
$("#frequencyInput").val("");

return false;
});
// create firebase event for adding trains to database and to html Row
trains.on("child_added", function (childSnapshot) {

let data = childSnapshot.val();
let trainNames = data.name;
let trainDestin = data.destination;
let trainFrequency = data.Frequency;
let theFirstTrain = firstTrain.data;
console.log(theFirstTrain);

// calc minutes to arrival

let tRemainder = moment().diff(moment.unix(theFirstTrain), "minutes") % trainFrequency;
let tMinutes = trainFrequency - tRemainder;
let tArrival = moment().add(tMinutes, "m").format("hh:mm A");
// add each trains data to table

$("#trainTable > tbody").append("<tr><td>" + trainNames + "</td><td>" + trainDestin + "</td><td class='min'>" + trainFrequency + "</td><td class='min'>" + tArrival + "</td><td class='min'>" + tMinutes + "</td></tr>");

});