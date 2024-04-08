/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


// const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// // This is an array of strings (TV show titles)
// let titles = [
//     "Fresh Prince of Bel Air",
//     "Curb Your Enthusiasm",
//     "East Los High"
// ];
// // Your final submission should have much more data than this, and 
// // you should use more than just an array of strings to store it all.


// // This function adds cards the page to display the data in the array
// function showCards() {
//     const cardContainer = document.getElementById("card-container");
//     cardContainer.innerHTML = "";
//     const templateCard = document.querySelector(".card");
    
//     for (let i = 0; i < titles.length; i++) {
//         let title = titles[i];

//         // This part of the code doesn't scale very well! After you add your
//         // own data, you'll need to do something totally different here.
//         let imageURL = "";
//         if (i == 0) {
//             imageURL = FRESH_PRINCE_URL;
//         } else if (i == 1) {
//             imageURL = CURB_POSTER_URL;
//         } else if (i == 2) {
//             imageURL = EAST_LOS_HIGH_POSTER_URL;
//         }

//         const nextCard = templateCard.cloneNode(true); // Copy the template card
//         editCardContent(nextCard, title, imageURL); // Edit title and image
//         cardContainer.appendChild(nextCard); // Add new card to the container
//     }
// }

// function editCardContent(card, newTitle, newImageURL) {
//     card.style.display = "block";

//     const cardHeader = card.querySelector("h2");
//     cardHeader.textContent = newTitle;

//     const cardImage = card.querySelector("img");
//     cardImage.src = newImageURL;
//     cardImage.alt = newTitle + " Poster";

//     // You can use console.log to help you debug!
//     // View the output by right clicking on your website,
//     // select "Inspect", then click on the "Console" tab
//     console.log("new card:", newTitle, "- html: ", card);
// }

// // This calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//     console.log("Button Clicked!")
//     alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
// }

