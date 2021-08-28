module.exports ={
    name: 'outsidemodules3',
    description: "Sets up a outside modules reaction role message!",
    async execute(message, args, command, ChannelIds, Discord, client){
        const channel = '880732668680081439';

        const physRole = message.guild.roles.cache.find(role=>role.name === "PHYS");
        const bmanRole = message.guild.roles.cache.find(role=>role.name === "BMAN");
        const compRole = message.guild.roles.cache.find(role=>role.name === "COMP");
        const philRole = message.guild.roles.cache.find(role=>role.name === "PHIL");
        const langRole = message.guild.roles.cache.find(role=>role.name === "LANG");
       
        const physEmoji = '🚀';
        const bmanEmoji = '💵';
        const compEmoji = '💻';
        const philEmoji = '🤔';
        const langEmoji = '🗺️';
        
        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Add outside discipline!')
            .setDescription('Reacting will give you access to the available joint honours channels. \n\n'
            + `${physEmoji} PHYS \n\n`
            + `${bmanEmoji} BMAN \n\n`
            + `${compEmoji} COMP \n\n`
            + `${philEmoji} PHIL \n\n`
            + `${langEmoji} LANG (Includes FREN, GERM, SPLA, ITAL etc.) \n\n`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(physEmoji);
        messageEmbed.react(bmanEmoji);
        messageEmbed.react(compEmoji);
        messageEmbed.react(philEmoji);
        messageEmbed.react(langEmoji);
        message.delete()

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === physEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(physRole);
                }
                if(reaction.emoji.name === bmanEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bmanRole);
                }
                if(reaction.emoji.name === compEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(compRole);
                }
                if(reaction.emoji.name === philEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(philRole);
                }
                if(reaction.emoji.name === langEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(langRole);
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
                if(reaction.emoji.name === physEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(physRole);
                }
                if(reaction.emoji.name === bmanEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(bmanRole);
                }
                if(reaction.emoji.name === compEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(compRole);
                }
                if(reaction.emoji.name === philEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(philRole);
                }
                if(reaction.emoji.name === langEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(langRole);
                }
            } else{
                return;
            }
        });
    }
}