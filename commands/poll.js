module.exports ={
    name:'poll',
    aliases: ['ballot', 'survey'],
    description: 'sets up a poll with multiple reactions',

    async execute(message, args, command, ChannelIds, Discord, client){
        
        const poll_response_list = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳', '🇴',
        '🇵', '🇶', '🇷', '🇸', '🇹']

        let messageArgs = args.join(' ');

        let options = messageArgs.split(';');
    
        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
            .setTitle(options[0]);

        let i = 0
        do {            
            embed.addField(`${poll_response_list[i]}` + options[i+1], '\u200b');
            i = i + 1
        } while (i < (options.length - 1))

        if (ChannelIds.includes(message.channel.id)){
            let messageEmbed = await message.channel.send(embed);
            let k = 0
            do{
                messageEmbed.react(poll_response_list[k]);
                k = k + 1
            } while (k < (options.length - 1))
            message.delete()
        }
    }
}