const { Composer } = require('telegraf');

const composer = new Composer()
const alifYo = require('../data/alifYoData')

for (let i = 0; i<alifYo?.uz_alif_yo.length; i++) {
    composer.hears(alifYo?.uz_alif_yo[i].text, async (ctx) => {
        await ctx.replyWithAudio(`${alifYo?.uz_alif_yo[i].url_audio}`).catch(function(error){ 
            ctx.replyWithHTML(`<b>Dars topilmadi</b> `)
           console.log(error); })      
    })
    composer.hears(alifYo?.oz_alif_yo[i].text, async (ctx) => {
        await ctx.replyWithAudio(`${alifYo?.oz_alif_yo[i].url_audio}`).catch(function(error){ 
            ctx.replyWithHTML(`<b>Дарс topilmadi</b> `)
           console.log(error); })      
    })
}

module.exports = composer;
