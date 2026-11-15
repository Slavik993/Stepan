/* =========================================================
   Терра CRM — интерактивный прототип интерфейса
   Данные демонстрационные, вымышленные.
   ========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const fmt = n => n.toLocaleString('ru-RU') + ' ₽';
const fmtN = n => n.toLocaleString('ru-RU');
const initials = s => s.replace(/[«»"]/g, '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();

const AV = ['#4f6ef7', '#7c5cf7', '#0fb5a6', '#f59e0b', '#ef476f', '#3b82f6', '#8b5cf6', '#10b981', '#ec4899', '#f97316'];

function colorFor(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return AV[h % AV.length];
}
const av = (name, size) =>
  `<div class="mini-avatar" style="background:${colorFor(name)};${size ? `width:${size}px;height:${size}px;flex:0 0 ${size}px` : ''}">${initials(name)}</div>`;

/* ============================ DATA ============================ */

const clients = [
  { id: 'c1', name: 'ООО «Северный Ветер»', contact: 'Ирина Соколова', phone: '+7 (921) 448-12-90', email: 'i.sokolova@seveter.ru', segment: 'B2B', ltv: 486000, status: 'Активный', manager: 'Анна Ковалёва', city: 'Санкт-Петербург', created: '14.02.2025', reqs: 23, tags: ['Приоритетный', 'Договор'] },
  { id: 'c2', name: 'ИП Мельников А. В.', contact: 'Андрей Мельников', phone: '+7 (916) 220-77-14', email: 'a.melnikov@mail.ru', segment: 'B2C', ltv: 128400, status: 'Активный', manager: 'Дмитрий Орлов', city: 'Москва', created: '03.06.2025', reqs: 9, tags: ['Лояльный'] },
  { id: 'c3', name: 'АО «ГранитСтрой»', contact: 'Павел Гущин', phone: '+7 (495) 771-05-32', email: 'p.gushchin@granitstroy.ru', segment: 'B2B', ltv: 912500, status: 'Активный', manager: 'Анна Ковалёва', city: 'Москва', created: '21.11.2024', reqs: 41, tags: ['VIP', 'Рамочный договор'] },
  { id: 'c4', name: 'ООО «Клининг Профи»', contact: 'Мария Лебедева', phone: '+7 (812) 330-19-04', email: 'm.lebedeva@cleanpro.ru', segment: 'B2B', ltv: 254000, status: 'Активный', manager: 'Сергей Ким', city: 'Санкт-Петербург', created: '09.09.2025', reqs: 14, tags: ['Партнёр'] },
  { id: 'c5', name: 'Екатерина Волкова', contact: 'Екатерина Волкова', phone: '+7 (903) 118-64-27', email: 'e.volkova@yandex.ru', segment: 'B2C', ltv: 74300, status: 'Активный', manager: 'Дмитрий Орлов', city: 'Казань', created: '17.01.2026', reqs: 6, tags: ['Онлайн-запись'] },
  { id: 'c6', name: 'ООО «ТехноПарк Логистика»', contact: 'Олег Тарасов', phone: '+7 (499) 908-31-56', email: 'o.tarasov@tp-log.ru', segment: 'B2B', ltv: 638000, status: 'Активный', manager: 'Сергей Ким', city: 'Москва', created: '30.04.2025', reqs: 32, tags: ['Договор', 'Абонемент'] },
  { id: 'c7', name: 'Анна и Павел Крыловы', contact: 'Анна Крылова', phone: '+7 (926) 553-90-18', email: 'krilovi@gmail.com', segment: 'B2C', ltv: 46700, status: 'Новый', manager: 'Дмитрий Орлов', city: 'Москва', created: '02.11.2026', reqs: 2, tags: ['Рекомендация'] },
  { id: 'c8', name: 'ГК «Медиана»', contact: 'Светлана Романова', phone: '+7 (495) 662-48-70', email: 's.romanova@mediana.ru', segment: 'VIP', ltv: 1245000, status: 'Активный', manager: 'Анна Ковалёва', city: 'Москва', created: '12.07.2024', reqs: 58, tags: ['VIP', 'Персональный менеджер'] },
  { id: 'c9', name: 'ООО «АвтоФлот Сервис»', contact: 'Роман Дорохов', phone: '+7 (911) 274-63-05', email: 'r.dorohov@autofleet.ru', segment: 'B2B', ltv: 372000, status: 'Приостановлен', manager: 'Сергей Ким', city: 'Санкт-Петербург', created: '18.03.2025', reqs: 19, tags: ['Задолженность'] },
  { id: 'c10', name: 'Наталья Панова', contact: 'Наталья Панова', phone: '+7 (985) 400-12-83', email: 'n.panova@bk.ru', segment: 'B2C', ltv: 91300, status: 'Активный', manager: 'Дмитрий Орлов', city: 'Нижний Новгород', created: '25.08.2025', reqs: 11, tags: ['Лояльный'] },
  { id: 'c11', name: 'ООО «БалтМеханика»', contact: 'Виктор Ефимов', phone: '+7 (812) 640-77-21', email: 'v.efimov@baltmech.ru', segment: 'B2B', ltv: 289500, status: 'Новый', manager: 'Анна Ковалёва', city: 'Санкт-Петербург', created: '28.10.2026', reqs: 3, tags: ['Воронка'] },
  { id: 'c12', name: 'Студия «АртПоток»', contact: 'Ксения Миронова', phone: '+7 (909) 331-24-58', email: 'hello@artpotok.ru', segment: 'B2C', ltv: 63400, status: 'Активный', manager: 'Сергей Ким', city: 'Москва', created: '06.05.2026', reqs: 7, tags: ['Онлайн-запись'] }
];

const requests = [
  { id: 'З-1048', client: 'ГК «Медиана»', service: 'Клининг офиса, 1 200 м²', manager: 'Анна Ковалёва', channel: 'Сайт', amount: 148000, status: 'В работе', date: '15.11.2026', priority: 'high', source: 'Заявка с сайта' },
  { id: 'З-1047', client: 'ООО «АвтоФлот Сервис»', service: 'Мойка автопарка (12 ед.)', manager: 'Сергей Ким', channel: 'Телефон', amount: 62000, status: 'На согласовании', date: '15.11.2026', priority: 'normal', source: 'Входящий звонок' },
  { id: 'З-1046', client: 'Студия «АртПоток»', service: 'Уборка после ремонта', manager: 'Сергей Ким', channel: 'Соцсети', amount: 34500, status: 'Новая', date: '15.11.2026', priority: 'normal', source: 'Instagram*' },
  { id: 'З-1045', client: 'ООО «ТехноПарк Логистика»', service: 'Абонентское обслуживание, ноябрь', manager: 'Сергей Ким', channel: 'E-mail', amount: 210000, status: 'Оплачена', date: '14.11.2026', priority: 'normal', source: 'Договор № 41/25' },
  { id: 'З-1044', client: 'АО «ГранитСтрой»', service: 'Химчистка ковролина, 3 этажа', manager: 'Анна Ковалёва', channel: 'Менеджер', amount: 96500, status: 'В работе', date: '14.11.2026', priority: 'high', source: 'Повторное обращение' },
  { id: 'З-1043', client: 'ИП Мельников А. В.', service: 'Доставка документов (экспресс)', manager: 'Дмитрий Орлов', channel: 'Сайт', amount: 8900, status: 'Оплачена', date: '14.11.2026', priority: 'low', source: 'Заявка с сайта' },
  { id: 'З-1042', client: 'ООО «Клининг Профи»', service: 'Обслуживание 4 объектов', manager: 'Сергей Ким', channel: 'Партнёр', amount: 174000, status: 'На согласовании', date: '13.11.2026', priority: 'normal', source: 'Партнёрская программа' },
  { id: 'З-1041', client: 'ООО «Северный Ветер»', service: 'Генеральная уборка склада', manager: 'Анна Ковалёва', channel: 'Телефон', amount: 87200, status: 'Оплачена', date: '13.11.2026', priority: 'normal', source: 'Входящий звонок' },
  { id: 'З-1040', client: 'Анна и Павел Крыловы', service: 'Консультация по переезду', manager: 'Дмитрий Орлов', channel: 'Рекомендация', amount: 4500, status: 'Завершена', date: '12.11.2026', priority: 'low', source: 'Рекомендация клиента' },
  { id: 'З-1039', client: 'ООО «БалтМеханика»', service: 'Пробная уборка цеха', manager: 'Анна Ковалёва', channel: 'Сайт', amount: 27400, status: 'Новая', date: '12.11.2026', priority: 'normal', source: 'Заявка с сайта' },
  { id: 'З-1038', client: 'Екатерина Волкова', service: 'Уборка квартиры, 68 м²', manager: 'Дмитрий Орлов', channel: 'Онлайн-запись', amount: 6900, status: 'Оплачена', date: '11.11.2026', priority: 'low', source: 'Онлайн-запись' },
  { id: 'З-1037', client: 'Наталья Панова', service: 'Химчистка мебели', manager: 'Дмитрий Орлов', channel: 'Соцсети', amount: 12400, status: 'Отменена', date: '11.11.2026', priority: 'low', source: 'Instagram*' }
];

