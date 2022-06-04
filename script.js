let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes from APl
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();



// // Get Quotes from Local API
// function newQuote() {
//     // Pick a random quote from apiQuotes array
//     const quote = localApi[Math.floor(Math.random() * localApi.length)];
//     console.log(quote);
// }

// // On Load
// newQuote();
