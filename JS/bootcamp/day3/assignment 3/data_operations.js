// part 1: user data array manipulation
// 1. create a new javascript file 'data_operations.js'
// 2. Define an array `users` containing at least 15 objects, where each object represents a user with the following properties: `name`, `age`, `gender`, and `location`.
let users = [
    {name: 'Shivani', age: 12, gender: 'female', location: 'Bhopal'},
    {name: 'Purva', age: 18, gender: 'female', location: 'Bihar'},
    {name: 'Ayushi', age: 25, gender: 'female', location: 'Pune'},
    {name: 'Bhavesh', age: 22, gender: 'male', location: 'Hyderabad'},
    {name: 'Nandani', age: 23, gender: 'female', location: 'Bangalore'},
    {name: 'Vijay', age: 28, gender: 'male', location: 'Ahemdabad'},
    {name: 'Arti', age: 29, gender: 'female', location: 'Surat'},
    {name: 'Rishabh', age: 30, gender: 'male', location: 'Chennai'},
    {name: 'Uma', age: 17, gender: 'female', location: 'Puri'},
    {name: 'Shikha', age: 32, gender: 'female', location: 'Lucknow'},
    {name: 'Harsh', age: 33, gender: 'male', location: 'Mumbai'},
    {name: 'Neelam', age: 24, gender: 'female', location: 'Sehore'},
    {name: 'Sagar', age: 23, gender: 'male', location: 'Ranchi'},
    {name: 'Nayan', age: 22, gender: 'male', location: 'Pune'},
    {name: 'Akash', age: 20, gender: 'male', location: 'London'},
]
console.log(users)

// 3. Implement a function `isAdult` that takes a user object as input and returns `true` if the user is 18 years or older, otherwise `false`.
function isAdult(user){
    if(user.age >= 18){
        return true
    }else{
        return false
    }
}

// 4. Use the `filter` function to create a new array `adultUsers` by selecting only the users who are adults using the `isAdult` function.
let adultUsers = users.filter(isAdult)
console.log(adultUsers)

// 5. Implement a function `getFullName` that takes a user object as input and returns the user's full name (combine `name` and `location` properties).
function getFullName(user){
    return user.name + " " + user.location
}

// 6. Use the `map` function to create a new array `userNames` containing the full names of all users.
let userNames = users.map(getFullName)
console.log(userNames)


// part 2: Chaining user data operations
// 1. Implement a function `filterByGender` that takes a user object as input and a gender string (e.g., "male" or "female") and returns `true` if the user's gender matches the input gender, otherwise `false`.
function filterByGender(user, gender){
    if(user.gender === gender){
        return true
    }else{
        return false
    }
}

// 2. Use chaining to manipulate the `users` array in the following sequence:
// a. Filter and create a new array `femaleUsers` containing female users using the `filterByGender` function.
// b. Use the `map` function to apply the `getFullName` function to each element of the `femaleUsers` array.
let femaleUsers = users.filter((user)=>{
    return filterByGender(user,'female')
}).map((user)=>{
    return getFullName(user)
})
console.log(femaleUsers)

// part 3: Movie Data Array Manipulation
// 1. Define an array `movies` containing at least 10 objects, where each object represents a movie with properties: `title`, `genre`, `year`, and `rating`.
let movies = [
    {title: 'movie 1', genre: 'comedy', year: 2023, rating: 5.0},
    {title: 'movie 2', genre: 'action', year: 2022, rating: 4.2},
    {title: 'movie 3', genre: 'suspense thriller', year: 2023, rating: 4.5},
    {title: 'movie 4', genre: 'action', year: 2021, rating: 4.0},
    {title: 'movie 5', genre: 'action', year: 2005, rating: 5.0},
    {title: 'movie 6', genre: 'science fiction', year: 2020, rating: 3.8},
    {title: 'movie 7', genre: 'action', year: 2021, rating: 2.7},
    {title: 'movie 8', genre: 'horror', year: 2011, rating: 4.5},
    {title: 'movie 9', genre: 'adventure', year: 2015, rating: 3.3},
    {title: 'movie 10', genre: 'fantasy', year: 2018, rating: 4.2}
]
console.log(movies)

// part 4: chaining movie data operations
// 1. Implement a function `filterByGenre` that takes a movie object as input and a genre string (e.g., "action" or "comedy") and returns `true` if the movie's genre matches the input genre, otherwise `false`.
function filterByGenre(movie, genre){
    return movie.genre===genre;
}

// 2. Use chaining to manipulate the `movies` array in the following sequence:
// a. Filter and create a new array `actionMovies` containing movies with the "action" genre using the `filterByGenre` function.
// b. Use the `map` function to create a new array `movieTitles` containing the titles of all movies in `actionMovies`
let actionMovies = movies.filter((movie)=>{
    return movie.genre == 'action'
})
console.log(actionMovies)

let movieTitles = movies.filter((movie)=>{
    return filterByGenre(movie, 'action')
}).map((movie)=>{
    return movie.title
})
console.log(movieTitles)


// part 5: integration and output
// 1. Combine the results from Part 1 (`adultUsers` and `userNames` arrays) and Part 2 (`femaleUsers` array with full names), and Part 4 (`movieTitles` array) into a final object `combinedResults` that contains these pieces of information.
let combinedResults = {
    adultUsers, 
    userNames,
    femaleUsers,
    movieTitles
}
console.log(combinedResults);
