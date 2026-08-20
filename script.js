
const CharacterData = {
  Mage: {
    key:'Mage', icon:'🧙', role:'Burst / Crowd Control', color:0x8a5cff,
    hp:500, mana:350, patk:20, magic:45, pdef:20, mdef:30, aspd:1.0, critRate:0.0, critDmg:1.5, moveSpeed:5.0,
    growth:{hp:30, mana:25, patk:2, magic:7, pdef:2, mdef:3},
    basic:{name:'Arcane Bolt', icon:'✨', mult:1.0, isMagic:true, aoe:true, aoeRadius:2.6, range:9, fx:{type:'bolt', color:0xb98aff}},
    passive:{name:'Mana Flow', icon:'🔷', desc:'Setiap 4 Basic Attack, kembalikan 8 Mana.'},
    skill1:{name:'Frozen Spike', icon:'❄️', mult:1.8, isMagic:true, manaCost:25, cooldown:6, groundTargetAoe:true, range:8, aoeRadius:4.5, effect:{type:'stun', duration:1.0}, fx:{type:'ice', color:0xbfe8ff}, desc:'Lingkaran es meledak di tubuh musuh terdekat, damage area di sekitarnya + root 1 detik.'},
    skill2:{name:'Fire Blast', icon:'🔥', mult:1.6, isMagic:true, manaCost:35, cooldown:12, aoe:true, aoeRadius:5.2, effect:{type:'burnStack', dps:60, duration:3, maxStacks:3}, fx:{type:'fire', color:0xff7a3f}, casterFx:{type:'areaRing', color:0xff7a3f, radius:5.2, life:0.9, opacity:0.85, scaleFrom:0.35, scaleTo:1.0}, desc:'Area api besar muncul di tubuh Mage, membakar semua musuh dalam radius. Burn 60 DPS/3 detik, bisa ditumpuk hingga 3x (tiap tumpukan 3 detik dihitung sendiri-sendiri, jadi total DPS menurun bertahap saat tumpukan lama habis).'},
    skill3:{name:'Temporal Shift', icon:'⏳', mult:2.6, isMagic:true, manaCost:35, cooldown:22, range:6, resetSkills:['skill1','skill2'], fx:{type:'shield', color:0x7fe0d0}, desc:'Damage + reset cooldown Skill 1 & 2.'},
    ultimate:{name:'Dimensional Tornado', icon:'🌪️', mult:4.8, isMagic:true, manaCost:90, cooldown:46, groundTargetAoe:true, aoeRadius:5.8, effect:{type:'stun', duration:1.5}, resetSkills:['skill3'], fx:{type:'ice', color:0xbfe8ff}, fx:{type:'tornado', color:0x8a5cff}, desc:'Damage besar area + Stun 1.5 detik + reset cooldown Skill 3.'}
  },
  Archer: {
    key:'Archer', icon:'🏹', role:'Sustained DPS / Critical', color:0x4fd68c,
    hp:580, mana:180, patk:45, magic:0, pdef:20, mdef:20, aspd:1.5, critRate:0.15, critDmg:1.5, moveSpeed:5.4,
    growth:{hp:35, mana:10, patk:6, pdef:2, mdef:2},
    basic:{name:'Quick Shot', icon:'🏹', mult:1.05, isMagic:false, range:7.5, fx:{type:'arrow', color:0x4fd68c}},
    passive:{name:'Hawk Eye', icon:'🦅', desc:'+8% Crit Rate & menembak 2 panah sekaligus (damage tetap sama) selama 3 detik setelah pakai skill. Crit Rate ini bersifat transferable — bisa dipakai karakter lain lewat swap.'},
    skill1:{name:'Blade Arrow', icon:'🏹', mult:1.9, isMagic:false, manaCost:28, cooldown:4, range:7.5, defShred:0.3, fx:{type:'arrow', color:0xfff07a}, desc:'Damage tinggi, abaikan 30% Defense.'},
    skill2:{name:'Multi Shot', icon:'🎯', mult:1.35, isMagic:false, manaCost:18, cooldown:5, range:7, maxTargets:3, fx:{type:'arrow', color:0x8fe8b0}, desc:'Tembak 3 anak panah ke hingga 3 musuh terdekat dalam radius (1 anak panah per musuh).'},
    skill3:{name:'Explosive Trap', icon:'💣', mult:1.7, isMagic:false, manaCost:24, cooldown:12, thrownBomb:true, range:9, projectileSpeed:11, aoeRadius:2.4, effect:{type:'slow', value:0.4, duration:2}, fx:{type:'bomb', color:0x5a4632}, impactFx:{type:'shockwave', color:0xffb84f}, impactFx2:{type:'fire', color:0xffcf7a}, desc:'Bom dilempar ke musuh terdekat, meledak di titik jatuhnya (bukan di badan Archer) + Slow 40% selama 2 detik.'},
    ultimate:{name:'Rain of Arrows', icon:'🌧️', mult:3.4, isMagic:false, manaCost:85, cooldown:42, rainDrop:true, aoeRadius:5.8, selfBuff:{type:'archerBoost', atkPct:0.25, critRatePct:0.20, critDmgPct:0.40, duration:12}, fx:{type:'shockwave', color:0x4fd68c}, desc:'Hujan panah — 1 anak panah + ledakan jatuh per musuh dalam radius, + Marksman Focus 12 detik: +25% Attack, +20% Crit Chance, +40% Crit Damage.'}
  },
  Assassin: {
    key:'Assassin', icon:'⚔️', role:'Burst Physical / Mobility', color:0xe0475a,
    hp:560, mana:160, patk:55, magic:0, pdef:20, mdef:20, aspd:1.3, critRate:0.10, critDmg:1.7, moveSpeed:5.75,
    growth:{hp:33, mana:10, patk:7, pdef:2, mdef:2},
    basic:{name:'Slash', icon:'🗡', mult:1.05, isMagic:false, aoe:true, aoeRadius:2.4, fx:{type:'slash', color:0xe0475a}},
    passive:{name:'Killer Instinct', icon:'💀', desc:'+20% Crit Damage ke musuh HP < 50%.'},
    skill1:{name:'Shadow Strike', icon:'🌑', mult:2.0, isMagic:false, manaCost:18, cooldown:3.5, dash:true, fx:{type:'slash', color:0xff5c5c}, desc:'Gap-close cepat + damage besar.'},
    skill2:{name:'Poison Blade', icon:'🧪', mult:1.3, isMagic:false, manaCost:22, cooldown:5, aoe:true, aoeRadius:3.4, effect:{type:'dot', dps:20, duration:3}, fx:{type:'slash', color:0x7fe08a}, desc:'Damage area + Poison 3 detik.'},
    skill3:{name:'Shadow Dash', icon:'💨', mult:2.0, isMagic:false, manaCost:20, cooldown:8, dashAttack:true, dashDistance:3.5, dashRadius:2.2, fx:{type:'slash', color:0xaaaaaa}, desc:'Dash sesuai arah gerak, damage musuh yang dilewati + I-Frame singkat.'},
    ultimate:{name:'Execution', icon:'☠️', mult:5.0, isMagic:false, manaCost:85, cooldown:24, executeBonus:0.5, blinkStrike:true, blinkHits:4, fx:{type:'slash', color:0xff2b2b}, desc:'Blink 4x ke musuh terdekat, tiap hit damage besar. Tak bisa di-hit selama durasi.'}
  },
  Fighter: {
    key:'Fighter', icon:'🛡️', role:'Tank / Bruiser', color:0xe8b64c,
    hp:800, mana:120, patk:40, magic:0, pdef:40, mdef:40, aspd:0.9, critRate:0.05, critDmg:1.5, moveSpeed:4.75,
    growth:{hp:45, mana:8, patk:5, pdef:4, mdef:4},
    basic:{name:'Slam', icon:'🔨', mult:1.15, isMagic:false, aoe:true, targetAoe:true, range:3.2, aoeRadius:2.6, fx:{type:'shockwave', color:0xe8b64c}},
    passive:{name:'Bulwark', icon:'🧱', desc:'Shield 15% Max HP otomatis saat HP < 30% (CD 30 detik).'},
    skill1:{name:'Shield Bash', icon:'🛡️', mult:1.4, isMagic:false, manaCost:15, cooldown:4, aoe:true, targetAoe:true, range:3.6, aoeRadius:3.0, effect:{type:'stun', duration:1.0}, fx:{type:'shockwave', color:0xf2d34c}, desc:'Damage area + Stun 1 detik.'},
    skill2:{name:'Guardian Smash', icon:'💢', mult:1.8, isMagic:false, manaCost:28, cooldown:6, aoe:true, targetAoe:true, range:4.5, aoeRadius:4.2, fx:{type:'shockwave', color:0xff8a3f}, desc:'Hantaman area damage besar.'},
    skill3:{name:'Iron Will', icon:'🩸', mult:0, isMagic:false, manaCost:18, cooldown:24, selfBuff:{type:'ironwill', defMult:1.3, lifesteal:0.15, duration:7}, fx:{type:'shield', color:0xe8b64c}, desc:'+30% Defense & 15% Lifesteal, 7 detik (self-buff, tidak transferable).'},
    ultimate:{name:'Earth Sunder', icon:'🌋', mult:4.2, isMagic:false, manaCost:75, cooldown:54, aoe:true, targetAoe:true, range:5.0, aoeRadius:4.5, effect:{type:'stun', duration:1.5}, selfBuff:{type:'titan', atkPct:0.1, hpPct:0.2, defPct:0.2, lifesteal:0.25, duration:12}, fx:{type:'shockwave', color:0xb5651d}, desc:'Damage besar area + Knockdown 1.5 detik. Berubah raksasa 1.5x selama 12 detik: +10% Damage, +20% Max HP, +20% Defense, +25% Lifesteal (self-buff, tidak transferable, stack dgn Iron Will).'}
  },
  Tactician: {
    key:'Tactician', icon:'🎖️', role:'Damage Buffer / Pennet', color:0xd4a84f,
    hp:620, mana:220, patk:40, magic:40, pdef:28, mdef:28, aspd:1.1, critRate:0.05, critDmg:1.5, moveSpeed:5.0,
    growth:{hp:36, mana:14, patk:5, magic:5, pdef:3, mdef:3},
    basic:{name:'Bomb Toss', icon:'💣', mult:0.8, hybrid:true, aoe:true, aoeRadius:2.4, range:9, projectileSpeed:12, fx:{type:'bomb', color:0xd4a84f}, desc:'Melempar bola bom ke musuh terdekat — meledak di titik jatuhnya, memberikan damage Physical dan Magical secara bersamaan (mult 0.4 masing-masing).'},
    passive:{name:'Battle Formation', icon:'📯', desc:'Setiap kali Tactician memberikan buff kepada character lain, target mendapatkan +5% Attack selama 5 detik. Efek tidak dapat ditumpuk, tetapi durasi dapat diperbarui.'},
    skill1:{name:'Focused Strike', icon:'🎯', mult:1.6, hybrid:true, manaCost:25, cooldown:16, range:6, targetAlly:true, selfBuff:{type:'hybridAtkShare', pct:0.15, duration:8}, fx:{type:'slash', color:0xd4a84f}, desc:'Damage Physical + Magical ke 1 musuh, dan memberikan 15% Hybrid Attack milik Tactician kepada rekan on-field selama 8 detik.'},
    skill2:{name:'Weakpoint Strike', icon:'🗡️', mult:1.6, hybrid:true, manaCost:25, cooldown:16, range:6, targetAlly:true, selfBuff:{type:'hybridPenShare', pct:0.15, duration:8}, fx:{type:'slash', color:0xffcf6a}, desc:'Damage Physical + Magical ke 1 musuh, dan memberikan 15% Hybrid Penetration kepada rekan on-field selama 8 detik. Jika dipakai selagi efek Suppression Blast (Skill 3) masih aktif di musuh, penurunan Hybrid Defense dari Skill 3 meningkat jadi 30%.'},
    skill3:{name:'Suppression Blast', icon:'💥', mult:1.1, hybrid:true, manaCost:32, cooldown:32, aoe:true, aoeRadius:4.5, effect:{type:'tacSuppress', slow:0.30, defShred:0.20, duration:8}, fx:{type:'shockwave', color:0xb5651d}, desc:'Damage Physical + Magical area, Slow 30%, dan menurunkan Hybrid Defense musuh 20% selama 8 detik (meningkat jadi 30% jika Skill 2 dipakai selagi efek ini masih aktif).'},
    ultimate:{name:'Grand Strategy', icon:'🏳️', mult:2.2, hybrid:true, manaCost:80, cooldown:64, range:7, targetAlly:true, selfBuff:{type:'grandStrategyShare', atkSharePct:0.30, critRateSharePct:0.25, critDmgSharePct:0.10, duration:12}, fx:{type:'banner', color:0xd4a84f}, desc:'Memberikan kepada rekan on-field: 30% Hybrid Attack, 25% Crit Chance, dan 10% Crit Damage milik Tactician selama 12 detik.'}
  },
  Arcanist: {
    key:'Arcanist', icon:'🔮', role:'Cooldown Buffer / Debuffer', color:0x9b6cff,
    hp:580, mana:300, patk:15, magic:35, pdef:22, mdef:35, aspd:1.0, critRate:0.05, critDmg:1.5, moveSpeed:5.0,
    growth:{hp:32, mana:20, patk:2, magic:5, pdef:2, mdef:3},
    basic:{name:'Arcane Bolt', icon:'✨', mult:1.0, isMagic:true, range:6.5, fx:{type:'bolt', color:0xb98aff}},
    passive:{name:'Arcane Resonance', icon:'✨', desc:'Setiap kali Arcanist memberikan buff kepada character lain, target mendapatkan +5% Magic Damage selama 5 detik. Efek tidak dapat ditumpuk, tetapi durasi dapat diperbarui.'},
    skill1:{name:'Arcane Blessing', icon:'💠', mult:0, isMagic:true, manaCost:25, cooldown:8, targetAlly:true, selfBuff:{type:'magicAttack', magicPct:0.20, duration:8}, fx:{type:'buff', color:0x9b6cff}, desc:'Memberikan +20% Magic Damage kepada character lain selama 8 detik.'},
    skill2:{name:'Mystic Rupture', icon:'💥', mult:1.3, isMagic:true, manaCost:22, cooldown:10, aoe:true, aoeRadius:4.5, effect:{type:'magicShred', value:0.20, duration:5}, fx:{type:'magic', color:0xc58cff}, desc:'Damage area + mengurangi Magic Defense musuh 20% selama 5 detik.'},
    skill3:{name:'Arcane Focus', icon:'🌌', mult:0, isMagic:true, manaCost:35, cooldown:18, targetAlly:true, selfBuff:{type:'magicBoost', magicPct:0.10, critRatePct:0.10, critDmgPct:0.15, duration:8}, fx:{type:'buff', color:0x7fe0d0}, desc:'Memberikan +10% Magic Damage, +10% Crit Rate, dan +15% Crit Damage selama 8 detik.'},
    ultimate:{name:'Mystic Dominion', icon:'🌀', mult:2.8, isMagic:true, manaCost:75, cooldown:45, aoe:true, aoeRadius:5.5, targetAlly:true, selfBuff:{type:'mystic', magicPct:0.15, critRatePct:0.15, penetrationPct:0.15, duration:12}, fx:{type:'magic', color:0x9b6cff}, desc:'Damage area + memberikan +15% Magic Damage, +15% Crit Rate, dan +15% Magic Penetration selama 12 detik.'}
  },
  Wrestler: {
    key:'Wrestler', icon:'🤼', role:'Melee DPS / Attack Speed', color:0xd9824b,
    hp:700, mana:150, patk:42, magic:0, pdef:32, mdef:25, aspd:1.5, critRate:0.08, critDmg:1.5, moveSpeed:5.2,
    growth:{hp:40, mana:10, patk:6, pdef:3, mdef:2},
    basic:{name:'Heavy Fist', icon:'👊', mult:0.95, isMagic:false, aoe:true, aoeRadius:2.2, fx:{type:'punch', color:0xd9824b}},
    passive:{name:'Momentum', icon:'🔥', desc:'Setiap Basic Attack yang mengenai musuh memberikan 1 stack Momentum selama 4 detik. Setiap stack memberikan +5% Attack Speed. Maksimal 4 stack. Stack diperbarui saat menyerang.'},
    skill1:{name:'Power Slam', icon:'💥', mult:1.7, isMagic:false, manaCost:18, cooldown:5, aoe:true, aoeRadius:3.0, effect:{type:'stun', duration:0.8}, fx:{type:'shockwave', color:0xe8a15b}, desc:'Menghantam musuh dengan kuat, memberikan damage area + Stun 0.8 detik.'},
    skill2:{name:'Rapid Combo', icon:'🥊', mult:0.55, isMagic:false, manaCost:25, cooldown:7, hits:3, aoe:true, aoeRadius:2.5, fx:{type:'punch', color:0xffb15c}, desc:'Melakukan 3 pukulan cepat, masing-masing memberikan 0.55x Attack Damage.'},
    skill3:{name:'Adrenaline Rush', icon:'💪', mult:0, isMagic:false, manaCost:30, cooldown:18, selfBuff:{type:'adrenaline', atkPct:0.15, aspdPct:0.25, lifesteal:0.10, duration:8}, fx:{type:'buff', color:0xff6b4a}, desc:'Meningkatkan +15% Attack, +25% Attack Speed, dan +10% Lifesteal selama 8 detik.'},
    ultimate:{name:'Final Grapple', icon:'🤼', mult:3.8, isMagic:false, manaCost:75, cooldown:38, aoe:true, aoeRadius:3.5, effect:{type:'stun', duration:1.5}, selfBuff:{type:'wrestlerRage', atkPct:0.20, aspdPct:0.30, lifesteal:0.15, duration:10}, fx:{type:'shockwave', color:0xd94f3d}, desc:'Serangan grappling besar ke area + Stun 1.5 detik. Setelahnya mendapatkan +20% Attack, +30% Attack Speed, dan +15% Lifesteal selama 10 detik.'}
  },
  Necromancer: {
    key:'Necromancer', icon:'💀', role:'Magic DPS / Summoner', color:0x7b5bb5,
    hp:540, mana:320, patk:15, magic:42, pdef:20, mdef:32, aspd:0.9, critRate:0.05, critDmg:1.5, moveSpeed:4.9,
    growth:{hp:32, mana:24, patk:2, magic:6, pdef:2, mdef:3},
    basic:{name:'Soul Bolt', icon:'👻', mult:1.0, isMagic:true, range:7.0, fx:{type:'bolt', color:0x9b7bd4}},
    passive:{name:'Dark Pact', icon:'☠️', desc:'Setiap summon yang masih hidup meningkatkan Magic Damage Necromancer sebesar 4%. Maksimal 3 summon aktif.'},
    skill1:{name:'Soul Drain', icon:'🩸', mult:1.5, isMagic:true, manaCost:22, cooldown:5, range:7.0, effect:{type:'lifesteal', value:0.15}, fx:{type:'dark', color:0x8f5ac7}, desc:'Menyerang musuh dengan energi gelap dan memulihkan 15% dari damage yang diberikan sebagai HP.'},
    skill2:{name:'Raise Skeleton', icon:'💀', mult:0, isMagic:true, manaCost:40, cooldown:10, summon:{type:'skeleton', count:1, maxActive:3, duration:18}, fx:{type:'summon', color:0x8060a8}, desc:'Memanggil 1 Skeleton untuk membantu menyerang musuh. Maksimal 3 summon aktif.'},
    skill3:{name:'Grave Curse', icon:'🪦', mult:1.4, isMagic:true, manaCost:35, cooldown:12, aoe:true, aoeRadius:4.5, effect:{type:'magicShred', value:0.15, duration:5}, fx:{type:'dark', color:0x665080}, desc:'Memberikan damage area + mengurangi Magic Defense musuh 15% selama 5 detik.'},
    ultimate:{name:'Army of the Dead', icon:'☠️', mult:2.8, isMagic:true, manaCost:90, cooldown:48, aoe:true, aoeRadius:5.5, summon:{type:'skeleton', count:3, maxActive:3, duration:20}, effect:{type:'slow', value:0.3, duration:3}, fx:{type:'summon', color:0x593b78}, desc:'Memberikan damage area + Slow 30% selama 3 detik dan memanggil pasukan Skeleton hingga maksimal 3 summon aktif selama 20 detik.'}
  }
};

const EnemyData = {
  Goblin:{ name:'Goblin', hp:300, patk:30, pdef:9, breakHits:5, detectionRadius:10, attackRange:1.7, moveSpeed:3.7, expReward:48, goldReward:16, scale:1.0, color:0x4a7c3f },
  GoblinElite:{ name:'Goblin Elite', hp:650, patk:50, pdef:16, breakHits:10, detectionRadius:12, attackRange:1.8, moveSpeed:4.1, expReward:118, goldReward:44, scale:1.25, color:0x4a7c3f, isElite:true },
  GoblinKing:{ name:'Goblin King', hp:40000, patk:220, pdef:27, breakHits:25, detectionRadius:40, attackRange:2.3, moveSpeed:3.4, expReward:1800, goldReward:560, scale:2.2, color:0x2f5c2f, isBoss:true },
  DummyGoblin:{ name:'Dummy Goblin', hp:1500, patk:30, pdef:9, breakHits:5, detectionRadius:0, attackRange:1.7, moveSpeed:0, expReward:0, goldReward:0, scale:1.0, color:0x8a8a8a, isDummy:true },
  DummyGoblinElite:{ name:'Dummy Goblin Elite', hp:3250, patk:50, pdef:16, breakHits:10, detectionRadius:0, attackRange:1.8, moveSpeed:0, expReward:0, goldReward:0, scale:1.25, color:0x6b6b8a, isElite:true, isDummy:true },
  DummyGoblinKing:{ name:'Dummy Goblin King', hp:80000, patk:220, pdef:27, breakHits:25, detectionRadius:0, attackRange:2.3, moveSpeed:0, expReward:0, goldReward:0, scale:2.2, color:0x4a4a5c, isBoss:true, isDummy:true },
  DummyInfinite:{ name:'Dummy Uji Damage', hp:999999999, patk:0, pdef:0, breakHits:999999, detectionRadius:0, attackRange:1.7, moveSpeed:0, expReward:0, goldReward:0, scale:1.3, color:0xffcf4a, isDummy:true, isInfinite:true }
};

const DungeonData = {
  greenForest:{
    name:'Green Forest', region:'Region 1', levelRange:'Lv 1–10',
    stages:[
      {id:1, mobs:[{type:'Goblin', count:2}]},
      {id:2, mobs:[{type:'Goblin', count:3}]},
      {id:3, mobs:[{type:'GoblinElite', count:2}]},
      {id:4, mobs:[{type:'GoblinElite', count:4}]},
      {id:5, boss:'GoblinKing', mobs:[{type:'GoblinElite', count:4}]}
    ]
  }
};

// Farming domains now have 3 difficulty tiers: harder mobs + bigger loot multiplier per tier.
const DomainData = {
  artifactDomain:{ name:'Artifact Domain', desc:'Drop Artifact. Makin tinggi level, makin besar peluang rarity tinggi.',
    tiers:[
      {level:1, mobs:[{type:'Goblin', count:5}], artifactChance:0.2},
      {level:2, mobs:[{type:'Goblin', count:3},{type:'GoblinElite', count:2}], artifactChance:0.3},
      {level:3, mobs:[{type:'Goblin', count:2},{type:'GoblinElite', count:4}], artifactChance:0.35},
      {level:4, mobs:[{type:'Goblin', count:2},{type:'GoblinElite', count:5}], artifactChance:0.4},
      {level:5, mobs:[{type:'Goblin', count:3},{type:'GoblinElite', count:5}], artifactChance:0.45},
      {level:6, mobs:[{type:'Goblin', count:4},{type:'GoblinElite', count:6}], artifactChance:0.5}
    ]
  },
  materialDomain:{ name:'Material Domain', desc:'Drop Skill Book & Essence. Makin tinggi level, makin banyak dropnya.',
    tiers:[
      {level:1, mobs:[{type:'Goblin', count:4}], lootMult:1},
      {level:2, mobs:[{type:'Goblin', count:4},{type:'GoblinElite', count:1}], lootMult:1.4},
      {level:3, mobs:[{type:'Goblin', count:3},{type:'GoblinElite', count:2}], lootMult:1.8},
      {level:4, mobs:[{type:'GoblinElite', count:3},{type:'Goblin', count:1}], lootMult:2.3},
      {level:5, mobs:[{type:'GoblinElite', count:3},{type:'Goblin', count:2}], lootMult:2.8},
      {level:6, mobs:[{type:'GoblinElite', count:5},{type:'Goblin', count:2}], lootMult:3.3}
    ]
  },
  rewardDomain:{ name:'Domain Ganjaran', desc:'Fokus Gold/EXP/Gems. Makin tinggi level, makin besar rewardnya.',
    tiers:[
      {level:1, mobs:[{type:'Goblin', count:3},{type:'GoblinElite', count:1}], lootMult:1},
      {level:2, mobs:[{type:'Goblin', count:2},{type:'GoblinElite', count:2}], lootMult:1.5},
      {level:3, mobs:[{type:'GoblinElite', count:3}], lootMult:2.0},
      {level:4, mobs:[{type:'GoblinElite', count:4}], lootMult:2.6},
      {level:5, mobs:[{type:'GoblinElite', count:4},{type:'Goblin', count:2}], lootMult:3.2},
      {level:6, mobs:[{type:'GoblinElite', count:6}], lootMult:4.0}
    ]
  }
};

const ARTIFACT_SLOTS = ['Crown','Bracelet','Ring','Necklace','Core'];
// Main-stat types an artifact can roll, each with its own base value per rarity
// (percentages except moveSpeed, which is flat units added to base Move Speed).
const STAT_LABELS = {hp:'HP', patk:'Attack', magic:'Magic Power', defense:'Defense', critRate:'Crit Chance', critDmg:'Crit Damage', cooldown:'Cooldown Reduction', moveSpeed:'Movement Speed'};
const MAIN_STAT_BASE = {
  hp:       {Common:0.05, Uncommon:0.08, Rare:0.12, Epic:0.18, Legendary:0.26},
  patk:     {Common:0.05, Uncommon:0.08, Rare:0.12, Epic:0.18, Legendary:0.26},
  magic:    {Common:0.05, Uncommon:0.08, Rare:0.12, Epic:0.18, Legendary:0.26},
  defense:  {Common:0.05, Uncommon:0.08, Rare:0.12, Epic:0.18, Legendary:0.26},
  critRate: {Common:0.02, Uncommon:0.03, Rare:0.04, Epic:0.07, Legendary:0.11},
  critDmg:  {Common:0.04, Uncommon:0.06, Rare:0.09, Epic:0.14, Legendary:0.22},
  cooldown: {Common:0.02, Uncommon:0.03, Rare:0.05, Epic:0.07, Legendary:0.10},
  moveSpeed:{Common:0.15, Uncommon:0.25, Rare:0.35, Epic:0.5,  Legendary:0.7}
};
// Substats: rolled once (fixed value) every 5 upgrade levels (5/10/15), never grow further.
const SUBSTAT_POOL = [
  {type:'critRate', label:'Crit Chance', min:0.07, max:0.10},
  {type:'critDmg', label:'Crit Damage', min:0.14, max:0.20},
  {type:'patk', label:'Attack', min:0.15, max:0.25},
  {type:'magic', label:'Magic Power', min:0.15, max:0.25},
  {type:'defense', label:'Defense', min:0.20, max:0.30},
  {type:'hp', label:'HP', min:0.20, max:0.30},
  {type:'cooldown', label:'Cooldown Reduction', min:0.05, max:0.15},
  {type:'moveSpeed', label:'Movement Speed', min:0.4, max:1.2}
];
const ARTIFACT_MAX_LEVEL = 20;
// 5-tier rarity, odds shift toward Legendary as the domain's difficulty level rises.
const RARITY_TABLE_BY_TIER = {
  1:[{name:'Common',weight:100}],
  2:[{name:'Common',weight:30},{name:'Uncommon',weight:70}],
  3:[{name:'Common',weight:10},{name:'Uncommon',weight:30},{name:'Rare',weight:60}],
  4:[{name:'Common',weight:5},{name:'Uncommon',weight:10},{name:'Rare',weight:35},{name:'Epic',weight:50}],
  5:[{name:'Uncommon',weight:5},{name:'Rare',weight:25},{name:'Epic',weight:50},{name:'Legendary',weight:20}],
  6:[{name:'Rare',weight:20},{name:'Epic',weight:40},{name:'Legendary',weight:40}]
};
const RARITY_COLOR = {Common:'var(--r-common)', Uncommon:'var(--r-uncommon)', Rare:'var(--r-rare)', Epic:'var(--r-epic)', Legendary:'var(--r-legendary)'};
// Full-set bonus: all 5 artifact slots filled with the same rarity grants a flat
// bonus applied across HP/Attack/Magic/Defense on top of each artifact's own stat.
const SET_BONUS_BY_RARITY = {Common:0.03, Uncommon:0.05, Rare:0.08, Epic:0.12, Legendary:0.20};
// Deleting an artifact ("salvage") gives Magical Dust, the only way to fund upgrades.
const DUST_BASE_BY_RARITY = {Common:3, Uncommon:5, Rare:8, Epic:13, Legendary:20};

