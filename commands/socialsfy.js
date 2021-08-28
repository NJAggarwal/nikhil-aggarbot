module.exports = {
    name: 'socialsfy',
    description: 'sets up a social reaction role message.',

    async execute (message, args, command, ChannelIds, Discord, client){

        const channel = '875621155959095330';

        const SocialsRole = message.guild.roles.cache.find(role=>role.name === "Socials");

        const SocialsEmoji = '👥';

        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Stay up to date with the latest Social Events!')
            .setDescription(`React with 👥 if you would like a <@&${SocialsRole.id}> role and being kept up to date with`
            + ` the latest server socials. \n\n`
            + `With enough members, I will definitely host regular fun games nights such as Jackbox games, Among Us `
            + `and Chess.`)
        
  
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(SocialsEmoji);
        message.delete()
        
        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name == SocialsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SocialsRole);
                    }
            }
        });

        client.on('messageReactionRemove', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name == SocialsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SocialsRole);
                }
            }
         }); 
    }
}