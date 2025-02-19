const { Composer } = require('telegraf')
const tajweed = require('../data/tajweedKeyBoard')
const composer = new Composer()

composer.hears("✍️ Tajvid darslari", async (ctx) => {
	try {
		await ctx.replyWithHTML(`<b> Darslardan birini tanlang... </b>`,
			{
				reply_markup: JSON.stringify({
					keyboard: tajweed.uz_tajweed,
					resize_keyboard: true,
				}),
			},
		);
	} catch (error) {
		console.log(error);
	}
});

composer.hears('✍️ Тажвид дарслари', async (ctx) => {
	try {
		await ctx.replyWithHTML(`<b> Дарслардан бирини танланг... </b>`,
			{
				reply_markup: JSON.stringify({
					keyboard: tajweed.oz_tajweed,
					resize_keyboard: true,
				}),
			},
		);
	} catch (error) {
		console.log(error);		
	}
});

module.exports = composer