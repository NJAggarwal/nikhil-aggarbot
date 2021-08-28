module.exports ={
    name: 'choose',
    aliases: ['select', 'pick'],
    description: 'Takes a list of options from a user, and selects one at random',

    async execute (message, args, command, ChannelIds, Discord, client){

        let messageArgs = args.join(' ');

        let choices = messageArgs.split(';');

        const NikhilAggarbotsChoice = choices[Math.floor(Math.random()*choices.length)];

        let embed = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setTitle(` `)
        .setDescription(`<@${message.author.id}> ** you should choose the following: ** \n\n `
            + `**` + NikhilAggarbotsChoice + `**`)

        if (ChannelIds.includes(message.channel.id)){
            let messageEmbed = await message.channel.send(embed);
        }
    }

}