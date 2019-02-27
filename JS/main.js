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
function createNewChild() {
  var  fname = document.getElementById("cfName").value;
  var  lname = document.getElementById("clName").value;
  this.firstName = fname;
  this.lastName = lname;
    alert(this.firstName + " " + this.lastName);
}

var newTask1 = new Task3();
console.log(newTask1.getCreatedDate() + "\n" + newTask1.getStartDate() + "\n" + newTask1.getEndDate() );
