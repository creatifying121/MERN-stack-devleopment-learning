let api = ''

// fetch(api).then((date)=>{
//     return data.json()
// })

let title = document.getElementById('title')
let release = document.getElementById('released')
let plot = document.getElementById('plot')
let actor = document.getElementById('title')
let award = document.getElementById('title')
let writer = document.getElementById('title')
let director = document.getElementById('title')
let rating = document.getElementById('title')
let collection = document.getElementById('title')

function searchMovie(){
    let movieInput= document.getElementById('movieInput')
    let url = api + movieInput.value 
    fetch(url).then((data)=>{
        return data.json()
    }).then((data)=>{
        title.innerText = data.Title
    })
}