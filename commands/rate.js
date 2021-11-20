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
            messageEmbed.react('1️⃣');
            messageEmbed.react('2️⃣');
            messageEmbed.react('3️⃣');
            messageEmbed.react('4️⃣');
            messageEmbed.react('5️⃣');
            messageEmbed.react('6️⃣');
            messageEmbed.react('7️⃣');
            messageEmbed.react('8️⃣');
            messageEmbed.react('9️⃣');
            messageEmbed.react('💯');
            message.delete()
        }
    }
}