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

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `${ucapanWaktu} kak *${pushname !== undefined ? pushname : 'No Detect Name'}* 👋

Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

Nama : ${pushname !== undefined ? pushname : 'No Detect'}
Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
Limit : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
Limit Game : ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
Balance : $${toCommas(getBalance(sender, balance))}

_Ada Bug? Ketik ${prefix}report Bug mu_

*( 📍 )  Generator Menu*

*( 👥 )  Group Menu*
≻ ${prefix}linkgrup
≻ ${prefix}setppgrup
≻ ${prefix}setnamegc
≻ ${prefix}setdesc
≻ ${prefix}group <Open/Close>
≻ ${prefix}revoke
≻ ${prefix}hidetag <Text>
≻ ${prefix}tagall <Text>
≻ ${prefix}kick <@tag>
≻ ${prefix}add <@tag>
≻ ${prefix}promote <@tag>
≻ ${prefix}demote <@tag>
≻ ${prefix}listadmin <Pesan>
≻ ${prefix}infogc
≻ ${prefix}antilink enable/disable
≻ ${prefix}mute
≻ Unmute
  
*( 🔧 )  Encrypt & Decrypt*
≻ ${prefix}encode <Text>
≻ ${prefix}decode <Text>
  

*${setting.botName}*

  *THANKS TO*
- Allah SWT
- Baileys-Md (Adiwa Jshing)
- @irfann._x (Iyan)
- @arsrfii`
}