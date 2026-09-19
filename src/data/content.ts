export const brand = {
  name: "Ralu Markets",
  short: "Ralu",
  location: "Dar es Salaam, Tanzania",
  email: "hello@ralumarkets.com",
  hours: "Mon–Fri, 09:00–17:00 EAT",
  languages: ["English", "Kiswahili"],
  tagline: "Master the Markets. Build the Skill. Trade With Discipline.",
  support:
    "Practical forex education, market research and trading knowledge designed to help you understand the markets, manage risk and develop a disciplined trading approach.",
};

export const nav = [
  { href: "#/", label: "Home", id: "home" },
  { href: "#/academy", label: "Academy", id: "academy" },
  { href: "#/courses", label: "Courses", id: "courses" },
  { href: "#/insights", label: "Market Insights", id: "insights" },
  { href: "#/masterclasses", label: "Masterclasses", id: "masterclasses" },
  { href: "#/about", label: "About", id: "about" },
  { href: "#/resources", label: "Resources", id: "resources" },
  { href: "#/contact", label: "Contact", id: "contact" },
];

export const principles = [
  {
    kicker: "01",
    title: "Education",
    text: "Learn the fundamentals and advanced concepts behind financial markets — from how FX is priced to how professional desks think about risk.",
  },
  {
    kicker: "02",
    title: "Research",
    text: "Understand markets through structured analysis and evidence. We teach you how to read context, not how to chase a headline.",
  },
  {
    kicker: "03",
    title: "Discipline",
    text: "Build risk-management and trading habits designed for long-term learning. Process first. Outcomes second.",
  },
];

export const teach = [
  {
    title: "Forex Fundamentals",
    text: "Currency pairs, pip math, sessions, leverage mechanics and the market participants who actually move price.",
    tag: "Core",
  },
  {
    title: "Technical Analysis",
    text: "Charts as a language: candles, structure, trend, ranges and the difference between a tool and a superstition.",
    tag: "Charts",
  },
  {
    title: "Fundamental Analysis",
    text: "Rates, inflation, growth and policy. How macro narratives translate into FX and metals — without overconfidence.",
    tag: "Macro",
  },
  {
    title: "Market Structure",
    text: "Swing points, liquidity, imbalance and session behaviour. Seeing the auction, not just the pattern.",
    tag: "Structure",
  },
  {
    title: "Risk Management",
    text: "Position sizing, drawdown maths, correlation, and why survival is a skill. Risk is the curriculum, not a footnote.",
    tag: "Risk",
  },
  {
    title: "Trading Psychology",
    text: "Attention, bias, impulse and review. How to design habits that survive both winning and losing streaks.",
    tag: "Mindset",
  },
  {
    title: "Strategy Development",
    text: "From hypothesis to rules: defining edge, conditions, invalidation and a written playbook you can actually follow.",
    tag: "Process",
  },
  {
    title: "Backtesting",
    text: "Evidence over anecdotes. How to test ideas honestly, avoid curve-fit theatre, and keep a research journal.",
    tag: "Evidence",
  },
];

export type Course = {
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All levels";
  duration: string;
  modules: number;
  instructor: string;
  summary: string;
  audience: string;
  outcomes: string[];
  curriculum: { module: string; lessons: string[] }[];
};

