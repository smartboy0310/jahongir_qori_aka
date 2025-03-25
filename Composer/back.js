const { Composer } = require('telegraf')

const composer = new Composer()
const mainKeyBoard = require('../data/mainKeyBoard');

composer.hears('◀️ Qaytish', async (ctx) => {
	try {
		await ctx.replyWithHTML(
			`
				<b>Asosiy sahifa</b>
			`,
			{
				reply_markup: JSON.stringify({
					keyboard: mainKeyBoard.uz_keyboard,
					resize_keyboard: true
					
				}),
			},
		);
	} catch (error) {
		console.log(error)
	}
});

composer.hears('◀️ Қайтиш', async (ctx) => {
	try {
		await ctx.replyWithHTML(
			`
				<b>Асосий саҳифа</b>
			`,
			{
				reply_markup: JSON.stringify({
					keyboard: mainKeyBoard.oz_keyboard,
					resize_keyboard: true
				}),
			},
		);
	} catch (error) {
		console.log(error)
	}
});


module.exports = composer



