const car = {
    name: "Tasla",
    model: "Model S Plaid",
    weight: "1000kg",
    color: "Black",
    start: function (){
        this.drive();
        console.log("car has started");
    },
    drive: function(){
        console.log("car is driving");
    }
};

console.log("Model S Plaid");
console.log(car["name"]);
car.start();