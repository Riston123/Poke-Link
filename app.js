/* =========================================
   POKÉHUB — app.js
   ========================================= */

/* ── DATA ── */
const POKEMON_DB = [
  { name:"Charizard",   emoji:"🔥", type:"Fire/Flying",   rarity:"Rare",   price:210, cond:"Mint",        stars:5, category:"tcg"     },
  { name:"Mewtwo",      emoji:"🔮", type:"Psychic",       rarity:"Ultra",  price:350, cond:"Near Mint",   stars:5, category:"tcg"     },
  { name:"Pikachu",     emoji:"⚡", type:"Electric",      rarity:"Common", price:15,  cond:"Lightly Played",stars:4, category:"tcg"  },
  { name:"Rayquaza",    emoji:"🐉", type:"Dragon/Flying", rarity:"Shiny",  price:120, cond:"Mint",        stars:5, category:"tcg"     },
  { name:"Snorlax",     emoji:"😴", type:"Normal",        rarity:"Rare",   price:55,  cond:"Good",        stars:3, category:"nearby"  },
  { name:"Gengar",      emoji:"👻", type:"Ghost/Poison",  rarity:"Rare",   price:80,  cond:"Near Mint",   stars:4, category:"tcg"     },
  { name:"Blastoise",   emoji:"🌊", type:"Water",         rarity:"Rare",   price:95,  cond:"Mint",        stars:4, category:"nearby"  },
  { name:"Eevee",       emoji:"🦊", type:"Normal",        rarity:"Common", price:20,  cond:"Good",        stars:3, category:"nearby"  },
];

const NEARBY_SPAWNS = [
  { name:"Dragonite",  emoji:"🐲", dist:"80m",   rarity:"rare"  },
  { name:"Lapras",     emoji:"🧊", dist:"120m",  rarity:"shiny" },
  { name:"Pikachu",    emoji:"⚡", dist:"45m",   rarity:"common"},
  { name:"Snorlax",    emoji:"😴", dist:"200m",  rarity:"rare"  },
  { name:"Mewtwo",     emoji:"🔮", dist:"350m",  rarity:"rare"  },
];

const RAIDS = [
  { name:"Zapdos",   stars:"⭐⭐⭐⭐⭐", time:"12m 10s" },
  { name:"Snorlax",  stars:"⭐⭐",       time:"8m 45s"  },
  { name:"Mewtwo",   stars:"⭐⭐⭐⭐⭐", time:"4m 30s"  },
  { name:"Articuno", stars:"⭐⭐⭐⭐",   time:"22m 00s" },
];

const EVENTS = [
  { icon:"🌟", name:"Community Day",    time:"Saturday 6:00 PM" },
  { icon:"🔦", name:"Spotlight Hour",   time:"Saturday 1:00 PM" },
  { icon:"🥚", name:"Hatch-a-thon",     time:"Sunday 10:00 AM"  },
  { icon:"🏆", name:"GO Battle League", time:"Ongoing"           },
];

const NOTIFICATIONS = [
  { icon:"⭐", title:"Wishlist Match!",       sub:"Dialga listed nearby for $80" },
  { icon:"⚔️", title:"Raid Starting Soon",   sub:"Mewtwo 5★ — 5 minutes left"   },
  { icon:"💰", title:"Price Drop Alert",      sub:"Charizard V dropped to $180"   },
  { icon:"💬", title:"New Message",           sub:"PokeTrader91: Is it available?" },
];

const TRADERS = [
  { name:"PokeTrader91", badge:"Verified", has:"Dialga"   },
  { name:"ShinyHunter",  badge:"Pro",      has:"Umbreon"  },
  { name:"CardMaster",   badge:"Trusted",  has:"Charizard"},
];

const CHAT_CONTACTS = [
  { name:"PokeTrader91", avatar:"🎮", preview:"Is the Rayquaza still available?" },
  { name:"ShinyHunter",  avatar:"✨", preview:"Would you take $700?"             },
];

const CARD_SCAN_RESULTS = [
  { name:"Charizard VMAX",   value:"$210 AUD", rarity:"Rare Holo", set:"Sword & Shield" },
  { name:"Pikachu V",        value:"$45 AUD",  rarity:"Ultra Rare", set:"Vivid Voltage"  },
  { name:"Mewtwo GX",        value:"$120 AUD", rarity:"GX Holo",    set:"Unbroken Bonds" },
  { name:"Rayquaza EX",      value:"$88 AUD",  rarity:"Ex Holo",    set:"Roaring Skies"  },
];

/* ── STATE ── */
let wishlist        = ["Dialga","Umbreon"];
let collection      = [];
let marketFilter    = "all";
let currentChat     = null;
let chatHistories   = { PokeTrader91: [
  { from:"them", text:"Is the Rayquaza still available?" },
  { from:"me",   text:"Yes, it's available!" },
], ShinyHunter: [
  { from:"them", text:"Would you take $700?" },
]};
let raidSeconds     = 900; // 15 min


