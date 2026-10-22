import { PersonalInfo, Project, SkillGroup, TimelineItem } from '../types';

/**
 * Central Configuration for Piyush Bisht's Portfolio
 * Edit any detail here to update the entire website automatically.
 */

export const personalInfo: PersonalInfo = {
  name: "Piyush Bisht",
  monogram: "PB",
  headline: "I build systems that solve real problems.",
  heroIntro: "I'm Piyush Bisht — a software engineering student exploring blockchain, intelligent systems, cybersecurity, and the infrastructure that powers modern software.",
  heroSubline: "Focused on building reliable architectures, analyzing security boundaries, and learning by shipping practical code.",
  editorialBio: "I'm a software engineering student at SRM Institute of Science and Technology, Chennai, graduating in 2027. I enjoy exploring how software, intelligent systems, and emerging technologies can be used to solve practical problems. My interests span full-stack development, blockchain, AI/ML, cybersecurity, and DevOps.",
  
  status: {
    isAvailable: true,
    badgeText: "Student & Systems Explorer",
    detail: "B.Tech Undergrad @ SRM IST • Class of 2027 • Open to Internships & Research Collaborations"
  },

  education: {
    institution: "SRM Institute of Science and Technology",
    campus: "Chennai, India",
    degree: "B.Tech in Software Engineering",
    graduationYear: 2027,
    cgpa: "8.5 / 10",
    highlights: [
      "Core coursework in Data Structures, Algorithms, OS, Computer Networks & DBMS",
      "Specialized interest in Distributed Consensus, Cryptography & DevSecOps",
      "Active participant in technical symposiums and open-source explorations"
    ]
  },

  location: "Chennai, India",
  interests: [
    "Software Engineering",
    "Blockchain & Distributed Systems",
    "AI / Machine Learning",
    "Cybersecurity & Application Security",
    "DevSecOps & Cloud Infrastructure"
  ],

  socialLinks: {
    github: "https://github.com/yuxhhh",
    linkedin: "https://www.linkedin.com/in/piyush-bisht-51bbbb374/",
    // Update with your preferred contact email
    email: "peeyushbisht7@gmail.com"
  },

  resume: {
    filePath: "/resume.pdf",
    // Set to true when you place your PDF in the public/ folder
    isAvailable: false,
    note: "Resume is currently being refined for upcoming recruitment cycles. Reach out directly via email or LinkedIn for an immediate copy."
  }
};