export const courses: Course[] = [
  {
    slug: "forex-fundamentals",
    title: "Forex Fundamentals",
    level: "Beginner",
    duration: "6 weeks",
    modules: 12,
    instructor: "Roy",
    summary: "Beginner program for understanding the market — language, structure, costs and the habits that keep learners safe.",
    audience: "New learners and professionals who want a clean, institutional-style foundation before touching strategy.",
    outcomes: [
      "Read a quote, spread, swap and session map without confusion",
      "Explain how leverage amplifies both gains and losses",
      "Build a personal risk budget before any strategy work",
      "Keep a learning journal that separates process from P&L",
    ],
    curriculum: [
      {
        module: "The FX marketplace",
        lessons: ["What is actually being traded", "Spot, forwards and the retail interface", "Who the participants are"],
      },
      {
        module: "Pairs, pips and pricing",
        lessons: ["Major, minor and exotic pairs", "Pip and lot arithmetic", "Spreads, slippage and total cost"],
      },
      {
        module: "Sessions and liquidity",
        lessons: ["Sydney, Tokyo, London, New York", "Overlaps and typical behaviour", "Why ‘the market’ is not one mood"],
      },
      {
        module: "Leverage and margin",
        lessons: ["Not free money", "Margin calls in plain language", "Position size as a decision, not a default"],
      },
      {
        module: "Orders and execution",
        lessons: ["Market, limit, stop", "What fills really mean", "Journaling fills, not just ideas"],
      },
      {
        module: "A learner’s operating system",
        lessons: ["Risk budget", "Time budget", "The first 90 days without rushing"],
      },
    ],
  },
  {
    slug: "technical-analysis",
    title: "Technical Analysis",
    level: "Intermediate",
    duration: "8 weeks",
    modules: 16,
    instructor: "Roy",
    summary: "Learn charts, price action and market structure — with a bias toward evidence and against ornamental indicators.",
    audience: "Learners who know the basics and want a coherent chart framework rather than a pile of tools.",
    outcomes: [
      "Map trend, range and transition on multiple timeframes",
      "Describe structure without storytelling",
      "Use levels as context, not prophecy",
      "Build a repeatable markup routine",
    ],
    curriculum: [
      {
        module: "Charts as information",
        lessons: ["Timeframes and intent", "What a candle can and cannot say", "Noise versus information"],
      },
      {
        module: "Market structure",
        lessons: ["Swing mapping", "Breaks, retests and failed breaks", "Ranges and the auction"],
      },
      {
        module: "Price action",
        lessons: ["Location over pattern names", "Wicks, bodies and acceptance", "Session opens as events"],
      },
      {
        module: "Tools with humility",
        lessons: ["Moving averages as context", "Volume where it exists", "When not to add another overlay"],
      },
      {
        module: "A markup playbook",
        lessons: ["Higher-timeframe bias", "Intraday execution map", "Review screenshots honestly"],
      },
    ],
  },
  {
    slug: "advanced-trading",
    title: "Advanced Trading",
    level: "Advanced",
    duration: "10 weeks",
    modules: 14,
    instructor: "Roy",
    summary: "Advanced concepts, strategy development and risk management for learners ready to treat trading as a research craft.",
    audience: "Disciplined intermediates who can already size risk and want a serious process for building and testing ideas.",
    outcomes: [
      "Write a strategy as a testable hypothesis",
      "Design risk rules that survive a bad month",
      "Run a structured review cadence",
      "Know when an idea is not ready for live capital",
    ],
    curriculum: [
      {
        module: "From idea to hypothesis",
        lessons: ["Edge is a statement", "Conditions and invalidation", "Sample size honesty"],
      },
      {
        module: "Risk architecture",
        lessons: ["R-multiples", "Correlation and hidden concentration", "Drawdown protocols"],
      },
      {
        module: "Execution quality",
        lessons: ["Playbook states", "When to stand aside", "Costs as part of expectancy"],
      },
      {
        module: "Psychology as operations",
        lessons: ["Attention design", "Tilt protocols", "Identity versus process"],
      },
      {
        module: "The research loop",
        lessons: ["Journal taxonomy", "Weekly debriefs", "Retiring a strategy without drama"],
      },
    ],
  },
  {
    slug: "live-masterclasses",
    title: "Live Masterclasses",
    level: "All levels",
    duration: "Ongoing",
    modules: 8,
    instructor: "Roy",
    summary: "Interactive sessions with the market specialist — walkthroughs of structure, research notes and decision hygiene.",
    audience: "Learners who want live context, questions, and a slower look at how analysis is actually built.",
    outcomes: [
      "Watch a research note constructed in real time",
      "Ask process questions, not ‘what should I buy’",
      "Compare your markup with a structured method",
      "Leave with a checklist, not a signal",
    ],
    curriculum: [
      {
        module: "How a session is run",
        lessons: ["Pre-read", "Live walkthrough", "Q&A and after-notes"],
      },
      {
        module: "Recurring themes",
        lessons: ["Session behaviour", "Event risk", "Risk case studies", "Psychology labs"],
      },
    ],
  },
];