const SKILL_UPGRADE_COST = {
  2:{gold:500, book:1, ess:2}, 3:{gold:900, book:2, ess:4}, 4:{gold:1500, book:3, ess:6},
  5:{gold:2500, book:4, ess:8}, 6:{gold:4000, book:5, ess:10}, 7:{gold:6500, book:6, ess:12},
  8:{gold:9500, book:8, ess:15}, 9:{gold:14000, book:10, ess:18}, 10:{gold:20000, book:12, ess:25}
};
const CLASS_ESSENCE = {Mage:'Magic Essence', Archer:'Arrow Emblem', Assassin:'Shadow Core', Fighter:'War Medal', Tactician:'Command Insignia', Arcanist:'Mystic Rune', Necromancer:'Bone Fragment'};
// Skills unlock as the player levels up (Lv1 has none), and each further
// skill-level upgrade needs its own player-level gate: unlock + (skillLevel-1).
const UNLOCK_LEVEL = {skill1:2, skill2:4, skill3:7, ultimate:10};
function skillUpgradeLevelReq(slot, targetSkillLevel){
  return UNLOCK_LEVEL[slot] + (targetSkillLevel-1);
}

function pickWeighted(table){
  const total = table.reduce((a,t)=>a+t.weight,0);
  let r = Math.random()*total;
  for(const t of table){ if(r<t.weight) return t; r-=t.weight; }
  return table[0];
}
function makeArtifact(rarityName){
  const slot = ARTIFACT_SLOTS[Math.floor(Math.random()*ARTIFACT_SLOTS.length)];
  const statTypes = Object.keys(MAIN_STAT_BASE);
  const statType = statTypes[Math.floor(Math.random()*statTypes.length)];
  const base = MAIN_STAT_BASE[statType][rarityName];
  return {
    id:'art_'+Date.now()+'_'+Math.floor(Math.random()*9999),
    name:`${rarityName} ${slot}`,
    rarity:rarityName, slot,
    mainStatType:statType, mainStatLabel:STAT_LABELS[statType], mainStatBase:base,
    level:1, subStats:[]
  };
}
function generateArtifact(tier){
  const table = RARITY_TABLE_BY_TIER[tier] || RARITY_TABLE_BY_TIER[1];
  const rarity = pickWeighted(table);
  return makeArtifact(rarity.name);
}
function generateArtifactOfRarity(rarityName){
  return makeArtifact(rarityName);
}
function normalizeArtifact(a){
  if(!a) return a;
  if(a.subStats===undefined) a.subStats=[];
  if(a.level===undefined) a.level=1;
  if(a.mainStatType===undefined){
    // migrate from the old pre-upgrade artifact shape (statType/statLabel/pct)
    const oldType = a.statType || 'hp';
    a.mainStatType = oldType;
    a.mainStatLabel = a.statLabel || STAT_LABELS[oldType] || oldType;
    a.mainStatBase = (a.pct!==undefined) ? a.pct : ((MAIN_STAT_BASE[oldType]||{})[a.rarity] || 0.05);
  }
  if(a.mainStatBase===undefined) a.mainStatBase = (MAIN_STAT_BASE[a.mainStatType]||{})[a.rarity] || 0.05;
  if(a.mainStatLabel===undefined) a.mainStatLabel = STAT_LABELS[a.mainStatType] || a.mainStatType;
  return a;
}
function artifactMainStatValue(a){
  return a.mainStatBase * (1 + (a.level-1)*0.06);
}
function formatStatValue(type, value){
  return type==='moveSpeed' ? '+'+value.toFixed(2) : '+'+Math.round(value*100)+'%';
}
function defenseReduction(def){
  const K = 566.7;
  return Math.min(1 - (K/(K+def)), 0.8);
}
function requiredExp(level){ return Math.round(100 * Math.pow(level, 1.45)); }

// ---------------------------------------------------------------------
// Storage — prefers the Claude artifact storage API (works when previewed
// inside the chat); falls back to localStorage automatically when the
// file is downloaded and opened directly in a normal browser (e.g. on a
// phone), which is the common case for testing this prototype.
// Each class gets its own save slot (save_Mage, save_Archer, ...).
// ---------------------------------------------------------------------
async function storageSet(key, value){
  try{
    if(window.storage && typeof window.storage.set==='function'){
      await window.storage.set(key, value, false);
      return;
    }
  }catch(e){ /* fall through to localStorage */ }
  try{ localStorage.setItem(key, value); }catch(e){ console.error('Save failed', e); }
}
async function storageGet(key){
  try{
    if(window.storage && typeof window.storage.get==='function'){
      const res = await window.storage.get(key, false);
      if(res && res.value!==undefined) return res.value;
    }
  }catch(e){ /* fall through to localStorage */ }
  try{ return localStorage.getItem(key); }catch(e){ return null; }
}
async function storageDelete(key){
  try{
    if(window.storage && typeof window.storage.delete==='function'){
      await window.storage.delete(key, false);
      return;
    }
  }catch(e){ /* fall through to localStorage */ }
  try{ localStorage.removeItem(key); }catch(e){ /* ignore */ }
}

document.getElementById('reset-progress-btn').addEventListener('click', async ()=>{
  if(!confirm('Yakin mau reset SEMUA progress (semua class) dan mulai dari awal? Gold, Gems, Artifact, Level, dan progress dungeon/domain akan hilang.')) return;
  const typed = prompt('Ketik "lanjutkan" (tanpa tanda kutip) untuk konfirmasi reset total:');
  if(typed===null) return;
  if(typed.trim().toLowerCase()!=='lanjutkan'){ alert('Reset dibatalkan — teks yang diketik tidak sesuai.'); return; }
  if(!confirm('Konfirmasi terakhir: benar-benar reset semua progress sekarang?')) return;
  await storageDelete('save_shared');
  for(const k of Object.keys(CharacterData)) await storageDelete('save_class_'+k);
  alert('Semua progress sudah direset.');
  window.location.reload();
});

// =======================================================================
// CLASS SELECT SCREEN — left pane: pick which class to preview.
// Right pane: full detail for the previewed class (basic attack, passive,
// skills, and any saved progress — level, skill levels, equipped artifacts).
// A separate button inside the detail panel actually adds/removes the
// previewed class from the 2-character team.
// =======================================================================
let selectedTeam = [];
let previewClassKey = null;
const classSaveCache = {}; // classKey -> parsed save data (or null if none)

function refreshTeamSelectUI(){
  document.getElementById('slot1-name').textContent = selectedTeam[0] ? CharacterData[selectedTeam[0]].key : '-';
  document.getElementById('slot2-name').textContent = selectedTeam[1] ? CharacterData[selectedTeam[1]].key : '-';
  document.getElementById('start-team-btn').style.display = selectedTeam.length===2 ? 'inline-block' : 'none';
  document.querySelectorAll('.class-list-item').forEach(item=>{
    const key = item.dataset.class;
    const idx = selectedTeam.indexOf(key);
    let badge = item.querySelector('.list-slot-badge');
    if(idx>=0){
      if(!badge){ badge = document.createElement('div'); badge.className='list-slot-badge'; item.appendChild(badge); }
      badge.textContent = 'S'+(idx+1);
      item.classList.add('team-selected');
    } else {
      if(badge) badge.remove();
      item.classList.remove('team-selected');
    }
  });
  updateDetailSelectButton();
}

function updateDetailSelectButton(){
  const btn = document.getElementById('detail-select-btn');
  if(!btn || !previewClassKey) return;
  const idx = selectedTeam.indexOf(previewClassKey);
  btn.textContent = idx>=0 ? `✓ Terpilih (Slot ${idx+1}) — Batalkan` : 'Pilih untuk Tim';
  btn.classList.toggle('team-selected', idx>=0);
}

function toggleTeamSelect(key){
  const idx = selectedTeam.indexOf(key);
  if(idx>=0){ selectedTeam.splice(idx,1); }
  else if(selectedTeam.length<2){ selectedTeam.push(key); }
  else { selectedTeam = [selectedTeam[1], key]; }
  refreshTeamSelectUI();
}

const listPane = document.getElementById('class-list-pane');
Object.values(CharacterData).forEach(c=>{
  const item = document.createElement('div');
  item.className='class-list-item';
  item.dataset.class = c.key;
  item.innerHTML = `
    <div class="class-list-icon" style="background:#${c.color.toString(16).padStart(6,'0')}; color:#${c.color.toString(16).padStart(6,'0')}">${c.icon}</div>
    <div class="class-list-name">${c.key}</div>
  `;
  item.addEventListener('click', ()=> selectPreviewClass(c.key));
  listPane.appendChild(item);
});

async function selectPreviewClass(key){
  previewClassKey = key;
  document.querySelectorAll('.class-list-item').forEach(el=> el.classList.toggle('previewing', el.dataset.class===key));
  renderClassDetail(key, classSaveCache[key]!==undefined ? classSaveCache[key] : null);
  if(classSaveCache[key]===undefined){
    let saveData = null;
    try{
      const raw = await storageGet('save_class_'+key);
      saveData = raw ? JSON.parse(raw) : null;
    }catch(e){ saveData = null; }
    classSaveCache[key] = saveData;
    if(previewClassKey===key) renderClassDetail(key, saveData);
  }
}

function renderClassDetail(key, saveData){
  const c = CharacterData[key];
  const pane = document.getElementById('class-detail-pane');
  const hexColor = '#'+c.color.toString(16).padStart(6,'0');

  const statChips = `
    <div class="detail-stat-grid">
      <div class="detail-stat-chip"><b>${c.hp}</b>HP</div>
      <div class="detail-stat-chip"><b>${c.mana}</b>Mana</div>
      <div class="detail-stat-chip"><b>${c.patk}</b>Attack</div>
      <div class="detail-stat-chip"><b>${c.magic}</b>Magic</div>
      <div class="detail-stat-chip"><b>${c.pdef}</b>P.Def</div>
      <div class="detail-stat-chip"><b>${c.mdef}</b>M.Def</div>
    </div>`;

  const skillLevels = (saveData && saveData.skillLevels) ? saveData.skillLevels : {skill1:1,skill2:1,skill3:1,ultimate:1};
  const charLevel = saveData ? (saveData.level||1) : 1;

  const skillRow = (slot, s)=>{
    const lvlTxt = slot ? ` (Lv.${skillLevels[slot]}/10)` : '';
    const unlockTxt = slot && UNLOCK_LEVEL[slot]>1 ? `<span style="color:var(--text-dim)"> · Butuh Char Lv.${UNLOCK_LEVEL[slot]}</span>` : '';
    return `<div class="detail-skill-row">
      <div class="dsr-head"><span>${s.icon} ${s.name}${lvlTxt}</span></div>
      <div class="dsr-meta">${s.manaCost!==undefined ? 'Mana: '+s.manaCost+' · ' : ''}${s.cooldown!==undefined ? 'Cooldown: '+s.cooldown+'s' : 'Cooldown: -'}${unlockTxt}</div>
      <div class="dsr-desc">${s.desc || (slot ? '' : 'Serangan dasar tanpa cooldown/mana.')}</div>
    </div>`;
  };

  let progressHtml;
  if(saveData){
    const eq = saveData.equippedArtifacts || {};
    const artRows = ARTIFACT_SLOTS.map(slot=>{
      const a = eq[slot];
      if(!a) return `<div class="detail-progress-row"><span>${slot}</span><span class="detail-progress-none">Kosong</span></div>`;
      normalizeArtifact(a);
      return `<div class="detail-progress-row"><span>${slot}</span><span style="color:${RARITY_COLOR[a.rarity]}">${a.rarity} Lv.${a.level} · ${a.mainStatLabel}</span></div>`;
    }).join('');
    progressHtml = `
      <div class="detail-section-h">💾 Progress Tersimpan</div>
      <div class="detail-progress-row"><span>Character Level</span><span>${charLevel}</span></div>
      <div class="detail-progress-row"><span>Skill 1 / Skill 2 / Skill 3 / Ultimate</span><span>Lv.${skillLevels.skill1} / Lv.${skillLevels.skill2} / Lv.${skillLevels.skill3} / Lv.${skillLevels.ultimate}</span></div>
      <div class="detail-section-h">💎 Artifact Terpasang</div>
      ${artRows}
    `;
  } else {
    progressHtml = `<div class="detail-section-h">💾 Progress Tersimpan</div><div class="detail-progress-none">Belum ada progress untuk karakter ini — mulai dari Level 1.</div>`;
  }

  pane.innerHTML = `
    <div class="detail-head">
      <div class="detail-icon" style="background:${hexColor}; color:${hexColor}">${c.icon}</div>
      <div>
        <div class="detail-title">${c.key}</div>
        <div class="detail-role">${c.role}</div>
      </div>
      <div class="gold-btn detail-select-btn" id="detail-select-btn">Pilih untuk Tim</div>
    </div>
    ${statChips}
    <div class="detail-section-h">⚔️ Basic Attack</div>
    ${skillRow(null, c.basic)}
    <div class="detail-section-h">🌟 Pasif — ${c.passive.name}</div>
    <div class="detail-skill-row"><div class="dsr-desc">${c.passive.desc}</div></div>
    <div class="detail-section-h">🔮 Skill Aktif</div>
    ${skillRow('skill1', c.skill1)}
    ${skillRow('skill2', c.skill2)}
    ${skillRow('skill3', c.skill3)}
    <div class="detail-section-h">💥 Ultimate</div>
    ${skillRow('ultimate', c.ultimate)}
    ${progressHtml}
  `;
  document.getElementById('detail-select-btn').addEventListener('click', ()=> toggleTeamSelect(key));
  updateDetailSelectButton();
}

document.getElementById('start-team-btn').addEventListener('click', ()=>{
  if(selectedTeam.length===2) startGame([...selectedTeam]);
});

// mark list items that already have a save so the player can see progress exists,
// and warm the save-data cache so opening the detail panel later is instant
(async ()=>{
  for(const c of Object.values(CharacterData)){
    try{
      const raw = await storageGet('save_class_'+c.key);
      if(raw){
        classSaveCache[c.key] = JSON.parse(raw);
        const item = document.querySelector(`.class-list-item[data-class="${c.key}"]`);
        if(item && !item.querySelector('.list-save-badge')){
          const badge = document.createElement('div');
          badge.className='list-save-badge';
          badge.textContent='💾';
          item.appendChild(badge);
        }
      } else {
        classSaveCache[c.key] = null;
      }
    }catch(e){ /* ignore */ }
  }
})();

let Game = null;
async function startGame(classKeys){
  document.getElementById('class-select').style.display='none';
  Game = new GameApp(classKeys);
  try{
    const sharedRaw = await storageGet('save_shared');
    if(sharedRaw) Game.applySharedSaveData(JSON.parse(sharedRaw));
    for(const ch of Game.team){
      const classRaw = await storageGet('save_class_'+ch.classKey);
      if(classRaw) Game.applyClassSaveData(ch, JSON.parse(classRaw));
    }
    Game.recalcAllStats();
    Game.team.forEach(ch=>{ ch.hp = ch.hpMax; ch.mana = ch.manaMax; });
    Game.updateHUDStatic();
    Game.initPlayerSkillRow();
    Game.toast('Save dimuat!');
  }catch(e){ console.error('load failed', e); }
  Game.enterLobby();
}
document.getElementById('restart-btn').addEventListener('click', ()=> { if(Game && Game.stageActive) return; window.location.reload(); });
document.getElementById('station-panel-close').addEventListener('click', ()=> { if(Game) Game.closeStationPanel(); });
document.getElementById('save-btn').addEventListener('click', ()=> { if(Game){ Game.saveGame(); Game.toast('Game disimpan!'); } });

// =======================================================================
// GAME APP
// =======================================================================
class GameApp{
  constructor(classKeys){
    this.classKeys = classKeys;
    this.activeIndex = 0;
    this.clock = new THREE.Clock();
    this.keys = {};
    this.mouse = {down:false, lastX:0, lastY:0};
    this.cameraTouchId = null;
    this.camYaw = 0; this.camPitch = 0.35; this.camDist = 6.5;
    this.joystickVec = {x:0,y:0};
    this.toastWrap = document.getElementById('toast-wrap');
    this.basicHitCount = 0;
    this.enemies = [];
    this.fxList = [];
    this.summons = [];
    this.stageActive = false;
    this.inLobby = false;
    this.panelOpen = false;
    this.currentRun = null;
    this.dungeonProgress = { greenForest:{ unlockedStage:1, cleared:false } };
    this.domainProgress = { artifactDomain:{unlockedTier:1}, materialDomain:{unlockedTier:1}, rewardDomain:{unlockedTier:1} }; 
    this.towerProgress = { highestFloor: 1 };
    this.quests = [
      {id:'q1', desc:'Kalahkan 5 Goblin', type:'killGoblin', target:5, progress:0, reward:{gold:200,exp:100}, claimed:false},
      {id:'q2', desc:'Bersihkan Stage 3 Green Forest', type:'clearStage3', target:1, progress:0, reward:{gems:20}, claimed:false},
      {id:'q3', desc:'Dapatkan 1 Artifact', type:'getArtifact', target:1, progress:0, reward:{gold:300}, claimed:false}
    ];

    // Shared account-wide wallet — carries over no matter which characters are on the team.
    this.gold = 0; this.gems = 0; this.materials = {};
    this.artifacts = [];
    this.autoDelete = {Common:false, Uncommon:false, Rare:false, Epic:false, Legendary:false};
    // Which team member's loadout the Artifact Master panel is currently showing/editing.
    this.artifactPanelCharIndex = 0;

    // Transferable "shared" buffs — team-wide, not tied to whichever character cast them.
    // These persist and keep ticking through a swap and can be used by either character.
    this.sharedBuffs = [];
    this.globalSwapCd = 0;

    this.initScene();
    this.initTeam();
    this.recalcAllStats();
    this.team.forEach(ch=>{ ch.hp = ch.hpMax; ch.mana = ch.manaMax; });
    this.initStations();
    this.initInput();
    this.initPlayerSkillRow();
    this.initSwapUI();
    this.updateHUDStatic();

    document.getElementById('hub-btn').addEventListener('click', ()=> this.enterLobby());
    document.getElementById('hub-btn').style.display='flex';
    document.getElementById('restart-btn').style.display='flex';
    document.getElementById('save-btn').style.display='flex';
    document.getElementById('inventory-btn').addEventListener('click', ()=>{ if(this.inLobby && !this.panelOpen) this.openStationPanel('inventory'); });
    document.getElementById('stats-btn').addEventListener('click', ()=>{ if(this.inLobby && !this.panelOpen) this.openStationPanel('stats'); });
  }

  // The "active character" is whichever team slot is currently in the fight —
  // everything below reads/writes through these so most of the combat code
  // didn't need to change: it just always acts on "the current fighter".
  get player(){ return this.team[this.activeIndex]; }
  get classKey(){ return this.team[this.activeIndex].classKey; }
  get cdata(){ return CharacterData[this.classKey]; }
  get standby(){ return this.team[1-this.activeIndex]; }

  // ---------------- SCENE / WORLD ----------------
  initScene(){
    const canvas = document.getElementById('game-canvas');
    this.renderer = new THREE.WebGLRenderer({canvas, antialias:true});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.3;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(58, window.innerWidth/window.innerHeight, 0.1, 200);

    this.hemiLight = new THREE.HemisphereLight(0xdff3ff, 0x3a6b3a, 1.0);
    this.scene.add(this.hemiLight);
    this.sunLight = new THREE.DirectionalLight(0xfff0c8, 1.25);
    this.sunLight.position.set(8,14,6);
    this.scene.add(this.sunLight);
    this.fillLight = new THREE.PointLight(0x8a5cff, 0.45, 30);
    this.fillLight.position.set(-6,4,-4);
    this.scene.add(this.fillLight);

    this.lobbyGroup = new THREE.Group();
    this.dungeonGroup = new THREE.Group();
    this.scene.add(this.lobbyGroup, this.dungeonGroup);

    this.buildLobbyEnvironment();
    this.buildDungeonEnvironment();
    this.setEnvironmentMode('lobby');

    window.addEventListener('resize', ()=>{
      this.camera.aspect = window.innerWidth/window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    this.renderer.render(this.scene, this.camera);
  }

  setEnvironmentMode(mode){
    if(mode==='lobby'){
      this.scene.background = new THREE.Color(0x8fd6f7);
      this.scene.fog = new THREE.FogExp2(0xa9e2f9, 0.012);
      this.hemiLight.color.set(0xdff3ff); this.hemiLight.groundColor.set(0x3a6b3a); this.hemiLight.intensity=1.0;
      this.sunLight.color.set(0xfff0c8); this.sunLight.intensity=1.25;
      this.fillLight.color.set(0x8a5cff); this.fillLight.intensity=0.45;
      this.lobbyGroup.visible=true; this.dungeonGroup.visible=false;
    } else {
      this.scene.background = new THREE.Color(0x241f33);
      this.scene.fog = new THREE.FogExp2(0x1c1830, 0.032);
      this.hemiLight.color.set(0x6a5f9a); this.hemiLight.groundColor.set(0x14101e); this.hemiLight.intensity=0.55;
      this.sunLight.color.set(0x7fa0ff); this.sunLight.intensity=0.5;
      this.fillLight.color.set(0x9a5cff); this.fillLight.intensity=0.6;
      this.lobbyGroup.visible=false; this.dungeonGroup.visible=true;
    }
  }

  // ----- Lobby: bigger, more colorful settlement -----
  buildLobbyEnvironment(){
    const ground = new THREE.Mesh(new THREE.CircleGeometry(85,48), new THREE.MeshStandardMaterial({color:0x4a9152, roughness:0.92}));
    ground.rotation.x=-Math.PI/2;
    this.lobbyGroup.add(ground);

    const plaza = new THREE.Mesh(new THREE.CircleGeometry(9,40), new THREE.MeshStandardMaterial({color:0xc9b89a, roughness:0.85}));
    plaza.rotation.x=-Math.PI/2; plaza.position.y=0.015; plaza.position.z=6;
    this.lobbyGroup.add(plaza);

    const ring = new THREE.Mesh(new THREE.RingGeometry(9.6,10,48), new THREE.MeshBasicMaterial({color:0x9fdc72, side:THREE.DoubleSide, transparent:true, opacity:0.3}));
    ring.rotation.x=-Math.PI/2; ring.position.y=0.02; ring.position.z=6;
    this.lobbyGroup.add(ring);

    for(let i=0;i<32;i++){
      const angle = Math.random()*Math.PI*2;
      const rad = 26 + Math.random()*42;
      const x = Math.cos(angle)*rad, z = Math.sin(angle)*rad;
      this.lobbyGroup.add(Math.random()<0.75 ? this.makeTree(x,z) : this.makeRock(x,z));
    }

    const houseSpots = [
      {x:-15,z:14,roof:0xd35454}, {x:15,z:14,roof:0x5a8fd0}, {x:-20,z:-6,roof:0x5ab06a},
      {x:20,z:-6,roof:0x9a6fd0}, {x:-6,z:20,roof:0xe0a545}, {x:8,z:22,roof:0xd88ac0},
      {x:-22,z:20,roof:0x5ab06a}, {x:22,z:22,roof:0xd35454}, {x:-24,z:2,roof:0xe0a545},
      {x:24,z:-18,roof:0x5a8fd0}, {x:-4,z:30,roof:0x9a6fd0}, {x:4,z:32,roof:0xd35454},
      {x:-30,z:8,roof:0xd88ac0}, {x:30,z:6,roof:0x5ab06a}, {x:-16,z:-20,roof:0x5a8fd0},
      {x:18,z:-24,roof:0xe0a545}, {x:-30,z:-16,roof:0x9a6fd0}, {x:30,z:24,roof:0xd35454}
    ];
    houseSpots.forEach(h=> this.lobbyGroup.add(this.makeHouse(h.x,h.z,h.roof)));

    // idle villagers — just decoration, add life to the village without being interactable
    const villagerSpots = [[-10,10],[9,9],[-14,-2],[13,-3],[0,16],[-3,-8],[6,-10],[-18,10],[17,10],[0,26],[-8,-18],[15,20]];
    const villagerColors = [0x8a6a4a,0x5a7a9a,0x9a5a6a,0x6a9a6a,0x8a5a9a];
    villagerSpots.forEach(([x,z],i)=>{
      this.lobbyGroup.add(this.makeIdleVillager(x,z,villagerColors[i%villagerColors.length]));
    });

    this.stationGroup = new THREE.Group();
    this.lobbyGroup.add(this.stationGroup);
  }

  makeIdleVillager(x,z,color){
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.28,0.35,1.0,8), new THREE.MeshStandardMaterial({color, roughness:0.75}));
    body.position.y=0.68;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.24,12,12), new THREE.MeshStandardMaterial({color:0xf0d5b0, roughness:0.75}));
    head.position.y=1.35;
    g.add(body, head);
    g.position.set(x,0,z);
    g.rotation.y = Math.random()*Math.PI*2;
    return g;
  }

  makeHouse(x,z,roofColor){
    const g = new THREE.Group();
    const wallColor = [0xe8d9b5,0xd9c5a0,0xecdcc0][Math.floor(Math.random()*3)];
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.4,1.6,2.2), new THREE.MeshStandardMaterial({color:wallColor, roughness:0.9}));
    body.position.y=0.8;
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.9,1.2,4), new THREE.MeshStandardMaterial({color:roofColor, roughness:0.8}));
    roof.position.y=2.2; roof.rotation.y=Math.PI/4;
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.9,0.08), new THREE.MeshStandardMaterial({color:0x5b3a24}));
    door.position.set(0,0.45,1.12);
    g.add(body, roof, door);
    g.position.set(x,0,z);
    g.rotation.y = Math.random()*Math.PI*2;
    g.scale.setScalar(0.9+Math.random()*0.3);
    return g;
  }

  buildDungeonEnvironment(){
    const ground = new THREE.Mesh(new THREE.CircleGeometry(60,48), new THREE.MeshStandardMaterial({color:0x2b2436, roughness:0.95}));
    ground.rotation.x=-Math.PI/2;
    this.dungeonGroup.add(ground);

    for(let i=0;i<22;i++){
      const angle = Math.random()*Math.PI*2;
      const rad = 14 + Math.random()*30;
      const x = Math.cos(angle)*rad, z = Math.sin(angle)*rad;
      this.dungeonGroup.add(Math.random()<0.6 ? this.makeDeadTree(x,z) : this.makeRock(x,z,true));
    }
    for(let i=0;i<10;i++){
      const angle = Math.random()*Math.PI*2;
      const rad = 5 + Math.random()*16;
      const x = Math.cos(angle)*rad, z = Math.sin(angle)*rad;
      const crystal = new THREE.Mesh(new THREE.ConeGeometry(0.15,0.5,5), new THREE.MeshBasicMaterial({color:0x8a5cff, transparent:true, opacity:0.85}));
      crystal.position.set(x,0.25,z);
      const glow = new THREE.PointLight(0x8a5cff, 0.6, 3);
      glow.position.set(x,0.5,z);
      this.dungeonGroup.add(crystal, glow);
    }
  }

  makeDeadTree(x,z){
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.14,0.22,1.7,6), new THREE.MeshStandardMaterial({color:0x1c1620, roughness:1}));
    trunk.position.y=0.85;
    g.add(trunk);
    for(let i=0;i<3;i++){
      const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.07,0.7,5), new THREE.MeshStandardMaterial({color:0x1c1620, roughness:1}));
      branch.position.set((Math.random()-0.5)*0.5, 1.3+i*0.25, (Math.random()-0.5)*0.5);
      branch.rotation.z = (Math.random()-0.5)*1.4;
      g.add(branch);
    }
    g.position.set(x,0,z);
    g.scale.setScalar(0.85+Math.random()*0.5);
    return g;
  }
  makeTree(x,z){
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18,0.24,1.4,7), new THREE.MeshStandardMaterial({color:0x5b3a24, roughness:1}));
    trunk.position.y=0.7;
    const leaves = new THREE.Mesh(new THREE.ConeGeometry(1.1,2.1,8), new THREE.MeshStandardMaterial({color:0x3fae66, roughness:0.85}));
    leaves.position.y=2.1;
    g.add(trunk, leaves);
    g.position.set(x,0,z);
    g.scale.setScalar(0.85+Math.random()*0.5);
    return g;
  }
  makeRock(x,z,dark){
    const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5+Math.random()*0.4,0), new THREE.MeshStandardMaterial({color: dark?0x2a2432:0x8a8a9a, roughness:1}));
    rock.position.set(x,0.3,z);
    rock.rotation.set(Math.random(),Math.random(),Math.random());
    return rock;
  }

  // ---------------- TEAM (2 characters, 1 active + 1 standby) ----------------
  initTeam(){
    this.team = this.classKeys.map((key, idx)=> this.createCharacterState(key, idx));
  }

  createCharacterState(classKey, idx){
    const c = CharacterData[classKey];
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.34,0.4,1.15,10), new THREE.MeshStandardMaterial({color:c.color, roughness:0.55, metalness:0.15}));
    body.position.y = 0.85;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3,16,16), new THREE.MeshStandardMaterial({color:0xf0d5b0, roughness:0.7}));
    head.position.y = 1.6;
    const weapon = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.9,0.1), new THREE.MeshStandardMaterial({color:0xe8b64c, metalness:0.6, roughness:0.3}));
    weapon.position.set(0.45,1.0,0);
    g.add(body, head, weapon);
    g.position.set(0,0,10);
    g.visible = (idx===0);
    this.scene.add(g);

    return {
      classKey, mesh:g, facing:0,
      level:1, exp:0,
      baseHpMax:c.hp, baseManaMax:c.mana, basePatk:c.patk, baseMagic:c.magic, basePdef:c.pdef, baseMdef:c.mdef,
      baseCritRate:c.critRate, baseCritDmg:c.critDmg, baseMoveSpeed:c.moveSpeed,
      hpMax:c.hp, hp:c.hp, manaMax:c.mana, mana:c.mana,
      patk:c.patk, magic:c.magic, pdef:c.pdef, mdef:c.mdef, aspd:c.aspd,
      critRate:c.critRate, critDmg:c.critDmg, moveSpeed:c.moveSpeed, cdr:0,
      combo:0, comboTimer:0,
      attackCd:0, dodgeCd:0,
      cooldowns:{skill1:0, skill2:0, skill3:0, ultimate:0},
      skillLevels:{skill1:1, skill2:1, skill3:1, ultimate:1},
      iFrame:0,
      equippedArtifacts:{Crown:null, Bracelet:null, Ring:null, Necklace:null, Core:null},
      equipmentBonus:{hpPct:0, atkPct:0, magicPct:0, defPct:0, critRateAdd:0, critDmgAdd:0, cdrPct:0, moveSpeedFlat:0},
      setBonusRarity:null,
      buffs:{ shield:0, hasteMult:1, hasteTimer:0, defMult:1, defTimer:0, lifestealPct:0, lifestealTimer:0,
        titanTimer:0, titanAtkPct:0, titanHpPct:0, titanDefPct:0, titanLifesteal:0, titanBonusHp:0,
        archerBoostTimer:0, archerBoostAtkPct:0, archerBoostCritRate:0, archerBoostCritDmg:0,
        supportTimer:0, supportAtkPct:0, supportMagicPct:0, supportCritRate:0, supportCritDmg:0, supportPenetration:0,
        formationTimer:0, formationAtkPct:0, resonanceTimer:0, resonanceMagicPct:0,
        hybridAtkFlat:0, hybridAtkTimer:0, hybridPenFlat:0, hybridPenTimer:0,
        hybridCritRateFlat:0, hybridCritRateTimer:0, hybridCritDmgFlat:0, hybridCritDmgTimer:0,
        momentumStacks:[], rageTimer:0, rageAtkPct:0, rageAspdPct:0, rageLifesteal:0,
        formationTimer:0, formationAtkPct:0, resonanceTimer:0, resonanceMagicPct:0 },
      bulwarkCd:0, attackLock:0, regenTimer:0
    };
  }

  // ---------------- STAT RECALC (equipment is shared across the whole team) ----------------
