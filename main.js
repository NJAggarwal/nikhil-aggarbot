const Discord = require('discord.js');

const TicTacToe = require('discord-tictactoe');

const client = new Discord.Client({partials:["MESSAGE", "CHANNEL", "REACTION"]});

//const { token, prefix } = require('./config.json');

const prefix = process.env.NIKHILAGGARBOT_PREFIX

const csv = require('csv-parser');

const fs = require('fs');

const csv_to_list = [];

const ChannelIds = [];

client.commands = new Discord.Collection();

fs.createReadStream('channelids.csv')
    .pipe(csv(['Server', 'Channel', 'ID']))
    .on('data', (data) => csv_to_list.push(data));

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', ()=> {
    csv_to_list.forEach(element =>{
        ChannelIds.push(element['ID'])
    });
    console.log("Nikhil Aggarbot is online!")
});

client.on('ready', ()=>{
    client.user.setActivity(" $help", { type: "LISTENING" }).catch(console.error)
});

client.on('guildMemberAdd', guildMember =>{
    

    if (guildMember.guild.id === '769144748111167489'){
        
        let welcomeRole_3 = guildMember.guild.roles.cache.find(role => role.name === 'Student');

        guildMember.roles.add(welcomeRole_3);

        guildMember.guild.channels.cache.get('769144748111167492').send(`<@${guildMember.user.id}>`
        + ` Welcome to UoM Mathematics 3rd Years (Unofficial) Discord Server! Please see <#769208174494220308>`
        + ` to familiarise yourself with the server manual: information on what this server is about, how to navigate this server`
        + ` & how you can benefit from this server in many ways possible. If you are still unsure on how to navigate the server, or`
        + ` have any more questions, please do not hesitate to get in touch with me on the server via pinging me on either:`
        + ` @Nikhil Aggarwal, @King👑; or sending me a direct message.`)

    } else if (guildMember.guild.id === '786260531916832798'){
           
        let welcomeRole_2 = guildMember.guild.roles.cache.find(role => role.name === 'Student');

        guildMember.roles.add(welcomeRole_2);

        guildMember.guild.channels.cache.get('786260532264566794').send(`<@${guildMember.user.id}>`
        + ` Welcome to UoM Mathematics 2nd Years (Unofficial) Discord Server! Please see <#855368159199756288>`
        + ` to familiarise yourself with the server manual: information on what this server is about, how to navigate this server`
        + ` & how you can benefit from this server in many ways possible. If you are still unsure on how to navigate the server, or`
        + ` have any more questions, please do not hesitate to get in touch with me on the server via pinging me on either:`
        + ` @Nikhil Aggarwal, @King👑; or sending me a direct message; or reaching out to any other`
        + ` available Moderator.`)

    } else if (guildMember.guild.id === '855360915221774366'){
           
        let welcomeRole_1 = guildMember.guild.roles.cache.find(role => role.name === 'Student');

        guildMember.roles.add(welcomeRole_1);

        guildMember.guild.channels.cache.get('855360915234619415').send(`<@${guildMember.user.id}>`
        + ` Welcome to UoM Mathematics 1st Years (Unofficial) Discord Server! Please see <#855360915234619416>`
        + ` to familiarise yourself with the server manual: information on what this server is about, how to navigate this server`
        + ` & how you can benefit from this server in many ways possible. If you are still unsure on how to navigate the server, or`
        + ` have any more questions, please do not hesitate to get in touch with me on the server via pinging me on either:`
        + ` @Nikhil Aggarwal, @King👑; or sending me a direct message; or reaching out to any other`
        + ` available Moderator.`)

    } else if (guildMember.guild.id === '875621155510321183'){

        guildMember.guild.channels.cache.get('875621155959095334').send(`<@${guildMember.user.id}>`
        + ` Welcome to UoM Mathematics Foundation Year (Unofficial) Discord Server! Please see <#875621155959095330>`
        + ` to familiarise yourself with the server manual: information on what this server is about, how to navigate this server`
        + ` & how you can benefit from this server in many ways possible. If you are still unsure on how to navigate the server, or`
        + ` have any more questions, please do not hesitate to get in touch with me on the server via pinging me on either:`
        + ` @Nikhil Aggarwal, @King👑; or sending me a direct message; or reaching out to any other`
        + ` available Moderator.`)

    }
});

client.on('message', message =>{

    //radarChannels in order of moduleslist.js & top four are #add-socials-role channel ids 3 to FY.
    radarChannels = ['882631817021255730', '882632171217633300', '882632897029341214', '882633171072593961',
    '855396707387179018', '880360739259445308', '854303604226523147', '854299696415899648', '854299865878364160', 
    '854084829301833778', '854084934364430426', '880740835111628820', '880732668680081439', '875754076313378866',
    '875638848321888296', '875639302703415307']

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find((a => a.aliases && a.aliases.includes(command)));

    //if (radarChannels.includes(message.channel.id)) {
      //  if (!message.content.startsWith(prefix)) {
        //    message.react('❌');
          //  setTimeout(() => message.delete(), 500);
            //return;
        //}
    //}
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    try{
        cmd.execute(message, args, command, ChannelIds, Discord, client);
    }catch(err){
        message.reply("There was an error trying to execute this command!");
    }
    
});

try{
    new TicTacToe({language: 'en', command: '-ttt'})
        .attach(client);
    }
catch(err){
    message.reply("There was an error trying to execute this command!");
    }

client.login(process.env.NIKHILAGGARBOT_TOKEN);