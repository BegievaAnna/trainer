/* ============================================================
   Тренажёр для 1–4 класса · Санкт-Петербург
   ============================================================ */

const scenarios = {
  fire: {
    title: "Пожар в квартире",
    icon: "🔥",
    description: "Что делать, если дома начался пожар?",
    steps: [
      {
        emoji: "🏠💨",
        text: "Ты дома в Санкт-Петербурге. Вдруг чувствуешь запах дыма из кухни.",
        question: "Что делать первым делом?",
        options: [
          { label: "Позвать взрослых и выйти из квартиры", isCorrect: true,
            explanation: "Правильно! Сразу зови взрослых и вместе с ними выходи на улицу. Телефон пожарных — 101 или 112." },
          { label: "Спрятаться под кровать", isCorrect: false,
            explanation: "Опасно! Под кроватью тебя не найдут, а дым становится всё сильнее. Лучше выйти на улицу." },
          { label: "Открыть окно и кричать", isCorrect: false,
            explanation: "Нельзя! Открытое окно впускает воздух, и огонь становится сильнее." }
        ]
      },
      {
        emoji: "🚪🚶",
        text: "Ты идёшь по задымлённому коридору к выходу.",
        question: "Как правильно двигаться?",
        options: [
          { label: "Пригнувшись и закрыв нос мокрой тряпкой", isCorrect: true,
            explanation: "Молодец! Дым поднимается вверх, а внизу дышать легче. Мокрая тряпка задержит дым." },
          { label: "Бежать прямо, закрыв глаза", isCorrect: false,
            explanation: "Нельзя бежать! В дыму ничего не видно, можно упасть. Двигайся спокойно и низко." }
        ]
      },
      {
        emoji: "🚒🛑",
        text: "Ты вышел на улицу. Во дворе стоит пожарная машина.",
        question: "Что делать дальше?",
        options: [
          { label: "Стоять на безопасном месте и слушать пожарных", isCorrect: true,
            explanation: "Всё верно! Пожарные знают, что делать. Не мешай им и не подходи близко к дому." },
          { label: "Вернуться в дом за игрушкой", isCorrect: false, fatal: true,
            explanation: "Ни в коем случае! В горящий дом нельзя возвращаться ни за чем. Это очень опасно!" }
        ]
      }
    ]
  },

  stranger: {
    title: "Опасный незнакомец",
    icon: "🚸",
    description: "Как вести себя с незнакомым человеком на улице?",
    steps: [
      {
        emoji: "🏙️👤",
        text: "Ты идёшь из школы домой по улице Санкт-Петербурга. К тебе подходит незнакомый взрослый.",
        question: "Что делать?",
        options: [
          { label: "Отойти в сторону и не разговаривать", isCorrect: true,
            explanation: "Правильно! С незнакомцами не разговариваем. Отойди туда, где есть другие люди." },
          { label: "Вежливо ответить на все вопросы", isCorrect: false,
            explanation: "Нельзя! Даже если человек кажется добрым — не разговаривай с незнакомцем без родителей." }
        ]
      },
      {
        emoji: "🎁🚫",
        text: "Незнакомец говорит: «У меня в машине есть конфеты, пойдём со мной».",
        question: "Что ответить?",
        options: [
          { label: "Сказать «Нет!» и убежать к людям", isCorrect: true,
            explanation: "Молодец! Нельзя никуда идти с незнакомцем, даже за конфеты или котёнка." },
          { label: "Спросить, какие конфеты", isCorrect: false,
            explanation: "Опасно! Нельзя даже разговаривать. Сразу уходи к другим людям." }
        ]
      },
      {
        emoji: "📞🆘",
        text: "Ты убежал. Незнакомец уехал. Что делать?",
        question: "Кому рассказать?",
        options: [
          { label: "Родителям или учителю — сразу", isCorrect: true,
            explanation: "Верно! Взрослые должны знать. Позвони родителям или расскажи в школе." },
          { label: "Никому не говорить", isCorrect: false,
            explanation: "Нельзя молчать! Взрослые помогут и защитят." }
        ]
      }
    ]
  },

  ice: {
    title: "Тонкий лёд на Неве",
    icon: "❄️",
    description: "Весной лёд на реках Санкт-Петербурга очень опасен!",
    steps: [
      {
        emoji: "🌊",
        text: "Ты гуляешь у реки Невы весной. Лёд уже подтаял.",
        question: "Можно ли выходить на лёд?",
        options: [
          { label: "Нет, ни в коем случае", isCorrect: true,
            explanation: "Правильно! Весной лёд тонкий и может треснуть. Выходить на лёд нельзя!" },
          { label: "Да, если лёд кажется толстым", isCorrect: false,
            explanation: "Нельзя! Весной лёд обманчивый. Сверху кажется крепким, а внутри уже рыхлый." }
        ]
      },
      {
        emoji: "🆘",
        text: "Ты видишь, что другой ребёнок провалился под лёд.",
        question: "Что делать?",
        options: [
          { label: "Звать взрослых и звонить 112", isCorrect: true,
            explanation: "Молодец! Самому нельзя бежать на лёд. Зови взрослых и звони 112." },
          { label: "Бежать к нему по льду", isCorrect: false, fatal: true,
            explanation: "Опасно! Лёд может треснуть и под тобой. Зови взрослых — они помогут правильно." }
        ]
      }
    ]
  },

  metro: {
    title: "Безопасность в метро",
    icon: "🚇",
    description: "Петербургское метро — самое глубокое в мире. Как вести себя?",
    steps: [
      {
        emoji: "🚇👨‍👩‍👧",
        text: "Ты с родителями в метро Санкт-Петербурга. Народу очень много.",
        question: "Что делать, чтобы не потеряться?",
        options: [
          { label: "Держать маму или папу за руку", isCorrect: true,
            explanation: "Правильно! В толпе легко потеряться, поэтому держи родителей за руку." },
          { label: "Бежать вперёд к поезду", isCorrect: false,
            explanation: "Нельзя! В толпе можно упасть или потеряться. Стой рядом с родителями." }
        ]
      },
      {
        emoji: "⚠️",
        text: "Ты потерялся на станции метро. Что делать?",
        question: "К кому обратиться?",
        options: [
          { label: "К полицейскому или работнику метро", isCorrect: true,
            explanation: "Верно! Люди в форме помогут найти родителей. Ещё можно сказать по громкой связи." },
          { label: "Стоять и плакать", isCorrect: false,
            explanation: "Не плачь! Лучше обратись к взрослым в форме — они обязательно помогут." }
        ]
      }
    ]
  },

  ice2: {
    title: "Гололёд зимой",
    icon: "⛸",
    description: "В Санкт-Петербурге зимой часто бывает скользко!",
    steps: [
      {
        emoji: "🚶",
        text: "Зима. Утром на тротуаре очень скользко — гололёд.",
        question: "Как идти, чтобы не упасть?",
        options: [
          { label: "Медленно, маленькими шагами, не держа руки в карманах", isCorrect: true,
            explanation: "Молодец! Маленькие шаги помогают не поскользнуться. Руки свободны — можно удержать равновесие." },
          { label: "Быстро бежать, чтобы скорее добраться", isCorrect: false,
            explanation: "Опасно! На льду нельзя бежать — можно упасть и удариться." }
        ]
      },
      {
        emoji: "🌬",
        text: "На улице сильный мороз и ветер.",
        question: "Как одеться?",
        options: [
          { label: "Тепло: шапка, шарф, варежки, тёплые сапоги", isCorrect: true,
            explanation: "Правильно! В Петербурге зимой холодно и ветрено. Одевайся тепло, чтобы не замёрзнуть." },
          { label: "Без шапки, чтобы не портить причёску", isCorrect: false,
            explanation: "Нельзя! Без шапки можно замёрзнуть и заболеть." }
        ]
      }
    ]
  },

  water: {
    title: "Купание в Финском заливе",
    icon: "🏖️",
    description: "Летом в Финском заливе купаться можно не везде!",
    steps: [
      {
        emoji: "🌊🏖️",
        text: "Лето. Ты на пляже Финского залива с родителями.",
        question: "Где можно купаться?",
        options: [
          { label: "Только там, где разрешили взрослые и есть спасатели", isCorrect: true,
            explanation: "Верно! Купайся только в разрешённых местах и всегда рядом со взрослыми." },
          { label: "В любом месте, где хочется", isCorrect: false,
            explanation: "Опасно! В некоторых местах глубоко, сильное течение или острые камни." }
        ]
      },
      {
        emoji: "🆘🏊",
        text: "Ты видишь, что кто-то тонет.",
        question: "Что делать?",
        options: [
          { label: "Громко звать взрослых и спасателей", isCorrect: true,
            explanation: "Молодец! Самому прыгать в воду нельзя. Зови взрослых — они помогут." },
          { label: "Самому прыгнуть спасать", isCorrect: false, fatal: true,
            explanation: "Опасно! Тонущий может утянуть тебя под воду. Зови взрослых и спасателей!" }
        ]
      }
    ]
  }
};

