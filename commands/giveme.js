module.exports ={
    name: 'giveme',
    aliases:['getrid'],
    description: 'Private server',

    async execute(message, args, command, ChannelIds, Discord, client){

        let messageArgs = args.join(' ');

        let roleChoices = messageArgs.split(' ');
        const member = message.guild.members.cache.get(message.author.id);

        if (message.guild.id === "894665765591068672"){

            const RamanujanRoles = '957418273065021523';

            const BurritoRole = message.guild.roles.cache.find(role=>role.name === "Burrito");
            const TimmiesRole = message.guild.roles.cache.find(role=>role.name === "Timmies");
            const NeroRole = message.guild.roles.cache.find(role=>role.name === "Nero");
            const MUDSSRole = message.guild.roles.cache.find(role=>role.name === "MUDSS");
            const BadmintonRole = message.guild.roles.cache.find(role=>role.name === "Badminton");
            const CSGORole = message.guild.roles.cache.find(role=>role.name === "csgo");
            const MinecraftRole = message.guild.roles.cache.find(role=>role.name === "Minecraft");

            if (message.channel.id === RamanujanRoles && command === 'giveme'){
                let i = 0
                do{
                    if(roleChoices[i] === 'Burrito'){
                        await member.roles.add(BurritoRole)
                    }
                    if(roleChoices[i] === 'Timmies'){
                        await member.roles.add(TimmiesRole)
                    }
                    if(roleChoices[i] === 'Nero'){
                        await member.roles.add(NeroRole)
                    }
                    if(roleChoices[i] === 'MUDSS'){
                        await member.roles.add(MUDSSRole)
                    }
                    if(roleChoices[i] === 'Badminton'){
                        await member.roles.add(BadmintonRole)
                    }
                    if(roleChoices[i] === 'csgo'){
                        await member.roles.add(CSGORole)
                    }
                    if(roleChoices[i] === 'Minecraft'){
                        await member.roles.add(MinecraftRole)
                    }
                    i = i + 1
                } while (i < roleChoices.length + 1)
            } else if (message.channel.id === RamanujanRoles && command === 'getrid'){
                let i = 0
                do{
                    if(roleChoices[i] === 'Burrito'){
                        await member.roles.remove(BurritoRole)
                    }
                    if(roleChoices[i] === 'Timmies'){
                        await member.roles.remove(TimmiesRole)
                    }
                    if(roleChoices[i] === 'Nero'){
                        await member.roles.remove(NeroRole)
                    }
                    if(roleChoices[i] === 'MUDSS'){
                        await member.roles.remove(MUDSSRole)
                    }
                    if(roleChoices[i] === 'Badminton'){
                        await member.roles.remove(BadmintonRole)
                    }
                    if(roleChoices[i] === 'csgo'){
                        await member.roles.remove(CSGORole)
                    }
                    if(roleChoices[i] === 'Minecraft'){
                        await member.roles.remove(MinecraftRole)
                    }
                    i = i + 1
                } while (i < roleChoices.length + 1)
            }
        }
    }
}