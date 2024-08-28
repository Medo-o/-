const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TOKEN = 'YOUR_BOT_TOKEN'; // استبدل هذا برمز التوكن الخاص بالبوت الخاص بك
const PREFIX = '!'; // يمكنك تغيير البادئة حسب تفضيلاتك

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    // تجنب الرد على الرسائل من البوت نفسه
    if (message.author.bot) return;

    // تحقق مما إذا كانت الرسالة تتطابق مع النص المحدد
    if (message.content === `${PREFIX}hello`) {
        message.reply('Hello! How can I assist you today?');
    }
});

client.login(TOKEN);
