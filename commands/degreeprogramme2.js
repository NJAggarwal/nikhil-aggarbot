module.exports ={
    name:'degreeprogramme2',
    description:'Creates a reaction role embed for degree programmes.',

    async execute(message, args, command, ChannelIds, Discord, client){
        const channel = '880360739259445308';

        const MathematicsRole = message.guild.roles.cache.find(role=>role.name === "Maths");
        const MathematicsAndStatisticsRole = message.guild.roles.cache.find(role=>role.name === "Maths & Statistics");
        const MathematicsAndPhysicsRole = message.guild.roles.cache.find(role=>role.name === "Maths & Physics");
        const MathematicsWithFinancialMathematicsRole = message.guild.roles.cache.find(role=>role.name === "MathsWithFinancialMaths");
        const MathematicsWithFinanceRole = message.guild.roles.cache.find(role=>role.name === "Maths with Finance");
        const ActuarialScienceAndMathematicsRole = message.guild.roles.cache.find(role=>role.name === "Actuarial Science & Maths");
        const ComputerScienceAndMathematicsRole = message.guild.roles.cache.find(role=>role.name === "Computer Science & Maths");
        const MathematicsAndPhilosphyRole = message.guild.roles.cache.find(role=>role.name === "Maths & Philosophy");
        const MathematicsWithModernLanguageRole = message.guild.roles.cache.find(role=>role.name === "Maths with Language");

        const MathematicsEmoji = '🤓';
        const MathematicsAndStatisticsEmoji = '📊';
        const MathematicsAndPhysicsEmoji = '🚀';
        const MathematicsWithFinancialMathematicsEmoji = '💷';
        const MathematicsWithFinanceEmoji = '💵';
        const ActuarialScienceAndMathematicsEmoji = '💰';
        const ComputerScienceAndMathematicsEmoji = '💻';
        const MathematicsAndPhilosphyEmoji = '🤔';
        const MathematicsWithModernLanguageEmoji = '🗺️';

        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Choose your degree programme')
            .setDescription('Reacting will make it easier for you to meet others on the same degree programme'
            + ' and will give you access to joint honours channels. \n\n'
            + `${MathematicsEmoji} BSc/MMath Mathematics \n\n`
            + `${MathematicsAndStatisticsEmoji} BSc/MMath Mathematics & Statistics \n\n`
            + `${MathematicsAndPhysicsEmoji} BSc/MMath&Phys Mathematics & Physics \n\n`
            + `${MathematicsWithFinancialMathematicsEmoji} BSc/MMath Mathematics with Financial Mathematics \n\n`
            + `${MathematicsWithFinanceEmoji} BSc Mathematics with Finance \n\n`
            + `${ActuarialScienceAndMathematicsEmoji} BSc Actuarial Science & Mathematics \n\n`
            + `${ComputerScienceAndMathematicsEmoji} BSc Computer Science & Mathematics (Including with Industrial Experience) \n\n`
            + `${MathematicsAndPhilosphyEmoji} BSc Mathematics & Philosophy \n\n`
            + `${MathematicsWithModernLanguageEmoji} BSc Mathematics with a Modern Language`);
     
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(MathematicsEmoji);
        messageEmbed.react(MathematicsAndStatisticsEmoji);
        messageEmbed.react(MathematicsAndPhysicsEmoji);
        messageEmbed.react(MathematicsWithFinancialMathematicsEmoji);
        messageEmbed.react(MathematicsWithFinanceEmoji);
        messageEmbed.react(ActuarialScienceAndMathematicsEmoji);
        messageEmbed.react(ComputerScienceAndMathematicsEmoji);
        messageEmbed.react(MathematicsAndPhilosphyEmoji);
        messageEmbed.react(MathematicsWithModernLanguageEmoji);
        message.delete()

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
        
            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name == MathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsRole);
                }
                if (reaction.emoji.name == MathematicsAndStatisticsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsAndStatisticsRole);
                }
                if (reaction.emoji.name == MathematicsAndStatisticsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsAndStatisticsRole);
                }
                if (reaction.emoji.name == MathematicsAndPhysicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsAndPhysicsRole);
                }
                if (reaction.emoji.name == MathematicsWithFinancialMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsWithFinancialMathematicsRole);
                }
                if (reaction.emoji.name == MathematicsWithFinanceEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsWithFinanceRole);
                }
                if (reaction.emoji.name == ActuarialScienceAndMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ActuarialScienceAndMathematicsRole);
                }
                if (reaction.emoji.name == ComputerScienceAndMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ComputerScienceAndMathematicsRole);
                }
                if (reaction.emoji.name == MathematicsAndPhilosphyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsAndPhilosphyRole);
                }
                if (reaction.emoji.name == MathematicsWithModernLanguageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MathematicsWithModernLanguageRole);
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
                }
                if (reaction.emoji.name == MathematicsAndStatisticsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsAndStatisticsRole);
                }
                if (reaction.emoji.name == MathematicsAndStatisticsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsAndStatisticsRole);
                }
                if (reaction.emoji.name == MathematicsAndPhysicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsAndPhysicsRole);
                }
                if (reaction.emoji.name == MathematicsWithFinancialMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsWithFinancialMathematicsRole);
                }
                if (reaction.emoji.name == MathematicsWithFinanceEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsWithFinanceRole);
                }
                if (reaction.emoji.name == ActuarialScienceAndMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ActuarialScienceAndMathematicsRole);
                }
                if (reaction.emoji.name == ComputerScienceAndMathematicsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ComputerScienceAndMathematicsRole);
                }
                if (reaction.emoji.name == MathematicsAndPhilosphyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsAndPhilosphyRole);
                }
                if (reaction.emoji.name == MathematicsWithModernLanguageEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MathematicsWithModernLanguageRole);
                }
            }
         });
     }
}
    