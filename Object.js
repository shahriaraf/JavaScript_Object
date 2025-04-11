let user = {
    name: "araf",
    age: 23,
};


// acces any key from the object
console.log(user.name); 
console.log(user.age);


// adding any value to the object
user.isAdult = true;

console.log(user);

user["is Married"] = false;

console.log(user);
console.log(user["is Married"]);

const someKey = "is Married";

console.log(user[someKey]);

let car = prompt("Which is your fav car?");

let favCar = {
    [car]: 5,
}

console.log(favCar);
