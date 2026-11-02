// Shared data for the NYOT live leaderboard + scoring table.
export const FB_CONFIG = {
  apiKey: "AIzaSyCpdJukN1IMRrLg_eQQWj8Ptz0rzOrxFlM",
  authDomain: "msg-tournaments.firebaseapp.com",
  projectId: "msg-tournaments",
  storageBucket: "msg-tournaments.firebasestorage.app",
  messagingSenderId: "205987825862",
  appId: "1:205987825862:web:d20c5e0dd98e3e8eb5afc7"
};
export const EVENT_ID = 'not-your-ordinary-tournament-2026-11-02';
export const PAR = 54;
export const HOLES = [{"n": 1, "name": "Water on the Right", "yds": 152, "ico": "🌊"}, {"n": 2, "name": "Boat House", "yds": 177, "ico": "⛵"}, {"n": 3, "name": "Son of a Slinger", "yds": 140, "ico": "⚓"}, {"n": 4, "name": "Fairway Loser", "yds": 135, "ico": "🦜"}, {"n": 5, "name": "Bogieville", "yds": 175, "ico": "🍹"}, {"n": 6, "name": "Paradise Island", "yds": 135, "ico": "🏝️"}, {"n": 7, "name": "Putt Pete", "yds": 135, "ico": "⛳"}, {"n": 8, "name": "Perfect Lye", "yds": 50, "ico": "🎯"}, {"n": 9, "name": "Lagoon", "yds": 95, "ico": "🐢"}, {"n": 10, "name": "Bye Bye Clubhouse", "yds": 90, "ico": "👋"}, {"n": 11, "name": "Rough to the Left", "yds": 175, "ico": "🌴"}, {"n": 12, "name": "Beach", "yds": 115, "ico": "🏖️"}, {"n": 13, "name": "Fins Up", "yds": 120, "ico": "🦈"}, {"n": 14, "name": "Cheeseburger in Paradise", "yds": 70, "ico": "🍔"}, {"n": 15, "name": "Par Snocker", "yds": 170, "ico": "🐚"}, {"n": 16, "name": "License to Chill", "yds": 100, "ico": "😎"}, {"n": 17, "name": "The Boulevard", "yds": 145, "ico": "🛵"}, {"n": 18, "name": "Money Shots", "yds": 165, "ico": "💰"}];
// Pre-loaded pairings (cart signs). Walk-up teams are added from the scoring page and live only in Firestore.
export const TEAMS = [{"id": "nyot-h01-t1", "hole": 1, "team": 1, "players": ["Don Brady", "Dustin Briskin"]}, {"id": "nyot-h01-t2", "hole": 1, "team": 2, "players": ["Clint Wedgeworth", "Larissa Guerra"]}, {"id": "nyot-h02-t1", "hole": 2, "team": 1, "players": ["Harvey Duke", "Alan Sonnefeld"]}, {"id": "nyot-h02-t2", "hole": 2, "team": 2, "players": ["Curtis Newstrom", "David Carden"]}, {"id": "nyot-h03-t1", "hole": 3, "team": 1, "players": ["Dan Pinnell", "Jeff Clark"]}, {"id": "nyot-h03-t2", "hole": 3, "team": 2, "players": ["Jamie Daspit", "Ronnie Dartez"]}, {"id": "nyot-h04-t1", "hole": 4, "team": 1, "players": ["Mike Cross", "Chad Moore"]}, {"id": "nyot-h04-t2", "hole": 4, "team": 2, "players": ["John Howell", "Clint Rody"]}, {"id": "nyot-h05-t1", "hole": 5, "team": 1, "players": ["Bart Lambert", "George Glidewell"]}, {"id": "nyot-h05-t2", "hole": 5, "team": 2, "players": ["Cody Nann", "Kellan Caldwell"]}, {"id": "nyot-h06-t1", "hole": 6, "team": 1, "players": ["Brian Petrossi", "Jason Petrossi"]}, {"id": "nyot-h06-t2", "hole": 6, "team": 2, "players": ["Ben Friar", "Robert Howard"]}, {"id": "nyot-h07-t1", "hole": 7, "team": 1, "players": ["Gary Cruz", "Mark Williams"]}, {"id": "nyot-h07-t2", "hole": 7, "team": 2, "players": ["John Calhoun", "Jason Hargis"]}, {"id": "nyot-h08-t1", "hole": 8, "team": 1, "players": ["Dave Dawson", "Mike Ogle"]}, {"id": "nyot-h08-t2", "hole": 8, "team": 2, "players": ["Jake Kelly", "Mike Beck"]}, {"id": "nyot-h09-t1", "hole": 9, "team": 1, "players": ["Trey McDaniel", "David Sauceda"]}, {"id": "nyot-h09-t2", "hole": 9, "team": 2, "players": ["Dale Dugas", "Dale Vasek"]}, {"id": "nyot-h10-t1", "hole": 10, "team": 1, "players": ["Chad Erickson", "Coby Chilcoat"]}, {"id": "nyot-h10-t2", "hole": 10, "team": 2, "players": ["Tyson Wethington", "Kenny McGeachie"]}, {"id": "nyot-h11-t1", "hole": 11, "team": 1, "players": ["Andy Rodriguez", "Tony Armenta"]}, {"id": "nyot-h11-t2", "hole": 11, "team": 2, "players": ["Chris Green", "Harvey Ledesma"]}, {"id": "nyot-h12-t1", "hole": 12, "team": 1, "players": ["Brian Neal", "Scott Knee"]}, {"id": "nyot-h12-t2", "hole": 12, "team": 2, "players": ["Chad Golson", "Rob Bair"]}, {"id": "nyot-h13-t1", "hole": 13, "team": 1, "players": ["Dan Kemp", "John Weaver"]}, {"id": "nyot-h13-t2", "hole": 13, "team": 2, "players": ["Chris Schumacher", "Jeff Lee"]}, {"id": "nyot-h14-t1", "hole": 14, "team": 1, "players": ["Brannon King", "Dakota Parsons"]}, {"id": "nyot-h14-t2", "hole": 14, "team": 2, "players": ["Joe Petruzzi", "Carlos Tellez"]}, {"id": "nyot-h15-t1", "hole": 15, "team": 1, "players": ["Shae Burling", "Cody Jeager"]}, {"id": "nyot-h15-t2", "hole": 15, "team": 2, "players": ["Caleb McConnell", "Cody Scott"]}];
export function label(t){ return (t.players || []).filter(Boolean).join(' & ') || t.name || 'Team'; }
export function toPar(total){ const d = total - PAR; return d === 0 ? 'E' : d > 0 ? '+' + d : String(d); }
export function fmtDist(inches){ if(inches == null || inches === '') return ''; const f = Math.floor(inches / 12), i = Math.round(inches % 12); return f ? f + "' " + i + '"' : i + '"'; }
// Merge pre-loaded teams with Firestore docs (Firestore wins; walk-ups appended).
export function mergeTeams(docs){
  const byId = new Map(TEAMS.map(t => [t.id, {...t}]));
  docs.forEach(d => {
    const base = byId.get(d.id) || { id: d.id, hole: d.group, team: d.team || 1, players: d.players || [] };
    byId.set(d.id, {...base, ...d, hole: d.group || base.hole});
  });
  // Day-of change: Mark Williams (h7 T1) and Mike Beck (h8 T2) no-showed, so Gary Cruz + Jake Kelly play as one team.
  // Show it under whichever slot already has a posted score (hole 7 if neither/both); hide the other slot.
  const posted = id => { const t = byId.get(id); return !!(t && t.posted && Number.isFinite(t.total)); };
  for(const m of MERGES){
    const [a, b] = m.slots, keep = (!posted(a) && posted(b)) ? b : a, drop = keep === a ? b : a;
    if(byId.has(keep)) byId.get(keep).players = m.players.slice();
    if(byId.has(drop) && !posted(drop)) byId.delete(drop);
  }
  return [...byId.values()].filter(t => !t.deleted);
}
export const MERGES = [ { slots: ['nyot-h07-t1', 'nyot-h08-t2'], players: ['Gary Cruz', 'Jake Kelly'] } ];
const KEYS = ['total', 'b9', 'b6', 'b3', 'h18'];
// Lower is better. Missing tie-break numbers can't separate teams.
export function cmp(a, b){
  for(const k of KEYS){
    const x = a[k], y = b[k];
    if(x == null || y == null || x === '' || y === '') { if(k === 'total') return (x == null || x === '') - (y == null || y === ''); continue; }
    if(x !== y) return x - y;
  }
  return 0;
}
export function standings(teams){
  const done = teams.filter(t => t.posted && Number.isFinite(t.total)).sort(cmp);
  let rank = 0;
  done.forEach((t, i) => {
    if(i === 0 || cmp(done[i-1], t) !== 0) rank = i + 1;
    t.rank = rank;
  });
  done.forEach((t, i) => { t.tied = done.some(o => o !== t && o.rank === t.rank); });
  const out = teams.filter(t => !(t.posted && Number.isFinite(t.total))).sort((a, b) => a.hole - b.hole || a.team - b.team);
  return { done, out };
}
