const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}
exports.claimOn = (yo) => {
    return `
*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *10000Xp* dan *$${yo}* balance
Dari claim harian`
}
exports.claimOnAlready = () => {
    return `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`
}

exports.allmenu = (levelMenu, xpMenu, reqXp, role, jumlahUser, jumlahHarian, jumlahCommand, sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `\`\`\`${ucapanWaktu} kak @${sender.split('@')[0]}\`\`\`


╭── 「 *BOT INFO* 」 ──
│
│❒͡  _*BABY BOT*_ 
│❒͡ *OWNER* : _*${setting.ownerName}*
│❒͡ *Contact My Owner*
│ *https://wa.me/6285710128853*
│❒͡ *Time: Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')} / ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}*
│❒͡ *STATUS* :「 PUBLIC 」
│❒͡ *Prefix :「 MULTI 」*
│❒͡ *Join Group elaina*
│ *Klik Link Dibawah:*
│❮ \`\`\`https://cutt.ly/gZwaIwv\`\`\` ❯
│
╰── 「 *ELAINA BOT* 」 ──

❉──────────────────❉  
*Name* : *${pushname}* 
*Your API* : *https://wa.me/${sender.split('@')[0]}*
*Limit* :  ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
Limit Game : ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}

*Your Progress*:
*Level: ${levelMenu}*
*XP: ${xpMenu} / ${reqXp}*
*Role: ${role}*
*Your Balance: $${toCommas(getBalance(sender, balance))}*
❉──────────────────❉  


 𒍮 *Auto-Regis User: ${jumlahUser}*

 𒍮 *Total Hit Bot : ${jumlahCommand}*
 
 𒍮 *Total Hit Today : ${jumlahHarian}*
 
 
*── 「 BABY BOT 」 ──*


Catatan:
Perlakukan bot secara baik, dev akan bertindak tegas apabila user melanggar rules.
Bot ini terdapat anti-spam yang berupa cooldown command selama *5 detik* setiap kali pemakaian.`
}

exports.menuModeration = (prefix, l) => {
    return `*── 「 MODERATION GROUP 」 ──*


${l++}. *${prefix}add*
Menambah user ke dalam group.
Aliases: -
Usage: *${prefix}add* 628xxxxxxxxxx

${l++}. *${prefix}kick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *${prefix}kick* @member1

${l++}. *${prefix}promote*
Promote member menjadi admin.
Aliases: -
Usage: *${prefix}promote* @member1

${l++}. *${prefix}demote*
Demote member dari admin.
Aliases: -
Usage: *${prefix}demote* @member1

${l++}. *${prefix}tagall*
Mention semua member group.
Aliases: *everyone*
Usage: *${prefix}tagall*

${l++}. *${prefix}setppgrup*
Mengganti icon grup.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}setppgrup* atau reply gambar dengan caption *${prefix}groupicon*.
*- ${prefix}setdesc*
*- ${prefix}setnamegc*

${l++}. *${prefix}antilink*
Mematikan/menyalakan fitur anti-group link.
Aliases: -
Usage: *${prefix}antilink* enable/disable

${l++}. *${prefix}leveling*
Mematikan/menyalakan fitur level-group.
Aliases: -
Usage: *${prefix}leveling* enable/disable

${l++}. *${prefix}welcome*
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Aliases: -
Usage: *${prefix}welcome* enable/disable

${l++}. *${prefix}group*
Mematikan/menyalakan group.
Aliases: -
Usage: *${prefix}group* enable/disable

${l++}. *${prefix}linkgroup*
Cek link invite group.
Aliases: -
Usage: *${prefix}linkgroup*


${l++}. *${prefix}mute*
Membisukan bot di grup.
Aliases: -
Usage: 
*-${prefix}mute*
*-${prefix}unmute*

${l++}. *${prefix}revoke*
Setel ulang link invite group.
Aliases: -
Usage: *${prefix}revoke*

${l++}. *${prefix}listadmin*
Detector listadmin.
Aliases: -
Usage: *${prefix}listadmin*
    `
}
exports.menudown = (prefix, l) => {
return `*── 「  DOWNLOADER 」 ──*


${l++}. *${prefix}ytmp3*
Download YouTube audio.
Aliases: -
Usage: *${prefix}ytmp3* link

${l++}. *${prefix}ytmp4*
Download YouTube video.
Aliases: -
Usage: *${prefix}ytmp4

${l++}. *${prefix}tiktok*
Download Tiktok Video.
Aliases: -
Usage: *${prefix}tiktok* link

${l++}. *${prefix}tiktokaudio*
Download  Tiktok Audio.
Aliases: -
Usage: *${prefix}tiktokaudio*

${l++}. *${prefix}igdl*
Download  Video Instagram.
Aliases: -
Usage: *${prefix}igdl* link

${l++}. *${prefix}facebook*
Download  Video Facebook.
Aliases: -
Usage: *${prefix}facebook* link

${l++}. *${prefix}mediafire*
Download  File Document.
Aliases: -
Usage: *${prefix}mediafire* link

${l++}. *${prefix}lirik*
Search Results Lirik.
Aliases: -
Usage: *${prefix}lirik* judul
`
}

