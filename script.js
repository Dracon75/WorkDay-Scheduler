
//moment.js

//calls and displays current month day and year in header
let todayHeader = moment().format("MMM Do, YYYY");
$("#currentDay").text(todayHeader);

//calls and displays current hour and minute in header
var currentTimeHeader = moment().format("h:mma");
$("#currentMoment").text(currentTimeHeader);

//changes variable from string to Int 
var hour = parseInt(moment().format("H"));

//class activityBar= current hour
var hourActivityBar = $(".activityBar");
console.log("hour " + hour);

//for each hour on activityBar check status of moment.js
hourActivityBar.each(function () {
    var hourInt = parseInt(hour);
    var activityBarInt = parseInt($(this).attr("id"));

    if (activityBarInt == hourInt) {
        $(this).addClass("bg-success");
        $(this).addClass("text-light");
        console.log(activityBarInt + " equals " + hourInt);
    }
    else if (activityBarInt < hourInt) {
        $(this).addClass("bg-secondary");
        $(this).addClass("text-light");
        console.log(activityBarInt + " is less than " + hourInt);
    }
    else if (activityBarInt > hourInt) {
        $(this).addClass("bg-primary");
        $(this).addClass("text-light");
        console.log(activityBarInt + " is greater than " + hourInt);
    }
});


//todo activity 26

var activityText = document.getElementById("#activityText");
var activityForm = document.getElementById("#activityForm");
var activityList = document.getElementById("#activityList");


var activities = [];

init();

function renderActivities() {

  for (var i = 0; i < activities.length; i++) {
    var activity = activities[i];

    var li = document.createElement("li");
    li.textContent = activity;
    li.setAttribute("data-index", i);

    activityList.appendChild(li);
    console.log("list item created");
  }
}


function init() {
  
  var storedActivities = JSON.parse(localStorage.getItem("activities"));

 
  if (storedActivities !== null) {
    activities = storedActivities;
  }

  
  renderActivities();
}



$( "#activityForm" ).submit(function( event ) {
    event.preventDefault();
    var activityTextAlot = activityText.value;
    if (activityTextAlot === "") {
        return;
      }
      activities.push(activitiesTextAlot);
      activityText.value = "";

    
    renderActivities();
  });


