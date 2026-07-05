const projects = [
  {
    "title": "Instacart Intelligence Dashboard",
    "status": "Finished / Active Beta",
    "tier": "featured",
    "originContext": "Started as a curiosity about whether anyone had quantified Instacart performance at the highest level. That question turned into a personal operating system for tracking earnings, stores, OCR screenshots, pace, and market behavior around a $10,000 summer goal.",
    "origin": "realistically, the number #1 instacart shopper in the world, on a per hour and total grossed income basis, making like are there any sources referencing this.",
    "summary": "An OCR-assisted gig economy analytics dashboard that turns work screenshots and performance logs into store intelligence, earnings forecasts, and daily accountability.",
    "problem": "I had a $10,000 summer earnings goal and needed more than scattered screenshots to understand effort, pace, store quality, and long-term performance.",
    "built": "Built a daily-use dashboard with earnings tracking, weekly projections, OCR-assisted screenshot ingestion, store analytics, heatmaps, pace calculations, and behavioral feedback loops.",
    "tools": [
      "HTML",
      "JavaScript",
      "Local Storage",
      "JSON",
      "OCR",
      "Claude",
      "Claude Code"
    ],
    "lesson": "The most valuable tools are the ones that survive real use. Every major improvement came from daily friction, OCR bugs, mobile UX issues, and the need to reduce manual tracking.",
    "links": {
      "demo": "https://road-to-10k-nu.vercel.app/",
      "github": "https://github.com/aryaro623/road-to-10k",
      "caseStudy": "#",
      "demoVideo": "videos/instacart-walkthrough.mp4"
    }
  },
  {
    "title": "ARYVIS",
    "status": "Working Prototype",
    "tier": "featured",
    "originContext": "Started with the raw Iron Man Jarvis idea, then matured into a local-first AI command layer: Telegram interface, Ollama, FastAPI, reminders, memory, and modular workflow execution.",
    "origin": "i want to start a new project. i want to make a personal jarvis that i can talk to. jarvis from iron man. aligned with ary_os that i already built. i want it to be expansive, incorporating tools like n8n workflows to be able to text my jarvis on telegram and ask it to do stuff.",
    "summary": "A local-first AI assistant that uses Telegram, FastAPI, Ollama, SQLite, reminders, intent routing, and structured memory to act as a personal command layer.",
    "problem": "My reminders, projects, goals, trading notes, earnings data, and daily workflows were fragmented across different systems with no unified interface.",
    "built": "Implemented a FastAPI backend, Telegram bot interface, Ollama integration, SQLite persistence, reminder creation/cancellation, scheduled delivery, intent classification, health endpoint, and tool-routing architecture.",
    "tools": [
      "Python",
      "FastAPI",
      "SQLite",
      "Telegram Bot API",
      "Ollama",
      "Local LLMs"
    ],
    "lesson": "The hard part of AI assistants is not generating responses. It is deciding what should be remembered, when tools should execute, and how memory should be structured.",
    "links": {
      "demo": "#",
      "github": "https://github.com/aryaro623/ARYVIS",
      "caseStudy": "#",
      "demoVideo": "https://drive.google.com/file/d/1CmxPpRCy6pgiJueCgBNoE-_OqFWayBRn/view?usp=sharing"
    }
  },
  {
    "title": "Green Bean / ARY_OS",
    "status": "Advanced Prototype",
    "tier": "featured",
    "originContext": "Started from a brutally honest self-audit about trading, discipline, execution, delayed gratification, and the gap between having revelations and actually following through. That became a personal execution OS.",
    "origin": "i think it’s time i adjust my trading framework. i haven’t had a winning day since the beginning of march, and have only traded about 10 sessions since then... i’m not putting in enough work... i really need to lock in this summer... delayed gratification. stack the small wins to build up to the big one... I wish I was half as good executing as I am having these revelations and subsequently creating plans I never stick to.",
    "summary": "A personal execution OS prototype that combines daily logs, XP, trading workflows, film-room reflection, audio feedback, and PWA architecture to turn goals into structured action.",
    "problem": "I was good at making plans and identifying what needed to change, but needed a system that forced real-time execution instead of more reflection.",
    "built": "Built a PWA-style dashboard with a passphrase/boot flow, Champion Score, XP progression, daily logging, trading session capture, history, film-room reflection, local storage, service worker caching, and planned native notifications.",
    "tools": [
      "HTML",
      "CSS",
      "JavaScript",
      "PWA",
      "Service Worker",
      "Local Storage",
      "Claude Code"
    ],
    "lesson": "A dashboard needs boundaries. I learned to simplify around one clear execution score and separate daily accountability, trading, history, and reflection into cleaner modules.",
    "links": {
      "demo": "https://ary-os.netlify.app/",
      "github": "https://github.com/aryaro623/ary_os",
      "caseStudy": "#",
      "demoVideo": "videos/ary-os-walkthrough.mp4"
    }
  },
  {
    "title": "Quantopia",
    "status": "Tabled Prototype",
    "tier": "secondary",
    "originContext": "Started as a request for standout quant projects that could impress real recruiters, then evolved into a recursive AI-assisted learning platform for technical mastery and diagnostic progression.",
    "origin": "I'm a new coder who's struggling to land quant interviews, and I know basic CRUD apps and portfolio websites aren't enough anymore. I want to build three standout, technically impressive projects that companies would genuinely be impressed by... Do not suggest generic projects like to-do lists, blogs, weather apps, or clones unless they're solving a real user problem in a unique, useful way.",
    "summary": "An AI-assisted diagnostic learning platform concept for helping self-taught students learn quantitative finance through adaptive modules, gamified progression, and recursive development.",
    "problem": "Quant finance education felt fragmented, expensive, and inaccessible for students without elite pipelines or clear guidance.",
    "built": "Designed a 0–100 diagnostic mastery spectrum, modular curriculum architecture, gamified progression system, backend/frontend plans, Claude Code development workflow, and adaptive learning logic.",
    "tools": [
      "Python",
      "Flask",
      "SQLAlchemy",
      "HTML/CSS",
      "Claude Code",
      "ChatGPT",
      "Three.js planning"
    ],
    "lesson": "The vision was right, but the process needed to mature. I learned to validate user value before polish, branding, animations, or external validation.",
    "links": {
      "demo": "#",
      "github": "#",
      "caseStudy": "#",
      "demoVideo": "videos/quantopia-walkthrough.mp4"
    }
  },
  {
    "title": "GOAT DNA Tracker",
    "status": "Research Design / In Progress",
    "tier": "secondary",
    "originContext": "Started as a simple sports debate about Tiger Woods versus Jack Nicklaus. The deeper question became: can greatness be normalized across sports, eras, achievements, and uncertainty?",
    "origin": "jack nicklaus vs tiger woods purely statistics wise who is the goat (majors career wins world number 1s etc)",
    "summary": "A cross-sport greatness modeling framework that uses normalization, uncertainty, and statistical reasoning to compare elite athletes across fundamentally different sports.",
    "problem": "GOAT debates usually rely on subjective criteria, sport-specific bias, and inconsistent measurements across athletes and eras.",
    "built": "Created the research architecture, Python environment, folder structure, athlete schema concepts, sport-aware normalization logic, Bayesian framework plan, and Monte Carlo simulation roadmap.",
    "tools": [
      "Python",
      "Miniforge",
      "Conda",
      "VS Code",
      "Jupyter",
      "Bayesian Modeling"
    ],
    "lesson": "Good modeling starts before code. The hardest part was defining valid measurements and identifying hidden bias across different sports.",
    "links": {
      "demo": "#",
      "github": "#",
      "caseStudy": "#",
      "demoVideo": "videos/goat-dna-walkthrough.mp4"
    }
  },
  {
    "title": "Budget Flow",
    "status": "Working Prototype",
    "tier": "secondary",
    "originContext": "Started with a very specific college budgeting problem: one $500 monthly allowance, essential categories, credit card debt, and a rule that leftover cash should flow into investments.",
    "origin": "I want you to build me a budgeting tool that resembles monarchs, budgeting system, nothing verbatim... I am currently a college student, and receive $500 a month from my dad as allowance... categories include gas groceries utilities partying etc... I want the remaining chunk of the $500 no matter what it is per month to go towards my investment portfolio... I currently have $500 in credit card debt...",
    "summary": "A custom personal finance dashboard that turns a fixed monthly allowance into a visual cash-flow system for budgeting, debt repayment, and investment allocation.",
    "problem": "As a college student managing a fixed allowance, debt repayment, and investing goals, generic budgeting tools did not match my actual workflow.",
    "built": "Built a Next.js budgeting prototype with category allocation, cash-flow visualization, debt payoff projection, Sankey diagrams, historical month tracking, synchronized state, settings, and local-first persistence.",
    "tools": [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "IndexedDB",
      "Tailwind",
      "Plotly"
    ],
    "lesson": "State management became the project. I learned that architecture, data models, and a single source of truth matter more as dashboards grow.",
    "links": {
      "demo": "#",
      "github": "#",
      "caseStudy": "#",
      "demoVideo": "https://drive.google.com/file/d/1jwcRRVWbeZFpDHHNhU38QaOW2mRX7QOJ/view?usp=sharing"
    }
  }
];

