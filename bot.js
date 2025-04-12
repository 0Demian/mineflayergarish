const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: parseInt(process.env.MC_PORT),
  username: process.env.BOT_NAME,
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Hello ${username}, you said: ${message}`);
});
