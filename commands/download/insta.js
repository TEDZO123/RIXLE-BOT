module.exports = {
 name: ['ig'],
 type: ['download'],
 description: "untuk download ig",
 utilsation: '#ig link type',
 
async execute(m) {
let { args, conn } = data
let { igvid, igfoto } = require("../../Lib/scrape")
if(!args[0]) return m.reply("Link?")
if (args[1] === 'foto') {
await igfoto(args[0]).then(res => {
 conn.sendFile(m.chat, res.link, null, null, m)
})
}
if (args[1] === 'video') {
await igvideo(args[0]).then(res => {
 conn.sendFile(m.chat, res.link, null, null, m)
})
}
}
}
