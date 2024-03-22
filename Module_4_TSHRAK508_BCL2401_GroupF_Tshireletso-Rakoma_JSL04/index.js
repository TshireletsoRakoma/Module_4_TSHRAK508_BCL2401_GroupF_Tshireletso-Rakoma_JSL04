// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
if (userPreference==='Regular') {
    console.log("The user favor the Regular Redbull Energy drink.");
}else if (userPreference === 'sugar-free') {
    console.log("The user leans towards the sugar-free Redbull energy drink.");
} else {
    console.log("No prefence set; defaulting to regular monster Energy drink");
}

// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 3; // Any number of cans
let message1 = (cansLeft <5) ? "Its time to replenish our stock!" : "we have enough stock!"; 
console.log(message1);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm
let message2 = (heartRate < 100) ? "boost needed!" : "Energy levels are high!";
console.log(message2);


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 4; // Current temperature in °C
let message3 = (currentTemp <= 5) ? "chilled tp perfection!": "Needs a cooler";
console.log(message3);

// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."
let message4 = (currentHour >= 7 && currentHour < 24) ? "Unleash the beast!" : "Better stick to water!";
console.log(message4);


// COMMENTS

/* 
// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
if (userPreference==='Regular') {
    console.log("The user favor the Regular Redbull Energy drink.");
}else if (userPreference === 'sugar-free') {
    console.log("The user leans towards the sugar-free Redbull energy drink.");
} else {
    console.log("No prefence set; defaulting to regular monster Energy drink");
}
*/

/* 
// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 3; // Any number of cans
let message1 = (cansLeft <5) ? "Its time to replenish our stock!" : "we have enough stock!"; 
console.log(message1);
*/

/* 
// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm
let message2 = (heartRate < 100) ? "boost needed!" : "Energy levels are high!";
console.log(message2);
*/

/* 
// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

let currentTemp = 4; // Current temperature in °C
let message3 = (currentTemp <= 5) ? "chilled tp perfection!": "Needs a cooler";
console.log(message3);
*/

/* 
// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."
let message4 = (currentHour >= 7 && currentHour < 24) ? "Unleash the beast!" : "Better stick to water!";
console.log(message4);
*/
