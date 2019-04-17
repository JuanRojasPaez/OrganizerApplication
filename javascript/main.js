//To inform that you will only see the schedule which is made for todays date.
alert("You will only see your task if it is created on today's date");


var newTaskName;
var newTaskDesc;
var newTaskLocation;
var newTaskEventAllDay;
var newTaskStartingDate;
var chosenColor;
var dOfWeek = document.getElementById("dayOfWeek");
var holder = document.getElementById("spacerForTasks");
var noTasksOnCurrentDay = document.getElementById('noCreatedTasks');
var modalChange = document.getElementById('exampleModalLabel');
var textInsideModal = document.getElementById('insideModal');
var dOfMonth = document.getElementById("numberOfMonth");

var displayNumTasks = document.getElementById('numTasks');
var separatedYear;
var separatedMonth;
var separatedDay;
var newDate = new Date();

var today = new Date();
var todayDay = today.getDate();
var todayMonth = today.getMonth();

const days2 = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//Array containing test objects. Change 2nd task 'taskStartingDay' to another number to display empty message
var tasksCreated = [
  {id: 0, taskName: 'Mike piano lessons', taskDescription: 'Piano lessons for Mike at 3:30pm', taskLocation: 'Piano School', taskAllDay: false, taskStartingYear: 2019, taskStartingMonth: 03, taskStartingDay: 13, taskCompleted: false,colorPicked: '#00dfb8'},
  {id:1, taskName: 'Lucy soccer practise', taskDescription: "Lucy has soccer practise at 1pm", taskLocation: '123 Sample Street Road', taskAllDay: true, taskStartingYear: 2019, taskStartingMonth: todayMonth, taskStartingDay: todayDay, taskCompleted: false,colorPicked: '#4E6ECF' },
];

printSelectedTasks();

dOfWeek.innerHTML = getTodayAlphaDay() ;
dOfMonth.innerHTML = "<b>" + getTodayNumberText() + "</b>"  + " " + getTodayNumber() + " " + getTodayCurrentYear();

/*
  Pick up submited form values and add them to the tasksCreated array
  (In real world this would be added to database)
*/
function newTaskSubmit(){
  //assign submited values
  newTaskName = document.getElementById("tName").value;
  newTaskDesc = document.getElementById("tDesc").value;
  newTaskLocation = document.getElementById("tLocation").value;
  newTaskEventAllDay = document.getElementById("tAllDay").checked;
  newTaskStartingDate = document.getElementById("tStartDate").value;
  chosenColor = document.getElementById("chosenColor").value;

  /*
  separate date into Year, Month, Day.
  String has to be parsed into an int to be compared with current date.
  */
  var arr = newTaskStartingDate.split("-");
  separatedYear =  parseInt(arr[0],10);
  separatedMonth=  parseInt(arr[1],10);
  separatedDay = parseInt(arr[2],10);

  /*
  Add form values to array of objects
  */
  tasksCreated.push({
    id:tasksCreated.length,
    taskName: newTaskName,
    taskDescription: newTaskDesc,
    taskLocation: newTaskLocation,
    taskAllDay: newTaskEventAllDay,
    taskStartingYear: separatedYear,
    taskStartingMonth: separatedMonth,
    taskStartingDay: separatedDay,
    taskCompleted: false,
    colorPicked: chosenColor
  });

  /*
    Reset value forms to allow for a new task to be created
  */
  document.getElementById("tName").value = '';
  document.getElementById("tDesc").value = '';
  document.getElementById("tLocation").value = '';
  document.getElementById("tAllDay").checked = '';
  document.getElementById("tStartDate").value = '';

  event.preventDefault();
  //alert(separatedYear +" " + separatedMonth + " " + separatedDay);
  printSelectedTasks();
}

