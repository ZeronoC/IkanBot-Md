require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessage, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime } = require('./lib/scraper')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const fake = 'Zerone@iyyan2022'
ownerNumber = ["6289614412045@s.whatsapp.net"]
modelmenu = 'gif'
apikeyy = 'sQMpXbHimbTkxGC'


module.exports = hisoka = async (hisoka, m, chatUpdate) => {
    try {
        //var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : ''
        //Body lu ada yg kurang gw tambahin
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
		const type = Object.keys(m.message)[0] 
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const isCreator = [hisoka.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == hisoka.user.id ? true : false
        const text = args.join(" ")
        const q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    
	     
	    // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	    const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const groupMembers = m.isGroup ? groupMetadata.participants : ''
        // menu lain
        const brainly = require('brainly-scraper')
        const { virtex } = require('./virtekk/virtex')
        const { virtex2 } = require('./virtekk/virtex2')
        const { virtex3 } = require('./virtekk/virtex3')
        const { virtex4 } = require('./virtekk/virtex4')
        const { virtex5 } = require('./virtekk/virtex5')
        const { virtex6 } = require('./virtekk/virtex6')
        const { virtex7 } = require('./virtekk/virtex7')
        const { virtex8 } = require('./virtekk/virtex8')
        const { virtex9 } = require('./virtekk/virtex9')
        const { ngazap } = require('./virtekk/ngazap')
        const { bugHole } = require('./virtekk/inipirus')
        const { typeXrim } = require('./virtekk/virushantu')
        const { virtag } = require('./virtekk/virtag')
        const { vipi } = require('./virtekk/virtod')
        const { emoji2 } = require('./virtekk/emoji2')
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
       hisoka.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: hisoka.authState.creds.me.id,upload: hisoka.waUploadToServer})
            }
			
			
	
			
            
            const sendFileFromUrl = async (from, url, caption, m, men) => {
                let mime = '';
                let res = await axios.head(url)
                mime = res.headers['content-type']
                if (mime.split("/")[1] === "gif") {
                    return hisoka.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                    }
                let type = mime.split("/")[0]+"Message"
                if(mime.split("/")[0] === "image"){
                    return hisoka.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
                } else if(mime.split("/")[0] === "video"){
                    return hisoka.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
                } else if(mime.split("/")[0] === "audio"){
                    return hisoka.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
                } else {
                    return hisoka.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
        const reply = (teks) => {
            hisoka.sendMessage(from, teks, text, {quoted:m})
        }

		const troli = {
                         "key": {
                         "remoteJid": "status@broadcast", 
                         "participant": '0@s.whatsapp.net'
                    }, 
                         "message": {
                         "orderMessage": {
                         "itemCount": 99999, 
                         "status": 200, 
                         
                         "surface": 200, 
                         "message": `YanZerone`, 
                         "orderTitle": 'MENU BOT', 
                         "sellerJid": '0@s.whatsapp.net'
                    } 
                          } 
                              } 
							  
							  
							  const peksaya = {
                         "key": {
                         "remoteJid": "6288222079999-1633244783@g.us", 
                         "participant": '6289614412045@s.whatsapp.net'
                    }, 
                         "message": {
                         "orderMessage": {
                         "itemCount": 2021, 
                         "status": 200, 
                         
                         "surface": 200, 
                         "message": `Halo ${pushname}! dapet salam dari owner.`, 
                         "orderTitle": 'dapet salam dari owner Bot!', 
                         "sellerJid": '@s.whatsapp.net'
                    } 
                          } 
                              } 
							  
                              hisoka.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
                                let mime = (message).mimetype || ''
                                let messageType = mime.split('/')[0]
                                let extension = mime.split('/')[1]
                                trueFileName = attachExtension ? (filename + '.' + extension) : filename
                                const stream = await downloadContentFromMessage(message, messageType)
                                let buffer = Buffer.from([])
                                for await(const chunk of stream) {
                                buffer = Buffer.concat([buffer, chunk])
            }
            // save to file
            await fs.writeFileSync(trueFileName, buffer)
            return trueFileName
           }
		
        //SendButton5
        const sendButton5 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "WhatsApp",
              "url": "https://wa.me/6289614412045"
            }
          },
          {
            "callButton": {
              "displayText": "Call",
              "phoneNumber": "6289614412045"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Donasi💸",
              "id": `${prefix}donasi`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Iklan📺",
              "id": `${prefix}iklan`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner👑",
              "id": `${prefix}owner`
            }
        }
      ]
    }
  }
}, {})
hisoka.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
anuy = `
╭─「  *USER INFO* 」
| Nama : ${pushname}
| Nomor : ${m.sender}
╰────────────┈⭓

╭─「  *BOT INFO* 」
| Prefix : 「 Multi prefix 」
| Runtime : ${runtime(process.uptime())}
| Kecepatan ${latensi.toFixed(4)}
| RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
╰────────────┈⭓

╭─「  *LIST MENU* 」
| ${prefix}GroupMenu
| ${prefix}Educationmenu
| ${prefix}SearchMenu
| ${prefix}RandomMenu
| ${prefix}ImageMenu
| ${prefix}ConvertMenu
| ${prefix}MainMenu
╰────────────┈⭓
`

        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        switch(command) {
       case 'menu':
       case 'hlp':

       if (modelmenu == 'gif') {
       await sendButton5(from, anuy, fake, await hisoka.createMessage(from, {video: {url: "./lib/zeron.mp4", caption: anuy}, gifPlayback: true, gifAttribution: "GIPHY"}))
       } 

       else if (modelmenu == 'image') 

       {
       await sendButton5(from, anuy, fake, await hisoka.createMessage(from, {image: {url: "./lib/hisoka.jpg", caption: anuy}}))
       }
       break
	   
	   case 'tr': {
		   if (!q) return m.reply('Masukan QUERY!!')
			   Tr = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/translate?kata=${q}&apikey=WanzBotz`)
		   dijasjusin = `TRANSLATE Dari ${Tr.result.from} ke ${Tr.result.to}
		   Hasil : ${Tr.result.text}
		   Typo : ${Tr.result.typo}`
		   
		   hisoka.sendMessage(m.chat, {text: dijasjusin}, {quoted: troli})
		   break
	   }
	   
	   case 'ytmp3':{
		   if (!q) return m.reply('Masukan Link Yt')
			   if (!isUrl) return
		  yt = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytmp3?url=${q}&apikey=sQMpXbHimbTkxGC`)
		  jasjus = `YTMP3 DOWNLOADER\nTitle : ${yt.result.title}\nSize : ${yt.result.size}\nDesc : ${yt.result.desc}\nQuality : ${yt.result.quality}\n\n*Mohon tunggu.. kurang lebih 1 menit*`
		  hisoka.sendMessage(m.chat, {text: jasjus}, {quoted: m})
		  sendFileFromUrl(m.chat, yt.result.url, m)
		  break
	   }
	   
	    case 'ytmp4': case 'ytvideo': {
            	m.reply(mess.wait)
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`
                let result = await ytv(isUrl(text)[0])
                let { dl_link, thumb, title, filesizeF, filesize } = result
                if (Number(filesize) >= 100000) return m.reply('File Melebihi Batas'+util.format(result))
                kahfz.sendMessage(m.chat, { video: { url: dl_link }, caption: `⭔ Title : ${title}\n⭔ File Size : ${filesizeF}\n⭔ Url : ${text}\n⭔ Ext : MP4` }, { quoted: m })
            }
            break
	   case 'mediafire':{
		   if (!q) return m.reply('masukan link mediafire!')
			   if (!isUrl) return
		   dl = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/mediafire?url=${q}&apikey=sQMpXbHimbTkxGC`)
		   ep = `Tunggu sebentar...\n\nFile Name : ${dl.result.nama}\nJenis file : .${dl.result.mime}\nSize : ${dl.result.size}`
		   hisoka.sendMessage(m.chat, {text: ep}, {quoted: m})
		   sendFileFromUrl(m.chat, dl.result.link, m)
		   break
	   }
	  
	  case 'kbbi':
	  if (!q) return m.reply(`Masukan query! Contoh : ${prefix + command} pohon`)
		  bi = await fetchJson(`https://human-apixyz.herokuapp.com/api/info/kbbi?kata=${q}&apikey=AnggaKey`)
	  biba = `KBBI RESULT\n\nLema : ${bi.result.lema}\nArti : ${bi.result.arti}`
	  hisoka.sendMessage(m.chat, {text: biba}, {quoted: m})
	  break
	
	  case 'hidetag':
                if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isGroup) return m.reply(mess.group)
                hisoka.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break
	   
	   case 'play':{
		   if (!q) return m.reply('Masukan Judul')
			   
		  yt = await fetchJson(`https://human-apixyz.herokuapp.com/api/yt/playmp3?query=${q}&apikey=AnggaKey`)
		  djasjus = `*PLAY MUSIC*\nTitle : ${yt.title}\nviews : ${yt.views}\nQuality : \n\n*Mohon tunggu.. kurang lebih 1 menit*`
		  hisoka.sendMessage(m.chat, {text: djasjus}, {quoted: m})
		  sendFileFromUrl(m.chat, yt.url, m)
		  break
	   }

                            case 'setmenu':
                            if (!q) return m.reply(`Masukan opts :\ngif\nimage`)
                            if (q == "gif") {
                            modelmenu = "gif"
                            m.reply("Done change menu to "+q)
                            } 

                            else if (q == "image") {
                          modelmenu = "image"
                            m.reply("Done change menu to "+q)
                            } 

                            else {
                            m.reply(`Masukan opts :\ngif\nimage`)
                            }
                            break
	    case 'sc': {
	    m.reply('Ngapain Bang, Tanya aja ama owner nya ?')
                //m.reply('Script : https://github.com/DikaArdnt/Hisoka-Morou\n\n Dont Forget Give Star')
            }
            break
            case 'nulis':
                case 'tulis':
                if (args.length < 1) return m.reply('Yang mau di tulis apaan?')
                  teks = args.join(' ')
                m.reply(mess.wait)
                nulis = encodeURIComponent(teks)
                res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
                if (res.data.error) return m.reply(res.data.error)
                  buff1 = Buffer.from(res.data.result.split(',')[1], 'base64')
                hisoka.sendMessage(m.chat, { image: buff1,caption: '©iy.yan_' }, { quoted: m}).catch(e => {
                  return m.reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
                })           
                break
                case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
                case 'brainly':
