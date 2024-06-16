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
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_03_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICA4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM3LFxuICAgICAgICAzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDI4LFxuICAgICAgICA2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMixcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDMyLFxuICAgICAgICA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODksXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkF1NDNJa0pHRkVCVzNCTWNNZ0Q0eStoUU1MdEl1Z25IS3hoaUpvWHFNSHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA2MDAyOTg1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTA4Mjk5N0RCQjA2NDlFMEY3NTJBNUY1RkY0MEVEMjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NTI4NjMxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA2MDAyOTg1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEFDOEZCOUEzQzc2RDM5QzdDQjlGRENGMDYwMDBGRTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NTI4NjMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlYwMUlYMjRNU1ZxRkF3LTBkVmRUZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWIxM2U5MWUtZjYzOS00MGQ3LWE5YzYtYzc1MDg5ZjBhNGRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMjQ5LFxuICAgICAgMTU5LFxuICAgICAgNjQsXG4gICAgICAyMTIsXG4gICAgICA4LFxuICAgICAgMjM4LFxuICAgICAgMTksXG4gICAgICA0MCxcbiAgICAgIDczLFxuICAgICAgMTQ2LFxuICAgICAgMjI0LFxuICAgICAgMTEyLFxuICAgICAgMTY0LFxuICAgICAgMTM1LFxuICAgICAgMTYzLFxuICAgICAgMTI4LFxuICAgICAgMjA3LFxuICAgICAgMjIzLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDE5OSxcbiAgICAgIDIxNSxcbiAgICAgIDE2MyxcbiAgICAgIDM2LFxuICAgICAgMjUwLFxuICAgICAgMTQyLFxuICAgICAgMjYsXG4gICAgICAxMjgsXG4gICAgICAxNzYsXG4gICAgICAyMTUsXG4gICAgICAxNDEsXG4gICAgICAxOTQsXG4gICAgICAzMSxcbiAgICAgIDE0MixcbiAgICAgIDIxMCxcbiAgICAgIDEsXG4gICAgICA4OCxcbiAgICAgIDE4NyxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGMlNDMUJHVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2MDAyOTg1MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDg2NTM2MTY0NTU3MDQ6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJ+8J+njVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05lcXl0OENFTzdVdXJNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT0tMY0ROWUdFZ0tEcmJnSXJydnN3WklwU092SDAxRUp3SnR0MW11eXcyaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGdEdTOFhGQkd6SFh1VWs1eUNKSXY2QWpPRWlWdjNoS0V0aXlzYUp5cndUSG1HK211MFg1WGtIOVUxT1gySDFENDdsdm9NYmFDdkxFem9DLzRjSWFCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5cHI1bDRQV05DM1RGUDZvbXZ3QkxVdnZYcDNSU0dwL0N5eU0zKzBVNmE3SXRYVHRKZ0VQQyt0MUNHNkFzTnZ6YmJtK0tzWTZ3ZDl0enFOcEFPdWRnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYwMDI5ODUwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTI4NjI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0FVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDQVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPZEJVYkJ5cktjR1FxVjBIeVNNL2F6M0hRNjVHSjYvVUUxL3FXMGlkdmFrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjczNzMxODIzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3NzA2ODA3NTA2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
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
