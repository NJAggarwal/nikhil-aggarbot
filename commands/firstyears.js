module.exports ={
    name:'firstyears',
    description:'Creates a reaction role embed for degree programmes.',

    async execute(message, args, command, ChannelIds, Discord, client){
        const channel = '855396707387179018';

        const MathematicsRole = message.guild.roles.cache.find(role=>role.name === "Maths");
        const MathematicsAndStatisticsRole = message.guild.roles.cache.find(role=>role.name === "Maths & Statistics");
        const MathematicsAndPhysicsRole = message.guild.roles.cache.find(role=>role.name === "Maths & Physics");
        const MathematicsWithFinancialMathematicsRole = message.guild.roles.cache.find(role=>role.name === "MathsWithFinancialMaths");
        const MathematicsWithFinanceRole = message.guild.roles.cache.find(role=>role.name === "Maths with Finance");
        const ActuarialScienceAndMathematicsRole = message.guild.roles.cache.find(role=>role.name === "Actuarial Science & Maths");
        const ComputerScienceAndMathematicsRole = message.guild.roles.cache.find(role=>role.name === "Computer Science & Maths");
        const MathematicsAndPhilosphyRole = message.guild.roles.cache.find(role=>role.name === "Maths & Philosophy");

        const SEMESTER1Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 1 ╠═════");
        const MATH10001Role = message.guild.roles.cache.find(role=>role.name === "MATH10001");
        const MATH10101Role = message.guild.roles.cache.find(role=>role.name === "MATH10101");
        const MATH10111Role = message.guild.roles.cache.find(role=>role.name === "MATH10111");
        const MATH10121Role = message.guild.roles.cache.find(role=>role.name === "MATH10121");
        const MATH10131Role = message.guild.roles.cache.find(role=>role.name === "MATH10131");
        const MATH10141Role = message.guild.roles.cache.find(role=>role.name === "MATH10141");
        const MATH10951Role = message.guild.roles.cache.find(role=>role.name === "MATH10951");

        const SEMESTER2Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 2 ╠═════");
        const MATH10202Role = message.guild.roles.cache.find(role=>role.name === "MATH10202");
        const MATH10212Role = message.guild.roles.cache.find(role=>role.name === "MATH10212");
        const MATH10222Role = message.guild.roles.cache.find(role=>role.name === "MATH10222");
        const MATH11222Role = message.guild.roles.cache.find(role=>role.name === "MATH11222");
        const MATH10232Role = message.guild.roles.cache.find(role=>role.name === "MATH10232");
        const MATH10242Role = message.guild.roles.cache.find(role=>role.name === "MATH10242");
        const MATH10282Role = message.guild.roles.cache.find(role=>role.name === "MATH10282");

        const MathematicsEmoji = '🤓';
        const MathematicsAndStatisticsEmoji = '📊';
        const MathematicsAndPhysicsEmoji = '🚀';
        const MathematicsWithFinancialMathematicsEmoji = '💷';
        const MathematicsWithFinanceEmoji = '💵';
        const ActuarialScienceAndMathematicsEmoji = '💰';
        const ComputerScienceAndMathematicsEmoji = '💻';
        const MathematicsAndPhilosphyEmoji = '🤔';

        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Choose your degree programme')
            .setDescription('Reacting will make it easier for you to meet others on the same degree programme,'
            + ' it will grant you access to your programme channel, and your module channels. \n\n'
            + `${MathematicsEmoji} BSc/MMath Mathematics \n\n`
            + `${MathematicsAndStatisticsEmoji} BSc/MMath Mathematics & Statistics \n\n`
            + `${MathematicsAndPhysicsEmoji} BSc/MMath&Phys Mathematics & Physics \n\n`
            + `${MathematicsWithFinancialMathematicsEmoji} BSc/MMath Mathematics with Financial Mathematics \n\n`
            + `${MathematicsWithFinanceEmoji} BSc Mathematics with Finance \n\n`
            + `${ActuarialScienceAndMathematicsEmoji} BSc Actuarial Science & Mathematics \n\n`
            + `${ComputerScienceAndMathematicsEmoji} BSc Computer Science & Mathematics (Including with Industrial Experience) \n\n`
            + `${MathematicsAndPhilosphyEmoji} BSc Mathematics & Philosophy`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(MathematicsEmoji);
        messageEmbed.react(MathematicsAndStatisticsEmoji);
        messageEmbed.react(MathematicsAndPhysicsEmoji);
        messageEmbed.react(MathematicsWithFinancialMathematicsEmoji);
        messageEmbed.react(MathematicsWithFinanceEmoji);
        messageEmbed.react(ActuarialScienceAndMathematicsEmoji);
        messageEmbed.react(ComputerScienceAndMathematicsEmoji);
        messageEmbed.react(MathematicsAndPhilosphyEmoji);
        message.delete()
         

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
        
            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name == MathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10001Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10101Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10121Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10141Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10202Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10222Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10242Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10282Role);
                }
                if (reaction.emoji.name == MathematicsAndStatisticsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsAndStatisticsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10001Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10101Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10121Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10141Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10202Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10222Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10242Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10282Role);
                }
                if (reaction.emoji.name == MathematicsAndPhysicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsAndPhysicsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10111Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10121Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10212Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH11222Role);
                }
                if (reaction.emoji.name == MathematicsWithFinancialMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsWithFinancialMathematicsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10001Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10101Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10121Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10141Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10202Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10222Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10242Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10282Role);
                }
                if (reaction.emoji.name == MathematicsWithFinanceEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsWithFinanceRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10001Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10111Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10131Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10141Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10212Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10232Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10242Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10282Role);
                }
                if (reaction.emoji.name == ActuarialScienceAndMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ActuarialScienceAndMathematicsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10111Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10131Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10141Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10212Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10232Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10242Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10282Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10951Role);
                }
                if (reaction.emoji.name == ComputerScienceAndMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ComputerScienceAndMathematicsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10111Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10131Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10212Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10232Role);
                }
                if (reaction.emoji.name == MathematicsAndPhilosphyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsAndPhilosphyRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10111Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10131Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10212Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH10232Role);
                }

            }
         });

        client.on('messageReactionRemove', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
        
            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name == MathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10001Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10101Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10121Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10141Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10202Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10222Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10242Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10282Role);
                }
                if (reaction.emoji.name == MathematicsAndStatisticsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsAndStatisticsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10001Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10101Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10121Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10141Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10202Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10222Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10242Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10282Role);
                }
                if (reaction.emoji.name == MathematicsAndPhysicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsAndPhysicsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10111Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10121Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10212Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH11222Role);
                }
                if (reaction.emoji.name == MathematicsWithFinancialMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsWithFinancialMathematicsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10001Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10101Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10121Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10141Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10202Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10222Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10242Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10282Role);
                }
                if (reaction.emoji.name == MathematicsWithFinanceEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsWithFinanceRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10001Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10111Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10131Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10141Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10212Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10232Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10242Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10282Role);
                }
                if (reaction.emoji.name == ActuarialScienceAndMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ActuarialScienceAndMathematicsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10111Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10131Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10141Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10212Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10232Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10242Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10282Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10951Role);
                }
                if (reaction.emoji.name == ComputerScienceAndMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ComputerScienceAndMathematicsRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10111Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10131Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10212Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10232Role);
                }
                if (reaction.emoji.name == MathematicsAndPhilosphyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsAndPhilosphyRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER1Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10111Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10131Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10212Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH10232Role);
                }
            }
         });
     }
}
    