m.reply(mess.wait)
brainly(args.join(" ")).then(res => {
  hmm = '────────────\n'
  for (let Y of res.data) {
 hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
  }
  m.reply(hmm)
  console.log(res)
              })
                break
                case 'apakah':
                apakah = body.slice(1)
                const apa =['Iya','Tidak','Gak lah','Dih songong','gak tau deh','Bisa Jadi','Coba Ulangi']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                hisoka.sendMessage(m.chat, { text: '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah })
                break
                break
                case 'playall':{
                    if (!q) return m.reply('Masukan Judul')
                        
                   yt = await fetchJson(`https://human-apixyz.herokuapp.com/api/yt/playmp3?query=${q}&apikey=AnggaKey`)
                   djasjus = `*PLAY MUSIC*\nTitle : ${yt.title}\nviews : ${yt.views}\nQuality : \n\n_Mohon tunggu.. kurang lebih 1 menit_`
                   hisoka.sendMessage(m.chat, {text: djasjus}, {quoted: m})
                   sendFileFromUrl(m.chat, yt.url, m)
                   break
                }
                case 'donasi': 
			
var templatetun = proto.Message.fromObject({
                       templateMessage: proto.TemplateMessage.fromObject({
                               hydratedTemplate: {
                                 hydratedContentText: `_MAU DONASI YA KAK_
	GOPAY : 081286800298
	DANA   : PC OWNER
    OVO     : PC OWNER 
    No Owner 
    wa.me/6289614412045
    
    *NOTE :*
    MAU DONASI APA LIAT DOANG`,

                                    hydratedButtons: [{
                                        urlButton: {
                                            displayText: 'Info Selengkapnya',
                                            url: 'https://wa.me/6289614412045'
                                        }
                                    }, {
                                        callButton: {
                                            displayText: 'Hubungi Owner',
                                            phoneNumber: '6289614412045@s.whatsapp.net'
                                        }
                                    }, {
									"quickReplyButton": {
										"displayText": 'Chat Owner',
										"id": "#owner"
									},
									"index": 2
								},
								{
									"quickReplyButton": {
										"displayText": undefined,
										"id": "#tos"
									},
									"index": 3
								},
								{
									"quickReplyButton": {
										"displayText": undefined,
										"id": "NAN"
									}
                     }]
                                }
                            })
                        })
var p = generateWAMessageFromContent(from, templatetun, {})
                        await hisoka.relayMessage(from, p.message, { messageId: p.key.id }); 
                        ;                                 
                    break
                    case 'tiktokmp3': case 'tiktokaudio': {
                        m.reply(mess.wait)
                                    if (!text) throw `Example : ${prefix + command} https://vt.tiktok.com/ZSeAsTBQ9/`
                                    let anu = await tiktokDownloader(isUrl(text)[0])
                                    let teks = `
                    ► VIDEO
                    ⭔ *ID :* ${anu.id}
                    ⭔ *Username :* ${anu.username}
                    ⭔ *Nickname :* ${anu.nickname}
                    ⭔ *Upload At :* ${anu.tanggal_buat}
                    ⭔ *Resolusi :* ${anu.resolusi}
                    ⭔ *Verify :* ${anu.verify}
                    ⭔ *Like :* ${anu.statistic.diggCount}
                    ⭔ *Share :* ${anu.statistic.shareCount}
                    ⭔ *Comment :* ${anu.statistic.commentCount}
                    ⭔ *Viewers :* ${anu.statistic.playCount}
                    ⭔ *Private :* ${anu.video_private}
                    ⭔ *Duet :* ${anu.duetEnabled}
                    ⭔ *Stitch :* ${anu.stitchEnabled}
                    ⭔ *Caption :* ${anu.desk}
                    
                    ♫ AUDIO
                    
                    ⭔ *ID :* ${anu.music.id}
                    ⭔ *Title :* ${anu.music.title}
                    ⭔ *Author :* ${anu.music.authorName}
                    ⭔ *Original :* ${anu.music.original}
                    ⭔ *Duration :* ${anu.music.duration}
                    ⭔ *Album :* ${anu.music.album}
                    ⭔ *Schedule Time :* ${anu.music.scheduleSearchTime}
                                    `
                                    let buttons = [
                                        {buttonId: `sendbuffer ${anu.wm}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                                        {buttonId: `sendbuffer ${anu.nowm}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                                    ]
                                    let buttonMessage = {
                                        image: { url: anu.thumbnail },
                                        caption: teks,
                                        footer: 'YanZerone@2022',
                                        buttons: buttons,
                                        headerType: 4
                                    }
                                    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                            await sleep(2000)
                            hisoka.sendMessage(m.chat, { document: { url: anu.music.playUrl }, mimetype: 'audio/mpeg', fileName: `${anu.music.title}.mp3` }, { quoted: m })
                                }
                                break
                             case 'bcgc': case 'bc': case 'broadcast': {
                if (!isCreator) throw mess.owner
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                cc = await smsg(hisoka, text ? m : m.quoted ? await m.quoted.fakeObj : false || m)
                cck = text ? text : cc.text
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    await hisoka.copyNForward(i, hisoka.cMod(m.chat, cc, /bc|broadcast|bcgc/i.test(cck) ? cck : `「 *Ikan-Md Broadcast* 」\n\n ${cck}`), true).catch(_ => _)
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
                    case 'faq':
              const buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK TO MENU'}, type: 1},
  {buttonId: '${prefix}faq22', buttonText: {displayText: 'Apa itu FZX?'}, type: 1},
  {buttonId: '${prefix}faq33', buttonText: {displayText: 'Terinspirasi dari mana?'}, type: 1}
]

const buttonMessage = {
    text: "",
    footerText: 'creator : iyyan & ikanmd',
    buttons: buttons,
    headerType: 1
}
hisoka.sendMessage(from, buttonMessage)
               break
			   case 'faq22':
			   m.reply('Zerone Adalah nama bot Dari @iy.yan_\nBot ini milik ikan')
			   break
               case 'take': case 'colong': case 'swm': case 'stickerwm': case 'wm': case 'exif': {
                if (!quoted) throw `Reply Media dengan caption ${prefix + command} Punya|ikan`
                let { writeExif } = require('./lib/exif')
                let media = {}
                media.mimetype = mime
                media.data = await m.getMsgBuffer(quoted)
                let encmedia = await writeExif(media, { packname: text.split("|")[0] ? text.split("|")[0] : global.packname, author: text.split("|")[1] ? text.split("|")[1] : global.author })
                hisoka.sendMessage(m.chat, { sticker: { url: encmedia } }, { quoted: m })
                await fs.unlinkSync(encmedia)
            }
            break
	   case 'faq33':
			   m.reply('Saya terinspirasi membuat bot whatsapp dari Bot milik mastah goyy, saya belajar ke dia waktu itu dan sekarang saya sudah bisa merakit/recode sendiri, Terimakasih Stah!!')
			   break

			   
			   
			   
			   
               case 'sticker': case 's': case 'stickergif': case 'sgif': {
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                        if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else {
                            throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1case 'st-9 Detik`
                    }
                }
                break
                case 'mcpe':
                m.reply(`*Info Server Bedrock Edition*

ip/host: *play.scarlandsmp.xyz*
Port: *19132*
Version: *1.18.0*
Protocol Version: *475*
Gamemode: *Survival*
Online Player: *Liat Sendiri di server*
Max Player: *100*
Motd: *Maintenance*`)
                break
                case 'hilih': {
                    if (!q) return reply ('masukan query')
                        dijasjus = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/hilih?kata=${q}&apikey=WanzBotz`)
                    hisoka.sendMessage(m.chat, {text: dijasjus.result.result}, {quoted: m})
                    break
                }
                
                
                       
                 
              case 'groupmenu':
            m.reply(`╭─➤ *Menu*
│       ❑  *Group*
| ${prefix}linkgroup
| ${prefix}hidetag (teks)
| ${prefix}add (nomor)
| ${prefix}kick (tag)
| ${prefix}promote (tag)
| ${prefix}demote (tag)
╰────────────────❋ཻུ۪۪⸙`)
            break
            case 'educationmenu':
            m.reply(`╭─➤ *Menu*
|  nulis (teks)
|  Comming Soon
╰────────────────❋ཻུ۪۪⸙`)
            break
            case 'searchmenu':
            m.reply(`╭─➤ *Menu*
│       ❑  *search*
| ${prefix}pinterest [query]
| ${prefix}wallpaper [query]
| ${prefix}wikimedia [query]
| ${prefix}ytsearch [query]
╰────────────────❋ཻུ۪۪⸙`)
            break
            case 'randommenu':
           m.reply(`╭─➤ *Menu*
│       ❑  *random*
| ${prefix}quotesanime
| ${prefix}loli
| ${prefix}apakah
| ${prefix}neko
| ${prefix}waifu
| ${prefix}shinobu
| ${prefix}cry
| ${prefix}hug
| ${prefix}awoo
| ${prefix}kiss
| ${prefix}lick
| ${prefix}pat
| ${prefix}bonk
| ${prefix}smug
| ${prefix}blush
| ${prefix}yeet
| ${prefix}smile
| ${prefix}wave
| ${prefix}highfive
| ${prefix}handhold
| ${prefix}nom
| ${prefix}bite
| ${prefix}glomp
| ${prefix}slap
| ${prefix}kill
| ${prefix}happy
| ${prefix}wink
| ${prefix}poke
| ${prefix}dance
| ${prefix}cringe
| ${prefix}hilih (query)
╰────────────────❋ཻུ۪۪⸙`)
            break
            case 'imagemenu':
            m.reply(`╭─➤ *Menu*
│       ❑  *image*
| ${prefix}anime
| ${prefix}waifu
| ${prefix}husbu
| ${prefix}neko
| ${prefix}shinobu
| ${prefix}megumin
╰────────────────❋ཻུ۪۪⸙`)
            break
            case 'convertmenu':
           m.reply(`╭─➤ *Menu*
│       ❑  *Convert*
| ${prefix}toimage
| ${prefix}sticker (reply pesan)
| ${prefix}sgif (reply pesan)
| ${prefix}tovideo
| ${prefix}togif
| ${prefix}tourl
╰────────────────❋ཻུ۪۪⸙`)
            break
            case 'mainmenu':
             m.reply(`╭─➤ *Menu*
│       ❑  *Main*
| ${prefix}owner
| ${prefix}menu
| ${prefix}delete
| ${prefix}iklan
| ${prefix}tomp4
| ${prefix}tourl
╰────────────────❋ཻུ۪۪⸙`)
            break
            case 'ownermenu':
             if (!isCreator && !m.key.fromMe) throw mess.owner
            m.reply(`╭─➤ *Menu*
│       ❑  *Owner*
| ${prefix}chat [option]
| ${prefix}join [link]
| ${prefix}leave
| ${prefix}virtexmenu
| ${prefix}block @tag
| ${prefix}unblock @tag
╰────────────────❋ཻུ۪۪⸙`)
        break
        case 'virtexmenu': 
            if (!isCreator && !m.key.fromMe) throw mess.owner
        m.reply(`╭─➤ *Menu*
│       ❑  *Virtex*
| ${prefix}sendvirtex
| ${prefix}virushantu
| ${prefix}virush
╰────────────────❋ཻུ۪۪⸙`)
        break
	    case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'sendvirtex':
                if (!isCreator) throw mess.owner
                m.reply(`${ngazap(prefix)}`)
                m.reply(`${emoji2(prefix)}`)
                m.reply(`${virtex(prefix)}`)
                m.reply(`${virtex2(prefix)}`)
                m.reply(`${virtex3(prefix)}`)
                m.reply(`${virtex4(prefix)}`)
                m.reply(`${virtex5(prefix)}`)
                m.reply(`${virtex6(prefix)}`)
                m.reply(`${virtex7(prefix)}`)
                m.reply(`${virtex8(prefix)}`)
                m.reply(`${virtex9(prefix)}`)
                m.reply(`${virtag(prefix)}`)
            break
            case 'virtex2':
                if (!isCreator) throw mess.owner
                m.reply(`${vipi(prefix)}`)
            break
            case 'virtex3':
                if (!isCreator) throw mess.owner
                m.reply(`${bugHole(prefix)}`)
            break
            case 'virtexkorak':
               if (!isCreator) throw mess.owner
               m.reply(`${korak(prefix)}`)
            break
            case 'virushantu':
               if (!isCreator) throw mess.owner
               m.reply(`${typeXrim(prefix)}`)
            break
            case 'virush':
               if (!isCreator) throw mess.owner
               m.reply(`${typeXrim(prefix)}`)
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	    case 'tourl': {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'block': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
                case 'unblock': {
                if (!isCreator) throw mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
			case 'latestnews':{
				
					f = await fetchText(`https://wanz-apik.herokuapp.com/api/news/kumparan?type=Berita&apikey=WanzBotz`)
					hisoka.sendMessage(m.chat, {text: f.result}, {quoted: troli})
					m.reply('Saya lagi malas.')
					break
			}
			
            case 'chat': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
			
            break
			
			case 'hilih': {
				if (!q) return reply ('masukan query')
					dijasjus = await fetchJson(`https://wanz-apik.herokuapp.com/api/other/hilih?kata=${q}&apikey=WanzBotz`)
				hisoka.sendMessage(m.chat, {text: dijasjus.result.result}, {quoted: m})
				break
			}
			
			
				   
			 
	    case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: troli})
                    fs.unlinkSync(ran)
                })
            }
            break
			
			
			
			
			
			
			case 'gimg':{
				if (!q) return m.reply('masukan query!')
					m.reply(`searching google img for ${q}`)
					G = await fetchJson(`https://api.dapuhy.ga/api/search/googleimage?query=${q}&apikey=${apikeyy}`)
				hisoka.sendMessage(m.chat, { image: { url: G.image }, caption: `Hasil Dari ${q}` }, {quoted: m})
				.catch((err) => {
                    for (let x of ownerNumber) {
                        reply(x, `${command.split(prefix)[1]} Error: \n\n` + err)
                    }
                   m.reply(`Maaf, tidak ada hasil google untuk ${q}`)
			})
				break
				
			}
		case 'pinterest': case 'pin': {
                m.reply(mess.wait)
                anu = await pinterest(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: ' Media Url : '+result }, { quoted: troli })
            }
            break
            case 'wallpaper': {
                m.reply(mess.wait)
                anu = await wallpaper(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: ` Title : ${result.title}\n Category : ${result.type}\n Media Url : ${result.image}` }, { quoted: troli })
            }
            break
			case 'iklan': 
