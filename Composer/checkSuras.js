const { Composer } = require('telegraf');

const composer = new Composer()
const suras = require('../data/surasData')

for (let i = 0; i < suras?.uz_suras.length; i++) {
    composer.hears(suras?.uz_suras[i].text, async (ctx) => {
        if (i != 114) {
            await ctx.replyWithVideo(`${suras?.uz_suras[i].url_video}`).catch(function (error) {
                ctx.replyWithHTML(`<b>Sura topilmadi</b> `)
                console.log(error);
            })
        }
        await ctx.replyWithAudio(`${suras?.uz_suras[i].url_audio}`).catch(function (error) {
            ctx.replyWithHTML(`<b>Sura topilmadi</b> `)
            console.log(error);
        })
    })
    composer.hears(suras?.oz_suras[i].text, async (ctx) => {
        if (i != 114) {
            await ctx.replyWithVideo(`${suras?.uz_suras[i].url_video}`).catch(function (error) {
                ctx.replyWithHTML(`<b>Sura topilmadi</b> `)
                console.log(error);
            })
        }
        await ctx.replyWithAudio(`${suras?.oz_suras[i].url_audio}`).catch(function (error) {
            ctx.replyWithHTML(`<b>Sura topilmadi</b> `)
            console.log(error);
        })
    })
}

module.exports = composer;
