const roadmaps = {
  //Technology & Digital
  "software-developer": {
    stages: [
      {
        title: "Understand the Foundations",
        description:
          "Learn how computers, programs, and the web work before moving into more advanced development.",
        activities: [
          {
            title: "Explore how software works",
            description:
              "Learn what software is, how applications solve problems, and how developers turn ideas into working programs.",
          },
          {
            title: "Develop logical thinking",
            description:
              "Practise breaking everyday problems into smaller steps. Write simple algorithms and represent them using pseudocode or flowcharts.",
          },
          {
            title: "Get comfortable with your computer",
            description:
              "Practise managing files and folders, installing tools where possible, and using a code editor to create and organise projects.",
          },
        ],
      },

      {
        title: "Learn Programming",
        description:
          "Build a strong programming foundation by learning how to write instructions, work with data, and solve problems using code.",
        activities: [
          {
            title: "Learn variables and data types",
            description:
              "Understand variables, strings, numbers, booleans, operators, and how programs store and use information.",
          },
          {
            title: "Practise conditions, loops, and functions",
            description:
              "Write programs that make decisions, repeat instructions, and organise reusable logic into functions.",
          },
          {
            title: "Work with arrays and objects",
            description:
              "Learn how to group related information, access values, and process collections of data.",
          },
          {
            title: "Build small programs",
            description:
              "Create a calculator, a number-guessing game, or a simple quiz. Focus on understanding your code rather than copying solutions.",
          },
        ],
      },

      {
        title: "Explore Web Development",
        description:
          "Learn how websites are structured, styled, and made interactive. These skills also provide a useful introduction to building web applications.",
        activities: [
          {
            title: "Structure pages with HTML",
            description:
              "Practise semantic HTML, headings, links, images, forms, and accessible page structure.",
          },
          {
            title: "Style pages with CSS",
            description:
              "Learn selectors, the box model, Flexbox, Grid, responsive layouts, and how to create interfaces that work on mobile and desktop.",
          },
          {
            title: "Add interactivity with JavaScript",
            description:
              "Work with the DOM, events, form input, arrays, objects, and browser storage to make pages interactive.",
          },
          {
            title: "Understand how websites communicate",
            description:
              "Learn the basics of HTTP, requests and responses, JSON, and how frontend applications use APIs.",
          },
        ],
      },

      {
        title: "Use Professional Development Tools",
        description:
          "Learn the tools and practices that help developers organise code, find errors, and collaborate on software projects.",
        activities: [
          {
            title: "Use Git and GitHub",
            description:
              "Practise repositories, commits, branches, and pushing projects to GitHub so your work has a clear history.",
          },
          {
            title: "Debug and test your code",
            description:
              "Use browser developer tools, read error messages, test different inputs, and fix problems systematically.",
          },
          {
            title: "Work with APIs",
            description:
              "Fetch data from a public API, handle loading and error states, and display the returned information in a simple application.",
          },
          {
            title: "Write maintainable code",
            description:
              "Use meaningful names, small reusable functions, consistent formatting, and clear project organisation.",
          },
        ],
      },

      {
        title: "Build Projects and Explore Opportunities",
        description:
          "Apply what you have learned to complete projects, demonstrate your skills, and explore the different paths available in software development.",
        activities: [
          {
            title: "Build a personal portfolio",
            description:
              "Create a responsive website introducing yourself and presenting your projects, what you learned, and links to your code.",
          },
          {
            title: "Develop a useful application",
            description:
              "Build something that solves a real problem, such as a study planner, expense tracker, school information tool, or community directory.",
          },
          {
            title: "Improve a project through feedback",
            description:
              "Ask others to try your application, identify confusing areas, fix bugs, and improve its usability.",
          },
          {
            title: "Explore specialisations",
            description:
              "Learn about frontend, backend, full-stack, mobile, and software testing careers. Explore one area more deeply based on your interests.",
          },
          {
            title: "Prepare to present your work",
            description:
              "Document your projects, explain the problems they solve, and practise discussing your technical decisions and what you would improve next.",
          },
        ],
      },
    ],

    resources: [
      {
        title: "MDN Web Docs",
        description:
          "Reliable documentation and tutorials for HTML, CSS, JavaScript, and core web development concepts.",
        url: "https://developer.mozilla.org/",
      },
      {
        title: "freeCodeCamp",
        description:
          "Free, hands-on programming lessons and projects covering web development and other computing topics.",
        url: "https://www.freecodecamp.org/learn/",
      },
      {
        title: "JavaScript.info",
        description:
          "A detailed JavaScript tutorial covering programming fundamentals, browser interaction, and more advanced concepts.",
        url: "https://javascript.info/",
      },
      {
        title: "GitHub Skills",
        description:
          "Interactive exercises for learning GitHub workflows and essential collaboration practices.",
        url: "https://skills.github.com/",
      },
      {
        title: "The Odin Project",
        description:
          "A free, project-based curriculum for learners who want to explore web development in greater depth.",
        url: "https://www.theodinproject.com/",
      },
    ],
  },

  "cybersecurity-analyst": {
    stages: [
      {
        title: "Understand Computers and Online Safety",
        description:
          "Build a foundation in computer systems, the internet, and the security risks people face online.",
        activities: [
          {
            title: "Learn how computers and operating systems work",
            description:
              "Explore files, applications, user accounts, permissions, and basic Windows or Linux commands.",
          },
          {
            title: "Understand how the internet works",
            description:
              "Learn about IP addresses, websites, DNS, routers, and how devices communicate.",
          },
          {
            title: "Explore common cybersecurity threats",
            description:
              "Study phishing, malware, weak passwords, social engineering, and common ways accounts are compromised.",
          },
        ],
      },
      {
        title: "Learn Security Fundamentals",
        description:
          "Understand the principles used to protect devices, accounts, networks, and information.",
        activities: [
          {
            title: "Study the CIA triad",
            description:
              "Understand confidentiality, integrity, and availability, and consider how each applies to school records or online accounts.",
          },
          {
            title: "Practise password and account security",
            description:
              "Learn about password managers, multifactor authentication, software updates, and least-privilege access.",
          },
          {
            title: "Explore basic Linux commands",
            description:
              "Practise navigating directories, listing files, reading text files, and understanding file permissions in a safe environment.",
          },
        ],
      },
      {
        title: "Practise Defensive Security",
        description:
          "Learn how security professionals identify suspicious activity and reduce risks.",
        activities: [
          {
            title: "Recognise phishing attempts",
            description:
              "Review sample messages and identify suspicious links, misleading senders, urgent demands, and requests for sensitive information.",
          },
          {
            title: "Explore security logs",
            description:
              "Learn what logs record and how repeated failed logins or unusual events can help an analyst investigate a problem.",
          },
          {
            title: "Try beginner security labs",
            description:
              "Use guided exercises in an authorised training environment to practise security concepts without targeting real systems.",
          },
        ],
      },
      {
        title: "Build a Security Portfolio",
        description:
          "Turn what you learn into clear evidence of your knowledge and responsible security practices.",
        activities: [
          {
            title: "Create a personal security checklist",
            description:
              "Document practical steps for securing a computer, email account, browser, and home Wi-Fi network.",
          },
          {
            title: "Write a sample incident report",
            description:
              "Use a fictional phishing incident to explain what happened, the warning signs, the potential impact, and recommended responses.",
          },
          {
            title: "Document a guided lab",
            description:
              "Record the objective, steps, observations, and lessons from a beginner cybersecurity exercise.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Cisco Networking Academy",
        description:
          "Explore introductory cybersecurity and networking learning opportunities.",
        url: "https://www.netacad.com/",
      },
      {
        title: "TryHackMe",
        description:
          "Practise security fundamentals through guided, beginner-friendly learning paths.",
        url: "https://tryhackme.com/",
      },
      {
        title: "Microsoft Learn",
        description:
          "Study security, identity, Windows, and related technical fundamentals.",
        url: "https://learn.microsoft.com/",
      },
      {
        title: "Cybersecurity and Infrastructure Security Agency",
        description:
          "Read practical security guidance and learn about common cyber threats.",
        url: "https://www.cisa.gov/",
      },
    ],
  },

  "data-analyst": {
    stages: [
      {
        title: "Build Your Data Thinking",
        description:
          "Learn how data helps people answer questions, identify patterns, and make better decisions.",
        activities: [
          {
            title: "Explore data in everyday life",
            description:
              "Choose a familiar topic, such as class attendance, study time, or transport costs, and identify what information could help answer a question.",
          },
          {
            title: "Understand types of data",
            description:
              "Learn the difference between numerical and categorical data, structured records, and missing or inconsistent values.",
          },
          {
            title: "Ask useful questions",
            description:
              "Practise turning a broad topic into specific questions that can be answered using collected information.",
          },
        ],
      },
      {
        title: "Learn Spreadsheets",
        description:
          "Use spreadsheet tools to organise, clean, calculate, and summarise information.",
        activities: [
          {
            title: "Create a small dataset",
            description:
              "Build a spreadsheet using fictional sales, attendance, or study records with clear column headings.",
          },
          {
            title: "Practise formulas",
            description:
              "Use SUM, AVERAGE, COUNT, IF, and other suitable functions to calculate and compare values.",
          },
          {
            title: "Clean and organise data",
            description:
              "Identify duplicates, missing values, inconsistent labels, and formatting problems, then correct them.",
          },
          {
            title: "Create charts and summaries",
            description:
              "Use suitable charts, filters, sorting, and pivot tables where available to communicate patterns.",
          },
        ],
      },
      {
        title: "Explore SQL and Basic Statistics",
        description:
          "Learn how analysts retrieve information and determine what the numbers actually mean.",
        activities: [
          {
            title: "Understand descriptive statistics",
            description:
              "Practise calculating and interpreting mean, median, mode, range, and percentages.",
          },
          {
            title: "Learn basic SQL",
            description:
              "Practise SELECT, WHERE, ORDER BY, GROUP BY, and simple aggregate functions using sample databases.",
          },
          {
            title: "Question your findings",
            description:
              "Consider sample size, missing information, misleading comparisons, and why correlation does not necessarily mean causation.",
          },
        ],
      },
      {
        title: "Visualise and Explain Findings",
        description:
          "Turn calculations into understandable insights that help someone make a decision.",
        activities: [
          {
            title: "Build a simple dashboard",
            description:
              "Combine summary figures, charts, and clear labels into a dashboard using a spreadsheet or an introductory visualisation tool.",
          },
          {
            title: "Write evidence-based observations",
            description:
              "Describe what the data shows, support each observation with figures, and distinguish facts from assumptions.",
          },
          {
            title: "Present a recommendation",
            description:
              "Explain your findings to a classmate or friend and suggest a practical next step supported by the data.",
          },
        ],
      },
      {
        title: "Complete a Data Project",
        description:
          "Demonstrate your skills with a small, well-documented analysis project.",
        activities: [
          {
            title: "Choose a manageable question",
            description:
              "For example, analyse fictional shop sales or a public dataset to investigate changes, differences, or patterns.",
          },
          {
            title: "Document your analysis",
            description:
              "Explain the question, data source, cleaning decisions, calculations, charts, limitations, and conclusions.",
          },
          {
            title: "Publish your work",
            description:
              "Prepare a readable report or dashboard and, if appropriate, share your files or project notes in a portfolio.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Kaggle Learn",
        description:
          "Practise introductory data analysis, spreadsheets, SQL, and Python through short lessons.",
        url: "https://www.kaggle.com/learn",
      },
      {
        title: "SQLBolt",
        description: "Learn SQL fundamentals through interactive exercises.",
        url: "https://sqlbolt.com/",
      },
      {
        title: "Microsoft Learn",
        description:
          "Explore data concepts and introductory Power BI learning materials.",
        url: "https://learn.microsoft.com/",
      },
      {
        title: "Our World in Data",
        description:
          "Explore public datasets, charts, and examples of evidence-based analysis.",
        url: "https://ourworldindata.org/",
      },
    ],
  },

  "network-engineer": {
    stages: [
      {
        title: "Understand Networking Basics",
        description:
          "Learn how computers and other devices communicate and share resources.",
        activities: [
          {
            title: "Explore network types",
            description:
              "Understand LANs, WANs, wireless networks, and how networks are used in homes, schools, and offices.",
          },
          {
            title: "Learn essential network concepts",
            description:
              "Study IP addresses, MAC addresses, routers, switches, access points, and basic network protocols.",
          },
          {
            title: "Trace a connection",
            description:
              "Draw how a device connects through a router to a website and learn the basic roles of DNS and DHCP.",
          },
        ],
      },
      {
        title: "Learn Addressing and Network Services",
        description:
          "Understand how devices receive addresses and how common services help networks operate.",
        activities: [
          {
            title: "Practise IPv4 addressing",
            description:
              "Learn about network addresses, subnet masks, private IP ranges, and default gateways.",
          },
          {
            title: "Explore DNS and DHCP",
            description:
              "Explain how devices obtain network settings and how domain names are translated into IP addresses.",
          },
          {
            title: "Use basic diagnostic commands",
            description:
              "Practise commands such as ipconfig or ip addr, ping, and tracert or traceroute on your own device.",
          },
        ],
      },
      {
        title: "Design and Simulate Networks",
        description:
          "Apply networking concepts to small network designs before working with physical equipment.",
        activities: [
          {
            title: "Draw a small office network",
            description:
              "Plan the connections between computers, a switch, a router, a wireless access point, and an internet connection.",
          },
          {
            title: "Try a network simulator",
            description:
              "Use Cisco Packet Tracer or another suitable simulator to connect devices and practise basic configurations.",
          },
          {
            title: "Explore network segmentation",
            description:
              "Learn why organisations separate devices or departments into different networks and how this can improve management and security.",
          },
        ],
      },
      {
        title: "Troubleshoot Network Problems",
        description:
          "Develop a systematic approach to identifying and resolving connectivity issues.",
        activities: [
          {
            title: "Follow a troubleshooting sequence",
            description:
              "Check physical or wireless connections, device settings, gateway reachability, DNS, and the destination service in a logical order.",
          },
          {
            title: "Investigate common scenarios",
            description:
              "Work through simulated cases involving incorrect IP settings, weak Wi-Fi, failed DNS resolution, or disconnected equipment.",
          },
          {
            title: "Document the solution",
            description:
              "Record the symptoms, checks performed, root cause, fix, and any preventive recommendation.",
          },
        ],
      },
      {
        title: "Build a Networking Portfolio",
        description:
          "Show that you can plan, explain, and troubleshoot a basic network.",
        activities: [
          {
            title: "Complete a simulated network",
            description:
              "Build a small network, document the addressing plan, and test connectivity between devices.",
          },
          {
            title: "Create a network diagram",
            description:
              "Label devices, connections, IP ranges, and the purpose of each part of your design.",
          },
          {
            title: "Explore professional pathways",
            description:
              "Research networking support roles, entry-level certifications, and further training that fits your goals and resources.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Cisco Networking Academy",
        description:
          "Explore introductory networking courses and guided practical learning.",
        url: "https://www.netacad.com/",
      },
      {
        title: "Cisco Packet Tracer",
        description:
          "Learn about network simulation tools and practise building virtual networks.",
        url: "https://www.netacad.com/courses/packet-tracer",
      },
      {
        title: "Practical Networking",
        description:
          "Study networking concepts through accessible explanations and diagrams.",
        url: "https://www.practicalnetworking.net/",
      },
      {
        title: "Cloudflare Learning Center",
        description:
          "Understand DNS, IP addresses, routing, and other internet fundamentals.",
        url: "https://www.cloudflare.com/learning/",
      },
    ],
  },

  "it-support-specialist": {
    stages: [
      {
        title: "Get Comfortable with Computer Systems",
        description:
          "Understand the hardware, software, and operating system basics that support everyday computer use.",
        activities: [
          {
            title: "Identify computer components",
            description:
              "Learn the purpose of the CPU, RAM, storage, motherboard, power supply, and common peripherals.",
          },
          {
            title: "Explore operating systems",
            description:
              "Practise managing files, applications, user accounts, settings, and updates in an operating system you can access.",
          },
          {
            title: "Understand common computer problems",
            description:
              "Study symptoms such as slow performance, storage shortages, application crashes, and connection failures.",
          },
        ],
      },
      {
        title: "Learn Troubleshooting",
        description:
          "Develop a careful, repeatable process for diagnosing technical issues.",
        activities: [
          {
            title: "Ask the right questions",
            description:
              "Practise gathering symptoms, error messages, recent changes, and the impact of a problem before attempting a fix.",
          },
          {
            title: "Use built-in diagnostic tools",
            description:
              "Explore task managers, system settings, storage tools, and basic network diagnostics available on your device.",
          },
          {
            title: "Practise safe troubleshooting",
            description:
              "Work through fictional support cases and try low-risk fixes before considering more disruptive changes.",
          },
          {
            title: "Record what you did",
            description:
              "Write down the problem, diagnostic steps, solution, and outcome so another person can follow your work.",
          },
        ],
      },
      {
        title: "Explore Networks and Security",
        description:
          "Learn the common connectivity and security issues that affect computer users.",
        activities: [
          {
            title: "Understand everyday networking",
            description:
              "Learn about Wi-Fi, routers, IP addresses, DNS, and common reasons a device might lose connectivity.",
          },
          {
            title: "Practise basic account security",
            description:
              "Learn how to recognise phishing, protect credentials, use multifactor authentication, and apply software updates.",
          },
          {
            title: "Understand permissions and backups",
            description:
              "Explore user access levels, safe file handling, backup practices, and why sensitive data needs protection.",
          },
        ],
      },
      {
        title: "Develop Support and Communication Skills",
        description:
          "Learn to help people clearly, respectfully, and without making technical problems more confusing.",
        activities: [
          {
            title: "Explain a fix in simple language",
            description:
              "Practise explaining a technical issue to someone without assuming they already understand the terminology.",
          },
          {
            title: "Write a support ticket",
            description:
              "Create a sample ticket containing the issue, affected device, urgency, troubleshooting steps, and resolution.",
          },
          {
            title: "Practise a support scenario",
            description:
              "Role-play helping someone with a common issue and ask clarifying questions before recommending a solution.",
          },
        ],
      },
      {
        title: "Build a Practical Support Portfolio",
        description:
          "Collect examples that demonstrate your troubleshooting process and technical communication.",
        activities: [
          {
            title: "Create a troubleshooting guide",
            description:
              "Write a beginner-friendly guide for a common issue, such as a device failing to connect to Wi-Fi.",
          },
          {
            title: "Build a small lab",
            description:
              "Use your own device or a permitted practice environment to explore settings, users, updates, and basic diagnostics.",
          },
          {
            title: "Research entry-level roles",
            description:
              "Explore help desk, desktop support, and IT technician responsibilities, along with the skills employers commonly request.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Google IT Support Certificate",
        description:
          "Explore structured learning covering computer hardware, operating systems, networking, and troubleshooting.",
        url: "https://www.coursera.org/professional-certificates/google-it-support",
      },
      {
        title: "Microsoft Learn",
        description:
          "Study Windows, Microsoft technologies, security, and technical support concepts.",
        url: "https://learn.microsoft.com/",
      },
      {
        title: "Cisco Networking Academy",
        description:
          "Build networking and cybersecurity knowledge useful in IT support.",
        url: "https://www.netacad.com/",
      },
      {
        title: "iFixit",
        description:
          "Explore repair guides to understand device components and common hardware repairs. Follow safety guidance and seek supervision where needed.",
        url: "https://www.ifixit.com/",
      },
    ],
  },

  //Engineering & Built Environment
  "civil-engineer": {
    stages: [
      {
        title: "Build a Foundation in Mathematics and Physics",
        description:
          "Develop the scientific and mathematical understanding used to analyse structures and solve engineering problems.",
        activities: [
          {
            title: "Strengthen core mathematics",
            description:
              "Practise algebra, geometry, trigonometry, ratios, and interpreting graphs.",
          },
          {
            title: "Explore forces and motion",
            description:
              "Learn about forces, equilibrium, friction, motion, and how loads affect objects.",
          },
          {
            title: "Observe the built environment",
            description:
              "Study bridges, buildings, drainage systems, and roads around you, and consider the problems each structure must solve.",
          },
        ],
      },
      {
        title: "Understand Civil Engineering Fundamentals",
        description:
          "Explore the materials, measurements, and design principles behind infrastructure.",
        activities: [
          {
            title: "Learn about construction materials",
            description:
              "Explore the properties and uses of concrete, steel, timber, bricks, and other common building materials.",
          },
          {
            title: "Study structural concepts",
            description:
              "Learn introductory concepts such as tension, compression, bending, stability, and load distribution.",
          },
          {
            title: "Explore surveying and site planning",
            description:
              "Understand how measurements, levels, site conditions, and maps inform construction planning.",
          },
        ],
      },
      {
        title: "Explore Engineering Design Tools",
        description:
          "Become familiar with the drawings and digital tools used to communicate engineering designs.",
        activities: [
          {
            title: "Practise technical drawing",
            description:
              "Create simple, clearly labelled plans and elevations using appropriate drawing tools.",
          },
          {
            title: "Explore CAD software",
            description:
              "Try beginner tutorials in a computer-aided design tool to understand how accurate technical drawings are created.",
          },
          {
            title: "Learn about environmental considerations",
            description:
              "Explore drainage, erosion, waste management, and how construction can affect nearby communities.",
          },
        ],
      },
      {
        title: "Apply Your Knowledge to a Design Challenge",
        description:
          "Use a small hypothetical project to practise planning, research, and technical communication.",
        activities: [
          {
            title: "Choose an infrastructure problem",
            description:
              "For example, investigate how a school walkway could manage rainwater or how a pedestrian crossing could be made safer.",
          },
          {
            title: "Develop a concept proposal",
            description:
              "Prepare a labelled sketch, list design considerations, and explain why your proposed approach might help.",
          },
          {
            title: "Explain limitations and safety",
            description:
              "Identify the information, calculations, professional review, and approvals that would be needed before real construction.",
          },
        ],
      },
      {
        title: "Explore Education and Career Pathways",
        description:
          "Understand how to progress from secondary school into civil engineering study and professional practice.",
        activities: [
          {
            title: "Research accredited programmes",
            description:
              "Investigate Nigerian institutions offering Civil Engineering and verify current admission requirements and programme accreditation.",
          },
          {
            title: "Explore specialist fields",
            description:
              "Learn about structural, transportation, geotechnical, water resources, and environmental engineering.",
          },
          {
            title: "Build a learning portfolio",
            description:
              "Keep your technical drawings, design proposal, research notes, and reflections together as evidence of your learning.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "NPTEL",
        description:
          "Explore engineering lectures and introductory courses covering civil engineering and related subjects.",
        url: "https://nptel.ac.in/",
      },
      {
        title: "Autodesk Education",
        description:
          "Explore educational access and learning resources for computer-aided design tools.",
        url: "https://www.autodesk.com/education/",
      },
      {
        title: "MIT OpenCourseWare",
        description:
          "Access open engineering course materials and strengthen your understanding of technical concepts.",
        url: "https://ocw.mit.edu/",
      },
      {
        title: "Council for the Regulation of Engineering in Nigeria",
        description:
          "Learn about engineering regulation and professional practice in Nigeria.",
        url: "https://coren.gov.ng/",
      },
    ],
  },

  "mechanical-engineer": {
    stages: [
      {
        title: "Understand Mathematics, Physics, and Motion",
        description:
          "Build the foundation for understanding machines, forces, energy, and mechanical systems.",
        activities: [
          {
            title: "Practise core mathematics",
            description:
              "Strengthen algebra, trigonometry, geometry, graphs, and unit conversions.",
          },
          {
            title: "Explore forces and motion",
            description:
              "Study speed, acceleration, Newton's laws, friction, momentum, and equilibrium.",
          },
          {
            title: "Investigate energy and heat",
            description:
              "Learn about energy transfer, temperature, heat, work, and basic thermodynamic ideas.",
          },
        ],
      },
      {
        title: "Explore Machines and Mechanical Systems",
        description:
          "Discover how mechanical components work together to perform useful tasks.",
        activities: [
          {
            title: "Identify common machine components",
            description:
              "Explore gears, pulleys, bearings, shafts, springs, levers, and fasteners.",
          },
          {
            title: "Study simple mechanisms",
            description:
              "Investigate how bicycles, hand tools, pumps, and other everyday machines transfer force or movement.",
          },
          {
            title: "Learn about materials",
            description:
              "Compare common metals, plastics, and composites in terms of strength, weight, durability, and suitable uses.",
          },
        ],
      },
      {
        title: "Learn Technical Drawing and Modelling",
        description:
          "Practise communicating mechanical ideas through accurate drawings and digital models.",
        activities: [
          {
            title: "Create dimensioned drawings",
            description:
              "Draw simple objects with appropriate dimensions, views, labels, and proportions.",
          },
          {
            title: "Try a CAD tool",
            description:
              "Follow a beginner tutorial to model a basic mechanical part and inspect it from different angles.",
          },
          {
            title: "Explore design constraints",
            description:
              "Consider how cost, material choice, safety, maintenance, and manufacturing affect a design.",
          },
        ],
      },
      {
        title: "Solve a Mechanical Design Problem",
        description:
          "Apply your knowledge to a small concept design and explain how it could work.",
        activities: [
          {
            title: "Choose a practical problem",
            description:
              "Consider a simple hand-operated device, a low-cost trolley concept, or an improvement to an everyday mechanism.",
          },
          {
            title: "Sketch a proposed solution",
            description:
              "Label the important components and explain how movement or force passes through the system.",
          },
          {
            title: "Review the design",
            description:
              "Identify possible failure points, safety concerns, material needs, and improvements.",
          },
        ],
      },
      {
        title: "Explore Mechanical Engineering Careers",
        description:
          "Learn how mechanical engineers contribute to industry, energy, manufacturing, and product development.",
        activities: [
          {
            title: "Research study routes",
            description:
              "Compare Nigerian Mechanical Engineering programmes and verify their current admission requirements and accreditation.",
          },
          {
            title: "Explore areas of specialisation",
            description:
              "Investigate manufacturing, automotive systems, energy, HVAC, robotics, and maintenance engineering.",
          },
          {
            title: "Document your projects",
            description:
              "Collect drawings, design explanations, and lessons learned in a portfolio that shows how you approach problems.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "MIT OpenCourseWare",
        description:
          "Explore open courses and materials in mechanics, thermodynamics, and engineering design.",
        url: "https://ocw.mit.edu/",
      },
      {
        title: "Autodesk Education",
        description:
          "Learn about CAD tools and educational resources for technical modelling.",
        url: "https://www.autodesk.com/education/",
      },
      {
        title: "Engineering Explained",
        description:
          "Explore accessible explanations of mechanical and automotive engineering concepts.",
        url: "https://www.youtube.com/user/EngineeringExplained",
      },
      {
        title: "Council for the Regulation of Engineering in Nigeria",
        description:
          "Explore the regulation of engineering practice in Nigeria.",
        url: "https://coren.gov.ng/",
      },
    ],
  },

  "electrical-electronics-engineer": {
    stages: [
      {
        title: "Build Your Physics and Mathematics Foundation",
        description:
          "Learn the principles that explain electricity, circuits, signals, and electronic devices.",
        activities: [
          {
            title: "Understand electrical quantities",
            description:
              "Study voltage, current, resistance, power, and energy, including their units and relationships.",
          },
          {
            title: "Explore basic circuit laws",
            description:
              "Practise simple calculations using Ohm's law and introductory series and parallel circuits.",
          },
          {
            title: "Strengthen mathematical skills",
            description:
              "Work on algebra, graphs, ratios, and trigonometry used in electrical calculations.",
          },
        ],
      },
      {
        title: "Explore Circuits and Components",
        description:
          "Discover how electrical and electronic components work together in practical systems.",
        activities: [
          {
            title: "Identify common components",
            description:
              "Learn the roles of resistors, capacitors, diodes, transistors, switches, and integrated circuits.",
          },
          {
            title: "Simulate simple circuits",
            description:
              "Use a circuit simulator to investigate how changing component values affects circuit behaviour.",
          },
          {
            title: "Understand digital logic",
            description:
              "Explore binary numbers and basic AND, OR, and NOT logic gates.",
          },
        ],
      },
      {
        title: "Practise Safe Design and Measurement",
        description:
          "Learn how engineers test circuits, interpret measurements, and work responsibly around electrical systems.",
        activities: [
          {
            title: "Explore virtual instruments",
            description:
              "Use a circuit simulator to understand the purpose of a multimeter, oscilloscope, and power supply.",
          },
          {
            title: "Read simple circuit diagrams",
            description:
              "Identify component symbols, connections, power sources, and ground references in basic schematics.",
          },
          {
            title: "Learn electrical safety",
            description:
              "Understand insulation, current hazards, protective devices, and why mains electrical work requires appropriate training and supervision.",
          },
        ],
      },
      {
        title: "Build a Beginner Electronics Project",
        description:
          "Apply your knowledge to a small, low-voltage project or simulation.",
        activities: [
          {
            title: "Choose a simple project",
            description:
              "Try simulating an LED indicator, a basic sensor circuit, or a simple logic circuit.",
          },
          {
            title: "Record your design",
            description:
              "Document the circuit diagram, component choices, expected behaviour, and observations.",
          },
          {
            title: "Test and improve",
            description:
              "Compare expected and observed behaviour in the simulator and explain what you changed and why.",
          },
        ],
      },
      {
        title: "Explore Study and Career Options",
        description:
          "Discover the different directions electrical and electronics engineering can take.",
        activities: [
          {
            title: "Research Nigerian programmes",
            description:
              "Compare relevant degree programmes and verify current admission requirements and accreditation.",
          },
          {
            title: "Explore specialist areas",
            description:
              "Investigate power systems, telecommunications, control systems, embedded electronics, and instrumentation.",
          },
          {
            title: "Create a project portfolio",
            description:
              "Save your circuit diagrams, simulation results, and explanations of the engineering principles involved.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "All About Circuits",
        description:
          "Study electronics textbooks, circuit concepts, and practical explanations.",
        url: "https://www.allaboutcircuits.com/",
      },
      {
        title: "CircuitJS",
        description:
          "Experiment with electronic circuits in an interactive simulator.",
        url: "https://www.falstad.com/circuit/",
      },
      {
        title: "PhET Interactive Simulations",
        description:
          "Explore interactive science and physics simulations, including electricity concepts.",
        url: "https://phet.colorado.edu/",
      },
      {
        title: "Council for the Regulation of Engineering in Nigeria",
        description:
          "Learn about engineering regulation and professional practice.",
        url: "https://coren.gov.ng/",
      },
    ],
  },

  "computer-engineer": {
    stages: [
      {
        title: "Understand Computing and Electronics",
        description:
          "Build a foundation in how computer hardware and software work together.",
        activities: [
          {
            title: "Explore computer components",
            description:
              "Learn the roles of processors, memory, storage, motherboards, and input/output devices.",
          },
          {
            title: "Strengthen mathematics and physics",
            description:
              "Practise algebra, binary numbers, basic electricity, and logical reasoning.",
          },
          {
            title: "Understand the software-hardware relationship",
            description:
              "Explore how programs use processors, memory, storage, and connected devices to perform tasks.",
          },
        ],
      },
      {
        title: "Learn Programming and Digital Logic",
        description:
          "Discover how software instructions and digital circuits form the foundation of computing systems.",
        activities: [
          {
            title: "Learn programming fundamentals",
            description:
              "Use a beginner-friendly language to practise variables, conditions, loops, functions, and simple problem-solving.",
          },
          {
            title: "Explore binary and logic gates",
            description:
              "Practise converting simple binary numbers and understanding how logic gates process digital signals.",
          },
          {
            title: "Study basic computer architecture",
            description:
              "Learn the introductory roles of the CPU, registers, memory, instructions, and data buses.",
          },
        ],
      },
      {
        title: "Explore Hardware and Embedded Systems",
        description:
          "Investigate how computers interact with sensors, electronic components, and physical devices.",
        activities: [
          {
            title: "Explore microcontrollers",
            description:
              "Learn what microcontrollers do and how they differ from general-purpose computers.",
          },
          {
            title: "Try an online electronics simulator",
            description:
              "Use a safe simulation environment to explore a simple sensor, LED, or input-and-output project.",
          },
          {
            title: "Understand interfaces",
            description:
              "Learn the basic purposes of USB, serial communication, GPIO, and other ways devices exchange information.",
          },
        ],
      },
      {
        title: "Create a Small Computing Project",
        description:
          "Combine programming, logical thinking, and hardware concepts in a documented beginner project.",
        activities: [
          {
            title: "Choose a project idea",
            description:
              "Consider a simulated traffic light, a basic temperature-monitoring concept, or a program that reads and processes sample sensor data.",
          },
          {
            title: "Plan how it works",
            description:
              "Draw a simple system diagram and explain the roles of the input, processing, and output.",
          },
          {
            title: "Test and document",
            description:
              "Record the expected behaviour, observations, limitations, and possible improvements.",
          },
        ],
      },
      {
        title: "Explore Computer Engineering Pathways",
        description:
          "Understand the education and specialisations that can lead into computer engineering.",
        activities: [
          {
            title: "Research degree programmes",
            description:
              "Compare Computer Engineering programmes in Nigeria and verify current admission requirements and accreditation.",
          },
          {
            title: "Explore career directions",
            description:
              "Investigate embedded systems, computer hardware, firmware, robotics, digital systems, and hardware testing.",
          },
          {
            title: "Build a technical portfolio",
            description:
              "Collect code, diagrams, simulations, and project explanations to demonstrate your progress.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Nand2Tetris",
        description:
          "Explore how computers are built from fundamental logic components and how hardware relates to software.",
        url: "https://www.nand2tetris.org/",
      },
      {
        title: "Arduino Documentation",
        description:
          "Learn about microcontrollers, electronics projects, and embedded programming.",
        url: "https://docs.arduino.cc/",
      },
      {
        title: "Wokwi",
        description:
          "Experiment with simulated microcontrollers and electronics projects in a browser.",
        url: "https://wokwi.com/",
      },
      {
        title: "MIT OpenCourseWare",
        description:
          "Access open learning materials covering computing, electronics, and engineering.",
        url: "https://ocw.mit.edu/",
      },
    ],
  },

  architect: {
    stages: [
      {
        title: "Develop Your Design Awareness",
        description:
          "Learn how buildings combine function, appearance, comfort, safety, and their surrounding environment.",
        activities: [
          {
            title: "Observe buildings around you",
            description:
              "Compare classrooms, homes, shops, and public buildings. Notice how their layouts support the activities inside.",
          },
          {
            title: "Practise visual observation",
            description:
              "Sketch a room or small building and note its proportions, entrances, windows, circulation, and use of natural light.",
          },
          {
            title: "Explore basic geometry and scale",
            description:
              "Practise measurements, geometric shapes, proportions, and scale drawings.",
          },
        ],
      },
      {
        title: "Learn Architectural Drawing",
        description:
          "Explore the drawings architects use to communicate spaces and design ideas.",
        activities: [
          {
            title: "Draw a simple floor plan",
            description:
              "Create a labelled plan of a small room or study area with approximate dimensions and furniture placement.",
          },
          {
            title: "Explore elevations and sections",
            description:
              "Learn how different views communicate a building's external appearance and internal arrangement.",
          },
          {
            title: "Understand scale and annotations",
            description:
              "Practise clear labels, dimensions, symbols, and consistent drawing conventions.",
          },
        ],
      },
      {
        title: "Explore Space Planning and Design",
        description:
          "Learn how architects organise spaces around people, activities, and practical constraints.",
        activities: [
          {
            title: "Plan for users",
            description:
              "Design a small study space or reading room, considering movement, accessibility, privacy, and comfort.",
          },
          {
            title: "Explore light and ventilation",
            description:
              "Investigate how window placement, shading, airflow, and orientation affect indoor environments.",
          },
          {
            title: "Discover digital design tools",
            description:
              "Try a beginner-friendly 2D or 3D design tool to develop and present a simple architectural concept.",
          },
        ],
      },
      {
        title: "Develop an Architectural Concept",
        description:
          "Combine observation, drawing, and design decisions into a small concept project.",
        activities: [
          {
            title: "Choose a design brief",
            description:
              "Create a hypothetical brief for a small reading room, student study area, or community space.",
          },
          {
            title: "Produce a concept presentation",
            description:
              "Prepare a floor plan, sketches, a simple model or visualisation, and a short explanation of your design choices.",
          },
          {
            title: "Review the design responsibly",
            description:
              "Consider accessibility, weather, materials, safety, site conditions, and why real projects require qualified professionals and approvals.",
          },
        ],
      },
      {
        title: "Explore Architectural Education",
        description:
          "Research the study route and professional requirements for practising architecture.",
        activities: [
          {
            title: "Research recognised programmes",
            description:
              "Investigate architecture programmes in Nigeria and confirm current admission requirements and accreditation.",
          },
          {
            title: "Understand professional progression",
            description:
              "Research the role of the Architects Registration Council of Nigeria and the professional requirements applicable to architectural practice.",
          },
          {
            title: "Build a design portfolio",
            description:
              "Organise sketches, plans, concept presentations, and reflections to demonstrate your creativity and design thinking.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "ArchDaily",
        description:
          "Explore building projects, architectural drawings, design ideas, and examples from around the world.",
        url: "https://www.archdaily.com/",
      },
      {
        title: "Autodesk Education",
        description:
          "Explore educational design tools and resources for architectural modelling and drafting.",
        url: "https://www.autodesk.com/education/",
      },
      {
        title: "SketchUp Campus",
        description:
          "Learn 3D modelling through tutorials and educational materials.",
        url: "https://learn.sketchup.com/",
      },
      {
        title: "Architects Registration Council of Nigeria",
        description:
          "Explore information about architectural regulation and professional practice in Nigeria.",
        url: "https://arcon.gov.ng/",
      },
    ],
  },
  //Health

  "medical-doctor": {
    stages: [
      {
        title: "Build a Strong Science Foundation",
        description:
          "Develop the biology, chemistry, physics, and communication skills needed to understand the human body and healthcare.",
        activities: [
          {
            title: "Study human biology",
            description:
              "Explore cells, tissues, organs, body systems, and how they work together to maintain life."
          },
          {
            title: "Strengthen chemistry and physics",
            description:
              "Learn basic chemical reactions, solutions, pressure, energy, and other concepts relevant to human biology."
          },
          {
            title: "Practise scientific reasoning",
            description:
              "Use reliable educational sources to investigate a health-related question and distinguish evidence from assumptions."
          }
        ]
      },
      {
        title: "Understand the Human Body",
        description:
          "Explore anatomy and physiology to understand how healthy body systems function.",
        activities: [
          {
            title: "Learn the major body systems",
            description:
              "Study the circulatory, respiratory, digestive, nervous, skeletal, muscular, and other major systems."
          },
          {
            title: "Explore how systems interact",
            description:
              "Choose an everyday activity, such as running, and explain how multiple body systems work together."
          },
          {
            title: "Learn health and disease basics",
            description:
              "Explore how infections, genetics, nutrition, and environmental factors can affect health."
          }
        ]
      },
      {
        title: "Discover Medical Practice",
        description:
          "Understand how doctors assess patients, use evidence, and work with other healthcare professionals.",
        activities: [
          {
            title: "Explore clinical reasoning",
            description:
              "Use fictional educational cases to understand how symptoms, medical history, examination, and tests contribute to clinical decisions."
          },
          {
            title: "Learn about medical ethics",
            description:
              "Explore confidentiality, informed consent, respect, patient autonomy, and professional responsibility."
          },
          {
            title: "Understand public health",
            description:
              "Investigate how vaccination, sanitation, health education, and disease prevention support communities."
          }
        ]
      },
      {
        title: "Explore Medical Education and Training",
        description:
          "Research the demanding academic and supervised clinical pathway required to become a doctor.",
        activities: [
          {
            title: "Research Nigerian medical programmes",
            description:
              "Compare recognised medical schools and verify current JAMB, O'level, admission, and programme requirements."
          },
          {
            title: "Understand clinical training",
            description:
              "Learn about medical school learning, supervised clinical rotations, and the transition into internship and professional registration."
          },
          {
            title: "Explore medical specialities",
            description:
              "Research fields such as paediatrics, surgery, internal medicine, obstetrics and gynaecology, and community medicine."
          }
        ]
      },
      {
        title: "Prepare for a Career in Medicine",
        description:
          "Develop the study habits, communication skills, and realistic expectations that support a future in medicine.",
        activities: [
          {
            title: "Create a science study plan",
            description:
              "Set a consistent schedule for biology, chemistry, physics, and English, with time for revision and practice questions."
          },
          {
            title: "Practise clear communication",
            description:
              "Summarise a health topic in simple language and consider how a healthcare professional should communicate respectfully."
          },
          {
            title: "Reflect on the responsibilities",
            description:
              "Consider the emotional demands, ethical responsibilities, teamwork, and lifelong learning involved in medical practice."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Khan Academy",
        description:
          "Study biology, chemistry, and human anatomy and physiology foundations.",
        url: "https://www.khanacademy.org/"
      },
      {
        title: "World Health Organization",
        description:
          "Explore reliable information about health, diseases, prevention, and public health.",
        url: "https://www.who.int/"
      },
      {
        title: "Medical and Dental Council of Nigeria",
        description:
          "Check information about medical education, registration, and professional regulation in Nigeria.",
        url: "https://mdcn.gov.ng/"
      },
      {
        title: "JAMB",
        description:
          "Consult official information and current admission materials when researching medical programmes.",
        url: "https://www.jamb.gov.ng/"
      }
    ]
  },

  "nurse": {
    stages: [
      {
        title: "Build Your Biology and Health Foundation",
        description:
          "Learn the basic science concepts that help explain the human body, illness, and health.",
        activities: [
          {
            title: "Study human body systems",
            description:
              "Explore the heart, lungs, digestive system, brain, muscles, and other major body systems."
          },
          {
            title: "Understand infection and prevention",
            description:
              "Learn how microorganisms spread and why hand hygiene, sanitation, vaccination, and infection prevention matter."
          },
          {
            title: "Develop communication skills",
            description:
              "Practise listening carefully, explaining information clearly, and communicating respectfully with people of different backgrounds."
          }
        ]
      },
      {
        title: "Understand Nursing and Patient Care",
        description:
          "Explore how nurses support patients, promote health, and work as part of healthcare teams.",
        activities: [
          {
            title: "Explore the nursing role",
            description:
              "Learn about patient observation, health education, care planning, advocacy, and collaboration with other professionals."
          },
          {
            title: "Learn basic vital-sign concepts",
            description:
              "Study what temperature, pulse, breathing rate, blood pressure, and oxygen saturation indicate in general terms."
          },
          {
            title: "Understand dignity and confidentiality",
            description:
              "Explore privacy, consent, respect, safeguarding, and professional boundaries in patient care."
          }
        ]
      },
      {
        title: "Explore Safe Care and Clinical Reasoning",
        description:
          "Learn how nurses recognise concerns, follow procedures, and contribute to safe patient care.",
        activities: [
          {
            title: "Study patient safety",
            description:
              "Learn why accurate documentation, identity checks, infection control, and clear communication are important."
          },
          {
            title: "Explore health scenarios",
            description:
              "Use fictional educational cases to identify relevant observations and understand when a trained professional must be involved."
          },
          {
            title: "Learn about emergency response",
            description:
              "Explore the purpose of first aid and how to seek emergency assistance. Practise clinical procedures only through appropriate supervised training."
          }
        ]
      },
      {
        title: "Research Nursing Education",
        description:
          "Understand the recognised education and registration routes into nursing in Nigeria.",
        activities: [
          {
            title: "Compare nursing programmes",
            description:
              "Research recognised nursing schools and university programmes, checking current admission criteria and entry requirements."
          },
          {
            title: "Understand supervised clinical practice",
            description:
              "Learn why practical placements and supervised skills training are essential components of nursing education."
          },
          {
            title: "Explore nursing specialities",
            description:
              "Investigate areas such as paediatric, community, mental health, emergency, and maternal health nursing."
          }
        ]
      },
      {
        title: "Prepare for the Profession",
        description:
          "Build the learning habits and people skills that support safe, compassionate nursing practice.",
        activities: [
          {
            title: "Plan your science revision",
            description:
              "Create a weekly study schedule for relevant science subjects, English, and examination practice."
          },
          {
            title: "Practise explaining health information",
            description:
              "Summarise a reliable health resource in simple language while avoiding unsupported medical claims."
          },
          {
            title: "Reflect on nursing responsibilities",
            description:
              "Consider teamwork, shift work, emotional resilience, patient advocacy, and lifelong professional development."
          }
        ]
      }
    ],
    resources: [
      {
        title: "World Health Organization",
        description:
          "Explore evidence-based public health information and global nursing priorities.",
        url: "https://www.who.int/"
      },
      {
        title: "Khan Academy",
        description:
          "Review biology, anatomy, physiology, and related science foundations.",
        url: "https://www.khanacademy.org/"
      },
      {
        title: "Nursing and Midwifery Council of Nigeria",
        description:
          "Consult the official regulator for information about nursing education and professional registration.",
        url: "https://www.nmcn.gov.ng/"
      },
      {
        title: "UNICEF",
        description:
          "Learn about child health, maternal health, nutrition, and community wellbeing.",
        url: "https://www.unicef.org/"
      }
    ]
  },

  "pharmacist": {
    stages: [
      {
        title: "Build Your Chemistry and Biology Foundation",
        description:
          "Learn the science behind medicines, the human body, and how substances interact.",
        activities: [
          {
            title: "Strengthen chemistry",
            description:
              "Study atoms, molecules, chemical reactions, solutions, acids and bases, and introductory organic chemistry."
          },
          {
            title: "Explore human biology",
            description:
              "Learn about body systems, cells, enzymes, and the basic processes that affect how the body responds to substances."
          },
          {
            title: "Practise accurate calculations",
            description:
              "Build confidence with fractions, ratios, percentages, unit conversions, and scientific notation."
          }
        ]
      },
      {
        title: "Understand Medicines",
        description:
          "Explore what medicines do, how they are developed, and why their use must be carefully managed.",
        activities: [
          {
            title: "Learn medicine terminology",
            description:
              "Understand the difference between active ingredients, dosage forms, routes of administration, and brand and generic names."
          },
          {
            title: "Explore pharmacology basics",
            description:
              "Study introductory concepts such as how medicines affect the body and how the body processes them."
          },
          {
            title: "Understand medicine safety",
            description:
              "Learn why correct use, side effects, interactions, storage, and professional guidance matter."
          }
        ]
      },
      {
        title: "Explore Pharmacy Practice",
        description:
          "Discover the different ways pharmacists contribute to patient care and the safe use of medicines.",
        activities: [
          {
            title: "Explore patient counselling",
            description:
              "Study how pharmacists explain medicine instructions, precautions, storage, and when patients should seek further advice."
          },
          {
            title: "Understand medicine quality",
            description:
              "Learn about medicine storage, quality assurance, expiry dates, and the risks of counterfeit or substandard products."
          },
          {
            title: "Explore pharmacy settings",
            description:
              "Compare community pharmacy, hospital pharmacy, pharmaceutical manufacturing, research, and regulatory work."
          }
        ]
      },
      {
        title: "Learn About Research and Regulation",
        description:
          "Understand why medicines must be evaluated, manufactured, distributed, and used under appropriate safeguards.",
        activities: [
          {
            title: "Explore medicine development",
            description:
              "Learn the broad stages of research, clinical evaluation, approval, manufacturing, and post-market safety monitoring."
          },
          {
            title: "Understand evidence-based decisions",
            description:
              "Compare reliable medicine information with unsupported health claims and learn to check trustworthy sources."
          },
          {
            title: "Research Nigerian regulation",
            description:
              "Explore the roles of the Pharmacy Council of Nigeria and NAFDAC in their respective areas of professional regulation and medicine oversight."
          }
        ]
      },
      {
        title: "Plan Your Pharmacy Pathway",
        description:
          "Research the formal education and professional requirements for becoming a pharmacist.",
        activities: [
          {
            title: "Research accredited programmes",
            description:
              "Compare recognised pharmacy programmes in Nigeria and verify current JAMB, O'level, and institutional requirements."
          },
          {
            title: "Understand professional progression",
            description:
              "Investigate required training, registration, and other current requirements through official regulatory sources."
          },
          {
            title: "Create a science learning portfolio",
            description:
              "Collect chemistry summaries, biology notes, medicine-safety research, and reflections on pharmacy specialities."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Khan Academy",
        description:
          "Strengthen chemistry, biology, and related scientific foundations.",
        url: "https://www.khanacademy.org/"
      },
      {
        title: "MedlinePlus",
        description:
          "Explore accessible, evidence-based information about medicines and health.",
        url: "https://medlineplus.gov/"
      },
      {
        title: "Pharmacy Council of Nigeria",
        description:
          "Consult the official regulator for pharmacy education and professional practice information.",
        url: "https://pcn.gov.ng/"
      },
      {
        title: "NAFDAC",
        description:
          "Learn about medicine regulation, product safety, and public health protection in Nigeria.",
        url: "https://nafdac.gov.ng/"
      }
    ]
  },

  "medical-laboratory-scientist": {
    stages: [
      {
        title: "Build Your Biology and Chemistry Foundation",
        description:
          "Learn the scientific principles used to investigate samples and support medical diagnosis.",
        activities: [
          {
            title: "Study cells and microorganisms",
            description:
              "Explore cells, bacteria, viruses, fungi, and the roles microorganisms play in health and disease."
          },
          {
            title: "Understand basic chemistry",
            description:
              "Review solutions, concentrations, chemical reactions, and the importance of accurate measurements."
          },
          {
            title: "Practise scientific observation",
            description:
              "Learn to record observations accurately, distinguish evidence from assumptions, and communicate results clearly."
          }
        ]
      },
      {
        title: "Explore Laboratory Science",
        description:
          "Understand how laboratory investigations help healthcare professionals assess health and disease.",
        activities: [
          {
            title: "Explore major laboratory disciplines",
            description:
              "Learn about haematology, clinical chemistry, medical microbiology, histopathology, and immunology."
          },
          {
            title: "Understand specimen handling",
            description:
              "Study why specimen identification, correct collection, transport, storage, and documentation affect test reliability."
          },
          {
            title: "Learn quality control concepts",
            description:
              "Explore calibration, controls, reference ranges, repeat testing, and the importance of reliable results."
          }
        ]
      },
      {
        title: "Understand Laboratory Safety and Equipment",
        description:
          "Learn the principles of safe laboratory work and the tools used to examine samples.",
        activities: [
          {
            title: "Explore common laboratory instruments",
            description:
              "Learn the purposes of microscopes, centrifuges, pipettes, and basic analytical instruments."
          },
          {
            title: "Study laboratory safety",
            description:
              "Understand protective equipment, hazard labels, waste handling, contamination prevention, and safe conduct."
          },
          {
            title: "Practise interpreting sample results",
            description:
              "Use fictional educational examples to understand units, reference intervals, quality limitations, and why results require professional interpretation."
          }
        ]
      },
      {
        title: "Explore Diagnostics and Research",
        description:
          "Discover how laboratory findings contribute to patient care, public health, and scientific research.",
        activities: [
          {
            title: "Follow a fictional diagnostic case",
            description:
              "Trace how a sample may be received, processed, tested, checked, and reported in a properly managed laboratory."
          },
          {
            title: "Explore disease surveillance",
            description:
              "Learn how laboratory data can help identify outbreaks and monitor infectious diseases."
          },
          {
            title: "Understand professional ethics",
            description:
              "Study confidentiality, accurate reporting, quality assurance, and the importance of avoiding unsupported conclusions."
          }
        ]
      },
      {
        title: "Research Your Education Pathway",
        description:
          "Understand the academic and supervised practical training needed for a career in medical laboratory science.",
        activities: [
          {
            title: "Compare recognised programmes",
            description:
              "Research Medical Laboratory Science programmes in Nigeria and verify current admission requirements and accreditation."
          },
          {
            title: "Explore career opportunities",
            description:
              "Investigate diagnostic laboratories, hospitals, public health, research, quality assurance, and laboratory management."
          },
          {
            title: "Build a science portfolio",
            description:
              "Collect laboratory concept notes, sample-result interpretation exercises, and reflections on laboratory safety and accuracy."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Lab Tests Online",
        description:
          "Explore educational explanations of laboratory tests and their general purposes.",
        url: "https://www.testing.com/"
      },
      {
        title: "Khan Academy",
        description:
          "Review biology, chemistry, and other science foundations relevant to laboratory work.",
        url: "https://www.khanacademy.org/"
      },
      {
        title: "World Health Organization",
        description:
          "Explore public health laboratory guidance, disease information, and laboratory quality resources.",
        url: "https://www.who.int/"
      },
      {
        title: "Medical Laboratory Science Council of Nigeria",
        description:
          "Consult the official professional regulator for education and practice information.",
        url: "https://web.mlscn.gov.ng/"
      }
    ]
  },

  "physiotherapist": {
    stages: [
      {
        title: "Understand the Human Body and Movement",
        description:
          "Build the biology and physics foundation needed to understand movement, posture, and physical function.",
        activities: [
          {
            title: "Explore bones and joints",
            description:
              "Learn about the skeleton, joint types, and how bones provide support and enable movement."
          },
          {
            title: "Study muscles and nerves",
            description:
              "Explore how muscles contract and how the nervous system helps coordinate movement."
          },
          {
            title: "Understand forces and balance",
            description:
              "Use everyday examples to explore gravity, leverage, stability, posture, and movement."
          }
        ]
      },
      {
        title: "Explore Physiotherapy",
        description:
          "Learn how physiotherapists support movement, function, recovery, and quality of life.",
        activities: [
          {
            title: "Discover areas of practice",
            description:
              "Explore musculoskeletal, neurological, paediatric, cardiorespiratory, and sports physiotherapy."
          },
          {
            title: "Understand rehabilitation",
            description:
              "Learn how rehabilitation plans may support recovery, mobility, strength, balance, and daily activities."
          },
          {
            title: "Explore person-centred care",
            description:
              "Understand why treatment goals should consider an individual's needs, abilities, preferences, and professional assessment."
          }
        ]
      },
      {
        title: "Learn About Assessment and Exercise",
        description:
          "Understand the principles behind movement assessment and structured rehabilitation.",
        activities: [
          {
            title: "Explore movement observation",
            description:
              "Study how posture, walking, joint movement, and balance can be observed in educational examples."
          },
          {
            title: "Understand exercise principles",
            description:
              "Learn introductory ideas about gradual progression, repetition, rest, and adapting activities to individual needs."
          },
          {
            title: "Study safe practice",
            description:
              "Explore why qualified assessment, consent, precautions, and supervision are important before providing treatment."
          }
        ]
      },
      {
        title: "Explore Rehabilitation in Real Life",
        description:
          "Learn how physiotherapists work with patients and other professionals across different settings.",
        activities: [
          {
            title: "Review fictional case studies",
            description:
              "Consider how rehabilitation goals might differ for someone recovering from an injury versus someone managing a long-term movement condition."
          },
          {
            title: "Explore assistive equipment",
            description:
              "Learn the general purposes of mobility aids and how appropriate assessment helps determine their use."
          },
          {
            title: "Understand teamwork",
            description:
              "Explore how physiotherapists collaborate with doctors, nurses, occupational therapists, and families."
          }
        ]
      },
      {
        title: "Plan Your Physiotherapy Pathway",
        description:
          "Research the formal education, clinical placements, and professional requirements for physiotherapy.",
        activities: [
          {
            title: "Research recognised programmes",
            description:
              "Compare physiotherapy programmes in Nigeria and verify current entry requirements and accreditation."
          },
          {
            title: "Understand supervised clinical education",
            description:
              "Learn why practical placements and supervised patient-care experience are essential."
          },
          {
            title: "Build a learning portfolio",
            description:
              "Collect anatomy notes, movement diagrams, rehabilitation research summaries, and reflections on patient-centred care."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Physiopedia",
        description:
          "Explore educational material about rehabilitation, movement, and physiotherapy practice.",
        url: "https://www.physio-pedia.com/"
      },
      {
        title: "Khan Academy",
        description:
          "Study biology, anatomy, physiology, and related science foundations.",
        url: "https://www.khanacademy.org/"
      },
      {
        title: "World Physiotherapy",
        description:
          "Learn about the physiotherapy profession and its role in health and rehabilitation.",
        url: "https://world.physio/"
      },
      {
        title: "Medical Rehabilitation Therapists Registration Board of Nigeria",
        description:
          "Consult the professional regulator for physiotherapy and other regulated rehabilitation professions.",
        url: "https://mrtb.gov.ng/"
      }
    ]
  },

  "radiographer": {
    stages: [
      {
        title: "Build Your Physics and Biology Foundation",
        description:
          "Learn the scientific concepts behind medical imaging and the human structures it helps reveal.",
        activities: [
          {
            title: "Study basic human anatomy",
            description:
              "Explore bones, organs, body systems, and anatomical positions used when describing the human body."
          },
          {
            title: "Understand waves and radiation",
            description:
              "Learn introductory physics concepts related to waves, electromagnetic radiation, energy, and how X-rays differ from visible light."
          },
          {
            title: "Strengthen scientific mathematics",
            description:
              "Practise unit conversions, ratios, graphs, and interpreting measurements."
          }
        ]
      },
      {
        title: "Explore Medical Imaging",
        description:
          "Understand the purpose of different imaging methods and the kinds of information they can provide.",
        activities: [
          {
            title: "Learn about X-ray imaging",
            description:
              "Explore how X-rays interact with different tissues and why bones often appear differently from soft tissues in an image."
          },
          {
            title: "Compare imaging techniques",
            description:
              "Learn the basic differences between X-ray, CT, MRI, and ultrasound, including which methods use ionising radiation."
          },
          {
            title: "Understand image quality",
            description:
              "Explore how positioning, movement, contrast, and equipment settings can affect diagnostic images."
          }
        ]
      },
      {
        title: "Understand Imaging Safety",
        description:
          "Learn why patient protection, careful procedures, and appropriate use of imaging are central to the profession.",
        activities: [
          {
            title: "Study radiation protection",
            description:
              "Explore justification, optimisation, exposure reduction, shielding policies where appropriate, and professional safety procedures."
          },
          {
            title: "Learn patient identification and preparation",
            description:
              "Understand why confirming identity, explaining procedures, checking relevant information, and respecting patient dignity matter."
          },
          {
            title: "Explore equipment quality assurance",
            description:
              "Learn why imaging equipment needs regular checks, maintenance, and quality-control procedures."
          }
        ]
      },
      {
        title: "Discover Imaging Practice",
        description:
          "Explore how radiographers work with patients and other healthcare professionals to produce useful images safely.",
        activities: [
          {
            title: "Explore positioning concepts",
            description:
              "Use diagrams or educational resources to understand how positioning influences the anatomy visible in an image."
          },
          {
            title: "Learn about image interpretation roles",
            description:
              "Understand the different responsibilities of radiographers and radiologists in producing images and interpreting diagnostic findings."
          },
          {
            title: "Explore specialisations",
            description:
              "Research areas such as CT, MRI, mammography, ultrasound where appropriately qualified, and interventional imaging."
          }
        ]
      },
      {
        title: "Research Your Radiography Pathway",
        description:
          "Understand the education and supervised practical training required for a professional imaging career.",
        activities: [
          {
            title: "Research recognised programmes",
            description:
              "Compare Radiography programmes in Nigeria and verify current admission requirements and accreditation."
          },
          {
            title: "Understand clinical placements",
            description:
              "Learn why supervised experience in imaging departments is essential to safe professional practice."
          },
          {
            title: "Build a learning portfolio",
            description:
              "Collect anatomy diagrams, imaging-method comparisons, radiation-safety notes, and reflections on patient care."
          }
        ]
      }
    ],
    resources: [
      {
        title: "RadiologyInfo",
        description:
          "Explore patient-friendly explanations of imaging examinations and medical imaging techniques.",
        url: "https://www.radiologyinfo.org/"
      },
      {
        title: "International Atomic Energy Agency",
        description:
          "Explore educational resources about radiation protection and safe medical uses of radiation.",
        url: "https://www.iaea.org/"
      },
      {
        title: "Radiopaedia",
        description:
          "Explore a medical imaging reference with educational cases and anatomy resources.",
        url: "https://radiopaedia.org/"
      },
      {
        title: "Radiographers Registration Board of Nigeria",
        description:
          "Consult the relevant professional regulator for current radiography education and registration information.",
        url: "https://rrbn.gov.ng/"
      }
    ]
  },
//Science & Environment

  "microbiologist": {
    stages: [
      {
        title: "Build Your Biology and Chemistry Foundation",
        description:
          "Understand microorganisms, cells, and the chemical processes that support life.",
        activities: [
          {
            title: "Explore the microbial world",
            description:
              "Learn about bacteria, viruses, fungi, protozoa, and the different environments in which microorganisms exist."
          },
          {
            title: "Study cells and life processes",
            description:
              "Explore cell structures, reproduction, metabolism, and how organisms obtain energy."
          },
          {
            title: "Strengthen chemistry skills",
            description:
              "Review atoms, molecules, chemical reactions, solutions, and the role of chemistry in biological systems."
          }
        ]
      },
      {
        title: "Understand Microbiology Fundamentals",
        description:
          "Discover how microorganisms interact with humans, animals, food, and the environment.",
        activities: [
          {
            title: "Explore beneficial and harmful microbes",
            description:
              "Learn about microorganisms involved in digestion, food production, decomposition, and infectious disease."
          },
          {
            title: "Understand infection and immunity",
            description:
              "Study how some microbes cause disease and how the immune system helps the body respond."
          },
          {
            title: "Explore microbial identification",
            description:
              "Learn how trained scientists use observations, laboratory tests, and molecular methods to identify microorganisms."
          }
        ]
      },
      {
        title: "Learn Laboratory Science and Safety",
        description:
          "Understand the methods and safeguards that help microbiologists work reliably and responsibly.",
        activities: [
          {
            title: "Explore microscopy",
            description:
              "Learn the basic parts of a microscope and how magnification and resolution affect what can be observed."
          },
          {
            title: "Understand contamination control",
            description:
              "Study aseptic principles, protective equipment, specimen handling, and why microbiological work requires appropriate facilities and supervision."
          },
          {
            title: "Learn about scientific evidence",
            description:
              "Explore controls, repeat observations, accurate records, and the difference between a hypothesis and a supported conclusion."
          }
        ]
      },
      {
        title: "Explore Microbiology Applications",
        description:
          "Discover how microbiology contributes to healthcare, food safety, agriculture, and industry.",
        activities: [
          {
            title: "Investigate food microbiology",
            description:
              "Learn how microorganisms can spoil food and how fermentation is used in products such as yoghurt and bread."
          },
          {
            title: "Explore environmental microbiology",
            description:
              "Study how microorganisms contribute to decomposition, nutrient cycling, wastewater treatment, and soil health."
          },
          {
            title: "Review a scientific case study",
            description:
              "Summarise a published example of how microbiologists investigate contamination, disease, or an industrial process."
          }
        ]
      },
      {
        title: "Plan Your Microbiology Pathway",
        description:
          "Research relevant degree programmes and prepare to develop your scientific and analytical skills.",
        activities: [
          {
            title: "Research university programmes",
            description:
              "Compare Microbiology programmes in Nigeria and verify current admission requirements and programme recognition."
          },
          {
            title: "Explore career directions",
            description:
              "Investigate opportunities in research, food quality, public health, pharmaceuticals, industrial microbiology, and environmental monitoring."
          },
          {
            title: "Create a science portfolio",
            description:
              "Collect research summaries, labelled diagrams, science notes, and reflections on microbiology applications."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Microbiology Society",
        description:
          "Explore accessible microbiology resources, activities, and explanations of the microbial world.",
        url: "https://microbiologysociety.org/"
      },
      {
        title: "Khan Academy",
        description:
          "Review biology, cell biology, and chemistry concepts relevant to microbiology.",
        url: "https://www.khanacademy.org/"
      },
      {
        title: "American Society for Microbiology",
        description:
          "Explore microbiology education, research topics, and scientific learning resources.",
        url: "https://asm.org/"
      },
      {
        title: "World Health Organization",
        description:
          "Learn about infectious diseases, antimicrobial resistance, and public health.",
        url: "https://www.who.int/"
      }
    ]
  },

  "biochemist": {
    stages: [
      {
        title: "Build Your Biology and Chemistry Foundation",
        description:
          "Learn how chemical principles explain the processes that happen inside living organisms.",
        activities: [
          {
            title: "Strengthen chemistry fundamentals",
            description:
              "Study chemical bonding, reactions, acids and bases, solutions, and introductory organic chemistry."
          },
          {
            title: "Explore cell biology",
            description:
              "Learn about cell structures, membranes, organelles, and how cells maintain their internal environment."
          },
          {
            title: "Understand biological molecules",
            description:
              "Explore proteins, carbohydrates, lipids, nucleic acids, and their roles in living systems."
          }
        ]
      },
      {
        title: "Understand Biochemistry",
        description:
          "Discover how enzymes, molecules, and chemical reactions support life.",
        activities: [
          {
            title: "Explore enzymes",
            description:
              "Learn how enzymes help reactions occur and how temperature, pH, and concentration can affect their activity."
          },
          {
            title: "Study metabolism",
            description:
              "Explore how organisms process nutrients and transfer energy through pathways such as cellular respiration."
          },
          {
            title: "Learn about DNA and proteins",
            description:
              "Understand the basic relationship between genetic information, protein production, and cellular function."
          }
        ]
      },
      {
        title: "Explore Scientific Methods",
        description:
          "Learn how researchers investigate biological molecules and evaluate experimental evidence.",
        activities: [
          {
            title: "Practise interpreting graphs",
            description:
              "Use sample datasets to explore how changes in temperature, pH, or concentration may relate to enzyme activity."
          },
          {
            title: "Understand laboratory instruments",
            description:
              "Learn the basic purposes of spectrophotometers, centrifuges, pipettes, and other scientific instruments."
          },
          {
            title: "Study experimental design",
            description:
              "Explore variables, controls, repeat measurements, uncertainty, and accurate recording of results."
          }
        ]
      },
      {
        title: "Explore Biochemistry Applications",
        description:
          "Connect molecular science to medicine, nutrition, agriculture, and biotechnology.",
        activities: [
          {
            title: "Investigate nutrition",
            description:
              "Explore how the body processes carbohydrates, proteins, fats, vitamins, and minerals."
          },
          {
            title: "Learn about diagnostic biochemistry",
            description:
              "Study how measurements of substances in biological samples can contribute to clinical investigations."
          },
          {
            title: "Explore biotechnology",
            description:
              "Research how enzymes, proteins, and biological processes are used in medicine, food production, and industry."
          }
        ]
      },
      {
        title: "Plan Your Biochemistry Pathway",
        description:
          "Explore further education and careers that combine chemistry, biology, and research.",
        activities: [
          {
            title: "Research degree programmes",
            description:
              "Compare Biochemistry programmes in Nigeria and check current admission requirements at your chosen institutions."
          },
          {
            title: "Explore possible careers",
            description:
              "Investigate research, biotechnology, pharmaceutical development, laboratory science, nutrition research, and quality assurance."
          },
          {
            title: "Build a learning portfolio",
            description:
              "Organise molecular diagrams, data interpretation exercises, research summaries, and reflections on biochemistry."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Khan Academy",
        description:
          "Study introductory biology, chemistry, and biomolecules.",
        url: "https://www.khanacademy.org/"
      },
      {
        title: "RCSB Protein Data Bank",
        description:
          "Explore three-dimensional structures of proteins and other biological molecules.",
        url: "https://www.rcsb.org/"
      },
      {
        title: "Nature Education",
        description:
          "Explore scientific explanations and educational material related to biology and molecular science.",
        url: "https://www.nature.com/scitable/"
      },
      {
        title: "MIT OpenCourseWare",
        description:
          "Access open course materials in chemistry, biology, and related sciences.",
        url: "https://ocw.mit.edu/"
      }
    ]
  },

  "chemist": {
    stages: [
      {
        title: "Build Your Chemistry Foundation",
        description:
          "Develop the core concepts used to explain substances, their properties, and how they change.",
        activities: [
          {
            title: "Understand atomic structure",
            description:
              "Study protons, neutrons, electrons, elements, isotopes, and the organisation of the periodic table."
          },
          {
            title: "Explore chemical bonding",
            description:
              "Learn about ionic, covalent, and metallic bonding and how bonding influences material properties."
          },
          {
            title: "Practise chemical calculations",
            description:
              "Work on balancing equations, relative masses, moles, concentrations, and introductory stoichiometry."
          }
        ]
      },
      {
        title: "Explore Major Areas of Chemistry",
        description:
          "Discover how different branches of chemistry investigate substances and reactions.",
        activities: [
          {
            title: "Study organic chemistry",
            description:
              "Explore carbon compounds, functional groups, and how molecular structure relates to properties."
          },
          {
            title: "Understand physical chemistry",
            description:
              "Learn introductory ideas about energy changes, reaction rates, equilibrium, and the behaviour of substances."
          },
          {
            title: "Explore analytical chemistry",
            description:
              "Discover how scientists identify substances and measure their concentrations using different analytical methods."
          }
        ]
      },
      {
        title: "Learn Scientific Investigation",
        description:
          "Understand how chemists design experiments, make observations, and report reliable findings.",
        activities: [
          {
            title: "Practise interpreting data",
            description:
              "Use sample tables and graphs to compare results, identify trends, and recognise unusual measurements."
          },
          {
            title: "Explore laboratory equipment",
            description:
              "Learn the purpose of balances, measuring cylinders, pipettes, and other common laboratory equipment."
          },
          {
            title: "Understand chemical safety",
            description:
              "Learn how hazard labels, safety data sheets, protective equipment, and proper waste handling reduce risks. Perform experiments only in suitable supervised settings."
          }
        ]
      },
      {
        title: "Discover Chemistry in Everyday Life",
        description:
          "Connect chemistry to manufacturing, food, water, materials, and environmental protection.",
        activities: [
          {
            title: "Explore water quality",
            description:
              "Learn what pH, dissolved substances, and contamination indicators can tell us about water, and why appropriate testing matters."
          },
          {
            title: "Investigate materials",
            description:
              "Compare the properties and uses of polymers, metals, ceramics, and other materials."
          },
          {
            title: "Research industrial chemistry",
            description:
              "Explore how chemical processes contribute to pharmaceuticals, agriculture, food production, energy, and manufacturing."
          }
        ]
      },
      {
        title: "Plan Your Chemistry Career",
        description:
          "Research further education and the many fields where chemistry knowledge can be applied.",
        activities: [
          {
            title: "Research university programmes",
            description:
              "Compare Chemistry programmes in Nigeria and verify the current admission requirements of selected institutions."
          },
          {
            title: "Explore specialisations",
            description:
              "Investigate analytical, industrial, environmental, materials, medicinal, and research chemistry."
          },
          {
            title: "Prepare a science portfolio",
            description:
              "Collect worked calculations, labelled diagrams, data interpretation exercises, and summaries of chemistry applications."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Chemistry LibreTexts",
        description:
          "Explore open educational material across major areas of chemistry.",
        url: "https://chem.libretexts.org/"
      },
      {
        title: "Royal Society of Chemistry",
        description:
          "Discover chemistry explanations, learning activities, and resources for students.",
        url: "https://www.rsc.org/"
      },
      {
        title: "PhET Interactive Simulations",
        description:
          "Use interactive simulations to explore atoms, molecules, reactions, and other science concepts.",
        url: "https://phet.colorado.edu/"
      },
      {
        title: "Khan Academy",
        description:
          "Practise chemistry concepts and foundational calculations.",
        url: "https://www.khanacademy.org/"
      }
    ]
  },

  "agricultural-scientist": {
    stages: [
      {
        title: "Understand Plants, Animals, and Soil",
        description:
          "Build a foundation in biology and environmental science to understand agricultural systems.",
        activities: [
          {
            title: "Explore plant growth",
            description:
              "Learn about seeds, roots, stems, leaves, photosynthesis, and the factors plants need to grow."
          },
          {
            title: "Study soil fundamentals",
            description:
              "Explore soil texture, nutrients, organic matter, drainage, and the role soil plays in supporting crops."
          },
          {
            title: "Understand agricultural ecosystems",
            description:
              "Learn how crops, livestock, insects, microorganisms, water, and weather interact on farms."
          }
        ]
      },
      {
        title: "Learn Crop and Livestock Systems",
        description:
          "Discover the scientific principles behind producing food and managing agricultural resources.",
        activities: [
          {
            title: "Explore crop production",
            description:
              "Research how crop choice, planting time, spacing, water, and soil conditions influence growth."
          },
          {
            title: "Understand livestock management",
            description:
              "Learn the basic roles of animal nutrition, housing, welfare, breeding, and disease prevention."
          },
          {
            title: "Study pests and plant health",
            description:
              "Explore common categories of crop pests and diseases and the principles of integrated pest management."
          }
        ]
      },
      {
        title: "Explore Agricultural Research",
        description:
          "Learn how observations, measurements, and experiments help improve agricultural practices.",
        activities: [
          {
            title: "Keep a sample field record",
            description:
              "Design a record sheet for planting dates, rainfall observations, crop growth, and other relevant measurements."
          },
          {
            title: "Understand experimental comparisons",
            description:
              "Use a fictional dataset to compare crop growth under different conditions and consider which factors may explain the differences."
          },
          {
            title: "Explore weather and farm decisions",
            description:
              "Learn how rainfall forecasts, temperature, and seasonal patterns can inform planting and farm planning without guaranteeing outcomes."
          }
        ]
      },
      {
        title: "Discover Modern and Sustainable Agriculture",
        description:
          "Explore how science and technology can support productive farming and responsible resource use.",
        activities: [
          {
            title: "Learn about precision agriculture",
            description:
              "Explore how GPS, sensors, satellite imagery, and data can help farmers monitor crops and manage resources."
          },
          {
            title: "Investigate soil and water conservation",
            description:
              "Research crop rotation, mulching, erosion control, water-efficient irrigation, and other conservation practices."
          },
          {
            title: "Explore agricultural value chains",
            description:
              "Trace how crops or livestock products move from production through storage, processing, transport, and markets."
          }
        ]
      },
      {
        title: "Plan Your Agricultural Science Pathway",
        description:
          "Explore educational routes and career opportunities in agricultural research and production.",
        activities: [
          {
            title: "Research relevant programmes",
            description:
              "Compare Agricultural Science and related degree programmes in Nigeria and check current admission requirements."
          },
          {
            title: "Explore specialisations",
            description:
              "Investigate agronomy, soil science, crop protection, animal science, agricultural economics, and extension services."
          },
          {
            title: "Build a project portfolio",
            description:
              "Prepare a small research proposal or agricultural observation report with clear objectives, findings, and limitations."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Food and Agriculture Organization",
        description:
          "Explore global resources on crop production, livestock, food systems, and sustainable agriculture.",
        url: "https://www.fao.org/"
      },
      {
        title: "CGIAR",
        description:
          "Discover agricultural research addressing food security, climate resilience, and farming systems.",
        url: "https://www.cgiar.org/"
      },
      {
        title: "IITA",
        description:
          "Explore agricultural research and innovations relevant to tropical farming and African food systems.",
        url: "https://www.iita.org/"
      },
      {
        title: "NiMet",
        description:
          "Consult Nigeria's meteorological agency for weather and climate information relevant to agricultural planning.",
        url: "https://nimet.gov.ng/"
      }
    ]
  },

  "environmental-scientist": {
    stages: [
      {
        title: "Build Your Environmental Science Foundation",
        description:
          "Understand how natural systems work and how human activities can change them.",
        activities: [
          {
            title: "Explore ecosystems",
            description:
              "Study food chains, biodiversity, habitats, energy flow, and interactions between organisms and their environment."
          },
          {
            title: "Learn about Earth's systems",
            description:
              "Explore the water cycle, atmosphere, soil, rocks, and how these systems interact."
          },
          {
            title: "Strengthen scientific reasoning",
            description:
              "Practise reading graphs, comparing observations, and distinguishing measured evidence from assumptions."
          }
        ]
      },
      {
        title: "Understand Pollution and Environmental Change",
        description:
          "Explore the causes, effects, and measurement of common environmental problems.",
        activities: [
          {
            title: "Study air and water pollution",
            description:
              "Learn about common pollutants, their sources, their possible effects, and approaches to monitoring them."
          },
          {
            title: "Explore waste management",
            description:
              "Compare waste reduction, reuse, recycling, composting, and safe disposal."
          },
          {
            title: "Understand climate change",
            description:
              "Learn about greenhouse gases, observed climate trends, potential impacts, and adaptation and mitigation strategies."
          }
        ]
      },
      {
        title: "Learn Environmental Monitoring",
        description:
          "Discover how scientists collect and interpret evidence about environmental conditions.",
        activities: [
          {
            title: "Design a simple observation study",
            description:
              "Plan a non-hazardous observation project, such as documenting litter types around a public area without handling dangerous waste."
          },
          {
            title: "Explore environmental measurements",
            description:
              "Learn what measurements such as temperature, rainfall, pH, and particulate matter can tell us about environmental conditions."
          },
          {
            title: "Practise data interpretation",
            description:
              "Use a sample dataset to create a graph, identify trends, and explain limitations in the available evidence."
          }
        ]
      },
      {
        title: "Explore Conservation and Environmental Solutions",
        description:
          "Learn how science supports conservation, environmental planning, and more sustainable communities.",
        activities: [
          {
            title: "Investigate local environmental challenges",
            description:
              "Research a documented issue such as erosion, flooding, deforestation, or waste disposal in a Nigerian community."
          },
          {
            title: "Compare possible interventions",
            description:
              "Evaluate potential solutions by considering environmental impact, cost, feasibility, and community needs."
          },
          {
            title: "Prepare an evidence-based proposal",
            description:
              "Write a short proposal outlining the problem, supporting evidence, suggested action, and how its effectiveness could be evaluated."
          }
        ]
      },
      {
        title: "Plan Your Environmental Science Career",
        description:
          "Explore further education and careers in environmental research, monitoring, and management.",
        activities: [
          {
            title: "Research relevant programmes",
            description:
              "Compare Environmental Science and related programmes in Nigeria and verify current entry requirements."
          },
          {
            title: "Explore career pathways",
            description:
              "Investigate conservation, environmental assessment, pollution monitoring, climate research, waste management, and sustainability."
          },
          {
            title: "Build an environmental portfolio",
            description:
              "Collect research summaries, graphs, observation reports, and a proposal addressing a real environmental issue."
          }
        ]
      }
    ],
    resources: [
      {
        title: "United Nations Environment Programme",
        description:
          "Explore global information about pollution, ecosystems, climate change, and environmental solutions.",
        url: "https://www.unep.org/"
      },
      {
        title: "NASA Climate",
        description:
          "Learn about climate science through explanations, data, and visual resources.",
        url: "https://science.nasa.gov/climate-change/"
      },
      {
        title: "Our World in Data",
        description:
          "Explore environmental datasets and visualisations on energy, emissions, land use, and related topics.",
        url: "https://ourworldindata.org/"
      },
      {
        title: "Nigerian Meteorological Agency",
        description:
          "Explore official weather and climate information for Nigeria.",
        url: "https://nimet.gov.ng/"
      }
    ]
  },
//Business

};
