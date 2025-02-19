const { Composer } = require('telegraf');

const composer = new Composer()
const tajweed = require('../data/tajweedData')

for (let i = 0; i < tajweed?.uz_tajweed.length; i++) {
    composer.hears(tajweed?.uz_tajweed[i].text, async (ctx) => {
        try {
            await ctx.replyWithHTML(`<b>${tajweed?.uz_tajweed[i].title}</b>`)
            await ctx.replyWithVideo(`${tajweed?.uz_tajweed[i].url_video}`).catch(function (error) {
                ctx.replyWithHTML(`<b>Dars topilmadi</b> `)
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    })
    composer.hears(tajweed.oz_tajweed[i].text, async (ctx) => {
        try {
            await ctx.replyWithHTML(`<b>${tajweed?.oz_tajweed[i].title}</b>`)
            await ctx.replyWithVideo(`${tajweed?.oz_tajweed[i].url_video}`).catch(function (error) {
                ctx.replyWithHTML(`<b>Dars topilmadi</b> `)
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = composer;
