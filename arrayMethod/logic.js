const numberArray = [1,4,5,2,7,8,3,0];
const fruitsArray = ["banana", "avocado", "peach", "kiwi", "apple", "orange"];

/// for loop to execute block of code to individual element

// for (let i = 0; i < myArray.length; i++) {
// console.log(myArray[i]);
// let display = document.getElementById("display");
// display.innerHTML += myArray[i];
// }

// The JavaScript method toString() converts an array to a string of (comma separated) array values.
// document.getElementById("display").innerHTML = numberArray.toString();
// document.getElementById("display").innerHTML = fruitsArray.toString();

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
// document.getElementById("display").innerHTML = fruitsArray.join("*");

// Popping And Pushing:::::::::

// The pop() method removes the last element from an array
// fruitsArray.pop();
// document.getElementById("display").innerHTML = fruitsArray;

// The push() method adds a new element to an array (at the end)
// fruitsArray.push("mango");
// document.getElementById("display").innerHTML = fruitsArray;
// The length property provides an easy way to append new elements to an array without using the push() method
// fruitsArray[fruitsArray.length] = "grapes";
// document.getElementById("display").innerHTML = fruitsArray;

// Shifting elements::::::::::::

// Shifting is equivalent to popping, working on the first element instead of the last
// The shift() method removes the first array element and "shifts" all other elements to a lower index
// fruitsArray.shift();
// document.getElementById("display").innerHTML = fruitsArray;

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
// fruitsArray.unshift("pineapple");
// document.getElementById("display").innerHTML = fruitsArray;

// Splicing an Array:::::::::::::

// The splice() method can be used to add new items to an array
// fruitsArray.splice(2, 0 , "mango", "grapes");
// document.getElementById("display").innerHTML = fruitsArray;

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added

// Slicing an Array:::::::::::::::
// The slice() method slices out a piece of an array into a new array.
// The slice() method creates a new array. It does not remove any elements from the source array
// const newFruits = fruitsArray.slice(1);
// document.getElementById("display").innerHTML = newFruits;

// Sorting and an Array:::::::::::

//The sort() method sorts an array alphabetically:
// fruitsArray.sort();
// document.getElementById("display").innerHTML = fruitsArray;

//By default, the sort() function sorts values as strings, so we have to use compare function for number

// function myFunction() {
//     numberArray.sort(function(a, b){return a - b});
//     document.getElementById("display").innerHTML = numberArray;
//   }
// myFunction();

//JavaScript Higher Order Functions & Arrays::::::::::::::::::

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  

// Standard for loop 
//   for (let i = 0; i < companies.length; i++) {
//         console.log(companies[i]);
//     }

//   *********forEach**********
//   it does the same thing as for loop
//    companies.forEach(function(company) {
//          console.log(company);
//          if company with name
//          console.log(company.name);
//    });


// *******************************************filter*****************************************


  // it helps to filter things out from the array

// Get 21 and older
// filtering using for loop
//   const canDrink = [];
//   for ( let i = 0; i < ages.length; i++) {
//       if (ages[i] >= 21) {
//           canDrink.push(ages[i]);
//       }
//   }
//console.log(canDrink);
// Using filter

// const canDrink = ages.filter(function(age) {
// if (age >= 21) {
//     return true;
// }
// });

//   console.log(canDrink);
  
// Using Arrow function ES6
// it is important because code gets shorter, and shows that you are a better programmer

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink); 
  
// Filter Retail Companies

// const retailCompanies = companies.filter(function(company) {
// if (company.category === "Retail") {
//     return(true);
// }
// });
// console.log(retailCompanies);

//Using Arrow function
// const retailCompanies = companies.filter(company => company.category === "Retail");
// console.log(retailCompanies);

// Get the 80's company
// const eightiesCompanies = companies.filter(function(company) {
// if (company.start >= 1980 && company.start < 1990) {
//     return(true);
// }
// });
// console.log(eightiesCompanies);

// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
// console.log(eightiesCompanies);

// Get companies that lasted 10 years or more
// const companiesTenYears = companies.filter(company => (company.end - company.start) >= 10);
// console.log(companiesTenYears);

//*****************************************map******************************************
 // very useful to manipulate Data
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.

//create an array of  company  name

// const companyNames = companies.map(function(company) {
// return company.name;
// });
// console.log(companyNames);

// Get the company with start to end date
// const testMap = companies.map(function(company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
//   });
//   console.log(testMap);
  
// const testMap = companies.map(company => (`${company.name} [${company.start} - ${company.end}]`));

// console.log(testMap);
  
// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesMutiple = ages.map(age => (age*2));
// console.log(agesSquare);
// console.log(agesMutiple);

//Alernate ways 

// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => (age*2));
// console.log(ageMap);
  
  
//****************************************Sort*******************************************
  
// sort() sorts the elements of an array.
// sort() overwrites the original array.
// sort() sorts the elements as strings in alphabetical and ascending order.

// The sort() method casts elements to strings and compares the strings to determine the orders, so
// we use compare function
// The compare() function accepts two arguments a and b. 
//The sort() method will sort elements based on the return value of the compare() function with the following rules:

// If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
// If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
// If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.

// let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// numbers.sort( function( a , b){
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });

// -1, 0, and 1 in a comparison function are used to tell the caller how the first value 
// should be sorted in relation to the second one. -1 means the first goes before the second,
// 1 means it goes after, and 0 means they're equivalent.

// console.log(numbers);

// Output:
// [ 0,  1,  2, 3, 10, 20, 30 ] if only sort() is used output will be [ 0, 1, 10, 2, 20, 3, 30 ] because 
// the string “10” comes before “2” when doing a string comparison, 
// and also  if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".


// Sort company by start year

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }

// });
// console.log(sortedCompanies);

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);
//The conditional (ternary) operator is the only JavaScript operator that takes 
//three operands: a condition followed by a question mark (?), then an expression
//to execute if the condition is truthy followed by a colon (:), and finally 
//the expression to execute if the condition is falsy. This operator is frequently used as a shortcut
//for the if statement where we use : for else.

// Sort Ages

// const sortAges = ages.sort(); gives incorrect order
// console.log(sortAges);

// correct way to do
// const sortAges = ages.sort((a, b) => a-b); //if descending order then b-a
// console.log(sortAges);


//********************************************reduce*****************************************

// The reduce() method executes a reducer function for each value of an array.
// reduce() returns a single value which is the function's accumulated result.
// reduce() does not execute the function for empty array elements.
// reduce() does not change the original array.

// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer, 5));
// expected output: 15

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

//Now using reduce

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);
// console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years of all company

// const totalYears = companies.reduce(function (total, company) {
//  return total + (company.end - company.start);
// }, 0);

// console.log(totalYears);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
 
// console.log(totalYears);

// const combined = ages
// .map(age => age * 2)
// .filter(age => age > 40)
// .sort((a, b) => a - b)
// .reduce((a, b) => a + b, 0)
// console.log(combined);


