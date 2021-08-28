module.exports ={
    name:'ask',
    aliases: ['question', 'qn', 'query'],
    description:'sets up an embed for a yes/no question.',

    async execute(message, args, command, ChannelIds, Discord, client){

    let messageArgs = args.join(' ');
    let embed = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setTitle("Asked: ")
        .setDescription(messageArgs);

        if (ChannelIds.includes(message.channel.id)){
            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react('👍');
            messageEmbed.react('👎');
            message.delete()
        }
    }
}