//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c34a1c34dd74e24981017.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2349020507509";
global.owner = process.env.OWNER_NUMBER || "2349020507509";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhLcDgrNGdiVmdYK1orMHM5bStZTVhDZ21rNTJMbG1xNHZNMmlEa3hHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzhLZ25XU0pRdDhqN25zU25YL29FYzlNVmpvZFdnUVJCRE9LRjU0aVNDST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TGFTK252ZW8zMGRlbUVPWHJQSC9TZDg1akJ1eElEcWJBMXNsSFRoM1hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaRFB6QnBsWEJIc1NCdjFtZE5YcENVQ1hoMXpXV09zcWs3MGIyNXVOQkdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitDOWV6ZzdDRGJhelBGb3Z5VUJWZnJGSEZtTXYzWk9iWVhlRGM0bERtbm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhNRzVCZHpXZFVoc3FZVXdWdzQ5Mnd0eWhuNHRhNUo2UCt3WkRsTEVKalk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkRsL0VjZjZRcHZ6UDRJaVQ0MFFSc2pyNHdzSjkrUmVSVFhPZDFtNlpuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVk1Jb21RMDFYRVdCVVdrdHdacnpaaWZuSzdVTDRFTEVQalpETkJxVE9nUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQzU0ZxaUEvcGYzWFF1SUJmVGFBVnVhNVdMMWFPZkYwMkhBcGVySlo1U0J6Z0xLR2ZKdHJhcUVRQVJ3eEhvOWZmNWNBayt0VEgwVGQ2UXZuWXZPOERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IkcwR3lNTHQvNDdNR1l1OEozVWNiK2lrRS9LbGVrdlErS295VDgzSFlDeDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InV1TzYtam1zU04tSWplTjVVOXpRY2ciLCJwaG9uZUlkIjoiYjA1MTJiM2ItZmNkZi00MjBlLThjODYtMDM1YTg5ZGQ4Y2YwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRHMHpuWmVlTk5zbk84RVJDWlIyNjlUR2l5Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNkQrWnRjTUhDK3gzdzRkV1BqaXlGam5jTGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFFQRDlXN0YiLCJtZSI6eyJpZCI6IjIzNDkwMjA1MDc1MDk6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibXVyaXRhbGFhaG1lZDQwNyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUERkblBJR0VPMzMzYlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWVp1Tm5ZSFpnM3o3ZGptaWliOWNzcjJ1VXJXQ0J4VFRSaEt2UEpwUU1WQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL3lSMXU4d3UyOGI1REp4SDZHK0NTd0VoVTdGMmJ4d2FMSzNybi94R0JHS0dLYWlLaHJ2WHI2cmVwU2hWSFZjMllUWUY3VlNGdmhtdWNQeU9kclN6RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlFIVzVXWVVMSnkyT3VBaThvbDdRL29mL3JITEJqM2Q3TEVyY24zTmNMQ3ZOUjRpUTZZNkFwb1NlMVIwTDRiSDZKcFFTeEFXWGN1bDNLcGE0TDd0cUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAyMDUwNzUwOToyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXR2JqWjJCMllOOCszWTVvb20vWExLOXJsSzFnZ2NVMDBZU3J6eWFVREZRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMzAwODU4fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 AHMED 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏ$$ɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "AHMED 𝗠𝗗",
  botname: process.env.BOT_NAME || "AHMED",
  ownername: process.env.OWNER_NAME || "ᴛᴏOLAɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
