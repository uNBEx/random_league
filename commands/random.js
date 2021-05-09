const Discord = require("discord.js");

const constRoles=['TOP','JUNGLE','MID','BOT','SUPPORT'];

module.exports = {
    name: 'random',
    description: 'Randomize champion, runes, build and summoner spells for your role',
    usage: '[custom (top/jungle/mid/bot/support)]',
    cooldown: 5,
    execute(message,args) {
        var role=args[0]
        var summs=pickRandomSumms()
        if(role==='top'){
            var champion = pickRandomTop()
        }
        else return;


        let runesArray = pickRandomRunes()


        const embed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('Hello there')
	        .setAuthor('random(league);', 'https://i.imgur.com/1VqLHPg.png')
	        .setDescription('Your results:')
	        .setThumbnail('https://i.imgur.com/OJbDkos.png')
	        .addFields(
                { name: 'ROLE', value: `${role}`},
                { name: 'CHAMPION', value: `${champion}`},
                { name: 'SUMMS', value: `${summs[0]} and ${summs[1]}`},
                { name: 'RUNES:', value: `${runesArray[0]}\n${runesArray[1]}\n${runesArray[2]}\n${runesArray[3]}\n${runesArray[4]}\n${runesArray[5]}\n${runesArray[6]}\n${runesArray[7]}\n${runesArray[8]}\n${runesArray[9]}\n${runesArray[10]}\n`},
	        )
	        //.setImage('https://media.giphy.com/media/aKh27TGVXZW1TaYvMD/giphy.gif')
	        .setTimestamp()
            .setFooter(`Invoked by ${message.author.tag}.  GLHF!`, `${message.author.avatarURL()}`)
        message.channel.send(embed);
    }
}

