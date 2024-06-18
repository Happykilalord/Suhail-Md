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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_53_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4LFxuICAgICAgICAyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NixcbiAgICAgICAgMTQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVFUDFEeW5GbW1ybXp6aFBKU1RaeHlTczIrTndSVm1lQ3pDQW5IVmhNdDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjA2bDdKaGVSUmpLaHZ4ZFpYN2k1aWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTcxNmY5MDItMDdkZC00ZDIyLTk0N2UtMzEwZTZkNjkwNjcwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDE3OCxcbiAgICAgIDEyNyxcbiAgICAgIDE5NyxcbiAgICAgIDE1OCxcbiAgICAgIDIzMixcbiAgICAgIDg1LFxuICAgICAgMjAwLFxuICAgICAgNjksXG4gICAgICAyMDksXG4gICAgICA5MCxcbiAgICAgIDM2LFxuICAgICAgMjAzLFxuICAgICAgMjI0LFxuICAgICAgNTQsXG4gICAgICA4OCxcbiAgICAgIDEzNixcbiAgICAgIDEsXG4gICAgICAyNCxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDE3MyxcbiAgICAgIDExNyxcbiAgICAgIDIyMCxcbiAgICAgIDIwLFxuICAgICAgNTgsXG4gICAgICAxMSxcbiAgICAgIDExOCxcbiAgICAgIDQyLFxuICAgICAgNzMsXG4gICAgICA1NSxcbiAgICAgIDM1LFxuICAgICAgMTMyLFxuICAgICAgMjEwLFxuICAgICAgMTgsXG4gICAgICAyMDIsXG4gICAgICAyMjIsXG4gICAgICAxMTUsXG4gICAgICAxMSxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6bjVwOEhFUHVTeDdNR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib1F3QW8zTk5uRHhtWUZScmxqSnRxVlo2ZnYyQzdiNHI0V2o0aGhTRy9Taz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1RHJWT2FIOFV1NFVQTEczS0xHbXlKc3EwN1NMd3F6d21aalRvaDR1cXl6dTFrdG9Gbkg1bEhPelAwWmVPMkFQWlkwTHRUZWlqMVg5QnBSTmFSU2RnZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrSnlnVXd4a1EyY1B6emVDTWxCR3B2U1MyTG8xNjl5NlpjYUJZSWVOSEs2MHdIazh2eWhlbXVQcU8wVS9FMlowQ3ZtNitvazFtdTBBQnYwSHA5R3loQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTQzNTg2MzA6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwODE3MzUzMjg2ODgzMzoxN0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTQzNTg2MzA6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODczMzE4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5QdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlByLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK3ZZek5CNTIyTVhCOWVYOUdzZmw0NTRaYmlTNTJSU05uRkRPUGMvMmgyUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ1NzQ0Mjg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzMDcyMjI3NThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEZTc1RC82SlJPVC9TNkt0aTloR3FGWUFEWHpmRTF4ejRaY3lkaUZGQlVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDU3NDQyODQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1MzE3ODI4OTVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOUHYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwQUtWSUp2K2EzaExaZjZGYVM4dzRDUWFHVUFNenNKVmx3QVV4aHJmdjNvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDU3NDQyODQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDMsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NTMyNTU4Njc4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlB4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicUxPcklCQkU5S0tjRU5HZzVNb2V4REx3UGliM1FNd0h4TUhaVDRHak1TRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ1NzQ0Mjg0LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMSw0LDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUzMzcxMzUwMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5QeS5qc29uIjogIntcImtleURhdGFcIjpcIklvUURPTTB5V0xDV0Jac2Y4S2Qxa2xra0gwV0tzUU9nbFdvZWVUYUtoZkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0NTc0NDI4NCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4NTM0NDcwNTU1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
