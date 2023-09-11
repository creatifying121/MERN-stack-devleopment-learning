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


// block in javascript
// {
//     var a = 10;
//     console.log(a);
// }

// if(true){
//     var a = 10; 
//     console.log(a);
// }

// block scope in javascript
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// // shadowing in javascript - variable example
// var a = 10;
// let b = 20;
// const c = 30;
// {
//     var a = 40;     // new value assigned
//     let b = 50;     // will take value from this scope only
//     const c = 60;   // will take value from this scope only

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);     // shadowing occured, value from block scope will be taken
// console.log(b);     // value taken from scope other than block scope
// console.log(c);     // value taken from scope other than block scope

// shadowing in javascript - function example
// function func() {
//     let a = 'Geeks';
     
//     if (true) {
//         let a = 'GeeksforGeeks';  // New value assigned
//         console.log(a);
//     }
     
//     console.log(a);
// }
// func();

// illegal shadowing - example 1
// let a = 20;
// {
//     var a = 10;
//     console.log(a);
// }

// illegal shadowing - example 2
// function func() {
//     var a = 'Geeks';
//     let b = 'Geeks';
     
//     if (true) {
//         let a = 'GeeksforGeeks'; // Legal Shadowing
//         var b = 'Geeks'; // Illegal Shadowing
//         console.log(a); // It will print 'GeeksforGeeks'
//         console.log(b); // It will print error
//     }
// }
// func();


// closure in javascript
// basic example
// function a(){
//     var x = 10; 
//     function b(){
//         console.log(x);
//     }
//     b();
// }
// a();

// complicated examples
// function a(){
//     var x = 10;
//     function b(){
//         console.log(x);
//     }
//     return b;   // inner func returned along with its lexical environment
// }

// var c = a();    // outer function called which is returning the inner function
// console.log(c); // whole inner function will be printed

// c();    // since, when the inner function was returned, it came with its lexical environment, so it will implement the logic and will print value of x i.e., 10

// example 2
// function foo(outer_arg) {
 
//     function inner(inner_arg) {
//         return outer_arg + inner_arg;
//     }
//     return inner;
// }
// let get_func_inner = foo(5);    // argument for outer function
 
// console.log(get_func_inner(4)); // this will act as argument for inner function => 5+4 = 9
// console.log(get_func_inner(3)); // this will act as argument for inner function => 5+3 = 8



// setTimeout and closure
// function a(){
//     var x = 1; 
//     setTimeout(function(){
//         console.log(x);
//     }, 5000); // this console log will be executing after 5 seconds.
// }

// a();

// function a(){
//     var x = 1; 
//     setTimeout(function(){
//         console.log(x);
//     }, 5000); // this console log will be executing after 5 seconds.

//     console.log("hi shivani");
// }

// a();

// interview ques: You need to print numbers from 1 to 5 and each number should be printed after waiting for same number of seconds, like 1 should be printed after 1 second, 2 after 2 seconds, 3 after 3 seconds, and so on. 

// function a(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000); 
//     }
//     console.log("hi");
// }

// a();

// fix 1
// function a(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000); 
//     }
//     console.log("hi");
// }

// a();

// extension of above problem
// Interviewer might say that we cannot use “let”, and we need to solve it using “var” only. So, here, closures will help us. 
// function a(){
//     for(let i=1; i<=5; i++){
//         function closure(newValOfi){
//             setTimeout(function(){
//                 console.log(newValOfi);
//             }, newValOfi*1000); 
//         }
//         closure(i);
//     }
//     console.log("hi");
// }

// a();


// functions
// function statement or function declaration
// function func(){
//     console.log("function statement");
// }

// function expression
// var exp = function fun(){
//     console.log("function expression");
// }

// anonymous function
// wrong syntax
// function (){

// }
// right syntax
// var ano = function (){

// }

// named function expression
// var named = function fun(){
//     console.log(fun);
// };

// named();

// parameters and arguments
// var paramArg = function fun(param, param){
//     console.log(fun);
// };

// paramArg(arg, arg);

// first class functions
// example 1
// var firstClass = function fun(){
//     return function test(){

//     }
// };

// console.log(firstClass());

// example 2
// var firstClass = function fun(param){
//     console.log(param);
// }

// firstClass(function(){

// })


// callback functions
// function x(y){

// }

// x(function y(){

// })

// example 2 - achieving asynchronous behaviour using callbacks
// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y){
//     console.log("inside x");
//     y();
// }
// x(function y(){
//     console.log("inside y");
// })

