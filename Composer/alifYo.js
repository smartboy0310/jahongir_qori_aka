const { Composer } = require('telegraf')
const alifYo = require('../data/alifYoKeyBoard');
const composer = new Composer()

composer.hears("🔖 Alif-Yo", async (ctx) => {
	try {
		await ctx.replyWithHTML(
			`
				<b> Darslardan birini tanlang... </b>
			`,
			{
				reply_markup: JSON.stringify({
					keyboard: alifYo.uz_alif_yo,
					resize_keyboard: true,
				}),
			},
		);
	} catch (error) {
		console.log(error)
	}
});

composer.hears('🔖 Алиф-Йо', async (ctx) => {
	try {
		await ctx.replyWithHTML(
			`
				<b> Дарслардан бирини танланг... </b>
			`,
			{
				reply_markup: JSON.stringify({
					keyboard: alifYo.oz_alif_yo,
					resize_keyboard: true,
				}),
			},
		);
	} catch (error) {
		console.log(error)
	}
});



module.exports = composer