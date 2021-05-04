const Discord = require("discord.js");

module.exports = {
    name: 'custom',
    description: 'Randomize teams and roles for a 5v5 custom game!',
    usage: '[custom nick nick nick nick nick nick nick nick nick nick]',
    cooldown: 5,
    execute(message,args) {
        if(args.length !== 10){
            message.channel.send("Incorrect number of players!");
            return;
        }
        var players = args;
        var sortedPlayers = [];
        for(let i = 0;i<10;i++){
            let r = Math.floor(Math.random()*(10-i));
            sortedPlayers.push(players[r]);
            players.splice(r,1);
        }
        const blueSideEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('Blue side')
	        .setAuthor('5v5 custom teams', 'https://i.imgur.com/YUGADtq.png')
	        .setDescription('Roles and players:')
	        .setThumbnail('https://i.imgur.com/OJbDkos.png')
	        .addFields(
                { name: 'TOP', value: `${sortedPlayers[0]}`, inline: true},
                { name: 'JUNGLE', value: `${sortedPlayers[1]}`, inline: true },
                { name: 'MID', value: `${sortedPlayers[2]}`, inline: true },
                { name: 'ADC', value: `${sortedPlayers[3]}`, inline: true },
                { name: 'SUPPORT', value: `${sortedPlayers[4]}`, inline: true },
	        )
	        .setImage('https://media.giphy.com/media/aKh27TGVXZW1TaYvMD/giphy.gif')
	        .setTimestamp()
            .setFooter('GLHF!');
        const redSideEmbed = new Discord.MessageEmbed()
	        .setColor('#ff0000')
	        .setTitle('Red side')
	        .setAuthor('5v5 custom teams', 'https://i.imgur.com/YUGADtq.png')
	        .setDescription('Roles and players:')
	        .setThumbnail('https://i.imgur.com/PgqhiFz.png')
	        .addFields(
                { name: 'TOP', value: `${sortedPlayers[5]}`, inline: true },
                { name: 'JUNGLE', value: `${sortedPlayers[6]}`, inline: true },
                { name: 'MID', value: `${sortedPlayers[7]}`, inline: true },
                { name: 'ADC', value: `${sortedPlayers[8]}`, inline: true },
                { name: 'SUPPORT', value: `${sortedPlayers[9]}`, inline: true },
	        )
	        .setImage('https://media.giphy.com/media/aKh27TGVXZW1TaYvMD/giphy.gif')
	        .setTimestamp()
            .setFooter('GLHF!');
        message.channel.send(blueSideEmbed);
        message.channel.send(redSideEmbed);
    }
}