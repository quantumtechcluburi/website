const SITE = {
  clubName: "Quantum Tech Club",
  numbers: {
    members: 60,
    membersBig: 60,
    projects: 4,
    events: 6,
    workshops: 3,
  },
  links: {
    email: "quantumtechcluburi@gmail.com",
    instagram: "https://www.instagram.com/quantumtechclub.uri/",
    interestForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSftxDyaVzKB_nCT88hQTJkKmbJ-tHtZYNhCINDfICO9A8xuGg/viewform?usp=header",
    feedbackForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSdv2BLMbgFet0sQyglNOvpgxpHw0gePP94R7OScP9gAvMetkQ/viewform?usp=publish-editor",
  },
  nextEvent: {
    title: "Welcome to the Quantum Tech Club @The University of Rhode Island",
    datetime: "2026-03-11T18:00:00-04:00",
    location: "Location TBD",
  },
};

const MODALS = {
  mission: {
    title: "Mission",
    body: () => `
      <p><strong>${SITE.clubName}</strong> exists to make quantum technologies approachable for students at URI.</p>
      <h4>What we do</h4>
      <ul>
        <li><strong>Meetings</strong>: short talks + group discussion that start from fundamentals.</li>
        <li><strong>Workshops</strong>: hands-on sessions where we build or explore something together.</li>
        <li><strong>Projects</strong>: small teams that ship demos, experiments, and tutorials.</li>
      </ul>
      <h4>When we meet</h4>
      <p>We’ll plug in the exact day, time, and room here (for now, think “weekly meeting on campus”).</p>
      <h4>Who it’s for</h4>
      <p>Anyone who’s curious about quantum technologies. If you’re new, we’ll help you ramp up. If you’re experienced, you’ll find peers to build and research with.</p>
      <div class="modal-actions">
        <a class="button button--primary" href="#involved" data-modal-close>How to join</a>
        <button class="button button--ghost" data-open-modal="contact">Contact / links</button>
      </div>
    `,
  },
  events: {
    title: "Give a talk",
    body: () => `
      <p>We host guest speakers throughout the semester. Whether you're a professor, researcher, industry professional, or fellow student — we'd love to hear from you.</p>
      <h4>What makes a great talk</h4>
      <ul>
        <li><strong>10–20 minutes</strong>: focused topic with room for Q&A</li>
        <li><strong>Beginner-accessible</strong>: define key terms as you go</li>
        <li><strong>Interactive</strong>: demos, live coding, or audience questions welcome</li>
      </ul>
      <h4>How to get on the schedule</h4>
      <p>Send a short abstract and your preferred date(s) to an E-Board member or reach out below.</p>
      <div class="modal-actions">
        <button class="button button--ghost" data-open-modal="contact">Contact us</button>
      </div>
    `,
  },
  how: {
    title: "How to get involved (checklist)",
    body: () => `
      <h4>Fast path</h4>
      <ul>
        <li>Show up to a meeting (no prep required).</li>
        <li>Introduce yourself to an officer or a returning member.</li>
        <li>Pick one: join a project, attend workshops, or just hang out and learn.</li>
      </ul>
      <h4>What to expect your first time</h4>
      <ul>
        <li>Beginner-safe explanations (we define terms as we go).</li>
        <li>Optional group activities (you can observe if you want).</li>
        <li>People who will help you find your footing.</li>
      </ul>
      <div class="modal-actions">
        <a class="button button--primary" href="${SITE.links.interestForm}" target="_blank" rel="noreferrer">Interest form</a>
        <button class="button button--ghost" data-open-modal="contact">Discord / socials</button>
      </div>
    `,
  },
  resources: {
    title: "Resources & links",
    body: () => `
      <p>Key links for staying in touch with ${SITE.clubName} and exploring quantum tech.</p>
      <h4>Club links</h4>
      <ul>
        <li><strong>Email</strong>: <a href="mailto:${SITE.links.email}">${SITE.links.email}</a></li>
        <li><strong>Instagram</strong>: <a href="${SITE.links.instagram}" target="_blank" rel="noreferrer">${SITE.links.instagram}</a></li>
      </ul>
      <h4>Starter learning list</h4>
      <ul>
        <li>One beginner-friendly video/playlist you recommend</li>
        <li>A reading list (1–3 links max)</li>
        <li>A “first project” idea</li>
      </ul>
    `,
  },
  faq: {
    title: "FAQ",
    body: () => `
      <h4>Do I need experience?</h4>
      <p>No. We’re designed to be friendly to first-timers.</p>
      <h4>What should I bring?</h4>
      <p>Just yourself. A laptop helps for workshops, but it’s not always required.</p>
      <h4>What if I can’t attend every week?</h4>
      <p>That’s fine—come when you can. Projects have flexible roles.</p>
    `,
  },
  culture: {
    title: "Club culture",
    body: () => `
      <p>We aim for an environment where people can ask questions without fear.</p>
      <ul>
        <li><strong>No gatekeeping</strong>: we explain jargon and define terms.</li>
        <li><strong>Participation options</strong>: talk, pair, observe, or contribute asynchronously.</li>
        <li><strong>Kind feedback</strong>: we focus on improvement, not ego.</li>
      </ul>
    `,
  },
  projects: {
    title: "What we build",
    body: () => `
      <p>Pick a track and ship something tangible. Replace these with your real project ideas.</p>
      <h4>Example tracks</h4>
      <ul>
        <li><strong>Workshop builds</strong>: small demos you finish in one meeting</li>
        <li><strong>Semester projects</strong>: team projects with roles (dev, design, research, docs)</li>
        <li><strong>Speaker series</strong>: short talks from members and guests</li>
      </ul>
    `,
  },
  workshop: {
    title: "Teach a workshop",
    body: () => `
      <p>Run a hands-on session where attendees build, code, or experiment alongside you.</p>
      <h4>Workshop format</h4>
      <ul>
        <li><strong>30–60 minutes</strong>: guided walkthrough with exercises</li>
        <li><strong>Bring materials</strong>: slides, starter code, or a shared notebook</li>
        <li><strong>Any level</strong>: let us know the target audience (beginner, intermediate, or advanced)</li>
      </ul>
      <h4>Topics we're looking for</h4>
      <ul>
        <li>Quantum programming frameworks (Qiskit, Cirq, PennyLane)</li>
        <li>Quantum algorithms and simulations</li>
        <li>Hardware, sensing, or communication concepts</li>
        <li>Career skills: research methods, technical writing, poster design</li>
      </ul>
      <div class="modal-actions">
        <button class="button button--ghost" data-open-modal="contact">Propose a workshop</button>
      </div>
    `,
  },
  careers: {
    title: "Career opportunities",
    body: () => `
      <p>Connect URI students with real opportunities in quantum tech and related fields.</p>
      <h4>What you can share</h4>
      <ul>
        <li><strong>Internships</strong>: summer or semester-long positions</li>
        <li><strong>Research roles</strong>: lab assistants, undergraduate researchers</li>
        <li><strong>Industry jobs</strong>: entry-level or early-career openings</li>
        <li><strong>Fellowships & programs</strong>: quantum-focused cohorts or funding</li>
      </ul>
      <h4>How to post</h4>
      <p>Send us a link or description and we'll share it with our members through meetings and our channels.</p>
      <div class="modal-actions">
        <button class="button button--ghost" data-open-modal="contact">Share a listing</button>
      </div>
    `,
  },
  newsletter: {
    title: "Contribute to the newsletter",
    body: () => `
      <p>We want everyone’s ideas on what to feature next.</p>
      <h4>Good submission ideas</h4>
      <ul>
        <li>Interesting internships or job postings</li>
        <li>Recent advances from academia or industry (short summaries only)</li>
        <li>Useful learning resources: tutorials, videos, papers, tools</li>
        <li>Project highlights, club wins, and hackathon opportunities</li>
      </ul>
      <h4>Submission format</h4>
      <ul>
        <li>Title + 2–4 sentence blurb</li>
        <li>Optional link(s) for readers to explore</li>
        <li>Your name and preferred display credit (or anonymous)</li>
      </ul>
      <div class="modal-actions">
        <a class="button button--primary" href="mailto:${SITE.links.email}?subject=Quantum%20Tech%20Club%20Newsletter%20Submission" rel="noreferrer">Email your idea</a>
        <button class="button button--ghost" data-open-modal="contact">Contact the team</button>
      </div>
    `,
  },
  members: {
    title: "Member count",
    body: () => `
      <p>Right now this site uses placeholder numbers. Tell me your real count and we’ll update the counters instantly.</p>
      <h4>Common ways clubs count</h4>
      <ul>
        <li>Active in the last 30–60 days</li>
        <li>Attended at least one meeting this semester</li>
        <li>Signed up for the mailing list (usually larger)</li>
      </ul>
    `,
  },
  impact: {
    title: "Club impact",
    body: () => `
      <p>Add outcomes that matter to your club. A few ideas:</p>
      <ul>
        <li>Members who joined research / internships</li>
        <li>Projects showcased at a fair</li>
        <li>Cross-club collaborations</li>
      </ul>
    `,
  },
  testimonials: {
    title: "Submit Feedback",
    body: () => `
      <p>For now, we are collecting feedback via the form link below.</p>
      <div class="modal-actions">
        <a class="button button--primary" href="${SITE.links.feedbackForm}" target="_blank" rel="noreferrer">Form</a>
        <button class="button button--ghost" data-modal-close>Close</button>
      </div>
    `,
  },
  contact: {
    title: "Contact",
    body: () => `
      <strong>Reach out to the Quantum Tech Club team at The University of Rhode Island.</strong>
      <ul>
        <li><strong>Email</strong>: <a href="mailto:${SITE.links.email}">${SITE.links.email}</a></li>
        <li><strong>Instagram</strong>: <a href="${SITE.links.instagram}" target="_blank" rel="noreferrer">${SITE.links.instagram}</a></li>
      </ul>
      <div class="modal-actions">
        <a class="button button--primary" href="${SITE.links.interestForm}" target="_blank" rel="noreferrer">Join Club</a>
        <button class="button button--ghost" data-modal-close>Close</button>
      </div>
    `,
  },
  "eboard-president": {
    title: "President",
    body: () => `
      <p><strong>Name</strong>: TBD</p>
      <p><strong>Focus</strong>: setting vision, partnerships, and making sure the club feels welcoming.</p>
      <p class="muted">Send me the name, pronouns (optional), major/year, and 2–3 sentence bio to replace this.</p>
    `,
  },
  "eboard-vp": {
    title: "Vice President",
    body: () => `
      <p><strong>Name</strong>: TBD</p>
      <p><strong>Focus</strong>: logistics, planning, and keeping projects moving.</p>
      <p class="muted">We can also add office hours or a “how to reach me” line.</p>
    `,
  },
  "eboard-treasurer": {
    title: "Treasurer",
    body: () => `
      <p><strong>Name</strong>: TBD</p>
      <p><strong>Focus</strong>: funding, budgets, and making resources accessible.</p>
      <p class="muted">If you have sponsors or funding goals, we can add them here.</p>
    `,
  },
  "eboard-secretary": {
    title: "Secretary",
    body: () => `
      <p><strong>Name</strong>: TBD</p>
      <p><strong>Focus</strong>: notes, announcements, and keeping everyone in the loop.</p>
    `,
  },
};

