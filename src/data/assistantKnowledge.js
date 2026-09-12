// Knowledge base for the portfolio assistant.
//
// Answers here deliberately go deeper than the page copy — implementation
// details, trade-offs and stack choices pulled from the actual repositories —
// so the assistant is worth talking to rather than just re-reading the site.
//
// Every entry can offer follow-up actions:
//   { type: "scroll", to }   jump to a section of the page
//   { type: "link", href }   open an external URL
//   { type: "ask", query }   ask the assistant a follow-up question

const GITHUB = "https://github.com/Avinash123-singh";
const LINKEDIN = "https://www.linkedin.com/in/avinash-singh-b67b5116b/";

export const QUICK_QUESTIONS = [
  "What has he built?",
  "What's his tech stack?",
  "Tell me about ChorKaun",
  "Is he available for hire?",
];

export const GREETING =
  "Hi — I'm Avinash's portfolio assistant. I can go into detail on his projects, the stack behind each one, how he works, or how to get in touch. What would you like to know?";

const seeProjects = {
  type: "scroll",
  to: "projects",
  label: "See all projects",
};
const seeSkills = { type: "scroll", to: "skills", label: "See the full stack" };
const seeContact = { type: "scroll", to: "contact", label: "Get in touch" };

export const TOPICS = [
  // ---------------------------------------------------------------- greetings
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "yo", "namaste", "good morning", "good evening", "hola"],
    answer: GREETING,
    actions: [
      { type: "ask", query: "What has he built?", label: "What has he built?" },
      { type: "ask", query: "What's his tech stack?", label: "His tech stack" },
    ],
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "thankyou", "bye", "goodbye", "cool", "nice", "great", "awesome", "ok thanks"],
    answer:
      "Happy to help. If anything else comes to mind I'm right here — otherwise the contact form is the fastest way to reach Avinash directly.",
    actions: [seeContact],
  },

  // ------------------------------------------------------------------ profile
  {
    id: "about",
    keywords: ["who is avinash", "who are you talking about", "about avinash", "about him", "tell me about him", "his background", "background", "introduce", "introduction", "bio", "profile"],
    answer:
      "Avinash Singh is a full-stack engineer working primarily in JavaScript and TypeScript. In practice that means Node and Express services, WebSocket layers for anything real-time, and data modelled in MongoDB, PostgreSQL or SQLite — with React front ends on top.\n\nWhat makes his background a little different from a standard front-end profile is how much of it is infrastructure and quality work: real-time multiplayer backends, AI-assisted analytics tooling, QA automation platforms and load testing against production-scale traffic. He has spent a lot of time on the side of software where failures show up as stack traces rather than misaligned buttons, which is why he tends to start from error paths and logging rather than the happy case.",
    actions: [
      { type: "scroll", to: "about", label: "Read the full background" },
      seeProjects,
    ],
  },
  {
    id: "approach",
    keywords: ["how does he work", "how do you work", "work style", "philosophy", "approach", "process", "methodology", "principles", "values", "collaborate", "team"],
    answer:
      "His stated preference is shipping something small that works every time over something large that mostly does. Concretely, that shows up as: designing from the failure cases backwards, keeping code obvious enough that the next person can change it safely, documenting APIs as they're built (Postman collections rather than after-the-fact wikis), and flagging trade-offs and timeline risk early instead of at the deadline.\n\nOn the testing side he's opinionated — his professional work includes building QA automation and load-testing platforms, so he treats automated coverage and performance profiling as part of delivery rather than a later phase.",
    actions: [{ type: "scroll", to: "about", label: "Read more" }, seeProjects],
  },
  {
    id: "location",
    keywords: ["where is he", "where are you", "location", "based", "city", "country", "timezone", "time zone", "remote", "relocate"],
    answer:
      "He's based in India and works with distributed teams, so remote collaboration is the norm rather than the exception. For specifics on timezone overlap, on-site availability or relocation, it's best to ask him directly — he'll give you a straight answer.",
    actions: [seeContact],
  },
  {
    id: "education",
    keywords: ["education", "degree", "college", "university", "studied", "qualification", "certification", "graduate"],
    answer:
      "Education and certification details aren't listed on this page — that's one for Avinash directly. What I can tell you is what he's actually shipped: real-time multiplayer platforms, an AI-assisted analytics product, appointment and rental systems, and QA and performance automation used against production workloads.",
    actions: [seeContact, seeProjects],
  },

  // ------------------------------------------------------------------- skills
  {
    id: "skills",
    keywords: ["skills", "skill", "tech stack", "stack", "technologies", "technology", "tools", "languages", "what does he know", "what can he do", "expertise", "toolkit"],
    answer:
      "His toolkit breaks into six areas:\n\n• Languages — JavaScript, TypeScript, HTML5, CSS3\n• Frontend — React, Tailwind CSS, Vite, Material UI\n• Backend — Node.js, Express, Socket.IO, REST and JWT auth\n• Databases — MongoDB, PostgreSQL, SQLite, Firebase/Firestore\n• DevOps — Git, Docker, GitHub Actions, Postman\n• Testing and QA — Selenium, Cucumber, JMeter, k6\n\nThat list isn't aspirational — every item appears in the projects below. ChorKaun alone covers TypeScript, React, Express, Socket.IO, SQLite, Docker and Nginx.",
    actions: [seeSkills, seeProjects],
  },
  {
    id: "frontend",
    keywords: ["react", "frontend", "front end", "front-end", "ui", "user interface", "tailwind", "css", "material ui", "mui", "vite", "component"],
    answer:
      "React is his main front-end tool, usually with Vite for the build and Tailwind for styling — Fake Answer Party also uses Material UI for its component layer. ChorKaun's front end is written in TypeScript, so typed props and API contracts are familiar territory rather than something to be introduced.\n\nThe interesting front-end work in his projects is mostly state under pressure: keeping four players' game views consistent over a WebSocket connection, handling reconnects, and making sure a dropped socket doesn't leave the UI showing a stale round.",
    actions: [seeSkills, { type: "ask", query: "Tell me about ChorKaun", label: "See a real example" }],
  },
  {
    id: "backend",
    keywords: ["backend", "back end", "back-end", "node", "nodejs", "node js", "express", "api", "apis", "rest", "server", "microservice", "jwt", "auth", "authentication"],
    answer:
      "Node and Express are the backbone of his server work — REST APIs documented in Postman, JWT-based auth, and WebSocket layers where the product needs live state. He's built centralised API servers for appointment booking, Firestore-backed APIs for a rental marketplace, and game servers holding authoritative round state for multiple concurrent rooms.\n\nA representative example: ChorKaun's backend is Express plus Socket.IO with better-sqlite3 for storage, packaged so the API, WebSocket layer and static frontend all serve from one origin behind Nginx — which sidesteps a whole category of CORS and cookie problems in production.",
    actions: [seeSkills, seeProjects],
  },
  {
    id: "realtime",
    keywords: ["socket", "socket io", "socketio", "websocket", "web socket", "real time", "realtime", "live", "multiplayer", "concurrent"],
    answer:
      "Real-time is probably his most distinctive area. Both of his personal projects are multiplayer systems built on Socket.IO: room creation with shareable join codes, server-authoritative round flow, live leaderboards, presence handling, and reconnect logic so a dropped connection doesn't kill a game in progress. ChorKaun even layers push-to-talk voice on top.\n\nThe hard parts there aren't the sockets themselves — they're deciding what the server owns versus the client, handling a host who disconnects mid-round, and making sure late joiners receive consistent state.",
    actions: [
      { type: "ask", query: "Tell me about ChorKaun", label: "ChorKaun in detail" },
      { type: "ask", query: "Tell me about Fake Answer Party", label: "Fake Answer Party" },
    ],
  },
  {
    id: "databases",
    keywords: ["database", "databases", "db", "mongodb", "mongo", "postgres", "postgresql", "sql", "sqlite", "firebase", "firestore", "supabase", "schema", "data model"],
    answer:
      "He picks the database to fit the problem rather than defaulting to one:\n\n• SQLite (via better-sqlite3) in ChorKaun — synchronous, embedded, zero network hop, ideal for game state that ships inside a single container.\n• PostgreSQL through Supabase in Fake Answer Party — relational questions, players and history across several game modes.\n• MongoDB for document-shaped application data.\n• Firestore in the Room Rental platform, with security rules and role-based access scoping listings and enquiries to the right accounts.\n\nThe pattern is that storage choice follows deployment and access shape, which is a more useful instinct than knowing any one engine deeply.",
    actions: [seeSkills, seeProjects],
  },
  {
    id: "devops",
    keywords: ["docker", "devops", "deploy", "deployment", "ci", "cd", "ci cd", "pipeline", "github actions", "container", "nginx", "infrastructure", "hosting", "render"],
    answer:
      "Both personal projects ship as Docker images with compose files and render.yaml deploy configs, and ChorKaun uses a production Nginx config so the frontend, REST API and WebSocket upgrade all sit behind one URL. Pulse QA runs its automation through GitHub Actions.\n\nSo the deployment story isn't 'push to a host and hope' — it's containerised, reproducible, and configured so local and production behave the same way.",
    actions: [
      seeSkills,
      { type: "link", href: `${GITHUB}/ChorKaun`, label: "See the Dockerfile" },
    ],
  },
  {
    id: "testing",
    keywords: ["testing", "test", "tests", "qa", "quality", "automation", "selenium", "cucumber", "gherkin", "bdd", "playwright", "browserstack", "unit test"],
    answer:
      "Testing is a professional specialism, not a side interest. Pulse QA is a full test automation platform he worked on: record-and-playback authoring so tests don't need hand-written scripts, cross-device and cross-platform execution, AI-assisted stability so tests adapt to UI changes rather than turning flaky, live run monitoring with failures surfaced as they happen, and parallel execution to keep suites fast. Under the hood it uses Gherkin/Cucumber for BDD specs and BrowserStack for the device grid.\n\nHe also wrote unit test suites covering booking and availability logic on the Room Rental platform — specifically to make double-bookings impossible.",
    actions: [
      { type: "link", href: `${GITHUB}/PulseQA`, label: "Pulse QA on GitHub" },
      seeProjects,
    ],
  },
  {
    id: "performance",
    keywords: ["performance", "load test", "load testing", "jmeter", "k6", "locust", "stress test", "scale", "scalability", "bottleneck", "optimisation", "optimization", "power bi"],
    answer:
      "He ran performance testing against Power BI reporting using JMeter, k6 and Locust together — simulating concurrent users hitting reports and confirming the system held under real demand. Custom load profiles reproduced spike, soak and stress patterns rather than just a flat ramp, and API monitoring tracked response times for DAX queries and filter applications specifically.\n\nThat instrumentation is what made the findings actionable: the bottlenecks turned out to be slow-loading visuals and expensive DAX queries, so the optimisation work was targeted instead of guesswork.",
    actions: [
      { type: "link", href: `${GITHUB}/LoadTesting`, label: "Load Testing repo" },
      seeProjects,
    ],
  },
  {
    id: "ai",
    keywords: ["ai", "ml", "machine learning", "artificial intelligence", "nlp", "data science", "analytics", "llm", "model"],
    answer:
      "His AI work is applied rather than research-flavoured. Decision Pulse AI let users query data in natural language through a chat interface and get charts back, with ML models running underneath to detect trends, anomalies and outliers automatically. It also recommended KPIs based on dataset structure and business context, and embedded into other applications via iFrame or SDK.\n\nPulse QA uses AI differently — for test stability, adapting selectors and flows when the UI changes so suites don't break on every release.",
    actions: [
      { type: "ask", query: "Tell me about Decision Pulse AI", label: "Decision Pulse AI" },
      seeProjects,
    ],
  },

  // ----------------------------------------------------------------- projects
  {
    id: "projects",
    keywords: ["project", "projects", "portfolio work", "what has he built", "what have you built", "work", "built", "case study", "experience", "apps", "products"],
    answer:
      "Seven projects, split into professional work and personal builds.\n\nProfessional: Pulse QA (test automation platform), Load Testing (JMeter/k6/Locust performance work on Power BI), Decision Pulse AI (natural-language analytics with ML-driven insights), a Doctor Management System (appointment booking with Twilio and Microsoft Teams integration) and a Room Rental marketplace (Firestore APIs, React front end, tested booking flows).\n\nPersonal: ChorKaun, a real-time four-player game with voice chat, and Fake Answer Party, an online bluffing party game — both Socket.IO multiplayer, both containerised.\n\nAsk me about any one of them and I'll go deeper, or jump to the section for the full write-ups.",
    actions: [
      seeProjects,
      { type: "ask", query: "Tell me about ChorKaun", label: "ChorKaun" },
      { type: "ask", query: "Tell me about Pulse QA", label: "Pulse QA" },
    ],
  },
  {
    id: "chorkaun",
    keywords: ["chorkaun", "chor kaun", "chor", "raja mantri", "sipahi", "voice game", "voice chat"],
    answer:
      "ChorKaun is a real-time four-player web game built on Raja · Mantri · Chor · Sipahi. One player hosts, shares a six-digit room code, and the game runs live — secret role assignment, a host-controlled round flow, guess resolution, a running leaderboard across rounds, and push-to-talk voice so players can actually accuse each other.\n\nStack: TypeScript and React with Vite on the front, Express and Socket.IO on the back, better-sqlite3 for state. The whole thing builds into a single Docker image with an Nginx production config, so frontend, REST API and WebSocket upgrades all serve from one URL — which removes the CORS and sticky-session headaches you normally hit deploying a socket app.\n\nIt's the best single example of his range: typed frontend, real-time backend, embedded database, containerised deploy.",
    actions: [
      { type: "link", href: `${GITHUB}/ChorKaun`, label: "View on GitHub" },
      seeProjects,
    ],
  },
  {
    id: "fakeanswer",
    keywords: ["fake answer", "fake answer party", "questiongame", "question game", "bluffing", "bluff", "fibbage", "party game", "trivia"],
    answer:
      "Fake Answer Party is an online bluffing party game in the spirit of Fibbage. Players are shown a question, submit convincing fake answers, then vote — you score for guessing the real answer and for fooling other players with yours. It ships several modes including Fake News, Logo Challenge and World Trivia.\n\nStack: React and Vite with Material UI on the front, Express and Socket.IO handling rooms and live voting, and PostgreSQL via Supabase storing the question bank and player history across games. Like ChorKaun it's Docker-composed with a render.yaml for deploys.\n\nThe scoring-and-voting loop is the tricky bit — everyone has to submit before anyone sees options, and the server has to prevent players voting for their own fake answer.",
    actions: [
      { type: "link", href: `${GITHUB}/QuestionGame`, label: "View on GitHub" },
      seeProjects,
    ],
  },
  {
    id: "pulseqa",
    keywords: ["pulse qa", "pulseqa", "test platform", "test automation platform", "record and playback"],
    answer:
      "Pulse QA is a test automation platform aimed at making test creation possible without hand-writing scripts. Record-and-playback captures flows directly, cases run across multiple devices and platforms for coverage breadth, and AI-driven stability adapts tests to UI changes so they don't turn flaky after every front-end tweak.\n\nExecution is monitored live — failures surface the moment they occur with suggested corrective actions rather than at the end of a run — and parallel execution keeps whole suites fast. The repo uses Gherkin feature files with Cucumber for BDD specs, BrowserStack for the device grid, and GitHub Actions to drive it all.",
    actions: [
      { type: "link", href: `${GITHUB}/PulseQA`, label: "View on GitHub" },
      seeProjects,
    ],
  },
  {
    id: "loadtesting",
    keywords: ["load testing project", "loadtesting", "performance project", "power bi testing"],
    answer:
      "The Load Testing work targeted Power BI reporting. He used JMeter, k6 and Locust to simulate concurrent users opening reports, with custom load profiles that reproduced spike, soak and stress patterns rather than a single flat ramp — each one exposes different failure modes.\n\nAlongside that he instrumented Power BI API monitoring to track response times for DAX queries and filter applications specifically. That's what turned vague 'reports feel slow' complaints into concrete findings: slow-loading visuals and expensive DAX queries, both fixable once identified.",
    actions: [
      { type: "link", href: `${GITHUB}/LoadTesting`, label: "View on GitHub" },
      seeProjects,
    ],
  },
  {
    id: "decisionpulse",
    keywords: ["decision pulse", "decision pulse ai", "decisionpulse", "dashboard", "kpi", "self service", "embedded analytics", "bi"],
    answer:
      "Decision Pulse AI was an analytics platform built to get non-technical users past the query builder. It supported natural-language querying through a chat interface — ask a question, get a chart — plus drag-and-drop self-service dashboarding that removed the need for developer involvement entirely.\n\nUnderneath, ML models detected trends, anomalies and outliers automatically, and the system recommended KPIs based on dataset structure and business context rather than making users guess what to measure. It could also be embedded into other web applications through an iFrame or an SDK.\n\nIt's client work, so the repository is private — but Avinash can walk through the architecture directly.",
    actions: [seeContact, seeProjects],
  },
  {
    id: "doctor",
    keywords: ["doctor", "doctor management", "appointment", "hospital", "clinic", "twilio", "teams", "healthcare", "booking system"],
    answer:
      "The Doctor Management System is an appointment platform built on a centralised Express and Node.js server, written in modern ES6 and documented in Postman so the API stayed usable across the team. React handles the patient-facing booking portal, where anyone can book an appointment online.\n\nThe integration work is the notable part: Twilio and Microsoft Teams are wired into the Node backend for appointment notifications and clinician communication — so the system reaches people where they already are instead of relying on them checking a dashboard.",
    actions: [seeContact, seeProjects],
  },
  {
    id: "rental",
    keywords: ["room rental", "rental", "rent", "marketplace", "listing", "property", "firestore project"],
    answer:
      "The Room Rental Website is a marketplace where he built the APIs and the unit test suite, handling Firestore API development in Node.js with a React front end on top.\n\nOwners list rooms with photographs, pricing and availability windows; renters filter by location and budget and send booking requests without leaving the site. Firestore security rules and role-based access keep listing and enquiry data scoped to the right accounts, and the unit tests cover the booking and availability paths specifically so double-bookings can't slip through — which is the failure mode that actually costs a rental platform its users.",
    actions: [seeContact, seeProjects],
  },
  {
    id: "personal-vs-pro",
    keywords: ["personal project", "personal projects", "side project", "own time", "hobby", "professional work", "client work", "company work"],
    answer:
      "The work is split deliberately. Professional projects — Pulse QA, Load Testing, Decision Pulse AI, the Doctor Management System and Room Rental — were built in a commercial setting, so most of those repositories are private.\n\nPersonal projects are ChorKaun and Fake Answer Party, both built end to end on his own time and both fully public on GitHub. If you want to read actual code rather than descriptions, those two are where to look.",
    actions: [
      seeProjects,
      { type: "link", href: GITHUB, label: "Browse GitHub" },
    ],
  },

  // ---------------------------------------------------------------- practical
  {
    id: "contact",
    keywords: ["contact", "email", "e mail", "phone", "reach", "get in touch", "message", "call", "talk", "connect", "mail"],
    answer:
      "Two direct routes: avisingh70001@gmail.com or +91 7985047536. There's also a contact form at the bottom of this page that lands straight in his inbox — usually the easiest option since it tells him who you are and what you need in one go.",
    actions: [
      seeContact,
      { type: "link", href: LINKEDIN, label: "LinkedIn" },
    ],
  },
  {
    id: "hire",
    keywords: ["hire", "hiring", "available", "availability", "freelance", "contract", "job", "opportunity", "role", "work together", "recruit", "open to work", "notice period"],
    answer:
      "Yes — he's open to full-time roles, contract work and selective side builds. He's a good fit if you need someone who can take a feature from schema through API to interface without handoffs, or specifically if you need real-time functionality, test automation or performance work.\n\nFor specifics like notice period, rates or start dates, send him a message and he'll answer directly.",
    actions: [seeContact, { type: "ask", query: "What's his tech stack?", label: "Check the stack first" }],
  },
  {
    id: "rates",
    keywords: ["rate", "rates", "salary", "cost", "price", "pricing", "budget", "charge", "ctc", "compensation"],
    answer:
      "Rates and compensation aren't published here — they depend on scope, engagement length and whether it's contract or full-time. Send him the shape of the work through the contact form and he'll come back with something concrete.",
    actions: [seeContact],
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download", "pdf", "curriculum"],
    answer:
      "The Download Resume button at the top of the page will pull down the full PDF — it covers his experience and stack in more conventional detail than I do.",
    actions: [{ type: "scroll", to: "home", label: "Go to the download button" }],
  },
  {
    id: "social",
    keywords: ["github", "git hub", "linkedin", "social", "repo", "repository", "code", "source", "open source", "profile link"],
    answer:
      "GitHub is where the public code lives — ChorKaun and Fake Answer Party are the two worth reading, alongside the Pulse QA and Load Testing repositories. LinkedIn covers the professional history in the usual format.",
    actions: [
      { type: "link", href: GITHUB, label: "GitHub" },
      { type: "link", href: LINKEDIN, label: "LinkedIn" },
    ],
  },
  {
    id: "this-site",
    keywords: ["this site", "this website", "this portfolio", "built this", "how was this made", "what is this built with", "your website", "this page"],
    answer:
      "This page is React with Vite, styled with Tailwind, animated with Framer Motion, and using react-scroll for the section navigation. The assistant you're talking to runs entirely in your browser — no API calls, no data leaving the page — and can read its answers aloud using the browser's built-in speech synthesis.",
    actions: [seeSkills, { type: "link", href: `${GITHUB}/portfolio`, label: "Source on GitHub" }],
  },
  {
    id: "assistant",
    keywords: ["who are you", "what are you", "are you a bot", "are you ai", "chatgpt", "are you human", "what can you do", "help"],
    answer:
      "I'm a scripted assistant built into this portfolio — no model behind me, just a hand-written knowledge base about Avinash's work, which is why my answers stay accurate and instant.\n\nI can go deep on any of the seven projects, break down the stack by layer, explain how he approaches building and testing, or point you at the right way to get in touch. Try asking about a specific project or technology.",
    actions: [
      { type: "ask", query: "What has he built?", label: "His projects" },
      { type: "ask", query: "What's his tech stack?", label: "His stack" },
    ],
  },
];

