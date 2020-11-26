//https://www.burpee.com/findgrowzone
// https://day.js.org/docs/en/display/format
//US regions
    //NorthEast - 02101 (Boston, MA) - ZONE 6
    //Mid-Atlantic - 10001 (New York City, NY) - ZONE 7
    //South East - 70032 (New Orleans, LA) - ZONE 9
    //Mid-West - 60007 (Chicago, IL) - ZONE 5
    //North-West - 98191 (Seattle, WA) - ZONE 8
    //South-West - 73301 (Austin, TX) - ZONE 8
    //West - 90001 (Los Angeles, CA) - ZONE 10

// Crop recommendation
    // Prompt asks for user’s US Zip Code
    // User inputs information
    // App grabs following data based on location data 
        // Hardiness Zone
        // Reference to current season based on Time and date info was input (e.g. Input made in Oct, app would suggest fall crops)
        // App outputs result of data grab with most popular crops to grow

// Code for NODE
    // node start-date-calc
    // var dayjs = require('dayjs')
// import dayjs from 'dayjs' // ES 2015
    // const test = dayjs('2019-01-25').format('MMMM D, YYYY')
    // console.log(test)

// --------------------------------------------------
var today = document.getElementById("dateTest");
var date = dayjs().format('MM/DD/YYYY');
today.textContent = date;
// --------------------------------------------------


let cropRec = $('#cropRec');
let recSubmit = $('#recSubmit');
// let currentDate = moment().format('MMMM Do YYYY');
// let currentMonth = moment().format('MMMM');
const plantRec = [
    {
        name: 'tomatoes',
        startMonth: 'March',
        startDay: 7,
        startIndoors: true,
        lastMonth: 'March',
        lastDay: 21,
        transplantMonth: 'May',
        transStartDay: 1,
        transLastDay: 31
    }
];
const cityRec = [
    {
        name: 'Boston',
        zipCode: '02101',
        hardinessZone: 6
    }
];

recSubmit.click(cropRecommendation);

function cropRecommendation(){
    //Add current date to Card Body
    cropRec.empty();
    cropRec.append(`
        <section>Today's Date: ${currentDate}</section>
        <section>Zip Code: ${cityRec[0].zipCode} (${cityRec[0].name})</section>
        <section>Hardiness Zone: ${cityRec[0].hardinessZone}</section>
    `);
};



// Start Date Calculator
    // App checks for real time and date
    // App asks if user wants to run GPS based check or manual check.
        // (FUTURE DEVELOPMENT) For GPS check, app uses GPS location to approximate location
        // For manual check, user enters location information.
    // App asks what plant user is curious about and displays list of crops
    // User selects plant and confirms selection
    //(FUTURE DEVELOPMENT)
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



let currentDate = dayjs().format('MM/DD/YYYY');
let currentMonth = dayjs().format('MM');

let calcSubmit = $('#calcSubmit')
let startDateCalc = $('#startDateCalc')
calcSubmit.click(startDateCalculation);


function startDateCalculation(){
    if (currentMonth !== plantRec[0].startMonth){
        startDateCalc.append(`
            <section>It is not ideal to start growing ${plantRec[0].name} right now. (Start growing indoors ${plantRec[0].startMonth} ${plantRec[0].startDay} - ${plantRec[0].lastMonth} ${plantRec[0].lastDay})</section>
        `);
    }
}
