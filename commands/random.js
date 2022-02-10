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
        else if(role==='jungle'){
            var champion = pickRandomJungle()
            summs[0]='Smite'
        }
        else if(role==='mid'){
            var champion = pickRandomMid()
        }
        else if(role==='bot' || role==='adc'){
            var champion = pickRandomBot()
        }
        else if(role==='support'){
            var champion = pickRandomSupport()
        }
        else if(role==='all'){
            var champion = pickRandomChampion()
        }
        else return;
        
        let items = pickRandomItems()

        let runesArray = pickRandomRunes()


        const embed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle(`Hi ${message.author.tag}!`)
	        .setAuthor('random(league);', 'https://i.imgur.com/1VqLHPg.png')
	        .setDescription('Your results:')
	        .setThumbnail('https://i.imgur.com/OJbDkos.png')
	        .addFields(
                { name: 'ROLE:', value: `${role}`, inline: true},
                { name: 'CHAMPION:', value: `${champion}`, inline: true},
                { name: 'SUMMS:', value: `${summs[0]} and ${summs[1]}`,inline: true},
                { name: 'RUNES:', value: `${runesArray[0]}\n\n${runesArray[1]}\n\n${runesArray[2]}\n${runesArray[3]}\n${runesArray[4]}\n\n${runesArray[5]}\n\n${runesArray[6]}\n${runesArray[7]}\n\n${runesArray[8]}\n${runesArray[9]}\n${runesArray[10]}`},
                { name: 'ITEMS:', value: `${items[0]}\n${items[1]}\n${items[2]}\n${items[3]}\n${items[4]}\n${items[5]}`}
	        )
	        //.setImage('https://media.giphy.com/media/aKh27TGVXZW1TaYvMD/giphy.gif')
	        .setTimestamp()
            .setFooter(`Invoked by ${message.author.tag}.  GLHF!`, `${message.author.avatarURL()}`)
        message.channel.send(embed);
    }
}

