const {Composer} = require('telegraf')
const tajweed = require('../data/tajweedKeyBoard')
const composer = new Composer()

composer.hears("✍️ Tajvid darslari", async (ctx) => {
	await ctx.replyWithHTML(
		`
			<b> Darslardan birini tanlang... </b>
		`,
		{
			reply_markup: JSON.stringify({
				keyboard: tajweed.uz_tajweed,
				resize_keyboard: true,
			}),
		},
	);
});

composer.hears('✍️ Тажвид дарслари', async (ctx) => {
	await ctx.replyWithHTML(
		`
			<b> Дарслардан бирини танланг... </b>
		`,
		{
			reply_markup: JSON.stringify({
				keyboard: tajweed.oz_tajweed,
				resize_keyboard: true,
			}),
		},
	);
});



module.exports = composer