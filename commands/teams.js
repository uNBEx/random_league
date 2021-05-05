const Discord = require("discord.js");

module.exports = {
    name: 'teams',
    description: 'Randomizes teams of even sizes and picks sides for them. Use an even amount of players from 2 up to 10.',
    usage: '[teams nick nick (nick)...]',
    cooldown: 5,
    execute(message,args) {
        //return when number of players odd or out of the <2,10> bound
        var playersCount = args.length;
        if((args.length % 2) || args.length < 2 || args.length > 10){
            message.channel.send("Incorrect number of players!");
            return;
        }
        var players = args;
        var blueSidePlayers = [];
        var redSidePlayers = [];

        //Create an array of players assigned to blue side
        for(let i = 0;i<(playersCount/2);i++){
            let r = Math.floor(Math.random()*players.length);
            blueSidePlayers.push(players[r]);
            players.splice(r,1);
        }
        //Create an array of players assigned to red side
        for(let i = 0;i<(playersCount/2);i++){
            let r = Math.floor(Math.random()*players.length);
            redSidePlayers.push(players[r]);
            players.splice(r,1);
        }
        var blueSideString = '';
        var redSideString = '';
        for(let i = 0; i<blueSidePlayers.length;i++){
            blueSideString+=`${blueSidePlayers[i]}\n`;
            redSideString+=`${redSidePlayers[i]}\n`;
        }

        const blueSideEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('Blue side')
	        .setAuthor('random(league);', 'https://i.imgur.com/1VqLHPg.png')
	        //.setDescription('Players:')
	        .setThumbnail('https://i.imgur.com/OJbDkos.png')
	        .setImage('https://media.giphy.com/media/aKh27TGVXZW1TaYvMD/giphy.gif')
	        .setTimestamp()
            .setFooter(`Invoked by ${message.author.tag}.  GLHF!`, `${message.author.avatarURL()}`)
            .addFields({ name:'Players:', value: `**${blueSideString}**`});
        const redSideEmbed = new Discord.MessageEmbed()
	        .setColor('#ff0000')
	        .setTitle('Red side')
	        .setAuthor('random(league);', 'https://i.imgur.com/1VqLHPg.png')
	        //.setDescription('Players:')
	        .setThumbnail('https://i.imgur.com/PgqhiFz.png')
	        .setImage('https://media.giphy.com/media/aKh27TGVXZW1TaYvMD/giphy.gif')
	        .setTimestamp()
            .setFooter(`Invoked by ${message.author.tag}.  GLHF!`, `${message.author.avatarURL()}`)
            .addFields({ name:'Players:', value: `**${redSideString}**`});
        message.channel.send(blueSideEmbed);
        message.channel.send(redSideEmbed);
    }
}