const boot = document.getElementById("boot-screen");
const sike = document.getElementById("sike-screen");
const site = document.getElementById("site");
const curtainLeft = document.getElementById("curtain-left");
const curtainRight = document.getElementById("curtain-right");
const form = document.getElementById("access-form");
const authLog = document.getElementById("auth-log");
const cursorGlow = document.getElementById("cursor-glow");

document.body.classList.add("locked");

function createLink(label, url) {
  const a = document.createElement("a");
  const privateRepos = [
    "https://github.com/aryaro623/road-to-10k",
    "https://github.com/aryaro623/ARYVIS"
  ];

  if (label.includes("GITHUB") && privateRepos.includes(url)) {
    a.textContent = "GITHUB_PRIVATE";
    a.title = "Repository currently private";
  } else {
    a.textContent = label;
  }

  a.href = url || "#";
  if (!url || url === "#") {
    a.classList.add("disabled");
    a.setAttribute("aria-disabled", "true");
  } else {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  return a;
}


function createVideoLink(project) {
  const a = document.createElement("a");
  const videoUrl = project.links?.demoVideo || "#";
  a.textContent = "WATCH_DEMO";
  a.href = videoUrl;
  if (!videoUrl || videoUrl === "#") {
    a.classList.add("disabled");
    a.setAttribute("aria-disabled", "true");
  } else {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  return a;
}

function renderProjects() {
  const featured = document.getElementById("featured-projects");
  const secondary = document.getElementById("secondary-projects");

  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${project.title} details`);

    const linkRow = document.createElement("div");
    linkRow.className = "project-link-row";
    const demo = createLink("LIVE_DEMO", project.links.demo);
    const video = createVideoLink(project);
    const github = createLink("GITHUB", project.links.github);
    const caseStudy = createLink("CASE_STUDY", project.links.caseStudy);
    [demo, video, github, caseStudy].forEach(link => {
      link.classList.add("project-link");
      link.addEventListener("click", (event) => event.stopPropagation());
      linkRow.appendChild(link);
    });

    card.innerHTML = `
      <p class="project-status">${project.status}</p>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="project-tools">
        ${project.tools.slice(0, 4).map(tool => `<span>${tool}</span>`).join("")}
      </div>
      <span class="open-label">OPEN_FILE_${String(index + 1).padStart(2, "0")}</span>
    `;
    card.insertBefore(linkRow, card.querySelector(".open-label"));

    card.addEventListener("click", () => openModal(project));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openModal(project);
    });

    if (project.tier === "featured") featured.appendChild(card);
    else secondary.appendChild(card);
  });
}

function renderOrigins() {
  const originList = document.getElementById("origin-list");
  projects.forEach(project => {
    const item = document.createElement("article");
    item.className = "origin-item";
    item.innerHTML = `
      <div>
        <p class="status">${project.status}</p>
        <h3>${project.title}</h3>
      </div>
      <blockquote>${project.originContext}</blockquote>
    `;
    originList.appendChild(item);
  });
}

function runIntro() {
  const lines = [
    "checking credentials...",
    "decrypting portfolio index...",
    "access decision: denied",
    "override detected...",
    "wait."
  ];

  authLog.innerHTML = "";
  lines.forEach((line, idx) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.textContent = `> ${line}`;
      authLog.appendChild(div);
    }, idx * 320);
  });

  setTimeout(() => {
    boot.classList.add("hidden");
    sike.classList.add("active");
  }, 1900);

  setTimeout(() => {
    sike.classList.remove("active");
    curtainLeft.classList.add("active");
    curtainRight.classList.add("active");
    site.classList.add("revealed");
  }, 2850);

  setTimeout(() => {
    curtainLeft.classList.add("open");
    curtainRight.classList.add("open");
  }, 2950);

  setTimeout(() => {
    curtainLeft.classList.remove("active");
    curtainRight.classList.remove("active");
    document.body.classList.remove("locked");
    revealObserver();
  }, 4300);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runIntro();
});

function openModal(project) {
  document.getElementById("modal-status").textContent = project.status;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-summary").textContent = project.summary;
  document.getElementById("modal-problem").textContent = project.problem;
  document.getElementById("modal-built").textContent = project.built;
  document.getElementById("modal-tools").textContent = project.tools.join(" / ");
  document.getElementById("modal-lesson").textContent = project.lesson;
  document.getElementById("modal-origin").textContent = project.origin;

  const modalLinks = document.getElementById("modal-links");
  modalLinks.innerHTML = "";
  modalLinks.appendChild(createLink("LIVE_DEMO", project.links.demo));
  modalLinks.appendChild(createVideoLink(project));
  modalLinks.appendChild(createLink("GITHUB_REPO", project.links.github));
  modalLinks.appendChild(createLink("CASE_STUDY", project.links.caseStudy));

  const modal = document.getElementById("project-modal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
}

document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function revealObserver() {
  const sections = Array.from(document.querySelectorAll(".reveal"));

  function updateReveals() {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const entersView = rect.top < viewportHeight * 0.88 && rect.bottom > viewportHeight * 0.12;

      if (entersView) {
        section.classList.add("in-view");
      } else {
        section.classList.remove("in-view");
      }
    });
  }

  updateReveals();
  window.addEventListener("scroll", updateReveals, { passive: true });
  window.addEventListener("resize", updateReveals);
}

document.addEventListener("mousemove", (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.opacity = "1";
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

document.addEventListener("mouseleave", () => {
  if (cursorGlow) cursorGlow.style.opacity = "0";
});

renderProjects();
renderOrigins();

// If someone disables or skips the intro manually in dev, still reveal content.
setTimeout(() => {
  document.querySelector(".hero")?.classList.add("in-view");
}, 300);


// V4: subtle mouse tilt for project cards and operator card
function attachTilt(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener("mousemove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -6;
      el.style.transform = `translateY(-6px) rotateX(${y}deg) rotateY(${x}deg)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

setTimeout(() => {
  attachTilt(".project-card");
}, 200);
