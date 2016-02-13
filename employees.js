var staffArray = [];

staffArray[0] = ["Ron", "Quality Assurance", "A native of Bowling Green, KY, Ron loves having the opportunity to use his Master's in Early Childhood Education.", "img/staff/Ron.jpg", "ron@selp.com"];
staffArray[1] = ["Jamiece", "Accounting", "Jamiece often wishes she could just play 'Don't Spill the Beans' instead of having to count them all day.", "img/staff/Jamiece.jpg", "jamiece@selp.com"];
staffArray[2] = ["Anjali", "Customer Service", "We lured Anjali from a sweet gig at Amazon by offering her all the Tang she can drink.  Sweet!", "img/staff/Anjali.jpg", "anjali@selp.com"];
staffArray[3] = ["Tommy", "Purchasing", "Tommy is the boss's kid.  We mostly like him anyway.  Mostly.", "img/staff/Tommy.jpg", "tommy@selp.com"];
staffArray[4] = ["Teresa", "HR Manager", "Teresa hails from Denver.  She tried to hire R2-D2, but we just couldn't work out the benefits package.", "img/staff/Teresa.jpg", "teresa@selp.com"];
staffArray[5] = ["Dave", "Shipping", "Dave spends weekends with his daughter Shauna playing with the toys he wasted his paycheck buying.  No, there's not a staff discount, Dave.", "img/staff/Dave.jpg", "dave@selp.com"];
staffArray[6] = ["Sherri", "Sales Manager", "We're worried about Sherri.  Some counseling might help.", "img/staff/Sherri.jpg", "sherri@selp.com"];

var staff = document.getElementById("employeesDisplay");

var displayStaff = function(myArray) {
  for (var i = 0; i < myArray.length; i++){
    var currentPerson = myArray[i];
    var bgColor = "";

  switch (currentPerson[0]) {
    case "Ron" :
      bgColor = "hotpink";
      break;
    case "Jamiece" :
      bgColor = "green";
      break;
    case "Anjali" :
      bgColor = "yellow";
      break;
    case "Tommy" :
      bgColor = "purple";
      break;
    case "Teresa" :
      bgColor = "blue";
      break;
    case "Dave" :
      bgColor = "green";
      break;
    case "Sherri" :
      bgColor = "purple";
      break;
    default :
      bgColor = "yellow";
  }


    staff.innerHTML += "<article class='staffCard " + bgColor + "'><a href='mailto:" + currentPerson[4] + "' class='staffName'><h1>" + currentPerson[0] + "</h1></a> <div class='image'><img src='" + currentPerson[3] + "' alt='' class='staffImage'></div><p>" + currentPerson[1] + "</p></article>";
  }
}

displayStaff(staffArray);


