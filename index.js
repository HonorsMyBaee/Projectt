const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] })
const prefix = 'M.'
const keepAlive = require("./server");

client.on('ready', () => {
console.log('Bot berhasil menyala')
});

client.on('voiceStateUpdate', (oldState, newState) => {
    let newUserChannel = newState.channelID
    let oldUserChannel = oldState.channelID
  
    if(oldUserChannel === '822711121243930634' && newUserChannel !== '822711121243930634') {
  
        const role = newState.guild.roles.cache.find(r => r.id === '805143554963669003'); // roles petualang
        const role2 = newState.guild.roles.cache.find(r => r.id === '811554459930460170'); // roles audience
        if (!newState.member.roles.cache.has(role)) newState.member.roles.add(role);
        if (!newState.member.roles.cache.has(role2)) newState.member.roles.remove(role2);
        return;
  
    } else if(newUserChannel === '822711121243930634'){
  
        const role = newState.guild.roles.cache.find(r => r.id === '805143554963669003'); // roles petualang
        const role2 = newState.guild.roles.cache.find(r => r.id === '811554459930460170'); // roles audience
        if(!newState.member.roles.cache.has(role)) newState.member.roles.remove(role);
        if(!newState.member.roles.cache.has(role2)) newState.member.roles.add(role2);
        return;
    }
});

keepAlive();
client.login(process.env.DISCORD_BOT_TOKEN);