let currentScenarioId = null;
let currentStepIndex = 0;
let userChoices = [];
let mistakesCount = 0;

const HISTORY_KEY = 'spbKidsTrainerHistory';
const THEME_KEY = 'spbKidsTrainerTheme';

const screens = {
  home: document.getElementById('screen-home'),
  scenario: document.getElementById('screen-scenario'),
  result: document.getElementById('screen-result'),
  history: document.getElementById('screen-history')
};
const scenarioGrid = document.getElementById('scenarioGrid');
const scenarioTitle = document.getElementById('scenarioTitle');
const scenarioEmoji = document.getElementById('scenarioEmoji');
const stepCounter = document.getElementById('stepCounter');
const progressFill = document.getElementById('progressFill');
const stepEmoji = document.getElementById('stepEmoji');
const stepText = document.getElementById('stepText');
const stepQuestion = document.getElementById('stepQuestion');
const optionsContainer = document.getElementById('optionsContainer');
const explanationBox = document.getElementById('explanationBox');
const explanationEmoji = document.getElementById('explanationEmoji');
const explanationText = document.getElementById('explanationText');
const btnNextStep = document.getElementById('btnNextStep');
const resultSummary = document.getElementById('resultSummary');
const historyList = document.getElementById('historyList');
const btnTheme = document.getElementById('btnTheme');

