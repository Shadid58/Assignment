                                        // Answer-01
let carName = "Volvo";
console.log(carName)

                                        // Answer-02
let firstName = "John", lastName = "Doe", age = 35;
// 1st variable name = "firstName"
// 2nd variable value = "Doe"
// 3rd variable name and value = "age" , "35"

                                        // Answer-03
x = 10;
y = 5;
x *= y; // x is now 50
console.log(x)

                                        // Answer-04
let length = 16; // data type: number
let lastname = "Johnson"; // data type: string 
//{here 'lastName' is changed to 'lastname' as there is already a lastName in Answer 2}
                                        
const z = {                     //{here x is changed to z}
    firstName: "John",  
    lastName: "Doe"
}; // data type: object

                                        // Answer-05
function myFunction() {
    alert("Hello World!");
    }                                          
// Calling the function
myFunction();

                                        // Answer-06
// Creating the object
const person = {
    name: "John",
    age: 50
  }
  
// Accessing the object to alert
alert(person.name + " is " + person.age);

                                        // Answer-07
// Get the button element
const button = document.getElementById("click");

// Add an event listener to the button
button.addEventListener("click", function() {
  // Do something when the button is clicked
  alert("The button was clicked!");
});

                                        // Answer-08
// Alerting theh number of items
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);
// Changing the first item
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";

                                        // Answer-09
// random number
let randomNum = Math.random();
console.log(randomNum);
// largest number
let largestNum = Math.max(10, 20);
console.log(largestNum);
// square root
let squRoot = Math.sqrt(9);
console.log(squRoot);

                                        // Answer-10
//to alert true  
let a = 10;
let b = 5;
                                        
if (a > b) {
    alert(true);
}
// using ternary conditional operator
let age2 = 17;
age2 < 18 ? alert("Too young") : alert("Old enough");