export const projectsData: Project[] = [
  {
    id: "proj-01",
    slug: "decentralized-ai-transaction-monitoring",
    title: "Decentralized AI-Powered Transaction Monitoring",
    category: "Blockchain",
    subCategories: ["AI / ML", "Cybersecurity"],
    featured: true,
    status: "Prototype",
    headline: "EVM Ledger Ingestion with Unsupervised Anomaly Detection",
    description: "A project exploring blockchain-based transaction monitoring and machine-learning-assisted analysis to help identify suspicious transaction patterns, flag high-risk transfers, and inspect ledger flows.",
    technologies: ["Blockchain", "Python", "Machine Learning", "Ethers.js", "Web3", "FastAPI"],
    architecture: "EVM Block / Event Listener → Data Cleaning & Feature Extraction (Velocity, Gas, Deviation) → Isolation Forest Anomaly Scorer → Real-Time Telemetry Dashboard",
    keyFeatures: [
      "Real-time EVM event stream listening and transaction parsing",
      "Heuristic and anomaly-based risk scoring for anomalous transfer bursts",
      "Interactive node visualization of sender-receiver transfer graphs",
      "Automated risk alert dispatcher for suspicious smart contract calls"
    ],
    myContribution: "Engineered the transaction ingestion scripts, designed the feature extraction for wallet velocity and volume patterns, and developed the frontend monitoring telemetry dashboard.",
    challenges: "Handling async event ordering from simulated node blocks and reducing false positives on normal high-volume contract interactions.",
    lessonsLearned: "Deepened understanding of EVM RPC rate limits, blockchain mempool structures, and practical trade-offs between heuristic rules and unsupervised ML.",
    previewType: "transaction-monitor",
    githubUrl: "https://github.com/yuxhhh",
    liveDemoUrl: ""
  },
  {
    id: "proj-02",
    slug: "devsecops-cicd-pipeline",
    title: "DevSecOps CI/CD Pipeline",
    category: "DevOps",
    subCategories: ["Cybersecurity"],
    featured: true,
    status: "Completed",
    headline: "Automated Security Gating & Static/Dynamic Analysis Workflow",
    description: "A security-focused CI/CD workflow integrating automated code analysis, dependency vulnerability scanning, container security audits, and automated policy gates before deployment.",
    technologies: ["GitHub Actions", "Docker", "Terraform", "SonarQube", "Trivy", "OWASP ZAP"],
    architecture: "Code Commit → Lint & Build → SonarQube (SAST Gate) → Trivy Container Scan → Terraform Lint → OWASP ZAP (DAST Gate) → Staging Gate",
    keyFeatures: [
      "Automated security quality gates halting pipeline if critical CVEs exist",
      "Multi-stage Dockerfile vulnerability scanning using Trivy",
      "SonarQube static application security testing for code smells and secret leaks",
      "IaC configuration checks and drift prevention using Terraform CLI"
    ],
    myContribution: "Architected the multi-stage GitHub Actions workflows, configured Trivy severity thresholds, and integrated automated SARIF reporting directly into PR comments.",
    challenges: "Balancing CI execution speed with deep container layer scanning and preventing pipeline failure on low-risk non-actionable CVEs.",
    lessonsLearned: "Learned how modern security posture shifts left into developer workflows and how infrastructure-as-code must be validated early.",
    previewType: "pipeline-visual",
    githubUrl: "https://github.com/yuxhhh",
    liveDemoUrl: ""
  },
  {
    id: "proj-03",
    slug: "microfinance-p2p-lending-security",
    title: "Microfinance & P2P Lending Security Analysis",
    category: "Cybersecurity",
    subCategories: ["Full Stack"],
    featured: true,
    status: "Completed",
    headline: "Security Audit, Threat Modeling & Access Control Evaluation",
    description: "A web security project focused on analyzing the security of a microfinance and peer-to-peer lending platform, identifying broken object-level authorization, session integrity flaws, and hardening endpoints.",
    technologies: ["Burp Suite", "Nmap", "OWASP ZAP", "bcrypt", "Python", "JWT"],
    architecture: "Recon & Surface Mapping → Authenticated Session Audit → IDOR / BOLA Vulnerability Evaluation → Cryptographic Storage Verification → Hardened Remediation Patch",
    keyFeatures: [
      "Systematic vulnerability mapping aligned with OWASP Top 10 API & Web standards",
      "Audit of password hashing (bcrypt work factor) and JWT expiration lifetimes",
      "Verification of authorization checks on borrower loan modification endpoints",
      "Remediation guide documenting defensive coding and input sanitization best practices"
    ],
    myContribution: "Conducted security scans, mapped threat vectors for lending transactions, authored vulnerability proof-of-concepts in a sandboxed environment, and implemented hardened server-side authorization middleware.",
    challenges: "Simulating edge-case race conditions on concurrent transfer requests and analyzing complex multi-role access controls.",
    lessonsLearned: "Recognized that business logic flaws and broken object-level authorization (BOLA) are far more critical than simple surface injection flaws.",
    previewType: "security-audit",
    githubUrl: "https://github.com/yuxhhh",
    liveDemoUrl: ""
  },
  {
    id: "proj-04",
    slug: "quantum-secure-voting-system",
    title: "Quantum-Inspired Secure Voting System",
    category: "Blockchain",
    subCategories: ["Cybersecurity"],
    featured: true,
    status: "Prototype",
    headline: "Electronic Voting Concept with BB84 Key Distribution Principles",
    description: "A voting application exploring secure electronic voting concepts and BB84-inspired quantum key distribution concepts for eavesdropping detection and immutable cryptographic audit trails.",
    technologies: ["Python", "Flask", "SQLite", "BB84 Concepts", "Cryptography", "HTML/CSS"],
    architecture: "Voter Registration → Simulated BB84 Key Exchange & Eavesdropping Detection → Hashed Ballot Cryptography → SQLite Ledger → Audit & Tally Verification",
    keyFeatures: [
      "Interactive simulation of photon polarization states and quantum bit error rate (QBER) calculation",
      "Simulated eavesdropping alert when photon interception exceeds security threshold",
      "Cryptographically chained ballot blocks preventing vote tampering",
      "Admin dashboard for election state control, tally verification, and audit trail"
    ],
    myContribution: "Designed the BB84 protocol simulation algorithm in Python, built the Flask backend for cryptographic ballot packaging, and crafted the voting terminal interface.",
    challenges: "Translating theoretical physics concepts (photon polarization bases) into an intuitive, deterministic mathematical simulation for demonstration.",
    lessonsLearned: "Gained strong respect for key exchange protocols, entropy requirements, and the distinct roles of classical cryptography versus quantum key distribution.",
    previewType: "quantum-voting",
    githubUrl: "https://github.com/yuxhhh",
    liveDemoUrl: ""
  },
  {
    id: "proj-05",
    slug: "personal-expense-tracker",
    title: "Personal Expense Tracker",
    category: "Full Stack",
    subCategories: [],
    featured: false,
    status: "Completed",
    headline: "Financial Telemetry & Spending Analytics Interface",
    description: "A personal expense-tracking interface for organizing transactions, categorizing expenditures, and visualizing financial habits with responsive data breakdowns.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "CSS"],
    architecture: "React SPA → Express REST API → SQLite Normalized Store with Category Aggregations",
    keyFeatures: [
      "Dynamic expense categorization and monthly budget threshold tracking",
      "Monthly spend analytics breakdown with custom responsive charts",
      "Fast transaction filtering and CSV statement export capabilities"
    ],
    myContribution: "Full-stack development, responsive UI design, and transaction aggregation queries.",
    challenges: "Maintaining fluid chart renders on mobile screens without layout shifts.",
    lessonsLearned: "Mastered clean component separation, optimistic state updates, and accessible tabular data displays.",
    previewType: "expense-tracker",
    githubUrl: "https://github.com/yuxhhh",
    liveDemoUrl: ""
  },
  {
    id: "proj-06",
    slug: "smart-attendance-management",
    title: "Smart Attendance & Student Management",
    category: "Full Stack",
    subCategories: [],
    featured: false,
    status: "Completed",
    headline: "Academic Records, Coursework & Attendance Portal",
    description: "A student-oriented application concept for tracking lecture attendance percentages, academic course schedules, and college department announcements.",
    technologies: ["React", "Node.js", "Express", "MySQL", "JWT Auth"],
    architecture: "Role-Based Web Client → Express Middleware (JWT Verification) → MySQL Relational DB",
    keyFeatures: [
      "Separate portal views for students, course instructors, and department administrators",
      "Automated attendance shortage threshold alerts (<75% mandate)",
      "Dynamic course syllabus schedule and session log history"
    ],
    myContribution: "Developed relational database schema, JWT role-based authorization filters, and faculty attendance logging views.",
    challenges: "Designing normalized relational schemas that scale across multiple departments and semester sections.",
    lessonsLearned: "Hands-on experience with SQL constraints, foreign keys, and role-based access control.",
    previewType: "attendance-system",
    githubUrl: "https://github.com/yuxhhh",
    liveDemoUrl: ""
  },
  {
    id: "proj-07",
    slug: "youtube-video-summarizer",
    title: "YouTube Video Summarizer",
    category: "AI / ML",
    subCategories: [],
    featured: false,
    status: "Prototype",
    headline: "Automated Transcript Extraction & LLM Key Insights Engine",
    description: "A productivity tool designed to make long-form video content and university lectures easier to digest through transcript parsing and concise structured summaries.",
    technologies: ["Python", "YouTube Transcript API", "AI API Integration", "Streamlit"],
    architecture: "Video URL Parser → Transcript Downloader & Preprocessor → Chunking & Prompt Synthesis → Markdown Structured Output",
    keyFeatures: [
      "Automated caption fetching with language fallback detection",
      "Token-aware text chunking to preserve speaker context across 60+ min videos",
      "Executive summary generation with timestamped key takeaways"
    ],
    myContribution: "Built the transcript extraction script, prompt engineering templates, and structured output parser.",
    challenges: "Handling unpunctuated auto-generated YouTube transcripts without losing semantic coherence.",
    lessonsLearned: "Understood practical prompt engineering, token limit chunking, and handling API rate limits.",
    previewType: "summarizer",
    githubUrl: "https://github.com/yuxhhh",
    liveDemoUrl: ""
  },
  {
    id: "proj-08",
    slug: "skillswap-platform",
    title: "SkillSwap",
    category: "Full Stack",
    subCategories: [],
    featured: false,
    status: "In progress",
    headline: "Peer-to-Peer Knowledge Exchange & Mentorship Network",
    description: "A skill-sharing platform concept designed to help university students and peers connect to trade technical knowledge, collaborate on code, and organize peer tutoring sessions.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    architecture: "React Client → Matching Engine API → Relational Skill Profile Store",
    keyFeatures: [
      "User profiles with 'Skills I Offer' and 'Skills I Wish to Learn' tags",
      "Matchmaking suggestions based on complementary skill tags",
      "Session scheduling and collaborative meeting request cards"
    ],
    myContribution: "Architecting the matching data models, client state structure, and user profile management.",
    challenges: "Designing an efficient query pattern to match multi-tag reciprocal skill pairings.",
    lessonsLearned: "Deepened understanding of relational many-to-many join tables and bidirectional search logic.",
    previewType: "skillswap",
    githubUrl: "https://github.com/yuxhhh",
    liveDemoUrl: ""
  },
  {
    id: "proj-09",
    slug: "smart-refrigerator-interface",
    title: "Smart Refrigerator Interface",
    category: "Full Stack",
    subCategories: [],
    featured: false,
    status: "Completed",
    headline: "Web-Based Appliance Interface for Inventory & Expiry Tracking",
    description: "A web-based smart refrigerator interface concept focused on organizing refrigerator items, monitoring shelf life, and making household food management easier.",
    technologies: ["JavaScript", "HTML5", "CSS Modern UI", "Local Storage"],
    architecture: "Touch-Optimized Web App → Local Storage Cache → Shelf Expiry Sort Engine",
    keyFeatures: [
      "Touch-first visual shelf organizer with categorized food icons and counters",
      "Dynamic expiration countdowns with color-coded alerts (fresh, expiring, critical)",
      "Simulated temperature and internal humidity telemetry cards"
    ],
    myContribution: "Designed the high-contrast touch interface, expiration threshold sorting, and telemetry widgets.",
    challenges: "Crafting a UI that is glanceable from across a kitchen while retaining dense item management controls.",
    lessonsLearned: "Applied Human-Computer Interaction (HCI) concepts for glanceable and touch-oriented appliance interfaces.",
    previewType: "smart-fridge",
    githubUrl: "https://github.com/yuxhhh",
    liveDemoUrl: ""
  },
  {
    id: "proj-10",
    slug: "expresschat-app",
    title: "ExpressChat",
    category: "Full Stack",
    subCategories: ["AI / ML"],
    featured: false,
    status: "Prototype",
    headline: "Channel-Based Messaging with Embedded AI Assistant",
    description: "A chat application project exploring real-time-style messaging, user authentication, channel management, and an embedded AI copilot capable of summarizing discussions.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "AI API"],
    architecture: "React Web App → Express Server + JWT Middleware → MongoDB Cluster → AI Summary Hook",
    keyFeatures: [
      "Secure user authentication with salted hashing and JWT tokens",
      "Channel and direct message views with persistent chat history",
      "Embedded AI chatbot summoned via commands to summarize conversation threads"
    ],
    myContribution: "Implemented authentication flow, MongoDB schema designs, and AI query endpoint integration.",
    challenges: "Managing conversation context formatting to send clean summaries to the AI endpoint without exceeding token budgets.",
    lessonsLearned: "Learned hands-on full-stack patterns: token refreshing, state synchronization, and LLM context injection.",
    previewType: "expresschat",
    githubUrl: "https://github.com/yuxhhh",
    liveDemoUrl: ""
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    tagline: "Core languages for systems, algorithms & scripting",
    skills: [
      { name: "Python", verifiedContext: "ML scripts, FastAPI, automation, security tools" },
      { name: "C", verifiedContext: "Low-level systems, memory management, pointers" },
      { name: "C++", verifiedContext: "Data structures, algorithms, object-oriented systems" },
      { name: "Java", verifiedContext: "Object-oriented design patterns, enterprise basics" },
      { name: "Rust", verifiedContext: "Memory safety, concurrency, CLI tools study" }
    ]
  },
  {
    category: "Web Development",
    tagline: "Building responsive, modern, production-grade applications",
    skills: [
      { name: "HTML5 & Semantic Web", verifiedContext: "Accessible markup & metadata" },
      { name: "Modern CSS / CSS Modules", verifiedContext: "Design tokens, CSS variables, grid, flexbox" },
      { name: "JavaScript (ES6+)", verifiedContext: "Async/await, DOM APIs, event loops" },
      { name: "TypeScript", verifiedContext: "Type-safe interfaces, generics, strict mode" },
      { name: "React", verifiedContext: "Custom hooks, component architecture, state management" },
      { name: "Node.js", verifiedContext: "Runtime services, async I/O, script automation" },
      { name: "Express.js", verifiedContext: "RESTful routing, JWT middleware, API error handlers" }
    ]
  },
  {
    category: "Databases & Storage",
    tagline: "Relational modeling, document stores & data persistence",
    skills: [
      { name: "SQL", verifiedContext: "Query optimization, joins, aggregations, indexing" },
      { name: "MySQL", verifiedContext: "Normalized relational schemas, foreign key constraints" },
      { name: "MongoDB", verifiedContext: "Document schemas, Mongoose modeling, JSON structures" },
      { name: "SQLite", verifiedContext: "Lightweight embedded storage for rapid prototyping" }
    ]
  },
  {
    category: "Blockchain & Web3",
    tagline: "Decentralized ledgers, smart contracts & cryptographic protocols",
    skills: [
      { name: "Solidity", verifiedContext: "Smart contract development & state transitions" },
      { name: "Smart Contracts", verifiedContext: "Testing, event logging, ERC standards study" },
      { name: "Ethers.js / Web3.js", verifiedContext: "RPC provider connection, event listening, ABI calls" }
    ]
  },
  {
    category: "AI & Data Analysis",
    tagline: "Data extraction, feature engineering & intelligent processing",
    skills: [
      { name: "Machine Learning Concepts", verifiedContext: "Anomaly detection, clustering, feature extraction" },
      { name: "Python Data Analysis", verifiedContext: "NumPy, Pandas, structured dataset preparation" },
      { name: "AI API Integration", verifiedContext: "Prompt structuring, transcript summarization, token budgets" }
    ]
  },
  {
    category: "DevSecOps & Security Tools",
    tagline: "Shifting security left, CI/CD automation & vulnerability assessment",
    skills: [
      { name: "Git & GitHub", verifiedContext: "Branching strategies, PR reviews, workflow automation" },
      { name: "GitHub Actions", verifiedContext: "Multi-stage CI/CD pipelines, automated testing gates" },
      { name: "Docker", verifiedContext: "Containerization, multi-stage builds, minimal images" },
      { name: "Terraform", verifiedContext: "Infrastructure as Code configuration & linting" },
      { name: "SonarQube", verifiedContext: "Static application security testing (SAST), code smells" },
      { name: "Trivy", verifiedContext: "Container image & filesystem vulnerability scanner" },
      { name: "Burp Suite", verifiedContext: "Web application proxy, HTTP request inspection" },
      { name: "Nmap", verifiedContext: "Network exploration, port scanning, service detection" },
      { name: "OWASP ZAP", verifiedContext: "Automated dynamic application security testing (DAST)" }
    ]
  }
];

