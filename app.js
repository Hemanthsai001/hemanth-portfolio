// ====== Content model (edit here) ======
const DATA = {
  profile: {
    name: "Hemanth D",
    role: "Data Scientist",
    email: "dhemanthsai3@gmail.com",
    github: "https://github.com/Hemanthsai001",
    linkedin: "https://www.linkedin.com/",
  },

  projects: [
    {
      title: "Support Decision System (RAG + Calibrated Routing)",
      kind: "Open-source",
      year: "2026",
      tags: ["RAG", "Routing", "Calibration", "Python", "Docker"],
      links: {
        github: "https://github.com/Hemanthsai001/support-decision-system",
        paper: "./assets/Industry_Agnostic_Decision_System.pdf",
      },
      summary:
        "Enterprise-style agent-assist system: hybrid retrieval + reranking, supervised routing to resolution paths, calibrated confidence, and abstention with structured human handoff.",
      highlights: [
        "Hybrid retrieval (lexical + dense) with rank fusion and evidence packs",
        "Routing model predicts resolution paths + escalation risk with calibrated probabilities",
        "Reject-option policy abstains under uncertainty and hands off with evidence",
        "Runs locally via Docker; designed to be industry-agnostic using “domain packs”",
      ],
    },
    {
      title: "Credit Card Fraud Detection (End-to-End ML + A/B Testing)",
      kind: "Open-source (fork)",
      year: "2026",
      tags: ["XGBoost", "FastAPI", "Streamlit", "Docker", "Imbalanced Data"],
      links: {
        github: "https://github.com/Hemanthsai001/fraud-detection-project",
      },
      summary:
        "Complete fraud detection pipeline with API + UI, A/B testing utilities, and batch scoring for large datasets.",
      highlights: [
        "Models include XGBoost / Random Forest for imbalanced classification",
        "FastAPI endpoints + Streamlit UI for experiments and results viewing",
        "Dockerized workflow for repeatable runs",
      ],
    },
    {
      title: "MicroPython RSA Encrypt/Decrypt (2048-bit) — Course Project",
      kind: "Open-source (fork)",
      year: "2026",
      tags: ["MicroPython", "RSA", "Cryptography"],
      links: { github: "https://github.com/Hemanthsai001/project5b" },
      summary:
        "Course project exploring RSA encryption/decryption in MicroPython, with documentation and demo videos in the repo.",
      highlights: [
        "Includes documentation PDF and demo recordings in the repository",
        "Focus: implementing RSA 2048 workflows in constrained environments",
      ],
    },
    {
      title: "CS666 Coursework Notebooks",
      kind: "Open-source (fork)",
      year: "2023",
      tags: ["Jupyter", "Coursework"],
      links: { github: "https://github.com/Hemanthsai001/cs666student" },
      summary:
        "A set of CS666 coursework notebooks and assignments.",
      highlights: [
        "Notebook-based submissions for course assignments",
      ],
    },

    // Resume case studies (non-GitHub)
    {
      title: "Forecasting Server Demand (ARIMA + XGBoost)",
      kind: "Case study",
      year: "2024–2025",
      tags: ["Time Series", "Airflow", "SageMaker", "AWS", "Tableau"],
      links: {},
      summary:
        "Hybrid forecasting model to predict server demand from infrastructure logs, integrated into a weekly retraining pipeline.",
      highlights: [
        "Reduced overprovisioning by ~10% and improved forecast accuracy by ~18%",
        "Productionized with Airflow + SageMaker; monitored via Tableau dashboards",
      ],
    },
    {
      title: "Real-Time Anomaly Detection (Kafka + Spark Streaming)",
      kind: "Case study",
      year: "2023",
      tags: ["Kafka", "Spark Streaming", "PySpark", "Power BI"],
      links: {},
      summary:
        "Streaming anomaly detection for financial aid & billing transactions with sub-second alerting and compliance dashboards.",
      highlights: [
        "Sub-second alerts, anomalies stored in analytics warehouse and visualized",
        "Reduced manual investigation workload by ~30%",
      ],
    },
  ],

  experience: [
    {
      title: "Data Scientist",
      org: "Arthrex",
      time: "03/2024 – Present • Massachusetts, USA",
      bullets: [
        "Built time-series forecasting for server demand using ARIMA/SARIMA/Prophet + XGBoost/LightGBM.",
        "Automated training/testing/deployment with Apache Airflow + AWS SageMaker + Git (weekly retraining).",
        "Shipped geospatial Tableau dashboards (GeoPandas) to visualize load and demand patterns for internal initiatives.",
        "Implemented model monitoring and retraining triggers (CloudWatch + custom Python).",
      ],
    },
    {
      title: "Data Analyst",
      org: "University of Massachusetts Boston",
      time: "01/2022 – 12/2023 • Massachusetts, USA",
      bullets: [
        "Designed PySpark pipelines processing ~500GB/day; reduced load + transformation time by ~35%.",
        "Optimized PostgreSQL/MySQL queries, improving dashboard response time by ~40% for 200+ stakeholders.",
        "Built Power BI dashboards with Azure Synapse tracking enrollment, dropout, and funding distribution.",
        "Implemented real-time anomaly detection with Kafka + Spark Streaming for sub-second alerts.",
      ],
    },
    {
      title: "Associate Data Analyst",
      org: "TCS",
      time: "08/2020 – 12/2021 • Bengaluru, India",
      bullets: [
        "Analyzed 8M+ support logs; reduced average ticket resolution time by ~25% through root-cause analysis.",
        "Built Looker dashboards + dbt models for SLA compliance and escalation trends across 15+ datasets.",
        "Used GeoPandas to map 30K+ geocoded tickets; identified issue clusters guiding infra improvements.",
        "Applied graph analysis (NetworkX) on chatbot queries, improving routing accuracy by ~30%.",
      ],
    },
  ],

  research: [
    {
      title: "MCP Toolbox: Secure Multi-Tenant Tool Connectivity for Agentic Systems",
      where: "NeurIPS 2025-style paper (preprint)",
      tags: ["MCP", "Multi-tenant", "RBAC/ABAC", "Audit", "Reliability"],
      links: {
        pdf: "./assets/MCP_Toolbox_NeurIPS2025_HemanthSaiD.pdf",
      },
      summary:
        "A production-oriented MCP server design that standardizes tool onboarding, governance, scoped discovery, policy evaluation, and audit telemetry for enterprise agents.",
    },
    {
      title: "An Industry-Agnostic Agent-Assist Decision System (RAG + Calibrated Routing)",
      where: "System design preprint",
      tags: ["RAG", "Routing", "Calibration", "Abstention", "Safety"],
      links: {
        pdf: "./assets/Industry_Agnostic_Decision_System.pdf",
      },
      summary:
        "Blueprint for unifying evidence-grounded generation with supervised routing and a reject-option policy to reduce false positives and enable structured handoff.",
    },
  ],

  skills: [
    {
      title: "Languages & Query",
      text: "Python, SQL (PostgreSQL, Snowflake, BigQuery), R, Bash",
    },
    {
      title: "ML & Stats",
      text: "scikit-learn, XGBoost, LightGBM, statsmodels, TensorFlow, PyTorch; A/B testing; time series (ARIMA, Prophet)",
    },
    {
      title: "Data & Orchestration",
      text: "PySpark, Kafka, Airflow, dbt, Fivetran; Docker; Git; CI-friendly workflows",
    },
    {
      title: "Cloud & MLOps",
      text: "AWS (SageMaker, Lambda, Redshift, EC2, CloudWatch); Azure (Synapse, Databricks); GCP (BigQuery, Dataflow); Kubernetes",
    },
    {
      title: "Analytics",
      text: "Tableau, Power BI, Looker, Streamlit, Matplotlib, Plotly, GeoPandas",
    },
    {
      title: "Ways of Working",
      text: "Stakeholder-first problem framing, measurable outcomes, documentation, Agile/Scrum, JIRA",
    },
  ],
};

