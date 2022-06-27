const quotes = require("../data/quotes.json")
const getRandomQuote=()=>{
    const index = Math.floor(Math.random()*quotes.length)
    return quotes[index]
}
module.exports = {getRandomQuote}