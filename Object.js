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


// Constructor Function
function Car(name, model){
    this.name = name;
    this.model = model;
}

const bmwCar = new Car('BMW', "X1");
console.log(bmwCar);

console.log(bmwCar instanceof Car);

const person = new Object()
person.name = "Araf";
person.age = 24;
console.log(person);


// Factory Function
function createUser(name, age){
    return{
        name,
        age
    }
}

const user1 = createUser("Bob", 39);
console.log(user1);
const user2 = createUser("John", 30);
console.log(user2);