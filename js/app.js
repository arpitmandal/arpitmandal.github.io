/* ═══════════════════════════════════════════════
   app.js — Desktop Icons, Window Content, Init
═══════════════════════════════════════════════ */

/* ══════════════════════════════════════
   ICON SVGs
══════════════════════════════════════ */
const ICONS = {
    about: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <defs>
            <radialGradient id="abg" cx="45%" cy="30%" r="70%">
                <stop offset="0%" stop-color="#6AAEF0"/>
                <stop offset="100%" stop-color="#1254C8"/>
            </radialGradient>
        </defs>
        <rect width="48" height="48" rx="8" fill="url(#abg)"/>
        <circle cx="24" cy="18" r="9" fill="white" opacity="0.92"/>
        <ellipse cx="24" cy="40" rx="15" ry="10" fill="white" opacity="0.92"/>
    </svg>`,

    experience: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect x="4" y="18" width="40" height="26" rx="3" fill="#A06828" stroke="#7A4E18" stroke-width="1"/>
        <path d="M15 18V13a9 9 0 0118 0v5" fill="none" stroke="#7A4E18" stroke-width="2.5"/>
        <rect x="4" y="28" width="40" height="3" fill="#7A4E18" opacity="0.45"/>
        <rect x="19" y="23" width="10" height="9" rx="1.5" fill="#F4C842" stroke="#C09020" stroke-width="1"/>
    </svg>`,

    projects: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 44">
        <defs>
            <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#FFD84A"/>
                <stop offset="100%" stop-color="#F4B800"/>
            </linearGradient>
        </defs>
        <rect x="0" y="10" width="48" height="32" rx="3" fill="url(#fg)" stroke="#C89000" stroke-width="1"/>
        <path d="M0 10 V7 Q0 5 3 5 H16 Q18.5 5 19.5 7.5 L21 10 Z" fill="#FFD84A" stroke="#C89000" stroke-width="1"/>
        <rect x="0" y="11.5" width="48" height="2.5" fill="#C89000" opacity="0.35"/>
    </svg>`,

    education: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <polygon points="24,5 47,19 24,27 1,19" fill="#C0392B" stroke="#922B21" stroke-width="1"/>
        <rect x="10" y="24" width="28" height="17" rx="2" fill="#E74C3C" stroke="#C0392B" stroke-width="1"/>
        <line x1="40" y1="19" x2="40" y2="36" stroke="#C0392B" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="40" cy="38" r="3.5" fill="#E74C3C" stroke="#C0392B" stroke-width="1"/>
        <rect x="14" y="30" width="20" height="2.5" rx="1" fill="white" opacity="0.5"/>
        <rect x="14" y="35" width="14" height="2" rx="1" fill="white" opacity="0.3"/>
    </svg>`,

    skills: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <defs>
            <radialGradient id="gbg" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#A0B4C8"/>
                <stop offset="100%" stop-color="#5A7090"/>
            </radialGradient>
        </defs>
        <path d="M21 3h6l2.5 6.5a15 15 0 014.5 2.5L40 10l3 5-4.5 4.5a15 15 0 010 5L43 29l-3 5-6-2a15 15 0 01-4.5 2.5L27 41h-6l-2.5-6.5A15 15 0 0114 32l-6 2-3-5 4.5-4.5a15 15 0 010-5L5 15l3-5 6 2a15 15 0 014.5-2.5Z" fill="url(#gbg)" stroke="#4A6080" stroke-width="1"/>
        <circle cx="24" cy="24" r="7.5" fill="#ECF0F1" stroke="#4A6080" stroke-width="1"/>
        <circle cx="24" cy="24" r="3" fill="#7090A8"/>
    </svg>`,

    contact: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <rect x="4" y="11" width="40" height="28" rx="4" fill="#27AE60" stroke="#1E8449" stroke-width="1"/>
        <path d="M4 16 L24 27 L44 16" stroke="#1E8449" stroke-width="2" fill="none" stroke-linejoin="round"/>
        <path d="M4 39 L18 27" stroke="white" stroke-width="1" opacity="0.25"/>
        <path d="M44 39 L30 27" stroke="white" stroke-width="1" opacity="0.25"/>
        <rect x="4" y="11" width="40" height="6" rx="4" fill="#2ECC71" opacity="0.25"/>
    </svg>`,

    resume: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 48">
        <path d="M4 2 H28 L36 10 V46 H4 Z" fill="white" stroke="#CCCCCC" stroke-width="1"/>
        <path d="M28 2 V10 H36 Z" fill="#DDDDDD" stroke="#CCCCCC" stroke-width="1"/>
        <rect x="4" y="2" width="26" height="7" fill="#E74C3C" rx="1"/>
        <text x="6" y="8.5" font-family="Tahoma,Arial" font-size="5" fill="white" font-weight="bold">RESUME</text>
        <rect x="8" y="16" width="24" height="1.5" rx="0.75" fill="#555"/>
        <rect x="8" y="20" width="22" height="1.5" rx="0.75" fill="#AAA"/>
        <rect x="8" y="24" width="20" height="1.5" rx="0.75" fill="#AAA"/>
        <rect x="8" y="28" width="18" height="1.5" rx="0.75" fill="#AAA"/>
        <rect x="8" y="32" width="22" height="1.5" rx="0.75" fill="#AAA"/>
        <rect x="8" y="36" width="16" height="1.5" rx="0.75" fill="#AAA"/>
        <rect x="8" y="40" width="20" height="1.5" rx="0.75" fill="#AAA"/>
    </svg>`,
};

/* 16-px mini versions for title bar (same SVG, CSS sizes them) */
const ICONS_MINI = ICONS;

/* ══════════════════════════════════════
   DESKTOP ICON DEFINITIONS
══════════════════════════════════════ */
const DESKTOP_ICONS = [
    { id: 'about',      label: 'About Me',   icon: ICONS.about,      isFile: false },
    { id: 'experience', label: 'Experience', icon: ICONS.experience, isFile: false },
    { id: 'projects',   label: 'Projects',   icon: ICONS.projects,   isFile: false },
    { id: 'education',  label: 'Education',  icon: ICONS.education,  isFile: false },
    { id: 'skills',     label: 'Skills',     icon: ICONS.skills,     isFile: false },
    { id: 'contact',    label: 'Contact',    icon: ICONS.contact,    isFile: false },
    { id: 'resume',     label: 'Resume',     icon: ICONS.resume,     isFile: true  },
];

/* ══════════════════════════════════════
   WINDOW CONTENT HTML
══════════════════════════════════════ */
const CONTENT = {};

/* ── About Me ─────────────────────────────────────── */
CONTENT.about = `
<div class="about-wrap">
    <div class="about-photo-col">
        <img src="assets/profile.png" alt="Arpit Mandal"
             onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 148 180%22%3E%3Crect width=%22148%22 height=%22180%22 fill=%22%234A9BE8%22/%3E%3Ccircle cx=%2274%22 cy=%2264%22 r=%2230%22 fill=%22white%22/%3E%3Cpath d=%22M14 180 Q14 110 74 110 Q134 110 134 180Z%22 fill=%22white%22/%3E%3C/svg%3E'">
    </div>
    <div class="about-text-col">
        <div class="about-name">Arpit Mandal</div>
        <div class="about-title-line">Software Developer (4+ Years) &nbsp;|&nbsp; Full Stack Engineer</div>
        <div class="about-loc">&#128205; Victoria, BC, Canada &mdash; Open to Relocation</div>
        <hr class="about-rule">
        <p class="about-bio">
            I'm a software developer specializing in <strong>.NET / C#</strong>, <strong>Angular</strong>, and cloud infrastructure
            (AWS &amp; Azure). I build scalable, production-grade applications and have a strong track record of
            improving system performance and modernizing legacy architecture.
        </p>
        <p class="about-bio">
            Currently at <strong>Reliable Controls Corp.</strong> leading a .NET&nbsp;10 architecture migration with
            ~35% performance gains. Previously at <strong>Cognizant</strong>, I re-engineered Toyota Motors'
            manufacturing system and delivered a 28% KPI improvement on AWS.
        </p>
        <div class="about-stats">
            <div class="stat-box">
                <span class="stat-num">4+</span>
                <span class="stat-lbl">Years Experience</span>
            </div>
            <div class="stat-box">
                <span class="stat-num">~35%</span>
                <span class="stat-lbl">Perf. Gain (RC)</span>
            </div>
            <div class="stat-box">
                <span class="stat-num">~28%</span>
                <span class="stat-lbl">KPI Gain (Toyota)</span>
            </div>
        </div>
    </div>
</div>`;

/* ── Experience ───────────────────────────────────── */
CONTENT.experience = `
<div>
    <div class="exp-entry">
        <div class="exp-company">Reliable Controls Corp.</div>
        <div class="exp-meta">
            <span class="exp-role">Software Developer L1</span>
            <span class="exp-badge">May 2025 &ndash; Present</span>
            <span class="exp-badge">Victoria, BC</span>
        </div>
        <ul class="exp-bullets">
            <li>Led migration of WebView app from DDD (Onion) to N-Tier Clean Architecture on .NET&nbsp;10 using EF Core, Async/Await and DI &mdash; benchmarked <strong>~35% performance gain</strong> over legacy.</li>
            <li>Built and maintained microservice integrations (WCF + HTTP) with SMTP, SSO, and SAML authentication across Auth, Device COMM, and TSDE services.</li>
            <li>Designed and maintained CI/CD pipelines via Azure DevOps; managed Git submodules and created automated installer pipelines.</li>
            <li>Worked with building-automation protocols (BACnet, IPv4/IPv6, BSN); integrated NUnit and JMeter for automated testing.</li>
            <li>Participated in Agile (Scrum) ceremonies, SR&amp;ED meetings; took end-to-end ownership from architecture through production delivery.</li>
        </ul>
    </div>

    <div class="exp-entry">
        <div class="exp-company">Cognizant Technology Solutions</div>
        <div class="exp-meta">
            <span class="exp-role">GenAI &amp; Azure Externship</span>
            <span class="exp-badge">Jan 2025 &ndash; Mar 2025</span>
            <span class="exp-badge">Toronto, ON</span>
        </div>
        <ul class="exp-bullets">
            <li>Completed structured training in Generative AI, Prompt Engineering, LLM fine-tuning, and Azure AI services (Azure Functions, Cognitive Services, Azure OpenAI).</li>
            <li>Built an AI-integrated full-stack application using .NET, Razor Pages, and Gemini API &mdash; LLM-powered features end-to-end including API integration and SQL Server persistence.</li>
            <li>Developed a Capstone Agentic Chatbot leveraging Azure OpenAI and Azure Functions demonstrating production-oriented GenAI integration patterns.</li>
        </ul>
    </div>

    <div class="exp-entry">
        <div class="exp-company">Cognizant Technology Solutions</div>
        <div class="exp-meta">
            <span class="exp-role">Associate Full Stack Developer</span>
            <span class="exp-badge">Oct 2020 &ndash; Jul 2023</span>
            <span class="exp-badge">Chennai, India</span>
        </div>
        <ul class="exp-bullets">
            <li>Core developer for Toyota Motors ESL &mdash; modernized legacy on-prem system into .NET Core + Angular on AWS (EC2, S3, IAM, Lambda, ECS) via Terraform, achieving <strong>~28% KPI improvement</strong>.</li>
            <li>Designed RESTful APIs and microservices with event-driven workflows and job scheduling via Hangfire.io.</li>
            <li>Built full-stack features using C# / .NET&nbsp;8, EF Core, LINQ, Async/Await, and Angular; optimized SQL Server queries and introduced reusable component patterns.</li>
            <li>Maintained CI/CD pipelines with Jenkins and Docker; performed code reviews; led design discussions across multiple release cycles.</li>
        </ul>
    </div>
</div>`;

/* ── Projects ─────────────────────────────────────── */
CONTENT.projects = `
<div class="projects-grid">
    <div class="proj-card">
        <div class="proj-title">&#129302; ATS Resume Analyser &amp; Cover Letter Generator</div>
        <div class="proj-desc">
            Full-stack .NET + Razor Pages app powered by Gemini API with three modules: Resume Manager
            (upload, role-fit analysis, AI suggestions), ATS Analyser (JD alignment scoring), and Cover
            Letter Generator (template editor, live preview, download). Desktop-installable with local web server.
        </div>
        <div class="proj-tags">
            <span class="proj-tag">.NET</span>
            <span class="proj-tag">Razor Pages</span>
            <span class="proj-tag">Gemini API</span>
            <span class="proj-tag">SQL Server</span>
            <span class="proj-tag">LLM</span>
        </div>
    </div>

    <div class="proj-card">
        <div class="proj-title">&#127981; Electronic Shift Log (Toyota Motors)</div>
        <div class="proj-desc">
            Re-engineered a legacy manufacturing shift-log system into a .NET Core + Angular application
            with Clean Architecture. Deployed on AWS (EC2, S3, IAM) via Terraform IaC. Achieved ~28%
            KPI, throughput, and response-time improvement over the legacy baseline.
        </div>
        <div class="proj-tags">
            <span class="proj-tag">.NET Core</span>
            <span class="proj-tag">Angular</span>
            <span class="proj-tag">AWS</span>
            <span class="proj-tag">Terraform</span>
            <span class="proj-tag">SQL Server</span>
        </div>
    </div>

    <div class="proj-card">
        <div class="proj-title">&#128196; WebView Migration (Reliable Controls)</div>
        <div class="proj-desc">
            Led migration of a Windows/Web WebView app from DDD (Onion) architecture to N-Tier Clean
            Architecture on .NET 10 with EF Core. Benchmarked ~35% performance gains through query
            optimization, indexing strategies, and async patterns.
        </div>
        <div class="proj-tags">
            <span class="proj-tag">.NET 10</span>
            <span class="proj-tag">EF Core</span>
            <span class="proj-tag">Clean Arch</span>
            <span class="proj-tag">Azure DevOps</span>
        </div>
    </div>

    <div class="proj-card">
        <div class="proj-title">&#128663; Vehicle Damage Cost Predictor</div>
        <div class="proj-desc">
            Built a computer-vision prediction model prototype at Toyota Motors NA hackathon, winning
            under competitive conditions. Applied ML techniques for automated vehicle damage detection
            and repair cost estimation.
        </div>
        <div class="proj-tags">
            <span class="proj-tag">Python</span>
            <span class="proj-tag">Computer Vision</span>
            <span class="proj-tag">ML</span>
            <span class="proj-tag">Hackathon Win</span>
        </div>
    </div>
</div>`;

/* ── Education ────────────────────────────────────── */
CONTENT.education = `
<div>
    <div class="edu-entry">
        <div class="edu-header">
            <div class="edu-icon">&#127979;</div>
            <div>
                <div class="edu-school">George Brown College &mdash; Toronto, ON, Canada</div>
                <div class="edu-degree">Post-Graduation Certificate &mdash; Cloud Computing</div>
                <div class="edu-year">Graduated August 2025</div>
            </div>
        </div>
        <ul class="edu-bullets">
            <li>Cloud Fundamentals, AWS, Microsoft Azure, DevOps Practices, Cloud Security</li>
            <li>Networking, Cloud Architecture, Hyper-V, Virtualization, Distributed Systems</li>
            <li>Hands-on labs in containerization (Docker), IaC (Terraform), and CI/CD pipelines</li>
            <li>Machine Learning workflows: model training, evaluation, and cloud deployment</li>
        </ul>
    </div>

    <div class="edu-entry">
        <div class="edu-header">
            <div class="edu-icon">&#127891;</div>
            <div>
                <div class="edu-school">DIT University &mdash; Dehradun, India</div>
                <div class="edu-degree">Bachelor of Engineering &mdash; Computer Science</div>
                <div class="edu-year">Graduated May 2020</div>
            </div>
        </div>
        <ul class="edu-bullets">
            <li>Data Structures &amp; Algorithms, OOP, System Design, RDBMS</li>
            <li>C, Java, C#, Python, Microprocessor Architecture</li>
            <li>Cryptography &amp; Encryption, Cloud Computing fundamentals</li>
            <li>Hands-on software development projects; database systems and networking</li>
        </ul>
    </div>
</div>`;

/* ── Skills ───────────────────────────────────────── */
CONTENT.skills = `
<div class="skills-wrap">
    <div class="skill-cat">
        <div class="skill-cat-title">Languages &amp; Frameworks</div>
        <div class="skill-tags">
            <span class="skill-tag">C#</span>
            <span class="skill-tag">.NET 10</span>
            <span class="skill-tag">ASP.NET Core</span>
            <span class="skill-tag">EF Core</span>
            <span class="skill-tag">LINQ</span>
            <span class="skill-tag">Async/Await</span>
            <span class="skill-tag">WCF</span>
            <span class="skill-tag">Dependency Injection</span>
            <span class="skill-tag">Hangfire</span>
            <span class="skill-tag">Python (Django)</span>
            <span class="skill-tag">JavaScript / TypeScript</span>
            <span class="skill-tag">Angular</span>
            <span class="skill-tag">RESTful APIs</span>
            <span class="skill-tag">Microservices</span>
            <span class="skill-tag">OOP</span>
            <span class="skill-tag">XML</span>
        </div>
    </div>

    <div class="skill-cat">
        <div class="skill-cat-title">Cloud, DevOps &amp; Infrastructure</div>
        <div class="skill-tags">
            <span class="skill-tag">AWS (EC2, S3, IAM, Lambda, ECS)</span>
            <span class="skill-tag">Azure (Functions, Cognitive Services)</span>
            <span class="skill-tag">Azure DevOps</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Jenkins</span>
            <span class="skill-tag">Terraform</span>
            <span class="skill-tag">CloudFormation</span>
            <span class="skill-tag">CI/CD Pipelines</span>
            <span class="skill-tag">Git / Git Submodules</span>
            <span class="skill-tag">Hyper-V</span>
        </div>
    </div>

    <div class="skill-cat">
        <div class="skill-cat-title">Databases &amp; Testing</div>
        <div class="skill-tags">
            <span class="skill-tag">SQL Server</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">SQLite</span>
            <span class="skill-tag">Query Optimization</span>
            <span class="skill-tag">Indexing</span>
            <span class="skill-tag">NUnit</span>
            <span class="skill-tag">Moq</span>
            <span class="skill-tag">JMeter</span>
            <span class="skill-tag">Postman</span>
            <span class="skill-tag">Swagger</span>
            <span class="skill-tag">Log4Net</span>
        </div>
    </div>

    <div class="skill-cat">
        <div class="skill-cat-title">AI / ML &amp; Practices</div>
        <div class="skill-tags">
            <span class="skill-tag">Gemini API</span>
            <span class="skill-tag">Azure OpenAI</span>
            <span class="skill-tag">Ollama (LLaMA)</span>
            <span class="skill-tag">Prompt Engineering</span>
            <span class="skill-tag">LLM Integration</span>
            <span class="skill-tag">System Design</span>
            <span class="skill-tag">OOD</span>
            <span class="skill-tag">DSA</span>
            <span class="skill-tag">Agile (Scrum/Kanban)</span>
            <span class="skill-tag">SAML / SSO</span>
            <span class="skill-tag">BACnet</span>
            <span class="skill-tag">Jira / Confluence</span>
        </div>
    </div>
</div>`;

/* ── Contact ──────────────────────────────────────── */
CONTENT.contact = `
<div>
    <div class="contact-section-title">Get In Touch</div>

    <div class="contact-links-row">
        <a class="contact-link-chip" href="mailto:arpitmandal.work@gmail.com">
            &#9993; arpitmandal.work@gmail.com
        </a>
        <a class="contact-link-chip" href="tel:+12268990029">
            &#128222; +1 (226) 899-0029
        </a>
        <a class="contact-link-chip" href="https://linkedin.com/in/arpitmandal" target="_blank" rel="noopener">
            &#128101; LinkedIn
        </a>
        <a class="contact-link-chip" href="https://github.com/arpitmandal" target="_blank" rel="noopener">
            &#128279; GitHub
        </a>
        <span class="contact-link-chip" style="cursor:default;">
            &#128205; Victoria, BC, Canada
        </span>
    </div>

    <div class="contact-form-box">
        <div class="contact-section-title">Send Me a Message</div>
        <p class="contact-form-note">
            Fill in the form below and your message will land in my inbox.
            <!--
                SETUP: Replace YOUR_FORM_ID with your Formspree form ID.
                1. Sign up at formspree.io (free — 50 msgs/month)
                2. Create a form linked to arpitmandal.work@gmail.com
                3. Replace YOUR_FORM_ID with the ID they give you (e.g. "xyzabc12")
            -->
        </p>
        <form id="contact-form" action="https://formspree.io/f/xgobwlwk" method="POST">
            <div style="display:flex;gap:10px;">
                <div class="xp-form-row" style="flex:1;">
                    <label for="cf-name">Your Name</label>
                    <input class="xp-input" type="text" id="cf-name" name="name" required placeholder="e.g. Jane Smith">
                </div>
                <div class="xp-form-row" style="flex:1;">
                    <label for="cf-email">Your Email</label>
                    <input class="xp-input" type="email" id="cf-email" name="email" required placeholder="jane@example.com">
                </div>
            </div>
            <div class="xp-form-row">
                <label for="cf-msg">Message</label>
                <textarea class="xp-textarea" id="cf-msg" name="message" required placeholder="Hi Arpit, I'd love to connect about..."></textarea>
            </div>
            <input type="hidden" name="_subject" value="Portfolio Contact: New Message">
            <button type="submit" class="xp-btn">&#9993;&nbsp; Send Message</button>
            <div class="form-success-msg" id="form-success">
                &#10003; Message sent! I'll get back to you soon.
            </div>
        </form>
    </div>
</div>`;

/* ── Resume (PDF in window) ───────────────────────── */
CONTENT.resume = `
<div class="resume-pdf-wrap">
    <div class="resume-pdf-toolbar">
        <span>&#128196; Arpit Mandal — Resume</span>
        <a href="assets/Resume.pdf" download="Arpit_Mandal_Resume.pdf" class="xp-btn" style="text-decoration:none;">
            &#8681;&nbsp; Download PDF
        </a>
    </div>
    <iframe src="assets/Resume.pdf" title="Arpit Mandal Resume"></iframe>
</div>`;

/* ══════════════════════════════════════
   WINDOW CONFIGS
══════════════════════════════════════ */
const WINDOW_CONFIGS = {
    about:      { title: 'About Me',            width: 680, height: 380 },
    experience: { title: 'Experience',          width: 700, height: 500 },
    projects:   { title: 'Projects',            width: 760, height: 480 },
    education:  { title: 'Education',           width: 620, height: 430 },
    skills:     { title: 'Skills',              width: 640, height: 460 },
    contact:    { title: 'Contact Me',          width: 580, height: 440 },
    resume:     { title: 'Resume — Arpit Mandal', width: 800, height: 620, contentClass: 'pdf-content' },
};

/* ══════════════════════════════════════
   OPEN WINDOW (public API)
══════════════════════════════════════ */
function openWindow(id) {
    _closeStartMenu();
    const cfg = WINDOW_CONFIGS[id];
    if (!cfg) return;
    createWindow(id, cfg.title, ICONS[id] || '', CONTENT[id] || '', {
        width:        cfg.width,
        height:       cfg.height,
        contentClass: cfg.contentClass || '',
    });
}

/* ══════════════════════════════════════
   LOGIN → DESKTOP TRANSITION
══════════════════════════════════════ */
function _doLogin() {
    const loginEl  = document.getElementById('login-screen');
    const desktopEl = document.getElementById('desktop');

    loginEl.style.opacity = '0';
    setTimeout(() => {
        loginEl.classList.add('hidden');
        desktopEl.classList.remove('hidden');
        initDesktop();
    }, 550);
}

/* ══════════════════════════════════════
   INIT DESKTOP
══════════════════════════════════════ */
function initDesktop() {
    const container = document.getElementById('desktop-icons');
    if (!container) return;

    DESKTOP_ICONS.forEach(def => {
        const iconEl = document.createElement('div');
        iconEl.className = 'desktop-icon';
        iconEl.dataset.id = def.id;
        iconEl.innerHTML = `
            <div class="icon-img">${def.icon}</div>
            <div class="icon-label">${def.label}</div>`;

        iconEl.addEventListener('click', e => {
            // Deselect others
            document.querySelectorAll('.desktop-icon').forEach(d => d.classList.remove('selected'));
            iconEl.classList.add('selected');
            e.stopPropagation();
        });

        iconEl.addEventListener('dblclick', () => openWindow(def.id));

        container.appendChild(iconEl);
    });

    // Deselect icons when clicking desktop background
    document.getElementById('desktop').addEventListener('click', e => {
        if (e.target === document.getElementById('desktop') ||
            e.target === document.getElementById('desktop-icons')) {
            document.querySelectorAll('.desktop-icon').forEach(d => d.classList.remove('selected'));
        }
    });

    // Populate start menu left panel
    const startLeft = document.getElementById('start-menu-items');
    if (startLeft) {
        DESKTOP_ICONS.forEach(def => {
            const item = document.createElement('div');
            item.className = 'start-menu-item';
            item.innerHTML = `<span class="start-menu-item-icon">${def.icon}</span>${def.label}`;
            item.addEventListener('click', () => openWindow(def.id));
            startLeft.appendChild(item);
        });
    }
}

/* ══════════════════════════════════════
   CONTACT FORM — AJAX SUBMISSION
══════════════════════════════════════ */
document.addEventListener('submit', async e => {
    if (e.target.id !== 'contact-form') return;
    e.preventDefault();
    const form = e.target;
    const btn  = form.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('form-success');

    btn.disabled = true;
    btn.textContent = 'Sending…';

    try {
        const res = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { Accept: 'application/json' },
        });

        if (res.ok) {
            form.reset();
            if (successMsg) successMsg.style.display = 'block';
            btn.textContent = '✓ Sent!';
            setTimeout(() => { btn.disabled = false; btn.textContent = '✉ Send Message'; }, 4000);
        } else {
            btn.disabled = false;
            btn.textContent = '✉ Send Message';
            alert('There was a problem sending your message. Please email me directly at arpitmandal.work@gmail.com');
        }
    } catch {
        btn.disabled = false;
        btn.textContent = '✉ Send Message';
        alert('Network error. Please email me directly at arpitmandal.work@gmail.com');
    }
});

/* ══════════════════════════════════════
   BIND LOGIN BUTTON
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-user-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', _doLogin);
        loginBtn.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') _doLogin();
        });
    }
});
