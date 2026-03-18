/* ========================================
   17 Apps Experiment — Portal Logic
   ======================================== */

// ── i18n Data ──

const I18N = {
  ja: {
    title: "17 Apps Experiment",
    subtitle: "AI駆動開発で17個のアプリを2時間で構築。既存ライブラリの力を証明する実験プロジェクト。",
    stat_apps: "アプリ",
    stat_time: "構築時間",
    stat_cost: "月額コスト",
    stat_ai_models: "AIモデル使用数",
    filter_all: "すべて",
    filter_mobile: "📱 スマホで使える",
    filter_desktop: "💻 PCで使う",
    research_title: "研究背景",
    research_desc: "「AIを活用したアプリ」と聞くと、多くの人は「アプリの中でAIモデルが動いている」と想像します。しかし実際には、AI駆動開発 — AIとともにアプリを作る — という形が主流です。このプロジェクトは、AIモデルを一切内蔵せず、AI以前から存在していた既存ライブラリだけで、日常の切実な悩みを解決するアプリが作れることを実証する実験です。",
    link_github: "GitHub で見る →",
    footer_text: " — Built with AI-driven development, powered by existing libraries",
    cta: "使ってみる →",
    badge_mobile: "📱 スマホ",
    badge_desktop: "💻 PC",
    badge_both: "📱💻 両対応",
  },
  en: {
    title: "17 Apps Experiment",
    subtitle: "17 apps built in 2 hours with AI-driven development. Proving the power of existing libraries.",
    stat_apps: "Apps",
    stat_time: "Build time",
    stat_cost: "Monthly cost",
    stat_ai_models: "AI models used",
    filter_all: "All",
    filter_mobile: "📱 Mobile-friendly",
    filter_desktop: "💻 Desktop",
    research_title: "Research Background",
    research_desc: "When people hear \"AI-powered app,\" they imagine an AI model running inside the app. In reality, AI-driven development — building apps with AI — is the dominant paradigm. This project proves that everyday problems can be solved with pre-existing libraries alone, with zero AI models embedded.",
    link_github: "View on GitHub →",
    footer_text: " — Built with AI-driven development, powered by existing libraries",
    cta: "Try it →",
    badge_mobile: "📱 Mobile",
    badge_desktop: "💻 Desktop",
    badge_both: "📱💻 Both",
  },
};

// ── App Data ──

