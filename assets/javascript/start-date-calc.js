// https://www.burpee.com/findgrowzone
// https://day.js.org/docs/en/display/format
// US regions
    // NorthEast - 02101 (Boston, MA) - ZONE 6
    // Mid-Atlantic - 10001 (New York City, NY) - ZONE 7
    // South East - 70032 (New Orleans, LA) - ZONE 9
    // Mid-West - 60007 (Chicago, IL) - ZONE 5
    // North-West - 98191 (Seattle, WA) - ZONE 8
    // South-West - 73301 (Austin, TX) - ZONE 8
    // West - 90001 (Los Angeles, CA) - ZONE 10

// Start Date Calculator
    // App checks for real time and date
    // App asks if user wants to run GPS based check or manual check.
        // (FUTURE DEVELOPMENT) For GPS check, app uses GPS location to approximate location
        // For manual check, user enters location information.
    // App asks what plant user is curious about and displays list of crops
    // User selects plant and confirms selection
    // App compares to farmer’s almanac database (and Data of weather conditions in previous years) for weather conditions to approximate best day to start hardening off seedlings
    // App compares real time and date check to recommended start date data from almanac
    // If user starts later than the recommended date, app provides notification as such and prompts suggestions on how to catch up.
    // App outputs quick summary of recommendation up top, and an option for more details below.

// let startDateCalc = $('#startDateCalc');
// startDateCalc.click(startDateCalculator);

// function startDateCalculator(){
//     let startAssist = prompt('When are you planting?');
//     if (startAssist){
//         alert('You entered something, and clicked OK.') // placeholder
//     };
// };

// node start-date-calc
var dayjs = require('dayjs')
// import dayjs from 'dayjs' // ES 2015
const test = dayjs('2019-01-25').format('MMMM D, YYYY')

console.log(test)