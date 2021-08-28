module.exports ={
    name: 'year2semester1',
    description: "Sets up a Y2S1 reaction role message!",
    async execute(message, args, command, ChannelIds, Discord, client){
        const channel = '854084829301833778';
        const SEMESTER1Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 1 ╠═════");
        const MATH20101Role = message.guild.roles.cache.find(role=>role.name === "MATH20101");
        const MATH20111Role = message.guild.roles.cache.find(role=>role.name === "MATH20111");
        const MATH20201Role = message.guild.roles.cache.find(role=>role.name === "MATH20201");
        const MATH20401Role = message.guild.roles.cache.find(role=>role.name === "MATH20401");
        const MATH20411Role = message.guild.roles.cache.find(role=>role.name === "MATH20411");
        const MATH20621Role = message.guild.roles.cache.find(role=>role.name === "MATH20621");
        const MATH20701Role = message.guild.roles.cache.find(role=>role.name === "MATH20701");
        const MATH20811Role = message.guild.roles.cache.find(role=>role.name === "MATH20811");
        const MATH20951Role = message.guild.roles.cache.find(role=>role.name === "MATH20951");
    
        const MATH20101Emoji = '🇦';
        const MATH20111Emoji = '🇧';
        const MATH20201Emoji = '🇨';
        const MATH20401Emoji = '🇩';
        const MATH20411Emoji = '🇪';
        const MATH20621Emoji = '🇫';
        const MATH20701Emoji = '🇬';
        const MATH20811Emoji = '🇭';
        const MATH20951Emoji = '🇮';

        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Choose your semester 1 modules!')
            .setDescription('Reacting will allow you to access the module text channel. \n\n'
            + `${MATH20101Emoji} MATH20101 - Real Analysis A \n\n`
            + `${MATH20111Emoji} MATH20111 - Real Analysis B \n\n`
            + `${MATH20201Emoji} MATH20201 - Algebraic Structures 1 \n\n`
            + `${MATH20401Emoji} MATH20401 - Partial Differential Equations & Vector Calculus A \n\n`
            + `${MATH20411Emoji} MATH20411 - Partial Differential Equations & Vector Calculus B \n\n`
            + `${MATH20621Emoji} MATH20621 - Programming with Python \n\n`
            + `${MATH20701Emoji} MATH20701 - Probability 2 \n\n`
            + `${MATH20811Emoji} MATH20811 - Practical Statistics \n\n`
            + `${MATH20951Emoji} MATH20951 - Financial Mathematics for Actuarial Science 2 \n\n`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(MATH20101Emoji);
        messageEmbed.react(MATH20111Emoji);
        messageEmbed.react(MATH20201Emoji);
        messageEmbed.react(MATH20401Emoji);
        messageEmbed.react(MATH20411Emoji);
        messageEmbed.react(MATH20621Emoji);
        messageEmbed.react(MATH20701Emoji);
        messageEmbed.react(MATH20811Emoji);
        messageEmbed.react(MATH20951Emoji);
        message.delete()

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === MATH20101Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20101Role);
                }
                if(reaction.emoji.name === MATH20111Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20111Role);
                }
                if(reaction.emoji.name === MATH20201Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20201Role);
                }
                if(reaction.emoji.name === MATH20401Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20401Role);
                }
                if(reaction.emoji.name === MATH20411Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20411Role);
                }
                if(reaction.emoji.name === MATH20621Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20621Role);
                }
                if(reaction.emoji.name === MATH20701Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20701Role);
                }
                if(reaction.emoji.name === MATH20811Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20811Role);
                }
                if(reaction.emoji.name === MATH20951Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20951Role);
                }
            } else{
                return;
            }
        });

        client.on('messageReactionRemove', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === MATH20101Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20101Role);
                }
                if(reaction.emoji.name === MATH20111Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20111Role);
                }
                if(reaction.emoji.name === MATH20201Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20201Role);
                }
                if(reaction.emoji.name === MATH20401Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20401Role);
                }
                if(reaction.emoji.name === MATH20411Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20411Role);
                }
                if(reaction.emoji.name === MATH20621Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20621Role);
                }
                if(reaction.emoji.name === MATH20701Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20701Role);
                }
                if(reaction.emoji.name === MATH20811Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20811Role);
                }
                if(reaction.emoji.name === MATH20951Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20951Role);
                }
            } else{
                return;
            }
        });
    }
}