const APPS = [
  {
    id: "meal-rescue",
    icon: "🍳",
    name_ja: "献立レスキュー",
    name_en: "MealRescue",
    pain_ja: "毎日の献立決めがしんどい",
    pain_en: "Daily meal planning is exhausting",
    device: "mobile",
    url: "https://kaleidofuture-kf-meal-rescue.hf.space",
    libs: "recipe-scrapers, ingredient-parser",
  },
  {
    id: "fridge-watch",
    icon: "🧊",
    name_ja: "冷蔵庫番",
    name_en: "FridgeWatch",
    pain_ja: "食材を腐らせてしまう",
    pain_en: "Food goes bad before I use it",
    device: "mobile",
    url: "https://kaleidofuture-kf-fridge-watch.hf.space",
    libs: "Pendulum, Humanize",
  },
  {
    id: "med-reminder",
    icon: "💊",
    name_ja: "おくすりリマインダー",
    name_en: "MedReminder",
    pain_ja: "親の薬管理が怖い",
    pain_en: "Managing elderly parent's medication is scary",
    device: "mobile",
    url: "https://kf-med-reminder.vercel.app",
    libs: "PWA, Web Notifications",
  },
  {
    id: "memory-cards",
    icon: "🧠",
    name_ja: "暗記カード",
    name_en: "MemoryCards",
    pain_ja: "暗記が覚えられない",
    pain_en: "Can't memorize things effectively",
    device: "mobile",
    url: "https://kf-memory-cards.vercel.app",
    libs: "FSRS (SM-2)",
  },
  {
    id: "water-wise",
    icon: "🌱",
    name_ja: "水やり判定",
    name_en: "WaterWise",
    pain_ja: "水やりのタイミングが分からない",
    pain_en: "Don't know when to water plants",
    device: "mobile",
    url: "https://kaleidofuture-kf-water-wise.hf.space",
    libs: "FAO Penman-Monteith, Astral, Open-Meteo",
  },
  {
    id: "pitch-checker",
    icon: "🎵",
    name_ja: "音程チェッカー",
    name_en: "PitchChecker",
    pain_ja: "楽器練習の上達が分からない",
    pain_en: "Can't tell if my playing is improving",
    device: "mobile",
    url: "https://kf-pitch-checker.vercel.app",
    libs: "Web Audio API, Autocorrelation",
  },
  {
    id: "pdf-liberator",
    icon: "📄",
    name_ja: "PDF解放",
    name_en: "PDFLiberator",
    pain_ja: "PDFの表をExcelに手打ちしている",
    pain_en: "Manually retyping PDF tables into Excel",
    device: "desktop",
    url: "https://kaleidofuture-kf-pdf-liberator.hf.space",
    libs: "pdfplumber, openpyxl",
  },
  {
    id: "quick-budget",
    icon: "💰",
    name_ja: "ざっくり家計簿",
    name_en: "QuickBudget",
    pain_ja: "家計簿が続かない",
    pain_en: "Can't keep up with budgeting",
    device: "desktop",
    url: "https://kaleidofuture-kf-quick-budget.hf.space",
    libs: "DuckDB, pandas",
  },
  {
    id: "csv-query",
    icon: "🔍",
    name_ja: "CSV集計",
    name_en: "CSVQuery",
    pain_ja: "Excelマクロが壊れて誰も直せない",
    pain_en: "Excel macros broke and nobody can fix them",
    device: "desktop",
    url: "https://kaleidofuture-kf-csv-query.hf.space",
    libs: "DuckDB, pandas",
  },
  {
    id: "report-factory",
    icon: "📊",
    name_ja: "レポート工場",
    name_en: "ReportFactory",
    pain_ja: "毎週同じ報告書を手作業で作っている",
    pain_en: "Creating the same report manually every week",
    device: "desktop",
    url: "https://kaleidofuture-kf-report-factory.hf.space",
    libs: "Jinja2, fpdf2",
  },
  {
    id: "freelance-books",
    icon: "📒",
    name_ja: "フリーランス経理",
    name_en: "FreelanceBooks",
    pain_ja: "確定申告が毎年地獄",
    pain_en: "Tax filing is hell every year",
    device: "desktop",
    url: "https://kaleidofuture-kf-freelance-books.hf.space",
    libs: "pandas",
  },
  {
    id: "stock-watch",
    icon: "📦",
    name_ja: "在庫ウォッチ",
    name_en: "StockWatch",
    pain_ja: "飲食店の在庫管理が地獄",
    pain_en: "Restaurant inventory management is hell",
    device: "desktop",
    url: "https://kaleidofuture-kf-stock-watch.hf.space",
    libs: "DuckDB, pandas",
  },
  {
    id: "photo-sorter",
    icon: "📸",
    name_ja: "写真仕分け",
    name_en: "PhotoSorter",
    pain_ja: "写真が何万枚もあって整理できない",
    pain_en: "Tens of thousands of unsorted photos",
    device: "desktop",
    url: "https://kaleidofuture-kf-photo-sorter.hf.space",
    libs: "ExifRead, Pillow, pillow-heif",
  },
  {
    id: "oshi-digest",
    icon: "⭐",
    name_ja: "推しダイジェスト",
    name_en: "OshiDigest",
    pain_ja: "推し活の情報に追いつけない",
    pain_en: "Can't keep up with fandom news",
    device: "both",
    url: "https://kaleidofuture-kf-oshi-digest.hf.space",
    libs: "feedparser, trafilatura",
  },
  {
    id: "care-log",
    icon: "📋",
    name_ja: "介護ログ",
    name_en: "CareLog",
    pain_ja: "介護記録に勤務時間の40%を奪われる",
    pain_en: "Care documentation takes 40% of work time",
    device: "both",
    url: "https://kaleidofuture-kf-care-log.hf.space",
    libs: "fpdf2, Jinja2",
  },
  {
    id: "test-maker",
    icon: "📝",
    name_ja: "テストメーカー",
    name_en: "TestMaker",
    pain_ja: "テスト作成に30時間かかる",
    pain_en: "Test creation takes 30+ hours",
    device: "both",
    url: "https://kaleidofuture-kf-test-maker.hf.space",
    libs: "textstat, fpdf2",
  },
  {
    id: "run-dash",
    icon: "🏃",
    name_ja: "ランダッシュ",
    name_en: "RunDash",
    pain_ja: "Strava以上にデータを分析したい",
    pain_en: "Want deeper analysis than Strava offers",
    device: "both",
    url: "https://kaleidofuture-kf-run-dash.hf.space",
    libs: "fitparse, gpxpy, Folium",
  },
];