var templatetun = proto.Message.fromObject({
                       templateMessage: proto.TemplateMessage.fromObject({
                               hydratedTemplate: {
                                 hydratedContentText: `Mau dibuatin kata-kata ucapan ulang tahun seperti contoh?\nSilakan hubungin owner`,

                                    hydratedButtons: [{
                                        urlButton: {
                                            displayText: 'Contoh Kata-kata',
                                            url: 'https://hbd.ryanputra3.repl.co'
                                        }
                                    }, {
                                        urlButton: {
                                                displayText: 'Hubungi Owner',
                                                url: 'https://wa.me//6289614412045'
                                         
                                         }
                                    }, {
									"quickReplyButton": {
										"displayText": 'Chat Owner',
										"id": "#owner"
									},
									"index": 2
								},
								{
									"quickReplyButton": {
										"displayText": 'Komunitas',
										"id": "#komunitas"
									},
									"index": 3
								},
								{
									"quickReplyButton": {
										"displayText": 'Donasi',
										"id": "#dukung"
									}
                     }]
                                }
                            })
                        })
var p = generateWAMessageFromContent(from, templatetun, {})
                        await hisoka.relayMessage(from, p.message, { messageId: p.key.id });
break
			 case 'lirik':
				   if (!q) return reply('masukan nama lagu!')
					   m.reply('mencari lirik...')
				   var Lirik = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/liriklagu?query=${q}&apikey=sQMpXbHimbTkxGC`)
hisoka.sendMessage(from, {text: Lirik.result}, {quoted: m})
break
            case 'dukung':
                m.reply(`╭─➤ Zerone Bot
                │       ❑  Thanks To
		| - Tuhan Yang Maha Esa
                │ - Hisoka Morou
                │ - Ikan MD
		| - Penyedia Api
		| - Yanz Zerone
                ╰────────────────❋ཻུ۪۪⸙\n*WhastsApp Group : https://chat.whatsapp.com/H0MF4etPyC66WIwWuppuMl*`)
