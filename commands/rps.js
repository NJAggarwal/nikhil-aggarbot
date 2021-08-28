module.exports ={
    name: 'rps',
    description: 'Nikhil Aggarbot plays a game of "Rock paper scissors" with the user.',

    async execute(message, args, command, ChannelIds, Discord, client){
        
        const RockOutcomes = ['**You chose Rock, I chose Paper, I WIN!**', 
        '**You chose Rock, I chose Rock, NO ONE WINS!**',
        '**You chose Rock, I chose Scissors, YOU WIN!**']

        const PaperOutcomes = ['**You chose Paper, I chose Scissors, I WIN!**',
        '**You chose Paper, I chose Paper, NO ONE WINS!**',
        '**You chose Paper, I chose Rock, YOU WIN!**']

        const ScissorsOutcomes = ['**You chose Scissors, I chose Rock, I WIN!**',
        '**You chose Scissors, I chose Scissors, NO ONE WINS!**',
        '**You chose Scissors, I chose Paper, YOU WIN!**']

        let messageArgs = args.join(' ');

        if (messageArgs == 'rock'){
            outcome = RockOutcomes[Math.floor(Math.random()*RockOutcomes.length)];
        } else if (messageArgs == 'paper'){
            outcome = PaperOutcomes[Math.floor(Math.random()*PaperOutcomes.length)];
        } else if (messageArgs == 'scissors'){
            outcome = ScissorsOutcomes[Math.floor(Math.random()*ScissorsOutcomes.length)];
        }

        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('**Rock Paper Scissors Battle**')
            .setDescription(`<@${message.author.id}>` + outcome)

        if (ChannelIds.includes(message.channel.id)){
            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }

    }
}