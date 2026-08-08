
/* =====================================================================
   PROJECT ECLIPSE — PROTOTYPE
   ===================================================================== */

const CharacterData = {
  Mage: {
    key:'Mage', icon:'🧙', role:'Burst / Crowd Control', color:0x8a5cff,
    hp:500, mana:350, patk:20, magic:45, pdef:20, mdef:30, aspd:1.0, critRate:0.0, critDmg:1.5, moveSpeed:5.0,
    growth:{hp:30, mana:25, patk:2, magic:7, pdef:2, mdef:3},
    basic:{name:'Arcane Bolt', icon:'✨', mult:0.9, isMagic:true, range:6.5, fx:{type:'bolt', color:0xb98aff}},
    passive:{name:'Mana Flow', icon:'🔷', desc:'Setiap 4 Basic Attack, kembalikan 8 Mana.'},
    skill1:{name:'Frozen Spike', icon:'❄️', mult:1.6, isMagic:true, manaCost:25, cooldown:4, range:6.5, effect:{type:'stun', duration:1.0}, fx:{type:'ice', color:0xbfe8ff}, desc:'Damage + root musuh 1 detik.'},
    skill2:{name:'Fire Blast', icon:'🔥', mult:1.5, isMagic:true, manaCost:35, cooldown:6, aoe:true, aoeRadius:5.2, effect:{type:'dot', dps:9, duration:3}, fx:{type:'fire', color:0xff7a3f}, desc:'Ledakan area + Burn 3 detik.'},
    skill3:{name:'Arcane Barrier', icon:'🛡️', mult:0, isMagic:true, manaCost:20, cooldown:10, selfBuff:{type:'shield', pct:0.20, duration:4}, fx:{type:'shield', color:0x7fe0d0}, desc:'Shield 20% Max HP selama 4 detik.'},
    ultimate:{name:'Meteor Tornado', icon:'🌪️', mult:3.2, isMagic:true, manaCost:90, cooldown:25, aoe:true, aoeRadius:5.8, effect:{type:'stun', duration:1.5}, fx:{type:'tornado', color:0x8a5cff}, desc:'Damage besar area + Stun 1.5 detik.'}
  },
  Archer: {
    key:'Archer', icon:'🏹', role:'Sustained DPS / Critical', color:0x4fd68c,
    hp:580, mana:180, patk:45, magic:0, pdef:20, mdef:20, aspd:1.4, critRate:0.15, critDmg:1.5, moveSpeed:5.4,
    growth:{hp:35, mana:10, patk:6, pdef:2, mdef:2},
    basic:{name:'Quick Shot', icon:'🏹', mult:1.0, isMagic:false, range:7.5, fx:{type:'arrow', color:0x4fd68c}},
    passive:{name:'Hawk Eye', icon:'🦅', desc:'+8% Crit Rate selama 3 detik setelah pakai skill.'},
    skill1:{name:'Multi Shot', icon:'🎯', mult:1.35, isMagic:false, manaCost:18, cooldown:3, range:7, fx:{type:'arrow', color:0x8fe8b0}, desc:'Beberapa anak panah sekaligus.'},
    skill2:{name:'Piercing Arrow', icon:'🏹', mult:1.9, isMagic:false, manaCost:28, cooldown:5, range:7.5, defShred:0.3, fx:{type:'arrow', color:0xfff07a}, desc:'Damage tinggi, abaikan 30% Defense.'},
    skill3:{name:'Explosive Trap', icon:'💣', mult:1.4, isMagic:false, manaCost:24, cooldown:7, aoe:true, aoeRadius:5, effect:{type:'slow', value:0.4, duration:2}, fx:{type:'shockwave', color:0xffb84f}, desc:'AoE + Slow 40% selama 2 detik.'},
    ultimate:{name:'Rain of Arrows', icon:'🌧️', mult:3.4, isMagic:false, manaCost:85, cooldown:24, aoe:true, aoeRadius:5.8, fx:{type:'shockwave', color:0x4fd68c}, desc:'Hujan panah damage besar ke area.'}
  },
  Assassin: {
    key:'Assassin', icon:'⚔️', role:'Burst Physical / Mobility', color:0xe0475a,
    hp:560, mana:160, patk:55, magic:0, pdef:20, mdef:20, aspd:1.3, critRate:0.10, critDmg:1.7, moveSpeed:5.75,
    growth:{hp:33, mana:10, patk:7, pdef:2, mdef:2},
    basic:{name:'Slash', icon:'🗡', mult:1.05, isMagic:false, fx:{type:'slash', color:0xe0475a}},
    passive:{name:'Killer Instinct', icon:'💀', desc:'+20% Crit Damage ke musuh HP < 50%.'},
    skill1:{name:'Shadow Strike', icon:'🌑', mult:2.0, isMagic:false, manaCost:18, cooldown:3.5, dash:true, fx:{type:'slash', color:0xff5c5c}, desc:'Gap-close cepat + damage besar.'},
    skill2:{name:'Poison Blade', icon:'🧪', mult:1.3, isMagic:false, manaCost:22, cooldown:5, effect:{type:'dot', dps:7, duration:3}, fx:{type:'slash', color:0x7fe08a}, desc:'Damage + Poison 3 detik.'},
    skill3:{name:'Smoke Bomb', icon:'💨', mult:0, isMagic:false, manaCost:20, cooldown:8, selfBuff:{type:'haste', mult:1.4, duration:2, iframe:0.5}, fx:{type:'smoke', color:0xaaaaaa}, desc:'Haste 40% + I-Frame singkat.'},
    ultimate:{name:'Execution', icon:'☠️', mult:3.8, isMagic:false, manaCost:85, cooldown:24, executeBonus:0.5, fx:{type:'slash', color:0xff2b2b}, desc:'Damage sangat besar, +50% jika musuh HP < 30%.'}
  },
  Fighter: {
    key:'Fighter', icon:'🛡️', role:'Tank / Bruiser', color:0xe8b64c,
    hp:800, mana:120, patk:40, magic:0, pdef:40, mdef:40, aspd:0.9, critRate:0.05, critDmg:1.5, moveSpeed:4.75,
    growth:{hp:45, mana:8, patk:5, pdef:4, mdef:4},
    basic:{name:'Slam', icon:'🔨', mult:1.1, isMagic:false, fx:{type:'shockwave', color:0xe8b64c}},
    passive:{name:'Bulwark', icon:'🧱', desc:'Shield 15% Max HP otomatis saat HP < 30% (CD 30 detik).'},
    skill1:{name:'Shield Bash', icon:'🛡️', mult:1.3, isMagic:false, manaCost:15, cooldown:4, effect:{type:'stun', duration:1.0}, fx:{type:'shockwave', color:0xf2d34c}, desc:'Damage + Stun 1 detik.'},
    skill2:{name:'Guardian Smash', icon:'💢', mult:1.8, isMagic:false, manaCost:28, cooldown:6, aoe:true, fx:{type:'shockwave', color:0xff8a3f}, desc:'Hantaman area damage besar.'},
    skill3:{name:'Iron Will', icon:'🩸', mult:0, isMagic:false, manaCost:18, cooldown:10, selfBuff:{type:'ironwill', defMult:1.3, lifesteal:0.15, duration:5}, fx:{type:'shield', color:0xe8b64c}, desc:'+30% Defense & 15% Lifesteal, 5 detik.'},
    ultimate:{name:'Earth Sunder', icon:'🌋', mult:2.9, isMagic:false, manaCost:75, cooldown:20, aoe:true, effect:{type:'stun', duration:1.5}, fx:{type:'shockwave', color:0xb5651d}, desc:'Damage besar area + Knockdown 1.5 detik.'}
  }
};

