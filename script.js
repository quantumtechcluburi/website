const SITE = {
  clubName: "Quantum Technologies Club",
  shortName: "QTC@URI",
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
    uriPage: "https://web.uri.edu/engineering/quantum-technologies-club/",
    interestForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSdcFnzuwwuJMQlfOAs_qJxDN5FdKwRQMDTtZ8ulkYRlIueIpg/viewform?usp=header",
    feedbackForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSdv2BLMbgFet0sQyglNOvpgxpHw0gePP94R7OScP9gAvMetkQ/viewform?usp=publish-editor",
    // Collaboration ideas (talks, workshops, opportunities, newsletter).
    collaborateForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSdnTds0ULRDo8tC5GdcmsoSwXozxJIemowaWneJm-UgpPdnHw/viewform?usp=publish-editor",
    // Live feed from Google Apps Script (see docs/FEEDBACK_AUTOMATION.md).
    // Paste your web app /exec URL here after deploying the feedback feed script.
    feedbackFeed: "https://script.google.com/macros/s/AKfycbzYLW1KOj7vGyyPANmMHybe-K0GcY6TXQltFm0V_tYED70A82grGP8muuaP1DGyk5D-bw/exec",
  },
  nextEvent: {
    title: "Next meeting TBD",
    datetime: "",
    location: "Location TBD",
  },
};

const collaborateIdeaHref = () =>
  SITE.links.collaborateForm?.trim() ||
  `mailto:${SITE.links.email}?subject=QTC%40URI%20Collaboration%20Idea`;