function $(sel, root = document) {
  return root.querySelector(sel);
}
function $all(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

/* Ambient background motion */
function initAmbientMotion() {
  const root = document.documentElement;
  if (!root || prefersReducedMotion()) return;

  let rafId = null;
  let scrollY = window.scrollY || 0;
  let ambientX = 0;
  let ambientY = 0;

  const render = () => {
    rafId = null;
    root.style.setProperty("--scroll-y", `${scrollY.toFixed(1)}px`);
    root.style.setProperty("--ambient-x", `${ambientX.toFixed(1)}px`);
    root.style.setProperty("--ambient-y", `${ambientY.toFixed(1)}px`);
  };

  const queueRender = () => {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(render);
  };

  const onScroll = () => {
    scrollY = window.scrollY || 0;
    queueRender();
  };

  const onPointerMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    ambientX = x * 36;
    ambientY = y * 26;
    queueRender();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("resize", queueRender, { passive: true });
  queueRender();
}

/* Hero logo sizing */
function initHeroLogoSizing() {
  const heading = document.querySelector(".hero__heading");
  const logo = heading?.querySelector(".hero__logo");
  const title = heading?.querySelector("h1");
  if (!heading || !logo || !title) return;

  let rafId = null;
  const syncHeroLogoToTitleHeight = () => {
    const titleHeight = Math.round(title.getBoundingClientRect().height);
    if (!titleHeight) return;
    const headingWidth = Math.round(heading.getBoundingClientRect().width);
    const isCompact = window.innerWidth < 980;
    const minSize = isCompact ? 84 : 120;
    const maxSize = isCompact ? 144 : 188;
    const widthLimit = Math.max(minSize, Math.round(headingWidth * (isCompact ? 0.3 : 0.28)));
    const target = clamp(
      Math.round(titleHeight * (isCompact ? 1 : 1.22)),
      minSize,
      Math.min(maxSize, widthLimit),
    );
    logo.style.width = `${target}px`;
    logo.style.height = `${target}px`;
  };

  const queueSync = () => {
    if (rafId !== null) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      rafId = null;
      syncHeroLogoToTitleHeight();
    });
  };

  queueSync();
  window.addEventListener("resize", queueSync, { passive: true });

  if (document.fonts?.ready) {
    document.fonts.ready.then(queueSync).catch(() => { });
  }

  const ro = new ResizeObserver(queueSync);
  ro.observe(title);
}