// ── State ──

let currentLang = "ja";
let currentFilter = "all";

// ── Device Detection ──

function isMobileDevice() {
  const ua = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const narrow = window.innerWidth < 768;
  return ua || narrow;
}

// ── Sort: mobile-first on mobile devices ──

function getSortedApps() {
  const apps = [...APPS];
  if (isMobileDevice()) {
    apps.sort((a, b) => {
      const order = { mobile: 0, both: 1, desktop: 2 };
      return (order[a.device] ?? 1) - (order[b.device] ?? 1);
    });
  }
  return apps;
}

// ── Badge helpers ──

function getBadgeText(device, lang) {
  const key = "badge_" + device;
  return I18N[lang][key] || device;
}

// ── Render Cards ──

function renderCards() {
  const grid = document.getElementById("apps-grid");
  const apps = getSortedApps();
  const lang = currentLang;
  const cta = I18N[lang].cta;

  grid.innerHTML = apps
    .map((app) => {
      const name = lang === "ja" ? app.name_ja : app.name_en;
      const pain = lang === "ja" ? app.pain_ja : app.pain_en;
      const badge = getBadgeText(app.device, lang);

      return `<a href="${app.url}" target="_blank" rel="noopener"
        class="app-card" data-device="${app.device}">
        <p class="app-card__pain">${pain}</p>
        <div class="app-card__main">
          <span class="app-card__icon">${app.icon}</span>
          <h3 class="app-card__name">${name}</h3>
        </div>
        <div class="app-card__footer">
          <span class="device-badge device-badge--${app.device}">${badge}</span>
          <span class="app-card__libs">${app.libs}</span>
        </div>
        <span class="app-card__cta">${cta}</span>
      </a>`;
    })
    .join("");

  applyFilter();
}

// ── Filter ──

function applyFilter() {
  const cards = document.querySelectorAll(".app-card");
  cards.forEach((card) => {
    const device = card.dataset.device;
    let show = false;

    if (currentFilter === "all") {
      show = true;
    } else if (currentFilter === "mobile") {
      show = device === "mobile" || device === "both";
    } else if (currentFilter === "desktop") {
      show = device === "desktop" || device === "both";
    }

    card.classList.toggle("hidden", !show);
  });
}

// ── i18n ──

function setLang(lang) {
  currentLang = lang;
  const texts = I18N[lang];

  // Update all static data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (texts[key] !== undefined) {
      el.textContent = texts[key];
    }
  });

  // Update lang select
  document.getElementById("lang-select").value = lang;

  // Re-render cards with new language
  renderCards();
}

// ── Filter Button Listeners ──

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFilter();
    });
  });
}

// ── Init ──

document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  renderCards();
});
