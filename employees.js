var staffArray = [];

staffArray[0] = ["Ron", "Quality Assurance", "Bio", "img/staff/Ron.jpg", "contact"];
staffArray[1] = ["Jamiece", "Accounting", "Bio", "img/staff/Jamiece.jpg", "contact"];
staffArray[2] = ["Anjali", "Customer Service", "Bio", "img/staff/Anjali.jpg", "contact"];
staffArray[3] = ["Tommy", "Purchasing", "Bio", "img/staff/Tommy.jpg", "contact"];
staffArray[4] = ["Teresa", "HR Manager", "Bio", "img/staff/Teresa.jpg", "contact"];
staffArray[5] = ["Dave", "Shipping", "Bio", "img/staff/Dave.jpg", "contact"];
staffArray[6] = ["Sherri", "Sales Manager", "Bio", "img/staff/Sherri.jpg", "contact"];

var staff = document.getElementById("employeesDisplay");

for (var i = 0; i < staffArray.length; i++){
  staff.innerHTML += "<article class='staffCard'> <h1>" + staffArray[i][0] + "</h1> <section> <div class='image'><img src='" + staffArray[i][3] + "' alt='' class='staffImage'></div> <span><p>" + staffArray[i][1] + "</p></span></section><section><span><p class='price'>" + staffArray[i][2] + "</p></span></section></article>";
}