/*
  Show the tasks which have the same day as today's date and display them.
*/
function printSelectedTasks(){
  var numberOfTasks = 0;
  holder.innerHTML = '';
  modalChange.innerHTML = "";
  for(var i = 0;i < tasksCreated.length;i++){
    if(tasksCreated[i].taskStartingDay == todayDay){
      noTasksOnCurrentDay.style.display = "none";
    }
    if(tasksCreated[i].taskStartingDay == todayDay){
      holder.innerHTML += "<button class='btn changeFontColor' style='background-color:" +  tasksCreated[i].colorPicked +  "'"+ 'data-toggle="modal" data-target="#exampleModal"'+  "id= "+tasksCreated[i].id   +" onClick= checkTaskButtonClicked(this.id)>" + tasksCreated[i].taskName + "</button><br>";
      numberOfTasks++;
    }
  }
  displayNumTasks.innerHTML = "Number of tasks for today: " + numberOfTasks + "</br></br> Click on any task to find out more information" ;

}

/*
  Display task information when task button is clicked.
*/
function  checkTaskButtonClicked(uniqueID){
    var uniqueIdToInt = parseInt(uniqueID);
    var isAllDayEvent;
    tasksCreated[uniqueIdToInt].taskName;
    modalChange.innerHTML = tasksCreated[uniqueIdToInt].taskName;
    if(tasksCreated[uniqueIdToInt].taskAllDay){
      isAllDayEvent = "This event is occuring all day";
    }
    else{
      isAllDayEvent = "This event is not occuring all day"
    }
    textInsideModal.innerHTML = "<b>Description: </b>" + tasksCreated[uniqueIdToInt].taskDescription + "<br>" + "<b>Location: </b>" + tasksCreated[uniqueIdToInt].taskLocation + "<br>" + "<b>Duration of event: </b>" +isAllDayEvent;
}

//get current day of month
function getTodayNumber(){
  var i = new Date();
  return i.getDate();
}
//get current month in text format
function getTodayNumberText(){
  var i = new Date();
  return months[i.getMonth()];
}
//get todays date in text format
function getTodayAlphaDay(){
  var day = new Date();
  return days2[day.getDay()];
}
//get current year
function getTodayCurrentYear(){
  var year = new Date();
  return year.getFullYear();
}









/*THE BELOW FEATURES WERE TEST METHODS TO DISPLAY THE DATA AND HAVE NOT BEEN USED*/

var nextButton = document.getElementById("moveScheduleFordward");
var previousButton = document.getElementById("moveScheduleBackward");
var buttonCounter = 0;
var newCounter = 0;

function resetdaysLess(){
  if(buttonCounter == 7){
    buttonCounter = 0;
    buttonCounter--;
    return buttonCounter;
  }
  else if(buttonCounter >=0){
    return buttonCounter;
  }
  /*buttonCounter--;


  if(buttonCounter == -1){
    buttonCounter = 1;
    return buttonCounter;
  }
  else if(buttonCounter == 0) {
    newCounter++;

    return newCounter;
  }
  else if(buttonCounter <= 7 ){
    newCounter++;
    return newCounter;
  }
  else{
    buttonCounter = 0;
  }*/
}

function resetdaysMore(){
  buttonCounter++;
  if (buttonCounter == 7){
    buttonCounter = 0;
    return buttonCounter;
  }
  else if(buttonCounter >=0){
    return buttonCounter;
  }
}

function newYesterdayAlphaDay(counter){
  var date = new Date();
  date.setDate(date.getDate() - counter);
  return days2[date.getDay()];
}
function newTomorrowAlphaDay(counter){
  var date = new Date();
  date.setDate(date.getDate() + counter);
  return days2[date.getDay()];
}

function Task1(){
  this.taskName = "Max Soccer Practise";
  this.taskID = "34753";

  this.createdMonth = "February";
  this.createdDay = "1";
  this.createdYear = "2019";

  this.startMonth = "February";
  this.startDay = "10";
  this.startYear = "2019";

  this.endMonth = "February";
  this.endDay = "10";
  this.endYear = "2019";

  this.startTime = "10:30 AM";
  this.endTime = "11:30 am";

  this.reminderTime = "10:00 AM";
  this.location = "Soccer Field";

  this.repeatDays = ["Sunday","Wednesday"];

  this.specialNotes = "Bring Water";

  this.childAttending = true;

  this.childAttendingName = "Max";
}

