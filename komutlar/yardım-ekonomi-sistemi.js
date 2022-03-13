const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['', ''];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle(`**\`@Lucifero\` Ekonomi Sistemi.**`).setDescription(`
**👤 \`${Prefix}hesabım\`&\`${Prefix}bilgiler\`
> Hesap Bilgisini Gösterir.

📱 \`${Prefix}bakiye\` 
> Bakiyeyi Gösterir.

💸 \`${Prefix}haftalıkmaaş\`&\`${Prefix}maaş\`
> Haftalık Maaşını Alırsın.

💸 \`${Prefix}günlükpara\`&\`${Prefix}günlük\`
> Günlük Para Ödülü Alırsın.

🔨 \`${Prefix}hesap-oluştur\` 
> Hesap Oluşturursun.

🧹 \`${Prefix}hesap-sil\` 
> Hesap Silersin.

📪 \`${Prefix}kasa-bilgi\`
> Kasalar Hakkında Bilgi Alırsın.

📬 \`${Prefix}kasa-aç\` 
> Kasa Açarsın.

📲 \`${Prefix}transfer\` 
> Belirtilen Kişiye Belirtilen Miktarda Para Gönderirsin.
**`).setThumbnail(client.user.avatarURL() ? client.user.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ekonomis', 'ekonomi-s'],
  permLevel: 0
}

exports.help = {
  name: 'ekonomisistemi'
};