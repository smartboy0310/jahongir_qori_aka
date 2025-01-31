const {Composer} = require('telegraf');
const Markup = require('telegraf/markup');
const mainKeyBoard = require('../data/mainKeyBoard');
const composer = new Composer()

composer.hears("🔄 Imloni o'zgartirish", async (ctx) => {
	await ctx.replyWithHTML(
		`
			<b> Imloni tanlang 🇺🇿 </b>
		`,
		{
			reply_markup: JSON.stringify({
				keyboard: [
					[
						{
							text: "🟢 Lotin",
							callback_data: 'uz',
						},
						{
							text: "🔵 Крилл",
							callback_data: 'oz',
						}
					],
				],
				resize_keyboard: true,
			}),
		},
	);
});

composer.hears('🔄 Имлони ўзгартириш', async (ctx) => {
	await ctx.replyWithHTML(
		`
			<b> Имлони танланг 🇺🇿 </b>
		`,
		{
			reply_markup: JSON.stringify({
				keyboard: [
					[
						{
							text: "🟢 Lotin",
							callback_data: 'uz',
						},
						{
							text: "🔵 Крилл",
							callback_data: 'oz',
						}
					],
				],
				resize_keyboard: true,
			}),
		},
	);
});

composer.hears("🟢 Lotin", async (ctx) => {
	ctx.lang = 'uz';
	await ctx.replyWithHTML(
		`
		<b>Imlo o'zgartirildi</b>
		`,
		Markup.keyboard(					
			mainKeyBoard.uz_keyboard		
	)
		.oneTime()
		.resize()
		.extra(),
	);
});

composer.hears("🔵 Крилл", async (ctx) => {
	ctx.lang = 'en';
	await ctx.replyWithHTML(
		`
		<b>Имло ўзгартирилди</b>
		`,
		Markup.keyboard(
			mainKeyBoard.oz_keyboard			
	)
		.oneTime()
		.resize()
		.extra(),
	);
});

module.exports = composer



