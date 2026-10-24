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
};

// ─── БАЗА СТИЛЬНЫХ АВАТАРОК ───
const AVATAR_ICONS = {
  'smile': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>',
  'ghost': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>',
  'rocket': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
  'brain': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>',
  'leaf': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>',
  'flame': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
  'diamond': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>',
  'paw': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg>',
  'coffee': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" y1="2" x2="6" y2="4"></line><line x1="10" y1="2" x2="10" y2="4"></line><line x1="14" y1="2" x2="14" y2="4"></line></svg>',
  'compass': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
  'shield': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
  'crown': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"></path></svg>',
  'moon': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
  'sun': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
  'star': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  'heart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'
};

// Функция для отрисовки аватарки (поддерживает старые эмодзи)
function getAvatarHtml(avatar, size = 24) {
  // Если аватарка — это старый эмодзи (например 👤), показываем его как текст
  if (!AVATAR_ICONS[avatar] && avatar && avatar.length <= 4) {
    return `<span style="font-size:${size * 0.8}px; line-height:1;">${avatar}</span>`;
  }
  // Берем иконку. Если её нет, берем user. Если и его нет, ставим эмодзи
  const svg = AVATAR_ICONS[avatar] || AVATAR_ICONS['user'] || '👤';
  
  if (typeof svg === 'string' && svg.includes('<svg')) {
    return svg.replace('viewBox="0 0 24 24"', `viewBox="0 0 24 24" width="${size}" height="${size}"`);
  }
  return `<span style="font-size:${size * 0.8}px; line-height:1;">${svg}</span>`;
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
  const textColors = ['#a78bfa', '#ff9a56', '#3ecf8e', '#ffb800', '#4facfe', '#f093fb'];
  
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
  const style = getSmartColor(seedString || emoji);
  const iconSize = size === 72 ? 48 : 24;
  let content = '';

  // 1. Эмодзи
  if (emoji && emoji.length <= 4 && !/[a-zA-Z]/.test(emoji)) {
    content = `<span class="emoji-text" style="font-size:${iconSize}px; line-height:1;">${emoji}</span>`;
  } 
  // 2. Известная SVG иконка
  else if (SVG_ICONS[emoji]) {
    content = getSvgIcon(emoji, iconSize, style.color);
  } 
  // 3. Неизвестный текст (галлюцинация ИИ)
  else {
    const fallbacks = ['book', 'sparkles', 'layout', 'brain', 'compass'];
    const hash = Math.abs((seedString || emoji || '').length);
    const fallbackIcon = fallbacks[hash % fallbacks.length];
    content = getSvgIcon(fallbackIcon, iconSize, style.color);
  }

  // Оборачиваем в красивый контейнер
  const extraClass = size === 72 ? 'large' : '';
  return `
    <div class="smart-icon-wrap ${extraClass}" style="background: ${style.bg}; border: 1px solid ${style.color}40; box-shadow: 0 4px 12px ${style.color}15;">
      ${content}
    </div>
  `;
}

// Глобальная функция для подсчета опыта и уровня
function getGlobalStats() {
  let totalXP = 0;
  BOOKS.forEach(bb => {
    const bbs = getBookState(bb.id);
    Object.values(bbs.days).forEach(rec => {
      if(rec.practices) totalXP += rec.practices.length * 10;
      if(rec.closed) totalXP += 50;
    });
  });

  let lvl = 1, lvlName = 'Новичок', lvlIco = '🌱', nextLvlXP = 100, prevLvlXP = 0;
  if (totalXP >= 2000) { lvl = 6; lvlName = 'Легенда'; lvlIco = '👑'; nextLvlXP = 2000; prevLvlXP = 2000; }
  else if (totalXP >= 1000) { lvl = 5; lvlName = 'Мастер'; lvlIco = '🏆'; nextLvlXP = 2000; prevLvlXP = 1000; }
  else if (totalXP >= 600) { lvl = 4; lvlName = 'Опытный'; lvlIco = '💎'; nextLvlXP = 1000; prevLvlXP = 600; }
  else if (totalXP >= 300) { lvl = 3; lvlName = 'Практик'; lvlIco = '🔥'; nextLvlXP = 600; prevLvlXP = 300; }
  else if (totalXP >= 100) { lvl = 2; lvlName = 'Ученик'; lvlIco = '🌿'; nextLvlXP = 300; prevLvlXP = 100; }

  const xpInCurrentLvl = totalXP - prevLvlXP;
  const xpNeededForNext = nextLvlXP - prevLvlXP;
  let xpPct = Math.min(100, Math.round((xpInCurrentLvl / xpNeededForNext) * 100)) || 100;
  if(lvl === 6) xpPct = 100;

  return { totalXP, lvl, lvlName, lvlIco, xpInCurrentLvl, xpNeededForNext, xpPct };
}

const DEV_WHATSAPP = '79124325556';
const DEV_TELEGRAM = 'Gerasimov_And';

// ─── ГЛОБАЛЬНЫЕ ДАННЫЕ ───
let moodWeekOffset = 0; // 0 - текущая неделя, -1 - прошлая, 1 - следующая
let calendarWeekOffset = 0; // 0 - текущая неделя, -1 - прошлая, 1 - следующая
let BOOKS=[], currentBook=null, currentPractice=null, ritualQueue=[], ritualIndex=0;
let timerInterval=null, timerRemaining=0, timerState='idle';
let user=null, state={}, onbIndex=0, statsBookId=null;
let musicAudio=null, ttsAudio=null, syncTimeout=null, isAdminFlag=false;
let completeCallback=null, adminAllUsers=[], adminAllBooks=[];
let bookDetailId=null, customRitual=[];
let bookDetailSource='lib';
let currentScreen='today';
let currentDialogUserId=null, currentDialogUser=null;
let feedChannel=null, dialogChannel=null, notificationsChannel=null;
let libFilter='all';
let deferredInstallPrompt=null;
let notifications=[];
let globalQuotes=[];

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
      {q:'Что такое «закрыть день»?', a:'Если ты сделал(а) минимум 60% практик из книги — день считается закрытым. Это +1 к огню.'},
      {q:'Что такое «огонь»?', a:'Это твоя серия — сколько дней подряд ты закрывал(а) дни. Если пропустил день — серия прерывается.'},
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
  return (s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function plural(n,one,few,many){
  const m10=n%10,m100=n%100;
  if(m10===1&&m100!==11)return one;
  if(m10>=2&&m10<=4&&(m100<10||m100>=20))return few;
  return many;
}
function timeAgo(iso){
  const s=Math.floor((Date.now()-new Date(iso).getTime())/1000);
  if(s<60)return 'только что';
  if(s<3600)return Math.floor(s/60)+' мин назад';
  if(s<86400)return Math.floor(s/3600)+' ч назад';
  return Math.floor(s/86400)+' дн назад';
}
function formatTime(sec){
  const m=Math.floor(sec/60),s=sec%60;
  return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}
function updateBottomNav(activePage) {
  const nav = document.getElementById('bottomNav');
  if(nav) nav.classList.remove('hidden');
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
document.addEventListener('click',(e)=>{
  const btn=e.target.closest('button, .book-row, .nav-btn, .hero-play, .action-btn-compact, .ach-card, .admin-item, .tab-pill, .mood-emoji, .lib-filter, .settings-row, .toggle-row, .fp-action');
  if(btn){playClick();attachRipple(btn,e);}
},true);

// ─── МУЗЫКА ───
// Разделяем музыку по типам практик
const MUSIC_TRACKS = {
  default: ['meditation.mp3'],
  sport: ['energy.mp3'], 
  read: ['focus.mp3'], 
  silence: ['meditation.mp3'] 
};
let currentTrackIdx = 0;
let currentPlaylist = [];

function startMusic(practiceId = 'default'){
  if(state.soundMode !== 'sound') return;
  if(!musicAudio){
    musicAudio=new Audio();
    musicAudio.volume=0;
    musicAudio.addEventListener('ended',nextTrack);
  }
  
  // Умный выбор плейлиста по ключевым словам в ID практики
  const pid = (practiceId || '').toLowerCase();
  
  if (pid.includes('sport') || pid.includes('zaryadka') || pid.includes('action')) {
    currentPlaylist = MUSIC_TRACKS.sport;
  } else if (pid.includes('read') || pid.includes('journal')) {
    currentPlaylist = MUSIC_TRACKS.read;
  } else {
    // Для всего остального (тишина, аффирмации, визуализация, дыхание) — медитация
    currentPlaylist = MUSIC_TRACKS.silence; 
  }

  // Новый трек при каждом запуске (если музыка не играет)
  if(!musicAudio.src || musicAudio.paused){
    let newIdx;
    do { newIdx = Math.floor(Math.random() * currentPlaylist.length) }
    while (currentPlaylist.length > 1 && newIdx === currentTrackIdx);
    
    currentTrackIdx = newIdx;
    musicAudio.src = currentPlaylist[currentTrackIdx];
    musicAudio.currentTime = 0;
  }
  musicAudio.play().then(() => {
      // Плавно нарастаем до 0.2
      fadeAudio(musicAudio, musicAudio.volume, 0.2, 1500);
    }).catch((e) => {
      console.log('Ошибка воспроизведения (нужно нажать на экран):', e);
    });
}

function nextTrack(){
  if(!musicAudio) return;
  if(!currentPlaylist.length) currentPlaylist = MUSIC_TRACKS.default;
  
  currentTrackIdx = (currentTrackIdx + 1) % currentPlaylist.length;
  musicAudio.src = currentPlaylist[currentTrackIdx];
  musicAudio.volume = 0.2;
  musicAudio.play().catch(()=>{});
}
function stopMusic(){
  if(!musicAudio) return;
  try {
    musicAudio.pause();
    musicAudio.currentTime = 0;
    musicAudio.volume = 0;
  } catch(e) {}
}
function fadeAudio(audio,from,to,duration,onEnd){
  const start=performance.now();
  function tick(now){
    const t=Math.min((now-start)/duration,1);
    audio.volume=Math.max(0,Math.min(1,from+(to-from)*t));
    if(t<1)requestAnimationFrame(tick);else if(onEnd)onEnd();
  }
  requestAnimationFrame(tick);
}

// ─── ЗВУКИ ───
let audioCtx=null;
function getCtx(){
  if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return null}}
  return audioCtx;
}
function playTone(freq,duration,type,vol){
  if(state.soundOn===false)return;
  const ctx=getCtx();if(!ctx)return;
  try{
    const osc=ctx.createOscillator(),gain=ctx.createGain();
    osc.type=type||'sine';osc.frequency.value=freq;
    gain.gain.setValueAtTime(vol||0.15,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+duration);
    osc.connect(gain);gain.connect(ctx.destination);
    osc.start();osc.stop(ctx.currentTime+duration);
  }catch(e){}
}
function playClick() {
  // Будим AudioContext на iOS при первом клике
  const ctx = getCtx();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume();
  }
  
  if(!state.soundOn) return;
  playTone(800,0.04,'sine',0.06);
  if(navigator.vibrate) navigator.vibrate(15);
}

function playSuccess() {
  if(!state.soundOn) return;
  playTone(600,0.1,'sine',0.1);
  setTimeout(()=>playTone(900,0.15,'sine',0.1),100);
  if(navigator.vibrate) navigator.vibrate([30, 30, 30]);
}

function playError() {
  if(!state.soundOn) return;
  playTone(200,0.15,'square',0.08);
  if(navigator.vibrate) navigator.vibrate([50,30,50]);
}

function playCheck() {
  if(!state.soundOn) return;
  playTone(500,0.08,'sine',0.1);
  setTimeout(()=>playTone(750,0.12,'sine',0.1),60);
  if(navigator.vibrate) navigator.vibrate(80);
}
function playFanfare() {
  if(!state.soundOn) return;
  playTone(523, 0.1, 'sine', 0.1); // До
  setTimeout(()=>playTone(659, 0.1, 'sine', 0.1), 100); // Ми
  setTimeout(()=>playTone(784, 0.2, 'sine', 0.1), 200); // Соль
  setTimeout(()=>playTone(1046, 0.3, 'sine', 0.1), 350); // До (октава выше)
  if(navigator.vibrate) navigator.vibrate([50, 50, 100]);
}

// ─── TOAST ───
function toast(msg,type='success'){
  const d=document.createElement('div');
  d.className='toast '+type;d.textContent=msg;
  document.body.appendChild(d);
  setTimeout(()=>d.remove(),2500);
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
  }catch(e){}
  document.body.removeChild(ta);
}

// ─── SPLASH ───
function setSplashProgress(pct){
  const el=document.getElementById('ldProgress');
  if(el)el.style.width=pct+'%';
}
function hideLoader(){
  const l=document.getElementById('appLoader');
  if(l){l.classList.add('hide');setTimeout(()=>l.remove(),500)}
}
function randomSplashQuote(){
  let allQuotes=globalQuotes.length?globalQuotes:BOOKS.flatMap(b=>b.quotes||[]);
  if(!allQuotes.length)return;
  const q=allQuotes[Math.floor(Math.random()*allQuotes.length)];
  const qEl=document.getElementById('ldQuote');
  const aEl=document.getElementById('ldQuoteAuthor');
  if(qEl)qEl.childNodes[0].nodeValue=`«${q.text}»`;
  if(qEl && appTexts['splash_quote']) qEl.childNodes[0].nodeValue = appTexts['splash_quote'];
  if(aEl && appTexts['splash_author']) aEl.textContent = appTexts['splash_author'];
}

// ─── ИНИЦИАЛИЗАЦИЯ ───
window.addEventListener('DOMContentLoaded', async()=>{
  const t0 = performance.now();
  console.log('🚀 ANDGER init starting');

  // ПРЕДОХРАНИТЕЛЬ: через 12 секунд принудительно спрячем заставку, что бы ни случилось
  const safetyTimer = setTimeout(() => {
    console.warn('⚠️ SAFETY: forcing loader hide after 12s');
    try { hideLoader(); } catch(e) { console.error(e); }
    // Если ни один экран не показан — покажем авторизацию
    const anyVisible = document.querySelector('#authScreen:not(.hidden), #todayScreen:not(.hidden), #libScreen:not(.hidden), #onbScreen:not(.hidden), #welcomeScreen:not(.hidden)');
    if (!anyVisible) {
      try { showAuth(); } catch(e) { console.error(e); }
    }
  }, 12000);

  try {
    setSplashProgress(10);
    BOOKS = (typeof BOOK_REGISTRY !== 'undefined' ? BOOK_REGISTRY : []).filter(Boolean);
    console.log('📚 BOOKS loaded:', BOOKS.length);
    try { randomSplashQuote(); } catch(e) { console.warn('Quote error:', e); }
    setSplashProgress(30);

    console.log('🔑 Getting session...');
    const { data: { session } } = await sb.auth.getSession();
    console.log('✅ Session:', session ? 'exists' : 'null');

    if (session) {
      console.log('👤 handleSession starting...');
      try {
        // Даем 5 секунд на загрузку. Если сервер тупит — идем дальше
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000));
        await Promise.race([handleSession(session), timeoutPromise]);
        console.log('✅ handleSession completed');
      } catch(e) {
        console.error('❌ Ошибка или тайм-аут загрузки:', e.message);
        // Принудительно показываем экран, чтобы не было пустоты
        if(!state.onboarded) {
          showOnboarding();
        } else if (BOOKS.length > 0) {
          currentBook = BOOKS[0];
          showTodayScreen();
        } else {
          showLibrary();
        }
      }
      await waitSplash(t0);
      hideLoader();
      console.log('✅ Splash hidden');
    } else {
      await waitSplash(t0);
      hideLoader();
      showAuth();
      console.log('✅ Auth shown');
    }
  } catch(e) {
    console.error('❌ Init error:', e);
    await waitSplash(t0).catch(()=>{});
    hideLoader();
    try { showAuth(); } catch(err) { console.error(err); }
  } finally {
    clearTimeout(safetyTimer);
    console.log('🏁 Init done in', Math.round(performance.now() - t0), 'ms');
  }
});

async function waitSplash(t0){
  const minTime = 6000; // Ждем ровно 6 секунд с момента старта
  const elapsed = performance.now() - t0;
  const remaining = Math.max(0, minTime - elapsed); // Сколько секунд осталось ждать
  
  if (remaining > 0) {
    // Берем текущий процент заполнения (на котором остановилась загрузка)
    const currentEl = document.getElementById('ldProgress');
    const startPct = currentEl ? (parseFloat(currentEl.style.width) || 10) : 10;
    
    // Плавно доливаем оставшийся процент
    const steps = 40; 
    const stepTime = remaining / steps;
    
    for (let i = 1; i <= steps; i++) {
      const pct = startPct + ((100 - startPct) * (i / steps));
      setSplashProgress(pct);
      await new Promise(r => setTimeout(r, stepTime));
    }
  } else {
    // Если загрузка уже заняла больше 6 секунд, просто доводим до 100
    setSplashProgress(100);
  }
}

sb.auth.onAuthStateChange((event)=>{
  if(event==='SIGNED_OUT'){
    user=null;state={};currentBook=null;
    if(feedChannel)sb.removeChannel(feedChannel);
    if(dialogChannel)sb.removeChannel(dialogChannel);
    if(notificationsChannel)sb.removeChannel(notificationsChannel);
    hideLoader();showAuth();
  }
});

async function handleSession(session){
  const email=session.user.email;
  const phone=email.replace('@vnedri.app','');
  user={id:session.user.id,phone,email,name:session.user.user_metadata?.name||'Друг'};
    sb.from('profiles').update({phone}).eq('id',user.id).then(()=>{});
  setSplashProgress(50);

  const{data:profile}=await sb.from('profiles').select('*').eq('id',user.id).single();
  if(profile){
    if(profile.blocked){
      hideLoader();
      alert('🚫 Аккаунт заблокирован.\n\nПричина: '+(profile.blocked_reason||'Нарушение правил'));
      await sb.auth.signOut();return;
    }
    user.name=profile.name||user.name;
    user.lastName=profile.last_name||'';
    user.sub_until = profile.sub_until || null;
    state.avatar=profile.avatar||'👤';
    // Поддерживаем старую настройку и добавляем новую
    state.soundMode = profile.sound_mode || (profile.sound_on !== false ? 'sound' : 'off');
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
  }else{
    state.soundOn=true;state.avatar='👤';state.theme='dark';
  }
  setSplashProgress(70);
  await loadAppSettings();
  await loadProgress();
  if(!state.migrated)await migrateLocalData();
  sb.from('profiles').update({last_seen:new Date().toISOString()}).eq('id',user.id).then(()=>{});

    await loadNotifications();
  await loadBooksFromSupabase();
  await loadQuotes();
  await loadAppTexts();
  setSplashProgress(90);

  applyTheme();
  subscribeNotifications();

  // ─── СЕРДЦЕБИЕНИЕ (ОБНОВЛЕНИЕ СТАТУСА "БЫЛ(А) В СЕТИ") ───
  setInterval(() => {
    if(user && user.id) {
      sb.from('profiles').update({last_seen: new Date().toISOString()}).eq('id',user.id).then(()=>{});
    }
  }, 60000); // 60000 мс = 1 минута

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
}

async function loadAppSettings(){
  try{
    const{data}=await sb.from('app_settings').select('*').eq('key','book_access_mode').maybeSingle();
    if(data&&data.value){
      bookAccessMode=(typeof data.value==='string')?data.value.replace(/"/g,''):data.value;
    }
  }catch(e){}
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
  } catch(e) { console.log('Ошибка загрузки текстов', e); }
}

async function loadBooksFromSupabase(){
  try{
    const{data}=await sb.from('books').select('*').eq('published',true);
    if(!data||!data.length)return;
    data.forEach(sbBook=>{
      const idx=BOOKS.findIndex(b=>b.id===sbBook.id);
      const normalized={
        id:sbBook.id,emoji:sbBook.emoji,title:sbBook.title,author:sbBook.author,
        days:sbBook.days,about:sbBook.about,method:sbBook.method||[],
        authorBio:sbBook.author_bio,forWhom:sbBook.for_whom,result:sbBook.result,
        category: sbBook.category || 'Разное', // <--- ДОБАВИЛИ ЭТУ СТРОКУ
        practices:sbBook.practices||[],quotes:sbBook.quotes||[],
        _fromSupabase:true
      };
      if(idx>=0)BOOKS[idx]={...BOOKS[idx],...normalized};
      else BOOKS.push(normalized);
    });
  }catch(e){}
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
  }catch(e){}
}

async function loadProgress(){
  // 1. Сначала берем данные из памяти телефона (LocalStorage) — это мгновенно
  try {
    const localState = localStorage.getItem('andger_current_state');
    if (localState) {
      const parsed = JSON.parse(localState);
      if (parsed.books) state.books = parsed.books;
    }
  } catch(e) {}

  // 2. Пытаемся обновить с сервера, но ждем не больше 3 секунд
  try {
    const fetchPromise = sb.from('progress').select('*').eq('user_id',user.id);
    const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 3000));
    
    const {data, error} = await Promise.race([fetchPromise, timeoutPromise]);
    
    if (!error && data && data.length > 0) {
      state.books = {};
      data.forEach(row=>{
        state.books[row.book_id] = row.data || {start:null, days:{}, journal:{}};
      });
    }
  } catch(e) {
    console.log('Сервер не ответил за 3 секунды, используем локальные данные');
  }
  
  if(state.soundOn===undefined) state.soundOn=true;
  if(state.avatar===undefined) state.avatar='👤';
  if(!state.books) state.books = {};
}

