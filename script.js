function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin", "alfredo", ["four cheese"], ["chicken", "buffalo sauce"]);
var pizza4 = pizzaOven("stuffed", "tomato", ["jack", "cheddar"], ["pepperoni", "green pepper"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

// Bonus:

var pizza = {
    "crustType": ["deep dish", "hand tossed", "thin", "stuffed"],
    "sauceType": ["traditional", "marinara", "alfredo", "tomato"],
    "cheese": ["mozzarella", "feta", "four cheese", "jack", "cheddar"],
    "toppings": ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken", "buffalo sauce", "green pepper"]
}

function randomPizza(){
  var generateCrust = Object.values(pizza.crustType);
  console.log(generateCrust[Math.floor(Math.random() * generateCrust.length)]);
  var generateSauce = Object.values(pizza.sauceType);
  console.log(generateSauce[Math.floor(Math.random() * generateSauce.length)]);
  var generateCheese = Object.values(pizza.cheese);
  console.log(generateCheese[Math.floor(Math.random() * generateCheese.length)]);
  var generateTopping = Object.values(pizza.toppings);
  console.log(generateTopping[Math.floor(Math.random() * generateTopping.length)]);
}
  
randomPizza();