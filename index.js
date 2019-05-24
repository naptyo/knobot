const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content == '!ping') {
        message.channel.send('Pong.');
    }
});

client.login('NTgxMDU3MjgyODE3NjU0ODA1.XOZ01w.GMgpcD7PVFaZMngYtW8gdR85xng');