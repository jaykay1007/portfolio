export const portfolioData = {
  personal: {
    name: "Jayakkumar K",
    title: "Senior React & Next.js Developer",
    subtitle: "Front-End Engineer | AI-SDK Integration Specialist",
    location: "Erode, Tamil Nadu, India",
    email: "jaykay.reactdev@gmail.com",
    phone: "+91 9629070412",
    linkedin: "https://linkedin.com/in/jayakkumar-k-545997127",
    github: "https://github.com/jayakkumark", // You can update this
    summary: `Front-End Engineer with 5+ years building high-performance SPAs, SSR apps, and PWAs. 
    Expert in performance optimization, advanced state management, real-time features, and AI-SDK integrations. 
    Proven track record delivering measurable business outcomes with improved Lighthouse scores, increased feature adoption, 
    and reduced load times. Recognized as Performer of the Quarter (Siam Computing, AMJ 2025).`
  },
  
  skills: {
    frontend: [
      { name: "React.js", level: 95, years: 5 },
      { name: "Next.js", level: 92, years: 4 },
      { name: "TypeScript", level: 90, years: 3 },
      { name: "JavaScript (ES6+)", level: 95, years: 5 },
      { name: "Tailwind CSS", level: 95, years: 3 },
      { name: "Framer Motion", level: 85, years: 2 }
    ],
    stateManagement: [
      { name: "Redux", level: 95, years: 4 },
      { name: "React Query", level: 90, years: 3 },
      { name: "Zustand", level: 95, years: 2 },
      { name: "Context API", level: 95, years: 4 }
    ],
    aiIntegration: [
      { name: "OpenAI SDK", level: 95, years: 1 },
      { name: "Vercel AI SDK", level: 95, years: 1 },
      { name: "LangChain", level: 85, years: 1 },
      { name: "Vector Databases", level: 85, years: 1 },
      { name: "RAG Implementation", level: 85, years: 1 }
    ],
    tools: [
      "Git", "GitHub", "Bitbucket", "Docker", 
      "Webpack", "Vite", "ESLint", "Prettier",
      "Jest", "React Testing Library", "Cypress",
      "Mixpanel", "Google Analytics", "Sentry"
    ],
    databases: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis",
      "IndexedDB", "LocalStorage"
    ],
    other: [
      "PWA", "WebSockets", "Socket.io", "REST APIs",
      "GraphQL", "Server-Side Rendering", "Static Site Generation",
      "Performance Optimization", "SEO", "Web Accessibility"
    ]
  },
  
  experience: [
    {
      title: "Software Engineer",
      company: "Siam Computing",
      location: "Chennai",
      duration: "Jun 2021 – Present",
      current: true,
      achievements: [
        "Architected React/Next.js applications improving Lighthouse scores by 30%",
        "Reduced load times by ~25% through code splitting and caching strategies",
        "Built reusable component libraries cutting development time by ~20%",
        "Integrated Mixpanel analytics boosting feature adoption by 15-20%",
        "Led frontend team of 5-7 engineers with 95% sprint delivery success",
        "Awarded Performer of the Quarter (AMJ 2025) for exceptional delivery"
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Socket.io", "Mixpanel"]
    },
    {
      title: "Software Design Engineer",
      company: "T-Machine Solutions",
      location: "Chennai",
      duration: "Mar 2021 – Jun 2021",
      current: false,
      achievements: [
        "Contributed to front-end features using React and modern JavaScript",
        "Collaborated with product team to refine requirements",
        "Improved code quality through systematic bug fixes"
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"]
    }
  ],
  
  projects: [
    {
      title: "SIP Abacus",
      subtitle: "Student Dashboard & Test Portal",
      description: "Interactive test-taking platform with gamification, leaderboards, and advanced analytics",
      achievements: [
        "Boosted performance by ~25% using React optimizations",
        "Increased report interactions by 35% with data visualizations",
        "Improved feature adoption by ~20% through Mixpanel tracking"
      ],
      technologies: ["React.js", "Tailwind CSS", "Axios", "Mixpanel", "PWA"],
      metrics: {
        performance: "+25%",
        userEngagement: "+35%",
        featureAdoption: "+20%"
      }
    },
    {
      title: "Stock Brokerage Platform",
      subtitle: "Real-time Trading System",
      role: "Frontend Lead",
      description: "Live trading interface with real-time market data streaming and in-app chat",
      achievements: [
        "Implemented 15% faster UI responsiveness",
        "Real-time messaging increased transactions by ~20%",
        "Built complex trading dashboards with live data"
      ],
      technologies: ["React.js", "Redux", "Material UI", "Socket.io", "WebSockets"],
      metrics: {
        uiSpeed: "+15%",
        transactions: "+20%",
        dataLatency: "-30%"
      }
    },
    {
      title: "BeatO Healthcare",
      subtitle: "Diabetes Management PWA",
      description: "Progressive Web App for diabetes management with offline capabilities",
      achievements: [
        "Enabled offline functionality for critical features",
        "Improved engagement through PWA capabilities",
        "Reduced costs by ~10% via reusable components",
        "Increased productivity by ~15%"
      ],
      technologies: ["React.js", "PWA", "Service Workers", "Redux", "Styled Components"],
      metrics: {
        offlineCapability: "100%",
        productivity: "+15%",
        costReduction: "-10%"
      }
    },
    {
      title: "Key Demand",
      subtitle: "B2B Real Estate Platform",
      role: "Frontend Lead",
      description: "Demand-led real estate application with intelligent lead forms and virtual tours",
      achievements: [
        "Increased conversion rates by 17% with smart forms",
        "Boosted engagement by 23% with virtual tours",
        "Reduced bounce rate by 15% through optimization"
      ],
      technologies: ["React.js", "Redux", "Google Maps API", "WebSockets", "Axios"],
      metrics: {
        conversion: "+17%",
        engagement: "+23%",
        bounceRate: "-15%"
      }
    },
    {
      title: "POS Patrol",
      subtitle: "Retail Sales Assurance System",
      description: "Revenue assurance solution for retail POS data reconciliation",
      achievements: [
        "Automated sales data ingestion and reconciliation",
        "Built anomaly detection dashboards",
        "Implemented trend analysis and reporting"
      ],
      technologies: ["Next.js", "Redux", "PostgreSQL", "Chart.js", "TypeScript"],
      metrics: {
        dataAccuracy: "99.9%",
        processingTime: "-60%",
        anomalyDetection: "95%"
      }
    }
  ],
  
  education: {
    degree: "B.E. in Mechanical Engineering",
    institution: "VCET, Erode (Anna University)",
    year: "2019"
  },
  
  certifications: [
    {
      title: "Performer of the Quarter",
      issuer: "Siam Computing",
      date: "AMJ 2025",
      description: "Exceptional ownership and cross-functional execution"
    },
    {
      title: "Performance of the Month",
      issuer: "Siam Computing",
      date: "2024",
      description: "Award for delivery excellence and leadership"
    }
  ],
  
  testimonials: [
    {
      name: "Tech Lead",
      role: "Senior Engineering Manager",
      company: "Previous Company",
      text: "Jayakkumar is one of the most talented frontend engineers I've worked with. His ability to optimize performance and deliver clean, maintainable code is exceptional."
    }
  ]
}