// ====== Rendering ======
const $ = (q, el = document) => el.querySelector(q);
const $$ = (q, el = document) => [...el.querySelectorAll(q)];

const state = {
  selectedTag: "All",
  query: "",
};

function uniq(arr){ return [...new Set(arr)]; }

function create(tag, attrs = {}, children = []){
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)){
    if (k === "class") el.className = v;
    else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
    else if (k === "html") el.innerHTML = v;
    else el.setAttribute(k, v);
  }
  children.forEach(c => el.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return el;
}

function tagPill(label){
  const btn = create("button", {
    class: "pill",
    type: "button",
    "aria-pressed": String(state.selectedTag === label),
    onclick: () => { state.selectedTag = label; renderProjects(); renderTags(); },
  }, [label]);
  return btn;
}

function projectCard(p){
  const actions = create("div", { class: "card__actions" }, []);

  if (p.links?.github) actions.appendChild(create("a", { class: "link", href: p.links.github, target: "_blank", rel: "noreferrer" }, ["GitHub"]));
  if (p.links?.paper) actions.appendChild(create("a", { class: "link", href: p.links.paper, target: "_blank", rel: "noreferrer" }, ["PDF"]));

  const open = create("a", { class: "link", href: "#", onclick: (e) => { e.preventDefault(); openModal(p); } }, ["Details →"]);

  actions.appendChild(open);

  return create("article", { class: "card" }, [
    create("div", { class: "card__top" }, [
      create("div", {}, [
        create("h3", { class: "card__title" }, [p.title]),
        create("div", { class: "card__meta" }, [`${p.kind} • ${p.year}`]),
      ]),
    ]),
    create("p", { class: "card__desc" }, [p.summary]),
    create("div", { class: "tag-row" }, p.tags.map(t => create("span", { class: "tag" }, [t]))),
    actions,
  ]);
}

function renderTags(){
  const tags = uniq(["All", ...DATA.projects.flatMap(p => p.tags)]);
  const holder = $("#tagFilters");
  holder.innerHTML = "";
  tags.forEach(t => holder.appendChild(tagPill(t)));
}

