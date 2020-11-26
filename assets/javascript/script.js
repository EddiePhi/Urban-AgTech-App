
//https://www.burpee.com/findgrowzone
//US regions
    //NorthEast - 02101 (Boston, MA) - ZONE 6
    //Mid-Atlantic - 10001 (New York City, NY) - ZONE 7
    //South East - 70032 (New Orleans, LA) - ZONE 9
    //Mid-West - 60007 (Chicago, IL) - ZONE 5
    //North-West - 98191 (Seattle, WA) - ZONE 8
    //South-West - 73301 (Austin, TX) - Zone 8
    //West - 90001 (Los Angeles, CA) - ZONE 10

//Project scope
    //at-home gardeners
    //small farmers
    //large farmers


// Functionality


// Planning assistant - 
    //User initiates function
    //App asks what user would like assistance with (Depending on selection, a different child function will initiate)
    //Provides a list of functions to choose from.
let planAssist = document.getElementById('planAssist');
planAssist.addEventListener('click', planningAssistant);

function planningAssistant(){
    let assistChoice = prompt('What would you like assistance with?');
    if (assistChoice){
        alert('You entered something, and clicked OK.') // placeholder
    };
};





//Watering Schedule
    // App asks what crop user is interested in.
    // App runs check for date and location data
    // App provides resources for setting a plan for watering schedules and nutrient demands based in input
let waterSched = document.getElementById('waterSched');
waterSched.addEventListener('click', waterSchedule);

function waterSchedule(){
    let waterAssist = confirm('Want to set up notifications for when to water your plants?');
    if (waterAssist){
        alert('You entered something, and clicked OK.') // placeholder
    };
};





// ----------------------------------------------------------------------------------------



// User Engagement

//Community Hub
    // App provides Include links to local, regional, national, and global community of farmers, industry professionals, and gardening enthusiasts
    // App also Include links to popular sites that provide additional resources for starting farmers
    // Youtube links, vendor sites, web articles, Scientific studies
    // App outputs prompts for a partner-up system. If you make an account, you can link up with people nearby to discuss tips and tricks.
    let commHub = document.getElementById('commHub');
    commHub.addEventListener('click', communityHub);
    
    function communityHub(){
        let hubPrompt = confirm('Want to connect with others?');
        if (hubPrompt){
            alert('You entered something, and clicked OK.') // placeholder
        };
    };


// Things learned in class:
    // Week 1: N/A
    // Week 2: CSS Typography, Google Fonts, Pseudo classes, Bootstrap, Media Queries, Meta Tag/viewport Display
    // Week 3: JS, Arrays, If statements, For loops, Functions, Objects, Pseudo Code
    // Week 4: Callback functions, Object traversal, Nodes, Scope, DOM manipulation, Event Listeners, Modals, Event bubbling
    // Week 5: jQuery, local Storage, 
    // Week 6: APIs
    // Week 9: arrow functions, ternary operators, Node, NPM






    