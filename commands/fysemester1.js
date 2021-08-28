module.exports ={
    name: 'fysemester1',
    description: "Sets up a FYS1 reaction role message!",
    async execute(message, args, command, ChannelIds, Discord, client){
        const channel = '875638848321888296';
        const SEMESTER1Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 1 ╠═════");
        const MATH19801Role = message.guild.roles.cache.find(role=>role.name === "MATH19801");
        const MATH19821Role = message.guild.roles.cache.find(role=>role.name === "MATH19821");
        const MATH19861Role = message.guild.roles.cache.find(role=>role.name === "MATH19861");
    
        const MATH19801Emoji = '🇦';
        const MATH19821Emoji = '🇧';
        const MATH19861Emoji = '🇨';

        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Choose your semester 1 modules!')
            .setDescription('Reacting will allow you to access the module text channel. \n\n'
            + `${MATH19801Emoji} MATH19801 - 0B1 \n\n`
            + `${MATH19821Emoji} MATH19821 - 0C1 \n\n`
            + `${MATH19861Emoji} MATH19861 - 0N1 \n\n`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(MATH19801Emoji);
        messageEmbed.react(MATH19821Emoji);
        messageEmbed.react(MATH19861Emoji);
        message.delete()

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === MATH19801Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH19801Role);
                }
                if(reaction.emoji.name === MATH19821Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH19821Role);
                }
                if(reaction.emoji.name === MATH19861Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH19861Role);
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
                if(reaction.emoji.name === MATH19801Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH19801Role);
                }
                if(reaction.emoji.name === MATH19821Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH19821Role);
                }
                if(reaction.emoji.name === MATH19861Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH19861Role);
                }
            } else{
                return;
            }
        });
    }
}