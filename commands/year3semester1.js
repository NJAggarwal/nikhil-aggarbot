module.exports ={
    name: 'year3semester1',
    description: "Sets up a Y3S1 reaction role message!",
    async execute(message, args, command, ChannelIds, Discord, client){
        const channel = '854299696415899648';
        const SEMESTER1Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 1 ╠═════");
        const MATH30000Role = message.guild.roles.cache.find(role=>role.name === "MATH30000");
        const MATH30011Role = message.guild.roles.cache.find(role=>role.name === "MATH30011");
        const MATH32001Role = message.guild.roles.cache.find(role=>role.name === "MATH32001");
        const MATH32051Role = message.guild.roles.cache.find(role=>role.name === "MATH32051");
        const MATH32091Role = message.guild.roles.cache.find(role=>role.name === "MATH32091");
        const MATH33011Role = message.guild.roles.cache.find(role=>role.name === "MATH33011");
        const MATH34011Role = message.guild.roles.cache.find(role=>role.name === "MATH34011");
        const MATH35001Role = message.guild.roles.cache.find(role=>role.name === "MATH35001");
        const MATH35021Role = message.guild.roles.cache.find(role=>role.name === "MATH35021");
        const MATH36001Role = message.guild.roles.cache.find(role=>role.name === "MATH36001");
        const MATH36031Role = message.guild.roles.cache.find(role=>role.name === "MATH36031");
        const MATH38001Role = message.guild.roles.cache.find(role=>role.name === "MATH38001");
        const MATH38141Role = message.guild.roles.cache.find(role=>role.name === "MATH38141");
        const MATH38161Role = message.guild.roles.cache.find(role=>role.name === "MATH38161");
        const MATH39511Role = message.guild.roles.cache.find(role=>role.name === "MATH39511");

        const MATH30000Emoji = '🇦';
        const MATH30011Emoji = '🇧';
        const MATH32001Emoji = '🇨';
        const MATH32051Emoji = '🇩';
        const MATH32091Emoji = '🇪';
        const MATH33011Emoji = '🇫';
        const MATH34011Emoji = '🇬';
        const MATH35001Emoji = '🇭';
        const MATH35021Emoji = '🇮';
        const MATH36001Emoji = '🇯';
        const MATH36031Emoji = '🇰';
        const MATH38001Emoji = '🇱';
        const MATH38141Emoji = '🇲';
        const MATH38161Emoji = '🇳';
        const MATH39511Emoji = '🇴';

        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Choose your semester 1 modules!')
            .setDescription('Reacting will allow you to access the module text channel. \n\n'
            + `${MATH30000Emoji} MATH30000 - Double Project \n\n`
            + `${MATH30011Emoji} MATH30011 - Project (Semester 1) \n\n`
            + `${MATH32001Emoji} MATH32001 - Group Theory \n\n`
            + `${MATH32051Emoji} MATH32051 - Hyperbolic Geometry \n\n`
            + `${MATH32091Emoji} MATH32091 - Combinatorics & Graph Theory \n\n`
            + `${MATH33011Emoji} MATH33011 - Mathematical Logic \n\n`
            + `${MATH34011Emoji} MATH34011 - Complex Analysis & Applications \n\n`
            + `${MATH35001Emoji} MATH35001 - Viscous Fluid Flow \n\n`
            + `${MATH35021Emoji} MATH35021 - Elasticity \n\n`
            + `${MATH36001Emoji} MATH36001 - Matrix Analysis \n\n`
            + `${MATH36031Emoji} MATH36031 - Problem Solving by Computer \n\n`
            + `${MATH38001Emoji} MATH38001 - Statistical Inference \n\n`
            + `${MATH38141Emoji} MATH38141 - Regression Analysis \n\n`
            + `${MATH38161Emoji} MATH38161 - Multivariate Statistics & Machiene Learning \n\n`
            + `${MATH39511Emoji} MATH39511 - Actuarial Models`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(MATH30000Emoji);
        messageEmbed.react(MATH30011Emoji);
        messageEmbed.react(MATH32001Emoji);
        messageEmbed.react(MATH32051Emoji);
        messageEmbed.react(MATH32091Emoji);
        messageEmbed.react(MATH33011Emoji);
        messageEmbed.react(MATH34011Emoji);
        messageEmbed.react(MATH35001Emoji);
        messageEmbed.react(MATH35021Emoji);
        messageEmbed.react(MATH36001Emoji);
        messageEmbed.react(MATH36031Emoji);
        messageEmbed.react(MATH38001Emoji);
        messageEmbed.react(MATH38141Emoji);
        messageEmbed.react(MATH38161Emoji);
        messageEmbed.react(MATH39511Emoji);
        message.delete()

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === MATH30000Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH30000Role);
                }
                if(reaction.emoji.name === MATH30011Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH30011Role);
                }
                if(reaction.emoji.name === MATH32001Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH32001Role);
                }
                if(reaction.emoji.name === MATH32051Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH32051Role);
                }
                if(reaction.emoji.name === MATH32091Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH32091Role);
                }
                if(reaction.emoji.name === MATH33011Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH33011Role);
                }
                if(reaction.emoji.name === MATH34011Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH34011Role);
                }
                if(reaction.emoji.name === MATH35001Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH35001Role);
                }
                if(reaction.emoji.name === MATH35021Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH35021Role);
                }
                if(reaction.emoji.name === MATH36001Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH36001Role);
                }
                if(reaction.emoji.name === MATH36031Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH36031Role);
                }
                if(reaction.emoji.name === MATH38001Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH38001Role);
                }
                if(reaction.emoji.name === MATH38141Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH38141Role);
                }
                if(reaction.emoji.name === MATH38161Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH38161Role);
                }
                if(reaction.emoji.name === MATH39511Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH39511Role);
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
                if(reaction.emoji.name === MATH30000Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH30000Role);
                }
                if(reaction.emoji.name === MATH30011Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH30011Role);
                }
                if(reaction.emoji.name === MATH32001Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH32001Role);
                }
                if(reaction.emoji.name === MATH32051Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH32051Role);
                }
                if(reaction.emoji.name === MATH32091Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH32091Role);
                }
                if(reaction.emoji.name === MATH33011Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH33011Role);
                }
                if(reaction.emoji.name === MATH34011Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH34011Role);
                }
                if(reaction.emoji.name === MATH35001Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH35001Role);
                }
                if(reaction.emoji.name === MATH35021Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH35021Role);
                }
                if(reaction.emoji.name === MATH36001Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH36001Role);
                }
                if(reaction.emoji.name === MATH36031Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH36031Role);
                }
                if(reaction.emoji.name === MATH38001Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH38001Role);
                }
                if(reaction.emoji.name === MATH38141Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH38141Role);
                }
                if(reaction.emoji.name === MATH38161Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH38161Role);
                }
                if(reaction.emoji.name === MATH39511Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH39511Role);
                }
            } else{
                return;
            }
           
        });
    }
}