function filterProjects(){
  const q = state.query.trim().toLowerCase();
  return DATA.projects.filter(p => {
    const matchesTag = state.selectedTag === "All" || p.tags.includes(state.selectedTag);
    const hay = (p.title + " " + p.summary + " " + p.tags.join(" ")).toLowerCase();
    const matchesQuery = !q || hay.includes(q);
    return matchesTag && matchesQuery;
  });
}

function renderProjects(){
  const grid = $("#projectsGrid");
  grid.innerHTML = "";
  const filtered = filterProjects();
  if (!filtered.length){
    grid.appendChild(create("div", { class: "card" }, [
      create("h3", { class: "card__title" }, ["No matches"]),
      create("p", { class: "card__desc" }, ["Try a different tag or search query."]),
    ]));
    return;
  }
  filtered.forEach(p => grid.appendChild(projectCard(p)));
}

function renderTimeline(){
  const holder = $("#timeline");
  holder.innerHTML = "";
  DATA.experience.forEach(r => {
    const head = create("div", { class: "role__head" }, [
      create("div", {}, [
        create("h3", { class: "role__title" }, [r.title]),
        create("div", { class: "role__org" }, [r.org]),
      ]),
      create("div", { class: "role__time" }, [r.time]),
    ]);

    const ul = create("ul", {}, r.bullets.map(b => create("li", {}, [b])));
    holder.appendChild(create("article", { class: "role" }, [head, ul]));
  });
}

function renderResearch(){
  const grid = $("#researchGrid");
  grid.innerHTML = "";
  DATA.research.forEach(r => {
    const actions = create("div", { class: "card__actions" }, []);
    if (r.links?.pdf) actions.appendChild(create("a", { class: "link", href: r.links.pdf, target: "_blank", rel: "noreferrer" }, ["PDF"]));
    if (r.links?.github) actions.appendChild(create("a", { class: "link", href: r.links.github, target: "_blank", rel: "noreferrer" }, ["GitHub"]));

    grid.appendChild(create("article", { class: "card" }, [
      create("h3", { class: "card__title" }, [r.title]),
      create("div", { class: "card__meta" }, [r.where]),
      create("p", { class: "card__desc" }, [r.summary]),
      create("div", { class: "tag-row" }, r.tags.map(t => create("span", { class: "tag" }, [t]))),
      actions,
    ]));
  });
}

function renderSkills(){
  const grid = $("#skillsGrid");
  grid.innerHTML = "";
  DATA.skills.forEach(s => {
    grid.appendChild(create("div", { class: "skill" }, [
      create("h3", {}, [s.title]),
      create("p", {}, [s.text]),
    ]));
  });
}

// ====== Modal ======
function openModal(project){
  const modal = $("#modal");
  const content = $("#modalContent");
  content.innerHTML = "";

  const title = create("h3", {}, [project.title]);
  const meta = create("div", { class: "card__meta" }, [`${project.kind} • ${project.year}`]);
  const desc = create("p", {}, [project.summary]);

  const tags = create("div", { class: "tag-row" }, project.tags.map(t => create("span", { class: "tag" }, [t])));

  const ul = create("ul", {}, (project.highlights || []).map(h => create("li", {}, [h])));

  const actions = create("div", { class: "card__actions" }, []);
  if (project.links?.github) actions.appendChild(create("a", { class: "btn btn--ghost", href: project.links.github, target: "_blank", rel: "noreferrer" }, ["View GitHub"]));
  if (project.links?.paper) actions.appendChild(create("a", { class: "btn btn--ghost", href: project.links.paper, target: "_blank", rel: "noreferrer" }, ["Open PDF"]));

  content.append(title, meta, desc, tags, create("h4", { style: "margin:14px 0 8px" }, ["Highlights"]), ul, actions);

  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  const modal = $("#modal");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function bindModal(){
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalOverlay").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $("#modal").getAttribute("aria-hidden") === "false") closeModal();
  });
}

// ====== Theme + Mobile nav ======
function applyTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function bindTheme(){
  const saved = localStorage.getItem("theme");
  if (saved) applyTheme(saved);

  $("#themeToggle").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(cur === "dark" ? "light" : "dark");
  });
}

function bindMobileNav(){
  const burger = $("#burger");
  const nav = $("#mobileNav");

  const setOpen = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    nav.setAttribute("aria-hidden", String(!open));
  };

  setOpen(false);

  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  $$("#mobileNav a").forEach(a => a.addEventListener("click", () => setOpen(false)));
}

// ====== Init ======
function init(){
  $("#year").textContent = String(new Date().getFullYear());

  renderTags();
  renderProjects();
  renderTimeline();
  renderResearch();
  renderSkills();

  $("#projectSearch").addEventListener("input", (e) => {
    state.query = e.target.value || "";
    renderProjects();
  });

  bindModal();
  bindTheme();
  bindMobileNav();
}

init();
