// lib/copy.js — Kogu maandumislehe nähtav sisu.
// Kõik tekstimuudatused tehakse siin. Komponendid loevad andmeid ainult sellest objektist.

export const copy = {
  metadata: {
    title: "1000 Tervislikku Retsepti 2.0",
    description:
      "1000 Tervislikku Retsepti 2.0 diabeetikutele: maitsvad, lihtsad ja loodud spetsiaalselt veresuhkru kontrollimiseks. Eripakkumine: 7,90 € + 5 tasuta boonust.",
    lang: "et",
  },

  brand: {
    name: "",
    tagline: "1000 Tervislikku Retsepti 2.0",
  },

  hero: {
    banner: "SEE PAKKUMINE + TASUTA BOONUSED AEGUVAD:",
    timerLabels: { days: "Päeva", hours: "Tundi", minutes: "Min", seconds: "Sek" },
    kicker: "Üle 2000 inimese on oma elu muutnud",
    headlinePre: "Üle 2000 inimese on",
    headlineHighlight: "oma tervist parandanud",
    headlinePost: "tänu meie 1000 retseptile",
    subheadline: "Diabeet ei ole vabandus maitsvast toidust loobumiseks!",
    supporting:
      "Paranda oma tervist ja naudi samal ajal suurepäraseid maitseid meie 1000 tervisliku retsepti 2.0 abil.",
    cta: "Tahan raamatut kohe! 📖",
    imageAlt: "E-raamat 1000 Tervislikku Retsepti 2.0 diabeetikutele",
    trustChips: [
      { icon: "⭐", text: "Üle 2000 inimese" },
      { icon: "🎁", text: "5 tasuta boonust" },
      { icon: "🛡️", text: "7-päevane garantii" },
    ],
  },

  story: {
    headlinePre: "Kas teadsid, et kehv toitumine võib",
    headlineHighlight: "diabeedi tüsistuste riski",
    headlinePost: "kiiresti ja märkamatult suurendada?",
    intro:
      "Igal suutäiel on tähtsus. See, mida sa täna sööd, määrab, kuidas sa end homme tunned. Diabeediga elades kuhjuvad väikesed vead vaikselt ja märkamatult.",
    problemsLead: "Siin on probleemid, mis tekivad, kui sa oma toitumist eirad:",
    problems: [
      {
        title: "Veresuhkru järsk tõus",
        desc: "Kehv toitumine võib põhjustada veresuhkru kõikumisi, mis omakorda kahjustab närve, silmi ja neerusid.",
      },
      {
        title: "Kehakaalu suurenemine",
        desc: "Ebatervislik toit viib sageli kaalutõusuni, mis võib diabeedi kulgu märkimisväärselt halvendada.",
      },
      {
        title: "Suurenenud südamehaiguste risk",
        desc: "Halvad toitumisharjumused tõstavad südamehaiguste riski, mis on diabeetikute seas üks peamisi suremuse põhjuseid.",
      },
      {
        title: "Seedehäired",
        desc: "Teatud koostisosad võivad tekitada toidutalumatust, kõhukinnisust, gaase ja ebamugavustunnet.",
      },
    ],
    visualImage: "/story-apple-donut.webp",
    visualImageAlt: "Ühes käes roheline õun, teises roosa sõõrik: valik on sinu",
    solutionBadge: "Lahendus",
    solutionHeadline:
      "Kas soovid õppida toituma maitsvalt ja tervislikult, ilma oma diabeeti unarusse jätmata?",
  },

  benefits: {
    forYouHeadline: "See e-raamat on täpselt sulle, kui...",
    forYouItems: [
      {
        icon: "Heart",
        title: "Põed diabeeti või hoolitsed kellegi eest, kellel see on",
        desc: "Leiad retsepte, mis on loodud veresuhkru kontrolli all hoidmiseks, ilma toidunautimisest loobumata.",
      },
      {
        icon: "Sparkles",
        title: "Soovid tervislikku toiduvalmistamist lihtsustada",
        desc: "Tervislik toitumine ei pea olema keeruline: anname sulle lühikesed ja selged juhised.",
      },
      {
        icon: "Users",
        title: "Otsid maitsvaid ja lihtsaid retsepte kogu perele",
        desc: "Toidud, mida naudib kogu pere, mitte ainult diabeetik.",
      },
    ],
    headline: "Mida sa saavutad 1000 Tervisliku Retsepti 2.0-ga",
    items: [
      {
        icon: "ChefHat",
        title: "Tervislikud ja maitsvad retseptid",
        desc: "Mida sinu pere igal toidukorral armastab.",
      },
      {
        icon: "ListChecks",
        title: "Samm-sammulised juhised",
        desc: "Lihtne jälgida, isegi kui oled köögis täiesti algaja.",
      },
      {
        icon: "ShoppingBasket",
        title: "Kättesaadavad koostisosad",
        desc: "Kergesti leitavad igast kodulähedasest supermarketist.",
      },
      {
        icon: "Lightbulb",
        title: "Nipid ja trikid kogenud kokkadelt",
        desc: "Et saaksid enesekindlalt süüa teha ja paremaid maitseid saavutada.",
      },
      {
        icon: "Apple",
        title: "Hoolikalt valitud toitained",
        desc: "Õpid andma oma kehale täpselt seda, mida ta vajab.",
      },
      {
        icon: "Wheat",
        title: "Kontroll süsivesikute tarbimise üle",
        desc: "Ilma maitsest või mitmekesisusest ohverdamata.",
      },
      {
        icon: "Activity",
        title: "Stabiilne veresuhkru tase",
        desc: "Toidud, mis aitavad hoida kõike range kontrolli all.",
      },
      {
        icon: "HeartPulse",
        title: "Üldise tervise paranemine",
        desc: "Rohkem energiat, parem seedimine ja kõrgem elukvaliteet.",
      },
    ],
    socialProof:
      "Meie 1000 Tervisliku Retsepti 2.0 diabeetikutele abil on sinusugused inimesed suutnud oma veresuhkru kontrolli alla saada, üleliigsetest kilodest vabaneda ja elurõõmu tagasi võita.",
  },

  features: {
    headline: "Mida see e-raamat sisaldab?",
    subheadline: "Kõike vajalikku, et toituda maitsvalt ja tervislikult, ilma liigselt pead vaevamata.",
    items: [
      {
        icon: "Utensils",
        title: "Maitsvad ja tervislikud retseptid",
        desc: "Suur valik tasakaalustatud ja toitvaid retsepte – alates lõuna- ja õhtusöökidest kuni tervislike kastmete ja kreemideni.",
      },
      {
        icon: "BookOpen",
        title: "Diabeetikute tervisliku toiduvalmistamise põhitõed",
        desc: "Õpi, kuidas täpselt need retseptid on kohandatud sinu spetsiifilistele vajadustele.",
      },
      {
        icon: "Lightbulb",
        title: "Praktilised kulinaarsed nõuanded diabeetikutele",
        desc: "Avasta kasulikke nippe, mis muudavad köögis veedetud aja palju meeldivamaks.",
      },
      {
        icon: "Replace",
        title: "Juhend tervislike asenduste tegemiseks",
        desc: "Saa teada, millised koostisosad on diabeedisõbralikud ja millega asendada kahjulikke toiduaineid.",
      },
      {
        icon: "Gift",
        title: "Lisahüved",
        desc: "Ostuga saad eksklusiivseid kingitusi ja juurdepääsu meie Privileegide Klubile.",
      },
    ],
  },

  bonuses: {
    badge: "TASUTA BOONUSED",
    headline: "Piiratud aja jooksul saad need 5 kingitust",
    subheadline: "Täiesti tasuta kaasas, kui ostad e-raamatu juba täna.",
    freeLabel: "TASUTA!",
    items: [
      {
        image: "/bonuses/sopas.webp",
        tag: "BOONUS 1",
        title: "E-raamat: 15 Tervislikku Suppi",
        desc: "Sisaldab 15 retsepti soojade suppide jaoks, milles on vähe süsivesikuid ja suhkrut.",
        value: "15 €",
      },
      {
        image: "/bonuses/batidos.webp",
        tag: "BOONUS 2",
        title: "E-raamat: 10 Tervislikku Smuutit",
        desc: "10 retsepti värskendavate smuutide jaoks, milles on vähe süsivesikuid ja suhkrut.",
        value: "15 €",
      },
      {
        image: "/bonuses/snacks.webp",
        tag: "BOONUS 3",
        title: "E-raamat: 15 Tervislikku Vahepala",
        desc: "15 ideed kiireteks ja tervislikeks vahepaladeks diabeetikutele.",
        value: "15 €",
      },
      {
        image: "/bonuses/planificador.webp",
        tag: "BOONUS 4",
        title: "E-raamat: Toidukordade Planeerija",
        desc: "Praktiline planeerija, mille abil on lihtne oma päevamenüüd korraldada.",
        value: "15 €",
      },
      {
        image: "/bonuses/membresia.webp",
        tag: "BOONUS 5",
        title: "Privileegide Klubi",
        desc: "Õigus tulevastele uuendustele, 7-päevane garantii ja soodustus teistele toodetele meie kataloogis.",
        value: "20 €",
      },
    ],
    totalLabel: "Boonuste koguväärtus: 80 € — Täna: TASUTA",
    footer: "Kõik toimetatakse kohale digitaalselt ja koheselt pärast sinu ostu.",
  },

  testimonials: {
    headline: "Mida meie kliendid räägivad",
    subheadline:
      "Päris inimesed jagavad oma arvamust e-raamatust 1000 Tervislikku Retsepti 2.0 diabeetikutele.",
    productLabel: "1000 Tervislikku Retsepti 2.0 diabeetikutele",
    rating: "5★",
    actions: { like: "Meeldib", comment: "Kommenteeri", share: "Jaga" },
    items: [
      {
        name: "Peeter Tamm",
        text:
          "Otsisin lihtsaid retsepte kättesaadavate toiduainetega. Selles raamatus on uskumatult maitsvad retseptid ja vaid mõne sammuga saad suurepäraselt süüa. Soovitan 100%!",
      },
      {
        name: "Maria Kask",
        text:
          "Minu suurim hirm, kui mul diagnoositi diabeet, oli see, et ma ei saa enam kunagi maitsvat toitu süüa. Retseptid on väga head ja kuna raamat on digitaalne, kannan seda poes käies telefonis kaasas.",
      },
      {
        name: "Julia Saar",
        text:
          "Diabeetikust lapse emana oli tõeline väljakutse leida toitu, mis meeldiks kogu perele. See e-raamat andis meile mitmekesisuse ja lihtsuse. Retseptid on meil kodus tõeline hitt.",
      },
      {
        name: "Grete Mägi",
        text:
          "Kui minu abikaasal diagnoositi diabeet, aitas see raamat mind tohutult. Lihtsad retseptid, ilma imelike koostisosadeta ja väga maitsvad. Soovitan soojalt!",
      },
      {
        name: "Anna Kuusk",
        text:
          "Soovitan seda raamatut: maitsvad ja lihtsasti järgitavad retseptid. Aitäh tasuta boonuste eest, toidukordade planeerija on ideaalne oma toitumise täpseks jälgimiseks.",
      },
      {
        name: "Jaanus Oja",
        text:
          "See raamat muutis minu toiduvalmistamise viisi. Varem tegin endale süüa eraldi. Nüüd sööme kõik sama asja, ilma igasuguste komplikatsioonideta. Suur tänu!",
      },
    ],
    cta: "TAHAN ALUSTADA JUBA TÄNA",
  },

  finalCta: {
    preHeadline: "SINU HETK ON KÄES",
    urgencyTop: "80% SOODSAMALT",
    headline:
      "HAARA MEIE DIGITAALNE RAAMAT TÄNA USKUMATU SOODUSTUSEGA!",
    subUrgency:
      "Üle 2000 inimese on nende retseptide abil juba oma tervist muutnud. Täna on sinu kord.",
    bundleList: [
      "E-raamat: 1000 Tervislikku Retsepti 2.0 diabeetikutele",
      "Boonus 1 — 15 Tervislikku Suppi",
      "Boonus 2 — 10 Tervislikku Smuutit",
      "Boonus 3 — 15 Tervislikku Vahepala",
      "Boonus 4 — Toidukordade Planeerija",
      "Boonus 5 — Privileegide Klubi",
    ],
    imageAlt: "Täispakett 1000 Tervislikku Retsepti 2.0 + 5 boonust",
    guaranteeText:
      "Ikka veel kahtled? Ära muretse, risk puudub täielikult! Sinu tervis on seda väärt. 7-päevane rahulolugarantii.",
    regularPriceLabel: "Tavahind",
    regularPrice: "25,00 €",
    offerPrice: "7,90 €",
    discountBadge: "80% SOODSAMALT",
    urgencyText: "MAKSE KUVATAKSE SINU KOHALIKUS VALUUTAS",
    bottomUrgency: "See pakkumine aegub, kui taimer jõuab nulli.",
    button: "KASUTA VÕIMALUST TÄNA",
    trustRow: "100% turvaline makse · Kohene ligipääs · 7-päevane garantii",
  },

  faq: {
    authorRole: "Tervisliku toitumise meeskond",
    authorHeadline: "Maitsev toit, mis hoolitseb sinu tervise eest",
    authorBio:
      "Me usume, et diabeet ei tohiks võtta sinult toidunautimise rõõmu. Iga retsept on loodud nii, et saaksid süüa ilma süütundeta ja hoida oma veresuhkrut täieliku kontrolli all.",
    authorImageAlt: "Meie meeskond",
    worksHeadline: "Kellele see e-raamat EI OLE mõeldud?",
    doesntWork: [
      "Inimestele, kes tahavad süüa ebatervislikult ilma tagajärgedeta",
      "Inimestele, kes pole valmis uusi maitseid proovima",
      "Inimestele, kes ootavad tulemusi ilma midagi muutmata",
    ],
    worksText:
      "Aga kui sa soovid päriselt lihtsaid, maitsvaid ja diabeedisõbralikke retsepte, siis see raamat on loodud just sulle.",
    headline: "Korduma Kippuvad Küsimused",
    subheadline: "Kõik, mida pead enne alustamist teadma.",
    items: [
      {
        q: "Kuidas ma raamatu pärast maksmist kätte saan?",
        a: "Kohe pärast ostu saad e-kirja allalaadimislingiga. Saad seda lugeda oma telefonis, tahvelarvutis või arvutis.",
      },
      {
        q: "Mis vormingus e-raamat on?",
        a: "See on kvaliteetses PDF-vormingus, mis on loodud mugavaks lugemiseks igas seadmes, ilma et seda peaks välja printima.",
      },
      {
        q: "Kas retseptid sobivad 1. ja 2. tüüpi diabeetikutele?",
        a: "Jah, retseptid on spetsiaalselt välja töötatud, et aidata kontrollida veresuhkrut. Siiski soovitame alati oma toitumisplaani osas arstiga nõu pidada.",
      },
      {
        q: "Kas mul on vaja mingeid imelikke või kalleid koostisosi?",
        a: "Ei. Kõigis retseptides on kasutatud toiduaineid, mida on lihtne leida igast supermarketist ja mis on täiesti taskukohaste hindadega.",
      },
      {
        q: "Kas pakute garantiid?",
        a: "Jah. Sul on 7-päevane täisgarantii. Kui sa pole rahul, tagastame sulle 100% rahast ilma küsimusi esitamata.",
      },
      {
        q: "Kas ma saan maksta oma kohalikus valuutas?",
        a: "Jah. Makse arvutatakse automaatselt ümber ja kuvatakse ostu sooritamise ajal sinu kohalikus valuutas.",
      },
    ],
  },

  closing: {
    kicker: "VIIMANE SAMM",
    headline: "Sinu tervis ei saa enam oodata",
    subheadline:
      "Juba täna võid hakata maitsvalt sööma, ilma oma diabeeti unarusse jätmata. Homme ei pruugi seda hinda enam olla.",
    regularPrice: "25,00 €",
    offerPrice: "7,90 €",
    ctaLabel: "KASUTA VÕIMALUST TÄNA",
    trustRow: "Turvaline makse · Kohene ligipääs · 7-päevane garantii",
  },

  footer: {
    brand: "PRO ESCALA",
    copyright: "Copyright © proescala.online ® 2025",
    disclaimer:
      "See veebisait ei ole osa Facebooki ega Facebook Inc. veebisaidist. Samuti EI OLE see sait Facebooki poolt mitte mingil viisil heaks kiidetud ega sponsoreeritud.",
    trademark: "FACEBOOK on ettevõtte FACEBOOK, Inc. registreeritud kaubamärk.",
  },
};