recalcEquipmentBonusFor(ch){
    let hpPct=0, atkPct=0, magicPct=0, defPct=0, critRateAdd=0, critDmgAdd=0, cdrPct=0, moveSpeedFlat=0;
    const equipped = Object.values(ch.equippedArtifacts);
    const addStat = (type, val)=>{
      if(type==='hp') hpPct+=val;
      else if(type==='patk') atkPct+=val;
      else if(type==='magic') magicPct+=val;
      else if(type==='defense') defPct+=val;
      else if(type==='critRate') critRateAdd+=val;
      else if(type==='critDmg') critDmgAdd+=val;
      else if(type==='cooldown') cdrPct+=val;
      else if(type==='moveSpeed') moveSpeedFlat+=val;
    };
    equipped.forEach(a=>{
      if(!a) return;
      addStat(a.mainStatType, artifactMainStatValue(a));
      a.subStats.forEach(s=> addStat(s.type, s.value));
    });
    ch.setBonusRarity = null;
    if(equipped.every(a=>a)){
      const rarities = new Set(equipped.map(a=>a.rarity));
      if(rarities.size===1){
        this.setBonusRarity = equipped[0].rarity;
        const bonus = SET_BONUS_BY_RARITY[this.setBonusRarity]||0;
        hpPct+=bonus; atkPct+=bonus; magicPct+=bonus; defPct+=bonus;
      }
    }
    this.equipmentBonus = {hpPct, atkPct, magicPct, defPct, critRateAdd, critDmgAdd, cdrPct, moveSpeedFlat};
  }
  recalcStatsFor(ch){
    const eq = ch.equipmentBonus;
    ch.hpMax = Math.round(ch.baseHpMax*(1+eq.hpPct));
    ch.manaMax = ch.baseManaMax;
    ch.patk = Math.round(ch.basePatk*(1+eq.atkPct));
    ch.magic = Math.round(ch.baseMagic*(1+eq.magicPct));
    ch.pdef = Math.round(ch.basePdef*(1+eq.defPct));
    ch.mdef = ch.baseMdef;
    ch.critRate = ch.baseCritRate + eq.critRateAdd;
    ch.critDmg = ch.baseCritDmg + eq.critDmgAdd;
    ch.cdr = Math.min(0.5, eq.cdrPct);
    ch.moveSpeed = ch.baseMoveSpeed + eq.moveSpeedFlat;
    ch.hp = Math.min(ch.hp, ch.hpMax);
    ch.mana = Math.min(ch.mana, ch.manaMax);
  }
  recalcAllStats(){
  this.team.forEach(ch=>{ this.recalcEquipmentBonusFor(ch); this.recalcStatsFor(ch); });
}

  // ---------------- CHARACTER SWAP ----------------
  initSwapUI(){
    const row = document.getElementById('team-swap-row');
    row.innerHTML = '';
    row.style.pointerEvents = 'all';
    this.team.forEach((ch,idx)=>{
      const el = document.createElement('div');
      el.className = 'swap-slot';
      el.id = 'swap-slot-'+idx;
      el.innerHTML = `<div class="ic">${CharacterData[ch.classKey].icon}</div><div class="cdov"></div><div class="cdtx"></div><div class="mini-hp"><i></i></div>`;
      el.addEventListener('click', ()=>{ if(idx!==this.activeIndex) this.swapCharacter(); });
      row.appendChild(el);
    });
  }
  updateSwapRow(){
    this.team.forEach((ch,idx)=>{
      const el = document.getElementById('swap-slot-'+idx);
      if(!el) return;
      el.classList.toggle('active-char', idx===this.activeIndex);
      const ov = el.querySelector('.cdov'), tx = el.querySelector('.cdtx');
      const cd = this.globalSwapCd||0;
      if(idx!==this.activeIndex && cd>0){
        ov.style.height = Math.min(100,(cd/2.5)*100)+'%';
        tx.textContent = cd>1 ? Math.ceil(cd) : '';
      } else { ov.style.height='0%'; tx.textContent=''; }
      const hpBar = el.querySelector('.mini-hp i');
      if(hpBar) hpBar.style.width = Math.max(0,(ch.hp/ch.hpMax*100))+'%';
    });
  }
  swapCharacter(){
    if(!this.team || this.team.length<2) return;
    if(!this.stageActive && !this.inLobby) return;
    if(this.panelOpen) return;
    if(this.globalSwapCd>0){ this.toast(`Swap belum siap (${this.globalSwapCd.toFixed(1)}s)`); return; }
    const oldChar = this.player;
    const oldPos = oldChar.mesh.position.clone();
    const oldFacing = oldChar.facing;
    oldChar.mesh.visible = false;
    this.activeIndex = 1 - this.activeIndex;
    const newChar = this.player;
    newChar.mesh.position.copy(oldPos);
    newChar.facing = oldFacing;
    newChar.mesh.rotation.y = oldFacing;
    newChar.mesh.visible = true;
    newChar.attackLock = Math.max(newChar.attackLock||0, 0.15);
    this.globalSwapCd = 2.5;
    this.updateHUDStatic();
    this.initPlayerSkillRow();
    this.toast(`Swap ke ${CharacterData[newChar.classKey].key}! Buff transferable tetap terbawa.`);
  }

  // ---------------- SHARED (TRANSFERABLE) BUFFS ----------------
  // These live at the team level, not on a character — so they keep ticking
  // and stay active across a swap, and whichever character is active can use
  // them. Only stat-type effects go here (crit rate, atk%, crit dmg, def%,
  // lifesteal%, penetration%); true self-buffs stay on ch.buffs instead.
  addSharedBuff(name, icon, stats, duration){
    const existing = this.sharedBuffs.find(b=>b.name===name);
    if(existing){ existing.timeLeft = duration; existing.totalDuration = duration; existing.stats = stats; }
    else this.sharedBuffs.push({name, icon, stats, timeLeft:duration, totalDuration:duration});
  }
  hasSharedBuff(name){ return this.sharedBuffs.some(b=>b.name===name); }
  getSharedStat(key){
    return this.sharedBuffs.reduce((sum,b)=> sum + (b.stats[key]||0), 0);
  }
  tickSharedBuffs(dt){
    this.sharedBuffs.forEach(b=> b.timeLeft -= dt);
    this.sharedBuffs = this.sharedBuffs.filter(b=> b.timeLeft>0);
  }

  // ---------------- SUMMONS (Necromancer skeletons) ----------------
  // Summons live at the team level (like sharedBuffs) so they keep fighting
  // and their duration keeps ticking down no matter which character is
  // currently active. Each summon tracks who raised it (ownerClassKey) so
  // maxActive is enforced per-caster and the Dark Pact passive only counts
  // the Necromancer's own skeletons.
  castSummon(def){
    const p = this.player;
    const owner = this.classKey;
    const maxActive = def.maxActive || 3;
    let toSpawn = def.count || 1;
    // make room by retiring the oldest summon(s) from this owner first
    let ownedIdx = this.summons.map((s,i)=>({s,i})).filter(o=>o.s.ownerClassKey===owner);
    while(ownedIdx.length + toSpawn > maxActive && ownedIdx.length>0){
      const victim = ownedIdx.shift();
      this.removeSummonAt(this.summons.indexOf(victim.s));
      ownedIdx = this.summons.map((s,i)=>({s,i})).filter(o=>o.s.ownerClassKey===owner);
    }
    const room = Math.max(0, maxActive - this.summons.filter(s=>s.ownerClassKey===owner).length);
    toSpawn = Math.min(toSpawn, room);
    for(let i=0;i<toSpawn;i++){
      const angle = (i/Math.max(1,toSpawn))*Math.PI*2 + Math.random()*0.6;
      const pos = p.mesh.position.clone().add(new THREE.Vector3(Math.cos(angle)*1.9,0,Math.sin(angle)*1.9));
      this.spawnSummon(def.type, pos, def.duration||15, owner);
    }
    if(toSpawn>0) this.toast(`${toSpawn} Skeleton dibangkitkan dari kegelapan!`);
    else this.toast('Summon sudah maksimal!');
  }
  spawnSummon(type, pos, duration, ownerClassKey){
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({color:0xe8e2d0, roughness:0.7, emissive:0x3a2a5c, emissiveIntensity:0.35});
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.19,0.23,0.7,6), bodyMat);
    body.position.y=0.46;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.18,10,10), new THREE.MeshStandardMaterial({color:0xf0ecd8, roughness:0.6}));
    head.position.y=0.92;
    const eyeGlow = new THREE.PointLight(0x9b7bd4, 0.85, 2.5);
    eyeGlow.position.y=0.95;
    g.add(body, head, eyeGlow);
    g.position.copy(pos);
    g.scale.setScalar(0.001);
    this.scene.add(g);
    const magicRef = this.player.magic || 30;
    const inst = {
      mesh:g, type, ownerClassKey, timeLeft:duration, totalDuration:duration,
      atk: Math.round(magicRef*0.5), atkTimer:0.4, atkInterval:1.5, range:6.0, moveSpeed:4.3, spawnAnim:0.3
    };
    this.summons.push(inst);
    this.spawnFX({type:'summon', color:0x8060a8}, pos.clone(), pos.clone());
    return inst;
  }
  removeSummonAt(idx){
    if(idx<0 || idx>=this.summons.length) return;
    const s = this.summons[idx];
    this.scene.remove(s.mesh);
    const disposeObj=(o)=>{ if(o.geometry) o.geometry.dispose(); if(o.material) o.material.dispose(); if(o.children) o.children.forEach(disposeObj); };
    disposeObj(s.mesh);
    this.summons.splice(idx,1);
  }
  clearSummons(){
    for(let i=this.summons.length-1;i>=0;i--) this.removeSummonAt(i);
  }
  getNearestEnemyFromPos(pos, maxDist){
    let best=null, bd=Infinity;
    for(const e of this.enemies){
      if(e.state==='dead') continue;
      const d = pos.distanceTo(e.mesh.position);
      if(d<bd){ bd=d; best=e; }
    }
    if(best && (maxDist===undefined || bd<=maxDist)) return best;
    return null;
  }
  summonAttack(s, target){
    const dmg = Math.max(1, Math.round(s.atk * (1 - defenseReduction(target.pdef))));
    if(target.data.isInfinite){ target.totalDamage = (target.totalDamage||0) + dmg; }
    else { target.hp = Math.max(0, target.hp - dmg); }
    if(target.state!=='break'){
      target.poise = Math.min(target.poiseMax, target.poise + 1);
      if(target.poise>=target.poiseMax && target.state!=='dead'){ this.triggerBreak(target); }
    }
    target.hitCooldown = 3;
    const above = target.mesh.position.clone(); above.y += 1.3*(target.data.scale||1);
    this.spawnDamageNumber(above, dmg, 'magic');
    this.spawnFX({type:'dark', color:0x9b7bd4}, s.mesh.position.clone().setY(1.0), target.mesh.position.clone().setY(1.0));
    if(!target.data.isInfinite && target.hp<=0 && target.state!=='dead'){ this.killEnemy(target); }
  }
  updateSummons(dt){
    for(let i=this.summons.length-1;i>=0;i--){
      const s = this.summons[i];
      s.timeLeft -= dt;
      if(s.spawnAnim>0){ s.spawnAnim = Math.max(0, s.spawnAnim-dt); }
      const growScale = 1 - (s.spawnAnim/0.3);
      s.mesh.scale.setScalar(Math.max(0.05, Math.min(1, growScale)));
      // flicker/fade warning right before a summon expires
      const fadeIn = Math.max(0, s.timeLeft);
      s.mesh.visible = (fadeIn>1.2) || (Math.floor(fadeIn*8)%2===0);
      if(s.timeLeft<=0){ this.removeSummonAt(i); continue; }
      if(!this.stageActive && !this.inLobby) continue;
      const target = this.getNearestEnemyFromPos(s.mesh.position, s.range);
      if(!target) continue;
      const dist = s.mesh.position.distanceTo(target.mesh.position);
      if(dist > 1.5){
        const dir = new THREE.Vector3().subVectors(target.mesh.position, s.mesh.position).normalize();
        s.mesh.position.addScaledVector(dir, s.moveSpeed*dt);
        s.mesh.lookAt(target.mesh.position.x, s.mesh.position.y, target.mesh.position.z);
      } else {
        s.atkTimer -= dt;
        if(s.atkTimer<=0){ s.atkTimer = s.atkInterval; this.summonAttack(s, target); }
      }
    }
  }

  // ---------------- SAVE / LOAD ----------------
  saveGame(){
    const shared = {
      gold:this.gold, gems:this.gems, materials:this.materials, artifacts:this.artifacts,
      autoDelete:this.autoDelete,
      dungeonProgress:this.dungeonProgress, domainProgress:this.domainProgress, towerProgress:this.towerProgress, quests:this.quests
    };
    storageSet('save_shared', JSON.stringify(shared));
    this.team.forEach(ch=>{
      const classData = {
        level:ch.level, exp:ch.exp, skillLevels:ch.skillLevels,
        baseHpMax:ch.baseHpMax, baseManaMax:ch.baseManaMax, basePatk:ch.basePatk, baseMagic:ch.baseMagic, basePdef:ch.basePdef, baseMdef:ch.baseMdef,
        equippedArtifacts:ch.equippedArtifacts
      };
      storageSet('save_class_'+ch.classKey, JSON.stringify(classData));
    });
  }
  applySharedSaveData(shared){
    if(!shared) return;
    this.gold = shared.gold||0; this.gems = shared.gems||0;
    this.materials = shared.materials||{};
    this.artifacts = (shared.artifacts||[]).map(normalizeArtifact);
    this.autoDelete = shared.autoDelete||{Common:false,Uncommon:false,Rare:false,Epic:false,Legendary:false};
    if(shared.equippedArtifacts){Object.values(shared.equippedArtifacts).forEach(a=>{ if(a) this.artifacts.push(normalizeArtifact(a)); });}
    this.dungeonProgress = shared.dungeonProgress||this.dungeonProgress;
    this.domainProgress = shared.domainProgress||this.domainProgress;
    this.towerProgress = shared.towerProgress||this.towerProgress;
    this.quests = shared.quests||this.quests;
  }
  applyClassSaveData(ch, classData){
    if(!classData) return;
    ch.level = classData.level||1; ch.exp = classData.exp||0;
    ch.skillLevels = classData.skillLevels||{skill1:1,skill2:1,skill3:1,ultimate:1};
    ch.baseHpMax = classData.baseHpMax||ch.baseHpMax; ch.baseManaMax = classData.baseManaMax||ch.baseManaMax;
    ch.basePatk = classData.basePatk||ch.basePatk; ch.baseMagic = classData.baseMagic||ch.baseMagic;
    ch.basePdef = classData.basePdef||ch.basePdef; ch.baseMdef = classData.baseMdef||ch.baseMdef;
    if(classData.equippedArtifacts){
      ch.equippedArtifacts = classData.equippedArtifacts;
      Object.keys(ch.equippedArtifacts).forEach(slot=> normalizeArtifact(ch.equippedArtifacts[slot]));
    }
  }

  // ---------------- LOBBY STATIONS (NPC-styled, spread across the village) ----------------
  initStations(){
    this.stations = [
      {key:'artifact', name:'Artifact Master', icon:'💎', pos:new THREE.Vector3(-14,0,6), color:0xb98aff},
      {key:'skill', name:'Skill Upgrade', icon:'📖', pos:new THREE.Vector3(14,0,2), color:0x4fb8e0},
      {key:'quest', name:'Quest NPC', icon:'📜', pos:new THREE.Vector3(-10,0,-14), color:0xe8b64c},
      {key:'mainStage', name:'Main Quest', icon:'🗺️', pos:new THREE.Vector3(12,0,-16), color:0xff8686},
      {key:'artifactDomain', name:'Artifact Hunter', icon:'🔮', pos:new THREE.Vector3(-24,0,-14), color:0xd68ab9},
      {key:'materialDomain', name:'Material Trader', icon:'⚒️', pos:new THREE.Vector3(22,0,18), color:0x8ab98a},
      {key:'rewardDomain', name:'Treasure Keeper', icon:'💰', pos:new THREE.Vector3(-20,0,18), color:0xf2c14e},
      {key:'shop', name:'Merchant', icon:'🛒', pos:new THREE.Vector3(6,0,-2), color:0x7fc9e0},
      {key:'dummy', name:'Training Dummy', icon:'🎯', pos:new THREE.Vector3(-4,0,-22), color:0xff9a6b},
      {key:'infiniteTower', name:'Menara Tak Terbatas', icon:'🗼', pos:new THREE.Vector3(0,0,-30), color:0x9a4fd6}
    ];
    this.stationLabelEls = [];
    const labelContainer = document.getElementById('station-labels');
    this.stations.forEach(s=>{
      const npc = new THREE.Group();
      const robe = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.4,1.1,10), new THREE.MeshStandardMaterial({color:s.color, roughness:0.6}));
      robe.position.y=0.75;
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.26,14,14), new THREE.MeshStandardMaterial({color:0xf0d5b0, roughness:0.7}));
      head.position.y=1.45;
      const counter = new THREE.Mesh(new THREE.BoxGeometry(1.1,0.5,0.5), new THREE.MeshStandardMaterial({color:0x6b4a30, roughness:0.9}));
      counter.position.set(0,0.25,0.75);
      npc.add(robe, head, counter);
      const glow = new THREE.PointLight(s.color, 1.1, 5);
      glow.position.set(0,1.6,0);
      npc.add(glow);
      npc.position.copy(s.pos);
      npc.lookAt(0,0,6);
      this.stationGroup.add(npc);

      const label = document.createElement('div');
      label.className='station-label';
      const hex = '#'+s.color.toString(16).padStart(6,'0');
      label.innerHTML = `<div class="ic" style="background:${hex};color:${hex}">${s.icon}</div><div class="nm">${s.name}</div>`;
      label.addEventListener('click', ()=> this.tryInteractStation(s.key));
      labelContainer.appendChild(label);
      this.stationLabelEls.push(label);
    });
  }

  nearestStationKey(){
    let best=null, bd=Infinity;
    this.stations.forEach(s=>{ const d=this.player.mesh.position.distanceTo(s.pos); if(d<bd){bd=d; best=s;} });
    return (best && bd<=2.8) ? best.key : null;
  }

  tryInteractStation(key){
    const station = this.stations.find(s=>s.key===key);
    if(!station) return;
    const dist = this.player.mesh.position.distanceTo(station.pos);
    if(dist>2.8){ this.toast('Terlalu jauh, dekati dulu'); return; }
    this.openStationPanel(key);
  }

  updateStationUI(){
    if(!this.inLobby){
      this.stationLabelEls.forEach(el=> el.style.display='none');
      document.getElementById('interact-prompt').style.display='none';
      return;
    }
    this.stations.forEach((s,i)=>{
      const el = this.stationLabelEls[i];
      const v = s.pos.clone(); v.y=1.8; v.project(this.camera);
      if(v.z>1){ el.style.display='none'; return; }
      const x = (v.x*0.5+0.5)*window.innerWidth;
      const y = (1-(v.y*0.5+0.5))*window.innerHeight;
      el.style.left=x+'px'; el.style.top=y+'px'; el.style.display='flex';
    });
    const nk = this.nearestStationKey();
    this._nearStationKey = nk;
    const prompt = document.getElementById('interact-prompt');
    if(nk && !this.panelOpen){
      const st = this.stations.find(s=>s.key===nk);
      prompt.textContent = `Tekan E — ${st.name}`;
      prompt.style.display='block';
    } else {
      prompt.style.display='none';
    }
  }

  // ---------------- LOBBY FLOW ----------------
  enterLobby(){
    this.stageActive = false;
    this.inLobby = true;
    this.panelOpen = false;
    this.currentRun = null;
    this.clearEnemies();
    this.clearSummons();
    this.setEnvironmentMode('lobby');
    this.team.forEach(ch=>{
      if(ch.buffs.titanTimer>0){ ch.hpMax -= (ch.buffs.titanBonusHp||0); ch.hp = Math.min(ch.hp, ch.hpMax); }
      ch.buffs.titanTimer=0; ch.buffs.titanBonusHp=0; ch.buffs.titanAtkPct=0; ch.buffs.titanHpPct=0; ch.buffs.titanDefPct=0; ch.buffs.titanLifesteal=0;
      ch.buffs.archerBoostTimer=0; ch.buffs.archerBoostAtkPct=0; ch.buffs.archerBoostCritRate=0; ch.buffs.archerBoostCritDmg=0;
      ch.buffs.momentumStacks=[]; ch.buffs.rageTimer=0; ch.buffs.rageAtkPct=0; ch.buffs.rageAspdPct=0; ch.buffs.rageLifesteal=0;
      ch.mesh.scale.set(1,1,1);
    });
    this.sharedBuffs = [];
    document.getElementById('stage-overlay').style.display='none';
    document.getElementById('station-panel').style.display='none';
    document.getElementById('hud').style.display='block';
    document.getElementById('spawn-dummy-btn').style.display='none';
    document.getElementById('reset-dpstest-btn').style.display='none';
    // Belt-and-suspenders alongside the CSS: also clear the stage-banner text
    // and the dummy-test timestamp directly, so a stale "Total Damage / DPS"
    // readout (or "Musuh tersisa: X") can never linger into the lobby view.
    document.getElementById('stage-banner').style.display='none';
    document.getElementById('stage-banner-title').textContent='';
    document.getElementById('stage-banner-sub').textContent='';
    this.dpsTestStartTime = undefined;
    document.body.classList.add('lobby-mode');
    this.player.mesh.position.set(0,0,10);
    this.camYaw = 0; this.camPitch=0.32; this.camDist=8;
    this.saveGame();
    if(!this.looping) this.start();
  }

  // ---------------- STATION PANELS ----------------
  openStationPanel(key){
    const freshOpen = !this.panelOpen;
    this.panelOpen = true;
    if(key==='artifact' && freshOpen) this.artifactPanelCharIndex = this.activeIndex;
    const title = document.getElementById('station-panel-title');
    const body = document.getElementById('station-panel-body');
    try{
      if(key==='inventory'){ title.textContent='🎒 Inventory'; body.innerHTML=this.renderInventoryHTML(); this.wireInventoryPanel(); }
      else if(key==='stats'){ title.textContent='📊 Character Stats'; body.innerHTML=this.renderStatsHTML(); }
      else if(key==='artifact'){ title.textContent='💎 Artifact Master'; body.innerHTML=this.renderArtifactHTML(); this.wireArtifactPanel(); }
      else if(key==='skill'){ title.textContent='📖 Skill Upgrade'; body.innerHTML=this.renderSkillUpgradeHTML(); this.wireSkillPanel(); }
      else if(key==='quest'){ title.textContent='📜 Quest'; body.innerHTML=this.renderQuestHTML(); this.wireQuestPanel(); }
      else if(key==='mainStage'){ title.textContent='🗺️ Main Quest'; body.innerHTML=this.renderMainStageHTML(); this.wireMainStagePanel(); }
      else if(key==='artifactDomain' || key==='materialDomain' || key==='rewardDomain'){
        const st = this.stations.find(s=>s.key===key);
        title.textContent = `${st.icon} ${st.name}`;
        body.innerHTML = this.renderFarmDomainHTML(key);
        this.wireFarmDomainPanel(key);
      }
      else if(key==='shop'){ title.textContent='🛒 Merchant'; body.innerHTML=this.renderShopHTML(); this.wireShopPanel(); }
      else if(key==='dummy'){ title.textContent='🎯 Training Dummy'; body.innerHTML=this.renderDummyHTML(); this.wireDummyPanel(); }
      else if(key==='infiniteTower'){ title.textContent='🗼 Menara Tak Terbatas'; body.innerHTML=this.renderTowerHTML(); this.wireTowerPanel(); }
      document.getElementById('station-panel').style.display='flex';
    }catch(err){
      // never leave the player stuck: show the error and let them close out instead of freezing
      console.error('openStationPanel error', key, err);
      title.textContent = '⚠️ Error';
      body.innerHTML = `<div class="panel-row"><span class="prl">Panel ini gagal dimuat (${err.message}). Coba tutup dan buka lagi — kalau masih error, kabari dengan detail ini.</span></div>`;
      document.getElementById('station-panel').style.display='flex';
    }
  }
  closeStationPanel(){
    this.panelOpen = false;
    document.getElementById('station-panel').style.display='none';
  }

  renderInventoryHTML(){
    const matEntries = Object.entries(this.materials).filter(([n,q])=>q>0);
    const matRows = matEntries.length
      ? matEntries.map(([n,q])=>{
          if(n==='Exp Bottle'){
            return `<div class="panel-row"><span class="prl">🧪 ${n} <span style="color:var(--text-dim); font-size:10px;">(Usable, +2000 EXP)</span></span><span class="prr" style="display:flex; align-items:center; gap:8px;">${q}<span class="mini-btn" data-use-expbottle="1">Gunakan</span></span></div>`;
          }
          return `<div class="panel-row"><span class="prl">${n}</span><span class="prr">${q}</span></div>`;
        }).join('')
      : `<div class="panel-row"><span class="prl">Belum ada material. Coba Material Domain!</span></div>`;
    const artRows = this.artifacts.length
      ? this.artifacts.map(a=>`<div class="panel-row"><span class="prl" style="color:${RARITY_COLOR[a.rarity]}">${a.name} (Lv.${a.level})</span><span class="prr">${formatStatValue(a.mainStatType, artifactMainStatValue(a))} ${a.mainStatLabel}</span></div>`).join('')
      : `<div class="panel-row"><span class="prl">Belum ada artifact belum di-equip. Coba Artifact Domain!</span></div>`;
    return `
      <div class="panel-row"><span class="prl">🪙 Gold</span><span class="prr">${this.gold}</span></div>
      <div class="panel-row"><span class="prl">💎 Gems</span><span class="prr">${this.gems}</span></div>
      <div class="panel-h">Material</div>${matRows}
      <div class="panel-h">Artifact (belum dipakai, bisa di-equip ke karakter manapun)</div>${artRows}
    `;
  }

  wireInventoryPanel(){
    document.querySelectorAll('#station-panel-body [data-use-expbottle]').forEach(el=>{
      el.addEventListener('click', ()=> this.openExpBottleChoice());
    });
  }
  openExpBottleChoice(){
    if((this.materials['Exp Bottle']||0) <= 0){ this.toast('Exp Bottle habis'); this.openStationPanel('inventory'); return; }
    const title = document.getElementById('station-panel-title');
    const body = document.getElementById('station-panel-body');
    title.textContent = '🧪 Gunakan Exp Bottle';
    const rows = this.team.map((ch,idx)=>{
      const c = CharacterData[ch.classKey];
      return `<div class="panel-row"><span class="prl">${c.icon} ${c.key} (Lv.${ch.level})</span><span class="mini-btn" data-give-exp="${idx}">Beri ke ${c.key}</span></div>`;
    }).join('');
    body.innerHTML = `<div class="panel-h">Pilih karakter yang menerima +2000 EXP</div>${rows}<div class="mini-btn" id="expbottle-cancel" style="margin-top:12px; background:#4a4a52; color:#ddd;">Batal</div>`;
    document.querySelectorAll('#station-panel-body [data-give-exp]').forEach(el=>{
      el.addEventListener('click', ()=> this.useExpBottle(parseInt(el.dataset.giveExp)));
    });
    document.getElementById('expbottle-cancel').addEventListener('click', ()=> this.openStationPanel('inventory'));
  }
  useExpBottle(charIdx){
    if((this.materials['Exp Bottle']||0) <= 0){ this.toast('Exp Bottle habis'); this.openStationPanel('inventory'); return; }
    this.materials['Exp Bottle'] -= 1;
    const ch = this.team[charIdx];
    this.gainExpFor(ch, 2000);
    this.toast(`🧪 +2000 EXP untuk ${CharacterData[ch.classKey].key}!`);
    this.openStationPanel('inventory');
    this.saveGame();
  }

  renderStatsHTML(){
    const p = this.player, c = this.cdata;
    const statRows = `
      <div class="panel-row"><span class="prl">Karakter Aktif</span><span class="prr">${c.key}</span></div>
      <div class="panel-row"><span class="prl">HP</span><span class="prr">${Math.round(p.hp)} / ${p.hpMax}</span></div>
      <div class="panel-row"><span class="prl">Mana</span><span class="prr">${Math.round(p.mana)} / ${p.manaMax}</span></div>
      <div class="panel-row"><span class="prl">Physical Attack</span><span class="prr">${p.patk}</span></div>
      <div class="panel-row"><span class="prl">Magic Power</span><span class="prr">${p.magic}</span></div>
      <div class="panel-row"><span class="prl">Physical Defense</span><span class="prr">${p.pdef}</span></div>
      <div class="panel-row"><span class="prl">Magic Defense</span><span class="prr">${p.mdef}</span></div>
      <div class="panel-row"><span class="prl">Attack Speed</span><span class="prr">${this.getEffAspd().toFixed(2)}/s</span></div>
      <div class="panel-row"><span class="prl">Critical Rate</span><span class="prr">${Math.round(p.critRate*100)}%</span></div>
      <div class="panel-row"><span class="prl">Critical Damage</span><span class="prr">${Math.round(p.critDmg*100)}%</span></div>
      <div class="panel-row"><span class="prl">Move Speed</span><span class="prr">${p.moveSpeed.toFixed(2)}</span></div>
      <div class="panel-row"><span class="prl">Cooldown Reduction</span><span class="prr">${Math.round(p.cdr*100)}%</span></div>
    `;
    const slots = [
      {def:c.basic, slot:null, level:1, isBasic:true, cooldown:(1/this.getEffAspd())},
      {def:c.skill1, slot:'skill1', level:p.skillLevels.skill1, cooldown:this.getEffCooldown(c.skill1.cooldown)},
      {def:c.skill2, slot:'skill2', level:p.skillLevels.skill2, cooldown:this.getEffCooldown(c.skill2.cooldown)},
      {def:c.skill3, slot:'skill3', level:p.skillLevels.skill3, cooldown:this.getEffCooldown(c.skill3.cooldown)},
      {def:c.ultimate, slot:'ultimate', level:p.skillLevels.ultimate, cooldown:this.getEffCooldown(c.ultimate.cooldown)}
    ];
    const skillRows = slots.map(s=>{
      if(s.slot && p.level<UNLOCK_LEVEL[s.slot]){
        return `<div class="panel-row"><span class="prl">${s.def.icon} ${s.def.name}</span><span class="prr">🔒 Lv.${UNLOCK_LEVEL[s.slot]}</span></div>`;
      }
      const effMult = s.def.mult>0 ? s.def.mult*(1+(s.level-1)*0.08) : 0;
      const atk = s.def.isMagic ? p.magic : p.patk;
      const dmgText = s.def.hybrid
        ? (effMult>0 ? Math.round(p.patk*effMult)+' Phys + '+Math.round(p.magic*effMult)+' Magic (dasar)' : 'Buff / Utility')
        : (effMult>0 ? Math.round(atk*effMult)+' dmg (dasar)' : 'Buff / Utility');
      const lvlText = s.isBasic ? '' : ` (Lv.${s.level})`;
      return `<div class="panel-row" style="flex-direction:column; align-items:stretch;">
        <div style="display:flex; justify-content:space-between;"><span class="prl">${s.def.icon} ${s.def.name}${lvlText}</span><span class="prr">${dmgText}</span></div>
        <div style="font-size:9.5px; color:var(--text-dim); margin-top:2px;">Mana: ${s.def.manaCost||0} · Cooldown: ${s.cooldown.toFixed(2)}s</div>
      </div>`;
    }).join('');
    return `<div class="panel-h">Atribut</div>${statRows}<div class="panel-h">Skill (damage dasar, sebelum Defense musuh)</div>${skillRows}`;
  }

  renderArtifactHTML(){
    const ch = this.team[this.artifactPanelCharIndex];
    const tabsHtml = `<div class="char-tab-row">${this.team.map((tch,idx)=>{
      const active = idx===this.artifactPanelCharIndex;
      return `<div class="char-tab ${active?'active':''}" data-char-tab="${idx}">${CharacterData[tch.classKey].icon} ${CharacterData[tch.classKey].key}</div>`;
    }).join('')}</div>`;

    const slotsHtml = ARTIFACT_SLOTS.map(slot=>{
      const a = ch.equippedArtifacts[slot];
      const style = a ? `style="color:${RARITY_COLOR[a.rarity]}"` : '';
      return `<div class="art-slot ${a?'filled':''}" ${style} data-slot="${slot}">${a? a.rarity+'<br>Lv.'+a.level : slot}</div>`;
    }).join('');

    const equippedList = Object.values(ch.equippedArtifacts).filter(a=>a);
    const equippedRows = equippedList.length ? equippedList.map(a=>this.renderArtifactCard(a, true)).join('')
      : `<div class="panel-row"><span class="prl">Belum ada artifact terpasang</span></div>`;

    const filter = this.artifactFilter || (this.artifactFilter={statType:'all', rarity:'all'});
    const filteredPool = this.artifacts.filter(a=>
      (filter.statType==='all' || a.mainStatType===filter.statType) &&
      (filter.rarity==='all' || a.rarity===filter.rarity)
    );
    const poolHtml = filteredPool.length ? filteredPool.map(a=>this.renderArtifactCard(a, false)).join('')
      : `<div class="panel-row"><span class="prl">${this.artifacts.length? 'Gak ada artifact yang cocok filter ini.' : 'Belum ada artifact. Coba Artifact Domain!'}</span></div>`;
    const statOptions = ['all',...Object.keys(MAIN_STAT_BASE)].map(t=>`<option value="${t}" ${filter.statType===t?'selected':''}>${t==='all'?'Semua Stat':STAT_LABELS[t]}</option>`).join('');
    const rarityFilterOptions = ['all','Common','Uncommon','Rare','Epic','Legendary'].map(r=>`<option value="${r}" ${filter.rarity===r?'selected':''}>${r==='all'?'Semua Rarity':r}</option>`).join('');
    const filterRow = `<div style="display:flex; gap:8px; margin-bottom:10px;">
      <select id="filter-stat" style="flex:1; background:rgba(0,0,0,0.3); color:var(--text-light); border:none; border-radius:6px; padding:6px; font-size:11px;">${statOptions}</select>
      <select id="filter-rarity" style="flex:1; background:rgba(0,0,0,0.3); color:var(--text-light); border:none; border-radius:6px; padding:6px; font-size:11px;">${rarityFilterOptions}</select>
    </div>`;

    const autoDeleteRows = ['Common','Uncommon','Rare','Epic','Legendary'].map(r=>{
      const on = this.autoDelete[r];
      return `<div class="panel-row"><span class="prl" style="color:${RARITY_COLOR[r]}">Auto-Hapus ${r}</span><span class="mini-btn" data-autodel="${r}" style="${on?'background:#7fe08a;color:#173a17;':''}">${on?'ON':'OFF'}</span></div>`;
    }).join('');

    const setRows = Object.entries(SET_BONUS_BY_RARITY).map(([r,pct])=>
      `<div class="panel-row"><span class="prl" style="color:${RARITY_COLOR[r]}">Full Set ${r}</span><span class="prr">+${Math.round(pct*100)}% All Stats</span></div>`
    ).join('');
    const setStatus = ch.setBonusRarity
      ? `<div class="panel-row"><span class="prl">🎁 Set Bonus Aktif</span><span class="prr" style="color:${RARITY_COLOR[ch.setBonusRarity]}">${ch.setBonusRarity} +${Math.round(SET_BONUS_BY_RARITY[ch.setBonusRarity]*100)}%</span></div>`
      : `<div class="panel-row"><span class="prl">🎁 Set Bonus</span><span class="prr">Belum aktif</span></div>`;

    return `${tabsHtml}
      <div class="panel-row"><span class="prl">Mengatur Artifact untuk</span><span class="prr">${CharacterData[ch.classKey].key}</span></div>
      <div class="artifact-slots">${slotsHtml}</div>
      <div class="panel-row"><span class="prl">✨ Magical Dust</span><span class="prr">${this.materials['Magical Dust']||0}</span></div>
      ${setStatus}
      <div class="panel-h">Tabel Full Set Bonus (isi 5 slot rarity sama)</div>${setRows}
      <div class="panel-h">Auto-Hapus (artifact baru dgn rarity ini langsung jadi Magical Dust)</div>${autoDeleteRows}
      <div class="panel-h">Artifact Terpasang di ${CharacterData[ch.classKey].key}</div>${equippedRows}
      <div class="panel-h">Koleksi Artifact Belum Terpakai (klik "Equip" utk pasang ke ${CharacterData[ch.classKey].key})</div>${filterRow}${poolHtml}`;
  }

  renderArtifactCard(a, isEquipped){
    const maxed = a.level>=ARTIFACT_MAX_LEVEL;
    const cost = maxed ? null : (a.level+2);
    const dust = this.materials['Magical Dust']||0;
    const canUpgrade = !maxed && dust>=cost;
    const subRows = a.subStats.length
      ? a.subStats.map(s=>`<div style="font-size:9.5px; color:var(--text-dim);">↳ ${s.label} ${formatStatValue(s.type,s.value)}</div>`).join('')
      : `<div style="font-size:9.5px; color:var(--text-dim);">Belum ada substat (muncul tiap Lv.5)</div>`;
    return `<div class="panel-row" style="flex-direction:column; align-items:stretch;">
      <div style="display:flex; justify-content:space-between;">
        <span class="prl" style="color:${RARITY_COLOR[a.rarity]}">${a.name} (Lv.${a.level}/${ARTIFACT_MAX_LEVEL})</span>
        <span class="prr">${formatStatValue(a.mainStatType, artifactMainStatValue(a))} ${a.mainStatLabel}</span>
      </div>
      ${subRows}
      <div style="display:flex; gap:6px; margin-top:6px; flex-wrap:wrap;">
        ${isEquipped ? `<span class="mini-btn" data-unequip="${a.id}">Lepas</span>` : `<span class="mini-btn" data-equip="${a.id}">Equip</span>`}
        <span class="mini-btn ${canUpgrade?'':'disabled'}" data-upgrade="${a.id}">${maxed?'MAX':'Upgrade ('+cost+' Dust)'}</span>
        ${isEquipped ? '' : `<span class="mini-btn" data-delete="${a.id}" style="background:#7a3030; color:#ffdada;">Hapus</span>`}
      </div>
    </div>`;
  }

  wireArtifactPanel(){
    const ch = this.team[this.artifactPanelCharIndex];
    document.querySelectorAll('#station-panel-body [data-char-tab]').forEach(el=>{
      el.addEventListener('click', ()=>{
        this.artifactPanelCharIndex = parseInt(el.dataset.charTab);
        this.openStationPanel('artifact');
      });
    });
    document.querySelectorAll('#station-panel-body [data-equip]').forEach(el=>{
      el.addEventListener('click', ()=>{
        const art = this.artifacts.find(a=>a.id===el.dataset.equip);
        if(art){ this.equipArtifact(art, ch); this.openStationPanel('artifact'); }
      });
    });
    document.querySelectorAll('#station-panel-body [data-unequip]').forEach(el=>{
      el.addEventListener('click', ()=>{
        const art = Object.values(ch.equippedArtifacts).find(a=>a && a.id===el.dataset.unequip);
        if(art){ this.unequipArtifact(art.slot, ch); this.openStationPanel('artifact'); }
      });
    });
    document.querySelectorAll('#station-panel-body [data-upgrade]:not(.disabled)').forEach(el=>{
      el.addEventListener('click', ()=> this.upgradeArtifact(el.dataset.upgrade));
    });
    document.querySelectorAll('#station-panel-body [data-delete]').forEach(el=>{
      el.addEventListener('click', ()=> this.deleteArtifact(el.dataset.delete));
    });
    document.querySelectorAll('#station-panel-body [data-autodel]').forEach(el=>{
      el.addEventListener('click', ()=> this.toggleAutoDelete(el.dataset.autodel));
    });
    const filterStat = document.getElementById('filter-stat');
    if(filterStat) filterStat.addEventListener('change', e=>{ this.artifactFilter.statType = e.target.value; this.openStationPanel('artifact'); });
    const filterRarity = document.getElementById('filter-rarity');
    if(filterRarity) filterRarity.addEventListener('change', e=>{ this.artifactFilter.rarity = e.target.value; this.openStationPanel('artifact'); });
  }
  equipArtifact(art, ch){
    ch = ch || this.player;
    const old = ch.equippedArtifacts[art.slot];
    if(old) this.artifacts.push(old);
    ch.equippedArtifacts[art.slot] = art;
    this.artifacts = this.artifacts.filter(a=>a.id!==art.id);
    this.recalcAllStats();
    this.toast(`${art.name} dipasang ke ${CharacterData[ch.classKey].key}!`);
    this.saveGame();
  }
  unequipArtifact(slot, ch){
    ch = ch || this.player;
    const a = ch.equippedArtifacts[slot];
    if(!a) return;
    this.artifacts.push(a);
    ch.equippedArtifacts[slot] = null;
    this.recalcAllStats();
    this.saveGame();
  }
  findArtifactById(id){
    for(const ch of this.team){
      const eq = Object.values(ch.equippedArtifacts).find(a=>a && a.id===id);
      if(eq) return eq;
    }
    return this.artifacts.find(a=>a.id===id);
  }
  upgradeArtifact(id){
    const art = this.findArtifactById(id);
    if(!art || art.level>=ARTIFACT_MAX_LEVEL) return;
    const cost = art.level+2;
    if((this.materials['Magical Dust']||0) < cost){ this.toast('Magical Dust tidak cukup'); return; }
    this.materials['Magical Dust'] -= cost;
    art.level++;
    if(art.level%5===0){
      const usedTypes = new Set([art.mainStatType, ...art.subStats.map(s=>s.type)]);
      const pool = SUBSTAT_POOL.filter(s=>!usedTypes.has(s.type));
      if(pool.length){
        const chosen = pool[Math.floor(Math.random()*pool.length)];
        const value = chosen.min + Math.random()*(chosen.max-chosen.min);
        art.subStats.push({type:chosen.type, label:chosen.label, value});
        this.toast(`Substat baru: ${chosen.label}!`);
      }
    }
    this.toast(`${art.name} naik ke Lv.${art.level}!`);
    this.recalcAllStats();
    this.openStationPanel('artifact');
    this.saveGame();
  }
  deleteArtifact(id){
    const idx = this.artifacts.findIndex(a=>a.id===id);
    if(idx<0) return;
    const art = this.artifacts[idx];
    const dust = (DUST_BASE_BY_RARITY[art.rarity]||3) + (art.level-1)*3;
    this.materials['Magical Dust'] = (this.materials['Magical Dust']||0) + dust;
    this.artifacts.splice(idx,1);
    this.toast(`Artifact dihancurkan: +${dust} Magical Dust`);
    this.openStationPanel('artifact');
    this.saveGame();
  }

  // Central entry point for any newly-acquired artifact (domain drop, shop purchase).
  // Respects the player's per-rarity Auto-Hapus toggles.
  grantArtifact(art){
    if(this.autoDelete[art.rarity]){
      const dust = (DUST_BASE_BY_RARITY[art.rarity]||3) + (art.level-1)*3;
      this.materials['Magical Dust'] = (this.materials['Magical Dust']||0) + dust;
      this.toast(`Auto-Hapus ${art.rarity}: ${art.name} → +${dust} Magical Dust`);
    } else {
      this.artifacts.push(art);
      this.toast(`Artifact didapat: ${art.name}!`);
    }
  }
  toggleAutoDelete(rarity){
    this.autoDelete[rarity] = !this.autoDelete[rarity];
    this.saveGame();
    this.openStationPanel('artifact');
  }

  renderSkillUpgradeHTML(){
    const p = this.player, c = this.cdata;
    const essence = CLASS_ESSENCE[this.classKey];
    const slots = ['skill1','skill2','skill3','ultimate'];
    return `<div class="panel-row"><span class="prl">Upgrade skill untuk</span><span class="prr">${c.key} (karakter aktif)</span></div>` + slots.map(slot=>{
      const s = c[slot];
      if(p.level < UNLOCK_LEVEL[slot]){
        return `
          <div class="panel-row" style="flex-direction:column; align-items:stretch;">
            <div style="display:flex; justify-content:space-between;">
              <span class="prl">${s.icon} ${s.name}</span><span class="prr">🔒 Perlu Lv.${UNLOCK_LEVEL[slot]}</span>
            </div>
          </div>`;
      }
      const lvl = p.skillLevels[slot];
      const maxed = lvl>=10;
      const next = maxed ? null : SKILL_UPGRADE_COST[lvl+1];
      const reqLevel = maxed ? null : skillUpgradeLevelReq(slot, lvl+1);
      const levelOk = maxed || p.level>=reqLevel;
      const canAfford = !maxed && levelOk && this.gold>=next.gold && (this.materials['Skill Book']||0)>=next.book && (this.materials[essence]||0)>=next.ess;
      const costLine = maxed ? 'Skill sudah maksimal' : `Biaya: ${next.gold} Gold, ${next.book} Skill Book, ${next.ess} ${essence}${levelOk?'':' — Perlu Level '+reqLevel}`;
      return `
        <div class="panel-row" style="flex-direction:column; align-items:stretch;">
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span class="prl">${s.icon} ${s.name}</span><span class="prr">Lv. ${lvl}/10</span>
          </div>
          <div style="font-size:10px; color:var(--text-dim); margin-bottom:6px;">${costLine}</div>
          ${maxed?'':`<div class="mini-btn ${canAfford?'':'disabled'}" data-slot="${slot}">Upgrade</div>`}
        </div>`;
    }).join('');
  }
  wireSkillPanel(){
    document.querySelectorAll('#station-panel-body .mini-btn:not(.disabled)').forEach(el=>{
      el.addEventListener('click', ()=> this.upgradeSkill(el.dataset.slot));
    });
  }
  upgradeSkill(slot){
    const p = this.player, lvl = p.skillLevels[slot];
    if(lvl>=10) return;
    if(p.level < UNLOCK_LEVEL[slot]){ this.toast('Skill belum terbuka'); return; }
    const reqLevel = skillUpgradeLevelReq(slot, lvl+1);
    if(p.level < reqLevel){ this.toast(`Perlu Level ${reqLevel} untuk upgrade ini`); return; }
    const cost = SKILL_UPGRADE_COST[lvl+1];
    const essence = CLASS_ESSENCE[this.classKey];
    const haveBook = this.materials['Skill Book']||0, haveEss = this.materials[essence]||0;
    if(this.gold<cost.gold || haveBook<cost.book || haveEss<cost.ess){ this.toast('Gold/Material tidak cukup'); return; }
    this.gold -= cost.gold; this.materials['Skill Book'] -= cost.book; this.materials[essence] -= cost.ess;
    p.skillLevels[slot]++;
    this.toast(`${this.cdata[slot].name} naik ke Level ${p.skillLevels[slot]}!`);
    this.openStationPanel('skill');
    this.saveGame();
  }

  renderQuestHTML(){
    return this.quests.map(q=>{
      const done = q.progress>=q.target;
      const rewardParts=[];
      if(q.reward.gold) rewardParts.push(q.reward.gold+' Gold');
      if(q.reward.exp) rewardParts.push(q.reward.exp+' EXP');
      if(q.reward.gems) rewardParts.push(q.reward.gems+' Gems');
      return `<div class="quest-row">
        <div class="qd">${q.desc}</div>
        <div class="qp">Progress: ${q.progress}/${q.target} · Reward: ${rewardParts.join(', ')}</div>
        ${q.claimed? '<div style="font-size:10.5px;color:var(--text-dim);">Sudah diklaim</div>' : `<div class="mini-btn ${done?'':'disabled'}" data-id="${q.id}">Klaim Reward</div>`}
      </div>`;
    }).join('');
  }
  wireQuestPanel(){
    document.querySelectorAll('#station-panel-body .mini-btn:not(.disabled)').forEach(el=>{
      el.addEventListener('click', ()=> this.claimQuest(el.dataset.id));
    });
  }
  claimQuest(id){
    const q = this.quests.find(q=>q.id===id);
    if(!q || q.claimed || q.progress<q.target) return;
    if(q.reward.gold) this.gold += q.reward.gold;
    if(q.reward.exp) this.gainExp(q.reward.exp);
    if(q.reward.gems) this.gems += q.reward.gems;
    q.claimed = true;
    this.toast('Reward diklaim!');
    this.openStationPanel('quest');
    this.saveGame();
  }
  questProgress(type, amount){
    const q = this.quests.find(q=>q.type===type && !q.claimed);
    if(!q) return;
    q.progress = Math.min(q.target, q.progress+amount);
  }

  renderMainStageHTML(){
    const d = DungeonData.greenForest;
    const prog = this.dungeonProgress.greenForest;
    let stageRows='';
    d.stages.forEach(st=>{
      const locked = st.id>prog.unlockedStage;
      const isBoss = !!st.boss;
      const mobsLabel = isBoss ? 'Boss: Goblin King' : st.mobs.map(m=>`${m.count}x ${EnemyData[m.type].name}`).join(' · ');
      const status = locked ? '🔒' : (isBoss && prog.cleared ? '⭐' : (st.id<prog.unlockedStage ? '✅' : '▶️'));
      stageRows += `<div class="stage-row ${locked?'locked':''} ${isBoss?'boss-row':''}" data-story="${st.id}">
        <div class="stage-num">${isBoss?'👑':st.id}</div>
        <div class="stage-info"><div class="stage-title">${isBoss?'Stage 5 — Boss':'Stage '+st.id}</div><div class="stage-mobs">${mobsLabel}</div></div>
        <div class="stage-status">${status}</div>
      </div>`;
    });
    return `<div class="domain-card"><div class="dn">${d.name} (${d.region})</div><div class="dd">Rekomendasi ${d.levelRange}</div>${stageRows}</div>`;
  }
  wireMainStagePanel(){
    document.querySelectorAll('#station-panel-body .stage-row:not(.locked)[data-story]').forEach(el=>{
      el.addEventListener('click', ()=> this.enterStage(parseInt(el.dataset.story)));
    });
  }

  renderFarmDomainHTML(key){
    const dd = DomainData[key];
    const prog2 = this.domainProgress[key];
    let tierRows = '';
    dd.tiers.forEach(t=>{
      const locked = t.level>prog2.unlockedTier;
      const mobsLabel = t.mobs.map(m=>`${m.count}x ${EnemyData[m.type].name}`).join(' · ');
      const status = locked ? '🔒' : (t.level<prog2.unlockedTier ? '✅' : '▶️');
      tierRows += `<div class="stage-row ${locked?'locked':''}" data-farm="${key}" data-tier="${t.level}">
        <div class="stage-num">${t.level}</div>
        <div class="stage-info"><div class="stage-title">Level ${t.level}</div><div class="stage-mobs">${mobsLabel}</div></div>
        <div class="stage-status">${status}</div>
      </div>`;
    });
    return `<div class="domain-card"><div class="dn">${dd.name}</div><div class="dd">${dd.desc}</div>${tierRows}</div>`;
  }
  wireFarmDomainPanel(key){
    document.querySelectorAll('#station-panel-body .stage-row:not(.locked)[data-farm]').forEach(el=>{
      el.addEventListener('click', ()=> this.runFarmDomain(el.dataset.farm, parseInt(el.dataset.tier)));
    });
  }

  renderDummyHTML(){
    return `<div class="domain-card">
      <div class="dn">Training Dummy</div>
      <div class="dd">Dummy tidak menyerang balik dan tidak memberi reward — khusus untuk latihan damage/skill.</div>
      <div class="stage-row" data-dummy="goblin4">
        <div class="stage-num">4x</div>
        <div class="stage-info"><div class="stage-title">Dummy Goblin</div><div class="stage-mobs">HP x5 dari Goblin biasa</div></div>
        <div class="stage-status">▶️</div>
      </div>
      <div class="stage-row" data-dummy="elite4">
        <div class="stage-num">4x</div>
        <div class="stage-info"><div class="stage-title">Dummy Goblin Elite</div><div class="stage-mobs">HP x5 dari Goblin Elite</div></div>
        <div class="stage-status">▶️</div>
      </div>
      <div class="stage-row boss-row" data-dummy="boss1">
        <div class="stage-num">👑</div>
        <div class="stage-info"><div class="stage-title">Dummy Goblin King</div><div class="stage-mobs">HP x2 dari Goblin King</div></div>
        <div class="stage-status">▶️</div>
      </div>
      <div class="stage-row boss-row" data-dummy="infinite">
        <div class="stage-num">♾️</div>
        <div class="stage-info"><div class="stage-title">Dummy Uji Damage (HP Tak Terbatas)</div><div class="stage-mobs">Tidak pernah mati — dipakai khusus utk mengukur Total Damage &amp; DPS. Tekan 🔁 di HUD utk reset counter.</div></div>
        <div class="stage-status">▶️</div>
      </div>
      <div class="stage-row" data-dummy="custom">
        <div class="stage-num">⚙️</div>
        <div class="stage-info"><div class="stage-title">Custom Mode</div><div class="stage-mobs">Muncul tombol 🎯 di HUD — tekan utk spawn 1 Dummy Goblin + 1 Dummy Elite + 1 Dummy Boss di posisimu saat itu. Tombol hilang saat kembali ke Lobby.</div></div>
        <div class="stage-status">▶️</div>
      </div>
    </div>`;
  }
  wireDummyPanel(){
    document.querySelectorAll('#station-panel-body .stage-row[data-dummy]').forEach(el=>{
      el.addEventListener('click', ()=> this.enterDummyMode(el.dataset.dummy));
    });
  }


  // ---------------- INFINITE TOWER ----------------
  renderTowerHTML(){
    const highest = this.towerProgress.highestFloor;
    const nextFloor = highest;
    const isBonusFloor = nextFloor % 5 === 0;
    const isBossFloor = nextFloor % 10 === 0;
    return `<div class="domain-card">
      <div class="dn">Menara Tak Terbatas</div>
      <div class="dd">Floor makin tinggi, musuh makin kuat &amp; reward makin besar. Setiap Floor kelipatan 5 memberi bonus 💎 Gems. Floor kelipatan 10 adalah Floor Boss. <b>Tidak ada drop Artifact di menara ini</b> — hanya 🪙 Gold, ⭐ EXP, material upgrade, dan ✨ Magical Dust.</div>
      <div class="panel-row"><span class="prl">Floor Tertinggi Dicapai</span><span class="prr">${highest}</span></div>
      <div class="stage-row ${isBossFloor?'boss-row':''}" data-tower="${nextFloor}">
        <div class="stage-num">${isBossFloor?'👑':nextFloor}</div>
        <div class="stage-info"><div class="stage-title">Lanjutkan — Floor ${nextFloor}</div><div class="stage-mobs">${isBossFloor?'Boss Menara muncul!':(isBonusFloor?'⭐ Floor Bonus Gems!':'Floor normal')}</div></div>
        <div class="stage-status">▶️</div>
      </div>
      <div class="stage-row" data-tower="1">
        <div class="stage-num">1</div>
        <div class="stage-info"><div class="stage-title">Mulai Ulang dari Floor 1</div><div class="stage-mobs">Progres tertinggi tetap tersimpan</div></div>
        <div class="stage-status">🔁</div>
      </div>
    </div>`;
  }
  wireTowerPanel(){
    document.querySelectorAll('#station-panel-body .stage-row[data-tower]').forEach(el=>{
      el.addEventListener('click', ()=> this.enterTowerFloor(parseInt(el.dataset.tower)));
    });
  }

  towerFloorConfig(floor){
    const statMult = 1 + (floor-1)*0.14;
    if(floor % 10 === 0){
      const eliteCount = Math.min(6, 2 + Math.floor(floor/10));
      return { mobs:[{type:'GoblinElite', count:eliteCount}], boss:'GoblinKing', statMult };
    }
    const goblinCount = Math.min(6, 2 + Math.floor(floor/4));
    const eliteCount = Math.min(5, Math.floor(floor/6));
    const mobs = [{type:'Goblin', count:goblinCount}];
    if(eliteCount>0) mobs.push({type:'GoblinElite', count:eliteCount});
    return { mobs, statMult };
  }

  enterTowerFloor(floor){
    floor = Math.max(1, floor||1);
    this.beginRunCommon();
    this.currentRun = {kind:'tower', floor};
    const cfg = this.towerFloorConfig(floor);
    const center = new THREE.Vector3(0,0,-6);
    if(cfg.boss){
      this.spawnEnemy(cfg.boss, center.clone(), cfg.statMult);
      if(cfg.mobs.length) this.spawnWave(cfg.mobs, center.clone(), cfg.statMult);
      this.toast(`⚠️ Floor ${floor} — Boss Menara muncul!`);
    } else {
      this.spawnWave(cfg.mobs, center, cfg.statMult);
    }
    document.getElementById('stage-banner').style.display='block';
    document.getElementById('stage-banner-title').textContent = `Menara Tak Terbatas — Floor ${floor}`;
    document.getElementById('stage-banner-sub').textContent = cfg.boss ? 'Kalahkan Boss Menara!' : `Musuh tersisa: ${this.enemies.length}`;
  }

  onTowerClear(){
    this.stageActive = false;
    const floor = this.currentRun.floor;
    const timeTaken = this.clock.getElapsedTime() - this.stageStartTime;
    this.towerProgress.highestFloor = Math.max(this.towerProgress.highestFloor, floor+1);

    let bonusMsg = '';
    if(floor % 5 === 0){
      const gemsBonus = 2 + Math.floor(floor/5);
      this.gems += gemsBonus;
      bonusMsg = ` +${gemsBonus} 💎 Gems (Bonus Floor Kelipatan 5)!`;
    }
    this.toast(`Floor ${floor} Selesai!${bonusMsg}`);
    this.saveGame();

    const ov = document.getElementById('stage-overlay');
    ov.classList.remove('defeat');
    document.getElementById('ov-rating').textContent = '🗼';
    document.getElementById('ov-title').textContent = 'Floor '+floor+' Selesai!';
    document.getElementById('ov-sub').textContent = `Waktu: ${timeTaken.toFixed(1)}s${bonusMsg}`;

    const btns = document.getElementById('ov-buttons');
    btns.innerHTML='';
    const nextBtn = document.createElement('div');
    nextBtn.className='gold-btn'; nextBtn.textContent='Lanjut ke Floor '+(floor+1);
    nextBtn.addEventListener('click', ()=>{ ov.style.display='none'; this.enterTowerFloor(floor+1); this.stageActive=true; });
    btns.appendChild(nextBtn);
    const lobbyBtn = document.createElement('div');
    lobbyBtn.className='ghost-btn'; lobbyBtn.textContent='Kembali ke Lobby';
    lobbyBtn.addEventListener('click', ()=> this.enterLobby());
    btns.appendChild(lobbyBtn);
    ov.style.display='flex';
  }

  enterDummyMode(type){
    this.beginRunCommon();
    this.currentRun = {kind:'dummy', subtype:type};
    document.getElementById('stage-banner').style.display='block';
    document.getElementById('stage-banner-title').textContent = 'Training Dummy';
    const center = new THREE.Vector3(0,0,-6);
    if(type==='goblin4'){
      this.spawnWave([{type:'DummyGoblin', count:4}], center);
      document.getElementById('stage-banner-sub').textContent = `Musuh tersisa: ${this.enemies.length}`;
    } else if(type==='elite4'){
      this.spawnWave([{type:'DummyGoblinElite', count:4}], center);
      document.getElementById('stage-banner-sub').textContent = `Musuh tersisa: ${this.enemies.length}`;
    } else if(type==='boss1'){
      this.spawnEnemy('DummyGoblinKing', center.clone());
      document.getElementById('stage-banner-sub').textContent = 'Hancurkan Dummy Boss!';
    } else if(type==='infinite'){
      const inst = this.spawnEnemy('DummyInfinite', center.clone());
      inst.totalDamage = 0;
      this.dpsTestStartTime = this.clock.getElapsedTime();
      document.getElementById('stage-banner-sub').textContent = 'Total Damage: 0 · DPS: 0';
      document.getElementById('reset-dpstest-btn').style.display='flex';
    } else if(type==='custom'){
      document.getElementById('stage-banner-sub').textContent = 'Tekan tombol 🎯 utk spawn dummy di posisimu';
      document.getElementById('spawn-dummy-btn').style.display='flex';
    }
    this.stageActive = true;
  }

  spawnCustomDummyTrio(){
    const p = this.player;
    const base = p.mesh.position.clone();
    this.spawnEnemy('DummyGoblin', base.clone().add(new THREE.Vector3(-1.6,0,0)));
    this.spawnEnemy('DummyGoblinElite', base.clone().add(new THREE.Vector3(1.6,0,0)));
    this.spawnEnemy('DummyGoblinKing', base.clone().add(new THREE.Vector3(0,0,1.9)));
    this.toast('Dummy trio muncul di posisimu!');
    document.getElementById('stage-banner-sub').textContent = `Musuh tersisa: ${this.enemies.filter(e=>e.state!=='dead').length}`;
  }

  onDummyClear(){
    this.stageActive = false;
    const ov = document.getElementById('stage-overlay');
    ov.classList.remove('defeat');
    document.getElementById('ov-rating').textContent = '🎯';
    document.getElementById('ov-title').textContent = 'Dummy Training Selesai';
    document.getElementById('ov-sub').textContent = 'Semua dummy hancur. Latihan tidak memberi reward.';
    const btns = document.getElementById('ov-buttons');
    btns.innerHTML='';
    const againBtn = document.createElement('div');
    againBtn.className='gold-btn'; againBtn.textContent='Ulangi';
    againBtn.addEventListener('click', ()=>{ ov.style.display='none'; this.enterDummyMode(this.currentRun.subtype); this.stageActive=true; });
    btns.appendChild(againBtn);
    const lobbyBtn = document.createElement('div');
    lobbyBtn.className='ghost-btn'; lobbyBtn.textContent='Kembali ke Lobby';
    lobbyBtn.addEventListener('click', ()=> this.enterLobby());
    btns.appendChild(lobbyBtn);
    ov.style.display='flex';
  }

  renderShopHTML(){
    const essence = CLASS_ESSENCE[this.classKey];
    const goldItems = [
      {id:'buy_book', name:'📘 Skill Book x3', cost:300},
      {id:'buy_essence', name:`🔷 ${essence} x2`, cost:400},
      {id:'buy_iron', name:'⛏️ Iron Ore x5', cost:100}
    ];
    const gemItems = [
      {id:'buy_art_common', name:'Artifact Common', cost:1, rarity:'Common'},
      {id:'buy_art_uncommon', name:'Artifact Uncommon', cost:2, rarity:'Uncommon'},
      {id:'buy_art_rare', name:'Artifact Rare', cost:4, rarity:'Rare'},
      {id:'buy_art_epic', name:'Artifact Epic', cost:6, rarity:'Epic'},
      {id:'buy_art_legendary', name:'Artifact Legendary', cost:10, rarity:'Legendary'}
    ];
    const exchangeItems = [
      {id:'exchange_gem_gold', name:'🪙 Tukar 10 💎 → 1500 Gold', cost:10}
    ];
    const expBottleItems = [
      {id:'buy_expbottle_gem', name:'🧪 Exp Bottle (+2000 EXP)', cost:10, currency:'gems', label:'10 💎'},
      {id:'buy_expbottle_gold', name:'🧪 Exp Bottle (+2000 EXP)', cost:2000, currency:'gold', label:'2000 🪙'}
    ];
    const goldRows = goldItems.map(it=>`<div class="panel-row"><span class="prl">${it.name}</span><span class="mini-btn ${this.gold>=it.cost?'':'disabled'}" data-buy="${it.id}">${it.cost} 🪙</span></div>`).join('');
    const gemRows = gemItems.map(it=>`<div class="panel-row"><span class="prl" style="color:${RARITY_COLOR[it.rarity]}">${it.name}</span><span class="mini-btn ${this.gems>=it.cost?'':'disabled'}" data-buy="${it.id}">${it.cost} 💎</span></div>`).join('');
    const exchangeRows = exchangeItems.map(it=>`<div class="panel-row"><span class="prl">${it.name}</span><span class="mini-btn ${this.gems>=it.cost?'':'disabled'}" data-buy="${it.id}">Tukar</span></div>`).join('');
    const expBottleRows = expBottleItems.map(it=>{
      const have = it.currency==='gems' ? this.gems : this.gold;
      return `<div class="panel-row"><span class="prl">${it.name}</span><span class="mini-btn ${have>=it.cost?'':'disabled'}" data-buy="${it.id}">${it.label}</span></div>`;
    }).join('');
    return `<div class="panel-h">Beli dengan Gold</div>${goldRows}
      <div class="panel-h">Tukar Gems — Artifact Langsung</div>${gemRows}
      <div class="panel-h">Tukar Gems ke Gold</div>${exchangeRows}
      <div class="panel-row"><span class="prl" style="font-size:10px;">Kurs tukar sengaja tidak favorable — lebih hemat dipakai langsung utk beli artifact.</span></div>
      <div class="panel-h">Exp Bottle (item usable — dipakai lewat 🎒 Inventory)</div>${expBottleRows}`;
  }
  wireShopPanel(){
    document.querySelectorAll('#station-panel-body .mini-btn:not(.disabled)[data-buy]').forEach(el=>{
      el.addEventListener('click', ()=> this.buyShopItem(el.dataset.buy));
    });
  }
  buyShopItem(id){
    const essence = CLASS_ESSENCE[this.classKey];
    const table = {
      buy_book:{cost:300, currency:'gold', fn:()=>{ this.materials['Skill Book']=(this.materials['Skill Book']||0)+3; this.toast('+3 Skill Book'); }},
      buy_essence:{cost:400, currency:'gold', fn:()=>{ this.materials[essence]=(this.materials[essence]||0)+2; this.toast('+2 '+essence); }},
      buy_iron:{cost:100, currency:'gold', fn:()=>{ this.materials['Iron Ore']=(this.materials['Iron Ore']||0)+5; this.toast('+5 Iron Ore'); }},
      buy_art_common:{cost:1, currency:'gems', fn:()=> this.buyArtifact('Common')},
      buy_art_uncommon:{cost:2, currency:'gems', fn:()=> this.buyArtifact('Uncommon')},
      buy_art_rare:{cost:4, currency:'gems', fn:()=> this.buyArtifact('Rare')},
      buy_art_epic:{cost:6, currency:'gems', fn:()=> this.buyArtifact('Epic')},
      buy_art_legendary:{cost:10, currency:'gems', fn:()=> this.buyArtifact('Legendary')},
      exchange_gem_gold:{cost:10, currency:'gems', fn:()=>{ this.gold += 1500; this.toast('Tukar 10 💎 → +1500 Gold'); }},
      buy_expbottle_gem:{cost:10, currency:'gems', fn:()=>{ this.materials['Exp Bottle']=(this.materials['Exp Bottle']||0)+1; this.toast('+1 Exp Bottle'); }},
      buy_expbottle_gold:{cost:2000, currency:'gold', fn:()=>{ this.materials['Exp Bottle']=(this.materials['Exp Bottle']||0)+1; this.toast('+1 Exp Bottle'); }}
    };
      const entry = table[id];
    if(!entry) return;
    if(entry.currency==='gold'){ if(this.gold<entry.cost){ this.toast('Gold tidak cukup'); return; } this.gold-=entry.cost; }
    else { if(this.gems<entry.cost){ this.toast('Gems tidak cukup'); return; } this.gems-=entry.cost; }
    entry.fn();
    this.openStationPanel('shop');
    this.saveGame();
  }
  buyArtifact(rarity){
    const art = generateArtifactOfRarity(rarity);
    this.grantArtifact(art);
  }

  // ---------------- COMBAT RUN MANAGEMENT ----------------
  clearEnemies(){
    this.enemies.forEach(e=> this.scene.remove(e.mesh));
    this.enemies = [];
  }

  spawnEnemy(typeKey, pos, statMult){
    statMult = statMult||1;
    const d = EnemyData[typeKey];
    const g = new THREE.Group();
    const bodyColor = d.isElite ? 0x6b4fae : d.color;
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.28,0.33,0.85,8), new THREE.MeshStandardMaterial({color:bodyColor, roughness:0.75}));
    body.position.y=0.62;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.24,14,14), new THREE.MeshStandardMaterial({color: d.isElite?0x9c7fe0:0x6ea45a, roughness:0.75}));
    head.position.y=1.15;
    g.add(body, head);
    if(d.isElite || d.isBoss){
      const aura = new THREE.PointLight(d.isBoss?0xff5c5c:0xb98aff, d.isBoss?1.2:0.7, d.isBoss?7:4);
      aura.position.y=1.2;
      g.add(aura);
    }
    g.scale.setScalar(d.scale||1);
    g.position.copy(pos);
    this.scene.add(g);

    const hp = Math.round(d.hp*statMult), patk = Math.round(d.patk*statMult), pdef = Math.round(d.pdef*statMult);
    const moveSpeed = d.moveSpeed * (1 + (statMult-1)*0.5);
    const inst = {
      mesh:g, data:d, typeKey, statMult,
      hp, hpMax:hp, patk, pdef, moveSpeed,
      poise:0, poiseMax:d.breakHits,
      state:'idle', attackTimer:0, breakTimer:0,
      hitCooldown:0, stunTimer:0, slowTimer:0, slowValue:0,
      dotTimer:0, dotDps:0, dotIsMagic:false, dotTick:0,
      burnStacks:[], burnTick:0,
      defShredTimer:0, defShredValue:0,
      tacHybridDefShredTimer:0, tacHybridDefShredValue:0,
      isBoss:!!d.isBoss, isElite:!!d.isElite, phase:1,
      totalDamage:0
    };
    this.enemies.push(inst);
    return inst;
  }

  beginRunCommon(){
    this.closeStationPanel();
    document.getElementById('break-banner').style.opacity='0';
    document.body.classList.remove('lobby-mode');
    this.inLobby = false;
    this.stageActive = true;
    this.setEnvironmentMode('dungeon');
    document.getElementById('stage-overlay').style.display='none';
    document.getElementById('spawn-dummy-btn').style.display='none';
    document.getElementById('reset-dpstest-btn').style.display='none';
    this.clearEnemies();
    this.clearSummons();
    this.team.forEach(ch=>{
      ch.hp = ch.hpMax; ch.mana = ch.manaMax;
      ch.buffs.shield=0; ch.buffs.hasteTimer=0; ch.buffs.defTimer=0; ch.buffs.lifestealTimer=0;
      if(ch.buffs.titanTimer>0){ ch.hpMax -= (ch.buffs.titanBonusHp||0); ch.hp = Math.min(ch.hp, ch.hpMax); }
      ch.buffs.titanTimer=0; ch.buffs.titanBonusHp=0; ch.buffs.titanAtkPct=0; ch.buffs.titanHpPct=0; ch.buffs.titanDefPct=0; ch.buffs.titanLifesteal=0;
      ch.buffs.archerBoostTimer=0; ch.buffs.archerBoostAtkPct=0; ch.buffs.archerBoostCritRate=0; ch.buffs.archerBoostCritDmg=0;
      ch.buffs.momentumStacks=[]; ch.buffs.rageTimer=0; ch.buffs.rageAtkPct=0; ch.buffs.rageAspdPct=0; ch.buffs.rageLifesteal=0;
      ch.mesh.scale.set(1,1,1);
    });
    this.sharedBuffs = [];
    this.player.mesh.position.set(0,0,3);
    this.camYaw = 0; this.camPitch=0.35; this.camDist=6.5;
    this.stageStartTime = this.clock.getElapsedTime();
    this.stageDamageTaken = 0;
  }

  spawnWave(mobsDef, center, statMult){
    let idx=0;
    const total = mobsDef.reduce((a,m)=>a+m.count,0);
    mobsDef.forEach(m=>{
      for(let i=0;i<m.count;i++){
        const ang = (idx/total)*Math.PI*2;
        const pos = new THREE.Vector3(center.x+Math.cos(ang)*4.5, 0, center.z+Math.sin(ang)*4.5);
        this.spawnEnemy(m.type, pos, statMult);
        idx++;
      }
    });
  }

  enterStage(stageId){
    this.beginRunCommon();
    this.currentRun = {kind:'story', dungeonKey:'greenForest'};
    this.currentStageId = stageId;
    this.loadStage(stageId);
  }

  loadStage(stageId){
    const stageDef = DungeonData.greenForest.stages.find(s=>s.id===stageId);
    this.clearEnemies();
    this.team.forEach(ch=>{ ch.hp = ch.hpMax; ch.mana = ch.manaMax; });
    this.player.mesh.position.set(0,0,3);
    const center = new THREE.Vector3(0,0,-6);
    const isBoss = !!stageDef.boss;
    if(isBoss){
      this.spawnEnemy(stageDef.boss, center.clone());
      if(stageDef.mobs) this.spawnWave(stageDef.mobs, center.clone());
      this.toast('⚠️ Goblin King muncul!');
    } else {
      this.spawnWave(stageDef.mobs, center);
    }
    this.stageActive = true;
    this.stageStartTime = this.clock.getElapsedTime();
    this.stageDamageTaken = 0;
    document.getElementById('stage-banner').style.display='block';
    document.getElementById('stage-banner-title').textContent = `Green Forest — ${isBoss?'Boss Stage':'Stage '+stageId+' / 5'}`;
    document.getElementById('stage-banner-sub').textContent = isBoss ? 'Kalahkan Goblin King!' : `Musuh tersisa: ${this.enemies.length}`;
  }

  runFarmDomain(key, tier){
    tier = tier||1;
    this.beginRunCommon();
    this.currentRun = {kind:'farm', dungeonKey:key, tier};
    const dd = DomainData[key];
    const tdef = dd.tiers.find(t=>t.level===tier) || dd.tiers[0];
    const statMult = 1 + (tier-1)*0.32;
    const center = new THREE.Vector3(0,0,-6);
    this.spawnWave(tdef.mobs, center, statMult);
    document.getElementById('stage-banner').style.display='block';
    document.getElementById('stage-banner-title').textContent = `${dd.name} — Level ${tier}`;
    document.getElementById('stage-banner-sub').textContent = `Musuh tersisa: ${this.enemies.length}`;
  }

  // ---------------- INPUT ----------------
  initInput(){
    window.addEventListener('keydown', e=>{
      this.keys[e.code]=true;
      if(e.code==='KeyE' && this.inLobby && !this.panelOpen && this._nearStationKey) this.openStationPanel(this._nearStationKey);
      if(e.code==='Space' && (this.stageActive||this.inLobby) && !this.panelOpen) this.tryDodge();
      if(e.code==='KeyQ' && (this.stageActive||this.inLobby) && !this.panelOpen) this.swapCharacter();
      if(!this.stageActive) return;
      if(e.code==='KeyE') this.trySkill('skill1');
      if(e.code==='KeyR') this.trySkill('skill2');
      if(e.code==='KeyT') this.trySkill('skill3');
      if(e.code==='KeyF') this.trySkill('ultimate');
    });
    window.addEventListener('keyup', e=>{ this.keys[e.code]=false; });

    const canvas = document.getElementById('game-canvas');
    canvas.addEventListener('mousedown', e=>{
      if(e.button===0){
        // Left click = Basic Attack. Right click = camera drag (below).
        if(this.stageActive) this.tryAttack();
      } else if(e.button===2){
        this.mouse.down = true;
        this.mouse.lastX = e.clientX; this.mouse.lastY = e.clientY;
      }
    });
    canvas.addEventListener('contextmenu', e=> e.preventDefault());
    window.addEventListener('mouseup', e=>{
      if(e.button===2) this.mouse.down=false;
    });
    window.addEventListener('mousemove', e=>{
      if(!this.mouse.down) return;
      const dx = e.clientX-this.mouse.lastX, dy = e.clientY-this.mouse.lastY;
      this.mouse.lastX=e.clientX; this.mouse.lastY=e.clientY;
      this.camYaw -= dx*0.0055;
      this.camPitch = Math.max(0.08, Math.min(1.15, this.camPitch + dy*0.0045));
    });
    canvas.addEventListener('wheel', e=>{
      this.camDist = Math.max(3.5, Math.min(11, this.camDist + e.deltaY*0.003));
    });

    // Touch camera-drag tracked by its own touch identifier so it never
    // conflicts with the joystick's touch (fixes "can't move + look at once").
    canvas.addEventListener('touchstart', e=>{
      for(const t of e.changedTouches){
        if(t.clientX > window.innerWidth*0.42 && this.cameraTouchId===null){
          e.preventDefault();
          this.cameraTouchId = t.identifier;
          this.mouse.down = true;
          this.mouse.lastX = t.clientX; this.mouse.lastY = t.clientY;
          break;
        }
      }
    }, {passive:false});
    canvas.addEventListener('touchmove', e=>{
      if(this.cameraTouchId===null) return;
      let touch=null;
      for(const t of e.changedTouches){ if(t.identifier===this.cameraTouchId){ touch=t; break; } }
      if(!touch) return;
      e.preventDefault();
      const dx=touch.clientX-this.mouse.lastX, dy=touch.clientY-this.mouse.lastY;
      this.mouse.lastX=touch.clientX; this.mouse.lastY=touch.clientY;
      this.camYaw -= dx*0.006;
      this.camPitch = Math.max(0.08, Math.min(1.15, this.camPitch + dy*0.005));
    }, {passive:false});
    const endCamTouch = e=>{
      for(const t of e.changedTouches){
        if(t.identifier===this.cameraTouchId){ this.cameraTouchId=null; this.mouse.down=false; break; }
      }
    };
    canvas.addEventListener('touchend', endCamTouch);
    canvas.addEventListener('touchcancel', endCamTouch);

    document.getElementById('slot-attack').addEventListener('click', ()=> { if(this.stageActive) this.tryAttack(); });
    document.getElementById('slot-skill1').addEventListener('click', ()=> { if(this.stageActive) this.trySkill('skill1'); });
    document.getElementById('slot-skill2').addEventListener('click', ()=> { if(this.stageActive) this.trySkill('skill2'); });
    document.getElementById('slot-skill3').addEventListener('click', ()=> { if(this.stageActive) this.trySkill('skill3'); });
    document.getElementById('slot-ultimate').addEventListener('click', ()=> { if(this.stageActive) this.trySkill('ultimate'); });
    document.getElementById('slot-dodge').addEventListener('click', ()=> { if(this.stageActive||this.inLobby) this.tryDodge(); });

    this.wireTooltip('slot-skill1','skill1');
    this.wireTooltip('slot-skill2','skill2');
    this.wireTooltip('slot-skill3','skill3');
    this.wireTooltip('slot-ultimate','ultimate');

    document.getElementById('mbtn-attack').addEventListener('touchstart', e=>{e.preventDefault(); if(this.stageActive) this.tryAttack();});
    document.getElementById('mbtn-skill1').addEventListener('touchstart', e=>{e.preventDefault(); if(this.stageActive) this.trySkill('skill1');});
    document.getElementById('mbtn-skill2').addEventListener('touchstart', e=>{e.preventDefault(); if(this.stageActive) this.trySkill('skill2');});
    document.getElementById('mbtn-skill3').addEventListener('touchstart', e=>{e.preventDefault(); if(this.stageActive) this.trySkill('skill3');});
    document.getElementById('mbtn-ultimate').addEventListener('touchstart', e=>{e.preventDefault(); if(this.stageActive) this.trySkill('ultimate');});
    document.getElementById('mbtn-dodge').addEventListener('touchstart', e=>{e.preventDefault(); if(this.stageActive||this.inLobby) this.tryDodge();});
    document.getElementById('mbtn-swap').addEventListener('touchstart', e=>{e.preventDefault(); if(this.stageActive||this.inLobby) this.swapCharacter();});

    document.getElementById('interact-prompt').addEventListener('click', ()=>{
      if(this.inLobby && !this.panelOpen && this._nearStationKey) this.openStationPanel(this._nearStationKey);
    });

    document.getElementById('spawn-dummy-btn').addEventListener('click', ()=>{
      if(this.stageActive && this.currentRun && this.currentRun.kind==='dummy' && this.currentRun.subtype==='custom') this.spawnCustomDummyTrio();
    });

    document.getElementById('reset-dpstest-btn').addEventListener('click', ()=>{
      const dummy = this.enemies.find(e=> e.data && e.data.isInfinite);
      if(dummy){
        dummy.totalDamage = 0;
        this.dpsTestStartTime = this.clock.getElapsedTime();
        document.getElementById('stage-banner-sub').textContent = 'Total Damage: 0 · DPS: 0';
        this.toast('Damage counter direset!');
      }
    });

    // Joystick tracked by its own dedicated touch identifier too.
    const zone = document.getElementById('joystick-zone');
    const knob = document.getElementById('joystick-knob');
    let jTouchId = null, jCenter={x:0,y:0};
    zone.addEventListener('touchstart', e=>{
      if(jTouchId!==null) return;
      e.preventDefault();
      const t = e.changedTouches[0];
      jTouchId = t.identifier;
      const r = zone.getBoundingClientRect();
      jCenter = {x:r.left+r.width/2, y:r.top+r.height/2};
    }, {passive:false});
    zone.addEventListener('touchmove', e=>{
      if(jTouchId===null) return;
      let touch=null;
      for(const t of e.changedTouches){ if(t.identifier===jTouchId){ touch=t; break; } }
      if(!touch) return;
      e.preventDefault();
      let dx=touch.clientX-jCenter.x, dy=touch.clientY-jCenter.y;
      const max=40; const len=Math.hypot(dx,dy);
      if(len>max){ dx=dx/len*max; dy=dy/len*max; }
      knob.style.left = (35+dx)+'px'; knob.style.top=(35+dy)+'px';
      this.joystickVec = {x:dx/max, y:dy/max};
    }, {passive:false});
    const endJoyTouch = e=>{
      for(const t of e.changedTouches){
        if(t.identifier===jTouchId){
          jTouchId=null; knob.style.left='35px'; knob.style.top='35px';
          this.joystickVec={x:0,y:0};
          break;
        }
      }
    };
    zone.addEventListener('touchend', endJoyTouch);
    zone.addEventListener('touchcancel', endJoyTouch);
  }

  wireTooltip(slotId, skillKey){
    const el = document.getElementById(slotId);
    const tt = document.getElementById('skill-tooltip');
    el.addEventListener('mouseenter', ()=>{
      const s = this.cdata[skillKey];
      const lvl = this.player.skillLevels[skillKey];
      document.getElementById('tt-name').textContent = s.name+' (Lv.'+lvl+')';
      document.getElementById('tt-desc').textContent = s.desc || '';
      tt.style.display='block';
    });
    el.addEventListener('mouseleave', ()=>{ tt.style.display='none'; });
  }

  // ---------------- SKILL COOLDOWN ROW (in the HP/player frame) ----------------
  initPlayerSkillRow(){
    const row = document.getElementById('player-skill-row');
    row.innerHTML = '';
    const c = this.cdata;
    const defs = [
      {slot:'skill1', def:c.skill1},
      {slot:'skill2', def:c.skill2},
      {slot:'skill3', def:c.skill3},
      {slot:'ultimate', def:c.ultimate}
    ];
    defs.forEach(d=>{
      const el = document.createElement('div');
      el.className = 'ps-slot'+(d.slot==='ultimate'?' ult':'');
      el.id = 'ps-'+d.slot;
      el.innerHTML = `<div class="ic">${d.def.icon}</div><div class="cdov"></div><div class="cdtx"></div>`;
      row.appendChild(el);
    });
  }
  updatePlayerSkillRow(){
    const p = this.player;
    ['skill1','skill2','skill3','ultimate'].forEach(slot=>{
      const el = document.getElementById('ps-'+slot);
      if(!el) return;
      const ov = el.querySelector('.cdov');
      const tx = el.querySelector('.cdtx');
      if(p.level < UNLOCK_LEVEL[slot]){
        el.classList.add('locked');
        ov.style.height='100%';
        tx.textContent = UNLOCK_LEVEL[slot];
      } else {
        el.classList.remove('locked');
        const total = this.getEffCooldown(this.cdata[slot].cooldown);
        const remaining = p.cooldowns[slot];
        if(remaining>0){
          ov.style.height = Math.min(100,(remaining/total)*100)+'%';
          tx.textContent = remaining>1 ? Math.ceil(remaining) : '';
        } else {
          ov.style.height='0%'; tx.textContent='';
        }
      }
    });
  }

  // ---------------- VISUAL FX ----------------
  spawnFX(fx, fromPos, toPos, customLife){
    if(!fx) return;
    const color = fx.color;
    const fromP = fromPos.clone();
    const toP = (toPos||fromPos).clone();
    let mesh, life, kind, scaleFrom=1, scaleTo=1, spin=false, baseOpacity=0.85;

    switch(fx.type){
      case 'bolt': {
        const grp = new THREE.Group();
        const ball = new THREE.Mesh(new THREE.SphereGeometry(0.22,10,10), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.9}));
        grp.add(ball);
        const glow = new THREE.PointLight(color, 0.8, 4);
        grp.add(glow);
        grp.position.copy(fromP);
        mesh = grp;
        life = (customLife!==undefined ? customLife : 0.18); kind='travel'; baseOpacity=0.9;
        break;
      }
      case 'arrow':
        mesh = new THREE.Mesh(new THREE.BoxGeometry(0.07,0.07,0.55), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.9}));
        mesh.position.copy(fromP);
        mesh.lookAt(toP);
        life=0.14; kind='travel'; baseOpacity=0.9;
        break;
      case 'ice':
        mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5,0), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.85}));
        mesh.position.copy(toP); mesh.position.y=1.0;
        life=0.35; kind='burst'; scaleFrom=0.3; scaleTo=1.4; baseOpacity=0.85;
        break;
      case 'fire':
        mesh = new THREE.Mesh(new THREE.SphereGeometry(0.6,10,10), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.75}));
        mesh.position.copy(toP); mesh.position.y=1.0;
        life=0.4; kind='burst'; scaleFrom=0.4; scaleTo=1.7; baseOpacity=0.75;
        break;
      case 'magic':
        mesh = new THREE.Mesh(new THREE.SphereGeometry(0.55,12,12), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.78}));
        mesh.position.copy(toP); mesh.position.y=1.0;
        life=0.42; kind='burst'; scaleFrom=0.4; scaleTo=1.6; spin=true; baseOpacity=0.78;
        break;
      case 'shield':
        mesh = new THREE.Mesh(new THREE.TorusGeometry(0.55,0.05,8,20), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.8}));
        mesh.position.copy(fromP); mesh.position.y=1.0; mesh.rotation.x=Math.PI/2;
        life=0.5; kind='burst'; scaleFrom=0.6; scaleTo=1.15; baseOpacity=0.8;
        break;
      case 'smoke':
        mesh = new THREE.Mesh(new THREE.SphereGeometry(0.5,8,8), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.55}));
        mesh.position.copy(fromP); mesh.position.y=0.9;
        life=0.35; kind='burst'; scaleFrom=0.3; scaleTo=1.1; baseOpacity=0.55;
        break;
      case 'shockwave':
        mesh = new THREE.Mesh(new THREE.RingGeometry(0.22,0.68,28), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.95, side:THREE.DoubleSide}));
        mesh.rotation.x=-Math.PI/2; mesh.position.copy(toP); mesh.position.y=0.06;
        life=0.38; kind='burst'; scaleFrom=1; scaleTo=3.6; baseOpacity=0.95;
        break;
      case 'slash': {
        const grp = new THREE.Group();
        for(let i=0;i<2;i++){
          const streak = new THREE.Mesh(new THREE.BoxGeometry(1.0,0.1,0.03), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.95}));
          streak.rotation.z = (i===0? 0.5 : -0.35) + (Math.random()-0.5)*0.3;
          grp.add(streak);
        }
        grp.position.copy(toP); grp.position.y = 1.1;
        grp.rotation.y = Math.random()*Math.PI*2;
        mesh = grp;
        life=0.22; kind='burst'; scaleFrom=0.35; scaleTo=1.3; baseOpacity=0.95;
        break;
      }
      case 'tornado': {
        const grp = new THREE.Group();
        for(let i=0;i<3;i++){
          const t = new THREE.Mesh(new THREE.TorusGeometry(0.4+i*0.18,0.05,6,16), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.7}));
          t.position.y=0.3+i*0.5; t.rotation.x=Math.PI/2;
          grp.add(t);
        }
        grp.position.copy(toP);
        mesh = grp;
        life=0.6; kind='burst'; scaleFrom=0.5; scaleTo=1.6; spin=true; baseOpacity=0.7;
        break;
      }
      case 'bomb': {
        // Thrown grenade projectile (Archer's Explosive Trap) — a tumbling
        // ball that travels to the target and is expected to detonate on arrival.
        const grp = new THREE.Group();
        const ball = new THREE.Mesh(new THREE.SphereGeometry(0.2,10,10), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.95}));
        grp.add(ball);
        const spark = new THREE.Mesh(new THREE.SphereGeometry(0.06,6,6), new THREE.MeshBasicMaterial({color:0xffd27a, transparent:true, opacity:0.95}));
        spark.position.y=0.22;
        grp.add(spark);
        const glow = new THREE.PointLight(color, 0.6, 3);
        grp.add(glow);
        grp.position.copy(fromP);
        mesh = grp;
        life = (customLife!==undefined ? customLife : 0.18); kind='travel'; baseOpacity=0.95; spin=true;
        break;
      }
      case 'arrowDrop': {
        // A single arrow falling from the sky onto a fixed ground point
        // (Archer's Rain of Arrows) — one of these is spawned per enemy.
        const grp = new THREE.Group();
        const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,0.55,6), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.95}));
        grp.add(shaft);
        const head = new THREE.Mesh(new THREE.ConeGeometry(0.06,0.16,6), new THREE.MeshBasicMaterial({color:0xbfbfbf, transparent:true, opacity:0.95}));
        head.position.y=-0.35;
        grp.add(head);
        grp.position.copy(fromP);
        mesh = grp;
        life = (customLife!==undefined ? customLife : 0.3); kind='travel'; baseOpacity=0.95;
        break;
      }
      case 'areaRing': {
        // Ground-anchored AOE footprint — a flat disk + rim ring sized to the
        // skill's actual aoeRadius, so the affected zone is visible at a
        // glance. Position always comes from `toP` (caller passes the same
        // anchor point for both from/to). Reads optional overrides off the
        // fx object itself: radius, life, opacity, scaleFrom, scaleTo.
        const r = fx.radius || 4;
        const grp = new THREE.Group();
        const disk = new THREE.Mesh(new THREE.CircleGeometry(r,36), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.25, side:THREE.DoubleSide}));
        disk.rotation.x=-Math.PI/2; disk.position.y=0.04;
        const ring = new THREE.Mesh(new THREE.RingGeometry(Math.max(0.15,r-0.2), r, 40), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.9, side:THREE.DoubleSide}));
        ring.rotation.x=-Math.PI/2; ring.position.y=0.07;
        grp.add(disk, ring);
        grp.position.copy(toP); grp.position.y=0;
        mesh = grp;
        life = fx.life!==undefined ? fx.life : 0.55;
        kind='burst';
        scaleFrom = fx.scaleFrom!==undefined ? fx.scaleFrom : 0.45;
        scaleTo = fx.scaleTo!==undefined ? fx.scaleTo : 1.0;
        baseOpacity = fx.opacity!==undefined ? fx.opacity : 0.9;
        break;}
      case 'buff': {
        // A rising ring of light on whoever just received a support buff —
        // used for Tactician/Arcanist ally-target skills.
        const grp = new THREE.Group();
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5,0.06,8,20), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.85}));
        ring.rotation.x=Math.PI/2;
        grp.add(ring);
        const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.3,0.04,8,20), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.7}));
        ring2.rotation.x=Math.PI/2; ring2.position.y=0.8;
        grp.add(ring2);
        grp.position.copy(toP); grp.position.y += 0.1;
        mesh = grp;
        life=0.6; kind='burst'; scaleFrom=0.3; scaleTo=1.3; spin=true; baseOpacity=0.85;
        break;
      }
      case 'banner': {
        // Expanding tri-ring "command banner" pulse for ultimate-tier support
        // skills (Grand Strategy / Mystic Dominion).
        const grp = new THREE.Group();
        for(let i=0;i<3;i++){
          const ring = new THREE.Mesh(new THREE.RingGeometry(0.3+i*0.25,0.38+i*0.25,24), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.7, side:THREE.DoubleSide}));
          ring.rotation.x=-Math.PI/2;
          grp.add(ring);
        }
        grp.position.copy(toP); grp.position.y=0.08;
        mesh = grp;
        life=0.55; kind='burst'; scaleFrom=0.5; scaleTo=1.8; baseOpacity=0.7;
        break;
      }
      case 'punch': {
        // Wrestler impact FX: a compact starburst of knuckle-shaped spikes
        // radiating from the hit point, punchy and quick — reused for both
        // Heavy Fist and Rapid Combo so every hit reads as a solid impact.
        const grp = new THREE.Group();
        const ring = new THREE.Mesh(new THREE.RingGeometry(0.14,0.42,16), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.9, side:THREE.DoubleSide}));
        grp.add(ring);
        const spikeCount = 5;
        for(let i=0;i<spikeCount;i++){
          const spike = new THREE.Mesh(new THREE.ConeGeometry(0.08,0.32,4), new THREE.MeshBasicMaterial({color:0xffdca6, transparent:true, opacity:0.9}));
          const ang = (i/spikeCount)*Math.PI*2 + Math.random()*0.3;
          spike.position.set(Math.cos(ang)*0.32, 0, Math.sin(ang)*0.32);
          spike.rotation.z = Math.PI/2;
          spike.rotation.y = -ang;
          grp.add(spike);
        }
        grp.position.copy(toP);
        mesh = grp;
        life=0.22; kind='burst'; scaleFrom=0.35; scaleTo=1.3; baseOpacity=0.9;
        break;
      }

      case 'dark': {
        // Necromancer dark-magic hit — a swirling void orb with a thin
        // rotating wisp ring and a faint purple after-glow.
        const grp = new THREE.Group();
        const orb = new THREE.Mesh(new THREE.SphereGeometry(0.42,14,14), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.8}));
        grp.add(orb);
        const core = new THREE.Mesh(new THREE.SphereGeometry(0.18,10,10), new THREE.MeshBasicMaterial({color:0x1c0e30, transparent:true, opacity:0.9}));
        grp.add(core);
        const wisp = new THREE.Mesh(new THREE.TorusGeometry(0.38,0.035,6,18), new THREE.MeshBasicMaterial({color:0x3a1f5c, transparent:true, opacity:0.65}));
        wisp.rotation.x = Math.PI/2.2;
        grp.add(wisp);
        const glow = new THREE.PointLight(color, 0.9, 3.5);
        grp.add(glow);
        grp.position.copy(toP); grp.position.y = 1.0;
        mesh = grp;
        life=0.42; kind='burst'; scaleFrom=0.35; scaleTo=1.5; spin=true; baseOpacity=0.8;
        break;
      }
      case 'summon': {
        // Necromancer summoning circle — a glowing ground rune with orbiting
        // sparks and rising purple wisps, marking where a skeleton rose up.
        const grp = new THREE.Group();
        const ring = new THREE.Mesh(new THREE.RingGeometry(0.18,0.7,32), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.85, side:THREE.DoubleSide}));
        ring.rotation.x=-Math.PI/2;
        grp.add(ring);
        const ring2 = new THREE.Mesh(new THREE.RingGeometry(0.75,0.85,32), new THREE.MeshBasicMaterial({color:0x593b78, transparent:true, opacity:0.55, side:THREE.DoubleSide}));
        ring2.rotation.x=-Math.PI/2;
        grp.add(ring2);
        for(let i=0;i<6;i++){
          const spark = new THREE.Mesh(new THREE.SphereGeometry(0.045,6,6), new THREE.MeshBasicMaterial({color:0xb98aff, transparent:true, opacity:0.9}));
          const ang=(i/6)*Math.PI*2;
          spark.position.set(Math.cos(ang)*0.55,0.4,Math.sin(ang)*0.55);
          grp.add(spark);
        }
        const glow = new THREE.PointLight(color, 1.0, 4);
        glow.position.y=0.4;
        grp.add(glow);
        grp.position.copy(toP); grp.position.y=0.05;
        mesh = grp;
        life=0.75; kind='burst'; scaleFrom=0.25; scaleTo=1.7; spin=true; baseOpacity=0.85;
        break;
      }
      default: return;
    }
    this.scene.add(mesh);
    this.fxList.push({mesh, age:0, life, kind, from:fromP, to:toP, scaleFrom, scaleTo, spin, baseOpacity});
  }

  updateFX(dt){
    for(let i=this.fxList.length-1;i>=0;i--){
      const f = this.fxList[i];
      f.age += dt;
      const t = Math.min(1, f.age/f.life);
      if(f.kind==='travel'){
        f.mesh.position.lerpVectors(f.from, f.to, t);
      } else {
        const s = f.scaleFrom + (f.scaleTo-f.scaleFrom)*t;
        f.mesh.scale.setScalar(s);
        if(f.spin) f.mesh.rotation.y += dt*5;
      }
      const op = f.baseOpacity*(1-t);
      if(f.mesh.material) f.mesh.material.opacity = op;
      else if(f.mesh.children) f.mesh.children.forEach(c=>{ if(c.material) c.material.opacity=op; });

      if(f.age>=f.life){
        this.scene.remove(f.mesh);
        const disposeObj = (o)=>{ if(o.geometry) o.geometry.dispose(); if(o.material) o.material.dispose(); if(o.children) o.children.forEach(disposeObj); };
        disposeObj(f.mesh);
        this.fxList.splice(i,1);
      }
    }
  }

  // ---------------- COMBAT HELPERS ----------------
  spawnDamageNumber(worldPos, text, cls){
    const v = worldPos.clone().project(this.camera);
    let x = (v.x*0.5+0.5)*window.innerWidth;
    let y = (1-(v.y*0.5+0.5))*window.innerHeight;
    // clamp so numbers never end up hidden above the visible viewport
    // (e.g. under a mobile browser's address bar) or below the HUD
    x = Math.max(20, Math.min(window.innerWidth-20, x));
    y = Math.max(70, Math.min(window.innerHeight-120, y));
    const el = document.createElement('div');
    el.className = 'dmg-num'+(cls?(' '+cls):'');
    el.textContent = text;
    el.style.left = (x + (Math.random()*30-15))+'px';
    el.style.top = y+'px';
    document.getElementById('dmg-layer').appendChild(el);
    setTimeout(()=>el.remove(), 850);
  }

  toast(msg){
    const el = document.createElement('div');
    el.className='toast'; el.textContent=msg;
    this.toastWrap.appendChild(el);
    setTimeout(()=>el.remove(), 2200);
  }

  comboMultiplier(){
    const c = this.player.combo;
    if(c>=50) return 1.10;
    if(c>=25) return 1.05;
    if(c>=10) return 1.02;
    return 1.0;
  }

  healPlayer(amount, showFloat){
    const p = this.player;
    p.hp = Math.min(p.hpMax, p.hp + amount);
    if(showFloat) this.spawnDamageNumber(p.mesh.position.clone().setY(1.9), '+'+Math.round(amount), 'heal');
  }

  getNearestEnemy(maxDist){
    let best=null, bd=Infinity;
    for(const e of this.enemies){
      if(e.state==='dead') continue;
      const d = this.player.mesh.position.distanceTo(e.mesh.position);
      if(d<bd){ bd=d; best=e; }
    }
    if(best && (maxDist===undefined || bd<=maxDist)) return best;
    return null;
  }

  applyEnemyEffect(e, effect){
    if(!effect) return;
    if(effect.type==='stun'){ e.stunTimer = Math.max(e.stunTimer, effect.duration); }
    else if(effect.type==='slow'){ e.slowTimer = Math.max(e.slowTimer, effect.duration); e.slowValue = Math.min(0.7, effect.value); }
    else if(effect.type==='dot'){ e.dotTimer = Math.max(e.dotTimer, effect.duration); e.dotDps = effect.dps; e.dotIsMagic = !!effect.isMagic; }
    else if(effect.type==='burnStack'){ this.applyBurnStack(e, effect); }
    else if(effect.type==='defShred' || effect.type==='magicShred'){ e.defShredTimer = Math.max(e.defShredTimer, effect.duration); e.defShredValue = Math.max(e.defShredValue, effect.value); }
    else if(effect.type==='tacSuppress'){ e.slowTimer = Math.max(e.slowTimer, effect.duration); e.slowValue = Math.max(e.slowValue, effect.slow); e.tacHybridDefShredTimer = Math.max(e.tacHybridDefShredTimer||0, effect.duration); e.tacHybridDefShredValue = Math.max(e.tacHybridDefShredValue||0, effect.defShred); } }

  // Mage Fire Blast: each cast adds its own independently-timed burn stack
  // (up to maxStacks). Total burn DPS is the sum of all active stacks, so it
  // steps up per cast (60 -> 120 -> 180) and steps back down as each stack's
  // own 3s timer runs out, rather than one shared duration/DPS value.
  applyBurnStack(e, effect){
    if(!e.burnStacks) e.burnStacks = [];
    const max = effect.maxStacks || 3;
    if(e.burnStacks.length < max){
      e.burnStacks.push({dps:effect.dps, timeLeft:effect.duration});
    }
  }

  // Wrestler passive (Momentum): a Basic Attack that lands adds an Attack
  // Speed stack (up to 4, +5% each) and refreshes every stack's 4s timer —
  // so keeping the pressure on with basics is what sustains the buff.
  addMomentumStack(){
    const b = this.player.buffs;
    if(!b.momentumStacks) b.momentumStacks=[];
    if(b.momentumStacks.length<4) b.momentumStacks.push({timeLeft:4});
    b.momentumStacks.forEach(s=> s.timeLeft=4);
  }

  // Effective Attack Speed for the active character: base aspd plus Momentum
  // stacks (+5% each) plus any active rage-style buff's aspdPct (Adrenaline
  // Rush / Final Grapple). Used everywhere basic-attack timing matters so the
  // cooldown bar and the actual attack rate always agree.
  getEffAspd(){
    const p = this.player, b = p.buffs;
    let bonus = 0;
    if(b.momentumStacks) bonus += b.momentumStacks.length*0.05;
    if(b.rageTimer>0) bonus += b.rageAspdPct;
    return p.aspd*(1+bonus);
  }

  applySelfBuff(buff){
    this.applyBuffToChar(this.player, buff);
  }

  // Applies a buff to any character in the team — used both for self-buffs
  // (ch === this.player) and for support skills that target the *other*
  // character (ch === this.standby, see castAllyBuff below). Titan's bonus
  // HP is added/removed on whichever character actually holds the buff.
  applyBuffToChar(ch, buff){
    if(!buff) return;
    const b = ch.buffs;
    const who = ch===this.player ? '' : ` (${CharacterData[ch.classKey].key})`;
    if(buff.type==='shield'){ b.shield = ch.hpMax * buff.pct; this.toast('Shield aktif'+who+'!'); }
    else if(buff.type==='haste'){ b.hasteMult = buff.mult; b.hasteTimer = buff.duration; ch.iFrame = Math.max(ch.iFrame, buff.iframe||0); }
    else if(buff.type==='ironwill'){ b.defMult = buff.defMult; b.defTimer = buff.duration; b.lifestealPct = buff.lifesteal; b.lifestealTimer = buff.duration; }
    else if(buff.type==='titan'){
      const bonusHp = Math.round(ch.hpMax * buff.hpPct);
      ch.hpMax += bonusHp; ch.hp += bonusHp;
      b.titanBonusHp = bonusHp;
      b.titanTimer = buff.duration;
      b.titanAtkPct = buff.atkPct; b.titanHpPct = buff.hpPct; b.titanDefPct = buff.defPct; b.titanLifesteal = buff.lifesteal;
      this.toast('Titan Form aktif'+who+'!');
    }
    else if(buff.type==='archerBoost'){
      b.archerBoostTimer = buff.duration;
      b.archerBoostAtkPct = buff.atkPct; b.archerBoostCritRate = buff.critRatePct; b.archerBoostCritDmg = buff.critDmgPct;
      this.toast('Marksman Focus aktif'+who+'!');
    }
    else if(buff.type==='adrenaline' || buff.type==='wrestlerRage'){
      // Wrestler's Adrenaline Rush (skill3) and Final Grapple (ultimate) both
      // grant the same kind of self-buff: Attack, Attack Speed, and Lifesteal
      // all rolled together for the duration.
      b.rageTimer = buff.duration; b.rageAtkPct = buff.atkPct; b.rageAspdPct = buff.aspdPct; b.rageLifesteal = buff.lifesteal;
      this.toast((buff.type==='adrenaline' ? 'Adrenaline Rush' : 'Final Grapple Rage')+' aktif'+who+'!');
    }
    else if(buff.type==='physicalAttack'){
      b.supportTimer = buff.duration; b.supportAtkPct = buff.atkPct; b.supportMagicPct=0; b.supportCritRate=0; b.supportCritDmg=0; b.supportPenetration=0;
      this.toast('War Command aktif'+who+'!');
    }
    else if(buff.type==='physicalBoost'){
      b.supportTimer = buff.duration; b.supportAtkPct = buff.atkPct; b.supportCritRate = buff.critRatePct; b.supportCritDmg = buff.critDmgPct; b.supportMagicPct=0; b.supportPenetration=0;
      this.toast('Battle Focus aktif'+who+'!');
    }
    else if(buff.type==='commander'){
      b.supportTimer = buff.duration; b.supportAtkPct = buff.atkPct; b.supportCritRate = buff.critRatePct; b.supportPenetration = buff.penetrationPct; b.supportMagicPct=0; b.supportCritDmg=0;
      this.toast('Grand Strategy aktif'+who+'!');
    }
    else if(buff.type==='magicAttack'){
      b.supportTimer = buff.duration; b.supportMagicPct = buff.magicPct; b.supportAtkPct=0; b.supportCritRate=0; b.supportCritDmg=0; b.supportPenetration=0;
      this.toast('Arcane Blessing aktif'+who+'!');
    }
    else if(buff.type==='magicBoost'){
      b.supportTimer = buff.duration; b.supportMagicPct = buff.magicPct; b.supportCritRate = buff.critRatePct; b.supportCritDmg = buff.critDmgPct; b.supportAtkPct=0; b.supportPenetration=0;
      this.toast('Arcane Focus aktif'+who+'!');
    }
    else if(buff.type==='mystic'){
      b.supportTimer = buff.duration; b.supportMagicPct = buff.magicPct; b.supportCritRate = buff.critRatePct; b.supportPenetration = buff.penetrationPct; b.supportAtkPct=0; b.supportCritDmg=0;
      this.toast('Mystic Dominion aktif'+who+'!');
    }
    else if(buff.type==='hybridAtkShare'){
      const casterHybridAtk = this.player.patk + this.player.magic;
      b.hybridAtkFlat = Math.round(casterHybridAtk * buff.pct);
      b.hybridAtkTimer = buff.duration;
      this.toast('Hybrid Attack Share aktif'+who+'! (+'+b.hybridAtkFlat+')');
    }
    else if(buff.type==='hybridPenShare'){
      b.hybridPenFlat = buff.pct;
      b.hybridPenTimer = buff.duration;
      this.toast('Hybrid Penetration aktif'+who+'!');
    }
    else if(buff.type==='grandStrategyShare'){
      const casterHybridAtk = this.player.patk + this.player.magic;
      b.hybridAtkFlat = Math.round(casterHybridAtk * buff.atkSharePct);
      b.hybridAtkTimer = buff.duration;
      b.hybridCritRateFlat = this.player.critRate * buff.critRateSharePct;
      b.hybridCritRateTimer = buff.duration;
      b.hybridCritDmgFlat = this.player.critDmg * buff.critDmgSharePct;
      b.hybridCritDmgTimer = buff.duration;
      this.toast('Grand Strategy aktif'+who+'!');
    }
  }

  // War Command / Arcane Blessing (and their upgraded/ultimate versions) are
  // support skills that buff the OTHER team member, not the caster. Casting
  // one also triggers the caster's passive — Battle Formation / Arcane
  // Resonance — a small refreshable +5% bonus stacked on top for 5 seconds.
  castAllyBuff(buff){
    const target = this.standby;
    if(!target) return;
    this.applyBuffToChar(target, buff);
    if(this.classKey==='Tactician'){ target.buffs.formationTimer = 5; target.buffs.formationAtkPct = 0.05; }
    else if(this.classKey==='Arcanist'){ target.buffs.resonanceTimer = 5; target.buffs.resonanceMagicPct = 0.05; }
  }

  dealDamage(target, skillDef){
    if(skillDef.hybrid){
      this.dealSingleHit(target, Object.assign({}, skillDef, {isMagic:false}));
      if(target.state==='dead') return;
      this.dealSingleHit(target, Object.assign({}, skillDef, {isMagic:true}));
      return;
    }
    this.dealSingleHit(target, skillDef);
  }

  dealSingleHit(target, skillDef){
    const p = this.player, b = p.buffs;
    let atk = skillDef.isMagic ? p.magic : p.patk;
    let atkBonusPct = this.getSharedStat('atkPct');
    if(b.titanTimer>0) atkBonusPct += b.titanAtkPct;
    if(b.archerBoostTimer>0) atkBonusPct += b.archerBoostAtkPct;
    if(b.rageTimer>0) atkBonusPct += b.rageAtkPct;
    if(skillDef.isMagic){
      if(b.supportTimer>0) atkBonusPct += (b.supportMagicPct||0);
      if(b.resonanceTimer>0) atkBonusPct += (b.resonanceMagicPct||0);
      // Dark Pact: each of the Necromancer's own living skeletons adds +4%
      // Magic Damage (capped at 3 summons — matches maxActive).
      if(this.classKey==='Necromancer'){
        const aliveCount = Math.min(3, this.summons.filter(s=> s.ownerClassKey==='Necromancer').length);
        if(aliveCount>0) atkBonusPct += aliveCount*0.04;
      }
    } else {
      if(b.supportTimer>0) atkBonusPct += (b.supportAtkPct||0);
      if(b.formationTimer>0) atkBonusPct += (b.formationAtkPct||0);
    }
    atk *= (1+atkBonusPct);
    // Tactician's stat-share flat bonus — a fixed number added on top,
    // applying equally whether the holder's damage basis is patk or magic.
    if(b.hybridAtkTimer>0) atk += b.hybridAtkFlat;

    const effCrit = p.critRate + this.getSharedStat('critRate') + (b.archerBoostTimer>0 ? b.archerBoostCritRate : 0) + (b.supportTimer>0 ? (b.supportCritRate||0) : 0) + (b.hybridCritRateTimer>0 ? b.hybridCritRateFlat : 0);
    const isCrit = Math.random() < effCrit;
    const effCritDmg = p.critDmg + this.getSharedStat('critDmg') + (b.archerBoostTimer>0 ? b.archerBoostCritDmg : 0) + (b.supportTimer>0 ? (b.supportCritDmg||0) : 0) + (b.hybridCritDmgTimer>0 ? b.hybridCritDmgFlat : 0);
    let critMult = isCrit ? effCritDmg : 1;
    if(this.classKey==='Assassin' && target.hp/target.hpMax < 0.5) critMult += (isCrit?0.2:0);

    let dmg = atk * skillDef.mult * critMult * this.comboMultiplier();
    let effDef = target.pdef;
    if(skillDef.defShred) effDef *= (1-skillDef.defShred);
    if(target.defShredValue>0) effDef *= (1-target.defShredValue);
    if(target.tacHybridDefShredValue>0) effDef *= (1-target.tacHybridDefShredValue);
    let totalPen = this.getSharedStat('penetration');
    if(b.supportTimer>0 && b.supportPenetration) totalPen += b.supportPenetration;
    if(b.hybridPenTimer>0) totalPen += b.hybridPenFlat;
    if(totalPen>0) effDef *= (1-Math.min(0.9,totalPen));
    dmg *= (1 - defenseReduction(effDef));
    if(target.state==='break') dmg *= 1.25;
    if(skillDef.executeBonus && target.hp/target.hpMax < 0.3) dmg *= (1+skillDef.executeBonus);
    dmg = Math.max(1, Math.round(dmg));

    // Infinite damage-test dummy: never actually loses HP (and can't die) —
    // instead every hit is tallied so Total Damage / DPS can be measured.
    if(target.data.isInfinite){
      target.totalDamage = (target.totalDamage||0) + dmg;
    } else {
      target.hp = Math.max(0, target.hp - dmg);
    }
    if(target.state!=='break'){
      target.poise = Math.min(target.poiseMax, target.poise + 1);
      if(target.poise>=target.poiseMax && target.state!=='dead'){ this.triggerBreak(target); }
    }
    target.hitCooldown = 3;
    const above = target.mesh.position.clone(); above.y += 1.5*(target.data.scale||1);
    this.spawnDamageNumber(above, (isCrit? dmg+'!':dmg), isCrit?'crit':(skillDef.isMagic?'magic':''));

    this.applyEnemyEffect(target, skillDef.effect);
    let lifestealPct = this.getSharedStat('lifestealPct');
    if(p.buffs.lifestealTimer>0) lifestealPct += p.buffs.lifestealPct;
    if(p.buffs.titanTimer>0) lifestealPct += p.buffs.titanLifesteal;
    if(p.buffs.rageTimer>0) lifestealPct += p.buffs.rageLifesteal;
    if(skillDef.effect && skillDef.effect.type==='lifesteal') lifestealPct += skillDef.effect.value;
    if(lifestealPct>0){ this.healPlayer(dmg*lifestealPct, true); }

    if(!target.data.isInfinite && target.hp<=0 && target.state!=='dead'){ this.killEnemy(target); }
  }

  applySkillDamage(skillDef, isBasic, slotForLevel){
    const p = this.player;
    const lvl = slotForLevel ? p.skillLevels[slotForLevel] : 1;
    const effSkill = Object.assign({}, skillDef, { mult: skillDef.mult>0 ? skillDef.mult*(1+(lvl-1)*0.08) : skillDef.mult });

    if(effSkill.resetSkills){ effSkill.resetSkills.forEach(sk=> p.cooldowns[sk]=0); }

    if(effSkill.mult<=0){
      // Necromancer's Raise Skeleton (mult 0, no target/aoe) — summon and stop.
      if(effSkill.summon){
        this.castSummon(effSkill.summon);
        if(effSkill.fx) this.spawnFX(effSkill.fx, p.mesh.position.clone(), p.mesh.position.clone());
        return;
      }
      if(effSkill.targetAlly){
        this.castAllyBuff(effSkill.selfBuff);
        const allyPos = this.standby.mesh.position.clone();
        if(effSkill.fx) this.spawnFX(effSkill.fx, allyPos, allyPos);
      } else {
        this.applySelfBuff(effSkill.selfBuff);
        if(effSkill.fx) this.spawnFX(effSkill.fx, p.mesh.position.clone(), p.mesh.position.clone());
      }
      this.toast(`${effSkill.name}!`);
      return;
    }

    let targets = [];
    let aoeAnchorPos = null;
    if(effSkill.aoe){
      const radius = effSkill.aoeRadius || 4.2;
      if(effSkill.targetAoe){
        // Fighter-style AOE: find the nearest enemy first and anchor the
        // burst radius on THAT enemy, instead of on the caster's own body —
        // otherwise the hit visually lands on a target but only enemies
        // standing near the Fighter actually take damage.
        const searchRange = effSkill.range || radius;
        const anchor = this.getNearestEnemy(searchRange);
        if(anchor){
          aoeAnchorPos = anchor.mesh.position.clone();
          targets = this.enemies.filter(e=> e.state!=='dead' && aoeAnchorPos.distanceTo(e.mesh.position) <= radius);
        }
      } else {
        targets = this.enemies.filter(e=> e.state!=='dead' && p.mesh.position.distanceTo(e.mesh.position) <= radius);
      }
    } else if(effSkill.maxTargets){
      // Multi Shot: up to N *different* nearest enemies within range, one arrow (one hit) each —
      // not repeated hits on a single target.
      const range = effSkill.range || 7;
      targets = this.enemies
        .filter(e=> e.state!=='dead' && p.mesh.position.distanceTo(e.mesh.position) <= range)
        .sort((a,b)=> p.mesh.position.distanceTo(a.mesh.position) - p.mesh.position.distanceTo(b.mesh.position))
        .slice(0, effSkill.maxTargets);
    } else {
      const range = effSkill.range || (effSkill.dash ? 6.5 : 2.3);
      const t = this.getNearestEnemy(range);
      if(t){
        if(effSkill.dash){
          const dir = new THREE.Vector3().subVectors(t.mesh.position, p.mesh.position);
          const d = dir.length();
          if(d>0.1){ dir.normalize(); p.mesh.position.addScaledVector(dir, Math.max(0,d-1.4)); }
        }
        targets = [t];
      }
    }
    if(targets.length===0) return;

    // Hawk Eye passive: basic attack fires two real arrows while active — each
    // hits for half damage so the total stays the same as a normal single hit
    // (not a straight damage double), but it's a genuine dual hit, not just FX.
    // Gated on the transferable shared buff so it also works if this Archer
    // swapped away and back while the buff was still ticking.
    const archerDoubleShot = isBasic && this.classKey==='Archer' && this.hasSharedBuff('hawkEye') && !effSkill.aoe && !effSkill.maxTargets;
    if(archerDoubleShot && targets.length){
      const t = targets[0];
      const halfSkill = Object.assign({}, effSkill, { mult: effSkill.mult*0.5 });
      this.dealDamage(t, halfSkill);
      this.dealDamage(t, halfSkill);
    } else {
      targets.forEach(t=> this.dealDamage(t, effSkill));
    }

    if(effSkill.targetAlly){
      this.castAllyBuff(effSkill.selfBuff);
      const allyPos = this.standby.mesh.position.clone();
      this.spawnFX({type:'buff', color: effSkill.fx ? effSkill.fx.color : 0xffd76a}, allyPos, allyPos);
    } else {
      this.applySelfBuff(effSkill.selfBuff);
    }

    if(effSkill.casterFx){
      // Big ground-zone visual rooted at the caster's own feet, sized to the
      // real aoeRadius — makes it obvious the AOE is centered on the caster.
      this.spawnFX(effSkill.casterFx, p.mesh.position.clone(), p.mesh.position.clone());
    }
    if(effSkill.fx){
      if(effSkill.aoe){
        if(effSkill.casterFx){
          // Show every enemy actually burning, not just one at random.
          targets.forEach(t=> this.spawnFX(effSkill.fx, t.mesh.position.clone().setY(1.0), t.mesh.position.clone().setY(1.0)));
        } else if(effSkill.targetAoe && aoeAnchorPos){
          // Ring on the ground at the targeted enemy's position (shows the
          // real burst zone) + an impact effect on every enemy actually hit.
          this.spawnFX({type:'areaRing', color: effSkill.fx.color, radius: effSkill.aoeRadius||4}, aoeAnchorPos.clone(), aoeAnchorPos.clone());
          targets.forEach(t=> this.spawnFX(effSkill.fx, p.mesh.position.clone().setY(1.1), t.mesh.position.clone().setY(1.1)));
        } else {
          this.spawnFX(effSkill.fx, p.mesh.position.clone(), targets[0].mesh.position.clone());
          if(archerDoubleShot) this.spawnFX(effSkill.fx, p.mesh.position.clone().add(new THREE.Vector3(0.25,0,0)), targets[0].mesh.position.clone());
        }
      } else if(effSkill.maxTargets){
        targets.forEach(t=> this.spawnFX(effSkill.fx, p.mesh.position.clone().setY(1.1), t.mesh.position.clone().setY(1.1)));
      } else {
        this.spawnFX(effSkill.fx, p.mesh.position.clone().setY(1.1), targets[0].mesh.position.clone().setY(1.1));
        if(archerDoubleShot) this.spawnFX(effSkill.fx, p.mesh.position.clone().setY(1.35), targets[0].mesh.position.clone().setY(1.35));
      }
    }

    // Necromancer ultimate (Army of the Dead) combines AOE damage with a
    // summon wave — trigger the summon after the damage/FX above resolves.
    if(effSkill.summon){ this.castSummon(effSkill.summon); }

    p.combo++; p.comboTimer = 2.2;

    if(isBasic){
      this.basicHitCount++;
      if(this.classKey==='Mage' && this.basicHitCount%4===0){ p.mana = Math.min(p.manaMax, p.mana+8); this.toast('Mana Flow: +8 Mana'); }
      else if(this.classKey==='Wrestler'){ this.addMomentumStack(); }
    } else {
      // Hawk Eye: Archer's own skill-use grants a *transferable* crit rate buff.
      // It lives at team level (this.sharedBuffs), so it keeps ticking and can
      // be used by whichever character is active — including after a swap.
      if(this.classKey==='Archer'){ this.addSharedBuff('hawkEye', '🦅', {critRate:0.08}, 3); }
      this.toast(`${effSkill.name}!`);
    }
  }

  triggerBreak(target){
    target.state='break'; target.breakTimer = 5;
    const b = document.getElementById('break-banner');
    b.style.opacity='1';
    setTimeout(()=>{ if(target.state!=='dead') b.style.opacity='0'; }, 1400);
  }

  killEnemy(target){
    target.state='dead';
    target.mesh.visible = false;
    document.getElementById('break-banner').style.opacity='0';

    const domainKey = this.currentRun ? this.currentRun.dungeonKey : null;
    const kind = this.currentRun ? this.currentRun.kind : 'story';
    const tier = this.currentRun ? (this.currentRun.tier||1) : 1;
    const floor = this.currentRun ? (this.currentRun.floor||1) : 1;
    const isDummy = !!target.data.isDummy;

    if(!isDummy){
      this.gold += target.data.goldReward;
      this.gainExp(target.data.expReward);
    }
    let extraMsg = '';

    if(isDummy){
      // Training dummies give no rewards
    } else if(kind==='farm' && domainKey==='materialDomain'){
      const lootMult = DomainData.materialDomain.tiers.find(t=>t.level===tier).lootMult;
      const essence = CLASS_ESSENCE[this.classKey];
      this.materials['Skill Book'] = (this.materials['Skill Book']||0)+Math.max(1,Math.round(1*lootMult));
      if(Math.random()<0.6) this.materials[essence] = (this.materials[essence]||0)+Math.max(1,Math.round(2*lootMult));
      if(Math.random()<0.5) this.materials['Iron Ore'] = (this.materials['Iron Ore']||0)+Math.max(1,Math.round(3*lootMult));
      extraMsg = ' +Material';
    } else if(kind==='farm' && domainKey==='artifactDomain'){
      const chance = DomainData.artifactDomain.tiers.find(t=>t.level===tier).artifactChance;
      if(Math.random()<chance){
        const art = generateArtifact(tier);
        this.grantArtifact(art);
        this.questProgress('getArtifact',1);
      }
    } else if(kind==='farm' && domainKey==='rewardDomain'){
      const lootMult = DomainData.rewardDomain.tiers.find(t=>t.level===tier).lootMult;
      this.gold += Math.round(target.data.goldReward*0.5*lootMult);
      if(Math.random()<0.4){ this.gems += Math.max(1,Math.round(1*lootMult)); this.toast('+'+Math.max(1,Math.round(1*lootMult))+' Gems'); }
    } else if(kind==='tower'){
      // Infinite Tower: coins/EXP (already granted above) + upgrade material
      // + artifact dust, scaled by how deep the player has climbed. Gems
      // are NOT handed out per-kill here — they only come as a floor-clear
      // bonus on floors that are a multiple of 5 (see onTowerClear). No
      // artifact ever drops from this mode.
      const floorMult = 1 + (floor-1)*0.12;
      const bonusGold = Math.round(target.data.goldReward*0.4*floorMult);
      const bonusExp = Math.round(target.data.expReward*0.25*floorMult);
      this.gold += bonusGold;
      this.gainExp(bonusExp);
      this.materials['Skill Book'] = (this.materials['Skill Book']||0)+1;
      if(Math.random()<0.55){
        const essence = CLASS_ESSENCE[this.classKey];
        this.materials[essence] = (this.materials[essence]||0)+1;
      }
      if(Math.random()<0.55) this.materials['Iron Ore'] = (this.materials['Iron Ore']||0)+1;
      const dust = Math.max(1, Math.round(2*floorMult));
      this.materials['Magical Dust'] = (this.materials['Magical Dust']||0)+dust;
      extraMsg = ' +Material +Dust';    
    } else {
      if(!target.isBoss && Math.random()<0.4) this.materials['Goblin Tooth'] = (this.materials['Goblin Tooth']||0)+1;
    }

    if(isDummy){
      this.toast(`${target.data.name} hancur (latihan, tanpa reward)`);
    } else {
      this.toast(`${target.data.name} dikalahkan! +${target.data.goldReward} Gold, +${target.data.expReward} EXP${extraMsg}`);
      if(target.isBoss) this.toast('+1 Boss Soul');
    }
    if(target.typeKey==='Goblin') this.questProgress('killGoblin',1);

    if(!this.stageActive) return;
    const aliveLeft = this.enemies.filter(e=>e.state!=='dead').length;
    document.getElementById('stage-banner-sub').textContent = target.isBoss ? (isDummy?'Hancurkan Dummy Boss!':(kind==='tower'?'Kalahkan Boss Menara!':'Kalahkan Goblin King!')) : `Musuh tersisa: ${aliveLeft}`;

    if(aliveLeft===0){
      if(kind==='dummy'){
        if(this.currentRun.subtype!=='custom') this.onDummyClear();
        // custom mode: no auto-clear here — keep the run open so the player can keep spawning dummies
      } else if(kind==='tower'){
        this.onTowerClear();
      } else {
        const hadBoss = this.enemies.some(e=>e.isBoss);
        this.onStageClear(hadBoss);
      }
    }
  }

  onStageClear(wasBoss){
    this.stageActive = false;
    const timeTaken = this.clock.getElapsedTime() - this.stageStartTime;
    const dmgRatio = this.stageDamageTaken / this.player.hpMax;
    let rating='D';
    if(timeTaken<25 && dmgRatio<0.15) rating='S';
    else if(timeTaken<40 && dmgRatio<0.35) rating='A';
    else if(timeTaken<70 && dmgRatio<0.6) rating='B';
    else if(timeTaken<110) rating='C';

    const kind = this.currentRun.kind;
    let farmTitle='';
    if(kind==='story'){
      const prog = this.dungeonProgress[this.currentRun.dungeonKey];
      if(wasBoss){ prog.cleared = true; }
      else {
        prog.unlockedStage = Math.max(prog.unlockedStage, this.currentStageId+1);
        if(this.currentStageId===3) this.questProgress('clearStage3',1);
      }
    } else if(kind==='farm'){
      const prog = this.domainProgress[this.currentRun.dungeonKey];
      const maxTier = DomainData[this.currentRun.dungeonKey].tiers.length;
      prog.unlockedTier = Math.max(prog.unlockedTier, Math.min(maxTier, this.currentRun.tier+1));
      farmTitle = DomainData[this.currentRun.dungeonKey].name+' Lv.'+this.currentRun.tier+' Selesai!';
    }
    this.saveGame();

    const ov = document.getElementById('stage-overlay');
    ov.classList.remove('defeat');
    document.getElementById('ov-rating').textContent = rating;
    document.getElementById('ov-title').textContent = wasBoss ? 'Dungeon Selesai!' : (kind==='farm' ? farmTitle : 'Stage Selesai');
    document.getElementById('ov-sub').textContent = wasBoss
      ? 'Green Forest berhasil ditaklukkan. Region berikutnya menyusul di update selanjutnya.'
      : `Waktu: ${timeTaken.toFixed(1)}s`;

    const btns = document.getElementById('ov-buttons');
    btns.innerHTML='';
    if(kind==='story' && !wasBoss && this.currentStageId<5){
      const nextBtn = document.createElement('div');
      nextBtn.className='gold-btn'; nextBtn.textContent='Lanjut ke Stage Berikutnya';
      nextBtn.addEventListener('click', ()=>{ ov.style.display='none'; this.currentStageId++; this.loadStage(this.currentStageId); this.stageActive=true; });
      btns.appendChild(nextBtn);
    }
    if(kind==='farm'){
      const againBtn = document.createElement('div');
      againBtn.className='gold-btn'; againBtn.textContent='Ulangi Level '+this.currentRun.tier;
      againBtn.addEventListener('click', ()=>{ ov.style.display='none'; this.runFarmDomain(this.currentRun.dungeonKey, this.currentRun.tier); this.stageActive=true; });
      btns.appendChild(againBtn);
      const nextTierProg = this.domainProgress[this.currentRun.dungeonKey];
      const maxTier = DomainData[this.currentRun.dungeonKey].tiers.length;
      if(this.currentRun.tier<maxTier && nextTierProg.unlockedTier>this.currentRun.tier){
        const nextTierBtn = document.createElement('div');
        nextTierBtn.className='gold-btn'; nextTierBtn.textContent='Lanjut ke Level '+(this.currentRun.tier+1);
        nextTierBtn.addEventListener('click', ()=>{ ov.style.display='none'; this.runFarmDomain(this.currentRun.dungeonKey, this.currentRun.tier+1); this.stageActive=true; });
        btns.appendChild(nextTierBtn);
      }
    }
    const lobbyBtn = document.createElement('div');
    lobbyBtn.className='ghost-btn'; lobbyBtn.textContent='Kembali ke Lobby';
    lobbyBtn.addEventListener('click', ()=> this.enterLobby());
    btns.appendChild(lobbyBtn);

    ov.style.display='flex';
  }

  onDefeat(){
    this.stageActive = false;
    const ov = document.getElementById('stage-overlay');
    ov.classList.add('defeat');
    document.getElementById('ov-rating').textContent = '💀';
    document.getElementById('ov-title').textContent = 'Kamu Kalah';
    document.getElementById('ov-sub').textContent = 'Tidak ada item yang hilang — coba lagi dari checkpoint.';
    const btns = document.getElementById('ov-buttons');
    btns.innerHTML='';
    const retryBtn = document.createElement('div');
    retryBtn.className='gold-btn'; retryBtn.textContent = this.currentRun.kind==='story' ? 'Ulangi Stage' : 'Ulangi';
    retryBtn.addEventListener('click', ()=>{
      ov.style.display='none';
      if(this.currentRun.kind==='story') this.loadStage(this.currentStageId);
      else if(this.currentRun.kind==='dummy') this.enterDummyMode(this.currentRun.subtype);
      else if(this.currentRun.kind==='tower') this.enterTowerFloor(this.currentRun.floor);
      else this.runFarmDomain(this.currentRun.dungeonKey, this.currentRun.tier);
      this.stageActive=true;
    });
    btns.appendChild(retryBtn);
    const lobbyBtn = document.createElement('div');
    lobbyBtn.className='ghost-btn'; lobbyBtn.textContent='Kembali ke Lobby';
    lobbyBtn.addEventListener('click', ()=> this.enterLobby());
    btns.appendChild(lobbyBtn);
    ov.style.display='flex';
  }

  gainExpFor(ch, amount){
    ch.exp += amount;
    let req = requiredExp(ch.level);
    let leveled=false;
    const classData = CharacterData[ch.classKey];
    while(ch.exp >= req){
      ch.exp -= req; ch.level++; leveled=true;
      const g = classData.growth;
      ch.baseHpMax += g.hp; ch.baseManaMax += g.mana;
      ch.basePatk += (g.patk||0); ch.baseMagic += (g.magic||0);
      ch.basePdef += g.pdef; ch.baseMdef += g.mdef;
      this.recalcAllStats();
      ch.hp = ch.hpMax; ch.mana = ch.manaMax;
      if(ch===this.player) this.flashLevelUp();
      req = requiredExp(ch.level);
    }
    if(leveled) this.saveGame();
  }

  gainExp(amount){
    this.gainExpFor(this.player, amount);
  }

  flashLevelUp(){
    const el = document.getElementById('level-up-fx');
    el.style.animation='none'; void el.offsetWidth;
    el.style.animation='levelPop 1.6s ease forwards';
  }

  tryAttack(){
    const p = this.player;
    if(p.attackCd>0) return;
    p.attackCd = 1/this.getEffAspd();
    // Ranged classes plant their feet for a beat to fire — Archer's draw takes
    // longer than Mage's quick cast. Fighter also braces briefly after a swing.
    if(this.classKey==='Archer') p.attackLock = 0.35;
    else if(this.classKey==='Mage') p.attackLock = 0.2;
    else if(this.classKey==='Fighter') p.attackLock = 0.3;
    else if(this.classKey==='Tactician') p.attackLock = 0.25;
    else if(this.classKey==='Arcanist') p.attackLock = 0.25;
    else if(this.classKey==='Wrestler') p.attackLock = 0.18;
    else if(this.classKey==='Necromancer') p.attackLock = 0.25;
    if(this.classKey==='Mage'){ this.performArcaneBoltAttack(); }
    else if(this.classKey==='Tactician'){ this.performTacticianBombAttack(); }
    else{ this.applySkillDamage(this.cdata.basic, true, null); }
  }

  // Tactician basic attack: throws a bomb that travels to the nearest enemy
  // and only explodes — dealing hybrid Physical+Magical AOE damage — once it
  // actually lands there (same "impact point, not caster" pattern used for
  // Archer's Explosive Trap), instead of detonating around the Tactician.
  performTacticianBombAttack(){
    const p = this.player;
    const skillDef = this.cdata.basic;
    const range = skillDef.range || 9;
    const target = this.getNearestEnemy(range);
    if(!target) return;

    const fromPos = p.mesh.position.clone().setY(1.1);
    const toPos = target.mesh.position.clone().setY(1.0);
    const dist = fromPos.distanceTo(toPos);
    const travelSpeed = skillDef.projectileSpeed || 12;
    const travelTime = Math.max(0.15, Math.min(0.6, dist/travelSpeed));

    this.spawnFX(skillDef.fx, fromPos, toPos, travelTime);

    setTimeout(()=>{
      if(!this.stageActive) return;
      this.spawnFX({type:'shockwave', color:0xffcf6a}, toPos.clone(), toPos.clone());
      const radius = skillDef.aoeRadius || 2.4;
      const hitTargets = this.enemies.filter(e=> e.state!=='dead' && toPos.distanceTo(e.mesh.position.clone().setY(1.0)) <= radius);
      hitTargets.forEach(t=> this.dealDamage(t, skillDef));
      if(hitTargets.length){
        p.combo++; p.comboTimer = 2.2;
        this.basicHitCount++;
      }
    }, travelTime*1000);
  }

  // Mage basic attack: throws a real traveling magic ball at the nearest enemy —
  // the AOE explosion only triggers where the ball actually lands, not centered
  // instantly on the player (which is what made the old version feel like it hit
  // everything on screen for free).
  performArcaneBoltAttack(){
    const p = this.player;
    const skillDef = this.cdata.basic;
    const range = skillDef.range || 9;
    const target = this.getNearestEnemy(range);
    if(!target) return;

    const fromPos = p.mesh.position.clone().setY(1.1);
    const toPos = target.mesh.position.clone().setY(1.0);
    const dist = fromPos.distanceTo(toPos);
    const travelSpeed = 14;
    const travelTime = Math.max(0.12, Math.min(0.6, dist/travelSpeed));

    this.spawnFX(skillDef.fx, fromPos, toPos, travelTime);

    setTimeout(()=>{
      // explosion at the impact point — not wherever the player is standing by then
      this.spawnFX({type:'shockwave', color:0xffb26b}, toPos.clone(), toPos.clone());
      this.spawnFX({type:'fire', color:0xff9a4f}, toPos.clone(), toPos.clone());
      const radius = skillDef.aoeRadius || 2.6;
      const hitTargets = this.enemies.filter(e=> e.state!=='dead' && toPos.distanceTo(e.mesh.position.clone().setY(1.0)) <= radius);
      hitTargets.forEach(t=> this.dealDamage(t, skillDef));
      if(hitTargets.length){
        p.combo++; p.comboTimer = 2.2;
        this.basicHitCount++;
        if(this.basicHitCount%4===0){ p.mana = Math.min(p.manaMax, p.mana+8); this.toast('Mana Flow: +8 Mana'); }
      }
    }, travelTime*1000);
  }

  getEffCooldown(baseCooldown){
    return baseCooldown * (1 - this.player.cdr);
  }

  trySkill(slot){
    const p = this.player, s = this.cdata[slot];
    if(p.level < UNLOCK_LEVEL[slot]){ this.toast(`${s.name} terkunci — perlu Level ${UNLOCK_LEVEL[slot]}`); return; }
    if(p.cooldowns[slot]>0 || p.mana < s.manaCost) return;
    p.mana -= s.manaCost; p.cooldowns[slot] = this.getEffCooldown(s.cooldown);
    if(s.blinkStrike){ this.performBlinkStrike(s); }
    else if(s.dashAttack){ this.performDashAttack(s); }
    else if(s.groundTargetAoe){ this.performGroundTargetAoe(s, slot); }
    else if(s.thrownBomb){ this.performThrownBomb(s, slot); }
    else if(s.rainDrop){ this.performRainOfArrows(s, slot); }
    else if(s.hits){ this.performRapidCombo(s, slot); }
    else{ this.applySkillDamage(s, false, slot); }
    if(this.classKey==='Tactician' && slot==='skill2'){
      this.enemies.forEach(e=>{ if(e.tacHybridDefShredTimer>0) e.tacHybridDefShredValue = 0.30; });
    }}
  // Wrestler Rapid Combo: a burst of `hits` quick punches landing on every
  // enemy caught in the AOE radius around the caster, each hit spaced a
  // beat apart so it visually reads as a flurry rather than one lump sum.
  performRapidCombo(skillDef, slot){
    const p = this.player;
    const lvl = p.skillLevels[slot];
    const effSkill = Object.assign({}, skillDef, { mult: skillDef.mult*(1+(lvl-1)*0.08) });
    if(effSkill.resetSkills){ effSkill.resetSkills.forEach(sk=> p.cooldowns[sk]=0); }
    const radius = effSkill.aoeRadius || 2.5;
    const targets = this.enemies.filter(e=> e.state!=='dead' && p.mesh.position.distanceTo(e.mesh.position) <= radius);
    if(targets.length===0) return;
    this.toast(`${effSkill.name}!`);
    p.combo++; p.comboTimer = 2.2;
    const hits = effSkill.hits || 3;
    const gap = 130;
    for(let i=0;i<hits;i++){
      setTimeout(()=>{
        if(!this.stageActive) return;
        const aliveTargets = targets.filter(t=> t.state!=='dead');
        aliveTargets.forEach(t=>{
          this.dealDamage(t, effSkill);
          if(effSkill.fx) this.spawnFX(effSkill.fx, p.mesh.position.clone().setY(1.1), t.mesh.position.clone().setY(1.1));
        });
      }, i*gap);
    }
  }

  // Assassin Shadow Dash: dash in the current movement-input direction
  // (falls back to facing direction if standing still), hitting anything
  // it lands near, with a brief I-Frame like the old Smoke Bomb had.
  performDashAttack(skillDef){
    const p = this.player;
    let inputForward=0, inputRight=0;
    if(this.keys['KeyW']) inputForward += 1;
    if(this.keys['KeyS']) inputForward -= 1;
    if(this.keys['KeyA']) inputRight -= 1;
    if(this.keys['KeyD']) inputRight += 1;
    if(this.joystickVec.x || this.joystickVec.y){ inputRight += this.joystickVec.x; inputForward -= this.joystickVec.y; }
    let dir;
    const len = Math.hypot(inputForward, inputRight);
    if(len>0.001){
      inputForward/=len; inputRight/=len;
      const yaw=this.camYaw;
      const worldX = -inputRight*Math.cos(yaw) + inputForward*Math.sin(yaw);
      const worldZ = inputRight*Math.sin(yaw) + inputForward*Math.cos(yaw);
      dir = new THREE.Vector3(worldX,0,worldZ).normalize();
    } else {
      dir = new THREE.Vector3(Math.sin(p.facing),0,Math.cos(p.facing));
    }
    p.iFrame = Math.max(p.iFrame, 0.35);
    this.spawnFX({type:'smoke', color:0xaaaaaa}, p.mesh.position.clone(), p.mesh.position.clone());
    const dashDist = skillDef.dashDistance||3.5;
    const bound = this.inLobby ? 40 : 28;
    p.mesh.position.addScaledVector(dir, dashDist);
    p.mesh.position.x = Math.max(-bound, Math.min(bound, p.mesh.position.x));
    p.mesh.position.z = Math.max(-bound, Math.min(bound, p.mesh.position.z));
    p.facing = Math.atan2(dir.x, dir.z);
    p.mesh.rotation.y = p.facing;
    const radius = skillDef.dashRadius||2.2;
    const hitTargets = this.enemies.filter(e=> e.state!=='dead' && p.mesh.position.distanceTo(e.mesh.position)<=radius);
    hitTargets.forEach(t=> this.dealDamage(t, skillDef));
    if(hitTargets.length){
      this.spawnFX(skillDef.fx, p.mesh.position.clone().setY(1.1), hitTargets[0].mesh.position.clone().setY(1.1));
      p.combo++; p.comboTimer=2.2;
    }
    this.toast(`${skillDef.name}!`);
  }

  // Ground-targeted AOE (Mage's Frozen Spike): picks the nearest enemy as the
  // impact point and rings/damages everyone around THAT point, instead of
  // blasting whatever happens to be near the caster.
  performGroundTargetAoe(skillDef, slot){
    const p = this.player;
    const lvl = p.skillLevels[slot];
    const effSkill = Object.assign({}, skillDef, { mult: skillDef.mult*(1+(lvl-1)*0.08) });
    if(effSkill.resetSkills){ effSkill.resetSkills.forEach(sk=> p.cooldowns[sk]=0); }
    const range = effSkill.range || 8;
    const anchor = this.getNearestEnemy(range);
    if(!anchor) return;
    const anchorPos = anchor.mesh.position.clone();
    const radius = effSkill.aoeRadius || 4;
    const targets = this.enemies.filter(e=> e.state!=='dead' && anchorPos.distanceTo(e.mesh.position) <= radius);
    if(targets.length===0) return;
    targets.forEach(t=> this.dealDamage(t, effSkill));
    this.applySelfBuff(effSkill.selfBuff);
    this.spawnFX({type:'areaRing', color: effSkill.fx ? effSkill.fx.color : 0xffffff, radius}, anchorPos.clone(), anchorPos.clone());
    if(effSkill.fx) targets.forEach(t=> this.spawnFX(effSkill.fx, t.mesh.position.clone().setY(1.0), t.mesh.position.clone().setY(1.0)));
    p.combo++; p.comboTimer = 2.2;
    this.toast(`${effSkill.name}!`);
  }

  // Thrown bomb (Archer's Explosive Trap): the bomb travels to the nearest
  // enemy and only explodes — dealing AOE damage and applying its effect —
  // once it actually lands there, instead of detonating around the archer.
  performThrownBomb(skillDef, slot){
    const p = this.player;
    const lvl = p.skillLevels[slot];
    const effSkill = Object.assign({}, skillDef, { mult: skillDef.mult*(1+(lvl-1)*0.08) });
    if(effSkill.resetSkills){ effSkill.resetSkills.forEach(sk=> p.cooldowns[sk]=0); }
    const range = effSkill.range || 9;
    const target = this.getNearestEnemy(range);
    if(!target) return;
    const fromPos = p.mesh.position.clone().setY(1.1);
    const toPos = target.mesh.position.clone().setY(1.0);
    const dist = fromPos.distanceTo(toPos);
    const travelSpeed = effSkill.projectileSpeed || 11;
    const travelTime = Math.max(0.15, Math.min(0.65, dist/travelSpeed));
    this.spawnFX(effSkill.fx, fromPos, toPos, travelTime);
    setTimeout(()=>{
      if(!this.stageActive) return;
      if(effSkill.impactFx) this.spawnFX(effSkill.impactFx, toPos.clone(), toPos.clone());
      if(effSkill.impactFx2) this.spawnFX(effSkill.impactFx2, toPos.clone(), toPos.clone());
      const radius = effSkill.aoeRadius || 4;
      const hitTargets = this.enemies.filter(e=> e.state!=='dead' && toPos.distanceTo(e.mesh.position.clone().setY(1.0)) <= radius);
      hitTargets.forEach(t=> this.dealDamage(t, effSkill));
      if(hitTargets.length){
        p.combo++; p.comboTimer = 2.2;
        if(this.classKey==='Archer'){ p.buffs.critBonus=0.08; p.buffs.critBonusTimer=3; }
      }
    }, travelTime*1000);
    this.toast(`${effSkill.name}!`);
  }

  // Rain of Arrows (Archer ultimate): one arrow falls from the sky per enemy
  // currently in range, each landing with its own small explosion — instead
  // of a single shockwave appearing at one random target's feet.
  performRainOfArrows(skillDef, slot){
    const p = this.player;
    const lvl = p.skillLevels[slot];
    const effSkill = Object.assign({}, skillDef, { mult: skillDef.mult*(1+(lvl-1)*0.08) });
    if(effSkill.resetSkills){ effSkill.resetSkills.forEach(sk=> p.cooldowns[sk]=0); }
    const radius = effSkill.aoeRadius || 5.8;
    const targets = this.enemies.filter(e=> e.state!=='dead' && p.mesh.position.distanceTo(e.mesh.position) <= radius);
    this.applySelfBuff(effSkill.selfBuff);
    this.toast(`${effSkill.name}!`);
    if(targets.length===0) return;
    p.combo++; p.comboTimer = 2.2;
    if(this.classKey==='Archer'){ p.buffs.critBonus=0.08; p.buffs.critBonusTimer=3; }
    const fallTime = 0.3;
    const shockwaveColor = effSkill.fx ? effSkill.fx.color : 0x4fd68c;
    targets.forEach((t,i)=>{
      setTimeout(()=>{
        if(!this.stageActive) return;
        const groundPos = t.mesh.position.clone().setY(0.05);
        const skyPos = groundPos.clone().setY(6.5);
        this.spawnFX({type:'arrowDrop', color:0xffe9a8}, skyPos, groundPos, fallTime);
        setTimeout(()=>{
          if(!this.stageActive) return;
          this.spawnFX({type:'shockwave', color:shockwaveColor}, groundPos.clone(), groundPos.clone());
          if(t.state!=='dead') this.dealDamage(t, effSkill);
        }, fallTime*1000);
      }, i*90);
    });
  }

  // Assassin ultimate: blink to the nearest enemy several times in a row,
  // dealing a big hit each time, fully invulnerable for the whole sequence.
  performBlinkStrike(skillDef){
    const p = this.player;
    const hits = skillDef.blinkHits || 4;
    const gap = 140;
    p.iFrame = Math.max(p.iFrame, hits*(gap/1000) + 0.3);
    this.toast(`${skillDef.name}!`);
    p.combo++; p.comboTimer = 2.2;
    for(let i=0;i<hits;i++){
      setTimeout(()=>{
        if(!this.stageActive) return;
        const target = this.getNearestEnemy(9);
        if(!target) return;
        const dir = new THREE.Vector3().subVectors(target.mesh.position, p.mesh.position);
        const d = dir.length();
        if(d>0.1){ dir.normalize(); p.mesh.position.addScaledVector(dir, Math.max(0, d-1.2)); }
        this.spawnFX(skillDef.fx, p.mesh.position.clone().setY(1.1), target.mesh.position.clone().setY(1.1));
        this.dealDamage(target, skillDef);
      }, i*gap);
    }
  }

  tryDodge(){
    const p = this.player;
    if(p.dodgeCd>0 || (p.dodgeAnim && p.dodgeAnim.active)) return;
    p.dodgeCd = 2.5; p.iFrame = 0.35;
    this.spawnFX({type:'smoke', color:0xcccccc}, p.mesh.position.clone(), p.mesh.position.clone());
    const dir = new THREE.Vector3(Math.sin(this.player.facing),0,Math.cos(this.player.facing));
    const from = p.mesh.position.clone();
    const to = from.clone().addScaledVector(dir, 2.4);
    const bound = this.inLobby ? 40 : 28;
    to.x = Math.max(-bound, Math.min(bound, to.x));
    to.z = Math.max(-bound, Math.min(bound, to.z));
    // jump-dash: arcs up and back down like a lowercase "n" while dashing, instead
    // of an instant teleport — this is what movement is locked to for its duration
    p.dodgeAnim = { active:true, t:0, duration:0.35, from, to };
  }

  updateDodgeAnim(dt){
    const p = this.player;
    const d = p.dodgeAnim;
    if(!d || !d.active) return;
    d.t += dt;
    const frac = Math.min(1, d.t/d.duration);
    p.mesh.position.x = d.from.x + (d.to.x-d.from.x)*frac;
    p.mesh.position.z = d.from.z + (d.to.z-d.from.z)*frac;
    p.mesh.position.y = Math.sin(Math.PI*frac) * 0.9;
    if(frac>=1){ d.active=false; p.mesh.position.y=0; }
  }

  // ---------------- ENEMY AI (GDD 9.5 state machine) ----------------
  updateEnemyAI(dt, e){
    const p = this.player;
    if(e.hitCooldown>0) e.hitCooldown -= dt;
    if(e.state==='dead') return;

    if(e.dotTimer>0){
      e.dotTimer -= dt; e.dotTick -= dt;
      if(e.dotTick<=0){
        e.dotTick = 0.5;
        const tickDmg = Math.round(e.dotDps*0.5);
        e.hp = Math.max(0, e.hp - tickDmg);
        this.spawnDamageNumber(e.mesh.position.clone().setY(1.3), tickDmg, e.dotIsMagic?'magic':'');
        if(e.hp<=0 && e.state!=='dead'){ this.killEnemy(e); return; }
      }
    }
    if(e.burnStacks && e.burnStacks.length){
      e.burnStacks.forEach(s=> s.timeLeft -= dt);
      e.burnStacks = e.burnStacks.filter(s=> s.timeLeft>0);
      e.burnTick -= dt;
      if(e.burnTick<=0){
        e.burnTick = 0.5;
        const totalDps = e.burnStacks.reduce((a,s)=>a+s.dps,0);
        if(totalDps>0){
          const tickDmg = Math.round(totalDps*0.5);
          e.hp = Math.max(0, e.hp - tickDmg);
          this.spawnDamageNumber(e.mesh.position.clone().setY(1.3), tickDmg, 'magic');
          if(e.hp<=0 && e.state!=='dead'){ this.killEnemy(e); return; }
        }
      }
    }
    if(e.slowTimer>0) e.slowTimer -= dt; else e.slowValue=0;
    if(e.defShredTimer>0){ e.defShredTimer -= dt; if(e.defShredTimer<=0) e.defShredValue=0; }
    if(e.tacHybridDefShredTimer>0){ e.tacHybridDefShredTimer -= dt; if(e.tacHybridDefShredTimer<=0) e.tacHybridDefShredValue=0; }

    if(e.state==='break'){
      e.breakTimer -= dt;
      if(e.breakTimer<=0){
        // Dummies (detectionRadius 0) must go back to idle, never chase —
        // otherwise a dummy that gets Broken (poise filled, e.g. by an AOE
        // skill like Tactician's Armor Break hitting it repeatedly) would
        // unconditionally flip to 'chase' here and start attacking the
        // player once the break timer runs out, even though it's supposed
        // to never engage.
        e.state = e.data.isDummy ? 'idle' : 'chase';
        e.poise=0;
        document.getElementById('break-banner').style.opacity='0';
      }
      return;
    }
    if(e.stunTimer>0){ e.stunTimer -= dt; return; }

    if(e.isBoss && e.phase===1 && e.hp/e.hpMax<=0.5){
      e.phase=2; e.patk = Math.round(e.patk*1.2); e.moveSpeed *= 1.1;
      this.toast('⚠️ Goblin King mengamuk!');
    }

    const dist = e.mesh.position.distanceTo(p.mesh.position);
    const moveSpeed = e.moveSpeed * (1-e.slowValue);
    if(e.state==='idle'){
      if(dist < e.data.detectionRadius) e.state='chase';
    } else if(e.state==='chase'){
      if(dist <= e.data.attackRange){ e.state='attack'; e.attackTimer=0.1; }
      else{
        const dir = new THREE.Vector3().subVectors(p.mesh.position, e.mesh.position).normalize();
        e.mesh.position.addScaledVector(dir, moveSpeed*dt);
        e.mesh.lookAt(p.mesh.position.x, e.mesh.position.y, p.mesh.position.z);
      }
    } else if(e.state==='attack'){
      e.mesh.lookAt(p.mesh.position.x, e.mesh.position.y, p.mesh.position.z);
      e.attackTimer -= dt;
      if(e.attackTimer<=0){
        if(dist <= e.data.attackRange+0.3){ this.enemyHitPlayer(e); }
        const baseInterval = e.isBoss ? 1.1 : 1.4;
        e.attackTimer = baseInterval / (1 + (e.statMult-1)*0.4);
        if(dist > e.data.attackRange+0.3) e.state='chase';
      }
    }
  }

  enemyHitPlayer(e){
    const p = this.player;
    if(p.iFrame>0) { this.spawnDamageNumber(p.mesh.position.clone().setY(1.9), 'DODGE', 'enemy'); return; }
    let defBonusPct = this.getSharedStat('defPct');
    if(p.buffs.defTimer>0) defBonusPct += (p.buffs.defMult-1);
    if(p.buffs.titanTimer>0) defBonusPct += p.buffs.titanDefPct;
    const effPdef = p.pdef * (1+defBonusPct);
    let dmg = e.patk * (1 - defenseReduction(effPdef));
    dmg = Math.max(1, Math.round(dmg));

    if(p.buffs.shield>0){
      const absorbed = Math.min(p.buffs.shield, dmg);
      p.buffs.shield -= absorbed; dmg -= absorbed;
    }
    p.hp = Math.max(0, p.hp - dmg);
    p.combo = 0;
    if(this.stageActive) this.stageDamageTaken += dmg;
    if(dmg>0) this.spawnDamageNumber(p.mesh.position.clone().setY(1.9), dmg, 'enemy');
    else this.spawnDamageNumber(p.mesh.position.clone().setY(1.9), 'BLOCK', 'enemy');

    if(this.classKey==='Fighter' && p.hp/p.hpMax < 0.3 && p.bulwarkCd<=0){
      p.buffs.shield = Math.max(p.buffs.shield, p.hpMax*0.15);
      p.bulwarkCd = 30;
      this.toast('Bulwark aktif! Shield 15% Max HP');
    }
    if(p.hp<=0 && this.stageActive){ this.onDefeat(); }
  }

  // ---------------- UPDATE LOOP ----------------
  updateHUDStatic(){
    const c = this.cdata;
    document.getElementById('player-portrait').style.background = '#'+c.color.toString(16).padStart(6,'0');
    document.getElementById('player-portrait').style.color = '#'+c.color.toString(16).padStart(6,'0');
    document.getElementById('player-portrait').textContent = c.icon;
    document.getElementById('player-name').textContent = c.key;

    document.querySelector('#slot-skill1 .icon').textContent = c.skill1.icon;
    document.querySelector('#slot-skill2 .icon').textContent = c.skill2.icon;
    document.querySelector('#slot-skill3 .icon').textContent = c.skill3.icon;
    document.querySelector('#slot-ultimate .icon').textContent = c.ultimate.icon;
    document.querySelector('#slot-attack .icon').textContent = c.basic.icon;
    document.querySelector('#slot-skill1 .cost').textContent = c.skill1.manaCost;
    document.querySelector('#slot-skill2 .cost').textContent = c.skill2.manaCost;
    document.querySelector('#slot-skill3 .cost').textContent = c.skill3.manaCost;
    document.querySelector('#slot-ultimate .cost').textContent = c.ultimate.manaCost;
  }

  updatePlayerMovement(dt){
    const p = this.player;
    let inputForward=0, inputRight=0;
    if(this.keys['KeyW']) inputForward += 1;
    if(this.keys['KeyS']) inputForward -= 1;
    if(this.keys['KeyA']) inputRight -= 1;
    if(this.keys['KeyD']) inputRight += 1;
    if(this.joystickVec.x || this.joystickVec.y){ inputRight += this.joystickVec.x; inputForward -= this.joystickVec.y; }

    const len = Math.hypot(inputForward, inputRight);
    const speed = p.moveSpeed * (p.buffs.hasteTimer>0 ? p.buffs.hasteMult : 1);
    if(len>0.001){
      inputForward/=len; inputRight/=len;
      const yaw = this.camYaw;
      const worldX = -inputRight*Math.cos(yaw) + inputForward*Math.sin(yaw);
      const worldZ = inputRight*Math.sin(yaw) + inputForward*Math.cos(yaw);
      p.mesh.position.x += worldX * speed * dt;
      p.mesh.position.z += worldZ * speed * dt;
      const targetFacing = Math.atan2(worldX, worldZ);
      p.facing = targetFacing;
      p.mesh.rotation.y = targetFacing;
    }
    const bound = this.inLobby ? 40 : 28;
    p.mesh.position.x = Math.max(-bound, Math.min(bound, p.mesh.position.x));
    p.mesh.position.z = Math.max(-bound, Math.min(bound, p.mesh.position.z));
  }

  updateCamera(){
    const p = this.player.mesh.position;
    const offX = Math.sin(this.camYaw) * Math.cos(this.camPitch) * this.camDist;
    const offZ = Math.cos(this.camYaw) * Math.cos(this.camPitch) * this.camDist;
    const offY = Math.sin(this.camPitch) * this.camDist + 1.3;
    this.camera.position.set(p.x - offX, p.y + offY, p.z - offZ);
    this.camera.lookAt(p.x, p.y+1.3, p.z);
  }

  updateCooldownVisual(id, remaining, total){
    const el = document.getElementById(id);
    const overlay = el.querySelector('.cd-overlay');
    const text = el.querySelector('.cd-text');
    if(remaining>0){
      overlay.style.height = Math.min(100, (remaining/total)*100)+'%';
      text.textContent = remaining>1 ? Math.ceil(remaining) : '';
    } else { overlay.style.height='0%'; text.textContent=''; }
  }

  updateBuffRow(){
    const p = this.player;
    const icons = [];
    if(p.buffs.shield>0) icons.push('🔷');
    if(p.buffs.hasteTimer>0) icons.push('💨');
    if(p.buffs.defTimer>0) icons.push('🛡️');
    if(p.buffs.critBonusTimer>0) icons.push('🎯');
    if(p.buffs.titanTimer>0) icons.push('🗿');
    if(p.buffs.archerBoostTimer>0) icons.push('🏹');
    if(p.buffs.supportTimer>0) icons.push(p.buffs.supportMagicPct>0 ? '🔮' : '🎖️');
    if(p.buffs.formationTimer>0) icons.push('📯');
    if(p.buffs.resonanceTimer>0) icons.push('✨');
    if(p.buffs.hybridAtkTimer>0) icons.push('💪');
    if(p.buffs.hybridPenTimer>0) icons.push('🔓');
    if(p.buffs.hybridCritRateTimer>0) icons.push('🍀');
    if(p.buffs.hybridCritDmgTimer>0) icons.push('☄️');
    if(p.buffs.momentumStacks && p.buffs.momentumStacks.length>0) icons.push('🔥');
    if(p.buffs.rageTimer>0) icons.push('💪');
    // Shared/transferable buffs — shown regardless of who cast them, since
    // they belong to the team, not the character.
    this.sharedBuffs.forEach(b=> icons.push(b.icon));
    // Necromancer summon count — a quick glance at how many skeletons are
    // currently fighting alongside the team.
    if(this.classKey==='Necromancer'){
      const cnt = this.summons.filter(s=>s.ownerClassKey==='Necromancer').length;
      if(cnt>0) icons.push('💀×'+cnt);
    }
    document.getElementById('buff-row').innerHTML = icons.map(i=>`<div class="buff-icon">${i}</div>`).join('');
  }

  updateEnemyStatusRow(e){
    const chips = [];
    if(e.stunTimer>0) chips.push(`<div class="status-chip stun">STUN</div>`);
    if(e.slowTimer>0) chips.push(`<div class="status-chip slow">SLOW</div>`);
    if(e.dotTimer>0) chips.push(`<div class="status-chip dot">DOT</div>`);
    if(e.burnStacks && e.burnStacks.length) chips.push(`<div class="status-chip dot">BURN x${e.burnStacks.length}</div>`);
    if(e.defShredTimer>0 || e.tacHybridDefShredTimer>0) chips.push(`<div class="status-chip shred">DEF-</div>`);
    if(e.defShredTimer>0) chips.push(`<div class="status-chip shred">DEF-</div>`);
    document.getElementById('enemy-status-row').innerHTML = chips.join('');
  }

  updateHUD(){
    const p = this.player;
    document.getElementById('hp-fill').style.width = (p.hp/p.hpMax*100)+'%';
    document.getElementById('shield-fill').style.width = (Math.min(p.buffs.shield,p.hpMax)/p.hpMax*100)+'%';
    document.getElementById('mana-fill').style.width = (p.mana/p.manaMax*100)+'%';
    document.getElementById('hp-label').textContent = Math.round(p.hp)+' / '+p.hpMax;
    document.getElementById('mana-label').textContent = Math.round(p.mana)+' / '+p.manaMax;
    document.getElementById('player-level').textContent = 'Lv. '+p.level+'  ('+this.cdata.role+')';
    document.getElementById('exp-fill').style.width = (p.exp/requiredExp(p.level)*100)+'%';
    document.getElementById('gold-amt').textContent = this.gold;
    document.getElementById('gems-amt').textContent = this.gems;
    this.updateBuffRow();
    this.updatePlayerSkillRow();
    this.updateSwapRow();

    const ef = document.getElementById('enemy-frame');
    const target = this.getNearestEnemy(18);
    if(!target){ ef.style.display='none'; }
    else{
      ef.style.display='block';
      const nameEl = document.getElementById('enemy-name');
      nameEl.textContent = target.data.name;
      nameEl.className = target.isBoss ? 'boss' : (target.isElite ? 'elite' : '');
      document.getElementById('enemy-hp-fill').style.width = (target.hp/target.hpMax*100)+'%';
      document.getElementById('enemy-poise-fill').style.width = (target.poise/target.poiseMax*100)+'%';
      this.updateEnemyStatusRow(target);
    }

    if(p.combo>0){
      document.getElementById('combo-counter').style.opacity='1';
      document.getElementById('combo-n').textContent = p.combo;
    } else {
      document.getElementById('combo-counter').style.opacity='0';
    }

    this.updateCooldownVisual('slot-attack', p.attackCd, 1/this.getEffAspd());
    ['skill1','skill2','skill3','ultimate'].forEach(slot=>{
      const elId = 'slot-'+slot;
      if(p.level < UNLOCK_LEVEL[slot]){
        const el = document.getElementById(elId);
        el.querySelector('.cd-overlay').style.height='100%';
        el.querySelector('.cd-text').textContent = 'Lv.'+UNLOCK_LEVEL[slot];
      } else {
        this.updateCooldownVisual(elId, p.cooldowns[slot], this.getEffCooldown(this.cdata[slot].cooldown));
      }
    });
    this.updateCooldownVisual('slot-dodge', p.dodgeCd, 2.5);
    this.updateMobileSkillButtons();

    // Live Total Damage / DPS readout for the infinite damage-test dummy —
    // keeps refreshing every frame while that run is active.
    if(this.stageActive && this.currentRun && this.currentRun.kind==='dummy' && this.currentRun.subtype==='infinite'){
      const dummy = this.enemies.find(e=> e.data && e.data.isInfinite);
      if(dummy){
        const elapsed = Math.max(0.001, this.clock.getElapsedTime() - (this.dpsTestStartTime!==undefined ? this.dpsTestStartTime : this.clock.getElapsedTime()));
        const total = dummy.totalDamage||0;
        const dps = total/elapsed;
        document.getElementById('stage-banner-sub').textContent = `Total Damage: ${Math.round(total).toLocaleString('id-ID')} · DPS: ${Math.round(dps).toLocaleString('id-ID')}`;
      }
    }
  }

  // Mobile touch-button cooldown feedback: dark curtain rising + countdown
  // number + dimmed opacity while cooling down (mirrors the desktop
  // skill-bar), and a soft pulsing gold glow on Ultimate specifically while
  // it's off cooldown and ready to use.
  updateMobileSkillButtons(){
    const p = this.player, c = this.cdata;
    const combatSlots = [
      {id:'mbtn-skill1', slot:'skill1', total:this.getEffCooldown(c.skill1.cooldown)},
      {id:'mbtn-skill2', slot:'skill2', total:this.getEffCooldown(c.skill2.cooldown)},
      {id:'mbtn-skill3', slot:'skill3', total:this.getEffCooldown(c.skill3.cooldown)},
      {id:'mbtn-ultimate', slot:'ultimate', total:this.getEffCooldown(c.ultimate.cooldown)}
    ];
    combatSlots.forEach(s=>{
      const el = document.getElementById(s.id);
      if(!el) return;
      const ov = el.querySelector('.cdov'), tx = el.querySelector('.cdtx');
      const locked = p.level < UNLOCK_LEVEL[s.slot];
      const remaining = p.cooldowns[s.slot];
      if(locked){
        el.classList.add('cd-active'); el.classList.remove('ready');
        if(ov) ov.style.height='100%';
        if(tx) tx.textContent = UNLOCK_LEVEL[s.slot];
      } else if(remaining>0){
        el.classList.add('cd-active'); el.classList.remove('ready');
        if(ov) ov.style.height = Math.min(100,(remaining/s.total)*100)+'%';
        if(tx) tx.textContent = remaining>1 ? Math.ceil(remaining) : '';
      } else {
        el.classList.remove('cd-active');
        if(ov) ov.style.height='0%';
        if(tx) tx.textContent='';
        if(s.id==='mbtn-ultimate') el.classList.add('ready');
      }
    });
    const dashEl = document.getElementById('mbtn-dodge');
    if(dashEl){
      const dov = dashEl.querySelector('.cdov'), dtx = dashEl.querySelector('.cdtx');
      if(p.dodgeCd>0){
        dashEl.classList.add('cd-active');
        if(dov) dov.style.height = Math.min(100,(p.dodgeCd/2.5)*100)+'%';
        if(dtx) dtx.textContent = p.dodgeCd>1 ? Math.ceil(p.dodgeCd) : '';
      } else {
        dashEl.classList.remove('cd-active');
        if(dov) dov.style.height='0%';
        if(dtx) dtx.textContent='';
      }
    }
  }

  // Advances every timer that belongs to a single character (cooldowns,
  // personal buffs, HP/mana regen, ...). Called for BOTH team members every
  // frame — not just the active one — so cooldowns and buff durations keep
  // counting down normally while a character is on standby (nothing pauses
  // or resets just because a swap happened).
  tickCharacterTimers(dt, ch, isActive){
    ch.attackCd = Math.max(0, ch.attackCd-dt);
    ch.dodgeCd = Math.max(0, ch.dodgeCd-dt);
    ch.iFrame = Math.max(0, ch.iFrame-dt);
    ch.bulwarkCd = Math.max(0, ch.bulwarkCd-dt);
    ch.attackLock = Math.max(0, (ch.attackLock||0)-dt);
    for(const k in ch.cooldowns) ch.cooldowns[k] = Math.max(0, ch.cooldowns[k]-dt);
    if(ch.comboTimer>0){ ch.comboTimer -= dt; if(ch.comboTimer<=0) ch.combo=0; }
    if(ch.mana < ch.manaMax) ch.mana = Math.min(ch.manaMax, ch.mana + 12*dt);

    if(this.inLobby && ch.hp < ch.hpMax){ ch.hp = Math.min(ch.hpMax, ch.hp + 50*dt); }
    if(ch.hp < ch.hpMax){
      ch.regenTimer = (ch.regenTimer||0) + dt;
      if(ch.regenTimer>=4){ ch.regenTimer -= 4; ch.hp = Math.min(ch.hpMax, ch.hp + 20); }
    } else { ch.regenTimer = 0; }

    // Personal buffs — NOT transferable, but their duration still counts down
    // normally regardless of active/standby status, same as everything else.
    const b = ch.buffs;
    if(b.hasteTimer>0){ b.hasteTimer -= dt; if(b.hasteTimer<=0) b.hasteMult=1; }
    if(b.defTimer>0){ b.defTimer -= dt; if(b.defTimer<=0){ b.defMult=1; b.lifestealPct=0; } }
    if(b.lifestealTimer>0){ b.lifestealTimer -= dt; }
    if(b.titanTimer>0){
      b.titanTimer -= dt;
      if(b.titanTimer<=0){
        ch.hpMax -= (b.titanBonusHp||0);
        ch.hp = Math.min(ch.hp, ch.hpMax);
        b.titanBonusHp=0; b.titanAtkPct=0; b.titanHpPct=0; b.titanDefPct=0; b.titanLifesteal=0;
      }
    }
    if(b.archerBoostTimer>0){
      b.archerBoostTimer -= dt;
      if(b.archerBoostTimer<=0){ b.archerBoostAtkPct=0; b.archerBoostCritRate=0; b.archerBoostCritDmg=0; }
    }
    if(b.supportTimer>0){
      b.supportTimer -= dt;
      if(b.supportTimer<=0){ b.supportAtkPct=0; b.supportMagicPct=0; b.supportCritRate=0; b.supportCritDmg=0; b.supportPenetration=0; }
    }
    if(b.formationTimer>0){ b.formationTimer -= dt; if(b.formationTimer<=0) b.formationAtkPct=0; }
    if(b.resonanceTimer>0){ b.resonanceTimer -= dt; if(b.resonanceTimer<=0) b.resonanceMagicPct=0; }
    if(b.hybridAtkTimer>0){ b.hybridAtkTimer -= dt; if(b.hybridAtkTimer<=0) b.hybridAtkFlat=0; }
    if(b.hybridPenTimer>0){ b.hybridPenTimer -= dt; if(b.hybridPenTimer<=0) b.hybridPenFlat=0; }
    if(b.hybridCritRateTimer>0){ b.hybridCritRateTimer -= dt; if(b.hybridCritRateTimer<=0) b.hybridCritRateFlat=0; }
    if(b.hybridCritDmgTimer>0){ b.hybridCritDmgTimer -= dt; if(b.hybridCritDmgTimer<=0) b.hybridCritDmgFlat=0; }
    // Wrestler Momentum stacks: each stack decays on its own 4s timer.
    if(b.momentumStacks && b.momentumStacks.length){
      b.momentumStacks.forEach(s=> s.timeLeft -= dt);
      b.momentumStacks = b.momentumStacks.filter(s=> s.timeLeft>0);
    }
    // Wrestler rage buff (Adrenaline Rush / Final Grapple).
    if(b.rageTimer>0){
      b.rageTimer -= dt;
      if(b.rageTimer<=0){ b.rageAtkPct=0; b.rageAspdPct=0; b.rageLifesteal=0; }
    }
    const titanScale = b.titanTimer>0 ? 1.5 : 1.0;
    ch.mesh.scale.lerp(new THREE.Vector3(titanScale,titanScale,titanScale), Math.min(1, dt*3));
  }

  update(dt){
    this.team.forEach((ch,idx)=> this.tickCharacterTimers(dt, ch, idx===this.activeIndex));
    this.tickSharedBuffs(dt);
    this.globalSwapCd = Math.max(0, (this.globalSwapCd||0)-dt);

    const p = this.player;
    this.updateDodgeAnim(dt);
    const dodging = p.dodgeAnim && p.dodgeAnim.active;
    const canMove = (this.stageActive || this.inLobby) && !this.panelOpen && !dodging && !(p.attackLock>0);
    if(canMove) this.updatePlayerMovement(dt);

    this.enemies.forEach(e=> this.updateEnemyAI(dt, e));
    this.updateSummons(dt);
    this.updateCamera();
    this.updateFX(dt);
    if(this.stageActive || this.inLobby) this.updateHUD();
    this.updateStationUI();

    this.renderer.render(this.scene, this.camera);
  }

  start(){
    this.looping = true;
    const loop = ()=>{
      const dt = Math.min(0.05, this.clock.getDelta());
      this.update(dt);
      requestAnimationFrame(loop);
    };
    loop();
  }
}