const statusPill = s => {
  const map = { 'Новая': 'blue', 'В работе': 'amber', 'На согласовании': 'violet', 'Оплачена': 'green', 'Завершена': 'green', 'Отменена': 'gray', 'Активный': 'green', 'Новый': 'blue', 'Приостановлен': 'rose', 'VIP': 'violet', 'B2B': 'blue', 'B2C': 'gray' };
  return `<span class="pill ${map[s] || 'gray'}">${s}</span>`;
};

const deals = [
  { id: 'd1', title: 'Клининг офиса, 1 200 м²', client: 'ГК «Медиана»', amount: 148000, manager: 'АК', stage: 'new', prio: 'high', date: 'Сегодня' },
  { id: 'd2', title: 'Химчистка ковролина, 3 этажа', client: 'АО «ГранитСтрой»', amount: 96500, manager: 'АК', stage: 'new', prio: 'normal', date: 'Сегодня' },
  { id: 'd3', title: 'Пробная уборка цеха', client: 'ООО «БалтМеханика»', amount: 27400, manager: 'АК', stage: 'new', prio: 'normal', date: 'Вчера' },
  { id: 'd4', title: 'Мойка автопарка (12 ед.)', client: 'ООО «АвтоФлот Сервис»', amount: 62000, manager: 'СК', stage: 'qual', prio: 'high', date: 'Сегодня' },
  { id: 'd5', title: 'Обслуживание 4 объектов', client: 'ООО «Клининг Профи»', amount: 174000, manager: 'СК', stage: 'qual', prio: 'normal', date: '13 ноя' },
  { id: 'd6', title: 'Уборка после ремонта', client: 'Студия «АртПоток»', amount: 34500, manager: 'СК', stage: 'qual', prio: 'normal', date: 'Сегодня' },
  { id: 'd7', title: 'Генеральная уборка склада', client: 'ООО «Северный Ветер»', amount: 87200, manager: 'АК', stage: 'work', prio: 'high', date: '13 ноя' },
  { id: 'd8', title: 'Абонемент на 3 месяца', client: 'ООО «ТехноПарк Логистика»', amount: 420000, manager: 'СК', stage: 'work', prio: 'normal', date: '10 ноя' },
  { id: 'd9', title: 'Ежеквартальный клининг', client: 'ГК «Медиана»', amount: 315000, manager: 'АК', stage: 'pay', prio: 'normal', date: '09 ноя' },
  { id: 'd10', title: 'Доставка документов (экспресс)', client: 'ИП Мельников А. В.', amount: 8900, manager: 'ДО', stage: 'pay', prio: 'low', date: '14 ноя' },
  { id: 'd11', title: 'Консультация по переезду', client: 'Анна и Павел Крыловы', amount: 4500, manager: 'ДО', stage: 'done', prio: 'low', date: '12 ноя' },
  { id: 'd12', title: 'Уборка квартиры, 68 м²', client: 'Екатерина Волкова', amount: 6900, manager: 'ДО', stage: 'done', prio: 'low', date: '11 ноя' },
  { id: 'd13', title: 'Рамочный договор на 2027', client: 'АО «ГранитСтрой»', amount: 890000, manager: 'АК', stage: 'done', prio: 'high', date: '08 ноя' }
];

const stages = [
  { key: 'new', name: 'Новая заявка', color: '#4f6ef7' },
  { key: 'qual', name: 'Квалификация', color: '#0fb5a6' },
  { key: 'work', name: 'Оказание услуги', color: '#f59e0b' },
  { key: 'pay', name: 'Оплата', color: '#7c5cf7' },
  { key: 'done', name: 'Завершено', color: '#22c55e' }
];

const tasks = [
  { id: 't1', title: 'Согласовать коммерческое предложение для АО «ГранитСтрой»', project: 'Сделка · 890 000 ₽', time: '11:00', done: false, group: 'today', prio: 'high' },
  { id: 't2', title: 'Позвонить Ирине Соколовой по продлению договора', project: 'ООО «Северный Ветер»', time: '12:30', done: false, group: 'today', prio: 'normal' },
  { id: 't3', title: 'Проверить акт выполненных работ по заявке З-1041', project: 'Клиенты · 87 200 ₽', time: '14:00', done: false, group: 'today', prio: 'normal' },
  { id: 't4', title: 'Загрузить прайс-лист в облачное хранилище', project: 'Документы', time: '16:00', done: true, group: 'today', prio: 'low' },
  { id: 't5', title: 'Встреча с новым клиентом ООО «БалтМеханика»', project: 'Санкт-Петербург · офис', time: '10:00', done: false, group: 'tomorrow', prio: 'high' },
  { id: 't6', title: 'Подготовить отчёт по конверсии за ноябрь', project: 'Отчётность', time: '13:00', done: false, group: 'tomorrow', prio: 'normal' },
  { id: 't7', title: 'Обзвон по базе «спящих» клиентов (24 контакта)', project: 'Маркетинг', time: '15:30', done: false, group: 'tomorrow', prio: 'normal' },
  { id: 't8', title: 'Проверить оплату по счёту № 118 от 09.11', project: 'ООО «Клининг Профи»', time: '09:30', done: false, group: 'overdue', prio: 'high' },
  { id: 't9', title: 'Обновить регламент приёма заявок', project: 'Регламенты', time: '12:00', done: false, group: 'overdue', prio: 'normal' },
  { id: 't10', title: 'Настроить интеграцию с телефонией', project: 'Администрирование', time: '—', done: true, group: 'done', prio: 'low' },
  { id: 't11', title: 'Создать воронку продаж для нового менеджера', project: 'Обучение', time: '—', done: true, group: 'done', prio: 'low' }
];

const team = [
  { name: 'Анна Ковалёва', role: 'Руководитель отдела продаж', deals: 24, revenue: 1240000, conv: 42, mail: 'a.kovaleva@terra-crm.ru' },
  { name: 'Сергей Ким', role: 'Менеджер по работе с клиентами', deals: 19, revenue: 890000, conv: 36, mail: 's.kim@terra-crm.ru' },
  { name: 'Дмитрий Орлов', role: 'Менеджер по продажам', deals: 16, revenue: 640000, conv: 31, mail: 'd.orlov@terra-crm.ru' },
  { name: 'Мария Лебедева', role: 'Специалист поддержки', deals: 0, revenue: 0, conv: 0, mail: 'm.lebedeva@terra-crm.ru' },
  { name: 'Игорь Савельев', role: 'Технический директор', deals: 0, revenue: 0, conv: 0, mail: 'i.savelev@terra-crm.ru' },
  { name: 'Ольга Панкратова', role: 'Бухгалтер', deals: 0, revenue: 0, conv: 0, mail: 'o.pankratova@terra-crm.ru' }
];

const feed = [
  { ico: '✎', title: 'Ирина Соколова изменила контактное лицо', meta: 'ООО «Северный Ветер» · 4 мин назад', color: '#4f6ef7' },
  { ico: '✔', title: 'Заявка З-1041 переведена в статус «Оплачена»', meta: 'Сергей Ким · 18 мин назад', color: '#22c55e' },
  { ico: '✉', title: 'Новая заявка с сайта: «Пробная уборка цеха»', meta: 'ООО «БалтМеханика» · 42 мин назад', color: '#0fb5a6' },
  { ico: '☎', title: 'Зафиксирован входящий звонок, 6 мин 24 сек', meta: 'Дмитрий Орлов · 1 ч назад', color: '#f59e0b' },
  { ico: '↑', title: 'Сделка «Рамочный договор на 2027» переведена в «Завершено»', meta: 'Анна Ковалёва · 2 ч назад', color: '#7c5cf7' }
];

const revenueSeries = {
  labels: ['Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя'],
  revenue: [1240000, 1380000, 1320000, 1610000, 1780000, 1890000, 2140000, 2480000],
  expense: [860000, 910000, 880000, 1020000, 1090000, 1150000, 1290000, 1420000]
};

const channels = [
  { name: 'Собственный сайт', value: 34, color: '#4f6ef7' },
  { name: 'Рекомендации', value: 27, color: '#7c5cf7' },
  { name: 'Социальные сети', value: 21, color: '#0fb5a6' },
  { name: 'Телемаркетинг', value: 12, color: '#f59e0b' },
  { name: 'Прочие каналы', value: 6, color: '#cbd5e1' }
];

