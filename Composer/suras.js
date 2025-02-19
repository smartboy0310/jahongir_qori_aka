const { Composer } = require('telegraf')
const suras = require('../data/surasKeyBoard');
const composer = new Composer()

composer.hears("📜 Qur'on tilovati (Ta'lim uchun)", async (ctx) => {
	try {
		await ctx.replyWithHTML(
			`
				<b> Suralardan birini tanlang... </b>
			`,
			{
				reply_markup: JSON.stringify({
					keyboard: suras.uz_suras,
					resize_keyboard: true,
				}),
			},
		);

	} catch (error) {
		console.log(error);
	}
});

composer.hears('📜 Қуръон тиловати (Таълим учун)', async (ctx) => {
	try {
		await ctx.replyWithHTML(
			`
				<b> Суралардан бирини танланг... </b>
			`,
			{
				reply_markup: JSON.stringify({
					keyboard: suras.oz_suras,
					resize_keyboard: true,
				}),
			},
		);
	} catch (error) {
		console.log(error);
	}
});



module.exports = composer