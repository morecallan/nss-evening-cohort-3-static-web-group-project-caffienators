var toys = [
product1 = {
  name: "Sea Monkeys",
  description: "They breathe through their feet.",
  url: "img/product1.jpg",
  price: "$44.57",
  pageRef: "seaMonkeys"
},
product2 = {
  name: "Lunch Boxes",
  description: "Must use for actual food.",
  url: "img/product2.jpg",
  price: "$78.99",
  pageRef: "lunchBoxes"
},
product3 = {
  name: "Board Games",
  description: "In case you can't get a date IRL.",
  url: "img/product3.jpg",
  price: "$69.98",
  pageRef: "boardGames"
},
product4 = {
  name: "Tang",
  description: "It's what the astronauts drink!",
  url: "img/product4.jpg",
  price: "$17.96",
  pageRef: "tang"
},
product5 = {
  name: "Rock 'Em, Sock 'Em Robots",
  description: "Anger mgmt for kids.",
  url: "img/product5.jpg",
  price: "$260.00",
  pageRef: "rockEmSockEmRobots"
},
product6 = {
  name: "Evel Knievel",
  description: "He wanted to marry his girlfriend, so he kidnapped her.",
  url: "img/product6.jpg",
  price: "$374.99",
  pageRef: "evilKnievel"
},
product7 = {
  name: "Atari",
  description: "Japanese 'ataru'= 'prepare to get your ass kicked'.",
  url: "img/product7.jpg",
  price: "$79.99",
  pageRef: "attari"
},
product8 = {
  name: "Teddy Ruxpin",
  description: "Official Spokesbear of Missing & Exploited kids",
  url: "img/product8.jpg",
  price: "$450.00",
  pageRef: "teddyRuxpin"
},
product9 = {
  name: "Stretch Armstrong",
  description: "Creators once drunkenly modified mold to have penis.",
  url: "img/product9.jpg",
  price: "$2,249.00",
  pageRef: "stretchArmstrong"
},
product10 = {
  name: "View Master",
  description: "Cool enough for Mary J. Blige.",
  url: "img/product10.jpg",
  price: "$127.39",
  pageRef: "viewMaster"
},
product11 = {
  name: "Moon Shoes",
  description: "Increases your insurance rate.",
  url: "img/product11.jpg",
  price: "$85.49",
  pageRef: "moonShoes"
},
product12 = {
  name: "Voltron",
  description: "Voltron: Defender of the Universe!",
  url: "img/product12.jpg",
  price: "$63.99",
  pageRef: "voltron"
}
];


var makeProductString = function(myObj) {
  var productString = "";
  productString += "<article class='productCard'><img src='" + (myObj.url) + "' class='productImage'" + " id='" + myObj.pageRef + "'>";
  productString += "<p class='productTitle'>" + (myObj.name) + "</p >";
  productString += "<p class='productDescription'>" + (myObj.description) + "</p>";
  productString += "<p class='productPrice'>" + (myObj.price) + "</p></article>";

  return productString;
};


var addProduct = function(myArray, myId) {
  for (var i = 0; i < myArray.length; i++) {
    productString = makeProductString(myArray[i]);
    var productElement = document.getElementById(myId);
    productElement.innerHTML += productString;
    console.log(productElement);
  };
};


addProduct(toys, "productsDisplay");
