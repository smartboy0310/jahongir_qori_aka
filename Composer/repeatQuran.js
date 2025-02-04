const { Composer } = require('telegraf')
const composer = new Composer()

composer.hears("🔁 Qur'on tilovati (Takror)", async (ctx) => {
    await ctx.replyWithHTML(`<b> Hozirda takroriy o‘qilgan tivolatlar mavjud emas... </b>`);
});

composer.hears('🔁 Қуръон тиловати (Такрор)', async (ctx) => {
    await ctx.replyWithHTML(`<b> Ҳозирда такрорий ўқилган тиволатлар мавжуд эмас... </b>`)

});



module.exports = composer