var staffArray = [];

staffArray[0] = ["Name1", "Role", "Bio", "images/kale.jpg", "contact"];
staffArray[1] = ["Name2", "Role", "Bio", "images/kale.jpg", "contact"];
staffArray[2] = ["Name3", "Role", "Bio", "images/kale.jpg", "contact"];
staffArray[3] = ["Name4", "Role", "Bio", "images/kale.jpg", "contact"];
staffArray[4] = ["Name5", "Role", "Bio", "images/kale.jpg", "contact"];
staffArray[5] = ["Name6", "Role", "Bio", "images/kale.jpg", "contact"];


var staff = document.getElementById("employeesDisplay");

for (var i = 0; i < staffArray.length; i++){
  staff.innerHTML += "<article class='card'> <h2>" + staffArray[i][0] + "</h2> <section> <div class='image'><img src='" + vArray[i][3] + "' alt=''></div> <span><p>" + staffArray[i][1] + "</p></span></section><section><span><p class='price'>" + staffArray[i][2] + "</p></span></section></article>";
}