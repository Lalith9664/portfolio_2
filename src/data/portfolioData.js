export const aboutStats = [
  { label: "Years Learning", value: 4, suffix: "+" },
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Problems Solved", value: 116, suffix: "+" },
  { label: "Tech Mastered", value: 23, suffix: "" }
];

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 80 },
      { name: "C", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 88 }
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "OpenCV", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "NumPy & Pandas", level: 90 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Vite", level: 85 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "Python", level: 95 },
      { name: "C++", level: 80 }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "Firebase", level: 80 },
      { name: "AWS", level: 75 }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 82 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "Linux", level: 85 }
    ]
  }
];

export const projectsData = [
  {
    id: "uno-game",
    title: "Multiplayer UNO Game",
    description: "A multiplayer online UNO game built with React, Vite, Tailwind CSS, Express, and Socket.io.",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=600&auto=format&fit=crop",
    tech: ["React", "Express", "Socket.io", "Tailwind CSS", "Vite"],
    features: [
      "Real-time multiplayer lobbies and matchmaking via WebSockets.",
      "Interactive card actions, colors, and gameplay mechanics.",
      "State sync and room management on Node.js/Express server.",
      "Responsive UI with custom neomorphic and glass elements."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Lalith9664/UNO-Game",
    detailedDescription: "A fully real-time multiplayer UNO card game. The backend coordinates client game actions, turns, card draws, and chat logs through Socket.io channels, while the frontend handles card distribution and state animations."
  },
  {
    id: "leetcode-solutions",
    title: "Algorithms & Coding Solutions",
    description: "A collection of structured solutions to algorithmic challenges on LeetCode using Python.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop",
    tech: ["Python", "Algorithms", "Data Structures"],
    features: [
      "Optimized solutions to various array, string, and matrix problems.",
      "Complex data structure implementations like Trees, Graphs, and HashMaps.",
      "Time and space complexity analysis documented per solution.",
      "Automated test scripts for local run validations."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Lalith9664/leetcode",
    detailedDescription: "A consolidated repository containing my solutions to problems solved on LeetCode. Each script is organized by topic and complexity, focusing on optimal Big-O runtimes and space constraints."
  },
  {
    id: "git-exercise",
    title: "Git Exercises & Workflows",
    description: "Practice workflows and script automation targeting Git commands, version branchings, and conflict resolutions.",
    image: "https://images.unsplash.com/photo-1556075798-482a62c15f37?q=80&w=600&auto=format&fit=crop",
    tech: ["Git", "Shell Scripts", "Python"],
    features: [
      "Hands-on exercises for resolving merge conflicts and rebase cycles.",
      "Configured pre-commit hooks and local code checkers.",
      "Structured branching strategy models (GitFlow, Trunk-based).",
      "Simulated multi-developer collaboration environments."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Lalith9664/git-exercise",
    detailedDescription: "A dedicated workspace designed for practicing complex Git workflows. It includes conflict simulation files, hooks automation, and documentation covering rebase, cherry-pick, and stash utilities."
  },
  {
    id: "emp-management",
    title: "Employee Management System",
    description: "A lightweight database administration script and query engine built to automate employee records tracking.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    tech: ["Python", "SQL", "Database Operations"],
    features: [
      "CRUD (Create, Read, Update, Delete) query pathways for user profiles.",
      "Relational tables modeling departments, logs, and salaries.",
      "Automatic input validations and parameterized queries to block injection.",
      "Clean CLI menu interface for standard administration operations."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Lalith9664/emp",
    detailedDescription: "This CLI application provides core database operations for employee records tracking. Features include departments relationships, query indexing, and simple automated reporting of salary averages."
  },
  {
    id: "developer-portfolio",
    title: "Neomorphic Developer Portfolio",
    description: "A premium developer showcase leveraging React, TypeScript, Glassmorphism, and Framer Motion.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      "Premium frosted glassmorphism overlays and soft neomorphic depth styling.",
      "Responsive, touch-friendly layouts supporting auto-collapsing nav drawers.",
      "Interactive parallax effects and particle trails responding to mouse position.",
      "Clean dark/light theme toggle and optimized speed metrics."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Lalith9664/portfolio",
    detailedDescription: "This exact website codebase! Built to showcase work, skills, and coding platform solver stats. It combines neumorphic and glassmorphic designs to construct soft, visually relaxing layouts."
  }
];

export const experienceData = [
  {
    company: "AI Labs India",
    role: "Machine Learning Engineer Intern",
    duration: "Jan 2026 - Present",
    description: "Building automated computer vision pipelines for facial classification and image alignment. Scaling FastAPI integrations serving CNN models.",
    tech: ["Python", "FastAPI", "PyTorch", "OpenCV", "Docker"]
  },
  {
    company: "WebCraft Solutions",
    role: "Frontend Developer Assistant",
    duration: "May 2025 - Dec 2025",
    description: "Engineered responsive dashboard modules for SaaS layouts. Implemented micro-frontends using React, TypeScript, and modern CSS guidelines.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Git"]
  },
  {
    company: "Freelance Services",
    role: "Full Stack Learner & Developer",
    duration: "2024 - 2025",
    description: "Implemented customized web applications and automation scrapers for local clients. Optimized DB queries and automated report workflows.",
    tech: ["Python", "Node.js", "Express", "MySQL", "Selenium"]
  }
];

export const educationData = [
  {
    college: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    degree: "Bachelor of Technology",
    department: "Computer Science and Engineering",
    cgpa: "8.5 / 10.0",
    duration: "2022 - 2026",
    coursework: ["Artificial Intelligence", "Deep Learning", "Data Structures & Algorithms", "Database Management Systems", "Object Oriented Programming"]
  },
  {
    college: "Isha Vidhya Infosys Matric Hr. Sec School, Dharmapuri",
    degree: "Class XII",
    department: "Physics, Chemistry, Mathematics & CS",
    cgpa: "84.4%",
    duration: "2020 - 2022",
    coursework: ["Mathematics", "Physics", "Computer Science (Python)", "Chemistry"]
  }
];

export const certificationsData = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    icon: "Brain",
    url: "https://coursera.org"
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google / TensorFlow",
    icon: "Cpu",
    url: "https://tensorflow.org"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "Cloud",
    url: "https://aws.amazon.com"
  },
  {
    title: "React Web Development Specialization",
    issuer: "Meta / Coursera",
    icon: "Code",
    url: "https://coursera.org"
  }
];

export const achievementsData = [
  {
    title: "Rank 152 / 5000+ in LeetCode Weekly",
    category: "Coding Contests",
    detail: "Solved 4/4 questions in LeetCode Biweekly contest, placing among top 3% participants globally.",
    icon: "Trophy"
  },
  {
    title: "1st Place Winner - AI HackFest 2025",
    category: "Hackathons",
    detail: "Developed a computer vision app in 36 hours that parses medical prescriptions using OCR models.",
    icon: "Award"
  },
  {
    title: "Lead Organizer - TechCon 2025",
    category: "Leadership",
    detail: "Spearheaded college coding festival, managing hackathons with over 450 registrations and sponsor hubs.",
    icon: "Users"
  },
  {
    title: "Published Paper: Genetic Timetabling",
    category: "Research",
    detail: "Published optimization insights for scheduling constraints in the International Journal of CSE.",
    icon: "FileText"
  }
];

export const codingProfilesData = [
  {
    name: "GitHub",
    stats: "6 Repositories | 5 Followers",
    badge: "YOLO Badge",
    url: "https://github.com/Lalith9664",
    color: "indigo"
  },
  {
    name: "LeetCode",
    stats: "116 Solved | Rating: 1449",
    badge: "3 Contests Attended",
    url: "https://leetcode.com/u/Lalithkumar8302/",
    color: "purple"
  },
  {
    name: "HackerRank",
    stats: "Bronze Badges in Python & C",
    badge: "2 Star Python",
    url: "https://www.hackerrank.com/profile/lalith8302",
    color: "teal"
  },
  {
    name: "CodeChef",
    stats: "3 Star Coder | Peak Rating: 1650",
    badge: "Division 2",
    url: "https://codechef.com",
    color: "blue"
  },
  {
    name: "GeeksforGeeks",
    stats: "Rank #12 in University | 300+ Problems",
    badge: "Geek Master",
    url: "https://geeksforgeeks.org",
    color: "teal"
  }
];

export const servicesData = [
  {
    title: "AI Development",
    description: "Designing intelligent software modules using deep-learning models, custom embeddings, and intelligent agents.",
    icon: "Brain"
  },
  {
    title: "Machine Learning",
    description: "Training regression models, classification systems, and regression curves. Automating pipeline data validations.",
    icon: "Cpu"
  },
  {
    title: "Frontend Development",
    description: "Crafting beautiful, high-performance user interfaces using React, Tailwind CSS, Vite, and animations.",
    icon: "Layout"
  },
  {
    title: "Backend Development",
    description: "Developing scalable backend servers with RESTful APIs, session tokens, and data validations.",
    icon: "Server"
  },
  {
    title: "API Development",
    description: "Creating highly documented APIs using FastAPI and Node.js. Optimizing database query paths.",
    icon: "Webhook"
  },
  {
    title: "UI Design",
    description: "Designing luxury web layouts based on modern Soft UI (Neomorphism), Glassmorphic effects, and proper visual hierarchy.",
    icon: "Figma"
  },
  {
    title: "Automation",
    description: "Writing web scraping scripts, scheduling cron jobs, and optimizing routine administration scripts.",
    icon: "Sliders"
  }
];

export const testimonialsData = [
  {
    name: "Dr. Anirudh Sen",
    role: "Professor & Project Guide, Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    text: "Lalith's approach to the Genetic Timetable scheduler was outstanding. He demonstrated exceptional knowledge of evolutionary algorithms and delivered a fully functional web platform that resolved all scheduling conflicts.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Vikram Malhotra",
    role: "Senior Architect, AI Labs India",
    text: "During his internship, Lalith contributed key performance upgrades to our core computer vision pipelines. He is self-driven, handles code architecture cleanly, and writes highly performant FastAPI setups.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Sanjana Mehta",
    role: "Co-Founder, TechCon India",
    text: "Lalith's leadership skills in organizing TechCon 2025 were exemplary. He managed both the dev team building the portal and coordinate the offline operations. A true multi-talent coder and manager.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  }
];
