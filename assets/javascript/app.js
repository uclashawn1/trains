// Initialize firebase
var config = {
api key: "",
authDomain: "",
databaseURL: "",
projectID: "",
storageBucket: "",
messagingSenderID: ""
}

firebase.initializeApp (config);

var trainData = firebase.database().ref();

// Show users current time
$("#currentTime").append(moment().format("hh:mm A"));
// button for adding trains
$("#addTrainBtn").on("click", function (){
    event.preventDefault;
    // grab user input
    var name: $("#trainNameInput").val().trim();
    var destination: $("#destinationInput").val().trim();
    var firstTrain: moment($("#trainNameInput").val().trim()
    var frequency: $("#trainNameInput").val().trim()
}
)

// create object to hold train data
var newTrain = {
name: trainName,
destination: destination,
firstTrain: firstTrain,
frequency: frequency

}
// upload train data to database
trainData.push(newTrain);
// Alert and clear all text areas

alert(newTrain.name + " successfully added.");

$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#firstTrainInput").val("");
$("#frequencyInput").val("");

Return false;
// create firebase event for adding trains to database and to html Row

// calc minutes to arrival
let tArrival = moment().add(tMinutes, "m").format("hh:mm A");

// add each trains data to table

