import { Client, Intents, Message } from 'discord.js';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => console.log('ready'));
bot.on('message', async (msg) => {
    if (msg.author.bot) return;

    await msg.reply("Hi");
})


bot.login('OTM0Njc4MDUwMzg0MjQ4OTQz.YezkxA.6ZxKX8bJzVxJX8EsE5CJ03k9pko')