const Discord = require("discord.js")
exports.run = (client, message, args) => {
    var avatarUser = message.mentions.users.first()
    if (!avatarUser) avatarUser = message.author
    const avatarLink = avatarUser.avatarURL
	let username = message.author.username
   const embed = new Discord.RichEmbed()
   .setTitle(username)
         .setDescription("Аватар " + avatarUser.tag)
        .setColor('RANDOM')
		.setImage(avatarLink)
    message.channel.send(embed)
}

exports.help = {
    name: "avatar"
  }
  
