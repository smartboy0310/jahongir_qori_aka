const { Telegraf, session } = require('telegraf');
require('dotenv').config();

const rateLimit = require('telegraf-ratelimit')


const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);

const Stage = require('telegraf/stage');

const {
	
} = require('./Scene');

const stage = new Stage([
	
]);

bot.use(session());
bot.use(stage.middleware());
bot.use(rateLimit())

bot.use(require('./Composer/start'));
bot.use(require('./Composer/mainKeyboard'));
bot.use(require('./Composer/editLang'));
bot.use(require('./Composer/back'));
bot.use(require('./Composer/suras'))
bot.use(require('./Composer/checkSuras'))
bot.use(require('./Composer/checkAlifYo'))
bot.use(require('./Composer/alifYo'))
bot.use(require('./Composer/checkTajweed'))
bot.use(require('./Composer/tajweed'))
bot.startPolling()
bot.launch().then(() => {
	console.log(`bot started on @${bot.options.username}`);
});