/* ============================================================
   Переключение экранов
   ============================================================ */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  if (screens[name]) screens[name].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   Тёмная тема
   ============================================================ */
function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark', isDark);
  if (btnTheme) {
    const icon = btnTheme.querySelector('.theme-icon');
    const label = btnTheme.querySelector('.theme-label');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    if (label) label.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
  }
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
}

/* ============================================================
   Главный экран
   ============================================================ */
function renderHome() {
  scenarioGrid.innerHTML = '';
  Object.entries(scenarios).forEach(([id, scenario]) => {
    const card = document.createElement('div');
    card.className = 'scenario-card';

    const icon = document.createElement('span');
    icon.className = 'scenario-icon';
    icon.textContent = scenario.icon || '📋';

    const title = document.createElement('h3');
    title.textContent = scenario.title;

    const desc = document.createElement('p');
    desc.textContent = scenario.description;

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(desc);
    card.addEventListener('click', () => startScenario(id));
    scenarioGrid.appendChild(card);
  });
  showScreen('home');
}

/* ============================================================
   Запуск сценария
   ============================================================ */
function startScenario(id) {
  if (!scenarios[id]) { alert('Сценарий не найден.'); return; }
  currentScenarioId = id;
  currentStepIndex = 0;
  userChoices = [];
  mistakesCount = 0;
  const s = scenarios[id];
  scenarioTitle.textContent = s.title;
  scenarioEmoji.textContent = s.icon || '📋';
  showScreen('scenario');
  renderStep();
}

