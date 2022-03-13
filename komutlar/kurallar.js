const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**\`Kurallar\`
> Kurulan sunucu içerisinde müstehcen ve toplumu kine yönlendiren paylaşımlar yapanlar sunucudan ihraç edilecektir. Yapmış olduğu paylaşım Silinecektir.

> Sunucumuz üzerinden yapılan tartışmalar belirlenen konular dışında siyasi veya ırkçı unsurlar taşıması yasaktır. Bu tip paylaşım ve tartışmalar yapanlar sunucudan ihraç edilecektir.

> Aynı yazıyı arka arkaya aynı yazıyı yazarak sohbet kanallarını meşgul etmek yasaktır.

> Sunucu içerisinde yöneticilere sorulmadan reklam paylaşımı yasaktır.

> Farklı discort bağlantıları veya Telegram Grupları paylaşmak yasaktır.

> Sohbetler saygı kuralları çerçevesi içerisinde yapılmalıdır.
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rules'],
  permLevel: 0
}

exports.help = {
  name: 'kurallar'
};