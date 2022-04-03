const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();
//queue(message.guild.id, queue_constructor object {voice channel, text channel, connection, song[]});

module.exports ={
    name: 'play',
    aliases: ['pause', 'resume', 'skip', 'leave'],
    cooldown:0,
    description: 'Advanced music bot',
    async execute(message, args, command, Discord, client){
        
        if (message.member.roles.cache.some(role => role.name === 'VC Ban')){
            message.reply('You do not have the correct permissions!');
            return;
        }
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.reply('You need to be in a voice channel to execute this command!');

        //Get server queue from the global queue.
        const server_queue = queue.get(message.guild.id);

        if (command === 'play'){
            if (!args.length) return message.reply('You need to send a second argument!');
            let song = {};

            //If the first argument is a link. Set the song object to have two keys. Title & URL.
            if(ytdl.validateURL(args[0])){
                const song_info = await ytdl.getInfo(args[0]);
                song ={title: song_info.videoDetails.title, url: song_info.videoDetails.video_url}
            } else{
                //If the video is not a URL then use keywords to find that video.
                const video_finder = async(QUERY) =>{
                    const videoResult = await ytSearch(QUERY);
                    //Returns a bunch of videos from YouTube, but only plays the very first video.
                    return (videoResult.videos.length > 1) ? videoResult.videos[0]: null;
                }
                //Get arguments, join them, and pass into the query which searches for the video.
                const video = await video_finder(args.join(' '));
                if (video){
                    song = {title: video.title, url: video.url}
                } else{
                    message.reply('There was an error finding the video!');
                }
            }
            //If the server queue does not exist (which doesn't for the first video queued) then create a
            //constructor to be added to the global queue.
            if (!server_queue){
                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
                //Grab global queue, set key for the server, as well as constructor.
                queue.set(message.guild.id, queue_constructor);
                //Push songs from `if statements` into the songs list.
                queue_constructor.songs.push(song);

                try{
                    //Establish a connection between bot and voice channel.
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    message.channel.send("👌 **Joined** <#"+voice_channel.id+"> **and bound to** <#"+message.channel.id+">");
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch(err){
                    //If there is an error, then delete the entire list from the global queue.
                    queue.delete(message.guild.id);
                    message.channel.send("There was an error connecting!");
                    throw err;
                }
            } else {
                server_queue.songs.push(song);
                return message.channel.send(`👉 ** ${song.title} ** added to queue!`);
            }
        }
        else if (command === 'pause') pause_song(message, server_queue);
        else if (command === 'resume') resume_song(message, server_queue);
        else if (command === 'skip') skip_song(message, server_queue);
        else if (command === 'leave') leave_song(message, server_queue);
    }     
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    //If the queue is empty, then leave the voice channel.
    if (!song) {
        await song_queue.voice_channel.leave();
        //Remove the server from the global queue.
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, {filter: 'audio'});
    song_queue.connection.play(stream, {seek: 0, volume: 1})
    .on('finish', () =>{
        //play next song in the queue.
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send(`🎵 Now playing ** ${song.title} **`)
}

const pause_song = (message, server_queue) =>{
     //Check if the user is actually in the voice channel, if not he can not pause.
     if (!message.member.voice.channel) return message.reply('you need to be in a voice channel to use this command!');
   
    server_queue.connection.dispatcher.pause();
    message.channel.send(`⏸️ **Paused**`);
}

const resume_song = (message, server_queue) =>{
     //Check if the user is actually in the voice channel, if not he can not resume.
     if (!message.member.voice.channel) return message.reply('you need to be in a voice channel to use this command!');

    message.channel.send(`⏯️ **Resuming**`);
    server_queue.connection.dispatcher.resume();
}

const skip_song = (message, server_queue) => {
    //Check if the user is actually in the voice channel, if not he can not skip.
    if (!message.member.voice.channel) return message.reply('you need to be in a voice channel to use this command!');
    if (!server_queue){
        return message.reply(`There are no songs in the queue!`);
    }
    server_queue.connection.dispatcher.destroy();
}

const leave_song = (message, server_queue) =>{
     //Check if the user is actually in the voice channel, if not he can not make the bot leave the voice channel.
    if (!message.member.voice.channel) return message.reply('you need to be in a voice channel to use this command!');
    //Clear the entire song queue.
    server_queue.songs = [];
    server_queue.connection.dispatcher.destroy();
}
