var staffArray = [];

staffArray[0] = ["Ron", "Quality Assurance", "square1", "img/staff/Ron.jpg", "ron@shlp.com"];
staffArray[1] = ["Jamiece", "Accounting", "square2", "img/staff/Jamiece.jpg", "jamiece@shlp.com"];
staffArray[2] = ["Anjali", "Customer Service", "square3", "img/staff/Anjali.jpg", "anjali@shlp.com"];
staffArray[3] = ["Tommy", "Purchasing", "square4", "img/staff/Tommy.jpg", "tommy@shlp.com"];
staffArray[4] = ["Teresa", "HR Manager", "square1", "img/staff/Teresa.jpg", "teresa@shlp.com"];
staffArray[5] = ["Dave", "Shipping", "square2", "img/staff/Dave.jpg", "dave@shlp.com"];
staffArray[6] = ["Sherri", "Sales Manager", "square3", "img/staff/Sherri.jpg", "sherri@shlp.com"];

var staff = document.getElementById("employeesDisplay");

for (var i = 0; i < staffArray.length; i++){
  var currentStaff = staffArray[i];
  var bgColor = "";

  switch (currentStaff[0]) {
    case "Ron" :
      bgColor = "red";
      break;
    case "Jamiece" :
      bgColor = "green";
      break;
    case "Anjali" :
      bgColor = "yellow";
      break;
    case "Tommy" :
      bgColor = "blue";
      break;
    case "Teresa" :
      bgColor = "red";
      break;
    case "Dave" :
      bgColor = "orange";
      break;
    case "Sherri" :
      bgColor = "green";
      break;
    default :
      bgColor = "blue";
  }


  staff.innerHTML += "<article class='staffCard " + bgColor + "'><a href='mailto:" + currentStaff[4] + "' class='staffName'><h1>" + currentStaff[0] + "</h1></a> <section> <div class='image'><img src='" + currentStaff[3] + "' alt='' class='staffImage'></div><p>" + currentStaff[1] + "</p></section></article>";
}