export const timelineData: TimelineItem[] = [
  {
    year: "2023 — Present",
    title: "SRM Institute of Science and Technology",
    subtitle: "B.Tech in Software Engineering • Chennai, India",
    description: "Building a rigorous foundation in computer science, software engineering principles, algorithms, and systems design. Maintaining an 8.5/10 CGPA while engaging in self-directed engineering projects.",
    highlights: [
      "Academics: Algorithms, Operating Systems, Computer Architecture, Object Oriented Programming",
      "Exploration: Shifting focus beyond coursework into practical software development and cloud security",
      "Collaboration: Teaming with peers on software concepts and technical initiatives"
    ],
    type: "education"
  },
  {
    year: "2024",
    title: "Systems, Security & Web Foundations",
    subtitle: "Low-Level Programming & Web Application Security",
    description: "Dived into memory management and network protocols in C/C++, followed by building full-stack applications with React and Express. Initiated hands-on study of application security, OWASP Top 10 vulnerabilities, and security auditing tools.",
    highlights: [
      "Conducted security analysis of a microfinance P2P application using Burp Suite and OWASP ZAP",
      "Engineered full-stack tools including the Smart Attendance System and Expense Tracker",
      "Studied defensive programming, cryptographic hashing (bcrypt), and authorization patterns"
    ],
    type: "project"
  },
  {
    year: "2025",
    title: "DevSecOps & Blockchain Architectures",
    subtitle: "Infrastructure Automation & Decentralized Systems",
    description: "Expanded into automated cloud pipelines and blockchain ledgers. Built an end-to-end DevSecOps CI/CD workflow incorporating static/dynamic security gates and prototyped an EVM-compatible transaction monitoring system with anomaly detection.",
    highlights: [
      "Implemented multi-stage GitHub Actions pipeline with SonarQube, Trivy, and Terraform checks",
      "Developed Decentralized AI-Powered Transaction Monitoring System prototype",
      "Researched quantum key distribution concepts (BB84 protocol) and simulated secure voting mechanics"
    ],
    type: "project"
  },
  {
    year: "2026 — 2027",
    title: "Advanced Distributed Systems & Graduation",
    subtitle: "Targeting Production Engineering & Industry Impact",
    description: "Dedicated to mastering high-throughput distributed systems, secure cloud architectures, and preparing for engineering roles at top technology companies.",
    highlights: [
      "Deepening expertise in distributed consensus, microservice security, and resilience",
      "Preparing for 2026/2027 software engineering internships and full-time opportunities",
      "Continuing to build in public and contribute to practical software solutions"
    ],
    type: "focus"
  }
];
