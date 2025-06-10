// let array = [10,20.34,'React','A',true,undefined,null];

// console.log(array);
// console.log(array[2]);

// console.log( typeof array[4]);

//length
// console.log(array.length);
// console.log(array[array.length-4]);

//map

// let array1 = [1,2,3,4,5,6,7,8,9,10];

// let Numbers = array1.map((value) => {
//     console.log(value);

// });

// Numbers;

//Filter

// let array1 = [1,2,3,4,5,6,7,8,9,10];

// let evenNumbers = array1.filter((value) => {
//     console.log(value);
//     return value % 2 == 0;

// });

// console.log(evenNumbers);

// let array2 = [10,20.34,'React','A',true];

// let filteredData = array2.filter((value) => {
//     // console.log(value);
//     return typeof value == 'number' || typeof value == 'string'
// })

// console.log(filteredData);


//forEach

// class restaurant{
//     //data members
//     restaurantList = [
//         { name:'Pizza Hut', place:'FC Road', location: 'Pune'},
//         { name:'Burger King', place:'Shivajinagar', location: 'Bangalore'},
//         { name:'Kewat', place:'Agrico', location: 'Jamshedpur'}
//     ]

//     //method functions

//     displayData(){
//         this.restaurantList.map((value) => {
//             // console.log(value);
//             console.log(`We are visiting ${value.name} in ${value.place} from ${value.location}`)
//         })
//     }
// }

// let obj = new restaurant();
// obj.displayData();

// //find

// let names = ['OM','Rutvik','Vedant','Smith','Sakshi','Sidhi'];

// let result = names.find((value) => {
//     // console.log(value);
//     return value == 'Smith'
// })

// console.log(result);

// ///Splice

// // Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 2, "Lemon", "Kiwi");

// console.log(fruits);
// // .splice(Index-start,Index to remove characters,Value1,value2,....)

//concat

// let num = [10,20,30];
// const num1 = [10.42,78.37,56.80];
// var num2 = [true,false,null,47,22];

// // console.log(num1.concat(num,num2));
// console.log(num1.concat(num));

//slice

// let array8 = [10,10.42,78.37,56.80,20,30,47,22];

// console.log(array8.slice(2,6));

//sort


var array12 = [3,6,1,78,23,43,56,111,431,1,8,0];
function sortMyArray(a, b) { // ascending sort
    return a - b;
}
var sortResult1 = array12.sort(sortMyArray);
console.log(sortResult1);

// var array13 = ['b', 'z', 'a', 'f', 'e', 'g'];
// console.log(array13.sort());
