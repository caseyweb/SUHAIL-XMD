const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/caseyweb/";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐌𝐃" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_28_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDgzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDYxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICA5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR1U0clZaVW9aR1doWlRFVHlFaDhyYjJ1Z3I4ZDRiQytHUVJqMnVNZ3ZmND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNnBralVZcTNScC1ROVpLVnZJaHRRZ1wiLFxuICBcInBob25lSWRcIjogXCIxYWZjNDJkYS1lN2M1LTRiNTYtODU5NC1mOGI0NmI0NmE0MmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMTM3LFxuICAgICAgMjQ1LFxuICAgICAgMjQxLFxuICAgICAgODUsXG4gICAgICAxNjQsXG4gICAgICA3NCxcbiAgICAgIDI0NCxcbiAgICAgIDEyNCxcbiAgICAgIDExMCxcbiAgICAgIDIyNSxcbiAgICAgIDgzLFxuICAgICAgMjAyLFxuICAgICAgMTAsXG4gICAgICA5MixcbiAgICAgIDEzMyxcbiAgICAgIDExMyxcbiAgICAgIDI0OSxcbiAgICAgIDUxLFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgMTE1LFxuICAgICAgMjA2LFxuICAgICAgMTg1LFxuICAgICAgODMsXG4gICAgICA2NCxcbiAgICAgIDg2LFxuICAgICAgMTgyLFxuICAgICAgMTM5LFxuICAgICAgMjQsXG4gICAgICAyMjYsXG4gICAgICAyMDYsXG4gICAgICAzLFxuICAgICAgMTU4LFxuICAgICAgMTQ2LFxuICAgICAgODQsXG4gICAgICA2NCxcbiAgICAgIDIxMyxcbiAgICAgIDE3MCxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1JLQUYxUVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExMjE5MjExOTo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkILNhsy68J2QgM2GzLrwnZCSzYbMuvCdkITNhsy68J2QmM2GzLrwnZCRzYbMuvCdkIfNhsy68J2Qjs2GzLrwnZCDzYbMuvCdkITNhsy68J2Qks2GzLpcIixcbiAgICBcImxpZFwiOiBcIjIwNzI4MDE1NTE1NjU4OjY3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xXUDFac0JFTWZxL3JjR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUmZMWHVkb05xZDd3VFpFT1VzMWhGbTBRWnR4dTRabU00RlJsTTQzcFBncz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFTlVQN3I0VTNqdWE4L2RyUTg3RmFNYXFPR3RkdDA1M3A0ZkM0cFc0UnZWcnI4ZTJxdFRlaWcwMkNiRkxPRnBDOEUxZm41ektuQ09seXlYaHJ6TmhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwK1IyNnFFcWNkOHljYzdBaEVvZDFXak9OSWMvOStOVjZRVXc0UHFOSDJzVzJTK1lWczVheHY4RUJNWGRPS3F5bU1jTGZlRHlwN3BYRW42Vm50dExCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTIxOTIxMTk6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgwMzQxMjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJYWVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlhZS5qc29uIjogIntcImtleURhdGFcIjpcIlRPazVyc0cvdzVBUDVGcFFUcExEemN0RVZHYWJodXpWbVQ1TmxvRFlDR0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzI2NDUzMTczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐌𝐃",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
