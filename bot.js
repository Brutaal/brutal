

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});
 
client.on('guildMemberAdd' ,member => {
  if(member.guild.id !== '462347265747451914') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '492406462476451840').send('**Welcome to Bubbles Tumblr**');
},3000);
});


 var adminprefix = "-";
client.on('message', message => {
  if (!message.content.startsWith(adminprefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "445630664671232000") return;

  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
    message.channel.sendMessage(`**${argresult}** :white_check_mark: `).then(message =>{message.delete(5000)})
} 
// This Code Edit By Mazchy . 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
    message.channel.sendMessage(`**${argresult}** :white_check_mark: `).then(message =>{message.delete(5000)})
} 
// This Code Edit By Mazchy . 
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/v5bz");
    message.channel.sendMessage(`**${argresult}** :white_check_mark: `).then(message =>{message.delete(5000)})
} 
if (message.content.startsWith(adminprefix + 'pl')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** :white_check_mark: `).then(message =>{message.delete(5000)})
} 

});



client.login(process.env.BOT_TOKEN);
	