Task1.prototype.getStartDate = function(){
  return (this.startMonth + " " + this.startDay + " " + this.startYear);
}
Task1.prototype.getEndDate = function(){
  return (this.endMonth + " " + this.endDay + " " + this.endYear);
}
Task1.prototype.getCreatedDate = function(){
  return (this.createdMonth + " " + this.createdDay + " " + this.createdYear);
}

//Object for task2
var Task2 = {
  taskName: "Sophie Piano Lessons",
  taskID: "948846",

  createdMonth : "January",
  createdDay : "13",
  createdYear : "2019",

  startMonth : "February",
  startDay : "16",
  startYear : "2019",

  endMonth : "February",
  endDay : "16",
  endYear : "2019",

  startTime : "8 AM",
  endTime : "9:30 am",

  reminderTime : "7AM",
  location : "School",

  repeatDays :["Monday","Saturday"],

  specialNotes : "Bring notes and piano",

  childAttending : true,

  childAttendingName : "Sophie",

  getStartDate : function(){
    return ("Start date now: " + this.startMonth + " " + this.startDay + " " + this.startYear);
  },

  getEndDate : function(){
    return (this.endMonth + " " + this.endDay + " " + this.endYear);
  },

  getCreatedDate : function(){
    return (this.createdMonth + " " + this.createdDay + " " + this.createdYear);

  },
};
function Task3(){
  this.taskName = "Dentist Appointment";
  this.taskID = "832700";

  this.createdMonth = "February";
  this.createdDay = "11";
  this.createdYear = "2019";

  this.startMonth = "February";
  this.startDay = "27";
  this.startYear = "2019";

  this.endMonth = "February";
  this.endDay = "27";
  this.endYear = "2019";

  this.startTime = "10:00 AM";
  this.endTime = "12:30 am";

  this.reminderTime = "";
  this.location = "Dr Michaels Clinic";

  this.repeatDays = [];

  this.specialNotes = "Brush Teeth";

  this.childAttending = false;

  this.childAttendingName = "";
}
Task3.prototype.getStartDate = function(){
  return (this.startMonth + " " + this.startDay + " " + this.startYear);
}
Task3.prototype.getEndDate = function(){
  return (this.endMonth + " " + this.endDay + " " + this.endYear);
}
Task3.prototype.getCreatedDate = function(){
  return (this.createdMonth + " " + this.createdDay + " " + this.createdYear);
}


function displayTaskCreator() {
  var x = document.getElementById("tCreator");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function displayChildCreator(){
  var x = document.getElementById("cCreator");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function createNewChild() {
  var  fname = document.getElementById("cfName").value;
  var  lname = document.getElementById("clName").value;
  this.firstName = fname;
  this.lastName = lname;
    alert(this.firstName + " " + this.lastName);
}

function getFirstDayOfMonth(year, month){
    var date = new Date(year, month, 1);
    return days2[date.getDay()];
}


function getYesterdayAlphaDay(){
  var date = new Date();
  date.setDate(date.getDate() - 1)
  return days2[date.getDay()];
}

//Returns
function getYesterdayMonth(){
  var d = new Date();
  d.setDate(d.getDate() - 1); //Set the date to be yesterdays date
  //var curr_date = d.getDate();
  var month = d.getMonth() ;
  return months[month];
//var curr_year = d.getFullYear();
}

function getYesterdayNumberDay(){
  var d = new Date();
  d.setDate(d.getDate() - 1); //Set the date to be yesterdays date
  return d.getDate();
}

function getYesterdayYear(){
  var d = new Date();
  d.setDate(d.getDate() - 1); //Set the date to be yesterdays date
  return d.getFullYear();
}

function getTomorrowMonth(){
  var d = new Date();
  d.setDate(d.getDate() + 1); //Set the date to be yesterdays date
  //var curr_date = d.getDate();
  var month = d.getMonth() ;
  return months[month];
}
function getTomorrowAlphaDay(){
  var date = new Date();
  date.setDate(date.getDate() + 1);
  return days2[date.getDay()];
}
function getTomorrowNumberDay(){
  var d = new Date();
  d.setDate(d.getDate() + 1); //Set the date to be yesterdays date
  return d.getDate();
}

function getTomorrowYear(){
  var d = new Date();
  d.setDate(d.getDate() + 1); //Set the date to be yesterdays date
  return d.getFullYear();
}
