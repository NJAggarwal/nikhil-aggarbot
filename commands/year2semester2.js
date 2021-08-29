module.exports ={
    name: 'year2semester2',
    description: "Sets up a Y2S2 reaction role message!",
    async execute(message, args, command, ChannelIds, Discord, client){
        const channel = '854084934364430426';
        const SEMESTER2Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 2 ╠═════");
        const MATH20062Role = message.guild.roles.cache.find(role=>role.name === "MATH20062");
        const MATH20122Role = message.guild.roles.cache.find(role=>role.name === "MATH20122");
        const MATH20132Role = message.guild.roles.cache.find(role=>role.name === "MATH20132");
        const MATH29142Role = message.guild.roles.cache.find(role=>role.name === "MATH29142");
        const MATH20212Role = message.guild.roles.cache.find(role=>role.name === "MATH20212");
        const MATH20222Role = message.guild.roles.cache.find(role=>role.name === "MATH20222");
        const MATH20502Role = message.guild.roles.cache.find(role=>role.name === "MATH20502");
        const MATH20512Role = message.guild.roles.cache.find(role=>role.name === "MATH20512");
        const MATH20522Role = message.guild.roles.cache.find(role=>role.name === "MATH20522");
        const MATH20602Role = message.guild.roles.cache.find(role=>role.name === "MATH20602");
        const MATH20712Role = message.guild.roles.cache.find(role=>role.name === "MATH20712");
        const MATH20722Role = message.guild.roles.cache.find(role=>role.name === "MATH20722");
        const MATH20802Role = message.guild.roles.cache.find(role=>role.name === "MATH20802");
        const MATH20902Role = message.guild.roles.cache.find(role=>role.name === "MATH20902");
        const MATH20912Role = message.guild.roles.cache.find(role=>role.name === "MATH20912");
        const MATH20962Role = message.guild.roles.cache.find(role=>role.name === "MATH20962");
        const MATH20972Role = message.guild.roles.cache.find(role=>role.name === "MATH20972");

        const MATH20062Emoji = '🇦';
        const MATH20122Emoji = '🇧';
        const MATH20132Emoji = '🇨';
        const MATH29142Emoji = '🇩';
        const MATH20212Emoji = '🇪';
        const MATH20222Emoji = '🇫';
        const MATH20502Emoji = '🇬';
        const MATH20512Emoji = '🇭';
        const MATH20522Emoji = '🇮';
        const MATH20602Emoji = '🇯';
        const MATH20712Emoji = '🇰';
        const MATH20722Emoji = '🇱';
        const MATH20802Emoji = '🇲';
        const MATH20902Emoji = '🇳';
        const MATH20912Emoji = '🇴';
        const MATH20962Emoji = '🇵';
        const MATH20972Emoji = '🇶';


        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Choose your semester 2 modules!')
            .setDescription('Reacting will allow you to access the module text channel. \n\n'
            + `${MATH20062Emoji} MATH20062 - Mathematical Communication & Group Projects \n\n`
            + `${MATH20122Emoji} MATH20122 - Metric Spaces \n\n`
            + `${MATH20132Emoji} MATH20132 - Calculus of Several Variables \n\n`
            + `${MATH29142Emoji} MATH29142 - 2P2: Complex Analysis \n\n`
            + `${MATH20212Emoji} MATH20212 - Algebraic Structures 2 \n\n`
            + `${MATH20222Emoji} MATH20222 - Introduction to Geometry \n\n`
            + `${MATH20502Emoji} MATH20502 - Fluid Mechanics \n\n`
            + `${MATH20512Emoji} MATH20512 - Classical Mechanics \n\n`
            + `${MATH20522Emoji} MATH20522 - Principles of Mathematical Modelling \n\n`
            + `${MATH20602Emoji} MATH20602 - Numerical Analysis 1 \n\n`
            + `${MATH20712Emoji} MATH20712 - Random Models \n\n`
            + `${MATH20722Emoji} MATH20722 - Foundations of Modern Probability \n\n`
            + `${MATH20802Emoji} MATH20802 - Statistical Methods \n\n`
            + `${MATH20902Emoji} MATH20902 - Discrete Mathematics \n\n`
            + `${MATH20912Emoji} MATH20912 - Introduction to Financial Mathematics \n\n`
            + `${MATH20962Emoji} MATH20962 - Contingencies 1 - Actuarial Science \n\n`
            + `${MATH20972Emoji} MATH20972 - Actuarial Insurance`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(MATH20062Emoji);
        messageEmbed.react(MATH20122Emoji);
        messageEmbed.react(MATH20132Emoji);
        messageEmbed.react(MATH29142Emoji);
        messageEmbed.react(MATH20212Emoji);
        messageEmbed.react(MATH20222Emoji);
        messageEmbed.react(MATH20502Emoji);
        messageEmbed.react(MATH20512Emoji);
        messageEmbed.react(MATH20522Emoji);
        messageEmbed.react(MATH20602Emoji);
        messageEmbed.react(MATH20712Emoji);
        messageEmbed.react(MATH20722Emoji);
        messageEmbed.react(MATH20802Emoji);
        messageEmbed.react(MATH20902Emoji);
        messageEmbed.react(MATH20912Emoji);
        messageEmbed.react(MATH20962Emoji);
        messageEmbed.react(MATH20972Emoji);
        message.delete()

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === MATH20062Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20062Role);
                }
                if(reaction.emoji.name === MATH20122Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20122Role);
                }
                if(reaction.emoji.name === MATH20132Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20132Role);
                }
                if(reaction.emoji.name === MATH29142Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH29142Role);
                }
                if(reaction.emoji.name === MATH20212Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20212Role);
                }
                if(reaction.emoji.name === MATH20222Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20222Role);
                }
                if(reaction.emoji.name === MATH20502Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20502Role);
                }
                if(reaction.emoji.name === MATH20512Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20512Role);
                }
                if(reaction.emoji.name === MATH20522Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20522Role);
                }
                if(reaction.emoji.name === MATH20602Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20602Role);
                }
                if(reaction.emoji.name === MATH20712Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20712Role);
                }
                if(reaction.emoji.name === MATH20722Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20722Role);
                }
                if(reaction.emoji.name === MATH20802Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20802Role);
                }
                if(reaction.emoji.name === MATH20902Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20902Role);
                }
                if(reaction.emoji.name === MATH20912Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20912Role);
                }
                if(reaction.emoji.name === MATH20962Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20962Role);
                }
                if(reaction.emoji.name === MATH20972Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH20972Role);
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
                if(reaction.emoji.name === MATH20062Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20062Role);
                }
                if(reaction.emoji.name === MATH20122Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20122Role);
                }
                if(reaction.emoji.name === MATH20132Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20132Role);
                }
                if(reaction.emoji.name === MATH29142Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH29142Role);
                }
                if(reaction.emoji.name === MATH20212Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20212Role);
                }
                if(reaction.emoji.name === MATH20222Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20222Role);
                }
                if(reaction.emoji.name === MATH20502Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20502Role);
                }
                if(reaction.emoji.name === MATH20512Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20512Role);
                }
                if(reaction.emoji.name === MATH20522Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20522Role);
                }
                if(reaction.emoji.name === MATH20602Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20602Role);
                }
                if(reaction.emoji.name === MATH20712Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20712Role);
                }
                if(reaction.emoji.name === MATH20722Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20722Role);
                }
                if(reaction.emoji.name === MATH20802Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20802Role);
                }
                if(reaction.emoji.name === MATH20902Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20902Role);
                }
                if(reaction.emoji.name === MATH20912Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20912Role);
                }
                if(reaction.emoji.name === MATH20962Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20962Role);
                }
                if(reaction.emoji.name === MATH20972Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH20972Role);
                }
            } else{
                return;
            }
        });
    }
}