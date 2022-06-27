const TelegramBot = require('node-telegram-bot-api');
const { getRandomQuote } = require('./lib/quotes');

require("dotenv").config()

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.onText(/\/quote/, (msg) => {

    const chatId = msg.chat.id;
    const resp = getRandomQuote();

    bot.sendMessage(chatId, resp);
});