/* FAQ accordion */
function initFaqAccordion() {
  const items = $all("[data-faq-item]");
  if (!items.length) return;

  items.forEach((item) => {
    const button = item.querySelector("[data-faq-toggle]");
    const panel = item.querySelector(".faq-item__panel");
    if (!button || !panel) return;

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      items.forEach((other) => {
        const otherBtn = other.querySelector("[data-faq-toggle]");
        const otherPanel = other.querySelector(".faq-item__panel");
        if (!otherBtn || !otherPanel) return;
        otherBtn.setAttribute("aria-expanded", "false");
        otherPanel.hidden = true;
        other.classList.remove("is-open");
      });

      if (isOpen) return;
      button.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      item.classList.add("is-open");
    });
  });
}

/* Modal */
const modalEl = document.querySelector("[data-modal]");
const modalTitleEl = document.querySelector(".modal__title");
const modalBodyEl = document.querySelector("[data-modal-body]");
let lastActiveEl = null;

function setModalContent(key) {
  const modal = MODALS[key];
  if (!modal) {
    modalTitleEl.textContent = "Not found";
    modalBodyEl.innerHTML = `<p>Modal content key <code>${key}</code> doesn’t exist yet.</p>`;
    return;
  }
  modalTitleEl.textContent = modal.title;
  modalBodyEl.innerHTML = typeof modal.body === "function" ? modal.body() : modal.body;
}