const services = [
  { name: 'Уборка помещений', value: 684000, pct: 28, color: '#4f6ef7' },
  { name: 'Ремонт и обслуживание', value: 542000, pct: 22, color: '#7c5cf7' },
  { name: 'Курьерская доставка', value: 431000, pct: 17, color: '#0fb5a6' },
  { name: 'Консультации', value: 358000, pct: 14, color: '#f59e0b' },
  { name: 'Клининг после ремонта', value: 268000, pct: 11, color: '#ef476f' },
  { name: 'Прочие услуги', value: 197000, pct: 8, color: '#94a3b8' }
];

/* ============================ CHARTS ============================ */

function areaChart(series, labels, opts = {}) {
  const W = 780, H = 268, pl = 54, pr = 18, pt = 18, pb = 30;
  const iw = W - pl - pr, ih = H - pt - pb;
  const max = opts.max || 2800000;
  const stepX = iw / (labels.length - 1);
  const yOf = v => pt + ih - (v / max) * ih;
  const xOf = i => pl + i * stepX;

  let grid = '';
  for (let i = 0; i <= 4; i++) {
    const v = (max / 4) * i, y = yOf(v);
    grid += `<line x1="${pl}" y1="${y}" x2="${W - pr}" y2="${y}" stroke="#eef1f8" stroke-width="1"/>
      <text x="${pl - 10}" y="${y + 4}" text-anchor="end" font-size="10.5" fill="#94a3b8">${v === 0 ? '0' : (v / 1e6).toFixed(1).replace('.', ',') + ' млн'}</text>`;
  }

  const smooth = data => {
    let d = `M ${xOf(0)} ${yOf(data[0])}`;
    for (let i = 1; i < data.length; i++) {
      const x0 = xOf(i - 1), y0 = yOf(data[i - 1]);
      const x1 = xOf(i), y1 = yOf(data[i]);
      const cx = (x0 + x1) / 2;
      d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
    }
    return d;
  };

  let body = '';
  series.forEach((s, si) => {
    const line = smooth(s.data);
    if (s.fill) {
      body += `<defs>
        <linearGradient id="g${si}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${s.color}" stop-opacity="0.26"/>
          <stop offset="100%" stop-color="${s.color}" stop-opacity="0"/>
        </linearGradient></defs>
        <path d="${line} L ${xOf(s.data.length - 1)} ${pt + ih} L ${xOf(0)} ${pt + ih} Z" fill="url(#g${si})"/>`;
    }
    body += `<path d="${line}" fill="none" stroke="${s.color}" stroke-width="${s.width || 2.6}" stroke-linecap="round"/>`;
    s.data.forEach((v, i) => {
      body += `<circle cx="${xOf(i)}" cy="${yOf(v)}" r="${i === s.data.length - 1 ? 5 : 3}" fill="#fff" stroke="${s.color}" stroke-width="${s.width ? 2 : 2.4}"/>`;
    });
  });

  const xAxis = labels.map((l, i) =>
    `<text x="${xOf(i)}" y="${H - 8}" text-anchor="middle" font-size="11" fill="#94a3b8">${l}</text>`).join('');

  return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="268" style="display:block">
    ${grid}${body}${xAxis}
    <line x1="${pl}" y1="${pt + ih}" x2="${W - pr}" y2="${pt + ih}" stroke="#e5e9f2"/>
  </svg>`;
}

function donut(segments, size = 168) {
  const r = 62, c = 2 * Math.PI * r;
  let off = 0;
  const arcs = segments.map(s => {
    const len = (s.value / 100) * c;
    const el = `<circle cx="84" cy="84" r="${r}" fill="none" stroke="${s.color}" stroke-width="20"
      stroke-dasharray="${len - 3} ${c - len + 3}" stroke-dashoffset="${-off}" stroke-linecap="round"
      transform="rotate(-90 84 84)"/>`;
    off += len;
    return el;
  }).join('');
  return `<svg viewBox="0 0 168 168" width="${size}" height="${size}" style="flex:0 0 ${size}px">
    <circle cx="84" cy="84" r="${r}" fill="none" stroke="#f1f4fa" stroke-width="20"/>
    ${arcs}
    <text x="84" y="80" text-anchor="middle" font-size="22" font-weight="700" fill="#0f172a">184</text>
    <text x="84" y="98" text-anchor="middle" font-size="10.5" fill="#94a3b8">заявки за месяц</text>
  </svg>`;
}

function barChart(items, opts = {}) {
  const W = 780, H = 240, pl = 54, pr = 18, pt = 16, pb = 34;
  const iw = W - pl - pr, ih = H - pt - pb;
  const max = opts.max || 800000;
  const n = items.length;
  const bw = Math.min(54, (iw / n) * 0.52);
  const gap = (iw - bw * n) / (n - 1 || 1);
  let grid = '';
  for (let i = 0; i <= 4; i++) {
    const v = (max / 4) * i, y = pt + ih - (v / max) * ih;
    grid += `<line x1="${pl}" y1="${y}" x2="${W - pr}" y2="${y}" stroke="#eef1f8"/>
      <text x="${pl - 10}" y="${y + 4}" text-anchor="end" font-size="10.5" fill="#94a3b8">${v === 0 ? '0' : Math.round(v / 1000) + ' тыс.'}</text>`;
  }
  const bars = items.map((it, i) => {
    const h = (it.value / max) * ih;
    const x = pl + i * (bw + gap), y = pt + ih - h;
    return `<g>
      <rect x="${x}" y="${y}" width="${bw}" height="${h}" rx="7" fill="url(#barGrad)"/>
      <text x="${x + bw / 2}" y="${y - 8}" text-anchor="middle" font-size="11" font-weight="650" fill="#475569">${Math.round(it.value / 1000)} тыс.</text>
      <text x="${x + bw / 2}" y="${H - 12}" text-anchor="middle" font-size="11" fill="#94a3b8">${it.name}</text>
    </g>`;
  }).join('');
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" style="display:block">
    <defs><linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6d86fa"/><stop offset="100%" stop-color="#4f6ef7"/>
    </linearGradient></defs>
    ${grid}${bars}
    <line x1="${pl}" y1="${pt + ih}" x2="${W - pr}" y2="${pt + ih}" stroke="#e5e9f2"/>
  </svg>`;
}

function sparkline(data, color) {
  const w = 92, h = 34, max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 6) - 3;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  return `<svg class="kpi-spark" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".75"/>
  </svg>`;
}

/* ============================ UI STATE ============================ */
const ui = {
  requestStatus: 'all',
  requestQuery: '',
  clientQuery: '',
  clientSegment: 'all',
  dashboardRange: 'month'
};

/* ============================ TOAST / OVERLAY ============================ */
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function openDrawer(html) {
  const d = $('#drawer');
  d.innerHTML = html;
  d.classList.add('open');
  $('#drawer-overlay').classList.add('open');
}
function closeDrawer() {
  $('#drawer').classList.remove('open');
  $('#drawer-overlay').classList.remove('open');
}
function openModal(html) {
  $('#modal').innerHTML = html;
  $('#modal-overlay').classList.add('open');
}
function closeModal() {
  $('#modal-overlay').classList.remove('open');
}

/* ============================ VIEWS ============================ */

function pageHead(title, sub, extra = '') {
  return `<div class="page-head">
    <div>
      <h1 class="page-title">${title}</h1>
      <div class="page-sub">${sub}</div>
    </div>
    <div class="spacer"></div>
    ${extra}
  </div>`;
}

function kpiCard({ label, value, unit, delta, up = true, ico, color, spark }) {
  const cls = delta.startsWith('0') ? 'flat' : (up ? 'up' : 'down');
  const arrow = delta.startsWith('0') ? '→' : (up ? '↑' : '↓');
  return `<div class="card kpi">
    <div class="kpi-top">
      <span>${label}</span>
      <span class="kpi-ico" style="background:${color}1a;color:${color}">${ico}</span>
    </div>
    <div class="kpi-value">${value}${unit ? `<small>${unit}</small>` : ''}</div>
    <span class="delta ${cls}">${arrow} ${delta}</span>
    ${spark ? sparkline(spark, color) : ''}
  </div>`;
}