function pickRandomRunes(){
    let precisionArray
    let dominationArray
    let sorceryArray
    let resolveArray
    let inspirationArray
    let answer
    answer = ['Tree one','Big','L1', 'L2','L3','Tree two','L1','L2','little1','little2', 'little3']

    precisionArray = [  ['Press the attack', 'Lethal tempo', 'Fleet footwork', 'Conqueror'],
                        ['Overheal','Triumph','Presence of mind'],
                        ['Legend: Alacrity','Legend: Tenacity','Legend: Bloodline'],
                        ['Coupe de grace','Cut down','Last stand']]

    dominationArray = [ ['Electrocute', 'Predator', 'Dark harvest', 'Hail of blades'],
                        ['Cheap shot','Taste of blood','Sudden impact'],
                        ['Zombie ward','Ghost poro','Eyeball collection'],
                        ['Ravenous hunter','Ingenious hunter','Relentless hunter', 'Ultimate hunter']]

    sorceryArray = [    ['Summon Aery', 'Arcane comet', 'Phase rush'],
                        ['Nullifying orb','Manaflow band','Nimbus cloak'],
                        ['Transcendence','Celerity','Absolute focus'],
                        ['Scorch','Waterwalking','Gathering storm']]

    resolveArray = [    ['Grasp of the undying', 'Aftershock', 'Guardian'],
                        ['Demolish','Font of life','Shield bash'],
                        ['Conditioning','Second wind','Bone plating'],
                        ['Overgrowth','Revitalize','Unflinching']]

    inspirationArray = [['Glacial augment', 'Unsealed spellbook', 'Prototype: Omnistone'],
                        ['Hextech flashtraption','Magical footwear','Perfect timing'],
                        ['Future\'s market','Minion dematerializer','Biscuit delivery'],
                        ['Cosmic insight','Approach velocity','Time warp tonic']]
    
    let trees
    trees = [0,1,2,3,4]

    let treeOneNumber = Math.floor(Math.random()*5)
    trees.splice(treeOneNumber, 1)
    let treeOne
    if(treeOneNumber === 0){
        treeOne=precisionArray
        answer[0]='Precision'
    }
    else if(treeOneNumber === 1){
        treeOne=dominationArray
        answer[0]='Domination'
    }
    else if(treeOneNumber === 2){
        treeOne=sorceryArray
        answer[0]='Sorcery'
    }
    else if(treeOneNumber === 3){
        treeOne=resolveArray
        answer[0]='Resolve'
    }
    else if(treeOneNumber === 4){
        treeOne=inspirationArray
        answer[0]='Inspiration'
    }

    answer[1]=treeOne[0][Math.floor(Math.random()*treeOne[0].length)]
    answer[2]=treeOne[1][Math.floor(Math.random()*treeOne[1].length)]
    answer[3]=treeOne[2][Math.floor(Math.random()*treeOne[2].length)]
    answer[4]=treeOne[3][Math.floor(Math.random()*treeOne[3].length)]

    let treeTwoNumber = trees[Math.floor(Math.random()*4)]
    let treeTwo
    if(treeTwoNumber === 0){
        treeTwo=precisionArray
        answer[5]='Precision'
    }
    else if(treeTwoNumber === 1){
        treeTwo=dominationArray
        answer[5]='Domination'
    }
    else if(treeTwoNumber === 2){
        treeTwo=sorceryArray
        answer[5]='Sorcery'
    }
    else if(treeTwoNumber === 3){
        treeTwo=resolveArray
        answer[5]='Resolve'
    }
    else if(treeTwoNumber === 4){
        treeTwo=inspirationArray
        answer[5]='Inspiration'
    }
    let treeTwoLayers
    treeTwoLayers = [1,2,3]
    let treeTwoLayerOneNumber=treeTwoLayers[Math.floor(Math.random()*3)]
    treeTwoLayers.splice(treeTwoLayerOneNumber-1,1)
    let treeTwoLayerTwoNumber=treeTwoLayers[Math.floor(Math.random()*2)]
    
    answer[6]=treeTwo[treeTwoLayerOneNumber][Math.floor(Math.random()*treeTwo[treeTwoLayerOneNumber].length)]
    answer[7]=treeTwo[treeTwoLayerTwoNumber][Math.floor(Math.random()*treeTwo[treeTwoLayerTwoNumber].length)]

    let little = [  ['Adaptive', 'Attack speed', 'Haste'],
                    ['Adaptive', 'Armor', 'Magic Resist'],
                    ['Health', 'Armor', 'Magic Resist']]
    answer[8] = little[0][Math.floor(Math.random()*3)]
    answer[9] = little[0][Math.floor(Math.random()*3)]
    answer[10] = little[0][Math.floor(Math.random()*3)]
    return answer
}

function pickRandomSumms(){
    let pool    
        pool = ['Ghost',
                'Heal',
                'Barrier',
                'Exhaust',
                'Flash',
                'Teleport',
                'Cleanse',
                'Ignite']
    ans=['1','2']
    let r = Math.floor(Math.random()*pool.length)
    ans[0]= pool[r]
    pool.splice(r,1)
    r = Math.floor(Math.random()*pool.length)
    ans[1]= pool[r]
    return ans
}

function pickRandomTop(){
    let pool
    pool = ['Aatrox',
            'Akali',
            'Camille',
            'ChoGath',
            'Darius',
            'Fiora',
            'Gangplank',
            'Garen',
            'Gnar',
            'Gwen',
            'Heimerdinger',
            'Illaoi',
            'Irelia',
            'Jax',
            'Jayce',
            'Kayle',
            'Kennen',
            'Kled',
            'Malphite',
            'Mordekaiser',
            'Nasus',
            'Ornn',
            'Poppy',
            'Quinn',
            'Renekton',
            'Riven',
            'Rumble',
            'Sett',
            'Shen',
            'Singed',
            'Sion',
            'Sylas',
            'Tahm Kench',
            'Teemo',
            'Tryndamere',
            'Urgot',
            'Vayne',
            'Volibear',
            'Wukong',
            'Yasuo',
            'Yone',
            'Yorick']
    let r=Math.floor(Math.random()*pool.length)
    return pool[r]
}

