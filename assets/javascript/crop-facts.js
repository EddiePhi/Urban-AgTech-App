//Crop Facts
    // User can enable/disable automatic app to automatically populate a random fact about crops/agriculture. Facts can be about different types of plants and statistics on AgTech/Urban AgTech as a whole.
    // A separate section of the app is devoted to generating new facts each time the function is activated.
const tomato = {
    company: "Burpee",
    url: "https://www.burpee.com/vegetables/tomatoes/tomato-delicious-prod001177.html",
    name: "Tomato, Delicious",
    image: "Assets/images/tomato.jpg",
    seed_ct: 100,
    item_num: "52621A1",
    price: "$4.95",
    product_details: 
        {
            type: "Beefsteak",
            days_to_maturity: 77,
            sun: "Full sun",
            height: "",
            sow_time: "6-8 weeks BLF",
            fruit_bearing: "Indeterminate",
            fruit_weight: "1-2 lbs",
            spread: "18-14 inches",
            sow_method: "Indoor Sow",
            thin: "6 inches"
        },
    reviews: "4.3/5 stars"
};   

let cropFacts = $('#cropFacts');
let factSubmit = $('#factSubmit');

let appendFacts = () => {
    cropFacts.empty();
    cropFacts.append(`<div>Company: ${tomato.company}</div>`);
    cropFacts.append(`<div>URL: <a style="color: black" href="${tomato.url}">Click here</div>`);
    cropFacts.append(`<div>Name: ${tomato.name}</div>`);
    cropFacts.append(`<div>Image: <img src="${tomato.image}" alt="tomato">`);
    cropFacts.append(`<div>Seed Count: ${tomato.seed_ct}</div>`);
    cropFacts.append(`<div>Item #: ${tomato.item_num}</div>`);
    cropFacts.append(`<div>Price: ${tomato.price}</div>`);
    cropFacts.append(`<div>Type: ${tomato.product_details.type}</div>`);
    cropFacts.append(`<div>Days to Maturity: ${tomato.product_details.days_to_maturity}</div>`);
    cropFacts.append(`<div>Sun: ${tomato.product_details.sun}</div>`);
    cropFacts.append(`<div>Height: ${tomato.product_details.height}</div>`);
    cropFacts.append(`<div>Sow Time: ${tomato.product_details.sow_time}</div>`);
    cropFacts.append(`<div>Fruit Bearing: ${tomato.product_details.fruit_bearing}</div>`);
    cropFacts.append(`<div>Fruit Weight: ${tomato.product_details.fruit_weight}</div>`);
    cropFacts.append(`<div>Spread: ${tomato.product_details.spread}</div>`);
    cropFacts.append(`<div>Sow Method: ${tomato.product_details.sow_method}</div>`);
    cropFacts.append(`<div>Thin: ${tomato.product_details.thin}</div>`);
    cropFacts.append(`<div>Reviews: ${tomato.reviews}</div>`);


    
    
    
    // let factList = [
    //     "Tomatoes are red.", 
    //     "Cucumbers are green.", 
    //     "Blueberries are blue. Go figure!"
    // ];

    // let randomize = (arr) => {
    //     var index = Math.floor(Math.random() * arr.length);
    //     var element = arr[index];
    //     return element;
    //   };
      
    // let factPrompt = confirm('Want some Crop Facts?');
    // if (factPrompt){
    //     alert(randomize(factList)); // placeholder
    // };
};


factSubmit.click(appendFacts);