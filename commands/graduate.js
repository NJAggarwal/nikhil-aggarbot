module.exports ={
    name: 'graduate',
    description: 'creates a graduate reaction role embed',

    async execute(message, args, command, ChannelIds, Discord, client){

        const channel = '769208174494220308';

        const studentRole = message.guild.roles.cache.find(role=>role.name === 'Student');
        const graduateRole = message.guild.roles.cache.find(role=>role.name === "Graduate");

        const graduateEmoji = '🎓';

        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Congratulations - Get your Graduate Role!')
            .setDescription(`React with 🎓 to be assigned the <@&${graduateRole.id}> role. This replaces the`
            + ` <@&${studentRole.id}> role so that graduates can remain in the server without being pinged for`
            + ` affairs that are only relevant for current students.`)

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(graduateEmoji);
        message.delete()

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name == graduateEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(studentRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(graduateRole);
                }
            }
        });

        client.on('messageReactionRemove', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name == graduateEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(graduateRole);
                    await reaction.message.guild.members.cache.get(user.id).roles.add(studentRole);
                }
            }
        });
    }
}