function pickRandomTop(){
    let pool
    pool = ['Aatrox',
            'Akali',
            'Camille',
            'ChoGath',
            'Darius',
            'Fiora',
            'Gangplank',
            'Garen',
            'Gnar',
            'Gwen',
            'Heimerdinger',
            'Illaoi',
            'Irelia',
            'Jax',
            'Jayce',
            'Kayle',
            'Kennen',
            'Kled',
            'Malphite',
            'Mordekaiser',
            'Nasus',
            'Ornn',
            'Poppy',
            'Quinn',
            'Renekton',
            'Riven',
            'Rumble',
            'Sett',
            'Shen',
            'Singed',
            'Sion',
            'Sylas',
            'Tahm Kench',
            'Teemo',
            'Tryndamere',
            'Urgot',
            'Vayne',
            'Volibear',
            'Wukong',
            'Yasuo',
            'Yone',
            'Yorick']
    let r=Math.floor(Math.random()*pool.length)
    return pool[r]
}

function pickRandomTop(){
    let pool
    pool = ['Aatrox',
            'Akali',
            'Camille',
            'ChoGath',
            'Darius',
            'Fiora',
            'Gangplank',
            'Garen',
            'Gnar',
            'Gwen',
            'Heimerdinger',
            'Illaoi',
            'Irelia',
            'Jax',
            'Jayce',
            'Kayle',
            'Kennen',
            'Kled',
            'Malphite',
            'Mordekaiser',
            'Nasus',
            'Ornn',
            'Poppy',
            'Quinn',
            'Renekton',
            'Riven',
            'Rumble',
            'Sett',
            'Shen',
            'Singed',
            'Sion',
            'Sylas',
            'Tahm Kench',
            'Teemo',
            'Tryndamere',
            'Urgot',
            'Vayne',
            'Volibear',
            'Wukong',
            'Yasuo',
            'Yone',
            'Yorick']
    let r=Math.floor(Math.random()*pool.length)
    return pool[r]
}

function pickRandomTop(){
    let pool
    pool = ['Aatrox',
            'Akali',
            'Camille',
            'ChoGath',
            'Darius',
            'Fiora',
            'Gangplank',
            'Garen',
            'Gnar',
            'Gwen',
            'Heimerdinger',
            'Illaoi',
            'Irelia',
            'Jax',
            'Jayce',
            'Kayle',
            'Kennen',
            'Kled',
            'Malphite',
            'Mordekaiser',
            'Nasus',
            'Ornn',
            'Poppy',
            'Quinn',
            'Renekton',
            'Riven',
            'Rumble',
            'Sett',
            'Shen',
            'Singed',
            'Sion',
            'Sylas',
            'Tahm Kench',
            'Teemo',
            'Tryndamere',
            'Urgot',
            'Vayne',
            'Volibear',
            'Wukong',
            'Yasuo',
            'Yone',
            'Yorick']
    let r=Math.floor(Math.random()*pool.length)
    return pool[r]
}

function pickRandomTop(){
    let pool
    pool = ['Aatrox',
            'Akali',
            'Camille',
            'ChoGath',
            'Darius',
            'Fiora',
            'Gangplank',
            'Garen',
            'Gnar',
            'Gwen',
            'Heimerdinger',
            'Illaoi',
            'Irelia',
            'Jax',
            'Jayce',
            'Kayle',
            'Kennen',
            'Kled',
            'Malphite',
            'Mordekaiser',
            'Nasus',
            'Ornn',
            'Poppy',
            'Quinn',
            'Renekton',
            'Riven',
            'Rumble',
            'Sett',
            'Shen',
            'Singed',
            'Sion',
            'Sylas',
            'Tahm Kench',
            'Teemo',
            'Tryndamere',
            'Urgot',
            'Vayne',
            'Volibear',
            'Wukong',
            'Yasuo',
            'Yone',
            'Yorick']
    let r=Math.floor(Math.random()*pool.length)
    return pool[r]
}

