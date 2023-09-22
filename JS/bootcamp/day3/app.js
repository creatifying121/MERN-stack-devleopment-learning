// array mapping and filters
// callbacks
// return in functions
// difference between foreach and map


// why prefer arrow functions
function cube(n){
    return n*n*n
}
sqr=(n)=>n*n

console.log(cube(3))
console.log(sqr(4))

// array mapping
let arr = [1,2,3,4,5]

// square of each element in array
arr.forEach((n)=>{
    console.log(n*n)
})

// using map
let sqrArr = arr.map((n)=>{
    return n*n
})
console.log(sqrArr)

// filtering array
let aray = [2,4,5,7,3,9]
let greaterThan5 = aray.filter((n)=>{
    return n>5
})
console.log(greaterThan5)

// real time example of filter
let users = [
    {
        firstName: 'Shivani',
        lastName: 'Raichandani',
        age: 23,
        gender: 'female'
    },
    {
        firstName: 'Naman',
        lastName: 'Bhandari',
        age: 26,
        gender: 'male'
    },
    {
        firstName: 'Bhavna',
        lastName: 'Sisodiya',
        age: 28,
        gender: 'female'
    },
    {
        firstName: 'Narendra',
        lastName: 'Shrivastava',
        age: 22,
        gender: 'male'
    },
    {
        firstName: 'Narendra',
        lastName: 'Shrivastava',
        age: 22,
        gender: 'male'
    },
    {
        firstName: 'Nari',
        lastName: 'Shri',
        age: 20,
        gender: 'female'
    },
    {
        firstName: 'Ram',
        lastName: 'Raghuvanshi',
        age: 26,
        gender: 'male'
    }
]
// i want to get full names of users in a new array
let names = users.map((user)=>{
    return user.firstName +" "+user.lastName
})
console.log(names)

// only females in array
let females = users.filter((user)=>{
    return user.gender == 'female'
})
console.log(females)

let femaleNames = females.map((user)=>{
    return user.firstName
})
console.log(femaleNames)

// using filter and map together 


// difference b/w foreach and mapping
// cannot store result in array / can store result in array
// 
// 
// 


// callbacks
function downloadDone(){
    console.log("download complete")
}