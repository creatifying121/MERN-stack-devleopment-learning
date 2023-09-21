// Array Operations

// creating an empty array "fruits"
let fruits = []

// adding the fruits to array : "apple","banana","orange"
fruits.push("apple")
fruits.push("banana")
fruits.push("orange")
console.log(fruits)

// removing first fruit from array
fruits.splice(0,1);
console.log(fruits)

// adding "grape" in the end
fruits.push("grape")
console.log(fruits)

// updating second value as "pear"
fruits[1] = "pear"
console.log(fruits)


// Object Operations

// creating an empty object
let person = {}

// adding properties to object : name, age and city
person.name = "John"
person.age = 30
person.city = "New York"
console.log(person)

// removing age property
delete person.age
console.log(person)

// adding new property "job" to person object with value "Engineer"
person.job = "Engineer"
console.log(person)

// updating city of person object to "San Francisco"
person.city = "San Francisco"
console.log(person)


// Array of Objects Operations

// creating an empty array "cars"
let cars = []

// adding three car objects to array with values : make: "Toyota", model: "Camry", year: 2020
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
}
cars.push(car)
cars.push(car)
cars.push(car)
console.log(cars)

// removing first car object from array
cars.splice(0,1)
console.log(cars)

// add new car object to the "cars" array with properties - make: "Honda", model: "Civic" , year: 2020
let newCar = {
    make: "Honda",
    model: "Civic",
    year: 2020
}
cars.push(newCar)
console.log(cars)

// updating the model property of second car object to "Accord"
cars[1].model="Accord"
console.log(cars)