function openModal(key) {
  if (!modalEl) return;
  lastActiveEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  setModalContent(key);
  modalEl.dataset.open = "true";
  modalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus first interactive element if present.
  const focusTarget =
    modalEl.querySelector("a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])") ||
    modalEl.querySelector(".modal__dialog");
  focusTarget?.focus?.();
}

function closeModal() {
  if (!modalEl) return;
  modalEl.dataset.open = "false";
  modalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modalBodyEl.innerHTML = "";
  if (lastActiveEl) lastActiveEl.focus();
}

document.addEventListener("click", (e) => {
  const t = e.target;
  if (!(t instanceof HTMLElement)) return;

  const openKey = t.closest("[data-open-modal]")?.getAttribute("data-open-modal");
  if (openKey) {
    openModal(openKey);
    return;
  }

  if (t.closest("[data-modal-close]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalEl?.dataset.open === "true") closeModal();
});

/* Topbar elevate on scroll */
const topbar = document.querySelector("[data-elevate-on-scroll]");
function updateTopbar() {
  if (!topbar) return;
  topbar.dataset.elevated = window.scrollY > 6 ? "true" : "false";
}
window.addEventListener("scroll", updateTopbar, { passive: true });
updateTopbar();

/* Mobile menu */
const mobileMenuBtn = document.querySelector("[data-mobile-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
function closeMobileMenu() {
  if (!mobileMenuBtn || !mobileMenu) return;
  mobileMenu.hidden = true;
  mobileMenuBtn.setAttribute("aria-expanded", "false");
}
function toggleMobileMenu() {
  if (!mobileMenuBtn || !mobileMenu) return;
  const nextOpen = mobileMenu.hidden === true;
  mobileMenu.hidden = !nextOpen;
  mobileMenuBtn.setAttribute("aria-expanded", nextOpen ? "true" : "false");
}
mobileMenuBtn?.addEventListener("click", toggleMobileMenu);
document.addEventListener("click", (e) => {
  const t = e.target;
  if (!(t instanceof HTMLElement)) return;
  if (t.closest("[data-mobile-menu-button]")) return;
  if (t.closest("[data-mobile-menu]")) return;
  closeMobileMenu();
});
$all(".mobile-menu__link").forEach((a) => {
  a.addEventListener("click", () => {
    closeMobileMenu();
  });
});

/* Scroll reveal */
function initReveal() {
  const items = $all(".reveal");
  if (!items.length) return;

  if (prefersReducedMotion()) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
  );

  items.forEach((el) => io.observe(el));
}

function initSectionPopups() {
  const sections = $all("main .section");
  if (!sections.length) return;

  sections.forEach((section, idx) => {
    section.classList.add("section-pop");
    section.style.transitionDelay = `${Math.min(idx * 40, 220)}ms`;
  });

  if (prefersReducedMotion()) {
    sections.forEach((section) => {
      section.classList.add("is-visible");
      section.style.transitionDelay = "0ms";
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.16, rootMargin: "0px 0px -12% 0px" },
  );

  sections.forEach((section) => io.observe(section));
}

/* Count up */
function animateCount(el, to, duration = 900) {
  const from = 0;
  const start = performance.now();
  const reduce = prefersReducedMotion();
  if (reduce) {
    el.textContent = String(to);
    return;
  }

  function tick(now) {
    const t = clamp((now - start) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.round(from + (to - from) * eased);
    el.textContent = String(val);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initCountups() {
  const map = {
    members: SITE.numbers.members,
    membersBig: SITE.numbers.membersBig,
    projects: SITE.numbers.projects,
    events: SITE.numbers.events,
    workshops: SITE.numbers.workshops,
  };

  const els = $all("[data-countup]");
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        const key = el.getAttribute("data-countup");
        const to = map[key] ?? 0;
        animateCount(el, to);
        io.unobserve(el);
      }
    },
    { threshold: 0.25 },
  );

  els.forEach((el) => io.observe(el));
}

/* Next meeting countdown */
function initCountdown() {
  const root = document.querySelector("[data-next-event]");
  if (!root || !SITE.nextEvent || !SITE.nextEvent.datetime) return;

  const titleEl = root.querySelector("[data-next-title]");
  const metaEl = root.querySelector("[data-next-meta]");
  const parts = {
    days: root.querySelector('[data-countdown-part="days"]'),
    hours: root.querySelector('[data-countdown-part="hours"]'),
    minutes: root.querySelector('[data-countdown-part="minutes"]'),
    seconds: root.querySelector('[data-countdown-part="seconds"]'),
  };

  const eventDate = new Date(SITE.nextEvent.datetime);
  if (Number.isNaN(eventDate.getTime())) return;

  if (titleEl) titleEl.textContent = SITE.nextEvent.title;
  if (metaEl) {
    const dateStr = eventDate.toLocaleString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    metaEl.textContent = `${dateStr} • ${SITE.nextEvent.location}`;
  }

  function fitTextToLines(el, minSizePx = 10) {
    if (!el || !el.textContent.trim()) return;
    el.style.fontSize = "";
    const computed = getComputedStyle(el).fontSize;
    let sizePx = parseFloat(computed) || 14;
    const step = 1;
    el.style.fontSize = sizePx + "px";
    while (el.scrollHeight > el.clientHeight + 1 && sizePx > minSizePx) {
      sizePx = Math.max(minSizePx, sizePx - step);
      el.style.fontSize = sizePx + "px";
    }
  }

  function fitNextCardSize() {
    if (window.innerWidth <= 660) {
      root.style.width = "";
      root.style.maxWidth = "";
      return;
    }
    const containerEl = root.closest(".container");
    const maxW = containerEl ? containerEl.offsetWidth : 760;
    root.style.width = "fit-content";
    root.style.maxWidth = maxW + "px";
  }

  function fitNextCardText() {
    const isWide = window.innerWidth > 660;
    const titleMin = isWide ? 15 : 11;
    const metaMin = isWide ? 13 : 10;
    fitTextToLines(titleEl, titleMin);
    fitTextToLines(metaEl, metaMin);
  }

  function updateNextCard() {
    fitNextCardSize();
    fitNextCardText();
  }

  updateNextCard();

  let resizeT = null;
  window.addEventListener("resize", () => {
    if (resizeT) clearTimeout(resizeT);
    resizeT = setTimeout(updateNextCard, 100);
  });

  function render(diffMs) {
    if (!parts.days || !parts.hours || !parts.minutes || !parts.seconds) return;
    if (diffMs <= 0) {
      parts.days.textContent = "0";
      parts.hours.textContent = "0";
      parts.minutes.textContent = "0";
      parts.seconds.textContent = "0";
      if (metaEl) {
        metaEl.textContent = "Happening now or recently finished.";
        updateNextCard();
      }
      return;
    }
    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    parts.days.textContent = String(days);
    parts.hours.textContent = String(hours).padStart(2, "0");
    parts.minutes.textContent = String(minutes).padStart(2, "0");
    parts.seconds.textContent = String(seconds).padStart(2, "0");
  }

  function tick() {
    const now = new Date();
    const diff = eventDate - now;
    render(diff);
  }

  tick();
  setInterval(tick, 1000);
}

/* Carousel controls */
function initCarousel() {
  const root = document.querySelector("[data-carousel]");
  const track = document.querySelector("[data-carousel-track]");
  const prev = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");
  if (!root || !track || !prev || !next) return;

  function scrollByCard(dir) {
    const first = track.querySelector(".quote-card");
    const cardW = first ? first.getBoundingClientRect().width : 280;
    track.scrollBy({ left: dir * (cardW + 16), behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }

  prev.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
}

/* Section scroll motion */
function initSectionScrollMotion() {
  const sections = $all("main .section");
  if (!sections.length) return;

  sections.forEach((section) => {
    section.dataset.scrollMotion = "on";
  });

  const zoomState = new WeakMap();
  let lastScrollY = window.scrollY || 0;
  let rafId = null;
  const render = () => {
    rafId = null;
    const vh = window.innerHeight || 1;
    const isMobile = window.innerWidth < 900;
    const currentScrollY = window.scrollY || 0;
    const direction =
      currentScrollY > lastScrollY + 0.5 ? 1 : currentScrollY < lastScrollY - 0.5 ? -1 : 0;
    lastScrollY = currentScrollY;

    const baseZoom = isMobile ? 0.96 : 0.93;
    const zoomBoost = isMobile ? 0.08 : 0.12;
    const shiftAmount = isMobile ? 14 : 20;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const progress = clamp((centerY - vh / 2) / (vh * 0.78), -1, 1);
      const focusTarget = 1 - Math.abs(progress);
      const prevFocus = zoomState.get(section) ?? focusTarget;
      let focus = focusTarget;

      if (direction > 0) {
        // Scrolling down: keep/latch zoom once a section has been emphasized.
        focus = Math.max(prevFocus, focusTarget);
      } else if (direction < 0) {
        // Scrolling up:
        // - while section is above center (progress < 0), keep it emphasized.
        // - after crossing center (progress >= 0), allow it to de-zoom.
        focus = progress < 0 ? Math.max(prevFocus, focusTarget) : Math.min(prevFocus, focusTarget);
      }

      zoomState.set(section, focus);

      const zoom = baseZoom + focus * zoomBoost;
      const shift = -progress * shiftAmount;
      const rotate = progress * 3.2;
      const glowOpacity = 0.14 + focus * 0.24;
      const afterOpacity = 0.08 + focus * 0.2;

      section.style.setProperty("--section-scroll", `${shift.toFixed(2)}px`);
      section.style.setProperty("--section-rotate", `${rotate.toFixed(2)}deg`);
      section.style.setProperty("--box-zoom", zoom.toFixed(3));
      section.style.setProperty("--section-focus", focus.toFixed(3));
      section.style.setProperty("--section-glow-opacity", glowOpacity.toFixed(3));
      section.style.setProperty("--section-after-opacity", afterOpacity.toFixed(3));
    });
  };

  const queueRender = () => {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(render);
  };

  window.addEventListener("scroll", queueRender, { passive: true });
  window.addEventListener("resize", queueRender, { passive: true });
  queueRender();
}

/* E-board equal height: tallest card rules all */
function initEboardEqualHeights() {
  const section = document.getElementById("eboard");
  const grid = section?.querySelector(".people-grid");
  const cards = grid?.querySelectorAll(".person-card") || [];
  if (!cards.length) return;

  const applyEqualHeights = () => {
    const useEqualHeight = window.matchMedia("(max-width: 980px)").matches;
    cards.forEach((c) => {
      c.style.minHeight = "";
    });
    if (!useEqualHeight) return;
    let max = 0;
    cards.forEach((card) => {
      const h = card.offsetHeight;
      if (h > max) max = h;
    });
    if (max > 0) {
      cards.forEach((card) => {
        card.style.minHeight = max + "px";
      });
    }
  };

  applyEqualHeights();
  window.addEventListener("load", applyEqualHeights);
  window.addEventListener("resize", () => {
    clearTimeout(window._eboardEqualHeightT);
    window._eboardEqualHeightT = setTimeout(applyEqualHeights, 50);
  });
}

function initFeedbackLoop() {
  const track = document.querySelector(".feedback-quotes__track");
  if (!track) return;
  const origCards = [...track.querySelectorAll(".quote-card")];
  const n = origCards.length;
  if (n < 2) return;

  const cloneBatch = (cards) =>
    cards.map((c) => {
      const cl = c.cloneNode(true);
      cl.classList.remove("reveal");
      cl.removeAttribute("style");
      cl.setAttribute("aria-hidden", "true");
      return cl;
    });

  for (let i = 0; i < 3; i++) cloneBatch(origCards).forEach((c) => track.appendChild(c));
  for (let i = 0; i < 3; i++) cloneBatch(origCards).reverse().forEach((c) => track.insertBefore(c, track.firstChild));

  const measure = () => {
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const card = track.querySelector(".quote-card");
    const cardW = card.offsetWidth + gap;
    return { setW: cardW * n, cardW, rawCardW: card.offsetWidth };
  };

  let { setW, cardW, rawCardW } = measure();
  const centerOffset = () => setW * 3 - (track.offsetWidth / 2) + (rawCardW / 2);
  track.style.scrollBehavior = "auto";
  track.scrollLeft = centerOffset();
  track.style.scrollBehavior = "";

  let timer = 0;
  const reposition = () => {
    const sl = track.scrollLeft;
    const lo = setW;
    const hi = setW * 5;
    if (sl >= lo && sl <= hi) return;
    track.style.scrollBehavior = "auto";
    track.style.scrollSnapType = "none";
    if (sl < lo) track.scrollLeft = sl + setW * 3;
    else track.scrollLeft = sl - setW * 3;
    requestAnimationFrame(() => {
      track.style.scrollBehavior = "";
      track.style.scrollSnapType = "";
    });
  };

  track.addEventListener("scroll", () => {
    clearTimeout(timer);
    timer = setTimeout(reposition, 120);
  });

  window.addEventListener("resize", () => {
    ({ setW, cardW, rawCardW } = measure());
    track.style.scrollBehavior = "auto";
    track.scrollLeft = centerOffset();
    track.style.scrollBehavior = "";
  });

  const prevBtn = document.querySelector("[data-quotes-prev]");
  const nextBtn = document.querySelector("[data-quotes-next]");
  const scrollByCard = (dir) => {
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const cardW = track.querySelector(".quote-card").offsetWidth + gap;
    track.scrollBy({ left: dir * cardW, behavior: "smooth" });
  };
  if (prevBtn) prevBtn.addEventListener("click", () => scrollByCard(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => scrollByCard(1));
}

function initBackFaceFit() {
  const cards = $all("#eboard .person-card");
  if (!cards.length) return;

  const fitBack = (card) => {
    const back = card.querySelector(".person-card__face--back");
    if (!back) return;
    const name = back.querySelector(".person-card__name");
    const dts = back.querySelectorAll(".person-card__details dt");
    const dds = back.querySelectorAll(".person-card__details dd");
    const flip = back.querySelector(".person-card__flip");
    const details = back.querySelector(".person-card__details");
    const allText = [name, ...dts, ...dds].filter(Boolean);

    allText.forEach((el) => { el.style.fontSize = ""; });
    if (flip) { flip.style.width = ""; flip.style.height = ""; flip.style.fontSize = ""; }
    if (details) details.style.gap = "";
    back.style.gap = "";
    back.style.padding = "";

    const containerH = back.offsetHeight;
    if (!containerH) return;

    let attempts = 0;
    while (back.scrollHeight > containerH && attempts < 8) {
      const ratio = containerH / back.scrollHeight;
      const step = Math.max(ratio, 0.8);

      allText.forEach((el) => {
        const cur = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = Math.max(cur * step, 7) + "px";
      });

      if (flip) {
        const curW = parseFloat(getComputedStyle(flip).width);
        const curFS = parseFloat(getComputedStyle(flip).fontSize);
        flip.style.width = Math.max(curW * step, 16) + "px";
        flip.style.height = Math.max(curW * step, 16) + "px";
        flip.style.fontSize = Math.max(curFS * step, 8) + "px";
      }

      if (details) {
        const curGap = parseFloat(getComputedStyle(details).gap) || 0;
        details.style.gap = Math.max(curGap * step, 2) + "px";
      }

      const curBackGap = parseFloat(getComputedStyle(back).gap) || 0;
      back.style.gap = Math.max(curBackGap * step, 2) + "px";

      const padTop = parseFloat(getComputedStyle(back).paddingTop) || 0;
      const padBot = parseFloat(getComputedStyle(back).paddingBottom) || 0;
      const padLR = parseFloat(getComputedStyle(back).paddingLeft) || 0;
      if (padTop > 6) {
        back.style.paddingTop = Math.max(padTop * step, 6) + "px";
        back.style.paddingBottom = Math.max(padBot * step, 6) + "px";
        back.style.paddingLeft = padLR + "px";
        back.style.paddingRight = padLR + "px";
      }

      attempts++;
    }
  };

  const fitAll = () => cards.forEach(fitBack);

  fitAll();
  window.addEventListener("load", fitAll);
  window.addEventListener("resize", () => {
    clearTimeout(window._backFaceFitT);
    window._backFaceFitT = setTimeout(fitAll, 60);
  });

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.attributeName === "data-flipped") {
        const card = m.target.closest?.(".person-card") || m.target;
        requestAnimationFrame(() => fitBack(card));
      }
    }
  });
  cards.forEach((card) => {
    observer.observe(card, { attributes: true, attributeFilter: ["data-flipped"] });
  });
}

/* E-board flip cards */
function initPersonCardFlip() {
  const cards = $all("[data-person-card]");
  if (!cards.length) return;

  const syncCardControls = (card) => {
    const isFlipped = card.getAttribute("data-flipped") === "true";
    card.querySelectorAll("[data-person-flip]").forEach((btn) => {
      btn.setAttribute("aria-expanded", isFlipped ? "true" : "false");
    });
  };

  const toggleCard = (card) => {
    const isFlipped = card.getAttribute("data-flipped") === "true";
    card.setAttribute("data-flipped", isFlipped ? "false" : "true");
    syncCardControls(card);
  };

  cards.forEach((card) => {
    if (card.getAttribute("data-flipped") !== "true") {
      card.setAttribute("data-flipped", "false");
    }
    syncCardControls(card);
  });

  $all("[data-person-flip]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.currentTarget.closest("[data-person-card]");
      if (!card) return;
      toggleCard(card);
    });
  });
}

/* Footer year */
const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

initReveal();
initCountups();
initCountdown();
initCarousel();
initFeedbackLoop();
initPersonCardFlip();
initBackFaceFit();
initEboardEqualHeights();
initHeroLogoSizing();
initFaqAccordion();
initAmbientMotion();
initSectionScrollMotion();