// function removeLastCard() {
//     titles.pop(); // Remove last item in titles array
//     showCards(); // Call showCards again to refresh
// }
const YAMAHA_ACOUSTIC_URL = "https://shop.usa.yamaha.com/en/p/instruments/guitars-basses-amps/acoustic-guitars/f325d-acoustic-guitar";
const FENDER_STRATOCASTER_URL = "https://t.ly/Ov8z5";
const EPIPHONE_LES_PAUL_URL = "https://www.sweetwater.com/c590--Solid_Body?highlight=EILS6ITNH&mrkgadid=&mrkgcl=28&mrkgen=&mrkgbflag=&mrkgcat=&acctid=21700000001645388&dskeywordid=&lid=58700008497342104&dsproductgroupid=&product_id=EILS6ITNH&prodctry=US&prodlang=en&channel=online&storeid=&device=c&network=x&matchtype=&adpos=largenumber&locationid=9031140&creative=&targetid=&campaignid=20412140606&awsearchcpc=&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xQcUUl1QDptjy4tjN1olCn9ejyB8auMI-MBG0hSJcn7aoi0qthps0QaAu6gEALw_wcB&gclsrc=aw.ds";
const SQUIER_PRECISION_BASS_URL = "https://t.ly/RF71D";
const FENDER_JAZZ_BASS_URL = "https://www.zzounds.com/item--FEN0199022?siid=271087";
const IBANEZ_ACOUSTIC_BASS_URL = "https://www.zzounds.com/item--IBAAEB10E?siid=232375";
const Ibanez_Hollowbody_URL = "https://www.zzounds.com/item--IBAGB10EM?siid=275061&gad_source=1&gclid=Cj0KCQjwiMmwBhDmARIsABeQ7xSPV6JSBBJ16ArNz4JSY1XSqapIjvCuBFmpv7-gypEoiM3ShlFRNN8aAjAqEALw_wcB";
const GIBSON_ACOUSTIC_URL = "https://www.guitarcenter.com/Gibson/Hummingbird-Standard-Acoustic-Electric-Guitar-Vintage-Sunburst-1500000346771.gc";
const MARTIN_ACOUSTIC_URL = "https://www.guitarcenter.com/Martin/D-18-Standard-Dreadnought-Acoustic-Guitar-Natural-1334587637384.gc";
// Sample catalog data for guitars and basses
const catalog = [
    { name: "Yamaha F325D Dreadnought Acoustic Guitar", category: "guitar", price: 199.99, imageURL: "https://m.media-amazon.com/images/I/61RLzFHpZNL._AC_SL1500_.jpg" },
    { name: "Fender Stratocaster Electric Guitar", category: "guitar", price: 799.99, imageURL: "https://media.guitarcenter.com/is/image/MMGS7/M08143000001000-02-600x600.jpg" },
    { name: "Epiphone 60's Standard Les Paul Guitar - Iced Tea", category: "guitar", price: 699.00, imageURL: "https://i.imgur.com/nJHz9qv_d.webp?maxwidth=1520&fidelity=grand" },
    { name: "Ibanez GB10EM George Benson Electric Guitar", category: "guitar", price: 589.95, imageURL: "https://cf1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/1_Full_Straight_Front_NA-c8a52063882e9acf66ceecfe4a22a04b.jpg"},
    { name: "Squier 40th Anniversary Precision Bass Guitar Vintage Edition Satin Dakota Red", category: "bass", price: 399.99, imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L92325000002000-02-600x600.jpg" },
    { name: "Fender American Ultra Jazz Electric Bass", category: "bass", price: 2299.99, imageURL: "https://cf1.zzounds.com/media/productmedia/fit,600by800/quality,85/1_Full_Straight_Front_NA-97f4566378d0b62870350aeaaee0b0a5.jpg"},
    { name: "Ibanez Dark Violin Sunburst AEB10E Acoustic-Electric Bass", category: "bass", price: 364.95, imageURL: "https://cf1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/1_Full_Straight_Front_NA-03efde3d6bb27d511b6f423da1de2716.jpg"},
    { name: "Gibson Hummingbird Standard Acoustic-Electric Guitar Vintage Sunburst", category: "guitar", price: 3999.99, imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L28130000002000-02-600x600.jpg" },
    { name: "Martin D-18 Standard Dreadnought Acoustic Guitar Natural", category: "guitar", price: 2799.00, imageURL: "https://media.guitarcenter.com/is/image/MMGS7/H83179000001000-02-600x600.jpg" },
    // Add more items as needed
];

// Function to display catalog items
function showCatalog() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    catalog.forEach(item => {
        const nextCard = createCard(item);
        cardContainer.appendChild(nextCard);
    });
}

// Function to create a card for a catalog item
function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const title = document.createElement("h2");
    title.textContent = item.name;

    const image = document.createElement("img");
    image.src = item.imageURL;
    image.alt = item.name + " Image";

    const price = document.createElement("p");
    price.textContent = "Price: $" + item.price.toFixed(2);

    const category = document.createElement("p");
    category.textContent = "Category: " + item.category;

    cardContent.appendChild(title);
    cardContent.appendChild(image);
    cardContent.appendChild(price);
    cardContent.appendChild(category);

    card.appendChild(cardContent);

    return card;
}

// This calls the showCatalog() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCatalog);

// Function to filter items by category
function filterByCategory(category) {
    const filteredCatalog = catalog.filter(item => item.category === category);
    if (filteredCatalog.length > 0) {
        displayCatalog(filteredCatalog);
    } else {
        alert('No items found in this category.');
    }
}

// Function to search for items by name
function searchByName() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const searchResults = catalog.filter(item => item.name.toLowerCase().includes(searchInput));
    if (searchResults.length > 0) {
        displayCatalog(searchResults);
    } else {
        alert('No items found matching your search.');
    }
}

// Function to reset the catalog to show all items
function resetCatalog() {
    showCatalog();
}

// Function to add a new guitar or bass
function addNewItem() {
    // Get input values from form fields
    const name = document.getElementById("new-item-name").value;
    const category = document.getElementById("new-item-category").value;
    const price = parseFloat(document.getElementById("new-item-price").value);
    const imageURL = document.getElementById("new-item-image").value;

    // Validate input values
    if (name && category && price && imageURL) {
        // Create a new item object
        const newItem = { name, category, price, imageURL };
        // Add the new item to the catalog
        catalog.push(newItem);
        // Display the updated catalog
        showCatalog();
        // Clear input fields
        document.getElementById("new-item-name").value = "";
        document.getElementById("new-item-category").value = "";
        document.getElementById("new-item-price").value = "";
        document.getElementById("new-item-image").value = "";
    } else {
        alert("Please fill out all fields.");
    }
}

// Function to remove the last item from the catalog
function removeLastItem() {
    catalog.pop(); // Remove last item in catalog array
    showCatalog(); // Call showCatalog again to refresh
}