function renderDashboard() {
  const todayTasks = tasks.filter(t => t.group === 'today');
  const doneCount = todayTasks.filter(t => t.done).length;

  const recent = requests.slice(0, 5).map(r => `
    <tr data-request="${r.id}" style="cursor:pointer">
      <td><div class="cell-main">${r.id}</div><div class="cell-sub">${r.date}</div></td>
      <td><div class="cell-main">${r.client}</div><div class="cell-sub">${r.source}</div></td>
      <td>${r.service}</td>
      <td><div class="stable">${av(r.manager, 26)}<span>${r.manager}</span></div></td>
      <td>${statusPill(r.status)}</td>
      <td class="money">${fmt(r.amount)}</td>
    </tr>`).join('');

  $('#view').innerHTML = `
    ${pageHead('Дашборд',
      'Сводная панель за ноябрь 2026 года · данные обновлены 2 минуты назад',
      `<div class="segmented">
        <button data-range="week">Неделя</button>
        <button data-range="month" class="on">Месяц</button>
        <button data-range="quarter">Квартал</button>
      </div>
      <button class="btn btn-sm">Экспорт</button>`)}

    <div class="kpi-grid">
      ${kpiCard({ label: 'Выручка за месяц', value: '2 480 000', unit: '₽', delta: '18,4%', ico: '₽', color: '#4f6ef7', spark: [1.24, 1.38, 1.32, 1.61, 1.78, 1.89, 2.14, 2.48].map(v => v * 1e6) })}
      ${kpiCard({ label: 'Новые заявки', value: '184', unit: 'шт', delta: '7,2%', ico: '✉', color: '#0fb5a6', spark: [112, 128, 121, 145, 152, 160, 172, 184] })}
      ${kpiCard({ label: 'Средний чек', value: '13 480', unit: '₽', delta: '3,1%', ico: '◔', color: '#7c5cf7', spark: [11.2, 11.8, 11.5, 12.4, 12.9, 12.6, 13.1, 13.48] })}
      ${kpiCard({ label: 'Удержание клиентов', value: '92,6', unit: '%', delta: '1,4%', ico: '◎', color: '#f59e0b', spark: [88, 89, 90, 89.5, 91, 91.4, 92, 92.6] })}
    </div>

    <div class="dash-grid">
      <div class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Динамика выручки и расходов</div>
            <div class="card-sub">Последние 8 месяцев, млн ₽</div>
          </div>
          <div style="margin-left:auto" class="legend">
            <div class="legend-item"><span class="legend-dot" style="background:#4f6ef7"></span>Выручка</div>
            <div class="legend-item"><span class="legend-dot" style="background:#cbd5e1"></span>Расходы</div>
          </div>
        </div>
        <div class="card-body">
          ${areaChart([
            { name: 'Выручка', color: '#4f6ef7', data: revenueSeries.revenue, fill: true, width: 2.8 },
            { name: 'Расходы', color: '#b9c3d6', data: revenueSeries.expense, width: 2 }
          ], revenueSeries.labels)}
        </div>
      </div>

      <div class="card">
        <div class="card-head">
          <div>
            <div class="card-title">Каналы привлечения</div>
            <div class="card-sub">Доля заявок за месяц</div>
          </div>
        </div>
        <div class="card-body">
          <div class="donut-wrap">
            ${donut(channels, 158)}
            <div class="donut-legend">
              ${channels.map(c => `<div class="dl-item">
                <span class="legend-dot" style="background:${c.color}"></span>
                <span class="dl-name">${c.name}</span>
                <span class="dl-val">${c.value}%</span>
              </div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dash-grid-3" style="margin-bottom:16px">
      <div class="card">
        <div class="card-head">
          <div class="card-title">Выручка по услугам</div>
          <span class="card-sub" style="margin-left:auto">Ноябрь</span>
        </div>
        <div class="card-body">
          <div class="progress-list">
            ${services.map(s => `<div class="pl-item">
              <div class="pl-top">
                <span class="pl-name">${s.name}</span>
                <span class="pl-val">${fmt(s.value)}</span>
              </div>
              <div class="bar"><span style="width:${s.pct * 3.2}%;background:${s.color}"></span></div>
            </div>`).join('')}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-head">
          <div class="card-title">Задачи на сегодня</div>
          <span class="pill blue" style="margin-left:auto">${doneCount}/${todayTasks.length}</span>
        </div>
        <div style="padding:4px 0">
          ${todayTasks.map(t => `
            <div class="task ${t.done ? 'done' : ''}" data-task="${t.id}">
              <div class="checkbox">✓</div>
              <div style="min-width:0">
                <div class="task-title">${t.title}</div>
                <div class="task-meta">${t.project}</div>
              </div>
              <div class="task-time">${t.time}</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="card">
        <div class="card-head">
          <div class="card-title">Лента активности</div>
          <span class="card-sub" style="margin-left:auto">Онлайн</span>
        </div>
        <div class="card-body" style="padding-top:6px">
          <div class="feed">
            ${feed.map(f => `<div class="feed-item">
              <div class="feed-ico" style="background:${f.color}1a;color:${f.color}">${f.ico}</div>
              <div>
                <div class="feed-title">${f.title}</div>
                <div class="feed-meta">${f.meta}</div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-head">
        <div class="card-title">Последние заявки</div>
        <div style="margin-left:auto"><button class="btn btn-sm" data-goto="requests">Все заявки →</button></div>
      </div>
      <div class="table-wrap">
        <table class="tbl">
          <thead><tr><th>Заявка</th><th>Клиент</th><th>Услуга</th><th>Менеджер</th><th>Статус</th><th>Сумма</th></tr></thead>
          <tbody>${recent}</tbody>
        </table>
      </div>
    </div>
  `;

  $$('#view .segmented button').forEach(b => b.addEventListener('click', () => {
    $$('#view .segmented button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    ui.dashboardRange = b.dataset.range;
    toast('Период: ' + b.textContent.trim());
  }));

  $$('#view [data-task]').forEach(el => el.addEventListener('click', () => {
    const t = tasks.find(x => x.id === el.dataset.task);
    t.done = !t.done;
    render();
  }));

  $$('#view [data-request]').forEach(el => el.addEventListener('click', () => showRequest(el.dataset.request)));
  $$('#view [data-goto]').forEach(el => el.addEventListener('click', () => navigate(el.dataset.goto)));
}

function renderRequests() {
  const filtered = requests.filter(r => {
    const okS = ui.requestStatus === 'all' || r.status === ui.requestStatus;
    const q = ui.requestQuery.toLowerCase();
    const okQ = !q || (r.id + r.client + r.service + r.manager).toLowerCase().includes(q);
    return okS && okQ;
  });

  const counts = {};
  requests.forEach(r => counts[r.status] = (counts[r.status] || 0) + 1);
  const total = requests.reduce((s, r) => s + r.amount, 0);

  $('#view').innerHTML = `
    ${pageHead('Заявки', `Всего ${requests.length} заявок · сумма ${fmt(total)}`,
      `<button class="btn btn-sm">Фильтры</button>
       <button class="btn btn-sm">Выгрузить</button>
       <button class="btn btn-primary btn-sm" data-new="request">＋ Заявка</button>`)}

    <div class="card" style="margin-bottom:16px">
      <div class="card-body" style="display:flex;gap:14px;align-items:center;flex-wrap:wrap;padding:14px 18px">
        <div class="segmented">
          <button data-st="all" class="${ui.requestStatus === 'all' ? 'on' : ''}">Все · ${requests.length}</button>
          <button data-st="Новая" class="${ui.requestStatus === 'Новая' ? 'on' : ''}">Новые · ${counts['Новая'] || 0}</button>
          <button data-st="В работе" class="${ui.requestStatus === 'В работе' ? 'on' : ''}">В работе · ${counts['В работе'] || 0}</button>
          <button data-st="Оплачена" class="${ui.requestStatus === 'Оплачена' ? 'on' : ''}">Оплачены · ${counts['Оплачена'] || 0}</button>
                </div>
        <div class="search" style="width:280px;margin-left:auto">
          <span class="search-ico">⌕</span>
          <input id="req-search" placeholder="Поиск заявки или клиента" value="${ui.requestQuery}">
        </div>
      </div>
    </div>

    <div class="card">
      <div class="table-wrap">
        <table class="tbl">
          <thead><tr>
            <th>№ заявки</th><th>Клиент</th><th>Услуга</th><th>Менеджер</th>
            <th>Канал</th><th>Статус</th><th style="text-align:right">Сумма</th><th>Дата</th>
          </tr></thead>
          <tbody>
            ${filtered.length ? filtered.map(r => `
              <tr data-request="${r.id}" style="cursor:pointer">
                <td><div class="cell-main">${r.id}</div><div class="cell-sub">${r.source}</div></td>
                <td><div class="cell-main">${r.client}</div></td>
                <td>${r.service}</td>
                <td><div class="stable">${av(r.manager, 26)}<span>${r.manager}</span></div></td>
                <td><span class="tag">${r.channel}</span></td>
                <td>${statusPill(r.status)}</td>
                <td class="money" style="text-align:right">${fmt(r.amount)}</td>
                <td class="muted">${r.date}</td>
              </tr>`).join('') : `<tr><td colspan="8"><div class="empty">Заявки не найдены — измените фильтр</div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;

  $$('#view [data-st]').forEach(b => b.addEventListener('click', () => {
    ui.requestStatus = b.dataset.st;
    renderRequests();
  }));

  const search = $('#req-search');
  search.addEventListener('input', () => {
    ui.requestQuery = search.value;
    const pos = search.selectionStart;
    renderRequests();
    const s2 = $('#req-search');
    s2.focus();
    s2.setSelectionRange(pos, pos);
  });

  $$('#view [data-request]').forEach(el => el.addEventListener('click', () => showRequest(el.dataset.request)));
  $$('#view [data-new]').forEach(el => el.addEventListener('click', () => openCreateModal(el.dataset.new)));
}

function renderClients() {
  const q = ui.clientQuery.toLowerCase();
  const list = clients.filter(c => {
    const okQ = !q || (c.name + c.contact + c.phone + c.manager).toLowerCase().includes(q);
    const okS = ui.clientSegment === 'all' || c.segment === ui.clientSegment;
    return okQ && okS;
  });

  const totalLtv = clients.reduce((s, c) => s + c.ltv, 0);

  $('#view').innerHTML = `
    ${pageHead('Клиенты', `База клиентов · ${clients.length} записей · суммарный LTV ${fmt(totalLtv)}`,
      `<button class="btn btn-sm">Импорт</button>
       <button class="btn btn-primary btn-sm" data-new="client">＋ Клиент</button>`)}

    <div class="kpi-grid" style="grid-template-columns:repeat(3,1fr)">
      <div class="card kpi">
        <div class="kpi-top"><span>Активные клиенты</span><span class="kpi-ico" style="background:#e8f8ef;color:#128a4b">◎</span></div>
        <div class="kpi-value">${clients.filter(c => c.status === 'Активный').length}<small>из ${clients.length}</small></div>
        <span class="delta up">↑ 6,0%</span>
      </div>
      <div class="card kpi">
        <div class="kpi-top"><span>Средний LTV</span><span class="kpi-ico" style="background:#eef2ff;color:#4f6ef7">₽</span></div>
        <div class="kpi-value">${fmtN(Math.round(totalLtv / clients.length))}<small>₽</small></div>
        <span class="delta up">↑ 11,2%</span>
      </div>
      <div class="card kpi">
        <div class="kpi-top"><span>Новые за месяц</span><span class="kpi-ico" style="background:#fdf3e2;color:#a4680a">＋</span></div>
        <div class="kpi-value">27<small>клиентов</small></div>
        <span class="delta flat">→ 0,0%</span>
      </div>
    </div>

    <div class="card" style="margin-bottom:16px">
      <div class="card-body" style="display:flex;gap:14px;align-items:center;flex-wrap:wrap;padding:14px 18px">
        <div class="segmented">
          <button data-seg="all" class="${ui.clientSegment === 'all' ? 'on' : ''}">Все</button>
          <button data-seg="B2B" class="${ui.clientSegment === 'B2B' ? 'on' : ''}">B2B</button>
          <button data-seg="B2C" class="${ui.clientSegment === 'B2C' ? 'on' : ''}">B2C</button>
          <button data-seg="VIP" class="${ui.clientSegment === 'VIP' ? 'on' : ''}">VIP</button>
        </div>
        <div class="search" style="width:300px;margin-left:auto">
          <span class="search-ico">⌕</span>
          <input id="cl-search" placeholder="Название, контакт, телефон" value="${ui.clientQuery}">
        </div>
      </div>
    </div>

    <div class="card">
      <div class="table-wrap">
        <table class="tbl">
          <thead><tr>
            <th>Клиент</th><th>Контактное лицо</th><th>Сегмент</th>
            <th>LTV</th><th>Заявок</th><th>Менеджер</th><th>Статус</th><th></th>
          </tr></thead>
          <tbody>
            ${list.map(c => `
              <tr data-client="${c.id}" style="cursor:pointer">
                <td><div class="stable">${av(c.name, 34)}
                  <div>
                    <div class="cell-main">${c.name}</div>
                    <div class="cell-sub">${c.city} · с ${c.created}</div>
                  </div>
                </div></td>
                <td><div class="cell-main">${c.contact}</div><div class="cell-sub">${c.phone}</div></td>
                <td>${statusPill(c.segment)}</td>
                <td class="money">${fmt(c.ltv)}</td>
                <td>${c.reqs}</td>
                <td>${c.manager}</td>
                <td>${statusPill(c.status)}</td>
                <td class="muted">›</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  $$('#view [data-seg]').forEach(b => b.addEventListener('click', () => {
    ui.clientSegment = b.dataset.seg;
    renderClients();
  }));

  const search = $('#cl-search');
  search.addEventListener('input', () => {
    ui.clientQuery = search.value;
    const pos = search.selectionStart;
    renderClients();
    const s2 = $('#cl-search');
    s2.focus();
    s2.setSelectionRange(pos, pos);
  });

  $$('#view [data-client]').forEach(el => el.addEventListener('click', () => showClient(el.dataset.client)));
  $$('#view [data-new]').forEach(el => el.addEventListener('click', () => openCreateModal(el.dataset.new)));
}

function renderDeals() {
  const total = deals.filter(d => d.stage !== 'done').reduce((s, d) => s + d.amount, 0);
  const won = deals.filter(d => d.stage === 'done').reduce((s, d) => s + d.amount, 0);

  $('#view').innerHTML = `
    ${pageHead('Сделки', `Воронка продаж · в работе ${fmt(total)} · закрыто ${fmt(won)}`,
      `<div class="segmented"><button class="on">Канбан</button><button>Список</button></div>
       <button class="btn btn-primary btn-sm" data-new="deal">＋ Сделка</button>`)}

    <div class="kanban">
      ${stages.map(st => {
        const items = deals.filter(d => d.stage === st.key);
        const sum = items.reduce((s, d) => s + d.amount, 0);
        return `<div class="kcol" data-stage="${st.key}">
          <div class="kcol-head">
            <span class="kcol-dot" style="background:${st.color}"></span>
            <span class="kcol-name">${st.name}</span>
            <span class="kcol-count">${items.length} · ${sum ? Math.round(sum / 1000) + ' т.' : '0'}</span>
          </div>
          ${items.map(d => {
            const c = clients.find(x => d.client === x.name) || {};
            return `<div class="kcard" draggable="true" data-deal="${d.id}">
              <div style="display:flex;gap:8px">
                <span class="priority" style="background:${d.prio === 'high' ? '#ef476f' : d.prio === 'normal' ? '#f59e0b' : '#cbd5e1'}"></span>
                <div style="min-width:0;flex:1">
                  <div class="kcard-title">${d.title}</div>
                  <div class="kcard-client">${d.client}</div>
                </div>
              </div>
              <div class="kcard-foot">
                ${av(d.manager, 24)}
                <span class="muted" style="font-size:11.5px">${d.date}</span>
                <span class="kcard-amount">${fmt(d.amount)}</span>
              </div>
            </div>`;
          }).join('')}
          ${items.length === 0 ? '<div class="empty" style="padding:18px 8px;font-size:12px">Перетащите карточку</div>' : ''}
        </div>`;
      }).join('')}
    </div>
  `;

  let dragId = null;
  $$('#view .kcard').forEach(card => {
    card.addEventListener('dragstart', e => {
      dragId = card.dataset.deal;
      card.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', dragId);
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      dragId = null;
    });
  });

  $$('#view .kcol').forEach(col => {
    col.addEventListener('dragover', e => {
      e.preventDefault();
      col.classList.add('over');
    });
    col.addEventListener('dragleave', () => col.classList.remove('over'));
    col.addEventListener('drop', e => {
      e.preventDefault();
      col.classList.remove('over');
      const id = dragId || e.dataTransfer.getData('text/plain');
      const deal = deals.find(d => d.id === id);
      if (!deal) return;
      const st = stages.find(s => s.key === col.dataset.stage);
      if (deal.stage === col.dataset.stage) return;
      deal.stage = col.dataset.stage;
      toast(`«${deal.title}» → ${st.name}`);
      renderDeals();
    });
  });

  $$('#view [data-new]').forEach(el => el.addEventListener('click', () => openCreateModal(el.dataset.new)));
}

function renderTasks() {
  const groups = [
    { key: 'overdue', name: 'Просроченные', color: '#ef476f' },
    { key: 'today', name: 'Сегодня', color: '#4f6ef7' },
    { key: 'tomorrow', name: 'Завтра', color: '#0fb5a6' },
    { key: 'done', name: 'Завершённые', color: '#22c55e' }
  ];

  $('#view').innerHTML = `
    ${pageHead('Задачи', 'Личный план сотрудника · 15 ноября 2026',
      `<button class="btn btn-sm">Фильтр</button>
       <button class="btn btn-primary btn-sm" data-new="task">＋ Задача</button>`)}

    <div class="dash-grid" style="grid-template-columns:1.7fr 1fr">
      <div>
        ${groups.map(g => {
          const items = tasks.filter(t => t.group === g.key);
          if (!items.length) return '';
          return `<div class="card" style="margin-bottom:16px">
            <div class="card-head">
              <span class="kcol-dot" style="background:${g.color};width:9px;height:9px"></span>
              <div class="card-title">${g.name}</div>
              <span class="card-sub" style="margin-left:auto">${items.filter(i => !i.done).length} активных</span>
            </div>
            ${items.map(t => `
              <div class="task ${t.done ? 'done' : ''}" data-task="${t.id}">
                <div class="checkbox">✓</div>
                <div style="min-width:0">
                  <div class="task-title">${t.title}</div>
                  <div class="task-meta">${t.project}</div>
                </div>
                <div class="task-time">
                  ${t.prio === 'high' && !t.done ? '<span class="pill rose">срочно</span>' : ''}
                  ${t.time}
                </div>
              </div>`).join('')}
          </div>`;
        }).join('')}
      </div>

      <div>
        <div class="card" style="margin-bottom:16px">
          <div class="card-head"><div class="card-title">Прогресс дня</div></div>
          <div class="card-body">
            <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px">
              <span style="font-size:30px;font-weight:700;letter-spacing:-1px">3</span>
              <span class="muted">из 9 задач выполнено</span>
            </div>
            <div class="bar" style="height:9px"><span style="width:33%;background:linear-gradient(90deg,#4f6ef7,#7c5cf7)"></span></div>
            <div class="stat-row" style="margin-top:12px">
              <div><div class="stat-name">Просрочено</div><div class="stat-sub">требует внимания</div></div>
              <div class="stat-val" style="color:#ef476f">2</div>
            </div>
            <div class="stat-row">
              <div><div class="stat-name">На сегодня</div><div class="stat-sub">по плану</div></div>
              <div class="stat-val">4</div>
            </div>
            <div class="stat-row">
              <div><div class="stat-name">На завтра</div><div class="stat-sub">запланировано</div></div>
              <div class="stat-val">3</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-head"><div class="card-title">Напоминания</div></div>
          <div class="card-body">
            <div class="feed">
              <div class="feed-item"><div class="feed-ico" style="background:#fdeef2;color:#ef476f">!</div>
                <div><div class="feed-title">Просрочен счёт № 118</div><div class="feed-meta">ООО «Клининг Профи» · 3 дня</div></div></div>
              <div class="feed-item"><div class="feed-ico" style="background:#fdf3e2;color:#a4680a">◔</div>
                <div><div class="feed-title">Договор истекает через 14 дней</div><div class="feed-meta">ООО «Северный Ветер»</div></div></div>
              <div class="feed-item"><div class="feed-ico" style="background:#eaefff;color:#4f6ef7">✉</div>
                <div><div class="feed-title">2 новые заявки с сайта</div><div class="feed-meta">Требуют квалификации</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  $$('#view [data-task]').forEach(el => el.addEventListener('click', () => {
    const t = tasks.find(x => x.id === el.dataset.task);
    t.done = !t.done;
    renderTasks();
  }));
  $$('#view [data-new]').forEach(el => el.addEventListener('click', () => openCreateModal(el.dataset.new)));
}

function renderReports() {
  const funnel = [
    { name: 'Заявки', value: 184, pct: 100, color: '#4f6ef7' },
    { name: 'Квалифицировано', value: 142, pct: 77, color: '#5b7bf9' },
    { name: 'Коммерческое предложение', value: 98, pct: 53, color: '#7c5cf7' },
    { name: 'Договор подписан', value: 61, pct: 33, color: '#0fb5a6' },
    { name: 'Оплата получена', value: 48, pct: 26, color: '#22c55e' }
  ];

  $('#view').innerHTML = `
    ${pageHead('Отчёты', 'Аналитика за ноябрь 2026 · обновлено сегодня в 09:14',
      `<div class="segmented"><button>Неделя</button><button class="on">Месяц</button><button>Квартал</button></div>
       <button class="btn btn-sm">Скачать PDF</button>`)}

    <div class="kpi-grid">
      ${kpiCard({ label: 'Выручка', value: '2 480 000', unit: '₽', delta: '18,4%', ico: '₽', color: '#4f6ef7' })}
      ${kpiCard({ label: 'Конверсия в оплату', value: '26,1', unit: '%', delta: '2,8%', ico: '◔', color: '#0fb5a6' })}
      ${kpiCard({ label: 'Средний цикл сделки', value: '7,4', unit: 'дн.', delta: '0,9%', ico: '◷', color: '#7c5cf7', up: false })}
      ${kpiCard({ label: 'Стоимость привлечения', value: '1 240', unit: '₽', delta: '4,2%', ico: '◎', color: '#f59e0b', up: false })}
    </div>

    <div class="dash-grid">
      <div class="card">
        <div class="card-head">
          <div><div class="card-title">Выручка по месяцам</div><div class="card-sub">Факт и план, тыс. ₽</div></div>
        </div>
        <div class="card-body">
          ${barChart([
            { name: 'Апр', value: 1240000 }, { name: 'Май', value: 1380000 },
            { name: 'Июн', value: 1320000 }, { name: 'Июл', value: 1610000 },
            { name: 'Авг', value: 1780000 }, { name: 'Сен', value: 1890000 },
            { name: 'Окт', value: 2140000 }, { name: 'Ноя', value: 2480000 }
          ], { max: 3000000 })}
        </div>
      </div>

      <div class="card">
        <div class="card-head"><div class="card-title">Воронка продаж</div><span class="card-sub" style="margin-left:auto">Ноябрь</span></div>
        <div class="card-body">
          <div class="progress-list">
            ${funnel.map(f => `<div class="pl-item">
              <div class="pl-top">
                <span class="pl-name">${f.name}</span>
                <span class="pl-val">${f.value} · ${f.pct}%</span>
              </div>
              <div class="bar" style="height:9px"><span style="width:${f.pct}%;background:${f.color}"></span></div>
            </div>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:16px">
      <div class="card-head"><div class="card-title">Эффективность менеджеров</div>
        <span class="card-sub" style="margin-left:auto">Ноябрь 2026</span></div>
      <div class="table-wrap">
        <table class="tbl">
          <thead><tr><th>Сотрудник</th><th>Сделок</th><th>Выручка</th><th>Конверсия</th><th style="min-width:180px">Выполнение плана</th></tr></thead>
          <tbody>
            ${team.filter(t => t.deals > 0).map(t => `
              <tr>
                <td><div class="stable">${av(t.name, 32)}<div><div class="cell-main">${t.name}</div><div class="cell-sub">${t.role}</div></div></div></td>
                <td>${t.deals}</td>
                <td class="money">${fmt(t.revenue)}</td>
                <td>${t.conv}%</td>
                <td><div class="bar"><span style="width:${Math.min(100, t.conv * 2)}%;background:${colorFor(t.name)}"></span></div></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  $$('#view .segmented button').forEach(b => b.addEventListener('click', () => {
    $$('#view .segmented button').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
  }));
}

function renderTeam() {
  $('#view').innerHTML = `
    ${pageHead('Сотрудники', `${team.length} пользователей · тариф «Бизнес» · 15 из 25 лицензий`,
      `<button class="btn btn-sm">Роли и права</button>
       <button class="btn btn-primary btn-sm" data-new="user">＋ Пригласить</button>`)}

    <div class="team-grid">
      ${team.map(t => `
        <div class="card team-card">
          ${av(t.name, 44)}
          <div style="min-width:0">
            <div class="team-name">${t.name}</div>
            <div class="team-role">${t.role}</div>
            <div class="team-role" style="margin-top:4px">${t.mail}</div>
          </div>
          <div style="margin-left:auto;text-align:right">
            ${t.deals ? `<div class="money" style="font-size:14px">${fmt(t.revenue)}</div><div class="cell-sub">${t.deals} сделок</div>` : '<span class="pill gray">нет сделок</span>'}
          </div>
        </div>`).join('')}
    </div>

    <div class="card" style="margin-top:16px">
      <div class="card-head"><div class="card-title">Роли и доступ</div></div>
      <div class="table-wrap">
        <table class="tbl">
          <thead><tr><th>Роль</th><th>Пользователей</th><th>Права</th></tr></thead>
          <tbody>
            <tr><td class="cell-main">Администратор</td><td>2</td><td><span class="tag">полный доступ</span><span class="tag">настройки</span><span class="tag">биллинг</span></td></tr>
            <tr><td class="cell-main">Руководитель отдела</td><td>2</td><td><span class="tag">аналитика</span><span class="tag">клиенты</span><span class="tag">сделки</span></td></tr>
            <tr><td class="cell-main">Менеджер</td><td>6</td><td><span class="tag">клиенты</span><span class="tag">заявки</span><span class="tag">задачи</span></td></tr>
            <tr><td class="cell-main">Наблюдатель</td><td>5</td><td><span class="tag">только чтение</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  $$('#view [data-new]').forEach(el => el.addEventListener('click', () => openCreateModal(el.dataset.new)));
}

function renderSettings() {
  $('#view').innerHTML = `
    ${pageHead('Настройки', 'Параметры облачной CRM-системы «Терра»')}

    <div class="settings-grid">
      <div class="card" style="padding:10px">
        <div class="settings-nav">
          <a class="on">Профиль компании</a>
          <a>Пользователи и роли</a>
          <a>Воронки и этапы</a>
          <a>Шаблоны документов</a>
          <a>Интеграции</a>
          <a>Уведомления</a>
          <a>Безопасность</a>
          <a>Тариф и оплата</a>
        </div>
      </div>

      <div>
        <div class="card" style="margin-bottom:16px">
          <div class="card-head"><div><div class="card-title">Профиль компании</div><div class="card-sub">Основные реквизиты и контакты</div></div></div>
          <div class="card-body">
            <div class="field-row">
              <div class="field"><label>Название организации</label><input value="ООО «Терра Сервис»"></div>
              <div class="field"><label>ИНН</label><input value="7804123456"></div>
            </div>
            <div class="field-row">
              <div class="field"><label>Сфера деятельности</label>
                <select><option>Клининг и facility-услуги</option><option>Ремонт и обслуживание</option><option>Курьерские услуги</option></select></div>
              <div class="field"><label>Часовой пояс</label>
                <select><option>Москва (UTC+3)</option><option>Санкт-Петербург (UTC+3)</option><option>Екатеринбург (UTC+5)</option></select></div>
            </div>
            <div class="field"><label>Контактный e-mail для заявок</label><input value="orders@terra-service.ru"></div>
            <button class="btn btn-primary btn-sm" id="save-settings">Сохранить изменения</button>
          </div>
        </div>

        <div class="card">
          <div class="card-head"><div><div class="card-title">Уведомления и автоматизация</div><div class="card-sub">Правила обработки входящих заявок</div></div></div>
          <div class="card-body" style="padding-top:4px">
            <div class="setting-row">
              <div class="setting-text"><div class="setting-title">Автоматическое распределение заявок</div>
                <div class="setting-desc">Назначать менеджера по закреплённым клиентам и загрузке</div></div>
              <div class="switch on" data-switch></div>
            </div>
            <div class="setting-row">
              <div class="setting-text"><div class="setting-title">Уведомления в мессенджер</div>
                <div class="setting-desc">Отправлять новые заявки в корпоративный чат Telegram</div></div>
              <div class="switch on" data-switch></div>
            </div>
            <div class="setting-row">
              <div class="setting-text"><div class="setting-title">Напоминание о просроченной оплате</div>
                <div class="setting-desc">За 1 день до и в день наступления срока платежа</div></div>
              <div class="switch on" data-switch></div>
            </div>
            <div class="setting-row">
              <div class="setting-text"><div class="setting-title">Ежедневный дайджест руководителю</div>
                <div class="setting-desc">Сводка по заявкам и выручке в 09:00</div></div>
              <div class="switch" data-switch></div>
            </div>
            <div class="setting-row">
              <div class="setting-text"><div class="setting-title">Двухфакторная аутентификация</div>
                <div class="setting-desc">Обязательна для администраторов и руководителей</div></div>
              <div class="switch on" data-switch></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  $$('#view [data-switch]').forEach(s => s.addEventListener('click', () => {
    s.classList.toggle('on');
    toast(s.classList.contains('on') ? 'Настройка включена' : 'Настройка отключена');
  }));

  $('#save-settings').addEventListener('click', () => toast('Изменения сохранены'));
}

/* ============================ DRAWERS ============================ */

function showClient(id) {
  const c = clients.find(x => x.id === id);
  if (!c) return;
  const related = requests.filter(r => r.client === c.name);

  openDrawer(`
    <div class="drawer-head">
      ${av(c.name, 46)}
      <div>
        <div style="font-size:16px;font-weight:700">${c.name}</div>
        <div class="muted" style="font-size:12.5px">${c.contact} · ${c.city}</div>
        <div style="margin-top:7px;display:flex;gap:6px">
          ${statusPill(c.segment)} ${statusPill(c.status)}
          ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <button class="close-btn" data-close>✕</button>
    </div>
    <div class="drawer-body">
      <div class="tabs">
        <div class="tab on">Карточка</div>
        <div class="tab">Заявки (${c.reqs})</div>
        <div class="tab">Договоры</div>
        <div class="tab">История</div>
      </div>

      <div class="detail-grid">
        <div><div class="detail-label">Телефон</div><div class="detail-value">${c.phone}</div></div>
        <div><div class="detail-label">E-mail</div><div class="detail-value">${c.email}</div></div>
        <div><div class="detail-label">LTV</div><div class="detail-value">${fmt(c.ltv)}</div></div>
        <div><div class="detail-label">Менеджер</div><div class="detail-value">${c.manager}</div></div>
        <div><div class="detail-label">Клиент с</div><div class="detail-value">${c.created}</div></div>
        <div><div class="detail-label">Всего заявок</div><div class="detail-value">${c.reqs}</div></div>
      </div>

      <div style="font-size:12px;font-weight:650;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px">Последние заявки</div>
      <div class="card" style="box-shadow:none;margin-bottom:18px">
        ${related.length ? related.slice(0, 3).map(r => `
          <div class="task" style="padding:11px 14px">
            <div style="min-width:0">
              <div class="task-title">${r.id} · ${r.service}</div>
              <div class="task-meta">${r.date} · ${r.manager}</div>
            </div>
            <div style="margin-left:auto;text-align:right">
              <div class="money" style="font-size:12.5px">${fmt(r.amount)}</div>
              <div style="margin-top:3px">${statusPill(r.status)}</div>
            </div>
          </div>`).join('') : '<div class="empty">Заявок пока нет</div>'}
      </div>

      <div style="font-size:12px;font-weight:650;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px">История взаимодействий</div>
      <div class="timeline">
        <div class="tl-item"><div class="tl-title">Зафиксирован входящий звонок, 6 мин 24 сек</div><div class="tl-meta">${c.manager} · 15.11.2026, 10:42</div></div>
        <div class="tl-item"><div class="tl-title">Отправлено коммерческое предложение</div><div class="tl-meta">${c.manager} · 12.11.2026, 16:20</div></div>
        <div class="tl-item"><div class="tl-title">Заявка выполнена, подписан акт</div><div class="tl-meta">Сергей Ким · 05.11.2026, 12:05</div></div>
        <div class="tl-item"><div class="tl-title">Создана карточка клиента</div><div class="tl-meta">${c.manager} · ${c.created}</div></div>
      </div>
    </div>
    <div class="drawer-foot">
      <button class="btn" data-close>Закрыть</button>
      <div style="flex:1"></div>
      <button class="btn">Написать</button>
      <button class="btn btn-primary" id="dr-create">Создать заявку</button>
    </div>
  `);

  $$('#drawer [data-close]').forEach(b => b.addEventListener('click', closeDrawer));
  $$('#drawer .tab').forEach(t => t.addEventListener('click', () => {
    $$('#drawer .tab').forEach(x => x.classList.remove('on'));
    t.classList.add('on');
  }));
  $('#dr-create').addEventListener('click', () => { closeDrawer(); openCreateModal('request', c.name); });
}

function showRequest(id) {
  const r = requests.find(x => x.id === id);
  if (!r) return;
  const c = clients.find(x => x.name === r.client) || {};

  openDrawer(`
    <div class="drawer-head">
      <div class="kpi-ico" style="width:44px;height:44px;border-radius:12px;background:#eef2ff;color:#4f6ef7;font-size:18px">✉</div>
      <div>
        <div style="font-size:16px;font-weight:700">Заявка ${r.id}</div>
        <div class="muted" style="font-size:12.5px">${r.client} · ${r.date}</div>
        <div style="margin-top:7px">${statusPill(r.status)}</div>
      </div>
      <button class="close-btn" data-close>✕</button>
    </div>
    <div class="drawer-body">
      <div class="detail-grid">
        <div><div class="detail-label">Услуга</div><div class="detail-value">${r.service}</div></div>
        <div><div class="detail-label">Сумма</div><div class="detail-value">${fmt(r.amount)}</div></div>
        <div><div class="detail-label">Менеджер</div><div class="detail-value">${r.manager}</div></div>
        <div><div class="detail-label">Канал</div><div class="detail-value">${r.channel}</div></div>
        <div><div class="detail-label">Источник</div><div class="detail-value">${r.source}</div></div>
        <div><div class="detail-label">Приоритет</div><div class="detail-value">${r.priority === 'high' ? 'Высокий' : r.priority === 'low' ? 'Низкий' : 'Обычный'}</div></div>
      </div>

      <div style="font-size:12px;font-weight:650;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px">Клиент</div>
      <div class="card" style="box-shadow:none;padding:14px;margin-bottom:18px;display:flex;gap:11px;align-items:center;cursor:pointer" id="dr-client">
        ${av(r.client, 36)}
        <div>
          <div class="cell-main">${r.client}</div>
          <div class="cell-sub">${c.phone || '—'} · ${c.contact || ''}</div>
        </div>
        <span class="muted" style="margin-left:auto">›</span>
      </div>

      <div style="font-size:12px;font-weight:650;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px">История заявки</div>
      <div class="timeline">
        <div class="tl-item"><div class="tl-title">Создана заявка · ${r.source}</div><div class="tl-meta">${r.manager} · ${r.date}, 09:15</div></div>
        <div class="tl-item"><div class="tl-title">Проверка возможности оказания услуги</div><div class="tl-meta">Сергей Ким · ${r.date}, 10:02</div></div>
        <div class="tl-item"><div class="tl-title">Согласована стоимость · ${fmt(r.amount)}</div><div class="tl-meta">${r.manager} · ${r.date}, 11:40</div></div>
        <div class="tl-item"><div class="tl-title">Текущий статус: ${r.status}</div><div class="tl-meta">Обновлено сегодня</div></div>
      </div>
    </div>
    <div class="drawer-foot">
      <button class="btn" data-close>Закрыть</button>
      <div style="flex:1"></div>
      <button class="btn">Печать</button>
      <button class="btn btn-primary" id="dr-next">Перевести дальше →</button>
    </div>
  `);

  $$('#drawer [data-close]').forEach(b => b.addEventListener('click', closeDrawer));
  $('#dr-client').addEventListener('click', () => { closeDrawer(); if (c.id) showClient(c.id); else toast('Карточка клиента не найдена'); });
  $('#dr-next').addEventListener('click', () => {
    const flow = ['Новая', 'В работе', 'На согласовании', 'Оплачена', 'Завершена'];
    const i = flow.indexOf(r.status);
    r.status = flow[(i + 1) % flow.length];
    toast('Статус изменён: ' + r.status);
    closeDrawer();
    render();
  });
}

/* ============================ CREATE MODAL ============================ */

function openCreateModal(kind, clientName = '') {
  const titles = {
    request: ['Новая заявка', 'Заявка будет автоматически распределена по менеджерам'],
    client: ['Новый клиент', 'Заполните карточку — данные можно изменить позже'],
    deal: ['Новая сделка', 'Сделка появится на первом этапе воронки'],
    task: ['Новая задача', 'Задача попадёт в личный план исполнителя'],
    user: ['Приглашение сотрудника', 'Пользователь получит доступ в облачную CRM']
  };
  const [title, sub] = titles[kind] || titles.request;

  const body = {
    request: `
      <div class="field"><label>Клиент</label>
        <select>${clients.map(c => `<option ${c.name === clientName ? 'selected' : ''}>${c.name}</option>`).join('')}</select></div>
      <div class="field"><label>Услуга</label><input placeholder="Например: клининг офиса, 1 200 м²"></div>
      <div class="field-row">
        <div class="field"><label>Сумма, ₽</label><input placeholder="0"></div>
        <div class="field"><label>Канал</label>
          <select><option>Сайт</option><option>Телефон</option><option>Соцсети</option><option>Рекомендация</option><option>Партнёр</option></select></div>
      </div>
      <div class="field"><label>Комментарий</label><textarea rows="3" placeholder="Дополнительная информация"></textarea></div>`,
    client: `
      <div class="field"><label>Название / ФИО</label><input placeholder="ООО «Пример» или Иван Иванов"></div>
      <div class="field-row">
        <div class="field"><label>Телефон</label><input placeholder="+7 (___) ___-__-__"></div>
        <div class="field"><label>E-mail</label><input placeholder="name@company.ru"></div>
      </div>
      <div class="field-row">
        <div class="field"><label>Сегмент</label><select><option>B2B</option><option>B2C</option><option>VIP</option></select></div>
        <div class="field"><label>Менеджер</label><select>${team.slice(0, 4).map(t => `<option>${t.name}</option>`).join('')}</select></div>
      </div>`,
    deal: `
      <div class="field"><label>Название сделки</label><input placeholder="Клининг офиса, 1 200 м²"></div>
      <div class="field"><label>Клиент</label><select>${clients.map(c => `<option>${c.name}</option>`).join('')}</select></div>
      <div class="field-row">
        <div class="field"><label>Сумма, ₽</label><input placeholder="0"></div>
        <div class="field"><label>Этап</label><select>${stages.map(s => `<option>${s.name}</option>`).join('')}</select></div>
      </div>`,
    task: `
      <div class="field"><label>Задача</label><input placeholder="Что нужно сделать"></div>
      <div class="field-row">
        <div class="field"><label>Исполнитель</label><select>${team.map(t => `<option>${t.name}</option>`).join('')}</select></div>
        <div class="field"><label>Срок</label><input type="date" value="2026-11-16"></div>
      </div>
      <div class="field"><label>Приоритет</label><select><option>Обычный</option><option>Высокий</option><option>Низкий</option></select></div>`,
    user: `
      <div class="field"><label>E-mail сотрудника</label><input placeholder="name@terra-crm.ru"></div>
      <div class="field-row">
        <div class="field"><label>Роль</label><select><option>Менеджер</option><option>Руководитель отдела</option><option>Наблюдатель</option></select></div>
        <div class="field"><label>Отдел</label><select><option>Продажи</option><option>Поддержка</option><option>Бухгалтерия</option></select></div>
      </div>`
  }[kind] || '';

  openModal(`
    <div class="modal-head">
      <div class="modal-title">${title}</div>
      <div class="modal-sub">${sub}</div>
    </div>
    <div class="modal-body">${body}</div>
    <div class="modal-foot">
      <button class="btn" data-close>Отмена</button>
      <button class="btn btn-primary" id="modal-save">Создать</button>
    </div>
  `);

  $$('#modal [data-close]').forEach(b => b.addEventListener('click', closeModal));
  $('#modal-save').addEventListener('click', () => {
    closeModal();
    toast(kind === 'user' ? 'Приглашение отправлено' : 'Создано');
  });
}

/* ============================ ROUTER ============================ */

const views = {
  dashboard: { title: 'Дашборд', render: renderDashboard },
  requests: { title: 'Заявки', render: renderRequests },
  clients: { title: 'Клиенты', render: renderClients },
  deals: { title: 'Сделки', render: renderDeals },
  tasks: { title: 'Задачи', render: renderTasks },
  reports: { title: 'Отчёты', render: renderReports },
  team: { title: 'Сотрудники', render: renderTeam },
  settings: { title: 'Настройки', render: renderSettings }
};

function currentView() {
  const h = location.hash.replace(/^#\/?/, '');
  return views[h] ? h : 'dashboard';
}

function render() {
  const v = currentView();
  views[v].render();
  $$('#nav .nav-item').forEach(a => a.classList.toggle('active', a.dataset.view === v));
  $('#crumb-current').textContent = views[v].title;
}

function navigate(v) {
  if (currentView() === v) { render(); return; }
  location.hash = '#/' + v;
}

window.addEventListener('hashchange', render);

/* ============================ INIT ============================ */

$$('#nav .nav-item').forEach(a => a.addEventListener('click', () => navigate(a.dataset.view)));

$('#drawer-overlay').addEventListener('click', closeDrawer);
$('#modal-overlay').addEventListener('click', e => { if (e.target.id === 'modal-overlay') closeModal(); });

$('#btn-create').addEventListener('click', () => openCreateModal('request'));

$('#global-search').addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const q = e.target.value.trim();
  if (!q) return;
  ui.clientQuery = q;
  ui.requestQuery = q;
  navigate('clients');
  toast('Поиск: ' + q);
});

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    $('#global-search').focus();
  }
  if (e.key === 'Escape') { closeDrawer(); closeModal(); }
});

if (!location.hash) location.hash = '#/dashboard';
render();