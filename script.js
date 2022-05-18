var crust = document.getElementById("crust");

var sauce = document.getElementById("sauce");

var toppings = [];

var formButton = document.getElementById("btn");

formButton.addEventListener("click",
    function buildOrder(event) {
        event.preventDefault();
        var topping1 = document.getElementById("topping1").value;
        var topping2 = document.getElementById("topping2").value;
        var topping3 = document.getElementById("topping3").value;
        toppings.push(topping1, topping2, topping3);
        calculateTotal(toppings);
        toppings = []; // added this to refresh the order each time the button is clicked
    }
)

function calculateTotal(toppingArray) {
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50;

    let orderString = `${crust.value} pizza with ${sauce.value}`;

    let toppingString = "Toppings: ";

    for (i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i] != "") {
            total += toppingCost;
            toppingString += (toppingArray[i] + " ");
        }
    }

    total += baseCost;
    total = total.toFixed(2); // added this for the total price to look correct with two decimal places

    document.getElementById("total").innerHTML = `$${total}`;

    document.getElementById("pizzaOrder").innerHTML = orderString;

    document.getElementById("toppings").innerHTML = toppingString;

}
