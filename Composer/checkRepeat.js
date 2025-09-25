const { Composer } = require('telegraf');

const composer = new Composer()
const repeatQuran = require('../data/quranRepeatData')

for (let i = 0; i < repeatQuran?.uz_repeat.length; i++) {
    composer.hears(repeatQuran?.uz_repeat[i].text, async (ctx) => {
        try {
            
            if (repeatQuran?.uz_repeat[i].url_audio) {
                await ctx.replyWithHTML(`<b>${repeatQuran?.uz_repeat[i].text}</b>`)
                await ctx.replyWithAudio(`${repeatQuran?.uz_repeat[i].url_audio}`).catch(function (error) {
                    ctx.replyWithHTML(`<b>Audio topilmadi</b> `)
                    console.log(error);
                })
            }
            if (repeatQuran?.uz_repeat[i].url_video) {
                await ctx.replyWithHTML(`<b>${repeatQuran?.uz_repeat[i].text}</b>`)
                await ctx.replyWithVideo(`${repeatQuran?.uz_repeat[i].url_video}`).catch(function (error) {
                    ctx.replyWithHTML(`<b>Video topilmadi</b> `)
                    console.log(error);
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
    composer.hears(repeatQuran.oz_repeat[i].text, async (ctx) => {
        try {
            await ctx.replyWithHTML(`<b>${repeatQuran?.oz_repeat[i].text}</b>`)
            if (repeatQuran?.oz_repeat[i].url_audio) {
                await ctx.replyWithVideo(`${repeatQuran?.oz_repeat[i].url_audio}`).catch(function (error) {
                    ctx.replyWithHTML(`<b>Аудио топилмади</b> `)
                    console.log(error);
                })
            }
            if (repeatQuran?.oz_repeat[i].url_video) {
                await ctx.replyWithVideo(`${repeatQuran?.oz_repeat[i].url_video}`).catch(function (error) {
                    ctx.replyWithHTML(`<b>Видео топилмади</b> `)
                    console.log(error);
                })
            }
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = composer;