const MODALS = {
  mission: {
    title: "Mission",
    body: () => `
      <p><strong>${SITE.clubName}</strong> (${SITE.shortName}) at the University of Rhode Island brings together people who are curious about the rapidly evolving quantum field.</p>
      <p>We promote interdisciplinary learning, collaboration, professional growth, and greater awareness of how quantum technologies may shape science, business, and society.</p>
      <h4>Motto</h4>
      <p>One Technology. Every Industry. Infinite Impact.</p>
      <h4>When we meet</h4>
      <p>Regular meetings are held during the academic semester. Meeting frequency, format, and scheduling are determined by the Executive Board and communicated to members in advance.</p>
      <div class="modal-actions">
        <a class="button button--primary" href="${SITE.links.interestForm}" target="_blank" rel="noreferrer">Join Club</a>
        <button class="button button--ghost" data-open-modal="contact">Contact / links</button>
      </div>
    `,
  },
  how: {
    title: "Join as a member",
    body: () => `
      <h4>Fast path for students</h4>
      <ul>
        <li>Fill out the interest form.</li>
        <li>Show up to a meeting (no prep required).</li>
        <li>Come back, learn, and contribute at your pace.</li>
      </ul>
      <h4>Grow with the club</h4>
      <ul>
        <li>Develop leadership, communication, teamwork, project-management, and event-planning skills.</li>
        <li>Become eligible for Active Member recognition and future Executive Board service.</li>
      </ul>
      <p>Faculty, researchers, and industry partners looking to speak, host a workshop, or share opportunities should use the Collaborate section.</p>
      <div class="modal-actions">
        <a class="button button--primary" href="${SITE.links.interestForm}" target="_blank" rel="noreferrer">Interest form</a>
        <button class="button button--ghost" data-open-modal="contact">Contact / socials</button>
      </div>
    `,
  },
  resources: {
    title: "Resources",
    body: () => `
      <h4>Club links</h4>
      <ul>
        <li><strong>Email</strong>: <a href="mailto:${SITE.links.email}">${SITE.links.email}</a></li>
        <li><strong>Instagram</strong>: <a href="${SITE.links.instagram}" target="_blank" rel="noreferrer">@quantumtechclub.uri</a></li>
        <li><strong>URI page</strong>: <a href="${SITE.links.uriPage}" target="_blank" rel="noreferrer">Quantum Technologies Club</a></li>
        <li><strong>Interest form</strong>: <a href="${SITE.links.interestForm}" target="_blank" rel="noreferrer">Join the club</a></li>
      </ul>
    `,
  },
  faq: {
    title: "FAQ",
    body: () => `
      <h4>Do I need experience?</h4>
      <p>No. We are designed to be friendly to first-timers.</p>
      <h4>Who can join?</h4>
      <p>Quantum Technologies Club is open to all University of Rhode Island students, faculty, and staff, regardless of major, academic level, or prior experience.</p>
      <p>Students, faculty, and staff from other institutions, as well as alumni, industry professionals, and members of the public, may participate in eligible online activities and events.</p>
      <ul>
        <li><strong>No gatekeeping:</strong> we explain jargon and define terms.</li>
        <li><strong>Interdisciplinary:</strong> engineering, CS, physics, math, chemistry, business, and more.</li>
        <li><strong>Skill growth:</strong> leadership, communication, teamwork, and event planning.</li>
      </ul>
      <h4>What if I cannot attend every week?</h4>
      <p>That is fine. Come when you can. Projects and roles stay flexible.</p>
    `,
  },
  culture: {
    title: "Who can join",
    body: () => `
      <p>${SITE.clubName} is open to all University of Rhode Island students, faculty, and staff, regardless of major, academic level, or prior experience.</p>
      <p>Students, faculty, and staff from other institutions, as well as alumni, industry professionals, and members of the public, may participate in eligible online activities and events.</p>
      <ul>
        <li><strong>No gatekeeping</strong>: we explain jargon and define terms.</li>
        <li><strong>Interdisciplinary</strong>: engineering, CS, physics, math, chemistry, business, and more.</li>
        <li><strong>Skill growth</strong>: leadership, communication, teamwork, and event planning.</li>
      </ul>
    `,
  },
  projects: {
    title: "What we do",
    body: () => `
      <p>Designed to make quantum technologies accessible to all students. Club programming may include:</p>
      <ul>
        <li><strong>Education</strong>: workshops and technical demonstrations</li>
        <li><strong>Projects</strong>: hands-on quantum computing experience and demos</li>
        <li><strong>Community</strong>: interdisciplinary meetings and networking</li>
        <li><strong>Speakers</strong>: guest lectures from academia and industry</li>
        <li><strong>Competitions</strong>: hackathons, conferences, and programming challenges</li>
      </ul>
      <p>Specific programs and opportunities may vary by semester based on member interest, available resources, and partnerships.</p>
    `,
  },
  collaborateIdea: {
    title: "Submit Idea",
    body: () => `
      <p>Tell us how you want to collaborate with ${SITE.shortName}: give a talk, host a workshop, share an opportunity, or contribute to the newsletter.</p>
      <div class="modal-actions">
        <a class="button button--primary" href="${collaborateIdeaHref()}" target="_blank" rel="noreferrer">Open form</a>
        <button class="button button--ghost" data-modal-close>Close</button>
      </div>
    `,
  },
  contact: {
    title: "Contact",
    body: () => `
      <strong>Reach out to ${SITE.shortName} at the University of Rhode Island.</strong>
      <ul>
        <li><strong>Email</strong>: <a href="mailto:${SITE.links.email}">${SITE.links.email}</a></li>
        <li><strong>Instagram</strong>: <a href="${SITE.links.instagram}" target="_blank" rel="noreferrer">${SITE.links.instagram}</a></li>
        <li><strong>URI page</strong>: <a href="${SITE.links.uriPage}" target="_blank" rel="noreferrer">Quantum Technologies Club</a></li>
      </ul>
      <div class="modal-actions">
        <a class="button button--primary" href="${SITE.links.interestForm}" target="_blank" rel="noreferrer">Join Club</a>
        <button class="button button--ghost" data-modal-close>Close</button>
      </div>
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

/* Next meeting countdown: loads from data/meetings.json */
async function loadNextMeeting() {
  try {
    const res = await fetch("./data/meetings.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`meetings.json ${res.status}`);
    const data = await res.json();
    const meetings = Array.isArray(data?.meetings) ? data.meetings : [];
    const now = Date.now();
    const upcoming = meetings
      .map((m) => ({ ...m, _ts: new Date(m.datetime).getTime() }))
      .filter((m) => !Number.isNaN(m._ts))
      .sort((a, b) => a._ts - b._ts);

    const next = upcoming.find((m) => m._ts >= now - 60 * 60 * 1000) || null;
    if (next) {
      SITE.nextEvent = {
        title: next.title || "Club meeting",
        datetime: next.datetime,
        location: next.location || "Location TBD",
      };
      return SITE.nextEvent;
    }

    SITE.nextEvent = {
      title: "Fall 2026 meetings coming soon",
      datetime: "",
      location: "The E-Board will share dates once member availability is collected.",
    };
    return SITE.nextEvent;
  } catch (err) {
    console.warn("Could not load meetings.json", err);
    return SITE.nextEvent;
  }
}

function initCountdown(eventConfig = SITE.nextEvent) {
  const root = document.querySelector("[data-next-event]");
  if (!root) return;

  const titleEl = root.querySelector("[data-next-title]");
  const metaEl = root.querySelector("[data-next-meta]");
  const parts = {
    days: root.querySelector('[data-countdown-part="days"]'),
    hours: root.querySelector('[data-countdown-part="hours"]'),
    minutes: root.querySelector('[data-countdown-part="minutes"]'),
    seconds: root.querySelector('[data-countdown-part="seconds"]'),
  };

  const event = eventConfig || SITE.nextEvent;
  if (titleEl) titleEl.textContent = event.title || "Next meeting";

  if (!event.datetime) {
    if (metaEl) metaEl.textContent = event.location || "Details coming soon.";
    Object.values(parts).forEach((el) => {
      if (el) el.textContent = "--";
    });
    return;
  }

  const eventDate = new Date(event.datetime);
  if (Number.isNaN(eventDate.getTime())) return;

  if (metaEl) {
    const dateStr = eventDate.toLocaleString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
    metaEl.textContent = `${dateStr} • ${event.location || "Location TBD"}`;
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

/* Leadership equal height: tallest card in each row rules all */
function initEboardEqualHeights() {
  const section = document.getElementById("leadership");
  const grid = section?.querySelector(".people-grid");
  const cards = [...(grid?.querySelectorAll(".person-card") || [])];
  if (!cards.length) return;

  const applyEqualHeights = () => {
    cards.forEach((c) => {
      c.style.minHeight = "";
    });

    // Let CSS min-height drive single-column; equalize within rows for multi-col.
    const cols = getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean).length;
    if (cols <= 1) return;

    for (let i = 0; i < cards.length; i += cols) {
      const row = cards.slice(i, i + cols);
      let max = 0;
      row.forEach((card) => {
        max = Math.max(max, card.offsetHeight);
      });
      if (max > 0) {
        row.forEach((card) => {
          card.style.minHeight = `${max}px`;
        });
      }
    }
  };

  applyEqualHeights();
  window.addEventListener("load", applyEqualHeights);
  window.addEventListener("resize", () => {
    clearTimeout(window._leadershipEqualHeightT);
    window._leadershipEqualHeightT = setTimeout(applyEqualHeights, 80);
  });
}

async function loadFeedbackQuotes() {
  const localUrl = "./data/feedback.json";
  const remoteUrl = SITE.links.feedbackFeed?.trim();

  const parseQuotes = (data) => {
    const quotes = Array.isArray(data?.quotes) ? data.quotes : Array.isArray(data) ? data : [];
    return quotes
      .map((q) => ({
        quote: String(q.quote || q.text || "").trim(),
        meta: String(q.meta || q.attribution || q.name || "").trim(),
      }))
      .filter((q) => q.quote);
  };

  const fetchQuotes = async (url) => {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`feedback ${res.status}`);
    return parseQuotes(await res.json());
  };

  if (remoteUrl) {
    try {
      return await fetchQuotes(remoteUrl);
    } catch (err) {
      console.warn("Live feedback feed failed; falling back to local JSON", err);
    }
  }

  try {
    return await fetchQuotes(localUrl);
  } catch (err) {
    console.warn("Could not load feedback", err);
    return [];
  }
}

function initFeedbackLoop(quotes = []) {
  const root = document.querySelector("[data-feedback-root]");
  const track = document.querySelector("[data-feedback-track]");
  const empty = document.querySelector("[data-feedback-empty]");
  const prevBtn = document.querySelector("[data-quotes-prev]");
  const nextBtn = document.querySelector("[data-quotes-next]");
  if (!root || !track) return;

  track.innerHTML = "";

  if (!quotes.length) {
    if (empty) empty.hidden = false;
    track.hidden = true;
    if (prevBtn) prevBtn.hidden = true;
    if (nextBtn) nextBtn.hidden = true;
    return;
  }

  if (empty) empty.hidden = true;
  track.hidden = false;

  quotes.forEach((q, i) => {
    const article = document.createElement("article");
    article.className = "quote-card reveal is-visible";
    article.style.setProperty("--d", `${Math.min(i * 80, 400)}ms`);
    const quoteEl = document.createElement("p");
    quoteEl.className = "quote-card__quote";
    quoteEl.textContent = q.quote.startsWith("“") || q.quote.startsWith('"') ? q.quote : `“${q.quote}”`;
    const metaEl = document.createElement("p");
    metaEl.className = "quote-card__meta";
    metaEl.textContent = q.meta
      ? q.meta.startsWith("-") || q.meta.startsWith("–") || q.meta.startsWith("—")
        ? q.meta.replace(/^[—–-]\s*/, "- ")
        : `- ${q.meta}`
      : "";
    article.appendChild(quoteEl);
    if (metaEl.textContent) article.appendChild(metaEl);
    track.appendChild(article);
  });

  const origCards = [...track.querySelectorAll(".quote-card")];
  const n = origCards.length;
  if (n < 2) {
    if (prevBtn) prevBtn.hidden = true;
    if (nextBtn) nextBtn.hidden = true;
    return;
  }

  if (prevBtn) prevBtn.hidden = false;
  if (nextBtn) nextBtn.hidden = false;

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
  const centerOffset = () => setW * 3 - track.offsetWidth / 2 + rawCardW / 2;
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

  const scrollByCard = (dir) => {
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const cardW = track.querySelector(".quote-card").offsetWidth + gap;
    track.scrollBy({ left: dir * cardW, behavior: "smooth" });
  };
  if (prevBtn) prevBtn.addEventListener("click", () => scrollByCard(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => scrollByCard(1));
}

function initBackFaceFit() {
  const cards = $all("#leadership .person-card");
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
        el.style.fontSize = Math.max(cur * step, 11) + "px";
      });

      if (flip) {
        const curW = parseFloat(getComputedStyle(flip).width);
        const curFS = parseFloat(getComputedStyle(flip).fontSize);
        flip.style.width = Math.max(curW * step, 22) + "px";
        flip.style.height = Math.max(curW * step, 22) + "px";
        flip.style.fontSize = Math.max(curFS * step, 12) + "px";
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
initCarousel();
initPersonCardFlip();
initBackFaceFit();
initEboardEqualHeights();
initHeroLogoSizing();
initFaqAccordion();
initAmbientMotion();
initSectionScrollMotion();

(async () => {
  const next = await loadNextMeeting();
  initCountdown(next);
  const quotes = await loadFeedbackQuotes();
  initFeedbackLoop(quotes);
})();