const EnemyData = {
  Goblin:{ name:'Goblin', hp:250, patk:19, pdef:7, poiseMax:58, detectionRadius:9, attackRange:1.7, moveSpeed:3.5, expReward:44, goldReward:15, scale:1.0, color:0x4a7c3f },
  GoblinElite:{ name:'Goblin Elite', hp:540, patk:29, pdef:13, poiseMax:100, detectionRadius:10, attackRange:1.8, moveSpeed:3.8, expReward:120, goldReward:40, scale:1.25, color:0x4a7c3f, isElite:true },
  GoblinKing:{ name:'Goblin King', hp:1650, patk:34, pdef:22, poiseMax:340, detectionRadius:40, attackRange:2.3, moveSpeed:3.1, expReward:1000, goldReward:310, scale:1.9, color:0x2f5c2f, isBoss:true }
};

const DungeonData = {
  greenForest:{
    name:'Green Forest', region:'Region 1', levelRange:'Lv 1–10',
    stages:[
      {id:1, mobs:[{type:'Goblin', count:2}]},
      {id:2, mobs:[{type:'Goblin', count:3}]},
      {id:3, mobs:[{type:'Goblin', count:2},{type:'GoblinElite', count:1}]},
      {id:4, mobs:[{type:'Goblin', count:2},{type:'GoblinElite', count:2}]},
      {id:5, boss:'GoblinKing'}
    ]
  }
};

