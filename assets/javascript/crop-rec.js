//https://www.burpee.com/findgrowzone
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
let cropRec = $('#cropRec');
let recSubmit = $('#recSubmit');
let currentDate = moment().format('MMMM Do YYYY');
let currentMonth = moment().format('MMMM');
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

    if (currentMonth !== plantRec[0].startMonth){
        cropRec.append(`
            <section>It is not ideal to start growing ${plantRec.name} right now. (Start growing indoors ${plantRec[0].startMonth} ${plantRec[0].startDay} - ${plantRec[0].lastMonth} ${plantRec[0].lastDay})</section>
        `);
    }
};
