const { Composer } = require('telegraf')
const composer = new Composer()

composer.hears("📱 Ilovalar", async (ctx) => {
    try {
        await ctx.replyWithPhoto("https://t.me/jahongirmuqriy_suralar/404")
        await ctx.replyWithHTML(`📖 Alloh taolo aytadi: <b>“Darhaqiqat, Biz Qurʼonni zikr uchun oson qildik. Bas, zikr qiluvchi bormi?!”</b> - Qamar, 22.
    
Qurʼonni tajvid va tartil bilan qiroat qilish ulugʻ neʼmatdir. 
    
🤔 Siz ham Qurʼonni tajvid bilan oʻqishni xoxlaysizmi? Bunda sizga AT-TARTIL ilovasi yordam beradi. 
    
🎬 Ilovada ustoz <b>Jahongir qori Neʼmatov</b>ning darslaridan bahramand boʻlishingiz mumkin. 
    
🎤Dastur bilan <b>Jahongir qori Neʼmatov</b>ning osonlashtirilgan tajvid darslari orqali Qurʼon tilovatini Allohning izni bilan oson oʻzlashtirish mumkin. 
    
💡 Ilovani quyidagi linklar orqali yuklab olishingiz mumkin:
        
✅ <a href = "https://play.google.com/store/apps/details?id=uz.attartil.androidkotlin&pcampaignid=web_share" > Google Play</a> | <a href = "https://apps.apple.com/uz/app/at-tartil/id1622384001"> App Store</a>
        
✍️ Ilova Oʻzbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Din ishlari boʻyicha qoʻmitaning 2022-yil 18-apreldagi 180-sonli xulosasi asosida tayyorlandi.
    
❓ Savollar boʻlsa, ushbu link orqali murojaat qilishingiz mumkin 👇 Hizmat koʻrsatish boʻlimi (https://t.me/inquiryuz)
    
Alloh ilmingizni ziyoda qilsin 🤲❤️
    
<b>📌 Ramsiy sahifalar:</b>
    
✅ t.me/jahongirmuqriy
✅ youtube.com/@jahongirmuqriy
✅ instagram.com/jahongirmuqriy
✅ facebook.com/jahongirmuqriy        
    `)
    } catch (error) {
        console.log(error);
    }
});

composer.hears('📱 Иловалар', async (ctx) => {
    try {
        await ctx.replyWithPhoto("https://t.me/jahongirmuqriy_suralar/404")
        await ctx.replyWithHTML(`📖 Аллоҳ таоло айтади: <b>“Дарҳақиқат, Биз Қуръонни зикр учун осон қилдик. Бас, зикр қилувчи борми?!”</b> - Қамар, 22.

Қуръонни тажвид ва тартил билан қироат қилиш улуғ неъматдир. 

🤔 Сиз ҳам Қуръонни тажвид билан ўқишни хохлайсизми? Бунда сизга АТ-ТАРТИЛ иловаси ёрдам беради. 

🎬 Иловаda устоз <b>Жаҳонгир қори Неъматов</b>нинг дарсларидан баҳраманд бўлишингиз мумкин. 

🎤Дастур билан <b>Жаҳонгир қори Неъматов</b>нинг осонлаштирилган тажвид дарслари орқали Қуръон тиловатини Аллоҳнинг изни билан осон ўзлаштириш мумкин. 

💡 Иловани қуйидаги линклар орқали юклаб олишингиз мумкин: 
    
✅ <a href = "https://play.google.com/store/apps/details?id=uz.attartil.androidkotlin&pcampaignid=web_share" > Google Play</a> | <a href = "https://apps.apple.com/uz/app/at-tartil/id1622384001"> App Store</a>
    
✍️ Илова Ўзбекистон Республикаси Вазирлар Маҳкамаси ҳузуридаги Дин ишлари бўйича қўмитанинг 2022 йил 18 апрелдаги 180-сонли хулосаси асосида тайёрланди.

❓ Саволлар бўлса, ушбу линк орқали мурожаат қилишингиз мумкин 👇 Ҳизмат кўрсатиш бўлими (https://t.me/inquiryuz)

Аллоҳ илмингизни зиёда қилсин 🤲❤️

<b>📌 Рамсий саҳифалар:</b>

✅ t.me/jahongirmuqriy
✅ youtube.com/@jahongirmuqriy
✅ instagram.com/jahongirmuqriy
✅ facebook.com/jahongirmuqriy        
`)
    } catch (error) {
        console.log(error);
    }
});

module.exports = composer