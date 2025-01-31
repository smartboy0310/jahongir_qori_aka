const { Composer } = require('telegraf');
const Markup = require('telegraf/markup');

const composer = new Composer();

composer.command('start', async (ctx) => {
	
			await ctx.replyWithHTML(
			`<b>Assalomu alaykum. ${ctx.from.first_name}, Xush kelibsiz</b>\n<b>🇺🇿 Imloni tanlang 🇺🇿 </b>
		 `,
				Markup.inlineKeyboard([
					Markup.callbackButton("🟢 Lotin", 'uz'),
					Markup.callbackButton('🔵 Крилл', 'oz')
				]).extra(),
			);
		
});

module.exports = composer;
