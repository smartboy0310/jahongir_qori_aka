const {Composer} = require('telegraf')

const composer = new Composer()
const mainKeyBoard = require('../data/mainKeyBoard');

composer.hears('◀️ Qaytish', async (ctx) => {
	await ctx.replyWithHTML(
		`
			<b>Asosiy sahifa</b>
		`,
		{
			reply_markup: JSON.stringify({
            keyboard: mainKeyBoard.uz_keyboard,
         }),
		},
	);
});

composer.hears('◀️ Қайтиш', async (ctx) => {
	await ctx.replyWithHTML(
		`
			<b>Асосий саҳифа</b>
		`,
		{
			reply_markup: JSON.stringify({
            keyboard: mainKeyBoard.oz_keyboard,
         }),
		},
	);
});


module.exports = composer