export const insights = [
  {
    slug: "eur-usd",
    pair: "EUR/USD",
    name: "Euro / US Dollar",
    theme: "Rate differentials & growth surprise",
    bias: "Neutral / range-aware",
    summary:
      "Illustrative note: a mature pair where policy divergence and data surprises often matter more than any single candle pattern. Use this card to study how we frame context, levels and invalidation — not as a call to trade.",
    context:
      "EUR/USD is the market’s most-watched G10 pair. In this educational example we treat it as a laboratory for session structure, event risk and the difference between a narrative and a position.",
    structure: [
      "Higher-timeframe: illustrative range after a prior directional leg",
      "Medium-timeframe: overlapping value — neither side has clear acceptance",
      "Intraday: London open and US data windows are the informative hours",
    ],
    risks: [
      "Central-bank communication can reprice the entire map in one sitting",
      "A range thesis is wrong the moment acceptance builds beyond the range",
      "Costs and news spikes punish ‘boredom trades’ inside dead liquidity",
    ],
    seed: 11,
    base: 1.084,
  },
  {
    slug: "gbp-usd",
    pair: "GBP/USD",
    name: "Pound / US Dollar",
    theme: "Volatility, UK data & dollar liquidity",
    bias: "Two-way / event-sensitive",
    summary:
      "Illustrative note: Cable often carries more noise than EUR/USD. The teaching point is how to widen risk assumptions when a pair is temperamentally jumpy — not how to predict the next print.",
    context:
      "GBP/USD is useful for studying failed breaks and the cost of trading around UK data. This sample is simulated structure for classroom discussion.",
    structure: [
      "Illustrative swing highs recently defended, then probed",
      "Session wicks are educational: location matters more than the pattern name",
      "Overlap with USD strength/weakness can dominate local UK headlines",
    ],
    risks: [
      "UK data can gap through amateur stops",
      "Spreads can widen exactly when the idea ‘looks obvious’",
      "Correlation with risk sentiment is easy to under-count",
    ],
    seed: 23,
    base: 1.268,
  },
  {
    slug: "usd-jpy",
    pair: "USD/JPY",
    name: "US Dollar / Yen",
    theme: "Yields, policy and intervention risk",
    bias: "Macro-led / respect the trend, respect the surprise",
    summary:
      "Illustrative note: USD/JPY is where rates and policy risk sit in the same chart. We use it to teach why ‘the trend is your friend’ is incomplete without an invalidation and a policy calendar.",
    context:
      "This sample walks through how a research desk might talk about yields and FX together. Figures on the chart are simulated.",
    structure: [
      "Illustrative higher-timeframe directional bias driven by yield narratives",
      "Pullbacks as teaching material for ‘is this repair or reversal?’",
      "Asia session often sets the tone; NY can rewrite it",
    ],
    risks: [
      "Policy surprise and verbal intervention are not textbook patterns",
      "Crowded dollar-yen positioning can unwind faster than a model expects",
      "Gap risk around official comments",
    ],
    seed: 37,
    base: 149.2,
  },
  {
    slug: "xau-usd",
    pair: "XAU/USD",
    name: "Gold / US Dollar",
    theme: "Real rates, dollar and risk-off demand",
    bias: "Thematic / two-sided around events",
    summary:
      "Illustrative note: gold is not a currency pair, but it is a core teaching asset for macro + technical synthesis. This card shows how we separate a theme from a trade.",
    context:
      "XAU/USD is included because learners meet it early and often misunderstand it. Simulated chart. Educational framing only.",
    structure: [
      "Theme: real-rate and dollar context (classroom framing)",
      "Structure: wide ranges and fast runs — size assumptions must change",
      "Intraday: liquidity holes around US data are a risk lesson, not an opportunity slogan",
    ],
    risks: [
      "Gold can move on several stories at once",
      "Intraday ranges can invalidate a ‘tight stop’ philosophy",
      "Overnight gaps are part of the asset, not an exception",
    ],
    seed: 52,
    base: 2320,
  },
];

