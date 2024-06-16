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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_10_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgMjA4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE5LFxuICAgICAgICA2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDU2LFxuICAgICAgICA3NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSGhhazJDRTl5STl4Y1p2RTBXS0x5VThpSGNURWMyY3EwaEJjU2MwaGJMRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMzLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMzLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR29CenpBTXZSY21xN2g2aHJLZUg3Z1wiLFxuICBcInBob25lSWRcIjogXCJlMDhhMzIyZC0zMmRhLTQ5ZTUtYmEyMy05MzQ0NDM1YjUzMzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgMTg2LFxuICAgICAgMTgsXG4gICAgICAxMTAsXG4gICAgICAxNDksXG4gICAgICAxMTQsXG4gICAgICAyNDUsXG4gICAgICAxNjcsXG4gICAgICA4NyxcbiAgICAgIDI2LFxuICAgICAgMSxcbiAgICAgIDE3LFxuICAgICAgODMsXG4gICAgICAxNjUsXG4gICAgICAyMixcbiAgICAgIDE0MyxcbiAgICAgIDgwLFxuICAgICAgMjA3LFxuICAgICAgMjMsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgMjEwLFxuICAgICAgMjA3LFxuICAgICAgMzcsXG4gICAgICAxODUsXG4gICAgICAxNzEsXG4gICAgICA5OCxcbiAgICAgIDEzNSxcbiAgICAgIDExOCxcbiAgICAgIDIwNSxcbiAgICAgIDIwNyxcbiAgICAgIDE0MSxcbiAgICAgIDExMyxcbiAgICAgIDk4LFxuICAgICAgMTAzLFxuICAgICAgMTM1LFxuICAgICAgMjUzLFxuICAgICAgMjQwLFxuICAgICAgMTYsXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKem41cDhIRUlqMHVyTUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9Rd0FvM05ObkR4bVlGUnJsakp0cVZaNmZ2MkM3YjRyNFdqNGhoU0cvU2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibUtsbGh3WWJZTW1pWUhpV2xkU2podXhvMmdPYmNDTzYzdFNEaUw1TU9SVFhZak9lZGIrSThlMWU5ZEVUMTZITXhta1RMVGpLTVlES1U1NktmOWFwakE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRGVDSWVvVjhvMDFSUlB2a1dKK3BNcURZSVpObHg2S0ZHdURwWnZGdG5VUXE0ZjNWOEdFK0NwOGZ1MkwzNWtNdVNGZTZJV29wN0h2cVM4Qi96QXdPRGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU0MzU4NjMwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDgxNzM1MzI4Njg4MzM6MTZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU0MzU4NjMwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg1MzI2MjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOUHJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5Qci5qc29uIjogIntcImtleURhdGFcIjpcIit2WXpOQjUyMk1YQjllWDlHc2ZsNDU0WmJpUzUyUlNObkZET1BjLzJoMlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0NTc0NDI4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4MzA3MjIyNzU4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlB0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRGU3NUQvNkpST1QvUzZLdGk5aEdxRllBRFh6ZkUxeHo0WmN5ZGlGRkJVST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ1NzQ0Mjg0LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMiwxLDMsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NTMxNzgyODk1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTlB2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMEFLVklKdithM2hMWmY2RmFTOHc0Q1FhR1VBTXpzSlZsd0FVeGhyZnYzbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ1NzQ0Mjg0LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMywxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODUzMjU1ODY3OFwifSIKfQ=="  // PUT your SESSION_ID 


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
