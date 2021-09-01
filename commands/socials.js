module.exports ={
    name: 'socials',
    description: 'embed asking students to give themselves a socials role.',

    async execute(message, args, command, ChannelIds, Discord, client){

        //Listing Ids in decending order: 3, 2, 1 & FY
        const addSocialsRoleChannelIds = ['882631817021255730', '882632171217633300',
        '882632897029341214', '882633171072593961'];

        if (addSocialsRoleChannelIds.includes(message.channel.id)){

            const SocialsRole = message.guild.roles.cache.find(role=>role.name === "Socials");

            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Stay up to date with the latest Social Events!')
                .setDescription('Message `$add socials` into the channel if you would like a'
                    + ` <@&${SocialsRole.id}> role and being kept up to date with`
                    + ` the latest server socials. \n\n`
                    + `With enough members, I will definitely host regular fun games nights such as Jackbox games, Among Us `
                    + `and Chess. \n\n`
                    + 'If you would like to remove this role in the future then please message `$rem socials` into the channel');

            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }
    }
}