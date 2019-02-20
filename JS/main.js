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
