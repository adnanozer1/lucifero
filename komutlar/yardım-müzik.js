const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
exports.run = (client, message) => {
  const AsreaperEmbed = new AsreaperDiscord.MessageEmbed();
  AsreaperEmbed.setColor(0x36393F)
  AsreaperEmbed.setDescription(`Malesef Şu Anda Müzik Komutları Çalışmıyor **Developer** Üzerinde Çalışıyor!`)
  message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'müzikyardım',
  description: 'müzikyardım komutunu bilgilendirir.',
  usage: 'müzikyardım'
};