break
            case 'komunitas':
               m.reply(`╭─➤ Zerone Bot
                │       ❑  Thanks To
		| - Tuhan Yang Maha Esa
                │ - Hisoka Morou
                │ - Ikan MD
		| - Penyedia Api
		| - Yanz Zerone
                ╰────────────────❋ཻུ۪۪⸙\n*WhastsApp Group : https://chat.whatsapp.com/H0MF4etPyC66WIwWuppuMl*`)
break
            case 'wikimedia': {
                m.reply(mess.wait)
                anu = wikimedia(q)
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: ` Title : ${result.title}\n Source : ${result.source}\n Media Url : ${result.image}` }, { quoted: troli })
            }
            break
            case 'porno': case 'porn': case 'bokep': {
 m.reply('Bokeppp tross')
			}
            break
            case 'hentai': {
                m.reply('Bokeppp tross')
				/*
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `🐟 Title : ${result.title}\n🐟 Category : ${result.category}\n🐟 Mimetype : ${result.type}\n🐟 Views : ${result.views_count}\n🐟 Shares : ${result.share_count}\n🐟 Source : ${result.link}\n🐟 Media Url : ${result.video_1}` }, { quoted: troli })
          */
		  }
            break
            case 'quotesanime': case 'quoteanime': {
                m.reply(mess.wait)
                anu = await quotesAnime()
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { text: `~_${result.quotes}\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}` })
            }
            break
            case 'public': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                hisoka.public = true
                m.reply('*_Succes Change To Public - Mode_*')
            }
            break
            case 'self': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                hisoka.public = false
                m.reply('*_Succes Change To Self - Mode_*')
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Iyyan;;;'
                    + 'FN:Iyyan\n' // full name
                    + 'ORG:Owner - Iyyan;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=62896714412045:+62 896-1441-2045\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                hisoka.sendMessage(m.chat, { contacts: { displayName: 'Owner - Bot', contacts: [{ vcard }] } }, { quoted: troli })
            }
            break
			case 'kick': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove')
				m.reply(`Sukses kick ${users}`)
				}
				break
			case 'add': {
                if (!isCreator && !m.key.fromMe) throw mess.owner
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'add')
				m.reply(`sukses add ${users}`)
				
				}
				break
			case 'promote': {
				  if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote')
				m.reply('sukses promote!')
				}
				break
			case 'demote': {
				 if (!isGroupAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
  		if (!m.isGroup) return m.reply(mess.group)
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote')
				m.reply('sukses demote!')
				}
				break
				
            case 'eval': {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
			case 'malingpp': {
         if (!m.quoted) return m.reply('Balas target yg ingin di maling pp nya!')
        anu = await hisoka.profilePictureUrl(m.quoted.sender, 'image')
        hisoka.sendMessage(from, { image: { url: anu, caption: 'Maling pp', quoted: troli}})
       }
break
			
           case 'loli': 
           case 'neko': 
              await m.reply(('Loading..'))
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              await sendFileFromUrl(from,loli.url,`Ni ${pushname} ${command} nya`,m)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${command} Error: \n\n` + err)
                    }
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi'())
                })
		break
          case 'waifu': 
          case 'husbu':
          case 'shinobu': 
          case 'megumin': 
          case 'bully': 
          case 'cuddle': 
          case 'cry': 
          case 'hug': 
          case 'awoo': 
          case 'kiss': 
          case 'lick': 
          case 'pat': 
          case 'smug': 
          case 'bonk': 
          case 'yeet': 
          case 'blush': 
          case 'smile': 
          case 'wave': 
          case 'highfive': 
          case 'handhold': 
          case 'nom': 
          case 'bite': 
          case 'glomp': 
          case 'slap': 
          case 'kill': 
          case 'happy': 
          case 'wink': 
          case 'poke': 
          case 'dance': 
          case 'cringe': 
              await m.reply('Loading..')
              let waifu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
                await sendFileFromUrl(from,waifu.url,`Done`,m)
                .catch((err) => {
                    for (let x of ownerNumber) {
                        sendMess(x, `${prefix+command} Error: \n\n` + err)
                    }
                    m.reply('Sedang Error !! Coba Beberapa Saat Lagi')
                })
		break
                            
                  
            /*case 'tes': case 'menu': case 'help': case '?': {
                anu = `
┌──⭓ *Group Menu*
│
│🐟 ${prefix}linkgroup
│
└───────⭓

┌──⭓ *Search Menu*
│
│🐟 ${prefix}pinterest
│🐟 ${prefix}wallpaper
│🐟 ${prefix}wikimedia
│
└───────⭓

┌──⭓ *Random Menu*
│
│🐟 ${prefix}quotesanime
│
└───────⭓

┌──⭓ *Main Menu*
│
│🐟 ${prefix}ping
│🐟 ${prefix}owner
│🐟 ${prefix}menu
│🐟 ${prefix}delete
│
└───────⭓

┌──⭓ *Owner Menu*
│
│🐟 ${prefix}chat [option]
│
└───────⭓
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisokam.mp4') }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break*/
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator && !m.key.fromMe) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator && !m.key.fromMe) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator && !m.key.fromMe) return
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
      if (budy.includes('Zeron')) {  
hisoka.sendMessage(m.chat, {text: 'Hmmm....'}, {quoted: peksaya})
	  }	  

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
