const { Composer } = require('telegraf');
const Markup = require('telegraf/markup');

const mainKeyBoard = require('../data/mainKeyBoard.js');




const composer = new Composer();

composer.on('callback_query', async (ctx) => {
	try {
		lang = ctx.update.callback_query.data;
		if (lang == 'uz') {
			await ctx.replyWithHTML(
				`
			<b>Quyidagilardan birini tanlang</b>
		`,
				Markup.keyboard(					
					mainKeyBoard.uz_keyboard				
				)
					.oneTime()
					.resize()
					.extra(),
			);
		}

		if (lang == 'oz') {
			await ctx.replyWithHTML(
				`
				<b>Қуйидагилардан бирини танланг</b>
			`,
				Markup.keyboard(					
					mainKeyBoard.oz_keyboard
				)
					.oneTime()
					.resize()
					.extra(),
			);
		}

	} catch (e) {
		console.error('cant handle start command', e);
	}
});


module.exports = composer;
