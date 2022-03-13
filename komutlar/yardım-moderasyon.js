const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle(`**\`@Lucifero\` Moderasyon Sistemi.**`).setDescription(`
**\`${Prefix}mod-log #kanal\`
> Mod-log ayarlar.

\`${Prefix}mod-log sıfırla\` 
> Mod-log sıfırlar.

\`${Prefix}yavaş-mod\` 
> Kanala Yavaş Mod ekler.

\`${Prefix}bansay\`
> Sunucuda kaç banlanan üye olduğunu gösterir.

\`${Prefix}ban @kullanıcı\`
> Etiketlediğiniz kullanıcıyı banlar.

\`${Prefix}küfürengel\` 
> Küfür engel açar/kapatır.

\`${Prefix}küfürlog #kanal\`
> Küfür-log ayarlar.

\`${Prefix}reklamengel\`
> Reklam engel açar/kapatır.

\`${Prefix}reklamlog #kanal\` 
> Reklam-log ayarlar.

\`${Prefix}sa-as aç\` 
> SA-AS sistemini açar.
 
\`${Prefix}sa-as kapat\` 
> SA-AS sistemini kapatır.
 
\`${Prefix}sil\` 
> Yazdığınız miktar kadar mesaj siler.

\`${Prefix}say\` 
> Sunucu bilgilerini gösterir.

\`${Prefix}oylama\` 
> Oylama yapar.

\`${Prefix}otorol-ayarla @rol #kanal\` 
> Otorol ayarlar.

\`${Prefix}otorol-sıfırla\` 
> Otorol ayarlar.

\`${Prefix}otorol-mesaj-ayarla\` 
> Otorol mesajı ayarlar.

\`${Prefix}otorol-mesaj-sıfırla\` 
> Otorol mesajı sıfırlar.
**`).setThumbnail(client.user.avatarURL() ? client.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mod', ''],
  permLevel: 0
}

exports.help = {
  name: 'moderasyon'
};

//.mod-log #kanal
//-> Mod-log ayarlar.
//.mod-log sıfırla
//-> Mod-log sıfırlar.
//.bansay
//-> Sunucuda kaç banlanan üye olduğunu gösterir.
//.ban @kullanıcı
//-> Etiketlediğiniz kullanıcıyı banlar.
//.küfürengel
//-> Küfür engel açar/kapatır.
//.küfürlog #kanal
//-> Küfür-log ayarlar.
//.reklamengel
//-> Reklam engel açar/kapatır.
//.reklamlog #kanal
//-> Reklam-log ayarlar.
//.sa-as aç
//-> SA-AS sistemini açar.
//.sa-as kapat
//-> SA-AS sistemini kapatır.
//.sil
//-> Yazdığınız miktar kadar mesaj siler.
//.say
//-> Sunucu bilgilerini gösterir.
//.oylama
//-> Oylama yapar.
//.otorol-ayarla @rol #kanal
//-> Otorol ayarlar.
//.otorol-sıfırla
//-> Otorol sıfırlar.
//.otorol-mesaj-ayarla
//-> Otorol mesajı ayarlar.
//.otorol-mesaj-sıfırla
//-> Otorol mesajı sıfırlar.

/*const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Moderasyon Yardım Menüsü`)
 .setDescription(`
 **${prefix}mod-log #kanal** \n-> Mod-log ayarlar.
 **${prefix}mod-log sıfırla** \n-> Mod-log sıfırlar.
 **${prefix}bansay** \n-> Sunucuda kaç banlanan üye olduğunu gösterir.
 **${prefix}ban @kullanıcı** \n-> Etiketlediğiniz kullanıcıyı banlar.
 **${prefix}küfürengel** \n-> Küfür engel açar/kapatır.
 **${prefix}küfürlog #kanal** \n-> Küfür-log ayarlar.
 **${prefix}reklamengel** \n-> Reklam engel açar/kapatır.
 **${prefix}reklamlog #kanal** \n-> Reklam-log ayarlar.
 **${prefix}sa-as aç** \n-> SA-AS sistemini açar.
 **${prefix}sa-as kapat** \n-> SA-AS sistemini kapatır.
 **${prefix}sil** \n-> Yazdığınız miktar kadar mesaj siler.
 **${prefix}say** \n-> Sunucu bilgilerini gösterir.
 **${prefix}oylama** \n-> Oylama yapar.
 **${prefix}otorol-ayarla @rol #kanal** \n-> Otorol ayarlar.
**${prefix}otorol-sıfırla** \n-> Otorol sıfırlar.
 **${prefix}otorol-mesaj-ayarla** \n-> Otorol mesajı ayarlar.
 **${prefix}otorol-mesaj-sıfırla** \n-> Otorol mesajı sıfırlar.
`)
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};*/