// Farming domains now have 3 difficulty tiers: harder mobs + bigger loot multiplier per tier.
const DomainData = {
  artifactDomain:{ name:'Artifact Domain', desc:'Drop Artifact. Makin tinggi level, makin besar peluang rarity tinggi.',
    tiers:[
      {level:1, mobs:[{type:'Goblin', count:3}], artifactChance:0.45},
      {level:2, mobs:[{type:'Goblin', count:3},{type:'GoblinElite', count:1}], artifactChance:0.52},
      {level:3, mobs:[{type:'Goblin', count:2},{type:'GoblinElite', count:2}], artifactChance:0.6},
      {level:4, mobs:[{type:'GoblinElite', count:3}], artifactChance:0.68},
      {level:5, mobs:[{type:'GoblinElite', count:3},{type:'Goblin', count:2}], artifactChance:0.75},
      {level:6, mobs:[{type:'GoblinElite', count:4}], artifactChance:0.85}
    ]
  },
  materialDomain:{ name:'Material Domain', desc:'Drop Skill Book & Essence. Makin tinggi level, makin banyak dropnya.',
    tiers:[
      {level:1, mobs:[{type:'Goblin', count:4}], lootMult:1},
      {level:2, mobs:[{type:'Goblin', count:4},{type:'GoblinElite', count:1}], lootMult:1.4},
      {level:3, mobs:[{type:'Goblin', count:3},{type:'GoblinElite', count:2}], lootMult:1.8},
      {level:4, mobs:[{type:'GoblinElite', count:3}], lootMult:2.3},
      {level:5, mobs:[{type:'GoblinElite', count:3},{type:'Goblin', count:2}], lootMult:2.8},
      {level:6, mobs:[{type:'GoblinElite', count:5}], lootMult:3.5}
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
  critRate: {Common:0.02, Uncommon:0.03, Rare:0.04, Epic:0.06, Legendary:0.09},
  critDmg:  {Common:0.04, Uncommon:0.06, Rare:0.09, Epic:0.13, Legendary:0.18},
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
const ARTIFACT_MAX_LEVEL = 15;
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
const CLASS_ESSENCE = {Mage:'Magic Essence', Archer:'Arrow Emblem', Assassin:'Shadow Core', Fighter:'War Medal'};

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
// CLASS SELECT SCREEN
// =======================================================================
const cardsWrap = document.getElementById('class-cards');
Object.values(CharacterData).forEach(c=>{
  const div = document.createElement('div');
  div.className='class-card';
  div.dataset.class = c.key;
  div.innerHTML = `
    <div class="class-icon" style="background:#${c.color.toString(16).padStart(6,'0')}; color:#${c.color.toString(16).padStart(6,'0')}">${c.icon}</div>
    <h3>${c.key}</h3>
    <div class="role">${c.role}</div>
    <div class="stat-row"><span>HP</span><span>${c.hp}</span></div>
    <div class="stat-row"><span>Mana</span><span>${c.mana}</span></div>
    <div class="stat-row"><span>Attack</span><span>${c.magic||c.patk}</span></div>
    <div class="skill-list">
      <div><b>P</b>${c.passive.name}</div>
      <div><b>1</b>${c.skill1.name}</div>
      <div><b>2</b>${c.skill2.name}</div>
      <div><b>3</b>${c.skill3.name}</div>
      <div><b>F</b>${c.ultimate.name}</div>
    </div>
  `;
  div.addEventListener('click', ()=> startGame(c.key));
  cardsWrap.appendChild(div);
});

// mark cards that already have a save so the player can see progress exists
(async ()=>{
  for(const c of Object.values(CharacterData)){
    try{
      const raw = await storageGet('save_class_'+c.key);
      if(raw){
        const card = document.querySelector(`.class-card[data-class="${c.key}"]`);
        if(card && !card.querySelector('.save-badge')){
          const badge = document.createElement('div');
          badge.className='save-badge';
          badge.textContent='💾 Ada Progress';
          card.appendChild(badge);
        }
      }
    }catch(e){ /* ignore */ }
  }
})();

let Game = null;
async function startGame(classKey){
  document.getElementById('class-select').style.display='none';
  Game = new GameApp(classKey);
  try{
    const sharedRaw = await storageGet('save_shared');
    const classRaw = await storageGet('save_class_'+classKey);
    if(sharedRaw || classRaw){
      Game.applySaveData(sharedRaw?JSON.parse(sharedRaw):null, classRaw?JSON.parse(classRaw):null);
    }
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
  constructor(classKey){
    this.classKey = classKey;
    this.cdata = CharacterData[classKey];
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
    this.stageActive = false;
    this.inLobby = false;
    this.panelOpen = false;
    this.currentRun = null;
    this.dungeonProgress = { greenForest:{ unlockedStage:1, cleared:false } };
    this.domainProgress = { artifactDomain:{unlockedTier:1}, materialDomain:{unlockedTier:1}, rewardDomain:{unlockedTier:1} };
    this.quests = [
      {id:'q1', desc:'Kalahkan 5 Goblin', type:'killGoblin', target:5, progress:0, reward:{gold:200,exp:100}, claimed:false},
      {id:'q2', desc:'Bersihkan Stage 3 Green Forest', type:'clearStage3', target:1, progress:0, reward:{gems:20}, claimed:false},
      {id:'q3', desc:'Dapatkan 1 Artifact', type:'getArtifact', target:1, progress:0, reward:{gold:300}, claimed:false}
    ];

    this.initScene();
    this.initPlayer();
    this.initStations();
    this.initInput();
    this.updateHUDStatic();

    document.getElementById('hub-btn').addEventListener('click', ()=> this.enterLobby());
    document.getElementById('hub-btn').style.display='flex';
    document.getElementById('restart-btn').style.display='flex';
    document.getElementById('save-btn').style.display='flex';
    document.getElementById('inventory-btn').addEventListener('click', ()=>{ if(this.inLobby && !this.panelOpen) this.openStationPanel('inventory'); });
    document.getElementById('stats-btn').addEventListener('click', ()=>{ if(this.inLobby && !this.panelOpen) this.openStationPanel('stats'); });
  }

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

    const ring = new THREE.Mesh(new THREE.RingGeometry(9.6,10,48), new THREE.MeshBasicMaterial({color:0x6a4fae, side:THREE.DoubleSide, transparent:true, opacity:0.25}));
    ring.rotation.x=-Math.PI/2; ring.position.y=0.02;
    this.dungeonGroup.add(ring);

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

  // ---------------- PLAYER ----------------
  initPlayer(){
    const c = this.cdata;
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.34,0.4,1.15,10), new THREE.MeshStandardMaterial({color:c.color, roughness:0.55, metalness:0.15}));
    body.position.y = 0.85;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3,16,16), new THREE.MeshStandardMaterial({color:0xf0d5b0, roughness:0.7}));
    head.position.y = 1.6;
    const weapon = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.9,0.1), new THREE.MeshStandardMaterial({color:0xe8b64c, metalness:0.6, roughness:0.3}));
    weapon.position.set(0.45,1.0,0);
    g.add(body, head, weapon);
    g.position.set(0,0,10);
    this.scene.add(g);

    this.player = {
      mesh:g, facing:0,
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
      iFrame:0, gold:0, gems:0, materials:{}, artifacts:[],
      equippedArtifacts:{Crown:null, Bracelet:null, Ring:null, Necklace:null, Core:null},
      buffs:{ shield:0, hasteMult:1, hasteTimer:0, defMult:1, defTimer:0, lifestealPct:0, lifestealTimer:0, critBonus:0, critBonusTimer:0 },
      bulwarkCd:0
    };
    this.recalcStats();
    this.player.hp = this.player.hpMax;
    this.player.mana = this.player.manaMax;
  }

  recalcStats(){
    const p = this.player;
    let hpPct=0, atkPct=0, magicPct=0, defPct=0, critRateAdd=0, critDmgAdd=0, cdrPct=0, moveSpeedFlat=0;
    const equipped = Object.values(p.equippedArtifacts);
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
    p.setBonusRarity = null;
    if(equipped.every(a=>a)){
      const rarities = new Set(equipped.map(a=>a.rarity));
      if(rarities.size===1){
        p.setBonusRarity = equipped[0].rarity;
        const bonus = SET_BONUS_BY_RARITY[p.setBonusRarity]||0;
        hpPct+=bonus; atkPct+=bonus; magicPct+=bonus; defPct+=bonus;
      }
    }
    p.hpMax = Math.round(p.baseHpMax*(1+hpPct));
    p.manaMax = p.baseManaMax;
    p.patk = Math.round(p.basePatk*(1+atkPct));
    p.magic = Math.round(p.baseMagic*(1+magicPct));
    p.pdef = Math.round(p.basePdef*(1+defPct));
    p.mdef = p.baseMdef;
    p.critRate = Math.min(0.75, p.baseCritRate + critRateAdd);
    p.critDmg = Math.min(3.0, p.baseCritDmg + critDmgAdd);
    p.cdr = Math.min(0.4, cdrPct);
    p.moveSpeed = p.baseMoveSpeed + moveSpeedFlat;
    p.hp = Math.min(p.hp, p.hpMax);
    p.mana = Math.min(p.mana, p.manaMax);
  }

  // ---------------- SAVE / LOAD ----------------
  saveGame(){
    const p = this.player;
    // shared wallet — carries over no matter which class you play
    const shared = {
      gold:p.gold, gems:p.gems, materials:p.materials, artifacts:p.artifacts, equippedArtifacts:p.equippedArtifacts,
      dungeonProgress:this.dungeonProgress, domainProgress:this.domainProgress, quests:this.quests
    };
    // per-class save — only level, exp, and skill levels reset when you switch class
    const classData = {
      level:p.level, exp:p.exp, skillLevels:p.skillLevels,
      baseHpMax:p.baseHpMax, baseManaMax:p.baseManaMax, basePatk:p.basePatk, baseMagic:p.baseMagic, basePdef:p.basePdef, baseMdef:p.baseMdef
    };
    storageSet('save_shared', JSON.stringify(shared));
    storageSet('save_class_'+this.classKey, JSON.stringify(classData));
  }
  applySaveData(shared, classData){
    const p = this.player;
    if(shared){
      p.gold = shared.gold||0; p.gems = shared.gems||0;
      p.materials = shared.materials||{};
      p.artifacts = (shared.artifacts||[]).map(normalizeArtifact);
      p.equippedArtifacts = shared.equippedArtifacts||{Crown:null,Bracelet:null,Ring:null,Necklace:null,Core:null};
      Object.keys(p.equippedArtifacts).forEach(slot=> normalizeArtifact(p.equippedArtifacts[slot]));
      this.dungeonProgress = shared.dungeonProgress||this.dungeonProgress;
      this.domainProgress = shared.domainProgress||this.domainProgress;
      this.quests = shared.quests||this.quests;
    }
    if(classData){
      p.level = classData.level||1; p.exp = classData.exp||0;
      p.skillLevels = classData.skillLevels||{skill1:1,skill2:1,skill3:1,ultimate:1};
      p.baseHpMax = classData.baseHpMax||p.baseHpMax; p.baseManaMax = classData.baseManaMax||p.baseManaMax;
      p.basePatk = classData.basePatk||p.basePatk; p.baseMagic = classData.baseMagic||p.baseMagic;
      p.basePdef = classData.basePdef||p.basePdef; p.baseMdef = classData.baseMdef||p.baseMdef;
    }
    this.recalcStats();
    p.hp = p.hpMax; p.mana = p.manaMax;
    this.updateHUDStatic();
    this.toast('Save dimuat!');
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
      {key:'shop', name:'Merchant', icon:'🛒', pos:new THREE.Vector3(6,0,-2), color:0x7fc9e0}
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
    this.setEnvironmentMode('lobby');
    document.getElementById('stage-overlay').style.display='none';
    document.getElementById('station-panel').style.display='none';
    document.getElementById('hud').style.display='block';
    document.body.classList.add('lobby-mode');
    this.player.mesh.position.set(0,0,10);
    this.camYaw = 0; this.camPitch=0.32; this.camDist=8;
    this.saveGame();
    if(!this.looping) this.start();
  }

  // ---------------- STATION PANELS ----------------
  openStationPanel(key){
    this.panelOpen = true;
    const title = document.getElementById('station-panel-title');
    const body = document.getElementById('station-panel-body');
    try{
      if(key==='inventory'){ title.textContent='🎒 Inventory'; body.innerHTML=this.renderInventoryHTML(); }
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
    const p = this.player;
    const matRows = Object.keys(p.materials).length
      ? Object.entries(p.materials).map(([n,q])=>`<div class="panel-row"><span class="prl">${n}</span><span class="prr">${q}</span></div>`).join('')
      : `<div class="panel-row"><span class="prl">Belum ada material. Coba Material Domain!</span></div>`;
    const artRows = p.artifacts.length
      ? p.artifacts.map(a=>`<div class="panel-row"><span class="prl" style="color:${RARITY_COLOR[a.rarity]}">${a.name} (Lv.${a.level})</span><span class="prr">${formatStatValue(a.mainStatType, artifactMainStatValue(a))} ${a.mainStatLabel}</span></div>`).join('')
      : `<div class="panel-row"><span class="prl">Belum ada artifact belum di-equip. Coba Artifact Domain!</span></div>`;
    return `
      <div class="panel-row"><span class="prl">🪙 Gold</span><span class="prr">${p.gold}</span></div>
      <div class="panel-row"><span class="prl">💎 Gems</span><span class="prr">${p.gems}</span></div>
      <div class="panel-h">Material</div>${matRows}
      <div class="panel-h">Artifact (belum dipakai)</div>${artRows}
    `;
  }

  renderStatsHTML(){
    const p = this.player, c = this.cdata;
    const statRows = `
      <div class="panel-row"><span class="prl">HP</span><span class="prr">${Math.round(p.hp)} / ${p.hpMax}</span></div>
      <div class="panel-row"><span class="prl">Mana</span><span class="prr">${Math.round(p.mana)} / ${p.manaMax}</span></div>
      <div class="panel-row"><span class="prl">Physical Attack</span><span class="prr">${p.patk}</span></div>
      <div class="panel-row"><span class="prl">Magic Power</span><span class="prr">${p.magic}</span></div>
      <div class="panel-row"><span class="prl">Physical Defense</span><span class="prr">${p.pdef}</span></div>
      <div class="panel-row"><span class="prl">Magic Defense</span><span class="prr">${p.mdef}</span></div>
      <div class="panel-row"><span class="prl">Attack Speed</span><span class="prr">${p.aspd.toFixed(2)}/s</span></div>
      <div class="panel-row"><span class="prl">Critical Rate</span><span class="prr">${Math.round(p.critRate*100)}%</span></div>
      <div class="panel-row"><span class="prl">Critical Damage</span><span class="prr">${Math.round(p.critDmg*100)}%</span></div>
      <div class="panel-row"><span class="prl">Move Speed</span><span class="prr">${p.moveSpeed.toFixed(2)}</span></div>
      <div class="panel-row"><span class="prl">Cooldown Reduction</span><span class="prr">${Math.round(p.cdr*100)}%</span></div>
    `;
    const slots = [
      {def:c.basic, level:1, isBasic:true, cooldown:(1/p.aspd)},
      {def:c.skill1, level:p.skillLevels.skill1, cooldown:this.getEffCooldown(c.skill1.cooldown)},
      {def:c.skill2, level:p.skillLevels.skill2, cooldown:this.getEffCooldown(c.skill2.cooldown)},
      {def:c.skill3, level:p.skillLevels.skill3, cooldown:this.getEffCooldown(c.skill3.cooldown)},
      {def:c.ultimate, level:p.skillLevels.ultimate, cooldown:this.getEffCooldown(c.ultimate.cooldown)}
    ];
    const skillRows = slots.map(s=>{
      const effMult = s.def.mult>0 ? s.def.mult*(1+(s.level-1)*0.08) : 0;
      const atk = s.def.isMagic ? p.magic : p.patk;
      const dmgText = effMult>0 ? Math.round(atk*effMult)+' dmg (dasar)' : 'Buff / Utility';
      const lvlText = s.isBasic ? '' : ` (Lv.${s.level})`;
      return `<div class="panel-row" style="flex-direction:column; align-items:stretch;">
        <div style="display:flex; justify-content:space-between;"><span class="prl">${s.def.icon} ${s.def.name}${lvlText}</span><span class="prr">${dmgText}</span></div>
        <div style="font-size:9.5px; color:var(--text-dim); margin-top:2px;">Mana: ${s.def.manaCost||0} · Cooldown: ${s.cooldown.toFixed(2)}s</div>
      </div>`;
    }).join('');
    return `<div class="panel-h">Atribut</div>${statRows}<div class="panel-h">Skill (damage dasar, sebelum Defense musuh)</div>${skillRows}`;
  }

  renderArtifactHTML(){
    const p = this.player;
    const slotsHtml = ARTIFACT_SLOTS.map(slot=>{
      const a = p.equippedArtifacts[slot];
      const style = a ? `style="color:${RARITY_COLOR[a.rarity]}"` : '';
      return `<div class="art-slot ${a?'filled':''}" ${style} data-slot="${slot}">${a? a.rarity+'<br>Lv.'+a.level : slot}</div>`;
    }).join('');

    const equippedList = Object.values(p.equippedArtifacts).filter(a=>a);
    const equippedRows = equippedList.length ? equippedList.map(a=>this.renderArtifactCard(a, true)).join('')
      : `<div class="panel-row"><span class="prl">Belum ada artifact terpasang</span></div>`;

    const poolHtml = p.artifacts.length ? p.artifacts.map(a=>this.renderArtifactCard(a, false)).join('')
      : `<div class="panel-row"><span class="prl">Belum ada artifact. Coba Artifact Domain!</span></div>`;

    const setRows = Object.entries(SET_BONUS_BY_RARITY).map(([r,pct])=>
      `<div class="panel-row"><span class="prl" style="color:${RARITY_COLOR[r]}">Full Set ${r}</span><span class="prr">+${Math.round(pct*100)}% All Stats</span></div>`
    ).join('');
    const setStatus = p.setBonusRarity
      ? `<div class="panel-row"><span class="prl">🎁 Set Bonus Aktif</span><span class="prr" style="color:${RARITY_COLOR[p.setBonusRarity]}">${p.setBonusRarity} +${Math.round(SET_BONUS_BY_RARITY[p.setBonusRarity]*100)}%</span></div>`
      : `<div class="panel-row"><span class="prl">🎁 Set Bonus</span><span class="prr">Belum aktif</span></div>`;

    return `<div class="artifact-slots">${slotsHtml}</div>
      <div class="panel-row"><span class="prl">✨ Magical Dust</span><span class="prr">${p.materials['Magical Dust']||0}</span></div>
      ${setStatus}
      <div class="panel-h">Tabel Full Set Bonus (isi 5 slot rarity sama)</div>${setRows}
      <div class="panel-h">Artifact Terpasang</div>${equippedRows}
      <div class="panel-h">Koleksi Artifact (klik nama utk equip)</div>${poolHtml}`;
  }

  renderArtifactCard(a, isEquipped){
    const maxed = a.level>=ARTIFACT_MAX_LEVEL;
    const cost = maxed ? null : (a.level+2);
    const dust = this.player.materials['Magical Dust']||0;
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
    document.querySelectorAll('#station-panel-body [data-equip]').forEach(el=>{
      el.addEventListener('click', ()=>{
        const art = this.player.artifacts.find(a=>a.id===el.dataset.equip);
        if(art){ this.equipArtifact(art); this.openStationPanel('artifact'); }
      });
    });
    document.querySelectorAll('#station-panel-body [data-unequip]').forEach(el=>{
      el.addEventListener('click', ()=>{
        const art = Object.values(this.player.equippedArtifacts).find(a=>a && a.id===el.dataset.unequip);
        if(art){ this.unequipArtifact(art.slot); this.openStationPanel('artifact'); }
      });
    });
    document.querySelectorAll('#station-panel-body [data-upgrade]:not(.disabled)').forEach(el=>{
      el.addEventListener('click', ()=> this.upgradeArtifact(el.dataset.upgrade));
    });
    document.querySelectorAll('#station-panel-body [data-delete]').forEach(el=>{
      el.addEventListener('click', ()=> this.deleteArtifact(el.dataset.delete));
    });
  }
  equipArtifact(art){
    const p = this.player;
    const old = p.equippedArtifacts[art.slot];
    if(old) p.artifacts.push(old);
    p.equippedArtifacts[art.slot] = art;
    p.artifacts = p.artifacts.filter(a=>a.id!==art.id);
    this.recalcStats();
    this.toast(`${art.name} dipasang!`);
    this.saveGame();
  }
  unequipArtifact(slot){
    const p = this.player;
    const a = p.equippedArtifacts[slot];
    if(!a) return;
    p.artifacts.push(a);
    p.equippedArtifacts[slot] = null;
    this.recalcStats();
    this.saveGame();
  }
  findArtifactById(id){
    const equipped = Object.values(this.player.equippedArtifacts).find(a=>a && a.id===id);
    if(equipped) return equipped;
    return this.player.artifacts.find(a=>a.id===id);
  }
  upgradeArtifact(id){
    const p = this.player;
    const art = this.findArtifactById(id);
    if(!art || art.level>=ARTIFACT_MAX_LEVEL) return;
    const cost = art.level+2;
    if((p.materials['Magical Dust']||0) < cost){ this.toast('Magical Dust tidak cukup'); return; }
    p.materials['Magical Dust'] -= cost;
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
    this.recalcStats();
    this.openStationPanel('artifact');
    this.saveGame();
  }
  deleteArtifact(id){
    const p = this.player;
    const idx = p.artifacts.findIndex(a=>a.id===id);
    if(idx<0) return;
    const art = p.artifacts[idx];
    const dust = (DUST_BASE_BY_RARITY[art.rarity]||3) + (art.level-1)*3;
    p.materials['Magical Dust'] = (p.materials['Magical Dust']||0) + dust;
    p.artifacts.splice(idx,1);
    this.toast(`Artifact dihancurkan: +${dust} Magical Dust`);
    this.openStationPanel('artifact');
    this.saveGame();
  }

  renderSkillUpgradeHTML(){
    const p = this.player, c = this.cdata;
    const essence = CLASS_ESSENCE[this.classKey];
    const slots = ['skill1','skill2','skill3','ultimate'];
    return slots.map(slot=>{
      const lvl = p.skillLevels[slot];
      const s = c[slot];
      const maxed = lvl>=10;
      const next = maxed ? null : SKILL_UPGRADE_COST[lvl+1];
      const canAfford = !maxed && p.gold>=next.gold && (p.materials['Skill Book']||0)>=next.book && (p.materials[essence]||0)>=next.ess;
      return `
        <div class="panel-row" style="flex-direction:column; align-items:stretch;">
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <span class="prl">${s.icon} ${s.name}</span><span class="prr">Lv. ${lvl}/10</span>
          </div>
          <div style="font-size:10px; color:var(--text-dim); margin-bottom:6px;">${maxed?'Skill sudah maksimal':'Biaya: '+next.gold+' Gold, '+next.book+' Skill Book, '+next.ess+' '+essence}</div>
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
    const cost = SKILL_UPGRADE_COST[lvl+1];
    const essence = CLASS_ESSENCE[this.classKey];
    const haveBook = p.materials['Skill Book']||0, haveEss = p.materials[essence]||0;
    if(p.gold<cost.gold || haveBook<cost.book || haveEss<cost.ess){ this.toast('Gold/Material tidak cukup'); return; }
    p.gold -= cost.gold; p.materials['Skill Book'] -= cost.book; p.materials[essence] -= cost.ess;
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
    const p = this.player;
    if(q.reward.gold) p.gold += q.reward.gold;
    if(q.reward.exp) this.gainExp(q.reward.exp);
    if(q.reward.gems) p.gems += q.reward.gems;
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

  renderShopHTML(){
    const p = this.player;
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
    const goldRows = goldItems.map(it=>`<div class="panel-row"><span class="prl">${it.name}</span><span class="mini-btn ${p.gold>=it.cost?'':'disabled'}" data-buy="${it.id}">${it.cost} 🪙</span></div>`).join('');
    const gemRows = gemItems.map(it=>`<div class="panel-row"><span class="prl" style="color:${RARITY_COLOR[it.rarity]}">${it.name}</span><span class="mini-btn ${p.gems>=it.cost?'':'disabled'}" data-buy="${it.id}">${it.cost} 💎</span></div>`).join('');
    return `<div class="panel-h">Beli dengan Gold</div>${goldRows}<div class="panel-h">Tukar Gems — Artifact Langsung</div>${gemRows}`;
  }
  wireShopPanel(){
    document.querySelectorAll('#station-panel-body .mini-btn:not(.disabled)[data-buy]').forEach(el=>{
      el.addEventListener('click', ()=> this.buyShopItem(el.dataset.buy));
    });
  }
  buyShopItem(id){
    const p = this.player;
    const essence = CLASS_ESSENCE[this.classKey];
    const table = {
      buy_book:{cost:300, currency:'gold', fn:()=>{ p.materials['Skill Book']=(p.materials['Skill Book']||0)+3; this.toast('+3 Skill Book'); }},
      buy_essence:{cost:400, currency:'gold', fn:()=>{ p.materials[essence]=(p.materials[essence]||0)+2; this.toast('+2 '+essence); }},
      buy_iron:{cost:100, currency:'gold', fn:()=>{ p.materials['Iron Ore']=(p.materials['Iron Ore']||0)+5; this.toast('+5 Iron Ore'); }},
      buy_art_common:{cost:1, currency:'gems', fn:()=> this.buyArtifact('Common')},
      buy_art_uncommon:{cost:2, currency:'gems', fn:()=> this.buyArtifact('Uncommon')},
      buy_art_rare:{cost:4, currency:'gems', fn:()=> this.buyArtifact('Rare')},
      buy_art_epic:{cost:6, currency:'gems', fn:()=> this.buyArtifact('Epic')},
      buy_art_legendary:{cost:10, currency:'gems', fn:()=> this.buyArtifact('Legendary')}
    };
    const entry = table[id];
    if(!entry) return;
    if(entry.currency==='gold'){ if(p.gold<entry.cost){ this.toast('Gold tidak cukup'); return; } p.gold-=entry.cost; }
    else { if(p.gems<entry.cost){ this.toast('Gems tidak cukup'); return; } p.gems-=entry.cost; }
    entry.fn();
    this.openStationPanel('shop');
    this.saveGame();
  }
  buyArtifact(rarity){
    const art = generateArtifactOfRarity(rarity);
    this.player.artifacts.push(art);
    this.toast(`Membeli ${art.name}!`);
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
    const inst = {
      mesh:g, data:d, typeKey,
      hp, hpMax:hp, patk, pdef, moveSpeed:d.moveSpeed,
      poise:d.poiseMax, poiseMax:d.poiseMax,
      state:'idle', attackTimer:0, breakTimer:0,
      hitCooldown:0, stunTimer:0, slowTimer:0, slowValue:0,
      dotTimer:0, dotDps:0, dotIsMagic:false, dotTick:0,
      isBoss:!!d.isBoss, isElite:!!d.isElite, phase:1
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
    this.clearEnemies();
    const p = this.player;
    p.hp = p.hpMax; p.mana = p.manaMax;
    p.buffs.shield=0; p.buffs.hasteTimer=0; p.buffs.defTimer=0; p.buffs.lifestealTimer=0;
    p.mesh.position.set(0,0,3);
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
    const p = this.player;
    p.hp = p.hpMax; p.mana = p.manaMax;
    p.mesh.position.set(0,0,3);
    const center = new THREE.Vector3(0,0,-6);
    const isBoss = !!stageDef.boss;
    if(isBoss){
      this.spawnEnemy(stageDef.boss, center.clone());
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
      if(!this.stageActive) return;
      if(e.code==='Digit1') this.trySkill('skill1');
      if(e.code==='Digit2') this.trySkill('skill2');
      if(e.code==='Digit3') this.trySkill('skill3');
      if(e.code==='KeyF') this.trySkill('ultimate');
    });
    window.addEventListener('keyup', e=>{ this.keys[e.code]=false; });

    const canvas = document.getElementById('game-canvas');
    canvas.addEventListener('mousedown', e=>{
      this.mouse.down=true; this.mouse.lastX=e.clientX; this.mouse.lastY=e.clientY;
      if(this.stageActive) this.tryAttack();
      // Pointer Lock lets the drag keep rotating the camera even if the cursor
      // would otherwise hit the edge of the browser window (fixes camera
      // "getting stuck" when dragged far on desktop).
      if(canvas.requestPointerLock){ canvas.requestPointerLock().catch(()=>{}); }
    });
    window.addEventListener('mouseup', ()=>{
      this.mouse.down=false;
      if(document.exitPointerLock && document.pointerLockElement===canvas) document.exitPointerLock();
    });
    window.addEventListener('mousemove', e=>{
      if(!this.mouse.down) return;
      let dx, dy;
      if(document.pointerLockElement===canvas){
        dx = e.movementX||0; dy = e.movementY||0;
      } else {
        dx = e.clientX-this.mouse.lastX; dy = e.clientY-this.mouse.lastY;
        this.mouse.lastX=e.clientX; this.mouse.lastY=e.clientY;
      }
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

    document.getElementById('interact-prompt').addEventListener('click', ()=>{
      if(this.inLobby && !this.panelOpen && this._nearStationKey) this.openStationPanel(this._nearStationKey);
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

  // ---------------- VISUAL FX ----------------
  spawnFX(fx, fromPos, toPos){
    if(!fx) return;
    const color = fx.color;
    const fromP = fromPos.clone();
    const toP = (toPos||fromPos).clone();
    let mesh, life, kind, scaleFrom=1, scaleTo=1, spin=false, baseOpacity=0.85;

    switch(fx.type){
      case 'bolt':
        mesh = new THREE.Mesh(new THREE.SphereGeometry(0.15,8,8), new THREE.MeshBasicMaterial({color, transparent:true, opacity:0.9}));
        mesh.position.copy(fromP);
        life=0.18; kind='travel'; baseOpacity=0.9;
        break;
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
  }

  applySelfBuff(buff){
    if(!buff) return;
    const b = this.player.buffs;
    if(buff.type==='shield'){ b.shield = this.player.hpMax * buff.pct; this.toast('Shield aktif!'); }
    else if(buff.type==='haste'){ b.hasteMult = buff.mult; b.hasteTimer = buff.duration; this.player.iFrame = Math.max(this.player.iFrame, buff.iframe||0); }
    else if(buff.type==='ironwill'){ b.defMult = buff.defMult; b.defTimer = buff.duration; b.lifestealPct = buff.lifesteal; b.lifestealTimer = buff.duration; }
  }

  dealDamage(target, skillDef){
    const p = this.player;
    const atk = skillDef.isMagic ? p.magic : p.patk;
    const effCrit = p.critRate + (p.buffs.critBonusTimer>0 ? p.buffs.critBonus : 0);
    const isCrit = Math.random() < effCrit;
    let critMult = isCrit ? p.critDmg : 1;
    if(this.classKey==='Assassin' && target.hp/target.hpMax < 0.5) critMult += (isCrit?0.2:0);

    let dmg = atk * skillDef.mult * critMult * this.comboMultiplier();
    let effDef = target.pdef;
    if(skillDef.defShred) effDef *= (1-skillDef.defShred);
    dmg *= (1 - defenseReduction(effDef));
    if(target.state==='break') dmg *= 1.25;
    if(skillDef.executeBonus && target.hp/target.hpMax < 0.3) dmg *= (1+skillDef.executeBonus);
    dmg = Math.max(1, Math.round(dmg));

    target.hp = Math.max(0, target.hp - dmg);
    if(target.state!=='break'){
      target.poise = Math.max(0, target.poise - dmg*0.6);
      if(target.poise<=0 && target.state!=='dead'){ this.triggerBreak(target); }
    }
    target.hitCooldown = 3;
    const above = target.mesh.position.clone(); above.y += 1.5*(target.data.scale||1);
    this.spawnDamageNumber(above, (isCrit? dmg+'!':dmg), isCrit?'crit':(skillDef.isMagic?'magic':''));

    this.applyEnemyEffect(target, skillDef.effect);
    if(p.buffs.lifestealTimer>0){ this.healPlayer(dmg*p.buffs.lifestealPct, true); }

    if(target.hp<=0 && target.state!=='dead'){ this.killEnemy(target); }
  }

  applySkillDamage(skillDef, isBasic, slotForLevel){
    const p = this.player;
    const lvl = slotForLevel ? p.skillLevels[slotForLevel] : 1;
    const effSkill = Object.assign({}, skillDef, { mult: skillDef.mult>0 ? skillDef.mult*(1+(lvl-1)*0.08) : skillDef.mult });

    if(effSkill.mult<=0){
      this.applySelfBuff(effSkill.selfBuff);
      if(effSkill.fx) this.spawnFX(effSkill.fx, p.mesh.position.clone(), p.mesh.position.clone());
      this.toast(`${effSkill.name}!`);
      return;
    }

    let targets = [];
    if(effSkill.aoe){
      const radius = effSkill.aoeRadius || 4.2;
      targets = this.enemies.filter(e=> e.state!=='dead' && p.mesh.position.distanceTo(e.mesh.position) <= radius);
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

    targets.forEach(t=> this.dealDamage(t, effSkill));
    this.applySelfBuff(effSkill.selfBuff);

    if(effSkill.fx){
      if(effSkill.aoe){
        this.spawnFX(effSkill.fx, p.mesh.position.clone(), targets[0].mesh.position.clone());
      } else {
        this.spawnFX(effSkill.fx, p.mesh.position.clone().setY(1.1), targets[0].mesh.position.clone().setY(1.1));
      }
    }

    p.combo++; p.comboTimer = 2.2;

    if(isBasic){
      this.basicHitCount++;
      if(this.classKey==='Mage' && this.basicHitCount%4===0){ p.mana = Math.min(p.manaMax, p.mana+8); this.toast('Mana Flow: +8 Mana'); }
    } else {
      if(this.classKey==='Archer'){ p.buffs.critBonus=0.08; p.buffs.critBonusTimer=3; }
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
    const p = this.player;
    target.state='dead';
    target.mesh.visible = false;
    document.getElementById('break-banner').style.opacity='0';

    const domainKey = this.currentRun ? this.currentRun.dungeonKey : null;
    const kind = this.currentRun ? this.currentRun.kind : 'story';
    const tier = this.currentRun ? (this.currentRun.tier||1) : 1;

    p.gold += target.data.goldReward;
    this.gainExp(target.data.expReward);
    let extraMsg = '';

    if(kind==='farm' && domainKey==='materialDomain'){
      const lootMult = DomainData.materialDomain.tiers.find(t=>t.level===tier).lootMult;
      const essence = CLASS_ESSENCE[this.classKey];
      p.materials['Skill Book'] = (p.materials['Skill Book']||0)+Math.max(1,Math.round(1*lootMult));
      if(Math.random()<0.6) p.materials[essence] = (p.materials[essence]||0)+Math.max(1,Math.round(2*lootMult));
      if(Math.random()<0.5) p.materials['Iron Ore'] = (p.materials['Iron Ore']||0)+Math.max(1,Math.round(3*lootMult));
      extraMsg = ' +Material';
    } else if(kind==='farm' && domainKey==='artifactDomain'){
      const chance = DomainData.artifactDomain.tiers.find(t=>t.level===tier).artifactChance;
      if(Math.random()<chance){
        const art = generateArtifact(tier);
        p.artifacts.push(art);
        this.toast(`Artifact didapat: ${art.name}!`);
        this.questProgress('getArtifact',1);
      }
    } else if(kind==='farm' && domainKey==='rewardDomain'){
      const lootMult = DomainData.rewardDomain.tiers.find(t=>t.level===tier).lootMult;
      p.gold += Math.round(target.data.goldReward*0.5*lootMult);
      if(Math.random()<0.4){ p.gems += Math.max(1,Math.round(1*lootMult)); this.toast('+'+Math.max(1,Math.round(1*lootMult))+' Gems'); }
    } else {
      if(!target.isBoss && Math.random()<0.4) p.materials['Goblin Tooth'] = (p.materials['Goblin Tooth']||0)+1;
    }

    this.toast(`${target.data.name} dikalahkan! +${target.data.goldReward} Gold, +${target.data.expReward} EXP${extraMsg}`);
    if(target.isBoss) this.toast('+1 Boss Soul');
    if(target.typeKey==='Goblin') this.questProgress('killGoblin',1);

    if(!this.stageActive) return;
    const aliveLeft = this.enemies.filter(e=>e.state!=='dead').length;
    document.getElementById('stage-banner-sub').textContent = target.isBoss ? 'Kalahkan Goblin King!' : `Musuh tersisa: ${aliveLeft}`;

    if(aliveLeft===0){ this.onStageClear(target.isBoss); }
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

  gainExp(amount){
    const p = this.player;
    p.exp += amount;
    let req = requiredExp(p.level);
    let leveled=false;
    while(p.exp >= req){
      p.exp -= req; p.level++; leveled=true;
      const g = this.cdata.growth;
      p.baseHpMax += g.hp; p.baseManaMax += g.mana;
      p.basePatk += (g.patk||0); p.baseMagic += (g.magic||0);
      p.basePdef += g.pdef; p.baseMdef += g.mdef;
      this.recalcStats();
      p.hp = p.hpMax; p.mana = p.manaMax;
      this.flashLevelUp();
      req = requiredExp(p.level);
    }
    if(leveled) this.saveGame();
  }

  flashLevelUp(){
    const el = document.getElementById('level-up-fx');
    el.style.animation='none'; void el.offsetWidth;
    el.style.animation='levelPop 1.6s ease forwards';
  }

  tryAttack(){
    const p = this.player;
    if(p.attackCd>0) return;
    p.attackCd = 1/p.aspd;
    this.applySkillDamage(this.cdata.basic, true, null);
  }

  getEffCooldown(baseCooldown){
    return baseCooldown * (1 - this.player.cdr);
  }

  trySkill(slot){
    const p = this.player, s = this.cdata[slot];
    if(p.cooldowns[slot]>0 || p.mana < s.manaCost) return;
    p.mana -= s.manaCost; p.cooldowns[slot] = this.getEffCooldown(s.cooldown);
    this.applySkillDamage(s, false, slot);
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
    if(e.slowTimer>0) e.slowTimer -= dt; else e.slowValue=0;

    if(e.state==='break'){
      e.breakTimer -= dt;
      if(e.breakTimer<=0){ e.state='chase'; e.poise=e.poiseMax; document.getElementById('break-banner').style.opacity='0'; }
      return;
    }
    if(e.stunTimer>0){ e.stunTimer -= dt; return; }

    if(e.isBoss && e.phase===1 && e.hp/e.hpMax<=0.5){
      e.phase=2; e.patk = Math.round(e.patk*1.2); e.moveSpeed *= 1.1;
      this.toast('⚠️ Goblin King mengamuk!');
    }

    if(e.hitCooldown<=0 && e.poise<e.poiseMax) e.poise = Math.min(e.poiseMax, e.poise + dt*8);

    const dist = e.mesh.position.distanceTo(p.mesh.position);
    const moveSpeed = e.moveSpeed * (1-e.slowValue);
    if(e.state==='idle'){
      if(dist < e.data.detectionRadius) e.state='chase';
    } else if(e.state==='chase'){
      if(dist <= e.data.attackRange){ e.state='attack'; e.attackTimer=0.6; }
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
        e.attackTimer = e.isBoss ? 1.1 : 1.4;
        if(dist > e.data.attackRange+0.3) e.state='chase';
      }
    }
  }

  enemyHitPlayer(e){
    const p = this.player;
    if(p.iFrame>0) { this.spawnDamageNumber(p.mesh.position.clone().setY(1.9), 'DODGE', 'enemy'); return; }
    const effPdef = p.pdef * (p.buffs.defTimer>0 ? p.buffs.defMult : 1);
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
    document.getElementById('buff-row').innerHTML = icons.map(i=>`<div class="buff-icon">${i}</div>`).join('');
  }

  updateEnemyStatusRow(e){
    const chips = [];
    if(e.stunTimer>0) chips.push(`<div class="status-chip stun">STUN</div>`);
    if(e.slowTimer>0) chips.push(`<div class="status-chip slow">SLOW</div>`);
    if(e.dotTimer>0) chips.push(`<div class="status-chip dot">DOT</div>`);
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
    document.getElementById('gold-amt').textContent = p.gold;
    document.getElementById('gems-amt').textContent = p.gems;
    this.updateBuffRow();

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

    this.updateCooldownVisual('slot-attack', p.attackCd, 1/p.aspd);
    this.updateCooldownVisual('slot-skill1', p.cooldowns.skill1, this.getEffCooldown(this.cdata.skill1.cooldown));
    this.updateCooldownVisual('slot-skill2', p.cooldowns.skill2, this.getEffCooldown(this.cdata.skill2.cooldown));
    this.updateCooldownVisual('slot-skill3', p.cooldowns.skill3, this.getEffCooldown(this.cdata.skill3.cooldown));
    this.updateCooldownVisual('slot-ultimate', p.cooldowns.ultimate, this.getEffCooldown(this.cdata.ultimate.cooldown));
    this.updateCooldownVisual('slot-dodge', p.dodgeCd, 2.5);
  }

  update(dt){
    const p = this.player;
    p.attackCd = Math.max(0, p.attackCd-dt);
    p.dodgeCd = Math.max(0, p.dodgeCd-dt);
    p.iFrame = Math.max(0, p.iFrame-dt);
    p.bulwarkCd = Math.max(0, p.bulwarkCd-dt);
    for(const k in p.cooldowns) p.cooldowns[k] = Math.max(0, p.cooldowns[k]-dt);
    if(p.comboTimer>0){ p.comboTimer -= dt; if(p.comboTimer<=0) p.combo=0; }
    if(p.mana < p.manaMax) p.mana = Math.min(p.manaMax, p.mana + (12)*dt);

    const b = p.buffs;
    if(b.hasteTimer>0){ b.hasteTimer -= dt; if(b.hasteTimer<=0) b.hasteMult=1; }
    if(b.defTimer>0){ b.defTimer -= dt; if(b.defTimer<=0){ b.defMult=1; b.lifestealPct=0; } }
    if(b.lifestealTimer>0){ b.lifestealTimer -= dt; }
    if(b.critBonusTimer>0){ b.critBonusTimer -= dt; }

    this.updateDodgeAnim(dt);
    const dodging = p.dodgeAnim && p.dodgeAnim.active;
    const canMove = (this.stageActive || this.inLobby) && !this.panelOpen && !dodging;
    if(canMove) this.updatePlayerMovement(dt);

    this.enemies.forEach(e=> this.updateEnemyAI(dt, e));
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
