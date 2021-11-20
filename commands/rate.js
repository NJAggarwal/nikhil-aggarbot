module.exports={
    name: 'rate',
    description: 'Creates a score embed',

    async execute(message, args, command, ChannelIds, Discord, client){

        let messageArgs = args.join(' ');
        let embed = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setTitle("Rate: ")
        .setDescription(messageArgs);

        if (ChannelIds.includes(message.channel.id)){
            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react('\:one:');
            messageEmbed.react('\:two:');
            messageEmbed.react('\:three:');
            messageEmbed.react('\:four:');
            messageEmbed.react('\:five:');
            messageEmbed.react('\:six:');
            messageEmbed.react('\:seven:');
            messageEmbed.react('\:eight:');
            messageEmbed.react('\:nine:');
            messageEmbed.react('\:100:');
            message.delete()
        }
    }
}