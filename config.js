const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_45_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI5LFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQSsyYUNzUUJvbFpxVnN1TE5xVHVNek5Dak1HRlFyTy9rY1BRaG5odjhTND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibGt2dUhsYWZSUVNyQnR5LVNYSERTQVwiLFxuICBcInBob25lSWRcIjogXCI0MzFmMDAwNy00ZWUwLTQ4NTktOTU1NC0wMDI0ODJiMWM3NWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAyMTQsXG4gICAgICAyMDIsXG4gICAgICAxNzIsXG4gICAgICAxMzcsXG4gICAgICAyMTIsXG4gICAgICAyMzcsXG4gICAgICAxNTQsXG4gICAgICA2OCxcbiAgICAgIDk3LFxuICAgICAgMTQ5LFxuICAgICAgMTc2LFxuICAgICAgMCxcbiAgICAgIDIzMCxcbiAgICAgIDEyMixcbiAgICAgIDE1OSxcbiAgICAgIDE0LFxuICAgICAgNjksXG4gICAgICA4NSxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDUwLFxuICAgICAgMjcsXG4gICAgICAxNTUsXG4gICAgICAyMTAsXG4gICAgICAyMzIsXG4gICAgICAxODYsXG4gICAgICA5NCxcbiAgICAgIDI0NCxcbiAgICAgIDE1MCxcbiAgICAgIDIxLFxuICAgICAgMTQwLFxuICAgICAgNTIsXG4gICAgICAyMjEsXG4gICAgICAxNjUsXG4gICAgICAxMjEsXG4gICAgICA0NSxcbiAgICAgIDIyMSxcbiAgICAgIDExNixcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnpuNXA4SEVKZm91ck1HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvUXdBbzNOTm5EeG1ZRlJybGpKdHFWWjZmdjJDN2I0cjRXajRoaFNHL1NrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldLUjk3K3pRVE42dDlZNXI3bWRRMlVXZHh1SzZSZ2p3NDVxZVM3RFlyZVZBTFpZRU5OTWd0U0Vla2lrQlhQdVF0bStLSzR5dkpFeHVqOGdDUW1CdGd3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkllK0tuZ2p2dFAveVplQmRIT3puRnBuMGZDdS9UWFNtRlhFUUNSVk95NmtoRDMrVDY1RUgvQkk3K0NkZ1N2TVQ3b0VOTXpKMFNkeTgyZmU0a0NOZWpBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NDM1ODYzMDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA4MTczNTMyODY4ODMzOjE1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1NDM1ODYzMDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTMxMDk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTlByXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrdll6TkI1MjJNWEI5ZVg5R3NmbDQ1NFpiaVM1MlJTTm5GRE9QYy8yaDJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDU3NDQyODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODMwNzIyMjc1OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
