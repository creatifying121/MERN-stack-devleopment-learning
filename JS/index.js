// how javascript works and how code is executed in javascript
// var n =2; 
// function square (num){
//     var ans = num*num;
//     return ans;
// }
// var square2 = square(n);
// var square4 = square(4);


// hoisting examples
// var x = 7;

// function getName() {
//     console.log("Hey Shivani");
// }

// console.log(getName);
// console.log(x);
// getName();

// console.log(x);
// getName();

// var x = 7;

// function getName() {
//     console.log("Hey Shivani");
// }

// console.log(x);
// getName();


// working of functions in javascript
// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }


// window object and this keyword
// var a = 10;

// console.log(window.a); // 10
// console.log(a); // 10

// function b() {
//     var x = 100; 
//     console.log(x);
// }

// console.log(x); // x is not defined - because it is in function scope

// console.log(b.x); // undefined


// undefined vs. not defined
// example 1
// console.log(a); // undefined
// var a = 10;

// example 2 
// var a;
// console.log(a); // undefined

//javascript is a loosely typed language
// var a; 
// console.log(a);  // undefined

// a = 10; 
// console.log(a);  // 10

// a = "hello shivani";
// console.log(a);  // hello shivani

// never do this mistake
// var a = undefined;


// scope, scope chain and lexical environment
// example 1
// function a(){
//     console.log(b);
// } 
// var b = 100; 
// a();  // it will print 100

// example 1
// function a(){
//     console.log(b);
// } 
// a();  // it will print undefined
// var b = 100; 

// example 2
// function a(){
//     c();
//     function c() {
//         console.log(b);
//     }
// } 
// a();  // it will print undefined
// var b = 100; 

// example 2
// function a(){
//     c();
//     function c() {
//         console.log(b);
//     }
// } 
// var b = 100; 
// a();  // it will print 100

// example 3
// function a(){
//     var b = 100; 
//     c();
//     function c() {
//         console.log(b);
//     }
// } 
// a();  // it will print 100
// console.log(b);  // Reference Error: b is not defined


// let and const
// example 1
// let a = 10;
// var b = 100;
// console.log(a);
// console.log(b);

// example 2
// console.log(b);
// console.log(a);
// let a = 10;
// var b = 100;

// reference error examples
// console.log(x); 
// console.log(a);

// let a = 100;

//difference between let and const 
// let a = 10; 
// const b = 100;

// no duplicate value for let
// let a = 10;
// let a = 100;

// example 1 - initialization of const in different line
// let a; 
// const b;

// a = 10;
// b = 100;

// console.log(a);
// console.log(b);

// example 2 - const reassignment
// let a = 1; 
// const b = 10;

// b = 100;

// console.log(a);
// console.log(b);
