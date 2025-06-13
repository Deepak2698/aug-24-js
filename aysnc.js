// //callback Function
// let sum = (a,b,func) => {
//  const sum = a+b;
//  return func(sum);
// }

// let displaySum = (su) => { //callback function
//     console.log(`Sum of the no is ${su}`);
// }

// sum(10,20,displaySum); // Higher Order Function



//**************** Promises ********************* */


// Promises

//It has 3 states of responses:

//resolved = Success response(200)
//rejected = Failed to get the desired response(400)
//pending = Waiting to get one response(500)

//syntax for promises

//let prom = new Promise((resolve,reject) => {

// You can API calls
// Schedule some lines of codes

// });

// prom.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });



// let prom = new Promise((resolve,reject) => {

//     console.log(`Promise is in pending state`);

//     // syntax for setTimeout = setTimeout(function,timer);

//     setTimeout(() => {

//         // console.log('Resolved Response');
//         resolve(`Students Learned the promises`);

//         // console.log('Rejected Response');
//         reject(`Students failed to Learn the promises`);
//     },3000);

// });

// prom.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });




/********************* Async and Await *********************/


// async function promiseClass(){
//     let prom = new Promise((resolve,reject) => {

//     console.log(`Promise is in pending state`);

//     // syntax for setTimeout = setTimeout(function,timer);

//     setTimeout(() => {

//         // console.log('Resolved Response');
//         resolve(`Students Learned the promises`);

//         // console.log('Rejected Response');
//         reject(`Students failed to Learn the promises`);
//     },3000);

// })

//  let response = await prom;
//  return response;
// }

// promiseClass().then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });
