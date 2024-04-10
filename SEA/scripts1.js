// scripts1.js

// Define instrument data
const instruments = [
    { 
        name: "Yamaha F325D Dreadnought Acoustic Guitar",
        category: "guitar",
        price: 199.99,
        imageURL: "https://m.media-amazon.com/images/I/61RLzFHpZNL._AC_SL1500_.jpg" 
    },
    { 
        name: "Fender Stratocaster Electric Guitar",
        category: "guitar",
        price: 799.99,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/M08143000001000-02-600x600.jpg" 
    },
    { 
        name: "Epiphone 60's Standard Les Paul Guitar - Iced Tea",
        category: "guitar",
        price: 699.00,
        imageURL: "https://i.imgur.com/nJHz9qv_d.webp?maxwidth=1520&fidelity=grand" 
    },
    { 
        name: "Squier 40th Anniversary Precision Bass Guitar Vintage Edition Satin Dakota Red",
        category: "bass",
        price: 399.99,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L92325000002000-02-600x600.jpg" 
    },
    { 
        name: "Fender American Ultra Jazz Electric Bass",
        category: "bass",
        price: 2299.99,
        imageURL: "https://cf1.zzounds.com/media/productmedia/fit,600by800/quality,85/1_Full_Straight_Front_NA-97f4566378d0b62870350aeaaee0b0a5.jpg"
    },
    {
        name: "Gibson Hummingbird Standard Acoustic-Electric Guitar Vintage Sunburst",
        category : "acoustic electric",
        price: 3999.00,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L28130000002000-02-600x600.jpg"
    },
    {
        name: "Gibson SG Standard '61 Electric Guitar Vintage Cherry",
        category : "electric",
        price: 1999.00,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L54585000001000-02-600x600.jpg"
    },
    {
        name: "EVH Striped Series 5150 - Red, Black and White",
        category : "electric",
        price : 1749.99,
        imageURL: "https://waltgracevintage.com/cdn/shop/products/IMG_1222.jpg?v=1653768810"
    },
    {
        name: "Hofner Ignition Series Short-Scale Violin Bass Guitar Sunburst",
        category : "bass",
        price: 449.99,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L81864000001000-02-600x600.jpg"

    },
    {
        name : "Gretsch G5422TG Electromatic Classic Hollowbody Double-Cut with Bigsby - Snowcrest White",
        category : "electric",
        price: 899.99,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L88824000003000-02-600x600.jpg"
    },
    {
        name: "Fender California Kingman Acoustic-Electric Bass Guitar Shaded Edge Burst",
        category : "acoustic bass",
        price: 599.99,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/M01775000001000-02-600x600.jpg"
    }
];

// Function to create a card for an instrument
function createInstrumentCard(instrument) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const title = document.createElement("h2");
    title.textContent = instrument.name;

    const image = document.createElement("img");
    image.src = instrument.imageURL;
    image.alt = instrument.name + " Image";

    const price = document.createElement("p");
    price.textContent = "Price: $" + instrument.price.toFixed(2);

    const category = document.createElement("p");
    category.textContent = "Category: " + instrument.category;

    cardContent.appendChild(title);
    cardContent.appendChild(image);
    cardContent.appendChild(price);
    cardContent.appendChild(category);

    card.appendChild(cardContent);

    

    return card;
}

// Function to display instruments
function displayInstruments() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    // Loop through each instrument in the instruments array
    for (let i = 0; i < instruments.length; i++) {
        const instrument = instruments[i];

        // Create HTML elements for the instrument card
        const card = document.createElement("div");
        card.classList.add("card");

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const title = document.createElement("h2");
        title.textContent = instrument.name;

        const image = document.createElement("img");
        image.src = instrument.imageURL;
        image.alt = instrument.name + " Image";

        const price = document.createElement("p");
        price.textContent = "Price: $" + instrument.price.toFixed(2);

        const category = document.createElement("p");
        category.textContent = "Category: " + instrument.category;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        
        // Add an event listener to the remove button
        removeButton.addEventListener("click", function() {
            removeInstrument(i);
        });

        cardContent.appendChild(title);
        cardContent.appendChild(image);
        cardContent.appendChild(price);
        cardContent.appendChild(category);
        cardContent.appendChild(removeButton);

        card.appendChild(cardContent);

        cardContainer.appendChild(card);
    }
}

// Call the displayInstruments function when the page is first loaded
document.addEventListener("DOMContentLoaded", displayInstruments);