export const FALLBACK = {
  id: "fallback",
  answer:
    "I don't have a good answer for that one. I'm most useful on his projects (ChorKaun, Fake Answer Party, Pulse QA, Load Testing, Decision Pulse AI, the Doctor Management System or Room Rental), the stack behind them — React, TypeScript, Node, Socket.IO, databases, Docker, testing — how he works, or how to reach him.\n\nFor anything outside that, the contact form is the right place to ask him directly.",
  actions: [
    { type: "ask", query: "What has he built?", label: "His projects" },
    { type: "ask", query: "What's his tech stack?", label: "His stack" },
    { type: "scroll", to: "contact", label: "Ask him directly" },
  ],
};

function normalise(text) {
  return ` ${text.toLowerCase().replace(/[^a-z0-9+#\s]/g, " ").replace(/\s+/g, " ").trim()} `;
}

/**
 * Scores every topic by how much of its vocabulary appears in the question.
 * Longer, more specific phrases outweigh single generic words so that
 * "tell me about chorkaun" resolves to the project, not to "projects".
 */
export function resolveTopic(question) {
  const haystack = normalise(question);
  let best = null;
  let bestScore = 0;

  for (const topic of TOPICS) {
    let score = 0;
    for (const keyword of topic.keywords) {
      if (haystack.includes(` ${keyword} `)) {
        const words = keyword.split(" ").length;
        score += keyword.length * words;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }

  return bestScore >= 2 ? best : FALLBACK;
}
