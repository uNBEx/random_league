const Discord = require("discord.js");

//const constRoles=['TOP','JUNGLE','MID','BOT','SUPPORT'];

module.exports = {
    name: 'roles',
    description: 'Randomize roles for up to 5 players!',
    usage: '[roles nick (nick)...]',
    cooldown: 5,
    execute(message,args) {
        var playersCount = args.length;
        if(playersCount > 5 || playersCount < 1){
            message.channel.send("Incorrect number of players!");
            return;
        }
        var players = args;
        var remainingRoles=['TOP','JUNGLE','MID','BOT','SUPPORT'];
        var sortedRoles = [];
        for(let i = 0; i<playersCount; i++){
            let r = Math.floor(Math.random()*remainingRoles.length);
            sortedRoles.push(remainingRoles[r]);
            remainingRoles.splice(r,1);
        }
        var outputString = '';
        for(let i = 0; i<playersCount; i++){
            outputString+=`**${players[i]}** is playing **${sortedRoles[i]}**\n`;
        }
        
        const rolesEmbed = new Discord.MessageEmbed()
	        .setColor('#9c8255')
	        .setTitle('Random roles:')
	        .setAuthor('random(league);', 'https://i.imgur.com/YUGADtq.png')
	        //.setDescription('Players and roles:')
	        //.setThumbnail('https://i.imgur.com/OJbDkos.png')
	        .setImage('https://media.giphy.com/media/aKh27TGVXZW1TaYvMD/giphy.gif')
	        .setTimestamp()
            .setFooter(`Invoked by ${message.author.tag}.  GLHF!`, `${message.author.avatarURL()}`)
            .addFields({ name:'Results:', value: `${outputString}`});
            
        message.channel.send(rolesEmbed);
    }
}