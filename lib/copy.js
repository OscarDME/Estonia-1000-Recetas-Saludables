// lib/copy.js — Kogu maandumislehe nähtav sisu.
// Kõik tekstimuudatused tehakse siin. Komponendid loevad andmeid ainult sellest objektist.

export const copy = {
  metadata: {
    title: "1000 Tervislikku retsepti 2.0",
    description:
      "1000 tervislikku retsepti 2.0 diabeetikutele: maitsvad, lihtsad ja loodud spetsiaalselt veresuhkru kontrolli all hoidmiseks. Eripakkumine: 9.90 € + 5 tasuta boonust.",
    lang: "et",
  },

  brand: {
    name: "",
    tagline: "1000 Tervislikku retsepti 2.0",
  },

  hero: {
    banner: "SEE PAKKUMINE + TASUTA BOONUSED AEGUVAD:",
    timerLabels: { days: "Päeva", hours: "Tundi", minutes: "Min", seconds: "Sek" },
    kicker: "Üle 2000 inimese on oma elu muutnud",
    headlinePre: "Üle 2000 inimese on",
    headlineHighlight: "oma tervist parandanud",
    headlinePost: "tänu meie 1000 retseptile",
    subheadline: "Diabeet ei tähenda, et peaksid maitsvast toidust loobuma!",
    supporting:
      "Paranda oma tervist, nautides samal ajal suurepäraseid maitseid meie 1000 tervisliku retsepti 2.0 abil.",
    cta: "Vaata videot kohe! 🔊",
    imageAlt: "E-raamat 1000 Tervislikku retsepti 2.0 diabeetikutele",
    trustChips: [
      { icon: "⭐", text: "+2000 inimest" },
      { icon: "🎁", text: "5 tasuta boonust" },
      { icon: "🛡️", text: "7-päevane garantii" },
    ],
  },

  story: {
    headlinePre: "Kas teadsid, et kehv toitumine võib suurendada",
    headlineHighlight: "diabeedi tüsistuste",
    headlinePost: "riski kiiresti ja täiesti märkamatult?",
    intro:
      "Iga suutäis loeb. See, mida sööd täna, määrab selle, kuidas tunned end homme. Kui elad diabeediga, kogunevad väikesed vead vaikselt ja märkamatult.",
    problemsLead: "Need on probleemid, mis tekivad, kui oma toitumise unarusse jätad:",
    problems: [
      {
        title: "Ootamatud veresuhkru hüpped",
        desc: "Halb toitumine võib põhjustada veresuhkru järsku tõusu, mis omakorda kahjustab närve, silmi ja neerusid.",
      },
      {
        title: "Kaalutõus",
        desc: "Ebatervislik toit viib sageli kaalutõusuni, mis võib diabeedi kulgu oluliselt halvendada.",
      },
      {
        title: "Suurenenud südamehaiguste risk",
        desc: "Halvad toitumisharjumused suurendavad südamehaiguste riski, mis on diabeetikute peamine suremuse põhjus.",
      },
      {
        title: "Seedeprobleemid",
        desc: "Mõned toiduained võivad tekitada talumatust, kõhukinnisust, gaase ja üldist ebamugavustunnet.",
      },
    ],
    visualImage: "/story-apple-donut.webp",
    visualImageAlt: "Ühes käes roheline õun, teises roosa sõõrik: sinu valik loeb",
    solutionBadge: "Lahendus",
    solutionHeadline:
      "Kas soovid õppida, kuidas süüa maitsvalt ja tervislikult, ilma et oma diabeeti tähelepanuta jätaksid?",
  },

  benefits: {
    forYouHeadline: "See e-raamat on täpselt sulle, kui...",
    forYouItems: [
      {
        icon: "Heart",
        title: "Põed diabeeti või hoolitsed kellegi eest, kellel see on",
        desc: "Leiad retseptid, mis on loodud veresuhkru kontrolli all hoidmiseks, ilma et toidust saadav nauding kaoks.",
      },
      {
        icon: "Sparkles",
        title: "Soovid tervislikku kokkamist lihtsustada",
        desc: "Tervislik toitumine ei pea olema keeruline: anname sulle lühikesed ja arusaadavad sammud.",
      },
      {
        icon: "Users",
        title: "Otsid maitsvaid ja lihtsaid retsepte kogu perele",
        desc: "Toidud, mida naudib kogu pere, mitte ainult diabeetik.",
      },
    ],
    headline: "Mida saavutad 1000 Tervisliku retseptiga 2.0",
    items: [
      {
        icon: "ChefHat",
        title: "Tervislikud ja maitsvad toidud",
        desc: "Mida kogu pere armastab iga toidukorra ajal.",
      },
      {
        icon: "ListChecks",
        title: "Samm-sammulised juhised",
        desc: "Neid on lihtne jälgida isegi siis, kui oled köögis täielik algaja.",
      },
      {
        icon: "ShoppingBasket",
        title: "Kättesaadavad koostisosad",
        desc: "Kergesti leitavad igast kodulähedasest supermarketist.",
      },
      {
        icon: "Lightbulb",
        title: "Nipid ja soovitused kogenud kokkadelt",
        desc: "Et saaksid kokata enesekindlalt ja saavutada parima maitse.",
      },
      {
        icon: "Apple",
        title: "Hoolikalt valitud toitained",
        desc: "Õpid andma oma kehale täpselt seda, mida ta vajab.",
      },
      {
        icon: "Wheat",
        title: "Kontroll süsivesikute tarbimise üle",
        desc: "Ilma maitset või toidulaua mitmekülgsust ohverdamata.",
      },
      {
        icon: "Activity",
        title: "Stabiilne veresuhkru tase",
        desc: "Toidud, mis aitavad sul kõike kontrolli all hoida.",
      },
      {
        icon: "HeartPulse",
        title: "Üldise tervise paranemine",
        desc: "Rohkem energiat, parem seedimine ja kõrgem elukvaliteet.",
      },
    ],
    socialProof:
      "Meie 1000 tervisliku retsepti 2.0 abil on just sinusugused inimesed suutnud oma veresuhkru kontrolli alla saada, liigsetest kilodest vabaneda ja elurõõmu tagasi tuua.",
  },

  features: {
    headline: "Mida e-raamat sisaldab?",
    subheadline: "Kõik vajalik, et süüa maitsvalt ja tervislikult, ilma üle mõtlemata.",
    items: [
      {
        icon: "Utensils",
        title: "Maitsvad ja tervislikud retseptid",
        desc: "Suur valik tasakaalustatud ja toitvaid retsepte – alates lõuna- ja õhtusöökidest kuni tervislike kastmete ja kreemideni.",
      },
      {
        icon: "BookOpen",
        title: "Diabeetikute tervisliku kokkamise alused",
        desc: "Õpi, kuidas just need retseptid on loodud vastama sinu erivajadustele.",
      },
      {
        icon: "Lightbulb",
        title: "Praktilised kulinaarsed nipid diabeetikutele",
        desc: "Avasta kasulikke trikke, mis muudavad köögis veedetud aja palju meeldivamaks.",
      },
      {
        icon: "Replace",
        title: "Juhend tervislike alternatiivide kohta",
        desc: "Saa teada, millised koostisosad on diabeedisõbralikud ja millega asendada kahjulikke toiduaineid.",
      },
      {
        icon: "Gift",
        title: "Lisahüved",
        desc: "Ostmise korral saad eksklusiivseid kingitusi ja juurdepääsu meie Privileegide klubile.",
      },
    ],
  },

  bonuses: {
    badge: "TASUTA BOONUSED",
    headline: "Piiratud aja jooksul saad need 5 kingitust",
    subheadline: "Lisatud täiesti tasuta, kui ostad e-raamatu juba täna.",
    freeLabel: "TASUTA!",
    items: [
      {
        image: "/bonuses/sopas.webp",
        tag: "BOONUS 1",
        title: "E-raamat: 15 tervislikku suppi",
        desc: "Sisaldab 15 retsepti soojadele suppidele, milles on madal süsivesikute ja suhkrusisaldus.",
        value: "15 €",
      },
      {
        image: "/bonuses/batidos.webp",
        tag: "BOONUS 2",
        title: "E-raamat: 10 tervislikku smuutit",
        desc: "10 retsepti värskendavatele smuutidele, mis hoiavad suhkru kontrolli all.",
        value: "15 €",
      },
      {
        image: "/bonuses/snacks.webp",
        tag: "BOONUS 3",
        title: "E-raamat: 15 tervislikku snäkki",
        desc: "15 ideed kiireteks ja tervislikeks vahepaladeks diabeetikutele.",
        value: "15 €",
      },
      {
        image: "/bonuses/planificador.webp",
        tag: "BOONUS 4",
        title: "E-raamat: Toidukordade planeerija",
        desc: "Praktiline planeerija, mille abil on lihtne oma päevamenüüd korraldada.",
        value: "15 €",
      },
      {
        image: "/bonuses/membresia.webp",
        tag: "BOONUS 5",
        title: "Privileegide klubi",
        desc: "Õigus tulevastele uuendustele, 7-päevane garantii ja soodustus meie kataloogi teistele toodetele.",
        value: "20 €",
      },
    ],
    totalLabel: "Boonuste koguväärtus: 80 € — Täna: TASUTA",
    footer: "Kõik toimetatakse sinuni digitaalselt ja koheselt pärast ostu.",
  },

  testimonials: {
    headline: "Mida meie kliendid räägivad",
    subheadline:
      "Tõelised inimesed jagavad oma arvamust 1000 Tervisliku retsepti 2.0 kohta diabeetikutele.",
    productLabel: "1000 Tervislikku retsepti 2.0 diabeetikutele",
    reviewedLabel: "arvustas toodet",
    rating: "5★",
    actions: { like: "Meeldib", comment: "Kommenteeri", share: "Jaga" },
    items: [
      {
        name: "Peeter Kask",
        text:
          "Otsisin lihtsaid retsepte kättesaadavate toiduainetega. Selles raamatus on uskumatult maitsvad retseptid ja vaid mõne sammuga valmib suurepärane toit. Soovitan 100%!",
      },
      {
        name: "Maria Tamm",
        text:
          "Minu suurim hirm, kui mul diagnoositi diabeet, oli see, et ma ei saa enam kunagi maitsvalt süüa. Retseptid on väga head ja kuna raamat on digitaalne, on see mul poes käies telefonis mugavalt kaasas.",
      },
      {
        name: "Ülle Pärn",
        text:
          "Diabeetikust lapse emana oli tõeline väljakutse leida toitu, mis meeldiks kogu perele. See e-raamat andis meile mitmekesisust ja lihtsust. Need retseptid on meie kodus tõeline hitt.",
      },
      {
        name: "Kadri Lepik",
        text:
          "Kui mu abikaasal diagnoositi diabeet, aitas see raamat mind tohutult. Lihtsad retseptid, ei mingeid veidraid koostisosi ja väga maitsev tulemus. Soovitan soojalt!",
      },
      {
        name: "Anna Kuusk",
        text:
          "Soovitan raamatut: maitsvad ja kergesti järgitavad retseptid. Aitäh tasuta boonuste eest – toidukordade planeerija on ideaalne abimees dieedi täpseks jälgimiseks.",
      },
      {
        name: "Jaan Oja",
        text:
          "See raamat muutis mu toiduvalmistamise viisi. Varem tegin endale toitu pere omast eraldi. Nüüd sööme kõik sama toitu ja ei mingit liigset peavalu. Suur aitäh!",
      },
    ],
    cta: "TAHAN JUBA TÄNA ALUSTADA",
  },

  finalCta: {
    preHeadline: "SINU HETK ON KÄES",
    urgencyTop: "80% SOODSAMALT",
    headline:
      "HAARA MEIE DIGIRAAMAT TÄNA PÖÖRASE SOODUSTUSEGA!",
    subUrgency:
      "Üle 2000 inimese on nende retseptide abil juba oma tervist muutnud. Täna on sinu kord.",
    bundleList: [
      "E-raamat: 1000 Tervislikku retsepti 2.0 diabeetikutele",
      "Boonus 1 — 15 tervislikku suppi",
      "Boonus 2 — 10 tervislikku smuutit",
      "Boonus 3 — 15 tervislikku snäkki",
      "Boonus 4 — Toidukordade planeerija",
      "Boonus 5 — Privileegide klubi",
    ],
    imageAlt: "Täispakett 1000 Tervislikku retsepti 2.0 + 5 boonust",
    guaranteeText:
      "Ikka veel kahtled? Ära muretse, risk puudub täielikult! Sinu tervis on seda väärt. 7-päevane rahulolugarantii.",
    guaranteeImageAlt: "Garantii",
    regularPriceLabel: "Tavahind",
    regularPrice: "25.00 €",
    offerPrice: "9.90 €",
    discountBadge: "80% SOODUSTUS",
    urgencyText: "MAKSE KUVATAKSE SINU KOHALIKUS VALUUTAS",
    bottomUrgency: "See pakkumine aegub, kui taimer jõuab nulli.",
    button: "KASUTA VÕIMALUST JUBA TÄNA",
    trustRow: "100% turvaline makse · Kohene ligipääs · 7-päevane garantii",
  },

  faq: {
    authorRole: "Tervisliku toitumise meeskond",
    authorHeadline: "Maitsev toit, mis hoolitseb sinu tervise eest",
    authorBio:
      "Me usume, et diabeet ei tohi sinult võtta toidust saadavat naudingut. Iga retsept on loodud nii, et saaksid süüa ilma süümepiinadeta ja hoida oma glükoosi täieliku kontrolli all.",
    authorImageAlt: "Meie meeskond",
    worksHeadline: "Kellele see e-raamat EI ole mõeldud?",
    doesntWork: [
      "Inimestele, kes tahavad süüa ebatervislikult ilma tagajärgedeta",
      "Inimestele, kes ei ole valmis proovima uusi maitseid",
      "Inimestele, kes ootavad tulemusi, ilma et nad ise midagi muudaksid",
    ],
    worksText:
      "Aga kui soovid tõelisi, lihtsaid, maitsvaid ja sinu diabeediga kohandatud retsepte, on see raamat loodud just sulle.",
    headline: "Korduma kippuvad küsimused",
    subheadline: "Kõik, mida pead enne alustamist teadma.",
    items: [
      {
        q: "Kuidas ma raamatu pärast maksmist kätte saan?",
        a: "Kohe pärast ostu saad e-kirja allalaadimislingiga. Saad seda lugeda oma telefonist, tahvelarvutist või arvutist.",
      },
      {
        q: "Millises formaadis e-raamat on?",
        a: "See on kvaliteetses PDF-formaadis, loodud mugavaks lugemiseks igas seadmes, ilma et seda peaks tingimata välja printima.",
      },
      {
        q: "Kas retseptid sobivad nii 1. kui 2. tüübi diabeetikutele?",
        a: "Jah, retseptid on spetsiaalselt loodud aitama veresuhkrut kontrolli all hoida. Siiski soovitame toitumise osas alati konsulteerida ka oma arstiga.",
      },
      {
        q: "Kas ma vajan kummalisi või kalleid koostisosi?",
        a: "Ei. Kõikides retseptides on kasutatud tooteid, mida on lihtne leida igast supermarketist täiesti taskukohaste hindadega.",
      },
      {
        q: "Kas ostul on garantii?",
        a: "Jah. Sul on 7-päevane täielik garantii. Kui sa pole rahul, maksame sulle 100% rahast tagasi – ilma lisaküsimusi esitamata.",
      },
      {
        q: "Kas ma saan maksta oma kohalikus valuutas?",
        a: "Jah. Ostu sooritamise ajal arvutatakse makse automaatselt ümber ja kuvatakse sinu kohalikus valuutas.",
      },
    ],
  },

  closing: {
    kicker: "VIIMANE SAMM",
    headline: "Sinu tervis ei saa enam oodata",
    subheadline:
      "Juba täna võid hakata maitsvalt sööma, ilma et jätaksid oma diabeedi unarusse. Homme ei pruugi see hind enam saadaval olla.",
    regularPrice: "25.00 €",
    offerPrice: "9.90 €",
    ctaLabel: "KASUTA VÕIMALUST JUBA TÄNA",
    trustRow: "Turvaline makse · Kohene ligipääs · 7-päevane garantii",
  },

  footer: {
    brand: "PRO ESCALA",
    copyright: "Copyright © proescala.online ® 2025",
    disclaimer:
      "See veebileht ei ole osa Facebooki ega Facebook Inc. veebilehest. Lisaks ei ole see sait mingil viisil Facebooki poolt heaks kiidetud ega sponsoreeritud.",
    trademark: "FACEBOOK on ettevõtte FACEBOOK, Inc. registreeritud kaubamärk.",
  },
};