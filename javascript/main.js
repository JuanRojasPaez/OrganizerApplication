const days2 = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var nextButton = document.getElementById("moveScheduleFordward");
var previousButton = document.getElementById("moveScheduleBackward");
var buttonCounter = 0;
var newCounter = 0;
var lessDate = new Date();
lessDate.getDay();
console.log(lessDate.getDay());

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
  console.log("buttonCounter original: " + buttonCounter);

  if(buttonCounter == -1){
    console.log("buttonCounter in -1: " + buttonCounter);
    buttonCounter = 1;
    console.log("buttonCounter in -1 after setting: " + buttonCounter);
    return buttonCounter;
  }
  else if(buttonCounter == 0) {
    console.log("buttonCounter in equal to 0: " + buttonCounter);
    newCounter++;
    console.log("buttonCounter in equal to 0 after setting: " + buttonCounter);

    return newCounter;
  }
  else if(buttonCounter <= 7 ){
    console.log("buttonCounter is less than 6: " + buttonCounter);
    newCounter++;
    return newCounter;
  }
  else{
    buttonCounter = 0;
  }*/
}

function resetdaysMore(){
  buttonCounter++;
  console.log("inside more, buttonCounter: " + buttonCounter);
  if (buttonCounter == 7){
    buttonCounter = 0;
    return buttonCounter;
  }
  else if(buttonCounter >=0){
    return buttonCounter;
  }
}

previousButton.addEventListener("click", function(){
 var i = resetdaysLess();
  console.log("pressed previousButton... buttonCount: " + i);
  dOfWeek.innerHTML = newYesterdayAlphaDay(buttonCounter) ;
});

nextButton.addEventListener("click", function(){
  var i = resetdaysMore();
  console.log("pressed nextButton... buttonCount or i: " + i );
  dOfWeek.innerHTML = newTomorrowAlphaDay(buttonCounter) ;
});

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




//Starting display
var yDOfWeek = document.getElementById("yesterdayDayOfWeek");
yDOfWeek.innerHTML = getYesterdayAlphaDay();//Show the day of the week for yesterdays date

var yOfMonth = document.getElementById("yesterNumberOfMonth");
yOfMonth.innerHTML = "<b>" + getYesterdayMonth() + "</b>" + " " +getYesterdayNumberDay() + " " + getYesterdayYear() ;//

var dOfWeek = document.getElementById("dayOfWeek");
//var month = document.getElementById("monthText");
dOfWeek.innerHTML = getTodayAlphaDay() ;
var dOfMonth = document.getElementById("numberOfMonth");
//month.innerHTML = getMonthText()
dOfMonth.innerHTML = "<b>" + getTodayMonthText() + "</b>"  + " " + getTodayMonth() + " " + getTodayCurrentYear();

var tDOfWeek = document.getElementById("tomorrowDayOfWeek");
tDOfWeek.innerHTML = getTomorrowAlphaDay() ;

var tDOfMonth = document.getElementById("tomorrowNumberOfMonth");
tDOfMonth.innerHTML = "<b>" + getTomorrowMonth() + "</b>" + " " + getTomorrowNumberDay() + " " + getTomorrowYear() ;//







var createDate = new Date();
var todaysDateDay = createDate.getDate();
console.log("Date today: " + todaysDateDay);

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

function Task2(){
  this.taskName = "Sophie Piano Lessons";
  this.taskID = "948846";

  this.createdMonth = "January";
  this.createdDay = "13";
  this.createdYear = "2019";

  this.startMonth = "February";
  this.startDay = "16";
  this.startYear = "2019";

  this.endMonth = "February";
  this.endDay = "16";
  this.endYear = "2019";

  this.startTime = "8 AM";
  this.endTime = "9:30 am";

  this.reminderTime = "7AM";
  this.location = "School";

  this.repeatDays = ["Monday","Saturday"];

  this.specialNotes = "Bring notes and piano";

  this.childAttending = true;

  this.childAttendingName = "Sophie";
}
Task2.prototype.getStartDate = function(){
  return (this.startMonth + " " + this.startDay + " " + this.startYear);
}
Task2.prototype.getEndDate = function(){
  return (this.endMonth + " " + this.endDay + " " + this.endYear);
}
Task2.prototype.getCreatedDate = function(){
  return (this.createdMonth + " " + this.createdDay + " " + this.createdYear);
}

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

var newTask3 = new Task3();
console.log(newTask3.taskID + "\n" + newTask3.getStartDate() + "\n" + newTask3.getEndDate() );


getFirstDayOfMonth(2019,04);
function getFirstDayOfMonth(year, month){
    var date = new Date(year, month, 1);
    return days2[date.getDay()];
}
function getTodayMonth(){
  var i = new Date();
  return i.getDate();
}
function getTodayMonthText(){
  var i = new Date();
  return months[i.getMonth()];
}
function getTodayAlphaDay(){
  var day = new Date();
  return days2[day.getDay()];
}
function getTodayCurrentYear(){
  var year = new Date();
  return year.getFullYear();
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
  //console.log(d);
  //var curr_date = d.getDate();
  var month = d.getMonth() ;
  return months[month];
//console.log(curr_month);
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
  //console.log(d);
  //var curr_date = d.getDate();
  var month = d.getMonth() ;
  return months[month];
//console.log(curr_month);
//var curr_year = d.getFullYear();
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