export const founders = [
  {
    name: "Roy",
    role: "Forex & Markets Specialist",
    image: "/images/founder-markets.jpg",
    focus: "Market analysis, trading education, strategies, research and masterclasses.",
    bio: "Roy designs the Ralu Markets curriculum and research format. The brief is simple: teach people how markets actually work, how risk compounds, and how to think in process rather than prediction. Sessions emphasise structure, evidence and the unglamorous work of review.",
    points: ["Curriculum & research notes", "Live masterclasses", "Strategy & risk labs"],
  },
  {
    name: "Ralu_jr",
    role: "Technology, Brand & Growth",
    image: "/images/founder-tech.jpg",
    focus: "Technology, AI, website development, branding, content, marketing and business growth.",
    bio: "Ralu_jr builds the platform, brand system and learning experience around the teaching. The product goal is a serious education company that can grow from Dar es Salaam onto a global stage — with the same restraint the classroom demands: no hype loops, no dark patterns, no fake social proof.",
    points: ["Platform & AI tooling", "Brand and content systems", "Growth with integrity"],
  },
];

export const whyUs = [
  {
    title: "Practical education",
    us: "Skills, language and routines you can practise this week.",
    them: "Motivation clips and unexplained ‘setups’.",
  },
  {
    title: "Risk awareness",
    us: "Risk is taught first, sized explicitly, and never treated as a disclaimer at the end.",
    them: "Risk mentioned after the sales close.",
  },
  {
    title: "Evidence-based learning",
    us: "Journals, reviews and honest sample sizes. Anecdotes are not a method.",
    them: "One spectacular screenshot as proof.",
  },
  {
    title: "Structured programs",
    us: "Beginner to advanced paths with modules, outcomes and instructors.",
    them: "A telegram dump of charts.",
  },
  {
    title: "Technology-driven learning",
    us: "Charts, session tools, curriculum UI and research templates built for the craft.",
    them: "A PDF and a promise.",
  },
  {
    title: "Tanzania-first perspective",
    us: "Built in Dar es Salaam, taught in English and Kiswahili, aware of local learner context.",
    them: "Imported guru culture with no local accountability.",
  },
  {
    title: "International vision",
    us: "Standards that would not embarrass a research desk in any timezone.",
    them: "A brand that cannot travel beyond its ads.",
  },
];

export const faqs = [
  {
    q: "Is Ralu Markets suitable for beginners?",
    a: "Yes. Forex Fundamentals is written for people who are new to currency markets. We start with market structure, costs, sessions and risk — not with a strategy that assumes you already know the language. If you are experienced, you can enter at Technical Analysis or Advanced Trading after a short self-assessment.",
  },
  {
    q: "Do you provide forex courses?",
    a: "Yes. We offer structured programs: Forex Fundamentals, Technical Analysis, Advanced Trading, and Live Masterclasses. Each program lists level, duration, modules and instructor so you can choose deliberately.",
  },
  {
    q: "Do you provide live market analysis?",
    a: "We run live masterclasses and publish educational market-research notes. These are teaching artefacts — how to frame context, structure, risk and invalidation. They are not personalised trade instructions, signals, or a call to open a position.",
  },
  {
    q: "Is forex trading risky?",
    a: "Yes. Leveraged foreign-exchange and CFD-style products can result in the rapid loss of capital. You can lose more than you expect, including, depending on the account type and jurisdiction, more than your deposit. Education does not remove this risk. If you cannot afford to lose the money, you should not trade.",
  },
  {
    q: "Do you guarantee profits?",
    a: "No. We never guarantee profits, income, returns, or ‘financial freedom’. Anyone who does is not teaching markets; they are selling a fantasy. Our measure of success is whether you understand the domain and can manage risk with discipline.",
  },
  {
    q: "How do the masterclasses work?",
    a: "Sessions are scheduled in East Africa Time and run as interactive classrooms: a pre-read, a live walkthrough of structure or a research note, and a process-focused Q&A. You will not be given a ‘buy now’ call. Recorded notes may be shared with enrolled learners after the session.",
  },
  {
    q: "What languages are supported?",
    a: "Primary teaching is in English. We also support Kiswahili for community sessions and selected resources, reflecting our Tanzania base. Course materials on this site are currently in English.",
  },
  {
    q: "Are you a broker? Do you manage money?",
    a: "No. Ralu Markets is an education and research brand. We do not take deposits to trade, we do not manage client funds, and we do not execute orders on your behalf. If you choose to trade, you do so through a separately regulated provider of your own choosing, at your own risk.",
  },
];