function pickRandomItems(){
    let build = ['mythic', 'boots', 'legend1', 'legend2', 'legend3', 'legend4']
    let mythics
    mythics = [ 'Divine Sunderer',
                'Duskblade of Draktharr',
                'Eclipse',
                'Everfrost',
                'Frostfire Gauntlet',
                'Galeforce',
                'Goredrinker',
                'Hextech Rocketbelt',
                'Immortal Shieldbow',
                'Imperial Mandate',
                'Kraken Slayer',
                'Liandry\'s Anguish',
                'Locket of the Iron Solari',
                'Luden\'s tempest',
                'Moonstone Renewer',
                'Night Harvester',
                'Prowler\'s Claw',
                'Riftmaker',
                'Shurelya\'s Battlesong',
                'Stridebreaker',
                'Sunfire Aegis',
                'Trinity Force',
                'Turbo Chemtank',
                'Crown of the Shattered Queen',
                'Evenshroud']
    build[0] = mythics[Math.floor(Math.random()*mythics.length)]
    let boots
    boots = [   'Berserker\'s Greaves',
                'Boots of Swiftness',
                'Ionian Boots od Lucidity',
                'Mercury\'s Treads',
                'Mobility Boots',
                'Plated Steelcaps',
                'Sorcerer\'s Shoes']
    build[1] = boots[Math.floor(Math.random()*boots.length)]
    let items
    items = [   'Abyssal Mask',
                'Archangel\'s Staff',
                'Ardent Censer',
                'Banshee\'s Veil',
                'Black Cleaver',
                'Blade of the Ruined King',
                'Bloodthirster',
                'Chempunk Chainsword',
                'Cosmic Drive',
                'Dead Man\'s Plate',
                'Death\'s Dance',
                'Demonic Embrace',
                'Edge of Night',
                'Essence Reaver',
                'Force of Nature',
                'Frozen Heart',
                'Gargoyle Stoneplate',
                'Guardian Angel',
                'Guinsoo\'s Rageblade',
                'Horizon Focus',
                'Infinity Edge',
                'Knight\'s Vow',
                'Lich Bane',
                'Lord Dominik\'s Regards',
                'Manamune',
                'Maw of Malmortius',
                'Mejai\'s Soulstealer',
                'Mercurial Scimitar',
                'Mikael\'s Blessing',
                'Morellonomicon',
                'Mortal Reminder',
                'Nashor\'s Tooth',
                'Navori Quickblades',
                'Phantom Dancer',
                'Rabadon\'s Deathcap',
                'Randuin\'s Omen',
                'Rapid Firecannon',
                'Ravenous Hydra',
                'Redemption',
                'Runaan\'s Hurricane',
                'Rylai\'s Crystal Scepter',
                'Sanguine Blade',
                'Serpent\'s Fang',
                'Serylda\'s Grudge',
                'Silvermere Dawn',
                'Spirit Visage',
                'Staff of Flowing Water',
                'Sterak\'s Gage',
                'Stormrazor',
                'The Collector',
                'Thornmail',
                'Titanic Hydra',
                'Umbrial Glaive',
                'Vigilant Wardstone',
                'Void Staff',
                'Warmog\'s Armor',
                'Wit\'s End',
                'Youmuu\'s Ghostblade',
                'Zeke\'s Convergence',
                'Zhonya\'s Hourglass',
                'Winter\'s Approach',
                'Anathema\s Chains',
                'Shadowflame',
                'Axiom Arc',
                'Hullbreaker']
    for(let i = 2;i<6;i++){
        let r = Math.floor(Math.random()*items.length)
        build[i]=items[r]
        items.splice(r,1)
    }
    return build



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

    inspirationArray = [['Glacial augment', 'Unsealed spellbook', 'First Strike'],
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
    let little
    little = [      ['Adaptive', 'Attack speed', 'Haste'],
                    ['Adaptive', 'Armor', 'Magic Resist'],
                    ['Health', 'Armor', 'Magic Resist']]
    answer[8] = little[0][Math.floor(Math.random()*3)]
    answer[9] = little[1][Math.floor(Math.random()*3)]
    answer[10] = little[2][Math.floor(Math.random()*3)]
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

function pickRandomChampion(){
    let pool
    pool = ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'ChoGath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'KaiSa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'KhaZix', 'Kindred', 'Kled', 'KogMaw', 'LeBlanc', 'Lee Sin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu & Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'RekSai', 'Rell', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vex', 'VelKoz', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra']
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

function pickRandomJungle(){
    let pool
    pool = ['Amumu',
            'Diana',
            'Dr. Mundo',
            'Ekko',
            'Elise',
            'Evelynn',
            'Fiddlesticks',
            'Gragas',
            'Graves',
            'Gwen',
            'Hecarim',
            'Ivern',
            'Jarvan IV',
            'Karthus',
            'Kayn',
            'KhaZix',
            'Kindred',
            'Lee Sin',
            'Lillia',
            'Master Yi',
            'Morgana',
            'Nidalee',
            'Nocturne',
            'Nunu & Willump',
            'Olaf',
            'Poppy',
            'Rammus',
            'RekSai',
            'Rengar',
            'Sejuani',
            'Shaco',
            'Shyvana',
            'Skarner',
            'Taliyah',
            'Trundle',
            'Udyr',
            'Vi',
            'Viego',
            'Volibear',
            'Warwick',
            'Xin Zhao',
            'Zac']
    let r=Math.floor(Math.random()*pool.length)
    return pool[r]
}

function pickRandomMid(){
    let pool
    pool = ['Ahri',
            'Akali',
            'Akshan',
            'Anivia',
            'Annie',
            'Aurelion Sol',
            'Azir',
            'Cassiopeia',
            'Corki',
            'Diana',
            'Ekko',
            'Fizz',
            'Galio',
            'Gwen',
            'Heimerdinger',
            'Irelia',
            'Kassadin',
            'Katarina',
            'LeBlanc',
            'Lissandra',
            'Lucian',
            'Lux',
            'Malzahar',
            'Neeko',
            'Orianna',
            'Pantheon',
            'Qiyana',
            'Ryze',
            'Sylas',
            'Syndra',
            'Talon',
            'Twisted Fate',
            'Veigar',
            'VelKoz',
            'Vex',
            'Viego',
            'Viktor',
            'Vladimir',
            'Xerath',
            'Yasuo',
            'Yone',
            'Zed',
            'Zeri',
            'Ziggs',
            'Zoe']
    let r=Math.floor(Math.random()*pool.length)
    return pool[r]
}

function pickRandomBot(){
    let pool
    pool = ['Aphelios',
            'Ashe',
            'Caitlyn',
            'Draven',
            'Ezreal',
            'Jhin',
            'Jinx',
            'KaiSa',
            'Kalista',
            'KogMaw',
            'Lucian',
            'Miss Fortune',
            'Samira',
            'Senna',
            'Sivir',
            'Tristana',
            'Twitch',
            'Varus',
            'Vayne',
            'Xayah',
            'Yasuo',
            'Zeri']
    let r=Math.floor(Math.random()*pool.length)
    return pool[r]
}

function pickRandomSupport(){
    let pool
    pool = ['Alistar',
            'Bard',
            'Blitzcrank',
            'Brand',
            'Braum',
            'Galio',
            'Janna',
            'Karma',
            'Leona',
            'Lulu',
            'Lux',
            'Maokai',
            'Morgana',
            'Nami',
            'Nautilus',
            'Pantheon',
            'Pyke',
            'Rakan',
            'Rell',
            'Senna',
            'Seraphine',
            'Sett',
            'Shaco',
            'Sona',
            'Soraka',
            'Swain',
            'Taric',
            'Thresh',
            'VelKoz',
            'Vex',
            'Xerath',
            'Yuumi',
            'Zilean',
            'Zyra']
    let r=Math.floor(Math.random()*pool.length)
    return pool[r]
}

