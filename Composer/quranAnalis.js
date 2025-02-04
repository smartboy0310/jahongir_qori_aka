const {Composer} = require('telegraf')
const quranAnalisKeyBoard = require('../data/quranAnalisKeyBoard');
const composer = new Composer()

composer.hears("✅ Qur'on tilovati (Tahlil)", async (ctx) => {
	await ctx.replyWithHTML(`<b> Qur'on tilovati (Tahlil) </b>`,
		{
			reply_markup: JSON.stringify({
				keyboard: quranAnalisKeyBoard.uz_suras,
				resize_keyboard: true,
			}),
		},
	);
});

composer.hears('✅ Қуръон тиловати (Таҳлил)', async (ctx) => {
	await ctx.replyWithHTML(`<b> Қуръон тиловати (Таҳлил) </b>`,
		{
			reply_markup: JSON.stringify({
				keyboard: quranAnalisKeyBoard.oz_suras,
				resize_keyboard: true,
			}),
		},
	);
});



module.exports = composer