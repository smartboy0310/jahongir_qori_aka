const { Composer } = require('telegraf')
const composer = new Composer()

composer.hears("✨ Ustoz haqida", async (ctx) => {
    try {
        await ctx.replyWithHTML(`<b> Toshkent islom instituti “Qur’on ilmlari” kafedrasi mudiri – Jahongir qori Ne’matov</b>
        
    Toshkent islom instituti “Qurʼon ilmlari” kafedrasi mudiri, qiroat boʻyicha ijoza sohibi Jahongir qori Neʼmatov 1978-yilda tavallud topgan. U Toshkent islom institutining kunduzgi taʼlim bosqichini va Toshkent davlat sharqshunoslik institutining magistraturasini muvaffaqiyatli tamomlagan.
    
    Jahongir qori Neʼmatov faoliyati davomida Toshkent davlat sharqshunoslik instituti hamda Toshkent islom instituti “Tahfizul Qurʼon” kafedrasida talabalarga uzoq yillar dars berib, qiroat mutaxassislarini tayyorlashga katta hissa qoʻshgan. Hozirda u Toshkent islom instituti “Qurʼon ilmlari” kafedrasi mudiri sifatida faoliyat yuritib kelmoqda.
    
    Jahongir qori Neʼmatov qiroat yoʻnalishida yuksak malakaga ega boʻlib, Paygʻambarimiz Muhammad sollallohu alayhi vasallamga bogʻlangan sanad bilan koʻplab ijozalar sohibidir.
    
    Shuningdek, Imom Jazariyning tajvid ilmiga bagʻishlangan asari boʻyicha tadqiqot olib bormoqda va mazkur mavzu asosida Qurʼonshunoslik ixtisosligidan islomshunoslik fanlari boʻyicha falsafa doktori (PhD) ilmiy darajasini olish ustida ishlamoqda.
    
    Jahongir qori Neʼmatov ilmiy va amaliy faoliyati bilan birga, aholi oʻrtasida qiroat va tajvid  ilmini yetkazish maqsadida, haftaning har chorshanba kuni Oʻzbekiston musulmonlari idorasining Muslim.uz portali orqali “Qurʼon qiroati saboqlari” ruknida onlayn mashgʻulotlar oʻtkazib, keng jamoatchilikka Qurʼon qiroati va tajvidi boʻyicha bilimlar berib kelmoqda.
    
<b>📌 Ramsiy sahifalar va ilovalar:</b>
    
✅ t.me/jahongirmuqriy
✅ youtube.com/@jahongirmuqriy
✅ instagram.com/jahongirmuqriy
✅ facebook.com/jahongirmuqriy  
    
<b>At-Tartil ilovasi:</b>
    
✅ <a href = "https://play.google.com/store/apps/details?id=uz.attartil.androidkotlin&pcampaignid=web_share" > Google Play</a> | <a href = "https://apps.apple.com/uz/app/at-tartil/id1622384001"> App Store</a>      
    
    `)
    } catch (error) {
        console.log(error)
    }
});

composer.hears('✨ Устоз ҳақида', async (ctx) => {
    try {
        await ctx.replyWithHTML(`<b style = "textAlign:center">Тошкент ислом институти “Қуръон илмлари” кафедраси мудири – Жаҳонгир қори Неъматов</b>\n
    Тошкент ислом институти “Қуръон илмлари” кафедраси мудири, қироат бўйича ижоза соҳиби Жаҳонгир қори Неъматов 1978 йилда таваллуд топган. У Тошкент ислом институтининг кундузги таълим босқичини ва Тошкент давлат шарқшунослик институтининг магистратурасини муваффақиятли тамомлаган.
        
    Жаҳонгир қори Неъматов фаолияти давомида Тошкент давлат шарқшунослик институти ҳамда Тошкент ислом институти “Таҳфизул Қуръон” кафедрасида талабаларга узоқ йиллар дарс бериб, қироат мутахассисларини тайёрлашга катта ҳисса қўшган. Ҳозирда у Тошкент ислом институти “Қуръон илмлари” кафедраси мудири сифатида фаолият юритиб келмоқда.
        
    Жаҳонгир қори Неъматов қироат йўналишида юксак малакага эга бўлиб, Пайғамбаримиз Муҳаммад соллаллоҳу алайҳи васалламга боғланган санад билан кўплаб ижозалар соҳибидир.
        
    Шунингдек, Имом Жазарийнинг тажвид илмига бағишланган асари бўйича тадқиқот олиб бормоқда ва мазкур мавзу асосида Қуръоншунослик ихтисослигидан исломшунослик фанлари бўйича фалсафа доктори (PhD) илмий даражасини олиш устида ишламоқда.
        
    Жаҳонгир қори Неъматов илмий ва амалий фаолияти билан бирга, аҳоли ўртасида қироат ва тажвид  илмини етказиш мақсадида, ҳафтанинг ҳар чоршанба куни Ўзбекистон мусулмонлари идорасининг Muslim.uz портали орқали “Қуръон қироати сабоқлари” рукнида онлайн машғулотлар ўтказиб, кенг жамоатчиликка Қуръон қироати ва тажвиди бўйича билимлар бериб келмоқда.
        
<b>📌 Рамсий саҳифалар ва иловалар:</b>
        
✅ t.me/jahongirmuqriy
✅ youtube.com/@jahongirmuqriy
✅ instagram.com/jahongirmuqriy
✅ facebook.com/jahongirmuqriy  
        
<b>Ат-Тартил иловаси:</b>
        
✅ <a href = "https://play.google.com/store/apps/details?id=uz.attartil.androidkotlin&pcampaignid=web_share" > Google Play</a> | <a href = "https://apps.apple.com/uz/app/at-tartil/id1622384001"> App Store</a>      
        `)
    } catch (error) {
        console.log(error)

    }
});

module.exports = composer