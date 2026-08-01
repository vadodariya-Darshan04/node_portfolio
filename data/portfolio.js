// ═══════════════════════════════════════════════
// PORTFOLIO DATA — Edit this file to update content
// ═══════════════════════════════════════════════

export const siteData = {
  // ── Personal Info ──────────────────────────
  name: "Darshan Vadodariya",
  tagline: "Full-Stack Developer & Creative Technologist",
  email: "vadodariyaD@gmail.com",
  location: "Gujarat, India",
  availability: true,
  availabilityText: "Open to opportunities",
  heroDescription:
    "I craft digital experiences at the intersection of elegant design and robust engineering. Building products people love to use.",
  yearsExperience: 4,
  projectsCompleted: "4+",
  achievementsCount: 3,

  // ── About ──────────────────────────────────
  about: {
    heading: "App Developer & IT Student",
    bio1: "I'm an enthusiastic MSc-IT student at GLS University, Ahmedabad, with a solid foundation in mobile application development, web technologies, and database systems. I enjoy picking apart hard problems and engineering solutions that are both technically sound and visually polished.",
    bio2: "Beyond apps, I'm deeply drawn to Full Stack Development — creating end-to-end products where refined frontends meet powerful backends. I'm equally fascinated by Artificial Intelligence and the ways it can be woven into real products to make them smarter and more intuitive.",
    bullets: [
      "Strong foundation in Flutter & Dart app development",
      "Hands-on experience with REST APIs, PHP & MySQL",
      "Proficient in Python, Java, C++ and web technologies",
      "Exploring Full Stack & AI-powered application development",
      "Continuous learner — always chasing the next challenge",
    ],
    specialties: [
      {
        icon: "📱",
        title: "App Development",
        desc: "Building cross-platform mobile apps with Flutter & Dart that are fast, pixel-perfect, and production-ready.",
      },
      {
        icon: "🌐",
        title: "Full Stack Dev",
        desc: "Passionate about shipping complete web products — from elegant, responsive UIs to robust APIs and thoughtfully designed databases.",
      },
      {
        icon: "🤖",
        title: "Artificial Intelligence",
        desc: "Fascinated by ML and intelligent systems — actively exploring how AI can be woven into real-world applications.",
      },
    ],
  },

  // ── Skills ─────────────────────────────────
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "Javascript", icon: "devicon-javascript-plain colored" },
      ],
    },
    {
      category: "App Development",
      items: [
        { name: "Flutter", icon: "devicon-flutter-plain colored" },
        { name: "Dart", icon: "devicon-dart-plain colored" },
        { name: "Cross Platform", icon: "devicon-android-plain colored" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "SQLite", icon: "devicon-sqlite-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
      
      ],
    },
    {
      category: "Backend & API",
      items: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Django", icon: "devicon-django-plain colored" },
        { name: "REST APIs", icon: "devicon-fastapi-plain colored" },
        { name: "PHP", icon: "devicon-php-plain colored" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "AWS", icon: "devicon-amazonwebservices-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original colored" },
        { name: "Figma", icon: "devicon-figma-plain colored" },
      ],
    },
    {
      category: "AI / ML",
      items: [
        { name: "Machine Learning", icon: "devicon-python-plain colored" },
        { name: "Pandas", icon: "devicon-pandas-plain colored" },
        { name: "NumPy", icon: "devicon-numpy-plain colored" },
      ],
    },
  ],

  // ── Projects ───────────────────────────────
  projects: [
    {
      num: "01",
      title: "SOC - Syntrofia Overseas Consultant",
      tagline: "Your Dream Place",
      description:
        "Developed a modern visa consultancy management platform for Syntrofia Overseas Consultant featuring a responsive user interface, secure authentication system, and an efficient admin dashboard to streamline user inquiries, application management, and consultancy operations.",
      tech: ["PHP","MySQL","HTML","CSS","Javascript"],
      github: "https://github.com/vadodariya-Darshan04/Your-Dream-Place",
      live: "",
      status: "live",
      year: "2024",
      image: "/images/projects/soc.png",
    },
    
    
  ],

  // ── Achievements ───────────────────────────
  achievements: [
    {
      event: "CyberShadez 2026 — National Level Techfest · GLS University, Ahmedabad · 13 Feb 2026",
      items: [
        {
          title: "Tech Teaser",
          category: "IT Quiz · Team Category",
          prize: "2nd",
          prizeLabel: "2nd Prize",
          description: "A high-pressure IT quiz testing depth of knowledge across core computer science and technology domains at national level.",
          featured: false,
        },
        {
          title: "Code Relay",
          category: "Relay Coding · Team Category",
          prize: "2nd",
          prizeLabel: "2nd Prize",
          description: "A fast-paced relay coding event where each team member solved sequential programming challenges under strict time pressure.",
          featured: true,
        },
        {
          title: "Code Snap",
          category: "Snapshot Coding · Team Category",
          prize: "2nd",
          prizeLabel: "2nd Prize",
          description: "Identified and reconstructed program logic from visual code snapshots — a unique blend of visual memory and problem-solving.",
          featured: false,
        },
      ],
    },
  ],

  // ── Education ──────────────────────────────
  education: [
    {
      degree: "Master's Degree (MSc IT)",
      institution: "Gujarat Law Society University (GLS University), Ahmedabad",
      period: "2025 - 2027",
      status: "in_progress",
    },
    {
      degree: "Bachelor's Degree (BCA)",
      institution: "Gujarat Law Society University (GLS University), Ahmedabad — CGPA 7.46",
      period: "2022 - 2025",
      status: "completed",
    },
  ],

  // ── Experience ─────────────────────────────
  experience: [
    // {
    //   title: "Flutter Developer",
    //   company: "Augmented Systems LLP",
    //   companyUrl: "",
    //   location: "Ahmedabad, Gujarat",
    //   period: "6 Months",
    //   current: true,
    //   description: "Developed and optimized cross-platform mobile applications using Flutter and Dart.",
    //   highlights: [
    //     "Developed and optimized cross-platform mobile applications using Flutter and Dart.",
    //     "Collaborated with the design and backend teams to ensure seamless integration and smooth UI/UX.",
    //     "Identified and fixed critical bugs, improving application stability and performance.",
    //   ],
    // },
  ],

  // ── Socials ────────────────────────────────
  socials: [
    { platform: "github", label: "GitHub", url: "https://github.com/vadodariya-Darshan04" },
    { platform: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/darshan-vadodariya-713388365/" },
  ],
}
