// agenda today: conditionals, loops and functions

// conditionals
// truthy and falsy
// functions 
// arrow functions
// loops

let student = 'shivani'
console.log(student)

// conditions
if(10>100){
    console.log("this evaluated to true")
}else{
    console.log("this evaluated as false")
}

// this will evaluate true and will print "hey" on console, this is because of truthy and falsy
if('a'){
    console.log("hey")
}else{
    console.log("bye")
}

// falsy => 0, -0, "", '', undefined, Null, NaN (these things will be evaluated as false), things other than these will be evaluated as true.

// functions
// function grinder(){
//     console.log("grinding...")
// }
// grinder();
// grinder();

// parameters
// function grinder(items){
//     console.log("grinding ",items)
// }
// grinder('tomatoes')

// arrow function syntax
// functionName = () => {
//     // logic
// }

// sqr=(n)=>{
//     console.log(n*n)
// }
// sqr(4)

// when to use what type of function


// loops => repeating something for n number of time in a program requires loops
let items = ['milk', 'bread', 'butter']
// for(let i=0; i<items.length; i++){
//     console.log(items[i])
// }

// using foreach => only works with arrays
// items.forEach(function(item){
//     console.log(item)
// })

items.forEach((item)=>{
    console.log(item)
})

// array of objects
let users = [
    {
        name: 'shivani',
        age: 23,
        gender: 'f'
    },
    {
        name: 'pooja',
        age: 24,
        gender: 'f'
    },
    {
        name: 'purva',
        age: 24,
        gender: 'f'
    },
    {
        name: 'ayushi',
        age: 22,
        gender: 'f'
    },
    {
        name: 'ladka',
        age: 25,
        gender: 'm'
    }
]

console.log(users)

// I only want to see names of users only without any other details
users.forEach((user)=>{
    console.log(user.name)
})