/* ============================================================
   Отрисовка шага
   ============================================================ */
function renderStep() {
  const scenario = scenarios[currentScenarioId];
  const step = scenario.steps[currentStepIndex];
  if (!step) { finishScenario(false); return; }

  stepCounter.textContent = `Шаг ${currentStepIndex + 1} из ${scenario.steps.length}`;
  progressFill.style.width = `${(currentStepIndex / scenario.steps.length) * 100}%`;

  stepEmoji.textContent = step.emoji || '❓';
  stepText.textContent = step.text;
  stepQuestion.textContent = step.question;

  optionsContainer.innerHTML = '';
  explanationBox.classList.add('hidden');
  btnNextStep.textContent = 'Дальше →';

  step.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option.label;
    btn.addEventListener('click', () => handleChoice(index));
    optionsContainer.appendChild(btn);
  });
}

/* ============================================================
   Обработка выбора
   ============================================================ */
function handleChoice(optionIndex) {
  const scenario = scenarios[currentScenarioId];
  const step = scenario.steps[currentStepIndex];
  const option = step.options[optionIndex];
  if (!option) return;

  optionsContainer.querySelectorAll('.option-btn').forEach(b => b.disabled = true);

  userChoices.push({
    step: currentStepIndex + 1,
    question: step.question,
    choice: option.label,
    isCorrect: option.isCorrect,
    isFatal: !!option.fatal,
    explanation: option.explanation
  });

  if (!option.isCorrect) mistakesCount++;

  explanationEmoji.textContent = option.isCorrect ? '✅' : (option.fatal ? '⚠️' : '❌');
  explanationText.textContent = option.explanation;
  explanationBox.classList.remove('hidden');

  if (option.fatal) {
    btnNextStep.textContent = 'Понятно';
    btnNextStep.onclick = () => {
      progressFill.style.width = '100%';
      finishScenario(true);
    };
    return;
  }

  if (currentStepIndex === scenario.steps.length - 1) {
    btnNextStep.textContent = 'Показать результат';
    btnNextStep.onclick = () => {
      progressFill.style.width = '100%';
      finishScenario(false);
    };
  } else {
    btnNextStep.textContent = 'Дальше →';
    btnNextStep.onclick = () => {
      currentStepIndex++;
      renderStep();
    };
  }
}

/* ============================================================
   Завершение и сохранение
   ============================================================ */
function finishScenario(isFatal) {
  const scenario = scenarios[currentScenarioId];
  const record = {
    scenarioId: currentScenarioId,
    scenarioTitle: scenario.title,
    date: new Date().toISOString(),
    totalSteps: scenario.steps.length,
    completedSteps: userChoices.length,
    mistakes: mistakesCount,
    isFatal: !!isFatal,
    choices: userChoices.slice()
  };

  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    let history = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(history)) history = [];
    history.push(record);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (e) {
    console.warn('Не удалось сохранить историю:', e);
  }

  renderResult(record);
  showScreen('result');
}

/* ============================================================
   Экран результата
   ============================================================ */
