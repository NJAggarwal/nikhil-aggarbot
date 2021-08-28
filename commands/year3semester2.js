module.exports ={
    name: 'year3semester2',
    description: "Sets up a Y3S2 reaction role message!",
    async execute(message, args, command, ChannelIds, Discord, client){
        const channel = '854299865878364160';
        const SEMESTER2Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 2 ╠═════")
        const MATH30002Role = message.guild.roles.cache.find(role=>role.name === "MATH30002");
        const MATH30022Role = message.guild.roles.cache.find(role=>role.name === "MATH30022");
        const MATH31042Role = message.guild.roles.cache.find(role=>role.name === "MATH31042");
        const MATH31052Role = message.guild.roles.cache.find(role=>role.name === "MATH31052");
        const MATH32012Role = message.guild.roles.cache.find(role=>role.name === "MATH32012");
        const MATH32032Role = message.guild.roles.cache.find(role=>role.name === "MATH32032");
        const MATH32062Role = message.guild.roles.cache.find(role=>role.name === "MATH32062");
        const MATH32072Role = message.guild.roles.cache.find(role=>role.name === "MATH32072");
        const MATH34032Role = message.guild.roles.cache.find(role=>role.name === "MATH34032");
        const MATH35012Role = message.guild.roles.cache.find(role=>role.name === "MATH35012");
        const MATH35032Role = message.guild.roles.cache.find(role=>role.name === "MATH35032");
        const MATH35062Role = message.guild.roles.cache.find(role=>role.name === "MATH35062");
        const MATH35082Role = message.guild.roles.cache.find(role=>role.name === "MATH35082");
        const MATH36022Role = message.guild.roles.cache.find(role=>role.name === "MATH36022");
        const MATH36062Role = message.guild.roles.cache.find(role=>role.name === "MATH36062");
        const MATH37002Role = message.guild.roles.cache.find(role=>role.name === "MATH37002");
        const MATH37012Role = message.guild.roles.cache.find(role=>role.name === "MATH37012");
        const MATH38032Role = message.guild.roles.cache.find(role=>role.name === "MATH38032");
        const MATH38072Role = message.guild.roles.cache.find(role=>role.name === "MATH38072");
        const MATH38172Role = message.guild.roles.cache.find(role=>role.name === "MATH38172");
        const MATH39032Role = message.guild.roles.cache.find(role=>role.name === "MATH39032");
        const MATH39512Role = message.guild.roles.cache.find(role=>role.name === "MATH39512");
        const MATH39522Role = message.guild.roles.cache.find(role=>role.name === "MATH39522");
        const MATH39542Role = message.guild.roles.cache.find(role=>role.name === "MATH39542");

        const MATH30002Emoji = '🇦';
        const MATH30022Emoji = '🇧';
        const MATH31042Emoji = '🇨';
        const MATH31052Emoji = '🇩';
        const MATH32012Emoji = '🇪';
        const MATH32032Emoji = '🇫';
        const MATH32062Emoji = '🇬';
        const MATH32072Emoji = '🇭';
        const MATH34032Emoji = '🇮';
        const MATH35012Emoji = '🇯';
        const MATH35032Emoji = '🇰';
        const MATH35062Emoji = '🇱';
        const MATH35082Emoji = '🇲';
        const MATH36022Emoji = '🇳';
        const MATH36062Emoji = '🇴';
        const MATH37002Emoji = '🇵';
        const MATH37012Emoji = '🇶';
        const MATH38032Emoji = '🇷';
        const MATH38072Emoji = '🇸';
        const MATH38172Emoji = '🇹';
        const MATH39032Emoji = '🇺';
        const MATH39512Emoji = '🇻';
        const MATH39522Emoji = '🇼';
        const MATH39542Emoji = '🇽';


        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Choose your semester 2 modules!')
            .setDescription('Reacting will allow you to access the module text channel. \n\n'
            + `${MATH30002Emoji} MATH30002 - Mathematics Education \n\n`
            + `${MATH30022Emoji} MATH30022 - Project (Semester 2) \n\n`
            + `${MATH31042Emoji} MATH31042 - Fractal Geometry \n\n`
            + `${MATH31052Emoji} MATH31052 - Topology \n\n`
            + `${MATH32012Emoji} MATH32012 - Commutative Algebra \n\n`
            + `${MATH32032Emoji} MATH32032 - Coding Theory \n\n`
            + `${MATH32062Emoji} MATH32062 - Algebraic Geometry \n\n`
            + `${MATH32072Emoji} MATH32072 - Number Theory \n\n`
            + `${MATH34032Emoji} MATH34032 - Green's Functions, Integral Equations & Applications \n\n`
            + `${MATH35012Emoji} MATH35012 - Wave Motion \n\n`
            + `${MATH35032Emoji} MATH35032 - Mathematical Biology \n\n`
            + `${MATH35062Emoji} MATH35062 - Mathematics on a Finite Planet \n\n`
            + `${MATH35082Emoji} MATH35082 - Symmetry in Geometry & Nature \n\n`
            + `${MATH36022Emoji} MATH36022 - Numerical Analysis 2 \n\n`
            + `${MATH36062Emoji} MATH36062 - Convex Optimization \n\n`
            + `${MATH37002Emoji} MATH37002 - Martingales with Applications to Finance \n\n`
            + `${MATH37012Emoji} MATH37012 - Markov Processes \n\n`
            + `${MATH38032Emoji} MATH38032 - Time Series Analysis \n\n`
            + `${MATH38072Emoji} MATH38072 - Medical Statistics \n\n`
            + `${MATH38172Emoji} MATH38172 - Generalised Linear Models`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(MATH30002Emoji);
        messageEmbed.react(MATH30022Emoji);
        messageEmbed.react(MATH31042Emoji);
        messageEmbed.react(MATH31052Emoji);
        messageEmbed.react(MATH32012Emoji);
        messageEmbed.react(MATH32032Emoji);
        messageEmbed.react(MATH32062Emoji);
        messageEmbed.react(MATH32072Emoji);
        messageEmbed.react(MATH34032Emoji);
        messageEmbed.react(MATH35012Emoji);
        messageEmbed.react(MATH35032Emoji);
        messageEmbed.react(MATH35062Emoji);
        messageEmbed.react(MATH35082Emoji);
        messageEmbed.react(MATH36022Emoji);
        messageEmbed.react(MATH36062Emoji);
        messageEmbed.react(MATH37002Emoji);
        messageEmbed.react(MATH37012Emoji);
        messageEmbed.react(MATH38032Emoji);
        messageEmbed.react(MATH38072Emoji);
        messageEmbed.react(MATH38172Emoji);
        message.delete()

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === MATH30002Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH30002Role);
                }
                if(reaction.emoji.name === MATH30022Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH30022Role);
                }
                if(reaction.emoji.name === MATH31042Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH31042Role);
                }
                if(reaction.emoji.name === MATH31052Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH31052Role);
                }
                if(reaction.emoji.name === MATH32012Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH32012Role);
                }
                if(reaction.emoji.name === MATH32032Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH32032Role);
                }
                if(reaction.emoji.name === MATH32062Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH32062Role);
                }
                if(reaction.emoji.name === MATH32072Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH32072Role);
                }
                if(reaction.emoji.name === MATH34032Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH34032Role);
                }
                if(reaction.emoji.name === MATH35012Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH35012Role);
                }
                if(reaction.emoji.name === MATH35032Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH35032Role);
                }
                if(reaction.emoji.name === MATH35062Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH35062Role);
                }
                if(reaction.emoji.name === MATH35082Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH35082Role);
                }
                if(reaction.emoji.name === MATH36022Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH36022Role);
                }
                if(reaction.emoji.name === MATH36062Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH36062Role);
                }
                if(reaction.emoji.name === MATH37002Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH37002Role);
                }
                if(reaction.emoji.name === MATH37012Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH37012Role);
                }
                if(reaction.emoji.name === MATH38032Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH38032Role);
                }
                if(reaction.emoji.name === MATH38072Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH38072Role);
                }
                if(reaction.emoji.name === MATH38172Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH38172Role);
                }
                else{
                    return;
                }
            }
        });

        client.on('messageReactionRemove', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === MATH30002Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH30002Role);
                }
                if(reaction.emoji.name === MATH30022Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH30022Role);
                }
                if(reaction.emoji.name === MATH31042Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH31042Role);
                }
                if(reaction.emoji.name === MATH31052Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH31052Role);
                }
                if(reaction.emoji.name === MATH32012Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH32012Role);
                }
                if(reaction.emoji.name === MATH32032Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH32032Role);
                }
                if(reaction.emoji.name === MATH32062Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH32062Role);
                }
                if(reaction.emoji.name === MATH32072Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH32072Role);
                }
                if(reaction.emoji.name === MATH34032Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH34032Role);
                }
                if(reaction.emoji.name === MATH35012Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH35012Role);
                }
                if(reaction.emoji.name === MATH35032Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH35032Role);
                }
                if(reaction.emoji.name === MATH35062Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH35062Role);
                }
                if(reaction.emoji.name === MATH35082Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH35082Role);
                }
                if(reaction.emoji.name === MATH36022Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH36022Role);
                }
                if(reaction.emoji.name === MATH36062Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH36062Role);
                }
                if(reaction.emoji.name === MATH37002Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH37002Role);
                }
                if(reaction.emoji.name === MATH37012Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH37012Role);
                }
                if(reaction.emoji.name === MATH38032Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH38032Role);
                }
                if(reaction.emoji.name === MATH38072Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH38072Role);
                }
                if(reaction.emoji.name === MATH38172Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH38172Role);
                }
            } else{
                return;
            }
        });
        let embed2 = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('')
            .setDescription('\n\n'
            + `${MATH39032Emoji} MATH39032 - Mathematical Modelling in Finance \n\n`
            + `${MATH39512Emoji} MATH39512 - Survival Analysis for Actuarial Science \n\n`
            + `${MATH39522Emoji} MATH39522 - Contingencies 2 \n\n`
            + `${MATH39542Emoji} MATH39542 - Risk Theory`);

        let messageEmbed2 = await message.channel.send(embed2);
         messageEmbed2.react(MATH39032Emoji);
         messageEmbed2.react(MATH39512Emoji);
         messageEmbed2.react(MATH39522Emoji);
         messageEmbed2.react(MATH39542Emoji);

         
        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            
            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === MATH39032Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH39032Role);
                }
                if(reaction.emoji.name === MATH39512Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH39512Role);
                }
                if(reaction.emoji.name === MATH39522Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH39522Role);
                }
                if(reaction.emoji.name === MATH39542Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(SEMESTER2Role);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MATH39542Role);
                }
                else{
                  return;
                }
            }
        });

        client.on('messageReactionRemove', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
                
            if (reaction.message.channel.id == channel){
                if(reaction.emoji.name === MATH39032Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH39032Role);
                }
                if(reaction.emoji.name === MATH39512Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH39512Role);
                }
                if(reaction.emoji.name === MATH39522Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH39522Role);
                }
                if(reaction.emoji.name === MATH39542Emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MATH39542Role);
                }
                else{
                   return;
                }
            }
            });
    }
}
            