async function syncProgress(){
  if(!user||!state.books)return;
  const rows=Object.keys(state.books).map(bookId=>({
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
function saveState(){
  // 1. Сразу сохраняем в память телефона (LocalStorage) — это работает без интернета
  try {
    localStorage.setItem('andger_current_state', JSON.stringify(state));
  } catch(e) { console.log('LocalStorage error', e); }

  // 2. Отправляем на сервер с задержкой
  if(syncTimeout)clearTimeout(syncTimeout);
  syncTimeout=setTimeout(()=>syncProgress(),1500);
}

// ─── ЭКРАНЫ ───
function hideAll(){
  // Отключаем слушатели чатов, чтобы не грузить телефон и базу данных
  if(feedChannel) { sb.removeChannel(feedChannel); feedChannel = null; }
  if(dialogChannel) { sb.removeChannel(dialogChannel); dialogChannel = null; }

  ['authScreen','onbScreen','welcomeScreen','libScreen','todayScreen',
   'statsScreen','journalScreen','communityScreen','profileScreen',
   'publicProfileScreen','adminScreen','bookDetailScreen','ritualBuilderScreen',
   'ritualScreen','practiceScreen','completeOverlay','settingsScreen',
   'helpScreen','notificationsScreen','dialogScreen','bookEditorScreen'
  ].forEach(id=>{
    const el=document.getElementById(id);if(el)el.classList.add('hidden');
  });
    const bn=document.getElementById('bottomNav');
  if(bn) { bn.classList.add('hidden'); bn.style.display = ''; }
  const fi=document.getElementById('feedInputWrap');if(fi)fi.style.display='none';
  const di=document.getElementById('dialogInputWrap');if(di)di.style.display='none';
  // Скрываем кнопку быстрой заметки при переходе на другие экраны
  const fab = document.getElementById('quickNoteFab');
  if (fab) fab.style.display = 'none';
  
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
  document.getElementById('welcomeBookIco').textContent=b.emoji;
  document.getElementById('welcomeBookTitle').textContent=b.title;
  document.getElementById('welcomeBookAuthor').textContent=b.author+' · '+b.days+' дней';
  document.getElementById('welcomeScreen').classList.remove('hidden');
}
function startFirstBook(){const b=BOOKS[0];if(!b)return;openBookDetail(b.id)}
function skipWelcome(){showLibrary()}

function showLibrary(){
  console.log('Открываем библиотеку...'); 
  currentScreen='lib';
  hideAll();
  document.getElementById('libScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('lib');
  const fab = document.getElementById('quickNoteFab');
  if (fab) fab.style.display = 'flex';
  renderLibrary();updateSoundUI();
}
function showTodayScreen(){
  currentScreen='today';
  if(!currentBook)return smartHome();
  state.lastBook=currentBook.id;saveState();
  hideAll();
  document.getElementById('todayScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('today');
  applyShields(currentBook.id); // <--- ПРОВЕРКА ЗАМОРОЗОК
  updateBottomNav('today');
  applyShields(currentBook.id); // <--- ПРОВЕРКА ЗАМОРОЗОК
  
  // Показываем кнопку быстрой заметки только на Главной
  const fab = document.getElementById('quickNoteFab');
  if (fab) fab.style.display = 'flex';

  renderToday();updateSoundUI();checkInstallBanner();updateNotifBadge();
}
function showStatsScreen(){
  currentScreen='stats';
  if(!currentBook&&BOOKS.length)currentBook=BOOKS[0];
  if(!currentBook)return showLibrary();
  statsBookId=state.lastBook||currentBook.id;
  hideAll();
  document.getElementById('statsScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('stats');
  const fab = document.getElementById('quickNoteFab');
  if (fab) fab.style.display = 'flex';
  renderStatsScreen();updateSoundUI();
}
function showJournalScreen(){
  hideAll();
  document.getElementById('journalScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('journal');
  
  // Показываем кнопку быстрой заметки в Дневнике
  const fab = document.getElementById('quickNoteFab');
  if (fab) fab.style.display = 'flex';

  // --- ДОБАВЛЯЕМ ИМЯ ПОЛЬЗОВАТЕЛЯ ---
  const nameEl = document.getElementById('journalBookTitle');
  if (nameEl) nameEl.textContent = user.name || 'Друг';
  // ----------------------------------
  renderJournal();updateSoundUI();
}
async function showCommunityScreen(){
  hideAll();
  document.getElementById('communityScreen').classList.remove('hidden');
  document.getElementById('bottomNav').classList.remove('hidden');
  updateBottomNav('community');
  document.getElementById('communityAvatar').innerHTML=getAvatarHtml(state.avatar, 24);
  document.getElementById('feedInputWrap').style.display='flex';
  updateSoundUI();
  await loadFeed();
  subscribeFeed();
}
function showRitualBuilderScreen(){
  hideAll();
  document.getElementById('ritualBuilderScreen').classList.remove('hidden');
  renderRitualBuilder();updateSoundUI();
}
function backFromRitualBuilder(){smartHome()}

let profilePrev='today';
function showProfile(){
  try {
    console.log('Открываем профиль...'); // Для отладки
    const active=document.querySelector('.nav-btn.on');
    if(active) profilePrev=active.dataset.page||'today';
    
    hideAll();
    document.getElementById('profileScreen').classList.remove('hidden');
    document.getElementById('bottomNav').classList.remove('hidden');
    
    renderProfile();
    checkAdminAccess();
    updateSoundUI();
    
    window.scrollTo(0,0); // <--- ДОБАВИЛИ ЭТО: принудительно скроллим наверх
    
    console.log('✅ showProfile done');
    setTimeout(() => window.scrollTo(0, 0), 10);
  } catch(e) {
    console.error('❌ Profile Error:', e);
    alert('Ошибка профиля: ' + e.message);
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
function backFromStats(){smartHome()}
function backFromJournal(){smartHome()}
function backFromPublicProfile(){
  // Возвращаем кнопки на место для своего профиля
  document.querySelector('#publicProfileScreen .btn').style.display = '';
  document.querySelector('#publicProfileScreen .btn-ghost').style.display = '';

  if (profileSource === 'chat') {
    document.getElementById('publicProfileScreen').classList.add('hidden');
    document.getElementById('dialogScreen').classList.remove('hidden');
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
  showCustomConfirm('Очистить уведомления?', 'Все уведомления будут удалены навсегда.', async () => {
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
function backFromDialog(){showCommunityScreen()}
function backFromCommunity(){ smartHome(); }

function navTo(page,el){
  if(page==='lib')showLibrary();
  else if(page==='today')smartHome();
  else if(page==='stats')showStatsScreen();
  else if(page==='community')showCommunityScreen();  
  else if(page==='journal')showJournalScreen(); // <--- ДОБАВИЛИ ЭТУ СТРОКУ
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
  // 1. Админу доступно всё
  if(isAdmin()) return true;

  // 2. Если есть активная подписка — доступно всё
  if(user && user.sub_until && new Date(user.sub_until) > new Date()) return true;
  
  // 3. Индивидуальный доступ (если админ выдал книгу вручную)
  const access = state.bookAccess || [];
  if (access.includes(id)) return true;

  // 4. ФРИМИУМ ЛОГИКА:
  const bookIndex = BOOKS.findIndex(b => b.id === id);
  
  // Первые 3 книги (индексы 0, 1, 2) доступны всем всегда
  if (bookIndex >= 0 && bookIndex < 3) return true;

  // Считаем, сколько книг пользователь полностью прошел
  let completedBooks = 0;
  BOOKS.forEach(b => {
    if (countClosedDays(b.id) >= b.days) completedBooks++;
  });

  // Если индекс книги меньше (3 + количество пройденных), то она открыта.
  // Например, прошел 1 книгу -> открывается 4-я (индекс 3).
  if (bookIndex >= 0 && bookIndex < (3 + completedBooks)) return true;

  // Всё остальное закрыто
  return false;
}

function toggleSound(){
  // Синхронизируем обе переменные состояния
  const newState = state.soundMode !== 'sound';
  state.soundMode = newState ? 'sound' : 'off';
  state.soundOn = newState;
  
  saveState();
  updateSoundUI();
  
  sb.from('profiles').update({ sound_on: state.soundOn, sound_mode: state.soundMode }).eq('id',user.id).then(()=>{});

  const inR = !document.getElementById('ritualScreen').classList.contains('hidden');
  const inP = !document.getElementById('practiceScreen').classList.contains('hidden');
  
  if (state.soundMode === 'sound') {
    playClick();
    if(inR) startMusic(ritualQueue[ritualIndex]?.id || 'default');
    else if(inP) startMusic(currentPractice?.id || 'default');
  } else {
    stopMusic(); 
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); 
    }
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
  btn.disabled=true;btn.textContent='Загрузка...';
  try{
    if(authMode==='reg'){
        const nameParts = nameInp.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' '); // Все, что после первого пробела
        const{data,error}=await sb.auth.signUp({email,password:pass,options:{data:{name:firstName, last_name:lastName}}});
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
      // Добавляем тайм-аут на 30 секунд для входа (чтобы сервер успел проснуться)
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

function showForgotPassword(){document.getElementById('forgotModal').classList.remove('hidden')}
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
    const{data}=await sb.from('profiles').select('id,name,avatar').eq('is_admin',true).limit(1).single();
    if(data){
      openDialog(data.id, {name: data.name || 'Разработчик', avatar: data.avatar || '👤'});
    }else{
      toast('Разработчик не найден','danger');
    }
  }catch(e){
    toast('Ошибка соединения','danger');
  }
}
function contactDev(){showContactMenu()}

async function logout(){
  if(!confirm('Выйти? Прогресс сохранится.'))return;
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
  el.innerHTML=`<div class="install-banner"><div class="ib-ico">📱</div><div class="ib-body"><h4>Установи ANDGER</h4><p>${os==='ios'?'Safari → Поделиться → На экран Домой':'Chrome → ⋮ → Установить приложение'}</p></div><button class="ib-close" onclick="dismissInstall()">✕</button></div>`;
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

// ─── ГЛАВНАЯ ───
function renderToday(){
  const todayAvaEl = document.getElementById('todayAvatar');
  if(todayAvaEl) todayAvaEl.innerHTML = getAvatarHtml(state.avatar, 24);
  if(!currentBook)return;
  const b=currentBook,bs=getBookState(b.id);
  const day=currentDay(b.id),closed=countClosedDays(b.id);
  const date=dateByDay(b.id,day);
  const todayRec=bs.days[date]||{practices:[]};
  const todayCount=(todayRec.practices||[]).length;
  const total=b.practices.length;

  const fullName = (user.name || 'Друг') + (user.lastName ? ' ' + user.lastName : '');
document.getElementById('todayName').textContent = fullName;
  
// Считаем глобальный опыт для статуса на главной
  const stats = getGlobalStats();
  document.getElementById('statusBadge').textContent = `${stats.lvlIco} ${stats.lvlName}`;

  // --- ОБНОВЛЕНИЕ СЧЕТЧИКА ЗАМОРОЗОК ---
  const shieldEl = document.getElementById('shieldCount');
  if (shieldEl) shieldEl.textContent = state.shields || 0;
  // -------------------------------------

  // Крупный счётчик дня (1 кольцо)
  const pct=Math.round(todayCount/total*100);
  document.getElementById('todayCount').textContent=`${todayCount} из ${total}`;
  
  const tccFill=document.getElementById('tccFill');
  if(tccFill){
    const circ=2*Math.PI*26;
    tccFill.style.strokeDashoffset=circ-(circ*pct/100);
  }
  
  const tccBar=document.getElementById('tccBarFill');
  if(tccBar)tccBar.style.width=pct+'%';
  
    // ─── СВАЙП-КАРУСЕЛЬ КНИГ ───
  const activeBooks = BOOKS.filter(bb => {
    const bbs = getBookState(bb.id);
    const c = countClosedDays(bb.id);
    return bbs.start !== null && c < bb.days; // Книги в процессе
  });
  
  // Если текущая книга почему-то не попала в список, добавляем её принудительно
  if (!activeBooks.find(x => x.id === b.id)) activeBooks.push(b);

  let booksHtml = '';
  let dotsHtml = '';

  activeBooks.forEach((ab, index) => {
    const ab_bs = getBookState(ab.id);
    const ab_closed = countClosedDays(ab.id);
    const ab_day = currentDay(ab.id);
    const ab_date = dateByDay(ab.id, ab_day);
    const ab_todayRec = ab_bs.days[ab_date] || {practices:[]};
    const ab_todayCount = (ab_todayRec.practices || []).length;
    const ab_total = ab.practices.length;
    const isActive = ab.id === b.id;

    booksHtml += `
      <div class="active-book-card" onclick="switchActiveBook('${ab.id}')" style="${isActive ? '' : 'opacity:0.7;'}">
        <div class="abc-head">
          <div class="abc-emoji" style="display:flex; align-items:center; justify-content:center;">${getEmojiOrSvg(ab.emoji, 36)}</div>
           <div class="abc-info">
            <div class="abc-title">${ab.title}</div>
            <div style="font-size:12px; color:var(--accent-2); font-weight:700; margin-bottom:4px;">${ab.author || 'Неизвестный автор'}</div>
            <div class="abc-day">День ${ab_day} из ${ab.days}</div>
          </div>
        </div>
        <div class="abc-bar"><div class="abc-fill" style="width:${Math.round(ab_closed/ab.days*100)}%"></div></div>
        <div class="abc-meta">
          <span>Сегодня: <b>${ab_todayCount} из ${ab_total}</b></span>
          <span>Прогресс: <b>${Math.round(ab_closed/ab.days*100)}%</b></span>
        </div>
      </div>
    `;

    dotsHtml += `<div class="b-dot ${isActive ? 'on' : ''}"></div>`;
  });

  document.getElementById('activeBookWrap').innerHTML = booksHtml;
  document.getElementById('booksDots').innerHTML = activeBooks.length > 1 ? dotsHtml : '';
    // Авто-скролл к активной книге
  setTimeout(() => {
    const slider = document.getElementById('activeBookWrap');
    const activeIndex = activeBooks.findIndex(x => x.id === b.id);
    if (slider && activeIndex >= 0 && slider.children[activeIndex]) {
      slider.scrollTo({ left: slider.children[activeIndex].offsetLeft - 16, behavior: 'auto' });
    }
  }, 50);
    // Авто-скролл к активной книге
  setTimeout(() => {
    const slider = document.getElementById('activeBookWrap');
    const activeIndex = activeBooks.findIndex(x => x.id === b.id);
    if (slider && activeIndex >= 0 && slider.children[activeIndex]) {
      slider.scrollTo({ left: slider.children[activeIndex].offsetLeft - 16, behavior: 'auto' });
    }
  }, 50);
  
  const btn = document.querySelector('.hero-action-btn');
  if (todayRec.closed) {
    document.getElementById('ritualSub').textContent = 'Возвращайся завтра';
    btn.querySelector('.hab-title').textContent = 'ДЕНЬ ЗАКРЫТ';
    btn.querySelector('.hab-ico').textContent = '🎉';
    btn.style.background = 'linear-gradient(135deg, var(--success), #2eb87b)';
  } else {
    document.getElementById('ritualSub').textContent = total + ' практик';
    btn.querySelector('.hab-title').textContent = 'Приступить к практике';
    btn.querySelector('.hab-ico').textContent = '☀️';
    btn.style.background = '';
  }

  // Вызовы отрисовки
  renderHeroCards();
  renderWeekCalendar(); // Новый календарь
  // Настройка свайпа для календаря
  const calEl = document.getElementById('weekCalendar');
  if (calEl && !calEl.dataset.swipeInit) {
    calEl.dataset.swipeInit = 'true';
    let startX = 0;
    let startY = 0;
    
    calEl.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, {passive: true});
    
    calEl.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      // Если свайп по горизонтали больше, чем по вертикали
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Свайп влево (следующая неделя, максимум +1)
          if (calendarWeekOffset < 1) { calendarWeekOffset++; renderWeekCalendar(); }
        } else {
          // Свайп вправо (прошлая неделя, минимум -1)
          if (calendarWeekOffset > -1) { calendarWeekOffset--; renderWeekCalendar(); }
        }
      }
    }, {passive: true});
  }
  renderHint();
  updateSoundUI();
}

function renderHint(){
  const b=currentBook,day=currentDay(b.id);
  let html='';
  let q=null;
  if(globalQuotes.length){
    q=globalQuotes[(day-1)%globalQuotes.length];
  }else if(b&&b.quotes&&b.quotes.length){
    q=b.quotes[(day-1)%b.quotes.length];
  }
  if(q){
    html+=`<div class="hint-card"><div class="hint-label">✨ Цитата дня</div><div class="hint-text">«${q.text}»</div><div class="hint-author">— ${q.author||'Андрей Герасимов'}</div></div>`;
  }
  document.getElementById('hintCard').innerHTML=html;
}

function renderHeroCards(){
  const b=currentBook,bs=getBookState(b.id);
  const day=currentDay(b.id),date=dateByDay(b.id,day);
  const todayRec=bs.days[date]||{practices:[]};
  const cm={silence:'hero-silence',affirm:'hero-affirm',visual:'hero-visual',
    journal:'hero-journal',read:'hero-read',sport:'hero-sport',
    'two-min':'hero-silence',anchor:'hero-affirm',env:'hero-visual',
    track:'hero-journal',identity:'hero-silence',stack:'hero-affirm',
    easy:'hero-visual',reward:'hero-read',review:'hero-journal',
    importance:'hero-visual',slides:'hero-affirm',pendulum:'hero-silence',
    intention:'hero-affirm',action:'hero-sport'};
  let html='';
  b.practices.forEach((p,i)=>{
    const done=todayRec.practices&&todayRec.practices.includes(p.id);
    const cls=done?'hero-card hero-done':'hero-card '+(cm[p.id]||'hero-silence');
    html+=`<div class="${cls}"><div class="hero-icon-bg" style="width:100px; height:100px; opacity:0.15; position:absolute; top:45%; left:50%; transform:translate(-50%,-50%); z-index:0;">${getSvgIcon(p.ico, 100, '#fff')}</div><div class="hero-badge">№${i+1} из ${b.practices.length}</div>${done?'<div class="hero-done-badge">✓</div>':''}<div class="hero-content"><div class="hero-title">${p.title}</div><div class="hero-sub">${p.sub}</div><button class="hero-play" onclick="event.stopPropagation();openPractice('${p.id}')">${done?'✓ ГОТОВО':'▶ НАЧАТЬ'}</button></div></div>`;
  });
  document.getElementById('heroScroll').innerHTML=html;
    document.getElementById('heroDots').innerHTML=
    b.practices.map((p,i)=>{
      return `<div class="hero-dot" data-i="${i}"></div>`;
    }).join('');
  const sc=document.getElementById('heroScroll');
  if(sc)sc.scrollLeft=0;
}

function renderCalendar(containerId,bookId){
  const b=BOOKS.find(x=>x.id===bookId);if(!b)return;
  const bs=getBookState(bookId),today=todayStr(),closed=countClosedDays(bookId);
  let html=`<div class="cal-head"><div class="label">📅 Прогресс пути</div><div class="count">${closed} из ${b.days}</div></div><div class="cal-bar">`;
  for(let d=1;d<=b.days;d++){
    const date=dateByDay(bookId,d);
    const rec=bs.days[date];
    let cls='cal-seg';
    if(rec&&rec.closed)cls+=' done';
    else if(rec&&rec.practices&&rec.practices.length>=2)cls+=' partial';
    else if(date===today)cls+=' today';
    else if(date>today)cls+=' future';
    html+=`<div class="${cls}"></div>`;
  }
  html+=`</div><div class="cal-nums"><span>1</span><span>10</span><span>20</span><span>${b.days}</span></div>`;
  const el=document.getElementById(containerId);
  if(el)el.innerHTML=html;
}

// ─── БИБЛИОТЕКА ───
function setLibFilter(f,el){
  libFilter=f;
  document.querySelectorAll('.lib-filter').forEach(f=>f.classList.remove('on'));
  if(el)el.classList.add('on');
  renderLibrary();
}
function renderLibrary(){
  const fullName = (user.name || 'Друг') + (user.lastName ? ' ' + user.lastName : '');
document.getElementById('libName').textContent = fullName;
  document.getElementById('libAvatar').innerHTML=getAvatarHtml(state.avatar, 24);
  
  const q=(document.getElementById('libSearch')?.value||'').toLowerCase().trim();
  let list=BOOKS.filter(b=>{
    if(!q)return true;
    return b.title.toLowerCase().includes(q)||(b.author||'').toLowerCase().includes(q);
  });

  if(libFilter==='active'){
    list=list.filter(b=>!!getBookState(b.id).start && countClosedDays(b.id) < b.days);
  }else if(libFilter==='done'){
    list=list.filter(b=>countClosedDays(b.id)>=b.days);
  }else if(libFilter==='new'){
    // Строгая проверка: нет старта И нет закрытых дней
    list=list.filter(b=>!getBookState(b.id).start && countClosedDays(b.id) === 0);
  }

  if(!list.length){
    document.getElementById('bookList').innerHTML =
      '<div style="color:var(--muted);text-align:center;padding:40px 20px">Ничего не найдено</div>';
    return;
  }

  // Группируем по категориям
  const grouped = {};
  list.forEach(b => {
    const cat = b.category || 'Разное';
    if(!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(b);
  });

  let html = '';
  Object.keys(grouped).forEach((catName, index) => {
    // Все папки закрыты по умолчанию
    const isOpen = false; 
    
    html += `
      <div class="lib-category-wrap">
        <div class="lib-category-header ${isOpen ? 'open' : ''}" onclick="toggleLibCategory(this)">
          <div style="font-weight:800; font-size:15px; display:flex; align-items:center; gap:8px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            ${catName} <span style="font-size:11px; opacity:0.6; margin-left:6px;">(${grouped[catName].length})</span>
          </div>
          <div class="arrow-icon" style="font-size:18px;">›</div>
        </div>
        <div class="lib-category-body ${isOpen ? 'open' : ''}" style="padding-top: 10px;">
    `;

    grouped[catName].forEach(b => {
      const bs=getBookState(b.id);
      const closed=countClosedDays(b.id);
      const pct=Math.round(closed/b.days*100);
      const started=!!bs.start; 
      const isDone=closed>=b.days;
      const isActive = state.lastBook === b.id && started && !isDone; 
      const hasAccess=hasBookAccess(b.id);
      
      html += `<div class="book-row ${isDone?'done':''} ${isActive?'active':''} ${!hasAccess?'locked':''}" onclick="openBookDetail('${b.id}')">
        ${!hasAccess?'<div class="br-lock">🔒</div>':''}
        <div class="br-emoji" style="display:flex; align-items:center; justify-content:center;">${getEmojiOrSvg(b.emoji, 24)}</div>
        <div class="br-info">
          <div class="br-title">${escapeHtml(b.title)} ${isDone?'👑':''}</div>
          <div class="br-author">${escapeHtml(b.author)} · ${b.days} дней</div>
          ${started?`<div class="br-bar"><div class="br-fill" style="width:${pct}%"></div></div>`:''}
        </div>
        <div class="br-pct">${started?pct+'%':'—'}</div>
      </div>`;
    });
    html += `</div></div>`;
  });

  document.getElementById('bookList').innerHTML = html;
}

function toggleLibCategory(el) {
  el.classList.toggle('open');
  const body = el.nextElementSibling;
  if(body) body.classList.toggle('open');
}

// ─── КАРТОЧКА КНИГИ ───
function openBookDetail(id){
  const b=BOOKS.find(x=>x.id===id);if(!b)return;
  bookDetailSource=currentScreen||'lib';
  if(!hasBookAccess(id)){
    alert('🔒 Эта книга пока недоступна.\n\nНапиши разработчику, чтобы открыть доступ.');
    return;
  }
  bookDetailId=id;
  document.getElementById('bdEmoji').innerHTML = `<div style="display:flex; justify-content:center; margin-bottom:12px;">${getEmojiOrSvg(b.emoji, 72, b.title)}</div>`;
  document.getElementById('bdTitle').textContent=b.title;
  document.getElementById('bdAuthor').textContent=(b.author||'—')+' · '+b.days+' дней';
  document.getElementById('bdAbout').textContent=b.about||'Описание скоро появится.';

  const totalTime=Math.round(b.practices.reduce((s,p)=>s+p.time,0)/60);
  document.getElementById('bdTags').innerHTML=
    `<span class="bd-tag">📋 ${b.practices.length} практик</span><span class="bd-tag">⏱ ~${totalTime} мин/день</span>`;

  renderBookStars(id);
  renderBookReviews(id);

  if(b.method&&b.method.length){
    document.getElementById('bdMethod').innerHTML=b.method.map(m=>`<div class="bm-item">${m}</div>`).join('');
    document.getElementById('bdMethodSection').style.display='';
  }else document.getElementById('bdMethodSection').style.display='none';

  if(b.authorBio){
    document.getElementById('bdAuthorBio').textContent=b.authorBio;
    document.getElementById('bdAuthorSection').style.display='';
  }else document.getElementById('bdAuthorSection').style.display='none';

  if(b.forWhom){
    document.getElementById('bdForWhom').textContent=b.forWhom;
    document.getElementById('bdForWhomSection').style.display='';
  }else document.getElementById('bdForWhomSection').style.display='none';

  if(b.result){
    document.getElementById('bdResult').textContent=b.result;
    document.getElementById('bdResultSection').style.display='';
  }else document.getElementById('bdResultSection').style.display='none';

  const bs=getBookState(b.id);
  const closed=countClosedDays(b.id);
  const btn=document.getElementById('bdStartBtn');
  if(bs.start&&closed<b.days)btn.textContent='▶ Продолжить практику';
  else if(closed>=b.days)btn.textContent='🔄 Пройти заново';
  else btn.textContent='🚀 Начать практику';

  hideAll();
  document.getElementById('bookDetailScreen').classList.remove('hidden');
  updateSoundUI();
}
function backFromBookDetail(){
  if(bookDetailSource==='today')smartHome();
  else if(bookDetailSource==='stats')showStatsScreen();
  else showLibrary();
}
function startBookFromDetail(){
  const b=BOOKS.find(x=>x.id===bookDetailId);if(!b)return;
  currentBook=b;
  const bs=getBookState(b.id);
  if(!bs.start){
    bs.start=todayStr();saveState();
  }else{
    const closed=countClosedDays(b.id);
    if(closed>=b.days){
      if(confirm('Начать книгу заново? Прогресс сбросится.')){
        bs.days={};bs.journal={};bs.start=todayStr();saveState();
      }else return;
    }
  }
  state.lastBook=b.id;saveState();
  showTodayScreen();
}

async function renderBookStars(bookId){
  const el=document.getElementById('bdStars');
  let myStars=0,avg=0,count=0;
  try{
    const{data}=await sb.from('reviews').select('stars').eq('book_id',bookId);
    if(data&&data.length){
      avg=data.reduce((s,r)=>s+r.stars,0)/data.length;
      count=data.length;
    }
    const{data:mine}=await sb.from('reviews').select('stars').eq('book_id',bookId).eq('user_id',user.id).maybeSingle();
    if(mine)myStars=mine.stars;
  }catch(e){}
  el.innerHTML=Array.from({length:5},(_,i)=>
    `<span class="bd-star ${i<myStars?'on':''}" onclick="rateBook('${bookId}',${i+1})">★</span>`
  ).join('');
  if(count)el.innerHTML+=`<div style="font-size:11px;color:var(--muted);width:100%;margin-top:4px">Средняя: ${avg.toFixed(1)} · ${count} ${plural(count,'отзыв','отзыва','отзывов')}</div>`;
}
async function rateBook(bookId,stars){
  try{
    await sb.from('reviews').upsert({user_id:user.id,book_id:bookId,stars,text:''},{onConflict:'user_id,book_id'});
    playCheck();renderBookStars(bookId);
  }catch(e){toast('Ошибка','danger')}
}
// ─── СТАТИСТИКА ───
function renderStatsScreen(){
  if(!currentBook)return;
  document.getElementById('statsAvatar').innerHTML=getAvatarHtml(state.avatar, 24);
    // ─── СЧЕТ ОПЫТА И УРОВНЯ ───
  let totalXP = 0;
  BOOKS.forEach(bb => {
    const bbs = getBookState(bb.id);
    Object.values(bbs.days).forEach(rec => {
      if(rec.practices) {
        totalXP += rec.practices.length * 10; // +10 XP за каждую практику
      }
      if(rec.closed) {
        totalXP += 50; // +50 XP за закрытый день
      }
    });
  });

  // Определяем уровень
  let lvl = 1, lvlName = 'Новичок', lvlIco = '🌱', nextLvlXP = 100;
  if (totalXP >= 2000) { lvl = 6; lvlName = 'Легенда'; lvlIco = '👑'; nextLvlXP = 2000; }
  else if (totalXP >= 1000) { lvl = 5; lvlName = 'Мастер'; lvlIco = '🏆'; nextLvlXP = 2000; }
  else if (totalXP >= 600) { lvl = 4; lvlName = 'Опытный'; lvlIco = '💎'; nextLvlXP = 1000; }
  else if (totalXP >= 300) { lvl = 3; lvlName = 'Практик'; lvlIco = '🔥'; nextLvlXP = 600; }
  else if (totalXP >= 100) { lvl = 2; lvlName = 'Ученик'; lvlIco = '🌿'; nextLvlXP = 300; }

  // Считаем прогресс до следующего уровня
  let prevLvlXP = 0;
  if (lvl === 2) prevLvlXP = 100;
  if (lvl === 3) prevLvlXP = 300;
  if (lvl === 4) prevLvlXP = 600;
  if (lvl === 5) prevLvlXP = 1000;
  if (lvl === 6) prevLvlXP = 2000;

  // Вычитаем потраченный опыт
  totalXP = Math.max(0, totalXP - (state.spentXP || 0)); 

  const xpInCurrentLvl = totalXP - prevLvlXP;
  const xpNeededForNext = nextLvlXP - prevLvlXP;
  const xpPct = Math.min(100, Math.round((xpInCurrentLvl / xpNeededForNext) * 100)) || 100;

  // Обновляем HTML карточки
  document.getElementById('lcLevel').textContent = lvl;
  document.getElementById('lcTitle').textContent = lvlName;
  document.getElementById('lcIco').textContent = lvlIco;
  
  if (lvl === 6) {
    document.getElementById('lcXpText').textContent = totalXP + ' XP (Максимум)';
    document.getElementById('lcBarFill').style.width = '100%';
  } else {
    document.getElementById('lcXpText').textContent = xpInCurrentLvl + ' / ' + xpNeededForNext + ' XP';
    setTimeout(() => {
      document.getElementById('lcBarFill').style.width = xpPct + '%';
    }, 100);
  }
  // ─── КОНЕЦ СЧЕТА ОПЫТА ───
  let totalClosed=0,totalPractices=0,booksStarted=0,totalSeconds=0;
  
  BOOKS.forEach(bb=>{
    const bbs=getBookState(bb.id);
    if(bbs.start)booksStarted++;
    totalClosed+=countClosedDays(bb.id);
    
    // Считаем общее количество практик и время
    Object.values(bbs.days).forEach(rec=>{
      if(rec.practices){
        totalPractices+=rec.practices.length;
        // Ищем время каждой выполненной практики в книге
        rec.practices.forEach(pid => {
          const p = bb.practices.find(x => x.id === pid);
          if(p && p.time) totalSeconds += p.time;
        });
      }
    });
  });
  
  const totalMinutes = Math.round(totalSeconds / 60);

  document.getElementById('globalBooks').textContent=booksStarted;
  document.getElementById('globalClosed').textContent=totalClosed;
  document.getElementById('globalPractices').textContent=totalPractices;
  document.getElementById('globalMinutes').textContent=totalMinutes;

    // Отрисовка карточек книг (как на Главной)
  const statsBooksHtml = BOOKS.map(b=>{
    const closed = countClosedDays(b.id);
    const pct = Math.round(closed / (b.days || 1) * 100);
    const day = currentDay(b.id);
    const isActive = statsBookId === b.id;
    
    return `
      <div class="active-book-card" onclick="selectStatsBook('${b.id}')" style="${isActive ? 'border-color: var(--accent); box-shadow: 0 0 15px rgba(124,92,255,0.15);' : 'opacity: 0.6;'}">
        <div class="abc-head">
          <div class="abc-emoji" style="display:flex; align-items:center; justify-content:center;">${getSvgIcon(b.emoji, 36, 'var(--accent-2)')}</div>
           <div class="abc-info">
            <div class="abc-title">${b.title}</div>
            <div style="font-size:12px; color:var(--accent-2); font-weight:700; margin-bottom:4px;">${b.author || 'Неизвестный автор'}</div>
            <div class="abc-day">День ${day} из ${b.days}</div>
          </div>
        </div>
        <div class="abc-bar"><div class="abc-fill" style="width:${pct}%"></div></div>
        <div class="abc-meta">
          <span>Прогресс: <b>${pct}%</b></span>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('statsBooksSwipe').innerHTML = statsBooksHtml;
  document.getElementById('statsBooksSwipe').className = 'books-slider'; // Меняем класс на слайдер

  // Точки для книг
  const dotsWrap = document.getElementById('statsBooksDots');
  if (dotsWrap && BOOKS.length > 1) {
    dotsWrap.innerHTML = BOOKS.map(b => `<div class="b-dot ${statsBookId === b.id ? 'on' : ''}"></div>`).join('');
    setTimeout(() => {
      const wrap = document.getElementById('statsBooksSwipe');
      const activeIndex = BOOKS.findIndex(x => x.id === statsBookId);
      if (wrap && activeIndex >= 0 && wrap.children[activeIndex]) {
        wrap.scrollTo({ left: wrap.children[activeIndex].offsetLeft - 16, behavior: 'smooth' });
      }
    }, 50);
  } else if (dotsWrap) {
    dotsWrap.innerHTML = '';
  }

  const b=BOOKS.find(x=>x.id===statsBookId)||currentBook;
  document.getElementById('statStreakBig').textContent=calcStreak(b.id);
  document.getElementById('statBestBig').textContent=calcBest(b.id);
  renderAchievements();
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
      let name=a.name,desc=a.desc;
      if(secret){name='???';desc='Секретная награда'}
      html+=`<div class="ach-card ${unlocked?'unlocked':'locked'} ${gold?'gold':''} ${secret?'secret':''}" onclick="showAchDetail('${a.id}')"><div class="ach-badge">${unlocked?a.ico:(secret?'❓':'🔒')}</div><div class="ach-name">${name}</div><div class="ach-desc">${desc}</div>${progress}</div>`;
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
  if(closed===0)return{ico:'🌱',name:'Новичок',desc:'Начни первый день'};
  if(closed<3)return{ico:'🌱',name:'Первый шаг',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<7)return{ico:'🌿',name:'В ритме',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<14)return{ico:'🔥',name:'Практик',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<21)return{ico:'💎',name:'Опытный',desc:closed+' '+plural(closed,'день','дня','дней')};
  if(closed<30)return{ico:'🏆',name:'Мастер',desc:closed+' '+plural(closed,'день','дня','дней')};
  return{ico:'👑',name:'Легенда',desc:'Книга пройдена'};
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
  return Math.min(Math.max(diff,1),b?b.days:30);
}
function calcStreak(bookId){
  const b=BOOKS.find(x=>x.id===bookId),bs=getBookState(bookId);
  if(!b||!bs.start)return 0;
  let streak=0, misses=0;
  for(let i=1;i<=b.days;i++){
    const d=dateByDay(bookId,i);
    if(bs.days[d] && (bs.days[d].closed || bs.days[d].shielded)){
      streak++;
      misses=0;
    } else {
      // Если день в прошлом (не сегодня) и пропущен
      if(d < todayStr()) {
        misses++;
        if(misses > 1) break; // Если пропустил 2 дня подряд - серия прерывается
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
  if(!currentBook){toast('Сначала выбери книгу','warm');return}
  const day = currentDay(currentBook.id);
  const date = dateByDay(currentBook.id, day);
  const bs = getBookState(currentBook.id);
  if (bs.days[date] && bs.days[date].closed) {
    toast('Вы уже выполнили все практики на сегодня. Ждем завтра!', 'warm');
    return;
  }
  const b=currentBook;
  ritualQueue=b.practices.map(p=>({...p,_bookId:b.id,_bookTitle:b.title}));
  ritualIndex=0;
  hideAll();
  const rEl=document.getElementById('ritualScreen');
  rEl.className='ritual';
  rEl.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;z-index:9999;display:flex;flex-direction:column;background:var(--bg)';
  window.scrollTo(0,0);
  startMusic();
  renderRitualStep();
}
function renderRitualStep(){
  try {
    if(ritualIndex>=ritualQueue.length){finishRitual();return}
    const p=ritualQueue[ritualIndex];
    
    // Проверка на всякий случай, если данные книги битые
    if(!p) { closeRitual(); return; }

    document.getElementById('rpStep').textContent=(ritualIndex+1)+' из '+ritualQueue.length;
    document.getElementById('rpFill').style.width=(ritualIndex/ritualQueue.length*100)+'%';
    
    const bookTag=p._bookTitle&&(!currentBook||p._bookTitle!==currentBook.title)?
      `<div style="text-align:center;font-size:11px;color:var(--muted);margin-bottom:8px">📚 ${escapeHtml(p._bookTitle)}</div>`:'';
      
    // Безопасная обработка массива шагов (если вдруг он не массив)
    const stepsHtml = Array.isArray(p.how) ? p.how.map(s=>`<li>${escapeHtml(s)}</li>`).join('') : '';
    
    document.getElementById('ritualBody').innerHTML=
      `${bookTag}
       <div class="ritual-hero"><div class="ico">${getSvgIcon(p.ico || 'book', 72, 'var(--accent-2)')}</div><h2>${escapeHtml(p.title || 'Практика')}</h2><div class="sub">${escapeHtml(p.sub || '')}</div></div>
       <div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${escapeHtml(p.why || 'Описание отсутствует')}</p></div>
       <div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${stepsHtml}</ol></div>
       
       <div class="ps-block timer-wrapper" style="margin-top:30px; border-top:1px solid var(--border); padding-top:20px;">
         <h3>⏱ Время практики</h3>
         <div class="timer-box">
           <div class="timer-display" id="ritualTime">${formatTime(p.time || 300)}</div>
           <div class="voice-subtitle" id="ritualSubtitle"></div>
           <button class="timer-big-btn" id="ritualTimerBtn" onclick="toggleTimer('ritual')">▶ Старт</button>
           <button class="exit-zen-btn" onclick="exitZenMode('ritual')">← Вернуться к тексту</button>
         </div>
       </div>

       <div class="ps-block" style="margin-top:20px;">
         <h3>✍️ Заметка в дневник</h3>
         <textarea id="ritualNoteInput" placeholder="Что почувствовал? О чем подумал? (Необязательно)" style="width:100%; background:var(--card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:12px; color:var(--text); font-size:14px; min-height:80px; resize:vertical;"></textarea>
       </div>

       <button class="btn" style="margin-top:20px; margin-bottom:50px;" onclick="nextRitual()">✓ Отметить выполненным</button>`;
       
    timerRemaining=p.time || 300;
    timerState='idle';
    
    setTimeout(() => {
      const rBody = document.getElementById('ritualBody');
      if(rBody) rBody.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);

  } catch (error) {
    // Если произошла ошибка, показываем её на экране вместо синего экрана
    console.error("Ошибка рендера практики:", error);
    document.getElementById('ritualBody').innerHTML = `
      <div style="padding:20px; text-align:center;">
        <div style="font-size:40px; margin-bottom:10px;">⚠️</div>
        <h2 style="color:var(--danger); margin-bottom:10px;">Ошибка загрузки</h2>
        <p style="color:var(--muted); font-size:14px; margin-bottom:20px;">${error.message}</p>
        <button class="btn" onclick="closeRitual()">Закрыть</button>
      </div>
    `;
  }
}

function toggleTimer(ctx){
  const btn=ctx==='ritual'? document.getElementById('ritualTimerBtn'): document.getElementById('timerBtn');
  const screen = ctx==='ritual' ? document.getElementById('ritualScreen') : document.getElementById('practiceScreen');

  if(timerState==='running'){
    // ПАУЗА
    stopTimer();
    timerState='paused';
    if (musicAudio) musicAudio.pause();
    if(btn){btn.textContent='▶ Продолжить';btn.className='timer-big-btn paused'}
    if(screen) screen.classList.remove('focus-mode');
  }else if(timerState==='done'){
    // Ничего не делаем, если время вышло
  }else{
    // СТАРТ ИЛИ ПРОДОЛЖЕНИЕ
    if ('speechSynthesis' in window) {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(''));
    }
    
    let currentP = (ctx === 'ritual') ? ritualQueue[ritualIndex] : currentPractice;
    
    // Если это запуск с нуля (таймер был idle), сбрасываем счетчик сказанных фраз
    if (timerState === 'idle' && currentP) {
      currentP._spokenIndices = [];
    }
        // Включаем музыку только при старте
    if (state.soundMode === 'sound') {
      let currentPForMusic = (ctx === 'ritual') ? ritualQueue[ritualIndex] : currentPractice;
      startMusic(currentPForMusic ? currentPForMusic.id : 'default');
    }
    startTimer(ctx);
    timerState='running';
    if(btn){btn.textContent='⏸ Пауза';btn.className='timer-big-btn'}
    if(screen) screen.classList.add('focus-mode');
  }
}

let wakeLock = null;

async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
    }
  } catch (err) {
    console.log('Wake Lock error:', err);
  }
}

function releaseWakeLock() {
  if (wakeLock !== null) {
    wakeLock.release();
    wakeLock = null;
  }
}

function startTimer(ctx){
  requestWakeLock(); 
  const targetTime = Date.now() + (timerRemaining * 1000);
  const totalDuration = timerRemaining; // Запоминаем общую длительность для таймлайна
  
  if(timerInterval) clearInterval(timerInterval);
  
  let currentP = (ctx === 'ritual') ? ritualQueue[ritualIndex] : currentPractice;
  
  if (currentP && !currentP._spokenIndices) {
    currentP._spokenIndices = []; 
  }

  timerInterval = setInterval(()=>{
    const now = Date.now();
    const remaining = Math.max(0, Math.round((targetTime - now) / 1000));
    timerRemaining = remaining;
    
    const el=document.getElementById(ctx==='ritual'?'ritualTime':'timerDisplay');
    if(el){
      el.textContent=formatTime(timerRemaining);
      el.classList.add('timer-pulsing');
    }

    // --- ЛОГИКА ТАЙМЛАЙНА ГОЛОСА ---
    if (currentP && currentP.voiceTimeline && timerState === 'running') {
      const elapsed = totalDuration - remaining;
      
      currentP.voiceTimeline.forEach((item, index) => {
        // Если время пришло и мы еще это не говорили
        if (elapsed >= item.time && !currentP._spokenIndices.includes(index)) {
          speakBackgroundGuide(item.text, ctx);
          currentP._spokenIndices.push(index);
        }
      });
    }
    
    if(timerRemaining <= 0){
      stopTimer();
      timerState='done';
      
      const btn = document.getElementById(ctx==='ritual'?'ritualTimerBtn':'timerBtn');
      if(btn){
        btn.textContent = '✨ Время вышло';
        btn.className = 'timer-big-btn done';
        btn.disabled = true;
      }

      if(ctx === 'ritual' && ritualQueue[ritualIndex]) speakTimerEnd(ritualQueue[ritualIndex].id);
      else if (ctx === 'practice' && currentPractice) speakTimerEnd(currentPractice.id);
      
      playFanfare();   
      
      if(ctx==='ritual' && ritualQueue[ritualIndex]) showCompleteOverlay(ritualQueue[ritualIndex],'ritual');
      else if (ctx==='practice' && currentPractice) showCompleteOverlay(currentPractice,'practice');
      
      setTimeout(() => {
        const noteId = ctx==='ritual' ? 'ritualNoteInput' : 'practiceNoteInput';
        const noteInput = document.getElementById(noteId);
        if(noteInput) {
          noteInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }, 1000);
}

function stopTimer(){
  // Останавливаем фоновый голос
  if (ttsAudio) { ttsAudio.pause(); ttsAudio.currentTime = 0; }
  
  releaseWakeLock(); 
  if(timerInterval){clearInterval(timerInterval);timerInterval=null}
  
  const t1 = document.getElementById('timerDisplay');
  const t2 = document.getElementById('ritualTime');
  if(t1) t1.classList.remove('timer-pulsing');
  if(t2) t2.classList.remove('timer-pulsing');

  // Выключаем Дзен-режим у обоих экранов
  const pScreen = document.getElementById('practiceScreen');
  const rScreen = document.getElementById('ritualScreen');
  if(pScreen) pScreen.classList.remove('focus-mode');
  if(rScreen) rScreen.classList.remove('focus-mode');
}
async function nextRitual(){
  if (timerState !== 'done') {
    showCustomConfirm(
      'Таймер еще идет!', 
      'Вы уверены, что хотите пропустить текущую практику досрочно?', 
      () => {
        executeNextRitual();
      }
    );
    return;
  }
  executeNextRitual();
}

async function executeNextRitual() {
  stopTimer();timerState='idle';
  if(musicAudio && state.soundOn!==false) nextTrack();
  const p=ritualQueue[ritualIndex];
  
  const noteInput = document.getElementById('ritualNoteInput');
  const noteText = noteInput ? noteInput.value : '';
  if (noteText.trim() && p) {
    await savePracticeNote(p.title, noteText, p._bookId);
  }

  markPracticeDoneForBook(p._bookId, p.id);
  ritualIndex++;
  renderRitualStep();
}
let confirmActionCallback = null;

function showCustomConfirm(title, text, callback) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmText').textContent = text;
  confirmActionCallback = callback;
  document.getElementById('confirmModal').classList.remove('hidden');
}

function closeCustomConfirm(isConfirmed) {
  document.getElementById('confirmModal').classList.add('hidden');
  if (isConfirmed && confirmActionCallback) {
    confirmActionCallback();
  }
  confirmActionCallback = null;
}

function closeRitual(){
  if(ritualIndex < ritualQueue.length) {
    showCustomConfirm(
      'Прервать практику?', 
      'Прогресс текущей практики не сохранится. Вы уверены?', 
      () => {
        stopTimer();timerState='idle';stopMusic();
        const rEl=document.getElementById('ritualScreen');
        rEl.classList.add('hidden'); 
        rEl.classList.remove('ritual');
        rEl.style.cssText=''; 
        rEl.className='ritual hidden';
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
    smartHome();
  }
}

function goToJournalFromRitual() {
  stopTimer();
  showCustomConfirm(
    'Перейти в дневник?', 
    'Текущая практика не сохранится. Вы уверены?', 
    () => {
      const rEl=document.getElementById('ritualScreen');
      rEl.classList.add('hidden'); 
      rEl.classList.remove('ritual');
      rEl.style.cssText=''; 
      rEl.className='ritual hidden';
      showJournalScreen();
    }
  );
}

function finishRitual(){
  stopTimer();timerState='idle';
  const b=currentBook;
  const day=currentDay(b.id),date=dateByDay(b.id,day),bs=getBookState(b.id);
  if(!bs.days[date])bs.days[date]={practices:[]};
  const count=bs.days[date].practices.length,total=b.practices.length;
  const threshold=Math.ceil(total*0.6);
  if(count>=threshold){
    const wasClosed=bs.days[date].closed;
    bs.days[date].closed=true;saveState();
    if(!wasClosed){fireConfetti();playFanfare()}
    buildModalWithAch(day,count,total,wasClosed);
  }else if(count>=2){
    saveState();
    showSimpleModal('💪','Хорошо идёшь!',count+' из '+total+'. Для закрытия нужно '+threshold+'.');
  }else{
    saveState();
    showSimpleModal('🌱','Начало положено',count+' из '+total+'. Маленький шаг — тоже шаг.');
  }
}
function buildModalWithAch(day,count,total,wasClosed){
  const streak=calcStreak(currentBook.id),best=calcBest(currentBook.id);
  const emoji=count===total?'🔥':'✅';
  const title=count===total?'Идеальный день!':'День закрыт!';
  const text='День '+day+'. Практик: '+count+' из '+total+'.';
  let items=[];
  if(streak>=3)items.push({ico:'🔥',txt:streak+' дней огня',sub:'Не сбавляй'});
  else items.push({ico:'🌱',txt:'День '+day+' в копилке',sub:'Продолжай'});
  if(streak===best&&streak>1)items.push({ico:'🏆',txt:'Новый рекорд!',sub:best+' дней подряд'});
  if(count===total)items.push({ico:'💎',txt:'Все практики выполнены',sub:'Идеальный день'});
  const nextAch=getNextAch(currentBook.id,streak);
  if(nextAch)items.push({ico:'🎯',txt:'До награды "'+nextAch.name+'"',sub:nextAch.remaining});
  showAchModal(emoji,title,text,items);
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
function markPracticeDone(pid){markPracticeDoneForBook(currentBook.id,pid)}
function markPracticeDoneForBook(bookId,pid){
  const day=currentDay(bookId),date=dateByDay(bookId,day),bs=getBookState(bookId);
  if(!bs.days[date])bs.days[date]={practices:[]};
  if(!bs.days[date].practices.includes(pid))bs.days[date].practices.push(pid);
  saveState();
}

// ─── СВОЙ РИТУАЛ ───
function showRitualBuilder(){
  customRitual=[];
  renderRitualBuilder();
  hideAll();
  document.getElementById('ritualBuilderScreen').classList.remove('hidden');
}
function renderRitualBuilder(){
  const activeBooks=BOOKS.filter(b=>hasBookAccess(b.id));
  if(!activeBooks.length){
    document.getElementById('ritualBuilderList').innerHTML=
      '<p style="color:var(--muted);text-align:center">Нет доступных книг</p>';
    return;
  }
  
  let html='';
  activeBooks.forEach((b, index)=>{
    const hasSelected = customRitual.some(key => key.startsWith(b.id + ':'));
    
    // Используем класс book-row (как в библиотеке), но делаем его раскрывающимся
    html+=`
      <div class="book-row" style="display:flex; flex-direction:column; align-items:stretch; padding:0; margin-bottom:10px; gap:0; background:var(--card); border-radius:var(--radius-sm); overflow:hidden; ${hasSelected ? 'border-color:var(--accent);' : ''}">
        <div style="display:flex; align-items:center; gap:14px; padding:14px; cursor:pointer;" onclick="toggleBuilderBook(this)">
          <div class="br-emoji">${b.emoji}</div>
          <div class="br-info">
            <div class="br-title" style="font-size:15px; font-weight:800; margin-bottom:2px;">${b.title}</div>
            <div class="br-author" style="font-size:11px; color:var(--muted);">${b.author}</div>
          </div>
          ${hasSelected ? '<div style="font-size:10px; background:var(--accent); color:#fff; padding:2px 8px; border-radius:10px; font-weight:800; margin-left:auto; margin-right:8px;">выбрано</div>' : '<div style="margin-left:auto; margin-right:8px;"></div>'}
          <div class="arrow-icon" style="font-size:20px; color:var(--muted); transition:transform 0.3s; transform:rotate(${hasSelected ? '90deg' : '0deg'});">›</div>
        </div>
        
          <div class="builder-book-body ${hasSelected ? 'open' : ''}" style="padding:0 14px 14px 14px; border-top:1px solid var(--border); background:var(--card2);">
          <div style="padding-top:10px;">
    `;
    
    b.practices.forEach(p=>{
      const key=b.id+':'+p.id;
      const on=customRitual.includes(key);
      html+=`<div class="ritual-builder-item ${on?'on':''}">
        <div class="rbi-check" onclick="event.stopPropagation();toggleCustomPractice('${key}')">✓</div>
        <div class="rbi-body" onclick="event.stopPropagation();previewPractice('${b.id}','${p.id}')">
          <div class="rbi-title" style="display:flex; justify-content:space-between; align-items:center;">
            <span>${p.title}</span>
            <span style="font-size:16px; color:var(--accent-2); opacity:0.7;">ⓘ</span>
          </div>
          <div class="rbi-time">${p.sub}</div>
        </div>
      </div>`;
    });
    
    html+=`
          </div>
        </div>
      </div>
    `;
  });
  
  document.getElementById('ritualBuilderList').innerHTML=html;
  updateCustomSummary();
  loadSavedRituals();
}

// Функция для открытия/закрытия книги в списке
function toggleBuilderBook(el) {
  const body = el.nextElementSibling;
  const arrow = el.querySelector('.arrow-icon');
  if(body) {
    body.classList.toggle('open');
    if (arrow) {
      arrow.style.transform = body.classList.contains('open') ? 'rotate(90deg)' : 'rotate(0deg)';
    }
  }
}

// НОВАЯ ФУНКЦИЯ ДЛЯ ОКНА ОПИСАНИЯ
function previewPractice(bookId, practiceId) {
  const b = BOOKS.find(x => x.id === bookId);
  if (!b) return;
  const p = b.practices.find(x => x.id === practiceId);
  if (!p) return;

  document.getElementById('previewContent').innerHTML = `
    <div style="text-align:center; margin-bottom:15px;">
      <div style="font-size:50px; margin-bottom:10px;">${p.ico}</div>
      <h2 style="font-size:20px; margin-bottom:5px;">${p.title}</h2>
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
function toggleCustomPractice(key){
  const idx=customRitual.indexOf(key);
  if(idx>=0)customRitual.splice(idx,1);else customRitual.push(key);
  playClick();
  renderRitualBuilder();
}
function updateCustomSummary(){
  const sum=document.getElementById('ritualBuilderSummary');
  if(!customRitual.length){sum.style.display='none';return}
  let totalSec=0;
  customRitual.forEach(key=>{
    const[bid,pid]=key.split(':');
    const b=BOOKS.find(x=>x.id===bid);if(!b)return;
    const p=b.practices.find(x=>x.id===pid);if(p)totalSec+=p.time;
  });
  document.getElementById('rbsCount').textContent=
    customRitual.length+' '+plural(customRitual.length,'практика','практики','практик');
  document.getElementById('rbsTime').textContent='~'+Math.round(totalSec/60)+' минут';
  sum.style.display='flex';
}
function launchCustomRitual(){
  if(!customRitual.length)return;
  ritualQueue=[];
  customRitual.forEach(key=>{
    const[bid,pid]=key.split(':');
    const b=BOOKS.find(x=>x.id===bid);if(!b)return;
    const p=b.practices.find(x=>x.id===pid);
    if(p)ritualQueue.push({...p,_bookId:b.id,_bookTitle:b.title});
  });
      ritualIndex=0;
  hideAll();
  const rEl=document.getElementById('ritualScreen');
  rEl.className='ritual';
  rEl.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;z-index:9999;display:flex;flex-direction:column;background:var(--bg)';
  startMusic();
  renderRitualStep();
}

// ─── ОВЕРЛЕЙ ЗАВЕРШЕНИЯ ───
function showCompleteOverlay(practice,context){
  completeCallback={practice,context};
  document.getElementById('completeTitle').textContent='Практика завершена';
  
  // Выбираем умную цитату
  let quoteHtml = '';
  if(currentBook && currentBook.quotes && currentBook.quotes.length > 0) {
    const randomQuote = currentBook.quotes[Math.floor(Math.random() * currentBook.quotes.length)];
    quoteHtml = `<div style="margin-top: 15px; font-style: italic; color: var(--accent-2); font-size: 13px; border-top: 1px solid var(--border); padding-top: 15px;">«${randomQuote.text}»</div>`;
  }

  document.getElementById('completeSub').innerHTML = `${practice.title}<br>⏱ ${Math.round(practice.time/60)} минут ${quoteHtml}`;
  document.getElementById('completeOverlay').classList.remove('hidden');
}
async function completePracticeDone(){
  stopMusic();
  document.getElementById('completeOverlay').classList.add('hidden');
  if(!completeCallback)return;
  
  const{practice,context}=completeCallback;completeCallback=null;
  
  // Сохраняем заметку из модалки
  const noteInput = document.getElementById('completeNoteInput');
  const noteText = noteInput ? noteInput.value : '';
  
  if (noteText.trim()) {
    if (context === 'ritual') {
      const p = ritualQueue[ritualIndex];
      if (p) await savePracticeNote(p.title, noteText, p._bookId);
    } else {
      await savePracticeNote(practice.title, noteText, currentBook.id);
    }
    // Очищаем поле после сохранения
    if(noteInput) noteInput.value = '';
  }

  if(context==='ritual'){
    stopTimer();timerState='idle';
    const p=ritualQueue[ritualIndex];
    if(p)markPracticeDoneForBook(p._bookId,p.id);
    playCheck();
    ritualIndex++;
    setTimeout(()=>renderRitualStep(),300);
  }else{
    markPracticeDone(practice.id);
    playCheck();
    fireConfetti();
    closePractice();
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

// ─── ПРАКТИКА ───
function openPractice(id){
  if(!currentBook){toast('Сначала выбери книгу','warm');return}
    const day = currentDay(currentBook.id);
  const date = dateByDay(currentBook.id, day);
  const bs = getBookState(currentBook.id);
  if (bs.days[date] && bs.days[date].closed) {
    toast('Вы уже выполнили все практики на сегодня. Ждем завтра!', 'warm');
    return;
  }
  const p=currentBook.practices.find(x=>x.id===id);if(!p)return;
  currentPractice=p;
  document.getElementById('psTitle').textContent=p.title;
  document.getElementById('psSub').textContent=p.sub;
  document.getElementById('psContent').innerHTML=
    `<div class="ps-hero"><div class="ico" style="display:flex; justify-content:center;">${getSvgIcon(p.ico, 52, 'var(--accent-2)')}</div><div class="time">⏱ ${Math.round(p.time/60)} минут</div></div>
     <div class="ps-block"><h3>💡 Зачем это нужно</h3><p>${p.why}</p></div>
     <div class="ps-block"><h3>🎬 Как делать</h3><ol class="steps">${p.how.map(s=>`<li>${s}</li>`).join('')}</ol></div>
     ${p.affirm?`<div class="ps-block"><h3>✨ Аффирмации</h3><ul class="affirm-list">${p.affirm.map(a=>`<li onclick="copyAffirm(this)">«${a}»</li>`).join('')}</ul></div>`:''}
     <div class="ps-block"><h3>🎯 Результат</h3><p>${p.result}</p></div>
     <div class="ps-block"><h3>⚠️ Ошибки</h3><ul class="mistakes">${p.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></div>
     <div class="ps-block"><h3>💬 Совет</h3><div class="advice">${p.advice}</div></div>
     
     <div class="ps-block timer-wrapper" style="margin-top:30px; border-top:1px solid var(--border); padding-top:20px;">
       <h3>⏱ Время практики</h3>
       <div class="timer-box">
  <div class="timer-display" id="timerDisplay">${formatTime(p.time)}</div>
  <div class="voice-subtitle" id="practiceSubtitle"></div>
  <button class="timer-big-btn" id="timerBtn" onclick="toggleTimer('practice')">▶ Старт</button>
  <button class="exit-zen-btn" onclick="exitZenMode('practice')">← Вернуться к тексту</button>
</div>
     </div>
     
<div class="ps-block" style="margin-top:20px; background:linear-gradient(135deg, rgba(124,92,255,0.1), transparent); padding:16px; border-radius:var(--radius-md); border:1px solid var(--accent);">
       <h3 style="margin-top:0; color:var(--accent-2);">🎯 Ожидаемый результат</h3>
       <p style="font-size:14px; color:#dcdcf0; margin-bottom:16px; font-style:italic;">${p.result || 'Новое осознание и спокойствие.'}</p>
       
       <h3>✍️ Твоя заметка</h3>
       <textarea id="practiceNoteInput" placeholder="Что получилось? С какими мыслями столкнулся?..." style="width:100%; background:var(--card); border:1px solid var(--border); border-radius:var(--radius-sm); padding:12px; color:var(--text); font-size:14px; min-height:100px; resize:vertical;"></textarea>
     </div>
     
     <button class="btn" style="margin-top:20px; margin-bottom:50px;" onclick="markPracticeFromScreen('${p.id}')">✓ Отметить выполненным</button>`;
  document.getElementById('practiceScreen').classList.remove('hidden');
  document.body.style.overflow='hidden';
  window.scrollTo(0,0);
  timerRemaining=p.time;
  timerState='idle';
  updateSoundUI();
}
function closePractice(){
  document.getElementById('practiceScreen').classList.add('hidden');
  document.body.style.overflow='';
  stopTimer();timerState='idle';stopMusic();
  currentPractice=null;
  
  // --- ПРОВЕРКА НА ЗАВЕРШЕНИЕ КНИГИ ---
  const b = currentBook;
  if (b) {
    const closed = countClosedDays(b.id);
    // Если пройдены все дни (книга завершена)
    if (closed >= b.days) {
      // Проверяем, есть ли уже отзыв от этого юзера
      sb.from('reviews').select('id').eq('user_id', user.id).eq('book_id', b.id).maybeSingle().then(({data}) => {
        if (!data) {
          // Отзыва нет — показываем модалку
          showReviewModal(b.id);
        }
      });
    }
  }
  // ------------------------------------
  
  smartHome();
}

async function markPracticeFromScreen(id){
  if (timerState !== 'done') {
    showCustomConfirm(
      'Таймер еще идет!', 
      'Вы уверены, что хотите завершить практику досрочно? Результат может быть не таким эффективным.', 
      () => {
        executeMarkPractice(id);
      }
    );
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
  if(navigator.vibrate) navigator.vibrate([100, 50, 100]); 
  closePractice();
}

function copyAffirm(el){
  const text=el.textContent.replace(/[«»]/g,'');
  if(navigator.clipboard){
    navigator.clipboard.writeText(text);
    el.style.background='rgba(124,92,255,.15)';
    setTimeout(()=>el.style.background='',500);
  }
}

// ─── МОДАЛКИ ───
function showSimpleModal(emoji,title,text){
  document.getElementById('modalEmoji').textContent=emoji;
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalText').textContent=text;
  document.getElementById('modalAchList').innerHTML='';
  document.getElementById('modal').classList.remove('hidden');
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
  document.getElementById('modal').classList.add('hidden');
  const ritualOpen=!document.getElementById('ritualScreen').classList.contains('hidden');
  if(ritualOpen)closeRitual();
}

// ─── КОНФЕТТИ ───
function fireConfetti(){
  const box=document.getElementById('confetti');
  box.classList.remove('hidden');
  const colors=['#7c5cff','#a78bfa','#ff9a56','#ffb800','#3ecf8e'];
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

// ─── ДЫХАНИЕ ───
let breathTimer = null;
let breathSeconds = 0;
const BREATH_CYCLE = [{t:'Вдох',d:4,cls:'inhale'},{t:'Задержка',d:7,cls:'hold'},{t:'Выдох',d:8,cls:'exhale'}];

function showBreathModal(){
  document.getElementById('breathModal').classList.remove('hidden');
  // Сбрасываем таймер при открытии
  breathSeconds = 0;
  document.getElementById('breathTimerDisplay').textContent = '00:00';
  document.getElementById('breathBtn').textContent = '▶ Начать';
}

function closeBreath(){
  stopBreath();
  document.getElementById('breathModal').classList.add('hidden');
}

function toggleBreath(){
  if(breathTimer){
    stopBreath();
    document.getElementById('breathBtn').textContent='▶ Продолжить';
    return;
  }
  document.getElementById('breathBtn').textContent='⏸ Пауза';
  runBreathCycle();
}

function runBreathCycle(){
  let phase=0, remaining=BREATH_CYCLE[0].d;
  
  function update(){
    const el=document.getElementById('breathCircle');
    const txt=document.getElementById('breathText');
    const timerDisplay = document.getElementById('breathTimerDisplay');
    const cur=BREATH_CYCLE[phase];
    
    if(el) el.className='breath-circle '+cur.cls;
    if(txt) txt.textContent=cur.t+' '+remaining;
    
    // Обновляем общий секундомер
    breathSeconds++;
    const m = String(Math.floor(breathSeconds/60)).padStart(2,'0');
    const s = String(breathSeconds%60).padStart(2,'0');
    if(timerDisplay) timerDisplay.textContent = `${m}:${s}`;
    
    remaining--;
    if(remaining<0){
      phase=(phase+1)%BREATH_CYCLE.length;
      remaining=BREATH_CYCLE[phase].d;
    }
  }
  update();
  breathTimer=setInterval(update,1000);
}

function stopBreath(){
  if(breathTimer){clearInterval(breathTimer);breathTimer=null}
  const el=document.getElementById('breathCircle');
  if(el) el.className='breath-circle';
  const txt=document.getElementById('breathText');
  if(txt) txt.textContent='Пауза';
}
  async function renderProfile(){
  try {
    // Проверка подписки (Баннер, если истекла)
    const subBanner = document.getElementById('subBanner');
    if (subBanner) {
      if (!isAdmin() && user.sub_until && new Date(user.sub_until) < new Date()) {
        subBanner.innerHTML = `
          <div style="background: linear-gradient(135deg, rgba(255,92,92,0.1), var(--card)); border: 1px solid rgba(255,92,92,0.3); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px; text-align: center;">
            <div style="font-size:20px; margin-bottom:6px;">🔒</div>
            <div style="font-weight:900; font-size:14px; color:var(--text); margin-bottom:4px;">Доступ к книгам приостановлен</div>
            <div style="font-size:11px; color:var(--muted); margin-bottom:12px;">Ваша подписка истекла. Продлите её, чтобы продолжить свой путь.</div>
            <button class="btn" style="margin-top:0; padding:10px; font-size:12px; background:transparent; border: 1px solid var(--accent); color: var(--accent-2); box-shadow: none;" onclick="contactDev()">Продлить доступ</button>
          </div>
        `;
        subBanner.classList.remove('hidden'); 
      } else {
        subBanner.classList.add('hidden'); 
      }
    }

    // Безопасное получение телефона
    const phone = (user && user.phone) ? user.phone : '79999999999';
    const phoneEl = document.getElementById('profilePhone');
    const userIdEl = document.getElementById('profileUserId');
    if (userIdEl && user) userIdEl.textContent = 'ID: #' + user.id.slice(0, 8).toUpperCase();
    if(phoneEl) phoneEl.textContent = 
      '+7 ' + phone.slice(1,4) + ' *** ' + phone.slice(7,9) + ' ' + phone.slice(9);
    
    const fullEl = document.getElementById('profileFullName');
    if(fullEl) fullEl.value = ((user && user.name) ? user.name : '') + ((user && user.lastName) ? ' ' + user.lastName : '');
    
    // Считаем глобальный опыт для профиля
    let totalXP = 0;
    BOOKS.forEach(bb => {
      const bbs = getBookState(bb.id);
      Object.values(bbs.days).forEach(rec => {
        if(rec.practices) totalXP += rec.practices.length * 10;
        if(rec.closed) totalXP += 50;
      });
    });
    let lvlName = 'Новичок', lvlIco = '🌱';
    if (totalXP >= 2000) { lvlName = 'Легенда'; lvlIco = '👑'; }
    else if (totalXP >= 1000) { lvlName = 'Мастер'; lvlIco = '🏆'; }
    else if (totalXP >= 600) { lvlName = 'Опытный'; lvlIco = '💎'; }
    else if (totalXP >= 300) { lvlName = 'Практик'; lvlIco = '🔥'; }
    else if (totalXP >= 100) { lvlName = 'Ученик'; lvlIco = '🌿'; }
    
    const xpBadge = document.getElementById('profileXpBadge');
    
    // --- СЧЕТЧИКИ ДЛЯ ПРОФИЛЯ ---
    let totalClosedDays = 0;
    let totalPracticesDone = 0;

    BOOKS.forEach(b => {
      const closed = countClosedDays(b.id);
      totalClosedDays += closed;
      
      const bs = getBookState(b.id);
      Object.values(bs.days).forEach(rec => {
        if (rec.practices) totalPracticesDone += rec.practices.length;
      });
    });

    // Считаем подписки и подписчиков
    let subscriptionsCount = 0;
    let subscribersCount = 0;
    try {
      const { count: c1 } = await sb.from('friends').select('*', { count: 'exact', head: true }).eq('user_id', user.id);
      const { count: c2 } = await sb.from('friends').select('*', { count: 'exact', head: true }).eq('friend_id', user.id);
      subscriptionsCount = c1 || 0;
      subscribersCount = c2 || 0;
    } catch(e) {}

    const statsGrid = document.getElementById('profileStatsGrid');
    if(statsGrid) {
      statsGrid.innerHTML = `
        <div style="text-align:center; cursor:pointer;" onclick="openFollowsModal('subscriptions')">
          <div style="font-size:20px; font-weight:900; color:var(--accent-2);">${subscriptionsCount}</div>
          <div style="font-size:9px; color:var(--muted); text-transform:uppercase; font-weight:800; margin-top:2px;">Подписки</div>
        </div>
        <div style="text-align:center; cursor:pointer;" onclick="openFollowsModal('subscribers')">
          <div style="font-size:20px; font-weight:900; color:var(--warm);">${subscribersCount}</div>
          <div style="font-size:9px; color:var(--muted); text-transform:uppercase; font-weight:800; margin-top:2px;">Подписчики</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:20px; font-weight:900; color:var(--success);">${totalClosedDays}</div>
          <div style="font-size:9px; color:var(--muted); text-transform:uppercase; font-weight:800; margin-top:2px;">Дней</div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:20px; font-weight:900; color:var(--text);">${totalPracticesDone}</div>
          <div style="font-size:9px; color:var(--muted); text-transform:uppercase; font-weight:800; margin-top:2px;">Практик</div>
        </div>
      `;
    }

    // Обновляем счетчик заморозки в профиле
    const profileShieldEl = document.getElementById('profileShieldCount');
    if (profileShieldEl) profileShieldEl.textContent = state.shields || 0;

    if(xpBadge) xpBadge.textContent = `${lvlIco} ${lvlName} · ${totalXP} XP`;
    const idEl = document.getElementById('profileUserId');
    if (idEl && user) idEl.textContent = 'ID: #' + user.id.slice(0, 8).toUpperCase();
    // Показываем панель управления только админу
    const billingPanel = document.getElementById('adminBillingPanel');
    if (billingPanel) {
      if (isAdmin()) {
        billingPanel.classList.remove('hidden');
      } else {
        billingPanel.classList.add('hidden');
      }
    }
    
    // --- БЛОК ПОДПИСКИ ---
    const subEl = document.getElementById('profileSubStatus');
    if (subEl) {
      if (isAdmin()) {
        subEl.innerHTML = `
          <div style="background: linear-gradient(135deg, rgba(124,92,255,0.2), rgba(255,184,0,0.1)); border: 1.5px solid var(--accent); border-radius: var(--radius-md); padding: 16px; text-align: center; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(124,92,255,0.15); position: relative; overflow: hidden;">
            <div style="font-size: 13px; font-weight: 900; color: var(--gold); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">👑 Администратор</div>
            <div style="font-size: 12px; color: var(--text); opacity: 0.9;">У вас есть полный доступ ко всем функциям</div>
          </div>
        `;
      } else if (user.sub_until && new Date(user.sub_until) > new Date()) {
        const subDate = new Date(user.sub_until).toLocaleDateString('ru-RU');
        subEl.innerHTML = `
          <div style="background: linear-gradient(135deg, rgba(124,92,255,0.2), rgba(255,184,0,0.1)); border: 1.5px solid var(--accent); border-radius: var(--radius-md); padding: 16px; text-align: center; margin-bottom: 16px; box-shadow: 0 4px 20px rgba(124,92,255,0.15); position: relative; overflow: hidden;">
            <div style="position: absolute; top: -10px; right: -10px; font-size: 60px; opacity: 0.1;">💎</div>
            <div style="font-size: 13px; font-weight: 900; color: var(--gold); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">PRO Аккаунт</div>
            <div style="font-size: 12px; color: var(--text); opacity: 0.9;">Активен до <b>${subDate}</b></div>
          </div>
        `;
      } else {
        subEl.innerHTML = `
          <div style="background: linear-gradient(180deg, var(--card), var(--card2)); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 16px; position: relative; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
            <div style="position: absolute; top: 10px; right: 10px; font-size: 40px; opacity: 0.1;">👑</div>
            <div style="font-size: 15px; font-weight: 900; margin-bottom: 8px; color: var(--text);">Открой все возможности</div>
            <div style="font-size: 12px; color: var(--muted); margin-bottom: 16px; line-height: 1.6; text-align: left; padding-left: 10px;">
              <div style="margin-bottom: 4px;">✅ Доступ ко <b>всем</b> книгам</div>
              <div style="margin-bottom: 4px;">✅ Умная музыка и озвучка</div>
              <div>✅ Закрытое сообщество</div>
            </div>
            <button class="btn" style="margin-top:0; padding:12px; font-size:13px; background:linear-gradient(135deg, var(--accent), var(--accent-2)); box-shadow:0 6px 20px var(--accent-glow); border-radius: var(--radius-sm);" onclick="contactDev()">
              ⚡ Оформить Премиум
            </button>
          </div>
        `;
      }
    }
    
    const avaEl = document.getElementById('profileAva');
    if(avaEl) avaEl.innerHTML = getAvatarHtml(state.avatar, 70);
    
    const emojiEl = document.getElementById('emojiRow');
    if(emojiEl) emojiEl.innerHTML = 
      Object.keys(AVATAR_ICONS).map(key => `<div class="emoji-pick ${state.avatar === key ? 'on' : ''}" onclick="setAvatar('${key}')">${getAvatarHtml(key, 32)}</div>`).join('');
      
    updateSoundUI();
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
  const shieldEl = document.getElementById('shieldCount');
  if (shieldEl) shieldEl.textContent = state.shields || 0;
  const pushTog=document.getElementById('pushToggle');
  if(pushTog)pushTog.classList.toggle('on',state.pushEnabled===true);
  const mEl=document.getElementById('morningTime');
  const eEl=document.getElementById('eveningTime');
  if(mEl)mEl.textContent=state.morningTime||'07:00';
  if(eEl)eEl.textContent=state.eveningTime||'21:00';
  const vSel = document.getElementById('voiceSelect');
  if(vSel) vSel.value = state.voice || 'alena';
}

function setVoice(v) {
  state.voice = v;
  saveState();
  playSuccess();
  toast('Голос изменен');
}

async function setTheme(theme){
  state.theme=theme;
  applyTheme();
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
  document.querySelectorAll('.theme-option').forEach(el=>{
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
    alert('Ваш браузер не поддерживает уведомления');return;
  }
  
  try {
    const perm = await Notification.requestPermission();
    if(perm !== 'granted'){
      alert('Вы отклонили разрешение на уведомления. Разрешите их в настройках браузера.');
      return;
    }

    const reg = await navigator.serviceWorker.getRegistration();
    if(!reg || !reg.pushManager){
      alert('На iPhone уведомления работают только если добавить приложение на экран «Домой».');
      return;
    }

    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array('BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U')
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
    alert('Ошибка при включении: ' + e.message);
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
      badge.classList.add('hidden');
    }
  });
}
function renderNotifications(){
  const el=document.getElementById('notifList');
  if(!el)return;
  if(!notifications.length){
    el.innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px;font-size:14px">Пока нет уведомлений</div>';
    return;
  }
  el.innerHTML=notifications.map(n=>{
    let p = n.payload || {};
    if (typeof p === 'string') {
      try { p = JSON.parse(p); } catch(e) { p = {}; }
    }
    let ico='🔔',title='',text='';
    if(n.type==='msg'){
      ico='💬';
      title = p.from_name ? 'Сообщение от ' + p.from_name : 'Новое сообщение';
      text = p.text || '';
    }
    else if(n.type==='like'){
      ico='❤️';
      title='Новый лайк';
      text=p.from_name ? p.from_name + ' оценил(а) твой пост' : (p.text||'Кому-то понравился твой пост');
    }
    else if(n.type==='comment'){ico='💬';title='Новый комментарий';text=p.text||''}
    else if(n.type==='ach'){ico='🏆';title='Новая награда';text=p.title||''}
    else if(n.type==='admin'){ico='📢';title=p.title||'Объявление';text=p.text||''} 
    else if(n.type==='friend'){ico='🤝';title='Новый друг';text=p.text||''}
    else {title='Уведомление';text=p.text||''}
    
    return `<div class="notif-item ${n.read?'':'unread'}" onclick="openNotification(${n.id})">
      <div class="ni-ico">${ico}</div>
      <div class="ni-body">
        <div class="ni-title">${escapeHtml(title)}</div>
        <div class="ni-text">${escapeHtml(text)}</div>
        <div class="ni-time">${timeAgo(n.created_at)}</div>
      </div>
    </div>`;
  }).join('');
}
async function openNotification(id){
  const n=notifications.find(x=>x.id===id);if(!n)return;
  
  // Помечаем прочитанным
  if(!n.read){
    await sb.from('notifications').update({read:true}).eq('id',id);
    n.read=true;
    updateNotifBadge();
  }
  
  // Разбираем payload
  let p = n.payload || {};
  if (typeof p === 'string') {
    try { p = JSON.parse(p); } catch(e) { p = {}; }
  }

  // Логика перехода
  if(n.type==='msg' && p.from){
    // Открываем чат с отправителем
    const fromId = p.from;
    const{data:profile}=await sb.from('profiles').select('id,name,avatar,last_seen').eq('id',fromId).single();
    if(profile) openDialog(fromId, profile);
  }else if(n.type==='like'||n.type==='comment'){
    showCommunityScreen();
  }else if(n.type==='admin'){
    showSimpleModal('📢', p.title || 'Сообщение', p.text || '');
  }
  else if(n.type==='friend' && p.from){
    const{data:profile}=await sb.from('profiles').select('id,name,avatar,last_seen').eq('id',p.from).single();
    if(profile) viewUserProfile(p.from, 'feed');
  }
  
  renderNotifications();
}
async function createNotification(userId,type,payload){
  try{
    const {data, error} = await sb.from('notifications').insert({user_id:userId,type,payload}).select();
    if(error) {
      console.error('❌ Ошибка создания уведомления (возможно RLS):', error);
    } else {
      console.log('✅ Уведомление создано в БД:', data);
    }
  }catch(e){
    console.error('Критическая ошибка уведомления:', e);
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

const msgBtn = document.getElementById('publicMsgBtn');
  if(msgBtn) msgBtn.style.display = 'none';
  const friendBtn = document.getElementById('publicFriendBtn');
  if(friendBtn) friendBtn.style.display = 'none';
  hideAll();

async function showPublicProfile(){
  await ensureSlug();
  document.getElementById('ppAva').textContent=state.avatar||'👤';
  document.getElementById('ppName').textContent=user.name||'Друг';
  let totalFire=0,totalBest=0,booksCount=0;
  BOOKS.forEach(b=>{
    const s=calcStreak(b.id),best=calcBest(b.id);
    totalFire=Math.max(totalFire,s);totalBest=Math.max(totalBest,best);
    if(countClosedDays(b.id)>0)booksCount++;
  });
  const lv=getLevel(countClosedDays(currentBook?.id||BOOKS[0]?.id||''));
  document.getElementById('ppStatus').textContent=`${lv.ico} ${lv.name}`;
  document.getElementById('ppFire').textContent=totalFire;
  document.getElementById('ppRecord').textContent=totalBest;
  document.getElementById('ppBooks').textContent=booksCount;
  hideAll();
  document.getElementById('publicProfileScreen').classList.remove('hidden');
}
async function copyPublicLink(){
  await ensureSlug(); // Ждем генерации ссылки
  const url='https://andger.ru/u/'+(state.slug||'me');
  copyToClipboard(url);
  toast('Скопировано');
}
async function sharePublicProfile(){
  await ensureSlug(); // Ждем генерации ссылки
  const url='https://andger.ru/u/'+(state.slug||'me');
  if(navigator.share) {
    navigator.share({title:user.name, text:'Мой прогресс в ANDGER', url});
  } else {
    copyPublicLink();
  }
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
  document.getElementById('journalAvatar').innerHTML = getAvatarHtml(state.avatar, 24);
  
  // 1. Рисуем фильтры по книгам в виде карточек Главной страницы
  const filterWrap = document.getElementById('journalFilters');
  
  // Собираем список: сначала "Все", потом книги
  const filterList = [{ id: 'all', title: 'Все записи', author: 'Общий дневник', emoji: 'book', days: 0, isAll: true }];
  BOOKS.forEach(b => filterList.push(b));

  let filterHtml = '';
  let dotsHtml = '';
  
  filterList.forEach(item => {
    const isActive = journalFilter === item.id;
    
    let cardContent = '';
    
    if (item.isAll) {
       // Карточка "Все записи"
       cardContent = `
        <div class="abc-head">
          <div class="abc-emoji" style="display:flex; align-items:center; justify-content:center;">${getSvgIcon('book', 36, 'var(--accent-2)')}</div>
           <div class="abc-info">
            <div class="abc-title">Все книги</div>
            <div style="font-size:12px; color:var(--accent-2); font-weight:700; margin-bottom:4px;">Общий дневник</div>
            <div class="abc-day">Все записи</div>
          </div>
        </div>
        <div class="abc-bar"><div class="abc-fill" style="width:100%"></div></div>
        <div class="abc-meta" style="justify-content:space-between;">
          <span>Показать всё</span>
          <span>Прогресс: <b>100%</b></span>
        </div>
       `;
    } else {
       // Карточка конкретной книги (как на Главной)
       const bs = getBookState(item.id);
       const closed = countClosedDays(item.id);
       const pct = Math.round(closed / (item.days || 1) * 100);
       const day = currentDay(item.id);
       
       cardContent = `
        <div class="abc-head">
          <div class="abc-emoji" style="display:flex; align-items:center; justify-content:center;">${getSvgIcon(item.emoji, 36, 'var(--accent-2)')}</div>
           <div class="abc-info">
            <div class="abc-title">${item.title}</div>
            <div style="font-size:12px; color:var(--accent-2); font-weight:700; margin-bottom:4px;">${item.author || 'Неизвестный автор'}</div>
            <div class="abc-day">День ${day} из ${item.days}</div>
          </div>
        </div>
        <div class="abc-bar"><div class="abc-fill" style="width:${pct}%"></div></div>
        <div class="abc-meta">
          <span>Прогресс: <b>${pct}%</b></span>
        </div>
       `;
    }

    // Убрали жесткие min-width/max-width, теперь ширина берется из styles.css (как на Главной)
    filterHtml += `
      <div class="active-book-card" 
           onclick="setJournalFilter('${item.id}')" 
           style="${isActive ? 'border-color: var(--accent); box-shadow: 0 0 15px rgba(124,92,255,0.15);' : 'opacity: 0.6;'}">
        ${cardContent}
      </div>
    `;
    
    dotsHtml += `<div class="b-dot ${isActive ? 'on' : ''}"></div>`;
  });
  
  filterWrap.innerHTML = filterHtml;
  document.getElementById('journalDots').innerHTML = dotsHtml;

  // 2. Тянем записи из БД
  let query = sb.from('notes').select('*').eq('user_id', user.id).order('created_at', {ascending: false});
  if (journalFilter !== 'all') {
    query = query.eq('book_id', journalFilter);
  }
  const { data: notes } = await query;

  // 3. Рисуем карточки записей
  let historyHtml = '';
  if (!notes || !notes.length) {
    historyHtml = '<div style="text-align:center; color:var(--muted); padding:40px 20px;">Пока нет записей.<br>Сделай практику и оставь заметку!</div>';
  } else {
    historyHtml = notes.map(n => {
      const d = new Date(n.created_at);
      const dateStr = `${d.getDate()} ${['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'][d.getMonth()]} · ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
      
      const b = BOOKS.find(x => x.id === n.book_id);
      const bookEmoji = b ? b.emoji : '📚';

      return `<div class="jh-entry" style="position:relative;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div style="font-size:11px; font-weight:800; color:var(--accent-2); text-transform:uppercase;">${bookEmoji} ${n.practice_title}</div>
          <div style="font-size:10px; color:var(--muted);">${dateStr}</div>
        </div>
        <div class="jh-a">${escapeHtml(n.text)}</div>
        <div style="text-align:right; margin-top:8px;">
          <span style="font-size:16px; color:var(--muted); cursor:pointer;" onclick="deleteNote(${n.id})">🗑</span>
        </div>
      </div>`;
    }).join('');
  }

  // 4. Статистика
  const statsHtml = `
    <div style="display:flex; gap:10px; margin-bottom:20px;">
      <div style="flex:1; background:linear-gradient(135deg, var(--card), var(--card2)); border:1px solid var(--border); border-radius:var(--radius-md); padding:16px; text-align:center; box-shadow: var(--shadow-sm);">
        <div style="font-size:28px; font-weight:900; color:var(--accent-2);">${notes ? notes.length : 0}</div>
        <div style="font-size:11px; color:var(--muted); text-transform:uppercase; font-weight:800; margin-top:4px; letter-spacing:1px;">Записей</div>
      </div>
    </div>
  `;

  document.getElementById('journalHistory').innerHTML = statsHtml + historyHtml;
  renderMoodTracker(); // Оставляем график настроения
  renderMoodChart();
  // Настройка свайпа для графика настроения
  const chartEl = document.getElementById('moodChartWrap');
  if (chartEl && !chartEl.dataset.swipeInit) {
    chartEl.dataset.swipeInit = 'true';
    let startX = 0;
    let startY = 0;
    
    chartEl.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, {passive: true});
    
    chartEl.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          if (moodWeekOffset < 1) { moodWeekOffset++; renderMoodChart(); }
        } else {
          if (moodWeekOffset > -1) { moodWeekOffset--; renderMoodChart(); }
        }
      }
    }, {passive: true});
  }
}

function setJournalFilter(bookId) {
  journalFilter = bookId;
  renderJournal(); // Перерисовываем всё
  playClick();
}

async function deleteNote(noteId) {
  showCustomConfirm('Удалить запись?', 'Она пропадет из дневника навсегда.', async () => {
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

  try {
    await sb.from('journals').upsert({
      user_id: user.id,
      date: today,
      q1: q1,
      q2: q2,
      q3: q3
    }, { onConflict: 'user_id,date' });

    playSuccess();
    const msg = document.getElementById('journalMsg');
    msg.textContent = '✓ Сохранено';
    setTimeout(() => msg.textContent = '', 2000);
    renderJournal(); // Перерисовываем, чтобы обновилась история
  } catch(e) {
    toast('Ошибка сохранения', 'danger');
  }
}

// ─── НАСТРОЕНИЕ ───
async function renderMoodTracker(){
  const today=todayStr();
  let moods={morning:null,evening:null};
  try{
    const{data}=await sb.from('moods').select('*').eq('user_id',user.id).eq('date',today).maybeSingle();
    if(data)moods=data;
  }catch(e){}
  ['morning','evening'].forEach(period=>{
    const el=document.getElementById('mood'+(period==='morning'?'Morning':'Evening'));
    if(!el)return;
    el.innerHTML=MOODS.map((m,i)=>
      `<div class="mood-emoji ${moods[period]===i+1?'on':''}" onclick="setMood('${period}',${i+1})">${m}</div>`
    ).join('');
  });
}
// ─── ГРАФИК НАСТРОЕНИЯ ───
async function renderMoodChart() {
  const wrap = document.getElementById('moodChartWrap');
  if (!wrap) return;

  const today = new Date();
  // Применяем сдвиг недели (каждый шаг - это 7 дней)
  const baseDate = new Date(today);
  baseDate.setDate(today.getDate() + (moodWeekOffset * 7));

  // Находим понедельник нужной недели
  const dayOfWeek = baseDate.getDay() === 0 ? 6 : baseDate.getDay() - 1; 
  const monday = new Date(baseDate);
  monday.setDate(baseDate.getDate() - dayOfWeek);

  const days = [];
  const dows = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    days.push({
      date: localDate(d),
      dow: dows[i],
      isFuture: d > today
    });
  }

  try {
    const startDate = days[0].date;
    const endDate = days[6].date;
    // Красивые даты для заголовка
    const sD = startDate.split('-');
    const eD = endDate.split('-');
    const dateLabel = `${sD[2]}.${sD[1]} — ${eD[2]}.${eD[1]}`;
    const titleEl = document.getElementById('moodChartDates');
    if (titleEl) titleEl.textContent = dateLabel;
    const { data } = await sb.from('moods').select('*').eq('user_id', user.id).gte('date', startDate).lte('date', endDate);
    const moodsMap = {};
    (data || []).forEach(m => moodsMap[m.date] = m);

    let html = '';
    days.forEach(day => {
      const m = moodsMap[day.date] || {};
      let val = 0;
      let count = 0;
      if (m.morning) { val += m.morning; count++; }
      if (m.evening) { val += m.evening; count++; }
      
      const avg = count > 0 ? (val / count) : 0;
      const heightPct = Math.max(4, (avg / 5) * 100); 
      const isEmpty = avg === 0;
      const opacity = day.isFuture ? '0.3' : '1';

      html += `
        <div class="mc-bar-wrap" style="opacity: ${opacity};">
          <div class="mc-val">${isEmpty ? '' : avg.toFixed(1)}</div>
          <div class="mc-bar ${isEmpty ? 'empty' : ''}" style="height: ${isEmpty ? 4 : heightPct}%"></div>
          <div class="mc-label">${day.dow}</div>
        </div>
      `;
    });
    wrap.innerHTML = html;

    // Отрисовка точек
    const dotsEl = document.getElementById('moodChartDots');
    if (dotsEl) {
      dotsEl.innerHTML = `
        <div class="b-dot ${moodWeekOffset === -1 ? 'on' : ''}" onclick="changeMoodWeek(-1)"></div>
        <div class="b-dot ${moodWeekOffset === 0 ? 'on' : ''}" onclick="changeMoodWeek(0)"></div>
        <div class="b-dot ${moodWeekOffset === 1 ? 'on' : ''}" onclick="changeMoodWeek(1)"></div>
      `;
    }

  } catch (e) {
    console.error('Ошибка графика настроения:', e);
  }
}

// Функция для смены недели графика
function changeMoodWeek(dir) {
  moodWeekOffset = dir;
  renderMoodChart();
  playClick();
}
async function setMood(period,val){
  const today=todayStr();
  playCheck();
  
  // 1. Мгновенно красим выбранный эмодзи (чтобы был отклик)
  const el=document.getElementById('mood'+(period==='morning'?'Morning':'Evening'));
  if(el){
    const emojis = el.querySelectorAll('.mood-emoji');
    emojis.forEach((e, idx) => {
      if (idx === val - 1) e.classList.add('on');
      else e.classList.remove('on');
    });
  }

  // 2. Сохраняем в базу данных
  try{
    await sb.from('moods').upsert({user_id:user.id,date:today,[period]:val},{onConflict:'user_id,date'});
    renderMoodChart();
  }catch(e){toast('Ошибка сохранения','danger')}
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

// ─── ЛЕНТА ───
async function loadFeed(){
    // Показываем скелетоны, пока грузим данные
  document.getElementById('feedList').innerHTML = `
    <div class="skeleton skeleton-post">
      <div class="skeleton-post-head"><div class="skeleton skeleton-avatar"></div><div style="flex:1"><div class="skeleton skeleton-text-1" style="width:40%"></div><div class="skeleton skeleton-text-2" style="width:20%"></div></div></div>
      <div class="skeleton skeleton-post-text"></div>
    </div>
    <div class="skeleton skeleton-post">
      <div class="skeleton-post-head"><div class="skeleton skeleton-avatar"></div><div style="flex:1"><div class="skeleton skeleton-text-1" style="width:50%"></div><div class="skeleton skeleton-text-2" style="width:30%"></div></div></div>
      <div class="skeleton skeleton-post-text"></div>
    </div>
  `;
  const{data,error}=await sb.from('messages').select('*').eq('room','feed')
    .order('created_at',{ascending:false}).limit(50);
  if(error){
    document.getElementById('feedList').innerHTML='<div style="color:var(--danger);text-align:center;padding:20px">Ошибка</div>';
    return;
  }
  if(!data||!data.length){
    document.getElementById('feedList').innerHTML=
      '<div style="color:var(--muted);text-align:center;padding:40px 20px;font-size:14px">Пока пусто.<br>Напиши первое сообщение ✍️</div>';
    return;
  }
  const ids=data.map(m=>m.id);
  let likes=[],comments=[];
  try{
    const{data:l}=await sb.from('likes').select('*').in('message_id',ids);
    likes=l||[];
    const{data:c}=await sb.from('comments').select('*').in('message_id',ids).order('created_at');
    comments=c||[];
  }catch(e){}
    document.getElementById('feedList').innerHTML=data.map(m=>{
    const own=m.user_id===user.id;
    const t=timeAgo(m.created_at);
    const postLikes=likes.filter(l=>l.message_id===m.id);
    const postComments=comments.filter(c=>c.message_id===m.id);
    
    // Считаем лайки по типам
    const myLike = postLikes.find(l => l.user_id === user.id);
    const myType = myLike ? (myLike.type || 'heart') : null;
    
    const countHeart = postLikes.filter(l => (l.type === 'heart' || !l.type)).length;
    const countFire = postLikes.filter(l => l.type === 'fire').length;
    const countMuscle = postLikes.filter(l => l.type === 'muscle').length;
    const countClap = postLikes.filter(l => l.type === 'clap').length;
    
    return `<div class="feed-post">
      <div class="fp-head" onclick="viewUserProfile('${m.user_id}', 'feed')" style="cursor:pointer">
        <div class="fp-ava">${getAvatarHtml(m.user_avatar, 20)}</div>
        <div class="fp-info">
          <div class="fp-name">${escapeHtml(m.user_name||'Аноним')}${own?' · ты':''}</div>
          <div class="fp-time">${new Date(m.created_at).toLocaleDateString('ru-RU', {day: 'numeric', month: 'short'})} · ${t}</div>
        </div>
      </div>
      <div class="fp-text">${escapeHtml(m.text)}</div>
          <div class="fp-actions" style="display:flex; justify-content:space-between; width:100%;">
        <div style="display:flex; gap:12px;">
          <div class="fp-action ${myType === 'heart' ? 'on' : ''}" onclick="event.stopPropagation(); toggleLike(${m.id},'heart',this)" data-type="heart" style="padding: 4px 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${myType === 'heart' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <span>${countHeart>0?countHeart:''}</span>
          </div>
          <div class="fp-action ${myType === 'fire' ? 'on' : ''}" onclick="event.stopPropagation(); toggleLike(${m.id},'fire',this)" data-type="fire" style="padding: 4px 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${myType === 'fire' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
            <span>${countFire>0?countFire:''}</span>
          </div>
          <div class="fp-action ${myType === 'muscle' ? 'on' : ''}" onclick="event.stopPropagation(); toggleLike(${m.id},'muscle',this)" data-type="muscle" style="padding: 4px 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${myType === 'muscle' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13 4-13-3-6"></path><path d="M2 9h20"></path></svg>
            <span>${countMuscle>0?countMuscle:''}</span>
          </div>
          <div class="fp-action ${myType === 'clap' ? 'on' : ''}" onclick="event.stopPropagation(); toggleLike(${m.id},'clap',this)" data-type="clap" style="padding: 4px 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${myType === 'clap' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
            <span>${countClap>0?countClap:''}</span>
          </div>
        </div>
                <div style="display:flex; gap:12px;">
          <div class="fp-action" onclick="event.stopPropagation(); toggleComments(${m.id})">💬 <span>${postComments.length}</span></div>
          <div class="fp-action" onclick="event.stopPropagation(); reportPost(${m.id},'${m.user_id}')" style="color:var(--danger);">🚩</div>
        </div>
      </div>
      <div class="feed-comments" id="comments-${m.id}">
        ${postComments.map(c=>`<div class="feed-comment"><div class="fc-ava">${getAvatarHtml(c.user_avatar, 16)}</div><div class="fc-body"><div class="fc-name">${escapeHtml(c.user_name||'Аноним')}</div><div class="fc-text">${escapeHtml(c.text)}</div></div></div>`).join('')}
        <div class="feed-comment-form"><input type="text" id="cin-${m.id}" placeholder="Ответить..." maxlength="300"><button class="feed-post-btn" style="width:36px;height:36px;font-size:16px" onclick="sendComment(${m.id},'${m.user_id}')">➤</button></div>
      </div>
    </div>`;
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

async function toggleLike(msgId, type, el){
  // Мгновенный визуальный отклик (оптимистичный UI)
  const isCurrentlyOn = el.classList.contains('on');
  const postEl = el.closest('.feed-post');
  
  if (postEl) {
    // Убираем подсветку у всех реакций в этом посте
    postEl.querySelectorAll('.fp-action').forEach(btn => btn.classList.remove('on'));
    // Если реакция не была нажата ранее, подсвечиваем текущую
    if (!isCurrentlyOn) el.classList.add('on');
  }

  try {
    const { data: existing } = await sb.from('likes').select('*')
      .eq('message_id', msgId).eq('user_id', user.id).maybeSingle();

    if (existing) {
      if (existing.type === type || (!existing.type && type === 'heart')) {
        // Удаляем лайк
        await sb.from('likes').delete().eq('message_id', msgId).eq('user_id', user.id);
      } else {
        // Меняем тип лайка
        await sb.from('likes').update({ type: type }).eq('message_id', msgId).eq('user_id', user.id);
        playCheck();
      }
    } else {
      // Ставим новый лайк
      await sb.from('likes').insert({ message_id: msgId, user_id: user.id, type: type });
      playCheck();
      
      const { data: post } = await sb.from('messages').select('user_id').eq('id', msgId).single();
      if (post && post.user_id !== user.id) {
        await createNotification(post.user_id, 'like', {
          text: (user.name || 'Кто-то') + ' отреагировал на твой пост',
          from: user.id,
          msg_id: msgId
        });
      }
    }

    // Обновляем цифры конкретно для этого поста (без перезагрузки всей ленты)
    if (postEl) {
      const { data: allLikes } = await sb.from('likes').select('*').eq('message_id', msgId);
      const actions = postEl.querySelectorAll('.fp-action');
      const typesList = ['heart', 'fire', 'muscle', 'clap'];
      const myLike = (allLikes || []).find(l => l.user_id === user.id);
      const myType = myLike ? (myLike.type || 'heart') : null;

      typesList.forEach((t) => {
        const count = (allLikes || []).filter(l => (l.type === t || (!l.type && t === 'heart'))).length;
        const actionDiv = Array.from(actions).find(a => a.dataset.type === t);
        
        if (actionDiv) {
          // Обновляем только цифру, не трогая SVG
          const span = actionDiv.querySelector('span');
          if (span) span.textContent = count > 0 ? count : '';
          
          if (myType === t) {
            actionDiv.classList.add('on');
            const svg = actionDiv.querySelector('svg');
            if (svg) svg.setAttribute('fill', 'currentColor');
          } else {
            actionDiv.classList.remove('on');
            const svg = actionDiv.querySelector('svg');
            if (svg) svg.setAttribute('fill', 'none');
          }
        }
      });
    } // <--- ВОТ ЭТА СКОБКА БЫЛА ПОТЕРЯНА

  } catch(e) {
    console.error(e);
    toast('Ошибка','danger');
    if(postEl) loadFeed(); // Откат в случае ошибки сети
  }
}

function toggleComments(msgId){
  const el=document.getElementById('comments-'+msgId);
  if(el)el.classList.toggle('open');
}

async function sendComment(msgId,postAuthorId){
  const inp=document.getElementById('cin-'+msgId);
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
    .on('postgres_changes',{event:'*',schema:'public',table:'messages',filter:'room=eq.feed'},()=>{
      if(communityTab==='feed'&&!document.getElementById('communityScreen').classList.contains('hidden')){
        loadFeed();
      }
    })
    .on('postgres_changes',{event:'*',schema:'public',table:'likes'},()=>{
      if(communityTab==='feed'&&!document.getElementById('communityScreen').classList.contains('hidden')){
        loadFeed();
      }
    })
    .on('postgres_changes',{event:'*',schema:'public',table:'comments'},()=>{
      if(communityTab==='feed'&&!document.getElementById('communityScreen').classList.contains('hidden')){
        loadFeed();
      }
    })
    .subscribe();
}
// ─── СПИСОК ЧАТОВ ───
async function loadChats(){
  const el=document.getElementById('chatsList');
  if(!el)return;

  // 1. Показываем скелетоны при загрузке
  el.innerHTML = `
    <div class="skeleton skeleton-book"><div class="skeleton skeleton-avatar" style="border-radius:50%"></div><div style="flex:1"><div class="skeleton skeleton-text-1"></div><div class="skeleton skeleton-text-2"></div></div></div>
    <div class="skeleton skeleton-book"><div class="skeleton skeleton-avatar" style="border-radius:50%"></div><div style="flex:1"><div class="skeleton skeleton-text-1"></div><div class="skeleton skeleton-text-2"></div></div></div>
  `;

  try{
    const{data:msgs,error}=await sb.from('private_messages')
      .select('*')
      .or(`from_user.eq.${user.id},to_user.eq.${user.id}`)
      .order('created_at',{ascending:false})
      .limit(200);
      
    if(error)throw error;

    // Группируем по собеседнику — берём последнее сообщение
    const dialogs={};
    (msgs||[]).forEach(m=>{
      const otherId=m.from_user===user.id?m.to_user:m.from_user;
      if(!dialogs[otherId])dialogs[otherId]={otherId,last:m,unread:0};
      if(m.to_user===user.id&&!m.read)dialogs[otherId].unread++;
    });

    const ids=Object.keys(dialogs);
    if(!ids.length){
      el.innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px;font-size:14px">Пока нет диалогов.<br><br>Найди человека в разделе «Сообщество» и напиши ему 👥</div>';
      return;
    }

    const{data:profiles}=await sb.from('profiles').select('id,name,avatar').in('id',ids);
    const profMap={};
    (profiles||[]).forEach(p=>profMap[p.id]=p);

    let html='<div class="chats-list">';
    ids.forEach(id=>{
      const d=dialogs[id];
      const p=profMap[id]||{name:'Участник',avatar:'👤'};
      const preview=d.last.from_user===user.id?'Ты: ':'';
      html+=`<div class="chat-row">
        <div class="cr-ava" onclick="event.stopPropagation(); viewUserProfile('${id}', 'chats')" style="cursor:pointer;">${getAvatarHtml(p.avatar, 24)}</div>
        <div class="cr-info" onclick="openDialog('${id}')" style="cursor:pointer;">
          <div class="cr-name">
            <span onclick="event.stopPropagation(); viewUserProfile('${id}', 'chats')">${escapeHtml(p.name||'Участник')}</span>
            <span class="cr-time">${timeAgo(d.last.created_at)}</span>
          </div>
          <div class="cr-preview">${preview}${escapeHtml((d.last.text||'').slice(0,40))}</div>
        </div>
        ${d.unread>0?`<div class="cr-unread">${d.unread}</div>`:''}
      </div>`;
    });
    html+='</div>';
    el.innerHTML=html;

  }catch(e){
    el.innerHTML='<div style="color:var(--danger);text-align:center;padding:20px">Ошибка загрузки</div>';
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
        statusEl.textContent = 'был(а) ' + timeAgo(p.last_seen);
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
  window.scrollTo(0, document.body.scrollHeight);
  window.scrollTo(0,0);

  // Пометить входящие как прочитанные
  try{
    await sb.from('private_messages').update({read:true})
      .eq('from_user',otherId).eq('to_user',user.id).eq('read',false);
  }catch(e){}

  await loadDialog();
  subscribeDialog();
  setTimeout(()=>{
    const inp=document.getElementById('dialogInput');
    if(inp)inp.focus();
  },300);
  // Фикс клавиатуры для iOS/Android
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
      const wrap = document.getElementById('dialogInputWrap');
      if (!wrap) return;
      const isKeyboardOpen = window.visualViewport.height < window.innerHeight - 100;
      
      if (isKeyboardOpen) {
        wrap.style.bottom = `${window.innerHeight - window.visualViewport.height + 16}px`;
      } else {
        wrap.style.bottom = 'calc(16px + var(--safe-bottom))';
      }
    });
  }
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

      return `<div class="msg-bubble ${own?'own':'other'}">${escapeHtml(m.text)}<span class="msg-time">${t} ${tick}</span></div>`;
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
    await sb.from('private_messages').insert({
      from_user:user.id,
      to_user:currentDialogUserId,
      text
    });
    playCheck();
    // Уведомление получателю
    await createNotification(currentDialogUserId,'msg',{
      text: text.slice(0, 50),
      from_name: user.name || 'Пользователь',
      from: user.id
    });
    await loadDialog();
  }catch(e){toast('Ошибка отправки','danger')}
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

// ─── ЛЮДИ / ТОП ───
async function loadPeople(){
  const el=document.getElementById('leadersList');
  if(!el)return;
  el.innerHTML='<div style="color:var(--muted);text-align:center;padding:20px">Загрузка...</div>';
  try{
    const weekAgo=new Date(Date.now()-7*86400000).toISOString();
    const{data:profiles}=await sb.from('profiles').select('id,name,avatar');
    const{data:prog}=await sb.from('progress').select('*');

    const scores={};
    (prog||[]).forEach(p=>{
      const d=p.data||{},days=d.days||{};
      let closed=0;
      Object.keys(days).forEach(k=>{
        if(days[k].closed&&k>=weekAgo.slice(0,10))closed++;
      });
      scores[p.user_id]=(scores[p.user_id]||0)+closed;
    });

    const list=(profiles||[])
      .filter(p=>p.id!==user.id)
      .map(p=>({...p,score:scores[p.id]||0}))
      .sort((a,b)=>b.score-a.score)
      .slice(0,30);

    if(!list.length){
      el.innerHTML='<div style="color:var(--muted);text-align:center;padding:40px 20px">Пока никого нет</div>';
      return;
    }

    const top3=list.slice(0,3);
    const rest=list.slice(3);

    let html='';
    // Топ-3
    if(top3.some(p=>p.score>0)){
      html+='<h3 class="section-title">🔥 Топ недели</h3>';
      top3.forEach((p,i)=>{
        if(p.score<=0)return;
        const medal=['🥇','🥈','🥉'][i];
        html+=`<div class="admin-item" onclick="viewUserProfile('${p.id}', 'people')">
          <div class="ai-ava">${getAvatarHtml(p.avatar, 20)}</div>
          <div class="ai-info">
            <div class="ai-name">${escapeHtml(p.name||'Аноним')}</div>
            <div class="ai-phone">🔥 ${p.score} ${plural(p.score,'день','дня','дней')} за неделю</div>
          </div>
          <div style="font-size:22px">${medal}</div>
        </div>`;
      });
    }
    // Остальные
    if(rest.length){
      html+='<h3 class="section-title">👥 Все участники</h3>';
      rest.forEach(p=>{
        html+=`<div class="admin-item" onclick="viewUserProfile('${p.id}', 'people')">
          <div class="ai-ava">${getAvatarHtml(p.avatar, 20)}</div>
          <div class="ai-info">
            <div class="ai-name">${escapeHtml(p.name||'Аноним')}</div>
            <div class="ai-phone">${p.score>0?'🔥 '+p.score+' за неделю':'Без активности'}</div>
          </div>
          <div class="ai-arrow">›</div>
        </div>`;
      });
    }
    el.innerHTML=html;
  }catch(e){
    el.innerHTML='<div style="color:var(--danger);text-align:center;padding:20px">Ошибка загрузки</div>';
  }
}

async function openUserProfile(userId){
  if(userId===user.id){showProfile();return}
  const{data:p}=await sb.from('profiles').select('id,name,avatar').eq('id',userId).single();
  if(!p)return;
  const ok=confirm('Написать '+(p.name||'участнику')+'?');
  if(ok)openDialog(userId,p);
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
        // Показать тост
        if(payload.new.type==='msg'){
          toast('💬 Новое сообщение');
          playCheck();
        }else if(payload.new.type==='like'){
          toast('❤️ Новый лайк');
        }else if(payload.new.type==='comment'){
          toast('💬 Новый комментарий');
        }
      })
    .subscribe();
}
// ═══════════════════════════════════════════════
// АДМИНКА
// ═══════════════════════════════════════════════

function switchAdminTab(tab, el){
  document.querySelectorAll('.admin-tab').forEach(t=>t.classList.remove('on'));
  if(el) el.classList.add('on');

  // Убираем класс hidden у всех вкладок, чтобы они выстроились в ряд
  ['adminDashboard', 'adminUsers', 'adminBooks', 'adminReports', 'adminSystem', 'adminTexts', 'adminFaq', 'adminSubs'].forEach(id=>{
    document.getElementById(id)?.classList.remove('hidden');
  });

  // Определяем, к какой вкладке скроллить
  let targetId = 'adminDashboard';
  if (tab === 'users') targetId = 'adminUsers';
  else if (tab === 'books') targetId = 'adminBooks';
  else if (tab === 'reports') targetId = 'adminReports';
  else if (tab === 'system') targetId = 'adminSystem';
  else if (tab === 'texts') targetId = 'adminTexts';
  else if (tab === 'faq') targetId = 'adminFaq';
  else if (tab === 'subs') targetId = 'adminSubs';

  const wrapper = document.getElementById('adminSwipeWrapper');
  const targetEl = document.getElementById(targetId);
  
  if (wrapper && targetEl) {
    // Плавно скроллим к нужной вкладке
    wrapper.scrollTo({ left: targetEl.offsetLeft - wrapper.offsetLeft, behavior: 'smooth' });
  }

  // Загружаем данные для нужной вкладки
  if(tab==='dashboard') renderAdminDashboard();
  else if(tab==='users') loadAdminUsers();
  else if(tab==='books') loadAdminBooks();
  else if(tab==='reports') loadAdminReports();
  else if(tab==='system') { renderSystem(); loadAdminQuotes(); }
  else if(tab==='texts') loadAdminTexts();
  else if(tab==='faq') loadAdminFaq();
  else if(tab==='subs') loadAdminSubs();
  // Обновляем точки
  const tabs = Array.from(document.querySelectorAll('.admin-tab'));
  const activeIndex = tabs.findIndex(t => t.classList.contains('on'));
  const dotsWrap = document.getElementById('adminTabDots');
  if (dotsWrap) {
    dotsWrap.innerHTML = tabs.map((t, i) => `<div class="b-dot ${i === activeIndex ? 'on' : ''}"></div>`).join('');
  }
}

async function showAdmin(){
  if(!isAdmin())return;
  hideAll();
  document.getElementById('adminScreen').classList.remove('hidden');
  document.getElementById('adminDetailWrap').innerHTML='';
  document.getElementById('adminSearch').value='';
  adminFilter='all';
  document.querySelectorAll('.admin-filter').forEach((f,i)=>f.classList.toggle('on',i===0));
  document.querySelectorAll('.admin-tab').forEach((t,i)=>t.classList.toggle('on',i===0));
  
  await loadAdminUsers(); // Загружаем юзеров в память
  renderAdminDashboard(); // Рисуем графики
}

function renderAdminDashboard() {
  const el = document.getElementById('dashboardContent');
  if (!el || !adminAllUsers.length) return;

  // 1. Считаем деньги и подписки
  let activeSubs = 0;
  let expiredSubs = 0;
  let freeUsers = 0;
  
  adminAllUsers.forEach(p => {
    if (p.sub_until) {
      if (new Date(p.sub_until) > new Date()) activeSubs++;
      else expiredSubs++;
    } else {
      freeUsers++;
    }
  });

  // Предполагаемая выручка (если подписка 299 руб)
  const estimatedRevenue = activeSubs * 299;

  // 2. Считаем активность за сегодня
  const today = new Date().toISOString().slice(0, 10);
  const activeToday = adminAllUsers.filter(p => p.last_seen && p.last_seen.slice(0, 10) === today).length;

  el.innerHTML = `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px;">
      
      <!-- Карточка выручки -->
      <div class="admin-detail" style="grid-column: span 2; background:linear-gradient(135deg, rgba(62,207,142,0.15), var(--card)); border-color:var(--success); padding:20px; text-align:center;">
        <div style="font-size:12px; font-weight:800; color:var(--muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">Примерная выручка (MRR)</div>
        <div style="font-size:32px; font-weight:900; color:var(--success);">${estimatedRevenue.toLocaleString('ru-RU')} ₽</div>
        <div style="font-size:11px; color:var(--muted); margin-top:4px;">(Активных подписок: ${activeSubs})</div>
      </div>

      <!-- Карточка активности -->
      <div class="admin-detail" style="text-align:center; padding:16px;">
        <div style="font-size:24px; font-weight:900; color:var(--accent-2);">${activeToday}</div>
        <div style="font-size:11px; color:var(--muted); font-weight:800; margin-top:4px;">Зашли сегодня</div>
      </div>

      <!-- Карточка бесплатных -->
      <div class="admin-detail" style="text-align:center; padding:16px;">
        <div style="font-size:24px; font-weight:900; color:var(--warm);">${freeUsers}</div>
        <div style="font-size:11px; color:var(--muted); font-weight:800; margin-top:4px;">Без подписки</div>
      </div>
      
    </div>

    <h3 class="section-title" style="margin-top:20px;">Быстрые действия</h3>
    <div style="display:flex; flex-direction:column; gap:10px;">
      <button class="btn" style="margin-top:0; background:var(--card2); color:var(--text); border:1px solid var(--border);" onclick="switchAdminTab('users', document.querySelectorAll('.admin-tab')[1])">
        👥 Перейти к списку пользователей
      </button>
      <button class="btn" style="margin-top:0; background:var(--card2); color:var(--text); border:1px solid var(--border);" onclick="switchAdminTab('system', document.querySelectorAll('.admin-tab')[4])">
        📢 Сделать рассылку уведомлений
      </button>
    </div>
  `;
}

async function loadAdminUsers(){
  const{data,error}=await sb.from('profiles').select('*').order('created_at',{ascending:false});
  if(error){
    document.getElementById('adminUserList').innerHTML='<div style="color:var(--danger);padding:20px;text-align:center">Ошибка загрузки</div>';
    return;
  }
  adminAllUsers=data||[];
  const now=Date.now();
  const active=adminAllUsers.filter(p=>p.last_seen&&(now-new Date(p.last_seen).getTime())<30*86400000).length;
  const today=adminAllUsers.filter(p=>p.last_seen&&p.last_seen.slice(0,10)===todayStr()).length;
  document.getElementById('adminUsersCount').textContent=adminAllUsers.length;
  document.getElementById('adminActiveCount').textContent=active;
  document.getElementById('adminTodayCount').textContent=today;
  renderAdminList(adminAllUsers);
}

function renderAdminList(list){
  if(!list.length){
    document.getElementById('adminUserList').innerHTML='<div style="color:var(--muted);text-align:center;padding:20px">Никого не найдено</div>';
    return;
  }
  document.getElementById('adminUserList').innerHTML=list.map(p=>{
    const isMe=p.id===user.id;
    const phone=isMe?user.phone:(p.phone||'');
    const phoneShown=phone?'+7 ('+phone.slice(1,4)+') '+phone.slice(4,7)+'-'+phone.slice(7,9)+'-'+phone.slice(9):'—';
    let subBadge = '';
    if (p.sub_until && new Date(p.sub_until) > new Date()) {
      subBadge = `<span style="color:var(--success); font-size:14px; margin-left:6px;">💎</span>`;
    }

    return `<div class="admin-item" style="display:flex; justify-content:space-between;">
      <div style="display:flex; gap:12px; align-items:center; flex:1;" onclick="openAdminUser('${p.id}')">
        <div class="ai-ava">${getAvatarHtml(p.avatar, 20)}</div>
        <div class="ai-info">
          <div class="ai-name">${escapeHtml(p.name||'Без имени')} ${p.is_admin?'👑':''} ${isMe?'(ты)':''} ${p.blocked?'🚫':''} ${subBadge}</div>
          <div class="ai-phone">${phoneShown}</div>
        </div>
      </div>
      
      <!-- БЫСТРАЯ ВЫДАЧА ПОДПИСКИ -->
      <button class="btn-small-inline" style="margin:0; padding:8px 10px; font-size:10px; background:transparent; border: 1px solid var(--success); color:var(--success); box-shadow:none;" onclick="event.stopPropagation(); quickGrantSub('${p.id}')">+30д</button>
    </div>`;
  }).join('');
}

function setAdminFilter(f,el){
  adminFilter=f;
  document.querySelectorAll('.admin-filter').forEach(x=>x.classList.remove('on'));
  if(el)el.classList.add('on');
  filterAdmin();
}
function filterAdmin(){
  const q=document.getElementById('adminSearch').value.toLowerCase().trim();
  let list=[...adminAllUsers];
  if(adminFilter==='active'){
    const now=Date.now();
    list=list.filter(p=>p.last_seen&&(now-new Date(p.last_seen).getTime())<30*86400000);
  }else if(adminFilter==='blocked'){
    list=list.filter(p=>p.blocked===true);
  }else if(adminFilter==='admin'){
    list=list.filter(p=>p.is_admin===true);
  }else if(adminFilter==='sub'){
    const now = new Date();
    list=list.filter(p=>p.sub_until && new Date(p.sub_until) > now);
  }
  
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
  wrap.dataset.openUserId = id;

  const p=adminAllUsers.find(x=>x.id===id);if(!p)return;
  const isMe=p.id===user.id;
  const phone=isMe?user.phone:(p.phone || 'Нет данных');
  const{data:prog}=await sb.from('progress').select('*').eq('user_id',id);
  
  let closed=0,journal=0;
  (prog||[]).forEach(pr=>{
    const d=pr.data||{},days=d.days||{};
    closed+=Object.keys(days).filter(k=>days[k].closed).length;
    const j=d.journal||{};
    journal+=Object.keys(j).filter(k=>{
      const x=j[k];return x.q1||x.q2||x.q3;
    }).length;
  });
  
  const regDate=p.created_at?new Date(p.created_at).toLocaleDateString('ru'):'—';
  const lastSeen=p.last_seen?new Date(p.last_seen).toLocaleString('ru', {day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit'}):'—';
  const access=p.book_access||[];
  
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
  
  const booksHtml=BOOKS.map(b=>{
    let has = p.is_admin || access.includes(b.id);
    return `<div class="admin-book-row">
      <div class="ab-title"><span>${b.emoji}</span><span>${b.title}</span></div>
      <div class="toggle-switch ${has?'on':''}" onclick="event.stopPropagation();toggleBookAccess('${id}','${b.id}',${!has})"></div>
    </div>`;
  }).join('');
  
  document.getElementById('adminDetailWrap').innerHTML=`
    <div class="admin-detail">
      <div class="ad-head" style="justify-content:space-between;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div class="ad-ava">${getAvatarHtml(p.avatar, 24)}</div>
          <div>
            <h3>${escapeHtml(p.name||'Без имени')} ${p.is_admin?'👑':''}</h3>
            <p>${isMe?'Это ты':''}${p.blocked?' · 🚫 Заблокирован':''}</p>
          </div>
        </div>
        <span onclick="document.getElementById('adminDetailWrap').innerHTML=''" style="color:var(--muted); cursor:pointer; font-size:24px; line-height:1; padding:0 10px;">︿</span>
      </div>
      <div class="admin-row"><span>Имя</span><span>${escapeHtml(p.name||'—')}</span></div>
      <div class="admin-row"><span>Телефон</span><span>${(phone && phone !== 'Нет данных') ? '+7 ('+phone.slice(1,4)+') '+phone.slice(4,7)+'-'+phone.slice(7,9)+'-'+phone.slice(9) : 'Нет данных'}</span></div>
      <div class="admin-row"><span>Регистрация</span><span>${regDate}</span></div>
      <div class="admin-row"><span>Последний визит</span><span>${lastSeen}</span></div>
      <div class="admin-row"><span>Закрыто дней</span><span>${closed}</span></div>
      <div class="admin-row"><span>Записей</span><span>${journal}</span></div>
      
      <div class="admin-row" style="border-bottom:none; margin-top:10px;">
        <span>Подписка</span>
        <span style="color:${isSubActive ? 'var(--success)' : 'var(--muted)'}">${subDateText}</span>
      </div>
      <div style="display:flex; gap:8px; margin-bottom:16px;">
        <button class="admin-action" style="flex:1; background:var(--accent) !important; color:#fff !important; border:none;" onclick="adminGrantSub('${id}', 30)">🎁 +1 Месяц</button>
        ${isSubActive ? `<button class="admin-action danger" style="flex:1;" onclick="adminGrantSub('${id}', 0)">❌ Забрать</button>` : ''}
      </div>
      
      <div style="margin-top:16px">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;font-weight:800">📚 Доступ к книгам</div>
          <div style="display:flex; gap:6px;">
            <button class="btn-small-inline" style="margin-top:0; padding:6px 10px; font-size:10px; background:var(--success);" onclick="event.stopPropagation(); setAllBooksAccess('${id}', true)">Включить все</button>
            <button class="btn-small-inline" style="margin-top:0; padding:6px 10px; font-size:10px; background:var(--danger);" onclick="event.stopPropagation(); setAllBooksAccess('${id}', false)">Выключить все</button>
          </div>
        </div>
        <div class="admin-books">${booksHtml}</div>
      </div>
      
      ${!isMe?`<div class="admin-actions">
        <button class="admin-action" onclick="adminSendMessage('${id}')">💬 Написать</button>
        <button class="admin-action ${p.blocked?'':'warn'}" onclick="adminToggleBlock('${id}',${!p.blocked})">${p.blocked?'✓ Разблокировать':'🚫 Заблокировать'}</button>
        <button class="admin-action gold" onclick="adminToggleAdmin('${id}',${!p.is_admin})">${p.is_admin?'↓ Снять админа':'👑 Сделать админом'}</button>
        <button class="admin-action danger" onclick="adminDelete('${id}')">🗑 Удалить</button>
      </div>`:''}
    </div>`;
  document.getElementById('adminDetailWrap').scrollIntoView({behavior:'smooth'});
}

async function adminToggleBlock(id,blocked){
  if(!confirm(blocked?'Заблокировать участника?':'Разблокировать?'))return;
  await sb.from('profiles').update({blocked,blocked_reason:blocked?'Нарушение правил':null}).eq('id',id);
  await logAdmin('block',id,{blocked});
  await loadAdminUsers();openAdminUser(id);playSuccess();
}

async function adminToggleAdmin(id,makeAdmin){
  if(!confirm(makeAdmin?'Сделать админом?':'Снять права админа?'))return;
  await sb.from('profiles').update({is_admin:makeAdmin}).eq('id',id);
  await logAdmin('admin',id,{makeAdmin});
  await loadAdminUsers();openAdminUser(id);playSuccess();
}

async function adminDelete(id){
  if(!confirm('УДАЛИТЬ участника? Данные будут удалены навсегда.'))return;
  if(!confirm('Точно уверен?'))return;
  try{
    await sb.rpc('delete_user_completely',{target_id:id});
    await logAdmin('delete',id,{});
    alert('Участник удалён');
  }catch(e){
    await sb.from('progress').delete().eq('user_id',id);
    await sb.from('profiles').delete().eq('id',id);
    alert('Профиль удалён (auth-запись может остаться)');
  }
  await loadAdminUsers();
  document.getElementById('adminDetailWrap').innerHTML='';
}

async function adminSendMessage(id){
  const{data:p}=await sb.from('profiles').select('id,name,avatar').eq('id',id).single();
  if(p)openDialog(id,p);
}

async function toggleBookAccess(userId,bookId,grant){
  const p=adminAllUsers.find(x=>x.id===userId);if(!p)return;
  let access=[...(p.book_access||[])];
  if(access.length===0&&bookAccessMode==='individual'){
    access=BOOKS.map(b=>b.id);
  }
  if(grant){if(!access.includes(bookId))access.push(bookId)}
  else access=access.filter(x=>x!==bookId);
  await sb.from('profiles').update({book_access:access}).eq('id',userId);
  await logAdmin('grant_book',userId,{book:bookId,grant});
  p.book_access=access;
  playCheck();
  openAdminUser(userId);
}

async function logAdmin(action,targetId,meta){
  try{
    await sb.from('admin_logs').insert({
      admin_id:user.id,action,target_id:targetId,meta:meta||{}
    });
  }catch(e){}
}

// ─── АНАЛИТИКА ───
async function renderAnalytics(){
  const total=adminAllUsers.length;
  const active30=adminAllUsers.filter(p=>p.last_seen&&(Date.now()-new Date(p.last_seen).getTime())<30*86400000).length;
  const active7=adminAllUsers.filter(p=>p.last_seen&&(Date.now()-new Date(p.last_seen).getTime())<7*86400000).length;
  const today=adminAllUsers.filter(p=>p.last_seen&&p.last_seen.slice(0,10)===todayStr()).length;
  const blocked=adminAllUsers.filter(p=>p.blocked).length;
  const admins=adminAllUsers.filter(p=>p.is_admin).length;

  // Retention
  const{data:prog}=await sb.from('progress').select('*');
  const activeUsers=new Set((prog||[]).map(p=>p.user_id));
  const d1=activeUsers.size;

  document.getElementById('analyticsContent').innerHTML=`
    <div class="admin-summary">
      <div><div class="as-num">${total}</div><div class="as-lbl">Всего</div></div>
      <div><div class="as-num">${active30}</div><div class="as-lbl">30 дней</div></div>
      <div><div class="as-num">${active7}</div><div class="as-lbl">7 дней</div></div>
    </div>
    <div class="admin-summary">
      <div><div class="as-num">${today}</div><div class="as-lbl">Сегодня</div></div>
      <div><div class="as-num">${BOOKS.length}</div><div class="as-lbl">Книг</div></div>
      <div><div class="as-num">${Math.round(active7/Math.max(total,1)*100)}%</div><div class="as-lbl">Активность</div></div>
    </div>
    <div class="admin-detail" style="margin-top:14px">
      <h3 style="font-size:14px;margin-bottom:10px">👥 Воронка</h3>
      <div class="admin-row"><span>Зарегистрировано</span><span>${total}</span></div>
      <div class="admin-row"><span>С прогрессом</span><span>${d1}</span></div>
      <div class="admin-row"><span>Активны за 7 дней</span><span>${active7}</span></div>
      <div class="admin-row"><span>Активны сегодня</span><span>${today}</span></div>
      <div class="admin-row"><span>Заблокированы</span><span>${blocked}</span></div>
      <div class="admin-row"><span>Админов</span><span>${admins}</span></div>
    </div>`;
}

async function sendBroadcast() {
  const title = document.getElementById('broadcastTitle').value.trim();
  const text = document.getElementById('broadcastText').value.trim();
  if(!title || !text) { toast('Заполни оба поля', 'warm'); return; }
  
  try {
    const { data: users } = await sb.from('profiles').select('id');
    if(!users) return;

    const notifs = users.map(u => ({
      user_id: u.id,
      type: 'admin',
      payload: { title, text },
      read: false
    }));

    const { error } = await sb.from('notifications').insert(notifs);
    if(error) throw error;

    playSuccess();
    toast('Рассылка отправлена!');
    document.getElementById('broadcastTitle').value = '';
    document.getElementById('broadcastText').value = '';
  } catch(e) {
    console.error(e);
    toast('Ошибка отправки', 'danger');
  }
}

// ─── СИСТЕМА ───
async function renderSystem(){
  document.getElementById('systemContent').innerHTML=`
    <div class="admin-detail" style="margin-top:12px">
      <h3 style="font-size:14px;margin-bottom:10px">⚙️ Глобальные настройки</h3>
      
      <div class="admin-row" style="padding:14px 0; border-bottom:none; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span style="display:block; font-weight:800; color:var(--text); margin-bottom:4px;">Режим доступа к книгам</span>
          <span style="font-size:11px; color:var(--muted);">Всем открыто или по подписке</span>
        </div>
        <div class="toggle-switch ${bookAccessMode === 'everyone' ? 'on' : ''}" onclick="toggleBookAccessMode()"></div>
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
  if(!adminAllUsers.length)return;
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
  const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download='andger_users_'+todayStr()+'.csv';
  a.click();
  URL.revokeObjectURL(url);
  toast('CSV скачан');
}

// ─── РЕДАКТОР КНИГ ───

function showBookEditor(id){
  editingBookId=id||null;
  const b=id?BOOKS.find(x=>x.id===id):null;

  const catList = document.getElementById('edCategoryList');
  if(catList) {
    const uniqueCats = [...new Set(BOOKS.map(book => book.category).filter(Boolean))];
    catList.innerHTML = uniqueCats.map(c => `<option value="${c}"></option>`).join('');
  }
  
  const setVal = (elId, val) => { const el = document.getElementById(elId); if(el) el.value = val; };
  
  setVal('edTitle', b?.title||'');
  setVal('edAuthor', b?.author||'');
  setVal('edEmoji', b?.emoji||'');
  setVal('edDays', b?.days||30);
  setVal('edCategory', b?.category || 'Разное');
  setVal('edAbout', b?.about||'');
  setVal('edMethod', (b?.method && Array.isArray(b.method)) ? b.method.join(', ') : '');
  setVal('edAuthorBio', b?.authorBio || '');
  setVal('edForWhom', b?.forWhom || '');
  setVal('edResult', b?.result || '');
  
  // Клонируем практики в память
  window._tempPractices = b?.practices ? JSON.parse(JSON.stringify(b.practices)) : [];
  renderAdminPracticesList();

  window._tempQuotes = b?.quotes || [];
  const errEl = document.getElementById('edErr');
  if(errEl) errEl.textContent='';
  
  const delBtn = document.getElementById('edDeleteBtn');
  if (delBtn) delBtn.style.display = id ? 'block' : 'none';

  hideAll();
  document.getElementById('bookEditorScreen').classList.remove('hidden');
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
        <button class="icon-btn" onclick="openPracticeEditor(${i})" style="width:32px; height:32px; font-size:14px;">✏️</button>
        <button class="icon-btn" onclick="deleteAdminPractice(${i})" style="width:32px; height:32px; color:var(--danger); font-size:14px;">🗑</button>
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
  document.getElementById('peWhyInp').value = p?.why || '';
  document.getElementById('peHowInp').value = p?.how ? p.how.join('\n') : '';
  document.getElementById('peResultInp').value = p?.result || '';
  document.getElementById('peMistakesInp').value = p?.mistakes ? p.mistakes.join('\n') : '';
  document.getElementById('peAdviceInp').value = p?.advice || '';
  
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
  div.style.display = 'flex'; div.style.gap = '8px';
  div.innerHTML = `
    <input type="number" class="vt-time" placeholder="Сек" value="${time}" style="width:70px; flex-shrink:0; padding:8px; text-align:center;">
    <input type="text" class="vt-text" placeholder="Текст фразы..." value="${escapeHtml(text)}" style="flex:1; padding:8px;">
    <button class="icon-btn" onclick="this.parentElement.remove()" style="width:36px; height:36px; flex-shrink:0; color:var(--danger);">✕</button>
  `;
  container.appendChild(div);
}

function savePracticeEditor() {
  const title = document.getElementById('peTitleInp').value.trim();
  const timeMins = parseInt(document.getElementById('peTimeInp').value) || 5;
  const sub = document.getElementById('peSubInp').value.trim();
  const ico = document.getElementById('peIcoInp').value.trim() || 'brain';
  const why = document.getElementById('peWhyInp').value.trim();
  const how = document.getElementById('peHowInp').value.split('\n').map(s => s.trim()).filter(Boolean);
  const result = document.getElementById('peResultInp').value.trim();
  const mistakes = document.getElementById('peMistakesInp').value.split('\n').map(s => s.trim()).filter(Boolean);
  const advice = document.getElementById('peAdviceInp').value.trim();

  const tl = [];
  document.querySelectorAll('#voiceTimelineContainer > div').forEach(row => {
    const t = parseInt(row.querySelector('.vt-time').value);
    const txt = row.querySelector('.vt-text').value.trim();
    if (!isNaN(t) && txt) tl.push({ time: t, text: txt });
  });
  tl.sort((a, b) => a.time - b.time);

  if (!title) { toast('Введите название практики', 'danger'); return; }

  const p = {
    id: editingPracticeIndex >= 0 ? (window._tempPractices[editingPracticeIndex].id || 'practice-' + Date.now()) : 'practice-' + Date.now(),
    title, time: timeMins * 60, sub, ico, why, how, result, mistakes, advice,
    voiceTimeline: tl
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
  showCustomConfirm('Удалить практику?', 'Она пропадет из книги.', () => {
    window._tempPractices.splice(index, 1);
    renderAdminPracticesList();
    playSuccess();
  });
}

function backFromBookEditor(){
  hideAll();
  document.getElementById('adminScreen').classList.remove('hidden');
  loadAdminBooks();
}

async function loadAdminBooks(){
  const el=document.getElementById('adminBookList');
  if(!el)return;
  
  // 1. Берем книги из Supabase
  const{data}=await sb.from('books').select('*');
  let dbBooks = data || [];
  
  // 2. Берем книги из кода (которых еще нет в базе)
  let localBooks = BOOKS.filter(b => !dbBooks.some(db => db.id === b.id));
  
  // Помечаем локальные книги специальным флагом
  localBooks = localBooks.map(b => ({ ...b, _isLocal: true, published: true }));
  
  // 3. Объединяем и сортируем по алфавиту
  adminAllBooks = [...dbBooks, ...localBooks];
  adminAllBooks.sort((a, b) => (a.title || '').localeCompare(b.title || ''));

  // Сбрасываем поиск при загрузке
  const searchInp = document.getElementById('adminBookSearch');
  if (searchInp) searchInp.value = '';
  
  renderAdminBookList(adminAllBooks);
}

function renderAdminBookList(list) {
  const el=document.getElementById('adminBookList');
  if(!el)return;
  
  if(!list.length){
    el.innerHTML='<div style="color:var(--muted);text-align:center;padding:20px;font-size:13px">Книг не найдено.</div>';
    return;
  }
  
  el.innerHTML=list.map(b=>`
    <div class="book-row" onclick="showBookEditor('${b.id}')">
      <div style="margin-right:14px;">${getEmojiOrSvg(b.emoji, 24, b.title)}</div>
      <div class="br-info">
        <div class="br-title">${escapeHtml(b.title)} ${b._isLocal ? '<span style="font-size:10px; color:var(--warm); font-weight:normal; background:rgba(255,154,86,0.1); padding:2px 6px; border-radius:6px; margin-left:4px;">из кода</span>' : '✅'}</div>
        <div class="br-author">${escapeHtml(b.author||'')} · ${b.days} дней</div>
      </div>
      <div class="br-pct">›</div>
    </div>
  `).join('');
}

function filterAdminBooks() {
  const q = document.getElementById('adminBookSearch').value.toLowerCase().trim();
  if (!q) {
    renderAdminBookList(adminAllBooks);
    return;
  }
  const filtered = adminAllBooks.filter(b => 
    (b.title || '').toLowerCase().includes(q) || 
    (b.author || '').toLowerCase().includes(q)
  );
  renderAdminBookList(filtered);
}

// AI-генерация через Groq (нужен ключ в Edge Function)
async function generateBookAI(){
  const title=document.getElementById('edTitle').value.trim();
  const author=document.getElementById('edAuthor').value.trim();
  const prompt=document.getElementById('edPrompt').value.trim();
  const err=document.getElementById('edErr');
  if(!title){err.textContent='Введи название';return}
  err.textContent='⏳ Генерирую... это может занять до 30 сек';
  try{
    // Вызов Edge Function (нужно создать в Supabase)
    const{data,error}=await sb.functions.invoke('generate-book',{
      body:{title,author,prompt}
    });
    if(error)throw error;
    if(data){
      if(data.emoji)document.getElementById('edEmoji').value=data.emoji;
      if(data.days)document.getElementById('edDays').value=data.days;
      if(data.about)document.getElementById('edAbout').value=data.about;
      err.textContent='✅ Готово! Проверь и опубликуй';
      err.style.color='var(--success)';
      // Остальные поля сохраним в window для публикации
      window._aiBook=data;
    }
  }catch(e){
    err.textContent='❌ Edge Function не подключена. Обратись к разработчику.';
    err.style.color='var(--danger)';
  }
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
    about:document.getElementById('edAbout').value.trim(),
    
    // БЕРЕМ ДАННЫЕ ИЗ ПОЛЕЙ ВВОДА (они уже заполнены из JSON)
    method: document.getElementById('edMethod').value.split(',').map(s=>s.trim()).filter(Boolean),
    author_bio: document.getElementById('edAuthorBio').value.trim(),
    for_whom: document.getElementById('edForWhom').value.trim(),
    result: document.getElementById('edResult').value.trim(),
    
    practices: practicesData, 
    quotes: window._tempQuotes || [], // Цитаты берем из временной переменной
    published,
    created_by:user.id,
    updated_at:new Date().toISOString()
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

// ─── УПРАВЛЕНИЕ ТЕКСТАМИ ───
async function loadAdminTexts() {
  const el = document.getElementById('adminTextsList');
  el.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Загрузка текстов...</div>';
  
  try {
    const { data, error } = await sb.from('ui_texts').select('*').order('key');
    if (error) throw error;
    
    if (!data || data.length === 0) {
      el.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Текстов пока нет.</div>';
      return;
    }

    // Красивые названия для ключей, чтобы ты понимал, что правишь
    const labels = {
      'splash_quote': '💬 Цитата на заставке',
      'splash_author': '✍️ Автор цитаты',
      'onb_step1_title': '1. Заголовок онбординга',
      'onb_step1_text': '1. Текст онбординга',
      'onb_step2_title': '2. Заголовок онбординга',
      'onb_step2_text': '2. Текст онбординга',
      'onb_step3_title': '3. Заголовок онбординга',
      'onb_step3_text': '3. Текст онбординга',
      'onb_step4_title': '4. Заголовок онбординга',
      'onb_step4_text': '4. Текст онбординга',
      'onb_step5_title': '5. Заголовок онбординга',
      'onb_step5_text': '5. Текст онбординга'
    };

    let html = '';
    data.forEach(item => {
      const displayTitle = labels[item.key] || item.key;
      html += `
        <div class="admin-detail" style="margin-bottom:12px; padding:16px;">
          <div style="font-size:12px; font-weight:800; color:var(--accent-2); margin-bottom:8px;">${displayTitle}</div>
          <textarea id="txt_${item.key}" rows="3" style="width:100%; background:var(--card2); border:1px solid var(--border); border-radius:8px; padding:10px; color:var(--text); font-size:14px; resize:vertical; font-family:inherit; margin-bottom:8px;">${escapeHtml(item.value)}</textarea>
          <button class="btn-small-inline" style="margin-top:0;" onclick="saveAdminText('${item.key}')">Сохранить</button>
        </div>
      `;
    });
    el.innerHTML = html;
  } catch (e) {
    console.error(e);
    el.innerHTML = '<div style="color:var(--danger); text-align:center; padding:20px;">Ошибка загрузки текстов</div>';
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
            <button class="icon-btn" onclick="openFaqEditor(${item.id})" style="width:32px; height:32px; font-size:14px;">✏️</button>
            <button class="icon-btn" onclick="deleteFaq(${item.id})" style="width:32px; height:32px; color:var(--danger); font-size:14px;">🗑</button>
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
  showCustomConfirm('Удалить вопрос?', 'Он пропадет из Помощи.', async () => {
    await sb.from('faq').delete().eq('id', id);
    playSuccess();
    loadAdminFaq();
  });
}

// ─── УПРАВЛЕНИЕ ПОДПИСКАМИ ───
async function loadAdminSubs() {
  const el = document.getElementById('adminSubsList');
  const countEl = document.getElementById('adminSubsCount');
  if(!el) return;
  
  el.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Загрузка...</div>';
  
  try {
    const now = new Date().toISOString();
    const { data } = await sb.from('profiles').select('*').gt('sub_until', now).order('sub_until', {ascending: true});
    
    if (countEl) countEl.textContent = data ? data.length : 0;

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
    window.location.reload();
  });

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      
      // Проверяем обновления каждые 10 минут
      setInterval(() => { reg.update(); }, 10 * 60 * 1000);

      // Проверяем обновления, когда пользователь возвращается в приложение
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
              
              const isRitualActive = !document.getElementById('ritualScreen').classList.contains('hidden');
              const isPracticeActive = !document.getElementById('practiceScreen').classList.contains('hidden');
              
              if (!isRitualActive && !isPracticeActive) {
                setTimeout(() => {
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                }, 2000);
              } else {
                const banner = document.getElementById('updateBanner');
                if (banner) banner.style.display = 'flex';
              }
            }
          });
        }
      });
    }).catch(err => console.log('SW error', err));
  });
}

// Обработка кнопки "Обновить" на баннере
function forceUpdate() {
  if (newWorker) {
    newWorker.postMessage({ type: 'SKIP_WAITING' });
  } else {
    window.location.reload();
  }
}

// ─── PWA SHORTCUTS ───
const urlParams=new URLSearchParams(location.search);
const action=urlParams.get('action');
if(action==='ritual')setTimeout(()=>startRitual(),1500);
else if(action==='journal')setTimeout(()=>showJournalScreen(),1500);

// ─── SCROLL-ИНДИКАТОРЫ (КНИГИ И ПРАКТИКИ) ───
document.addEventListener('scroll', (e) => {
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
    
    // Обновляем точки, не перерисовывая всё
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
    // СЛУШАТЕЛЬ ДЛЯ АДМИНКИ
  if (e.target && e.target.id === 'adminSwipeWrapper') {
    const wrap = e.target;
    const w = wrap.clientWidth;
    const idx = Math.round(wrap.scrollLeft / w);
    const tabs = document.querySelectorAll('.admin-tab');
    const dots = document.querySelectorAll('#adminTabDots .b-dot');
    
    if (tabs[idx]) {
      tabs.forEach(t => t.classList.remove('on'));
      tabs[idx].classList.add('on');
      // Загружаем данные для этой вкладки
      const tabName = tabs[idx].getAttribute('onclick').match(/'([^']+)'/)[1];
      if(tabName==='dashboard') renderAdminDashboard();
      else if(tabName==='users') loadAdminUsers();
      else if(tabName==='books') loadAdminBooks();
      else if(tabName==='reports') loadAdminReports();
      else if(tabName==='system') { renderSystem(); loadAdminQuotes(); }
      else if(tabName==='texts') loadAdminTexts();
      else if(tabName==='faq') loadAdminFaq();
      else if(tabName==='subs') loadAdminSubs();
    }
    
    dots.forEach((d, i) => d.classList.toggle('on', i === idx));
  }
}, true);
// ─── Слежение за системной темой (для режима «Авто») ───
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change',()=>{
  if(state.theme==='auto')applyTheme();
});

// Разблокировка звуков и голосов на iOS при первом касании
document.addEventListener('touchstart', function unlockAudio() {
  // Будим AudioContext (для звуков кликов и фанфар)
  const ctx = getCtx();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume();
  }
  // Будим синтезатор речи (для озвучки таймера)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(''));
  }
  // Убираем слушатель, чтобы не срабатывал каждый раз
  document.removeEventListener('touchstart', unlockAudio);
}, { once: true });

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

// Оставляем один пушстейт для инициализации
history.pushState(null, null, location.href);
async function setAllBooksAccess(userId,grant){
  const p=adminAllUsers.find(x=>x.id===userId);if(!p)return;
  let access=grant?BOOKS.map(b=>b.id):[];
  await sb.from('profiles').update({book_access:access}).eq('id',userId);
  p.book_access=access;
  playCheck();
  openAdminUser(userId);
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
      <div class="admin-item" style="cursor:default">
        <div class="ai-info" style="flex:1">
          <div class="ai-name" style="font-style:italic;line-height:1.4;font-weight:600">«${escapeHtml(q.text)}»</div>
          <div class="ai-phone">${q.active?'🟢 Активна':'⚫ Скрыта'} · ${escapeHtml(q.author||'Андрей Герасимов')}</div>
        </div>
        <button class="icon-btn" onclick="editQuote(${q.id})" style="width:36px;height:36px">✏️</button>
        <button class="icon-btn" onclick="toggleQuoteActive(${q.id},${!q.active})" style="width:36px;height:36px">${q.active?'👁':'🚫'}</button>
        <button class="icon-btn" onclick="deleteQuote(${q.id})" style="width:36px;height:36px;color:var(--danger)">🗑</button>
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
  if(!confirm('Удалить цитату?'))return;
  await sb.from('quotes').delete().eq('id',id);
  await loadAdminQuotes();
  await loadQuotes();
  toast('Удалено');
}
// ─── Публичный профиль через URL /u/{slug} ───
async function handlePublicProfileUrl(){
  const m=location.pathname.match(/^\/u\/([a-zA-Z0-9_-]+)$/);
  if(!m)return false;
  const slug=m[1];
  try{
    const{data}=await sb.from('profiles').select('id,name,avatar,public_slug').eq('public_slug',slug).single();
    if(!data){
      alert('Профиль не найден');
      return false;
    }
    // Показываем публичный профиль
    document.getElementById('ppAva').textContent=data.avatar||'👤';
    document.getElementById('ppName').textContent=data.name||'Друг';
    // Считаем прогресс этого юзера
    const{data:prog}=await sb.from('progress').select('*').eq('user_id',data.id);
    let totalFire=0,totalBest=0,booksCount=0;
    (prog||[]).forEach(row=>{
      const d=row.data||{};
      const days=d.days||{};
      let closed=Object.keys(days).filter(k=>days[k].closed).length;
      if(closed>0)booksCount++;
      // Считаем streak грубо
      if(closed>totalFire)totalFire=closed;
    });
    const lv=getLevel(0);
    document.getElementById('ppStatus').textContent=`${lv.ico} ${lv.name}`;
    document.getElementById('ppFire').textContent=totalFire;
    document.getElementById('ppRecord').textContent=totalBest;
    document.getElementById('ppBooks').textContent=booksCount;
    hideAll();
    document.getElementById('publicProfileScreen').classList.remove('hidden');
    return true;
  }catch(e){
    return false;
  }
}
// ─── НОВЫЙ КАЛЕНДАРЬ И БЫСТРЫЙ РИТУАЛ ───
function renderWeekCalendar() {
  const el = document.getElementById('weekCalendar');
  if (!el || !currentBook) return;

  const bs = getBookState(currentBook.id);
  if (!bs.start) {
    el.innerHTML = '<div style="color:var(--muted); font-size:12px;">Начните книгу, чтобы увидеть календарь</div>';
    return;
  }

  const today = new Date();
  const todayStr = localDate(today);
  
  // Применяем сдвиг недели
  const baseDate = new Date(today);
  baseDate.setDate(today.getDate() + (calendarWeekOffset * 7));

  // Находим понедельник нужной недели
  const dayOfWeek = baseDate.getDay() === 0 ? 6 : baseDate.getDay() - 1;
  const monday = new Date(baseDate);
  monday.setDate(baseDate.getDate() - dayOfWeek);

  const dows = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  let html = '';

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    
    const dateStr = localDate(d);
    const isToday = dateStr === todayStr;
    
    let hasActivity = false;
    const rec = bs.days[dateStr];
    if (rec && rec.practices && rec.practices.length > 0) {
      hasActivity = true;
    }

    const bookStart = new Date(bs.start + 'T00:00:00');
    const isBeforeStart = d < bookStart;

    let extraClass = '';
    if (isBeforeStart) extraClass = 'opacity: 0.3;';
    if (isToday) extraClass = 'border-color: var(--warm); background: rgba(255, 154, 86, 0.1); color: var(--warm);';

    html += `<div class="cal-day ${hasActivity ? 'active' : ''}" 
                  style="${extraClass} border: ${hasActivity ? '1px solid var(--accent-2)' : '1px solid var(--border)'}; background: ${hasActivity ? 'rgba(124,92,255,0.15)' : ''}"
                  onclick="showDayStats('${dateStr}')">
      <div class="dow">${dows[i]}</div>
      <div class="dom" style="${isToday ? 'color: var(--warm);' : ''}">${d.getDate()}</div>
    </div>`;
  }
  
  el.innerHTML = html;

  // Отрисовка точек-индикаторов
  const dotsEl = document.getElementById('calendarDots');
  if (dotsEl) {
    dotsEl.innerHTML = `
      <div class="b-dot ${calendarWeekOffset === -1 ? 'on' : ''}" onclick="changeCalendarWeek(-1)"></div>
      <div class="b-dot ${calendarWeekOffset === 0 ? 'on' : ''}" onclick="changeCalendarWeek(0)"></div>
      <div class="b-dot ${calendarWeekOffset === 1 ? 'on' : ''}" onclick="changeCalendarWeek(1)"></div>
    `;
  }
}

// Функция для смены недели (при клике на точки)
function changeCalendarWeek(dir) {
  calendarWeekOffset = dir;
  renderWeekCalendar();
  playClick();
}

function showDayStats(dateStr) {
  const modal = document.getElementById('dayStatsModal');
  const content = document.getElementById('dayStatsContent');
  const title = document.getElementById('dayStatsTitle');
  
  const d = new Date(dateStr);
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  title.textContent = `${d.getDate()} ${months[d.getMonth()]}`;

  let html = '';
  let total = 0;

  BOOKS.forEach(b => {
    const bs = getBookState(b.id);
    const rec = bs.days[dateStr];
    if (rec && rec.practices && rec.practices.length > 0) {
      total += rec.practices.length;
      const pNames = rec.practices.map(pid => {
        const p = b.practices.find(x => x.id === pid);
        return p ? p.title : pid;
      }).join(', ');
      
      html += `<div style="margin-bottom:10px;padding:10px;background:var(--card2);border-radius:10px;">
        <b>${b.emoji} ${b.title}</b>
        <div style="color:var(--muted);font-size:12px;margin-top:4px;">Выполнено: ${pNames}</div>
      </div>`;
    }
  });

  if (total === 0) {
    html = '<div style="text-align:center;color:var(--muted);">В этот день не было практик 🌱</div>';
  }

  content.innerHTML = html;
  modal.classList.remove('hidden');
}

function startFastRitual() {
  showCustomConfirm(
    '⚡ Быстрый режим', 
    'Приложение запустит по 1 самой короткой практике из каждой доступной вам книги. Идеально, если мало времени!', 
    () => {
      let queue = [];
      BOOKS.forEach(b => {
        if (hasBookAccess(b.id) && b.practices.length > 0) {
          const shortest = b.practices.reduce((prev, curr) => (prev.time < curr.time) ? prev : curr);
          queue.push({ ...shortest, _bookId: b.id, _bookTitle: b.title });
        }
      });
      if (!queue.length) { toast('Нет доступных книг', 'warm'); return; }
      
      ritualQueue = queue;
      ritualIndex = 0;
      hideAll();
      const rEl = document.getElementById('ritualScreen');
      rEl.className = 'ritual';
      rEl.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;z-index:9999;display:flex;flex-direction:column;background:var(--bg)';
      window.scrollTo(0, 0);
      startMusic();
      renderRitualStep();
    }
  );
}

async function reportPost(postId, authorId) {
  if(authorId === user.id) { toast('Нельзя жаловаться на свой пост', 'warm'); return; }
  const reason = prompt('Укажите причину жалобы (спам, мат, оскорбления):');
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
function resetBookProgress() {
  if(!bookDetailId) return;
  const b = BOOKS.find(x => x.id === bookDetailId);
  if(!b) return;

  showCustomConfirm(
    'Сбросить прогресс?', 
    `Все практики, дни и заметки по книге "${b.title}" будут удалены. Вы уверены?`, 
    () => {
      const bs = getBookState(b.id);
      bs.start = null;
      bs.days = {};
      bs.journal = {};
      
      // Если удалили текущую активную книгу, нужно переключить currentBook
      if(currentBook && currentBook.id === b.id) {
        currentBook = null;
        state.lastBook = null;
      }
      
      saveState();
      playSuccess();
      toast('Прогресс книги сброшен');
      smartHome(); // Возвращаемся на Главную
    }
  );
}

// Сброс ВСЕГО прогресса
function resetAllProgress() {
  document.getElementById('resetProgressModal').classList.add('hidden'); // Закрываем меню выбора
  showCustomConfirm(
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
          sb.from('moods').delete().eq('user_id', user.id)
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
async function loadAdminReports() {
  const el = document.getElementById('adminReportsList');
  el.innerHTML = '<div style="text-align:center; padding:20px; color:var(--muted);">Загрузка жалоб...</div>';
  
  try {
    const { data: reports, error } = await sb.from('reports').select('*').order('created_at', {ascending: false});
    if (error) throw error;
    
    if (!reports || !reports.length) {
      el.innerHTML = '<div style="text-align:center; padding:40px; color:var(--muted);">Жалоб нет. Все молодцы! 🎉</div>';
      return;
    }

    let html = '';
    for (let r of reports) {
      // Подтягиваем автора жалобы
      const { data: prof } = await sb.from('profiles').select('name').eq('id', r.reporter_id).single();
      // Подтягиваем текст поста
      const { data: post } = await sb.from('messages').select('text, user_name').eq('id', r.post_id).single();
      
      const time = new Date(r.created_at).toLocaleString('ru-RU', {day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit'});
      
      html += `
        <div class="admin-detail" style="border-left: 4px solid var(--danger); margin-bottom: 10px;">
          <div class="admin-row"><span>Автор жалобы</span><span>${prof ? prof.name : 'Неизвестный'}</span></div>
          <div class="admin-row"><span>Причина</span><span style="color:var(--danger)">${escapeHtml(r.reason)}</span></div>
          <div class="admin-row"><span>Текст поста</span><span style="font-size:12px; font-style:italic; color:var(--muted); text-align:right; max-width:60%;">"${post ? escapeHtml(post.text) : 'Пост удален'}"</span></div>
          <div class="admin-row"><span>Автор поста</span><span>${post ? post.user_name : '—'}</span></div>
          <div class="admin-row"><span>Время</span><span>${time}</span></div>
        </div>
      `;
    }
    el.innerHTML = html;
  } catch(e) {
    el.innerHTML = '<div style="color:var(--danger); text-align:center;">Ошибка загрузки жалоб</div>';
  }
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
  if(!confirm('Удалить эту книгу навсегда? Все пользователи потеряют к ней доступ.')) return;
  
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
    
    // Заполняем основные поля книги
    if(data.title) document.getElementById('edTitle').value = data.title;
    if(data.author) document.getElementById('edAuthor').value = data.author;
    if(data.emoji) document.getElementById('edEmoji').value = data.emoji;
    if(data.days) document.getElementById('edDays').value = data.days;
    if(data.category) document.getElementById('edCategory').value = data.category;
    if(data.about) document.getElementById('edAbout').value = data.about;
    
    if(data.method) document.getElementById('edMethod').value = Array.isArray(data.method) ? data.method.join(', ') : data.method;
    if(data.authorBio) document.getElementById('edAuthorBio').value = data.authorBio;
    if(data.forWhom) document.getElementById('edForWhom').value = data.forWhom;
    if(data.result) document.getElementById('edResult').value = data.result;
    
    // Заполняем практики в НАШУ НОВУЮ ПЕРЕМЕННУЮ
    if(Array.isArray(data)) {
      window._tempPractices = data;
    } else if(data.practices) {
      window._tempPractices = data.practices;
    }
    renderAdminPracticesList(); // Перерисовываем визуальный список
    
    if(data.quotes) window._tempQuotes = data.quotes;
    
    toast('✅ Данные распознаны!');
    document.getElementById('edSmartJson').value = ''; // Очищаем поле
  } catch(e) {
    toast('Ошибка парсинга JSON. Проверь текст.', 'danger');
    console.error(e);
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
      html += `<div class="settings-row" style="border:1px solid var(--border); margin-bottom:8px; border-radius:10px;" onclick="resetSpecificBook('${b.id}')">
        <div class="sr-left"><span class="sr-ico">${b.emoji}</span>${b.title}</div>
        <div class="sr-arrow">🗑</div>
      </div>`;
    }
  });
  if(!html) html = '<div style="text-align:center; color:var(--muted); font-size:13px; padding:20px 0;">Нет активного прогресса по книгам</div>';
  list.innerHTML = html;
  document.getElementById('resetProgressModal').classList.remove('hidden');
}

function resetSpecificBook(bookId) {
  showCustomConfirm('Сбросить книгу?', 'Прогресс и заметки по этой книге будут удалены.', async () => {
    const bs = getBookState(bookId);
    bs.start = null; bs.days = {}; bs.journal = {};
    if(currentBook && currentBook.id === bookId) { currentBook = null; state.lastBook = null; }
    
    // Удаляем заметки из БД
    try {
      await sb.from('notes').delete().eq('user_id', user.id).eq('book_id', bookId);
    } catch(e) { console.error('Ошибка удаления заметок', e); }

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

  if (currentNotifPeriod === 'morning') {
    state.morningTime = time;
    document.getElementById('morningTime').textContent = time;
  } else {
    state.eveningTime = time;
    document.getElementById('eveningTime').textContent = time;
  }

  saveState();
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

      let best = 0, cur = 0;
      Object.keys(days).sort().forEach(date => {
        if (days[date].closed) { 
          cur++; 
          if (cur > best) best = cur; 
        } else { 
          cur = 0; 
        }
        
        if (days[date].practices) {
          totalPractices += days[date].practices.length;
          const b = BOOKS.find(x => x.id === row.book_id);
          if (b && days[date].practices.length === b.practices.length) perfectDays++;
        }
      });
      
      if (best > totalBest) totalBest = best;
      if (best > totalFire) totalFire = best;
    });

    const fullName = (p.name || 'Друг') + (p.last_name ? ' ' + p.last_name : '');
    const avaHtml = getAvatarHtml(p.avatar || 'user', 90); // 90 - это размер
document.getElementById('ppAva').innerHTML = avaHtml;
    document.getElementById('ppName').textContent = fullName;
    document.getElementById('ppStatus').textContent = p.last_seen ? 'Был(а) в сети ' + timeAgo(p.last_seen) : 'Статус скрыт';
    
    // Считаем друзей
    const { count: friendsCount } = await sb.from('friends').select('*', { count: 'exact', head: true }).eq('user_id', userId);
    const ppFriendsEl = document.getElementById('ppFriends');
    if (ppFriendsEl) ppFriendsEl.textContent = friendsCount || 0;

    document.getElementById('ppFire').textContent = totalFire; 
    document.getElementById('ppRecord').textContent = totalBest;
    document.getElementById('ppBooks').textContent = booksCount;

    // Считаем награды
    const extra = { journal: totalJournal, practices: totalPractices, perfect: perfectDays > 0, perfectStreak: perfectDays, otherAch: 99 };
    let achHtml = '';
    let allItems = [];
    ACHIEVEMENTS_GROUPS.forEach(g => g.items.forEach(a => allItems.push(a)));
    
    allItems.forEach(a => {
      if (a.secret) return; 
      // Передаем totalBest как кол-во закрытых дней, и totalBest как стрик (упрощенно)
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
    document.getElementById('publicProfileScreen').classList.remove('hidden');
    
    // ПРИНУДИТЕЛЬНО СКРОЛЛИМ НАВЕРХ (исправляет съезжающую шапку)
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 10);
    
  } catch(e) {
    console.error(e);
    toast('Ошибка загрузки профиля', 'danger');
  }
  // Проверяем, в друзьях ли он
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
  if (!noteText || !noteText.trim()) return;
  
  try {
    await sb.from('notes').insert({
      user_id: user.id,
      book_id: bookId || (currentBook ? currentBook.id : 'unknown'),
      practice_title: practiceTitle,
      text: noteText.trim()
    });
    console.log('✅ Заметка сохранена в БД');
  } catch(e) {
    console.error('Ошибка сохранения заметки:', e);
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
async function adminGrantSub(userId, days) {
  try {
    let newDate = null;
    if (days > 0) {
      const d = new Date();
      d.setDate(d.getDate() + days);
      newDate = d.toISOString();
    }
    
    const { error } = await sb.from('profiles').update({ sub_until: newDate }).eq('id', userId);
    if (error) throw error;
    
    const p = adminAllUsers.find(x => x.id === userId);
    if (p) p.sub_until = newDate;
    
    playSuccess();
    toast(days > 0 ? 'Подписка выдана ✓' : 'Подписка забрана');
    openAdminUser(userId); // Перерисовываем карточку
  } catch (e) {
    toast('Ошибка: ' + e.message, 'danger');
  }
}
// ─── ОТЗЫВЫ ───
let currentReviewBookId = null;
let currentReviewStars = 5;

function showReviewModal(bookId) {
  currentReviewBookId = bookId;
  currentReviewStars = 5;
  document.getElementById('reviewTextInput').value = '';
  updateReviewStarsUI();
  document.getElementById('reviewModal').classList.remove('hidden');
}

function setReviewStars(val) {
  currentReviewStars = val;
  updateReviewStarsUI();
  playClick();
}

function updateReviewStarsUI() {
  const stars = document.querySelectorAll('#reviewModal .fa-star, #reviewModal span[onclick^="setReviewStars"]');
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
    window._savedRitualsData = data || []; // Сохраняем в память
    
    if(!data || !data.length) {
      wrap.style.display = 'none';
      return;
    }

    wrap.style.display = 'block';
    let html = '';
    data.forEach(item => {
      const count = item.practices.length;
      html += `
        <div class="book-row" onclick="loadSavedRitualToList('${item.id}')" style="margin-bottom:8px; border-color:var(--accent-2); background:rgba(124,92,255,0.05);">
          <div class="br-emoji" style="background:var(--accent); color:#fff;">💾</div>
          <div class="br-info">
            <div class="br-title">${escapeHtml(item.name)}</div>
            <div class="br-author" style="color:var(--accent-2);">${count} ${plural(count, 'практика', 'практики', 'практик')} · Нажми, чтобы выбрать</div>
          </div>
          <div style="color:var(--danger); padding:10px;" onclick="event.stopPropagation(); deleteSavedRitual('${item.id}')">🗑</div>
        </div>
      `;
    });
    list.innerHTML = html;
  } catch(e) { console.error(e); }
}

async function saveCustomRitual() {
  if(!customRitual.length) { toast('Сначала выбери практики', 'warm'); return; }
  
  // Открываем наше красивое окно вместо стандартного prompt
  document.getElementById('saveRitualNameInput').value = '';
  document.getElementById('saveRitualModal').classList.remove('hidden');
}

// Новая функция для реального сохранения (вызывается из модалки)
async function confirmSaveRitual() {
  const name = document.getElementById('saveRitualNameInput').value.trim();
  if(!name) { toast('Напиши название', 'warm'); return; }

  document.getElementById('saveRitualModal').classList.add('hidden');

  try {
    await sb.from('custom_practices').insert({
      user_id: user.id,
      name: name,
      practices: customRitual
    });
    playSuccess();
    toast('Набор сохранен!');
    loadSavedRituals(); // Обновляем список
  } catch(e) {
    toast('Ошибка сохранения', 'danger');
    console.error(e);
  }
}

function loadSavedRitualToList(id) {
  // Находим сохраненный набор по ID
  const item = window._savedRitualsData.find(x => String(x.id) === String(id));
  if(!item) return;

  // Подставляем его практики в текущий выбор
  customRitual = [...item.practices]; 
  playClick();
  
  // Перерисовываем конструктор, чтобы галочки встали на место
  renderRitualBuilder(); 
  
  // Прокручиваем наверх, чтобы было видно выбранные галочки
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function deleteSavedRitual(id) {
  if(!confirm('Удалить этот набор?')) return;
  await sb.from('custom_practices').delete().eq('id', id);
  playSuccess();
  loadSavedRituals();
}
function exitZenMode(ctx) {
  const screen = ctx === 'ritual' ? document.getElementById('ritualScreen') : document.getElementById('practiceScreen');
  if (screen) screen.classList.remove('focus-mode');
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

  const btn = document.querySelector('#quickNoteModal .btn');
  const originalText = btn.textContent;
  btn.textContent = 'Сохранение...';
  btn.disabled = true;

  try {
    // Сохраняем в базу данных
    await sb.from('notes').insert({
      user_id: user.id,
      book_id: currentBook ? currentBook.id : 'general', // Привязываем к текущей книге или общую
      practice_title: '⚡ Быстрая мысль', // Название практики для отображения в дневнике
      text: text
    });
    
    playSuccess();
    toast('Заметка сохранена в дневник!');
    closeQuickNote();
    
    // Если мы сейчас в дневнике, обновляем его
    if (currentScreen === 'journal') {
      renderJournal();
    }
  } catch(e) {
    console.error(e);
    toast('Ошибка сохранения', 'danger');
  } finally {
    btn.textContent = originalText;
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

  showCustomConfirm(
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
      break; // Тратим один щит и останавливаемся
    }
    d.setDate(d.getDate() - 1);
  }
}
// ─── ГЕНЕРАТОР СТОРИС ───
function openShareStory() {
  // 1. Собираем данные
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

  // Получаем уровень
  const stats = getGlobalStats();

  // 2. Заполняем карточку
  document.getElementById('storyAvatar').innerHTML = getAvatarHtml(state.avatar, 70);
  document.getElementById('storyName').textContent = (user.name || 'Друг') + (user.lastName ? ' ' + user.lastName : '');
  document.getElementById('storyStreak').textContent = maxStreak;
  document.getElementById('storyClosed').textContent = totalPractices;
  
  const lvlEl = document.getElementById('storyLevel');
  if (lvlEl) {
    lvlEl.innerHTML = `${stats.lvlIco} ${stats.lvlName} · ${stats.totalXP} XP`;
  }

  // 3. Показываем модалку
  document.getElementById('storyModal').classList.remove('hidden');
}

async function downloadStory() {
  const btn = document.getElementById('storyDownloadBtn');
  const originalText = btn.textContent;
  btn.textContent = 'Создаем...';
  btn.disabled = true;

  const card = document.getElementById('storyCard');

  try {
    // Превращаем HTML в картинку
    const canvas = await html2canvas(card, {
      scale: 3, // Высокое качество (для Retina)
      useCORS: true,
      backgroundColor: null,
      logging: false
    });

    // Создаем ссылку на скачивание
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
async function testPushNotification() {
  if (!('Notification' in window)) {
    alert('Ваш браузер не поддерживает уведомления');
    return;
  }

  // 1. Проверяем разрешение
  const perm = await Notification.requestPermission();
  if (perm !== 'granted') {
    alert('Вы отклонили разрешение. Включите уведомления в настройках браузера.');
    return;
  }

  // 2. Отправляем уведомление через Service Worker
  try {
    const reg = await navigator.serviceWorker.getRegistration();
    if (reg) {
      reg.showNotification('ANDGER работает!', {
        body: 'Это тестовое уведомление. Значит, push-уведомления настроены верно.',
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        vibrate: [200, 100, 200],
        tag: 'test-notification'
      });
      playSuccess();
    } else {
      alert('Service Worker не найден. Убедитесь, что приложение установлено или открыто по HTTPS.');
    }
  } catch (e) {
    console.error(e);
    toast('Ошибка отправки', 'danger');
  }
}
function showAvatarModal() {
  const content = document.getElementById('avatarViewContent');
  if (!content) return;
  content.innerHTML = `<div style="transform: scale(3.5); animation: modalIn 0.3s cubic-bezier(.34,1.56,.64,1);">${getAvatarHtml(state.avatar, 70)}</div>`;
  document.getElementById('avatarViewModal').classList.remove('hidden');
}
async function speakBackgroundGuide(text, context = 'practice') {
  if (state.soundMode !== 'sound' || !text) return;
  
  // Приглушаем музыку
  if (musicAudio) fadeAudio(musicAudio, musicAudio.volume, 0.05, 300);
  
  // Показываем субтитры
  const subEl = document.getElementById(context === 'ritual' ? 'ritualSubtitle' : 'practiceSubtitle');
  if (subEl) { subEl.textContent = text; subEl.classList.add('show'); }

  try {
    const { data, error } = await sb.functions.invoke('speak', { body: { text: text, voice: state.voice || 'alena' } });
    if (error) throw error;
    if (data.error) throw new Error(data.error);

    // РАСШИФРОВКА Base64 в MP3
    const binaryString = window.atob(data.audio);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    if (!ttsAudio) ttsAudio = new Audio();
    ttsAudio.pause();
    ttsAudio.currentTime = 0;

    const blob = new Blob([bytes], { type: 'audio/mpeg' });
    ttsAudio.src = URL.createObjectURL(blob);
    
    ttsAudio.onended = () => {
      if (musicAudio) fadeAudio(musicAudio, musicAudio.volume, 0.2, 1000);
      if (subEl) subEl.classList.remove('show');
    };
    await ttsAudio.play();
  } catch (error) {
    console.error('Ошибка озвучки (Яндекс):', error);
    if (musicAudio) fadeAudio(musicAudio, musicAudio.volume, 0.2, 1000);
    if (subEl) subEl.classList.remove('show');
  }
}
