const { Composer } = require('telegraf');

const composer = new Composer()
const alifYo = require('../data/alifYoData')

for (let i = 0; i<alifYo?.uz_alif_yo.length; i++) {
    composer.hears(alifYo?.uz_alif_yo[i].text, async (ctx) => {
        await ctx.replyWithHTML(`<b>${alifYo?.uz_alif_yo[i].title}</b>`,)
        await ctx.replyWithVideo(`${alifYo?.uz_alif_yo[i].url_video}`).catch(function(error){ 
            ctx.replyWithHTML(`<b>Dars topilmadi</b> `)
           console.log(error); })      
    })
    composer.hears(alifYo?.oz_alif_yo[i].text, async (ctx) => {
        await ctx.replyWithHTML(`<b>${alifYo?.oz_alif_yo[i].title}</b>`,)
        await ctx.replyWithVideo(`${alifYo?.oz_alif_yo[i].url_video}`).catch(function(error){ 
            ctx.replyWithHTML(`<b>Дарс topilmadi</b> `)
           console.log(error); })      
    })
}

module.exports = composer;
