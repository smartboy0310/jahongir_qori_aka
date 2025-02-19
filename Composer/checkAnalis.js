const { Composer } = require('telegraf');

const composer = new Composer()
const analis = require('../data/quranAnalisData')

for (let i = 0; i < analis?.uz_analis.length; i++) {
    composer.hears(analis?.uz_analis[i].text, async (ctx) => {
        try {
            await ctx.replyWithHTML(`<b>${analis?.uz_analis[i].text}</b>`)
            await ctx.replyWithVideo(`${analis?.uz_analis[i].url_video}`).catch(function (error) {
                ctx.replyWithHTML(`<b>Dars topilmadi</b> `)
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    })
    composer.hears(analis.oz_analis[i].text, async (ctx) => {
        try {
            await ctx.replyWithHTML(`<b>${analis?.oz_analis[i].text}</b>`)
            await ctx.replyWithVideo(`${analis?.oz_analis[i].url_video}`).catch(function (error) {
                ctx.replyWithHTML(`<b>Dars topilmadi</b> `)
                console.log(error);
            })
        } catch (error) {
            console.log(error)
        }
    })
}

module.exports = composer;
