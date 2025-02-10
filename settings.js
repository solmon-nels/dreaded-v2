/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0l1V2RvdTJ5bEE3Z0FiZmUvaVk5K1hYc1Q4YWNpOW1WR0dibUo0Q2FFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjlxcmhYOGdlajFCWFVWeHZHNFVHeDM0ODI4elhhclVKeTJwMFZxaDdHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3REkwUlkwVytTRUQraGdnblBMMno3emMxT2dQR1JFdTcrSmJQSTdlTEU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEZm1ibFVEMndKdE04SmFUZjZrUngvRC9zMW9paU9WMkgyaVBsbmxtTWd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1EOUY1TEt6ZjJZaHF2eXM5Zlh6M3dyOFF3Z0hNVkJVcU5USUszN1A4RVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVBM3N1YkVaZGtpelNCdTlPa0lhd3B1U081dHNtSmJwengxb1p6ZDViajQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0RUQTUwZCtYTUFsbTAwcFBxM3h3NDdITDFPSDVYUkVFTUZNdE12RHBWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakJnaUhBOEM2VHFVck8xZ0VCbE9HYmJxVXpzUFdFQWhOVGExVzhGL1FUOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLYS81aUpEbkkxaTJqSlpsdVIzaVZ4MGhSSG9aWkpmeXNTT2xyOEw3R2lhMVlRWllrWndBZ3QvM0piZDFkZksyeG9sNE41d1BSdW5UcUxpTlJzbkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJETHhNejBCTldYRlVlSEEvUXJhYTFyWjlSMFJuQ0E1OC9pMnVhSm5YOU40PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc1MzA0MDA1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDN0EwQTYwQUVEMjU5N0M3NUNGNEM3MkI3RDEwOEZCNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5MjE5ODQwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTY3NTMwNDAwNThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjgwNDYwQThDMTgxRkU2RkFDQkI5MzU4QjdFM0JCMDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTIxOTg1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWGhOd1BCSDZTNXFoLXo1WGV0ejA1USIsInBob25lSWQiOiJhOGI1NWY5YS03ZWIwLTQxNmItODFiNS1lNTU3N2FhODc0YWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVNoWDEzeXNYQ3dTQ1FnazVBMU03WjR3MzUwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdRVmJwY2lHWDdQL0FIaGliWFA0UGdZTldGcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2MUpHUkYxSiIsIm1lIjp7ImlkIjoiMjU2NzUzMDQwMDU4Ojg1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik5laWxzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKNkY0T3dGRU9MR3FiMEdHREFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2NjBMN1RUcFdoS0xOZzZ2dTEyTXRaOHpyL0R1czcyNTdSbFFBeUhLU1RnPSIsImFjY291bnRTaWduYXR1cmUiOiJLYll2R2JEbnp2REFUaHA5L3VEaW9LODI2UWdSQ2syTHE2RTlLaHVZM0VtbE5yT0lZTUQzU0tVcHRwQ0g1RVp1NFdsMnJ6NTB1TG90TXZoeHJtRWpCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicWZGWktzaTU3NE00WVBTcGtoc09rVXZDSmhZeGJBSmlhSHZBNGhXRWcyRHBjaiszRVBScXAwU2hLa1BDaEdDSDltNGZPZ0h2bEZHREJTeHZka25TQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTY3NTMwNDAwNTg6ODVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZXV0QyswMDZWb1NpellPcjd0ZGpMV2ZNNi93N3JPOXVlMFpVQU1oeWtrNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTIxOTgyMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEWU8ifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254114018035';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
