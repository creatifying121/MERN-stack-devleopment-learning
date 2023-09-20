// keywords
// variables
// data types 
// arrays 
// objects
// array of objects 
// reference and primitive 

// keywords are unique identifiers. example, var, let, map, filter, reduce, const, etc.

// variables: values which have names and are used to store data. multiple ways to create variables are var, let and const. prefer let and const over var. 

let email = 'shivaniraichandani5@gmail.com'
console.log(email);

let age = 23; 
console.log(age);

// data types: to define what kind of data we are storing or using. various data types available are string, boolean, number
console.log(typeof email)
console.log(typeof age)

// arrays
let items = ['milk','bread','butter']
items[0]='coffee'
console.log(items)

// push and pop in array
items.push('apple')
console.log(items)

items.pop()
console.log(items)

// splice method: to delete items from specific index
// syntax: splice(index, deleteCount)
// deleteCount is the number of elements you wanna delete. even if you use more number of deleteCount than the number of elements in array, then also it will give output by deleting the elements without any error
items.splice(1,2)
console.log(items)

// now if we want to insert elements to the array, then we can do it too using splice method
// syntax: itemps.splice(index, deleteCount, 'element1', 'element2',...)
items.splice(1,0,'hello', 'hi', 'got inserted')
console.log(items);
console.log(typeof items)

// objects
// problem with array: when we want to store multiple values for a single thing so we cannot differentiate those in arrays, this is overcome using objects
// let user = ['shivani', 'shivani@gmail.com', 35000, 23, 'bhopal']
// console.log(user)

let user = {
    name: 'shivani',
    email: 'shivani@gmail.com',
    salary: 4500,
    age: 23
}
console.log(user);

// accessing values from object
console.log(user.email)

// modify a value
user.name = 'shivani raichandani'
console.log(user.name)

// inserting a new value
user.address = 'bhopal'
console.log(user.address)

// deleting a value
delete user.salary
console.log(user)

// accessing multiple values
console.log(user.name, user.email)

// data type of an object is object
console.log(typeof object)

// why data type of array is object? or why arrays are objects in JavaScript?
// 1. inside an array index always start from 0
// 2. index will always be a number
// below example has no real time use
let students = ['shivani', 'purva', 'ayushi', 'juhi', 'saumya'];
// how we add elements to array
students[4]='new student'

// new way of inserting value in array
students['dekha']='object ki tarah behave kara na!!'
// above statement means that they will work as arrays, but in the backend, arrays are stored in the form of objects

// then how do we know that we are having an array in our program or we have oject? because both have object type
console.log(Array.isArray(students))
console.log(Array.isArray(user))

console.log(students)

console.log(typeof students)

// primitive and reference
// in javascript we have two types of data types, primitive and reference
// reference = [array], {objects}
// primitve = anything apart from reference is primitive, like boolean, string, number, etc.
// examples of primitive
let num1 = 100
let num2 = num1 // copying the value of num1 in num2
num2 = num2+10;
console.log(num1, num2)

// example of reference
43521583