module.exports ={
    name:'adddepartment',
    description:'Creates a reaction role embed for departments.',

    async execute(message, args, command, ChannelIds, Discord, client){
        const channel = '875754076313378866';

        const DoMathematics_Role = message.guild.roles.cache.find(role=>role.name === "DoMathematics");
        const DoPaA_Role = message.guild.roles.cache.find(role=>role.name === "DoP&A");
        const DoC_Role = message.guild.roles.cache.find(role=>role.name === "DoC");
        const DoEES_Role = message.guild.roles.cache.find(role=>role.name === "DoEES");
        const DoMaterials_Role = message.guild.roles.cache.find(role=>role.name === "DoMaterials");
        const DoCS_Role = message.guild.roles.cache.find(role=>role.name === "DoCS");
        const DoCEaAS_Role = message.guild.roles.cache.find(role=>role.name === "DoCE&AS");
        const DoMACE_Role = message.guild.roles.cache.find(role=>role.name === "DoMACE");
        const DoEEE_Role = message.guild.roles.cache.find(role=>role.name === "DoEEE")

        const DoMathematics_Emoji = '🤓';
        const DoPaA_Emoji = '🚀';
        const DoC_Emoji = '🧪';
        const DoEES_Emoji = '🌏';
        const DoMaterials_Emoji = '💍';
        const DoCS_Emoji = '💻';
        const DoCEaAS_Emoji = '🏭';
        const DoMACE_Emoji = '✈️';
        const DoEEE_Emoji = '🏎️';

        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Faculty of Science & Engineering (FSE) - Add your department')
            .setDescription('Reacting will make it easier for you to meet others in the same department '
            + 'as well as meeting other people from other deparments (which I strongly encourage!) \n\n'
            + '**School of Natural Sciences (SoNS)** \n\n'
            + `${DoMathematics_Emoji} Department of Mathematics (DoMathematics) \n\n`
            + `${DoPaA_Emoji} Department of Physics & Astronomy (DoP&A) \n\n`
            + `${DoC_Emoji} Department of Chemistry (DoC) \n\n`
            + `${DoEES_Emoji} Department of Earth & Environmental Sciences (DoEES) \n\n`
            + `${DoMaterials_Emoji} Department of Materials (DoMaterials) \n\n`
            + '**The School of Engineering (SoE)** \n\n'
            + `${DoCS_Emoji} Department of Computer Science (DoCS) \n\n`
            + `${DoCEaAS_Emoji} Department of Chemical Engineering & Analytical Science (DoCE&AS) \n\n`
            + `${DoMACE_Emoji} Department of Mechanical, Aerospace and Civil Engineering (DoMACE) \n\n`
            + `${DoEEE_Emoji} Department of Electical & Eelectronic Engineering (DoEEE)`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(DoMathematics_Emoji);
        messageEmbed.react(DoPaA_Emoji);
        messageEmbed.react(DoC_Emoji);
        messageEmbed.react(DoEES_Emoji);
        messageEmbed.react(DoMaterials_Emoji);
        messageEmbed.react(DoCS_Emoji);
        messageEmbed.react(DoCEaAS_Emoji);
        messageEmbed.react(DoMACE_Emoji);
        messageEmbed.react(DoEEE_Emoji);
        message.delete()

         client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
        
            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name == DoMathematics_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DoMathematics_Role);
                }
                if (reaction.emoji.name == DoPaA_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DoPaA_Role);
                }
                if (reaction.emoji.name == DoC_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DoC_Role);
                }
                if (reaction.emoji.name == DoEES_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DoEES_Role);
                }
                if (reaction.emoji.name == DoMaterials_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DoMaterials_Role);
                }
                if (reaction.emoji.name == DoCS_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DoCS_Role);
                }
                if (reaction.emoji.name == DoCEaAS_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DoCEaAS_Role);
                }
                if (reaction.emoji.name == DoMACE_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DoMACE_Role);
                }
                if (reaction.emoji.name == DoEEE_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(DoEEE_Role);
                }

            }
         });

         client.on('messageReactionRemove', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
        
            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name == DoMathematics_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DoMathematics_Role);
                }
                if (reaction.emoji.name == DoPaA_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DoPaA_Role);
                }
                if (reaction.emoji.name == DoC_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DoC_Role);
                }
                if (reaction.emoji.name == DoEES_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DoEES_Role);
                }
                if (reaction.emoji.name == DoMaterials_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DoMaterials_Role);
                }
                if (reaction.emoji.name == DoCS_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DoCS_Role);
                }
                if (reaction.emoji.name == DoCEaAS_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DoCEaAS_Role);
                }
                if (reaction.emoji.name == DoMACE_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DoMACE_Role);
                }
                if (reaction.emoji.name == DoEEE_Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(DoEEE_Role);
                }
            }
          
         });
     }
}
    