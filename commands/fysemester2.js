module.exports ={
    name: 'fysemester2',
    description: "Sets up a FYS2 reaction role message!",
    async execute(message, args, command, ChannelIds, Discord, client){
        const channel = '875639302703415307';
        const SEMESTER2Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 2 ╠═════");
        const MATH19812Role = message.guild.roles.cache.find(role=>role.name === "MATH19812");
        const MATH19832Role = message.guild.roles.cache.find(role=>role.name === "MATH19832");
        const MATH19842Role = message.guild.roles.cache.find(role=>role.name === "MATH19842");
        const MATH19852Role = message.guild.roles.cache.find(role=>role.name === "MATH19852");
        const MATH19872Role = message.guild.roles.cache.find(role=>role.name === "MATH19872");
       
        const MATH19812Emoji = '🇦';
        const MATH19832Emoji = '🇧';
        const MATH19842Emoji = '🇨';
        const MATH19852Emoji = '🇩';
        const MATH19872Emoji = '🇪';
        
        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Choose your semester 2 modules!')
            .setDescription('Reacting will allow you to access the module text channel. \n\n'
            + `${MATH19812Emoji} MATH19812 - 0B2 \n\n`
            + `${MATH19832Emoji} MATH19832 - 0C2 \n\n`
            + `${MATH19842Emoji} MATH19842 - 0F2 \n\n`
            + `${MATH19852Emoji} MATH19852 - 0J2 \n\n`
            + `${MATH19872Emoji} MATH19872 - 0D2 \n\n`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(MATH19812Emoji);
        messageEmbed.react(MATH19832Emoji);
        messageEmbed.react(MATH19842Emoji);
        messageEmbed.react(MATH19852Emoji);
        messageEmbed.react(MATH19872Emoji);
        message.delete()

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === MATH19812Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH19812Role);
                }
                if(reaction.emoji.name === MATH19832Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH19832Role);
                }
                if(reaction.emoji.name === MATH19842Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH19842Role);
                }
                if(reaction.emoji.name === MATH19852Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH19852Role);
                }
                if(reaction.emoji.name === MATH19872Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH19872Role);
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
                if(reaction.emoji.name === MATH19812Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH19812Role);
                }
                if(reaction.emoji.name === MATH19832Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH19832Role);
                }
                if(reaction.emoji.name === MATH19842Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH19842Role);
                }
                if(reaction.emoji.name === MATH19852Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH19852Role);
                }
                if(reaction.emoji.name === MATH19872Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH19872Role);
                }
            } else{
                return;
            }
        });
    }
}