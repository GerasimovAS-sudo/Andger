const dlog = (...a) => { try { if (localStorage.getItem('andger_debug') === '1') console.log(...a); } catch (e) {} };
// ═══════════════════════════════════════════════
// ANDGER v2.0 — 16.10.2026
// ═══════════════════════════════════════════════

// ─── SUPABASE ───
const SUPABASE_URL = 'https://cangetbuejkwqgfxpeow.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-gGY5BghNH6nqi4j_wXmpw_xgHjUFax';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// ─── БАЗА SVG-ИКОНОК (Lucide) ───
const SVG_ICONS = {
  'wind': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></svg>',
  'clock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  'search': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  'zap': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  'play': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
  'link': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
  'layout': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
  'user': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  'check-square': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>',
  'brain': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>',
  'book': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
  'sun': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
  'heart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
  'users': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  'sprout': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>',
  'sunrise': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline></svg>',
  'waves': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>',
  'compass': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
  'shield': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
  'sparkles': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>',
  'smile': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>',
  'flame': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  'check-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  'shield-check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
  'camera': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',
  'settings': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  'target': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  'crown': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>'
};

const AVATAR_ICONS = {
  'default': '<svg viewBox="0 0 24 24" fill="url(#gradStarFill)" stroke="url(#gradDefault)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  'planet': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradPlanet)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><ellipse cx="12" cy="12" rx="12" ry="4" transform="rotate(-30 12 12)"></ellipse><circle cx="12" cy="12" r="2"></circle></svg>',
  'crystal': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradCrystal)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9l4-6z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>',
  'flame': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradFlame)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
  'lotus': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradLotus)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c-4.97 0-9-4.03-9-9 0-1.66 1.34-3 3-3 1.66 0 3 1.34 3 3 0-4.97 4.03-9 9-9 4.97 0 9 4.03 9 9 0 1.66-1.34 3-3 3-1.66 0-3-1.34-3-3 0 4.97-4.03 9-9 9z"></path><path d="M12 13c-2.5 0-4.5 2-4.5 4.5 0 0 4.5 2.5 9 0 0-2.5-2-4.5-4.5-4.5z"></path></svg>',
  'moon': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradMoon)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path><path d="M12 3v2M12 19v2"></path></svg>',
  'sun': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradSun)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>',
  'infinity': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradInf)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path></svg>',
  'compass': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradCompass)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
  'shield': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradShield)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
  'leaf': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradLeaf)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>',
  'eye': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradEye)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
  'crown': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradCrown)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path></svg>',
  'bolt': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradBolt)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  'target': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradTarget)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
  'atom': '<svg viewBox="0 0 24 24" fill="none" stroke="url(#gradAtom)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>'
};

// Функция для отрисовки аватарки (теперь поддерживает SVG)
function getAvatarHtml(avatar, size = 24) {
  let content = AVATAR_ICONS[avatar];
  
  // Если ключа нет в базе, проверяем, является ли он эмодзи
  if (!content && avatar) {
    const isEmoji = /^\p{Extended_Pictographic}/u.test(String(avatar));
    if (isEmoji) {
      content = avatar; // Оставляем эмодзи
    }
  }
  
  // Если ключ неизвестен (например, старый 'owl' или 'cat') — принудительно ставим дефолт
  if (!content) content = AVATAR_ICONS['default'];

  // Теперь SVG растягивается на 100% контейнера
  if (typeof content === 'string' && content.trim().startsWith('<svg')) {
    content = content.replace(/<svg([^>]*)>/, (match, attrs) => {
      const cleanAttrs = attrs.replace(/\swidth=(["']).*?\1/gi, '').replace(/\sheight=(["']).*?\1/gi, '');
      const zoom = size > 30 ? '1.2' : '1.15';
      return `<svg${cleanAttrs} width="100%" height="100%" style="display:block; width:100%; height:100%; object-fit:contain; transform: scale(${zoom}); filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));">`;
    });
  }
  
  const paddingValue = '12%';
  const glowStyle = `display:flex; align-items:center; justify-content:center; width:100%; height:100%; padding: ${paddingValue}; box-sizing: border-box; font-size:${size * 0.8}px; line-height:1; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), transparent 70%); border-radius: inherit;`;
  
  return `<span style="${glowStyle}">${content}</span>`;
}

// Функция, которая превращает текст в SVG
function getSvgIcon(name, size = 24, color = 'currentColor') {
  const svgCode = SVG_ICONS[name] || SVG_ICONS['book']; 
  return svgCode.replace('viewBox="0 0 24 24"', `viewBox="0 0 24 24" width="${size}" height="${size}" style="color: ${color};"`);
}
// Функция для генерации красивого цвета на основе названия
function getSmartColor(seedString) {
  const colors = [
    'linear-gradient(135deg, rgba(124,92,255,0.2), rgba(124,92,255,0.05))', // Фиолетовый
    'linear-gradient(135deg, rgba(255,154,86,0.2), rgba(255,154,86,0.05))', // Оранжевый
    'linear-gradient(135deg, rgba(62,207,142,0.2), rgba(62,207,142,0.05))', // Зеленый
    'linear-gradient(135deg, rgba(255,184,0,0.2), rgba(255,184,0,0.05))',   // Золотой
    'linear-gradient(135deg, rgba(79,172,254,0.2), rgba(79,172,254,0.05))', // Голубой
    'linear-gradient(135deg, rgba(240,147,251,0.2), rgba(240,147,251,0.05))' // Розовый
  ];
  const textColors = ['#818cf8', '#ff9d00', '#3ecf8e', '#ffb800', '#4facfe', '#f093fb'];
  
  let hash = 0;
  const str = seedString || 'book';
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return { bg: colors[index], color: textColors[index] };
}

// Универсальная функция для красивых бейджей
function getEmojiOrSvg(emoji, size = 24, seedString = '') {
  if (!emoji || !String(emoji).trim()) emoji = 'book';  
  const style = getSmartColor(seedString || emoji);
  const iconSize = Math.round(size * 0.65); 
  let content = '';

  // Умный словарь для иконок, которые часто присылает ИИ
  const AI_ICON_MAP = {
    'activity': '🏃', 'edit': '📝', 'book-open': '📖', 'brain': '🧠', 'sun': '☀️',
    'moon': '🌙', 'zap': '⚡', 'target': '🎯', 'award': '🏆', 'heart': '❤️',
    'clock': '⏱️', 'coffee': '☕', 'pen': '✍️', 'smile': '😊', 'music': '🎵',
    'star': '⭐', 'shield': '🛡️', 'flame': '🔥', 'wind': '💨', 'eye': '👁️'
  };

  if (emoji && /^\p{Extended_Pictographic}/u.test(String(emoji))) {
    // Если пришел готовый эмодзи
    content = `<span class="emoji-text" style="font-size:${iconSize}px; line-height:1;">${emoji}</span>`;
  } 
  else if (SVG_ICONS[emoji]) {
    // Если есть в наших локальных SVG
    content = getSvgIcon(emoji, iconSize, style.color);
  } 
  else if (AI_ICON_MAP[emoji]) {
    // Если это ИИ-ключ, переводим в эмодзи
    content = `<span class="emoji-text" style="font-size:${iconSize}px; line-height:1;">${AI_ICON_MAP[emoji]}</span>`;
  }
  else {
    // Если вообще ничего не нашли — ставим дефолт
    const fallbacks = ['book', 'sparkles', 'layout', 'brain', 'compass'];
    const hash = Math.abs((seedString || emoji || '').length);
    const fallbackIcon = fallbacks[hash % fallbacks.length];
    content = getSvgIcon(fallbackIcon, iconSize, style.color);
  }

  const borderRadius = Math.round(size * 0.3);

  // УБРАЛИ BORDER ИЗ СТИЛЕЙ
  return `
    <div class="smart-icon-wrap" style="
      width: ${size}px;
      height: ${size}px;
      flex-shrink: 0;
      border-radius: ${borderRadius}px;
      background: ${style.bg};
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      ${content}
    </div>
  `;
}

// Глобальная функция для подсчета опыта и уровня
// Глобальная функция для подсчета опыта и уровня
function getGlobalStats() {
  let totalEarnedXP = 0;
  BOOKS.forEach(bb => {
    const bbs = getBookState(bb.id);
    Object.values(bbs.days).forEach(rec => {
      if(rec.practices) {
        // Если есть earnedXP — берем его, иначе считаем по старинке (для старых юзеров)
        totalEarnedXP += (rec.earnedXP !== undefined) ? rec.earnedXP : (rec.practices.length * 10);
      }
      if(rec.closed) totalEarnedXP += 50;
      if(rec.microActionDone) totalEarnedXP += 5;
    });
  });

  // Вычитаем потраченный опыт ДО расчета уровня
  const availableXP = Math.max(0, totalEarnedXP - (state.spentXP || 0));

  let lvl = 1, lvlName = 'Новичок', lvlIco = '🌱', nextLvlXP = 100, prevLvlXP = 0;
  if (availableXP >= 2000) { lvl = 6; lvlName = 'Легенда'; lvlIco = '👑'; nextLvlXP = 2000; prevLvlXP = 2000; }
  else if (availableXP >= 1000) { lvl = 5; lvlName = 'Мастер'; lvlIco = '🏆'; nextLvlXP = 2000; prevLvlXP = 1000; }
  else if (availableXP >= 600) { lvl = 4; lvlName = 'Опытный'; lvlIco = '💎'; nextLvlXP = 1000; prevLvlXP = 600; }
  else if (availableXP >= 300) { lvl = 3; lvlName = 'Практик'; lvlIco = '🔥'; nextLvlXP = 600; prevLvlXP = 300; }
  else if (availableXP >= 100) { lvl = 2; lvlName = 'Ученик'; lvlIco = '🌿'; nextLvlXP = 300; prevLvlXP = 100; }

  const xpInCurrentLvl = availableXP - prevLvlXP;
  const xpNeededForNext = nextLvlXP - prevLvlXP;
  let xpPct = lvl === 6 ? 100 : Math.min(100, Math.round((xpInCurrentLvl / xpNeededForNext) * 100)) || 0;
  if (xpPct < 0) xpPct = 0;

  return { totalXP: availableXP, totalEarnedXP, lvl, lvlName, lvlIco, xpInCurrentLvl, xpNeededForNext, xpPct };
}

const DEV_WHATSAPP = '79124325556';
const DEV_TELEGRAM = 'Gerasimov_And';

// ─── ГЛОБАЛЬНЫЕ ДАННЫЕ ───
let currentDifficulty = 'normal'; // 'easy', 'normal', 'deep'
let calendarWeekOffset = 0; // 0 - текущая неделя, -1 - прошлая, 1 - следующая
let BOOKS=[], currentBook=null, currentPractice=null, ritualQueue=[], ritualIndex=0;
// ─── ОФИЦИАЛЬНЫЕ КАТЕГОРИИ ANDGER ───
const OFFICIAL_CATEGORIES = [
  "Психология и отношения",
  "Привычки и дисциплина",
  "Продуктивность и фокус",
  "Здоровье и энергия",
  "Финансы и карьера",
  "Духовность и спокойствие",
  "Бизнес и лидерство",
  "Разное"
];
let timerInterval=null, timerRemaining=0, timerState='idle';
let timerTargetTime = 0;
let user=null, state={}, onbIndex=0, statsBookId=null;
let musicAudio=null, ttsAudio=null, syncTimeout=null, isAdminFlag=false, profileHeartbeatTimer=null;
let isVoicePlaying = false;
let completeCallback=null, adminAllUsers=[], adminAllBooks=[];
let adminUserFilter = 'all'; // <--- Добавили переменную для фильтров
let bookDetailId=null, customRitual=[];
let bookDetailSource='lib';
let currentScreen='today';
let currentDialogUserId=null, currentDialogUser=null;
let feedChannel=null, dialogChannel=null, notificationsChannel=null;
let libFilter='all';
let deferredInstallPrompt=null;
let notifications=[];
let globalQuotes=[];
let ritualHowIndex = 0;
let mascotInterval = null; // <--- ДОБАВИТЬ ВОТ ЭТО
let godModeEnabled = false; // автоматически включается для подтверждённого администратора
let currentPracticeRating = 0;
let allPracticeRatings = {}; 
let allBookRatings = {};

const DOW=['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
const MOODS = [
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9l1 1"></path><path d="M15 9l-1 1"></path><line x1="12" y1="15" x2="12" y2="18"></line></svg>`
];

const ONB=[
  {ico:'🌅',title:'Это игра по книгам',body:'<p>Ты не читаешь книги. Ты <strong>играешь в них</strong>. Каждое утро — цепочка практик, и день закрывается сам.</p>'},
  {ico:'📚',title:'Библиотека книг',body:'<p>У тебя может быть <strong>несколько книг одновременно</strong>. У каждой — свои практики, свой прогресс, свой дневник.</p>'},
  {ico:'🔥',title:'Собирай огонь',body:'<p>Каждое закрытое утро = <strong>+1 к огню</strong>. Не разрывай его!</p>'},
  {ico:'🏆',title:'Награды и уровни',body:'<p>За прогресс ты получаешь <strong>награды</strong>. Растёшь в уровнях — от Новичка до Легенды.</p>'},
  {ico:'🚀',title:'Готов?',body:'<p>Начни с первой практики. Жми «Начать» — вперёд.</p>'}
];

const EMOJIS=['👤','😎','🧠','🔥','🌅','⚡','🎯','💪','🦁','🌟','🚀','🎨','🧘','🏆','☀️','🍀'];

const FAQ_GROUPS = [
  {
    title: "🌱 Основы",
    items: [
      {q:'Что такое «закрыть день»?', a:'Если выполнить минимум 60% практик из книги (в «Пути» — пройти узел дня), день считается закрытым. Это +1 к огню.'},
      {q:'Что такое «огонь»?', a:'Это твоя серия: сколько дней подряд закрыт хотя бы один день по любой книге. Если день пропущен, серия прерывается (щит может её сохранить).'},
      {q:'Что такое «свая практика»?', a:'Можно собрать практики из разных книг в одну практику — то, что нужно именно сегодня.'}
    ]
  },
  {
    title: "📈 Прогресс",
    items: [
      {q:'Как добавить книгу?', a:'В библиотеке — кнопка «Все книги». Свой список можно вести через профиль (скоро).'},
      {q:'Куда сохраняются заметки?', a:'Все заметки из практик сохраняются в разделе «Дневник» -> «Мои инсайты».'}
    ]
  },
  {
    title: "👤 Аккаунт",
    items: [
      {q:'Как восстановить пароль?', a:'Кнопка «Забыли пароль?» на экране входа → напиши разработчику в WhatsApp.'}
    ]
  },
  {
    title: "⚙️ Технические",
    items: [
      {q:'Как установить на телефон?', a:'iPhone: Safari → Поделиться → На экран Домой. Android: Chrome → ⋮ → Установить приложение.'},
      {q:'Почему не приходят уведомления?', a:'Включи их в Настройках → Уведомления. На iPhone нужно установить приложение на домашний экран.'}
    ]
  }
];

const ACHIEVEMENTS_GROUPS=[
  {title:'📅 Прогресс по дням',items:[
    {id:'first',ico:'🌟',name:'Первый шаг',desc:'1 день',check:(c,s,e)=>c>=1},
    {id:'three',ico:'🔥',name:'Три дня',desc:'3 подряд',check:(c,s)=>s>=3},
    {id:'early',ico:'🌅',name:'Ранняя пташка',desc:'5 подряд',check:(c,s)=>s>=5,progress:(c,s)=>s+'/5'},
    {id:'week',ico:'⚡',name:'Неделя силы',desc:'7 подряд',check:(c,s)=>s>=7,progress:(c,s)=>s+'/7'},
    {id:'half',ico:'💎',name:'Половина',desc:'15 дней',check:(c,s)=>c>=15,progress:(c,s)=>c+'/15'},
    {id:'month',ico:'👑',name:'Мастер утра',desc:'30 дней',check:(c,s)=>c>=30,progress:(c,s)=>c+'/30',gold:true}
  ]},
  {title:'🎯 За старание',items:[
    {id:'perfect',ico:'🎯',name:'Идеальный день',desc:'Все практики',check:(c,s,e)=>e.perfect},
    {id:'journal10',ico:'📖',name:'Философ',desc:'10 записей',check:(c,s,e)=>e.journal>=10,progress:(c,s,e)=>e.journal+'/10'},
    {id:'century',ico:'💯',name:'Сотка',desc:'100 практик',check:(c,s,e)=>e.practices>=100,progress:(c,s,e)=>e.practices+'/100'}
  ]},
  {title:'🎁 Секрет',items:[
    {id:'secret',ico:'❓',name:'???',desc:'Секретная награда',check:(c,s,e)=>e.perfectStreak>=3,secret:true}
  ]},
  {title:'🏅 Легенда',items:[
    {id:'master',ico:'🏅',name:'Гуру',desc:'Все награды',check:(c,s,e)=>e.otherAch>=10,progress:(c,s,e)=>e.otherAch+'/10',gold:true}
  ]}
];

// ─── УТИЛИТЫ ───
function todayStr(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function localDate(d){
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function escapeHtml(s){
  if (s === null || s === undefined) return '';
  return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function plural(n,one,few,many){
  const m10=n%10,m100=n%100;
  if(m10===1&&m100!==11)return one;
  if(m10>=2&&m10<=4&&(m100<10||m100>=20))return few;
  return many;
}
function parseTimestamp(value) {
  if (!value) return null;
  // Supabase timestamptz should include an offset. Legacy SQL timestamps without one are UTC.
  let raw = String(value).trim();
  if (/^\d{4}-\d{2}-\d{2} \d/.test(raw)) raw = raw.replace(' ', 'T');
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?$/.test(raw)) raw += 'Z';
  const ms = Date.parse(raw);
  return Number.isFinite(ms) ? ms : null;
}
function timeAgo(value){
  const ms = parseTimestamp(value);
  if (ms === null) return 'нет данных';
  const seconds = Math.max(0, Math.floor((Date.now() - ms) / 1000));
  if (seconds < 60) return 'только что';
  if (seconds < 3600) return Math.floor(seconds / 60) + ' мин назад';
  if (seconds < 86400) return Math.floor(seconds / 3600) + ' ч назад';
  if (seconds < 30 * 86400) return Math.floor(seconds / 86400) + ' дн назад';
  return new Date(ms).toLocaleDateString('ru-RU', {day:'2-digit', month:'short', year:'numeric'});
}

function formatTime(sec){
  const m=Math.floor(sec/60),s=sec%60;
  return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}
function updateBottomNav(activePage) {
  const nav = document.getElementById('bottomNav');
  if(nav) { 
    nav.classList.remove('hidden'); 
    nav.style.display = 'flex';
  }
  
  // ✨ Вкладка "Лента" всегда видима. Проверка сработает при клике.
  const communityBtn = document.querySelector('.nav-btn[data-page="community"]');
  if (communityBtn) {
    communityBtn.style.display = 'flex';
  }

  document.querySelectorAll('.nav-btn').forEach(b => {
    if(b.dataset.page === activePage) b.classList.add('on');
    else b.classList.remove('on');
  });
}

// ─── RIPPLE ───
function attachRipple(el,e){
  if(!el||!e)return;
  if(!el.classList.contains('ripple'))el.classList.add('ripple');
  const r=document.createElement('span');
  r.className='ripple-effect';
  const rect=el.getBoundingClientRect();
  const size=Math.max(rect.width,rect.height);
  r.style.width=r.style.height=size+'px';
  r.style.left=(e.clientX-rect.left-size/2)+'px';
  r.style.top=(e.clientY-rect.top-size/2)+'px';
  el.appendChild(r);
  setTimeout(()=>r.remove(),700);
}
function fxKindFor(el){
  if(el.closest('.bottom-nav'))return 'nav';
  const t=el.matches('.d-toggle')?el:(el.hasAttribute('onclick')?el.querySelector('.d-toggle'):null);
  if(t)return t.classList.contains('on')?'toggleOff':'toggleOn';
  if(el.matches('.d-btn-primary,.hero-play,.d-btn-gradient,#mpcStartBtn,[data-fx="confirm"]'))return 'confirm';
  return 'tap';
}
document.addEventListener('click',(e)=>{
  if(!e.isTrusted)return; 
  if(e.target.closest('[data-no-fx]'))return;
  
  // ✨ ЖЕЛЕЗНЫЙ ФИКС ДЛЯ iOS: Принудительно будим AudioContext при каждом клике
  const ctx = getCtx();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume();
  }

  // Ищем ближайший кликабельный элемент
  const btn = e.target.closest('button, a, label, select, summary, [onclick], [role="button"], input[type="checkbox"], input[type="radio"], input[type="range"], .book-row, .nav-btn, .hero-play, .action-btn-compact, .ach-card, .admin-item, .tab-pill, .mood-emoji, .lib-filter, .settings-row, .toggle-row, .fp-action, .d-icon-btn, .d-avatar, .d-toggle, .d-card-glass[onclick], .theme-option, .voice-option');
  if(!btn)return;
  if(btn.disabled||btn.getAttribute('aria-disabled')==='true')return;
  uiFx(fxKindFor(btn));
  attachRipple(btn,e);
},true);

// ─── МУЗЫКА ───
// Разделяем музыку по типам практик
const MUSIC_TRACKS = {
  default: [
    'assets/music/meditation/meditation-1.mp3', 
    'assets/music/meditation/meditation-2.mp3', 
    'assets/music/meditation/meditation-3.mp3',
    'assets/music/meditation/meditation-4.mp3',
    'assets/music/meditation/meditation-5.mp3',
    'assets/music/meditation/meditation-6.mp3',
    'assets/music/meditation/meditation-7.mp3'
  ],
  sport: [
    'assets/music/sport/sport-1.mp3', 
    'assets/music/sport/sport-2.mp3', 
    'assets/music/sport/sport-3.mp3',
    'assets/music/sport/sport-4.mp3',
    'assets/music/sport/sport-5.mp3',
    'assets/music/sport/sport-6.mp3',
    'assets/music/sport/sport-7.mp3'
  ], 
  read: [
    'assets/music/focus/focus-1.mp3', 
    'assets/music/focus/focus-2.mp3', 
    'assets/music/focus/focus-3.mp3',
    'assets/music/focus/focus-4.mp3',
    'assets/music/focus/focus-5.mp3',
    'assets/music/focus/focus-6.mp3',
    'assets/music/focus/focus-7.mp3'
  ], 
  silence: [
    'assets/music/calm/calm-1.mp3', 
    'assets/music/calm/calm-2.mp3', 
    'assets/music/calm/calm-3.mp3',
    'assets/music/calm/calm-4.mp3',
    'assets/music/calm/calm-5.mp3',
    'assets/music/calm/calm-6.mp3',
    'assets/music/calm/calm-7.mp3'
  ] 
};
let currentTrackIdx = 0;
let currentPlaylist = [];

function nextTrack(){
  if(!musicAudio) return;
  if(!currentPlaylist.length) currentPlaylist = MUSIC_TRACKS.default;
  
  currentTrackIdx = (currentTrackIdx + 1) % currentPlaylist.length;
  musicAudio.src = currentPlaylist[currentTrackIdx];
  
  if (state.soundMode === 'sound') {
    musicAudio.volume = 0.01; 
    musicAudio.play().then(() => {
      const targetVol = isVoicePlaying ? 0.15 : 0.3;
      fadeAudio(musicAudio, 0.01, targetVol, 1000);
    }).catch(()=>{});
  } else {
    musicAudio.volume = 0;
  }
}

function stopMusic(withFade = false){
  if(!musicAudio) return;
  try {
    if (withFade) {
      fadeAudio(musicAudio, musicAudio.volume, 0, 1500, () => {
        musicAudio.pause();
        musicAudio.currentTime = 0;
      });
    } else {
      musicAudio.pause();
      musicAudio.currentTime = 0;
      musicAudio.volume = 0;
    }
    isVoicePlaying = false; 
  } catch (e) { console.debug('[ANDGER] ignored:', e); }
}
function fadeAudio(audio, from, to, duration, onEnd) {
  if (!audio) return;
  
  // Очищаем старые таймеры, если они есть
  if (audio._fadeInterval) clearInterval(audio._fadeInterval);
  
  const start = performance.now();
  
  // Используем setInterval вместо requestAnimationFrame (надежнее для iOS)
  audio._fadeInterval = setInterval(() => {
    const now = performance.now();
    const t = Math.min((now - start) / duration, 1);
    
    audio.volume = Math.max(0, Math.min(1, from + (to - from) * t));
    
    if (t >= 1) {
      clearInterval(audio._fadeInterval);
      audio._fadeInterval = null;
      if (onEnd) onEnd();
    }
  }, 50); // Обновляем каждые 50мс
}

// ─── ЗВУКИ И ВИБРАЦИЯ (v4 · premium) ───
// Синтез в реальном времени: стеклянные FM-колокольчики, мягкие «калимба»-щипки, тёплый пэд,
// общая реверберация и стерео-панорама. Без аудиофайлов.
let audioCtx=null, masterBus=null, reverbSend=null, _noiseBuf=null;

function _makeImpulse(ctx){
  const rate=ctx.sampleRate, len=Math.floor(rate*1.5), pre=Math.floor(rate*0.012);
  const buf=ctx.createBuffer(2,len,rate);
  for(let c=0;c<2;c++){
    const d=buf.getChannelData(c); let y=0;
    for(let i=0;i<len;i++){
      if(i<pre){d[i]=0;continue}
      const t=(i-pre)/(len-pre);
      const x=(Math.random()*2-1)*Math.pow(1-t,3.2);
      y+=(0.55-0.47*t)*(x-y);          // чем позже, тем «темнее» хвост
      d[i]=y*1.6;
    }
  }
  return buf;
}
function getCtx(){
  if(!audioCtx || audioCtx.state === 'closed'){
    try{
      const AC=window.AudioContext||window.webkitAudioContext;
      try{audioCtx=new AC({latencyHint:'interactive'})}catch(e){audioCtx=new AC()}
      masterBus=audioCtx.createGain(); masterBus.gain.value=0.85;
      const hp=audioCtx.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=70;
      const comp=audioCtx.createDynamicsCompressor();
      comp.threshold.value=-16; comp.knee.value=18; comp.ratio.value=3.5; comp.attack.value=0.004; comp.release.value=0.16;
      masterBus.connect(hp); hp.connect(comp); comp.connect(audioCtx.destination);
      // Реверберация (общая «комната»)
      const conv=audioCtx.createConvolver(); conv.buffer=_makeImpulse(audioCtx);
      const wet=audioCtx.createGain(); wet.gain.value=0.55;
      reverbSend=audioCtx.createGain(); reverbSend.gain.value=1;
      reverbSend.connect(conv); conv.connect(wet); wet.connect(comp);
    }catch(e){audioCtx=null;return null}
  }
  
  // Принудительно будим контекст, если он уснул
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  
  return audioCtx;
}
function soundEnabled(){
  return state.soundMode ? state.soundMode==='sound' : state.soundOn!==false;
}
function _ready(){
  if(!soundEnabled())return null;
  const ctx=getCtx(); if(!ctx)return null;
  if(ctx.state==='suspended')ctx.resume();
  return ctx;
}
function _route(ctx,node,pan,send){
  let out=node;
  if(pan&&ctx.createStereoPanner){
    const p=ctx.createStereoPanner(); p.pan.value=Math.max(-1,Math.min(1,pan)); node.connect(p); out=p;
  }
  out.connect(masterBus);
  if(send>0){const g=ctx.createGain(); g.gain.value=send; out.connect(g); g.connect(reverbSend);}
}
function _env(g,t0,peak,att,dur){
  g.gain.setValueAtTime(0.0001,t0);
  g.gain.linearRampToValueAtTime(peak,t0+att);
  g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
}
// Щипок (калимба/маримба): чистая синусоида + быстро затухающий обертон
function _pluck(f,dur,vol,at,pan,send){
  const ctx=_ready(); if(!ctx)return;
  const t0=ctx.currentTime+(at||0)+0.005;
  const out=ctx.createGain(); _env(out,t0,vol,0.002,dur);
  const o1=ctx.createOscillator(); o1.type='sine'; o1.frequency.value=f;
  const o2=ctx.createOscillator(); o2.type='sine'; o2.frequency.value=f*4;
  const g2=ctx.createGain(); _env(g2,t0,0.32,0.002,dur*0.28);
  o1.connect(out); o2.connect(g2); g2.connect(out);
  o1.start(t0); o2.start(t0); o1.stop(t0+dur+0.03); o2.stop(t0+dur+0.03);
  _route(ctx,out,pan||0,send==null?0.1:send);
}
// Стеклянный колокольчик (FM-синтез): яркая атака превращается в чистый тающий тон
function _bell(f,dur,vol,at,pan,send,ratio,index){
  const ctx=_ready(); if(!ctx)return;
  const t0=ctx.currentTime+(at||0)+0.005;
  const car=ctx.createOscillator(); car.type='sine'; car.frequency.value=f;
  const mod=ctx.createOscillator(); mod.type='sine'; mod.frequency.value=f*(ratio||3.5);
  const mg=ctx.createGain();
  mg.gain.setValueAtTime(f*(index||1.8),t0);
  mg.gain.exponentialRampToValueAtTime(0.01,t0+dur*0.35);
  mod.connect(mg); mg.connect(car.frequency);
  const body=ctx.createOscillator(); body.type='sine'; body.frequency.value=f*2;
  const bg=ctx.createGain(); _env(bg,t0,vol*0.14,0.004,dur*0.6);
  const out=ctx.createGain(); _env(out,t0,vol,0.003,dur);
  car.connect(out); body.connect(bg); bg.connect(out);
  [car,mod,body].forEach(o=>{o.start(t0);o.stop(t0+dur+0.05)});
  _route(ctx,out,pan||0,send==null?0.3:send);
}
// Короткий «тактильный» щелчок (фильтрованный шум)
function _tick(at,vol,freq,dur,pan){
  const ctx=_ready(); if(!ctx)return;
  if(!_noiseBuf){
    _noiseBuf=ctx.createBuffer(1,Math.floor(ctx.sampleRate*0.25),ctx.sampleRate);
    const d=_noiseBuf.getChannelData(0); for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  }
  const t0=ctx.currentTime+(at||0)+0.005;
  const src=ctx.createBufferSource(); src.buffer=_noiseBuf;
  const bp=ctx.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=freq||4800; bp.Q.value=1.1;
  const g=ctx.createGain(); _env(g,t0,vol,0.0006,dur||0.014);
  src.connect(bp); bp.connect(g); src.start(t0); src.stop(t0+(dur||0.014)+0.02);
  _route(ctx,g,pan||0,0.04);
}
// Мягкий «стук» с падением высоты (для ошибки) — тёплый, не резкий
function _thud(f0,f1,dur,vol,at,pan){
  const ctx=_ready(); if(!ctx)return;
  const t0=ctx.currentTime+(at||0)+0.005;
  const o=ctx.createOscillator(); o.type='sine';
  o.frequency.setValueAtTime(f0,t0); o.frequency.exponentialRampToValueAtTime(f1,t0+dur*0.7);
  const g=ctx.createGain(); _env(g,t0,vol,0.004,dur);
  o.connect(g); o.start(t0); o.stop(t0+dur+0.03);
  _route(ctx,g,pan||0,0.12);
  _tick(at||0,vol*0.35,900,0.02,pan);
}
// Тёплый пэд: пара слегка расстроенных треугольных волн через фильтр, медленная атака
function _pad(freqs,dur,vol,at,send){
  const ctx=_ready(); if(!ctx)return;
  const t0=ctx.currentTime+(at||0)+0.005;
  const lp=ctx.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=1500; lp.Q.value=0.5;
  const out=ctx.createGain(); _env(out,t0,vol,0.22,dur);
  freqs.forEach(f=>{
    [-7,7].forEach(c=>{
      const o=ctx.createOscillator(); o.type='triangle'; o.frequency.value=f; o.detune.value=c;
      o.connect(lp); o.start(t0); o.stop(t0+dur+0.05);
    });
  });
  lp.connect(out); _route(ctx,out,0,send==null?0.35:send);
}
// Совместимость со старым кодом

// ── Вибрация ──
function hapticsEnabled(){
  try{return localStorage.getItem('andger_haptics')!=='off'}catch(e){return true}
}
const HAPTIC_PATTERNS={
  tap:10, nav:14, confirm:[12,35,18], toggleOn:[10,30,16], toggleOff:10,
  success:[14,45,14,45,24], check:[12,35,28],
  error:[35,45,35], fanfare:[14,45,14,45,14,45,40]
};
let _hapEl=null;
function _isIOS(){return /iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)}
// iOS не поддерживает navigator.vibrate — используем лёгкий «тик» системного переключателя (Safari 17.4+)
function _iosTick(){
  try{
    if(!_hapEl){
      const wrap=document.createElement('div');
      wrap.setAttribute('data-no-fx','');wrap.setAttribute('aria-hidden','true');
      wrap.style.cssText='position:fixed;left:-9999px;top:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;';
      const inp=document.createElement('input');inp.type='checkbox';inp.setAttribute('switch','');inp.id='__hapticSwitch';inp.tabIndex=-1;
      const lab=document.createElement('label');lab.htmlFor='__hapticSwitch';
      wrap.appendChild(inp);wrap.appendChild(lab);document.body.appendChild(wrap);
      _hapEl=lab;
    }
    _hapEl.click();
  }catch (e) { console.debug('[ANDGER] ignored:', e); }
}
function haptic(kind){
  if(!hapticsEnabled())return;
  const p=(typeof kind==='string')?HAPTIC_PATTERNS[kind]:kind;
  if(p==null)return;
  if(navigator.vibrate){try{navigator.vibrate(p)}catch (e) { console.debug('[ANDGER] ignored:', e); }return}
  if(_isIOS())_iosTick();
}
function toggleHaptics(){
  const on=!hapticsEnabled();
  try{localStorage.setItem('andger_haptics',on?'on':'off')}catch (e) { console.debug('[ANDGER] ignored:', e); }
  updateHapticUI();
  if(on){haptic('success');playClick()}
}
function updateHapticUI(){
  const t=document.getElementById('hapticToggle');
  if(t)t.classList.toggle('on',hapticsEnabled());
}

// ── Звуки интерфейса ──
// Пентатоника До мажор: любые сочетания звучат гармонично
const N={C4:261.63,E4:329.63,G4:392,C5:523.25,D5:587.33,E5:659.25,G5:783.99,A5:880,B5:987.77,C6:1046.5,D6:1174.66,E6:1318.51,G6:1567.98,C7:2093};
function _sound(kind){
  const j = 1 + (Math.random() - 0.5) * 0.005; // Микро-вариация, чтобы звук не приедался
  
  switch(kind){
    case 'tap':
      // Мягкий, бархатный клик (как по стеклу)
      _pluck(N.C5 * j, 0.08, 0.035, 0, 0, 0.1); 
      break;
      
    case 'nav':
      // Плавный переход по вкладкам (две ноты)
      _pluck(N.G4 * j, 0.15, 0.04, 0, 0, 0.15); 
      _pluck(N.C5 * j, 0.2, 0.035, 0.04, 0, 0.15); 
      break;
      
    case 'confirm':
      // Нажатие на главную кнопку (Глубокий колокольчик)
      _bell(N.C5 * j, 0.6, 0.05, 0, 0, 0.4); 
      _bell(N.E5 * j, 0.6, 0.04, 0.05, 0, 0.4); 
      break;
      
    case 'toggleOn':
      _pluck(N.E5 * j, 0.1, 0.04, 0, 0, 0.1); 
      _pluck(N.A5 * j, 0.15, 0.03, 0.05, 0, 0.1); 
      break;
      
    case 'toggleOff':
      _pluck(N.A5 * j, 0.1, 0.03, 0, 0, 0.1); 
      _pluck(N.E5 * j, 0.15, 0.025, 0.05, 0, 0.1); 
      break;
      
    case 'success':
      // ЗВУК УСПЕХА (Вход, Завершение практики). 
      // Красивый, медленный аккорд Cmaj9 (До-Ми-Соль-Си-Ре)
      _pad([N.C4, N.G4], 1.5, 0.02, 0); // Мягкий теплый фон
      _bell(N.E5 * j, 1.2, 0.05, 0, -0.2, 0.4); 
      _bell(N.G5 * j, 1.2, 0.04, 0.1, 0.2, 0.4); 
      _bell(N.B5 * j, 1.4, 0.04, 0.2, -0.1, 0.4); 
      _bell(N.D6 * j, 1.5, 0.03, 0.3, 0.1, 0.4); 
      break;
      
    case 'check':
      // Отметка выполнения (короткая, но приятная)
      _bell(N.G5 * j, 0.5, 0.05, 0, 0, 0.3); 
      _bell(N.C6 * j, 0.8, 0.04, 0.08, 0, 0.35); 
      break;
      
    case 'error':
      // Ошибка (Не резкая, а мягкая, глубокая)
      _thud(160, 100, 0.25, 0.08, 0, 0); 
      break;
      
    case 'fanfare':
      // Огромный праздник (Конец книги / Идеальный день)
      _pad([N.C4, N.E4, N.G4], 2.5, 0.03, 0, 0.4);
      [N.C5, N.E5, N.G5, N.C6].forEach((f, i) => _bell(f * j, 1.5, 0.06, i * 0.15, -0.3 + i * 0.2, 0.5));
      [N.E6, N.G6].forEach((f, i) => _bell(f * j, 1.2, 0.03, 0.6 + i * 0.1, 0, 0.5));
      break;
  }
}
// Единая точка: звук + вибрация. Защита от «двойного клика» (глобальный слушатель + свой вызов в обработчике)
let _lastTapFx=0;
const _TAP_KINDS={tap:1,nav:1,confirm:1,toggleOn:1,toggleOff:1};
function uiFx(kind){
  const now=performance.now();
  if(_TAP_KINDS[kind]){
    if(now-_lastTapFx<80)return;
    _lastTapFx=now;
  }
  _sound(kind);
  haptic(kind);
}
function playClick(){uiFx('tap')}
function playSuccess(){uiFx('success')}
function playError(){uiFx('error')}
function playCheck(){uiFx('check')}
function playFanfare(){uiFx('fanfare')}

// ─── ДИАЛОГИ ПОДТВЕРЖДЕНИЯ И ВВОДА ───
// Заменяет нативные confirm()/prompt() единым интерфейсом приложения.
function appDialog({ title = 'Подтверждение', message = '', confirmText = 'Продолжить', cancelText = 'Отмена', input = false, placeholder = '', initialValue = '' } = {}) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'app-dialog-overlay';
    overlay.setAttribute('role', 'presentation');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:1000000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(8,6,16,.72);backdrop-filter:blur(8px);';

    const panel = document.createElement('section');
    panel.className = 'app-dialog';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', title);
    panel.style.cssText = 'width:min(100%,420px);padding:22px;background:var(--card,#211a32);color:var(--text,#f4f0ff);border:1px solid var(--border,rgba(255,255,255,.14));border-radius:20px;box-shadow:0 24px 80px rgba(0,0,0,.45);';

    const heading = document.createElement('h3');
    heading.textContent = title;
    heading.style.cssText = 'margin:0 0 10px;font-size:18px;font-weight:800;';
    const copy = document.createElement('p');
    copy.textContent = message;
    copy.style.cssText = 'margin:0 0 18px;color:var(--muted,#b8b0ca);font-size:14px;line-height:1.5;white-space:pre-wrap;';
    panel.append(heading);
    if (message) panel.append(copy);

    let field = null;
    if (input) {
      field = document.createElement('textarea');
      field.value = initialValue;
      field.placeholder = placeholder;
      field.rows = 3;
      field.setAttribute('aria-label', placeholder || 'Введите текст');
      field.style.cssText = 'display:block;width:100%;box-sizing:border-box;resize:vertical;margin:0 0 18px;padding:12px;border-radius:12px;border:1px solid var(--border,rgba(255,255,255,.16));background:var(--card2,#171222);color:var(--text,#f4f0ff);font:inherit;';
      panel.append(field);
    }

    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex;justify-content:flex-end;gap:10px;flex-wrap:wrap;';
    const makeButton = (label, primary) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = label;
      button.style.cssText = `min-height:40px;padding:10px 16px;border-radius:12px;border:1px solid ${primary ? 'transparent' : 'var(--border,rgba(255,255,255,.16))'};background:${primary ? 'linear-gradient(135deg,var(--accent,#7c5cff),var(--accent-2,#a78bfa))' : 'var(--card2,#171222)'};color:var(--text,#f4f0ff);font:inherit;font-weight:700;cursor:pointer;`;
      return button;
    };
    const cancel = makeButton(cancelText, false);
    const accept = makeButton(confirmText, true);
    actions.append(cancel, accept);
    panel.append(actions);
    overlay.append(panel);
    document.getElementById('modalsRoot').append(overlay);

    let finished = false;
    const finish = value => {
      if (finished) return;
      finished = true;
      document.removeEventListener('keydown', onKeyDown, true);
      overlay.remove();
      resolve(value);
    };
    const onKeyDown = event => {
      if (event.key === 'Escape') { event.preventDefault(); finish(input ? null : false); }
      if (event.key === 'Enter' && !input) { event.preventDefault(); finish(true); }
      if (event.key === 'Enter' && input && !event.shiftKey) { event.preventDefault(); finish(field.value.trim() || null); }
    };
    cancel.addEventListener('click', () => finish(input ? null : false));
    accept.addEventListener('click', () => finish(input ? (field.value.trim() || null) : true));
    overlay.addEventListener('click', event => { if (event.target === overlay) finish(input ? null : false); });
    document.addEventListener('keydown', onKeyDown, true);
    (field || accept).focus();
  });
}

function appConfirm(message, title = 'Подтверждение', confirmText = 'Подтвердить') {
  return appDialog({ title, message, confirmText });
}

function appPrompt(message, placeholder = 'Введите текст') {
  return appDialog({ title: 'Введите данные', message, input: true, placeholder, confirmText: 'Отправить' });
}

// ─── TOAST ───
function toast(msg,type='success'){
  const d=document.createElement('div');
  d.className='andger-toast '+type;
  
  let svgIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  if(type === 'danger') {
    svgIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 6-12 12m0-12 12 12"/></svg>';
  } else if(type === 'warm') {
    svgIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>';
  }

  const iconWrap = document.createElement('div');
  iconWrap.className = 'andger-toast-icon';
  iconWrap.innerHTML = svgIcon;

  const textWrap = document.createElement('div');
  textWrap.className = 'andger-toast-text';
  textWrap.textContent = msg;

  d.appendChild(iconWrap);
  d.appendChild(textWrap);
  
  // Функция плавного удаления
  const dismissToast = () => {
    d.style.animation = 'andgerToastOut 0.3s cubic-bezier(0.4, 0, 1, 1) forwards';
    setTimeout(() => d.remove(), 300);
  };

  d.onclick = dismissToast;

  // --- ЛОГИКА СВАЙПА ВВЕРХ ---
  let startY = 0;
  let currentY = 0;
  let isSwiping = false;

  d.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    isSwiping = true;
    d.style.transition = 'none'; // Отключаем анимацию для мгновенного отклика
  }, { passive: true });

  d.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;
    
    // Двигаем только вверх (отрицательный deltaY)
    if (deltaY < 0) {
      d.style.transform = `translateX(-50%) translateY(${deltaY}px) scale(${Math.max(0.8, 1 + (deltaY / 300))})`;
      d.style.opacity = Math.max(0, 1 + (deltaY / 150));
    }
  }, { passive: true });

  d.addEventListener('touchend', () => {
    if (!isSwiping) return;
    isSwiping = false;
    const deltaY = currentY - startY;

    // Если свайпнули больше чем на 40 пикселей вверх — закрываем
    if (deltaY < -40) {
      d.style.transition = 'all 0.2s ease-out';
      d.style.transform = `translateX(-50%) translateY(-100px) scale(0.8)`;
      d.style.opacity = '0';
      setTimeout(() => d.remove(), 200);
    } else {
      // Иначе возвращаем на место с пружинкой
      d.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      d.style.transform = 'translateX(-50%) translateY(0) scale(1)';
      d.style.opacity = '1';
    }
  });

  document.body.appendChild(d);
  
  // Авто-скрытие через 3.5 секунды
  setTimeout(()=>{
    if(document.body.contains(d)) dismissToast();
  }, 3500);
}
// ─── Универсальное копирование (работает и на HTTP) ───
function copyToClipboard(text){
  // Попытка 1: современный API
  if(navigator.clipboard&&window.isSecureContext){
    return navigator.clipboard.writeText(text).catch(()=>fallbackCopy(text));
  }
  // Попытка 2: старый способ
  fallbackCopy(text);
}
function fallbackCopy(text){
  const ta=document.createElement('textarea');
  ta.value=text;
  ta.style.position='fixed';
  ta.style.opacity='0';
  ta.style.left='-9999px';
  document.body.appendChild(ta);
  ta.select();
  try{
    document.execCommand('copy');
  }catch (e) { console.debug('[ANDGER] ignored:', e); }
  document.body.removeChild(ta);
}

// ─── SPLASH ───
function setSplashProgress(pct){
}
function hideLoader(){
  const l = document.getElementById('appLoader');
  if(l){
    l.style.display = 'none'; // Жестко скрываем, чтобы не перекрывал лендинг
    l.classList.add('hide');
    setTimeout(() => l.remove(), 100);
  }
  document.body.classList.remove('app-loading');
}
function randomSplashQuote(){
  // Пул: ваши цитаты (из админки и «авторская» заставки) вперемешку с цитатами из книг приложения
  const pool = [{ text: 'Мы — то, что мы делаем постоянно. Совершенство — не действие, а привычка.', author: 'Андрей Герасимов' }];
  if (typeof appTexts !== 'undefined' && appTexts['splash_quote']) pool.push({ text: appTexts['splash_quote'], author: appTexts['splash_author'] || '' });
  let g = (typeof globalQuotes !== 'undefined' && globalQuotes && globalQuotes.length) ? globalQuotes : [];
  if (!g.length) { try { g = JSON.parse(localStorage.getItem('andger_gq') || '[]'); } catch (e) { g = []; } }
  g.forEach(q => { if (q && q.text) pool.push({ text: q.text, author: q.author || '' }); });
  (typeof BOOKS !== 'undefined' ? BOOKS : []).forEach(b => (b.quotes || []).forEach(q => { if (q && q.text) pool.push({ text: q.text, author: q.author || b.author || '' }); }));
  if (!pool.length) return;
  let i = Math.floor(Math.random() * pool.length);
  try { const last = Number(localStorage.getItem('andger_sq')); if (pool.length > 1 && i === last) i = (i + 1) % pool.length; localStorage.setItem('andger_sq', String(i)); } catch (e) {}
  const q = pool[i], qEl = document.getElementById('ldQuote'), aEl = document.getElementById('ldQuoteAuthor');
  if (qEl && qEl.childNodes[0]) qEl.childNodes[0].nodeValue = q.text;
  if (aEl) aEl.textContent = q.author ? '— ' + String(q.author).toUpperCase() : '';
}

// ─── ИНИЦИАЛИЗАЦИЯ ───
window.addEventListener('DOMContentLoaded', async()=>{
  document.body.classList.add('app-loading');
  dlog('🚀 ANDGER init starting');

  const minSplashTime = new Promise(resolve => setTimeout(resolve, 6000));

  try {
    BOOKS = [];
    try { randomSplashQuote(); } catch (e) { console.debug('[ANDGER] ignored:', e); }

    const initPromise = (async () => {
      const { data: { session } } = await sb.auth.getSession();
      const isPublic = await handlePublicProfileUrl();
      
      if (!isPublic) {
        if (session) {
          try {
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 8000));
            await Promise.race([handleSession(session), timeoutPromise]);
          } catch(e) {
            console.error('❌ Ошибка загрузки сессии:', e.message);
            if(!state.onboarded) showOnboarding();
            else if (BOOKS.length > 0) { currentBook = BOOKS[0]; showTodayScreen(); }
            else showLibrary();
          }
        } else {
          showLanding();
        }
      }
    })();

    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 8000));
    await Promise.race([initPromise, timeoutPromise]);

  } catch(e) {
    console.error('❌ Init error:', e);
    } finally {
    await minSplashTime;
    hideLoader();
    
    // ЖЕСТКАЯ СТРАХОВКА ДЛЯ МОБИЛЬНЫХ: Принудительно прячем загрузку через 10 секунд
    setTimeout(() => {
      if (document.getElementById('appLoader')) {
        console.warn('⚠️ Принудительное скрытие загрузчика по таймауту (плохой интернет)');
        hideLoader();
        if (document.getElementById('landingScreen').classList.contains('hidden') && 
            document.getElementById('authScreen').classList.contains('hidden') && 
            document.getElementById('todayScreen').classList.contains('hidden')) {
          showLanding();
        }
      }
    }, 10000);

    // СТРАХОВКА: Если экран пустой, принудительно показываем лендинг
    setTimeout(() => {
      const visibleScreens = document.querySelectorAll('#landingScreen:not(.hidden), #authScreen:not(.hidden), #todayScreen:not(.hidden), #libScreen:not(.hidden), #onbScreen:not(.hidden)');
      if (visibleScreens.length === 0) {
        dlog('⚠️ Экран пуст, принудительно показываем лендинг.');
        showLanding();
      }
    }, 500);
    
    dlog('🏁 Splash hidden');
  }
});

sb.auth.onAuthStateChange((event)=>{
  if(event==='SIGNED_OUT'){
    if(profileHeartbeatTimer){clearInterval(profileHeartbeatTimer);profileHeartbeatTimer=null;}
    user=null;state={};currentBook=null;
    if(feedChannel)sb.removeChannel(feedChannel);
    if(dialogChannel)sb.removeChannel(dialogChannel);
    if(notificationsChannel)sb.removeChannel(notificationsChannel);
    hideLoader();showAuth();
  }
});

async function handleSession(session) {
  const email=session.user.email;
  const phone=email.replace('@vnedri.app','');
  user={id:session.user.id,phone,email,name:session.user.user_metadata?.name||'Друг'};

  // Безопасное обновление профиля (без ошибки 403)
  try {
    const { error } = await sb.from('profiles').update({ 
      phone: phone,
      last_seen: new Date().toISOString()
    }).eq('id', user.id);
    
    if (error) console.warn('Ошибка обновления профиля:', error.message);
  } catch (err) {
    console.warn('Ошибка сети:', err.message);
  }
  setSplashProgress(50);
  const{data:profile}=await sb.from('profiles').select('*').eq('id',user.id).single();
  if(profile){
    if(profile.blocked){
      hideLoader();
      toast('🚫 Аккаунт заблокирован.\n\nПричина: '+(profile.blocked_reason||'Нарушение правил'));
      await sb.auth.signOut();return;
    }
    user.name=profile.name||user.name;
    user.lastName=profile.last_name||'';
    user.sub_until = profile.sub_until || null;
    state.avatar=profile.avatar||'default';
    state.voice = profile.voice || 'auto'; // <--- ДОБАВИЛИ ЭТУ СТРОКУ
    // Поддерживаем старую настройку и добавляем новую
    state.soundMode = profile.sound_mode || (profile.sound_on !== false ? 'sound' : 'off');
    state.soundOn = (state.soundMode === 'sound');
    isAdminFlag=profile.is_admin===true;
    state.onboarded=profile.onboarded===true;
    state.lastBook=profile.last_book||null;
    state.bookAccess=profile.book_access||[];
    state.migrated=profile.migrated===true;
    state.slug=profile.public_slug||null;
    state.referralCode=profile.referral_code||null;
    state.theme=profile.theme||'dark';
    state.shields = profile.shields || 0;
    state.spentXP = profile.spent_xp || 0;
    state.spentXP = profile.spent_xp || 0;
    state.purchasedItems = profile.purchased_items || [];
  }else{
  state.soundOn = true;
  state.soundMode = 'sound';
  state.avatar = 'default';
  state.theme = 'dark';
  state.voice = 'auto'; // <--- ДОБАВИЛИ ЭТУ СТРОКУ
  }
  setSplashProgress(70);
  // Эти запросы независимы: выполняем параллельно, чтобы не складывать их задержки.
  await Promise.allSettled([loadAppSettings(), loadProgress()]);
  if(!state.migrated) await migrateLocalData();
  // Сохраняем часовой пояс пользователя для правильной отправки Push-уведомлений
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  sb.from('profiles').update({ timezone: userTimeZone }).eq('id', user.id).then(()=>{});

  // Ждем только книги (они нужны для Главного экрана)
  await loadBooksFromSupabase();
  
  // А уведомления, цитаты и тексты загружаем в фоне, чтобы не тормозить вход
  Promise.allSettled([
    loadNotifications(),
    loadQuotes(),
    loadAppTexts()
  ]);
  setSplashProgress(90);

  applyTheme();
  subscribeNotifications();

  // Обновляем статус реже и только когда вкладка видима.
  // Перед запуском очищаем предыдущий таймер, чтобы не копить интервалы.
  if(profileHeartbeatTimer) clearInterval(profileHeartbeatTimer);
  profileHeartbeatTimer = setInterval(() => {
    if(document.visibilityState === 'visible' && user && user.id) {
      sb.from('profiles').update({last_seen: new Date().toISOString()}).eq('id',user.id).then(()=>{});
    }
  }, 5 * 60 * 1000);

  if(!state.onboarded) {
    showOnboarding();
  } else {
    // Принудительно сбрасываем экраны на Главную при входе
    currentScreen = 'today'; 
    if (BOOKS.length > 0) {
      currentBook = BOOKS.find(b => b.id === state.lastBook) || BOOKS[0];
      showTodayScreen();
    } else {
      showLibrary();
    }
  }
  
  // hideLoader(); <--- УДАЛИЛИ ИЛИ ЗАКОММЕНТИРОВАЛИ ЭТУ СТРОКУ
}

async function loadAppSettings(){
  try{
    const{data}=await sb.from('app_settings').select('*').eq('key','book_access_mode').maybeSingle();
    if(data&&data.value){
      bookAccessMode=(typeof data.value==='string')?data.value.replace(/"/g,''):data.value;
    }
  }catch (e) { console.debug('[ANDGER] ignored:', e); }
}

async function loadQuotes(){
  try{
    const{data}=await sb.from('quotes').select('*').eq('active',true).order('sort_order');
    globalQuotes=data||[];
  }catch(e){globalQuotes=[]}
}

let appTexts = {}; // Глобальная переменная для текстов

async function loadAppTexts() {
  try {
    const { data } = await sb.from('ui_texts').select('*');
    if (data) {
      data.forEach(item => appTexts[item.key] = item.value);
    }
  } catch(e) { dlog('Ошибка загрузки текстов', e); }
}

async function loadBooksFromSupabase(){
  try{
    const{data}=await sb.from('books').select('*').eq('published',true);
    if(!data||!data.length)return;
    
    // Сначала быстро заполняем список книг
    data.forEach(sbBook=>{
      const idx=BOOKS.findIndex(b=>b.id===sbBook.id);
      const normalized={
        id:sbBook.id,emoji:sbBook.emoji,title:sbBook.title,author:sbBook.author,
        days:sbBook.days,about:sbBook.about,method:sbBook.method||[],
        authorBio:sbBook.author_bio,forWhom:sbBook.for_whom,result:sbBook.result,
        category: sbBook.category || 'Разное',
        practices: (sbBook.practices && sbBook.practices.length > 0) ? sbBook.practices : (BOOKS[idx]?.practices || []),
        quotes: (sbBook.quotes && sbBook.quotes.length > 0) ? sbBook.quotes : (BOOKS[idx]?.quotes || []),
        
        // НОВЫЕ ПОЛЯ С ЗАГЛУШКАМИ (если в БД пусто, не упадет)
        summary: sbBook.summary || [],
        lumi_tips: sbBook.lumi_tips || [],
        identity: sbBook.identity || '',
        voice_settings: sbBook.voice_settings || null,
        cover_url: sbBook.cover_url || null, // Умная обложка
        format: sbBook.format || 1,
        path: sbBook.path || null,
        
        _fromSupabase:true
      };
      if(idx>=0)BOOKS[idx]={...BOOKS[idx],...normalized};
      else BOOKS.push(normalized);
    });

    // ✨ ФИКС: Рейтинги грузим в фоне, чтобы не тормозить вход
    (async () => {
      try {
        const { data: rData } = await sb.from('practice_ratings').select('practice_id, rating');
        if (rData) {
          let sums = {}; let counts = {};
          rData.forEach(r => {
            sums[r.practice_id] = (sums[r.practice_id] || 0) + r.rating;
            counts[r.practice_id] = (counts[r.practice_id] || 0) + 1;
          });
          for (let pid in sums) allPracticeRatings[pid] = sums[pid] / counts[pid];
        }
        const { data: revData } = await sb.from('reviews').select('book_id, stars');
        if (revData) {
          let sums = {}; let counts = {};
          revData.forEach(r => {
            sums[r.book_id] = (sums[r.book_id] || 0) + r.stars;
            counts[r.book_id] = (counts[r.book_id] || 0) + 1;
          });
          for (let bid in sums) allBookRatings[bid] = sums[bid] / counts[bid];
        }
      } catch(e) { console.warn('Ошибка загрузки рейтингов', e); }
    })();
  }catch(e){ console.error('Ошибка загрузки книг:', e); }
}

async function migrateLocalData(){
  try{
    const legacy=localStorage.getItem('vnedri_state');
    if(legacy){
      const old=JSON.parse(legacy);
      if(old&&old.books){
        Object.keys(old.books).forEach(bookId=>{
          if(!state.books[bookId]||Object.keys(state.books[bookId].days||{}).length===0){
            state.books[bookId]=old.books[bookId];
          }
        });
      }
      if(old.avatar&&state.avatar==='👤')state.avatar=old.avatar;
    }
    state.migrated=true;
    saveState();
    await syncProgress();
    sb.from('profiles').update({migrated:true}).eq('id',user.id).then(()=>{});
  }catch (e) { console.debug('[ANDGER] ignored:', e); }
}

async function loadProgress(){
  // 1. Сначала берем данные из памяти телефона (LocalStorage) — это мгновенно
  try {
    const localState = localStorage.getItem('andger_current_state');
    if (localState) {
      const parsed = JSON.parse(localState);
      if (parsed.books) state.books = parsed.books;
    }
  } catch (e) { console.debug('[ANDGER] ignored:', e); }

  // 2. Пытаемся обновить с сервера, но ждем не больше 3 секунд
  try {
    const fetchPromise = sb.from('progress').select('*').eq('user_id',user.id);
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 3000));
    
    const response = await Promise.race([fetchPromise, timeoutPromise]);
    
    if (response.error) throw response.error; // Если база вернула ошибку — идем в catch
    
    const data = response.data;
    if (data && data.length > 0) {
      state.books = {};
      data.forEach(row=>{
        state.books[row.book_id] = row.data || {start:null, days:{}, journal:{}};
      });
    }
  } catch(e) {
    dlog('Сервер не ответил за 3 секунды, используем локальные данные');
  }
  
  if(state.soundOn===undefined) state.soundOn=true;
  if(state.avatar===undefined) state.avatar='👤';
  if(!state.books) state.books = {};
}

async function syncProgress(changedBookId = null){
  if(!user||!state.books)return;
  
  // Если передали ID книги, синхронизируем ТОЛЬКО её. Если нет — все.
  const booksToSync = changedBookId ? [changedBookId] : Object.keys(state.books);
  
  const rows=booksToSync
    .filter(bookId => !bookId.startsWith('__preview_'))
    .map(bookId=>({
      user_id:user.id,book_id:bookId,
      data:state.books[bookId],
      updated_at:new Date().toISOString()
    }));
    
  if(rows.length)await sb.from('progress').upsert(rows,{onConflict:'user_id,book_id'});
  
  await sb.from('profiles').update({
    name:user.name,avatar:state.avatar,
    sound_on: state.soundMode === 'sound',
    sound_mode: state.soundMode,
    onboarded:state.onboarded===true,
    last_book:state.lastBook||null,
    last_seen:new Date().toISOString(),
    shields: state.shields || 0,
    spent_xp: state.spentXP || 0
  }).eq('id',user.id);
}
function saveState(changedBookId = null){
  // 1. Оптимизированное сохранение в память телефона
  try {
    const localState = JSON.parse(JSON.stringify(state));
    
    if (localState.books) {
      const optimizedBooks = {};
      // Оставляем только текущую книгу и те, где есть реальная активность
      Object.keys(localState.books).forEach(bookId => {
        const bookState = localState.books[bookId];
        if (bookId === state.lastBook || (bookState.start && Object.keys(bookState.days || {}).length > 0)) {
           optimizedBooks[bookId] = bookState;
        }
      });
      localState.books = optimizedBooks;
    }
    
    localStorage.setItem('andger_current_state', JSON.stringify(localState));
  } catch (e) {
    console.warn('⚠️ LocalStorage переполнен. Экстренная очистка.', e);
    // Экстренный сброс: если места совсем нет, сохраняем ТОЛЬКО текущую книгу
    try {
      const minimalState = { ...state, books: {} };
      if (state.lastBook && state.books[state.lastBook]) {
        minimalState.books[state.lastBook] = state.books[state.lastBook];
      }
      localStorage.setItem('andger_current_state', JSON.stringify(minimalState));
    } catch (e2) {
      console.error('Критическая ошибка: не удалось сохранить даже минимальный стейт', e2);
    }
  }

  // 2. Отправляем на сервер с задержкой
  if(syncTimeout) clearTimeout(syncTimeout);
  syncTimeout = setTimeout(() => syncProgress(changedBookId), 1500);
}

// ─── ОФФЛАЙН ОЧЕРЕДЬ ───
const OFFLINE_QUEUE_KEY = 'andger_offline_queue';

function addToOfflineQueue(actionType, payload) {
  const queue = JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY) || '[]');
  queue.push({ type: actionType, payload, timestamp: Date.now() });
  localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(queue));
}

async function processOfflineQueue() {
  const queue = JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY) || '[]');
  if (!queue.length || !user || !navigator.onLine) return;
  
  dlog(`[ANDGER] Найдено ${queue.length} оффлайн-действий. Синхронизация...`);
  let successCount = 0;
  const remainingQueue = [];
  
  for (const item of queue) {
    try {
      if (item.type === 'note') {
        const { error } = await sb.from('notes').insert(item.payload);
        if (error) throw error;
        successCount++;
      } else if (item.type === 'journal') {
        const { error } = await sb.from('journals').upsert(item.payload, { onConflict: 'user_id,date' });
        if (error) throw error;
        successCount++;
      }
    } catch (e) {
      console.warn('[ANDGER] Не удалось отправить элемент из очереди, оставляем на потом:', e);
      remainingQueue.push(item); 
    }
  }
  
  localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(remainingQueue));
  
  if (successCount > 0) {
    playSuccess();
    toast(`✅ Синхронизировано ${successCount} записей`, 'success');
    if (currentScreen === 'journal') renderJournal(); // Обновляем экран, если мы в дневнике
  }
}

// ─── ЭКРАНЫ ───
function cleanupRealtimeSubscriptions(){
  // Закрываем только канал диалога, так как он уникален для каждого собеседника
  try { if (typeof dialogChannel !== 'undefined' && dialogChannel) { sb.removeChannel(dialogChannel); dialogChannel = null; } } catch (e) { console.warn('[ANDGER] dialog cleanup', e); }
  timerState = 'idle'; 
  timerRemaining = 0;
}

function hideAll(){
  document.body.classList.remove('app-focus-mode');
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
  // При смене экрана очищаем ресурсы предыдущего экрана. Прогресс таймера остаётся в timerRemaining.
  try { if (typeof timerInterval !== 'undefined' && timerInterval) { clearInterval(timerInterval); timerInterval = null; } } catch(e) { console.warn('[ANDGER] Очистка таймера:', e); }
  try { if (typeof breathTimer !== 'undefined' && breathTimer) { clearInterval(breathTimer); breathTimer = null; } } catch(e) { console.warn('[ANDGER] Очистка дыхательного таймера:', e); }
  try { if (typeof stopMusic === 'function') stopMusic(); } catch(e) { console.warn('[ANDGER] Остановка музыки:', e); }

  ['landingScreen','authScreen','onbScreen','welcomeScreen','libScreen','todayScreen',
   'statsScreen','journalScreen','communityScreen','profileScreen',
   'publicProfileScreen','adminScreen','bookDetailScreen','ritualBuilderScreen',
   'ritualScreen','practiceScreen','completeOverlay','settingsScreen',
   'helpScreen','notificationsScreen','dialogScreen','bookEditorScreen',
   'premiumScreen', 'shopScreen' // <--- ДОБАВИЛИ ЭТУ СТРОКУ
  ].forEach(id=>{
    const el=document.getElementById(id);
    if(el){
      el.classList.add('hidden');
      // Root screens must be hidden by the shared .hidden class, not stale inline display values.
      el.style.removeProperty('display');
    }
  });
    // Скрываем зависшие модальные слои при смене раздела.
  document.querySelectorAll('#modalsRoot .modal, #modalsRoot .complete-overlay, .app-dialog-overlay').forEach(el => {
    el.classList.add('hidden');
    el.style.removeProperty('display');
    if (el.classList.contains('app-dialog-overlay')) el.remove(); // Полностью удаляем кастомные окна
  });
  const bn=document.getElementById('bottomNav');
  if(bn) { bn.classList.add('hidden'); bn.style.display = 'none'; }
  const fi=document.getElementById('feedInputWrap');if(fi)fi.style.display='none';
  const di=document.getElementById('dialogInputWrap');if(di)di.style.display='none';
    
  window.scrollTo(0,0);
}
function showAuth(){
  hideAll();
  document.getElementById('authScreen').classList.remove('hidden');
  // Убрали жесткое скрытие, теперь работает через классы
}
function showOnboarding(){
  hideAll();
  onbIndex=0;
  renderOnb();
  document.getElementById('onbScreen').classList.remove('hidden');
  updateSoundUI();
}
function showWelcome(){
  hideAll();
  const b=BOOKS[0];if(!b)return smartHome();
  document.getElementById('welcomeName').textContent='Добро пожаловать, '+(user.name||'Друг')+'!';
  
  // Меняем textContent на innerHTML и используем нашу умную функцию
  document.getElementById('welcomeBookIco').innerHTML = getEmojiOrSvg(b.emoji, 72, b.title);
  
  document.getElementById('welcomeBookTitle').textContent=b.title;
  document.getElementById('welcomeBookAuthor').textContent=b.author+' · '+b.days+' дней';
  document.getElementById('welcomeScreen').classList.remove('hidden');
}
function startFirstBook(){const b=BOOKS[0];if(!b)return;openBookDetail(b.id)}
function skipWelcome(){showLibrary()}

function showLibrary(){
  dlog('Открываем библиотеку...'); 
  currentScreen='lib';
  hideAll();
  
  const lib = document.getElementById('libScreen');
  if(lib) {
    lib.classList.remove('hidden'); 
  }
  
  const nav = document.getElementById('bottomNav');
  if(nav) {
    nav.classList.remove('hidden');
    nav.style.removeProperty('display');
  }
  
  updateBottomNav('lib');
    
  renderLibrary();
  updateSoundUI();
}
function showTodayScreen(){
  currentScreen='today';
  if(!currentBook)return smartHome();
  state.lastBook=currentBook.id;saveState();
  hideAll();
  
  const todayScr = document.getElementById('todayScreen');
  if(todayScr) todayScr.classList.remove('hidden');
  
  const bn = document.getElementById('bottomNav');
  if(bn) bn.classList.remove('hidden'); // Показываем меню, если оно есть
  
  updateBottomNav('today');
  applyShields(currentBook.id); 
  
  renderToday();
  updateSoundUI();
  checkInstallBanner();
  updateNotifBadge();
  
  // ✨ АВТОМАТИЧЕСКИЙ ВЫЗОВ ОТЧЕТА РАЗ В НЕДЕЛЮ
  setTimeout(checkWeeklyReview, 1500); 

  // Запускаем смену советов маскота ТОЛЬКО на главном экране
  if (mascotInterval) clearInterval(mascotInterval);
  mascotInterval = setInterval(() => {
    if (currentScreen === 'today') {
      const bubbleText = document.getElementById('lumiTip');
      const bubble = document.getElementById('andgerBubble');
      if (bubbleText && bubble) {
        const tips = [
          "Не забывай делать паузы.", "Твоя энергия заразительна!", "Один шаг сегодня — уже движение.",
          "Маленькие шаги создают большие перемены.", "Фокус — это твоя суперсила.", "Продолжай в том же духе!",
          "Вода и сон — твои лучшие друзья.", "Дыши глубже. Всё идёт по плану."
        ];
        let newTip = tips[Math.floor(Math.random() * tips.length)];
        if (newTip !== bubbleText.textContent) {
          bubbleText.textContent = newTip;
          bubble.classList.remove('animate-in');
          void bubble.offsetWidth;
          bubble.classList.add('animate-in');
        }
      }
    }
  }, 15000);

  // ✨ Запускаем проверку на сгоревший огонь
  setTimeout(checkStreakLoss, 1500);
}

// ✨ МЯГКИЙ РЕЖИМ ПРИ СГОРАНИИ СЕРИИ
function checkStreakLoss() {
  if (!currentBook) return;
  const bs = getBookState(currentBook.id);
  if (!bs.start) return;

  const today = todayStr();
  // Ключ, чтобы не спамить пользователя этим окном каждый раз
  const msgKey = 'andger_streak_msg_' + currentBook.id + '_' + today;
  
  if (localStorage.getItem(msgKey)) return;

  const streak = calcStreak(currentBook.id);
  
  // Если огонь сгорел (0), но книга была начата не сегодня
  if (streak === 0 && bs.start < today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = localDate(yesterday);
    const yRec = bs.days[yStr];
    
    // Проверяем, что вчера не было закрыто и не было заморозки
    if (!yRec || (!yRec.closed && !yRec.shielded)) {
      
      appDialog({
        title: 'Твой огонь погас 🍃',
        message: 'Но это абсолютно нормально. Привычки — это марафон, а не спринт. Главное — вернуться в игру. Начнем заново сегодня?',
        confirmText: 'Зажечь снова 🔥',
        cancelText: 'Позже'
      }).then((confirmed) => {
        if (confirmed) {
          playSuccess();
          startRitual(); // Сразу запускаем практику
        }
      });
      
      localStorage.setItem(msgKey, '1');
    }
  }
}

// Функция проверки: не пора ли показать отчет
function checkWeeklyReview() {
  if (!user || !BOOKS.length) return;
  
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Воскресенье, 1 = Понедельник
  
  // Показываем только в ВС или ПН
  if (dayOfWeek !== 0 && dayOfWeek !== 1) return;

  // Формируем уникальный ключ для этой недели (Год-Неделя)
  const firstJan = new Date(now.getFullYear(), 0, 1);
  const weekNumber = Math.ceil((((now - firstJan) / 86400000) + firstJan.getDay() + 1) / 7);
  const reviewKey = `andger_review_${now.getFullYear()}_${weekNumber}`;

  // Если мы уже показывали отчет на этой неделе — выходим
  if (localStorage.getItem(reviewKey)) return;

  // Показываем отчет и ставим метку
  showWeeklyReview();
  localStorage.setItem(reviewKey, 'shown');
}
function showStatsScreen(){
  currentScreen='stats';
  const fullName = user.name || 'Друг';
  const sName = document.getElementById('statsName');
  if (sName) sName.textContent = fullName;
  currentScreen='stats';
  if(!currentBook&&BOOKS.length)currentBook=BOOKS[0];
  if(!currentBook)return showLibrary();
  statsBookId=state.lastBook||currentBook.id;
  hideAll();
  document.getElementById('statsScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('stats');
  renderStatsScreen();updateSoundUI();
}
function showJournalScreen(){
  currentScreen='journal';
  hideAll();
  document.getElementById('journalScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('journal');

  // --- ДОБАВЛЯЕМ ИМЯ И ФАМИЛИЮ ---
  const nameEl = document.getElementById('journalBookTitle');
  const fullName = (user && user.name) ? (user.name + (user.lastName ? ' ' + user.lastName : '')) : 'Друг';
  if (nameEl) nameEl.textContent = fullName;
  // ----------------------------------
  renderJournal();updateSoundUI();
}
async function showCommunityScreen(){
  currentScreen='community';
  const fullName = user.name || 'Друг';
  const cName = document.getElementById('communityName');
  if (cName) cName.textContent = fullName;
  hideAll();
  document.getElementById('communityScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('community');
  document.getElementById('communityAvatar').innerHTML=getAvatarHtml(state.avatar, 26);
  document.getElementById('feedInputWrap').style.display='flex';
  updateSoundUI();
  await loadFeed();
  subscribeFeed();
}
function showRitualBuilderScreen(){
  hideAll();
  document.getElementById('ritualBuilderScreen').classList.remove('hidden');
  
  // Показываем нижнее меню, чтобы кнопка «Запустить» висела над ним
  const nav = document.getElementById('bottomNav');
  if(nav) {
    nav.classList.remove('hidden');
    nav.style.display = 'flex';
  }
}
function backFromRitualBuilder(){smartHome()}

let profilePrev='today';
async function showProfile(){
  try {
    dlog('Открываем профиль...'); 
    const active=document.querySelector('.nav-btn.on');
    if(active) profilePrev=active.dataset.page||'today';
    
    hideAll();
    document.getElementById('profileScreen')?.classList.remove('hidden');
    document.getElementById('bottomNav')?.classList.remove('hidden');
    updateBottomNav('profile'); // <--- ДОБАВИЛИ ЭТУ СТРОКУ
    
    await renderProfile(); // Ждем, пока данные загрузятся
    
    checkAdminAccess();
    updateSoundUI();
    
    window.scrollTo(0,0); 
    
    dlog('✅ showProfile done');
    setTimeout(() => window.scrollTo(0, 0), 10);
  } catch(e) {
    console.error('❌ Profile Error:', e);
    toast('Ошибка профиля: ' + e.message);
    smartHome(); 
  }
}
function backFromProfile(){
  if(profilePrev==='lib')showLibrary();
  else if(profilePrev==='stats')showStatsScreen();
  else if(profilePrev==='community')showCommunityScreen();
  else if(profilePrev==='admin')showAdmin();
  else smartHome();
}
function goToRating() {
  showCommunityScreen();
  setTimeout(() => {
    switchCommunityTab('people', document.querySelectorAll('.tab-pill')[2]);
  }, 100);
}

function backFromStats(){ showProfile(); }
function backFromJournal(){smartHome()}
function backFromPublicProfile(){

  if (profileSource === 'chat') {
    document.getElementById('publicProfileScreen')?.classList.add('hidden');
    document.getElementById('dialogScreen')?.classList.remove('hidden');
  } else if (profileSource === 'profile') {
    showProfile();
  } else if (profileSource === 'people') {
    showCommunityScreen();
    // Переключаем вкладку на "Сообщество"
    switchCommunityTab('people', document.querySelectorAll('.tab-pill')[2]);
  } else if (profileSource === 'chats') {
    showCommunityScreen();
    // Переключаем вкладку на "Сообщения"
    switchCommunityTab('chats', document.querySelectorAll('.tab-pill')[1]);
  } else {
    showCommunityScreen(); // Если пришли из ленты
  }
}
function showSettings(){
  hideAll();
  document.getElementById('settingsScreen').classList.remove('hidden');
  renderSettings();
}
function backFromSettings(){showProfile()}
function showHelp(){
  hideAll();
  document.getElementById('helpScreen').classList.remove('hidden');
  renderHelp();
}
function backFromHelp(){showProfile()}
async function showNotifications(){
  hideAll();
  document.getElementById('notificationsScreen').classList.remove('hidden');
  
  await loadNotifications();
  renderNotifications();
}
async function markAllNotificationsRead() {
  try {
    await sb.from('notifications').update({read: true}).eq('user_id', user.id).eq('read', false);
    await loadNotifications(); // Обновляем бейджик на колокольчике
    renderNotifications(); // Перерисовываем список
    playSuccess();
    toast('Все уведомления прочитаны');
  } catch(e) {
    toast('Ошибка', 'danger');
  }
}

async function clearAllNotifications() {
  legacyConfirmAdapter('Очистить уведомления?', 'Все уведомления будут удалены навсегда.', async () => {
    try {
      await sb.from('notifications').delete().eq('user_id', user.id);
      await loadNotifications(); 
      renderNotifications();     
      playSuccess();
      toast('Уведомления очищены');
    } catch(e) {
      toast('Ошибка очистки', 'danger');
    }
  });
}

function backFromNotifications(){smartHome()}
function backFromDialog(){
  cleanupRealtimeSubscriptions(); // Очищаем канал чата при выходе
  showCommunityScreen();
}
function backFromCommunity(){ smartHome(); }

function navTo(page,el){
  if (typeof haptic === 'function') haptic('nav');
  
  // Проверяем доступ к Сообществу
  if(page === 'community') {
    const stats = getGlobalStats();
    if (stats.totalClosed >= 3 || isAdmin()) { // <--- Добавили isAdmin()
      showCommunityScreen();
    } else {
      // Показываем красивое окно-заглушку
      document.getElementById('communityLockedModal').classList.remove('hidden');
      playClick();
    }
    return;
  }

  if(page==='lib')showLibrary();
  else if(page==='today')smartHome();
  else if(page==='stats')showStatsScreen();
  else if(page==='journal')showJournalScreen();
}

function smartHome(){
  if(!BOOKS.length)return showLibrary();
  if(state.lastBook){
    const b=BOOKS.find(x=>x.id===state.lastBook);
    if(b){
      const bs=getBookState(b.id);
      if(bs.start&&countClosedDays(b.id)<b.days){currentBook=b;return showTodayScreen()}
    }
  }
  for(const b of BOOKS){
    const bs=getBookState(b.id);
    if(bs.start&&countClosedDays(b.id)<b.days){currentBook=b;return showTodayScreen()}
  }
  for(const b of BOOKS){
    const bs=getBookState(b.id);
    if(!bs.start||countClosedDays(b.id)<b.days){currentBook=b;return showTodayScreen()}
  }
  showLibrary();
}

// ─── STATE ───
function getBookState(id){
  if(!state.books)state.books={};
  if(!state.books[id])state.books[id]={start:null,days:{},journal:{}};
  if(!state.books[id].journal)state.books[id].journal={};
  return state.books[id];
}
let bookAccessMode='everyone'; // 'everyone' или 'individual'

function hasBookAccess(id){
  // 1. Если в настройках включен режим "Всем открыто" (для тестов)
  if (typeof bookAccessMode !== 'undefined' && bookAccessMode === 'everyone') return true;

  // 2. Админу доступно всё
  if(isAdmin()) return true;

  // 3. Если есть активная подписка — доступно всё
  if(user && user.sub_until && new Date(user.sub_until) > new Date()) return true;
  
  // 4. Индивидуальный доступ (если ты выдал книгу вручную в Админке)
  const access = state.bookAccess || [];
  if (access.includes(id)) return true;

  // 5. Проверяем флаг в базе данных (приходит из Supabase)
  const book = BOOKS.find(b => b.id === id);
  if (book && book.is_free === true) return true;

  // 6. Старый хардкод (оставляем на случай, если база еще не обновилась)
  const freeBooks = ['magic-morning', 'magic_morning', 'atomic-habits'];
  if (freeBooks.includes(id)) return true;

  // Всё остальное закрыто
  return false;
}

function toggleSound(){
  const newState = state.soundMode !== 'sound';
  state.soundMode = newState ? 'sound' : 'off';
  state.soundOn = newState;
  
  saveState();
  updateSoundUI();
  sb.from('profiles').update({ sound_on: state.soundOn, sound_mode: state.soundMode }).eq('id',user.id).then(()=>{});

   if (state.soundMode === 'sound') {
    playClick();
    if (musicAudio) {
      if (musicAudio.paused) {
        // Если музыка была на паузе (потому что мы выключали звук)
        // Проверяем, идет ли сейчас практика, чтобы не включить музыку на главном экране
        const isPracticeActive = timerState === 'running' || timerState === 'paused' || document.body.classList.contains('app-focus-mode');
        
           if (isPracticeActive && musicAudio.src) {
          // Включаем воспроизведение с того же места (currentTime сохранился при pause)
          musicAudio.play().then(() => {
            const targetVol = isVoicePlaying ? 0.05 : 0.3;
            fadeAudio(musicAudio, 0, targetVol, 500); // Плавно поднимаем громкость с нуля
          }).catch(e => dlog('Ошибка возобновления музыки:', e));
        }
      } else {
        // Музыка играет, просто меняем громкость
        const targetVol = isVoicePlaying ? 0.05 : 0.3;
        fadeAudio(musicAudio, musicAudio.volume, targetVol, 500);
      }
    }
    if (ttsAudio) {
      ttsAudio.volume = 1;
      // Включаем голос, ТОЛЬКО если он не закончился
      if (ttsAudio.paused && ttsAudio.currentTime > 0 && ttsAudio.src && ttsAudio.currentTime < (ttsAudio.duration || 0) - 0.5) {
        isVoicePlaying = true; 
        ttsAudio.play().catch(() => { isVoicePlaying = false; }); 
      }
    }
  } else {
    isVoicePlaying = false; // <--- СБРАСЫВАЕМ ФЛАГ ГОЛОСА
    if (musicAudio) {
      fadeAudio(musicAudio, musicAudio.volume, 0, 250, () => {
        if(state.soundMode === 'off' && musicAudio) musicAudio.pause();
      });
    }
    if (ttsAudio) {
      ttsAudio.volume = 0;
      ttsAudio.pause();
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }
}

function updateSoundUI(){
  const isSound = state.soundMode === 'sound';
  const tog = document.getElementById('soundToggle');
  if(tog) tog.classList.toggle('on', isSound);
  
  const soundBtns = document.querySelectorAll('.sound-btn');
  const iconOn = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;
  const iconOff = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;

  soundBtns.forEach(btn => {
    btn.innerHTML = isSound ? iconOn : iconOff;
  });
}

// ─── ОНБОРДИНГ ───
function renderOnb(){
  const s = ONB[onbIndex];
  const stepNum = onbIndex + 1;
  const title = appTexts['onb_step' + stepNum + '_title'] || s.title;
  const text = appTexts['onb_step' + stepNum + '_text'] || s.body.replace(/<[^>]*>/g, ''); 

  document.getElementById('onbContent').innerHTML =
    `<div class="onb-ico">${s.ico}</div><h2>${title}</h2><p>${text}</p>`;
  document.getElementById('onbDots').innerHTML=
    ONB.map((_,i)=>`<div class="onb-dot ${i===onbIndex?'on':''}"></div>`).join('');
  document.getElementById('onbBack').classList.toggle('hidden',onbIndex===0);
  document.getElementById('onbNext').textContent=
    onbIndex===ONB.length-1?'Начать путь 🚀':'Далее';
}
function onbNext(){
  if(onbIndex<ONB.length-1){onbIndex++;renderOnb()}
  else{state.onboarded=true;saveState();showWelcome()}
}
function onbPrev(){if(onbIndex>0){onbIndex--;renderOnb()}}

// ─── ВХОД ───
let authMode='login';
function switchTab(mode){
  authMode=mode;
  const cf=document.getElementById('consentField'); if(cf) cf.classList.toggle('hidden',mode!=='reg');
  document.getElementById('tabLogin').classList.toggle('on',mode==='login');
  document.getElementById('tabReg').classList.toggle('on',mode==='reg');
  document.getElementById('authBtn').textContent=mode==='login'?'Войти':'Зарегистрироваться';
  document.getElementById('authErr').textContent='';
  
  const isReg = mode === 'reg';
  document.getElementById('nameField').style.display = isReg ? 'block' : 'none';
}
document.addEventListener('input',(e)=>{
  if(e.target.id==='phone')formatPhoneInput(e.target);
  if(e.target.classList.contains('error'))e.target.classList.remove('error');
});
function formatPhoneInput(el){
  let v=el.value.replace(/\D/g,'');
  if(v.startsWith('8'))v='7'+v.slice(1);
  if(!v.startsWith('7'))v='7'+v;
  v=v.slice(0,11);
  let out='+7';
  if(v.length>1)out+=' '+v.slice(1,4);
  if(v.length>=4)out+=' '+v.slice(4,7);
  if(v.length>=7)out+='-'+v.slice(7,9);
  if(v.length>=9)out+='-'+v.slice(9,11);
  el.value=out;
}
function normalizePhone(v){return v.replace(/\D/g,'')}

async function doAuth(){
  const phoneRaw=document.getElementById('phone').value;
  const pass=document.getElementById('password').value;
  const nameInp=document.getElementById('name').value.trim();
  const err=document.getElementById('authErr');
  const btn=document.getElementById('authBtn');
  const phoneEl=document.getElementById('phone');
  const passEl=document.getElementById('password');
  const phone=normalizePhone(phoneRaw);
  const email=phone+'@vnedri.app';
  err.textContent='';
  if(phone.length!==11){showError('Введите номер полностью',phoneEl);return}
  if(pass.length<6){showError('Пароль минимум 6 символов',passEl);return}
  if(authMode==='reg'&&!nameInp){showError('Введите имя',document.getElementById('name'));return}
  if(authMode==='reg'&&!document.getElementById('consentChk').checked){showError('Подтвердите согласие с условиями и обработкой данных',document.getElementById('consentChk'));return}
  btn.disabled=true;btn.textContent='Входим...';
  
  try{
    if(authMode==='reg'){
        const nameParts = nameInp.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' '); 
        const{data,error}=await sb.auth.signUp({email,password:pass,options:{data:{name:firstName, last_name:lastName, consent_at:new Date().toISOString(), consent_version:LEGAL_VERSION, age_confirmed_16:true}}});
      if(error){
        showError(error.message.includes('already')?'Номер уже зарегистрирован':'Ошибка регистрации');
        btn.disabled=false;btn.textContent='Зарегистрироваться';return;
      }
      if(data.session)await handleSession(data.session);
      else{
        const{data:d2,error:e2}=await sb.auth.signInWithPassword({email,password:pass});
        if(e2){showError('Войдите с паролем');authMode='login';switchTab('login')}
        else await handleSession(d2.session);
      }
      playSuccess();
        }else{
      const loginPromise = sb.auth.signInWithPassword({email,password:pass});
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 30000));
      
      const {data, error} = await Promise.race([loginPromise, timeoutPromise]);
      
      if(error){
        showError(error.message.includes('Invalid')?'Неверный номер или пароль':'Ошибка входа',phoneEl,passEl);
        btn.disabled=false;btn.textContent='Войти';return;
      }
      playSuccess();await handleSession(data.session);
    }
  }catch(e){
    console.error('Ошибка входа:', e);
    if (e.message === 'Timeout') {
      showError('Сервер не отвечает. Проверьте интернет.');
    } else if (e.message && e.message.includes('not defined')) {
      showError('Ошибка в коде приложения. Загляните в консоль.');
    } else {
      showError('Ошибка соединения или сбой приложения.');
    }
  }
  btn.disabled=false;
  btn.textContent=authMode==='login'?'Войти':'Зарегистрироваться';
}
function showError(msg,...els){
  const err=document.getElementById('authErr');
  err.textContent=msg;playError();
  els.forEach(el=>{
    if(el){el.classList.add('error');setTimeout(()=>el.classList.remove('error'),600)}
  });
  clearTimeout(window._errTimeout);
  window._errTimeout=setTimeout(()=>{err.textContent=''},4000);
}

function showForgotPassword(){
  document.getElementById('forgotModal').classList.remove('hidden');
}

// ─── СБРОС ПАРОЛЯ ───
let resetPhoneNumber = '';

async function sendResetSms() {
  const phoneRaw = document.getElementById('resetPhone').value;
  const phone = normalizePhone(phoneRaw);
  const btn = document.getElementById('resetBtn');
  
  if (phone.length !== 11) {
    toast('Введите номер полностью', 'danger');
    return;
  }
  
  btn.disabled = true;
  btn.textContent = 'Отправка...';
  
  try {
    const { error } = await sb.auth.signInWithOtp({
      phone: '+' + phone,
    });
    
    if (error) throw error;
    
    resetPhoneNumber = '+' + phone;
    playSuccess();
    toast('Код отправлен на ваш номер!');
    
    // Показываем окно для ввода кода
    document.getElementById('forgotModal').classList.add('hidden');
    document.getElementById('verifyCodeModal').classList.remove('hidden');
    document.getElementById('verifyCodeInput').value = '';
    
  } catch (e) {
    console.error(e);
    toast('Ошибка: ' + e.message, 'danger');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Отправить код';
  }
}

async function verifyResetCode() {
  const code = document.getElementById('verifyCodeInput').value.trim();
  const newPass = document.getElementById('newPasswordInput').value;
  const btn = document.getElementById('verifyCodeBtn');

  if (code.length < 4) return toast('Введите код из СМС', 'danger');
  if (newPass.length < 6) return toast('Пароль минимум 6 символов', 'danger');

  btn.disabled = true;
  btn.textContent = 'Проверка...';

  try {
    // 1. Проверяем код
    const { data, error } = await sb.auth.verifyOtp({
      phone: resetPhoneNumber,
      token: code,
      type: 'sms'
    });

    if (error) throw error;

    // 2. Меняем пароль
    const { error: updateError } = await sb.auth.updateUser({
      password: newPass
    });

    if (updateError) throw updateError;

    playSuccess();
    toast('Пароль успешно изменен!');
    document.getElementById('verifyCodeModal').classList.add('hidden');
    
    // Выходим, чтобы пользователь зашел с новым паролем
    await sb.auth.signOut();
    showAuth();
    
  } catch (e) {
    console.error(e);
    toast('Неверный код или ошибка: ' + e.message, 'danger');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Подтвердить';
  }
}
function showContactMenu(){document.getElementById('contactModal').classList.remove('hidden')}
function contactWhatsApp(){
  window.open('https://wa.me/'+DEV_WHATSAPP+'?text='+encodeURIComponent('Привет! Хочу связаться по поводу ANDGER'),'_blank');
}
function contactTelegram(){
  window.open('https://t.me/'+DEV_TELEGRAM,'_blank');
}
async function contactInApp(){
  document.getElementById('contactModal').classList.add('hidden');
  try{
    const{data}=await sb.from('profiles').select('id,name,avatar').eq('is_admin',true).limit(1);
    if(data && data.length > 0){
      openDialog(data[0].id, {name: data[0].name || 'Разработчик', avatar: data[0].avatar || '👤'});
    }else{
      toast('Разработчик не найден','danger');
    }
  }catch(e){
    toast('Ошибка соединения','danger');
  }
}

function contactDev(){showContactMenu()}

async function logout(){
  if(!(await appConfirm('Выйти? Прогресс сохранится.', 'Выход', 'Выйти')))return;
  await syncProgress();
  await sb.auth.signOut();
}
function isAdmin(){return isAdminFlag}
function checkAdminAccess(){
  const b=document.getElementById('adminBtnProfile');
  if(b)b.classList.toggle('hidden',!isAdmin());  
}
function shareApp(){
  const url='https://andger.ru/';
  if(navigator.share) {
    navigator.share({title:'ANDGER',text:'Практикум по книгам',url});
  } else {
    copyToClipboard(url); // Используем нашу универсальную функцию
    toast('Ссылка скопирована');
  }
}

// ─── УСТАНОВКА ───
function isStandalone(){
  return window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
}
function detectOS(){
  const ua=navigator.userAgent;
  if(/iPad|iPhone|iPod/.test(ua))return 'ios';
  if(/Android/i.test(ua))return 'android';
  return 'desktop';
}
function checkInstallBanner(){
  if(isStandalone())return;
  const dismissed=localStorage.getItem('install_dismissed');
  if(dismissed)return;
  const os=detectOS();
  if(os==='desktop')return;
  const el=document.getElementById('installBanner');
  if(!el)return;
  
  // Показываем баннер для iOS всегда, а для Android — только если есть системный промпт
  if (os === 'ios' || (os === 'android' && deferredInstallPrompt)) {
    el.innerHTML=`
      <div class="install-banner" onclick="triggerInstall()" style="cursor:pointer">
        <div class="ib-ico">📱</div>
        <div class="ib-body">
          <h4>Установи ANDGER</h4>
          <p>${os==='ios' ? 'Safari → Поделиться → На экран Домой' : 'Нажми сюда, чтобы установить'}</p>
        </div>
        <button class="ib-close" onclick="event.stopPropagation(); dismissInstall()">✕</button>
      </div>`;
  } else {
    el.innerHTML = ''; // Если на Android нет промпта, просто не показываем
  }
}
function dismissInstall(){
  localStorage.setItem('install_dismissed','1');
  const el=document.getElementById('installBanner');
  if(el)el.innerHTML='';
}
function showInstallInstructions(){
  const os=detectOS();
  let html='';
  if(os==='ios'){
    html='<b>iPhone / iPad:</b><br>1. Открой ANDGER в <b>Safari</b><br>2. Нажми <b>«Поделиться»</b> (квадрат со стрелкой)<br>3. Прокрути → <b>«На экран Домой»</b><br>4. Нажми <b>«Добавить»</b>';
  }else if(os==='android'){
    html='<b>Android:</b><br>1. Открой ANDGER в <b>Chrome</b><br>2. Нажми <b>⋮</b> (три точки справа вверху)<br>3. Выбери <b>«Установить приложение»</b><br>4. Нажми <b>«Установить»</b>';
  }else{
    html='Открой ANDGER на телефоне:<br>• <b>iPhone</b> → Safari → Поделиться → На экран Домой<br>• <b>Android</b> → Chrome → ⋮ → Установить приложение';
  }
  document.getElementById('installInstructions').innerHTML=html;
  document.getElementById('installModal').classList.remove('hidden');
}

// beforeinstallprompt — Android
window.addEventListener('beforeinstallprompt',(e)=>{
  e.preventDefault();
  deferredInstallPrompt=e;
});
async function triggerInstall(){
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt=null;
  }else{
    showInstallInstructions();
  }
}

function renderToday() {
  const todayAvaEl = document.getElementById('todayAvatar');
  if(todayAvaEl) todayAvaEl.innerHTML = getAvatarHtml(state.avatar, 26);
  
  const fullName = user.name || 'Друг';
  // Обновляем XP и Огонь в шапке
  const stats = getGlobalStats();
  const cardFire = document.getElementById('cardFire');
  const cardXP = document.getElementById('cardXP');
    if (cardFire) {
    const streak = calcStreak(currentBook.id);
    cardFire.textContent = isNaN(streak) ? 0 : streak;
  }
  if (cardXP) cardXP.textContent = stats.totalXP;
  const todayNameEl = document.getElementById('todayName');
  if (todayNameEl) todayNameEl.textContent = fullName;

  if (!currentBook) return;
  const b = currentBook, bs = getBookState(b.id);
  const day = currentDay(b.id), date = dateByDay(b.id, day);
  const todayRec = bs.days[date] || {practices:[]};
  const todayCount = (todayRec.practices||[]).length;
  const total = b.practices.length;
  const isDayClosed = Boolean(todayRec.closed) || (total > 0 && todayCount >= total);

  // 1. Карточка книги и кольца
  const mpcBookTitle = document.getElementById('mpcBookTitle');
  const mpcBookAuthor = document.getElementById('mpcBookAuthor');
  const mpcBookIcon = document.getElementById('mpcBookIcon');
  const lumiTip = document.getElementById('lumiTip');
  const mpcIdentity = document.getElementById('mpcIdentity');

  if (mpcBookTitle) mpcBookTitle.textContent = b.title;
  if (mpcBookAuthor) mpcBookAuthor.textContent = b.author || 'Неизвестный автор';
  
  if (mpcBookIcon) {
  mpcBookIcon.style.overflow = 'hidden'; 
    if (b.cover_url) {
      mpcBookIcon.style.padding = '0';
      mpcBookIcon.style.position = 'relative';
      // Заполняем весь квадрат, как в остальном приложении
      mpcBookIcon.innerHTML = `<img src="${b.cover_url}" alt="${b.title}" style="width:100%; height:100%; object-fit:cover; border-radius:20px;">`;
    } else {
      mpcBookIcon.style.padding = '8px';
      mpcBookIcon.innerHTML = getEmojiOrSvg(b.emoji, 70, b.title);
    }
  }

  const circ = 264; // 2 * pi * 42

  // Считаем время (минуты)
  let timeDone = 0;
  let timeTotal = 0;
  b.practices.forEach(p => {
    const pTime = p.time || 0;
    timeTotal += pTime;
    if ((todayRec.practices || []).includes(p.id)) {
      timeDone += pTime;
    }
  });
  const minDone = Math.round(timeDone / 60);
  const minTotal = Math.round(timeTotal / 60);

  // Выводим текст под книгой
  const mpcProgressText = document.getElementById('mpcProgressText');
  if (mpcProgressText) {
    mpcProgressText.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      <span>${todayCount} из ${total} практик · ${minDone}/${minTotal} мин</span>
    `;
  }

    // Обновляем новый блок прогресса
  const isStarted = !!bs.start;
  const closedDays = countClosedDays(b.id);
  const isCourseDone = isStarted && closedDays >= b.days;
  
  // Если книга пройдена, принудительно ставим 100%
  const pctCourse = isCourseDone ? 100 : (isStarted ? Math.round(day / b.days * 100) : 0);

  const mpcCourseText = document.getElementById('mpcCourseText');
  if (mpcCourseText) {
    if (isCourseDone) {
      mpcCourseText.textContent = `Курс завершен 👑`;
      mpcCourseText.style.color = 'var(--d-gold)';
      mpcCourseText.style.textShadow = '0 0 10px rgba(255,184,0,0.5)';
    } else {
      mpcCourseText.textContent = isStarted ? `День ${day} из ${b.days}` : 'Не начат';
      mpcCourseText.style.color = '';
      mpcCourseText.style.textShadow = '';
    }
  }
  
  const mpcCourseBar = document.getElementById('mpcCourseBar');
  if (mpcCourseBar) {
    mpcCourseBar.style.width = pctCourse + '%';
    if (isCourseDone) {
      // Включаем золотое свечение и анимацию
      mpcCourseBar.style.background = 'linear-gradient(90deg, #ffb800, #ff7a2a, #ffb800)';
      mpcCourseBar.style.backgroundSize = '200% 100%';
      mpcCourseBar.style.animation = 'shimmerProgress 2s linear infinite';
      mpcCourseBar.style.boxShadow = '0 0 12px rgba(255,184,0,0.8)';
    } else {
      // Обычный вид
      mpcCourseBar.style.background = 'linear-gradient(90deg, #4f46e5, #ff9d00)';
      mpcCourseBar.style.backgroundSize = 'auto';
      mpcCourseBar.style.animation = 'none';
      mpcCourseBar.style.boxShadow = 'none';
    }
  }

  // Обновляем текст "Дней до конца"
  const mpcDaysLeftWrap = document.getElementById('mpcDaysLeft') ? document.getElementById('mpcDaysLeft').parentElement : null;
  if (mpcDaysLeftWrap) {
    if (isCourseDone) {
      mpcDaysLeftWrap.innerHTML = 'Курс пройден! 🎉';
      mpcDaysLeftWrap.style.color = 'var(--d-gold)';
      mpcDaysLeftWrap.style.fontWeight = '900';
    } else {
      mpcDaysLeftWrap.innerHTML = `Дней до конца: <span id="mpcDaysLeft" style="color:var(--d-warm);">${isStarted ? Math.max(0, b.days - day) : b.days}</span>`;
      mpcDaysLeftWrap.style.color = '';
      mpcDaysLeftWrap.style.fontWeight = '';
    }
  }

  // Цитата дня (ТОЛЬКО ИЗ ТЕКУЩЕЙ КНИГИ)
  const mpcQuoteText = document.getElementById('mpcQuoteText');
const mpcQuoteAuthor = document.getElementById('mpcQuoteAuthor');
let q = null;

if (b.quotes && b.quotes.length > 0) {
  // Берем цитату строго из книги, которую проходит пользователь
  q = b.quotes[day % b.quotes.length];
}

// Если в книге нет цитат, показываем заглушку (или можно скрыть блок)
if (mpcQuoteText) mpcQuoteText.textContent = q ? q.text : 'Продолжай свой путь к лучшей версии себя.';
if (mpcQuoteAuthor) mpcQuoteAuthor.textContent = q ? `— ${q.author || b.author}` : `— ${b.author}`;

  // Луми
  if (lumiTip) {
    const defaultTips = ['Сегодня — хороший день, чтобы сделать первый шаг.','Маленькое действие лучше большого плана.','Один шаг сегодня — уже движение.'];
    const tips = (b.lumi_tips && b.lumi_tips.length) ? b.lumi_tips : defaultTips;
    lumiTip.textContent = tips[day % tips.length] || tips[0];
  }
  
  // Идентичность
  if (mpcIdentity) {
    const firstOpen = b.practices.find(p => !(todayRec.practices||[]).includes(p.id));
    if (b.identity) mpcIdentity.textContent = b.identity;
    else if (firstOpen && firstOpen.identity) mpcIdentity.textContent = firstOpen.identity;
    else mpcIdentity.textContent = 'Я — тот, кто практикует каждый день';
  }
  
  renderWeekCalendar();
  updateNotifBadge();
  updateSoundUI();
    // ✨ НОВАЯ Логика микро-действия в облачке ANDGER
  const bubbleName = document.getElementById('andgerBubbleName');
  const bubbleText = document.getElementById('lumiTip');
  const microBtn = document.getElementById('microActionBtn');
  
  if (bubbleName && bubbleText && microBtn) {
    const pendingPractice = b.practices.find(p => !(todayRec.practices||[]).includes(p.id) && p.micro_action);
    const isMicroDone = todayRec.microActionDone;

    if (pendingPractice && !isMicroDone) {
      // Режим "Действие дня"
      bubbleName.innerHTML = '🌟 ДЕЙСТВИЕ ДНЯ';
      bubbleName.style.color = 'var(--d-warm)';
      bubbleText.textContent = pendingPractice.micro_action;
      bubbleText.style.paddingRight = '45px'; // Оставляем место для кнопки
      
      microBtn.style.display = 'flex';
      microBtn.onclick = () => {
        completeMicroAction(currentBook.id, pendingPractice.id);
        // После выполнения действия возвращаем обычный вид облачка
        setTimeout(() => renderToday(), 300);
      };
    } else {
      // Обычный режим (советы)
      bubbleName.innerHTML = 'ANDGER';
      bubbleName.style.color = 'var(--d-accent-3)';
      
      const defaultTips = ['Сегодня — хороший день, чтобы сделать первый шаг.','Маленькое действие лучше большого плана.','Один шаг сегодня — уже движение.'];
      const tips = (b.lumi_tips && b.lumi_tips.length) ? b.lumi_tips : defaultTips;
      bubbleText.textContent = tips[day % tips.length] || tips[0];
      bubbleText.style.paddingRight = '0';
      
      microBtn.style.display = 'none';
    }
  }
}

// ЕДИНСТВЕННАЯ ПРАВИЛЬНАЯ КАРУСЕЛЬ

// ─── БИБЛИОТЕКА ───
function setLibFilter(f,el){
  libFilter=f;
  document.querySelectorAll('.lib-filter').forEach(f=>f.classList.remove('on'));
  if(el)el.classList.add('on');
  renderLibrary();
}
async function renderLibrary(){
  const fullName = user.name || 'Друг';
  const libNameEl = document.getElementById('libName');
  if(libNameEl) libNameEl.textContent = fullName;
  
  const libAvaEl = document.getElementById('libAvatar');
  if(libAvaEl) libAvaEl.innerHTML = getAvatarHtml(state.avatar, 26);
  
  const listEl = document.getElementById('bookList');
  if(!listEl) return;

  const q = (document.getElementById('libSearch')?.value || '').toLowerCase().trim();
  let list = BOOKS.filter(b => {
    if(!q) return true;
    return b.title.toLowerCase().includes(q) || (b.author || '').toLowerCase().includes(q);
  });

  if(libFilter==='active') {
    list = list.filter(b => !!getBookState(b.id).start && countClosedDays(b.id) < b.days);
  } else if(libFilter==='done') {
    list = list.filter(b => countClosedDays(b.id) >= b.days);
  } else if(libFilter==='new') {
    list = list.filter(b => !getBookState(b.id).start && countClosedDays(b.id) === 0);
  }

  let html = '';

  if(!list.length) {
    listEl.innerHTML = `
      <div class="d-empty-state" style="margin-top:20px;">
        <div class="d-empty-ico-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <div class="d-empty-title">Ничего не найдено</div>
        <div class="d-empty-text">Попробуй изменить поисковый запрос или фильтр.</div>
      </div>
    `;
    return;
  }

  const grouped = {};
  list.forEach(b => {
    const cat = b.category || 'Разное';
    if(!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(b);
  });

  Object.keys(grouped).forEach((catName) => {
    html += `
      <div style="margin-bottom: 8px;">
        <div class="d-lib-folder" onclick="toggleLibCategoryBento(this)">
          <div class="d-lib-folder-left">
            <div class="d-lib-folder-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div>
              <div class="d-lib-folder-title">${catName}</div>
              <div class="d-lib-folder-count">${grouped[catName].length} ${plural(grouped[catName].length, 'книга', 'книги', 'книг')}</div>
            </div>
          </div>
          <div class="lc-arrow" style="color:var(--d-text-dim); font-size:20px; transition:0.3s;">›</div>
        </div>
        <div class="lib-category-list-bento" style="display:none; flex-direction:column; gap:8px; padding:4px 0 0 0;">
    `;

    grouped[catName].forEach(b => {
      const bs=getBookState(b.id);
      const closed=countClosedDays(b.id);
      const pct=Math.round(closed/b.days*100);
      const started=!!bs.start; 
      const isDone=closed>=b.days;
      const hasAccess=hasBookAccess(b.id);
      const coverStyle = getSmartColor(b.title); 
      
          html += `
      <div class="d-lib-book-card ${!hasAccess?'locked':''}" onclick="openBookDetail('${b.id}')" style="position: relative;">
        ${!hasAccess?'<div class="d-lib-book-lock"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>':''}
        
        <div style="position: absolute; top: 8px; right: 10px; display: flex; align-items: center; gap: 2px; font-size: 11px; font-weight: 700; color: var(--d-gold); z-index: 2;">
          ${allBookRatings[b.id] ? allBookRatings[b.id].toFixed(1) + ' <span style="font-size: 10px;">★</span>' : ''}
        </div>

        <div class="d-lib-book-cover" style="background: ${coverStyle.bg}; color: ${coverStyle.color}; padding: 0; overflow: hidden;">
          ${b.cover_url ? `<img src="${b.cover_url}" style="width:100%; height:100%; object-fit:cover;">` : getEmojiOrSvg(b.emoji, 48, b.title)}
        </div>
        <div class="d-lib-book-body">
          <div class="d-lib-book-title" style="padding-right: 50px;">
            <span>${escapeHtml(b.title)} ${isDone?'👑':''}</span>
          </div>
          <div class="d-lib-book-author">${escapeHtml(b.author || 'Неизвестный автор')}</div>
          ${started ? `
            <div class="d-lib-book-bar"><div class="d-lib-book-fill" style="width:${pct}%"></div></div>
            <div class="d-lib-book-pct">${pct}%</div>
          ` : `
            <div style="font-size:10px; font-weight:800; background:rgba(124,92,255,0.1); color:var(--d-accent-2); padding:4px 8px; border-radius:6px; display:inline-block; margin-top:4px;">Начать</div>
          `}
        </div>
      </div>
    `;
    });
    
    html += `</div></div>`;
  });

  listEl.innerHTML = html;
}

function toggleAccordion(headerEl) {
  const body = headerEl?.nextElementSibling;
  if (!body) return;
  const isOpen = !body.classList.contains('open');
  body.classList.toggle('open', isOpen);
  headerEl.classList.toggle('open', isOpen);
  body.style.display = isOpen ? (body.classList.contains('lib-category-list-bento') ? 'flex' : 'block') : 'none';
  if (typeof playClick === 'function') playClick();
}

function toggleLibCategoryBento(headerEl) {
  toggleAccordion(headerEl);
}

function toggleLibCategory(el) {
  const body = el?.nextElementSibling;
  if (!body) return;
  const isOpen = !body.classList.contains('open');
  el.classList.toggle('open', isOpen);
  body.classList.toggle('open', isOpen);
  body.style.display = isOpen ? 'block' : 'none';
}

// ─── КАРТОЧКА КНИГИ ───
function openBookDetail(id){
  const b=BOOKS.find(x=>x.id===id);if(!b)return;
  bookDetailSource = b._isPreview ? 'preview' : (currentScreen || 'lib');
  
  if(!hasBookAccess(id) && !b._isPreview){
    document.getElementById('premiumUpsellModal').classList.remove('hidden');
    return;
  }
  
  bookDetailId=id;
  if (b.cover_url) {
      // Делаем красивую вертикальную обложку с тенью
      document.getElementById('bdEmoji').innerHTML = `<div style="display:flex; justify-content:center; margin-bottom:20px;"><img src="${b.cover_url}" style="width: 150px; height: 210px; object-fit: cover; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.5);"></div>`;
  } else {
      document.getElementById('bdEmoji').innerHTML = `<div style="display:flex; justify-content:center; margin-bottom:12px;">${getEmojiOrSvg(b.emoji, 72, b.title)}</div>`;
  }
  document.getElementById('bdTitle').textContent=b.title;
  document.getElementById('bdAuthor').textContent=(b.author||'—')+' · '+b.days+' дней';
  document.getElementById('bdAbout').textContent=b.about||'Описание скоро появится.';
  
  const disclaimerEl = document.getElementById('bdDisclaimer');
  if (disclaimerEl) {
    disclaimerEl.textContent = `Данная программа разработана на основе ключевых идей книги «${b.title}». Это практический тренинг по внедрению привычек, а не полный пересказ. Для получения глубокого понимания рекомендуем прочитать оригинал.`;
  }

  const totalTime=Math.round(b.practices.reduce((s,p)=>s+p.time,0)/60);
  document.getElementById('bdTags').innerHTML=
    `<span class="bd-tag">📋 ${b.practices.length} практик</span><span class="bd-tag">⏱ ~${totalTime} мин/день</span>`;

  renderBookStars(id);
  renderBookReviews(id);

  if(b.method && b.method.length > 0){
    document.getElementById('bdMethod').innerHTML = b.method.map(m => `<div class="bm-item">${m}</div>`).join('');
    document.getElementById('bdMethodSection').style.display = 'block';
  } else {
    document.getElementById('bdMethodSection').style.display = 'none';
  }

  if(b.authorBio && b.authorBio.trim() !== ''){
    document.getElementById('bdAuthorBio').textContent = b.authorBio;
    document.getElementById('bdAuthorSection').style.display = 'block';
  } else {
    document.getElementById('bdAuthorSection').style.display = 'none';
  }

  if(b.forWhom && b.forWhom.trim() !== ''){
    document.getElementById('bdForWhom').textContent = b.forWhom;
    document.getElementById('bdForWhomSection').style.display = 'block';
  } else {
    document.getElementById('bdForWhomSection').style.display = 'none';
  }

  if(b.result && b.result.trim() !== ''){
    document.getElementById('bdResult').textContent = b.result;
    document.getElementById('bdResultSection').style.display = 'block';
  } else {
    document.getElementById('bdResultSection').style.display = 'none';
  }

  const previewBadge = document.getElementById('bdPreviewBadge');
  if (previewBadge) previewBadge.style.display = b._isPreview ? 'block' : 'none';

  const bs=getBookState(b.id);
  const closed=countClosedDays(b.id);
  const btn=document.getElementById('bdStartBtn');
  
  if (b._isPreview) {
    btn.textContent = '▶ Тест практики';
    btn.setAttribute('onclick', 'startTestPractice()');
  } else {
    if(bs.start&&closed<b.days)btn.textContent='▶ Продолжить практику';
    else if(closed>=b.days)btn.textContent='🔄 Пройти заново';
    else btn.textContent='🚀 Начать практику';
    btn.setAttribute('onclick', 'startBookFromDetail()');
  }
  
  hideAll();
  document.getElementById('bookDetailScreen').classList.remove('hidden');
  updateSoundUI();
}
function backFromBookDetail(){
  // Preview mode cleanup: возвращаемся в редактор и убираем временную книгу
  if (bookDetailSource === 'preview') {
    BOOKS = BOOKS.filter(b => !b._isPreview);
    const returnScreen = window._previewReturnScreen || 'adminScreen';
    window._previewReturnScreen = null;
    bookDetailId = null;
    bookDetailSource = 'lib';
    hideAll();
    const target = document.getElementById(returnScreen);
    if (target) target.classList.remove('hidden');
    return;
  }

  if(bookDetailSource==='today')smartHome();
  else if(bookDetailSource==='stats')showStatsScreen();
  else showLibrary();
}

function previewBookDraft() {
  const title = document.getElementById('edTitle').value.trim();
  if (!title) {
    const err = document.getElementById('edErr');
    if (err) { err.textContent = 'Введи название перед предпросмотром'; err.style.color = 'var(--d-warning, #ffb800)'; }
    playError();
    return;
  }

  // Собираем черновик из текущих значений формы (даже несохранённых)
  const draftId = '__preview_' + Date.now();

  // Собираем черновик из текущих значений формы (даже несохранённых)
  const draft = {
    id: draftId,
    emoji: document.getElementById('edEmoji').value.trim() || '📖',
    title: title,
    author: document.getElementById('edAuthor').value.trim(),
    days: parseInt(document.getElementById('edDays').value) || 30,
    category: document.getElementById('edCategory').value.trim() || 'Разное',
    about: document.getElementById('edAbout').value.trim(),
    method: document.getElementById('edMethod').value.split(',').map(s => s.trim()).filter(Boolean),
    authorBio: document.getElementById('edAuthorBio').value.trim(),
    forWhom: document.getElementById('edForWhom').value.trim(),
    result: document.getElementById('edResult').value.trim(),
    practices: JSON.parse(JSON.stringify(window._tempPractices || [])),
    quotes: JSON.parse(JSON.stringify(window._tempQuotes || [])),
    cover_url: document.getElementById('edCoverUrl')?.value.trim() || null,
    _isPreview: true
  };

  // Куда вернёмся после закрытия превью
  window._previewReturnScreen = bookEditorReturnScreen || 'adminScreen';

  // Убираем старые черновики (если пользователь открывал превью раньше)
  BOOKS = BOOKS.filter(b => !b._isPreview);
  BOOKS.push(draft);

  playClick();
  openBookDetail(draftId);
  
}
function startTestPractice() {
  const draft = BOOKS.find(b => b._isPreview);
  if (!draft) {
    toast('Черновик не найден', 'danger');
    return;
  }
  if (!draft.practices || draft.practices.length === 0) {
    toast('В книге нет практик для теста', 'warm');
    return;
  }
  
  currentBook = draft;
  
  // Обязательно ставим дату старта, чтобы окно выбора не сломалось
  const bs = getBookState(currentBook.id);
  if (!bs.start) bs.start = todayStr();

  hideAll();
  document.getElementById('bookDetailScreen').classList.add('hidden');
  
  // Открываем то самое окно со списком практик (как на Главной)
  openPracticeSelector();
}
async function startBookFromDetail(){
  const b=BOOKS.find(x=>x.id===bookDetailId);if(!b)return;
  currentBook=b;
  const bs=getBookState(b.id);
  
  if(!bs.start){
    // Вместо мгновенного старта, показываем письмо
    const letterModal = document.getElementById('futureLetterModal');
    if (letterModal) {
      document.getElementById('futureLetterDays').textContent = b.days;
      document.getElementById('futureLetterText').value = '';
      letterModal.classList.remove('hidden');
      playClick();
      return; // Ждем, пока пользователь напишет или пропустит
    } else {
      bs.start=todayStr(); saveState();
    }
  }else{
    const closed=countClosedDays(b.id);
    if(closed>=b.days){
      if(await appConfirm('Начать книгу заново? Прогресс сбросится.', 'Начать заново', 'Сбросить прогресс')){
        bs.days={};bs.journal={};bs.start=todayStr();saveState();
      }else return;
    }
  }
  
  state.lastBook=b.id;saveState();
  showTodayScreen(); // Открываем Главный экран на фоне
  
  // А теперь вызываем то самое окно со списком практик (как кнопка "практика по книге")
  setTimeout(() => {
    openPracticeSelector();
  }, 300); // Небольшая задержка, чтобы экран успел прогрузиться
}

async function renderBookStars(bookId){
  const el=document.getElementById('bdStars');
  if(!el) return;
  
  const b = BOOKS.find(x => x.id === bookId);
  // Проверяем, пройдена ли книга полностью
  const isCompleted = b ? (countClosedDays(bookId) >= b.days) : false;
  
  let myStars=0,avg=0,count=0;
  try{
    const{data}=await sb.from('reviews').select('stars').eq('book_id',bookId);
    if(data&&data.length){
      avg=data.reduce((s,r)=>s+r.stars,0)/data.length;
      count=data.length;
    }
    const{data:mine}=await sb.from('reviews').select('stars').eq('book_id',bookId).eq('user_id',user.id).maybeSingle();
    if(mine)myStars=mine.stars;
  }catch (e) { console.debug('[ANDGER] ignored:', e); }
  
  let html = '';
  
  // Если книга пройдена — клик открывает окно отзыва. Если нет — выдает ошибку.
  html += Array.from({length:5},(_,i)=>{
    const starOn = i < myStars ? 'on' : '';
    const clickAction = isCompleted 
      ? `onclick="showReviewModal('${bookId}')"` 
      : `onclick="toast('Пройди книгу до конца, чтобы оставить отзыв!','warm')"`;
    return `<span class="bd-star ${starOn}" ${clickAction} style="cursor:pointer;">★</span>`;
  }).join('');
  
  if(count){
    html += `<div style="font-size:11px;color:var(--muted);width:100%;margin-top:4px">Средняя: ${avg.toFixed(1)} · ${count} ${plural(count,'отзыв','отзыва','отзывов')}</div>`;
  }
  
  if(isCompleted) {
     html += `<button class="btn" style="margin-top:12px; padding:10px; font-size:13px;" onclick="showReviewModal('${bookId}')">✍️ ${myStars > 0 ? 'Изменить отзыв' : 'Оставить отзыв'}</button>`;
  }
  
  el.innerHTML = html;
}

// ─── СТАТИСТИКА ───
function renderStatsScreen(){
  if(!currentBook || BOOKS.length === 0) {
    // Если книг нет, показываем заглушку
    const wrap = document.querySelector('#statsScreen .wrap');
    if (wrap) {
        wrap.innerHTML = `
          <div class="d-empty-state" style="margin-top: 40px;">
            <div class="d-empty-ico-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <div class="d-empty-title">Пока нет статистики</div>
            <div class="d-empty-text">Начни проходить первую книгу, и здесь появится твой прогресс, награды и графики.</div>
            <button class="d-btn-primary" onclick="showLibrary()" style="margin-top: 16px;">Перейти в библиотеку</button>
          </div>
        `;
    }
    return;
  }
  
  const statsAva = document.getElementById('statsAvatar');
  if(statsAva) statsAva.innerHTML = getAvatarHtml(state.avatar, 26);

  // Счет опыта и уровня
  const stats = getGlobalStats();

  const lcLvl = document.getElementById('lcLevel'); if(lcLvl) lcLvl.textContent = 'Ур. ' + stats.lvl;
  const lcTitle = document.getElementById('lcTitle'); if(lcTitle) lcTitle.textContent = stats.lvlName;
  const lcIco = document.getElementById('lcIco'); if(lcIco) lcIco.textContent = stats.lvlIco;
  
  const lcXpText = document.getElementById('lcXpText');
  const lcBarFill = document.getElementById('lcBarFill');
  
  if (stats.lvl === 6) {
    if(lcXpText) {
      lcXpText.textContent = stats.totalXP + ' XP (Максимум)';
      lcXpText.style.color = 'var(--d-gold)';
    }
    if(lcBarFill) {
      lcBarFill.style.width = '100%';
      lcBarFill.style.background = 'linear-gradient(90deg, #ffb800, #ff7a2a, #ffb800)';
      lcBarFill.style.backgroundSize = '200% 100%';
      lcBarFill.style.animation = 'shimmerProgress 2s linear infinite';
      lcBarFill.style.boxShadow = '0 0 12px rgba(255,184,0,0.8)';
    }
  } else {
    if(lcXpText) {
      lcXpText.textContent = stats.xpInCurrentLvl + ' / ' + stats.xpNeededForNext + ' XP';
      lcXpText.style.color = '';
    }
    if(lcBarFill) {
      setTimeout(() => {
        lcBarFill.style.width = stats.xpPct + '%';
        lcBarFill.style.background = 'linear-gradient(90deg, var(--d-accent), var(--d-warm))';
        lcBarFill.style.backgroundSize = 'auto';
        lcBarFill.style.animation = 'none';
        lcBarFill.style.boxShadow = 'none';
      }, 100);
    }
  }

  // Глобальная статистика
  let totalClosed=0,totalPractices=0,booksStarted=0,totalSeconds=0;
  BOOKS.forEach(bb=>{
    const bbs=getBookState(bb.id);
    if(bbs.start)booksStarted++;
    totalClosed+=countClosedDays(bb.id);
    Object.values(bbs.days).forEach(rec=>{
      if(rec.practices){
        totalPractices+=rec.practices.length;
        rec.practices.forEach(pid => {
          const p = bb.practices.find(x => x.id === pid);
          if(p && p.time) totalSeconds += p.time;
        });
      }
    });
  });
  const totalMinutes = Math.round(totalSeconds / 60);

  const gBooks = document.getElementById('globalBooks'); if(gBooks) gBooks.textContent = booksStarted;
  const gClosed = document.getElementById('globalClosed'); if(gClosed) gClosed.textContent = totalClosed;
  const gPractices = document.getElementById('globalPractices'); if(gPractices) gPractices.textContent = totalPractices;
  const gMinutes = document.getElementById('globalMinutes'); if(gMinutes) gMinutes.textContent = totalMinutes;

  // Карточки книг
  const statsBooksHtml = BOOKS.map(b=>{
    const closed = countClosedDays(b.id);
    const pct = Math.round(closed / (b.days || 1) * 100);
    const day = currentDay(b.id);
    const isActive = statsBookId === b.id;
    
    return `
      <div class="d-lib-book-card" onclick="selectStatsBook('${b.id}')" style="min-width: calc(100% - 20px); scroll-snap-align: start; ${isActive ? 'border-color: var(--d-accent); box-shadow: 0 0 15px rgba(124,92,255,0.15);' : 'opacity: 0.6;'}">
        <div class="d-lib-book-cover" style="padding:0; overflow:hidden;">${b.cover_url ? `<img src="${b.cover_url}" style="width:100%; height:100%; object-fit:cover;">` : getEmojiOrSvg(b.emoji, 36, b.title)}</div>
        <div class="d-lib-book-body">
          <div class="d-lib-book-title">${b.title}</div>
          <div class="d-lib-book-author">${b.author || 'Неизвестный автор'}</div>
          <div style="font-size:10px; color:var(--d-text-dim); margin-bottom:6px;">День ${day} из ${b.days}</div>
          <div class="d-lib-book-bar"><div class="d-lib-book-fill" style="width:${pct}%"></div></div>
          <div class="d-lib-book-pct">${pct}%</div>
        </div>
      </div>
    `;
  }).join('');

  const swipeWrap = document.getElementById('statsBooksSwipe');
  if (swipeWrap) swipeWrap.innerHTML = statsBooksHtml;

  const dotsWrap = document.getElementById('statsBooksDots');
  if (dotsWrap && BOOKS.length > 1) {
    dotsWrap.innerHTML = BOOKS.map(b => `<div class="b-dot ${statsBookId === b.id ? 'on' : ''}"></div>`).join('');
  } else if (dotsWrap) {
    dotsWrap.innerHTML = '';
  }

  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;
  const sStreak = document.getElementById('statStreakBig'); if(sStreak) sStreak.textContent = calcStreak(b.id);
  const sBest = document.getElementById('statBestBig'); if(sBest) sBest.textContent = calcBest(b.id);
  renderAchievements();
  loadMoodChart(); // <--- ДОБАВИЛИ ВОТ ЭТУ СТРОКУ
}
function selectStatsBook(id){statsBookId=id;renderStatsScreen()}

// ─── НАГРАДЫ ───
function renderAchievements(){
  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;if(!b)return;
  const closed=countClosedDays(b.id),streak=calcStreak(b.id),bs=getBookState(b.id);
  const journal=Object.keys(bs.journal||{}).filter(k=>{
    const j=bs.journal[k];return j.q1||j.q2||j.q3;
  }).length;
  let practices=0,perfect=false,perfectStreak=0,curPerfect=0;
  for(let i=1;i<=b.days;i++){
    const d=dateByDay(b.id,i);const rec=bs.days[d];
    if(rec&&rec.practices){
      practices+=rec.practices.length;
      if(rec.practices.length===b.practices.length){
        perfect=true;curPerfect++;
        if(curPerfect>perfectStreak)perfectStreak=curPerfect;
      }else curPerfect=0;
    }else curPerfect=0;
  }
  const eb={journal,practices,perfect,perfectStreak,otherAch:0};
  let otherAch=0;
  ACHIEVEMENTS_GROUPS.slice(0,3).forEach(g=>{
    g.items.forEach(a=>{if(a.check(closed,streak,eb))otherAch++});
  });
  const extra={journal,practices,perfect,perfectStreak,otherAch};
  const allItems=[];
  ACHIEVEMENTS_GROUPS.forEach(g=>g.items.forEach(a=>allItems.push(a)));
  let unlockedCount=0;
  allItems.forEach(a=>{if(a.check(closed,streak,extra))unlockedCount++});
  document.getElementById('achCount').textContent=unlockedCount+' из '+allItems.length;
  document.getElementById('achBar').style.width=Math.round(unlockedCount/allItems.length*100)+'%';
  let html='';
  ACHIEVEMENTS_GROUPS.forEach(g=>{
    html+=`<div class="ach-group-title">${g.title}</div><div class="ach-grid">`;
    g.items.forEach(a=>{
      const unlocked=a.check(closed,streak,extra);
      const gold=a.gold&&unlocked;
      const secret=a.secret&&!unlocked;
      const progress=!unlocked&&a.progress?`<div class="ach-progress">${a.progress(closed,streak,extra)}</div>`:'';
      // Оставляем текст наград видимым даже если они закрыты
      let name = a.name;
      let desc = a.desc;
      if(secret && !unlocked) {
        name = 'Секретная награда'; 
        desc = 'Выполните условие, чтобы узнать';
      }
      html+=`<div class="ach-card ${unlocked?'unlocked':'locked'} ${gold?'gold':''} ${secret?'secret':''}" onclick="showAchDetail('${a.id}')"><div class="ach-badge">${unlocked?a.ico:'🔒'}</div><div class="ach-name">${name}</div><div class="ach-desc">${desc}</div>${progress}</div>`;
    });
    html+='</div>';
  });
  document.getElementById('achContainer').innerHTML=html;
}
function showAchDetail(achId){
  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;if(!b)return;
  const closed=countClosedDays(b.id),streak=calcStreak(b.id),bs=getBookState(b.id);
  const journal=Object.keys(bs.journal||{}).filter(k=>{
    const j=bs.journal[k];return j.q1||j.q2||j.q3;
  }).length;
  let practices=0,perfect=false,perfectStreak=0,curPerfect=0;
  for(let i=1;i<=b.days;i++){
    const d=dateByDay(b.id,i);const rec=bs.days[d];
    if(rec&&rec.practices){
      practices+=rec.practices.length;
      if(rec.practices.length===b.practices.length){
        perfect=true;curPerfect++;
        if(curPerfect>perfectStreak)perfectStreak=curPerfect;
      }else curPerfect=0;
    }else curPerfect=0;
  }
  const eb={journal,practices,perfect,perfectStreak,otherAch:0};
  let otherAch=0;
  ACHIEVEMENTS_GROUPS.slice(0,3).forEach(g=>{
    g.items.forEach(a=>{if(a.check(closed,streak,eb))otherAch++});
  });
  const extra={journal,practices,perfect,perfectStreak,otherAch};
  const allItems=[];
  ACHIEVEMENTS_GROUPS.forEach(g=>g.items.forEach(a=>allItems.push(a)));
  const a=allItems.find(x=>x.id===achId);if(!a)return;
  const unlocked=a.check(closed,streak,extra);
  document.getElementById('achModalIco').textContent=unlocked?a.ico:(a.secret?'❓':'🔒');
  document.getElementById('achModalTitle').textContent=unlocked?a.name:(a.secret?'Секретная награда':a.name);
  document.getElementById('achModalText').textContent=unlocked?'✓ Получена!':a.desc;
  let progress='';
  if(!unlocked&&a.progress){
    progress=`<div style="background:rgba(124,92,255,.1);padding:12px;border-radius:12px;font-size:14px;font-weight:800;color:var(--accent-2)">Прогресс: ${a.progress(closed,streak,extra)}</div>`;
  }
  document.getElementById('achModalProgress').innerHTML=progress;
  document.getElementById('achModal').classList.remove('hidden');
}

// ─── УРОВНИ ───
function getLevel(closed){
  if(closed===0)return{ico:'🌱',name:'Ученик',desc:'Начни первый день'};
  if(closed<3)return{ico:'🌿',name:'Практик',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<7)return{ico:'🔥',name:'Опытный',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<14)return{ico:'💎',name:'Мастер',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<30)return{ico:'🏆',name:'Легенда',desc:closed+' '+plural(closed,'день','дня','дней')};
  return{ico:'👑',name:'Гуру',desc:'Книга пройдена'};
}

// ─── ПОДСЧЁТЫ ───
function countClosedDays(bookId){
  const bs=getBookState(bookId);
  return Object.keys(bs.days).filter(d=>bs.days[d].closed).length;
}
function currentDay(bookId){
  const bs=getBookState(bookId);
  if(!bs.start)return 1;
  const start=new Date(bs.start+'T00:00:00');
  const now=new Date(todayStr()+'T00:00:00');
  const diff=Math.floor((now-start)/86400000)+1;
  const b=BOOKS.find(x=>x.id===bookId);
  if(b&&Number(b.format)===2)return Math.max(diff,1); // «Путь»: день не обрезается длиной курса, записи идут в сегодняшнюю дату
  return Math.min(Math.max(diff,1),b?b.days:30);
}
function calcStreak(bookId) {
  const b = BOOKS.find(x => x.id === bookId);
  const bs = getBookState(bookId);
  if (!b || !bs.start) return 0;
  const today = todayStr();
  const lastDay = Math.min(currentDay(bookId), b.days);
  let streak = 0;
  for (let i = lastDay; i >= 1; i--) {
    const date = dateByDay(bookId, i);
    if (!date) break;
    const rec = bs.days[date];
    if (rec && (rec.closed || rec.shielded)) { streak++; continue; }
    if (date === today) continue;
    break;
  }
  return streak;
}

function calculateStreakFromProgress(bookId, bookProgress) {
  const b = BOOKS.find(x => x.id === bookId);
  if (!b || !bookProgress || !bookProgress.start) return 0;
  
  const start = new Date(bookProgress.start + 'T00:00:00');
  const today = new Date(todayStr() + 'T00:00:00');
  const diff = Math.floor((today - start) / 86400000) + 1;
  const currentDay = Math.min(Math.max(diff, 1), b.days);
  
  let streak = 0;
  let misses = 0;
  for (let i = 1; i <= currentDay; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i - 1);
    const dateStr = localDate(d);
    const rec = bookProgress.days ? bookProgress.days[dateStr] : null;
    
    if (rec && (rec.closed || rec.shielded)) {
      streak++;
      misses = 0;
    } else {
      if (dateStr < todayStr()) {
        misses++;
        if (misses > 1) break; // 2 пропуска подряд = серия прервана
      }
    }
  }
  return streak;
}

function calcBest(bookId){
  const b=BOOKS.find(x=>x.id===bookId),bs=getBookState(bookId);
  if(!b)return 0;
  let best=0,cur=0;
  for(let i=1;i<=b.days;i++){
    const d=dateByDay(bookId,i);
    if(bs.days[d]&&bs.days[d].closed){cur++;if(cur>best)best=cur}else cur=0;
  }
  return best;
}
function dateByDay(bookId,day){
  const bs=getBookState(bookId);
  if(!bs.start)return null;
  const start=new Date(bs.start+'T00:00:00');
  start.setDate(start.getDate()+day-1);
  return localDate(start);
}

// ─── РИТУАЛ ───

function startRitual(){
  window._isCustomRitualFlow = false;
  if(!currentBook){toast('Сначала выбери книгу','warm');return}
  
  const bs = getBookState(currentBook.id);
  
  if (!bs.start) {
    bs.start = todayStr();
    saveState();
    renderToday(); 
  }

  const day = currentDay(currentBook.id);
  const date = dateByDay(currentBook.id, day);

  const b=currentBook;
  const donePractices = (bs.days[date] && bs.days[date].practices) ? bs.days[date].practices : [];
  const practicesToDo = b.practices.filter(p => !donePractices.includes(p.id));

  if (practicesToDo.length === 0) {
    toast('Вы уже выполнили все практики на сегодня. Ждем завтра!', 'warm');
    return;
  }

  ritualQueue=practicesToDo.map(p=>({...p,_bookId:b.id,_bookTitle:b.title}));
  ritualIndex=0;
  ritualHowIndex = 0;
  
  hideAll();
  
  const rEl=document.getElementById('ritualScreen');
  if(rEl) {
    rEl.className='ritual';
    rEl.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100dvh;z-index:9999;display:flex;flex-direction:column;';
  } else {
    console.error('❌ Элемент #ritualScreen не найден в HTML!');
    toast('Ошибка интерфейса. Обновите страницу.', 'danger');
    smartHome(); // <-- ВОЗВРАЩАЕМ НА ГЛАВНУЮ
    return;
  }
  
  document.body.classList.add('app-focus-mode');
  window.scrollTo(0,0);
  renderRitualStep();
}

function renderRitualStep(){
  try {
    if (ritualIndex >= ritualQueue.length) { finishRitual(); return; }
    let p = ritualQueue[ritualIndex];
    if (!p) { closeRitual(); return; }
    
    p = normalizeVoiceTimeline(p); 
    ritualQueue[ritualIndex] = p; 
    
    const rpStep = document.getElementById('rpStep');
    if(rpStep) {
        // Убираем принудительный CAPS LOCK из стилей, чтобы название выглядело красиво
        rpStep.style.textTransform = 'none';
        rpStep.style.letterSpacing = '0';
        rpStep.style.display = 'flex';
        rpStep.style.flexDirection = 'column';
        rpStep.style.gap = '2px';
        
        // Выводим название практики жирным шрифтом, а прогресс — мелким снизу
        rpStep.innerHTML = `
            <div style="font-size:10px; font-weight:800; color:var(--d-accent-2); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:2px;">Практика ${ritualIndex + 1} из ${ritualQueue.length}</div>
            <div style="font-size:15px; font-weight:900; color:var(--d-text); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; line-height:1.2;">${escapeHtml(p.title)}</div>
        `;
    }
    
    const fill = document.getElementById('rpFill');
    if (fill) fill.style.width = (ritualIndex / ritualQueue.length * 100) + '%';
    
    const bookTag = p._bookTitle && (!currentBook || p._bookTitle !== currentBook.title)
      ? `<div style="text-align:center;font-size:11px;color:var(--d-text-dim);margin-bottom:8px">${getSvgIcon('book',14)} ${escapeHtml(p._bookTitle)}</div>` : '';
    
    const rBody = document.getElementById('ritualBody');
    if(!rBody) {
        console.error('❌ Элемент #ritualBody не найден в HTML!');
        toast('Ошибка интерфейса: не найден контейнер практики.', 'danger');
        closeRitual(); // <-- ЗАКРЫВАЕМ И ВОЗВРАЩАЕМ НА ГЛАВНУЮ
        return;
    }
    rBody.innerHTML = bookTag + buildPracticeHtml(p);
    
    currentDifficulty = 'normal'; 
    timerRemaining = p.time || 300;
    timerState = 'idle';
    
    // Обновляем большой таймер на экране
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) timerDisplay.textContent = formatTime(timerRemaining);
    
    // Отрисовываем кнопки сложности для ритуала
    renderDifficultySelector(p.time || 300, 'ritual');
    
    // Принудительный сброс скролла в самый верх с задержкой для iOS
    setTimeout(() => {
      if (rBody) rBody.scrollTop = 0;
      window.scrollTo(0, 0);
    }, 50);
  } catch (error) {
    console.error('Ошибка рендера:', error);
    toast('Ошибка при загрузке практики.', 'danger');
    closeRitual(); // <-- ВОЗВРАЩАЕМ НА ГЛАВНУЮ ПРИ ОШИБКЕ
  }
}

function toggleTimer(ctx){
  const isRitual = !document.getElementById('ritualScreen').classList.contains('hidden');
  const screen = isRitual ? document.getElementById('ritualScreen') : document.getElementById('practiceScreen');
  
  // ЗАЩИТА: Если экрана нет, возвращаем на главную
  if (!screen) {
    toast('Ошибка: экран практики не найден', 'danger');
    smartHome();
    return;
  }
  
  const btn = screen.querySelector('#timerBtn'); // <--- ИЩЕМ ВНУТРИ ЭКРАНА

  if(timerState === 'running'){
    clearInterval(timerInterval);
    timerState = 'paused';
    if (musicAudio) musicAudio.pause();
    if (ttsAudio) ttsAudio.pause();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if(btn){ btn.innerHTML='▶ Продолжить'; btn.classList.add('paused'); }
    const ringWrap = screen.querySelector('.d-timer-ring-wrap');
    if (ringWrap) ringWrap.classList.add('paused-ring'); // Останавливаем дыхание
  } else if(timerState === 'done'){
    // Ничего не делаем
  } else {
    let currentP = isRitual ? ritualQueue[ritualIndex] : currentPractice;
    if (timerState === 'idle' && currentP) currentP._spokenIndices = [];

    // ✨ ФИКС ПАУЗЫ: Запускаем музыку ТОЛЬКО при первом старте (idle)
    if (state.soundMode === 'sound') {
       if (timerState === 'idle') {
          startMusic(currentP ? currentP.id : 'default');
       } else {
          // Если это было ПАУЗА -> ПРОДОЛЖИТЬ, просто возобновляем текущий трек
          if (musicAudio && musicAudio.src) {
             musicAudio.play().catch(()=>{});
             const targetVol = isVoicePlaying ? 0.15 : 0.3;
             fadeAudio(musicAudio, musicAudio.volume, targetVol, 500); 
          }
       }
    }

    // 1. Разблокировка системного голоса (iOS Safari требует вызова speak() по клику)
    if ('speechSynthesis' in window) {
      const emptyUtterance = new SpeechSynthesisUtterance('');
      emptyUtterance.volume = 0;
      window.speechSynthesis.speak(emptyUtterance);
    }
    
    // 2. Разблокировка Audio-элемента для Яндекс.API
    if (!ttsAudio) ttsAudio = new Audio();
    ttsAudio.play().catch(()=>{});
    ttsAudio.pause();

    // 3. Разблокировка фоновой музыки (iOS PWA)
    if (!musicAudio) {
      musicAudio = new Audio();
      musicAudio.loop = false; 
      musicAudio.addEventListener('ended', nextTrack); 
    }
    musicAudio.volume = 0.01;
    musicAudio.play().then(() => {
       if (timerState !== 'running') musicAudio.pause();
    }).catch(()=>{});
    
    startTimer(isRitual ? 'ritual' : 'practice'); 
    timerState = 'running';
    
    if(btn){ btn.innerHTML='⏸ Пауза'; btn.classList.remove('paused'); }
    const focusControls = screen.querySelector('.focus-controls');
    if (focusControls) focusControls.style.display = 'flex';
     const ringWrap2 = screen.querySelector('.d-timer-ring-wrap');
    if (ringWrap2) ringWrap2.classList.remove('paused-ring'); // Запускаем дыхание
    
    const zenBtn = screen ? screen.querySelector('.exit-zen-btn') : null;
    if (zenBtn) {
      zenBtn.style.display = 'block';
      zenBtn.textContent = 'Свернуть таймер';
    }
    
    if(screen) {
      screen.classList.add('focus-mode');
      document.body.style.overflow = 'hidden'; 
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
  }
}

let wakeLock = null;

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (err) {
    dlog('Wake Lock error:', err);
  }
}

function releaseWakeLock() {
  if (wakeLock !== null) {
    wakeLock.release();
    wakeLock = null;
  }
}

function startTimer(ctx){
  const isRitual = (ctx === 'ritual');
  const screen = isRitual ? document.getElementById('ritualScreen') : document.getElementById('practiceScreen');
  
  // ЗАЩИТА: Если экрана нет, возвращаем на главную
  if (!screen) {
    toast('Ошибка: экран таймера не найден', 'danger');
    smartHome();
    return;
  }

  const circle = screen.querySelector('.timer-circle'); 
  if (circle) circle.style.transition = 'stroke-dashoffset 1s linear';
  
  requestWakeLock(); 
  timerTargetTime = Date.now() + (timerRemaining * 1000);
  const targetTime = timerTargetTime;
  
  // ✨ ФИКС: Берем время, которое реально идет на таймере (с учетом сложности)
  let currentP = isRitual ? ritualQueue[ritualIndex] : currentPractice;
  const startRemaining = timerRemaining; // Запоминаем текущее время (3, 5 или 8 минут)
  
  if(timerInterval) clearInterval(timerInterval);
  
  if (currentP && !currentP._spokenIndices) {
    currentP._spokenIndices = []; 
  }

  timerInterval = setInterval(()=>{
    const now = Date.now();
    const remaining = Math.max(0, Math.round((targetTime - now) / 1000));
    timerRemaining = remaining;
    
    const el = screen.querySelector('#timerDisplay');
    if(el){
      el.textContent = formatTime(timerRemaining);
      el.classList.add('timer-pulsing');
    }

    // ПЛАВНОЕ ЗАТУХАНИЕ МУЗЫКИ (Последние 15 секунд)
    if (timerRemaining <= 15 && timerRemaining > 0 && musicAudio && state.soundMode === 'sound') {
      const maxVol = isVoicePlaying ? 0.15 : 0.3;
      musicAudio.volume = (timerRemaining / 15) * maxVol;
    }

    if (circle) {
       const circumference = 534; 
       const percent = timerRemaining / startRemaining; // <--- Делим на реальное стартовое время
       circle.style.strokeDashoffset = circumference - (percent * circumference);
    }

    if (currentP && currentP.voiceTimeline && timerState === 'running' && remaining > 1 && document.visibilityState === 'visible') {
      const elapsed = startRemaining - remaining; // Считаем прошедшее время от старта
      
      // Коэффициент сложности (чтобы фразы успевали говориться)
      const baseTime = currentP.time || 300;
      const actualTime = getDiffData(baseTime, currentDifficulty).time;
      const ratio = actualTime / baseTime; 

      currentP.voiceTimeline.forEach((item, index) => {
        // Вычисляем время с учетом сложности
        let scaledTime = item.time * ratio;
        
        // ЗАЩИТА: фраза не должна звучать раньше 5-й секунды (кроме самой первой)
        if (scaledTime < 5 && index > 0) scaledTime = 5;

        if (elapsed >= scaledTime && !currentP._spokenIndices.includes(index)) {
          // Если не прошло слишком много времени с момента триггера
          if (elapsed - scaledTime < 30) {
            speakBackgroundGuide(item.text, ctx);
          }
          currentP._spokenIndices.push(index);
        }
      });
    }
    
    if(timerRemaining <= 0){
      stopTimer();
      timerState='done';
      screen.querySelectorAll('.checklist-item').forEach(item => {
        item.classList.add('done');
      });
      const noteBlock = screen.querySelector('.note-block');
      if(noteBlock) noteBlock.style.display = 'block';
      
      const btn = screen.querySelector('#timerBtn');
      if(btn){
        btn.textContent = '✨ Время вышло';
        btn.className = 'timer-big-btn done';
        btn.disabled = true;
      }

      try {
        if(ctx === 'ritual' && ritualQueue[ritualIndex]) speakTimerEnd(ritualQueue[ritualIndex].id);
        else if (ctx === 'practice' && currentPractice) speakTimerEnd(currentPractice.id);
        playFanfare();   
        
        if(ctx==='ritual' && ritualQueue[ritualIndex]) showCompleteOverlay(ritualQueue[ritualIndex],'ritual');
        else if (ctx==='practice' && currentPractice) showCompleteOverlay(currentPractice,'practice');
      } catch (error) {
        console.error('Ошибка при завершении таймера:', error);
        // Если что-то сломалось, принудительно показываем окно завершения
        if(ctx==='ritual' && ritualQueue[ritualIndex]) {
          showCompleteOverlay(ritualQueue[ritualIndex],'ritual');
        } else if (ctx==='practice' && currentPractice) {
          showCompleteOverlay(currentPractice,'practice');
        }
      }
      
      setTimeout(() => {
        const noteInput = screen.querySelector('#practiceNoteInput');
        if(noteInput) noteInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }
  }, 1000);
}

function stopTimer(){
  const pScreen = document.getElementById('practiceScreen');
  const rScreen = document.getElementById('ritualScreen');
  
  if(pScreen) { const sub = pScreen.querySelector('.practice-subtitle'); if(sub) { sub.textContent = ''; sub.classList.remove('show'); } }
  if(rScreen) { const sub = rScreen.querySelector('.practice-subtitle'); if(sub) { sub.textContent = ''; sub.classList.remove('show'); } }

  if(pScreen) { const c = pScreen.querySelector('.timer-circle'); if(c) c.style.strokeDashoffset = 0; }
  if(rScreen) { const c = rScreen.querySelector('.timer-circle'); if(c) c.style.strokeDashoffset = 0; }

  if (ttsAudio) { ttsAudio.pause(); ttsAudio.currentTime = 0; }
  isVoicePlaying = false; 
  releaseWakeLock(); 
  if(timerInterval){clearInterval(timerInterval);timerInterval=null}
  
  if(pScreen) { const t = pScreen.querySelector('#timerDisplay'); if(t) t.classList.remove('timer-pulsing'); }
  if(rScreen) { const t = rScreen.querySelector('#timerDisplay'); if(t) t.classList.remove('timer-pulsing'); }

  if(pScreen) pScreen.classList.remove('focus-mode');
  if(rScreen) rScreen.classList.remove('focus-mode');
  
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';

  // ✨ ПЛАВНОЕ ЗАТУХАНИЕ МУЗЫКИ В КОНЦЕ ПРАКТИКИ
  if (musicAudio && state.soundMode === 'sound' && !musicAudio.paused) {
    fadeAudio(musicAudio, musicAudio.volume, 0, 1500, () => {
      musicAudio.pause();
      musicAudio.currentTime = 0;
    });
  }
}

// Совместимый адаптер для существующих callback-сценариев: визуально используется только appDialog/appConfirm.
function legacyConfirmAdapter(title, text, callback) {
  appConfirm(text, title, 'Да').then(confirmed => {
    if (confirmed && typeof callback === 'function') callback();
  }).catch(error => console.error('Ошибка диалога подтверждения:', error));
}

function restoreAppScrolling() {
  // toggleTimer() locks body positioning for focus mode; restore every property
  // when leaving any timer/practice flow, otherwise wheel scrolling stays broken.
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
  document.body.style.height = '';
  document.body.style.touchAction = '';
  document.body.classList.remove('app-focus-mode');
  document.documentElement.style.overflow = '';
  document.documentElement.style.position = '';
}

function closeRitual(){
  if(ritualIndex < ritualQueue.length) {
    legacyConfirmAdapter(
      'Прервать практику?', 
      'Прогресс текущей практики не сохранится. Вы уверены?', 
      () => {
        stopTimer();timerState='idle';stopMusic();
        const rEl=document.getElementById('ritualScreen');
        rEl.classList.add('hidden'); 
        rEl.classList.remove('ritual');
        rEl.style.cssText=''; 
        rEl.className='ritual hidden';
        restoreAppScrolling();
        smartHome();
      }
    );
  } else {
    stopTimer();timerState='idle';stopMusic();
    const rEl=document.getElementById('ritualScreen');
    rEl.classList.add('hidden'); 
    rEl.classList.remove('ritual');
    rEl.style.cssText=''; 
    rEl.className='ritual hidden';
    restoreAppScrolling();
    smartHome();
  }
}

function goToJournalFromRitual() {
  stopTimer();
  legacyConfirmAdapter(
    'Перейти в дневник?', 
    'Текущая практика не сохранится. Вы уверены?', 
    () => {
      const rEl=document.getElementById('ritualScreen');
      rEl.classList.add('hidden'); 
      rEl.classList.remove('ritual');
      rEl.style.cssText=''; 
      rEl.className='ritual hidden';
      restoreAppScrolling();
      showJournalScreen();
    }
  );
}

function finishRitual(isSinglePractice = false){
  stopTimer();timerState='idle';
  
  // Собираем все книги, которые участвовали в практике
  const booksToCheck = new Set();
  if (ritualQueue.length > 0) {
    ritualQueue.forEach(p => { if(p._bookId) booksToCheck.add(p._bookId); });
  } else if (currentBook) {
    booksToCheck.add(currentBook.id);
  }

  let anyClosed = false;
  let closedBookInfo = null;
  let completedBookId = null; // <--- НОВАЯ ПЕРЕМЕННАЯ ДЛЯ ОТЗЫВА

  // Проверяем каждую книгу
  booksToCheck.forEach(bookId => {
    const b = BOOKS.find(x=>x.id===bookId);
    if (!b) return;
    const day=currentDay(b.id), date=dateByDay(b.id,day), bs=getBookState(b.id);
    if(!bs.days[date]) bs.days[date]={practices:[]};
    const count=bs.days[date].practices.length, total=b.practices.length;
    const threshold=Math.ceil(total*0.6);
    
    if(count >= threshold){
      const wasClosed = bs.days[date].closed;
      bs.days[date].closed = true;
      if (!wasClosed) {
         anyClosed = true;
         closedBookInfo = { b, day, count, total };
      }
    }
    
    // ПРОВЕРКА: Если книга пройдена полностью, запоминаем её ID
    if (countClosedDays(b.id) >= b.days) {
        completedBookId = b.id;
    }
  });

  saveState();
  
  // Если мы сейчас на главном экране, принудительно обновляем его
  if (document.getElementById('todayScreen') && !document.getElementById('todayScreen').classList.contains('hidden')) {
    renderToday();
  }

  // ПОКАЗЫВАЕМ ОКНО ОТЗЫВА, ЕСЛИ КНИГА ПРОЙДЕНА (с задержкой, чтобы не перекрывать окно с поздравлением)
    if (completedBookId) {
      // Сначала проверяем, есть ли письмо
      const letterShown = showFutureLetterIfExists(completedBookId);
      
      // Если письма нет, показываем обычное поздравление с отзывом
      if (!letterShown) {
        sb.from('reviews').select('id').eq('user_id', user.id).eq('book_id', completedBookId).maybeSingle().then(({data}) => {
            if (!data) {
                setTimeout(() => showBookCompleteSuccess(completedBookId), 1500); 
            }
        });
      }
    }

    if (anyClosed) {
    // Праздник!
    fireConfetti();
    playFanfare();
    
    const streak=calcStreak(closedBookInfo.b.id),best=calcBest(closedBookInfo.b.id);

    // --- АВТО-ПОСТ В ЛЕНТУ ---
    let postText = '';
    if (closedBookInfo.count === closedBookInfo.total) {
      postText = `🔥 Идеальный день! Все практики книги «${closedBookInfo.b.title}» выполнены. Огонь: ${streak} ${plural(streak,'день','дня','дней')}!`;
    } else if (streak === best && streak > 1) {
      postText = `🏆 Новый рекорд! ${streak} дней подряд в книге «${closedBookInfo.b.title}». Не сбавляю обороты!`;
    } else if (streak % 7 === 0) {
      postText = `⚡ Неделя силы! ${streak} дней непрерывной практики по книге «${closedBookInfo.b.title}».`;
    }

    if (postText && user) {
      sb.from('messages').insert({
        user_id: user.id,
        user_name: user.name,
        user_avatar: state.avatar || '👤',
        room: 'feed',
        text: postText
      }).then(() => {
        // Если мы сейчас в Ленте, обновим её
        if (currentScreen === 'community') loadFeed();
      }).catch(e => console.warn('Auto-post error:', e));
    }
    
    // Если просто дошли до конца ритуала, но день не закрыт
    const b = currentBook || BOOKS.find(x=>x.id===Array.from(booksToCheck)[0]);
    if (b) {
       const day=currentDay(b.id), date=dateByDay(b.id,day), bs=getBookState(b.id);
       const count=bs.days[date]?bs.days[date].practices.length:0;
       const total=b.practices.length;
       const threshold=Math.ceil(total*0.6);
       if(count>=2){
         showSimpleModal('💪','Хорошо идёшь!',count+' из '+total+'. Для закрытия нужно '+threshold+'.');
       } else {
         showSimpleModal('🌱','Начало положено',count+' из '+total+'. Маленький шаг — тоже шаг.');
       }
    }
  }
  
  // Показываем окно сохранения ТОЛЬКО для "Своей практики" (3 и более упражнений)
  if (window._isCustomRitualFlow && ritualQueue.length >= 3) {
    document.getElementById('saveRitualNameInput').value = 'Моя практика';
    setTimeout(() => {
      document.getElementById('saveRitualModal').classList.remove('hidden');
    }, 800);
    window._isCustomRitualFlow = false; 
  }
}

function getNextAch(bookId,streak){
  const closed=countClosedDays(bookId);
  const targets=[
    {name:'Три дня',remaining:3-streak,cond:streak<3&&streak>=1},
    {name:'Ранняя пташка',remaining:5-streak,cond:streak<5&&streak>=3},
    {name:'Неделя силы',remaining:7-streak,cond:streak<7&&streak>=5},
    {name:'Половина',remaining:15-closed,cond:closed<15&&closed>=7},
    {name:'Мастер утра',remaining:30-closed,cond:closed<30&&closed>=15}
  ];
  for(const t of targets){
    if(t.cond&&t.remaining>0)return{name:t.name,remaining:'Осталось '+t.remaining};
  }
  return null;
}
function markPracticeDoneForBook(bookId, pid){
  const day=currentDay(bookId),date=dateByDay(bookId,day),bs=getBookState(bookId);
  if(!bs.days[date])bs.days[date]={practices:[], earnedXP: 0};
  
  if(!bs.days[date].practices.includes(pid)){
    bs.days[date].practices.push(pid);
    
    // Считаем, сколько XP дать за эту практику
    const p = BOOKS.find(b => b.id === bookId)?.practices.find(x => x.id === pid);
    const baseTime = p ? p.time : 300;
    const xpAmount = getDiffData(baseTime, currentDifficulty).xp;
    
    bs.days[date].earnedXP = (bs.days[date].earnedXP || 0) + xpAmount;
    bs.days[date].lastDifficulty = currentDifficulty; // Сохраняем на память

    haptic('success');
    toast(`+${xpAmount} XP за практику!`, 'success');
  }
  saveState(bookId);
}

// ─── СВОЙ РИТУАЛ ───
function showRitualBuilder(){
  customRitual = [];
  renderRitualBuilder();
  hideAll();
  const rbScreen = document.getElementById('ritualBuilderScreen');
  if(rbScreen) rbScreen.classList.remove('hidden');
}
function updateCustomSummary(){
  const sum = document.getElementById('ritualBuilderSummary');
  if(!sum) return;

  // Всегда показываем плашку на экране сборки практики
  sum.style.display = 'flex';

  let totalSec = 0;
  customRitual.forEach(key => {
    const [bid, pid] = key.split(':');
    const b = BOOKS.find(x => x.id === bid);
    if(!b) return;
    const p = b.practices.find(x => x.id === pid);
    if(p) totalSec += p.time;
  });

  const countEl = document.getElementById('rbsCount');
  const timeEl = document.getElementById('rbsTime');
  const launchBtn = document.getElementById('rbsLaunchBtn'); // Находим кнопку по ID

  if(countEl) countEl.textContent = customRitual.length + ' ' + plural(customRitual.length, 'практика', 'практики', 'практик');
  if(timeEl) timeEl.textContent = '~' + Math.round(totalSec/60) + ' минут';

  // Логика блокировки кнопки
  if(launchBtn) {
    if(customRitual.length === 0) {
      launchBtn.disabled = true;
      launchBtn.style.opacity = '0.5';
      launchBtn.style.pointerEvents = 'none';
    } else {
      launchBtn.disabled = false;
      launchBtn.style.opacity = '1';
      launchBtn.style.pointerEvents = 'auto';
    }
  }
}

// Запуск своей практики (для кнопки "Запустить")
window._isCustomRitualFlow = true;
function launchCustomRitual(){
  if(!customRitual.length) return;
  
  ritualQueue = [];
  customRitual.forEach(key => {
    const [bid, pid] = key.split(':');
    const b = BOOKS.find(x => x.id === bid);
    if(!b) return;
    const p = b.practices.find(x => x.id === pid);
    if(p) ritualQueue.push({...p, _bookId: b.id, _bookTitle: b.title});
  });
  
  ritualIndex = 0;
  ritualHowIndex = 0;
  hideAll();
  const rEl = document.getElementById('ritualScreen');
  rEl.className = 'ritual';
  rEl.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;z-index:9999;display:flex;flex-direction:column;';
  document.body.classList.add('app-focus-mode');
  window.scrollTo(0,0);
  renderRitualStep();
}

async function startCustomRitualById(id) {
  const { data, error } = await sb.from('custom_practices').select('*').eq('id', id).single();
  if (error || !data) { toast('Ошибка загрузки практики', 'danger'); return; }
  
  customRitual = data.practices;
  launchCustomRitual();
}

// Открытие модалки сохранения (для кнопки "Сохранить")
function saveCustomRitual() {
  if(!customRitual.length) { toast('Сначала выбери практики', 'warm'); return; }
  document.getElementById('saveRitualNameInput').value = '';
  document.getElementById('saveRitualModal').classList.remove('hidden');
}

async function confirmSaveRitual() {
  const name = document.getElementById('saveRitualNameInput').value.trim();
  if(!name) { toast('Напиши название', 'warm'); return; }

  document.getElementById('saveRitualModal').classList.add('hidden');

  try {
    const { data, error } = await sb.from('custom_practices').insert({
      user_id: user.id,
      name: name,
      practices: customRitual
    });

    // ВОТ ЭТА СТРОКА ЛОВИТ ОШИБКУ (если база запретит запись)
    if (error) throw error;

    playSuccess();
    toast('Набор сохранен!');
    loadSavedRituals(); // Обновляем список в конструкторе
    
    // Если мы в библиотеке, обновляем её, чтобы появилась папка
    if (currentScreen === 'lib') renderLibrary();

  } catch(e) {
    console.error('Ошибка сохранения:', e);
    toast('Ошибка сохранения: ' + e.message, 'danger');
  }
}

// Загрузка сохраненного набора в конструктор
function loadSavedRitualToList(id) {
  const item = window._savedRitualsData.find(x => String(x.id) === String(id));
  if(!item) return;

  customRitual = [...item.practices]; 
  playClick();
  renderRitualBuilder(); 
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderRitualBuilder() {
  const activeBooks = BOOKS.filter(b => hasBookAccess(b.id));
  const listEl = document.getElementById('ritualBuilderList');

  if (!activeBooks.length) {
    listEl.innerHTML = `
      <div class="d-empty-state">
        <div class="d-empty-ico-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
        <div class="d-empty-title">Нет доступных книг</div>
        <div class="d-empty-text">Сначала добавь книги в библиотеку, чтобы собирать свои практики.</div>
      </div>
    `;
    return;
  }

  let html = `
    <div class="d-card-glass" style="margin-bottom: 16px; background: linear-gradient(135deg, rgba(124,92,255,0.15), transparent); border-color: rgba(124,92,255,0.3); padding: 16px; text-align: center;">
      <div style="font-size: 32px; margin-bottom: 8px;">🎨</div>
      <div style="font-size: 16px; font-weight: 900; color: var(--d-text); margin-bottom: 4px;">Твоя идеальная практика</div>
      <div style="font-size: 12px; color: var(--d-text-dim); line-height: 1.4;">Выбери любые упражнения из списка ниже. Приложение объединит их в один комплекс и запустит по порядку.</div>
    </div>
  `;
  
  const grouped = {};
  activeBooks.forEach(b => {
    const cat = b.category || 'Разное';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(b);
  });

  Object.keys(grouped).forEach((catName) => {
    html += `
      <div class="d-lib-folder" onclick="toggleBuilderCategory(this)" style="margin-top: 16px; margin-bottom: 12px;">
        <div class="d-lib-folder-left">
          <div class="d-lib-folder-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div>
            <div class="d-lib-folder-title">${catName}</div>
            <div class="d-lib-folder-count">${grouped[catName].length} книг</div>
          </div>
        </div>
        <div class="lc-arrow" style="font-size:20px; transition:0.3s;">›</div>
      </div>
      <div class="lib-category-list-bento" style="display:none; flex-direction:column; gap:8px; padding:4px 0 0 0;">
    `;

    grouped[catName].forEach(b => {
      const hasSelected = customRitual.some(key => key.startsWith(b.id + ':'));
      
      html += `
        <div class="d-card-glass" style="margin-bottom: 12px; padding: 14px;">
          <!-- Шапка книги -->
          <div onclick="toggleBuilderBook(this)" style="display:flex; align-items:center; gap:12px; cursor:pointer; margin-bottom: 10px;">
            <div style="width:44px; height:44px; border-radius:12px; background:var(--d-surface-2); display:flex; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0;">
              ${b.cover_url ? `<img src="${b.cover_url}" style="width:100%; height:100%; object-fit:cover;">` : getEmojiOrSvg(b.emoji, 28, b.title)}
            </div>
            <div style="flex:1;">
              <div style="font-size:15px; font-weight:800; color:var(--d-text);">${b.title}</div>
              <div style="font-size:11px; color:var(--d-text-dim);">${b.author}</div>
            </div>
            <div class="selected-badge ${hasSelected ? '' : 'hidden'}" style="font-size:10px; background:var(--d-accent); color:#fff; padding:3px 8px; border-radius:10px; font-weight:800; margin-right:8px;">выбрано</div>
            <div class="arrow-icon" style="font-size:22px; color:var(--muted); transition:transform 0.3s;">›</div>
          </div>
          
          <!-- Список практик -->
          <div class="builder-book-body" style="display: none; border-top: 1px solid var(--d-border); padding-top: 12px;">
      `;

      b.practices.forEach(p => {
        const key = b.id + ':' + p.id;
        const on = customRitual.includes(key);
        
        html += `
          <div class="ritual-builder-item ${on ? 'on' : ''}" style="margin-bottom:8px; padding:12px; border-radius:12px; background:var(--d-surface-2); display:flex; align-items:center; gap:12px; border:1px solid ${on ? 'var(--d-accent)' : 'transparent'};">
            <!-- Чекбокс -->
            <div class="rbi-check" onclick="event.stopPropagation(); toggleCustomPractice('${key}', this)" style="width:24px; height:24px; border-radius:8px; border:2px solid ${on ? 'var(--d-accent)' : 'var(--d-border)'}; background:${on ? 'var(--d-accent)' : 'transparent'}; color:${on ? '#fff' : 'transparent'}; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:900; cursor:pointer; flex-shrink:0; transition:0.2s;">✓</div>
            
            <!-- Текст -->
            <div class="rbi-body" onclick="event.stopPropagation(); previewPractice('${b.id}','${p.id}')" style="flex:1; cursor:pointer;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:6px;">
                  <span style="font-size:14px; font-weight:700; color:var(--d-text);">${escapeHtml(p.title)}</span>
                  <span style="font-size:10px; color:var(--d-gold); font-weight:800; display:flex; align-items:center; gap:2px;"><svg viewBox="0 0 24 24" fill="url(#gradStarFill)" stroke="url(#gradDefault)" stroke-width="1.5" style="width:10px; height:10px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> ${allPracticeRatings[p.id] ? allPracticeRatings[p.id].toFixed(1) : '5.0'}</span>
                </div>
                <span style="font-size:16px; color:var(--d-accent-2); opacity:0.7;">ⓘ</span>
              </div>
              <div style="font-size:11px; color:var(--d-text-dim); margin-top:4px;">${p.sub}</div>
            </div>
          </div>
        `;
      });

      html += `</div></div>`;
    });

    html += `</div>`;
  });

  if(listEl) listEl.innerHTML = html;
  
  updateCustomSummary();
  loadSavedRituals();
}

// Открытие/закрытие папки категории
function toggleBuilderCategory(el) {
  toggleAccordion(el);
}

// Открытие/закрытие книги
function toggleBuilderBook(el) {
  toggleAccordion(el);
}

// Постановка галочки (без перерисовки всего экрана)
function toggleCustomPractice(key, el) {
  const idx = customRitual.indexOf(key);
  const isAdding = idx < 0;

  if (isAdding) {
    customRitual.push(key);
  } else {
    customRitual.splice(idx, 1);
  }

  playClick();
  
  // Меняем вид галочки на лету
  if (el) {
    const parent = el.parentElement; 
    if (isAdding) {
      parent.classList.add('on');
      parent.style.borderColor = 'var(--accent)';
      el.style.background = 'var(--accent)';
      el.style.borderColor = 'var(--accent)';
      el.style.color = '#fff';
    } else {
      parent.classList.remove('on');
      parent.style.borderColor = 'transparent';
      el.style.background = 'transparent';
      el.style.borderColor = 'var(--border)';
      el.style.color = 'transparent';
    }
  }

  // Обновляем бейджик "выбрано" у книги
  const bookId = key.split(':')[0];
  if (el) {
    const bookEl = el.closest('.builder-book-item');
    if (bookEl) {
      const hasSelected = customRitual.some(k => k.startsWith(bookId + ':'));
      const badge = bookEl.querySelector('.selected-badge');
      if (badge) {
        if (hasSelected) badge.classList.remove('hidden');
        else badge.classList.add('hidden');
      }
    }
  }

  // Обновляем нижнюю плашку с количеством
  updateCustomSummary();
}

// НОВАЯ ФУНКЦИЯ ДЛЯ ОКНА ОПИСАНИЯ (исправлена)
function previewPractice(bookId, practiceId) {
  const b = BOOKS.find(x => x.id === bookId);
  if (!b) return;
  const p = b.practices.find(x => x.id === practiceId);
  if (!p) return;

  document.getElementById('previewContent').innerHTML = `
    <div style="text-align:center; margin-bottom:15px;">
      <div style="width: 64px; height: 64px; margin: 0 auto 12px auto;">${getEmojiOrSvg(p.ico, 64, p.title)}</div>
      <h2 style="font-size:20px; margin-bottom:5px;">${escapeHtml(p.title)}</h2>
      <div style="color:var(--muted); font-size:13px;">${p.sub}</div>
    </div>
    <div style="margin-bottom:15px;">
      <b style="color:var(--accent-2); text-transform:uppercase; font-size:11px;">Зачем это нужно</b>
      <p style="margin-top:4px;">${p.why}</p>
    </div>
    <div style="margin-bottom:15px;">
      <b style="color:var(--accent-2); text-transform:uppercase; font-size:11px;">Как делать</b>
      <ul style="padding-left:16px; margin-top:4px;">
        ${p.how.map(step => `<li style="margin-bottom:6px;">${step}</li>`).join('')}
      </ul>
    </div>
    <div style="background:rgba(255,184,0,0.1); padding:12px; border-radius:10px; border-left:3px solid var(--gold);">
      <b style="color:var(--gold); font-size:11px; text-transform:uppercase;">Совет</b>
      <p style="margin-top:4px; font-size:13px; font-style:italic;">${p.advice}</p>
    </div>
  `;
  document.getElementById('previewPracticeModal').classList.remove('hidden');
}

// ─── ОВЕРЛЕЙ ЗАВЕРШЕНИЯ ───
let currentMood = 0; // Переменная для хранения выбранного настроения

function showCompleteOverlay(practice, context) {
  stopMusic(true); 
  if (ttsAudio) { ttsAudio.pause(); ttsAudio.currentTime = 0; }
  
  // Генерируем смайлики
  currentMood = 0;
  const moodWrap = document.getElementById('moodTrackerContainer');
  if (moodWrap) {
    moodWrap.innerHTML = MOODS.map((svg, i) => `
      <div onclick="setMood(${i+1}, this)" class="mood-smiley" style="width:36px; height:36px; display:flex; align-items:center; justify-content:center; border-radius:50%; background:rgba(255,255,255,0.05); border:1px solid var(--d-border); cursor:pointer; transition:0.2s; color:var(--d-text-dim);">
        ${svg}
      </div>
    `).join('');
  }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  
  // Сброс звезд
  currentPracticeRating = 0;
  document.querySelectorAll('#practiceStarsContainer .p-star').forEach(s => s.style.color = 'var(--border)');
  fireConfetti();
  completeCallback = { practice, context };
  document.getElementById('completeTitle').textContent = 'Практика завершена';
  
  // Выбираем умную цитату
  let quoteHtml = '';
  if (currentBook && currentBook.quotes && currentBook.quotes.length > 0) {
    const randomQuote = currentBook.quotes[Math.floor(Math.random() * currentBook.quotes.length)];
    quoteHtml = `<div style="margin-top: 4px; font-style: italic; color: var(--accent-2); font-size: 13px;">«${randomQuote.text}»</div>`;
  }

  // Вопрос из дневника
  const journalPrompt = practice.journal_prompt
    ? `<div class="andger-journal-prompt" style="margin-top:12px;padding:12px;border:1px solid var(--border);border-radius:12px;color:var(--text);text-align:left;font-size:13px;line-height:1.5;">${escapeHtml(practice.journal_prompt)}</div>`
    : '';
    
  // Вставляем цитату и вопрос в отдельный блок под галочкой
  const extraEl = document.getElementById('completeExtraContent');
  if (extraEl) {
    extraEl.innerHTML = quoteHtml + journalPrompt;
  }

  // В подзаголовок пишем ТОЛЬКО название и время
  document.getElementById('completeSub').innerHTML = `${escapeHtml(practice.title || 'Практика')}<br>Время: ${Math.round((practice.time || 0)/60)} минут`;
  
  document.getElementById('completeOverlay').classList.remove('hidden');
}
async function completePracticeDone(){
  stopMusic();
  document.getElementById('completeOverlay').classList.add('hidden');
  if(!completeCallback)return;
  
  const{practice,context}=completeCallback;completeCallback=null;
  
  const noteInput = document.getElementById('completeNoteInput');
  const noteText = noteInput ? noteInput.value : '';
  
  try {
    if (noteText.trim()) {
      if (context === 'ritual') {
        const p = ritualQueue[ritualIndex];
        if (p) await savePracticeNote(p.title, noteText, p._bookId);
      } else {
        await savePracticeNote(practice.title, noteText, currentBook.id);
      }
      if(noteInput) noteInput.value = '';
    }
  } catch (e) { console.warn('Ошибка сохранения заметки:', e); }

  if(context==='ritual'){
    stopTimer();
    timerState='idle';
    timerRemaining = 0; // Сбрасываем таймер
    const p=ritualQueue[ritualIndex];
    if(p) markPracticeDoneForBook(p._bookId,p.id);
    playCheck();
    ritualIndex++;
    ritualHowIndex = 0;
    setTimeout(()=>renderRitualStep(),300);
  }else{
    markPracticeDone(practice.id);
    playCheck();
    fireConfetti();
    closePractice();
    finishRitual(true);
  }
  // Сохраняем настроение в БД
  if (currentMood > 0 && practice) {
    // Ищем правильный ID книги (если это ритуал, берем из практики)
    const targetBookId = practice._bookId || (currentBook ? currentBook.id : 'general');

    sb.from('moods').insert({
      user_id: user.id,
      practice_id: practice.id,
      book_id: targetBookId,
      mood: currentMood,
      date: todayStr()
    }).then(() => dlog('Mood saved'));
  }

  // Сохраняем оценку в БД и обновляем её в памяти
  if (currentPracticeRating > 0 && practice) {
    const targetBookId = practice._bookId || (currentBook ? currentBook.id : 'general');

    sb.from('practice_ratings').upsert({
      user_id: user.id,
      practice_id: practice.id,
      book_id: targetBookId,
      rating: currentPracticeRating
    }, { onConflict: 'user_id,practice_id' }).then(async () => {
      // Мгновенно обновляем рейтинг в памяти
      await loadBooksFromSupabase(); 
    });
  }
}
function completePracticeSkip(){
  stopMusic(); // <--- ДОБАВИЛИ ОСТАНОВКУ МУЗЫКИ
  document.getElementById('completeOverlay').classList.add('hidden');
  if(!completeCallback)return;
  const{context}=completeCallback;completeCallback=null;
  if(context==='ritual'){
    stopTimer();timerState='idle';
    ritualIndex++;
    ritualHowIndex = 0;
    setTimeout(()=>renderRitualStep(),300);
  }else closePractice();
}
function addFiveMinutes(){
  document.getElementById('completeOverlay').classList.add('hidden');
  timerRemaining=300;timerState='idle';
  const ctx=completeCallback?completeCallback.context:'practice';
  completeCallback=null;
  const timeEl=document.getElementById(ctx==='ritual'?'ritualTime':'timerDisplay');
  const btn=document.getElementById(ctx==='ritual'?'ritualTimerBtn':'timerBtn');
  if(timeEl)timeEl.textContent=formatTime(300);
  if(btn){btn.textContent='▶ Старт';btn.className='timer-big-btn'}
  startTimer(ctx);timerState='running';
  if(btn)btn.textContent='⏸ Пауза';
}

function openPractice(id){
  if(!currentBook){toast('Сначала выбери книгу','warm');return}
  
  const bs = getBookState(currentBook.id);
  
  if (!bs.start) {
    bs.start = todayStr();
    saveState();
    renderToday(); 
  }

  const day = currentDay(currentBook.id);
  const date = dateByDay(currentBook.id, day);
  
  if (bs.days[date] && bs.days[date].practices && bs.days[date].practices.includes(id)) {
    toast('Вы уже выполнили эту практику сегодня. Ждем завтра!', 'warm');
    return;
  }

  const p=currentBook.practices.find(x=>x.id===id);if(!p)return;
  currentPractice=normalizeVoiceTimeline(p); 
  
  const psTitleEl = document.getElementById('psTitle');
  if(psTitleEl) psTitleEl.textContent = p.title;
  
  const psSubEl = document.getElementById('psSub');
  if(psSubEl) psSubEl.textContent = p.sub;
  
  const psContentEl = document.getElementById('psContent');
  if(!psContentEl) {
    console.error('❌ Элемент #psContent не найден в HTML!');
    toast('Ошибка интерфейса: не найден контейнер практики.', 'danger');
    smartHome(); // <-- ВОЗВРАЩАЕМ НА ГЛАВНУЮ
    return;
  }
  
  psContentEl.innerHTML = buildPracticeHtml(p);
  
  hideAll(); 
  const psScreen = document.getElementById('practiceScreen');
  if(psScreen) {
    psScreen.classList.remove('hidden');
  } else {
    console.error('❌ Элемент #practiceScreen не найден в HTML!');
    toast('Ошибка интерфейса: не найден экран практики.', 'danger');
    smartHome(); // <-- ВОЗВРАЩАЕМ НА ГЛАВНУЮ
    return;
  }
  
  document.getElementById('bottomNav').classList.add('hidden');
  document.body.style.overflow='hidden';
  document.body.classList.add('app-focus-mode');
  
  // Принудительный сброс скролла в самый верх
  setTimeout(() => {
    psContentEl.scrollTop = 0;
    window.scrollTo(0, 0);
  }, 50);
  
  currentDifficulty = 'normal'; // Сбрасываем на норму
  timerRemaining = p.time || 300;
  timerState = 'idle';
  updateSoundUI();
  
  // Отрисовываем кнопки сложности и обновляем таймер
  renderDifficultySelector(p.time || 300, 'practice');
  const timerDisplay = document.getElementById('timerDisplay');
  if (timerDisplay) timerDisplay.textContent = formatTime(timerRemaining);
}

function closePractice(){
  // Если таймер идет или на паузе — спрашиваем подтверждение
  if (timerState === 'running' || timerState === 'paused') {
    legacyConfirmAdapter(
      'Прервать практику?', 
      'Прогресс текущей практики не сохранится. Вы уверены?', 
      () => {
        executeClosePractice();
      }
    );
  } else {
    executeClosePractice();
  }
}

function executeClosePractice() {
  document.getElementById('practiceScreen').classList.add('hidden');
  restoreAppScrolling();
  stopTimer(); timerState='idle'; stopMusic();
  
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (ttsAudio) { ttsAudio.pause(); ttsAudio.currentTime = 0; }
  const subP = document.getElementById('practiceSubtitle');
  if (subP) { subP.textContent = ''; subP.classList.remove('show'); }
  
  currentPractice=null;
  
  const b = currentBook;
  if (b) {
    const closed = countClosedDays(b.id);
    if (closed >= b.days) {
      sb.from('reviews').select('id').eq('user_id', user.id).eq('book_id', b.id).maybeSingle().then(({data}) => {
        if (!data) showReviewModal(b.id);
      });
    }
  }
  
  smartHome();
}


async function markPracticeFromScreen(id){
  if (timerState !== 'done') {
    playError();
    toast('Практика не завершена. Дождись окончания таймера.', 'danger');
    return;
  }
  executeMarkPractice(id);
}

async function executeMarkPractice(id) {
  const noteInput = document.getElementById('practiceNoteInput');
  const noteText = noteInput ? noteInput.value : '';
  const p = currentBook.practices.find(x => x.id === id);
  
  if (noteText.trim() && p) {
    await savePracticeNote(p.title, noteText, currentBook.id);
  }

  markPracticeDone(id);
  playCheck();
  fireConfetti(); 
  
  toast('🔥 +10 к огоньку!', 'success');
  haptic('fanfare');
  
  closePractice();   // Закрываем экран практики
  finishRitual(true);
}

// ─── МОДАЛКИ ───
function showSimpleModal(emoji,title,text){
  document.getElementById('modalEmoji').textContent=emoji;
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalText').textContent=text;
  document.getElementById('modalAchList').innerHTML='';
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('modalAchList').innerHTML='';
}
function showAchModal(emoji,title,text,items){
  document.getElementById('modalEmoji').textContent=emoji;
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalText').textContent=text;
  const list=items.map(i=>`<div class="modal-ach-item"><div class="ico">${i.ico}</div><div class="txt">${i.txt}<small>${i.sub}</small></div></div>`).join('');
  document.getElementById('modalAchList').innerHTML=list?`<div class="modal-ach-list">${list}</div>`:'';
  document.getElementById('modal').classList.remove('hidden');
}
function closeModal(){
  const modal = document.getElementById('modal');
  if(modal) modal.classList.add('hidden');
  
  // Безопасная проверка окна дыхания (если его нет на экране, ошибки не будет)
  const breathModal = document.getElementById('breathModal');
  if(breathModal && !breathModal.classList.contains('hidden')){
    closeBreath();
  }
  
  // Безопасная проверка ритуала
  const ritualScreen = document.getElementById('ritualScreen');
  if(ritualScreen && !ritualScreen.classList.contains('hidden')){
    closeRitual();
  }
}

// ─── КОНФЕТТИ ───
function fireConfetti(){
  const box=document.getElementById('confetti');
  if(!box) return; // Защита, если элемента нет
  
  box.classList.remove('hidden');
  const colors=['#7c5cff','#818cf8','#ff9d00','#ffb800','#3ecf8e'];
  for(let i=0;i<50;i++){
    const el=document.createElement('div');
    el.className='conf-piece';
    el.style.left=Math.random()*100+'%';
    el.style.background=colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDuration=(2+Math.random()*2)+'s';
    el.style.animationDelay=(Math.random()*0.3)+'s';
    if(Math.random()>0.5)el.style.borderRadius='50%';
    box.appendChild(el);
  }
  setTimeout(()=>{box.innerHTML='';box.classList.add('hidden')},4500);
}

// God Mode UI helpers. Controls are shown only after server-side admin check.
function ensureGodModeStyles() {
  if (document.getElementById('andgerGodModeStyles')) return;
  const style = document.createElement('style');
  style.id = 'andgerGodModeStyles';
  style.textContent = `
    .andger-god-actions{display:none;gap:6px;align-items:center;margin-left:auto;position:relative;z-index:5;flex-shrink:0}
    body.andger-god-mode .andger-god-actions{display:flex}
    .andger-god-action{width:30px;height:30px;border-radius:10px;border:1px solid rgba(255,255,255,.14);background:rgba(22,20,38,.88);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.2)}
    .andger-god-action:hover{transform:translateY(-1px);border-color:var(--accent-2)}
    .today-counter-card{display:block;min-height:112px;box-sizing:border-box}
    .tcc-head{display:flex;align-items:center;justify-content:space-between;gap:12px}
    .tcc-ring{display:block;width:60px;height:60px;visibility:visible;opacity:1}
    .hero-action-btn{display:flex;visibility:visible;opacity:1;min-height:76px;box-sizing:border-box;position:relative;z-index:1;overflow:visible}
    .book-row,.admin-item,.active-book-card{position:relative}
  `;
  document.head.appendChild(style);
}
function godModeActions(type, id, label) {
  if (!(typeof isAdmin === 'function' && isAdmin())) return '';
  const safeId = String(id).replace(/\\/g,'\\\\').replace(/'/g,"\\'");
  const safeLabel = String(label || 'элемент').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/'/g,'&#39;');
  
  const iconEdit = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`;
  const iconTrash = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;

  if (type === 'post') return `<span class="andger-god-actions" onclick="event.stopPropagation()"><div class="action-btn-glass danger" title="Удалить публикацию" onclick="event.stopPropagation(); confirmGodDeletePost('${safeId}','${safeLabel}')">${iconTrash}</div></span>`;
  if (type === 'book') return `<span class="andger-god-actions" onclick="event.stopPropagation()"><div class="action-btn-glass" title="Редактировать книгу" onclick="event.stopPropagation(); showBookEditor('${safeId}')">${iconEdit}</div><div class="action-btn-glass danger" title="Удалить книгу" onclick="event.stopPropagation(); confirmGodDeleteBook('${safeId}','${safeLabel}')">${iconTrash}</div></span>`;
  if (type === 'user') return `<span class="andger-god-actions" onclick="event.stopPropagation()"><div class="action-btn-glass" title="Открыть пользователя" onclick="event.stopPropagation(); openAdminUser('${safeId}')">${iconEdit}</div><div class="action-btn-glass danger" title="Удалить пользователя" onclick="event.stopPropagation(); confirmGodDeleteUser('${safeId}','${safeLabel}')">${iconTrash}</div></span>`;
  return '';
}
function confirmGodDeletePost(id, title) {
  if (!(typeof isAdmin === 'function' && isAdmin())) return toast('Недостаточно прав', 'danger');
  openAndgerConfirm('Удалить публикацию?', `Публикация «${title}» будет удалена из ленты.`, async () => {
    try {
      const { error } = await sb.from('messages').delete().eq('id', id).eq('room', 'feed');
      if (error) throw error;
      toast('Публикация удалена');
      await loadFeed();
    } catch (e) { console.error('[ANDGER] delete feed post failed', e); toast('Не удалось удалить публикацию: ' + (e.message || e), 'danger'); }
  });
}
function confirmGodDeletePrivateMessage(id) {
  if (!(typeof isAdmin === 'function' && isAdmin())) return toast('Недостаточно прав', 'danger');
  openAndgerConfirm('Удалить сообщение?', 'Сообщение будет удалено из переписки, если политика базы разрешает это действие.', async () => {
    try {
      const { error } = await sb.from('private_messages').delete().eq('id', id);
      if (error) throw error;
      toast('Сообщение удалено');
      await loadDialog();
    } catch (e) { console.error('[ANDGER] delete private message failed', e); toast('Удаление запрещено политикой базы или не удалось: ' + (e.message || e), 'danger'); }
  });
}
function confirmGodDeleteBook(id, title) {
  if (!(typeof isAdmin === 'function' && isAdmin())) return toast('Недостаточно прав','danger');
  openAndgerConfirm('Удалить книгу?', `Книга «${title}» будет удалена из базы. Это действие нельзя отменить.`, async () => {
    try {
      const { error } = await sb.from('books').delete().eq('id', id);
      if (error) throw error;
      BOOKS = BOOKS.filter(b => String(b.id) !== String(id));
      adminAllBooks = (adminAllBooks || []).filter(b => String(b.id) !== String(id));
      toast('Книга удалена');
      if (typeof renderLibrary === 'function') await renderLibrary();
      if (typeof loadAdminBooks === 'function') await loadAdminBooks();
      if (typeof renderToday === 'function') renderToday();
    } catch (e) { console.error('[ANDGER] book delete failed', e); toast('Не удалось удалить книгу: ' + (e.message || e), 'danger'); }
  });
}
function confirmGodDeleteUser(id, name) {
  if (!(typeof isAdmin === 'function' && isAdmin())) return toast('Недостаточно прав','danger');
  openAndgerConfirm('Удалить пользователя?', `Пользователь «${name}» и связанные данные будут удалены без возможности восстановления.`, async () => { await adminDelete(id, true); });
}

// Режим редактора: только для администратора, подтверждённого серверным профилем.
function setGodMode(enabled = true) {
  ensureGodModeStyles();
  const allowed = typeof isAdmin === 'function' && isAdmin();
  // Администратору не требуется дополнительное ручное включение режима.
  godModeEnabled = Boolean(allowed);
  const toggle = document.getElementById('andgerGodModeToggle');
  const panel = document.getElementById('andgerGodModePanel');
  if (toggle) {
    toggle.checked = godModeEnabled;
    toggle.closest('label, .toggle-row, .settings-row')?.classList.add('hidden');
  }
  if (panel) panel.classList.toggle('hidden', !allowed);
  document.body.classList.toggle('andger-god-mode', godModeEnabled);
  try { sessionStorage.removeItem('andger_god_mode'); } catch (_) { console.debug('[ANDGER] ignored:', _); }
  document.querySelectorAll('[data-god-mode-only]').forEach(el => el.classList.toggle('hidden', !godModeEnabled));
  try {
    if (typeof renderToday === 'function' && document.getElementById('todayScreen') && !document.getElementById('todayScreen').classList.contains('hidden')) renderToday();
    if (typeof renderLibrary === 'function' && document.getElementById('libScreen') && !document.getElementById('libScreen').classList.contains('hidden')) renderLibrary();
    if (typeof renderAdminList === 'function' && document.getElementById('adminUserList') && adminAllUsers) renderAdminList(adminAllUsers);
    if (typeof renderAdminBookList === 'function' && document.getElementById('adminBookList') && adminAllBooks) renderAdminBookList(adminAllBooks);
  } catch (e) { console.warn('[ANDGER] admin UI refresh skipped', e); }
  return godModeEnabled;
}
function syncGodModeUI() { return setGodMode(true); }

function openAndgerConfirm(title, message, onAccept) {
  const modal = document.getElementById('andgerConfirmModal');
  if (!modal) { legacyConfirmAdapter(title, message, onAccept); return; }
  const titleEl = document.getElementById('andgerConfirmTitle');
  const messageEl = document.getElementById('andgerConfirmText');
  const acceptBtn = document.getElementById('andgerConfirmAccept');
  if (titleEl) titleEl.textContent = title || 'Подтвердите действие';
  if (messageEl) messageEl.textContent = message || 'Это действие нельзя отменить.';
  window._andgerConfirmAction = typeof onAccept === 'function' ? onAccept : null;
  if (acceptBtn) acceptBtn.onclick = () => closeAndgerConfirm(true);
  modal.classList.remove('hidden');
}
function closeAndgerConfirm(accepted = false) {
  const modal = document.getElementById('andgerConfirmModal');
  if (modal) modal.classList.add('hidden');
  const action = window._andgerConfirmAction;
  window._andgerConfirmAction = null;
  if (accepted && typeof action === 'function') action();
}

  async function renderProfile(){
  try {
    // 1. Считаем общую статистику по всем книгам
    let totalXP = 0;
    let maxStreak = 0;
    let totalPracticesDone = 0;
    let totalMinutes = 0;

    BOOKS.forEach(b => {
      const s = calcStreak(b.id);
      if (s > maxStreak) maxStreak = s;

      const bs = getBookState(b.id);
      Object.values(bs.days).forEach(rec => {
        if (rec.practices) {
          totalPracticesDone += rec.practices.length;
          rec.practices.forEach(pid => {
            const p = b.practices.find(x => x.id === pid);
            if(p && p.time) totalMinutes += Math.round(p.time / 60);
          });
          totalXP += rec.practices.length * 10;
        }
        if (rec.closed) totalXP += 50;
      });
    });

    // 2. Считаем уровень и прогресс
    const stats = getGlobalStats();

    // 3. Заполняем верхнюю карточку
    const avaEl = document.getElementById('profileAva');
    if (avaEl) {
      avaEl.innerHTML = getAvatarHtml(state.avatar, 48) + 
        `<div class="avatar-edit-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
        </div>`;
    }
   
    const topAva = document.getElementById('profileTopAvatar');
    if (topAva) topAva.innerHTML = getAvatarHtml(state.avatar, 20);
    
    const nameEl = document.getElementById('profileFullName');
    if(nameEl) nameEl.value = ((user.name || '') + (user.lastName ? ' ' + user.lastName : '')).trim();
    const headerNameEl = document.getElementById('profileHeaderName');
    if (headerNameEl) headerNameEl.textContent = user.name || 'Профиль';
    
    const idEl = document.getElementById('profileUserId');
    if(idEl) idEl.textContent = 'ID: #' + user.id.slice(0, 8).toUpperCase();
    
    const profileLvlEl = document.getElementById('profileLevelName');
    if (profileLvlEl) {
      profileLvlEl.textContent = `${stats.lvlIco} ${stats.lvlName}`;
      if (stats.lvl === 6) {
        // Золотой стиль для максимального уровня
        profileLvlEl.style.background = 'var(--d-gold-grad)';
        profileLvlEl.style.color = '#fff';
        profileLvlEl.style.borderColor = 'transparent';
        profileLvlEl.style.boxShadow = '0 0 15px rgba(255,184,0,0.5)';
      } else {
        // Обычный фиолетовый стиль
        profileLvlEl.style.background = 'rgba(124,92,255,0.15)';
        profileLvlEl.style.color = 'var(--d-accent-2)';
        profileLvlEl.style.borderColor = 'rgba(124,92,255,0.3)';
        profileLvlEl.style.boxShadow = 'none';
      }
    }

    const profileXpTextEl = document.getElementById('profileXpText');
    if (profileXpTextEl) {
      profileXpTextEl.textContent = stats.lvl === 6 ? 'Максимальный уровень!' : (stats.xpInCurrentLvl).toLocaleString('ru-RU') + ' / ' + (stats.xpNeededForNext).toLocaleString('ru-RU') + ' XP';
      profileXpTextEl.style.color = stats.lvl === 6 ? 'var(--d-gold)' : '';
    }

    const profileXpFillEl = document.getElementById('profileXpFill');
    if (profileXpFillEl) {
      profileXpFillEl.style.width = stats.xpPct + '%';
      if (stats.lvl === 6) {
        // Золотое переливание для макс. уровня
        profileXpFillEl.style.background = 'linear-gradient(90deg, #ffb800, #ff7a2a, #ffb800)';
        profileXpFillEl.style.backgroundSize = '200% 100%';
        profileXpFillEl.style.animation = 'shimmerProgress 2s linear infinite';
        profileXpFillEl.style.boxShadow = '0 0 10px rgba(255,184,0,0.6)';
      } else {
        // Обычный градиент
        profileXpFillEl.style.background = 'linear-gradient(90deg, var(--d-accent), var(--d-warm))';
        profileXpFillEl.style.backgroundSize = 'auto';
        profileXpFillEl.style.animation = 'none';
        profileXpFillEl.style.boxShadow = 'none';
      }
    }

    // 4. Заполняем 4 плитки статистики
    const timeStr = totalMinutes > 60 ? Math.floor(totalMinutes/60) + 'ч ' + (totalMinutes%60) + 'м' : totalMinutes + 'м';
    document.getElementById('statFire').textContent = maxStreak;
    document.getElementById('statPractices').textContent = totalPracticesDone;
    document.getElementById('statTime').textContent = timeStr;

    // 5. Считаем подписки (асинхронно)
    try {
      const { count: subs } = await sb.from('friends').select('*', { count: 'exact', head: true }).eq('user_id', user.id);
      const { count: fans } = await sb.from('friends').select('*', { count: 'exact', head: true }).eq('friend_id', user.id);
      document.getElementById('profileSubsCount').textContent = subs || 0;
      document.getElementById('profileSubscribersCount').textContent = fans || 0;
    } catch(e) { console.error('Ошибка загрузки подписок', e); }

    // Загружаем график настроения
    loadMoodChart();
    syncGodModeUI();

        // 6. Показываем кнопку Админа (Щит), если это админ
        const adminBtn = document.getElementById('adminBtnProfile');
        if (adminBtn) {
          if (isAdmin()) adminBtn.classList.remove('hidden');
          else adminBtn.classList.add('hidden');
        }

        // Всегда показываем Рейтинг и Магазин
        const ratingRow = document.getElementById('profileRatingRow');
        const shopRow = document.getElementById('profileShopRow');
        if (ratingRow) ratingRow.style.display = 'flex';
        if (shopRow) shopRow.style.display = 'flex';

  } catch(e) {
    console.error('❌ renderProfile Error:', e);
  }
}

async function saveName(){
  const fullVal = document.getElementById('profileFullName').value.trim();
  if(!fullVal) return;
  const nameParts = fullVal.split(' ');
  const n = nameParts[0];
  const ln = nameParts.slice(1).join(' ');
  
  user.name = n;
  user.lastName = ln;
  
  await sb.from('profiles').update({name:n, last_name:ln}).eq('id',user.id);
  playSuccess();toast('Профиль сохранен');
}
function setAvatar(e){
  state.avatar=e;saveState();
  sb.from('profiles').update({avatar:e}).eq('id',user.id).then(()=>{});
  playClick();renderProfile();
}

// ─── НАСТРОЙКИ ───
function renderSettings(){
  updateSoundUI();
  updateHapticUI();
  const pushTog = document.getElementById('pushToggle');
  if(pushTog) pushTog.classList.toggle('on', state.pushEnabled === true);
  
  const mEl = document.getElementById('morningTime');
  const eEl = document.getElementById('eveningTime');
  if(mEl) mEl.textContent = state.morningTime || '07:00';
  if(eEl) eEl.textContent = state.eveningTime || '21:00';
  
  const vSel = document.getElementById('voiceSelect');
  if(vSel) vSel.value = state.voice || 'alena';
  
  // Подсветка темы
  document.querySelectorAll('.theme-card').forEach(el => {
    if (el.dataset.theme === (state.theme || 'dark')) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
  
    // Подсветка выбранного голоса
  document.querySelectorAll('.voice-option').forEach(el => {
    if (el.dataset.voice === (state.voice || 'alena')) el.classList.add('active');
    else el.classList.remove('active');
  });
}

async function setTheme(theme){
  state.theme=theme;
  applyTheme();
  renderSettings();
  sb.from('profiles').update({theme}).eq('id',user.id).then(()=>{});
  playClick();
}
function applyTheme(){
  const root=document.documentElement;
  let effective=state.theme||'dark';
  if(effective==='auto'){
    effective=window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';
  }
  if(effective==='light')root.classList.add('light');
  else root.classList.remove('light');
  // Подсветка выбранного варианта
  document.querySelectorAll('.theme-card').forEach(el=>{
    el.classList.toggle('on',el.dataset.theme===(state.theme||'dark'));
  });
}
// ─── PUSH ───
// Функция для конвертации ключа Push
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function togglePush(){
  if(state.pushEnabled){
    state.pushEnabled=false;
    sb.from('profiles').update({push_enabled:false}).eq('id',user.id).then(()=>{});
    renderSettings();
    toast('Уведомления отключены','warm');
    return;
  }
  if(!('Notification' in window)){
    toast('Ваш браузер не поддерживает уведомления');return;
  }
  
  try {
    const perm = await Notification.requestPermission();
    if(perm !== 'granted'){
      toast('Вы отклонили разрешение на уведомления. Разрешите их в настройках браузера.');
      return;
    }

    const reg = await navigator.serviceWorker.getRegistration();
    if(!reg || !reg.pushManager){
      toast('На iPhone уведомления работают только если добавить приложение на экран «Домой».');
      return;
    }

    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array('BNGYBvArNFBwktikpbdOCcr-7tByXq7mBcVsM0aTc-4FysNXIrQekR_hmBuKR3rCtdMYwQ_lzcnnEXFIva5b2HQ')
    });
    
    state.pushSubscription = sub.toJSON();
    state.pushEnabled = true;
    
    await sb.from('profiles').update({push_enabled:true}).eq('id',user.id);
    await sb.from('notification_prefs').upsert({
      user_id:user.id,
      push_enabled:true,
      push_subscription:state.pushSubscription,
      morning_time:state.morningTime||'07:00',
      evening_time:state.eveningTime||'21:00'
    },{onConflict:'user_id'});

    renderSettings();
    toast('Включено');
    
  } catch (e) {
    console.error(e);
    toast('Ошибка при включении: ' + e.message);
  }
}

// ─── ПОМОЩЬ ───
async function renderHelp(){
  const list=document.getElementById('faqList');
  if(!list)return;
  
  list.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Загрузка...</div>';

  try {
    const { data } = await sb.from('faq').select('*').order('sort_order');
    if (!data || data.length === 0) {
      list.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Пока нет вопросов.</div>';
      return;
    }

    list.innerHTML = data.map(item => `
      <div class="faq-item" onclick="toggleFaq(this)">
        <div class="faq-q">${escapeHtml(item.question)}<span class="fq-arrow">›</span></div>
        <div class="faq-a">${escapeHtml(item.answer)}</div>
      </div>
    `).join('');
  } catch(e) {
    list.innerHTML = '<div style="color:var(--danger); text-align:center;">Ошибка загрузки</div>';
  }
}

function toggleFaq(el){
  el.classList.toggle('open');
}

// ─── УВЕДОМЛЕНИЯ ───
async function loadNotifications(){
  try{
    const{data}=await sb.from('notifications')
      .select('*').eq('user_id',user.id)
      .order('created_at',{ascending:false}).limit(50);
    notifications=data||[];
    updateNotifBadge();
  }catch(e){notifications=[]}
}
function updateNotifBadge(){
  const unread = notifications.filter(n => !n.read).length;
  const badges = document.querySelectorAll('.notif-badge'); // Ищем ВСЕ бейджи
  badges.forEach(badge => {
 if(unread > 0){
      badge.textContent = unread > 9 ? '9+' : unread;
      badge.classList.remove('hidden');
    } else {
      badge.textContent = '';
      badge.classList.add('hidden');
    }
  });

  // Безопасно устанавливаем бейдж на иконку приложения (iOS 16.4+)
  if ('setAppBadge' in navigator) {
    let isDayClosed = false;
    if (currentBook) {
      const bs = getBookState(currentBook.id);
      const rec = bs.days[todayStr()];
      isDayClosed = rec && rec.closed;
    }
    
    const totalBadge = unread + (isDayClosed ? 0 : 1); // +1, если день не закрыт
    if (totalBadge > 0) {
      navigator.setAppBadge(totalBadge).catch(()=>{});
    } else {
      navigator.clearAppBadge().catch(()=>{});
    }
  }
}
async function renderNotifications(){
  const el = document.getElementById('notifList');
  if(!el) return;
  
  if(!notifications.length){
    el.innerHTML='<div class="d-empty-state" style="margin-top:20px; background:transparent; border:none;"><div class="d-empty-title" style="font-size:15px;">Тишина</div><div class="d-empty-text">У вас пока нет уведомлений</div></div>';
    return;
  }

  // Собираем ID отправителей, чтобы загрузить их аватарки
  const fromIds = notifications.map(n => {
    let p = n.payload || {};
    if (typeof p === 'string') { try { p = JSON.parse(p); } catch(e) { p = {}; } }
    return p.from || p.from_user || p.sender_id;
  }).filter(Boolean);

  let profileMap = {};
  if (fromIds.length > 0) {
    try {
      const { data } = await sb.from('profiles').select('id, avatar').in('id', [...new Set(fromIds)]);
      (data || []).forEach(p => profileMap[p.id] = p);
    } catch (e) { console.debug('[ANDGER] ignored:', e); }
  }
  
  el.innerHTML=notifications.map(n=>{
    let p = n.payload || {};
    if (typeof p === 'string') {
      try { p = JSON.parse(p); } catch(e) { p = {}; }
    }
    
    let ico='🔔', title='', text='';
    const fromId = p.from || p.from_user || p.sender_id;
    
    if(n.type==='msg'){
      ico='💬';
      title = p.from_name || p.name || 'Новое сообщение';
      text = p.text || 'Откройте чат, чтобы прочитать';
    }
    else if(n.type==='like'){
      ico='❤️';
      title='Новый лайк';
      text=p.from_name ? 'Твой пост оценили: ' + p.from_name : (p.text||'Кому-то понравился твой пост');
    }
    else if(n.type==='comment'){ico='💬';title='Новый комментарий';text=p.text||'Кто-то оставил комментарий'}
    else if(n.type==='ach'){ico='🏆';title='Новая награда';text=p.title||''}
    else if(n.type==='admin'){ico='📢';title=p.title||'Объявление';text=p.text||''} 
    else if(n.type==='friend'){ico='🤝';title='Новый друг';text=p.text||'Кто-то добавил вас в друзья'}
    else {title='Уведомление';text=p.text||''}

    // Если есть аватарка — показываем её, иначе красивую иконку
    let leftIconHtml = '';
    if (fromId && profileMap[fromId]) {
      leftIconHtml = `<div class="d-avatar" style="width: 44px; height: 44px; border-radius: 14px; flex-shrink:0; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">${getAvatarHtml(profileMap[fromId].avatar, 24)}</div>`;
    } else {
      leftIconHtml = `<div class="ni-ico" style="font-size: 20px; width: 44px; height: 44px; border-radius: 14px; background: rgba(124,92,255,0.1); border: 1px solid rgba(124,92,255,0.2); display:flex; align-items:center; justify-content:center; flex-shrink:0;">${ico}</div>`;
    }
    
    return `<div class="notif-item ${n.read?'read':'unread'}" onclick="openNotification('${n.id}', this)">
      ${leftIconHtml}
      <div class="ni-body">
        <div class="ni-title">
          <span>${escapeHtml(title)}</span>
        </div>
        <div class="ni-text">${escapeHtml(text)}</div>
      </div>
      <div class="ni-time">${timeAgo(n.created_at)}</div>
    </div>`;
  }).join('');
}
async function openNotification(id, el){
  try {
    // Принудительно приводим оба ID к строке для надежного поиска
    const n = notifications.find(x => String(x.id) === String(id));
    if (!n) { 
      toast('Уведомление не найдено', 'danger'); 
      if (el) el.style.opacity = '1';
      return; 
    }
    if (!n) return;
    
    // Визуальный отклик, что нажалось
    if (el) el.style.opacity = '0.5';

    // Мгновенно помечаем прочитанным
    if (!n.read) {
      sb.from('notifications').update({read:true}).eq('id',id).then(() => {});
      n.read = true;
      updateNotifBadge();
    }
    
    let p = n.payload || {};
    if (typeof p === 'string') {
      try { p = JSON.parse(p); } catch(e) { p = {}; }
    }

    // --- ЛОГИКА ДЛЯ СООБЩЕНИЙ (САМАЯ ВАЖНАЯ) ---
    if (n.type === 'msg') {
      let p = n.payload || {};
      if (typeof p === 'string') {
        try { p = JSON.parse(p); } catch(e) { p = {}; }
      }
      
      const fromId = p.from || p.from_user || p.sender_id || p.user_id;
      
      if (fromId) {
        let profile = { id: fromId, name: p.from_name || 'Пользователь', avatar: '👤' };
        try {
          const { data } = await sb.from('profiles').select('*').eq('id', fromId).maybeSingle();
          if (data) profile = data;
        } catch(e) {
          console.warn('Профиль не найден, открываем с заглушкой');
        }
        
        // Открываем диалог
        openDialog(fromId, profile);
        
      } else {
        // Если ID скрыт, открываем список сообщений
        await showCommunityScreen();
        setTimeout(() => {
          const tabs = document.querySelectorAll('#communityScreen .tab-pill');
          if (tabs && tabs[1]) switchCommunityTab('chats', tabs[1]);
        }, 100);
        toast('Открыт список сообщений', 'warm');
      }
      if (el) el.style.opacity = '1';
    }
    
    // --- ЛОГИКА ДЛЯ ЛАЙКОВ И КОММЕНТАРИЕВ ---
    else if (n.type === 'like' || n.type === 'comment') {
      await showCommunityScreen();
      const tabs = document.querySelectorAll('#communityScreen .tab-pill');
      if (tabs && tabs[0]) switchCommunityTab('feed', tabs[0]);
      
      // Достаем ID поста из уведомления
      let p = n.payload || {};
      if (typeof p === 'string') { try { p = JSON.parse(p); } catch(e) { p = {}; } }
      const msgId = p.msg_id || p.message_id || p.post_id;
      
      if (msgId) {
        // Ждем полсекунды, чтобы Лента успела загрузиться, и скроллим к посту
        setTimeout(() => {
          const commentsEl = document.getElementById(`comments-${msgId}`);
          if (commentsEl) {
            // Если это комментарий, принудительно открываем блок с комментариями
            if (n.type === 'comment' && !commentsEl.classList.contains('open')) {
               toggleComments(msgId);
            }
            
            const postEl = commentsEl.closest('.d-card-glass');
            if (postEl) {
              // Плавно скроллим к посту
              postEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
              
              // Подсвечиваем пост фиолетовой рамкой на 2 секунды, чтобы человек понял, куда попал
              const originalBorder = postEl.style.borderColor;
              postEl.style.borderColor = 'var(--d-accent)';
              postEl.style.boxShadow = '0 0 15px rgba(124,92,255,0.3)';
              setTimeout(() => { 
                postEl.style.borderColor = originalBorder; 
                postEl.style.boxShadow = 'none';
              }, 2000);
            }
          }
        }, 400);
      }
      if (el) el.style.opacity = '1';
    }
    
    // --- ЛОГИКА ДЛЯ ОСТАЛЬНЫХ ---
    else if (n.type === 'admin') {
      showSimpleModal('📢', p.title || 'Объявление', p.text || '');
      if (el) el.style.opacity = '1';
    }
    else if (n.type === 'friend' && (p.from || p.user_id)) {
      viewUserProfile(p.from || p.user_id, 'feed');
      if (el) el.style.opacity = '1';
    }
    else if (n.type === 'feedback') {
      if (isAdmin()) showAdmin('feedback');
      else showSimpleModal('📬', 'Спасибо!', 'Твой отзыв получен.');
      if (el) el.style.opacity = '1';
    }

    renderNotifications(); 
  } catch (error) {
    console.error('Ошибка при открытии уведомления:', error);
    if (el) el.style.opacity = '1';
    toast('Не удалось открыть уведомление', 'danger');
  }
}
    
async function createNotification(userId, type, payload) {
  // Уведомления для 'msg' и 'like' теперь создаются автоматически на уровне Базы Данных (через SQL триггеры).
  if (type === 'msg' || type === 'like') {
    return; 
  }
  
  try {
    const { error } = await sb.from('notifications').insert({ 
      user_id: userId, 
      type: type, 
      payload: payload 
    });
    
    if (error) {
      // Если ошибка связана с правилами безопасности (RLS), просто выводим в консоль
      if (error.code === '42501' || error.status === 403) {
        console.warn('⚠️ Уведомление заблокировано правилами БД. Выполни SQL-скрипт.');
      } else {
        throw error;
      }
    }
  } catch (e) {
    console.warn('⚠️ Ошибка отправки уведомления:', e.message);
  }
}

// ─── ПУБЛИЧНЫЙ ПРОФИЛЬ ───
async function ensureSlug(){
  if(state.slug)return state.slug;
  const slug='u'+user.phone.slice(-6);
  await sb.from('profiles').update({public_slug:slug}).eq('id',user.id);
  state.slug=slug;saveState();
  return slug;
}

async function showPublicProfile(){
  await ensureSlug();
  document.getElementById('ppAva').innerHTML = getAvatarHtml(state.avatar || 'user', 72);
  document.getElementById('ppName').textContent=user.name||'Друг';
  let totalFire=0,totalBest=0,booksCount=0;
  BOOKS.forEach(b=>{
    const s=calcStreak(b.id),best=calcBest(b.id);
    totalFire=Math.max(totalFire,s);totalBest=Math.max(totalBest,best);
    if(countClosedDays(b.id)>0)booksCount++;
  });
  const lv=getLevel(countClosedDays(currentBook?.id||BOOKS[0]?.id||''));
  document.getElementById('ppStatus').textContent=`${lv.ico} ${lv.name}`;
  const setStat = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  setStat('ppFire', totalFire);
  setStat('ppBooks', booksCount);
  hideAll();
  document.getElementById('publicProfileScreen').classList.remove('hidden');
  
  const msgBtn = document.getElementById('publicMsgBtn');
  if(msgBtn) msgBtn.style.display = 'flex';
  const friendBtn = document.getElementById('publicFriendBtn');
  if(friendBtn) friendBtn.style.display = 'flex';
}
async function copyPublicLink(){
  await ensureSlug(); // Ждем генерации ссылки
  const url='https://andger.ru/u/'+(state.slug||'me');
  copyToClipboard(url);
  toast('Скопировано');
}

// ─── РЕФЕРАЛ ───
async function ensureReferral(){
  if(state.referralCode)return state.referralCode;
  const code=(user.name||'user').toLowerCase().slice(0,5)+user.phone.slice(-4);
  await sb.from('profiles').update({referral_code:code}).eq('id',user.id);
  state.referralCode=code;saveState();
  return code;
}
async function copyReferral(){
  await ensureReferral();
  const url='https://andger.ru/?ref='+state.referralCode;
  copyToClipboard(url);
  toast('Скопировано');
}

// ─── ДНЕВНИК ───
let journalFilter = 'all'; // Глобальная переменная для фильтра

async function renderJournal(){
  const journalAvaEl = document.getElementById('journalAvatar');
  if (journalAvaEl) journalAvaEl.innerHTML = getAvatarHtml(state.avatar, 26);
  
  const fullName = (user && user.name) ? user.name : 'Друг';
  const nameEl = document.getElementById('journalBookTitle');
  if (nameEl) nameEl.textContent = fullName;
  
  // 1. Фильтры книг
  const filterWrap = document.getElementById('journalFilters');
  if (filterWrap) {
    const filterList = [{ id: 'all', title: 'Все записи', author: 'Общий дневник', emoji: 'book', days: 0, isAll: true }];
    
    // Показываем книгу, если она начата ИЛИ если в ней уже есть записи
    BOOKS.filter(b => {
        const bs = getBookState(b.id);
        return bs.start || Object.keys(bs.journal || {}).length > 0;
    }).forEach(b => filterList.push(b));

    let filterHtml = '';
    let dotsHtml = '';
    
    filterList.forEach(item => {
      const isActive = journalFilter === item.id;
      
      if (item.isAll) {
        filterHtml += `
          <div class="d-lib-book-card" onclick="setJournalFilter('${item.id}')" style="width: calc(100% - 20px); flex-shrink: 0; scroll-snap-align: start; ${isActive ? 'border-color: var(--d-accent); box-shadow: 0 0 15px rgba(124,92,255,0.15); background: rgba(124,92,255,0.05);' : 'opacity: 0.6;'}">
            <div class="d-lib-book-cover" style="background:var(--d-gradient-soft);">
              ${getEmojiOrSvg('book', 36, 'Журнал')}
            </div>
            <div class="d-lib-book-body">
              <div class="d-lib-book-title">Все записи</div>
              <div class="d-lib-book-author">Общий дневник</div>
              <div style="font-size:10px; color:var(--d-text-dim); margin-top:8px;">Все твои инсайты в одном месте</div>
            </div>
          </div>
        `;
      } else {
        const b = BOOKS.find(x => x.id === item.id);
        const closed = countClosedDays(b.id);
        const pct = Math.round(closed / (b.days || 1) * 100);
        const day = currentDay(b.id);

        filterHtml += `
          <div class="d-lib-book-card" onclick="setJournalFilter('${item.id}')" style="width: calc(100% - 20px); flex-shrink: 0; scroll-snap-align: start; ${isActive ? 'border-color: var(--d-accent); box-shadow: 0 0 15px rgba(124,92,255,0.15);' : 'opacity: 0.6;'}">
            <div class="d-lib-book-cover" style="padding:0; overflow:hidden;">${b.cover_url ? `<img src="${b.cover_url}" style="width:100%; height:100%; object-fit:cover;">` : getEmojiOrSvg(b.emoji, 36, b.title)}</div>
            <div class="d-lib-book-body">
              <div class="d-lib-book-title">${b.title}</div>
              <div class="d-lib-book-author">${b.author || 'Неизвестный автор'}</div>
              <div style="font-size:10px; color:var(--d-text-dim); margin-bottom:6px;">День ${day} из ${b.days}</div>
              <div class="d-lib-book-bar"><div class="d-lib-book-fill" style="width:${pct}%"></div></div>
              <div class="d-lib-book-pct">${pct}%</div>
            </div>
          </div>
        `;
      }
      dotsHtml += `<div class="b-dot ${isActive ? 'on' : ''}"></div>`;
    });
    
    // Если нет ни одной начатой книги, показываем подсказку под свайпером
    if (filterList.length === 1) {
        filterHtml += `
          <div style="width: calc(100% - 20px); flex-shrink: 0; scroll-snap-align: start; display:flex; align-items:center; justify-content:center; padding: 20px; color: var(--d-text-dim); font-size: 12px; text-align:center; border: 1px dashed var(--d-border); border-radius: 16px;">
            Начни проходить книгу, и она появится здесь
          </div>
        `;
        dotsHtml += `<div class="b-dot"></div>`;
    }
    
    filterWrap.innerHTML = filterHtml;
    const dotsEl = document.getElementById('journalDots');
    if (dotsEl) dotsEl.innerHTML = dotsHtml;
  }

  // 2. Записи
  let query = sb.from('notes').select('*').eq('user_id', user.id).order('created_at', {ascending: false});
  if (journalFilter !== 'all') {
    query = query.eq('book_id', journalFilter);
  }
  const { data: notes } = await query;

  let historyHtml = '';
  if (!notes || !notes.length) {
    historyHtml = `
      <div class="d-empty-state">
        <div class="d-empty-ico-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
        </div>
        <div class="d-empty-title">Здесь пока пусто</div>
        <div class="d-empty-text">Выполни практику на главной, чтобы записать свой первый инсайт в дневник.</div>
      </div>
    `;
  } else {
    historyHtml = notes.map(n => {
      const d = new Date(n.created_at);
      const dateStr = `${d.getDate()} ${['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'][d.getMonth()]} · ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
      const b = BOOKS.find(x => x.id === n.book_id);
      
      // Берем обложку, если есть, иначе эмодзи
      const coverHtml = b ? (b.cover_url ? `<img src="${b.cover_url}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">` : `<span style="font-size:20px;">${b.emoji || '📚'}</span>`) : '📚';

      return `
        <div class="d-card-glass" style="position:relative; padding:16px; margin-bottom:12px; border-radius: 16px;">
          
          <div style="display:flex; gap:12px; margin-bottom:12px; align-items:center;">
            <!-- Обложка книги -->
            <div style="width:36px; height:50px; border-radius:8px; background:var(--d-surface-2); display:flex; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
              ${coverHtml}
            </div>
            
            <!-- Заголовок и дата -->
            <div style="flex:1;">
              <div style="font-size:12px; font-weight:800; color:var(--d-accent-2); line-height:1.2; margin-bottom:4px;">${escapeHtml(n.practice_title)}</div>
              <div style="font-size:10px; color:var(--d-text-dim); font-weight:600;">${dateStr}</div>
            </div>
          </div>
          
          <!-- Текст заметки -->
          <div style="font-size:14px; color:var(--d-text); line-height:1.5; white-space:pre-wrap;">${escapeHtml(n.text)}</div>
          
          <!-- Кнопка удаления -->
          <div style="display:flex; justify-content:flex-end; margin-top:12px;">
            <div class="action-btn-glass danger" onclick="deleteNote('${n.id}')" title="Удалить запись">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }



  // 3. Статистика записей
  const statsHtml = `
    <div class="d-card-glass" style="padding:16px; text-align:center; margin-bottom:16px;">
      <div style="font-size:28px; font-weight:900; color:var(--d-accent-2);">${notes ? notes.length : 0}</div>
      <div style="font-size:10px; color:var(--d-text-dim); text-transform:uppercase; font-weight:800; margin-top:4px; letter-spacing:1px;">Записей</div>
    </div>
  `;

  // Загружаем сегодняшние ответы на вопросы
  let todayJournal = { q1: '', q2: '', q3: '' };
  try {
    const { data } = await sb.from('journals').select('*').eq('user_id', user.id).eq('date', todayStr()).maybeSingle();
    if (data) todayJournal = data;
  } catch (e) { console.debug('[ANDGER] ignored:', e); }
  
  const histEl = document.getElementById('journalHistory');
  if (histEl) histEl.innerHTML = statsHtml + historyHtml;
}

function setJournalFilter(bookId) {
  journalFilter = bookId;
  renderJournal(); // Перерисовываем всё
  playClick();
}

async function deleteNote(noteId) {
  legacyConfirmAdapter('Удалить запись?', 'Она пропадет из дневника навсегда.', async () => {
    await sb.from('notes').delete().eq('id', noteId);
    playSuccess();
    renderJournal();
  });
}
function dateToDay(bookId,date){
  const bs=getBookState(bookId);
  if(!bs.start)return '?';
  const start=new Date(bs.start+'T00:00:00');
  const d=new Date(date+'T00:00:00');
  return Math.floor((d-start)/86400000)+1;
}
async function saveJournal(){
  const today = todayStr();
  const q1 = document.getElementById('jq1').value;
  const q2 = document.getElementById('jq2').value;
  const q3 = document.getElementById('jq3').value;

    const journalData = {
    user_id: user.id,
    date: today,
    q1: q1,
    q2: q2,
    q3: q3
  };

  if (!navigator.onLine) {
    addToOfflineQueue('journal', journalData);
    playSuccess();
    const msg = document.getElementById('journalMsg');
    if(msg) msg.textContent = '✓ Сохранено (оффлайн)';
    setTimeout(() => { if(msg) msg.textContent = ''; }, 2000);
    return;
  }

  try {
    await sb.from('journals').upsert(journalData, { onConflict: 'user_id,date' });

    playSuccess();
    const msg = document.getElementById('journalMsg');
    msg.textContent = '✓ Сохранено';
    setTimeout(() => msg.textContent = '', 2000);
    renderJournal(); // Перерисовываем, чтобы обновилась история
  } catch(e) {
    toast('Ошибка сохранения', 'danger');
  }
}

// ═══════════════════════════════════════════════
// СООБЩЕСТВО
// ═══════════════════════════════════════════════

let communityTab='feed';
function switchCommunityTab(tab,el){
  communityTab=tab;
  document.querySelectorAll('.tab-pill').forEach(t=>t.classList.remove('on'));
  if(el)el.classList.add('on');
  
  // Показываем/скрываем контент
  document.getElementById('communityFeed').classList.toggle('hidden',tab!=='feed');
  document.getElementById('communityChats').classList.toggle('hidden',tab!=='chats');
  document.getElementById('communityPeople').classList.toggle('hidden',tab!=='people');
  
  // Окно ввода показываем ТОЛЬКО в Ленте
  const inputWrap = document.getElementById('feedInputWrap');
  if(inputWrap) {
    inputWrap.style.display = (tab === 'feed') ? 'flex' : 'none';
  }

  if(tab==='feed')loadFeed();
  else if(tab==='chats')loadChats();
  else loadPeople();
}
let rankFilter = 'all';
let feedFilter = 'all'; // 'all' или 'friends'

function toggleFeedFilter() {
  feedFilter = feedFilter === 'all' ? 'friends' : 'all';
  const btn = document.getElementById('feedFilterBtn');
  if (btn) {
    btn.classList.toggle('on', feedFilter === 'friends');
    btn.textContent = feedFilter === 'friends' ? '🌍 Весь мир' : '👥 Только друзья';
  }
  playClick();
  loadFeed();
}

async function loadFeed(){
  const feedList = document.getElementById('feedList');
  if (!feedList) return;
  renderChallenge(); 

  feedList.innerHTML = `
    <div class="d-card-glass" style="height:100px; animation: shimmer 2s infinite linear;"></div>
    <div class="d-card-glass" style="height:120px; animation: shimmer 2s infinite linear;"></div>
  `;
  
  let query = sb.from('messages').select('*').eq('room','feed');
  
  if (feedFilter === 'friends') {
    const { data: fData } = await sb.from('friends').select('friend_id').eq('user_id', user.id);
    let friendIds = (fData || []).map(f => f.friend_id);
    friendIds.push(user.id); // Свои посты тоже показываем
    
    if (friendIds.length > 0) {
      query = query.in('user_id', friendIds);
    }
  }

  const {data, error} = await query.order('created_at',{ascending:false}).limit(50);
  
  if(error || !data || !data.length){
    feedList.innerHTML = `
      <div class="d-empty-state">
        <div class="d-empty-ico-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </div>
        <div class="d-empty-title">Тишина в эфире</div>
        <div class="d-empty-text">Стань первым, кто поделится своими успехами и мыслями с сообществом.</div>
      </div>
    `;
    return;
  }

  const ids=data.map(m=>m.id);
  let likes=[],comments=[];
  try{
    const{data:l}=await sb.from('likes').select('*').in('message_id',ids);
    likes=l||[];
    const{data:c}=await sb.from('comments').select('*').in('message_id',ids).order('created_at');
    comments=c||[];
  }catch (e) { console.debug('[ANDGER] ignored:', e); }

  feedList.innerHTML=data.map(m=>{
    const own=m.user_id===user.id;
    const t=timeAgo(m.created_at);
    const postLikes=likes.filter(l=>l.message_id===m.id);
    const postComments=comments.filter(c=>c.message_id===m.id);
    
    const myLike = postLikes.find(l => l.user_id === user.id);
    const myType = myLike ? (myLike.type || 'heart') : null;
    
    const countHeart = postLikes.filter(l => (l.type === 'heart' || !l.type)).length;
    const countFire = postLikes.filter(l => l.type === 'fire').length;
    const countClap = postLikes.filter(l => l.type === 'clap').length;
    const countBrain = postLikes.filter(l => l.type === 'brain').length;

    return `
      <div class="d-card-glass" style="margin-bottom:10px; position:relative;">
        <div class="fp-head" onclick="viewUserProfile('${m.user_id}', 'feed')" style="cursor:pointer; display:flex; gap:10px; align-items:center; margin-bottom:10px;">
          <div class="d-avatar" style="width:36px; height:36px;">${getAvatarHtml(m.user_avatar, 20)}</div>
          <div style="flex:1; min-width:0;">
            <div style="display:flex; align-items:center; gap:6px; font-size:13px; font-weight:800; color:var(--d-text);">
              <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(m.user_name||'Аноним')}${own?' · ты':''}</span>
              ${own || isAdmin() ? `<div class="action-btn-glass danger" style="width:20px; height:20px; padding:0; margin-left:auto;" onclick="event.stopPropagation(); ${own ? `deleteFeedPost(${m.id})` : `confirmGodDeletePost(${m.id}, 'пост')`}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px; height:12px;"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></div>` : ''}
            </div>
            <div style="font-size:10px; color:var(--d-text-dim);">${t}</div>
          </div>
        </div>
        <div style="font-size:14px; line-height:1.5; color:var(--d-text); margin-bottom:12px; word-wrap:break-word;">${escapeHtml(m.text)}</div>
        
               <div style="display:flex; justify-content:space-between; border-top:1px solid var(--d-border); padding-top:10px; align-items: center;">
          <div style="display:flex; gap:16px; align-items:center;">
            <!-- Сердце -->
            <div class="fp-action${myType === 'heart' ? ' on' : ''}" data-type="heart" onclick="toggleLike(${m.id},'heart',this)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${myType === 'heart' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <span>${countHeart > 0 ? countHeart : ''}</span>
            </div>
            <!-- Огонь -->
            <div class="fp-action${myType === 'fire' ? ' on' : ''}" data-type="fire" onclick="toggleLike(${m.id},'fire',this)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${myType === 'fire' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
              <span>${countFire > 0 ? countFire : ''}</span>
            </div>
            <!-- Звезда (бывшие хлопки) -->
            <div class="fp-action${myType === 'clap' ? ' on' : ''}" data-type="clap" onclick="toggleLike(${m.id},'clap',this)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${myType === 'clap' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>${countClap > 0 ? countClap : ''}</span>
            </div>
            <!-- Мозг -->
            <div class="fp-action${myType === 'brain' ? ' on' : ''}" data-type="brain" onclick="toggleLike(${m.id},'brain',this)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${myType === 'brain' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
              <span>${countBrain > 0 ? countBrain : ''}</span>
            </div>
          </div>
          
          <div style="display:flex; gap:16px; align-items:center;">
            <div style="display:flex; gap:4px; color:var(--d-text-dim); cursor:pointer;" onclick="toggleComments(${m.id})">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
               <span style="font-size:12px; font-weight:700;">${postComments.length}</span>
            </div>
            
            <!-- НОВАЯ КНОПКА ЖАЛОБЫ (только для чужих постов) -->
            ${!own ? `
            <div style="display:flex; gap:4px; color:var(--d-text-dim); cursor:pointer; opacity:0.6;" onclick="reportPost(${m.id}, '${m.user_id}')" title="Пожаловаться">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
            </div>` : ''}
          </div>
        </div>
        
        <div class="feed-comments" id="comments-${m.id}" style="margin-top:12px; padding-top:12px; border-top:1px solid var(--d-border);">
                    ${postComments.map(c=>`
            <div style="display:flex; gap:8px; margin-bottom:8px; align-items:flex-start;">
              <div class="d-avatar" style="width:24px; height:24px;">${getAvatarHtml(c.user_avatar, 14)}</div>
              <div style="flex:1; min-width:0;">
                <div style="font-size:10px; font-weight:800; color:var(--d-accent-2);">${escapeHtml(c.user_name||'Аноним')}</div>
                <div style="font-size:12px; color:var(--d-text); word-break:break-word;">${escapeHtml(c.text)}</div>
              </div>
              ${c.user_id === user.id ? `<div onclick="deleteComment('${c.id}')" style="color:var(--muted); cursor:pointer; padding:2px 4px; font-size:12px; flex-shrink:0;" title="Удалить комментарий">✕</div>` : ''}
            </div>
          `).join('')}
          <div style="display:flex; gap:8px; margin-top:8px;">
            <input type="text" id="cin-${m.id}" placeholder="Ответить..." style="flex:1; background:var(--d-surface-2); border:1px solid var(--d-border); border-radius:100px; padding:6px 12px; color:var(--d-text); font-size:12px;">
            <button onclick="sendComment(${m.id},'${m.user_id}')" style="background:var(--d-accent); border:none; border-radius:50%; width:32px; height:32px; color:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left:-2px;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

async function sendFeedPost(){
  const inp=document.getElementById('feedInput');
  const text=inp.value.trim();
  if(!text)return;
  inp.value='';
  try{
    const{error}=await sb.from('messages').insert({
      user_id:user.id,
      user_name:user.name,
      user_avatar:state.avatar||'👤',
      room:'feed',
      text
    });
    if(error)throw error;
    playCheck();loadFeed();
  }catch(e){toast('Ошибка отправки','danger')}
}

async function toggleLike(msgId, type, el) {
  const postEl = el.closest('.feed-post, .d-card-glass');
  if (!postEl || !user || !user.id) return;

  // Добавляем анимацию прыжка при нажатии
  el.classList.remove('jump');
  void el.offsetWidth; // Трюк для перезапуска CSS-анимации, если жать быстро
  el.classList.add('jump');
  setTimeout(() => el.classList.remove('jump'), 300);
  
  // Мгновенный визуальный отклик (оптимистичный UI)
  const wasSame = el.classList.contains('on');
  const previous = postEl.querySelector('.fp-action.on');
  const previousType = previous ? previous.dataset.type : null;

  postEl.querySelectorAll('.fp-action').forEach(btn => {
    btn.classList.remove('on');
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', 'none');
  });
  
  if (!wasSame) {
    el.classList.add('on');
    const svg = el.querySelector('svg');
    if (svg) svg.setAttribute('fill', 'currentColor');
  }

  try {
    const { data: existing, error: selectError } = await sb.from('likes').select('*')
      .eq('message_id', msgId).eq('user_id', user.id).maybeSingle();
    if (selectError) throw selectError;

                if (existing) {
              if (wasSame || existing.type === type || (!existing.type && type === 'heart')) {
                await sb.from('likes').delete().eq('message_id', msgId).eq('user_id', user.id);
              } else {
                await sb.from('likes').update({ type }).eq('message_id', msgId).eq('user_id', user.id);
              }
            } else if (!wasSame) {
              await sb.from('likes').insert({ message_id: msgId, user_id: user.id, type });
              
              const { data: post } = await sb.from('messages').select('user_id').eq('id', msgId).maybeSingle();
              if (post && post.user_id !== user.id) {
                createNotification(post.user_id, 'like', {
                  text: (user.name || 'Кто-то') + ' отреагировал на твой пост', from: user.id, msg_id: msgId
                }); // Убрали await, чтобы не тормозить обновление UI
              }
            }
            
            // ЗВУК И ВИБРАЦИЯ ДЛЯ ЛЮБОЙ РЕАКЦИИ (лайк, смена, удаление)
            playCheck();

    // Мгновенно обновляем цифры
    const { data: allLikes } = await sb.from('likes').select('user_id,type').eq('message_id', msgId);
    const myLike = (allLikes || []).find(l => l.user_id === user.id);
    const myType = myLike ? (myLike.type || 'heart') : null;
    
    ['heart', 'fire', 'clap', 'brain'].forEach(t => {
      const action = postEl.querySelector(`.fp-action[data-type="${t}"]`);
      if (!action) return;
      const count = (allLikes || []).filter(l => l.type === t || (!l.type && t === 'heart')).length;
      const span = action.querySelector('span');
      if (span) span.textContent = count > 0 ? count : '';
      action.classList.toggle('on', myType === t);
      const svg = action.querySelector('svg');
      if (svg) svg.setAttribute('fill', myType === t ? 'currentColor' : 'none');
    });

  } catch(e) {
    console.error(e);
    toast('Ошибка при обновлении лайка', 'danger');
    // Откат UI при ошибке
    postEl.querySelectorAll('.fp-action').forEach(btn => {
      const active = btn.dataset.type === previousType;
      btn.classList.toggle('on', active);
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', active ? 'currentColor' : 'none');
    });
  }
}

function toggleComments(msgId){
  const el=document.getElementById('comments-'+msgId);
  if(!el) return;
  const isOpen = el.classList.contains('open');
  if (isOpen) {
    el.classList.remove('open');
    el.style.display = 'none';
  } else {
    el.classList.add('open');
    el.style.display = 'block';
  }
}

async function sendComment(msgId,postAuthorId){
  const inp=document.getElementById('cin-'+msgId);
  if (!inp) return; // Защита, если поле не найдено
  const text=inp.value.trim();
  if(!text)return;
  inp.value='';
  try{
    await sb.from('comments').insert({
      message_id:msgId,
      user_id:user.id,
      user_name:user.name,
      user_avatar:state.avatar||'👤',
      text
    });
    playCheck();
    if(postAuthorId&&postAuthorId!==user.id){
      await createNotification(postAuthorId,'comment',{
        text:(user.name||'Кто-то')+': '+text.slice(0,50),
        from:user.id,
        msg_id:msgId
      });
    }
    loadFeed();
  }catch(e){toast('Ошибка','danger')}
}

// ─── REALTIME ЛЕНТА ───
function subscribeFeed(){
  if(feedChannel)return;
  feedChannel=sb.channel('feed-rt')
    .on('postgres_changes',{event:'*',schema:'public',table:'messages',filter:'room=eq.feed'},(payload)=>{
      // Подгружаем ленту только если пришел НОВЫЙ пост или старый удалили
      if(communityTab==='feed'&&!document.getElementById('communityScreen').classList.contains('hidden')){
        if (payload.eventType === 'INSERT' || payload.eventType === 'DELETE') {
          loadFeed();
        }
      }
    })
    // Убрали слушатели для likes и comments, чтобы лента не моргала
    .subscribe();
}
async function loadChats(){
  const el=document.getElementById('chatsList');
  if(!el)return;

  el.innerHTML = `
    <div class="d-card-glass" style="height:70px; animation: shimmer 2s infinite linear; margin-bottom:8px;"></div>
    <div class="d-card-glass" style="height:70px; animation: shimmer 2s infinite linear; margin-bottom:8px;"></div>
  `;

  try{
    const{data:msgs,error}=await sb.from('private_messages')
      .select('*')
      .or(`from_user.eq.${user.id},to_user.eq.${user.id}`)
      .order('created_at',{ascending:false})
      .limit(200);
      
    if(error)throw error;

    const dialogs={};
    (msgs||[]).forEach(m=>{
      const otherId=m.from_user===user.id?m.to_user:m.from_user;
      if(!dialogs[otherId])dialogs[otherId]={otherId,last:m,unread:0};
      if(m.to_user===user.id&&!m.read)dialogs[otherId].unread++;
    });

    const ids=Object.keys(dialogs);
    if(!ids.length){
      el.innerHTML = `
        <div class="d-empty-state">
          <div class="d-empty-ico-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div class="d-empty-title">Здесь пока тихо</div>
          <div class="d-empty-text">Перейди во вкладку «Рейтинг», найди единомышленника и напиши ему первым!</div>
        </div>
      `;
      return;
    }

    const{data:profiles}=await sb.from('profiles').select('id,name,avatar').in('id',ids);
    const profMap={};
    (profiles||[]).forEach(p=>profMap[p.id]=p);

    let html='';
    ids.forEach(id=>{
      const d=dialogs[id];
      const p=profMap[id]||{name:'Участник',avatar:'👤'};
      const preview=d.last.from_user===user.id?'Ты: ':'';
      
      html+=`
        <div class="d-lib-book-card" onclick="openDialog('${id}')" style="padding:10px 12px; margin-bottom:8px;">
          <div class="d-lib-book-cover" style="width:44px; height:44px; border-radius:50%; background:var(--d-surface-2);">
            ${getAvatarHtml(p.avatar, 24)}
          </div>
          <div class="d-lib-book-body" style="display:flex; flex-direction:column; justify-content:center;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div class="d-lib-book-title" style="font-size:14px; margin:0;">${escapeHtml(p.name||'Участник')}</div>
              <div style="font-size:9px; color:var(--d-text-dim);">${timeAgo(d.last.created_at)}</div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:2px;">
              <div style="font-size:12px; color:var(--d-text-dim); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:180px;">${preview}${escapeHtml((d.last.text||'').slice(0,40))}</div>
              ${d.unread>0?`<div style="background:var(--d-accent); color:#fff; font-size:9px; font-weight:900; padding:2px 6px; border-radius:10px;">${d.unread}</div>`:''}
            </div>
          </div>
        </div>
      `;
    });
    el.innerHTML=html;

  }catch(e){
    el.innerHTML='<div style="color:var(--d-danger);text-align:center;padding:20px">Ошибка загрузки</div>';
  }
}

// ─── ОТКРЫТЬ ДИАЛОГ ───
let currentDialogProfile=null;
async function openDialog(otherId,p){
  if(otherId===user.id){toast('Это ты 😄','warm');return}
  currentDialogUserId=otherId;
  if(!p){
    const{data}=await sb.from('profiles').select('id,name,avatar').eq('id',otherId).single();
    p=data||{name:'Участник',avatar:'👤'};
  }
  currentDialogProfile=p;
  document.getElementById('dialogName').textContent=(p.name||'Участник').toUpperCase();
  
  // Показываем статус
  const statusEl = document.getElementById('dialogStatus');
  if (statusEl) {
    if (p.last_seen) {
      const diffMins = Math.floor((Date.now() - new Date(p.last_seen).getTime()) / 60000);
      if (diffMins < 2) {
        statusEl.textContent = 'в сети'; // Меньше 2 минут назад
        statusEl.style.color = 'var(--success)'; // Зеленый
      } else {
        statusEl.textContent = 'в сети: ' + timeAgo(p.last_seen);
        statusEl.style.color = 'var(--muted)';
      }
    } else {
      statusEl.textContent = 'недавно';
    }
  }
  document.getElementById('dialogMessages').innerHTML='<div style="color:var(--muted);text-align:center;padding:20px">Загрузка...</div>';
  hideAll();
  document.getElementById('dialogScreen').classList.remove('hidden');
  document.getElementById('dialogInputWrap').style.display='flex';
  
  // ВОТ ЭТИ ДВЕ СТРОЧКИ НУЖНО ДОБАВИТЬ:
  document.getElementById('bottomNav').classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('on'));

  window.scrollTo(0, document.body.scrollHeight);
  window.scrollTo(0,0);

  // Пометить входящие как прочитанные
  try{
    await sb.from('private_messages').update({read:true})
      .eq('from_user',otherId).eq('to_user',user.id).eq('read',false);
  }catch (e) { console.debug('[ANDGER] ignored:', e); }

  await loadDialog();
  subscribeDialog();
  setTimeout(()=>{
    const inp=document.getElementById('dialogInput');
    if(inp)inp.focus();
  },300);

    // Слушаем ввод текста, чтобы отправить сигнал "Печатает..."
  const inp = document.getElementById('dialogInput');
  if(inp) {
    inp.addEventListener('input', () => {
      if(dialogChannel) {
        dialogChannel.send({
          type: 'broadcast',
          event: 'typing',
          payload: { user_id: user.id }
        });
      }
    });
  }
}

async function loadDialog(){
  if(!currentDialogUserId)return;
  const el=document.getElementById('dialogMessages');
  try{
    const{data,error}=await sb.from('private_messages')
      .select('*')
      .or(`and(from_user.eq.${user.id},to_user.eq.${currentDialogUserId}),and(from_user.eq.${currentDialogUserId},to_user.eq.${user.id})`)
      .order('created_at',{ascending:true})
      .limit(100);
    if(error)throw error;
    if(!data||!data.length){
      el.innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px;font-size:13px">Напиши первым 👋</div>';
      return;
    }
        el.innerHTML=data.map(m=>{
      const own=m.from_user===user.id;
      const t=new Date(m.created_at).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});
      
      // Логика галочек: если сообщение мое, показываем статус
      let tick = '';
      if (own) {
        if (m.read) {
          // Прочитано (две фиолетовые галочки)
          tick = '<span style="color:#7c5cff; margin-left:4px; font-weight:bold;">✓✓</span>';
        } else {
          // Отправлено (одна серая галочка)
          tick = '<span style="color:rgba(255,255,255,0.4); margin-left:4px;">✓</span>';
        }
      }

      return `<div class="msg-bubble ${own?'own':'other'}">
        ${escapeHtml(m.text)}
        <span class="msg-time" style="display:flex; align-items:center; justify-content:flex-end; gap:4px;">
          ${t} ${tick} 
          ${own || isAdmin() ? `
            <div class="msg-delete-btn" onclick="event.stopPropagation(); ${own ? `deletePrivateMessage('${m.id}')` : `confirmGodDeletePrivateMessage('${m.id}')`}" title="Удалить">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>` : ''}
        </span>
      </div>`;
    }).join('');
    el.scrollTop=el.scrollHeight;
    window.scrollTo(0,document.body.scrollHeight);
  }catch(e){
    el.innerHTML='<div style="color:var(--danger);text-align:center;padding:20px">Ошибка</div>';
  }
}


async function sendPrivateMessage(){
  const inp=document.getElementById('dialogInput');
  const text=inp.value.trim();
  if(!text||!currentDialogUserId)return;
  inp.value='';
  try{
    const { data, error } = await sb.from('private_messages').insert({
      from_user:user.id,
      to_user:currentDialogUserId,
      text
    }).select().single();
    
    if (error) throw error;
    
    playCheck();
    // Уведомление получателю (передаем ID сообщения)
    await createNotification(currentDialogUserId,'msg',{
      text: text.slice(0, 50),
      from_name: user.name || 'Пользователь',
      from: user.id,
      msg_id: data.id
    });
    await loadDialog();
  }catch(e){
    console.error(e);
    toast('Ошибка отправки','danger');
  }
}

function subscribeDialog(){
  if(dialogChannel)sb.removeChannel(dialogChannel);
  if(!currentDialogUserId)return;
  
  dialogChannel=sb.channel('dialog-'+currentDialogUserId)
    .on('postgres_changes',
      {event:'INSERT',schema:'public',table:'private_messages',filter:`to_user=eq.${user.id}`},
      (payload)=>{
        if(payload.new.from_user===currentDialogUserId){
          loadDialog();
          sb.from('private_messages').update({read:true}).eq('id',payload.new.id).then(()=>{});
        }
      })
    // ДОБАВЛЯЕМ СЛУШАТЕЛЬ "ПЕЧАТАЕТ..."
    .on('broadcast', { event: 'typing' }, (payload) => {
      if(payload.payload.user_id !== user.id) {
        const indicator = document.getElementById('typingIndicator');
        if(indicator) {
          indicator.style.display = 'block';
          
          // Скрываем через 2 секунды после последнего ввода
          clearTimeout(window.typingTimeout);
          window.typingTimeout = setTimeout(() => {
            indicator.style.display = 'none';
          }, 2000);
        }
      }
    })
    .subscribe();
}

async function loadPeople(){
  const el=document.getElementById('leadersList');
  if(!el)return;
  el.innerHTML='<div style="color:var(--d-text-dim);text-align:center;padding:20px">Загрузка рейтинга...</div>';
  
  try {
    // ✨ ЗАПРАШИВАЕМ ГОТОВЫЙ ТОП-100 С СЕРВЕРА (Быстро и без нагрузки)
    const { data: serverList, error } = await sb.rpc('get_leaderboard', { limit_count: 100 });
    if (error) throw error;

    const userStats = {};
    (serverList || []).forEach(p => {
      userStats[p.id] = { 
        ...p, 
        xp: p.total_xp || 0, 
        fire: p.max_streak || 0, 
        practices: p.total_practices || 0,
        minutes: 0, // Сервер пока не считает минуты, ставим 0
        booksDone: 0,
        lvl: 1 
      };
      
      // Расчет уровня по XP
      if(userStats[p.id].xp >= 2000) userStats[p.id].lvl = 6;
      else if(userStats[p.id].xp >= 1000) userStats[p.id].lvl = 5;
      else if(userStats[p.id].xp >= 600) userStats[p.id].lvl = 4;
      else if(userStats[p.id].xp >= 300) userStats[p.id].lvl = 3;
      else if(userStats[p.id].xp >= 100) userStats[p.id].lvl = 2;
    });

        // 1. Собираем всех и сортируем
    let list = Object.values(userStats).sort((a, b) => {
      if (b.xp !== a.xp) return b.xp - a.xp;
      return b.fire - a.fire;
    });

    // Фильтрация по друзьям
    if (rankFilter === 'friends') {
      const { data: fData } = await sb.from('friends').select('friend_id').eq('user_id', user.id);
      const friendIds = (fData || []).map(f => f.friend_id);
      list = list.filter(p => friendIds.includes(p.id) || p.id === user.id);
    }

    if(!list.length){
      el.innerHTML = `
        <div class="d-empty-state">
          <div class="d-empty-ico-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div class="d-empty-title">Пока никого нет</div>
          <div class="d-empty-text">Пригласите друзей в ANDGER, чтобы соревноваться в рейтинге!</div>
        </div>
      `;
      return;
    }

    // 2. Ищем себя в списке
    const myIndex = list.findIndex(p => p.id === user.id);
    const myRank = myIndex !== -1 ? myIndex + 1 : 0;
    const myStats = list[myIndex];
    let motivationHtml = '';

    // 3. Считаем, сколько XP не хватает до следующего места (для мотивации)
    if (myStats && myRank > 1) {
      const nextPerson = list[myIndex - 1];
      const diff = nextPerson.xp - myStats.xp;
      if (diff > 0) {
        motivationHtml = `<div style="font-size:10px; color:var(--d-gold); font-weight:800; margin-top:4px;">🎯 До ${myRank - 1} места: ${diff} XP</div>`;
      }
    }

    // 4. Формируем карточку "Твоя позиция"
    let html = '';
    if (myStats) {
      const myTimeStr = myStats.minutes > 60 ? Math.floor(myStats.minutes/60) + 'ч ' + (myStats.minutes%60) + 'м' : myStats.minutes + 'м';
      const myMedal = myRank <= 3 ? ['🥇','🥈','🥉'][myRank-1] : `#${myRank}`;
      
      html += `
        <div class="d-card-glass" style="margin-bottom: 20px; padding: 16px; background: linear-gradient(135deg, rgba(124,92,255,0.2), rgba(255,154,86,0.05)); border-color: var(--d-accent); box-shadow: 0 8px 25px rgba(124,92,255,0.15); position: relative; overflow: hidden;">
          <!-- Декоративное свечение на фоне -->
          <div style="position:absolute; top:-20px; right:-20px; width:100px; height:100px; background:radial-gradient(circle, rgba(255,184,0,0.2) 0%, transparent 70%); pointer-events:none;"></div>
          
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <div style="font-size:11px; font-weight:900; color:var(--d-accent-2); text-transform:uppercase; letter-spacing:1px;">Твоя позиция</div>
            <div style="font-size:10px; font-weight:800; color:var(--d-text-dim); background:rgba(255,255,255,0.08); padding:2px 8px; border-radius:10px;">в рейтинге</div>
          </div>

          <div style="display:flex; align-items:center; gap:14px;">
            <div style="font-size:24px; font-weight:900; color:${myRank <= 3 ? 'var(--d-gold)' : 'var(--d-text)'}; width:44px; text-align:center; filter: ${myRank <= 3 ? 'drop-shadow(0 0 10px var(--d-gold))' : 'none'};">
              ${myMedal}
            </div>
            <div class="d-lib-book-cover" style="width:48px; height:48px; border-radius:50%; background:var(--d-surface-2); border:2px solid var(--d-accent);">
              ${getAvatarHtml(state.avatar, 24)}
            </div>
            <div style="flex:1;">
              <div style="font-size:15px; font-weight:900; color:#fff;">${escapeHtml(user.name || 'Ты')} <span style="font-size:10px; color:var(--d-accent-2); font-weight:800; margin-left:4px;">(это ты)</span></div>
            <div style="font-size:11px; color:var(--d-text-dim); margin-top:2px; display:flex; align-items:center; gap:4px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#gradFlame)" stroke-width="2.5" style="width:12px; height:12px; filter:drop-shadow(0 0 4px rgba(255,154,86,0.5));"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg> ${myStats.fire} · ✅ ${myStats.practices} · ⏱ ${myTimeStr}
            </div>
              ${motivationHtml}
            </div>
            <div style="text-align:right;">
              <div style="font-size:16px; font-weight:900; color:var(--d-accent-2); display:flex; align-items:center; justify-content:flex-end; gap:4px;">
                <svg viewBox="0 0 24 24" fill="url(#gradStarFill)" stroke="url(#gradDefault)" stroke-width="1.5" style="width:14px; height:14px; filter:drop-shadow(0 0 6px rgba(124,92,255,0.5));"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ${myStats.xp} XP
              </div>
              <div style="font-size:10px; color:var(--d-text-dim); margin-top:2px;">Ур. ${myStats.lvl}</div>
            </div>
          </div>
        </div>
      `;
    }

    // 5. Рендерим Топ-3 (или всех, если их меньше 3)
    const top3 = list.slice(0, 3);
    if(top3.length > 0){
      html += '<h3 style="font-size:11px; font-weight:900; color:var(--d-text-dim); text-transform:uppercase; margin:10px 0 10px; display:flex; align-items:center; gap:6px;">🔥 Лучшие участники</h3>';
      
      top3.forEach((p, i) => {
        const medal = ['🥇', '🥈', '🥉'][i];
        const fullName = (p.name || 'Аноним') + (p.last_name ? ' ' + p.last_name : '');
        const timeStr = p.minutes > 60 ? Math.floor(p.minutes/60) + 'ч ' + (p.minutes%60) + 'м' : p.minutes + 'м';
        const isMe = p.id === user.id;
        
        const borderColors = ['#ffb800', '#c0c0c0', '#cd7f32']; 
        const glowColors = ['rgba(255,184,0,0.15)', 'rgba(192,192,192,0.15)', 'rgba(205,127,50,0.15)'];

        html += `
        <div class="d-lib-book-card" onclick="${isMe ? '' : `viewUserProfile('${p.id}', 'people')`}" style="border-color:${borderColors[i]}; background:linear-gradient(135deg, ${glowColors[i]}, var(--d-surface)); margin-bottom:8px; box-shadow: 0 4px 15px ${glowColors[i]};">
          <div style="font-size:28px; width:40px; text-align:center; filter: drop-shadow(0 0 10px ${borderColors[i]});">${medal}</div>
          <div class="d-lib-book-cover" style="width:48px; height:48px; border-radius:50%; background:var(--d-surface-2); border:2px solid ${borderColors[i]}; box-shadow: 0 0 10px ${glowColors[i]};">${getAvatarHtml(p.avatar, 24)}</div>
          <div class="d-lib-book-body">
            <div class="d-lib-book-title" style="font-size:15px; color:#fff;">${escapeHtml(fullName)} ${isMe ? '<span style="font-size:9px; color:var(--d-gold); opacity:0.8;">(ты)</span>' : ''}</div>
            <div style="font-size:11px; color:var(--d-text-dim); margin-top:2px;">🔥 ${p.fire} · ✅ ${p.practices} · ⏱ ${timeStr}</div>
          </div>
          <div style="text-align:right; padding-left:8px;">
            <div style="font-size:14px; font-weight:900; color:${borderColors[i]}; text-shadow: 0 0 10px ${glowColors[i]};">⭐ ${p.xp}</div>
            <div style="font-size:10px; color:var(--d-text-dim); margin-top:2px;">Ур. ${p.lvl}</div>
          </div>
        </div>`;
      });
    }

    // 6. Рендерим остальных (начиная с 4-го места)
    const rest = list.slice(3);
    if(rest.length > 0) {
      html += '<h3 style="font-size:11px; font-weight:900; color:var(--d-text-dim); text-transform:uppercase; margin:20px 0 10px;">👥 Все участники</h3>';
      
      rest.forEach((p, index) => {
        const fullName = (p.name || 'Аноним') + (p.last_name ? ' ' + p.last_name : '');
        const rankNumber = index + 4;
        const timeStr = p.minutes > 60 ? Math.floor(p.minutes/60) + 'ч ' + (p.minutes%60) + 'м' : p.minutes + 'м';
        const isMe = p.id === user.id;
        
        html += `
        <div class="d-lib-book-card" onclick="${isMe ? '' : `viewUserProfile('${p.id}', 'people')`}" style="padding:10px 14px; margin-bottom:8px; ${isMe ? 'border-color: var(--d-accent); background: rgba(124,92,255,0.05);' : ''}">
          <div style="font-size:14px; font-weight:900; color:${isMe ? 'var(--d-accent-2)' : 'var(--d-text-dim)'}; width:24px; text-align:center;">${rankNumber}</div>
          <div class="d-lib-book-cover" style="width:40px; height:40px; border-radius:50%; ${isMe ? 'border: 2px solid var(--d-accent);' : ''}">${getAvatarHtml(p.avatar, 20)}</div>
          <div class="d-lib-book-body">
            <div class="d-lib-book-title" style="font-size:13px; color:${isMe ? '#fff' : 'var(--d-text)'};">${escapeHtml(fullName)} ${isMe ? '<span style="font-size:9px; color:var(--d-accent-2);">(ты)</span>' : ''}</div>
            <div style="font-size:10px; color:var(--d-text-dim); margin-top:2px; display:flex; align-items:center; gap:4px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#gradFlame)" stroke-width="2.5" style="width:10px; height:10px; filter:drop-shadow(0 0 4px rgba(255,154,86,0.5));"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg> ${p.fire} · ✅ ${p.practices}
            </div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:12px; font-weight:800; color:var(--d-accent-2); display:flex; align-items:center; justify-content:flex-end; gap:4px;">
              <svg viewBox="0 0 24 24" fill="url(#gradStarFill)" stroke="url(#gradDefault)" stroke-width="1.5" style="width:12px; height:12px; filter:drop-shadow(0 0 6px rgba(124,92,255,0.5));"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ${p.xp} XP
            </div>
            <div style="font-size:9px; color:var(--d-text-dim);">Ур. ${p.lvl}</div>
          </div>
        </div>`;
      });
    }
    
    el.innerHTML = html;
  } catch(e) {
    console.error(e);
    el.innerHTML = '<div style="color:var(--d-danger);text-align:center;padding:20px">Ошибка загрузки рейтинга</div>';
  }
}

// ─── ГЛОБАЛЬНЫЕ REALTIME-КАНАЛЫ ───
function subscribeNotifications(){
  if(notificationsChannel)return;
  notificationsChannel=sb.channel('notif-'+user.id)
    .on('postgres_changes',
      {event:'INSERT',schema:'public',table:'notifications',filter:`user_id=eq.${user.id}`},
      (payload)=>{
        notifications.unshift(payload.new);
        updateNotifBadge();
        // Если внутри приложения на экране уведомлений — обновить
        const notifScreen=document.getElementById('notificationsScreen');
        if(notifScreen&&!notifScreen.classList.contains('hidden'))renderNotifications();
        // Показать тост (только если не в режиме практики)
        if (!document.body.classList.contains('app-focus-mode')) {
          if(payload.new.type==='msg'){
            toast('💬 Новое сообщение');
            playCheck();
          }else if(payload.new.type==='like'){
            toast('❤️ Новый лайк');
          }else if(payload.new.type==='comment'){
            toast('💬 Новый комментарий');
          }
        }
      })
    .subscribe();
}
// ═══════════════════════════════════════════════
// АДМИНКА
// ═══════════════════════════════════════════════

function loadAdminSection(section) {
  const area = document.getElementById('adminDynamicArea');
  if (!area) return;

  area.style.animation = 'none';
  area.offsetHeight; // trigger reflow
  area.style.animation = 'fadeIn 0.3s ease';

  // Перенаправляем старые названия в новые вкладки
  if (section === 'feedback' || section === 'reports') {
    section = 'moderation';
  }

  if (['dashboard','books','users','moderation'].includes(section)) {
    AP.mount(section, area);
    return;
  }

  // Для остальных вкладок оставляем твой старый код загрузки
  area.innerHTML = '<div style="text-align:center; padding:40px; color:var(--d-text-dim);"><div class="spinner" style="margin:0 auto 10px;"></div>Загрузка данных...</div>';
  
  setTimeout(() => {
    if (section === 'system') {
      area.innerHTML = `
        <!-- Блок 1: Рассылка -->
        <div class="admin-pro-card">
          <div class="admin-pro-card-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <div class="admin-icon-box" style="background:rgba(124,92,255,0.15); color:var(--d-accent-2);">📢</div>
              <div>
                <div class="admin-pro-card-title">Push-рассылка</div>
                <div class="admin-pro-card-sub">Отправить уведомление всем юзерам</div>
              </div>
            </div>
          </div>
          
          <div style="padding: 0 16px 16px;">
            <input type="text" id="broadcastTitle" placeholder="Заголовок" class="admin-pro-input" maxlength="100">
            <textarea id="broadcastText" rows="3" placeholder="Текст уведомления..." class="admin-pro-input" maxlength="500"></textarea>
            <button class="d-btn-primary" style="margin-top:8px; height:44px; border-radius:12px; font-size:12px;" onclick="sendBroadcast()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              Отправить всем
            </button>
          </div>
        </div>
        
        <!-- Блок 2: Глобальные настройки -->
        <div class="admin-pro-card" id="systemContent"></div>
        
        <!-- Блок 3: Данные и логи -->
        <div class="admin-pro-card" style="padding-bottom: 8px;">
          <div class="admin-pro-card-header" style="margin-bottom:0; padding-bottom:0;">
             <div style="display:flex; align-items:center; gap:8px;">
              <div class="admin-icon-box" style="background:rgba(255,154,86,0.15); color:var(--d-warm);">💾</div>
              <div>
                <div class="admin-pro-card-title">Данные системы</div>
                <div class="admin-pro-card-sub">Экспорт и логи</div>
              </div>
            </div>
          </div>
          
          <div class="admin-settings-list">
            <div class="admin-settings-row" onclick="exportAllBooks()">
              <div class="asr-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Скачать все книги (JSON)
              </div>
              <div style="color:var(--d-text-dim); font-size:16px;">›</div>
            </div>
            <div class="admin-settings-row" onclick="loadAdminLogs()">
              <div class="asr-left">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                История действий
              </div>
              <div style="color:var(--d-text-dim); font-size:16px;">›</div>
            </div>
          </div>
          <div id="adminLogsContainer" style="padding: 0 16px 16px;"></div>
        </div>
      `;
      renderSystem(); 
    }
  }, 100);
}

function switchModTab(tab, el) {
  document.querySelectorAll('.admin-filter-pill').forEach(p => p.classList.remove('on'));
  if (el) el.classList.add('on');
  playClick();
  
  const content = document.getElementById('adminModContent');
  if (tab === 'reports') {
    content.innerHTML = '<div id="adminReportsList"></div>';
    loadAdminReports();
  } else {
    content.innerHTML = '<div id="adminFeedbackList"></div>';
    loadAdminFeedbacks();
  }
}

async function replyToFeedback(userId) {
  playClick();
  try {
    // Ищем профиль пользователя в уже загруженном списке
    const p = adminAllUsers.find(x => x.id === userId);
    if (p) {
      openDialog(userId, p);
    } else {
      // Если вдруг не нашли, подгружаем из базы
      const { data } = await sb.from('profiles').select('id,name,avatar').eq('id', userId).single();
      if (data) openDialog(userId, data);
      else toast('Пользователь не найден', 'danger');
    }
  } catch (e) {
    console.error(e);
    toast('Ошибка открытия чата', 'danger');
  }
}





function filterAdmin(){
  const q=document.getElementById('adminSearch').value.toLowerCase().trim();
  let list=[...adminAllUsers];
  
  if(q){
    list=list.filter(p=>{
      const name=(p.name||'').toLowerCase();
      const isMe=p.id===user.id;
      const phone=isMe?user.phone:(p.phone||'');
      return name.includes(q)||phone.includes(q.replace(/\D/g,''));
    });
  }
  renderAdminList(list);
}



async function openAdminUser(id){
  const wrap = document.getElementById('adminDetailWrap');
  if (wrap) wrap.dataset.openUserId = id;

  const p = adminAllUsers.find(x=>x.id===id); if(!p) return;
  const isMe = p.id === user.id;
  const phone = isMe ? user.phone : (p.phone || 'Нет данных');
  const phoneShown = phone && phone !== 'Нет данных' ? '+7 ('+phone.slice(1,4)+') '+phone.slice(4,7)+'-'+phone.slice(7,9)+'-'+phone.slice(9) : 'Нет данных';
  
  const regDate = p.created_at ? new Date(p.created_at).toLocaleDateString('ru') : '—';
  const lastSeenMs = parseTimestamp(p.last_seen);
  const lastSeen = lastSeenMs !== null ? new Date(lastSeenMs).toLocaleString('ru-RU', {day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit'}) : 'Нет данных';
  
  let isSubActive = false;
  let subDateText = 'Нет подписки';
  if (p.sub_until) {
    const subDate = new Date(p.sub_until);
    if (subDate > new Date()) {
      isSubActive = true;
      subDateText = 'Активна до ' + subDate.toLocaleDateString('ru-RU');
    } else {
      subDateText = 'Истекла ' + subDate.toLocaleDateString('ru-RU');
    }
  }

  const access = p.book_access || [];
  let booksHtml = '';
  const categories = {};
  BOOKS.forEach(b => {
    const cat = b.category || 'Разное';
    if(!categories[cat]) categories[cat] = [];
    categories[cat].push(b);
  });

  Object.keys(categories).forEach(cat => {
    booksHtml += `<div style="font-size:10px; font-weight:900; color:var(--accent-2); text-transform:uppercase; margin-top:12px; margin-bottom:6px;">📁 ${cat}</div>`;
    categories[cat].forEach(b => {
      const has = p.is_admin || access.includes(b.id);
      booksHtml += `
        <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); padding:8px 10px; border-radius:10px; margin-bottom:4px;">
          <div style="font-size:12px; font-weight:700; color:var(--text);">${escapeHtml(b.title)}</div>
          <div class="d-toggle ${has ? 'on' : ''}" onclick="toggleBookAccess('${id}','${b.id}',${!has})"></div>
        </div>
      `;
    });
  });

  wrap.innerHTML = `
    <div class="bento-card" style="margin-top:16px; border-color: var(--accent); animation: fadeIn 0.3s;">
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:20px;">
        <div class="uc-ava" style="width:60px; height:60px; font-size:28px;">${getAvatarHtml(p.avatar, 36)}</div>
        <div style="flex:1;">
          <h3 style="font-size:18px; font-weight:900; margin:0; display:flex; align-items:center; gap:6px;">${escapeHtml(p.name||'Без имени')} ${p.is_admin?'👑':''}</h3>
          <div style="font-size:12px; color:var(--muted); margin-top:4px;">${isMe ? 'Это вы' : 'Пользователь'}</div>
        </div>
        <div style="font-size:20px; color:var(--muted); cursor:pointer; padding:8px; background:var(--card2); border-radius:50%; width:36px; height:36px; display:flex; align-items:center; justify-content:center;" onclick="document.getElementById('adminDetailWrap').innerHTML=''">✕</div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px; background:rgba(255,255,255,0.02); padding:12px; border-radius:12px;">
        <div><div style="font-size:9px; color:var(--muted); text-transform:uppercase;">Телефон</div><div style="font-size:13px; font-weight:700;">${phoneShown}</div></div>
        <div><div style="font-size:9px; color:var(--muted); text-transform:uppercase;">Регистрация</div><div style="font-size:13px; font-weight:700;">${regDate}</div></div>
        <div style="grid-column: 1 / -1;"><div style="font-size:9px; color:var(--muted); text-transform:uppercase;">Последний визит</div><div style="font-size:13px; font-weight:700;">${lastSeen}</div></div>
      </div>

      <div style="background:rgba(62,207,142,0.08); border:1px solid rgba(62,207,142,0.2); padding:12px; border-radius:12px; margin-bottom:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span style="font-size:12px; font-weight:800; color:var(--text);">💎 Premium</span>
          <span style="font-size:12px; color:${isSubActive?'var(--success)':'var(--muted)'}; font-weight:800;">${subDateText}</span>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn" style="margin:0; padding:8px; font-size:11px; background:var(--success); border-radius:10px;" onclick="adminGrantSub('${id}', 30)">🎁 +1 Месяц</button>
          ${isSubActive ? `<button class="btn" style="margin:0; padding:8px; font-size:11px; background:transparent; border:1px solid var(--danger); color:var(--danger); border-radius:10px;" onclick="adminGrantSub('${id}', 0)">Забрать</button>` : ''}
        </div>
      </div>

      <div style="margin-bottom:16px;">
        <div onclick="this.nextElementSibling.classList.toggle('hidden')" style="font-size:11px; font-weight:900; color:var(--muted); text-transform:uppercase; margin-bottom:8px; cursor:pointer; display:flex; justify-content:space-between; align-items:center;">
          <span>📊 Последние действия</span>
          <span style="font-size:14px;">⌄</span>
        </div>
        <div id="adminUserActivity" style="background:rgba(255,255,255,0.02); padding:12px; border-radius:12px; font-size:12px; color:var(--muted);">Загрузка...</div>
      </div>

      <div style="margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div style="font-size:11px; font-weight:900; color:var(--muted); text-transform:uppercase;">📚 Доступ к книгам</div>
          <div style="display:flex; gap:8px;">
            <span style="font-size:10px; color:var(--success); cursor:pointer; font-weight:800;" onclick="setAllBooksAccess('${id}', true)">ВСЕ ВКЛ</span>
            <span style="font-size:10px; color:var(--danger); cursor:pointer; font-weight:800;" onclick="setAllBooksAccess('${id}', false)">ВСЕ ВЫКЛ</span>
          </div>
        </div>
        <div style="max-height:150px; overflow-y:auto; padding-right:4px;">
          ${booksHtml}
        </div>
      </div>

      ${!isMe ? `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; border-top:1px solid var(--border); padding-top:16px;">
        <button class="d-btn-secondary" style="margin:0; height:40px; font-size:11px; border-radius:12px;" onclick="adminSendMessage('${id}')">💬 Написать</button>
        <button class="d-btn-secondary" style="margin:0; height:40px; font-size:11px; border-radius:12px; color:${p.blocked?'var(--d-success)':'var(--d-danger)'}; border-color:${p.blocked?'var(--d-success)':'var(--d-danger)'};" onclick="adminToggleBlock('${id}',${!p.blocked})">${p.blocked?'✓ Разблок':'🚫 Блок'}</button>
      </div>
      <div style="margin-top:8px;">
        <button class="d-btn-secondary" style="margin:0; width:100%; height:40px; font-size:11px; border-radius:12px; background:rgba(124,92,255,0.1); color:var(--accent-2); border-color:rgba(124,92,255,0.3);" onclick="adminTestPush('${id}')">🔔 Отправить тестовый Push</button>
      </div>` : ''}
    </div>
  `;
  wrap.scrollIntoView({behavior:'smooth'});

  try {
    const [notesRes, feedRes] = await Promise.all([
      sb.from('notes').select('practice_title, created_at').eq('user_id', id).order('created_at', {ascending:false}).limit(2),
      sb.from('messages').select('text, created_at').eq('user_id', id).eq('room','feed').order('created_at', {ascending:false}).limit(2)
    ]);
    
    let actHtml = '';
    if (notesRes.data && notesRes.data.length) {
      notesRes.data.forEach(n => {
        actHtml += `<div style="margin-bottom:6px; padding-left:8px; border-left:2px solid var(--accent); color:var(--text);">📝 <i>${escapeHtml(n.practice_title)}</i></div>`;
      });
    }
    if (feedRes.data && feedRes.data.length) {
      feedRes.data.forEach(m => {
        actHtml += `<div style="margin-bottom:6px; padding-left:8px; border-left:2px solid var(--d-warm); color:var(--text);">💬 <i>"${escapeHtml(m.text.slice(0, 30))}..."</i></div>`;
      });
    }
    
    const actEl = document.getElementById('adminUserActivity');
    if (actEl) actEl.innerHTML = actHtml || '<div style="color:var(--muted); font-style:italic; text-align:center;">Нет недавней активности</div>';
  } catch(e) { console.warn('Activity load error', e); }
}

async function adminToggleBlock(id, blocked) {
  if (!(await appConfirm(blocked ? 'Заблокировать участника?' : 'Разблокировать?', 'Управление участником'))) return;
  try {
    await rpcCall('admin_toggle_block', { target_id: id, blocked: Boolean(blocked), reason: blocked ? 'Нарушение правил' : null });
    await loadAdminUsers();
    await openAdminUser(id);
    playSuccess();
  } catch (e) {
    console.error('[ANDGER] adminToggleBlock:', e);
  }
}

async function adminToggleAdmin(id, makeAdmin) {
  if (!(await appConfirm(makeAdmin ? 'Сделать админом?' : 'Снять права админа?', 'Права администратора'))) return;
  try {
    await rpcCall('admin_toggle_admin', { target_id: id, make_admin: Boolean(makeAdmin) });
    await loadAdminUsers();
    await openAdminUser(id);
    playSuccess();
  } catch (e) {
    console.error('[ANDGER] adminToggleAdmin:', e);
  }
}

async function adminDelete(id, confirmed = false) {
  if (!confirmed) {
    const target = (adminAllUsers || []).find(p => String(p.id) === String(id));
    return confirmGodDeleteUser(id, target?.name || 'Без имени');
  }
  try {
    await rpcCall('admin_delete_user', { target_id: id });
    toast('Участник удалён');
    await loadAdminUsers();
    const wrap = document.getElementById('adminDetailWrap');
    if (wrap) wrap.innerHTML = '';
  } catch (e) {
    console.error('[ANDGER] admin_delete_user failed:', e);
    toast('Не удалось удалить. Проверь права.', 'danger');
  }
}

async function adminSendMessage(id){
  const{data:p}=await sb.from('profiles').select('id,name,avatar').eq('id',id).single();
  if(p)openDialog(id,p);
}

async function toggleBookAccess(userId, bookId, grant) {
  const p = adminAllUsers.find(x => x.id === userId);
  if (!p) return;
  const access = [...(p.book_access || [])];
  if (grant) {
    if (!access.includes(bookId)) access.push(bookId);
  } else {
    const index = access.indexOf(bookId);
    if (index !== -1) access.splice(index, 1);
  }
  try {
    await rpcCall('admin_set_book_access', { target_id: userId, book_ids: access.map(String) });
    await logAdmin('grant_book', userId, { book: bookId, grant });
    p.book_access = access;
    playCheck();
    const searchVal = document.getElementById('userBookSearch')?.value || '';
    renderUserBookList(userId, searchVal);
  } catch (e) {
    console.error('[ANDGER] toggleBookAccess:', e);
  }
}

// Новая функция: отрисовывает список книг с группами и иконками
function renderUserBookList(userId, query = '') {
  const container = document.getElementById('userBookListContainer');
  if (!container) return;
  
  const p = adminAllUsers.find(x => x.id === userId);
  if (!p) return;

  // Фильтруем по поиску
  const filtered = BOOKS.filter(b => 
    b.title.toLowerCase().includes(query.toLowerCase()) || 
    (b.author && b.author.toLowerCase().includes(query.toLowerCase()))
  );

  // Группируем по категориям
  const grouped = {};
  filtered.forEach(b => {
    const cat = b.category || 'Разное';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(b);
  });

  let html = '';
  const access = p.book_access || [];

  Object.keys(grouped).forEach(cat => {
    html += `<div style="font-size:11px; font-weight:900; color:var(--accent-2); text-transform:uppercase; margin-top:14px; margin-bottom:6px; border-bottom:1px solid var(--border); padding-bottom:4px;">📁 ${cat}</div>`;
    
    grouped[cat].forEach(b => {
      const has = p.is_admin || access.includes(b.id);
      html += `<div class="admin-book-row" style="margin-bottom:6px;">
        <div class="ab-title" style="display:flex; align-items:center; gap:10px; font-weight:700; font-size:13px; color:var(--text);">
          <div style="width:32px; height:32px; border-radius:8px; background:var(--card3); display:flex; align-items:center; justify-content:center; overflow:hidden;">${getEmojiOrSvg(b.emoji, 20, b.title)}</div>
          <span>${escapeHtml(b.title)}</span>
        </div>
        <div class="toggle-switch ${has ? 'on' : ''}" onclick="event.stopPropagation(); toggleBookAccess('${userId}','${b.id}',${!has})"></div>
      </div>`;
    });
  });

  if (!html) html = '<div style="text-align:center; color:var(--muted); font-size:12px; padding:20px;">Книги не найдены</div>';
  container.innerHTML = html;
}

// Новая функция: срабатывает при вводе текста в поиск

async function logAdmin(action,targetId,meta){
  try{
    await sb.from('admin_logs').insert({
      admin_id:user.id,action,target_id:targetId,meta:meta||{}
    });
  }catch (e) { console.debug('[ANDGER] ignored:', e); }
}

// ─── АНАЛИТИКА ───

async function sendBroadcast() {
  const titleEl = document.getElementById('broadcastTitle');
  const textEl = document.getElementById('broadcastText');
  const title = titleEl?.value.trim() || '';
  const body = textEl?.value.trim() || '';
  if (!title || !body) { toast('Заполни оба поля', 'warm'); return; }
  if (title.length > 100 || body.length > 500) { toast('Лимиты: 100 и 500 символов', 'warm'); return; }
  try {
    // Получаем всех пользователей с включенными пушами
    const { data: users } = await sb.from('notification_prefs').select('user_id').eq('push_enabled', true);
    if (!users || users.length === 0) throw new Error('Нет пользователей с включенными пушами');

    let count = 0;
    for (const u of users) {
      await sb.functions.invoke('create-notification', {
        body: { 
          type: 'admin', 
          event_id: u.user_id, 
          text: title + ': ' + body 
        }
      });
      count++;
    }
    playSuccess();
    toast(`Рассылка отправлена (${count} чел.)!`);
    if (titleEl) titleEl.value = '';
    if (textEl) textEl.value = '';
  } catch (e) {
    console.error('[ANDGER] sendBroadcast:', e);
  }
}

// ─── СИСТЕМА ───
async function renderSystem(){
  const el = document.getElementById('systemContent');
  if(!el) return;
  
  el.innerHTML = `
    <div class="admin-pro-card-header" style="margin-bottom:8px;">
      <div style="display:flex; align-items:center; gap:8px;">
        <div class="admin-icon-box" style="background:rgba(62,207,142,0.15); color:var(--d-success);">⚙️</div>
        <div>
          <div class="admin-pro-card-title">Настройки доступа</div>
          <div class="admin-pro-card-sub">Глобальные правила для всех книг</div>
        </div>
      </div>
    </div>
    
    <div class="admin-settings-list" style="margin-top:0; border-top: 1px solid var(--d-border);">
      <div class="admin-settings-row">
        <div>
          <div style="font-size:13px; font-weight:800; color:var(--d-text); margin-bottom:2px;">Открытый доступ</div>
          <div style="font-size:11px; color:var(--d-text-dim); line-height:1.3;">Если включено — все книги бесплатны (для тестов)</div>
        </div>
        <div class="d-toggle ${bookAccessMode === 'everyone' ? 'on' : ''}" onclick="toggleBookAccessMode()" style="flex-shrink:0;"></div>
      </div>
    </div>
  `;
}

async function toggleBookAccessMode() {
  bookAccessMode = bookAccessMode === 'everyone' ? 'individual' : 'everyone';
  try {
    await sb.from('app_settings').upsert({key:'book_access_mode', value:bookAccessMode}, {onConflict:'key'});
    toast(bookAccessMode === 'everyone' ? 'Режим: Всем открыто' : 'Режим: Индивидуально');
    playCheck();
    renderSystem(); // Перерисовываем кнопку
  } catch(e) {
    toast('Ошибка сохранения', 'danger');
  }
}

function exportUsers(){
  if(!adminAllUsers.length) return toast('Нет пользователей', 'warm');
  
  const rows=[['Имя','Телефон','Регистрация','Последний визит','Админ','Заблокирован']];
  adminAllUsers.forEach(p=>{
    rows.push([
      p.name||'',
      p.phone||'',
      p.created_at?new Date(p.created_at).toLocaleDateString('ru'):'',
      p.last_seen?new Date(p.last_seen).toLocaleDateString('ru'):'',
      p.is_admin?'да':'нет',
      p.blocked?'да':'нет'
    ]);
  });
  const csv=rows.map(r=>r.map(c=>`"${(c||'').toString().replace(/"/g,'""')}"`).join(',')).join('\n');
  
  const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'andger_users_' + todayStr() + '.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  toast('CSV скачан');
}

// ─── РЕДАКТОР КНИГ ───

let bookEditorReturnScreen = "adminScreen";
let editingBookId = null;
async function uploadBookCover(input) {
  const file = input.files[0];
  if (!file) return;
  
  const statusEl = document.getElementById('edCoverStatus');
  if(statusEl) statusEl.textContent = 'Загрузка...';
  
  const fileExt = file.name.split('.').pop();
  const fileName = `cover_${Date.now()}.${fileExt}`;
  
  try {
    // Загружаем файл в Supabase Storage (bucket 'covers')
    const { data, error } = await sb.storage.from('covers').upload(fileName, file);
    if (error) throw error;
    
    // Получаем публичную ссылку
    const { data: urlData } = sb.storage.from('covers').getPublicUrl(fileName);
    
    // Записываем ссылку в поле ввода
    document.getElementById('edCoverUrl').value = urlData.publicUrl;
    
    if(statusEl) {
      statusEl.textContent = '✅ Успешно загружено!';
      statusEl.style.color = 'var(--d-success)';
    }
    playSuccess();
  } catch (e) {
    console.error('Ошибка загрузки обложки:', e);
    toast('Ошибка загрузки: ' + e.message, 'danger');
    if(statusEl) {
      statusEl.textContent = '❌ Ошибка';
      statusEl.style.color = 'var(--d-danger)';
    }
  }
}
function showBookEditor(id){
  const visible = Array.from(document.querySelectorAll("#todayScreen,#libScreen,#adminScreen,#bookDetailScreen")).find(el => !el.classList.contains("hidden"));
  bookEditorReturnScreen = visible ? visible.id : "adminScreen";
  editingBookId=id||null;
  // Показываем блок умной вставки ТОЛЬКО админам
  const smartBlock = document.getElementById('smartJsonBlock');
  if (smartBlock) smartBlock.style.display = isAdmin() ? 'block' : 'none';
    // Ищем в обоих массивах — это чинит баг с пустыми полями у черновиков
  const b = id ? (BOOKS.find(x=>x.id===id) || (adminAllBooks||[]).find(x=>x.id===id)) : null;

  // Показываем плашку статуса
  updateEditorStatusBanner(b);

  const catList = document.getElementById('edCategoryList');
  if(catList) {
    // Всегда используем только официальный список для чистоты данных
    catList.innerHTML = OFFICIAL_CATEGORIES.map(c => `<option value="${c}"></option>`).join('');
  }
  
  const setVal = (elId, val) => { const el = document.getElementById(elId); if(el) el.value = val; };
  
  setVal('edTitle', b?.title||'');
  setVal('edAuthor', b?.author||'');
  setVal('edEmoji', b?.emoji||'');
  setVal('edDays', b?.days||30);
  setVal('edCategory', b?.category || 'Разное');
  setVal('edCoverUrl', b?.cover_url || ''); // <--- ДОБАВИЛИ ЭТУ СТРОКУ
  setVal('edAbout', b?.about||'');
  setVal('edMethod', (b?.method && Array.isArray(b.method)) ? b.method.join(', ') : '');
  setVal('edAuthorBio', b?.authorBio || b?.author_bio || '');
  setVal('edForWhom', b?.forWhom || b?.for_whom || '');
  const freeToggle = document.getElementById('edIsFreeToggle');
  if (freeToggle) freeToggle.classList.toggle('on', b?.is_free === true);
  setVal('edResult', b?.result || '');
  
  // Клонируем практики в память
  window._tempPractices = b?.practices ? JSON.parse(JSON.stringify(b.practices)) : [];
  renderAdminPracticesList();

    window._tempQuotes = b?.quotes ? JSON.parse(JSON.stringify(b.quotes)) : [];
  renderAdminQuotesList(); // <--- Добавили вызов отрисовки
  const errEl = document.getElementById('edErr');
  if(errEl) errEl.textContent='';
  
  const delBtn = document.getElementById('edDeleteBtn');
  if (delBtn) delBtn.style.display = id ? 'block' : 'none';

  hideAll();
  document.getElementById('bookEditorScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.add('hidden');
  switchEditorTab('main', document.querySelector('.ed-tab-btn'));
}

// ─── УПРАВЛЕНИЕ ПРАКТИКАМИ ───
window._tempPractices = [];
let editingPracticeIndex = -1;

function renderAdminPracticesList() {
  const list = document.getElementById('adminPracticesList');
  if (!list) return;
  if (window._tempPractices.length === 0) {
    list.innerHTML = '<div style="color:var(--muted); font-size:13px; text-align:center;">Нет практик. Нажмите «+ Добавить».</div>';
    return;
  }
  list.innerHTML = window._tempPractices.map((p, i) => `
    <div class="admin-item" style="padding:10px 14px; margin-bottom:8px; border:1px solid var(--border);">
      <div class="ai-info" style="flex:1;">
        <div class="ai-name" style="font-size:14px;">${escapeHtml(p.title || 'Без названия')}</div>
        <div class="ai-phone">${escapeHtml(p.sub || '')}</div>
      </div>
      <div style="display:flex; gap:6px;">
        <div class="action-btn-glass" onclick="openPracticeEditor(${i})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
        <div class="action-btn-glass danger" onclick="deleteAdminPractice(${i})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></div>
      </div>
    </div>
  `).join('');
}

function openPracticeEditor(index) {
  editingPracticeIndex = index;
  const p = index >= 0 ? window._tempPractices[index] : null;
  
  document.getElementById('peTitle').textContent = index >= 0 ? 'Редактировать практику' : 'Новая практика';
  document.getElementById('peTitleInp').value = p?.title || '';
  document.getElementById('peTimeInp').value = p?.time ? Math.round(p.time/60) : 5;
  document.getElementById('peSubInp').value = p?.sub || '';
  document.getElementById('peIcoInp').value = p?.ico || 'brain';
  
  // Новые поля
  document.getElementById('peTriggerInp').value = p?.trigger || '';
  document.getElementById('peIdentityInp').value = p?.identity || '';
  document.getElementById('peMicroActionInp').value = p?.micro_action || '';
  document.getElementById('peJournalPromptInp').value = p?.journal_prompt || '';

  document.getElementById('peWhyInp').value = p?.why || '';
  document.getElementById('peHowInp').value = p?.how ? p.how.join('\n') : '';
  document.getElementById('peResultInp').value = p?.result || '';
  document.getElementById('peMistakesInp').value = p?.mistakes ? p.mistakes.join('\n') : '';
  document.getElementById('peAdviceInp').value = p?.advice || '';
  
  // --- НОВАЯ ЛОГИКА ДЛЯ ГОЛОСА ---
  // Заполняем поля, если они уже были сохранены
  const vs = p?.voice_settings || {};
  document.getElementById('peVoiceInp').value = vs.voice || '';
  document.getElementById('peEmotionInp').value = vs.emotion || '';
  document.getElementById('peSpeedInp').value = vs.speed || '';
  // --------------------------------

  const tlContainer = document.getElementById('voiceTimelineContainer');
  tlContainer.innerHTML = '';
  const tl = p?.voiceTimeline || [];
  if (tl.length === 0) addVoiceLine(); 
  else tl.forEach(item => addVoiceLine(item.time, item.text));

  document.getElementById('practiceEditorModal').classList.remove('hidden');
}

function addVoiceLine(time = '', text = '') {
  const container = document.getElementById('voiceTimelineContainer');
  const div = document.createElement('div');
  div.style.display = 'flex'; div.style.gap = '8px'; div.style.alignItems = 'center';
  
  div.innerHTML = `
    <input type="number" class="vt-time" placeholder="Сек" value="${time}" style="width:70px; flex-shrink:0; padding:10px; text-align:center; background:var(--d-surface-2); color:var(--d-text); border:1px solid var(--d-border); border-radius:10px; outline:none; font-size:14px;">
    <input type="text" class="vt-text" placeholder="Текст фразы..." value="${escapeHtml(text)}" style="flex:1; padding:10px; background:var(--d-surface-2); color:var(--d-text); border:1px solid var(--d-border); border-radius:10px; outline:none; font-size:14px;">
    <button class="d-icon-btn" onclick="this.parentElement.remove()" style="width:36px; height:36px; flex-shrink:0; color:var(--d-danger); background:transparent; border:none; font-size:16px;">✕</button>
  `;
  container.appendChild(div);
}

function savePracticeEditor() {
  const title = document.getElementById('peTitleInp').value.trim();
  const timeMins = parseInt(document.getElementById('peTimeInp').value) || 5;
  const sub = document.getElementById('peSubInp').value.trim();
  const ico = document.getElementById('peIcoInp').value.trim() || 'brain';
  
    // Новые поля
  const trigger = document.getElementById('peTriggerInp').value.trim();
  const identity = document.getElementById('peIdentityInp').value.trim();
  const micro_action = document.getElementById('peMicroActionInp').value.trim();
  const journal_prompt = document.getElementById('peJournalPromptInp').value.trim();

  const why = document.getElementById('peWhyInp').value.trim();
  const how = document.getElementById('peHowInp').value.split('\n').map(s => s.trim()).filter(Boolean);
  const result = document.getElementById('peResultInp').value.trim();
  const mistakes = document.getElementById('peMistakesInp').value.split('\n').map(s => s.trim()).filter(Boolean);
  const advice = document.getElementById('peAdviceInp').value.trim();

  // Собираем таймлайн
  const tl = [];
  document.querySelectorAll('#voiceTimelineContainer > div').forEach(row => {
    const t = parseInt(row.querySelector('.vt-time').value);
    const txt = row.querySelector('.vt-text').value.trim();
    if (!isNaN(t) && txt) tl.push({ time: t, text: txt });
  });
  tl.sort((a, b) => a.time - b.time);

  if (!title) { toast('Введите название практики', 'danger'); return; }

  // --- НОВАЯ ЛОГИКА ДЛЯ ГОЛОСА ---
  // Читаем то, что ты выбрал в выпадающих списках
  const voiceSelect = document.getElementById('peVoiceInp').value;
  const emotionSelect = document.getElementById('peEmotionInp').value;
  const speedVal = parseFloat(document.getElementById('peSpeedInp').value);

  let vSettings = {};
  if (voiceSelect) vSettings.voice = voiceSelect;
  if (emotionSelect) vSettings.emotion = emotionSelect;
  if (!isNaN(speedVal)) vSettings.speed = speedVal;
  // --------------------------------

  const p = {
    id: editingPracticeIndex >= 0 ? (window._tempPractices[editingPracticeIndex].id || 'practice-' + Date.now()) : 'practice-' + Date.now(),
    title, time: timeMins * 60, sub, ico, 
    trigger,           
    identity,                
    micro_action,      
    journal_prompt,    
    why, how, result, mistakes, advice,
    voiceTimeline: tl,
    voice_settings: Object.keys(vSettings).length > 0 ? vSettings : null 
  };

  if (editingPracticeIndex >= 0) {
    window._tempPractices[editingPracticeIndex] = p;
  } else {
    window._tempPractices.push(p);
  }

  document.getElementById('practiceEditorModal').classList.add('hidden');
  renderAdminPracticesList();
  playSuccess();
}

function deleteAdminPractice(index) {
  legacyConfirmAdapter('Удалить практику?', 'Она пропадет из книги.', () => {
    window._tempPractices.splice(index, 1);
    renderAdminPracticesList();
    playSuccess();
  });
}

 // ─── УПРАВЛЕНИЕ ЦИТАТАМИ КНИГИ ───
let editingBookQuoteIndex = -1;

function renderAdminQuotesList() {
  const list = document.getElementById('adminBookQuotesList');
  if (!list) return;
  
  if (!window._tempQuotes || window._tempQuotes.length === 0) {
    list.innerHTML = '<div style="color:var(--muted); font-size:13px; text-align:center; padding: 10px;">Нет цитат. Нажмите «+ Добавить».</div>';
    return;
  }
  
  list.innerHTML = window._tempQuotes.map((q, i) => `
    <div class="admin-item" style="padding:10px 14px; margin-bottom:8px; border:1px solid var(--border);">
      <div class="ai-info" style="flex:1;">
        <div style="font-size:13px; font-style:italic; color:var(--d-accent-2); margin-bottom:4px; line-height:1.4;">«${escapeHtml(q.text)}»</div>
        <div style="font-size:11px; color:var(--muted);">— ${escapeHtml(q.author || 'Без автора')}</div>
      </div>
      <div style="display:flex; gap:6px;">
        <div class="action-btn-glass" onclick="openBookQuoteEditor(${i})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
        <div class="action-btn-glass danger" onclick="deleteBookQuote(${i})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></div>
      </div>
    </div>
  `).join('');
}

function openBookQuoteEditor(index) {
  editingBookQuoteIndex = index;
  const q = index >= 0 ? window._tempQuotes[index] : { text: '', author: '' };
  
  document.getElementById('bqTitle').textContent = index >= 0 ? 'Редактировать цитату' : 'Новая цитата';
  document.getElementById('bqTextInp').value = q.text || '';
  document.getElementById('bqAuthorInp').value = q.author || '';
  document.getElementById('bookQuoteEditorModal').classList.remove('hidden');
}

function saveBookQuote() {
  const text = document.getElementById('bqTextInp').value.trim();
  const author = document.getElementById('bqAuthorInp').value.trim();
  
  if (!text) { toast('Введите текст цитаты', 'danger'); return; }
  
  if (editingBookQuoteIndex >= 0) {
    window._tempQuotes[editingBookQuoteIndex] = { text, author };
  } else {
    window._tempQuotes.push({ text, author });
  }
  
  document.getElementById('bookQuoteEditorModal').classList.add('hidden');
  renderAdminQuotesList();
  playSuccess();
}

function deleteBookQuote(index) {
  legacyConfirmAdapter('Удалить цитату?', 'Она пропадет из книги.', () => {
    window._tempQuotes.splice(index, 1);
    renderAdminQuotesList();
    playSuccess();
  });
} 

function backFromBookEditor(){
  const destination = bookEditorReturnScreen || "adminScreen";
  hideAll();
  const target = document.getElementById(destination);
  if (target) target.classList.remove('hidden');
  if (destination === 'libScreen' && typeof renderLibrary === 'function') renderLibrary();
  else if (destination === 'todayScreen' && typeof renderToday === 'function') renderToday();
  else if (destination === 'bookDetailScreen' && typeof openBookDetail === 'function' && bookDetailId) openBookDetail(bookDetailId);
  else if (destination === 'adminScreen' && typeof loadAdminBooks === 'function') loadAdminBooks();
}



let adminBookFilter = 'all'; // Глобальная переменная для фильтра







function toggleAdminCategory(id, headerEl) {
  const list = document.getElementById(id);
  if (!list) return;
  
  const isHidden = list.style.display === 'none';
  list.style.display = isHidden ? 'flex' : 'none';
  
  // Крутим стрелочку
  const arrow = headerEl.querySelector('.admin-cat-arrow');
  if (arrow) {
    arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  }
  playClick();
}

async function saveBook(published){
  const err=document.getElementById('edErr');
  const id=editingBookId||('book-'+Date.now());
  
  // Берем практики из нашей визуальной переменной
  let practicesData = window._tempPractices || [];

  const data={
    id,
    title:document.getElementById('edTitle').value.trim(),
    author:document.getElementById('edAuthor').value.trim(),
    emoji:document.getElementById('edEmoji').value.trim()||'📖',
    days:parseInt(document.getElementById('edDays').value)||30,
    category: document.getElementById('edCategory').value.trim() || 'Разное',
    cover_url: document.getElementById('edCoverUrl')?.value.trim() || null,
    about:document.getElementById('edAbout').value.trim(),
    
    // БЕРЕМ ДАННЫЕ ИЗ ПОЛЕЙ ВВОДА (они уже заполнены из JSON)
    method: document.getElementById('edMethod').value.split(',').map(s=>s.trim()).filter(Boolean),
    author_bio: document.getElementById('edAuthorBio').value.trim(),
    for_whom: document.getElementById('edForWhom').value.trim(),
    result: document.getElementById('edResult').value.trim(),
    
    practices: practicesData, 
    quotes: window._tempQuotes || [], // Цитаты берем из временной переменной
    published,
    is_free: document.getElementById('edIsFreeToggle')?.classList.contains('on') || false, // <--- ДОБАВИЛИ
    created_by:user.id,
    updated_at:new Date().toISOString(),
    ...(((BOOKS.find(x=>x.id===id)||{}).format===2) ? { format:2, path:(BOOKS.find(x=>x.id===id)||{}).path } : {})
  };
  
  try{
    const{error}=await sb.from('books').upsert(data,{onConflict:'id'});
    if(error)throw error;
    err.textContent=published?'✅ Опубликовано':'💾 Черновик сохранён';
    err.style.color='var(--success)';
    window._aiBook=null;
        // --- ОБНОВЛЕНИЕ СПИСКА КНИГ В ПАМЯТИ ---
    const existingIdx = BOOKS.findIndex(b => b.id === id);
    const normalized = {
      id, title: data.title, author: data.author, emoji: data.emoji, days: data.days,
      about: data.about, method: data.method, authorBio: data.author_bio,
      forWhom: data.for_whom, result: data.result, category: data.category,
      practices: data.practices, quotes: data.quotes, _fromSupabase: true
    };
    if (existingIdx >= 0) BOOKS[existingIdx] = normalized;
    else BOOKS.push(normalized);
    // ----------------------------------------

    toast(published?'Опубликовано ✓':'Черновик сохранён');
    setTimeout(()=>backFromBookEditor(),800);
  }catch(e){
    err.textContent='❌ '+e.message;
    err.style.color='var(--danger)';
  }
}

let editingTextKey = null;

async function loadAdminTexts() {
  const el = document.getElementById('adminTextsList');
  if (!el) return;
  el.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Загрузка...</div>';
  
  try {
    const { data } = await sb.from('ui_texts').select('*').order('key');
    if (!data || data.length === 0) {
      el.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Текстов пока нет.</div>';
      return;
    }

    const labels = {
      'splash_quote': '⏳ Экран загрузки: Цитата', 
      'splash_author': '⏳ Экран загрузки: Автор цитаты',
      'onb_step1_title': '📱 Онбординг (Шаг 1): Заголовок', 
      'onb_step1_text': '📱 Онбординг (Шаг 1): Текст',
      'onb_step2_title': '📱 Онбординг (Шаг 2): Заголовок', 
      'onb_step2_text': '📱 Онбординг (Шаг 2): Текст',
      'onb_step3_title': '📱 Онбординг (Шаг 3): Заголовок', 
      'onb_step3_text': '📱 Онбординг (Шаг 3): Текст',
      'onb_step4_title': '📱 Онбординг (Шаг 4): Заголовок', 
      'onb_step4_text': '📱 Онбординг (Шаг 4): Текст',
      'onb_step5_title': '📱 Онбординг (Шаг 5): Заголовок', 
      'onb_step5_text': '📱 Онбординг (Шаг 5): Текст'
    };

    el.innerHTML = data.map(item => `
      <div class="d-card-glass" style="display:flex; justify-content:space-between; align-items:center; padding:12px 16px; margin-bottom:8px;">
        <div style="font-size:13px; font-weight:700; color:var(--d-text);">${labels[item.key] || item.key}</div>
        <div class="action-btn-glass" onclick="openTextEditor('${item.key}')" title="Редактировать">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
        </div>
      </div>
    `).join('');
  } catch(e) {
    el.innerHTML = '<div style="color:var(--danger); text-align:center;">Ошибка загрузки</div>';
  }
}

function openTextEditor(key) {
  editingTextKey = key;
  const label = key.replace(/_/g, ' ');
  document.getElementById('textEditorTitle').textContent = label.toUpperCase();
  
  sb.from('ui_texts').select('value').eq('key', key).single().then(({data}) => {
    document.getElementById('textEditorInput').value = data ? data.value : '';
    document.getElementById('textEditorModal').classList.remove('hidden');
  });
}

async function saveAdminTextFromModal() {
  if (!editingTextKey) return;
  const val = document.getElementById('textEditorInput').value.trim();
  
  try {
    await sb.from('ui_texts').update({ value: val }).eq('key', editingTextKey);
    playSuccess(); 
    toast('Сохранено');
    document.getElementById('textEditorModal').classList.add('hidden');
  } catch(e) {
    toast('Ошибка', 'danger');
  }
}

async function saveAdminText(key) {
  const el = document.getElementById('txt_' + key);
  if (!el) return;
  const newValue = el.value.trim();
  
  try {
    const { error } = await sb.from('ui_texts').update({ value: newValue }).eq('key', key);
    if (error) throw error;
    
    playSuccess();
    toast('Текст сохранен!');
  } catch (e) {
    console.error(e);
    toast('Ошибка сохранения', 'danger');
  }
}

// ─── УПРАВЛЕНИЕ FAQ ───
let editingFaqId = null;

async function loadAdminFaq() {
  const el = document.getElementById('adminFaqList');
  el.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Загрузка...</div>';
  
  try {
    const { data } = await sb.from('faq').select('*').order('sort_order');
    
    if (!data || data.length === 0) {
      el.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Вопросов пока нет.</div>';
      return;
    }

    el.innerHTML = data.map(item => `
      <div class="admin-detail" style="margin-bottom:10px; padding:14px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div style="flex:1;">
            <div style="font-size:14px; font-weight:800; color:var(--accent-2); margin-bottom:4px;">${escapeHtml(item.question)}</div>
            <div style="font-size:13px; color:var(--muted); line-height:1.4;">${escapeHtml(item.answer)}</div>
          </div>
          <div style="display:flex; gap:6px; margin-left:10px;">
            <div class="action-btn-glass" onclick="openFaqEditor('${item.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
            <div class="action-btn-glass danger" onclick="deleteFaq('${item.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></div>
          </div>
        </div>
      </div>
    `).join('');
  } catch(e) {
    el.innerHTML = '<div style="color:var(--danger); text-align:center;">Ошибка загрузки</div>';
  }
}

function openFaqEditor(id = null) {
  editingFaqId = id;
  const modal = document.getElementById('faqEditorModal');
  
  if (id) {
    // В реальном приложении тут надо тянуть данные из БД, но для простоты возьмем из DOM
    // (или можно просто перерисовать, но мы сделаем запрос)
    sb.from('faq').select('*').eq('id', id).single().then(({data}) => {
      if(data) {
        document.getElementById('faqModalTitle').textContent = 'Редактировать вопрос';
        document.getElementById('faqQInp').value = data.question;
        document.getElementById('faqAInp').value = data.answer;
      }
    });
  } else {
    document.getElementById('faqModalTitle').textContent = 'Новый вопрос';
    document.getElementById('faqQInp').value = '';
    document.getElementById('faqAInp').value = '';
  }
  modal.classList.remove('hidden');
}

async function saveFaq() {
  const q = document.getElementById('faqQInp').value.trim();
  const a = document.getElementById('faqAInp').value.trim();
  if (!q || !a) { toast('Заполни вопрос и ответ', 'warm'); return; }

  try {
    if (editingFaqId) {
      await sb.from('faq').update({ question: q, answer: a }).eq('id', editingFaqId);
    } else {
      await sb.from('faq').insert({ question: q, answer: a, sort_order: 99 });
    }
    document.getElementById('faqEditorModal').classList.add('hidden');
    playSuccess();
    toast('Сохранено');
    loadAdminFaq();
  } catch(e) {
    toast('Ошибка', 'danger');
  }
}

async function deleteFaq(id) {
  legacyConfirmAdapter('Удалить вопрос?', 'Он пропадет из Помощи.', async () => {
    await sb.from('faq').delete().eq('id', id);
    playSuccess();
    loadAdminFaq();
  });
}

// ─── УПРАВЛЕНИЕ ПОДПИСКАМИ ───
async function loadAdminSubs() {
  const el = document.getElementById('adminSubsList');
  const countEl = document.getElementById('adminSubsCount');
  if (!el) return;
  // Never inject this panel into a global/root container; keep it inside the admin tab.
  el.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Загрузка...</div>';
  
  try {
    const now = new Date().toISOString();
    const { data } = await sb.from('profiles').select('*').gt('sub_until', now).order('sub_until', {ascending: true});
    
    if (countEl) countEl.textContent = data ? data.length : 0;
    const tabSubs = document.getElementById('tabSubSubs');
    if(tabSubs) tabSubs.textContent = `Активных: ${data ? data.length : 0}`;

    if (!data || data.length === 0) {
      el.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Нет активных подписок.</div>';
      return;
    }

    el.innerHTML = data.map(p => {
      const subDate = new Date(p.sub_until).toLocaleDateString('ru-RU');
      return `
        <div class="admin-item" onclick="openAdminUser('${p.id}')" style="display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; gap:12px; align-items:center;">
            <div class="ai-ava">${getAvatarHtml(p.avatar, 20)}</div>
            <div class="ai-info">
              <div class="ai-name">${escapeHtml(p.name||'Без имени')}</div>
              <div class="ai-phone" style="color:var(--success);">До ${subDate}</div>
            </div>
          </div>
          <button class="btn-small-inline" style="margin:0; padding:8px 10px; font-size:10px; background:transparent; border: 1px solid var(--success); color:var(--success); box-shadow:none;" onclick="event.stopPropagation(); quickGrantSub('${p.id}')">+30д</button>
        </div>
      `;
    }).join('');
  } catch(e) {
    el.innerHTML = '<div style="color:var(--danger); text-align:center;">Ошибка загрузки</div>';
  }
}

// ═══════════════════════════════════════════════
// ─── PWA ОБНОВЛЕНИЯ (УМНЫЙ РЕЖИМ) ───
let newWorker;
let refreshing = false;

if ('serviceWorker' in navigator) {
  // Когда новый воркер берет контроль, перезагружаем страницу
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    
    // Если таймер запущен или идет практика — НЕ перезагружаем!
    if (timerState === 'running' || document.body.classList.contains('app-focus-mode')) {
      dlog('⚠️ Обновление отложено: идет практика.');
      return;
    }
    window.location.reload();
  });

  window.addEventListener('load', () => {
    navigator.serviceWorker.register(new URL('./sw.js', window.location.href)).then(reg => {
      
      setInterval(() => { reg.update(); }, 10 * 60 * 1000);

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          reg.update();
        }
      });

      reg.addEventListener('updatefound', () => {
        newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Показываем красивую плашку вместо принудительной перезагрузки
              const banner = document.getElementById('appUpdateBanner');
              if (banner) banner.classList.remove('hidden');
            }
          });
        }
      });
    }).catch(err => dlog('SW error', err));
  });
}

// Обработка кнопки "Обновить" на баннере
async function forceUpdate() {
  // Если идет практика, предупреждаем пользователя
  if (timerState === 'running' || document.body.classList.contains('app-focus-mode')) {
    if (!await appConfirm('У вас запущена практика. Обновление сбросит таймер. Продолжить?', 'Обновление')) {
      return;
    }
  }

  const banner = document.getElementById('appUpdateBanner');
  if (banner) {
    const btn = banner.querySelector('button');
    if (btn) { 
      btn.textContent = 'Загрузка...'; 
      btn.style.opacity = '0.5'; 
      btn.disabled = true;
    }
  }
  
  if (newWorker) {
    newWorker.postMessage({ type: 'SKIP_WAITING' });
    setTimeout(() => { window.location.reload(); }, 1000);
  } else {
    setTimeout(() => { window.location.reload(); }, 500);
  }
}

// ─── PWA SHORTCUTS ───
const urlParams=new URLSearchParams(location.search);
const action=urlParams.get('action');
const urlUser = urlParams.get('user');

if(action==='ritual') {
  setTimeout(()=>startRitual(),1500);
} else if(action==='journal') {
  setTimeout(()=>showJournalScreen(),1500);
  } else if(action==='dialog' && urlUser) {
    // Если пришли из пуша — открываем чат с нужным человеком
    setTimeout(() => {
      if (typeof openDialog === 'function') openDialog(urlUser);
    }, 1500);
  }

// ─── SCROLL-ИНДИКАТОРЫ (КНИГИ И ПРАКТИКИ) ───
document.addEventListener('scroll', (e) => {
  // Обновление точек под календарем
  if (e.target && e.target.id === 'weekCalendar') {
    const wrap = e.target;
    const children = wrap.children;
    if (!children.length) return;
    
    const cardWidth = children[0].offsetWidth + 8; // 8 - это gap
    const idx = Math.round(wrap.scrollLeft / cardWidth);
    
    document.querySelectorAll('#calendarDots .cal-dot').forEach((d, i) => {
      d.classList.toggle('on', i === idx);
    });
  }

  // Точки для практик (внизу)
  if (e.target && e.target.id === 'heroScroll') {
    const wrap = e.target;
    const cardWidth = wrap.children[0] ? wrap.children[0].offsetWidth : 1;
    const idx = Math.round(wrap.scrollLeft / (cardWidth + 10));
    document.querySelectorAll('.hero-dot').forEach((d, i) => {
      d.classList.toggle('on', i === idx);
    });
  }
  
  // Точки для книг (сверху)
  if (e.target && e.target.id === 'activeBookWrap') {
    const wrap = e.target;
    const cardWidth = wrap.children[0] ? wrap.children[0].offsetWidth : 1;
    const idx = Math.round(wrap.scrollLeft / (cardWidth + 10));
    document.querySelectorAll('.books-dots .b-dot').forEach((d, i) => {
      d.classList.toggle('on', i === idx);
    });
  }

  // СЛУШАТЕЛЬ ДЛЯ ДНЕВНИКА
  if (e.target && e.target.id === 'journalFilters') {
    const wrap = e.target;
    const cardWidth = wrap.children[0] ? wrap.children[0].offsetWidth : 1;
    const idx = Math.round(wrap.scrollLeft / (cardWidth + 10)); 
    
    const dots = document.querySelectorAll('#journalDots .b-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('on', i === idx);
    });
  }

  // ДОБАВЛЯЕМ СЛУШАТЕЛЬ ДЛЯ СТАТИСТИКИ
  if (e.target && e.target.id === 'statsBooksSwipe') {
    const wrap = e.target;
    const cardWidth = wrap.children[0] ? wrap.children[0].offsetWidth : 1;
    const idx = Math.round(wrap.scrollLeft / (cardWidth + 10)); 
    document.querySelectorAll('#statsBooksDots .b-dot').forEach((d, i) => {
      d.classList.toggle('on', i === idx);
    });
  }    
}, true);

// ─── Слежение за системной темой (для режима «Авто») ───
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change',()=>{
  if(state.theme==='auto')applyTheme();
});

// Разблокировка звуков и голосов на iOS при первом касании
function unlockAudioContext() {
  const ctx = getCtx();
  if (ctx) {
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    // Проигрываем пустой звук, чтобы iOS точно разблокировал аудио
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(0);
    osc.stop(0.1);
  }
  if ('speechSynthesis' in window) {
    try { window.speechSynthesis.speak(new SpeechSynthesisUtterance('')); } catch (e) {}
  }
}

// Слушаем и touchstart, и pointerdown (для Safari и Chrome)
document.addEventListener('touchstart', unlockAudioContext, { once: true });
document.addEventListener('pointerdown', unlockAudioContext, { once: true });

// ─── СИСТЕМНАЯ КНОПКА "НАЗАД" (Android) ───
window.addEventListener('popstate', (e) => {
  const ritualOpen = !document.getElementById('ritualScreen').classList.contains('hidden');
  const practiceOpen = !document.getElementById('practiceScreen').classList.contains('hidden');
  const authOpen = !document.getElementById('authScreen').classList.contains('hidden');
  const helpOpen = !document.getElementById('helpScreen').classList.contains('hidden');
  const settingsOpen = !document.getElementById('settingsScreen').classList.contains('hidden');
  const notifOpen = !document.getElementById('notificationsScreen').classList.contains('hidden');
  const adminOpen = !document.getElementById('adminScreen').classList.contains('hidden');

  if (ritualOpen) { closeRitual(); history.pushState(null, null, location.href); return; }
  if (practiceOpen) { closePractice(); history.pushState(null, null, location.href); return; }
  
  if (helpOpen || settingsOpen || notifOpen || adminOpen) {
    showProfile();
    history.pushState(null, null, location.href);
  } else if (currentScreen !== 'today' && !authOpen) {
    smartHome();
    history.pushState(null, null, location.href);
  } else {
    // Если мы на главном экране, разрешаем приложению закрыться
    history.back(); 
  }
});

// Показать экран знакомства
function showLanding() {
  hideAll();
  const el = document.getElementById('landingScreen');
  if (el) el.classList.remove('hidden');
}

// Переход с лендинга на форму входа
function goToAuth() {
  hideAll();
  const auth = document.getElementById('authScreen');
  if (auth) auth.classList.remove('hidden');
  const nav = document.getElementById('bottomNav');
  if (nav) nav.style.display = 'none';
  window.scrollTo(0, 0);
}

// Оставляем один пушстейт для инициализации
history.pushState(null, null, location.href);
async function setAllBooksAccess(userId, grant) {
  const p = adminAllUsers.find(x => x.id === userId);
  if (!p) return;
  const access = grant ? BOOKS.map(b => String(b.id)) : [];
  try {
    await rpcCall('admin_set_book_access', { target_id: userId, book_ids: access });
    p.book_access = access;
    playCheck();
    await openAdminUser(userId);
  } catch (e) {
    console.error('[ANDGER] setAllBooksAccess:', e);
  }
}// ─── УПРАВЛЕНИЕ ЦИТАТАМИ ───
let editingQuoteId=null;

async function loadAdminQuotes(){
  const el=document.getElementById('adminQuotesList');
  if(!el)return;
  try{
    const{data}=await sb.from('quotes').select('*').order('sort_order',{ascending:true});
    const quotes=data||[];
    if(!quotes.length){
      el.innerHTML='<div style="color:var(--muted);text-align:center;padding:20px;font-size:13px">Пока нет цитат</div>';
      return;
    }
    el.innerHTML=quotes.map(q=>`
      <div class="d-card-glass" style="display:flex; justify-content:space-between; align-items:flex-start; padding:14px; margin-bottom:10px;">
        <div style="flex:1; padding-right:10px;">
          <div style="font-size:14px; font-weight:800; color:var(--accent-2); margin-bottom:6px; font-style:italic; line-height:1.4;">«${escapeHtml(q.text)}»</div>
          <div style="font-size:11px; color:var(--muted); font-weight:600;">${q.active?'🟢 Активна':'⚫ Скрыта'} · ${escapeHtml(q.author||'Андрей Герасимов')}</div>
        </div>
        <div style="display:flex; gap:6px; flex-shrink:0;">
          <div class="action-btn-glass" onclick="editQuote('${q.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
          <div class="action-btn-glass" onclick="toggleQuoteActive('${q.id}',${!q.active})"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${q.active ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>' : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'}</svg></div>
          <div class="action-btn-glass danger" onclick="deleteQuote('${q.id}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></div>
        </div>
      </div>
    `).join('');
  }catch(e){
    el.innerHTML='<div style="color:var(--danger);padding:20px;text-align:center">Ошибка</div>';
  }
}

function openQuoteEditor(id){
  editingQuoteId=id||null;
  const modal=document.getElementById('quoteModal');
  if(!modal)return;
  if(id){
    // Редактирование — подтянем данные
    sb.from('quotes').select('*').eq('id',id).single().then(({data:q})=>{
      if(!q)return;
      document.getElementById('quoteModalTitle').textContent='Редактировать цитату';
      document.getElementById('quoteText').value=q.text||'';
      document.getElementById('quoteAuthor').value=q.author||'Андрей Герасимов';
    });
  }else{
    document.getElementById('quoteModalTitle').textContent='Новая цитата';
    document.getElementById('quoteText').value='';
    document.getElementById('quoteAuthor').value='Андрей Герасимов';
  }
  modal.classList.remove('hidden');
}

function closeQuoteEditor(){
  document.getElementById('quoteModal').classList.add('hidden');
  editingQuoteId=null;
}

async function saveQuote(){
  const text=document.getElementById('quoteText').value.trim();
  const author=document.getElementById('quoteAuthor').value.trim()||'Андрей Герасимов';
  if(!text){toast('Введи текст','danger');return}
  try{
    if(editingQuoteId){
      await sb.from('quotes').update({text,author}).eq('id',editingQuoteId);
    }else{
      await sb.from('quotes').insert({text,author,active:true,sort_order:999});
    }
    closeQuoteEditor();
    toast('Сохранено');
    await loadAdminQuotes();
    await loadQuotes();
  }catch(e){toast('Ошибка','danger')}
}

async function editQuote(id){openQuoteEditor(id)}

async function toggleQuoteActive(id,active){
  await sb.from('quotes').update({active}).eq('id',id);
  await loadAdminQuotes();
  await loadQuotes();
  playCheck();
}

async function deleteQuote(id){
  if(!(await appConfirm('Удалить цитату?', 'Удаление цитаты', 'Удалить')))return;
  await sb.from('quotes').delete().eq('id',id);
  await loadAdminQuotes();
  await loadQuotes();
  toast('Удалено');
}
// ─── Публичный профиль через URL /u/{slug} ───
async function handlePublicProfileUrl(){
  const m=location.pathname.match(/^\/u\/([a-zA-Z0-9_-]+)$/);
  if(!m) return false;
  const slug=m[1];
  
  try{
    const{data}=await sb.from('profiles').select('id,name,avatar,public_slug,last_seen').eq('public_slug',slug).single();
    if(!data){
      toast('Профиль не найден');
      return false;
    }
    
    hideAll();
    document.getElementById('publicProfileScreen').classList.remove('hidden');
    
    // Красивая аватарка
    document.getElementById('ppAva').innerHTML = getAvatarHtml(data.avatar || 'user', 72);
    document.getElementById('ppName').textContent = data.name || 'Друг';
    
    // Считаем прогресс этого юзера
    const{data:prog}=await sb.from('progress').select('*').eq('user_id',data.id);
    let totalFire=0,booksCount=0;
    (prog||[]).forEach(row=>{
      const d=row.data||{};
      const days=d.days||{};
      let closed=Object.keys(days).filter(k=>days[k].closed).length;
      if(closed>0) booksCount++;
      
      const streak = calculateStreakFromProgress(row.book_id, d);
      if(streak > totalFire) totalFire = streak;
    });
    
    const lv=getLevel(0);
    document.getElementById('ppStatus').textContent=`${lv.ico} ${lv.name}`;
    document.getElementById('ppFire').textContent=totalFire;
    document.getElementById('ppBooks').textContent=booksCount;
    
    // Настраиваем кнопки
    const msgBtn = document.getElementById('publicMsgBtn');
    const friendBtn = document.getElementById('publicFriendBtn');
    
    if (user && user.id === data.id) {
      // Если смотрим свой профиль — прячем кнопки
      if(msgBtn) msgBtn.style.display = 'none';
      if(friendBtn) friendBtn.style.display = 'none';
    } else {
      // Если смотрим чужой — показываем
      if(msgBtn) { msgBtn.style.display = 'flex'; msgBtn.onclick = () => openDialog(data.id, data); }
      if(friendBtn) { friendBtn.style.display = 'flex'; friendBtn.dataset.targetId = data.id; }
    }
    
    document.getElementById('bottomNav').classList.add('hidden');
    return true;
  }catch(e){
    console.error('Ошибка загрузки профиля по ссылке:', e);
    return false;
  }
}

// ─── НОВЫЙ КАЛЕНДАРЬ И БЫСТРЫЙ РИТУАЛ ───
function renderWeekCalendar() {
  const el = document.getElementById('weekCalendar');
  const dotsEl = document.getElementById('calendarDots');
  if (!el || !currentBook) return;

  const bs = getBookState(currentBook.id);
  const today = new Date();
  const todayStr = localDate(today);
  
  // Определяем, когда началась практика, чтобы не листать в пустоту
  let minDate = today;
  if (bs.start) {
    minDate = new Date(bs.start + 'T00:00:00');
  }
  
  const msDiff = today - minDate;
  const daysDiff = Math.max(0, Math.floor(msDiff / 86400000));
  const weeksDiff = Math.floor(daysDiff / 7); 
  const totalWeeks = weeksDiff + 1; // Общее количество страниц (недель)

  const dows = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  let html = '';
  let dotsHtml = '';

  // Рисуем все недели подряд (от самой первой до текущей)
  for (let w = 0; w < totalWeeks; w++) {
    const weekOffset = w - weeksDiff; // -N - это прошлые недели, 0 - текущая
    
    const baseDate = new Date(today);
    baseDate.setDate(today.getDate() + (weekOffset * 7));

    const dayOfWeek = baseDate.getDay() === 0 ? 6 : baseDate.getDay() - 1;
    const monday = new Date(baseDate);
    monday.setDate(baseDate.getDate() - dayOfWeek);

    html += `<div class="d-calendar-week" data-week="${weekOffset}">`;
    
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      
      const dateStr = localDate(d);
      const isToday = dateStr === todayStr;
      
      let hasActivity = false;
      let isFullyClosed = false;
      const rec = bs.days[dateStr];
      
      if (rec) {
        if (rec.closed) isFullyClosed = true;
        if (rec.practices && rec.practices.length > 0) hasActivity = true;
      }

      let isBeforeStart = d < minDate;
      let cls = 'd-cal-day';
      if (isToday) cls += ' today';
      let opacity = isBeforeStart ? 'opacity: 0.3;' : '';
      
      let dotHtml = hasActivity ? `<div style="width: 5px; height: 5px; border-radius: 50%; background: ${isFullyClosed ? 'var(--d-success)' : 'var(--d-warm)'}; margin: 4px auto 0; box-shadow: 0 0 8px ${isFullyClosed ? 'var(--d-success)' : 'var(--d-warm)'};"></div>` : `<div style="height: 5px; margin-top: 4px;"></div>`;

      html += `
        <div class="${cls}" style="${opacity}" onclick="showDayStats('${dateStr}')">
          <div class="d-cal-dow">${dows[i]}</div>
          <div class="d-cal-dom">${d.getDate()}</div>
          ${dotHtml}
        </div>
      `;
    }
    html += `</div>`;
    // Точка активна на текущей неделе
    dotsHtml += `<div class="cal-dot ${w === weeksDiff ? 'on' : ''}"></div>`;
  }

  el.innerHTML = html;
  if (dotsEl) dotsEl.innerHTML = dotsHtml;

  // Прокручиваем в самый конец (на текущую неделю)
  setTimeout(() => {
    el.scrollLeft = el.scrollWidth;
  }, 50);
}

// Функция для смены недели (при клике на точки)

function toggleDayBookPractices(listId, button) {
  const list = document.getElementById(listId);
  if (!list || !button) return;
  const isExpanded = button.getAttribute('aria-expanded') !== 'false';
  button.setAttribute('aria-expanded', String(!isExpanded));
  list.hidden = isExpanded;
  const chevron = button.querySelector('.day-book-chevron');
  if (chevron) chevron.style.transform = isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)';
  playClick();
}

function showDayStats(dateStr) {
  dlog('🖱️ Клик по календарю! Дата:', dateStr);
  
  try {
    const modal = document.getElementById('dayStatsModal');
    const content = document.getElementById('dayStatsContent');
    const title = document.getElementById('dayStatsTitle');
    
    // 1. Защита: если модалки нет в HTML
    if (!modal || !content) {
      console.error('❌ Ошибка: Модалка #dayStatsModal не найдена в HTML!');
      toast('Ошибка: окно статистики не найдено.', 'danger');
      return;
    }

    // 2. Принудительно сбрасываем возможные скрытые стили
    modal.style.display = 'flex';
    modal.classList.remove('hidden');

    const d = new Date(dateStr);
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    if(title) title.textContent = `${d.getDate()} ${months[d.getMonth()]}`;

    let totalPracticesDone = 0;
    let totalTimeSpent = 0;
    let totalXP = 0;
    let booksHtml = '';

    BOOKS.forEach(b => {
      if (!b) return;
      const bs = getBookState(b.id);
      const rec = bs.days[dateStr];
      
      if (rec && rec.practices && rec.practices.length > 0) {
        totalPracticesDone += rec.practices.length;
        totalXP += rec.practices.length * 10;
        if (rec.closed) totalXP += 50;
        
        let pListHtml = '';
        rec.practices.forEach(pid => {
          const p = b.practices ? b.practices.find(x => x.id === pid) : null;
          if (p) {
            totalTimeSpent += (p.time || 0);
            pListHtml += `
              <div style="display:flex; align-items:center; gap:10px; padding:10px 0; border-bottom:1px dashed rgba(255,255,255,0.05);">
                <div style="width:24px; height:24px; border-radius:8px; background:rgba(62,207,142,0.15); display:flex; align-items:center; justify-content:center; color:var(--d-success); font-size:12px; font-weight:900;">✓</div>
                <div style="flex:1;">
                  <div style="font-size:13px; font-weight:700; color:var(--d-text);">${escapeHtml(p.title)}</div>
                  <div style="font-size:10px; color:var(--d-text-dim);">⏱ ${Math.round((p.time || 300)/60)} мин</div>
                </div>
              </div>
            `;
          }
        });

        const dayBookListId = `day-book-practices-${String(b.id).replace(/[^a-zA-Z0-9_-]/g, '-')}`;
        booksHtml += `
          <div class="d-card-glass day-book-card" style="margin-bottom:12px; padding:14px;">
            <button type="button" class="day-book-toggle" aria-expanded="true" aria-controls="${dayBookListId}" onclick="toggleDayBookPractices('${dayBookListId}', this)" style="width:100%; display:flex; align-items:center; gap:12px; margin-bottom:12px; padding:0 0 12px; border:0; border-bottom:1px solid var(--d-border); background:transparent; color:inherit; text-align:left; cursor:pointer; border-radius:0;">
              <div style="width:44px; height:44px; border-radius:12px; background:var(--d-surface-2); display:flex; align-items:center; justify-content:center;">
                ${getEmojiOrSvg(b.emoji, 24, b.title)}
              </div>
              <div style="flex:1;">
                <div style="font-size:14px; font-weight:900; color:var(--d-text);">${escapeHtml(b.title)}</div>
                <div style="font-size:11px; color:var(--d-text-dim);">${escapeHtml(b.author || '')}</div>
              </div>
              ${rec.closed ? `<div style="background:var(--d-success); color:#fff; padding:4px 8px; border-radius:8px; font-size:10px; font-weight:900; box-shadow:0 0 10px rgba(62,207,142,0.4);">День закрыт</div>` : ''}
              <span class="day-book-chevron" aria-hidden="true" style="margin-left:auto; color:var(--d-accent-2); transition:transform .2s; display:flex; align-items:center;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </button>
            <div id="${dayBookListId}" class="day-book-practices">${pListHtml}</div>
          </div>
        `;
      }
    });

    let finalHtml = '';
    if (totalPracticesDone === 0) {
      finalHtml = `
        <div class="d-empty-state" style="padding:20px; background:transparent; border:none;">
          <div class="d-empty-ico-wrap" style="width:56px; height:56px; margin-bottom:12px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px; height:24px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <div class="d-empty-title" style="font-size:15px;">Тишина</div>
          <div class="d-empty-text" style="font-size:12px;">В этот день не было практик 🌱</div>
        </div>
      `;
    } else {
      const minSpent = Math.round(totalTimeSpent / 60);
      finalHtml = `
        <div class="d-card-glass" style="padding:16px; margin-bottom: 16px; display:flex; justify-content:space-between; align-items:center; background: linear-gradient(135deg, rgba(124,92,255,0.15), rgba(25,18,45,0.8)); border-color: rgba(124,92,255,0.4);">
          <div style="text-align:center; flex:1;">
            <div style="font-size:24px; font-weight:900; color:#fff; line-height:1;">${totalPracticesDone}</div>
            <div style="font-size:9px; color:var(--muted); text-transform:uppercase; font-weight:800; margin-top:4px; letter-spacing:0.5px;">Практик</div>
          </div>
          <div style="width:1px; height:32px; background:rgba(255,255,255,0.1);"></div>
          <div style="text-align:center; flex:1;">
            <div style="font-size:24px; font-weight:900; color:var(--d-gold); line-height:1; text-shadow:0 0 10px rgba(255,184,0,0.3);">+${totalXP}</div>
            <div style="font-size:9px; color:var(--muted); text-transform:uppercase; font-weight:800; margin-top:4px; letter-spacing:0.5px;">Опыт</div>
          </div>
          <div style="width:1px; height:32px; background:rgba(255,255,255,0.1);"></div>
          <div style="text-align:center; flex:1;">
            <div style="font-size:24px; font-weight:900; color:var(--d-accent-2); line-height:1;">${minSpent}<span style="font-size:14px; font-weight:700;">м</span></div>
            <div style="font-size:9px; color:var(--muted); text-transform:uppercase; font-weight:800; margin-top:4px; letter-spacing:0.5px;">Время</div>
          </div>
        </div>
        <div style="max-height: 40vh; overflow-y: auto; padding-right: 4px;">
          ${booksHtml}
        </div>
      `;
    }

    content.innerHTML = finalHtml;
    playClick();
  } catch(e) {
    console.error('❌ Ошибка при открытии статистики дня:', e);
    toast('Ошибка при загрузке статистики дня.', 'danger');
  }
}
// ─── УМНАЯ ПРАКТИКА ───

function startSmartRitual(categoryName) {
  document.getElementById('customModeModal').classList.add('hidden');
  
  let allMatchingPractices = [];
  BOOKS.forEach(b => {
    if (!hasBookAccess(b.id)) return;
    
    // Строгое совпадение по категории
    if (b.category === categoryName) {
      b.practices.forEach(p => {
        const avgRating = allPracticeRatings[p.id] || 3.0;
        allMatchingPractices.push({ ...p, _bookId: b.id, _bookTitle: b.title, _rating: avgRating });
      });
    }
  });

  if (allMatchingPractices.length === 0) {
    toast('Пока нет практик для этой категории', 'warm');
    return;
  }

  // Сортируем по рейтингу и берем топ-10 для разнообразия
  allMatchingPractices.sort((a, b) => b._rating - a._rating);
  let topPractices = allMatchingPractices.slice(0, 10);
  topPractices.sort(() => Math.random() - 0.5);

  let selected = [];
  let totalTime = 0;
  for (let p of topPractices) {
    if (selected.length >= 3) break; 
    if (totalTime + p.time > 1200) continue; 
    selected.push(p);
    totalTime += p.time;
  }

  // СОХРАНЯЕМ ВЫБОР В ГЛОБАЛЬНУЮ ПЕРЕМЕННУЮ
  window._smartRitualQueue = selected;
  window._smartRitualCategory = categoryName;

  // ПОКАЗЫВАЕМ КРАСИВЫЙ ЭКРАН ПРЕДПРОСМОТРА
  let listHtml = '';
  selected.forEach(p => {
    listHtml += `
      <div style="background:rgba(255,255,255,0.05); padding:10px; border-radius:12px; margin-bottom:8px; display:flex; gap:10px; align-items:center; border:1px solid rgba(255,255,255,0.1);">
        <div style="width:36px; height:36px; flex-shrink:0; display:flex; align-items:center; justify-content:center; background:var(--d-surface-2); border-radius:10px;">
          ${getEmojiOrSvg(p.ico || 'book', 24)}
        </div>
        <div style="flex:1;">
          <div style="font-size:13px; font-weight:800; color:var(--d-text);">${escapeHtml(p.title)}</div>
          <div style="font-size:10px; color:var(--d-text-dim); margin-top:2px;">Из книги: ${p._bookTitle}</div>
        </div>
        <div style="font-size:11px; color:var(--d-gold); font-weight:900;">⭐ ${p._rating.toFixed(1)}</div>
      </div>
    `;
  });

  let modal = document.getElementById('customModeModal');
  modal.innerHTML = `
    <div class="modal-box" style="text-align:left; padding: 20px;">
      <div style="text-align:center; margin-bottom:16px;">
        <div style="font-size:40px; margin-bottom:8px;">🧠</div>
        <h2 style="font-size:18px; margin:0;">Твоя умная практика</h2>
        <p style="font-size:12px; color:var(--d-text-dim); margin-top:8px; line-height:1.4;">
          На основе оценок пользователей мы подобрали лучшие методики для категории «${categoryName}». 
        </p>
      </div>
      
      <div style="max-height: 40vh; overflow-y: auto; margin-bottom:20px; padding-right:4px;">
        ${listHtml}
      </div>

      <button class="d-btn-primary" onclick="launchSmartRitual()">▶ Начать (${Math.round(totalTime/60)} мин)</button>
      <button class="d-btn-secondary" onclick="document.getElementById('customModeModal').classList.add('hidden')" style="margin-top:10px;">Отмена</button>
    </div>
  `;
  modal.classList.remove('hidden');
}

// Функция для запуска после подтверждения
function launchSmartRitual() {
  window._isCustomRitualFlow = false;
  document.getElementById('customModeModal').classList.add('hidden');
  ritualQueue = window._smartRitualQueue;
  ritualIndex = 0;
  ritualHowIndex = 0;
  
  hideAll();
  const rEl = document.getElementById('ritualScreen');
  rEl.className = 'ritual';
  rEl.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;z-index:9999;display:flex;flex-direction:column;';
  document.body.classList.add('app-focus-mode');
  window.scrollTo(0, 0);
  playSuccess();
  renderRitualStep();
}

async function reportPost(postId, authorId) {
  if(authorId === user.id) { toast('Нельзя жаловаться на свой пост', 'warm'); return; }
  const reason = await appPrompt('Укажите причину жалобы (спам, мат, оскорбления):', 'Причина жалобы');
  if(!reason) return;
  try {
    await sb.from('reports').insert({ reporter_id: user.id, post_id: postId, reason: reason });
    toast('Жалоба отправлена модератору', 'success');
  } catch(e) { toast('Ошибка отправки', 'danger'); }
}
function switchActiveBook(bookId) {
  const b = BOOKS.find(x => x.id === bookId);
  if(!b) return;
  if(currentBook && currentBook.id === bookId) {
    // Если нажали на уже активную книгу, открываем её карточку
    openBookDetail(bookId);
  } else {
    // Переключаем книгу
    currentBook = b;
    state.lastBook = b.id;
    saveState();
    renderToday(); // Перерисовываем весь экран
    playClick();
  }
}
// Сброс прогресса ОДНОЙ книги

// Сброс ВСЕГО прогресса
function resetAllProgress() {
  document.getElementById('resetProgressModal').classList.add('hidden'); // Закрываем меню выбора
  legacyConfirmAdapter(
    'Удалить ВСЁ?', 
    'Весь прогресс, ВСЕ заметки, настроение и статистика будут стёрты навсегда. Это действие нельзя отменить.', 
    async () => { // Делаем функцию асинхронной
      state.books = {};
      state.lastBook = null;
      currentBook = null;
      state.shields = 0;
      state.spentXP = 0;
      
      try {
        // Очищаем ВСЕ таблицы с данными пользователя
        await Promise.all([
          sb.from('journals').delete().eq('user_id', user.id),
          sb.from('notes').delete().eq('user_id', user.id),
          sb.from('moods').delete().eq('user_id', user.id),
          sb.from('progress').delete().eq('user_id', user.id)
        ]);
      } catch (error) {
        console.error('Ошибка удаления данных:', error);
      }
      
      saveState();
      playSuccess();
      toast('Весь прогресс и данные очищены');
      smartHome();
    }
  );
}

async function saveBookDraft(){
  const title=document.getElementById('edTitle').value.trim();
  if(!title){document.getElementById('edErr').textContent='Введи название';return}
  await saveBook(false);
}

async function publishBook(){
  const title=document.getElementById('edTitle').value.trim();
  if(!title){document.getElementById('edErr').textContent='Введи название';return}
  await saveBook(true);
}

async function deleteBookFromEditor(){
  if(!editingBookId) return;
  if(!(await appConfirm('Удалить эту книгу навсегда? Все пользователи потеряют к ней доступ.', 'Удаление книги', 'Удалить навсегда'))) return;
  
  try {
    const { error } = await sb.from('books').delete().eq('id', editingBookId);
    if (error) throw error;
    
    toast('Книга удалена');
    // Удаляем из локального массива
    BOOKS = BOOKS.filter(b => b.id !== editingBookId);
    
    setTimeout(() => backFromBookEditor(), 500);
  } catch(e) {
    toast('Ошибка удаления: ' + e.message, 'danger');
  }
}
function parseSmartJson() {
  const raw = document.getElementById('edSmartJson').value.trim();
  if(!raw) return;
  
  try {
    let jsonStr = raw;
    if (raw.includes('```json')) jsonStr = raw.split('```json')[1].split('```')[0];
    else if (raw.includes('```')) jsonStr = raw.split('```')[1].split('```')[0];
    
    const data = JSON.parse(jsonStr.trim());
    
    // Заполняем текстовые поля формы
    const setVal = (id, val) => { 
      const el = document.getElementById(id);
      if (el && val !== undefined && val !== null && val !== '') el.value = val; 
    };

    setVal('edTitle', data.title);
    setVal('edAuthor', data.author);
    setVal('edEmoji', data.emoji || data.icon || '📖');
    setVal('edDays', data.days || 21);
    setVal('edCategory', data.category || 'Разное');
    setVal('edAbout', data.about || data.description);
    setVal('edMethod', Array.isArray(data.method) ? data.method.join(', ') : data.method);
    setVal('edResult', data.result || data.outcome);
    setVal('edAuthorBio', data.authorBio || data.author_bio || data.authorInfo || data.author);
    setVal('edForWhom', data.forWhom || data.for_whom || data.targetAudience || data.audience);
    setVal('edCoverUrl', data.cover_url || data.coverUrl || data.image);
    
    // Обновляем массивы практик и цитат
    if(Array.isArray(data)) {
      window._tempPractices = data;
    } else if(data.practices) {
      window._tempPractices = data.practices;
    }
    renderAdminPracticesList(); 
    
    if(data.quotes) {
      window._tempQuotes = data.quotes;
      renderAdminQuotesList();
    }
    
    toast('✅ Данные JSON успешно распознаны и загружены в форму!');
    document.getElementById('edSmartJson').value = ''; 
    
    // Переключаем на вкладку "Основное", чтобы ты увидел, что поля заполнились
    switchEditorTab('main', document.querySelector('.ed-tab-btn'));
    
  } catch(e) {
    toast('Ошибка парсинга JSON. Проверь текст.', 'danger');
    console.error('❌ Ошибка парсинга:', e);
  }
}
// ─── УМНЫЙ СБРОС ПРОГРЕССА ───
function showResetOptions() {
  const list = document.getElementById('resetBooksList');
  let html = '';
  BOOKS.forEach(b => {
    const bs = getBookState(b.id);
    const hasProgress = bs.start || Object.keys(bs.days).length > 0;
    if(hasProgress) {
      html += `
        <div class="d-lib-book-card" style="margin-bottom: 8px; cursor: pointer;" onclick="resetSpecificBook('${b.id}')">
          <div class="d-lib-book-cover" style="padding:0; overflow:hidden; border: none;">
            ${b.cover_url ? `<img src="${b.cover_url}" style="width:100%; height:100%; object-fit:cover;">` : getEmojiOrSvg(b.emoji, 32, b.title)}
          </div>
          <div class="d-lib-book-body" style="justify-content: center;">
            <div class="d-lib-book-title" style="font-size: 14px; margin-bottom: 2px;">${escapeHtml(b.title)}</div>
            <div class="d-lib-book-author" style="color: var(--d-danger); font-weight: 600; font-size: 10px; margin: 0;">Сбросить прогресс</div>
          </div>
          <div class="action-btn-glass danger" style="margin-left: auto;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </div>
        </div>
      `;
    }
  });
  if(!html) html = '<div style="text-align:center; color:var(--muted); font-size:13px; padding:20px 0;">Нет активного прогресса по книгам</div>';
  list.innerHTML = html;
  document.getElementById('resetProgressModal').classList.remove('hidden');
}

function resetSpecificBook(bookId) {
  legacyConfirmAdapter('Сбросить книгу?', 'Прогресс и заметки по этой книге будут удалены.', async () => {
    const bs = getBookState(bookId);
    bs.start = null; bs.days = {}; bs.journal = {};
    if(currentBook && currentBook.id === bookId) { currentBook = null; state.lastBook = null; }
    
    // Удаляем заметки и прогресс из БД
    try {
      await sb.from('notes').delete().eq('user_id', user.id).eq('book_id', bookId);
      await sb.from('progress').delete().eq('user_id', user.id).eq('book_id', bookId); // <--- ДОБАВИЛИ ЭТУ СТРОКУ
    } catch(e) { console.error('Ошибка удаления данных', e); }

    saveState(); playSuccess();
    document.getElementById('resetProgressModal').classList.add('hidden');
    toast('Прогресс и заметки книги сброшены');
    smartHome();
  });
}
// ─── НАСТРОЙКА ВРЕМЕНИ НАПОМИНАНИЙ ───
let currentNotifPeriod = 'morning';

function setNotifTime(period) {
  currentNotifPeriod = period;
  const title = period === 'morning' ? 'Утреннее напоминание' : 'Вечернее напоминание';
  document.getElementById('timeModalTitle').textContent = title;
  
  const currentTime = period === 'morning' ? (state.morningTime || '07:00') : (state.eveningTime || '21:00');
  const timeInput = document.getElementById('timeInput');
  if (timeInput) timeInput.value = currentTime;
  
  document.getElementById('timeModal').classList.remove('hidden');
}

function closeTimeModal() {
  document.getElementById('timeModal').classList.add('hidden');
}

function showVoiceSetupModal() {
  document.getElementById('voiceSetupModal').classList.remove('hidden');
}

function saveTimeFromModal() {
  const timeInput = document.getElementById('timeInput');
  const time = timeInput ? timeInput.value : '07:00';

  let mTime = state.morningTime || '07:00';
  let eTime = state.eveningTime || '21:00';

  if (currentNotifPeriod === 'morning') {
    state.morningTime = time;
    mTime = time;
    document.getElementById('morningTime').textContent = time;
  } else {
    state.eveningTime = time;
    eTime = time;
    document.getElementById('eveningTime').textContent = time;
  }

  saveState();
  
  // СОХРАНЯЕМ В БАЗУ ДЛЯ CRON JOB
  sb.from('notification_prefs').upsert({
    user_id: user.id,
    morning_time: mTime,
    evening_time: eTime
  }, { onConflict: 'user_id' }).then(()=>{});

  playSuccess();
  toast('Время сохранено');
  closeTimeModal();
}
// ─── ПРОСМОТР ПРОФИЛЯ ДРУГОГО ПОЛЬЗОВАТЕЛЯ (ИЗ ЧАТА) ───
let profileSource = 'feed'; // Откуда пришли

async function viewUserProfile(userId, source = 'feed') {
  if (!userId) return;
  if (userId === user.id) { showProfile(); return; }
  profileSource = source;

  try {
    const { data: p } = await sb.from('profiles').select('*').eq('id', userId).single();
    if (!p) { toast('Пользователь не найден', 'danger'); return; }

    const { data: prog } = await sb.from('progress').select('*').eq('user_id', userId);

    let totalFire = 0; 
    let totalBest = 0; 
    let booksCount = 0;
    let totalPractices = 0;
    let totalJournal = 0;
    let perfectDays = 0;

    (prog || []).forEach(row => {
      const d = row.data || {};
      if (d.start) booksCount++;
      
      const days = d.days || {};
      const journal = d.journal || {};
      
      totalJournal += Object.keys(journal).filter(k => journal[k].q1 || journal[k].q2 || journal[k].q3).length;

      let closedInBook = 0;
      Object.keys(days).forEach(date => {
        if (days[date].closed) closedInBook++;
        if (days[date].practices) {
          totalPractices += days[date].practices.length;
          const b = BOOKS.find(x => x.id === row.book_id);
          if (b && days[date].practices.length === b.practices.length) perfectDays++;
        }
      });
      
      const best = calculateStreakFromProgress(row.book_id, d);
      if (best > totalBest) totalBest = best;
      if (best > totalFire) totalFire = best;
    });

    const fullName = (p.name || 'Друг') + (p.last_name ? ' ' + p.last_name : '');
    const avaHtml = getAvatarHtml(p.avatar || 'user', 90);
    document.getElementById('ppAva').innerHTML = avaHtml;
    document.getElementById('ppName').textContent = fullName;
    const idEl = document.getElementById('ppUserId');
    if(idEl) idEl.textContent = 'ID: #' + p.id.slice(0, 8).toUpperCase();
    document.getElementById('ppStatus').textContent = p.last_seen ? 'Был(а) в сети ' + timeAgo(p.last_seen) : 'Статус скрыт';
    
    const { count: cFollowing } = await sb.from('friends').select('*', { count: 'exact', head: true }).eq('user_id', userId);
    const { count: cSubscribers } = await sb.from('friends').select('*', { count: 'exact', head: true }).eq('friend_id', userId);

    const setStat = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    setStat('ppFollowing', cFollowing || 0);
    setStat('ppSubscribers', cSubscribers || 0);
    setStat('ppFire', totalFire);
    setStat('ppBooks', booksCount);

    const extra = { journal: totalJournal, practices: totalPractices, perfect: perfectDays > 0, perfectStreak: perfectDays, otherAch: 99 };
    let achHtml = '';
    let allItems = [];
    ACHIEVEMENTS_GROUPS.forEach(g => g.items.forEach(a => allItems.push(a)));
    
    allItems.forEach(a => {
      if (a.secret) return; 
      const unlocked = a.check(totalBest, totalBest, extra); 
      if (unlocked) {
        achHtml += `<div class="ach-card unlocked"><div class="ach-badge">${a.ico}</div><div class="ach-name">${a.name}</div></div>`;
      }
    });
    
    if (!achHtml) achHtml = '<div style="color:var(--muted); font-size:13px; grid-column: 1 / -1; text-align:center;">Пока нет наград</div>';
    
    const achEl = document.getElementById('ppAchievements');
    if (achEl) achEl.innerHTML = achHtml;

    const msgBtn = document.getElementById('publicMsgBtn');
    if(msgBtn) {
      msgBtn.style.display = '';
      msgBtn.onclick = () => openDialog(userId, p);
    }

    hideAll();
    // Добавляем блок со статистикой
    let extraInfo = document.getElementById('ppExtraInfo');
    if(!extraInfo) {
      extraInfo = document.createElement('div');
      extraInfo.id = 'ppExtraInfo';
      document.querySelector('#publicProfileScreen .wrap').appendChild(extraInfo);
    }
    extraInfo.innerHTML = `
      <div class="d-card-glass" style="margin-top: 20px; padding: 16px; text-align: left;">
        <div style="font-size: 11px; font-weight: 900; color: var(--d-accent-2); text-transform: uppercase; margin-bottom: 12px;">📊 Статистика</div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
          <span style="font-size: 13px; color: var(--d-text-dim);">Всего практик:</span>
          <span style="font-size: 13px; font-weight: 800; color: var(--d-text);">${totalPractices}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
          <span style="font-size: 13px; color: var(--d-text-dim);">Записей в дневнике:</span>
          <span style="font-size: 13px; font-weight: 800; color: var(--d-text);">${totalJournal}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="font-size: 13px; color: var(--d-text-dim);">Идеальных дней:</span>
          <span style="font-size: 13px; font-weight: 800; color: var(--d-text);">${perfectDays}</span>
        </div>
      </div>
    `;
    document.getElementById('publicProfileScreen').classList.remove('hidden');
    
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 10);
    
  } catch(e) {
    console.error(e);
    toast('Ошибка загрузки профиля', 'danger');
  }

  try {
    const { data: friendData } = await sb.from('friends').select('*').eq('user_id', user.id).eq('friend_id', userId).maybeSingle();
    const friendBtn = document.getElementById('publicFriendBtn');
    if (friendBtn) {
      friendBtn.dataset.targetId = userId;
      if (friendData) {
        friendBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; vertical-align:middle;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Удалить из друзей';
        friendBtn.style.background = 'transparent';
        friendBtn.style.border = '1px solid var(--border)';
        friendBtn.style.color = 'var(--text)';
        friendBtn.style.boxShadow = 'none';
      } else {
        friendBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; vertical-align:middle;"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg> Добавить в друзья';
        friendBtn.style.background = 'linear-gradient(135deg,var(--accent),var(--accent-2))';
        friendBtn.style.border = 'none';
        friendBtn.style.color = '#fff';
        friendBtn.style.boxShadow = '0 6px 18px var(--accent-glow)';
      }
    }
  } catch(e) {
    console.error(e);
  }
}
function togglePassword() {
  const p = document.getElementById('password');
  const open = document.getElementById('eyeOpen');
  const closed = document.getElementById('eyeClosed');
  
  if(p && open && closed) {
    if (p.type === 'password') {
      p.type = 'text';
      open.style.display = 'none';
      closed.style.display = 'block';
    } else {
      p.type = 'password';
      open.style.display = 'block';
      closed.style.display = 'none';
    }
  }
}
async function savePracticeNote(practiceTitle, noteText, bookId) {
  const text = (noteText || '').trim();
  if (!text) return { ok: false, reason: 'empty' };
  if (!user || !user.id || !sb) {
    toast('Войди в аккаунт, чтобы сохранить заметку', 'warm');
    return { ok: false, reason: 'unauthenticated' };
  }
    const noteData = {
    user_id: user.id,
    book_id: bookId || (currentBook ? currentBook.id : 'general'),
    practice_title: practiceTitle || 'Заметка к практике',
    text
  };

  // 1. Если интернета нет вообще, сразу кладем в очередь
  if (!navigator.onLine) {
    addToOfflineQueue('note', noteData);
    toast('📡 Нет сети. Заметка сохранена и отправится позже.', 'warm');
    return { ok: true, offline: true };
  }

  try {
    const { error } = await sb.from('notes').insert(noteData);
    if (error) throw error;
    toast('Заметка сохранена в дневник');
    return { ok: true };
  } catch (e) {
    console.error('[ANDGER] Ошибка сохранения заметки:', e);
    
    // 2. Если сеть есть, но произошел сбой (например, таймаут), тоже кладем в очередь
    if (e.message && (e.message.includes('fetch') || e.message.includes('network'))) {
       addToOfflineQueue('note', noteData);
       toast('📡 Сбой сети. Заметка сохранена локально.', 'warm');
       return { ok: true, offline: true };
    }
    
    toast('Не удалось сохранить заметку. Проверь соединение и попробуй ещё раз.', 'danger');
    return { ok: false, reason: 'save_failed', error: e };
  }
}
// ─── ОЗВУЧКА ТАЙМЕРА ───
function speakTimerEnd(practiceId) {
  if (state.soundOn === false) return;
  let text = "Время практики завершено. Зафиксируйте мысли.";
  if (practiceId === 'read') text = "Время чтения завершено. Зафиксируйте одну мысль.";
  else if (practiceId === 'sport') text = "Тренировка завершена. Отличная работа!";
  else if (practiceId === 'silence' || practiceId === 'visual') text = "Время вышло. Медленно возвращайтесь в здесь и сейчас.";
  
  // Вызываем нашу новую функцию
  speakBackgroundGuide(text, 'practice');
}

// ─── ВЫДАЧА ПОДПИСКИ ───
async function rpcCall(functionName, params = {}) {
  if (!sb || typeof sb.rpc !== 'function') throw new Error('Supabase RPC недоступен');
  const { data, error } = await sb.rpc(functionName, params);
  if (error) throw error;
  return data;
}

async function adminGrantSub(userId, days) {
  try {
    await rpcCall('admin_grant_sub', { target_id: userId, days: Number(days) });
    const p = (adminAllUsers || []).find(x => String(x.id) === String(userId));
    if (p) {
      p.sub_until = Number(days) > 0 ? new Date(Date.now() + Number(days) * 86400000).toISOString() : null;
    }
    playSuccess();
    toast(Number(days) > 0 ? 'Подписка выдана ✓' : 'Подписка забрана');
    openAdminUser(userId);
  } catch (e) {
    console.error('[ANDGER] adminGrantSub:', e);
  }
}
// Быстрая выдача подписки на 30 дней (обёртка для кнопки "+30д")
function quickGrantSub(userId) {
  return adminGrantSub(userId, 30);
}
// ─── ОТЗЫВЫ ───
let currentReviewBookId = null;
let currentReviewStars = 5;

async function showReviewModal(bookId) {
  currentReviewBookId = bookId;
  
  try {
    // Ищем, есть ли уже отзыв от этого пользователя
    const { data: existing } = await sb.from('reviews').select('*').eq('user_id', user.id).eq('book_id', bookId).maybeSingle();
    if (existing) {
      currentReviewStars = existing.stars || 5;
      document.getElementById('reviewTextInput').value = existing.text || '';
    } else {
      currentReviewStars = 5;
      document.getElementById('reviewTextInput').value = '';
    }
  } catch(e) {
    currentReviewStars = 5;
    document.getElementById('reviewTextInput').value = '';
  }
  
  updateReviewStarsUI();
  document.getElementById('reviewModal').classList.remove('hidden');
}

function setReviewStars(val) {
  currentReviewStars = val;
  updateReviewStarsUI();
  playClick();
}

function updateReviewStarsUI() {
  // Ищем все звездочки внутри модалки отзывов по атрибуту onclick
  const stars = document.querySelectorAll('#reviewModal span[onclick^="setReviewStars"]');
  stars.forEach((s, idx) => {
    s.style.color = idx < currentReviewStars ? 'var(--gold)' : 'var(--border)';
  });
}

async function saveReview() {
  if (!currentReviewBookId) return;
  const text = document.getElementById('reviewTextInput').value.trim();
  
  try {
    await sb.from('reviews').upsert({
      user_id: user.id,
      book_id: currentReviewBookId,
      stars: currentReviewStars,
      text: text
    }, { onConflict: 'user_id,book_id' });
    
    document.getElementById('reviewModal').classList.add('hidden');
    playSuccess();
    toast('Спасибо за отзыв!');
    
    // Если мы на экране этой книги, обновляем звезды
    if (bookDetailId === currentReviewBookId) {
      renderBookStars(currentReviewBookId);
    }
  } catch(e) {
    toast('Ошибка сохранения отзыва', 'danger');
  }
}
// ─── ЗАГРУЗКА ОТЗЫВОВ В КАРТОЧКУ ───
async function renderBookReviews(bookId) {
  const el = document.getElementById('bdReviewsList');
  const section = document.getElementById('bdReviewsSection');
  if (!el || !section) return;

  el.innerHTML = '<div style="color:var(--muted);font-size:13px;">Загрузка отзывов...</div>';

  try {
    // Получаем только те отзывы, где есть текст (не пустые)
    const { data: reviews, error } = await sb.from('reviews')
      .select('*')
      .eq('book_id', bookId)
      .neq('text', '')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Если отзывов нет, скрываем весь блок
    if (!reviews || reviews.length === 0) {
      section.style.display = 'none';
      return;
    }

    // Показываем блок
    section.style.display = 'block';
    section.classList.remove('hidden');

    // Достаем имена и аватарки авторов
    const userIds = [...new Set(reviews.map(r => r.user_id))];
    const { data: profiles } = await sb.from('profiles').select('id, name, last_name, avatar').in('id', userIds);
    const profileMap = {};
    (profiles || []).forEach(p => profileMap[p.id] = p);

    let html = '';
    reviews.forEach(r => {
      const p = profileMap[r.user_id] || { name: 'Пользователь', last_name: '', avatar: '👤' };
      const fullName = (p.name || 'Друг') + (p.last_name ? ' ' + p.last_name : '');
      const date = new Date(r.created_at).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
      
      let starsHtml = '';
      for(let i=1; i<=5; i++) {
        starsHtml += `<span style="color:${i <= r.stars ? 'var(--gold)' : 'var(--border)'}; font-size:14px;">★</span>`;
      }

      html += `
        <div style="background:var(--card2); border-radius:var(--radius-sm); padding:12px; margin-bottom:10px; border: 1px solid var(--border);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <div style="width:28px; height:28px; border-radius:50%; background:var(--card3); display:flex; align-items:center; justify-content:center; font-size:14px;">${getAvatarHtml(p.avatar, 16)}</div>
              <div style="font-size:13px; font-weight:700;">${escapeHtml(fullName)}</div>
            </div>
            <div style="font-size:10px; color:var(--muted);">${date}</div>
          </div>
          <div style="margin-bottom:6px;">${starsHtml}</div>
          <div style="font-size:13px; color:#dcdcf0; line-height:1.5;">${escapeHtml(r.text)}</div>
        </div>
      `;
    });

    el.innerHTML = html;

  } catch (e) {
    console.error('Ошибка загрузки отзывов:', e);
    el.innerHTML = '<div style="color:var(--danger);font-size:13px;">Ошибка загрузки отзывов</div>';
  }
}
// ─── СОХРАНЕННЫЕ ПРАКТИКИ ───
window._savedRitualsData = []; // Временное хранилище для быстрого доступа

async function loadSavedRituals() {
  const wrap = document.getElementById('savedRitualsWrap');
  const list = document.getElementById('savedRitualsList');
  if(!wrap || !list) return;

  try {
    const { data } = await sb.from('custom_practices').select('*').eq('user_id', user.id).order('created_at', {ascending: false});
    window._savedRitualsData = data || []; 
    
    if(!data || !data.length) {
      wrap.style.display = 'none';
      return;
    }

    wrap.style.display = 'block';
    
    // Рисуем папку в стиле Библиотеки
    let html = `
      <div class="lib-category-wrap" style="margin-bottom: 20px; border-color: var(--accent); box-shadow: 0 4px 15px rgba(124,92,255,0.15);">
        <div class="lib-category-header" onclick="toggleLibCategory(this)" style="background: rgba(124,92,255,0.1); border-bottom: 1px solid var(--border);">
          <div style="font-weight:800; font-size:15px; display:flex; align-items:center; gap:8px; color: var(--accent-2);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
            Мои практики <span style="font-size:11px; opacity:0.6; margin-left:6px;">(${data.length})</span>
          </div>
          <div class="arrow-icon" style="font-size:18px;">›</div>
        </div>
        <div class="lib-category-body" style="padding: 10px;">
    `;

    data.forEach(item => {
      const count = item.practices.length;
            html += `
        <div class="d-lib-book-card" onclick="loadSavedRitualToList('${item.id}')" style="margin-bottom: 8px; padding: 12px; border-color: var(--d-border);">
          <div class="d-lib-book-cover" style="background: linear-gradient(135deg, var(--d-accent), var(--d-accent-2)); color: #fff; border: none;">
            <span style="font-size: 24px;">💾</span>
          </div>
          <div class="d-lib-book-body" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="d-lib-book-title" style="font-size: 14px; margin: 0;">${escapeHtml(item.name)}</div>
            <div class="d-lib-book-author" style="color: var(--d-accent-2); font-size: 11px; margin: 2px 0 0 0;">
              ${count} ${plural(count, 'практика', 'практики', 'практик')} · Нажми, чтобы выбрать
            </div>
          </div>
          <div style="color: var(--d-danger); padding: 10px; display: flex; align-items: center; cursor: pointer;" onclick="event.stopPropagation(); deleteSavedRitual('${item.id}')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </div>
        </div>
      `;
    });
    
    html += `</div></div>`;
    list.innerHTML = html;
    
  } catch(e) { console.error(e); }
}


async function deleteSavedRitual(id) {
  legacyConfirmAdapter(
    'Удалить набор?', 
    'Этот набор практик будет удален навсегда.', 
    async () => {
      try {
        await sb.from('custom_practices').delete().eq('id', id);
        playSuccess();
        toast('Набор удален');
        loadSavedRituals(); // Обновляем список
      } catch(e) {
        console.error(e);
        toast('Ошибка удаления', 'danger');
      }
    }
  );
}
function toggleZenMode(ctx) {
  const isRitual = !document.getElementById('ritualScreen').classList.contains('hidden');
  const screen = isRitual ? document.getElementById('ritualScreen') : document.getElementById('practiceScreen');
  const btn = screen ? screen.querySelector('.exit-zen-btn') : null;
  const noteBlock = screen.querySelector('.note-block');
  
  if (screen.classList.contains('focus-mode')) {
    screen.classList.remove('focus-mode');
    if (btn) btn.textContent = 'Развернуть таймер';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    
    if (noteBlock) {
        noteBlock.style.display = (timerState === 'done') ? 'block' : 'none';
    }
  } else {
    screen.classList.add('focus-mode');
    if (btn) btn.textContent = 'Свернуть таймер';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    if (noteBlock) noteBlock.style.display = 'none';
  }
}
async function toggleFriendFromProfile() {
  const btn = document.getElementById('publicFriendBtn');
  if (!btn || !btn.dataset.targetId) return;
  const targetId = btn.dataset.targetId;

  const { data: existing } = await sb.from('friends').select('*').eq('user_id', user.id).eq('friend_id', targetId).maybeSingle();

  if (existing) {
    await sb.from('friends').delete().eq('user_id', user.id).eq('friend_id', targetId);
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; vertical-align:middle;"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg> Добавить в друзья';
    btn.style.background = 'linear-gradient(135deg,var(--accent),var(--accent-2))';
    btn.style.border = 'none';
    btn.style.color = '#fff';
    btn.style.boxShadow = '0 6px 18px var(--accent-glow)';
    toast('Удален из друзей');
  } else {
    await sb.from('friends').insert({ user_id: user.id, friend_id: targetId });
    await createNotification(targetId, 'friend', { text: user.name + ' добавил(а) вас в друзья!', from: user.id });
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px; vertical-align:middle;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Удалить из друзей';
    btn.style.background = 'transparent';
    btn.style.border = '1px solid var(--border)';
    btn.style.color = 'var(--text)';
    btn.style.boxShadow = 'none';
    toast('Добавлен в друзья');
  }
  playSuccess();
}

async function openFollowsModal(type) {
  const modal = document.getElementById('followsModal');
  const title = document.getElementById('followsModalTitle');
  const list = document.getElementById('followsModalList');
  
  if(!modal) {
    console.error('Модалка followsModal не найдена в HTML');
    return;
  }
  
  title.textContent = type === 'subscriptions' ? 'Мои подписки' : 'Мои подписчики';
  list.innerHTML = '<div style="text-align:center; color:var(--muted); padding:20px;">Загрузка...</div>';
  modal.classList.remove('hidden');

  try {
    let query;
    if (type === 'subscriptions') {
      query = await sb.from('friends').select('friend_id').eq('user_id', user.id);
    } else {
      query = await sb.from('friends').select('user_id').eq('friend_id', user.id);
    }

    const ids = (query.data || []).map(x => x.friend_id || x.user_id);
    
    if (ids.length === 0) {
      list.innerHTML = '<div style="text-align:center; color:var(--muted); padding:20px;">Пока пусто</div>';
      return;
    }

    const { data: profiles } = await sb.from('profiles').select('id, name, avatar').in('id', ids);
    
    let html = '';
    (profiles || []).forEach(p => {
      html += `
        <div class="admin-item" style="margin-bottom: 8px;" onclick="document.getElementById('followsModal').classList.add('hidden'); viewUserProfile('${p.id}', 'profile')">
          <div class="ai-ava">${getAvatarHtml(p.avatar, 20)}</div>
          <div class="ai-info">
            <div class="ai-name">${escapeHtml(p.name || 'Аноним')}</div>
          </div>
          <div class="ai-arrow">›</div>
        </div>
      `;
    });
    list.innerHTML = html;
  } catch(e) {
    list.innerHTML = '<div style="text-align:center; color:var(--danger); padding:20px;">Ошибка загрузки</div>';
  }
}

// ─── БЫСТРАЯ ЗАМЕТКА ───
function openQuickNote() {
  document.getElementById('quickNoteInput').value = '';
  document.getElementById('quickNoteModal').classList.remove('hidden');
      
  setTimeout(() => {
    document.getElementById('quickNoteInput').focus();
  }, 100);
}

function closeQuickNote() {
  document.getElementById('quickNoteModal').classList.add('hidden');
    
}

async function saveQuickNote() {
  const text = document.getElementById('quickNoteInput').value.trim();
  if (!text) {
    toast('Напиши хотя бы одно слово', 'warm');
    return;
  }

  const btn = document.querySelector('#quickNoteModal .d-btn-primary');
  if (!btn) return;
  
  const originalHTML = btn.innerHTML;
  
  // Показываем спиннер, не меняя размер кнопки
  btn.innerHTML = `<div class="spinner"></div> <span style="margin-left: 8px;">Сохранение...</span>`;
  btn.disabled = true;

  try {
        if (!user || !user.id) throw new Error('Пользователь не авторизован');
    
    const noteData = {
      user_id: user.id,
      book_id: currentBook ? currentBook.id : 'general',
      practice_title: 'Быстрая мысль',
      text
    };

    if (!navigator.onLine) {
      addToOfflineQueue('note', noteData);
      playSuccess();
      toast('📡 Нет сети. Мысль сохранена и отправится позже!', 'warm');
      closeQuickNote();
      return;
    }

    const { error } = await sb.from('notes').insert(noteData);
    if (error) throw error;
    
    playSuccess();
    toast('Заметка сохранена в дневник!');
    closeQuickNote();
    
    if (currentScreen === 'journal') {
      renderJournal();
    }
  } catch(e) {
    console.error(e);
    toast('Ошибка сохранения', 'danger');
  } finally {
    // Возвращаем кнопку в исходное состояние
    btn.innerHTML = originalHTML;
    btn.disabled = false;
  }
}

// ─── ЗАМОРОЗКА ОГНЯ ───
function buyShield() {
  const stats = getGlobalStats();
  if (stats.totalXP < 200) {
    toast('Недостаточно XP! Нужно 200 XP.', 'warm');
    return;
  }

  legacyConfirmAdapter(
    'Купить заморозку?',
    'Списать 200 XP для покупки щита? Он спасет твой огонь, если ты пропустишь 1 день.',
    () => {
      state.spentXP = (state.spentXP || 0) + 200;
      state.shields = (state.shields || 0) + 1;
      saveState();
      playSuccess();
      toast('🛡️ Заморозка куплена!');
      renderToday(); // Обновляем экран
    }
  );
}

function applyShields(bookId) {
  const b = BOOKS.find(x=>x.id===bookId);
  if (!b) return;
  const bs = getBookState(bookId);
  if (!bs.start) return;

  let today = new Date();
  today.setHours(0,0,0,0);
  let start = new Date(bs.start);
  let shields = state.shields || 0;

  if (shields <= 0) return;

  let d = new Date(today);
  d.setDate(d.getDate() - 1); // Начинаем проверять со вчерашнего дня

  while (d >= start && shields > 0) {
    const dStr = localDate(d);
    const rec = bs.days[dStr];
    
    // Если день пропущен (нет записи или не закрыт и не заморожен)
    if (!rec || (!rec.closed && !rec.shielded)) {
      if (!bs.days[dStr]) bs.days[dStr] = { practices: [] };
      bs.days[dStr].shielded = true;
      shields--;
      state.shields = shields;
      saveState();
      playSuccess();
      toast(`🛡️ Заморозка спасла ваш огонь за ${d.getDate()}.${String(d.getMonth()+1).padStart(2,'0')}`, 'success');
      // Убрали break, теперь цикл пойдет дальше по истории и покроет все пропуски
    }
    d.setDate(d.getDate() - 1);
  }
}
// ─── ГЕНЕРАТОР СТОРИС ───
function openShareStory(bookId = null) {
  // Собираем статистику
  let maxStreak = 0;
  let totalPractices = 0;

  BOOKS.forEach(b => {
    const s = calcStreak(b.id);
    if (s > maxStreak) maxStreak = s;
    
    const bs = getBookState(b.id);
    Object.values(bs.days).forEach(rec => {
      if (rec.practices) totalPractices += rec.practices.length;
    });
  });

  // Получаем уровень и XP
  const stats = getGlobalStats();

  // Бейдж книги
  const badge = document.getElementById('storyBookBadge');
  if (badge) {
    if (bookId) {
      const b = BOOKS.find(x => x.id === bookId);
      if (b) {
        badge.textContent = `🏆 Пройдено: «${b.title}»`;
        badge.style.display = 'block';
      }
    } else {
      badge.style.display = 'none';
    }
  }

  // Заполняем данные
  document.getElementById('storyAvatar').innerHTML = getAvatarHtml(state.avatar, 70);
  document.getElementById('storyName').textContent = (user.name || 'Друг') + (user.lastName ? ' ' + user.lastName : '');
  document.getElementById('storyStreak').textContent = maxStreak;
  document.getElementById('storyClosed').textContent = totalPractices;
  document.getElementById('storyXP').textContent = stats.totalXP;
  
  const lvlEl = document.getElementById('storyLevel');
  if (lvlEl) {
    lvlEl.innerHTML = `${stats.lvlIco} ${stats.lvlName}`;
  }

  document.getElementById('storyModal').classList.remove('hidden');
  playClick();
}

async function downloadStory() {
  const btn = document.getElementById('storyDownloadBtn');
  const originalText = btn.textContent;
  btn.textContent = 'Создаем...';
  btn.disabled = true;

  const card = document.getElementById('storyCard');

  if (typeof html2canvas === 'undefined') {
    toast('Генератор картинок не загрузился. Проверь интернет.', 'danger');
    btn.textContent = originalText;
    btn.disabled = false;
    return;
  }

  try {
    const canvas = await html2canvas(card, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
      logging: false
    });

    // Сохраняем Blob для кнопки Поделиться
    lastGeneratedStoryBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

    // Скачиваем
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `andger_story_${Date.now()}.png`;
    link.href = imgData;
    link.click();

    playSuccess();
    toast('Картинка сохранена!');
  } catch (e) {
    console.error(e);
    toast('Ошибка создания картинки', 'danger');
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
}
// ─── ТЕСТ УВЕДОМЛЕНИЙ ───

function showAvatarModal() {
  const content = document.getElementById('avatarViewContent');
  if (!content) return;
  
  let html = `<div style="background:linear-gradient(180deg, rgba(30,20,50,0.95), rgba(13,10,24,0.98)); border-radius:28px; padding:24px; width:100%; max-width:360px; text-align:center; border:1px solid rgba(124,92,255,0.3); box-shadow:0 20px 50px rgba(0,0,0,0.5); backdrop-filter:blur(20px);" onclick="event.stopPropagation()">`;
  html += `<div style="font-size:18px; font-weight:900; margin-bottom:20px; color:#fff;">Твой символ</div>`;
  
  html += `<div class="premium-avatar-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 24px;">`;
  
  const avatarKeys = Object.keys(AVATAR_ICONS);
  if (!state.purchasedItems) state.purchasedItems = [];

  // Разделяем на доступные и закрытые
  const freeAvatars = [];
  const paidAvatars = [];

  avatarKeys.forEach(key => {
    const shopItem = SHOP_ITEMS.find(i => i.type === 'avatar' && i.key === key);
    const isLocked = shopItem && !state.purchasedItems.includes(shopItem.id);
    if (isLocked) paidAvatars.push(key);
    else freeAvatars.push(key);
  });

  const sortedKeys = [...freeAvatars, ...paidAvatars];

            sortedKeys.forEach((key) => {
              const isActive = state.avatar === key;
              const shopItem = SHOP_ITEMS.find(i => i.type === 'avatar' && i.key === key);
              const isLocked = shopItem && !state.purchasedItems.includes(shopItem.id);

              html += `
              <div class="premium-avatar-item ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}" onclick="${isLocked ? `toast('Купи эту аватарку в Магазине!', 'warm')` : `setAvatarFromModal('${key}')`}">
                  <div class="avatar-icon-wrap" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                    ${getAvatarHtml(key, 32)}
                  </div>
                  ${isLocked ? `<div class="avatar-lock-overlay"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>` : ''}
                </div>
              `;
            });
  
  html += `</div>`;
  html += `<button class="d-btn-primary" onclick="document.getElementById('avatarViewModal').classList.add('hidden')" style="margin-top:0; border-radius:100px;">Готово</button>`;
  html += `</div>`;
  
  content.innerHTML = html;
  document.getElementById('avatarViewModal').classList.remove('hidden');
}

function setAvatarFromModal(avatarKey) {
  state.avatar = avatarKey;
  saveState();
  sb.from('profiles').update({avatar: avatarKey}).eq('id', user.id).then(()=>{});
  playClick();
  if (typeof renderProfile === 'function') renderProfile(); 
  showAvatarModal(); 
}
async function speakBackgroundGuide(text, context = 'practice') {
  if (!text) return;
  if (state.soundMode !== 'sound') return;
  if (document.visibilityState === 'hidden') return; 

  const isRitual = (context === 'ritual');
  const screen = isRitual ? document.getElementById('ritualScreen') : document.getElementById('practiceScreen');
  const subEl = screen ? screen.querySelector('.practice-subtitle') : null;
  if (subEl) { 
    subEl.textContent = text; 
    subEl.classList.add('show'); 
  }

  try {
    let vSettings = {};
    let voiceToUse = 'alena';
    let speedToUse = 0.9; 
    let emotionToUse = 'good'; 

    if (state.voice && state.voice !== 'auto') {
      voiceToUse = state.voice;
      let activeP = context === 'ritual' ? ritualQueue[ritualIndex] : currentPractice;
      if (activeP && activeP.voice_settings && activeP.voice_settings.speed) {
          speedToUse = activeP.voice_settings.speed;
      }
    } else {
      let activePractice = context === 'ritual' ? ritualQueue[ritualIndex] : currentPractice;
      if (activePractice && activePractice.voice_settings) {
        vSettings = activePractice.voice_settings;
      } else if (currentBook && currentBook.voice_settings) {
        vSettings = currentBook.voice_settings;
      }
      
      const auto = autoVoiceFor(activePractice), isFemale = FEMALE_VOICES.includes(vSettings.voice);
voiceToUse = isFemale ? vSettings.voice : auto.voice;   // мужской или не указан → женский голос по виду практики
speedToUse = vSettings.speed || auto.speed;
emotionToUse = isFemale ? (vSettings.emotion || 'neutral') : auto.emotion;
    }

    emotionToUse = safeEmotion(voiceToUse, emotionToUse);
// Вызов Edge Function
    const { data, error } = await sb.functions.invoke('speak', { 
      body: { text: text, voice: voiceToUse, speed: speedToUse, emotion: emotionToUse } 
    });
    
    if (error) throw error;
    if (data && data.error) throw new Error(data.error);

    // Проверка, не закрыл ли пользователь практику
    const isPracticeHidden = document.getElementById('practiceScreen').classList.contains('hidden');
    const isRitualHidden = document.getElementById('ritualScreen').classList.contains('hidden');
    if (isPracticeHidden && isRitualHidden) {
      isVoicePlaying = false;
      if (musicAudio) fadeAudio(musicAudio, musicAudio.volume, 0.3, 400);
      return; 
    }

    // Приглушаем музыку ТОЛЬКО плавно
    isVoicePlaying = true; 
    if (musicAudio) {
      fadeAudio(musicAudio, musicAudio.volume, 0.15, 400);
    }


    const binaryString = window.atob(data.audio);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    if (!ttsAudio) ttsAudio = new Audio();
    ttsAudio.pause();
    ttsAudio.currentTime = 0;
    
    if (ttsAudio.src && ttsAudio.src.startsWith('blob:')) {
        URL.revokeObjectURL(ttsAudio.src);
    }

    const blob = new Blob([bytes], { type: 'audio/mpeg' });
    ttsAudio.src = URL.createObjectURL(blob);
    
    // Возврат музыки обратно
    const restoreMusic = () => {
      isVoicePlaying = false; 
      if (musicAudio && state.soundMode === 'sound') {
        fadeAudio(musicAudio, musicAudio.volume, 0.3, 800);
      }
    };

    ttsAudio.onended = restoreMusic;
    ttsAudio.onerror = restoreMusic;

    ttsAudio.volume = 1;
    
    try {
      await ttsAudio.play();
    } catch (playError) {
      restoreMusic(); 
      if (playError.name !== 'AbortError') throw playError;
    }
    
  } catch (error) {
    console.error('Ошибка озвучки, включаем системный голос:', error);
    
    // При ошибке тоже возвращаем музыку
    isVoicePlaying = false;
    if (musicAudio) fadeAudio(musicAudio, musicAudio.volume, 0.3, 800);

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); 
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ru-RU';
      
      utterance.onend = () => {
        if (subEl) { subEl.classList.remove('show'); setTimeout(() => { subEl.textContent = ''; }, 500); }
      };
      
      window.speechSynthesis.speak(utterance);
    } else {
      if (subEl) subEl.classList.remove('show');
    }
  }
}


// ─── УДАЛЕНИЕ ПОСТА ИЗ ЖАЛОБ ───
async function deleteReportedPost(reportId, postId) {
  legacyConfirmAdapter('Удалить пост?', 'Пост будет стерт из ленты, а жалоба закрыта.', async () => {
    try {
      await sb.from('messages').delete().eq('id', postId);
      await sb.from('reports').delete().eq('id', reportId);
      toast('Пост удален, жалоба закрыта');
      loadAdminReports(); // Обновляем список
    } catch(e) {
      toast('Ошибка удаления', 'danger');
    }
  });
}
// ─── ИСТОРИЯ ДЕЙСТВИЙ АДМИНА ───
async function loadAdminLogs() {
  const el = document.getElementById('adminLogsContainer');
  if(!el) return;
  
  el.innerHTML = '<div style="text-align:center; color:var(--muted); padding:20px;"><div class="spinner" style="margin:0 auto 10px;"></div>Загрузка...</div>';

  try {
    const { data: logs, error } = await sb.from('admin_logs').select('*').order('created_at', {ascending: false}).limit(20);
    if (error) throw error;
    
    if (!logs || logs.length === 0) {
      el.innerHTML = '<div style="text-align:center; color:var(--d-text-dim); padding:20px; font-size:12px;">История пуста.</div>';
      return;
    }

    const adminIds = [...new Set(logs.map(l => l.admin_id))];
    const { data: profiles } = await sb.from('profiles').select('id, name').in('id', adminIds);
    const adminsMap = {}; (profiles || []).forEach(p => adminsMap[p.id] = p.name);

    let html = '<div class="admin-timeline">';
    logs.forEach(log => {
      const date = new Date(log.created_at).toLocaleString('ru-RU', {day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit'});
      const adminName = adminsMap[log.admin_id] || 'Админ';
      
      let actionText = 'Действие';
      let color = 'var(--d-text)';
      let icon = '⚙️';
      
      if (log.action === 'block') { actionText = 'Блокировка'; color = 'var(--d-danger)'; icon='🚫'; }
      else if (log.action === 'admin') { actionText = 'Выдача прав'; color = 'var(--d-gold)'; icon='👑'; }
      else if (log.action === 'grant_book') { actionText = 'Доступ к книге'; color = 'var(--d-accent-2)'; icon='📚'; }
      else if (log.action === 'delete') { actionText = 'Удаление'; color = 'var(--d-danger)'; icon='🗑'; }

      html += `
        <div class="admin-timeline-item">
          <div class="ati-icon">${icon}</div>
          <div class="ati-content">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <span style="font-size:12px; font-weight:800; color:${color};">${actionText}</span>
              <span style="font-size:9px; color:var(--d-text-mute);">${date}</span>
            </div>
            <div style="font-size:11px; color:var(--d-text-dim); margin-top:2px;">
              Админ: <b style="color:var(--d-text);">${escapeHtml(adminName)}</b>
            </div>
          </div>
        </div>
      `;
    });
    html += `</div>`;
    el.innerHTML = html;
  } catch(e) {
    console.error('Logs error:', e);
    el.innerHTML = '<div style="text-align:center; color:var(--d-danger); padding:20px; font-size:12px;">История недоступна</div>';
  }
}

async function clearAdminLogs() {
  if(!(await appConfirm('Очистить всю историю действий?', 'Очистка истории'))) return;
  try {
    await sb.from('admin_logs').delete().neq('id', '00000000-0000-0000-0000-000000000000'); // Удаляем всё
    toast('История очищена');
    loadAdminLogs();
  } catch(e) {
    toast('Ошибка очистки', 'danger');
  }
}

// ═══════════ ИМПОРТ КНИГИ ИЗ JSON ═══════════
function showJsonImportModal() {
  let modal = document.getElementById('jsonImportModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'jsonImportModal';
    modal.className = 'modal hidden';
    modal.innerHTML = `
      <div class="modal-box" style="text-align:left; max-height: 90vh;">
        <h2 style="font-size:20px; margin-bottom:16px; text-align:center;">📥 Импорт книги из JSON</h2>
        <p style="font-size:12px; color:var(--d-text-dim); margin-bottom:12px; text-align:center;">Вставь JSON от ИИ сюда, и книга появится в приложении.</p>
        <textarea id="adminJsonInput" rows="8" placeholder='{ "id": "new-book", "title": "Название", ... }' style="width:100%; background:rgba(255,255,255,0.03); border:1px solid var(--d-border); border-radius:12px; padding:12px; color:var(--d-text); font-family:monospace; font-size:12px; resize:vertical; margin-bottom:16px;"></textarea>
        
        <div style="background:rgba(124,92,255,0.1); border:1px solid rgba(124,92,255,0.3); padding:12px; border-radius:12px; margin-bottom:16px; font-size:12px; color:var(--d-text-dim); line-height:1.4;">
          💡 <b>Создание новой книги.</b><br>Вставьте JSON от ИИ. Если вы хотите <i>обновить</i> существующую книгу — закройте это окно, зайдите в неё через список и используйте вкладку «JSON» там.
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; background:rgba(255,255,255,0.03); padding:12px 16px; border-radius:12px; border:1px solid var(--d-border);">
          <span style="font-size:14px; font-weight:700; color:var(--d-text);">Опубликовать сразу</span>
          <div class="d-toggle" id="jsonPublishToggle" onclick="this.classList.toggle('on')"></div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; background:rgba(255,255,255,0.03); padding:12px 16px; border-radius:12px; border:1px solid var(--d-border);">
          <span style="font-size:14px; font-weight:700; color:var(--d-text);">Бесплатная книга (без Premium)</span>
          <div class="d-toggle" id="jsonFreeToggle" onclick="this.classList.toggle('on')"></div>
        </div>

        <button class="d-btn-primary" onclick="addBookFromJSON()">Добавить в базу</button>
        <button class="d-btn-secondary" onclick="document.getElementById('jsonImportModal').classList.add('hidden')" style="margin-top:8px;">Отмена</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
  document.getElementById('adminJsonInput').value = '';
  modal.classList.remove('hidden');
}

async function addBookFromJSON() {
  const textarea = document.getElementById('adminJsonInput');
  const jsonStr = textarea.value.trim();
  if (!jsonStr) return toast('Вставь JSON', 'warm');

  try {
    // Парсим JSON
    let bookData = JSON.parse(jsonStr);
    
    // ✨ ВАЛИДАТОР ИИ: Чиним галлюцинации таймингов
    let fixedTimelines = 0;
    if (bookData.practices && Array.isArray(bookData.practices)) {
      bookData.practices.forEach(p => {
        if (p.voiceTimeline && Array.isArray(p.voiceTimeline) && p.time) {
           // Находим самую последнюю фразу в таймлайне
           const maxTime = Math.max(...p.voiceTimeline.map(v => v.time));
           
           // Если последняя фраза звучит позже, чем заканчивается практика
           if (maxTime >= p.time) {
              const ratio = (p.time - 10) / maxTime; // Оставляем 10 секунд запаса
              p.voiceTimeline.forEach(v => {
                 v.time = Math.floor(v.time * ratio);
              });
              fixedTimelines++;
           }
        }
      });
    }
    
    if (fixedTimelines > 0) {
      toast(`⚠️ Найдено ${fixedTimelines} ошибок тайминга. Мы их автоматически сжали.`, 'warm');
    }
    
    // Читаем состояние тумблера (если выключен - черновик)
    const toggle = document.getElementById('jsonPublishToggle');
    const isPublish = toggle ? toggle.classList.contains('on') : false;
    
    const freeToggle = document.getElementById('jsonFreeToggle');
    const isFree = freeToggle ? freeToggle.classList.contains('on') : false;
    
    // Устанавливаем статус на основе тумблеров
    bookData.published = isPublish; 
    bookData.is_free = isFree;
    
    // Отправляем в Supabase
        // Переводим названия полей в формат базы данных    
    // ✨ УМНАЯ ПРОВЕРКА КАТЕГОРИИ ОТ ИИ
    let finalCategory = "Разное";
    const aiCat = (bookData.category || '').toLowerCase();
    
    if (aiCat.includes('привычк') || aiCat.includes('саморазвит')) finalCategory = "Привычки и саморазвитие";
    else if (aiCat.includes('продуктив') || aiCat.includes('мышлен') || aiCat.includes('фокус')) finalCategory = "Продуктивность и мышление";
    else if (aiCat.includes('психолог') || aiCat.includes('отношен') || aiCat.includes('общен')) finalCategory = "Психология и отношения";
    else if (aiCat.includes('здоров') || aiCat.includes('энерг') || aiCat.includes('спорт')) finalCategory = "Здоровье и энергия";
    else if (aiCat.includes('финанс') || aiCat.includes('деньг') || aiCat.includes('карьер')) finalCategory = "Финансы и карьера";
    else if (aiCat.includes('духов') || aiCat.includes('спокой') || aiCat.includes('медитац')) finalCategory = "Духовность и спокойствие";
    else if (aiCat.includes('бизнес') || aiCat.includes('лидер')) finalCategory = "Бизнес и лидерство";
    else if (OFFICIAL_CATEGORIES.includes(bookData.category)) finalCategory = bookData.category; // Если уже правильное

    const mappedData = {
      ...bookData,
      category: finalCategory, // <--- ПРИНУДИТЕЛЬНО СТАВИМ ПРАВИЛЬНУЮ КАТЕГОРИЮ
      author_bio: bookData.authorBio || bookData.author_bio || '',
      for_whom: bookData.forWhom || bookData.for_whom || '',
      cover_url: bookData.coverUrl || bookData.cover_url || null,
      lumi_tips: bookData.lumi_tips || [],
      summary: bookData.summary || [],
      voice_settings: bookData.voice_settings || null
    };
    // Удаляем лишние ключи, которых нет в базе
    delete mappedData.authorBio;
    delete mappedData.forWhom;
    delete mappedData.coverUrl;

    // Используем upsert (вставить или обновить, если такой ID уже есть)
    const { error } = await sb.from('books').upsert(mappedData, { onConflict: 'id' });
    if (error) throw error;

    // Очищаем и закрываем
    textarea.value = '';
    document.getElementById('jsonImportModal').classList.add('hidden');
    
    // Показываем успех
    playSuccess();
    toast('Книга успешно добавлена!');
    
    // Обновляем списки
    await loadBooksFromSupabase();
    if (typeof loadAdminBooks === 'function') loadAdminBooks();
    if (typeof renderLibrary === 'function') renderLibrary();

  } catch (e) {
    console.error(e);
    toast('Ошибка JSON: ' + e.message, 'danger');
  }
}

function showPremium() {
  hideAll();
  const prem = document.getElementById('premiumScreen');
  if (prem) prem.classList.remove('hidden');
  window.scrollTo(0,0);
}
function setVoice(v) {
  state.voice = v;
  saveState();
  sb.from('profiles').update({voice: v}).eq('id',user.id).then(()=>{});
  playSuccess();
  
  if (v === 'auto') {
    toast('Включен автоматический режим. Каждая практика будет читаться своим голосом.');
  } else {
    toast('Голос изменен. Теперь все практики будут читаться этим голосом.');
  }
  
  renderSettings();
  
  // ОЗВУЧКА ПРИМЕРА
  if (v === 'auto') {
    speakBackgroundGuide("Приветствую тебя в лучшем приложении для практик Andger. Этот текст читается автоматическим голосом.", 'practice');
  } else {
    speakBackgroundGuide("Приветствую тебя в лучшем приложении для практик Andger. Теперь я буду читать все практики.", 'practice');
  }
}

// Слушатель восстановления сети
window.addEventListener('online', () => {
  dlog('[ANDGER] Сеть восстановлена!');
  processOfflineQueue();
});

// При запуске приложения тоже проверяем, нет ли "зависших" записей
setTimeout(() => {
  if (navigator.onLine && user) processOfflineQueue();
}, 3000);

// ─── ANDGER HARDENING / UX PATCH v2.1 ───
(function andgerHardening(){
  if (window.__andgerHardeningInstalled) return;
  window.__andgerHardeningInstalled = true;
  window.addEventListener('error', function(event){
    console.error('[ANDGER] Необработанная ошибка интерфейса:', event.error || event.message);
  });
  window.addEventListener('unhandledrejection', function(event){
    console.error('[ANDGER] Необработанная ошибка Promise/Supabase:', event.reason);
    const msg = document.getElementById('globalErrorToast');
    if (msg) { msg.textContent = 'Проблема с соединением. Проверь интернет и попробуй ещё раз.'; msg.classList.remove('hidden'); }
  });
    function pauseAllAudio() {
    try { if (musicAudio) musicAudio.pause(); } catch (e) { console.debug('[ANDGER] ignored:', e); }
    if (ttsAudio) { ttsAudio.pause(); }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }

  window.addEventListener('pagehide', pauseAllAudio);

document.addEventListener('visibilitychange', function(){
  if (document.visibilityState === 'hidden') {
    pauseAllAudio();
  } else if (document.visibilityState === 'visible') {
    
    // ✨ ФИКС: Проверяем, не закончился ли таймер, пока мы были в фоне
    if (timerState === 'running' && timerTargetTime > 0) {
      const remaining = Math.round((timerTargetTime - Date.now()) / 1000);
      
      if (remaining <= 0) {
        timerRemaining = 0;
        
        // Принудительно вызываем завершение практики
        const isRitual = !document.getElementById('ritualScreen').classList.contains('hidden');
        const screen = isRitual ? document.getElementById('ritualScreen') : document.getElementById('practiceScreen');
        const currentP = isRitual ? ritualQueue[ritualIndex] : currentPractice;
        
        stopTimer();
        timerState = 'done';
        
        // Визуально завершаем практику
        if(screen) {
          screen.querySelectorAll('.checklist-item').forEach(item => item.classList.add('done'));
          const noteBlock = screen.querySelector('.note-block');
          if(noteBlock) noteBlock.style.display = 'block';
          
          const btn = screen.querySelector('#timerBtn');
          if(btn){
            btn.textContent = '✨ Время вышло';
            btn.className = 'timer-big-btn done';
            btn.disabled = true;
          }
        }

        // Озвучиваем завершение и показываем окно
        if (currentP) {
          speakTimerEnd(currentP.id);
          playFanfare();
          showCompleteOverlay(currentP, isRitual ? 'ritual' : 'practice');
        }
        return; // Выходим, чтобы не запускать музыку
      }
    }

    // Если таймер еще идет — возобновляем работу приложения
    if (timerState === 'running') {
      // Будим Wake Lock (чтобы экран снова не погас)
      if (typeof requestWakeLock === 'function') requestWakeLock();
      
      // Будим аудио-контекст (браузеры любят его усыплять)
      if (typeof getCtx === 'function') {
        const ctx = getCtx();
        if (ctx && ctx.state === 'suspended') ctx.resume();
      }
      
      // ВОЗОБНОВЛЯЕМ МУЗЫКУ И ГОЛОС ПРИ ВОЗВРАТЕ
      if (state.soundMode === 'sound' && musicAudio) {
        musicAudio.play().catch(()=>{});
        const targetVol = isVoicePlaying ? 0.15 : 0.3;
        fadeAudio(musicAudio, musicAudio.volume, targetVol, 500);
      }
      if (ttsAudio && isVoicePlaying) {
        ttsAudio.play().catch(()=>{});
      }
    }
  }
});
  // Первичный onboarding-hint: не блокирует сценарий и показывается один раз на устройстве.
  const originalShowToday = window.showTodayScreen;
  if (typeof originalShowToday === 'function') {
    window.showTodayScreen = function(){
      const result = originalShowToday.apply(this, arguments);
      try {
        if (!localStorage.getItem('andger_home_hint_v1')) {
          localStorage.setItem('andger_home_hint_v1', '1');
          setTimeout(function(){
            if (typeof toast === 'function') toast('Начни с карточки практики. После выполнения сохрани главный инсайт в дневник ✨', 'success');
          }, 700);
        }
      } catch(e) { console.debug('[ANDGER] Подсказка первого входа недоступна:', e); }
      return result;
    };
  }
})();
// ─── УМНЫЙ ПОИСК (DEBOUNCE) ───
let searchTimeout;
document.addEventListener('input', (e) => {
  if (e.target && e.target.id === 'libSearch') {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      renderLibrary(); // Запускаем поиск только когда пользователь перестал печатать
    }, 300);
  }
});
// ─── ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ (РФ) ───
// ВАЖНО: заполните реквизиты оператора перед публикацией. Документы — шаблон, их должен проверить юрист.
const LEGAL_VERSION = '2026-11-05';
const LEGAL_OP = {
  name: '[ФИО / наименование оператора]',
  status: '[самозанятый (НПД) / ИП / ООО]',
  inn: '[ИНН]', ogrn: '[ОГРНИП / ОГРН — если есть]',
  email: '[email@andger.ru]', address: '[адрес для направления претензий]',
  site: 'https://andger.ru'
};
function showLegal(type) {
  const O = LEGAL_OP, D = 'Редакция от 05.11.2026';
  const op = `${O.name}, ${O.status}, ИНН ${O.inn}${O.ogrn ? ', ' + O.ogrn : ''}, e-mail: ${O.email}`;
  const docs = {
    privacy: ['Политика конфиденциальности', `
      <p><i>${D}. Политика действует в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».</i></p>
      <p><b>1. Оператор.</b> ${op}. Сайт и приложение: ${O.site}.</p>
      <p><b>2. Какие данные обрабатываются.</b> Имя и фамилия; номер телефона (логин); пароль (хранится в хэшированном виде); данные о прогрессе, практиках, записях дневника, настроении, письмах себе, достижениях и XP; публикации, комментарии, личные сообщения и подписки; технические данные (тип устройства и браузера, IP-адрес, настройки уведомлений). Специальные категории данных (здоровье, убеждения и др.) мы не запрашиваем — не указывайте их в открытых полях.</p>
      <p><b>3. Цели.</b> Регистрация и аутентификация; предоставление функций приложения; работа ленты, чатов и рейтинга; напоминания и push-уведомления; обработка платежей и предоставление Premium; связь с пользователем и поддержка; обеспечение безопасности; улучшение сервиса.</p>
      <p><b>4. Правовые основания.</b> Согласие субъекта (ст. 6 ч. 1 п. 1 152-ФЗ); исполнение договора с пользователем (п. 5); законные интересы оператора (п. 7) и требования закона.</p>
      <p><b>5. Действия с данными.</b> Сбор, запись, систематизация, накопление, хранение, уточнение, извлечение, использование, передача (предоставление, доступ), блокирование, удаление, уничтожение. Обработка — с использованием средств автоматизации.</p>
      <p><b>6. Передача третьим лицам и хранение.</b> Данные могут обрабатываться по поручению оператора хостинг-провайдером и поставщиком базы данных (Supabase), SMS-/push-провайдерами и платёжными сервисами — в объёме, необходимом для работы сервиса. Первичная запись, систематизация и хранение персональных данных граждан РФ осуществляются на серверах, находящихся на территории Российской Федерации; трансграничная передача выполняется только при соблюдении ст. 12 152-ФЗ. Данные не продаются и не используются для рекламы третьих лиц.</p>
      <p><b>7. Сроки.</b> Данные хранятся до достижения целей обработки или отзыва согласия, затем удаляются в срок до 30 дней, если иное не требуется законом (например, для бухгалтерского учёта платежей).</p>
      <p><b>8. Права пользователя.</b> Получить сведения об обработке, потребовать уточнения, блокирования или удаления данных, отозвать согласие, обжаловать действия оператора в Роскомнадзоре или суде (ст. 14, 20–21 152-ФЗ). Запрос — на ${O.email}; ответ — в течение 10 рабочих дней. Аккаунт можно удалить самостоятельно: «Профиль → Удалить аккаунт». Также можно направить запрос на ${O.email}.</p>
      <p><b>9. Защита.</b> Применяются правовые, организационные и технические меры: шифрование соединения (HTTPS), разграничение доступа, хэширование паролей, ограничение прав в базе данных.</p>
      <p><b>10. Cookie и локальное хранилище.</b> Приложение использует localStorage/cookie браузера для хранения сессии, настроек и прогресса. Вы можете очистить их в настройках браузера; часть функций при этом перестанет работать.</p>
      <p><b>11. Дети.</b> Сервис предназначен для лиц от 16 лет (маркировка 16+). Если вам нет 16 лет, не регистрируйтесь. Если стало известно о данных несовершеннолетнего без согласия законного представителя — они будут удалены.</p>
      <p><b>12. Изменения.</b> Новая редакция публикуется в приложении; о существенных изменениях сообщаем дополнительно.</p>`],
    consent: ['Согласие на обработку персональных данных', `
      <p><i>${D}</i></p>
      <p>Я, регистрируясь в приложении ANDGER, свободно, своей волей и в своём интересе даю оператору — ${op} — согласие на обработку моих персональных данных (ст. 9 152-ФЗ).</p>
      <p><b>Данные:</b> имя, фамилия, номер телефона, пароль (в хэшированном виде), данные о прогрессе и записях в приложении, публикации и сообщения, технические данные устройства, IP-адрес.</p>
      <p><b>Цели:</b> регистрация и вход; предоставление функций сервиса; уведомления и напоминания; связь и поддержка; обработка платежей Premium.</p>
      <p><b>Действия:</b> сбор, запись, систематизация, накопление, хранение, уточнение, использование, передача лицам, действующим по поручению оператора (хостинг, база данных, платёжные и уведомительные сервисы), блокирование, удаление, уничтожение — с использованием средств автоматизации.</p>
      <p><b>Срок:</b> до отзыва согласия или удаления аккаунта. <b>Отзыв:</b> письмом на ${O.email}; обработка прекращается в срок до 30 дней, если закон не требует хранить данные дольше.</p>
      <p>Согласие на размещение данных в общедоступных разделах (лента, профиль) выражается моими действиями по публикации.</p>`],
    terms: ['Пользовательское соглашение', `
      <p><i>${D}</i></p>
      <p><b>1. Общие положения.</b> Соглашение регулирует использование приложения ANDGER («Практикум»), принадлежащего ${op}. Регистрация или использование приложения означает принятие соглашения. Сервис предназначен для лиц от 16 лет.</p>
      <p><b>2. Характер материалов.</b> Материалы — образовательные и мотивационные, основаны на идеях книг и не являются медицинской, психологической, юридической или финансовой консультацией. Практики не заменяют помощь специалиста; при ухудшении самочувствия прекратите практику и обратитесь к врачу. Все упражнения вы выполняете добровольно и под свою ответственность.</p>
      <p><b>3. Аккаунт.</b> Вы предоставляете достоверные данные, отвечаете за сохранность пароля и действия под вашим аккаунтом. Один человек — один аккаунт.</p>
      <p><b>4. Пользовательский контент.</b> Публикуя посты, комментарии и сообщения, вы подтверждаете, что вправе их размещать, и предоставляете оператору неисключительное безвозмездное право показывать их в сервисе. Запрещено: оскорбления и травля, экстремизм, призывы к насилию и самоповреждению, порнография, реклама и спам, нарушение прав третьих лиц и иные нарушения законодательства РФ. Оператор вправе удалять такой контент и блокировать аккаунт. Жалобы: ${O.email}.</p>
      <p><b>5. Интеллектуальные права.</b> Приложение, его дизайн, тексты практик и программный код охраняются законом (часть IV ГК РФ). Копирование и распространение без согласия правообладателя запрещены. Названия и цитаты книг принадлежат их авторам и используются в информационных и образовательных целях.</p>
      <p><b>6. Premium.</b> Платный доступ регулируется <a href="#" onclick="showLegal('offer');return false;" style="color:var(--d-accent-2);">Публичной офертой</a>.</p>
      <p><b>7. Ответственность.</b> Сервис предоставляется «как есть». Оператор не гарантирует бесперебойной работы и достижения конкретных результатов и не отвечает за косвенные убытки, кроме случаев, предусмотренных законом. Права потребителей, установленные законом, не ограничиваются.</p>
      <p><b>8. Изменения и право.</b> Оператор вправе изменять соглашение, публикуя новую редакцию. Применяется право РФ; претензионный порядок — 30 дней, споры — в суде по месту нахождения оператора либо по правилам о подсудности, установленным законом для потребителей.</p>`],
    offer: ['Публичная оферта (Premium)', `
      <p><i>${D}. Оферта в соответствии со ст. 437 ГК РФ.</i></p>
      <p><b>1. Исполнитель.</b> ${op}. Адрес для претензий: ${O.address}.</p>
      <p><b>2. Предмет.</b> Предоставление пользователю платного доступа к расширенным функциям и библиотеке приложения («Premium») на срок оплаченного периода. Состав функций описан на экране «Premium».</p>
      <p><b>3. Цена и оплата.</b> 99 ₽ в месяц (НДС не облагается — [уточнить по режиму налогообложения]). Оплата через СБП или переводом по реквизитам, сообщённым исполнителем. Автоматическое списание не производится. Чек формируется в соответствии с законодательством о применении ККТ / для самозанятых.</p>
      <p><b>4. Акцепт.</b> Оплата Premium означает полное принятие оферты (ст. 438 ГК РФ). Доступ открывается в срок до 24 часов после подтверждения оплаты.</p>
      <p><b>5. Отказ и возврат.</b> Вы вправе отказаться от услуги до окончания оплаченного периода, направив заявление на ${O.email}; возврат пропорционален неиспользованной части периода за вычетом фактически понесённых расходов (ст. 32 Закона «О защите прав потребителей»). Возврат — тем же способом в течение 10 дней со дня получения заявления.</p>
      <p><b>6. Ответственность и споры.</b> Исполнитель отвечает в пределах стоимости оплаченного периода, кроме случаев, установленных законом. Претензии рассматриваются в течение 10 дней.</p>
      <p><b>7. Срок.</b> Оферта действует до отзыва; изменения вступают в силу с публикации и не затрагивают оплаченный период.</p>`],
    contacts: ['Контакты и сведения об операторе', `
      <p><b>Оператор:</b> ${O.name}</p><p><b>Статус:</b> ${O.status}</p>
      <p><b>ИНН:</b> ${O.inn}${O.ogrn ? '<br><b>ОГРН(ИП):</b> ' + O.ogrn : ''}</p>
      <p><b>E-mail:</b> ${O.email}</p><p><b>Адрес для претензий:</b> ${O.address}</p>
      <p><b>Сайт:</b> ${O.site}</p><p>Возрастная маркировка: 16+</p>`]
  };
  const d = docs[type] || docs.privacy;
  document.getElementById('legalTitle').textContent = d[0];
  document.getElementById('legalContent').innerHTML = d[1];
  document.getElementById('legalModal').classList.remove('hidden');
}

function openPracticeSelector() {
  if (!currentBook) {
    toast('Сначала выбери книгу в библиотеке', 'warm');
    return;
  }
  
  const modal = document.getElementById('practiceSelectorModal');
  if (!modal) {
    console.error('❌ Модалка #practiceSelectorModal не найдена в HTML!');
    toast('Ошибка интерфейса: не найдено окно выбора практик.');
    return;
  }

  const b = currentBook, bs = getBookState(b.id);
  const day = currentDay(b.id), date = dateByDay(b.id, day);
  const todayRec = bs.days[date] || {practices:[]};
  const donePractices = todayRec.practices || [];

  const listEl = document.getElementById('practiceSelectorList');
  if (!listEl) return;

  // ✨ УМНАЯ ЛОГИКА: Если это пошаговый курс (практик столько же, сколько дней)
  let practicesToShow = b.practices;
  if (b.practices.length === b.days && b.days > 7) {
      // Показываем только практику на сегодня (день 1 -> индекс 0)
      practicesToShow = [b.practices[Math.min(day - 1, b.practices.length - 1)]];
  }

  let html = '';
  // Меняем forEach на новый массив practicesToShow
  practicesToShow.forEach((p, i) => {
    const isDone = donePractices.includes(p.id);
    
    html += `
  <div class="practice-selector-item ${isDone ? 'done' : ''}" onclick="${isDone ? '' : `startSinglePracticeFromModal('${p.id}')`}">
    
    <!-- Номер / Галочка -->
    <div class="psi-number">${isDone ? '✓' : i+1}</div>
    
    <!-- Текст и бейджи -->
    <div class="psi-content">
      <div class="psi-title" style="font-size:13px; line-height:1.3;">${escapeHtml(p.title)}</div>
      <div class="psi-meta">
        <span class="psi-time">⏱ ${getDiffData(p.time, 'easy').mins}-${getDiffData(p.time, 'deep').mins} мин</span>
        <span class="psi-xp">✨ +${getDiffData(p.time, 'easy').xp}-${getDiffData(p.time, 'deep').xp} XP</span>
      </div>
    </div>

    <!-- Иконка (аккуратный водяной знак справа) -->
    <div class="psi-icon">
      ${getEmojiOrSvg(p.ico || 'book', 48)}
    </div>
  </div>
`;
  });

  listEl.innerHTML = html;
  modal.classList.remove('hidden'); // Открываем окно
}

function startSinglePracticeFromModal(practiceId) {
  document.getElementById('practiceSelectorModal').classList.add('hidden');
  openPractice(practiceId);
}
function startRitualFromModal() {
  document.getElementById('practiceSelectorModal').classList.add('hidden');
  startRitual(); // Эта функция уже есть, она запускает ритуал
}
// ─── ИНТЕРАКТИВНЫЙ МАСКОТ ANDGER ───
function tapMascot(element) {
  // 1. Легкий звук клика (если звук включен)
  if (typeof playClick === 'function') playClick();
  
  // 2. Меняем текст в облачке на случайную фразу
  const tips = [
    "Я всегда рядом. Давай сделаем шаг.",
    "Ты сегодня уже молодец.",
    "Фокус — это твоя суперсила.",
    "Дыши глубже. Всё идёт по плану.",
    "Маленькие шаги создают большие перемены.",
    "Не забывай отдыхать.",
    "Твоя энергия заразительна!"
  ];
  
  const bubbleText = document.getElementById('lumiTip');
  const bubble = document.getElementById('andgerBubble');
  
  if (bubbleText && bubble) {
    // Берем случайную фразу, отличную от текущей
    let newTip = tips[Math.floor(Math.random() * tips.length)];
    while (newTip === bubbleText.textContent) {
      newTip = tips[Math.floor(Math.random() * tips.length)];
    }
    
    bubbleText.textContent = newTip;
    
    // Перезапускаем анимацию появления облачка
    bubble.classList.remove('animate-in');
    void bubble.offsetWidth; // Трюк для перезапуска CSS анимации
    bubble.classList.add('animate-in');
  }

  // 3. Создаем эффект разлетающихся искр
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 8; i++) {
    const particle = document.createElement('div');
    particle.className = 'spark-particle';
    document.body.appendChild(particle);

    // Стартовая позиция (центр персонажа)
    particle.style.left = `${centerX}px`;
    particle.style.top = `${centerY}px`;

    // Случайное направление
    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 40;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    // Анимация через Web Animations API (встроено в браузеры)
    particle.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
    ], {
      duration: 600 + Math.random() * 400,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
    }).onfinish = () => particle.remove();
  }
}
// ─── ИГРА С МАСКОТОМ ───
function playWithMascot(element) {
  // Крутим зверька
  element.classList.remove('mascot-spin');
  void element.offsetWidth; // Трюк для перезапуска анимации
  element.classList.add('mascot-spin');
  setTimeout(() => element.classList.remove('mascot-spin'), 800);
  if (typeof playClick === 'function') playClick();
  
  // 1. Анимация глаз (открываются на 1 секунду)
  const eyesClosed = element.querySelector('.mascot-eyes-closed');
  const eyesOpen = element.querySelector('.mascot-eyes-open');
  
  if (eyesClosed && eyesOpen) {
    eyesClosed.style.opacity = '0';
    eyesOpen.style.opacity = '1';
    setTimeout(() => {
      eyesClosed.style.opacity = '1';
      eyesOpen.style.opacity = '0';
    }, 1000);
  }

  // 2. Эффект искр из палочки
  const wand = element.querySelector('.mascot-wand');
  if (wand) {
    const rect = wand.getBoundingClientRect();
    const startX = rect.right - 10;
    const startY = rect.top + 10;

    for (let i = 0; i < 12; i++) {
      const p = document.createElement('div');
      p.className = 'spark-particle';
      document.body.appendChild(p);

      // Начальная позиция
      p.style.left = `${startX}px`;
      p.style.top = `${startY}px`;

      // Случайный разлет
      const angle = Math.random() * Math.PI * 2;
      const dist = 30 + Math.random() * 50;
      const destX = Math.cos(angle) * dist;
      const destY = Math.sin(angle) * dist;

      p.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
      ], {
        duration: 600 + Math.random() * 400,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
      }).onfinish = () => p.remove();
    }
  }

  // 3. Смена текста в облачке
  const tips = [
    "Маленькие шаги создают большие перемены.",
    "Твой фокус — это твоя суперсила.",
    "Не забывай дышать. Всё идёт по плану.",
    "Я всегда рядом. Давай сделаем шаг.",
    "Ты сегодня уже молодец!",
    "Волшебство внутри тебя.",
    "Продолжай в том же духе!"
  ];
  
  const bubbleText = document.getElementById('lumiTip');
  const bubble = document.getElementById('andgerBubble');
  
  if (bubbleText && bubble) {
    let newTip = tips[Math.floor(Math.random() * tips.length)];
    // Чтобы текст не повторялся дважды подряд
    while (newTip === bubbleText.textContent) {
      newTip = tips[Math.floor(Math.random() * tips.length)];
    }
    bubbleText.textContent = newTip;
    
    // Пружинистая анимация облачка
    bubble.classList.remove('animate-in');
    void bubble.offsetWidth; 
    bubble.classList.add('animate-in');
  }
}
// ─── ДОБАВЛЕНИЕ КНОПКИ ЗАМЕТКИ В ШАПКУ ───
function injectQuickNoteButton() {
  // Ищем все блоки с иконками в шапках
  const headerActions = document.querySelectorAll('.d-header-actions');
  
  headerActions.forEach(header => {
    // Проверяем, нет ли уже такой кнопки (чтобы не дублировать)
    if (header.querySelector('.quick-note-header-btn')) return;

    // Создаем кнопку
    const btn = document.createElement('div');
    btn.className = 'd-icon-btn quick-note-header-btn';
    btn.title = 'Быстрая заметка';
    btn.onclick = openQuickNote;
    // Стили наследуются от .d-icon-btn, кнопка будет в едином стиле
    
    // Иконка карандаша (Lucide Edit)
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px; height:18px;">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    `;

    // Вставляем кнопку ПЕРЕД аватаркой (или в конец, если аватарки нет)
    const avatar = header.querySelector('.d-avatar');
    if (avatar) {
      header.insertBefore(btn, avatar);
    } else {
      header.appendChild(btn);
    }
  });
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  // Небольшая задержка, чтобы DOM точно прогрузился
  setTimeout(injectQuickNoteButton, 500); 
});
// ═══════════════════════════════════════════════
// ИДЕАЛЬНЫЙ ФИКС КЛАВИАТУРЫ ДЛЯ iOS / ANDROID (v2)
// ═══════════════════════════════════════════════
if (window.visualViewport) {
  const handleKeyboard = () => {
    const wrap = document.getElementById('dialogInputWrap') || document.getElementById('feedInputWrap');
    if (!wrap || wrap.style.display === 'none') return;

    const vv = window.visualViewport;
    // На iOS innerHeight может меняться, используем clientHeight для точности
    const viewportHeight = document.documentElement.clientHeight;
    const isKeyboardOpen = vv.height < viewportHeight * 0.8;
    const keyboardHeight = Math.max(0, viewportHeight - vv.height - vv.offsetTop);

    if (isKeyboardOpen && keyboardHeight > 100) {
      // Прижимаем строго к клавиатуре
      wrap.style.bottom = `${keyboardHeight}px`;
      wrap.style.borderRadius = '16px 16px 0 0';
      wrap.style.transition = 'none';

      const dialogMessages = document.getElementById('dialogMessages');
      if (dialogMessages) {
        setTimeout(() => { dialogMessages.scrollTop = dialogMessages.scrollHeight; }, 50);
      }
    } else {
      // Возвращаем на место при закрытии
      wrap.style.bottom = 'calc(85px + env(safe-area-inset-bottom, 0px))';
      wrap.style.borderRadius = '16px';
      wrap.style.transition = 'bottom 0.2s ease-out';
    }
  };

  window.visualViewport.addEventListener('resize', handleKeyboard);
  window.visualViewport.addEventListener('scroll', handleKeyboard);
}

// Функция для показа окна перед началом практики
function showPracticeModeInfo(mode) {
  let modal = document.getElementById('customModeModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'customModeModal';
    modal.className = 'modal hidden';
    document.getElementById('modalsRoot').appendChild(modal);
  }

  // --- ЛОГИКА ДЛЯ УМНОЙ ПРАКТИКИ ---
  if (mode === 'fast') {
    let uniqueCats = [...new Set(BOOKS.map(b => b.category).filter(Boolean))];
    if (uniqueCats.length === 0) uniqueCats = ['Бизнес', 'Здоровье', 'Психология', 'Спокойствие'];
    
    const catMap = {
      'Бизнес': '💰 Бизнес и деньги',
      'Здоровье': '💪 Здоровье и спорт',
      'Психология': '🧠 Мышление',
      'Спокойствие': '🧘 Спокойствие',
      'Саморазвитие': '🚀 Саморазвитие',
      'Разное': '📚 Разное'
    };

    let buttonsHtml = '';
    uniqueCats.forEach(cat => {
      const label = catMap[cat] || `📚 ${cat}`;
      const safeCat = cat.replace(/'/g, "\\'");
      
      buttonsHtml += `
        <button class="d-btn-secondary" onclick="document.getElementById('customModeModal').classList.add('hidden'); startSmartRitual('${safeCat}')" style="margin:0; min-height:60px; height:auto; flex-direction:column; gap:6px; padding: 12px 8px; justify-content: center; white-space: normal;">
          <span style="font-size:11px; text-align:center; line-height:1.3; word-break: break-word;">${label}</span>
        </button>
      `;
    });

    modal.innerHTML = `
      <div class="modal-box" style="text-align:left; padding: 20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h2 style="font-size:18px; margin:0;">🧠 Умная практика</h2>
          <span style="font-size:20px; color:var(--d-text-dim); cursor:pointer;" onclick="document.getElementById('customModeModal').classList.add('hidden')">✕</span>
        </div>
        <p style="font-size:12px; color:var(--d-text-dim); margin-bottom:16px;">Выбери, на что сделать упор сегодня. Приложение подберет лучшие практики на основе оценок.</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; max-height: 50vh; overflow-y: auto; padding-right: 4px;">
          ${buttonsHtml}
        </div>
      </div>
    `;
    modal.classList.remove('hidden');
    return;
  }

  // --- ЛОГИКА ДЛЯ ОСТАЛЬНЫХ ПРАКТИК ---
  let title = '';
  let text = '';
  let action = '';

  if (mode === 'full') {
    title = '📖 Полная практика по книге';
    text = 'Это полная практика на сегодня. Приложение предложит пройти все запланированные практики из текущей книги.';
    action = "openPracticeSelector()";
  } else if (mode === 'custom') {
    title = '🎨 Своя практика';
    text = 'Вы можете собрать свою собственную практику из любых практик разных книг. Создайте то, что нужно именно сегодня.';
    action = "showRitualBuilder()";
  }

  modal.innerHTML = `
    <div class="modal-box" style="text-align:center;">
      <h2 style="font-size:20px; margin-bottom:16px;">${title}</h2>
      <p style="font-size:14px; color:var(--d-text-dim); margin-bottom:24px; line-height: 1.5;">${text}</p>
      <button class="d-btn-primary" onclick="document.getElementById('customModeModal').classList.add('hidden'); ${action}">Начать</button>
      <button class="d-btn-secondary" onclick="document.getElementById('customModeModal').classList.add('hidden')" style="margin-top:10px;">Отмена</button>
    </div>
  `;
  modal.classList.remove('hidden');
}
function setPracticeRating(val) {
  currentPracticeRating = val;
  const stars = document.querySelectorAll('#practiceStarsContainer .p-star');
  stars.forEach((s, idx) => {
    if (idx < val) s.style.color = 'var(--gold)';
    else s.style.color = 'var(--border)';
  });
  playClick();
}
function openFeedbackModal() {
  // Запоминаем, открыта ли была модалка завершения
  window._feedbackFromComplete = !document.getElementById('completeOverlay').classList.contains('hidden');
  
  document.getElementById('completeOverlay').classList.add('hidden');
  document.getElementById('feedbackInput').value = '';
  document.getElementById('feedbackModal').classList.remove('hidden');
}

function closeFeedbackModal() {
  document.getElementById('feedbackModal').classList.add('hidden');
  // Если пришли с экрана завершения — возвращаем его
  if (window._feedbackFromComplete) {
    document.getElementById('completeOverlay').classList.remove('hidden');
    window._feedbackFromComplete = false;
  }
}

async function submitFeedback() {
  const text = document.getElementById('feedbackInput').value.trim();
  if(!text) return toast('Напиши что-нибудь', 'warm');

  try {
    // 1. Сохраняем в базу
    await sb.from('feedbacks').insert({ user_id: user.id, text: text });

    // 2. Отправляем уведомление админу
    const { data: admins } = await sb.from('profiles').select('id').eq('is_admin', true);
    if (admins && admins.length > 0) {
      for (let admin of admins) {
        await createNotification(admin.id, 'feedback', {
          text: `Новый отзыв от ${user.name || 'пользователя'}`,
          from: user.id
        });
      }
    }

    playSuccess();
    toast('Спасибо! Твой отзыв отправлен разработчику.');
    closeFeedbackModal();
  } catch(e) {
    console.error(e);
    toast('Ошибка отправки', 'danger');
  }
}


function normalizeVoiceTimeline(practice) {
  if (!practice) return practice;
  
  // Клонируем практику, чтобы не портить исходный объект в базе
  const p = JSON.parse(JSON.stringify(practice)); 
  
  // ✨ УМНАЯ ГЕНЕРАЦИЯ: Если админ не задал фразы, ведем человека по шагам (БЕЗ ЧТЕНИЯ ТЕОРИИ)
  if (!p.voiceTimeline || !p.voiceTimeline.length) {
    p.voiceTimeline = [];
    const totalTime = p.time || 300;
    
    // 1. Стартовое приветствие (на 2-й секунде)
    p.voiceTimeline.push({ time: 2, text: "Приготовься. Сделай глубокий вдох и выдох. Начинаем." });
    
    // 2. Распределяем шаги (how) равномерно по времени
    if (p.how && p.how.length > 0) {
      const timePerStep = Math.floor((totalTime - 30) / p.how.length); 
      p.how.forEach((step, index) => {
        if (step && step.trim().length > 2) {
          p.voiceTimeline.push({ time: 10 + (index * timePerStep), text: step });
        }
      });
    }
    
    // 3. Микро-действие ближе к концу
    if (p.micro_action && p.micro_action.trim().length > 2) {
      p.voiceTimeline.push({ time: totalTime - 40, text: "А теперь сделай прямо сейчас: " + p.micro_action });
    }
    
    // 4. Завершение
    p.voiceTimeline.push({ time: totalTime - 10, text: "Практика завершена. Сохрани это состояние." });
  }

  if (!p.voiceTimeline || !p.voiceTimeline.length) return p;
  
  const totalTime = p.time || 300;
  const safeBuffer = 15; 
  const maxAllowedTime = totalTime - safeBuffer;
  
  let maxTimelineTime = 0;
  p.voiceTimeline.forEach(v => {
    if (v.time > maxTimelineTime) maxTimelineTime = v.time;
  });
  
  // Сжимаем фразы, ТОЛЬКО если они не влезают в таймер. Растягивать не нужно!
  if (maxTimelineTime > maxAllowedTime) {
    const ratio = maxAllowedTime / maxTimelineTime;
    p.voiceTimeline.forEach(v => {
      v.time = Math.floor(v.time * ratio);
    });
  }
  
  return p;
}

// Функция для получения времени и XP в зависимости от сложности
function getDiffData(baseTime, level) {
  // Сначала переводим базовое время в минуты (например, 300 сек = 5 мин)
  const baseMins = Math.round(baseTime / 60);
  let targetMins = baseMins;
  let xp = 10;

  if (level === 'easy') { 
    targetMins = Math.max(1, Math.round(baseMins * 0.5)); // 50% времени, но не меньше 1 минуты
    xp = 5; 
  }
  if (level === 'deep') { 
    targetMins = Math.round(baseMins * 1.5); // 150% времени
    xp = 20; 
  }
  
  // Возвращаем точное время в секундах (минуты * 60) и опыт
  return { time: targetMins * 60, xp: xp, mins: targetMins };
}

// Функция рендера кнопок сложности
function renderDifficultySelector(baseTime, context) {
  const container = document.getElementById('difficultySelector');
  if (!container) return;

  const levels = [
    { id: 'easy', label: 'Легко' },
    { id: 'normal', label: 'Норма' },
    { id: 'deep', label: 'Глубоко' }
  ];

  container.innerHTML = levels.map(lvl => {
    const data = getDiffData(baseTime, lvl.id);
    const isActive = currentDifficulty === lvl.id;
    return `
      <div class="diff-btn ${isActive ? 'on' : ''}" onclick="setPracticeDifficulty('${lvl.id}', ${baseTime}, '${context}')">
        <span class="diff-title">${lvl.label}</span>
        <span class="diff-time">${data.mins} мин</span>
        <span class="diff-xp">+${data.xp} XP</span>
      </div>
    `;
  }).join('');
}

// Функция переключения сложности
function setPracticeDifficulty(level, baseTime, context) {
  if (timerState === 'running' || timerState === 'paused') {
    toast('Нельзя менять сложность во время практики', 'warm');
    return;
  }
  currentDifficulty = level;
  playClick();

  // Обновляем время на экране
  const newTime = getDiffData(baseTime, level).time;
  timerRemaining = newTime;
  
  const display = document.getElementById('timerDisplay');
  if (display) display.textContent = formatTime(newTime);

  // Перерисовываем кнопки, чтобы подсветить активную
  renderDifficultySelector(baseTime, context);
}

function buildPracticeHtml(p) {
  return `
    <div class="practice-focus-hide">
    <!-- Блок Триггера (Якоря) -->
    ${p.trigger ? `
    <div class="d-card-glass" style="margin-bottom: 12px; background: rgba(255,184,0,0.08); border-color: rgba(255,184,0,0.3); padding: 12px 16px; display: flex; align-items: center; gap: 12px;">
      <div style="font-size: 24px;">⚓</div>
      <div style="font-size: 13px; font-weight: 700; color: var(--d-gold); line-height: 1.4;">${escapeHtml(p.trigger)}</div>
    </div>` : ''}

    <!-- Блок Идентичности -->
    ${p.identity ? `
    <div class="d-card-glass" style="margin-bottom: 12px; background: linear-gradient(135deg, rgba(124,92,255,0.15), transparent); border-color: rgba(124,92,255,0.3); padding: 12px 16px; display: flex; align-items: center; gap: 12px;">
      <div style="font-size: 24px;">✨</div>
      <div style="font-size: 13px; font-weight: 800; color: var(--d-accent-3); font-style: italic; line-height: 1.4;">${escapeHtml(p.identity)}</div>
    </div>` : ''}

    <!-- Шапка с иконкой -->
    <div class="d-card-glass" style="margin-bottom: 16px; padding: 16px; background: var(--d-gradient-soft); border: 1px solid var(--d-border-strong);">
      <div style="display: flex; gap: 16px; align-items: center;">
        <div style="width: 64px; height: 64px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
          ${getEmojiOrSvg(p.ico || 'book', 64)}
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 18px; font-weight: 900; color: var(--d-text); line-height: 1.2; margin-bottom: 4px;">${escapeHtml(p.title || 'Практика')}</div>
          <div style="font-size: 12px; color: var(--d-text-dim); margin-bottom: 10px;">${escapeHtml(p.sub || '')}</div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span style="background: rgba(255,255,255,0.06); border: 1px solid var(--d-border); padding: 4px 10px; border-radius: 100px; font-size: 11px; font-weight: 800; color: var(--d-text);">
              ⏱ ${Math.round((p.time || 300)/60)} мин
            </span>
            <span style="background: rgba(255,184,0,0.12); border: 1px solid rgba(255,184,0,0.3); padding: 4px 10px; border-radius: 100px; font-size: 11px; font-weight: 800; color: var(--d-gold);">
              ⭐ ${allPracticeRatings[p.id] ? allPracticeRatings[p.id].toFixed(1) : '0.0'}
            </span>
            <span style="background: rgba(255,184,0,0.12); border: 1px solid rgba(255,184,0,0.3); padding: 4px 10px; border-radius: 100px; font-size: 11px; font-weight: 800; color: var(--d-gold);">
              ✨ +${getDiffData(p.time, 'normal').xp} XP
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Зачем и Как -->
    <div class="d-card-glass" style="margin-bottom: 12px;">
      <h3 style="font-size:12px; font-weight:900; color:var(--d-accent-2); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">💡 Зачем это нужно</h3>
      <p style="font-size:14px; color:var(--d-text); line-height:1.6; margin-bottom:16px;">${escapeHtml(p.why || '')}</p>
      
      <h3 style="font-size:12px; font-weight:900; color:var(--d-accent-2); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">🎬 Как делать</h3>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${(p.how || []).map((s, i) => `
          <div style="display:flex; gap:12px; align-items:flex-start;">
            <div style="width:24px; height:24px; border-radius:50%; background:var(--d-surface-2); border:1px solid var(--d-border); display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:900; color:var(--d-text); flex-shrink:0;">${i+1}</div>
            <div style="font-size:14px; color:var(--d-text); line-height:1.5; padding-top:2px;">${escapeHtml(String(s))}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Ошибки и Совет -->
    <div class="d-card-glass" style="margin-bottom: 12px;">
      <h3 style="font-size:12px; font-weight:900; color:var(--d-warm); text-transform:uppercase; letter-spacing:1px; margin-bottom:10px;">⚠️ Частые ошибки</h3>
      <ul style="list-style:none; padding:0; margin:0 0 16px 0;">
        ${(p.mistakes || []).map(m => `
          <li style="padding:8px 0 8px 24px; position:relative; font-size:13px; color:var(--d-text); line-height:1.5;">
            <span style="position:absolute; left:0; top:8px; color:var(--d-danger); font-weight:900;">✕</span>${escapeHtml(String(m))}
          </li>
        `).join('')}
      </ul>
      <div style="background:rgba(255,184,0,.08); border-left:3px solid var(--d-gold); border-radius:0 8px 8px 0; padding:12px;">
        <div style="font-size:11px; font-weight:900; color:var(--d-gold); text-transform:uppercase; margin-bottom:4px;">💬 Совет</div>
        <div style="font-size:13px; line-height:1.5; color:#e8ddc5; font-style:italic;">${escapeHtml(p.advice || '')}</div>
      </div>
    </div>

    <!-- Микро-действие -->
    ${p.micro_action ? `
    <div style="background: rgba(62, 207, 142, 0.1); border: 1px solid rgba(62, 207, 142, 0.3); border-radius: 16px; padding: 16px; margin-bottom: 20px; text-align: center;">
      <div style="font-size: 11px; font-weight: 900; color: var(--d-success); text-transform: uppercase; margin-bottom: 4px;">🚀 Сделай прямо сейчас</div>
      <div style="font-size: 14px; font-weight: 700; color: #fff;">${escapeHtml(p.micro_action)}</div>
    </div>` : ''}
    </div>

    <!-- ТАЙМЕР -->
    <div class="ps-block timer-wrapper">
    <!-- Плавающая иконка музыки (только для экрана таймера) -->
      <div class="music-fab-btn" onclick="switchMusicTrack()" style="position:absolute; top: calc(85px + env(safe-area-inset-top, 0px)); right: 20px; width: 44px; height: 44px; border-radius: 50%; background: rgba(124,92,255,0.15); border: 1px solid rgba(124,92,255,0.3); backdrop-filter: blur(10px); color: #fff; align-items: center; justify-content: center; cursor: pointer; z-index: 100; transition: all 0.2s;" title="Сменить трек">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
      </div>
      
      <div class="d-timer-ring-wrap" style="position: relative; margin-bottom: 24px; filter: drop-shadow(0 0 25px rgba(124,92,255,0.3));">
        <svg class="d-timer-ring-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dTimerGradGlobal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ff7a2a" /><stop offset="50%" stop-color="#7c5cff" /><stop offset="100%" stop-color="#1e5cff" />
            </linearGradient>
          </defs>
          <circle class="d-timer-ring-bg" cx="100" cy="100" r="85"></circle>
          <circle class="d-timer-ring-fill timer-circle" cx="100" cy="100" r="85" stroke-dasharray="534" stroke-dashoffset="0" style="stroke: url(#dTimerGradGlobal);"></circle>
        </svg>
        <div class="d-timer-text timer-display" id="timerDisplay" style="font-size: 52px; text-shadow: 0 0 20px rgba(255,255,255,0.3);">${formatTime(p.time || 300)}</div>
      </div>
      <!-- СУБТИТРЫ -->
      <div class="voice-subtitle practice-subtitle"></div>
           
      <!-- Кнопки -->
      <div class="zen-buttons-wrap">
        <div class="difficulty-selector" id="difficultySelector">
          <!-- Кнопки заполняются динамически через JS -->
        </div>
        <button class="d-btn-primary" id="timerBtn" onclick="toggleTimer('practice')">▶ Начать практику</button>
        <button class="d-btn-secondary exit-zen-btn" onclick="toggleZenMode()" style="display: none; width:100%;">Свернуть таймер</button>
      </div>
    </div>

    <!-- Заметка и кнопка -->
    <div class="d-card-glass note-block" style="margin-top:20px; display: none;">
       <h3 style="font-size:12px; font-weight:900; color:var(--d-accent-2); text-transform:uppercase; margin-bottom:10px;">✍️ Твоя заметка</h3>
       <textarea id="practiceNoteInput" placeholder="Что получилось? С какими мыслями столкнулся?..." style="width:100%; background:var(--d-surface-2); border:1px solid var(--d-border); border-radius:12px; padding:12px; color:var(--d-text); font-size:14px; min-height:100px; resize:vertical; margin-bottom:16px;"></textarea>
       <button class="d-btn-primary" style="width: 100%;" onclick="markPracticeFromScreen('${p.id}')">✓ Отметить выполненным</button>
    </div>
  `;
}
function switchEditorTab(tabId, btnEl) {
  // Подсветка кнопки
  document.querySelectorAll('.ed-tab-btn').forEach(b => b.classList.remove('on'));
  if (btnEl) btnEl.classList.add('on');

  // Скрытие всех вкладок
  document.querySelectorAll('.ed-tab-content').forEach(c => c.classList.add('hidden'));

  // Показ нужной
  const target = document.getElementById('edTab-' + tabId);
  if (target) target.classList.remove('hidden');
}

function switchMusicTrack() {
  if (!currentPlaylist || currentPlaylist.length <= 1) {
    toast('Для этой практики доступен только один трек', 'warm');
    return;
  }
  nextTrack();
  // Берем номер текущего трека в плейлисте и прибавляем 1 (так как индекс с 0)
  const trackNumber = currentTrackIdx + 1; 
  toast(`🎵 Музыка №${trackNumber}`);
}

async function adminTestPush(userId) {
  if(!(await appConfirm('Отправить тестовый push этому пользователю?', 'Проверка Push'))) return;
  try {
    // В Supabase Edge Functions вызываем отправку
    const { error } = await sb.functions.invoke('send-scheduled-push', {
      body: { target_user_id: userId, is_test: true }
    });
    if (error) throw error;
    toast('Тестовый Push отправлен!');
  } catch (e) {
    console.error(e);
    toast('Ошибка: ' + e.message, 'danger');
  }
}
function updateEditorStatusBanner(b) {
  const banner = document.getElementById('edStatusBanner');
  const dot = document.getElementById('edStatusDot');
  const text = document.getElementById('edStatusText');
  const btn = document.getElementById('edStatusBtn');
  if(!banner || !dot || !text || !btn) return;

  if(!b) {
    banner.style.display = 'none';
    return;
  }

  banner.style.display = 'flex';
  const isPublished = (b.published === true || b.published === 'true');

  if (isPublished) {
    banner.style.background = 'rgba(62,207,142,0.1)';
    banner.style.borderColor = 'rgba(62,207,142,0.3)';
    dot.style.background = 'var(--d-success)';
    text.textContent = '✅ Опубликована (видна всем)';
    if (btn) btn.style.display = 'none'; // Скрываем кнопку навсегда
  } else {
    banner.style.background = 'rgba(255,184,0,0.1)';
    banner.style.borderColor = 'rgba(255,184,0,0.3)';
    dot.style.background = 'var(--d-gold)';
    text.textContent = '📝 Черновик (скрыта от всех)';
    if (btn) btn.style.display = 'none'; // Скрываем кнопку навсегда
  }
}

async function toggleBookPublication() {
  if(!editingBookId) return;
  
  const b = (BOOKS.find(x=>x.id===editingBookId) || (adminAllBooks||[]).find(x=>x.id===editingBookId));
  if(!b) return;

  const isCurrentlyPublished = (b.published === true || b.published === 'true');
  const newStatus = !isCurrentlyPublished;

  // Если скрываем — просим подтверждение
  if (newStatus === false) {
    if(!(await appConfirm('Скрыть книгу от пользователей? Она переместится в «В разработке».', 'Скрыть книгу', 'Скрыть'))) return;
  }

  try {
    const { error } = await sb.from('books').update({ published: newStatus }).eq('id', editingBookId);
    if (error) throw error;

    // Обновляем в памяти
    b.published = newStatus;
    const ab = (adminAllBooks||[]).find(x => x.id === editingBookId);
    if (ab) ab.published = newStatus;

    updateEditorStatusBanner(b);
    playSuccess();
    toast(newStatus ? '✅ Книга опубликована' : '📁 Книга скрыта (в разработке)');
  } catch(e) {
    console.error('[ANDGER] toggleBookPublication:', e);
    toast('Ошибка: ' + (e.message || e), 'danger');
  }
}
async function exportAllBooks() {
  try {
    toast('Сбор данных...');
    const { data: books, error } = await sb.from('books').select('*');
    if (error) throw error;
    
    if (!books || !books.length) {
      toast('В базе нет книг', 'warm');
      return;
    }

    // Приводим к формату, в котором они изначально загружались
    const exportData = books.map(b => ({
      id: b.id, title: b.title, author: b.author, emoji: b.emoji, days: b.days,
      category: b.category, about: b.about, method: b.method,
      authorBio: b.author_bio, forWhom: b.for_whom, result: b.result,
      cover_url: b.cover_url, lumi_tips: b.lumi_tips, summary: b.summary,
      voice_settings: b.voice_settings, practices: b.practices, quotes: b.quotes,
      published: b.published,
    format: b.format, path: b.path
    }));

    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'andger_books_backup_' + todayStr() + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    playSuccess();
    toast('Бэкап скачан!');
  } catch (e) {
    console.error(e);
    toast('Ошибка экспорта', 'danger');
  }
}
function setMood(moodValue, el) {
  currentMood = moodValue;
  document.querySelectorAll('.mood-smiley').forEach(s => {
    s.style.background = 'rgba(255,255,255,0.05)';
    s.style.borderColor = 'var(--d-border)';
    s.style.color = 'var(--d-text-dim)';
    s.style.transform = 'scale(1)';
  });
  el.style.background = 'rgba(124,92,255,0.2)';
  el.style.borderColor = 'var(--d-accent)';
  el.style.color = 'var(--d-text)';
  el.style.transform = 'scale(1.1)';
  playClick();
}
  function completeMicroAction(bookId, practiceId) {
  const day = currentDay(bookId);
  const date = dateByDay(bookId, day);
  const bs = getBookState(bookId);
  
  if (!bs.days[date]) bs.days[date] = { practices: [] };
  bs.days[date].microActionDone = true; // Помечаем, что сделано
  
  saveState();
  playSuccess();
  haptic('success');
  toast('🚀 +5 XP за микро-действие!');
  
  renderToday(); // Перерисовываем экран
}
function showBookCompleteSuccess(bookId) {
  const b = BOOKS.find(x => x.id === bookId);
  if (!b) return showReviewModal(bookId);

  showSimpleModal('👑', 'Книга пройдена!', `Ты завершил курс «${b.title}». Это огромный шаг!`);
  
  // Добавляем кнопки в модалку
  document.getElementById('modalAchList').innerHTML = `
    <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
      <button class="d-btn-primary" style="background:var(--d-gold-grad); box-shadow:0 6px 20px rgba(255,184,0,0.4);" onclick="document.getElementById('modal').classList.add('hidden'); openShareStory('${bookId}');">📸 Поделиться успехом</button>
      <button class="d-btn-secondary" onclick="document.getElementById('modal').classList.add('hidden'); showReviewModal('${bookId}');">✍️ Оставить отзыв</button>
    </div>
  `;
  
  // Скрываем стандартную кнопку "Продолжить", чтобы не мешала
  const btn = document.querySelector('#modal .modal-box > button.d-btn-primary');
  if (btn) btn.style.display = 'none';
  
  fireConfetti();
  playFanfare();
}

function toggleRankFilter() {
  rankFilter = rankFilter === 'all' ? 'friends' : 'all';
  const btn = document.getElementById('rankFilterBtn');
  if (btn) {
    btn.classList.toggle('on', rankFilter === 'friends');
    btn.textContent = rankFilter === 'friends' ? '🌍 Все участники' : '👥 Только друзья';
  }
  playClick();
  loadPeople();
}
function showWeeklyReview() {
  const content = document.getElementById('weeklyReviewContent');
  if(!content) return;

  // Берем последние 7 дней
  let totalClosed = 0, totalPractices = 0, totalXP = 0, totalTime = 0;
  let daysData = [];
  const today = new Date();
  const dow = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = localDate(d);

    let dayPractices = 0, dayClosed = false, dayTime = 0;

    BOOKS.forEach(b => {
      const bs = getBookState(b.id);
      const rec = bs.days[dateStr];
      if (rec) {
        if (rec.closed) dayClosed = true;
        if (rec.practices) {
          dayPractices += rec.practices.length;
          rec.practices.forEach(pid => {
            const p = b.practices.find(x => x.id === pid);
            if(p && p.time) dayTime += p.time;
          });
        }
      }
    });

    if (dayClosed) totalClosed++;
    totalPractices += dayPractices;
    totalTime += dayTime;
    totalXP += (dayPractices * 10) + (dayClosed ? 50 : 0);

    daysData.push({ label: dow[d.getDay()], practices: dayPractices, closed: dayClosed });
  }

  const totalMins = Math.round(totalTime / 60);
  const maxPractices = Math.max(...daysData.map(d => d.practices), 1);

  // Получаем текущий уровень для шапки
  const stats = typeof getGlobalStats === 'function' ? getGlobalStats() : { lvlIco: '🌱', lvlName: 'Новичок', totalXP: 0, lvl: 1 };
  
  // ✨ Управление видимостью соцфич (Рейтинг и Магазин)
  const ratingRow = document.getElementById('profileRatingRow');
  const shopRow = document.getElementById('profileShopRow');

  if (stats.totalXP >= 100 || isAdmin()) { 
    if (ratingRow) ratingRow.style.display = 'flex';
    if (shopRow) shopRow.style.display = 'flex';
  } else {
    if (ratingRow) ratingRow.style.display = 'none';
    if (shopRow) shopRow.style.display = 'none';
  }

  // Формируем красивый HTML
  let html = `
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="width: 72px; height: 72px; margin: 0 auto 12px; background: var(--d-gradient-soft); border-radius: 24px; display: flex; align-items: center; justify-content: center; border: 2px solid var(--d-accent); box-shadow: 0 8px 20px rgba(124,92,255,0.2);">
         ${getAvatarHtml(state.avatar, 48)}
      </div>
      <h2 style="font-size: 22px; font-weight: 900; color: var(--d-text); margin-bottom: 8px;">Твоя неделя</h2>
      <div style="font-size: 11px; font-weight: 800; color: var(--d-gold); background: rgba(255,184,0,0.1); padding: 4px 12px; border-radius: 100px; border: 1px solid rgba(255,184,0,0.3); display: inline-block;">
         ${stats.lvlIco} ${stats.lvlName} · ${stats.totalXP} XP
      </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px;">
      <div class="d-card-glass" style="padding:16px; text-align:center; border-color:var(--d-accent);">
        <div style="font-size:28px; font-weight:900; color:var(--d-accent-2); line-height:1;">${totalPractices}</div>
        <div style="font-size:10px; color:var(--d-muted); font-weight:800; text-transform:uppercase; margin-top:4px;">Практик</div>
      </div>
      <div class="d-card-glass" style="padding:16px; text-align:center; border-color:var(--d-gold);">
        <div style="display:flex; align-items:center; justify-content:center; gap:4px; font-size:28px; font-weight:900; color:var(--d-gold); line-height:1;">
          <svg viewBox="0 0 24 24" fill="url(#gradStarFill)" stroke="url(#gradDefault)" stroke-width="1.5" style="width:20px; height:20px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          ${totalXP}
        </div>
        <div style="font-size:10px; color:var(--d-muted); font-weight:800; text-transform:uppercase; margin-top:4px;">Опыта</div>
      </div>
      <div class="d-card-glass" style="padding:16px; text-align:center; border-color:var(--d-success);">
        <div style="font-size:28px; font-weight:900; color:var(--d-success); line-height:1;">${totalClosed}</div>
        <div style="font-size:10px; color:var(--d-muted); font-weight:800; text-transform:uppercase; margin-top:4px;">Дней закрыто</div>
      </div>
      <div class="d-card-glass" style="padding:16px; text-align:center; border-color:var(--d-warm);">
        <div style="font-size:28px; font-weight:900; color:var(--d-warm); line-height:1;">${totalMins}<span style="font-size:14px;">м</span></div>
        <div style="font-size:10px; color:var(--d-muted); font-weight:800; text-transform:uppercase; margin-top:4px;">Времени</div>
      </div>
    </div>

    <div style="font-size:11px; font-weight:900; color:var(--d-muted); text-transform:uppercase; margin-bottom:10px;">Активность по дням</div>
    <div style="display:flex; justify-content:space-between; align-items:flex-end; height:100px; background:var(--d-surface); padding:12px; border-radius:16px; border:1px solid var(--d-border); margin-bottom: 20px;">
  `;

  daysData.forEach(d => {
    const heightPct = Math.max((d.practices / maxPractices) * 100, 8);
    const color = d.closed ? 'var(--d-success)' : (d.practices > 0 ? 'var(--d-accent)' : 'rgba(255,255,255,0.05)');

    html += `
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px; flex:1;">
        <div style="font-size:10px; font-weight:800; color:var(--d-text);">${d.practices > 0 ? d.practices : ''}</div>
        <div style="width:100%; max-width:18px; height:${heightPct}%; background:${color}; border-radius:4px 4px 0 0; transition:height 0.5s; ${d.closed ? 'box-shadow: 0 0 10px rgba(62,207,142,0.4);' : ''}"></div>
        <div style="font-size:9px; color:var(--d-muted); font-weight:800;">${d.label}</div>
      </div>
    `;
  });

  html += `</div>`;

  // Мотивационный блок
  if (totalClosed >= 5) {
    html += `<div class="d-card-glass" style="background:rgba(62,207,142,0.1); border-color:rgba(62,207,142,0.3); padding:12px; text-align:center; font-size:13px; color:var(--d-text); font-weight:700;">🔥 Отличная неделя! Ты закрыл ${totalClosed} дней. Так держать!</div>`;
  } else if (totalClosed > 0) {
    html += `<div class="d-card-glass" style="background:rgba(124,92,255,0.1); border-color:rgba(124,92,255,0.3); padding:12px; text-align:center; font-size:13px; color:var(--d-text); font-weight:700;">💪 Хороший старт! ${totalClosed} дней в копилке. На следующей неделе сделаем больше?</div>`;
  } else {
    html += `<div class="d-card-glass" style="background:rgba(255,154,86,0.1); border-color:rgba(255,154,86,0.3); padding:12px; text-align:center; font-size:13px; color:var(--d-text); font-weight:700;">🌱 Новая неделя — новый шанс! Начни с одной практики сегодня.</div>`;
  }

  content.innerHTML = html;
  document.getElementById('weeklyReviewModal').classList.remove('hidden');
}
function renderChallenge() {
  const banner = document.getElementById('challengeBanner');
  const streakEl = document.getElementById('challengeStreak');
  const bar = document.getElementById('challengeBar');
  const titleEl = document.getElementById('challengeTitle');
  const btn = document.getElementById('challengeBtn');
  
  if(!banner || !streakEl || !bar || !titleEl || !btn) return;

  // Проверяем, участвует ли человек в марафоне (сохраняем в localStorage)
  const isJoined = localStorage.getItem('andger_challenge_joined') === 'true';

  // Ищем максимальный огонь по всем книгам
  let maxStreak = 0;
  if (typeof BOOKS !== 'undefined' && BOOKS.length) {
    BOOKS.forEach(b => {
      const s = calcStreak(b.id);
      if (s > maxStreak) maxStreak = s;
    });
  }

  // Показываем баннер всегда, если это первый день или если участвуем
  banner.style.display = 'block';
  streakEl.textContent = maxStreak;
  
  const pct = Math.min(100, Math.round((maxStreak / 7) * 100));
  bar.style.width = pct + '%';

  if (maxStreak >= 7) {
    titleEl.innerHTML = '🏆 Марафон пройден! Ты легенда!';
    titleEl.style.color = 'var(--d-success)';
    bar.style.background = 'linear-gradient(90deg, var(--d-success), #2ea870)';
    btn.style.display = 'none'; // Прячем кнопку, если уже победил
  } else {
    titleEl.innerHTML = isJoined ? '🏆 Марафон: 7 дней силы' : '🏆 Брось себе вызов!';
    titleEl.style.color = 'var(--d-gold)';
    bar.style.background = 'linear-gradient(90deg, var(--d-warm), var(--d-gold))';
    
    if (isJoined) {
      btn.style.display = 'none'; // Если участвует, кнопка не нужна
    } else {
      btn.style.display = 'block'; // Если не участвует, показываем кнопку
    }
  }
}

function joinChallenge() {
  localStorage.setItem('andger_challenge_joined', 'true');
  playSuccess();
  toast('🔥 Вызов принят! Держи огонь 7 дней!');
  renderChallenge(); // Перерисовываем баннер
}
async function loadMoodChart() {
  const chartEl = document.getElementById('moodChart');
  const avgEl = document.getElementById('moodAvg');
  if(!chartEl || !user) return;

  chartEl.innerHTML = '<div style="color:var(--d-muted); font-size:11px; margin:auto;">Загрузка...</div>';

  try {
    // Берем настроения за последние 7 дней
    const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();
    const { data: moods } = await sb.from('moods')
      .select('mood, date')
      .eq('user_id', user.id)
      .gte('date', weekAgo.split('T')[0])
      .order('date', {ascending: true});

    if (!moods || moods.length === 0) {
      chartEl.innerHTML = '<div style="color:var(--d-muted); font-size:11px; margin:auto; text-align:center;">Пока нет данных.<br>Оценивай практики смайликами!</div>';
      if (avgEl) avgEl.textContent = '—';
      return;
    }

    // Группируем по дням (среднее за день)
    const byDay = {};
    moods.forEach(m => {
      if (!byDay[m.date]) byDay[m.date] = [];
      byDay[m.date].push(m.mood);
    });

    // Строим массив за 7 дней
    const days = [];
    const dayNames = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = localDate(d);
      const arr = byDay[dateStr] || [];
      const avg = arr.length ? (arr.reduce((s,v) => s+v, 0) / arr.length) : 0;
      days.push({ date: dateStr, avg, label: dayNames[d.getDay()] });
    }

    // Средний балл за неделю
    const validDays = days.filter(d => d.avg > 0);
    const weekAvg = validDays.length ? (validDays.reduce((s,d) => s+d.avg, 0) / validDays.length) : 0;

    if (avgEl) {
      if (weekAvg > 0) {
        const moodEmoji = weekAvg >= 4.5 ? '😍' : weekAvg >= 3.5 ? '😊' : weekAvg >= 2.5 ? '😐' : '😔';
        avgEl.innerHTML = `${moodEmoji} ${weekAvg.toFixed(1)} / 5`;
      } else {
        avgEl.textContent = '—';
      }
    }

    // Рисуем столбики
    const todayStr = localDate(new Date());
    chartEl.innerHTML = days.map(d => {
      const isToday = d.date === todayStr;
      const heightPct = d.avg > 0 ? (d.avg / 5) * 100 : 8; // Чуть увеличили высоту пустого столбика
      
      let color = 'rgba(255,255,255,0.03)';
      let border = '1px dashed rgba(255,255,255,0.1)'; // Пунктир для пустых дней

      if (d.avg >= 4) { color = 'linear-gradient(180deg, #3ecf8e, #2ea870)'; border = 'none'; }
      else if (d.avg >= 3) { color = 'linear-gradient(180deg, #ffb800, #ff9d00)'; border = 'none'; }
      else if (d.avg >= 2) { color = 'linear-gradient(180deg, #ff9d00, #ff7a2a)'; border = 'none'; }
      else if (d.avg > 0) { color = 'linear-gradient(180deg, #ff5c5c, #cc4444)'; border = 'none'; }

      // Красиво подсвечиваем сегодняшний день, если за него еще нет оценки
      if (isToday && d.avg === 0) {
        border = '1px solid rgba(124, 92, 255, 0.4)';
        color = 'rgba(124, 92, 255, 0.1)';
      }

      return `
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
          <div style="width:100%; max-width:24px; height:${heightPct}%; background:${color}; border:${border}; border-radius:6px 6px 0 0; transition:height 0.6s; box-sizing: border-box;"></div>
          <div style="font-size:9px; color:${isToday ? 'var(--d-accent)' : 'var(--d-muted)'}; font-weight:800;">${d.label}</div>
        </div>
      `;
    }).join('');

  } catch(e) {
    console.error('Mood chart error:', e);
    chartEl.innerHTML = '<div style="color:var(--d-muted); font-size:11px; margin:auto;">Нет данных</div>';
  }
}
// ═══════════════════════════════════════════════
// ГЛОБАЛЬНЫЙ ПЕРЕХВАТ ОШИБОК (Для диагностики на телефонах)
// ═══════════════════════════════════════════════
window.addEventListener('error', function(event) {
  // Игнорируем скрытые CORS-ошибки (Script error) и ошибки без файла
  if (event.message === 'Script error.' || !event.filename) return;
  
  // Показываем красную плашку только для реальных JS-ошибок в коде
  const errBox = document.createElement('div');
  errBox.style.cssText = 'position:fixed; top:10px; left:10px; right:10px; background:rgba(255,92,92,0.95); color:#fff; padding:12px; border-radius:12px; z-index:999999; font-size:12px; font-family:monospace; box-shadow:0 4px 12px rgba(0,0,0,0.5);';
  errBox.textContent = 'Ошибка приложения: ' + event.message + ' (' + String(event.filename).split('/').pop() + ':' + event.lineno + ')';
  document.body.appendChild(errBox);
  
  setTimeout(() => errBox.remove(), 8000);
});
// ─── УДАЛЕНИЕ КОММЕНТАРИЕВ, ПОСТОВ И СООБЩЕНИЙ ───

async function deleteComment(commentId) {
  if(!(await appConfirm('Удалить комментарий?', 'Он исчезнет навсегда.', 'Удалить'))) return;
  try {
    const { error } = await sb.from('comments').delete().eq('id', commentId);
    if (error) throw error;
    playSuccess();
    toast('Комментарий удален');
    loadFeed(); // Обновляем ленту
  } catch(e) {
    toast('Ошибка удаления', 'danger');
  }
}

async function deleteFeedPost(postId) {
  if(!(await appConfirm('Удалить свой пост?', 'Он исчезнет из ленты.', 'Удалить'))) return;
  try {
    const { error } = await sb.from('messages').delete().eq('id', postId);
    if (error) throw error;
    playSuccess();
    toast('Пост удален');
    loadFeed();
  } catch(e) {
    toast('Ошибка удаления', 'danger');
  }
}

async function deletePrivateMessage(msgId) {
  if(!(await appConfirm('Удалить сообщение?', 'Оно исчезнет из чата.', 'Удалить'))) return;
  try {
    const { error } = await sb.from('private_messages').delete().eq('id', msgId);
    if (error) throw error;
    playSuccess();
    loadDialog(); // Обновляем чат
  } catch(e) {
    toast('Ошибка удаления', 'danger');
  }
}
// ─── ЛОГИКА ПИСЬМА В БУДУЩЕЕ ───
function saveFutureLetter() {
  const text = document.getElementById('futureLetterText').value.trim();
  if (!text) {
    toast('Напиши хотя бы одно слово или нажми «Пропустить»', 'warm');
    return;
  }
  
  const bs = getBookState(currentBook.id);
  bs.startLetter = text; // Сохраняем письмо в прогресс
  bs.start = todayStr(); // Официально стартуем
  saveState();
  
  document.getElementById('futureLetterModal').classList.add('hidden');
  playSuccess();
  toast('Письмо сохранено. Увидимся через ' + currentBook.days + ' дней!', 'success');
  
  // Запускаем обычный сценарий старта
  showTodayScreen();
  setTimeout(() => openPracticeSelector(), 300);
}

function skipFutureLetter() {
  const bs = getBookState(currentBook.id);
  bs.start = todayStr();
  saveState();
  
  document.getElementById('futureLetterModal').classList.add('hidden');
  
  showTodayScreen();
  setTimeout(() => openPracticeSelector(), 300);
}

// Показ письма при завершении книги (вызывается из finishRitual)
function showFutureLetterIfExists(bookId) {
  const b = BOOKS.find(x => x.id === bookId);
  const bs = getBookState(bookId);
  
  if (b && bs.startLetter) {
    // Используем нашу красивую модалку успеха, но с письмом
    document.getElementById('modalEmoji').textContent = '✉️';
    document.getElementById('modalTitle').textContent = 'Ты это сделал!';
    
    // Форматируем текст письма
    document.getElementById('modalAchList').innerHTML = `
      <div style="background: var(--d-surface-2); border-left: 3px solid var(--d-accent-2); padding: 16px; border-radius: 0 12px 12px 0; margin: 16px 0; text-align: left;">
        <div style="font-size: 10px; color: var(--d-text-dim); text-transform: uppercase; font-weight: 800; margin-bottom: 8px;">Твои слова ${b.days} дней назад:</div>
        <div style="font-size: 14px; color: var(--d-text); font-style: italic; line-height: 1.5;">«${escapeHtml(bs.startLetter)}»</div>
      </div>
    `;
    
    document.getElementById('modalText').textContent = `Ты прошел курс «${b.title}». Оглянись назад — ты стал тем, кем хотел.`;
    document.getElementById('modal').classList.remove('hidden');
    fireConfetti();
    playFanfare();
    return true; // Письмо показано
  }
  return false;
}
// ─── МАГАЗИН НАГРАД ───
const SHOP_ITEMS = [
  { id: 'avatar_lotus', type: 'avatar', key: 'lotus', title: 'Лотос', price: 100, ico: 'lotus', rarity: 'common', desc: 'Символ спокойствия и баланса' },
  { id: 'avatar_atom', type: 'avatar', key: 'atom', title: 'Атом', price: 100, ico: 'atom', rarity: 'common', desc: 'Энергия и фокус' },
  { id: 'avatar_target', type: 'avatar', key: 'target', title: 'Мишень', price: 150, ico: 'target', rarity: 'rare', desc: 'Точность намерений' },
  { id: 'shield', type: 'utility', key: 'shield', title: 'Заморозка', price: 200, ico: 'shield', rarity: 'rare', desc: 'Спасет твой огонь' },
  { id: 'avatar_crown', type: 'avatar', key: 'crown', title: 'Корона', price: 250, ico: 'crown', rarity: 'epic', desc: 'Для истинных лидеров' }
];

function showShopScreen() {
  hideAll();
  document.getElementById('shopScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.add('hidden');
  renderShop();
}

function renderShop() {
  const grid = document.getElementById('shopGrid');
  const stats = getGlobalStats();
  
  document.getElementById('shopXPBalance').textContent = stats.totalXP;

  if (!state.purchasedItems) state.purchasedItems = [];

  grid.innerHTML = SHOP_ITEMS.map(item => {
    const isOwned = item.id === 'shield' ? false : state.purchasedItems.includes(item.id);
    const canAfford = stats.totalXP >= item.price;

    let rarityColor = 'var(--d-border)';
    let glowColor = 'transparent';
    if (item.rarity === 'rare') { rarityColor = '#4facfe'; glowColor = 'rgba(79,172,254,0.15)'; }
    if (item.rarity === 'epic') { rarityColor = '#a78bfa'; glowColor = 'rgba(167,139,250,0.2)'; }
    if (item.rarity === 'common') { rarityColor = 'var(--d-success)'; }

    return `
      <div class="d-card-glass" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:16px 12px; text-align:center; position:relative; background: linear-gradient(180deg, ${glowColor} 0%, var(--d-surface) 100%); border-color: ${item.rarity === 'epic' ? 'rgba(167,139,250,0.4)' : (item.rarity === 'rare' ? 'rgba(79,172,254,0.3)' : 'var(--d-border)')};">
        
        ${isOwned ? `<div style="position:absolute; top:10px; right:10px; color:var(--d-success); background:rgba(62,207,142,0.1); border-radius:50%; width:22px; height:22px; display:flex; align-items:center; justify-content:center; border:1px solid rgba(62,207,142,0.3);"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>` : ''}

        <!-- УМЕНЬШИЛИ ИКОНКУ: было 64x64 и 36px, стало 48x48 и 24px -->
        <div style="width:48px; height:48px; border-radius:14px; background:rgba(0,0,0,0.2); display:flex; align-items:center; justify-content:center; margin-bottom:10px; filter:drop-shadow(0 4px 10px rgba(0,0,0,0.4)); border: 1px solid ${rarityColor};">
          ${getSvgIcon(item.ico, 24, 'url(#gradDefault)')}
        </div>
        
        <div style="font-size:13px; font-weight:900; color:var(--d-text); margin-bottom:2px; line-height:1.2;">${escapeHtml(item.title)}</div>
        <div style="font-size:10px; color:var(--d-text-dim); margin-bottom:12px; line-height:1.3; height: 26px;">${item.desc}</div>
        
        ${!isOwned ? `
          <button onclick="buyShopItem('${item.id}', '${item.type}', '${item.key}', ${item.price})" style="margin-top:auto; width:100%; height:32px; border-radius:10px; border:none; background:${canAfford ? 'var(--d-gradient)' : 'var(--d-surface-2)'}; color:${canAfford ? '#fff' : 'var(--d-text-dim)'}; font-size:11px; font-weight:800; display:flex; align-items:center; justify-content:center; gap:4px; cursor:${canAfford ? 'pointer' : 'not-allowed'}; box-shadow: ${canAfford ? '0 4px 12px rgba(124,92,255,0.3)' : 'none'}; transition: 0.2s;">
            <svg viewBox="0 0 24 24" fill="url(#gradStarFill)" stroke="url(#gradDefault)" stroke-width="1.5" style="width:12px; height:12px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ${item.price}
          </button>
        ` : `
          <div style="margin-top:auto; width:100%; height:32px; border-radius:10px; background:rgba(62,207,142,0.1); border:1px solid rgba(62,207,142,0.3); display:flex; align-items:center; justify-content:center; font-size:10px; color:var(--d-success); font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">Куплено</div>
        `}
      </div>
    `;
  }).join('');
}
async function buyShopItem(itemId, type, key, price) {
  const stats = getGlobalStats();
  if (stats.totalXP < price) {
    playError();
    toast('Недостаточно XP! Проходи практики, чтобы заработать.', 'warm');
    return;
  }

  const item = SHOP_ITEMS.find(i => i.id === itemId);
  const isConfirm = await appConfirm(`Купить «${item.title}» за ${price} XP?`, 'Покупка');
  if (!isConfirm) return;

  // Списываем XP
  state.spentXP = (state.spentXP || 0) + price;
  
  if (type === 'utility' && key === 'shield') {
    state.shields = (state.shields || 0) + 1;
    toast('🛡️ Заморозка куплена и добавлена в инвентарь!');
  } else {
    if (!state.purchasedItems) state.purchasedItems = [];
    state.purchasedItems.push(itemId);
    if (type === 'avatar') {
       state.avatar = key; // Сразу надеваем купленную аватарку
       sb.from('profiles').update({avatar: key}).eq('id', user.id).then(()=>{});
    }
    toast(`Покупка успешна! Предмет добавлен в профиль.`);
  }

  saveState();
  playSuccess();
  fireConfetti();
  renderShop(); // Обновляем витрину
}
function showShopInfo() {
  document.getElementById('shopInfoModal').classList.remove('hidden');
  playClick();
}
// Нативный шаринг сторис (для мобильных)
let lastGeneratedStoryBlob = null;

async function shareStoryNative() {
  if (!lastGeneratedStoryBlob) {
    // Если картинка еще не сгенерирована, генерируем её на лету
    const btn = document.getElementById('storyDownloadBtn');
    const originalText = btn.textContent;
    btn.textContent = 'Создаем...';
    btn.disabled = true;
    
    try {
      const card = document.getElementById('storyCard');
      const canvas = await html2canvas(card, { scale: 3, useCORS: true, backgroundColor: null, logging: false });
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      lastGeneratedStoryBlob = blob;
    } catch(e) {
      console.error(e);
      toast('Ошибка создания картинки', 'danger');
      btn.textContent = originalText;
      btn.disabled = false;
      return;
    }
    btn.textContent = originalText;
    btn.disabled = false;
  }

  if (navigator.canShare && navigator.canShare({ files: [new File([lastGeneratedStoryBlob], 'story.png', { type: 'image/png' })] })) {
    const file = new File([lastGeneratedStoryBlob], 'andger_story.png', { type: 'image/png' });
    navigator.share({
      files: [file],
      title: 'Мои успехи в ANDGER',
      text: 'Смотри, каких результатов я достиг! Присоединяйся к ANDGER.'
    }).catch(err => {
      dlog('Шаринг отменен', err);
    });
  } else {
    toast('Ваш браузер не поддерживает нативный шаринг. Скачайте картинку и отправьте вручную.', 'warm');
  }
}
function startMusic(practiceId = 'default'){
  // ЖЕСТКО сбрасываем флаг, чтобы музыка всегда стартовала на 30%, а не на 5%
  isVoicePlaying = false;

  if(!musicAudio){
    musicAudio = new Audio();
    musicAudio.loop = false; 
    musicAudio.addEventListener('ended', nextTrack); 
  }
  
  const pid = (practiceId || '').toLowerCase();
  const activeP = currentPractice || (ritualQueue && ritualQueue[ritualIndex]);
  const pTitle = activeP && activeP.title ? activeP.title.toLowerCase() : '';
  const pSub = activeP && activeP.sub ? activeP.sub.toLowerCase() : '';
  const pIco = activeP && activeP.ico ? activeP.ico.toLowerCase() : '';
  
  const searchStr = pid + ' ' + pTitle + ' ' + pSub + ' ' + pIco;

  if (searchStr.includes('sport') || searchStr.includes('зарядк') || searchStr.includes('спорт') || searchStr.includes('трениров') || searchStr.includes('action') || searchStr.includes('activity') || searchStr.includes('упражн') || searchStr.includes('движен') || searchStr.includes('актив')) {
    currentPlaylist = MUSIC_TRACKS.sport;
  } else if (searchStr.includes('read') || searchStr.includes('чтени') || searchStr.includes('journal') || searchStr.includes('edit') || searchStr.includes('book') || searchStr.includes('дневник') || searchStr.includes('запис')) {
    currentPlaylist = MUSIC_TRACKS.read;
  } else {
    currentPlaylist = MUSIC_TRACKS.silence; 
  }

  let newIdx;
  do { newIdx = Math.floor(Math.random() * currentPlaylist.length) }
  while (currentPlaylist.length > 1 && newIdx === currentTrackIdx);
  
  currentTrackIdx = newIdx;
  musicAudio.src = currentPlaylist[currentTrackIdx];
  musicAudio.currentTime = 0;
  
  // Фикс iOS: ставим 0.01 перед play()
  musicAudio.volume = 0.01;
  musicAudio.muted = false; 

  // УБРАЛИ musicAudio.load() - это ломало автозапуск на iOS PWA

  const playPromise = musicAudio.play();
  
  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Если голос уже говорит, делаем тише (0.15), иначе 0.3
      const targetVol = isVoicePlaying ? 0.15 : 0.3;
      fadeAudio(musicAudio, 0.01, targetVol, 1500);
    }).catch((e) => {
      dlog('Музыка заблокирована браузером:', e);
    });
  }
}
async function showAdmin(initialSection = 'dashboard') {
  if (!isAdmin()) return;
  hideAll();
  
  const adminAva = document.getElementById('adminAvatar');
  if (adminAva) adminAva.innerHTML = getAvatarHtml(state.avatar, 26);
  
  document.getElementById('adminScreen')?.classList.remove('hidden');
  
  // Сбрасываем активные табы
  document.querySelectorAll('.admin-pro-tab').forEach(t => t.classList.remove('on'));
  
  // Ищем нужную кнопку навигации
  const allBtns = document.querySelectorAll('.admin-pro-tab');
  let targetBtn = allBtns[0]; // По умолчанию Обзор
  
  if (initialSection === 'books') targetBtn = allBtns[1];
  else if (initialSection === 'users') targetBtn = allBtns[2];
  else if (initialSection === 'moderation' || initialSection === 'feedback' || initialSection === 'reports') {
    AP.mt = initialSection === 'feedback' ? 'fb' : 'reports';
    initialSection = 'moderation';
    targetBtn = allBtns[3];
  }
  else if (initialSection === 'system') targetBtn = allBtns[4];
  
  if (targetBtn) { targetBtn.classList.add('on'); try { targetBtn.scrollIntoView({ inline: 'center', block: 'nearest' }); } catch (e) { console.debug('[ANDGER] ignored:', e); } }
  
  // Загружаем контент
  loadAdminSection(initialSection);
}

function switchAdminTab(section, btnEl) {
  document.querySelectorAll('.admin-pro-tab').forEach(b => b.classList.remove('on'));
  if (btnEl) { btnEl.classList.add('on'); try { btnEl.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' }); } catch (e) { console.debug('[ANDGER] ignored:', e); } }
  loadAdminSection(section);
  playClick();
}

function closeDayStatsModal() {
  const modal = document.getElementById('dayStatsModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none'; // Принудительно скрываем
    dlog('✅ Окно статистики закрыто');
  }
}

// Функция для открытия окна помощи
function showNotificationInfo() {
  playClick();
  const modal = document.getElementById('notificationInfoModal');
  if (modal) modal.classList.remove('hidden');
}

// ═══════════════════════════════════════════════
// АДМИНКА PRO: Обзор · Книги · Пользователи · Модерация
// Интерфейс на карточках и нижних меню (работает в узкой колонке приложения).
// Старые имена функций оставлены как переходники (на них ссылается остальной код).
// ═══════════════════════════════════════════════
const AP_CATS = OFFICIAL_CATEGORIES;
const AP_ICO = 'wind clock search zap play link layout user check-square brain book sun heart users sprout sunrise waves compass shield sparkles smile flame check-circle shield-check target crown'.split(' ');
const AP_VOICES = ['alena','filipp','omazh','ermil','jane'], AP_EMO = ['','good','evil'];
const AP_BOOK_KEYS = 'id emoji title author days category about method author_bio for_whom result identity summary lumi_tips quotes voice_settings practices cover_url published is_free authorBio forWhom coverUrl format path'.split(' ');
const AP_NEW_BOOK = {id:'',emoji:'📖',title:'',author:'',days:21,category:'Разное',about:'',method:[],author_bio:'',for_whom:'',result:'',identity:'',summary:[],lumi_tips:[],quotes:[],voice_settings:null,practices:[]};
const AP_PAGE = 40;

window.AP = {
  sec: 'dashboard', mt: 'reports', q: '', uf: 'all', bf: 'all', sort: 'new', lim: AP_PAGE, preUf: null,
  area() { return document.getElementById('apView'); },
  esc(s) { return escapeHtml(String(s ?? '')); },
  qs(s) { return this.esc(s).replace(/'/g, '&#39;'); },
  fmt(d) { return d ? new Date(d).toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'}) : '—'; },
  day(d) { return d ? new Date(d).toLocaleDateString('ru-RU',{day:'2-digit',month:'2-digit',year:'2-digit'}) : '—'; },
  ago(d) { if (!d) return 'никогда'; const m = (Date.now()-new Date(d))/6e4; return m<2?'сейчас':m<60?Math.floor(m)+' мин назад':m<1440?Math.floor(m/60)+' ч назад':Math.floor(m/1440)+' дн назад'; },
  phone(p) { const d = String(p||'').replace(/\D/g,''); return d.length===11 ? `+${d[0]} (${d.slice(1,4)}) ${d.slice(4,7)}-${d.slice(7,9)}-${d.slice(9)}` : (p || 'нет телефона'); },
  hue(s) { let h = 0; String(s).split('').forEach(c => h = (h*31 + c.charCodeAt(0)) % 360); return h; },
  isPaid(p) { return p.sub_until && new Date(p.sub_until) > Date.now(); },
  ok(m) { toast(m); }, err(m) { toast(m, 'danger'); },
  clip(t) { (navigator.clipboard ? navigator.clipboard.writeText(String(t)) : Promise.reject()).then(() => this.ok('Скопировано')).catch(() => this.err('Не удалось скопировать')); },
  async run(fn, okMsg) { try { await fn(); if (okMsg) toast(okMsg); return true; } catch (e) { console.error('[ANDGER] admin', e); toast('Ошибка: ' + (e.message || e), 'danger'); return false; } },
  async rpc(name, params) { const { data, error } = await sb.rpc(name, params); if (error) throw error; return data; },

  // ── Диалоги ──
  ask({ title, text = '', input = null, ok = 'Подтвердить', danger = false }) {
    return new Promise(res => {
      const d = document.createElement('dialog'); d.className = 'ap-dlg ap-small';
      d.innerHTML = `<form method="dialog"><h3>${this.esc(title)}</h3>${text ? `<p class="ap-dim">${this.esc(text)}</p>` : ''}${input !== null ? '<input class="ap-in" id="apAskIn" autocomplete="off">' : ''}<div class="ap-row ap-end"><button class="ap-btn" value="no">Отмена</button><button class="ap-btn ${danger?'d fill':'p'}" value="ok">${this.esc(ok)}</button></div></form>`;
      document.body.appendChild(d);
      const inp = d.querySelector('#apAskIn'); if (inp) inp.value = input;
      d.onclose = () => { const v = d.returnValue === 'ok' ? (inp ? inp.value : true) : null; d.remove(); res(v); };
      d.showModal(); if (inp) { inp.focus(); inp.select(); }
    });
  },
  // Нижнее меню действий
  sheet(title, sub, items) {
    const d = document.createElement('dialog'); d.className = 'ap-dlg ap-sheet';
    d.innerHTML = `<div class="ap-sh-h"><b>${this.esc(title)}</b><div class="ap-dim ap-s">${this.esc(sub)}</div></div><div class="ap-sh-b">` +
      items.map((it, i) => it.sep ? '<div class="ap-sep"></div>' : `<button class="ap-sh-i ${it.d ? 'd' : ''}" data-i="${i}"><span>${it.ic || ''}</span>${this.esc(it.t)}</button>`).join('') + '</div><button class="ap-sh-i ap-sh-c" data-i="x">Закрыть</button>';
    document.body.appendChild(d);
    d.onclick = e => { if (e.target === d) return d.close(); const b = e.target.closest('[data-i]'); if (!b) return; d.close(); const it = items[b.dataset.i]; if (it && it.fn) setTimeout(it.fn, 0); };
    d.onclose = () => d.remove(); d.showModal();
  },

  mount(section, area) {
    this.sec = section; this.q = ''; this.uf = 'all'; this.bf = 'all'; this.lim = AP_PAGE;
    area.innerHTML = '<div class="ap"><div class="ap-bar" id="apBar"></div><div id="apView"><div class="ap-empty"><div class="spinner" style="margin:0 auto 10px"></div>Загрузка…</div></div></div>';
    ({ dashboard: () => this.dash(), books: () => this.books(), users: () => this.users(), moderation: () => this.mod() })[section]();
  },
  bar(html) { const b = document.getElementById('apBar'); if (b) b.innerHTML = html; },
  nav(section, uf) { this.preUf = uf || null; const i = { dashboard: 0, books: 1, users: 2, moderation: 3, system: 4 }[section]; switchAdminTab(section, document.querySelectorAll('.admin-pro-tab')[i]); },
  chips(list, cur, key) { return list.map(([k, l, n]) => `<button class="ap-chip ${cur === k ? 'on' : ''}" onclick="AP.setF('${key}','${k}')">${l}${n !== undefined ? ` <i>${n}</i>` : ''}</button>`).join(''); },
  setF(key, v) { this[key] = v; this.lim = AP_PAGE; this.sec === 'users' ? this.usersRows() : this.booksRows(); },
  more() { this.lim += AP_PAGE; this.sec === 'users' ? this.usersRows() : this.booksRows(); },

  // ── Обзор ──
  async dash() {
    if (!this.area()) return;
    this.bar('<div class="ap-title">Обзор</div><button class="ap-btn" onclick="AP.dash()">⟳ Обновить</button>');
    const [u, b, r, f] = await Promise.all([
      sb.from('profiles').select('*').limit(10000),
      sb.from('books').select('id,published,is_free'),
      sb.from('reports').select('id', { count: 'exact', head: true }),
      sb.from('feedbacks').select('id', { count: 'exact', head: true })
    ]);
    const us = u.data || [], bs = b.data || [], now = Date.now(), day = 864e5, st = new Date().setHours(0,0,0,0);
    adminAllUsers = us;
    const paid = us.filter(x => this.isPaid(x)), exp = paid.filter(x => new Date(x.sub_until) - now < 7 * day).sort((a, c) => new Date(a.sub_until) - new Date(c.sub_until));
    const fresh = [...us].sort((a, c) => new Date(c.created_at) - new Date(a.created_at)).slice(0, 5);
    const k = (n, l, go = '', c = '') => `<div class="ap-card ap-kpi ${go ? 'tap' : ''}" ${go ? `onclick="${go}"` : ''}><b style="${c}">${n}</b><span>${l}</span></div>`;
    const nr = r.count || 0, nf = f.count || 0;
    const mini = (p, ex) => `<div class="ap-mini" onclick="AP.userMenu('${p.id}')"><div class="ap-ava s" style="--h:${this.hue(p.id)}">${this.esc((p.name || '?')[0].toUpperCase())}</div><div class="ap-main"><div class="ap-name">${this.esc(p.name || 'Без имени')}</div><div class="ap-sub">${ex}</div></div><span class="ap-dim">›</span></div>`;
    if (!this.area()) return;
    this.area().innerHTML = `
      ${(nr || nf) ? `<div class="ap-alert" onclick="AP.mt='${nr ? 'reports' : 'fb'}';AP.nav('moderation')"><span>🔔</span><div><b>Требует внимания</b><div class="ap-sub">${nr ? `Жалоб: ${nr}` : ''}${nr && nf ? ' · ' : ''}${nf ? `Отзывов: ${nf}` : ''}</div></div><span class="ap-dim">›</span></div>` : ''}
      <div class="ap-grid">
        ${k(us.length, 'Пользователей', "AP.nav('users')")}${k(us.filter(x => x.last_seen && now - new Date(x.last_seen) < 15 * 6e4).length, 'Онлайн сейчас', '', 'color:#3ecf8e')}
        ${k(us.filter(x => x.last_seen && now - new Date(x.last_seen) < day).length, 'Активны за 24 ч')}${k(us.filter(x => x.last_seen && now - new Date(x.last_seen) < 7 * day).length, 'Активны за 7 дней')}
        ${k(us.filter(x => new Date(x.created_at) >= st).length, 'Новых сегодня')}${k(us.filter(x => now - new Date(x.created_at) < 7 * day).length, 'Новых за 7 дней', "AP.nav('users','new')")}
        ${k(paid.length, 'Premium сейчас', "AP.nav('users','paid')", 'color:#ffb800')}${k(us.length ? (paid.length / us.length * 100).toFixed(0) + '%' : '0%', 'Конверсия в Premium')}
        ${k(bs.filter(x => x.published).length + ' / ' + bs.length, 'Книг опубликовано', "AP.nav('books')")}${k(nr, 'Жалоб', "AP.mt='reports';AP.nav('moderation')", nr ? 'color:var(--d-danger)' : '')}
        ${k(nf, 'Отзывов', "AP.mt='fb';AP.nav('moderation')")}${k(us.filter(x => x.blocked).length, 'Заблокировано', "AP.nav('users','blocked')")}
      </div>
      <div class="ap-h">Быстрые действия</div>
      <div class="ap-quick"><button class="ap-btn" onclick="AP.nav('books');setTimeout(()=>AP.edit(null),250)">＋ Новая книга</button><button class="ap-btn" onclick="showJsonImportModal()">⇪ Импорт JSON</button><button class="ap-btn" onclick="AP.nav('system')">📣 Push-рассылка</button><button class="ap-btn" onclick="AP.csv()">⇩ Экспорт CSV</button><button class="ap-btn" onclick="openPromoModal()">🏷 Промокоды</button></div>
      <div class="ap-h">Premium заканчивается ≤ 7 дней <i class="ap-cnt">${exp.length}</i></div>
      <div class="ap-card ap-lst">${exp.slice(0, 5).map(p => mini(p, 'до ' + this.day(p.sub_until))).join('') || '<div class="ap-empty s">Нет подписок, которые скоро закончатся</div>'}</div>
      <div class="ap-h">Новые пользователи</div>
      <div class="ap-card ap-lst">${fresh.map(p => mini(p, 'регистрация ' + this.fmt(p.created_at))).join('') || '<div class="ap-empty s">Пока никого</div>'}</div>`;
  },

  // ── Пользователи ──
  async users() {
    if (!this.area()) return;
    this.uf = this.preUf || 'all'; this.preUf = null;
    this.bar(`<div class="ap-title">Пользователи <i class="ap-cnt" id="apCnt"></i></div><button class="ap-btn" onclick="AP.csv()">⇩ CSV</button><button class="ap-btn" onclick="AP.users()">⟳</button>
      <div class="ap-search"><input class="ap-in" id="apQ" type="search" placeholder="Поиск: имя, телефон, ID" autocomplete="off"><select class="ap-in" id="apSort"><option value="new">Новые</option><option value="seen">Были недавно</option><option value="xp">По XP</option><option value="name">По имени</option></select></div><div class="ap-chips" id="apChips"></div>`);
    const { data, error } = await sb.from('profiles').select('*').order('created_at', { ascending: false }).limit(10000);
    if (error) return this.area() && (this.area().innerHTML = '<div class="ap-empty">Ошибка загрузки пользователей</div>');
    adminAllUsers = data || [];
    document.getElementById('apQ').oninput = e => { this.q = e.target.value; this.lim = AP_PAGE; this.usersRows(); };
    document.getElementById('apSort').onchange = e => { this.sort = e.target.value; this.usersRows(); };
    this.usersRows();
  },
  usersRows() {
    const v = this.area(); if (!v || this.sec !== 'users') return;
    const q = this.q.toLowerCase().trim(), all = adminAllUsers || [], now = Date.now();
    const F = { all: () => 1, paid: p => this.isPaid(p), admin: p => p.is_admin, blocked: p => p.blocked, new: p => now - new Date(p.created_at) < 6048e5 };
    const cnt = k => all.filter(F[k]).length;
    const ch = document.getElementById('apChips'); if (ch) ch.innerHTML = this.chips([['all','Все',cnt('all')],['paid','Premium',cnt('paid')],['new','Новые',cnt('new')],['admin','Админы',cnt('admin')],['blocked','Блок',cnt('blocked')]], this.uf, 'uf');
    const digits = q.replace(/\D/g, '');
    let l = all.filter(p => F[this.uf](p) && (!q || [p.name, p.last_name, p.id].join(' ').toLowerCase().includes(q) || (digits.length > 2 && String(p.phone || '').replace(/\D/g, '').includes(digits))));
    const S = { new: (a, b) => new Date(b.created_at) - new Date(a.created_at), seen: (a, b) => new Date(b.last_seen || 0) - new Date(a.last_seen || 0), xp: (a, b) => (b.xp || 0) - (a.xp || 0), name: (a, b) => (a.name || '').localeCompare(b.name || '') };
    l = l.sort(S[this.sort] || S.new);
    const c = document.getElementById('apCnt'); if (c) c.textContent = l.length;
    v.innerHTML = l.slice(0, this.lim).map(p => {
      const on = p.last_seen && now - new Date(p.last_seen) < 5 * 6e4;
      return `<div class="ap-card ap-item"><div class="ap-ava ${on ? 'on' : ''}" style="--h:${this.hue(p.id)}">${this.esc((p.name || '?')[0].toUpperCase())}</div>
        <div class="ap-main" onclick="openAdminUser('${p.id}')"><div class="ap-name">${this.esc(((p.name || 'Без имени') + ' ' + (p.last_name || '')).trim())}</div>
        <div class="ap-tags">${p.is_admin ? '<span class="ap-tag ac">ADMIN</span>' : ''}${this.isPaid(p) ? `<span class="ap-tag wr">⭐ до ${this.day(p.sub_until)}</span>` : ''}${p.blocked ? '<span class="ap-tag er">БЛОК</span>' : ''}</div>
        <div class="ap-sub">${this.esc(this.phone(p.phone))}</div><div class="ap-sub">XP ${p.xp || 0} · рег. ${this.day(p.created_at)} · ${on ? '<span style="color:#3ecf8e">онлайн</span>' : this.ago(p.last_seen)}</div></div>
        <button class="ap-more" onclick="AP.userMenu('${p.id}')" aria-label="Действия">⋯</button></div>`;
    }).join('') + (l.length > this.lim ? `<button class="ap-btn wide" onclick="AP.more()">Показать ещё (${l.length - this.lim})</button>` : '') || '<div class="ap-empty">Никого не найдено</div>';
  },
  async userMenu(id) {
    let p = (adminAllUsers || []).find(x => String(x.id) === String(id));
    if (!p) { const { data } = await sb.from('profiles').select('*').eq('id', id).maybeSingle(); if (!data) return this.err('Профиль не найден'); (adminAllUsers = adminAllUsers || []).push(data); p = data; }
    const paid = this.isPaid(p), name = ((p.name || 'Без имени') + ' ' + (p.last_name || '')).trim();
    this.sheet(name, this.phone(p.phone) + ' · ' + String(p.id).slice(0, 8), [
      { ic: '👤', t: 'Открыть профиль и доступ к книгам', fn: () => openAdminUser(id) },
      { sep: 1 },
      { ic: '⭐', t: 'Premium +30 дней', fn: () => this.subDays(id, 30) }, { ic: '⭐', t: 'Premium +90 дней', fn: () => this.subDays(id, 90) }, { ic: '⭐', t: 'Premium +365 дней', fn: () => this.subDays(id, 365) },
      { ic: '✏️', t: 'Premium: другой срок…', fn: () => this.uact('sub', id) },
      ...(paid ? [{ ic: '⛔', t: 'Снять Premium', fn: () => this.subDays(id, 0) }] : []),
      { sep: 1 },
      { ic: p.blocked ? '✅' : '🚫', t: p.blocked ? 'Разблокировать' : 'Заблокировать', fn: () => this.uact('blk', id) },
      { ic: '👑', t: p.is_admin ? 'Снять права админа' : 'Назначить админом', fn: () => this.uact('adm', id) },
      { sep: 1 },
      { ic: '📋', t: 'Скопировать ID', fn: () => this.clip(p.id) }, ...(p.phone ? [{ ic: '📞', t: 'Скопировать телефон', fn: () => this.clip(p.phone) }] : []),
      { sep: 1 }, { ic: '🗑', t: 'Удалить пользователя…', d: 1, fn: () => this.uact('del', id) }
    ]);
  },
  async subDays(id, n) {
    const p = adminAllUsers.find(x => String(x.id) === String(id));
    if (n === 0 && !await this.ask({ title: 'Снять Premium?', text: p?.name || id, ok: 'Снять', danger: true })) return;
    if (await this.run(() => this.rpc('admin_grant_sub', { target_id: id, days: n }), n ? `Premium +${n} дн.` : 'Premium снят')) {
      if (p) p.sub_until = n ? new Date(Math.max(Date.now(), p.sub_until ? new Date(p.sub_until) : 0) + n * 864e5).toISOString() : null;
      this.sec === 'users' ? this.usersRows() : this.dash();
    }
  },
  async uact(a, id) {
    const p = (adminAllUsers || []).find(x => String(x.id) === String(id)); if (!p) return;
    let ok;
    if (a === 'sub') {
      const v = await this.ask({ title: 'Premium: ' + (p.name || id), text: 'Сколько дней выдать? 0 — забрать подписку.', input: '30', ok: 'Применить' });
      if (v === null) return; const n = Number(v); if (!Number.isFinite(n) || n < 0) return this.err('Введите число ≥ 0');
      return this.subDays(id, n);
    } else if (a === 'blk') {
      const b = !p.blocked; if (!await this.ask({ title: b ? 'Заблокировать?' : 'Разблокировать?', text: p.name || id, ok: 'Да', danger: b })) return;
      ok = await this.run(() => this.rpc('admin_toggle_block', { target_id: id, blocked: b, reason: b ? 'Нарушение правил' : null }), b ? 'Заблокирован' : 'Разблокирован'); if (ok) p.blocked = b;
    } else if (a === 'adm') {
      const m = !p.is_admin; if (!await this.ask({ title: m ? 'Назначить админом?' : 'Снять права админа?', text: p.name || id, ok: 'Да', danger: true })) return;
      ok = await this.run(() => this.rpc('admin_toggle_admin', { target_id: id, make_admin: m }), 'Готово'); if (ok) p.is_admin = m;
    } else if (a === 'del') {
      const v = await this.ask({ title: 'Удалить пользователя навсегда', text: 'Все его данные будут удалены. Для подтверждения введите УДАЛИТЬ.', input: '', ok: 'Удалить', danger: true });
      if (v !== 'УДАЛИТЬ') return v !== null && this.err('Не подтверждено');
      ok = await this.run(() => this.rpc('admin_delete_user', { target_id: id }), 'Пользователь удалён'); if (ok) adminAllUsers = adminAllUsers.filter(x => x !== p);
    }
    this.sec === 'users' ? this.usersRows() : this.dash();
  },
  csv() {
    const rows = [['id','name','last_name','phone','xp','created_at','last_seen','sub_until','blocked','is_admin'], ...(adminAllUsers || []).map(p => [p.id,p.name,p.last_name,p.phone,p.xp,p.created_at,p.last_seen,p.sub_until,!!p.blocked,!!p.is_admin])];
    const t = rows.map(r => r.map(v => `"${String(v ?? '').replace(/"/g,'""')}"`).join(';')).join('\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['\ufeff' + t], { type: 'text/csv' })); a.download = 'users.csv'; a.click();
  },

  // ── Книги ──
  async books() {
    if (!this.area()) return;
    this.bar(`<div class="ap-title">Книги <i class="ap-cnt" id="apCnt"></i></div><button class="ap-btn" onclick="showJsonImportModal()">⇪ Импорт</button><button class="ap-btn p" onclick="AP.edit(null)">＋ Новая</button>
      <div class="ap-search"><input class="ap-in" id="apQ" type="search" placeholder="Поиск: название, автор" autocomplete="off"></div><div class="ap-chips" id="apChips"></div>`);
    const { data, error } = await sb.from('books').select('*');
    if (error) return this.area() && (this.area().innerHTML = '<div class="ap-empty">Ошибка загрузки книг</div>');
    const db = data || [], local = (typeof BOOKS !== 'undefined' ? BOOKS : []).filter(b => !db.some(d => d.id === b.id)).map(b => ({ ...b, _isLocal: true, published: true }));
    adminAllBooks = [...db, ...local].sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    document.getElementById('apQ').oninput = e => { this.q = e.target.value; this.lim = AP_PAGE; this.booksRows(); };
    this.booksRows();
  },
  booksRows() {
    const v = this.area(); if (!v || this.sec !== 'books') return;
    const q = this.q.toLowerCase().trim(), all = adminAllBooks || [];
    const F = { all: () => 1, pub: b => b.published, draft: b => !b.published, free: b => b.is_free };
    const ch = document.getElementById('apChips'); if (ch) ch.innerHTML = this.chips([['all','Все',all.length],['pub','Опубликованные',all.filter(F.pub).length],['draft','Черновики',all.filter(F.draft).length],['free','Бесплатные',all.filter(F.free).length]], this.bf, 'bf');
    const l = all.filter(b => F[this.bf](b) && (!q || ((b.title || '') + ' ' + (b.author || '')).toLowerCase().includes(q)));
    const c = document.getElementById('apCnt'); if (c) c.textContent = l.length;
    v.innerHTML = l.slice(0, this.lim).map(b => {
      const i = this.qs(b.id), pr = b.practices || [], mins = Math.round(pr.reduce((s, p) => s + (p.time || 0), 0) / 60);
      return `<div class="ap-card ap-book"><div class="ap-item"><div class="ap-cover">${this.esc(b.emoji || '📖')}</div><div class="ap-main"><div class="ap-name">${this.esc(b.title)}</div><div class="ap-sub">${this.esc(b.author)}</div>
        <div class="ap-tags"><span class="ap-tag">${this.esc(b.category || 'Без категории')}</span><span class="ap-tag">${b.days || '—'} дн</span><span class="ap-tag">${pr.length} практик · ≈${mins} мин</span>${b._isLocal ? '<span class="ap-tag">локальная</span>' : ''}${!b.published ? '<span class="ap-tag er">черновик</span>' : ''}</div></div></div>
        <div class="ap-bfoot">${b._isLocal ? '' : `<label class="ap-tg"><button class="ap-sw ${b.published ? 'on' : ''}" onclick="AP.tog('${i}','published')" aria-label="Опубликована"></button>Опубл.</label><label class="ap-tg"><button class="ap-sw ${b.is_free ? 'on' : ''}" onclick="AP.tog('${i}','is_free')" aria-label="Бесплатная"></button>Беспл.</label>`}
        <span style="flex:1"></span><button class="ap-btn s p" onclick="showBookEditor('${i}')">Править</button><button class="ap-btn s" onclick="AP.editId('${i}')">JSON</button><button class="ap-more s" onclick="AP.bookMenu('${i}')" aria-label="Ещё">⋯</button></div></div>`;
    }).join('') + (l.length > this.lim ? `<button class="ap-btn wide" onclick="AP.more()">Показать ещё (${l.length - this.lim})</button>` : '') || '<div class="ap-empty">Книг не найдено</div>';
  },
  byId(id) { return (adminAllBooks || []).find(b => String(b.id) === String(id)); },
  bookMenu(id) {
    const b = this.byId(id); if (!b) return;
    this.sheet(b.title, b.author + ' · ' + b.id, [
      { ic: '✏️', t: 'Визуальный редактор', fn: () => showBookEditor(id) }, { ic: '{ }', t: 'Редактор JSON с проверкой', fn: () => this.editId(id) },
      { ic: '⧉', t: 'Создать копию', fn: () => this.dup(id) }, { ic: '⇩', t: 'Скопировать JSON в буфер', fn: () => { const c = { ...b }; delete c._isLocal; this.clip(JSON.stringify(c, null, 2)); } },
      { ic: '📋', t: 'Скопировать ID', fn: () => this.clip(b.id) }, { sep: 1 }, { ic: '🗑', t: 'Удалить книгу…', d: 1, fn: () => this.del(id) }
    ]);
  },
  async tog(id, k) {
    const b = this.byId(id); if (!b) return;
    if (await this.run(async () => { const { error } = await sb.from('books').update({ [k]: !b[k] }).eq('id', id); if (error) throw error; })) { b[k] = !b[k]; if (typeof loadBooksFromSupabase === 'function') loadBooksFromSupabase(); toast(k === 'published' ? (b[k] ? 'Книга опубликована' : 'Снята с публикации') : (b[k] ? 'Книга бесплатная' : 'Книга платная')); }
    this.booksRows();
  },
  editId(id) { this.edit(this.byId(id)); },
  dup(id) { const c = JSON.parse(JSON.stringify(this.byId(id))); delete c._isLocal; c.id += '-copy'; c.title += ' (копия)'; c.published = false; c._new = 1; this.edit(c); },
  async del(id) {
    const b = this.byId(id); if (!b) return;
    if (!await this.ask({ title: 'Удалить книгу «' + b.title + '»?', text: 'Книга исчезнет у всех пользователей. Это нельзя отменить. Если не уверены, лучше просто снять её с публикации переключателем.', ok: 'Удалить', danger: true })) return;
    if (await this.run(async () => { const { error } = await sb.from('books').delete().eq('id', id); if (error) throw error; }, 'Книга удалена')) { adminAllBooks = adminAllBooks.filter(x => x !== b); this.booksRows(); }
  },

  // Проверка JSON книги до сохранения
  check(o, allowed) {
    const E = [], W = [], e = m => E.push(m), w = m => W.push(m);
    if (!o || typeof o !== 'object' || Array.isArray(o)) return { E: ['Корень должен быть объектом {…}'], W, info: '' };
    Object.keys(o).forEach(k => { if (!allowed.has(k)) e(`Лишнее поле «${k}» — база его не примет`); });
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(o.id || '')) e('id: латиница, цифры и дефисы (kebab-case)');
    ['title','author','about','result','identity'].forEach(k => { if (!String(o[k] || '').trim()) w(`Пустое поле «${k}»`); });
    if (!AP_CATS.includes(o.category)) e('category не из списка допустимых');
    const days = Number(o.days); if (!Number.isInteger(days) || days < 1 || days > 365) e('days: целое число 1–365');
    ['method','summary','lumi_tips','quotes','practices'].forEach(k => { if (!Array.isArray(o[k])) e(`«${k}» должен быть массивом`); });
    if (Array.isArray(o.lumi_tips) && o.lumi_tips.length && o.lumi_tips.length !== days) w(`lumi_tips: ${o.lumi_tips.length} шт., а дней ${days} — подсказки будут повторяться`);
    if (Array.isArray(o.quotes)) o.quotes.forEach((q, i) => { if (!q || !q.text) e(`Цитата ${i+1}: нет text`); });
    let sec = 0; const ids = new Set(), rows = [];
    if (Array.isArray(o.practices)) {
      if (!o.practices.length) w('Нет практик');
      if (o.practices.length === days && days > 7) w('Режим «пошаговый курс»: по одной практике на день');
      o.practices.forEach((p, i) => {
        const n = `Практика ${i+1}`, e0 = E.length, w0 = W.length; if (!p || typeof p !== 'object') return e(n + ': не объект');
        if (!p.id || ids.has(p.id)) e(`${n}: id пустой или повторяется`); ids.add(p.id);
        if (!p.title) e(n + ': нет title');
        if (!AP_ICO.includes(p.ico)) e(`${n}: ico «${p.ico}» нет в списке иконок`);
        if (!Number.isFinite(p.time) || p.time < 30 || p.time > 3600) e(`${n}: time в СЕКУНДАХ (30–3600), сейчас ${p.time}`); else sec += p.time;
        ['how','mistakes'].forEach(k => { if (!Array.isArray(p[k]) || !p[k].length) e(`${n}: «${k}» должен быть непустым массивом`); });
        if (String(p.trigger || '').trim().toLowerCase().startsWith('якорь')) w(`${n}: trigger начинается со слова «Якорь» — заголовок уже есть в интерфейсе`);
        const t = p.voiceTimeline;
        if (!Array.isArray(t) || !t.length) w(`${n}: нет voiceTimeline (озвучки)`);
        else { let prev = -1; t.forEach((x, j) => { if (!Number.isFinite(x.time) || !x.text) e(`${n}: фраза ${j+1} без time/text`); else { if (x.time <= prev) e(`${n}: тайминги не по возрастанию (фраза ${j+1})`); prev = x.time; } });
          if (prev >= p.time - 15) w(`${n}: последняя фраза на ${prev}с при длительности ${p.time}с — приложение сожмёт тайминги`); }
        const vs = p.voice_settings;
        if (vs) { if (vs.voice && !AP_VOICES.includes(vs.voice)) e(`${n}: неизвестный голос «${vs.voice}»`); if (vs.emotion !== undefined && !AP_EMO.includes(vs.emotion)) e(`${n}: emotion только "", good, evil`); if (vs.speed && (vs.speed < .5 || vs.speed > 2)) e(`${n}: speed 0.5–2.0`); }
        rows.push({ t: p.title || '—', s: p.time, v: (t || []).length, st: E.length > e0 ? 'e' : W.length > w0 ? 'w' : 'g' });
      });
    }
    if (o.format === 2) this.checkPath(o, E, W);
    return { E, W, rows, info: `Практик: ${(o.practices||[]).length} · ≈ ${Math.round(sec/60)} мин · подсказок: ${(o.lumi_tips||[]).length}` };
  },

  checkPath(o, E, W) {
    const p = o.path; if (!p || !Array.isArray(p.weeks) || !p.weeks.length) return E.push('format 2: нет path.weeks');
    const ids = new Set((o.practices || []).map(x => x.id)), used = new Set(), nid = new Set(); let n = 0;
    p.weeks.forEach((w, wi) => { if (!w.title) W.push(`Неделя ${wi + 1}: нет title`); (w.nodes || []).forEach(nd => {
      n++; if (!nd.id || nid.has(nd.id)) E.push(`Узел ${n}: id пустой или повторяется`); nid.add(nd.id);
      const pr = nd.practices; if (!Array.isArray(pr) || pr.length < 1 || pr.length > 2) E.push(`Узел ${nd.id}: practices — 1–2 id`);
      [...(pr || []), ...(nd.recap || [])].forEach(id => { if (!ids.has(id)) E.push(`Узел ${nd.id}: нет практики «${id}»`); else used.add(id); });
      if (nd.focus && nd.focus.length > 90) W.push(`Узел ${nd.id}: focus длиннее 90 символов`);
      const dup = (nd.recap || []).filter(id => (pr || []).includes(id)); if (dup.length) W.push(`Узел ${nd.id}: recap повторяет практику узла (${dup.join(', ')}) — уберите`);
      const mins = (pr || []).reduce((s, id) => s + (((o.practices || []).find(x => x.id === id) || {}).time || 0), 0) / 60, lim = wi === 0 ? 6 : wi === 1 ? 10 : 13;
      if (!nd.light && mins > lim) W.push(`Узел ${nd.id}: ${Math.round(mins)} мин при лимите недели ${lim} — слишком тяжело для этого этапа`); }); });
    if (n !== Number(o.days)) E.push(`path: узлов ${n}, а days = ${o.days}`);
    (o.practices || []).forEach(x => { if (!used.has(x.id)) W.push(`Практика «${x.id}» не используется в пути`); });
    if (!p.finale || !(p.finale.questions || []).length) W.push('path.finale: нет вопросов (будут стандартные)');
    if (!Array.isArray(p.digest) || !p.digest.length) W.push('path.digest: нет выжимки (в Акте 1 будет использован summary)');
    else { if (p.digest.length < 8 || p.digest.length > 14) W.push(`path.digest: ${p.digest.length} идей, лучше 10–14`); p.digest.forEach((x, i) => { if (!x || !x.title || !x.text) W.push(`path.digest[${i + 1}]: нужны title и text`); else if (String(x.text).split(/\s+/).length < 30) W.push(`path.digest[${i + 1}]: слишком коротко (меньше 30 слов), лучше 60–90`); }); }
  },

  // Редактор книги: шапка + прокручиваемое тело + закреплённая панель сохранения
  edit(book) {
    const isNew = !book || book._new, src = book ? JSON.parse(JSON.stringify(book)) : JSON.parse(JSON.stringify(AP_NEW_BOOK));
    ['_new','_isLocal','_fromSupabase','created_at','updated_at'].forEach(k => delete src[k]);
    const allowed = new Set([...AP_BOOK_KEYS, ...Object.keys(src)]);
    const dlg = document.createElement('dialog'); dlg.className = 'ap-dlg ap-full';
    dlg.innerHTML = `<div class="ap-ed"><div class="ap-ed-h"><div style="flex:1;min-width:0"><div class="ap-name" id="apEdT">${isNew ? 'Новая книга' : this.esc(src.title)}</div><div class="ap-sub" id="apInf"></div></div><span id="apStat"></span><button class="ap-x" id="apCl" aria-label="Закрыть">✕</button></div>
      <div class="ap-ed-b">
        <div class="ap-fg"><div class="full"><label>Название</label><input class="ap-in" id="apf_title"></div><div class="full"><label>Автор</label><input class="ap-in" id="apf_author"></div>
          <div><label>ID (латиница)</label><input class="ap-in" id="apf_id" ${isNew ? '' : 'disabled'}></div><div class="ap-fs"><div><label>Эмодзи</label><input class="ap-in" id="apf_emoji"></div><div><label>Дней</label><input class="ap-in" id="apf_days" type="number" min="1" inputmode="numeric"></div></div>
          <div class="full"><label>Категория</label><select class="ap-in" id="apf_category">${AP_CATS.map(c => `<option>${this.esc(c)}</option>`).join('')}</select></div>
          <div class="full"><label>Обложка (URL)</label><input class="ap-in" id="apf_cover_url" placeholder="https://…"></div></div>
        <div class="ap-ed-sw"><label class="ap-tg"><button type="button" class="ap-sw" id="apf_pub" aria-label="Опубликована"></button>Опубликована</label><label class="ap-tg"><button type="button" class="ap-sw" id="apf_free" aria-label="Бесплатная"></button>Бесплатная</label></div>
        <div class="ap-h">Практики</div><div id="apPr" class="ap-prs"></div>
        <div class="ap-row" style="margin:14px 0 6px"><b style="margin-right:auto">JSON книги</b><button class="ap-btn s" id="apFm">Форматировать</button><button class="ap-btn s" id="apPa">Вставить</button><button class="ap-btn s" id="apCp">Копировать</button></div>
        <textarea class="ap-in" id="apTa" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea><div class="ap-iss" id="apIss"></div></div>
      <div class="ap-ed-f"><button class="ap-btn" id="apCl2">Закрыть</button><button class="ap-btn p" id="apSv">Сохранить</button></div></div>`;
    document.body.appendChild(dlg);
    const $ = s => dlg.querySelector(s), ta = $('#apTa'), F = ['title','author','id','emoji','days','category','cover_url'];
    let cur = src, initial = '';
    const put = o => { ta.value = JSON.stringify(o, null, 2); };
    const parse = () => { try { return JSON.parse(ta.value.replace(/^```(?:json)?|```$/g, '').trim()); } catch (e) { return e; } };
    const toForm = o => F.forEach(k => { const el = $('#apf_' + k); if (el && document.activeElement !== el) el.value = o[k] ?? ''; });
    const sw = (el, v) => el.classList.toggle('on', v), isOn = el => el.classList.contains('on');
    const validate = () => {
      const o = parse(), iss = $('#apIss');
      if (o instanceof Error) { iss.innerHTML = `<div class="e">Некорректный JSON: ${this.esc(o.message)}</div>`; $('#apStat').innerHTML = '<span class="ap-tag er">✖ JSON</span>'; return null; }
      cur = o; toForm(o); const r = this.check(o, allowed); $('#apInf').textContent = r.info; $('#apEdT').textContent = o.title || 'Новая книга';
      $('#apStat').innerHTML = (r.E.length ? `<span class="ap-tag er">✖ ${r.E.length}</span>` : '') + (r.W.length ? `<span class="ap-tag wr">⚠ ${r.W.length}</span>` : '') + (!r.E.length && !r.W.length ? '<span class="ap-tag ok">✔</span>' : '');
      iss.innerHTML = r.E.map(m => `<div class="e">✖ ${this.esc(m)}</div>`).join('') + r.W.map(m => `<div class="w">⚠ ${this.esc(m)}</div>`).join('') + (r.E.length || r.W.length ? '' : '<div class="g">✔ Всё в порядке — можно сохранять</div>');
      $('#apPr').innerHTML = (r.rows || []).map((p, i) => `<div class="ap-pr"><i class="${p.st}"></i><span class="n">${i + 1}</span><span class="t">${this.esc(p.t)}</span><span class="ap-dim">${Math.round(p.s / 60 * 10) / 10} мин · ${p.v} фраз</span></div>`).join('') || '<div class="ap-sub">Практик пока нет</div>';
      return r;
    };
    put(src); initial = ta.value; toForm(src); sw($('#apf_pub'), !!src.published); sw($('#apf_free'), !!src.is_free); validate();
    const dirty = () => ta.value !== initial || isOn($('#apf_pub')) !== !!src.published || isOn($('#apf_free')) !== !!src.is_free;
    let tm; ta.oninput = () => { clearTimeout(tm); tm = setTimeout(validate, 250); };
    F.forEach(k => { $('#apf_' + k).oninput = ev => { const o = parse(); if (o instanceof Error) return this.err('Сначала исправьте JSON'); o[k] = k === 'days' ? (Number(ev.target.value) || ev.target.value) : ev.target.value; put(o); validate(); }; });
    ['apf_pub', 'apf_free'].forEach(i => $('#' + i).onclick = e => { e.preventDefault(); sw(e.currentTarget, !isOn(e.currentTarget)); });
    $('#apFm').onclick = () => { const o = parse(); if (!(o instanceof Error)) { put(o); validate(); } else this.err('Некорректный JSON'); };
    $('#apCp').onclick = () => this.clip(ta.value);
    $('#apPa').onclick = async () => { try { ta.value = await navigator.clipboard.readText(); validate(); toast('Вставлено'); } catch { this.err('Нет доступа к буферу — вставьте вручную'); } };
    const close = async () => { if (dirty() && !await this.ask({ title: 'Закрыть без сохранения?', text: 'Внесённые изменения будут потеряны.', ok: 'Закрыть', danger: true })) return; dlg.close(); };
    $('#apCl').onclick = $('#apCl2').onclick = close; dlg.addEventListener('cancel', e => { e.preventDefault(); close(); }); dlg.addEventListener('close', () => dlg.remove());
    const save = async () => {
      const r = validate(); if (!r) return this.err('Исправьте JSON');
      if (r.E.length) { $('#apIss').scrollIntoView({ behavior: 'smooth', block: 'center' }); return this.err(`Ошибок: ${r.E.length}. Сохранение невозможно`); }
      if (r.W.length && !await this.ask({ title: 'Есть предупреждения', text: `${r.W.length} шт. Сохранить всё равно?`, ok: 'Сохранить' })) return;
      const o = { ...cur, published: isOn($('#apf_pub')), is_free: isOn($('#apf_free')), author_bio: cur.authorBio || cur.author_bio || '', for_whom: cur.forWhom || cur.for_whom || '', cover_url: cur.coverUrl || cur.cover_url || null, lumi_tips: cur.lumi_tips || [], summary: cur.summary || [], voice_settings: cur.voice_settings || null };
      delete o.authorBio; delete o.forWhom; delete o.coverUrl;
      if (isNew && (adminAllBooks || []).some(b => String(b.id) === o.id && !b._isLocal) && !await this.ask({ title: 'Книга с таким id уже есть', text: 'Она будет перезаписана.', ok: 'Перезаписать', danger: true })) return;
      $('#apSv').disabled = true;
      if (await this.run(async () => { const { error } = await sb.from('books').upsert(o, { onConflict: 'id' }); if (error) throw error; }, 'Книга сохранена')) {
        initial = ta.value; src.published = o.published; src.is_free = o.is_free; dlg.close(); if (typeof loadBooksFromSupabase === 'function') loadBooksFromSupabase(); this.sec === 'books' ? this.books() : null;
      } else $('#apSv').disabled = false;
    };
    $('#apSv').onclick = save; dlg.onkeydown = ev => { if ((ev.ctrlKey || ev.metaKey) && ev.key === 's') { ev.preventDefault(); save(); } };
    dlg.showModal();
  },

  // ── Модерация: жалобы и отзывы ──
  async mod() {
    if (!this.area()) return;
    const c = t => sb.from(t).select('id', { count: 'exact', head: true }).then(r => r.count || 0);
    const [nr, nf] = await Promise.all([c('reports'), c('feedbacks')]);
    this.bar(`<div class="ap-title">Модерация</div><button class="ap-btn" onclick="AP.mod()">⟳</button><div class="ap-chips"><button class="ap-chip ${this.mt === 'reports' ? 'on' : ''}" onclick="AP.mt='reports';AP.mod()">Жалобы <i>${nr}</i></button><button class="ap-chip ${this.mt === 'fb' ? 'on' : ''}" onclick="AP.mt='fb';AP.mod()">Отзывы <i>${nf}</i></button></div>`);
    return this.mt === 'fb' ? this.fb() : this.reports();
  },
  async reports() {
    const { data: r } = await sb.from('reports').select('*').order('created_at', { ascending: false }).limit(200);
    const v = this.area(); if (!v) return;
    if (!r || !r.length) return v.innerHTML = '<div class="ap-empty">Жалоб нет 🎉<div class="ap-sub">Всё спокойно</div></div>';
    const pid = [...new Set(r.map(x => x.post_id).filter(Boolean))], uid = [...new Set(r.map(x => x.reporter_id).filter(Boolean))];
    const [P, U] = await Promise.all([sb.from('messages').select('*').in('id', pid), sb.from('profiles').select('id,name').in('id', uid)]);
    const pm = Object.fromEntries((P.data || []).map(x => [x.id, x])), um = Object.fromEntries((U.data || []).map(x => [x.id, x.name]));
    this.rp = r;
    v.innerHTML = r.map((x, i) => { const p = pm[x.post_id]; return `<div class="ap-card"><div class="ap-row"><span class="ap-tag er">${this.esc(x.reason || 'без причины')}</span><span class="ap-sub" style="margin-left:auto">${this.fmt(x.created_at)}</span></div><div class="ap-sub" style="margin:4px 0">Жалоба от: ${this.esc(um[x.reporter_id] || '—')}</div><blockquote>${p ? this.esc(p.text || p.content || '(без текста)') : '<i class="ap-dim">Пост уже удалён</i>'}</blockquote><div class="ap-row"><button class="ap-btn s d fill" onclick="AP.delPost(${i})">Удалить пост</button><button class="ap-btn s" onclick="AP.dismiss(${i})">Отклонить жалобу</button></div></div>`; }).join('');
  },
  async delPost(i) {
    const x = this.rp[i]; if (!await this.ask({ title: 'Удалить пост?', text: 'Жалобы на этот пост тоже будут закрыты.', ok: 'Удалить', danger: true })) return;
    if (await this.run(async () => { const a = await sb.from('messages').delete().eq('id', x.post_id); if (a.error) throw a.error; await sb.from('reports').delete().eq('post_id', x.post_id); }, 'Пост удалён')) this.mod();
  },
  async dismiss(i) {
    const x = this.rp[i];
    if (await this.run(async () => { const { error } = await sb.from('reports').delete().eq('id', x.id); if (error) throw error; }, 'Жалоба отклонена')) this.mod();
  },
  async fb() {
    const { data } = await sb.from('feedbacks').select('*').order('created_at', { ascending: false }).limit(200);
    const v = this.area(); if (!v) return;
    if (!data || !data.length) return v.innerHTML = '<div class="ap-empty">Отзывов пока нет</div>';
    const { data: U } = await sb.from('profiles').select('id,name,phone').in('id', [...new Set(data.map(x => x.user_id))]);
    const um = Object.fromEntries((U || []).map(x => [x.id, x]));
    v.innerHTML = data.map(x => { const u = um[x.user_id] || {}; return `<div class="ap-card"><div class="ap-row"><div class="ap-ava s" style="--h:${this.hue(x.user_id)}">${this.esc((u.name || '?')[0].toUpperCase())}</div><div class="ap-main"><div class="ap-name">${this.esc(u.name || 'Без имени')}</div><div class="ap-sub">${this.esc(this.phone(u.phone))} · ${this.fmt(x.created_at)}</div></div></div><p class="ap-text">${this.esc(x.text)}</p><div class="ap-row"><button class="ap-btn s" onclick="AP.userMenu('${this.qs(x.user_id)}')">Пользователь</button>${u.phone ? `<button class="ap-btn s" onclick="AP.clip('${this.qs(u.phone)}')">Копировать телефон</button>` : ''}<button class="ap-btn s d" style="margin-left:auto" onclick="AP.delFb('${x.id}')">Удалить</button></div></div>`; }).join('');
  },
  async delFb(id) {
    if (!await this.ask({ title: 'Удалить отзыв?', ok: 'Удалить', danger: true })) return;
    if (await this.run(async () => { const { error } = await sb.from('feedbacks').delete().eq('id', id); if (error) throw error; }, 'Удалено')) this.mod();
  }
};

// Переходники для старых вызовов из остального кода
function loadAdminDashboard() { return AP.dash(); }
function loadAdminUsers() { return AP.users(); }
function renderAdminList() { return AP.usersRows(); }
function setAdminUserFilter() {}
function loadAdminBooks() { return AP.books(); }
function renderAdminBookList() { return AP.booksRows(); }
function filterAdminBooks() {}
function setAdminBookFilter() {}
function loadAdminReports() { AP.mt = 'reports'; return AP.mod(); }
function loadAdminFeedbacks() { AP.mt = 'fb'; return AP.mod(); }


// ═══ ПРОМОКОДЫ И УДАЛЕНИЕ АККАУНТА (SQL: supabase-setup.sql) ═══
function genPromoCode() {
  const a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', r = crypto.getRandomValues(new Uint8Array(8));
  document.getElementById('promoCodeInput').value = Array.from(r, x => a[x % a.length]).join('');
}
function openPromoModal() { document.getElementById('promoModal').classList.remove('hidden'); loadPromoList(); }
async function loadPromoList() {
  const box = document.getElementById('promoList'); if (!box) return;
  box.innerHTML = '<div class="ap-dim" style="font-size:12px">Загрузка…</div>';
  const { data, error } = await sb.from('promo_codes').select('*').order('created_at', { ascending: false }).limit(50);
  if (error) { box.innerHTML = '<div class="ap-dim" style="font-size:12px">Не удалось загрузить. Выполните supabase-setup.sql (блок 2).</div>'; return; }
  box.innerHTML = (data || []).map(p => {
    const left = p.max_uses ? `${p.used_count}/${p.max_uses}` : `${p.used_count}/∞`, dead = (p.expires_at && new Date(p.expires_at) < new Date()) || (p.max_uses && p.used_count >= p.max_uses);
    return `<div class="ap-card" style="padding:10px 12px; margin-bottom:8px; ${dead ? 'opacity:.55' : ''}"><div class="ap-row"><b style="font-family:ui-monospace,monospace; letter-spacing:1px">${escapeHtml(p.code)}</b><span class="ap-tag wr">+${p.days} дн</span><span class="ap-sub" style="margin-left:auto">${left}</span></div>
      <div class="ap-sub">${p.expires_at ? 'до ' + new Date(p.expires_at).toLocaleDateString('ru-RU') : 'без срока'}${dead ? ' · не действует' : ''}</div>
      <div class="ap-row" style="margin-top:6px"><button class="ap-btn s" onclick="AP.clip('${escapeHtml(p.code)}')">Копировать</button><button class="ap-btn s d" onclick="deletePromo('${escapeHtml(p.code)}')">Удалить</button></div></div>`;
  }).join('') || '<div class="ap-dim" style="font-size:12px">Промокодов пока нет</div>';
}
async function createPromoCode() {
  const code = document.getElementById('promoCodeInput').value.trim().toUpperCase(), days = parseInt(document.getElementById('promoDaysInput').value, 10);
  const max = parseInt(document.getElementById('promoMaxInput').value, 10), exp = document.getElementById('promoExpInput').value;
  if (!/^[A-Z0-9_-]{4,32}$/.test(code)) return toast('Код: 4–32 символа, латиница, цифры, - и _', 'danger');
  if (!Number.isInteger(days) || days < 1 || days > 3650) return toast('Дней: от 1 до 3650', 'danger');
  const { error } = await sb.rpc('admin_create_promo', { p_code: code, p_days: days, p_max_uses: Number.isInteger(max) && max > 0 ? max : null, p_expires: exp ? new Date(exp + 'T23:59:59').toISOString() : null });
  if (error) return toast(error.message || 'Не удалось создать промокод', 'danger');
  toast('Промокод создан: ' + code); try { navigator.clipboard.writeText(code); } catch (e) {}
  document.getElementById('promoCodeInput').value = ''; document.getElementById('promoMaxInput').value = ''; document.getElementById('promoExpInput').value = '';
  loadPromoList();
}
async function deletePromo(code) {
  if (!await AP.ask({ title: 'Удалить промокод ' + code + '?', text: 'Уже полученные дни Premium у пользователей сохранятся.', ok: 'Удалить', danger: true })) return;
  const { error } = await sb.from('promo_codes').delete().eq('code', code);
  if (error) return toast('Ошибка: ' + error.message, 'danger'); toast('Промокод удалён'); loadPromoList();
}
async function redeemPromo() {
  const inp = document.getElementById('promoRedeemInput'), code = (inp.value || '').trim().toUpperCase();
  if (!code) return toast('Введите промокод', 'warm');
  const { error } = await sb.rpc('redeem_promo', { p_code: code });
  if (error) return toast(error.message || 'Не удалось применить промокод', 'danger');
  inp.value = ''; toast('Промокод применён! Premium активирован 🎉'); setTimeout(() => location.reload(), 1400);
}
async function deleteMyAccount() {
  const v = await AP.ask({ title: 'Удалить аккаунт навсегда?', text: 'Будут удалены профиль, прогресс, записи дневника, публикации и сообщения. Отменить это нельзя. Для подтверждения введите УДАЛИТЬ.', input: '', ok: 'Удалить аккаунт', danger: true });
  if (v !== 'УДАЛИТЬ') { if (v !== null) toast('Подтверждение не совпало', 'danger'); return; }
  const { error } = await sb.rpc('delete_my_account');
  if (error) { console.error('[ANDGER] delete_my_account', error); return toast('Не удалось удалить аккаунт. Напишите нам, и мы удалим его вручную.', 'danger'); }
  try { await sb.auth.signOut(); } catch (e) {}
  try { localStorage.clear(); sessionStorage.clear(); } catch (e) {}
  toast('Аккаунт удалён'); setTimeout(() => location.reload(), 900);
}


// ═══════════════════════════════════════════════
// КОУЧ на экране «Сегодня»: цель · мягкий возврат · итог дня · шаг на завтра · недельный замер
// Данные хранятся в state.books[id].coach и синхронизируются вместе с прогрессом.
// ═══════════════════════════════════════════════
const COACH_GOALS = [
  { id: 'focus',  t: 'Фокус и результат',     cats: ['Продуктивность и мышление', 'Бизнес и лидерство'] },
  { id: 'calm',   t: 'Спокойствие и стресс',  cats: ['Духовность и спокойствие', 'Психология и отношения'] },
  { id: 'energy', t: 'Энергия и здоровье',    cats: ['Здоровье и энергия'] },
  { id: 'habits', t: 'Привычки и дисциплина', cats: ['Привычки и саморазвитие'] },
  { id: 'money',  t: 'Деньги и карьера',      cats: ['Финансы и карьера', 'Бизнес и лидерство'] }
];
const COACH_METRICS = [['energy', 'Энергия'], ['focus', 'Фокус'], ['mood', 'Настроение']];

window.Coach = {
  tmp: {},
  esc(s) { return escapeHtml(String(s ?? '')); },
  goal() { try { return localStorage.getItem('andger_goal') || ''; } catch (e) { return ''; } },
  data(bs) { bs.coach = bs.coach || {}; bs.coach.checkins = bs.coach.checkins || []; bs.coach.evening = bs.coach.evening || {}; return bs.coach; },
  save(id) { try { saveState(id); } catch (e) { console.debug('[ANDGER] coach save', e); } },
  diff(a, b) { return Math.round((new Date(a + 'T00:00:00') - new Date(b + 'T00:00:00')) / 864e5); },
  card(title, body) { return `<div class="cc"><div class="cc-t">${title}</div>${body}</div>`; },
  shortest(b) { return (b.practices || []).filter(p => p.time > 0).sort((x, y) => x.time - y.time)[0] || null; },

  render() {
    const box = document.getElementById('coachArea'); if (!box) return;
    const ae = document.activeElement; if (ae && box.contains(ae) && /INPUT|TEXTAREA/.test(ae.tagName)) return;   // не мешаем вводу
    if (typeof currentBook === 'undefined' || !currentBook || typeof user === 'undefined' || !user) { box.innerHTML = ''; return; }
    const b = currentBook, bs = getBookState(b.id), started = !!bs.start;
    const base = started ? [this.comeback(b, bs), this.intention(b, bs), this.weekly(b, bs), this.evening(b, bs)] : [];
    const pc = (window.Path && Path.card) ? Path.card(b, bs, started) : '';
    box.innerHTML = [pc, ...base].filter(Boolean).slice(0, 2).join('');   // не больше двух карточек сразу
  },

  // 1. Мягкий возврат после пропуска
  comeback(b, bs) {
    const day = currentDay(b.id); if (day < 2) return '';
    const rec0 = bs.days[todayStr()] || {};
    if ((rec0.practices || []).length || rec0.closed) return '';
    let miss = 0;
    for (let d = day - 1; d >= 1; d--) { const r = bs.days[dateByDay(b.id, d)]; if (r && (r.closed || r.shielded || (r.practices || []).length)) break; miss++; }
    if (!miss) return '';
    const m = this.shortest(b); if (!m) return '';
    const title = miss === 1 ? 'Вчера не получилось — это нормально' : miss < 4 ? `Перерыв ${miss} дн. Возвращаемся мягко` : 'Давно не виделись. Начни с малого';
    return this.card(title, `<div class="cc-s">Главное правило: не пропускать дважды. Сегодня достаточно минимальной версии, она сохраняет привычку.</div>
      <button class="d-btn-primary" style="margin-top:10px" onclick="Coach.startMin()">Минимум: ${this.esc(m.title)} · ${Math.max(1, Math.round(m.time / 60))} мин</button>`);
  },
  startMin() { if (window.Path && Path.cur()) return Path.open(); const m = this.shortest(currentBook); if (m) openPractice(m.id); },

  // 2. Шаг на сегодня из вчерашнего итога
  intention(b, bs) {
    const y = localDate(new Date(Date.now() - 864e5)), e = (this.data(bs).evening || {})[y];
    const rec0 = bs.days[todayStr()] || {};
    if (!e || !e.next || (rec0.practices || []).length) return '';
    return this.card('Твой шаг на сегодня', `<div class="cc-q">«${this.esc(e.next)}»</div><div class="cc-s">Ты выбрал его вчера вечером. Сделай до конца дня.</div>`);
  },

  // 3. Недельный замер эффекта
  weekly(b, bs) {
    const day = currentDay(b.id); if (day < 7) return '';
    const c = this.data(bs), last = c.checkins[c.checkins.length - 1], today = todayStr();
    if (last && last.date === today) {
      const prev = c.checkins[c.checkins.length - 2];
      const rows = COACH_METRICS.map(([k, l]) => { const dv = prev ? last[k] - prev[k] : null; return `<div class="cc-row"><span>${l}</span><b>${last[k]}/5${dv === null ? '' : ` <i class="${dv > 0 ? 'up' : dv < 0 ? 'down' : ''}">${dv > 0 ? '+' : ''}${dv}</i>`}</b></div>`; }).join('');
      return this.card('Итог недели сохранён', rows + `<div class="cc-s">${prev ? 'Изменения показаны относительно прошлого замера.' : 'Через неделю сравним с этим результатом.'}</div>`);
    }
    if (last && this.diff(today, last.date) < 7) return '';
    const pick = (k) => [1, 2, 3, 4, 5].map(n => `<button class="cc-r ${this.tmp[k] === n ? 'on' : ''}" onclick="Coach.pick('${k}',${n})">${n}</button>`).join('');
    return this.card('Как ты после недели практик?', `<div class="cc-s">Оцени от 1 до 5. Так видно, что реально меняется.</div>` +
      COACH_METRICS.map(([k, l]) => `<div class="cc-row"><span>${l}</span><div class="cc-rs">${pick(k)}</div></div>`).join('') +
      `<button class="d-btn-primary" style="margin-top:10px" onclick="Coach.saveWeekly()">Сохранить</button>`);
  },
  pick(k, n) { this.tmp[k] = n; this.render(); },
  saveWeekly() {
    if (!COACH_METRICS.every(([k]) => this.tmp[k])) return toast('Оцените все три пункта', 'warm');
    const b = currentBook, bs = getBookState(b.id), c = this.data(bs);
    c.checkins.push({ date: todayStr(), energy: this.tmp.energy, focus: this.tmp.focus, mood: this.tmp.mood, day: currentDay(b.id) });
    this.tmp = {}; this.save(b.id); haptic('success'); toast('Замер сохранён', 'success'); this.render();
  },

  // 4. Итог дня (после 18:00, если сегодня была хотя бы одна практика)
  evening(b, bs) {
    const today = todayStr(), rec = bs.days[today] || {};
    // Показываем только с 18:00 до 23:59 и если есть практики и еще не заполнено
    if (new Date().getHours() < 18 || !(rec.practices || []).length || this.data(bs).evening[today]) return '';
    
    return this.card('Итоги дня', `
      <div class="cc-s" style="margin-bottom: 12px;">Удели 1 минуту, чтобы зафиксировать результат.</div>
      <button class="d-btn-secondary" style="width: 100%; height: 44px; border-radius: 14px; display: flex; justify-content: center; gap: 8px; color: var(--d-accent-2); border-color: rgba(124,92,255,0.3);" onclick="Coach.openEvening()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
        Записать итоги
      </button>
    `);
  },

  openEvening() {
    document.getElementById('eveningWin').value = '';
    document.getElementById('eveningBlock').value = '';
    document.getElementById('eveningNext').value = '';
    document.getElementById('eveningModal').classList.remove('hidden');
  },
  saveEvening() {
    const v = id => (document.getElementById(id)?.value || '').trim();
    const win = v('eveningWin'), block = v('eveningBlock'), next = v('eveningNext');
    if (!win && !block && !next) return toast('Напиши хотя бы одну строку', 'warm');
    const b = currentBook, bs = getBookState(b.id);
    this.data(bs).evening[todayStr()] = { win, block, next, at: new Date().toISOString() };
    this.save(b.id); 
    haptic('success'); 
    toast('Итог дня сохранён', 'success'); 
    document.getElementById('eveningModal').classList.add('hidden');
    this.render();
  },

  // 5. Цель и подбор книги
  goalCard(b, bs) {
    const g = this.goal();
    if (!g) return this.card('Чего ты хочешь добиться?', `<div class="cc-s">Выбери главное, и мы подскажем, с какой книги начать.</div><div class="cc-chips">${COACH_GOALS.map(x => `<button class="cc-chip" onclick="Coach.setGoal('${x.id}')">${x.t}</button>`).join('')}</div>`);
    const goal = COACH_GOALS.find(x => x.id === g); if (!goal) return '';
    const fits = !!b && goal.cats.includes(b.category);
    if (bs && bs.start && fits) return '';
    const rec = (typeof BOOKS !== 'undefined' ? BOOKS : []).find(x => x.id !== (b && b.id) && goal.cats.includes(x.category) && !getBookState(x.id).start);
    if (!rec) return '';
    return this.card('Под твою цель: ' + this.esc(goal.t), `<div class="cc-q">${this.esc(rec.title)}</div><div class="cc-s">${this.esc(rec.author || '')}</div>
      <button class="d-btn-secondary" style="margin-top:10px" onclick="${window.Path && Path.isPath(rec) ? 'Path.startBook' : 'openBookDetail'}('${this.esc(rec.id).replace(/'/g, '&#39;')}')">${window.Path && Path.isPath(rec) ? 'Начать путь' : 'Посмотреть книгу'}</button>
      <button class="cc-link" onclick="Coach.resetGoal()">Изменить цель</button>`);
  },
  setGoal(id) {
    try { localStorage.setItem('andger_goal', id); } catch (e) {}
    try { sb.auth.updateUser({ data: { goal: id } }); } catch (e) {}
    toast('Цель сохранена', 'success'); this.render();
  },
  resetGoal() { try { localStorage.removeItem('andger_goal'); } catch (e) {} this.render(); }
};

// Подключаем блок к экрану «Сегодня», не меняя саму renderToday
(function () {
  const orig = window.renderToday; if (typeof orig !== 'function') return;
  window.renderToday = function () { const r = orig.apply(this, arguments); try { Coach.render(); } catch (e) { console.debug('[ANDGER] coach', e); } return r; };
})();


// ═══════════════════════════════════════════════════════════════
// ПУТЬ (формат книги 2): Акт 1 знакомство · Акт 2 узлы-практики · Акт 3 финал
// Практики, таймер, озвучка, XP и синхронизация — прежние. Путь только выбирает, какую практику открыть сегодня.
// Состояние: state.books[id].path = { intro:{i1:true}, nodes:{n01:{date,at}}, checkpoints:{0:{..}}, finale:{done,answers,at} }
// ═══════════════════════════════════════════════════════════════
const PT_INTRO = [{ id: 'i1', t: 'Автор' }, { id: 'i2', t: 'О чём книга' }, { id: 'i6', t: 'Главные идеи' }, { id: 'i3', t: 'Методики' }, { id: 'i4', t: 'Что получишь' }, { id: 'i5', t: 'Письмо себе' }];
const PT_OFFS = [0, 34, 56, 34, 0, -34, -56, -34];
const PT_SVG = {
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
  crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18h18l-1.5-10-5 4-2.5-6-2.5 6-5-4z"/></svg>'
};

window.Path = {
  active: null, fresh: null, el: null, fl: null,
  esc(s) { return escapeHtml(String(s ?? '')); },
  isPath(b) { return !!(b && Number(b.format) === 2 && b.path && Array.isArray(b.path.weeks) && b.path.weeks.length); },
  cur() { return this.isPath(currentBook) ? currentBook : null; },
  prac(b, id) { return (b.practices || []).find(p => p.id === id); },
  st(b) { const bs = getBookState(b.id), p = bs.path = bs.path || {}; p.intro = p.intro || {}; p.nodes = p.nodes || {}; p.checkpoints = p.checkpoints || {}; return p; },
  save(id) { try { saveState(id); } catch (e) { console.debug('[ANDGER] path save', e); } },
  mins(b, ids) { return Math.max(1, Math.round(ids.reduce((s, id) => s + ((this.prac(b, id) || {}).time || 0), 0) / 60)); },
  canPlay(b, it) { return it.kind !== 'node' || hasBookAccess(b.id) || it.n <= (b.path.free_nodes || 7); },

  // Последовательность элементов пути и их статусы
  seq(b) {
    const out = PT_INTRO.map((x, k) => ({ id: x.id, kind: 'intro', t: x.t, pos: k + 1 })); let n = 0;
    b.path.weeks.forEach((w, wi) => (w.nodes || []).forEach((node, ni, arr) => { n++; out.push({ id: node.id, kind: 'node', node, w: wi, n, weekEnd: ni === arr.length - 1, light: !!node.light }); }));
    out.push({ id: 'fin', kind: 'finale', t: 'Финал' });
    return out;
  },
  state(b) {
    const items = this.seq(b), ps = this.st(b), today = todayStr();
    const doneToday = Object.values(ps.nodes).some(x => x.date === today); let found = false;
    items.forEach(it => {
      it.done = it.kind === 'intro' ? (!!ps.intro[it.id] || (it.id === 'i6' && !this.digestItems(b).length)) : it.kind === 'node' ? !!ps.nodes[it.id] : !!(ps.finale && ps.finale.done);
      if (it.done) { it.s = 'done'; return; }
      if (!found) { found = true; it.s = 'cur'; return; }
      it.s = 'lock';
    });
    return { items, doneToday, total: items.length, done: items.filter(x => x.done).length, nodes: items.filter(x => x.kind === 'node') };
  },
  // Глобальный огонь: любая закрытая (или защищённая щитом) дата по любой книге
  globalStreak() {
    const days = new Set();
    BOOKS.forEach(b => { const bs = getBookState(b.id); Object.entries(bs.days || {}).forEach(([d, r]) => { if (r && (r.closed || r.shielded)) days.add(d); }); });
    const d = new Date(todayStr() + 'T00:00:00'); let n = 0; if (!days.has(localDate(d))) d.setDate(d.getDate() - 1);
    while (days.has(localDate(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  },

  // ── Оверлей ──
  ensure() { if (!this.el) { const e = document.createElement('div'); e.id = 'pathScreen'; e.className = 'pt hidden'; document.body.appendChild(e); this.el = e; } return this.el; },
  open(opts) {
    if (!this.cur()) return false; const el = this.ensure(); el.classList.remove('hidden'); document.body.classList.add('pt-open'); this.render();
    const body = document.getElementById('ptBody'); if (body) body.scrollTop = 0;
    if (opts && opts.sheet) setTimeout(() => { const b = this.cur(); if (!b) return; const S = this.state(b), c = S.items.find(x => x.s === 'cur'); if (c && c.kind === 'node' && !c.wait) this.nodeSheet(c, S); }, 380);
    return true;
  },
  hide() { if (this.el) this.el.classList.add('hidden'); document.body.classList.remove('pt-open'); },
  close() { this.hide(); try { renderToday(); } catch (e) {} },

  hue(s) { let h = 0; String(s).split('').forEach(c => h = (h * 31 + c.charCodeAt(0)) % 360); return h; },
  cover(b, w, h, r) {
    const st = `width:${w}px;height:${h}px;border-radius:${r || 14}px`;
    if (b.cover_url) return `<span class="bk-cv" style="${st}"><img src="${this.esc(b.cover_url)}" alt=""></span>`;
    const em = (typeof getEmojiOrSvg === 'function') ? getEmojiOrSvg(b.emoji, Math.round(w * .56), b.title) : this.esc(b.emoji || '📖');
    return `<span class="bk-cv emo" style="${st};--h:${[262, 224, 24, 282, 340, 244][this.hue((b.category || '') + b.title) % 6]}"><span class="bk-em">${em}</span></span>`;
  },
  brand(t) { const S = [[255, 122, 42], [124, 92, 255], [30, 92, 255]], x = Math.max(0, Math.min(1, t)) * 2, i = Math.min(1, Math.floor(x)), u = x - i, a = S[i], b = S[i + 1]; return `rgb(${[0, 1, 2].map(k => Math.round(a[k] + (b[k] - a[k]) * u)).join(',')})`; },
  // Кольцо из логотипа ANDGER: градиент оранжевый → фиолетовый → синий, зазор сверху, скруглённые концы. Заполняется по мере прогресса
  ring(state, size, label, frac) {
    const R = 40, Cc = 2 * Math.PI * R, span = Cc * .9, fr = state === 'done' ? 1 : state === 'lock' ? 0 : Math.max(.025, Math.min(1, frac || 0));
    const arc = (len, off, stroke, op) => `<circle cx="50" cy="50" r="${R}" fill="none" stroke="${stroke}" ${op ? `stroke-opacity="${op}"` : ''} stroke-width="11" stroke-linecap="round" stroke-dasharray="${len.toFixed(2)} ${Cc.toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 50 50)"/>`;
    let fill = ''; if (fr > 0) { const n = Math.max(2, Math.ceil(40 * fr)); for (let q = 0; q < n; q++) fill += arc(span * fr / n + (q < n - 1 ? .9 : 0), span * fr * q / n, this.brand(((q + .5) / n) * fr)); }
    const big = String(label || '').length > 2, mid = state === 'done' ? '<path d="M35 51l10 10 20-23" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>' : (state === 'cur' && label ? `<text x="50" y="${big ? 59 : 62}" text-anchor="middle" font-size="${big ? 22 : 32}" font-weight="900" fill="currentColor">${this.esc(label)}</text>` : '');
    return `<svg class="rg ${state}" viewBox="0 0 100 100" width="${size}" height="${size}" aria-hidden="true">${arc(span, 0, '#fff', .12)}${fill}${mid}</svg>`;
  },
  chips() {
    const fireIc = (typeof ICONS !== 'undefined' && ICONS.flame) || '', xp = (document.getElementById('cardXP') || {}).textContent || '0';
    return `<span class="ac-chips"><span class="ph-chip f"><span class="ph-ci">${fireIc}</span>${this.globalStreak()}</span><span class="ph-chip x">✦ ${this.esc(xp)}</span></span>`;
  },
  // Экран пути: сверху кольцо дней (весь путь одним взглядом), ниже действие на сегодня и карта по неделям
  render() {
    const b = this.cur(), el = this.el; if (!b || !el) return;
    const S = this.state(b), nd = S.nodes.filter(x => x.done).length, E = s => this.esc(s), cur = S.items.find(x => x.s === 'cur');
    const fireIc = (typeof ICONS !== 'undefined' && ICONS.flame) || '';
    const wk = cur && cur.kind === 'node' ? b.path.weeks[cur.w] : null;
    const cap = !cur ? '<b>Путь пройден</b><span>Все дни светятся. Ты молодец</span>' : cur.kind === 'node' ? `<b>Неделя ${cur.w + 1} · ${E(wk.title)}</b><span>${E(wk.goal || '')}</span>` : `<b>${cur.kind === 'finale' ? 'Финал пути' : 'Знакомство с книгой'}</b><span>${E(cur.kind === 'finale' ? 'Подведи итоги и прочитай своё письмо' : `Шаг ${cur.pos} из ${PT_INTRO.length}: ${cur.t}`)}</span>`;
    el.innerHTML = `<div class="pt-h"><button class="pt-x" onclick="Path.close()" aria-label="Закрыть">✕</button><div class="pt-ht"><div class="pt-kk">Путь · ${b.days} ${plural(b.days, 'день', 'дня', 'дней')}</div><div class="pt-bt">${E(b.title)}</div></div><button class="pt-hb" onclick="Path.digestFlow()" aria-label="Выжимка книги">${PT_SVG.book}</button><div class="pt-fire"><span class="pt-fi">${fireIc}</span>${this.globalStreak()}</div></div>
      <div class="pt-body" id="ptBody"><div class="pt-cr">${this.crystal(b, S)}</div><div class="pt-crc">${cap}<em>${nd} из ${S.nodes.length} ${plural(S.nodes.length, 'дня', 'дней', 'дней')} пройдено</em></div>${this.action(b, S)}${this.list(b, S)}</div>`;
  },
  // Кольцо (как в логотипе): внешнее — дни практики по неделям, внутреннее — знакомство, сверху — грань финала, в центре — текущий день
  crystal(b, S) {
    const E = s => this.esc(s), C = 180, R = 128, weeks = b.path.weeks, W = weeks.length, N = Math.max(1, S.nodes.length), rad = a => a * Math.PI / 180, f = n => Math.round(n * 100) / 100;
    const P = (r, a) => [C + r * Math.cos(rad(a)), C + r * Math.sin(rad(a))], arc = (r, a1, a2) => { const [x1, y1] = P(r, a1), [x2, y2] = P(r, a2); return `M${f(x1)} ${f(y1)}A${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${f(x2)} ${f(y2)}`; };
    const GW = W > 1 ? 9 : 0, d = (360 - W * GW) / N, g = 3, L = R * rad(d), sw = Math.max(8, Math.min(20, L - 4)), cap = (sw / 2) / R * 180 / Math.PI;
    let a0 = -90 + GW / 2, seg = '', wl = '', ci = 0;
    weeks.forEach((w, wi) => {
      const ns = S.nodes.filter(x => x.w === wi), start = a0;
      ns.forEach(it => {
        const prem = it.s !== 'done' && !this.canPlay(b, it), a1 = a0 + g / 2 + cap, a2 = a1 + Math.max(0.01, d - g - 2 * cap), p = arc(R, a1, a2);
        const col = this.brand(S.nodes.indexOf(it) / Math.max(1, N - 1));
        seg += `<g class="cr-g" style="--i:${ci++}"><path class="cr-hit" d="${p}" onclick="Path.tap('${it.id}')"/><path class="cr-s ${it.s}${prem ? ' prem' : ''}" d="${p}" style="stroke-width:${it.light ? sw - 6 : sw}${it.s === 'done' ? `;stroke:${col};color:${col}` : it.s === 'lock' && !prem ? `;stroke:${col};stroke-opacity:.24` : ''}"><title>${E('День ' + it.n)}</title></path></g>`;
        a0 += d;
      });
      const [lx, ly] = P(R + sw / 2 + 20, (start + a0) / 2); wl += `<text class="cr-w${ns.some(x => x.s === 'cur') ? ' on' : ''}" x="${f(lx)}" y="${f(ly)}">НЕД ${wi + 1}</text>`;
      a0 += GW;
    });
    const intro = S.items.filter(x => x.kind === 'intro'), k = intro.length, r2 = 100;
    intro.forEach((it, i) => { const [x, y] = P(r2, -90 + (i + .5) * 360 / k); seg += `<g class="cr-g" style="--i:${ci++}"><circle class="cr-hitd" cx="${f(x)}" cy="${f(y)}" r="15" onclick="Path.tap('${it.id}')"/><circle class="cr-d ${it.s}" cx="${f(x)}" cy="${f(y)}" r="${it.s === 'cur' ? 7 : 5.6}"${it.s === 'done' ? ` style="fill:${this.brand(i / Math.max(1, k - 1))};color:${this.brand(i / Math.max(1, k - 1))}"` : it.s === 'lock' ? ` style="fill:${this.brand(i / Math.max(1, k - 1))};fill-opacity:.35"` : ''}><title>${E(it.t)}</title></circle></g>`; });
    const cur = S.items.find(x => x.s === 'cur'), fin = S.items.find(x => x.kind === 'finale'), allDone = S.nodes.every(x => x.done), fs = fin && fin.done ? 'done' : allDone ? 'cur' : 'lock';
    let k1, big, k2;
    if (!cur) { k1 = 'ПУТЬ'; big = '✓'; k2 = 'пройден'; } else if (cur.kind === 'node') { k1 = 'ДЕНЬ'; big = String(cur.n); k2 = `из ${N}`; } else if (cur.kind === 'intro') { k1 = 'ЗНАКОМСТВО'; big = String(cur.pos); k2 = `из ${k}`; } else { k1 = 'ФИНАЛ'; big = '★'; k2 = 'откройте'; }
    const fy = C - R - sw / 2 - 13, comet = S.nodes.some(x => x.done) && !(typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches)
      ? `<circle class="cr-comet" r="3.4"><animateMotion dur="18s" repeatCount="indefinite" path="M${C} ${C - R}A${R} ${R} 0 1 1 ${C} ${C + R}A${R} ${R} 0 1 1 ${C} ${C - R}"/></circle>` : '';
    const stars = [[22, 40, 1.4], [318, 56, 1.1], [40, 300, 1.2], [300, 292, 1.5], [150, 14, 1], [12, 170, 1.1], [330, 180, 1.2], [90, 330, 1], [250, 328, 1.1], [60, 90, 1], [286, 120, 1]].map(([x, y, r], i) => `<circle class="cr-st" style="--d:${i * .45}s" cx="${x + 10}" cy="${y + 10}" r="${r}"/>`).join('');
    return `<svg class="cr" viewBox="0 0 360 360" role="img" aria-label="Прогресс пути"><defs><linearGradient id="crG" gradientUnits="userSpaceOnUse" x1="0" y1="360" x2="360" y2="0"><stop offset="0" stop-color="#ff7a2a"/><stop offset=".5" stop-color="#7c5cff"/><stop offset="1" stop-color="#1e5cff"/></linearGradient><linearGradient id="crV" gradientUnits="userSpaceOnUse" x1="0" y1="360" x2="360" y2="0"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#c8b4ff"/></linearGradient><radialGradient id="crGl"><stop offset="0" stop-color="#7c5cff" stop-opacity=".34"/><stop offset=".6" stop-color="#7c5cff" stop-opacity=".1"/><stop offset="1" stop-color="#7c5cff" stop-opacity="0"/></radialGradient></defs>
      <circle cx="${C}" cy="${C}" r="178" fill="url(#crGl)"/>${stars}<circle class="cr-bz" cx="${C}" cy="${C}" r="${R + sw / 2 + 5}"/><circle class="cr-bz" cx="${C}" cy="${C}" r="${R - sw / 2 - 5}"/>${seg}${wl}${comet}
      <g class="cr-fin ${fs}" onclick="Path.tap('fin')"><circle cx="${C}" cy="${fy}" r="14"/><circle class="fi" cx="${C}" cy="${fy}" r="5"/><title>Финал</title></g>
      <text class="cr-k" x="${C}" y="${C - 36}">${k1}</text><text class="cr-big${big.length > 2 ? ' sm' : ''}" x="${C}" y="${C + 22}">${big}</text><text class="cr-k" x="${C}" y="${C + 46}">${k2}</text></svg>`;
  },
  // Карта по неделям: понятный список, текущая неделя раскрыта
  list(b, S) {
    const E = s => this.esc(s);
    const row = it => {
      const prem = it.kind === 'node' && it.s !== 'done' && !this.canPlay(b, it); let t, m;
      if (it.kind === 'intro') { t = it.t; m = 'Знакомство'; }
      else if (it.kind === 'finale') { t = 'Финал пути'; m = 'Итоги и письмо себе'; }
      else { const p = this.prac(b, it.node.practices[0]); t = p ? p.title : ''; m = `День ${it.n} · ≈ ${this.mins(b, it.node.practices)} мин${it.light ? ' · лёгкий день' : ''}`; }
      const st = it.s === 'done' ? '<span class="pt-st ok">✓</span>' : prem ? '<span class="pt-st pr">Premium</span>' : it.s === 'cur' ? (it.wait ? '<span class="pt-st wt">завтра</span>' : '<span class="pt-st now">сегодня</span>') : `<span class="pt-st lk">${PT_SVG.lock}</span>`;
      return `<button class="pt-li ${it.s}${prem ? ' prem' : ''}" onclick="Path.tap('${it.id}')"><span class="pt-lg"><i></i></span><span class="pt-lx"><b>${E(t)}</b><em>${E(m)}</em></span>${st}</button>`;
    };
    const sec = (title, sub, items, open) => `<details class="pt-det"${open ? ' open' : ''}><summary><div><b>${title}</b>${sub ? `<span>${E(sub)}</span>` : ''}</div><i>${items.filter(x => x.done).length}/${items.length}</i></summary><div class="pt-lis">${items.map(row).join('')}</div></details>`;
    const intro = S.items.filter(x => x.kind === 'intro'), fin = S.items.find(x => x.kind === 'finale');
    let html = '<div class="pt-lh">Карта пути</div>' + sec('Знакомство', 'Зачем ты это делаешь', intro, intro.some(x => !x.done));
    b.path.weeks.forEach((w, wi) => { const ns = S.items.filter(x => x.kind === 'node' && x.w === wi); html += sec(`Неделя ${wi + 1} · ${E(w.title)}`, w.goal || '', ns, ns.some(x => x.s === 'cur')); });
    return html + `<div class="pt-fin">${row(fin)}</div>`;
  },
  // Карточка «Сегодня»: что делать и одна кнопка
  action(b, S, opt) {
    const E = s => this.esc(s), cur = S.items.find(x => x.s === 'cur'); let top = 'Сегодня', k = '', t = '', f = '', cta = '', gem = 'cur', gl = '';
    if (!cur) { top = 'Путь пройден'; t = 'Можно начать новую книгу'; gem = 'done'; cta = '<button class="ph-cta" onclick="Path.open()">Открыть карту</button>'; }
    else if (cur.kind === 'intro') { 
      top = 'Знакомство'; 
      k = `Часть ${cur.pos} из ${PT_INTRO.length}`; 
      t = cur.t; 
      f = 'Несколько минут, чтобы понять, зачем всё это'; 
      gl = String(cur.pos); 
      cta = `<button class="ph-cta" onclick="Path.tap('${cur.id}')">Продолжить знакомство</button>`; 
    }
    else if (cur.kind === 'finale') { top = 'Финал'; t = 'Подведи итоги пути'; f = 'Прочитай своё письмо и выбери следующий шаг'; cta = `<button class="ph-cta gold" onclick="Path.tap('fin')">Открыть финал</button>`; }
    else {
      const p = this.prac(b, cur.node.practices[0]), mins = this.mins(b, cur.node.practices), prem = !this.canPlay(b, cur);
      k = `День ${cur.n} · Неделя ${cur.w + 1}${cur.light ? ' · лёгкий день' : ''}`; t = p ? p.title : ''; f = cur.node.focus || ''; gl = String(cur.n);
      if (cur.wait) { 
        // Мы убрали блокировку, поэтому этот блок больше не нужен
      }
      else if (prem) cta = '<button class="ph-cta gold" onclick="showPremium()">Продолжить в Premium</button>';
      else if (cur.light) cta = `<button class="ph-cta" onclick="${opt && opt.today ? 'Path.open({sheet:true})' : `Path.tap('${cur.id}')`}">Сделать минимум</button>`;
      else cta = `<button class="ph-cta" onclick="${opt && opt.today ? 'Path.open({sheet:true})' : `Path.startNode('${cur.id}')`}">Начать практику · ${mins} мин</button>`;
    }
    const wi = cur && cur.kind === 'node' ? cur.w : -1, ws = wi >= 0 ? S.items.filter(x => x.kind === 'node' && x.w === wi) : [];
    const trail = ws.length ? `<div class="ph-trail">${ws.map(x => `<i class="${x.done ? 'on' : (cur && x.id === cur.id) ? 'cur' : ''}${x.light ? ' lt' : ''}"></i>`).join('<u></u>')}</div>` : '';
    return `<div class="ac"><div class="ac-top"><span class="ac-k">${E(top)}</span>${opt && opt.chips ? this.chips() : ''}</div><div class="ac-main"><div class="ac-gem">${this.ring(gem, 96, gl, S.nodes.filter(x => x.done).length / Math.max(1, S.nodes.length))}</div><div class="ph-tx">${k ? `<div class="ph-k">${E(k)}</div>` : ''}<div class="ph-t">${E(t)}</div>${f ? `<div class="ph-f">${E(f)}</div>` : ''}</div></div>${trail}${cta}</div>`;
  },
  shake(id, msg) { const n = this.el && this.el.querySelector(`.pt-node[data-id="${id}"]`); if (n) { n.classList.remove('shake'); void n.offsetWidth; n.classList.add('shake'); } haptic('warning'); if (msg) toast(msg, 'warm'); },

  tap(id) {
    const b = this.cur(); if (!b) return; const S = this.state(b), it = S.items.find(x => x.id === id); if (!it) return;
    try { playClick(); } catch (e) {}
    if (it.kind === 'intro') return it.s === 'lock' ? this.shake(id, 'Сначала пройди предыдущие шаги') : this.introFlow(it.id);
    if (it.kind === 'finale') return it.s === 'lock' ? this.shake(id, 'Финал откроется после всех узлов') : this.finaleFlow();
    return this.nodeSheet(it, S);
  },

  // ── Лист узла ──
  sheet(html) {
    this.closeSheet(); const d = document.createElement('dialog'); d.className = 'ap-dlg ap-sheet pt-sheet'; d.id = 'ptSheet'; d.innerHTML = html;
    document.body.appendChild(d); d.onclick = e => { if (e.target === d) d.close(); }; d.onclose = () => d.remove(); d.showModal();
  },
  closeSheet() { const d = document.getElementById('ptSheet'); if (d) { d.onclose = null; d.close(); d.remove(); } },
  nodeSheet(it, S) {
    const b = this.cur(), E = s => this.esc(s), node = it.node, ps = this.prac(b, node.practices[0]); if (!ps) return toast('Практика не найдена', 'danger');
    const mins = this.mins(b, node.practices), prem = it.s !== 'done' && !this.canPlay(b, it);
    const rec = (node.recap || []).filter(id => !node.practices.includes(id)).map(id => this.prac(b, id)).filter(Boolean);
    let msg = '', btn = '';
    if (it.s === 'done') msg = '<div class="pt-ok">Пройдено ✓</div>';
    else if (it.s === 'lock') msg = '<div class="pt-note">Этот узел откроется после предыдущих.</div>';
    else if (prem) { msg = `<div class="pt-note">Первые ${b.path.free_nodes || 7} узлов бесплатны. Дальше путь продолжается в Premium.</div>`; btn = `<button class="d-btn-primary" onclick="Path.closeSheet();showPremium()" style="background:var(--d-gold-grad)">Открыть Premium</button>`; }
    else if (it.wait) msg = '<div class="pt-note">На сегодня шаг сделан. Следующий узел откроется завтра: привычка растёт, пока ты отдыхаешь.</div>';
    else btn = it.light ? `<button class="d-btn-primary" onclick="Path.doLight('${it.id}')">Минимум сделан</button>` : `<button class="d-btn-primary" onclick="Path.startNode('${it.id}')">Начать практику · ${mins} мин</button>`;
    const st = it.s === 'done' ? 'done' : it.s === 'cur' && !prem ? 'cur' : 'lock';
    this.sheet(`<div class="pt-sh"><div class="pt-sh-head"><div class="pt-sh-gem">${this.ring(st, 78, String(it.n), (it.n - 1) / Math.max(1, S.nodes.length))}</div><div><div class="pt-sh-k">День ${it.n} · Неделя ${it.w + 1}${it.light ? ' · лёгкий день' : ''}</div><div class="pt-sh-t">${E(ps.title)}</div><div class="pt-meta"><span>≈ ${mins} мин</span>${node.practices.length > 1 ? `<span>${node.practices.length} практики</span>` : ''}</div></div></div>
      ${node.focus ? `<div class="pt-sh-f">${E(node.focus)}</div>` : ''}
      ${it.light ? `<div class="pt-card"><b>Сегодня достаточно минимума</b><p>${E(ps.micro_action || 'Сделай самую маленькую версию практики.')}</p></div>` : ''}
      ${node.practices.length > 1 ? `<div class="pt-card"><b>Что в узле</b>${node.practices.map(id => { const p = this.prac(b, id); return p ? `<p>${E(p.title)} · ${Math.max(1, Math.round((p.time || 60) / 60))} мин</p>` : ''; }).join('')}</div>` : ''}
      ${rec.length ? `<div class="pt-card"><b>Освежи перед практикой</b>${rec.map(r => `<p>${E(r.title)}: ${E(r.micro_action || '')}</p>`).join('')}</div>` : ''}
      ${msg}${btn}<button class="pt-link" onclick="Path.closeSheet()">Закрыть</button></div>`);
  },
  startNode(id) {
    const b = this.cur(); if (!b) return; const it = this.state(b).items.find(x => x.id === id); if (!it || it.s !== 'cur' || it.wait) return;
    if (!this.canPlay(b, it)) { this.closeSheet(); return showPremium(); }
    const bs = getBookState(b.id), rec = bs.days[todayStr()] || { practices: [] }, left = it.node.practices.filter(x => !(rec.practices || []).includes(x));
    this.closeSheet();
    if (!left.length) { this.completeNode(b, it, false); this.afterPractice(); return; }
    this.active = { bookId: b.id, nodeId: id }; this.hide(); this._starting = true; try { openPractice(left[0]); } finally { this._starting = false; }
  },
  doLight(id) {
    const b = this.cur(); if (!b) return; const it = this.state(b).items.find(x => x.id === id); if (!it || it.s !== 'cur' || it.wait) return;
    this.closeSheet(); this.completeNode(b, it, true); this.afterPractice();
  },
  // Хук: практика завершена в обычном ритуале
  onPracticeDone(bookId, pid) {
    if (!this.active || this.active.bookId !== bookId) return;
    const b = this.cur(); if (!b || b.id !== bookId) return;
    const it = this.state(b).items.find(x => x.id === this.active.nodeId); if (!it || it.done) return;
    const rec = getBookState(b.id).days[todayStr()] || { practices: [] };
    if (it.node.practices.every(id => (rec.practices || []).includes(id))) this.completeNode(b, it, false);
  },
  completeNode(b, it, light) {
    const bs = getBookState(b.id), ps = this.st(b), date = todayStr(), rec = bs.days[date] || (bs.days[date] = { practices: [], earnedXP: 0 });
    rec.practices = rec.practices || [];
    if (light) { it.node.practices.forEach(id => { if (!rec.practices.includes(id)) rec.practices.push(id); }); rec.earnedXP = (rec.earnedXP || 0) + 5; }
    rec.closed = true; rec.pathNode = it.id; ps.nodes[it.id] = { date, at: new Date().toISOString() };
    const S = this.state(b), last = S.nodes.every(x => x.done);
    this.fresh = { n: it.n, w: it.w, cp: it.weekEnd && it.w < b.path.weeks.length - 1 && b.path.weeks[it.w].checkpoint !== undefined, last };
    this.active = null; this.save(b.id);
  },
  afterPractice() {
    const f = this.fresh; this.fresh = null; this.active = null; const b = this.cur(); if (!b) return;
    try { showTodayScreen(); } catch (e) {}
    this.open();
    if (!f) return;
    setTimeout(() => { try { fireConfetti(); } catch (e) {} haptic('success'); toast(`Узел ${f.n} пройден`, 'success'); }, 350);
    if (f.cp) setTimeout(() => this.checkpoint(f.w), 1300);
    else if (f.last) setTimeout(() => this.finaleFlow(), 1500);
  },

  // ── Чекпоинт недели ──
  checkpoint(w) {
    const b = this.cur(); if (!b) return; const wk = b.path.weeks[w], ps = this.st(b);
    const qs = (wk.checkpoint && wk.checkpoint.questions && wk.checkpoint.questions.length) ? wk.checkpoint.questions : ['Что сработало на этой неделе?', 'Что мешало?'];
    const d = document.createElement('dialog'); d.className = 'ap-dlg ap-small pt-cp';
    d.innerHTML = `<form method="dialog"><div class="pt-sh-k">Неделя ${w + 1} пройдена</div><h3 style="margin:2px 0 6px">${this.esc(wk.title)}</h3><p class="ap-dim">Награда: +100 XP. Ответь коротко, это закрепляет результат.</p>${qs.map((q, i) => `<label class="pt-q">${this.esc(q)}<textarea class="cc-in" id="ptCp${i}" rows="2" maxlength="300"></textarea></label>`).join('')}<div class="ap-row ap-end"><button class="ap-btn" value="skip">Пропустить</button><button class="ap-btn p" value="ok">Сохранить</button></div></form>`;
    document.body.appendChild(d);
    d.onclose = () => {
      const answers = qs.map((q, i) => ({ q, a: (d.querySelector('#ptCp' + i)?.value || '').trim() })).filter(x => x.a);
      if (!ps.checkpoints[w]) { const bs = getBookState(b.id), rec = bs.days[todayStr()] || (bs.days[todayStr()] = { practices: [] }); rec.earnedXP = (rec.earnedXP || 0) + 100; toast('+100 XP за неделю', 'success'); }
      ps.checkpoints[w] = { at: new Date().toISOString(), answers: d.returnValue === 'ok' ? answers : [] }; this.save(b.id); d.remove();
      if (this.state(b).nodes.every(x => x.done)) setTimeout(() => this.finaleFlow(), 500); else this.render();
    };
    d.showModal();
  },

  // ── Пошаговый экран (Акт 1 и финал) ──
  flow(steps, onDone) { this.fl = { steps, i: 0, onDone }; this.flRender(); },
  flRender() {
    const f = this.fl; if (!f) return; let el = document.getElementById('ptFlow'); if (!el) { el = document.createElement('div'); el.id = 'ptFlow'; el.className = 'pt pt-fl'; document.body.appendChild(el); }
    const s = f.steps[f.i], last = f.i === f.steps.length - 1;
    el.innerHTML = `<div class="pt-h"><button class="pt-x" onclick="Path.flClose()" aria-label="Закрыть">✕</button><div class="pt-dots">${f.steps.map((_, k) => `<i class="${k < f.i ? 'on' : k === f.i ? 'cur' : ''}"></i>`).join('')}</div><span style="width:38px"></span></div><div class="pt-fb${s.c ? ' c' : ''}">${s.html}</div><div class="pt-ff"><button class="d-btn-primary" onclick="Path.flNext()">${this.esc(s.next || (last ? 'Готово' : 'Далее'))}</button>${s.skip ? `<button class="pt-link" onclick="Path.flNext(true)">${this.esc(s.skip)}</button>` : ''}</div>`;
    el.classList.remove('hidden'); const fb = el.querySelector('.pt-fb'); if (fb) fb.scrollTop = 0;
  },
  flClose() { const el = document.getElementById('ptFlow'); if (el) el.remove(); this.fl = null; this.render(); },
  flNext(skipped) {
    const f = this.fl; if (!f) return; const s = f.steps[f.i];
    if (s.onNext && s.onNext(!!skipped) === false) return;
    try { playClick(); } catch (e) {}
    if (f.i >= f.steps.length - 1) { const cb = f.onDone; const el = document.getElementById('ptFlow'); if (el) el.remove(); this.fl = null; if (cb) cb(); this.render(); return; }
    f.i++; this.flRender();
  },

  // ── Акт 1 ──
  digestItems(b) { const d = b.path.digest; if (Array.isArray(d) && d.length) return d.filter(x => x && (x.title || x.text)); return (b.summary || []).map((s, i) => ({ title: 'Идея ' + (i + 1), text: s, apply: '' })); },
  digestSteps(b, onLast) {
    const E = s => this.esc(s), items = this.digestItems(b), n = items.length, pad = x => String(x).padStart(2, '0');
    return items.map((x, k) => ({ html: `<div class="pt-idea" data-n="${pad(k + 1)}"><div class="pt-idea-n"><b>${pad(k + 1)}</b><span>из ${pad(n)}</span></div><h2>${E(x.title || '')}</h2><p>${E(x.text || '')}</p>${x.example ? `<div class="pt-ex"><b>Пример</b><p>${E(x.example)}</p></div>` : ''}${x.mistake ? `<div class="pt-mis"><b>Частая ошибка</b><p>${E(x.mistake)}</p></div>` : ''}${x.apply ? `<div class="pt-apply"><b>Как применить</b><p>${E(x.apply)}</p></div>` : ''}</div>`, next: k === n - 1 ? 'К методикам' : 'Следующая идея', onNext: k === n - 1 ? onLast : undefined }));
  },
  digestFlow() { const b = this.cur(); if (!b) return; const st = this.digestSteps(b); if (!st.length) return toast('Выжимка пока не добавлена', 'warm'); st[st.length - 1].next = 'Готово'; this.flow(st, () => {}); },
  introFlow(startId) {
    const b = this.cur(), E = s => this.esc(s), ps = this.st(b), bs = getBookState(b.id);
    const mark = id => () => { ps.intro[id] = true; this.save(b.id); };
    const allMin = (() => { const ns = this.seq(b).filter(x => x.kind === 'node'); return ns.length ? Math.max(1, Math.round(ns.reduce((s, n) => s + this.mins(b, n.node.practices), 0) / ns.length)) : 5; })();
    const hasDigest = this.digestItems(b).length > 0, dn = `${b.days} ${plural(b.days, 'день', 'дня', 'дней')}`;
    const roadmap = b.path.weeks.map((w, wi) => { const names = [...new Set((w.nodes || []).flatMap(n => n.practices || []))].map(id => (this.prac(b, id) || {}).title).filter(Boolean); return `<div class="pt-wkc"><b>Неделя ${wi + 1} · ${E(w.title)}</b><p>${E(w.goal || '')}</p>${names.length ? `<div class="pt-tags">${names.map(x => `<span>${E(x)}</span>`).join('')}</div>` : ''}</div>`; }).join('');
    const steps = {
      i1: { c: true, html: `<div class="pt-cover">${this.cover(b, 112, 156, 18)}</div><div class="pt-fk">Автор</div><h2>${E(b.author || '')}</h2><p>${E(b.authorBio || 'Автор книги «' + b.title + '».')}</p>`, onNext: mark('i1') },
      i2: { html: `<div class="pt-fk">О чём книга</div><h2>${E(b.title)}</h2><p>${E(b.about || '')}</p>${hasDigest ? '<div class="pt-card"><b>Дальше: главные идеи</b><p>Короткая выжимка книги: идея, пример и подсказка, как применить её уже сегодня.</p></div>' : ''}`, onNext: mark('i2') },
      i3: { html: `<div class="pt-fk">Методики книги</div><h2>Что ты будешь внедрять</h2><div class="pt-chips">${(b.method || []).map(x => `<span>${E(x)}</span>`).join('')}</div><p style="margin-top:16px">Не всё сразу: каждый день новый небольшой шаг, а прошлые навыки коротко повторяются.</p>`, onNext: mark('i3') },
      i4: { html: `<div class="pt-fk">Что ты получишь</div><h2>${E(b.result || 'Рабочие привычки из книги')}</h2>${b.forWhom ? `<div class="pt-card"><b>Кому подойдёт</b><p>${E(b.forWhom)}</p></div>` : ''}<div class="pt-card"><b>Как это устроено</b><p>${dn}, один шаг в день, примерно ${allMin} мин. Пропуск не страшен: путь просто продолжится, а в трудный день хватит минимума.</p></div><div class="pt-fk" style="margin-top:18px">Что и когда внедряем</div>${roadmap}`, onNext: mark('i4') },
      i5: { c: true, html: `<div class="pt-fk">Письмо себе</div><h2>Дай обязательство</h2><p>Напиши несколько строк. Ты прочтёшь их в конце пути.</p>${(b.path.letter_prompts || []).map(q => `<div class="pt-q2">• ${E(q)}</div>`).join('')}<textarea class="cc-in" id="ptLetter" rows="6" maxlength="1000" placeholder="Дорогой я…">${E(bs.startLetter || '')}</textarea>`, next: 'Запечатать письмо', skip: 'Написать позже',
        onNext: (skipped) => { const t = (document.getElementById('ptLetter')?.value || '').trim(); if (!skipped && t) { bs.startLetter = t; toast('Письмо сохранено', 'success'); } ps.intro.i5 = true; this.save(b.id); } }
    };
    const order = PT_INTRO.map(x => x.id), from = Math.max(0, order.indexOf(startId)), list = [];
    order.slice(from).forEach(id => { if (id === 'i6') { if (hasDigest) list.push(...this.digestSteps(b, mark('i6'))); } else list.push(steps[id]); });
    this.flow(list, () => {
      try { fireConfetti(); } catch (e) {}
      const first = this.state(b).items.find(x => x.kind === 'node');
      if (first && first.s === 'cur') setTimeout(() => this.tap(first.id), 400);
    });
  },

  // ── Акт 3 ──
  nextBook(b) {
    const g = (typeof Coach !== 'undefined') ? Coach.goal() : '', goal = COACH_GOALS.find(x => x.id === g);
    const free = x => x.id !== b.id && !getBookState(x.id).start;
    return BOOKS.find(x => free(x) && this.isPath(x) && goal && goal.cats.includes(x.category)) || BOOKS.find(x => free(x) && this.isPath(x) && x.category === b.category) || BOOKS.find(x => free(x) && this.isPath(x)) || null;
  },
  finaleFlow() {
    const b = this.cur(); if (!b) return; const bs = getBookState(b.id), ps = this.st(b), E = s => this.esc(s), fin = b.path.finale || {};
    const days = Object.values(bs.days || {}), pr = days.reduce((s, r) => s + ((r.practices || []).length), 0), xp = days.reduce((s, r) => s + (r.earnedXP || 0) + (r.closed ? 50 : 0), 0);
    const qs = (fin.questions && fin.questions.length) ? fin.questions : ['Что изменилось за этот путь?', 'Какие практики я оставляю?', 'Что я сделаю, если пропущу день?'];
    const nb = this.nextBook(b);
    const steps = [
      { html: `<div class="pt-big">🏁</div><div class="pt-fk">Финал</div><h2>Ты прошёл путь</h2><div class="pt-stats"><div><b>${this.state(b).nodes.filter(x => x.done).length}</b><span>узлов</span></div><div><b>${pr}</b><span>практик</span></div><div><b>${xp}</b><span>XP</span></div></div><p>Это не конец: теперь ты знаешь, что работает именно для тебя.</p>` },
      { html: `<div class="pt-fk">Твоё письмо себе</div><h2>Что ты обещал в начале</h2>${bs.startLetter ? `<div class="pt-card" style="white-space:pre-wrap"><p>${E(bs.startLetter)}</p></div>` : '<p>В начале пути письмо не писалось. Ничего страшного: вернись к своему «зачем» сейчас.</p>'}` },
      { html: `<div class="pt-fk">Рефлексия</div><h2>Что осталось с тобой</h2>${qs.map((q, i) => `<label class="pt-q">${E(q)}<textarea class="cc-in" id="ptFin${i}" rows="3" maxlength="400"></textarea></label>`).join('')}`, next: 'Сохранить', skip: 'Пропустить',
        onNext: (skipped) => { ps.finale = ps.finale || {}; ps.finale.answers = skipped ? [] : qs.map((q, i) => ({ q, a: (document.getElementById('ptFin' + i)?.value || '').trim() })).filter(x => x.a); ps.finale.at = new Date().toISOString(); this.save(b.id); } },
      { html: `<div class="pt-big">👑</div><h2>${E(fin.closing || 'Ты прошёл путь. Оставь то, что работает, а в трудные дни возвращайся к минимуму.')}</h2>${nb ? `<div class="pt-card"><b>Следующий путь</b><p>${E(nb.title)} · ${E(nb.author || '')}</p></div>` : ''}`, next: nb ? 'Начать следующий путь' : 'Завершить', skip: nb ? 'Завершить без новой книги' : '',
        onNext: (skipped) => { ps.finale = ps.finale || {}; ps.finale.done = true; this.save(b.id); this._next = (!skipped && nb) ? nb.id : null; } }
    ];
    this.flow(steps, () => {
      try { fireConfetti(); } catch (e) {} haptic('success');
      if (this._next) { const id = this._next; this._next = null; this.hide(); setTimeout(() => this.startBook(id), 300); }
      else { this.hide(); try { showBookCompleteSuccess(b.id); } catch (e) { showTodayScreen(); } }
    });
  },

  // ── Старт книги и карточка на «Сегодня» ──
  pickStart() {
    const g = (typeof Coach !== 'undefined') ? Coach.goal() : '', goal = COACH_GOALS.find(x => x.id === g), ps = BOOKS.filter(b => this.isPath(b) && b.published !== false);
    return ps.find(b => goal && goal.cats.includes(b.category)) || ps.find(b => b.is_free) || ps[0] || null;
  },
  startBook(id) {
    const b = BOOKS.find(x => x.id === id); if (!b || !this.isPath(b)) return false;
    currentBook = b; state.lastBook = id; const bs = getBookState(id); if (!bs.start) bs.start = todayStr(); this.save(id);
    try { showTodayScreen(); } catch (e) {} setTimeout(() => this.open(), 250); return true;
  },
 
// [НАЧАЛО НОВОГО КОДА]
  card(b, bs, started) {
    const E = s => this.esc(s);
    if (started) {
      const isP = this.isPath(b);
      let pct = 0, metaText = '', actionBtn = '', actionLabel = '', actionTime = '';
      const stats = getGlobalStats();
      const streak = this.globalStreak();

      if (isP) {
        const S = this.state(b);
        const nd = S.nodes.filter(x => x.done).length;
        const intro = S.items.filter(x => x.kind === 'intro');
        const idn = intro.filter(x => x.done).length;
        pct = Math.round((nd + idn) / Math.max(1, S.total) * 100);
        metaText = idn < intro.length ? `Знакомство: ${idn} из ${intro.length}` : `Пройдено: ${nd} из ${S.nodes.length}`;
        
        const cur = S.items.find(x => x.s === 'cur');
        if (cur) {
          if (cur.kind === 'intro') {
            actionBtn = `<button class="d-btn-primary" style="height: 52px; font-size: 15px; letter-spacing: 0; text-transform: none; border-radius: 16px; font-weight: 800;" onclick="Path.tap('${cur.id}')">Продолжить знакомство <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:8px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>`;
            actionLabel = 'Знакомство';
            actionTime = '~5 мин';
          } else if (cur.kind === 'finale') {
            actionBtn = `<button class="d-btn-primary" style="height: 52px; font-size: 15px; letter-spacing: 0; text-transform: none; border-radius: 16px; font-weight: 800;" onclick="Path.tap('fin')">Открыть финал 👑</button>`;
            actionLabel = 'Финал';
            actionTime = '~5 мин';
            } else {
              const prem = !this.canPlay(b, cur);
              const mins = this.mins(b, cur.node.practices);
              actionLabel = `День ${cur.n}`;
              actionTime = `~${mins} мин`;
              
              if (cur.wait) {
                actionBtn = `<div style="text-align:center; padding: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; font-weight: 800; color: var(--d-text-dim); font-size: 14px;">На сегодня всё. Ждем завтра! 🌙</div>`;
              } else if (prem) {
                actionBtn = `<button class="d-btn-primary" style="height: 52px; font-size: 15px; letter-spacing: 0; text-transform: none; border-radius: 16px; font-weight: 800; background:var(--d-gold-grad)" onclick="showPremium()">Продолжить в Premium 👑</button>`;
              } else if (cur.light) {
                actionBtn = `<button class="d-btn-primary" style="height: 52px; font-size: 15px; letter-spacing: 0; text-transform: none; border-radius: 16px; font-weight: 800;" onclick="Path.doLight('${cur.id}')">Сделать минимум 🍃</button>`;
              } else {
                actionBtn = `<button class="d-btn-primary" style="height: 52px; font-size: 15px; letter-spacing: 0; text-transform: none; border-radius: 16px; font-weight: 800;" onclick="Path.open({sheet:true})">Продолжить путь <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:8px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>`;
              }
            }
        } else {
          actionBtn = `<button class="d-btn-primary" style="height: 52px; font-size: 15px; letter-spacing: 0; text-transform: none; border-radius: 16px; font-weight: 800;" onclick="Path.open()">Путь пройден 🎉</button>`;
          actionLabel = 'Готово';
          actionTime = '0 мин';
        }
      } else {
        const day = currentDay(b.id);
        const closed = (typeof countClosedDays === 'function') ? countClosedDays(b.id) : 0;
        pct = Math.round(Math.min(closed, b.days) / b.days * 100);
        metaText = `День ${day} из ${b.days}`;
        actionLabel = `День ${day}`;
        
        // Считаем время для классической практики (берем среднее или первой практики)
        let totalMins = 0;
        if (b.practices && b.practices.length) totalMins = Math.round(b.practices.reduce((s,p)=>s+(p.time||0),0)/60/b.practices.length);
        actionTime = `~${totalMins || 10} мин`;

        actionBtn = `<button class="d-btn-primary" style="height: 52px; font-size: 15px; letter-spacing: 0; text-transform: none; border-radius: 16px; font-weight: 800;" onclick="startRitual()">Начать практику <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:8px;"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>`;
      }

      return `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        
        <!-- КАРТОЧКА 1: Книга и прогресс -->
        <div class="d-card-glass" style="padding: 18px; display: flex; flex-direction: column; gap: 16px; background: linear-gradient(145deg, rgba(35,25,60,0.7) 0%, rgba(20,14,35,0.9) 100%); border: 1px solid rgba(124,92,255,0.25); border-radius: 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.3);">
            <div style="display: flex; gap: 16px; align-items: center; cursor: pointer;" onclick="openBookDetail('${E(b.id).replace(/'/g, '&#39;')}')">
                <div style="position: relative;">
                    <div style="position: absolute; inset: 0; background: var(--d-accent); filter: blur(25px); opacity: 0.4; border-radius: 12px;"></div>
                    <div style="position: relative; box-shadow: 0 6px 16px rgba(0,0,0,0.6); border-radius: 12px; overflow: hidden;">
                      ${this.cover(b, 64, 92, 12)}
                    </div>
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 10px; font-weight: 900; color: var(--d-accent-2); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                      <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--d-accent-2); box-shadow: 0 0 8px var(--d-accent-2);"></span> Текущая книга
                    </div>
                    <div style="font-size: 19px; font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 4px;">${E(b.title)}</div>
                    <div style="font-size: 13px; color: var(--d-text-dim); font-weight: 500;">${E(b.author || '')}</div>
                </div>
            </div>
            
            <div>
                <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 800; color: var(--d-text-dim); margin-bottom: 8px;">
                    <span>${metaText}</span>
                    <span style="color: #fff;">${pct}%</span>
                </div>
                <div style="margin: 0; height: 8px; background: rgba(0,0,0,0.4); border-radius: 4px; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);">
                  <div style="width:${pct}%; height: 100%; border-radius: 4px; background: linear-gradient(90deg, #7c5cff, #ff7a2a); box-shadow: 0 0 12px rgba(255,122,42,0.6); transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);"></div>
                </div>
            </div>
        </div>

        <!-- КАРТОЧКА 2: Статистика и Кнопка -->
        <div class="d-card-glass" style="padding: 16px; display: flex; flex-direction: column; gap: 14px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; box-shadow: 0 4px 16px rgba(0,0,0,0.2);">
            
            <!-- Метрики -->
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
                <div onclick="goToRating()" style="cursor: pointer; transition: transform 0.2s; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 10px 6px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);" onpointerdown="this.style.transform='scale(0.95)'" onpointerup="this.style.transform='scale(1)'" onpointerleave="this.style.transform='scale(1)'">
                    <div style="font-size: 16px; font-weight: 900; color: var(--d-warm); margin-bottom: 2px; display: flex; align-items: center; gap: 4px;">
                      ${getSvgIcon('flame', 16, 'var(--d-warm)')} ${streak}
                    </div>
                    <div style="font-size: 9px; color: var(--d-text-dim); text-transform: uppercase; font-weight: 800; letter-spacing: 0.5px;">Огонь</div>
                </div>
                
                <div onclick="showProfile()" style="cursor: pointer; transition: transform 0.2s; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 10px 6px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);" onpointerdown="this.style.transform='scale(0.95)'" onpointerup="this.style.transform='scale(1)'" onpointerleave="this.style.transform='scale(1)'">
                    <div style="font-size: 16px; font-weight: 900; color: var(--d-gold); margin-bottom: 2px; display: flex; align-items: center; gap: 4px;">
                      ${getSvgIcon('sparkles', 16, 'var(--d-gold)')} ${stats.totalXP}
                    </div>
                    <div style="font-size: 9px; color: var(--d-text-dim); text-transform: uppercase; font-weight: 800; letter-spacing: 0.5px;">Опыт</div>
                </div>

                <div onclick="showStatsScreen()" style="cursor: pointer; transition: transform 0.2s; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 10px 6px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);" onpointerdown="this.style.transform='scale(0.95)'" onpointerup="this.style.transform='scale(1)'" onpointerleave="this.style.transform='scale(1)'">
                    <div style="font-size: 16px; font-weight: 900; color: var(--d-accent-2); margin-bottom: 2px; display: flex; align-items: center; gap: 4px;">
                      ${getSvgIcon('clock', 16, 'var(--d-accent-2)')} ${actionTime}
                    </div>
                    <div style="font-size: 9px; color: var(--d-text-dim); text-transform: uppercase; font-weight: 800; letter-spacing: 0.5px;">Время</div>
                </div>
            </div>

            <!-- Кнопка действия -->
            ${actionBtn}
        </div>
      </div>`;
    }
    
// Если ни одна книга не начата (например, после сброса прогресса)
    // Берем "Магию утра" или дефолтную книгу и рисуем её как обычную карточку, но с кнопкой старта.
    if (!BOOKS.some(x => getBookState(x.id).start)) {
      const p = this.pickStart() || b; 
      if (!p) return '';
      
      const stats = getGlobalStats();
      const streak = this.globalStreak();
      
      return `
      <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
        <!-- Карточка 1: Книга -->
        <div class="d-card-glass" style="padding: 18px; display: flex; flex-direction: column; gap: 16px; background: linear-gradient(145deg, rgba(35,25,60,0.7) 0%, rgba(20,14,35,0.9) 100%); border: 1px solid rgba(124,92,255,0.25); border-radius: 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.3);">
            <div style="display: flex; gap: 16px; align-items: center; cursor: pointer;" onclick="openBookDetail('${E(p.id).replace(/'/g, '&#39;')}')">
                <div style="position: relative;">
                    <div style="position: absolute; inset: 0; background: var(--d-accent); filter: blur(25px); opacity: 0.4; border-radius: 12px;"></div>
                    <div style="position: relative; box-shadow: 0 6px 16px rgba(0,0,0,0.6); border-radius: 12px; overflow: hidden;">
                      ${this.cover(p, 64, 92, 12)}
                    </div>
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 10px; font-weight: 900; color: var(--d-accent-2); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                      <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--d-accent-2); box-shadow: 0 0 8px var(--d-accent-2);"></span> Рекомендуем начать
                    </div>
                    <div style="font-size: 19px; font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 4px;">${E(p.title)}</div>
                    <div style="font-size: 13px; color: var(--d-text-dim); font-weight: 500;">${E(p.author || '')}</div>
                </div>
            </div>
            
            <div>
                <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 800; color: var(--d-text-dim); margin-bottom: 8px;">
                    <span>Готов к старту</span>
                    <span style="color: #fff;">0%</span>
                </div>
                <div style="margin: 0; height: 8px; background: rgba(0,0,0,0.4); border-radius: 4px; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);">
                  <div style="width:0%; height: 100%; border-radius: 4px; background: linear-gradient(90deg, #7c5cff, #ff7a2a);"></div>
                </div>
            </div>
        </div>

        <!-- Карточка 2: Статистика и Кнопка -->
        <div class="d-card-glass" style="padding: 16px; display: flex; flex-direction: column; gap: 14px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; box-shadow: 0 4px 16px rgba(0,0,0,0.2);">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
                <div onclick="goToRating()" style="cursor: pointer; transition: transform 0.2s; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 10px 6px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);" onpointerdown="this.style.transform='scale(0.95)'" onpointerup="this.style.transform='scale(1)'" onpointerleave="this.style.transform='scale(1)'">
                    <div style="font-size: 16px; font-weight: 900; color: var(--d-warm); margin-bottom: 2px; display: flex; align-items: center; gap: 4px;">
                      ${getSvgIcon('flame', 16, 'var(--d-warm)')} ${streak}
                    </div>
                    <div style="font-size: 9px; color: var(--d-text-dim); text-transform: uppercase; font-weight: 800; letter-spacing: 0.5px;">Огонь</div>
                </div>
                
                <div onclick="showProfile()" style="cursor: pointer; transition: transform 0.2s; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 10px 6px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);" onpointerdown="this.style.transform='scale(0.95)'" onpointerup="this.style.transform='scale(1)'" onpointerleave="this.style.transform='scale(1)'">
                    <div style="font-size: 16px; font-weight: 900; color: var(--d-gold); margin-bottom: 2px; display: flex; align-items: center; gap: 4px;">
                      ${getSvgIcon('sparkles', 16, 'var(--d-gold)')} ${stats.totalXP}
                    </div>
                    <div style="font-size: 9px; color: var(--d-text-dim); text-transform: uppercase; font-weight: 800; letter-spacing: 0.5px;">Опыт</div>
                </div>

                <div onclick="showStatsScreen()" style="cursor: pointer; transition: transform 0.2s; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 10px 6px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);" onpointerdown="this.style.transform='scale(0.95)'" onpointerup="this.style.transform='scale(1)'" onpointerleave="this.style.transform='scale(1)'">
                    <div style="font-size: 16px; font-weight: 900; color: var(--d-accent-2); margin-bottom: 2px; display: flex; align-items: center; gap: 4px;">
                      ${getSvgIcon('clock', 16, 'var(--d-accent-2)')} ${actionTime}
                    </div>
                    <div style="font-size: 9px; color: var(--d-text-dim); text-transform: uppercase; font-weight: 800; letter-spacing: 0.5px;">Время</div>
                </div>
            </div>
            <button class="d-btn-primary" style="height: 52px; font-size: 15px; letter-spacing: 0; text-transform: none; border-radius: 16px; font-weight: 800;" onclick="Path.startBook('${E(p.id).replace(/'/g, '&#39;')}')">Начать путь <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:8px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
        </div>
      </div>`;
    }
    return '';
  },
// [КОНЕЦ НОВОГО КОДА]  

  // Текущая книга: обложка, название в две строки, прогресс по дням практики
  bookCard(b, bs) {
    const E = s => this.esc(s), isP = this.isPath(b); let pct, meta;
    if (isP) { const S = this.state(b), nd = S.nodes.filter(x => x.done).length, intro = S.items.filter(x => x.kind === 'intro'), idn = intro.filter(x => x.done).length; pct = Math.round(nd / Math.max(1, S.nodes.length) * 100); meta = idn < intro.length ? `Знакомство: ${idn} из ${intro.length}` : `Пройдено дней: ${nd} из ${S.nodes.length}`; }
    else { const day = currentDay(b.id), closed = (typeof countClosedDays === 'function') ? countClosedDays(b.id) : 0; pct = Math.round(Math.min(closed, b.days) / b.days * 100); meta = `День ${day} из ${b.days}`; }
    return `<button class="bk" onclick="openBookDetail('${E(b.id).replace(/'/g, '&#39;')}')">${this.cover(b, 66, 94, 14)}<span class="bk-tx"><i>Текущая книга</i><b>${E(b.title)}</b><em>${E(b.author || '')}</em><span class="bk-bar"><u style="width:${pct}%"></u></span><span class="bk-m"><span>${meta}</span><span>${pct}%</span></span></span></button>`;
  },
  // Для книг в классическом формате: та же карточка «Сегодня»
  classicAction(b, bs) {
    const day = currentDay(b.id), rec = bs.days[todayStr()] || {}, done = (rec.practices || []).length, total = (b.practices || []).length, need = Math.max(1, Math.ceil(total * .6)), closed = !!rec.closed || done >= need;
    return `<div class="ac"><div class="ac-top"><span class="ac-k">Сегодня</span>${this.chips()}</div><div class="ac-main"><div class="ac-gem">${this.ring(closed ? 'done' : 'cur', 96, String(day), Math.min(1, done / need))}</div><div class="ph-tx"><div class="ph-k">День ${day} из ${b.days}</div><div class="ph-t">${closed ? 'День закрыт' : 'Практики дня'}</div><div class="ph-f">${closed ? 'Огонь сохранён. Можно сделать ещё практику.' : `Выполнено ${done} из ${need}, чтобы закрыть день`}</div></div></div><button class="ph-cta${closed ? ' ghost' : ''}" onclick="showPracticeModeInfo('full')">${closed ? 'Ещё практика' : 'Приступить к практике'}</button></div>`;
  },
  decorate() {
    const fire = document.getElementById('cardFire'); if (fire) fire.textContent = this.globalStreak();
    const b = this.cur(); if (!b) return; const S = this.state(b);
    const t = document.getElementById('mpcCourseText'), bar = document.getElementById('mpcCourseBar'), dl = document.getElementById('mpcDaysLeft');
    if (t) t.textContent = `Путь: ${S.done} из ${S.total}`; if (bar) bar.style.width = Math.round(S.done / S.total * 100) + '%';
    if (dl) dl.textContent = S.nodes.filter(x => !x.done).length;
  }

};

// Подключение к существующим функциям (оригиналы вызываются как раньше)
// Подстраховка: completePracticeDone вызывает markPracticeDone(id) для одиночной практики; если функции нет, создаём её через markPracticeDoneForBook
if (typeof window.markPracticeDone !== 'function') window.markPracticeDone = function (id) { if (currentBook) markPracticeDoneForBook(currentBook.id, id); };
(function () {
  const wrap = (name, fn) => { const o = window[name]; if (typeof o !== 'function') return; window[name] = function () { return fn(o, this, arguments); }; };
  wrap('markPracticeDoneForBook', (o, t, a) => { const r = o.apply(t, a); try { Path.onPracticeDone(a[0], a[1]); } catch (e) { console.debug('[ANDGER] path hook', e); } return r; });
  wrap('markPracticeDone', (o, t, a) => { const r = o.apply(t, a); try { if (currentBook) Path.onPracticeDone(currentBook.id, a[0]); } catch (e) { console.debug('[ANDGER] path hook', e); } return r; });
  wrap('finishRitual', (o, t, a) => { if (Path.active || Path.fresh) { try { Path.afterPractice(); return; } catch (e) { console.debug('[ANDGER] path finish', e); } } return o.apply(t, a); });
  wrap('openPractice', (o, t, a) => { if (!Path._starting) Path.active = null; return o.apply(t, a); });
  wrap('startRitual', (o, t, a) => { if (Path.cur()) { Path.open(); return; } Path.active = null; return o.apply(t, a); });
  wrap('startBookFromDetail', (o, t, a) => { const b = BOOKS.find(x => x.id === bookDetailId); if (b && Path.isPath(b)) { Path.startBook(b.id); return; } return o.apply(t, a); });
  wrap('calcStreak', (o, t, a) => { try { return Path.globalStreak(); } catch (e) { return o.apply(t, a); } });
  wrap('renderToday', (o, t, a) => { const r = o.apply(t, a); try { Path.decorate(); } catch (e) { console.debug('[ANDGER] path decorate', e); } return r; });
})();

// ═══ ГОЛОСА ОЗВУЧКИ: женские, подбираются по виду практики (режим «Автоматически») ═══
const FEMALE_VOICES = ['alena', 'jane', 'omazh'];
function autoVoiceFor(p) {
  const t = ((p && ((p.title || '') + ' ' + (p.sub || '') + ' ' + (p.ico || ''))) || '').toLowerCase();
  if (/зарядк|движен|спорт|тренир|приседан|растяж|энерг|бодр|аффирм|мотив|\bzap\b|flame/.test(t)) return { voice: 'jane', emotion: 'good', speed: 1.0 };   // бодрые и энергичные
  if (/планир|цел[ьи]|приоритет|дисциплин|стратег|распис|план на|\btarget\b/.test(t)) return { voice: 'omazh', emotion: 'neutral', speed: 0.95 };           // собранные, деловые
  return { voice: 'alena', emotion: 'neutral', speed: 0.9 };                                                                                                   // тишина, дыхание, визуализация, чтение, письмо, вечер
}
function safeEmotion(voice, emo) {
  const ok = { alena: ['neutral', 'good'], jane: ['neutral', 'good', 'evil'], omazh: ['neutral', 'evil'] }, e = emo || 'neutral';
  return ok[voice] ? (ok[voice].includes(e) ? e : 'neutral') : e;
}
