process.env.NTBA_FIX_319 = 1;
const TelegramBot = require("node-telegram-bot-api");
const token = "5086705032:AAEq9xEHqckp7PyaZRrsCqULkHlxVd99kOU";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  console.log(`the chatId is ${chatId}`);
  console.log(`the response is ${resp}`);

  bot.sendMessage(chatId, resp);
});
