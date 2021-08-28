
module.exports={
    name: '8ball',
    description: '8ball command returns a random answer from a list.',

    async execute(message, args, command, ChannelIds, Discord, client){

        const eightBallList = ['It is Certain.', 'It is decidely so.', 'Without a doubt', 'Yes definitely',
        'You may rely on it.', 'As I see it, yes.', 'Most likely', 'Outlook good.', 'Yes.',
        'Signs point to yes', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.',
        'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no.',
        'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

        const eightBallAffirmativeList = ['It is Certain.', 'It is decidely so.', 'Without a doubt', 'Yes definitely',
        'You may rely on it.', 'As I see it, yes.', 'Most likely', 'Outlook good.', 'Yes.',
        'Signs point to yes'];

        const eightBallNonCommittalList = ['Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.',
        'Cannot predict now.', 'Concentrate and ask again.'];

        const eightBallNegativeList = ["Don't count on it.", 'My reply is no.',
        'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

        const eightBallRandom = eightBallList[Math.floor(Math.random()*eightBallList.length)];

        let messageArgs = args.join(' ');

        if (eightBallAffirmativeList.includes(eightBallRandom)){

            let embedA = new Discord.MessageEmbed()
                .setColor('#57F287')
                .setTitle('**8-Ball**')
                .addField('**Question**', messageArgs)
                .addField('**Answer**', eightBallRandom)

            if (ChannelIds.includes(message.channel.id)){
                let messageEmbed = await message.channel.send(embedA);
                message.delete()
            }
        } else if (eightBallNonCommittalList.includes(eightBallRandom)){

            let embedB = new Discord.MessageEmbed()
                .setColor('#FEE75C')
                .setTitle('**8-Ball**')
                .addField('**Question**', messageArgs)
                .addField('**Answer**', eightBallRandom)

            if (ChannelIds.includes(message.channel.id)){
                let messageEmbed = await message.channel.send(embedB);
                message.delete()
            }
        } else if (eightBallNegativeList.includes(eightBallRandom)){

            let embedC = new Discord.MessageEmbed()
                .setColor('#ED4245')
                .setTitle('**8-Ball**')
                .addField('**Question**', messageArgs)
                .addField('**Answer**', eightBallRandom)

            if (ChannelIds.includes(message.channel.id)){
                let messageEmbed = await message.channel.send(embedC);
                message.delete()
            }
        }
    }
}