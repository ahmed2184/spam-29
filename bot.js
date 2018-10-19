const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







BOT_TOKEN
client.on("ready", () => {
let channel =     client.channels.get("502157636242898944")
setInterval(function() {
channel.send(`asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