export const glossary = [
  { term: "Pip", def: "The standardised increment used to describe a small price move in FX, typically 0.0001 for most pairs and 0.01 for JPY pairs." },
  { term: "Spread", def: "The difference between bid and offer — a real cost of doing business, not a detail." },
  { term: "Leverage", def: "Borrowed exposure. It magnifies outcomes in both directions and is a primary source of account failure." },
  { term: "Drawdown", def: "The peak-to-trough decline of an equity curve. A risk statistic, not a mood." },
  { term: "Invalidation", def: "The condition that means your idea is wrong. If you cannot name it, you do not have a plan." },
  { term: "Expectancy", def: "Average outcome per trade given win rate and payoff. Without costs included, it is fiction." },
  { term: "Session", def: "A geographically anchored block of liquidity — Sydney, Tokyo, London, New York — each with its own temperament." },
  { term: "Correlation", def: "How instruments move together. Two ‘diversified’ USD trades are often one idea." },
];

export const resources = [
  {
    title: "Risk primer",
    text: "A plain-language walkthrough of leverage, position size, and why survival is a skill. Education, not a product pitch.",
    href: "#/resources",
    tag: "Guide",
  },
  {
    title: "Research note template",
    text: "Context → structure → levels → risks → invalidation. The skeleton we use in Market Insights.",
    href: "#/insights",
    tag: "Template",
  },
  {
    title: "Session map",
    text: "How the 24-hour FX day is actually four overlapping markets. Use the live session clock on this site.",
    href: "#/insights",
    tag: "Tool",
  },
  {
    title: "Learning journal",
    text: "What to write down after a study session so you improve the process instead of collecting screenshots.",
    href: "#/academy",
    tag: "Practice",
  },
];

export const masterclasses = [
  {
    title: "Reading London open without folklore",
    date: "Sample session · EAT",
    level: "Intermediate",
    duration: "75 min",
    blurb: "A classroom look at how overlap liquidity changes the meaning of the same level. Educational example — dates confirmed with enrolled learners.",
  },
  {
    title: "Building a research note, live",
    date: "Sample session · EAT",
    level: "All levels",
    duration: "90 min",
    blurb: "From blank page to a finished note: context, structure, risks, invalidation. No signal at the end.",
  },
  {
    title: "Position size as a moral decision",
    date: "Sample session · EAT",
    level: "Beginner+",
    duration: "60 min",
    blurb: "Why most damage is done in the size field. Worked examples with conservative assumptions.",
  },
  {
    title: "Psychology lab: the review hour",
    date: "Sample session · EAT",
    level: "All levels",
    duration: "60 min",
    blurb: "A structured debrief practice. We study behaviour, not bravado.",
  },
];

export const placeholders = [
  {
    quote:
      "I needed a classroom that would slow me down. The emphasis on risk and journals was the opposite of what I had been watching online — and that was the point.",
    name: "Illustrative learner",
    meta: "Beginner path · Dar es Salaam",
  },
  {
    quote:
      "The research notes are written like teaching, not like a call to action. I finally understood what ‘invalidation’ was supposed to mean.",
    name: "Illustrative learner",
    meta: "Technical Analysis · Nairobi (placeholder)",
  },
  {
    quote:
      "Masterclass Q&A refused the ‘what should I buy’ question and sent us back to process. Uncomfortable. Useful.",
    name: "Illustrative learner",
    meta: "Live sessions · placeholder perspective",
  },
];

export const riskLong = `Ralu Markets provides education and market-research training only. Nothing on this website is investment advice, a solicitation, or a recommendation to buy or sell any security, currency, crypto-asset or derivative. Forex and leveraged products are high-risk. Prices move quickly. You can lose money, including — depending on the product and the provider — more than your initial funds.

Past examples, simulated charts, sample levels and classroom scenarios are illustrative. They are not performance records. We do not guarantee profits, income, employment, or any financial result. We are not a broker-dealer, bank, or asset manager. We do not hold client funds.

Any decision to trade is yours alone. Consider your financial situation, seek independent advice where appropriate, and never risk capital you cannot afford to lose. Regional regulations vary; you are responsible for understanding the rules that apply to you.

Market Insights on this site use simulated or delayed example data unless explicitly stated otherwise. They are teaching materials.`;
