const keybase = require('keybase-bot');
const Logger = require('./utils/Logger.js');

(async () => {
    const bot = new keybase();
    // await bot.init(credentials.username, credentials.paperkey);
})().catch((err) => Logger.handleError(err));
