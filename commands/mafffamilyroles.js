module.exports ={
    name: 'mafffamilyroles',
    description: 'produces embed of private roles',

    async execute(message, args, command, ChannelIds, Discord, client){

        if (message.channel.id === '957418273065021523'){

            const CinemaEmoji = '🎥';
            const BurritoEmoji = '🌯';
            const TimmiesEmoji = '♨️';
            const NeroEmoji = '☕';
            const MUDSSEmoji = '💻';
            const BadmintonEmoji = '🏸';
            const CSGOEmoji = '🔫';
            const MinecraftEmoji = '🪓';

            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('`$giveme` to add a role or `$getrid` to remove a role')
                .setDescription( 'e.g. `$giveme Cinema Burrito` adds both the Cinema Club and Burrito Bunch role \n\n'
                    + `${CinemaEmoji} Cinema \n\n`
                    + `${BurritoEmoji} Burrito \n\n`
                    + `${TimmiesEmoji} Timmies \n\n`
                    + `${NeroEmoji} Nero \n\n`
                    + `${MUDSSEmoji} MUDSS \n\n`
                    + `${BadmintonEmoji} Badminton \n\n`
                    + `${CSGOEmoji} csgo \n\n`
                    + `${MinecraftEmoji} Minecraft`)

            await message.channel.send(embed);
            message.delete();
        }
    }

}