function pizzaOven(crust,sauce,cheeses,toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheeses; 
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed","marinara",["mozzarella", "feta"],["mushrooms","olives","onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("thin","spicy",["provolone", "feta"],["pepperoni","olives","onions"]);
console.log(pizza3);

var pizza4 = pizzaOven("cheese stuffed","light",["mozzarella", "provolone"],["sausage","bacon","ham"]);
console.log(pizza4);
