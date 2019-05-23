import Discord from 'discord.js';

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login('NTgxMDU3MjgyODE3NjU0ODA1.XOZ01w.GMgpcD7PVFaZMngYtW8gdR85xng');