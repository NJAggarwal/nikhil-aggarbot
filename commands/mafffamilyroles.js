module.exports ={
    name: 'mafffamilyroles',
    description: 'produces embed of private roles',

    async execute(message, args, command, ChannelIds, Discord, client){

        if (message.channel.id === '957418273065021523'){

            const BurritoEmoji = '🌯';
            const TimmiesEmoji = '♨️';
            const NeroEmoji = '☕';
            const MUDSSEmoji = '💻';
            const BadmintonEmoji = '🏸';
            const CSGOEmoji = '🔫';
            const MinecraftEmoji = '🪓';

            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Add roles like you would on Maths servers!')
                .setDescription(
                    `${BurritoEmoji} Burrito \n\n
                     ${TimmiesEmoji} Timmies \n\n
                     ${NeroEmoji} Nero \n\n
                     ${MUDSSEmoji} MUDSS \n\n
                     ${BadmintonEmoji} Badminton \n\n
                     ${CSGOEmoji} csgo \n\n
                     ${MinecraftEmoji} Minecraft`)

            let messageEmbed = await message.channel.send(embed);
            message.delete();
        }
    }

}