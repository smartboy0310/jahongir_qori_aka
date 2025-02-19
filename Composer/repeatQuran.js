const { Composer } = require('telegraf')
const quranRepeatKeyBoard = require('../data/quranRepeatKeyBoard');
const composer = new Composer()

composer.hears("🔁 Qur'on tilovati (Takror)", async (ctx) => {
    try {
        await ctx.replyWithHTML(`<b> Qur'on tilovati (Takror) </b>`,
            {
                reply_markup: JSON.stringify({
                    keyboard: quranRepeatKeyBoard.uz_suras,
                    resize_keyboard: true,
                }),
            },
        );
    } catch (error) {
        console.log(error);
    }
});
composer.hears('🔁 Қуръон тиловати (Такрор)', async (ctx) => {
    try {
        await ctx.replyWithHTML(`<b> Қуръон тиловати (Такрор) </b>`,
            {
                reply_markup: JSON.stringify({
                    keyboard: quranRepeatKeyBoard.oz_suras,
                    resize_keyboard: true,
                }),
            },
        );
    } catch (error) {
        console.log(error);
    }
});

module.exports = composer