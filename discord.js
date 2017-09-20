
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});
client.on('message', msg => {

if(msg.content === "Hi" ) {       msg.sendMessage("Hello");} ;

if(msg.content === "Bye"){
         msg.sendMessage("bye see u soon")};



if (/^$game .*?/i.test(msg.content)) {

                client.user.setGame(stt.game.name=msg.content.replace(/^!!game /i, ""));
                client.user.setPresence(stt);
                msg.delete(100);
            }
if(msg.content === "dm"){
client.sendMessage(message.author, "content")
}




})
stt = {game:{name:"",type:0},type:0,afk:false};
client.login('MzM0NTMyMzE5OTcwOTgzOTM2.DKOhtA.YEFSdaC9DZ6b8g-IN_4Y21pnwWQ');
