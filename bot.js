const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();


client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on("ready", () => {
let channel =     client.channels.get("536852233824763915")
setInterval(function() {
channel.send(`haroonylove`);
}, 30)
})


client2.on("ready", () => {
let channel =     client2.channels.get("536852233824763915")
setInterval(function() {
channel.send(`haroonylove`);
}, 30)
})



client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);//
