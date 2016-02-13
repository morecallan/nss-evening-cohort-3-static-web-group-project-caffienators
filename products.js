var toys = [
product1 = {
  name: "Sea Monkeys",
  description: "description goes here",
  url: "img/product1.jpg",
  price: "$44.57",
  pageRef: "seaMonkeys"
},
product2 = {
  name: "Lunch Boxes",
  description: "description goes here",
  url: "img/product2.jpg",
  price: "$78.99",
  pageRef: "lunchBoxes"
},
product3 = {
  name: "Board Games",
  description: "description goes here",
  url: "img/product3.jpg",
  price: "price goes here",
  pageRef: "boardGames"
},
product4 = {
  name: "Tang",
  description: "It's what the astronauts drink!",
  url: "img/product4.jpg",
  price: "price goes here",
  pageRef: "tang"
},
product5 = {
  name: "Rock 'Em, Sock 'Em Robots",
  description: "description goes here",
  url: "img/product5.jpg",
  price: "price goes here",
  pageRef: "rockEmSockEmRobots"
},
product6 = {
  name: "Evil Knievel",
  description: "description goes here",
  url: "img/product6.jpg",
  price: "price goes here",
  pageRef: "evilKnievel"
},
product7 = {
  name: "Atari",
  description: "description goes here",
  url: "img/product7.jpg",
  price: "price goes here",
  pageRef: "attari"
},
product8 = {
  name: "Teddy Ruxpin",
  description: "description goes here",
  url: "img/product8.jpg",
  price: "price goes here",
  pageRef: "teddyRuxpin"
},
product9 = {
  name: "Stretch Armstrong",
  description: "description goes here",
  url: "img/product9.jpg",
  price: "price goes here",
  pageRef: "stretchArmstrong"
},
product10 = {
  name: "View Master",
  description: "description goes here",
  url: "img/product10.jpg",
  price: "price goes here",
  pageRef: "viewMaster"
},
product11 = {
  name: "Moon Shoes",
  description: "description goes here",
  url: "img/product11.jpg",
  price: "price goes here",
  pageRef: "moonShoes"
},
product12 = {
  name: "Voltron",
  description: "description goes here",
  url: "img/product12.jpg",
  price: "price goes here",
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


addProduct(toys, "products");
