module.exports ={
    name:'help',
    description:'Posts a help message for users via an embed.',

    async execute(message, args, command, ChannelIds, Discord, client){
       
        const ask_aliases = ['ask', 'question', 'qn', 'query']

        const poll_aliases = ['poll', 'ballot', 'survey']

        const choose_aliases = ['choose', 'select' ,'pick']

        let messageArgs = args.join(' ');

        let help = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setTitle(`**                                                   Nikhil Aggarbot Help** \n\n`)
        .setDescription(`\n\n**-----------------------------| DEGREE PROGRAMME ROLES |-----------------------------** \n\n`
        + 'To get a degree programme role, please message `$add emoji name` into the #select-degree channels (n.b. this only applies to:'
        + ' UoM Maths 1st, 2nd & 3rd Year (Unofficial) Discord Servers; UoM Maths FY (Unofficial) Discord Server does not have' 
        + ' this option, but you can #add-department using that channel!). \n\n'
        + 'To remove a degree programme, or department role, simply message: `$rem emoji name` into the channel.\n\n'
        + `**-------------------------------------| MODULE ROLES |-------------------------------------** \n\n`
        + 'To obtain access to your module roles & channels, please message `$add Letter Letter Letter...` into the #add-modules channels. Made a mistake?'
        + ' Changed modules? No problem, please message `$rem Letter Letter Letter...` into the channels to remove those roles.\n\n'
        + `**---------------------------------------| COMMANDS |---------------------------------------** \n\n`
        + "To use a command please type in `$(insert command name here)`. The commands available are the following: \n\n"
        + "**1. ask** - Useful if you would like to ask a simple yes/no question; or run a simple poll. \n\n"
        + "**2. poll** - Useful if you would like to ask a question with responses other than just yes/no. \n\n"
        + "**3. choose** - In particular, this is useful if you are extremely indecisive & can not decide"
        + " what to do & so Nikhil Aggarbot will decide what to do from your given options."
        + "** Note: I would not recommend using this for serious decisions.** \n\n"
        + "**4. rps** - Play Rock Paper Scissors with Nikhil Aggarbot. \n\n"
        + "**5. 8ball** - Ask the 8-Ball a question. \n\n"
        + "**6. play** - Join any voice channel and listen to music using Nikhil Aggarbot. \n\n"
        + "**7. ttt** - Play tic tac toe with AI or a friend. \n\n"
        + "For more help on how to use a command, please type in `$help (insert command name here)`,"
        + " with a space between *help* and the *command name*")

        let help_ask = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setTitle('**-------------------------------| ASK COMMAND |-------------------------------**')
        .setDescription('\n\n **Aliases** \n'
        + '- question \n - qn \n - query \n\n'
        + '**Description** \n'
        + 'Useful if you would like to ask a simple yes/no question; or run a simple poll. \n\n'
        + '**Usage** \n'
        + 'To use this command, please type the following: `$ask (your question here)`, or instead of '
        + '*ask*, use any other appropriate alias.')

        let help_poll = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setTitle('**------------------------------| POLL COMMAND |------------------------------**')
        .setDescription('\n\n **Aliases** \n'
        + '- ballot \n - survey \n\n'
        + '**Description** \n'
        + 'Useful if you would like to ask a question with responses other than just yes/no. \n\n'
        + '**Usage** \n'
        + 'To use this command, please type the following: `$poll question; option 1; option 2; option 3; ...`'
        + ' ,or instead of *poll*, use any other appropriate alias.')

        let help_choose = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setTitle('**----------------------------| CHOOSE COMMAND |----------------------------**')
        .setDescription('\n\n **Aliases** \n'
        + '- select \n - pick \n\n'
        + '**Description** \n'
        + 'In particular, this is useful if you are extremely indecisive & can not decide'
        + ' what to do & so Nikhil Aggarbot will decide what to do from your given options.'
        + '** Note: I would not recommend using this for serious decisions.** \n\n'
        + '**Usage** \n'
        + 'To use this command, please type the following: `$choose choice 1; choice 2; choice 3; ...`'
        + ' , or instead of *choose*, use any other appropriate alias.')

        let help_rps = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setTitle('**-------------------------------| RPS COMMAND |-------------------------------**')
        .setDescription('\n\n **Description** \n'
        + 'Play Rock Paper Scissors with Nikhil Aggarbot. \n\n'
        + '**Usage** \n'
        + 'To use this command, please type the following: `$rps rock` to play Rock, `$rps paper` to play'
        + ' Paper, or `$rps scissors` to play Scissors.')

        let help_8ball = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setTitle('**----------------------------| 8-BALL COMMAND |----------------------------**')
        .setDescription('\n\n **Description** \n'
        + 'Ask the 8-Ball a question. \n\n'
        + '**Usage** \n'
        + 'To use this command, please type the following `$8ball (your question here)`. \n')

        let help_play = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setTitle('**----------------------------| MUSIC COMMANDS |----------------------------**')
        .setDescription('\n\n **Description** \n'
        + 'Join any voice channel and listen to any music using Nikhil Aggarbot. \n\n'
        + '**Available Commands** \n'
        + '**1. play** - Add a song to the queue. To use this command please type `$play (insert song title, or link, here)`. \n\n'
        + '**2. pause** - Temporarily stops the song. This command does not require a second argument. \n\n'
        + '**3. resume** - Plays the song from the paused position. This command does not require a second argument. \n\n'
        + '**4. skip** - Skips to the next song in the queue. \n\n'
        + '**5. leave** - Stops the current song, deletes the queue & makes Nikhil Aggarbot leave the voice channel. \n\n'
        + '**Permission needed to use** \n'
        + 'Connect \n')

        let help_ttt = new Discord.MessageEmbed()
        .setColor('#9B59B6')
        .setTitle('**-------------------------------| TTT COMMAND |-------------------------------**')
        .setDescription('\n\n **Description** \n'
        + 'Play tic tac toe with AI or a friend.\n\n'
        + '**Usage** \n'
        + 'To use this command simply type `-ttt` to play with AI, or type `-ttt <@-mentions>` to challenge '
        + 'a friend. \n\n'
        + '**N.b.** I did not code this! It is a module I have imported which I thought would be good to include.')

        if (ChannelIds.includes(message.channel.id)){
            if (messageArgs == ''){
            await message.channel.send(help);
            message.delete()
            }
            if (ask_aliases.includes(messageArgs)){
            await message.channel.send(help_ask)
            message.delete()
            }
            if (poll_aliases.includes(messageArgs)){
            await message.channel.send(help_poll)
            message.delete()
            }
            if (choose_aliases.includes(messageArgs)){
            await message.channel.send(help_choose)
            message.delete()
            }
            if (messageArgs == 'rps'){
            await message.channel.send(help_rps)
            message.delete()
            }
            if (messageArgs == '8ball'){
            await message.channel.send(help_8ball)
            message.delete()
            }
            if (messageArgs == 'play'){
            await message.channel.send(help_play)
            message.delete()
            }
            if (messageArgs == 'ttt'){
            await message.channel.send(help_ttt)
            message.delete()
            }
        }
    }
}