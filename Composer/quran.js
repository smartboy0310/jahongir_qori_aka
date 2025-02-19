const { Composer } = require('telegraf')
const quranKeyBoard = require('../data/quransKeyBoard');
const composer = new Composer()

composer.hears("📜 Qur'on tilovatlari", async (ctx) => {
	try {
		await ctx.replyWithHTML(`<b> Qur'on tilovatlaridan birini tanlang... </b>`,
			{
				reply_markup: JSON.stringify({
					keyboard: quranKeyBoard.uz_keyboard,
					resize_keyboard: true,
				}),
			},
		);
	} catch (error) {
		console.log(error);
	}
});

composer.hears('📜 Қуръон тиловатлари', async (ctx) => {
	try {
		await ctx.replyWithHTML(`<b> Қуръон тиловатларидан бирини танланг... </b>`,
			{
				reply_markup: JSON.stringify({
					keyboard: quranKeyBoard.oz_keyboard,
					resize_keyboard: true,
				}),
			},
		);
	} catch (error) {
		console.log(error);
	}
});



module.exports = composer