exports.stickermenu = (prefix, l) => {
return `*── 「  STICKER MENU 」 ──*

${l++}. *${prefix}sticker*
Convert Foto & Video Menjadi Sticker.
Aliases: -
Usage: *${prefix}sticker*

${l++}. *${prefix}toimg*
Convert Sticker Menjadi Foto.
Aliases: -
Usage: 
*- ${prefix}toimg*
*- ${prefix}tovid*
`
}
exports.menuMisc = (prefix, l) => {
    return `*── 「 MEDIA AND MISC 」 ──*

${l++}. *${prefix}lirik*
Mencari lirik lagu.
Aliases: -
Usage: *${prefix}lirik* judul_lagu

${l++}. *${prefix}shortlink*
Membuat shortlink.
Aliases: -
Usage: *${prefix}shortlink* link

${l++}. *${prefix}faktaunik*
Teks Fakta Unik Dunia.
Aliases: -
Usage: *${prefix}faktaunik*

${l++}. *${prefix}darkjokes*
Random Drakjokes.
Aliases: -
Usage: *${prefix}darkjokes*

${l++}. *${prefix}meme*
Random meme.
Aliases: -
Usage: *${prefix}meme*

${l++}. *${prefix}covid19*
Melihat Kondisi Covid Saat ini.
Aliases: -
Usage: *${prefix}covid19*

${l++}. *${prefix}cerpen*
Cerita Pendek Random.
Aliases: -
Usage: *${prefix}cerpen*

${l++}. *${prefix}cersex*
Random Text Cersex.
Aliases: -
Usage: *${prefix}cersex*

${l++}. *${prefix}wiki*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *${prefix}wiki* teks

${l++}. *${prefix}igstalk*
Stalk akun Instagram.
Aliases: -
Usage: *${prefix}igstalk* username

${l++}. *${prefix}translate*
Translate Berbagai Macam Negara.
Aliases: -
Usage: *${prefix}translate* text

${l++}. *${prefix}ytsearch*
Search YouTube Channel.
Aliases: -
Usage: *${prefix}ytsearch* channel

${l++}. *${prefix}qr*
Membuat QR code.
Aliases: -
Usage: *${prefix}qr* teks

${l++}. *${prefix}pinterest*
Search Image pin.
Aliases: -
Usage: *${prefix}pinterest* text

${l++}. *Edit Vokal*
Teks.
Aliases: -
Usage: *- ${prefix}halah*
*- ${prefix}hilih*
*- ${prefix}heleh*
*- ${prefix}huluh*
*- ${prefix}holoh*

Pengguna *${prefix}hilih text*

${l++}. *${prefix}encode*
Teks Akan Di Enc.
Aliases: -
Usage: *${prefix}encode* teks *minimal 2000 teks*

${l++}. *${prefix}decode*
.
Aliases: -
Usage: *${prefix}decode*
`
}
exports.menuLeveling = (prefix, l) => {
    return `*── 「 LEVELING 」 ──*

${l++}. *${prefix}level*
Untuk melihat level kamu.
Aliases: -
Usage: *${prefix}level*

${l++}. *${prefix}leaderboard*
Untuk melihat leaderboard.
Aliaases: -
Usage: *${prefix}leaderboard*

${l++}. *${prefix}limit*
Cek Limit Kamu.
Aliases: *ceklimit*
Usage: *${prefix}limit*

${l++}. *${prefix}dadu*
Bot akan mengirim dadu dan dapatkan sejumlah Xp.
Aliases: -
Usage: *${prefix}dadu*

${l++}. *${prefix}slot*
Game Slot hadiah Xp.
Aliases: -
Usage: *${prefix}slot*

${l++}. *${prefix}suit*
Bot akan mengirim suit dan dapatkan sejumlah Xp.
Aliases: -
Usage: *${prefix}suit*

${l++}. *${prefix}balance*
Cek Uang Kamu.
Aliases: *atm*, *bal*, *uangku*
Usage: *${prefix}balance*

${l++}. *${prefix}buylimit*
Beli Limit Kamu.
Aliases: *-*
Usage: *${prefix}buylimit* jumlah limit

${l++}. *${prefix}buyglimit*
Beli Limit Game Kamu.
Aliases: *-*
Usage: *${prefix}buyglimit* jumlah limit
    `
}
exports.ownerMenu = (prefix, l) => {
return `*── 「 OWNER 」 ──*

${l++}. *${prefix}addprem*
Menambah User Premium.
Aliases: *-*
Usage: *${prefix}addprem* nomor waktu
- s
- d

${l++}. *${prefix}delprem*
Mendelete User Premium.
Aliases: *-*
Usage: *${prefix}delprem* nomor

${l++}. *${prefix}setppbot*
Merubah Tampilan Foto Profile bot.
Aliases: *-*
Usage: *${prefix}setppbot* image

${l++}. *${prefix}exif*
merubah Watermark.
Aliases: *-*
Usage: *${prefix}exif* author|Packname

${l++}. *${prefix}addrespon*
Respon Bot Masage.
Aliases: 
Usage: *${prefix}addrespon* text|text

${l++}. *${prefix}delrespon*
Delete Respon Bot.
Aliases: 
Usage: *${prefix}delrespon* text

${l++}. *${prefix}broadcast*
Krim Semua Pesan Bot.
Aliases: 
Usage: *${prefix}broadcast* teks

${l++}. *${prefix}self*
Aliases: 
Usage: *${prefix}self*

${l++}. *${prefix}public*
Aliases: *-*
Usage: *${prefix}public*

${l++}. *${prefix}setprefix*
Merubah Prefix bot.
Aliases: *-*
Usage: *${prefix}setprefix* multi/nopre

${l++}. Block & Ban
Block User.
Aliases: *-*
Usage: *${prefix}block*
*- ${prefix}unblock

*- ${prefix}ban
*- ${prefix}unban

${l++}. *${prefix}join*
Masuk Group.
Aliases:
Usage: *${prefix}join* link

Eval
> evalcode
x evalcode-2
$ executor`
}
exports.islam = (prefix, l) => {
    return `comming soun ~`
    }
exports.rules = (prefix) => {
    return `
*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

    `
}
