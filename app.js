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
    pain_ja: "「毎日夕ご飯の献立を考えるのが苦痛です…みんなどうやってご飯決めてるの？」",
    pain_en: "\"Deciding what to cook every night is painful... how does everyone decide?\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11274175661",
    device: "mobile",
    url: "https://kaleidofuture-kf-meal-rescue.hf.space",
    libs: "recipe-scrapers, ingredient-parser",
  },
  {
    id: "fridge-watch",
    icon: "🧊",
    name_ja: "冷蔵庫番",
    name_en: "FridgeWatch",
    pain_ja: "「食材を腐らせてしまったり、うまくやりくりができません。何からやっていけば...」",
    pain_en: "\"I keep letting food go bad and can't manage it well. Where should I even start...\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q10127772425",
    device: "mobile",
    url: "https://kaleidofuture-kf-fridge-watch.hf.space",
    libs: "Pendulum, Humanize",
  },
  {
    id: "med-reminder",
    icon: "💊",
    name_ja: "おくすりリマインダー",
    name_en: "MedReminder",
    pain_ja: "「薬を飲むのを忘れるのではなく、飲んだかどうか忘れるので困っています」",
    pain_en: "\"I don't forget to take meds — I forget whether I already took them\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12261267597",
    device: "mobile",
    url: "https://kf-med-reminder.vercel.app",
    libs: "PWA, Web Notifications",
  },
  {
    id: "memory-cards",
    icon: "🧠",
    name_ja: "暗記カード",
    name_en: "MemoryCards",
    pain_ja: "「社会人になってから勉強をしなかったため、なかなか覚えることができません」",
    pain_en: "\"Haven't studied since becoming a working adult — I just can't retain anything\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11321346016",
    device: "mobile",
    url: "https://kf-memory-cards.vercel.app",
    libs: "FSRS (SM-2)",
  },
  {
    id: "water-wise",
    icon: "🌱",
    name_ja: "水やり判定",
    name_en: "WaterWise",
    pain_ja: "「朝は8時、夕方は4時にあげてますが、何となく枯れてきてる気がします」",
    pain_en: "\"I water at 8am and 4pm but it still seems to be wilting...\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13284335253",
    device: "mobile",
    url: "https://kaleidofuture-kf-water-wise.hf.space",
    libs: "FAO Penman-Monteith, Astral, Open-Meteo",
  },
  {
    id: "pitch-checker",
    icon: "🎵",
    name_ja: "音程チェッカー",
    name_en: "PitchChecker",
    pain_ja: "「音程の『高い』『低い』が分かりません。吹奏楽をやっています」",
    pain_en: "\"I can't tell if my pitch is sharp or flat. I play in a wind ensemble\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1272091082",
    device: "mobile",
    url: "https://kf-pitch-checker.vercel.app",
    libs: "Web Audio API, Autocorrelation",
  },
  {
    id: "pdf-liberator",
    icon: "📄",
    name_ja: "PDF解放",
    name_en: "PDFLiberator",
    pain_ja: "「PDFの表をそのままコピペすることはできませんか？文字はできるのですが...」",
    pain_en: "\"Can't I just copy-paste a table from a PDF? Text works but tables don't...\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14262510584",
    device: "desktop",
    url: "https://kaleidofuture-kf-pdf-liberator.hf.space",
    libs: "pdfplumber, openpyxl",
  },
  {
    id: "quick-budget",
    icon: "💰",
    name_ja: "ざっくり家計簿",
    name_en: "QuickBudget",
    pain_ja: "「家計簿をつけようとしてもいつも続かないです…レシートも溜まる一方で」",
    pain_en: "\"I try to keep a budget but can never stick with it... receipts just pile up\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13304202823",
    device: "desktop",
    url: "https://kaleidofuture-kf-quick-budget.hf.space",
    libs: "DuckDB, pandas",
  },
  {
    id: "csv-query",
    icon: "🔍",
    name_ja: "CSV集計",
    name_en: "CSVQuery",
    pain_ja: "「Excelできる人が辞めてしまったので手作業で…」自動化→否定→退職の無限ループ",
    pain_en: "\"Our Excel person quit so we're back to manual work...\" — the infinite loop",
    pain_source: "Togetter",
    pain_url: "https://togetter.com/li/1194490",
    device: "desktop",
    url: "https://kaleidofuture-kf-csv-query.hf.space",
    libs: "DuckDB, pandas",
  },
  {
    id: "report-factory",
    icon: "📊",
    name_ja: "レポート工場",
    name_en: "ReportFactory",
    pain_ja: "「業務日報の数が多すぎて辞めたい。毎日計40分くらい日報を書いている」",
    pain_en: "\"Too many daily reports — I want to quit. I spend 40 minutes writing reports every day\"",
    pain_source: "はてな匿名ダイアリー",
    pain_url: "https://anond.hatelabo.jp/20220509191525",
    device: "desktop",
    url: "https://kaleidofuture-kf-report-factory.hf.space",
    libs: "Jinja2, fpdf2",
  },
  {
    id: "freelance-books",
    icon: "📒",
    name_ja: "フリーランス経理",
    name_en: "FreelanceBooks",
    pain_ja: "「フリーランスの絵描きで帳簿を作ってるのですが、テンプレートを紙で印刷して手書きで書いている」",
    pain_en: "\"I'm a freelance illustrator doing bookkeeping by hand on printed templates\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12247869422",
    device: "desktop",
    url: "https://kaleidofuture-kf-freelance-books.hf.space",
    libs: "pandas",
  },
  {
    id: "stock-watch",
    icon: "📦",
    name_ja: "在庫ウォッチ",
    name_en: "StockWatch",
    pain_ja: "「飲食店経営者です。棚卸、在庫管理、原価計算ができるソフトを探しています」",
    pain_en: "\"I run a restaurant. Looking for software that can handle inventory and cost calculation\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11138730431",
    device: "desktop",
    url: "https://kaleidofuture-kf-stock-watch.hf.space",
    libs: "DuckDB, pandas",
  },
  {
    id: "photo-sorter",
    icon: "📸",
    name_ja: "写真仕分け",
    name_en: "PhotoSorter",
    pain_ja: "「iPhoneの写真整理どのようにしたらいいかアドバイスください。ずっと写真が溜まる一方で...」",
    pain_en: "\"Any advice on organizing iPhone photos? They just keep piling up...\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12312100277",
    device: "desktop",
    url: "https://kaleidofuture-kf-photo-sorter.hf.space",
    libs: "ExifRead, Pillow, pillow-heif",
  },
  {
    id: "oshi-digest",
    icon: "⭐",
    name_ja: "推しダイジェスト",
    name_en: "OshiDigest",
    pain_ja: "「推し活疲れ」7割経験 — 出費・追う情報の多さに息切れ",
    pain_en: "70% experience 'fan fatigue' — overwhelmed by spending and information overload",
    pain_source: "日本経済新聞",
    pain_url: "https://www.nikkei.com/article/DGXZQOUC05DCU0V00C23A4000000/",
    device: "both",
    url: "https://kaleidofuture-kf-oshi-digest.hf.space",
    libs: "feedparser, trafilatura",
  },
  {
    id: "care-log",
    icon: "📋",
    name_ja: "介護ログ",
    name_en: "CareLog",
    pain_ja: "「介護の現場で働いています。手書きの記録からパソコンでの記録へ移行したい」",
    pain_en: "\"I work in eldercare. Want to switch from handwritten records to digital\"",
    pain_source: "Yahoo!知恵袋",
    pain_url: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14325608769",
    device: "both",
    url: "https://kaleidofuture-kf-care-log.hf.space",
    libs: "fpdf2, Jinja2",
  },
  {
    id: "test-maker",
    icon: "📝",
    name_ja: "テストメーカー",
    name_en: "TestMaker",
    pain_ja: "「15時から22時まで7時間かけてテストを作成した」— テスト作りが教員最大の負担",
    pain_en: "\"Spent 7 hours creating a test, from 3pm to 10pm\" — a teacher's biggest burden",
    pain_source: "note",
    pain_url: "https://note.com/happyaya/n/n8766d65f4a22",
    device: "both",
    url: "https://kaleidofuture-kf-test-maker.hf.space",
    libs: "textstat, fpdf2",
  },
  {
    id: "run-dash",
    icon: "🏃",
    name_ja: "ランダッシュ",
    name_en: "RunDash",
    pain_ja: "「Garminのデータをもっと詳しく分析したい」— 標準アプリでは物足りないランナーたち",
    pain_en: "\"I want to analyze my Garmin data more deeply\" — runners who outgrew standard apps",
    pain_source: "note",
    pain_url: "https://note.com/tak_1783/n/n02e99c588b61",
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
      const source = app.pain_source || "";
      const sourceUrl = app.pain_url || "";
      const badge = getBadgeText(app.device, lang);

      const sourceHtml = source
        ? sourceUrl
          ? `<span class="app-card__source" onclick="event.preventDefault();event.stopPropagation();window.open('${sourceUrl}','_blank')">— ${source} ↗</span>`
          : `<span class="app-card__source">— ${source}</span>`
        : "";

      return `<a href="${app.url}" target="_blank" rel="noopener"
        class="app-card" data-device="${app.device}">
        <p class="app-card__pain">${pain}${sourceHtml}</p>
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