function renderResult(record) {
  let statusClass, statusIcon, statusText;
  if (record.isFatal) {
    statusClass = 'fatal';
    statusIcon = '⚠️';
    statusText = 'Сценарий остановлен: выбрано опасное действие';
  } else if (record.mistakes === 0) {
    statusClass = 'success';
    statusIcon = '🏆';
    statusText = 'Молодец! Все ответы верные!';
  } else {
    statusClass = 'warning';
    statusIcon = '👍';
    statusText = `Готово! Ошибок: ${record.mistakes}. Попробуй ещё раз!`;
  }

  resultSummary.innerHTML = '';

  const statusEl = document.createElement('div');
  statusEl.className = `result-status ${statusClass}`;
  statusEl.textContent = `${statusIcon} ${statusText}`;
  resultSummary.appendChild(statusEl);

  const titleEl = document.createElement('p');
  titleEl.className = 'result-scenario-title';
  titleEl.textContent = record.scenarioTitle;
  resultSummary.appendChild(titleEl);

  const hintEl = document.createElement('p');
  hintEl.className = 'result-hint';
  hintEl.textContent = `Пройдено шагов: ${record.completedSteps} из ${record.totalSteps}.`;
  resultSummary.appendChild(hintEl);

  const ul = document.createElement('ul');
  ul.className = 'result-choices';

  record.choices.forEach(c => {
    const li = document.createElement('li');

    const header = document.createElement('div');
    header.className = 'result-choice-header';

    const stepStrong = document.createElement('strong');
    stepStrong.textContent = `Шаг ${c.step}:`;
    header.appendChild(stepStrong);
    header.appendChild(document.createTextNode(' '));

    const statusSpan = document.createElement('span');
    statusSpan.className = c.isCorrect ? 'correct' : 'mistake';
    statusSpan.textContent = c.isCorrect ? 'верно' : 'ошибка';
    header.appendChild(statusSpan);

    if (c.isFatal) {
      header.appendChild(document.createTextNode(' '));
      const badge = document.createElement('span');
      badge.className = 'badge-fatal';
      badge.textContent = 'опасно!';
      header.appendChild(badge);
    }

    const choiceText = document.createElement('div');
    choiceText.className = 'result-choice-text';
    choiceText.textContent = c.choice;

    const explanation = document.createElement('div');
    explanation.className = 'result-choice-explanation';
    explanation.textContent = c.explanation;

    li.appendChild(header);
    li.appendChild(choiceText);
    li.appendChild(explanation);
    ul.appendChild(li);
  });

  resultSummary.appendChild(ul);
}

/* ============================================================
   История
   ============================================================ */
function renderHistory() {
  let history = [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    history = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(history)) history = [];
  } catch (e) { history = []; }

  historyList.innerHTML = '';

  if (history.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'Пока пусто. Пройди любой сценарий — и он появится здесь!';
    p.style.textAlign = 'center';
    p.style.fontWeight = '700';
    historyList.appendChild(p);
  } else {
    history.slice().reverse().forEach(record => {
      const item = document.createElement('div');
      item.className = 'history-item';

      const dateEl = document.createElement('div');
      dateEl.className = 'date';
      dateEl.textContent = new Date(record.date).toLocaleString('ru-RU');

      const titleEl = document.createElement('div');
      titleEl.className = 'title';
      titleEl.textContent = record.scenarioTitle || 'Без названия';

      const resultEl = document.createElement('div');
      resultEl.className = 'result-line';

      if (record.isFatal) {
        const span = document.createElement('span');
        span.className = 'mistake';
        span.textContent = `Остановлено на шаге ${record.completedSteps}`;
        resultEl.appendChild(span);
      } else if (record.mistakes === 0) {
        const span = document.createElement('span');
        span.className = 'correct';
        span.textContent = 'Без ошибок 🏆';
        resultEl.appendChild(span);
      } else {
        resultEl.appendChild(document.createTextNode('Ошибок: '));
        const span = document.createElement('span');
        span.className = 'mistake';
        span.textContent = record.mistakes;
        resultEl.appendChild(span);
      }

      item.appendChild(dateEl);
      item.appendChild(titleEl);
      item.appendChild(resultEl);
      historyList.appendChild(item);
    });
  }
  showScreen('history');
}

/* ============================================================
   Инициализация
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  if (btnTheme) btnTheme.addEventListener('click', toggleTheme);

  renderHome();

  document.getElementById('btnShowHistory').addEventListener('click', renderHistory);
  document.getElementById('btnHistoryHome').addEventListener('click', renderHome);
  document.getElementById('btnBackHome').addEventListener('click', renderHome);
  document.getElementById('btnResultHome').addEventListener('click', renderHome);
});