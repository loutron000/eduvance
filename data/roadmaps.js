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
              "Explore cells, tissues, organs, body systems, and how they work together to maintain life.",
          },
          {
            title: "Strengthen chemistry and physics",
            description:
              "Learn basic chemical reactions, solutions, pressure, energy, and other concepts relevant to human biology.",
          },
          {
            title: "Practise scientific reasoning",
            description:
              "Use reliable educational sources to investigate a health-related question and distinguish evidence from assumptions.",
          },
        ],
      },
      {
        title: "Understand the Human Body",
        description:
          "Explore anatomy and physiology to understand how healthy body systems function.",
        activities: [
          {
            title: "Learn the major body systems",
            description:
              "Study the circulatory, respiratory, digestive, nervous, skeletal, muscular, and other major systems.",
          },
          {
            title: "Explore how systems interact",
            description:
              "Choose an everyday activity, such as running, and explain how multiple body systems work together.",
          },
          {
            title: "Learn health and disease basics",
            description:
              "Explore how infections, genetics, nutrition, and environmental factors can affect health.",
          },
        ],
      },
      {
        title: "Discover Medical Practice",
        description:
          "Understand how doctors assess patients, use evidence, and work with other healthcare professionals.",
        activities: [
          {
            title: "Explore clinical reasoning",
            description:
              "Use fictional educational cases to understand how symptoms, medical history, examination, and tests contribute to clinical decisions.",
          },
          {
            title: "Learn about medical ethics",
            description:
              "Explore confidentiality, informed consent, respect, patient autonomy, and professional responsibility.",
          },
          {
            title: "Understand public health",
            description:
              "Investigate how vaccination, sanitation, health education, and disease prevention support communities.",
          },
        ],
      },
      {
        title: "Explore Medical Education and Training",
        description:
          "Research the demanding academic and supervised clinical pathway required to become a doctor.",
        activities: [
          {
            title: "Research Nigerian medical programmes",
            description:
              "Compare recognised medical schools and verify current JAMB, O'level, admission, and programme requirements.",
          },
          {
            title: "Understand clinical training",
            description:
              "Learn about medical school learning, supervised clinical rotations, and the transition into internship and professional registration.",
          },
          {
            title: "Explore medical specialities",
            description:
              "Research fields such as paediatrics, surgery, internal medicine, obstetrics and gynaecology, and community medicine.",
          },
        ],
      },
      {
        title: "Prepare for a Career in Medicine",
        description:
          "Develop the study habits, communication skills, and realistic expectations that support a future in medicine.",
        activities: [
          {
            title: "Create a science study plan",
            description:
              "Set a consistent schedule for biology, chemistry, physics, and English, with time for revision and practice questions.",
          },
          {
            title: "Practise clear communication",
            description:
              "Summarise a health topic in simple language and consider how a healthcare professional should communicate respectfully.",
          },
          {
            title: "Reflect on the responsibilities",
            description:
              "Consider the emotional demands, ethical responsibilities, teamwork, and lifelong learning involved in medical practice.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Khan Academy",
        description:
          "Study biology, chemistry, and human anatomy and physiology foundations.",
        url: "https://www.khanacademy.org/",
      },
      {
        title: "World Health Organization",
        description:
          "Explore reliable information about health, diseases, prevention, and public health.",
        url: "https://www.who.int/",
      },
      {
        title: "Medical and Dental Council of Nigeria",
        description:
          "Check information about medical education, registration, and professional regulation in Nigeria.",
        url: "https://mdcn.gov.ng/",
      },
      {
        title: "JAMB",
        description:
          "Consult official information and current admission materials when researching medical programmes.",
        url: "https://www.jamb.gov.ng/",
      },
    ],
  },

  nurse: {
    stages: [
      {
        title: "Build Your Biology and Health Foundation",
        description:
          "Learn the basic science concepts that help explain the human body, illness, and health.",
        activities: [
          {
            title: "Study human body systems",
            description:
              "Explore the heart, lungs, digestive system, brain, muscles, and other major body systems.",
          },
          {
            title: "Understand infection and prevention",
            description:
              "Learn how microorganisms spread and why hand hygiene, sanitation, vaccination, and infection prevention matter.",
          },
          {
            title: "Develop communication skills",
            description:
              "Practise listening carefully, explaining information clearly, and communicating respectfully with people of different backgrounds.",
          },
        ],
      },
      {
        title: "Understand Nursing and Patient Care",
        description:
          "Explore how nurses support patients, promote health, and work as part of healthcare teams.",
        activities: [
          {
            title: "Explore the nursing role",
            description:
              "Learn about patient observation, health education, care planning, advocacy, and collaboration with other professionals.",
          },
          {
            title: "Learn basic vital-sign concepts",
            description:
              "Study what temperature, pulse, breathing rate, blood pressure, and oxygen saturation indicate in general terms.",
          },
          {
            title: "Understand dignity and confidentiality",
            description:
              "Explore privacy, consent, respect, safeguarding, and professional boundaries in patient care.",
          },
        ],
      },
      {
        title: "Explore Safe Care and Clinical Reasoning",
        description:
          "Learn how nurses recognise concerns, follow procedures, and contribute to safe patient care.",
        activities: [
          {
            title: "Study patient safety",
            description:
              "Learn why accurate documentation, identity checks, infection control, and clear communication are important.",
          },
          {
            title: "Explore health scenarios",
            description:
              "Use fictional educational cases to identify relevant observations and understand when a trained professional must be involved.",
          },
          {
            title: "Learn about emergency response",
            description:
              "Explore the purpose of first aid and how to seek emergency assistance. Practise clinical procedures only through appropriate supervised training.",
          },
        ],
      },
      {
        title: "Research Nursing Education",
        description:
          "Understand the recognised education and registration routes into nursing in Nigeria.",
        activities: [
          {
            title: "Compare nursing programmes",
            description:
              "Research recognised nursing schools and university programmes, checking current admission criteria and entry requirements.",
          },
          {
            title: "Understand supervised clinical practice",
            description:
              "Learn why practical placements and supervised skills training are essential components of nursing education.",
          },
          {
            title: "Explore nursing specialities",
            description:
              "Investigate areas such as paediatric, community, mental health, emergency, and maternal health nursing.",
          },
        ],
      },
      {
        title: "Prepare for the Profession",
        description:
          "Build the learning habits and people skills that support safe, compassionate nursing practice.",
        activities: [
          {
            title: "Plan your science revision",
            description:
              "Create a weekly study schedule for relevant science subjects, English, and examination practice.",
          },
          {
            title: "Practise explaining health information",
            description:
              "Summarise a reliable health resource in simple language while avoiding unsupported medical claims.",
          },
          {
            title: "Reflect on nursing responsibilities",
            description:
              "Consider teamwork, shift work, emotional resilience, patient advocacy, and lifelong professional development.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "World Health Organization",
        description:
          "Explore evidence-based public health information and global nursing priorities.",
        url: "https://www.who.int/",
      },
      {
        title: "Khan Academy",
        description:
          "Review biology, anatomy, physiology, and related science foundations.",
        url: "https://www.khanacademy.org/",
      },
      {
        title: "Nursing and Midwifery Council of Nigeria",
        description:
          "Consult the official regulator for information about nursing education and professional registration.",
        url: "https://www.nmcn.gov.ng/",
      },
      {
        title: "UNICEF",
        description:
          "Learn about child health, maternal health, nutrition, and community wellbeing.",
        url: "https://www.unicef.org/",
      },
    ],
  },

  pharmacist: {
    stages: [
      {
        title: "Build Your Chemistry and Biology Foundation",
        description:
          "Learn the science behind medicines, the human body, and how substances interact.",
        activities: [
          {
            title: "Strengthen chemistry",
            description:
              "Study atoms, molecules, chemical reactions, solutions, acids and bases, and introductory organic chemistry.",
          },
          {
            title: "Explore human biology",
            description:
              "Learn about body systems, cells, enzymes, and the basic processes that affect how the body responds to substances.",
          },
          {
            title: "Practise accurate calculations",
            description:
              "Build confidence with fractions, ratios, percentages, unit conversions, and scientific notation.",
          },
        ],
      },
      {
        title: "Understand Medicines",
        description:
          "Explore what medicines do, how they are developed, and why their use must be carefully managed.",
        activities: [
          {
            title: "Learn medicine terminology",
            description:
              "Understand the difference between active ingredients, dosage forms, routes of administration, and brand and generic names.",
          },
          {
            title: "Explore pharmacology basics",
            description:
              "Study introductory concepts such as how medicines affect the body and how the body processes them.",
          },
          {
            title: "Understand medicine safety",
            description:
              "Learn why correct use, side effects, interactions, storage, and professional guidance matter.",
          },
        ],
      },
      {
        title: "Explore Pharmacy Practice",
        description:
          "Discover the different ways pharmacists contribute to patient care and the safe use of medicines.",
        activities: [
          {
            title: "Explore patient counselling",
            description:
              "Study how pharmacists explain medicine instructions, precautions, storage, and when patients should seek further advice.",
          },
          {
            title: "Understand medicine quality",
            description:
              "Learn about medicine storage, quality assurance, expiry dates, and the risks of counterfeit or substandard products.",
          },
          {
            title: "Explore pharmacy settings",
            description:
              "Compare community pharmacy, hospital pharmacy, pharmaceutical manufacturing, research, and regulatory work.",
          },
        ],
      },
      {
        title: "Learn About Research and Regulation",
        description:
          "Understand why medicines must be evaluated, manufactured, distributed, and used under appropriate safeguards.",
        activities: [
          {
            title: "Explore medicine development",
            description:
              "Learn the broad stages of research, clinical evaluation, approval, manufacturing, and post-market safety monitoring.",
          },
          {
            title: "Understand evidence-based decisions",
            description:
              "Compare reliable medicine information with unsupported health claims and learn to check trustworthy sources.",
          },
          {
            title: "Research Nigerian regulation",
            description:
              "Explore the roles of the Pharmacy Council of Nigeria and NAFDAC in their respective areas of professional regulation and medicine oversight.",
          },
        ],
      },
      {
        title: "Plan Your Pharmacy Pathway",
        description:
          "Research the formal education and professional requirements for becoming a pharmacist.",
        activities: [
          {
            title: "Research accredited programmes",
            description:
              "Compare recognised pharmacy programmes in Nigeria and verify current JAMB, O'level, and institutional requirements.",
          },
          {
            title: "Understand professional progression",
            description:
              "Investigate required training, registration, and other current requirements through official regulatory sources.",
          },
          {
            title: "Create a science learning portfolio",
            description:
              "Collect chemistry summaries, biology notes, medicine-safety research, and reflections on pharmacy specialities.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Khan Academy",
        description:
          "Strengthen chemistry, biology, and related scientific foundations.",
        url: "https://www.khanacademy.org/",
      },
      {
        title: "MedlinePlus",
        description:
          "Explore accessible, evidence-based information about medicines and health.",
        url: "https://medlineplus.gov/",
      },
      {
        title: "Pharmacy Council of Nigeria",
        description:
          "Consult the official regulator for pharmacy education and professional practice information.",
        url: "https://pcn.gov.ng/",
      },
      {
        title: "NAFDAC",
        description:
          "Learn about medicine regulation, product safety, and public health protection in Nigeria.",
        url: "https://nafdac.gov.ng/",
      },
    ],
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
              "Explore cells, bacteria, viruses, fungi, and the roles microorganisms play in health and disease.",
          },
          {
            title: "Understand basic chemistry",
            description:
              "Review solutions, concentrations, chemical reactions, and the importance of accurate measurements.",
          },
          {
            title: "Practise scientific observation",
            description:
              "Learn to record observations accurately, distinguish evidence from assumptions, and communicate results clearly.",
          },
        ],
      },
      {
        title: "Explore Laboratory Science",
        description:
          "Understand how laboratory investigations help healthcare professionals assess health and disease.",
        activities: [
          {
            title: "Explore major laboratory disciplines",
            description:
              "Learn about haematology, clinical chemistry, medical microbiology, histopathology, and immunology.",
          },
          {
            title: "Understand specimen handling",
            description:
              "Study why specimen identification, correct collection, transport, storage, and documentation affect test reliability.",
          },
          {
            title: "Learn quality control concepts",
            description:
              "Explore calibration, controls, reference ranges, repeat testing, and the importance of reliable results.",
          },
        ],
      },
      {
        title: "Understand Laboratory Safety and Equipment",
        description:
          "Learn the principles of safe laboratory work and the tools used to examine samples.",
        activities: [
          {
            title: "Explore common laboratory instruments",
            description:
              "Learn the purposes of microscopes, centrifuges, pipettes, and basic analytical instruments.",
          },
          {
            title: "Study laboratory safety",
            description:
              "Understand protective equipment, hazard labels, waste handling, contamination prevention, and safe conduct.",
          },
          {
            title: "Practise interpreting sample results",
            description:
              "Use fictional educational examples to understand units, reference intervals, quality limitations, and why results require professional interpretation.",
          },
        ],
      },
      {
        title: "Explore Diagnostics and Research",
        description:
          "Discover how laboratory findings contribute to patient care, public health, and scientific research.",
        activities: [
          {
            title: "Follow a fictional diagnostic case",
            description:
              "Trace how a sample may be received, processed, tested, checked, and reported in a properly managed laboratory.",
          },
          {
            title: "Explore disease surveillance",
            description:
              "Learn how laboratory data can help identify outbreaks and monitor infectious diseases.",
          },
          {
            title: "Understand professional ethics",
            description:
              "Study confidentiality, accurate reporting, quality assurance, and the importance of avoiding unsupported conclusions.",
          },
        ],
      },
      {
        title: "Research Your Education Pathway",
        description:
          "Understand the academic and supervised practical training needed for a career in medical laboratory science.",
        activities: [
          {
            title: "Compare recognised programmes",
            description:
              "Research Medical Laboratory Science programmes in Nigeria and verify current admission requirements and accreditation.",
          },
          {
            title: "Explore career opportunities",
            description:
              "Investigate diagnostic laboratories, hospitals, public health, research, quality assurance, and laboratory management.",
          },
          {
            title: "Build a science portfolio",
            description:
              "Collect laboratory concept notes, sample-result interpretation exercises, and reflections on laboratory safety and accuracy.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Lab Tests Online",
        description:
          "Explore educational explanations of laboratory tests and their general purposes.",
        url: "https://www.testing.com/",
      },
      {
        title: "Khan Academy",
        description:
          "Review biology, chemistry, and other science foundations relevant to laboratory work.",
        url: "https://www.khanacademy.org/",
      },
      {
        title: "World Health Organization",
        description:
          "Explore public health laboratory guidance, disease information, and laboratory quality resources.",
        url: "https://www.who.int/",
      },
      {
        title: "Medical Laboratory Science Council of Nigeria",
        description:
          "Consult the official professional regulator for education and practice information.",
        url: "https://web.mlscn.gov.ng/",
      },
    ],
  },

  physiotherapist: {
    stages: [
      {
        title: "Understand the Human Body and Movement",
        description:
          "Build the biology and physics foundation needed to understand movement, posture, and physical function.",
        activities: [
          {
            title: "Explore bones and joints",
            description:
              "Learn about the skeleton, joint types, and how bones provide support and enable movement.",
          },
          {
            title: "Study muscles and nerves",
            description:
              "Explore how muscles contract and how the nervous system helps coordinate movement.",
          },
          {
            title: "Understand forces and balance",
            description:
              "Use everyday examples to explore gravity, leverage, stability, posture, and movement.",
          },
        ],
      },
      {
        title: "Explore Physiotherapy",
        description:
          "Learn how physiotherapists support movement, function, recovery, and quality of life.",
        activities: [
          {
            title: "Discover areas of practice",
            description:
              "Explore musculoskeletal, neurological, paediatric, cardiorespiratory, and sports physiotherapy.",
          },
          {
            title: "Understand rehabilitation",
            description:
              "Learn how rehabilitation plans may support recovery, mobility, strength, balance, and daily activities.",
          },
          {
            title: "Explore person-centred care",
            description:
              "Understand why treatment goals should consider an individual's needs, abilities, preferences, and professional assessment.",
          },
        ],
      },
      {
        title: "Learn About Assessment and Exercise",
        description:
          "Understand the principles behind movement assessment and structured rehabilitation.",
        activities: [
          {
            title: "Explore movement observation",
            description:
              "Study how posture, walking, joint movement, and balance can be observed in educational examples.",
          },
          {
            title: "Understand exercise principles",
            description:
              "Learn introductory ideas about gradual progression, repetition, rest, and adapting activities to individual needs.",
          },
          {
            title: "Study safe practice",
            description:
              "Explore why qualified assessment, consent, precautions, and supervision are important before providing treatment.",
          },
        ],
      },
      {
        title: "Explore Rehabilitation in Real Life",
        description:
          "Learn how physiotherapists work with patients and other professionals across different settings.",
        activities: [
          {
            title: "Review fictional case studies",
            description:
              "Consider how rehabilitation goals might differ for someone recovering from an injury versus someone managing a long-term movement condition.",
          },
          {
            title: "Explore assistive equipment",
            description:
              "Learn the general purposes of mobility aids and how appropriate assessment helps determine their use.",
          },
          {
            title: "Understand teamwork",
            description:
              "Explore how physiotherapists collaborate with doctors, nurses, occupational therapists, and families.",
          },
        ],
      },
      {
        title: "Plan Your Physiotherapy Pathway",
        description:
          "Research the formal education, clinical placements, and professional requirements for physiotherapy.",
        activities: [
          {
            title: "Research recognised programmes",
            description:
              "Compare physiotherapy programmes in Nigeria and verify current entry requirements and accreditation.",
          },
          {
            title: "Understand supervised clinical education",
            description:
              "Learn why practical placements and supervised patient-care experience are essential.",
          },
          {
            title: "Build a learning portfolio",
            description:
              "Collect anatomy notes, movement diagrams, rehabilitation research summaries, and reflections on patient-centred care.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Physiopedia",
        description:
          "Explore educational material about rehabilitation, movement, and physiotherapy practice.",
        url: "https://www.physio-pedia.com/",
      },
      {
        title: "Khan Academy",
        description:
          "Study biology, anatomy, physiology, and related science foundations.",
        url: "https://www.khanacademy.org/",
      },
      {
        title: "World Physiotherapy",
        description:
          "Learn about the physiotherapy profession and its role in health and rehabilitation.",
        url: "https://world.physio/",
      },
      {
        title:
          "Medical Rehabilitation Therapists Registration Board of Nigeria",
        description:
          "Consult the professional regulator for physiotherapy and other regulated rehabilitation professions.",
        url: "https://mrtb.gov.ng/",
      },
    ],
  },

  radiographer: {
    stages: [
      {
        title: "Build Your Physics and Biology Foundation",
        description:
          "Learn the scientific concepts behind medical imaging and the human structures it helps reveal.",
        activities: [
          {
            title: "Study basic human anatomy",
            description:
              "Explore bones, organs, body systems, and anatomical positions used when describing the human body.",
          },
          {
            title: "Understand waves and radiation",
            description:
              "Learn introductory physics concepts related to waves, electromagnetic radiation, energy, and how X-rays differ from visible light.",
          },
          {
            title: "Strengthen scientific mathematics",
            description:
              "Practise unit conversions, ratios, graphs, and interpreting measurements.",
          },
        ],
      },
      {
        title: "Explore Medical Imaging",
        description:
          "Understand the purpose of different imaging methods and the kinds of information they can provide.",
        activities: [
          {
            title: "Learn about X-ray imaging",
            description:
              "Explore how X-rays interact with different tissues and why bones often appear differently from soft tissues in an image.",
          },
          {
            title: "Compare imaging techniques",
            description:
              "Learn the basic differences between X-ray, CT, MRI, and ultrasound, including which methods use ionising radiation.",
          },
          {
            title: "Understand image quality",
            description:
              "Explore how positioning, movement, contrast, and equipment settings can affect diagnostic images.",
          },
        ],
      },
      {
        title: "Understand Imaging Safety",
        description:
          "Learn why patient protection, careful procedures, and appropriate use of imaging are central to the profession.",
        activities: [
          {
            title: "Study radiation protection",
            description:
              "Explore justification, optimisation, exposure reduction, shielding policies where appropriate, and professional safety procedures.",
          },
          {
            title: "Learn patient identification and preparation",
            description:
              "Understand why confirming identity, explaining procedures, checking relevant information, and respecting patient dignity matter.",
          },
          {
            title: "Explore equipment quality assurance",
            description:
              "Learn why imaging equipment needs regular checks, maintenance, and quality-control procedures.",
          },
        ],
      },
      {
        title: "Discover Imaging Practice",
        description:
          "Explore how radiographers work with patients and other healthcare professionals to produce useful images safely.",
        activities: [
          {
            title: "Explore positioning concepts",
            description:
              "Use diagrams or educational resources to understand how positioning influences the anatomy visible in an image.",
          },
          {
            title: "Learn about image interpretation roles",
            description:
              "Understand the different responsibilities of radiographers and radiologists in producing images and interpreting diagnostic findings.",
          },
          {
            title: "Explore specialisations",
            description:
              "Research areas such as CT, MRI, mammography, ultrasound where appropriately qualified, and interventional imaging.",
          },
        ],
      },
      {
        title: "Research Your Radiography Pathway",
        description:
          "Understand the education and supervised practical training required for a professional imaging career.",
        activities: [
          {
            title: "Research recognised programmes",
            description:
              "Compare Radiography programmes in Nigeria and verify current admission requirements and accreditation.",
          },
          {
            title: "Understand clinical placements",
            description:
              "Learn why supervised experience in imaging departments is essential to safe professional practice.",
          },
          {
            title: "Build a learning portfolio",
            description:
              "Collect anatomy diagrams, imaging-method comparisons, radiation-safety notes, and reflections on patient care.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "RadiologyInfo",
        description:
          "Explore patient-friendly explanations of imaging examinations and medical imaging techniques.",
        url: "https://www.radiologyinfo.org/",
      },
      {
        title: "International Atomic Energy Agency",
        description:
          "Explore educational resources about radiation protection and safe medical uses of radiation.",
        url: "https://www.iaea.org/",
      },
      {
        title: "Radiopaedia",
        description:
          "Explore a medical imaging reference with educational cases and anatomy resources.",
        url: "https://radiopaedia.org/",
      },
      {
        title: "Radiographers Registration Board of Nigeria",
        description:
          "Consult the relevant professional regulator for current radiography education and registration information.",
        url: "https://rrbn.gov.ng/",
      },
    ],
  },
  //Science & Environment

  microbiologist: {
    stages: [
      {
        title: "Build Your Biology and Chemistry Foundation",
        description:
          "Understand microorganisms, cells, and the chemical processes that support life.",
        activities: [
          {
            title: "Explore the microbial world",
            description:
              "Learn about bacteria, viruses, fungi, protozoa, and the different environments in which microorganisms exist.",
          },
          {
            title: "Study cells and life processes",
            description:
              "Explore cell structures, reproduction, metabolism, and how organisms obtain energy.",
          },
          {
            title: "Strengthen chemistry skills",
            description:
              "Review atoms, molecules, chemical reactions, solutions, and the role of chemistry in biological systems.",
          },
        ],
      },
      {
        title: "Understand Microbiology Fundamentals",
        description:
          "Discover how microorganisms interact with humans, animals, food, and the environment.",
        activities: [
          {
            title: "Explore beneficial and harmful microbes",
            description:
              "Learn about microorganisms involved in digestion, food production, decomposition, and infectious disease.",
          },
          {
            title: "Understand infection and immunity",
            description:
              "Study how some microbes cause disease and how the immune system helps the body respond.",
          },
          {
            title: "Explore microbial identification",
            description:
              "Learn how trained scientists use observations, laboratory tests, and molecular methods to identify microorganisms.",
          },
        ],
      },
      {
        title: "Learn Laboratory Science and Safety",
        description:
          "Understand the methods and safeguards that help microbiologists work reliably and responsibly.",
        activities: [
          {
            title: "Explore microscopy",
            description:
              "Learn the basic parts of a microscope and how magnification and resolution affect what can be observed.",
          },
          {
            title: "Understand contamination control",
            description:
              "Study aseptic principles, protective equipment, specimen handling, and why microbiological work requires appropriate facilities and supervision.",
          },
          {
            title: "Learn about scientific evidence",
            description:
              "Explore controls, repeat observations, accurate records, and the difference between a hypothesis and a supported conclusion.",
          },
        ],
      },
      {
        title: "Explore Microbiology Applications",
        description:
          "Discover how microbiology contributes to healthcare, food safety, agriculture, and industry.",
        activities: [
          {
            title: "Investigate food microbiology",
            description:
              "Learn how microorganisms can spoil food and how fermentation is used in products such as yoghurt and bread.",
          },
          {
            title: "Explore environmental microbiology",
            description:
              "Study how microorganisms contribute to decomposition, nutrient cycling, wastewater treatment, and soil health.",
          },
          {
            title: "Review a scientific case study",
            description:
              "Summarise a published example of how microbiologists investigate contamination, disease, or an industrial process.",
          },
        ],
      },
      {
        title: "Plan Your Microbiology Pathway",
        description:
          "Research relevant degree programmes and prepare to develop your scientific and analytical skills.",
        activities: [
          {
            title: "Research university programmes",
            description:
              "Compare Microbiology programmes in Nigeria and verify current admission requirements and programme recognition.",
          },
          {
            title: "Explore career directions",
            description:
              "Investigate opportunities in research, food quality, public health, pharmaceuticals, industrial microbiology, and environmental monitoring.",
          },
          {
            title: "Create a science portfolio",
            description:
              "Collect research summaries, labelled diagrams, science notes, and reflections on microbiology applications.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Microbiology Society",
        description:
          "Explore accessible microbiology resources, activities, and explanations of the microbial world.",
        url: "https://microbiologysociety.org/",
      },
      {
        title: "Khan Academy",
        description:
          "Review biology, cell biology, and chemistry concepts relevant to microbiology.",
        url: "https://www.khanacademy.org/",
      },
      {
        title: "American Society for Microbiology",
        description:
          "Explore microbiology education, research topics, and scientific learning resources.",
        url: "https://asm.org/",
      },
      {
        title: "World Health Organization",
        description:
          "Learn about infectious diseases, antimicrobial resistance, and public health.",
        url: "https://www.who.int/",
      },
    ],
  },

  biochemist: {
    stages: [
      {
        title: "Build Your Biology and Chemistry Foundation",
        description:
          "Learn how chemical principles explain the processes that happen inside living organisms.",
        activities: [
          {
            title: "Strengthen chemistry fundamentals",
            description:
              "Study chemical bonding, reactions, acids and bases, solutions, and introductory organic chemistry.",
          },
          {
            title: "Explore cell biology",
            description:
              "Learn about cell structures, membranes, organelles, and how cells maintain their internal environment.",
          },
          {
            title: "Understand biological molecules",
            description:
              "Explore proteins, carbohydrates, lipids, nucleic acids, and their roles in living systems.",
          },
        ],
      },
      {
        title: "Understand Biochemistry",
        description:
          "Discover how enzymes, molecules, and chemical reactions support life.",
        activities: [
          {
            title: "Explore enzymes",
            description:
              "Learn how enzymes help reactions occur and how temperature, pH, and concentration can affect their activity.",
          },
          {
            title: "Study metabolism",
            description:
              "Explore how organisms process nutrients and transfer energy through pathways such as cellular respiration.",
          },
          {
            title: "Learn about DNA and proteins",
            description:
              "Understand the basic relationship between genetic information, protein production, and cellular function.",
          },
        ],
      },
      {
        title: "Explore Scientific Methods",
        description:
          "Learn how researchers investigate biological molecules and evaluate experimental evidence.",
        activities: [
          {
            title: "Practise interpreting graphs",
            description:
              "Use sample datasets to explore how changes in temperature, pH, or concentration may relate to enzyme activity.",
          },
          {
            title: "Understand laboratory instruments",
            description:
              "Learn the basic purposes of spectrophotometers, centrifuges, pipettes, and other scientific instruments.",
          },
          {
            title: "Study experimental design",
            description:
              "Explore variables, controls, repeat measurements, uncertainty, and accurate recording of results.",
          },
        ],
      },
      {
        title: "Explore Biochemistry Applications",
        description:
          "Connect molecular science to medicine, nutrition, agriculture, and biotechnology.",
        activities: [
          {
            title: "Investigate nutrition",
            description:
              "Explore how the body processes carbohydrates, proteins, fats, vitamins, and minerals.",
          },
          {
            title: "Learn about diagnostic biochemistry",
            description:
              "Study how measurements of substances in biological samples can contribute to clinical investigations.",
          },
          {
            title: "Explore biotechnology",
            description:
              "Research how enzymes, proteins, and biological processes are used in medicine, food production, and industry.",
          },
        ],
      },
      {
        title: "Plan Your Biochemistry Pathway",
        description:
          "Explore further education and careers that combine chemistry, biology, and research.",
        activities: [
          {
            title: "Research degree programmes",
            description:
              "Compare Biochemistry programmes in Nigeria and check current admission requirements at your chosen institutions.",
          },
          {
            title: "Explore possible careers",
            description:
              "Investigate research, biotechnology, pharmaceutical development, laboratory science, nutrition research, and quality assurance.",
          },
          {
            title: "Build a learning portfolio",
            description:
              "Organise molecular diagrams, data interpretation exercises, research summaries, and reflections on biochemistry.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Khan Academy",
        description: "Study introductory biology, chemistry, and biomolecules.",
        url: "https://www.khanacademy.org/",
      },
      {
        title: "RCSB Protein Data Bank",
        description:
          "Explore three-dimensional structures of proteins and other biological molecules.",
        url: "https://www.rcsb.org/",
      },
      {
        title: "Nature Education",
        description:
          "Explore scientific explanations and educational material related to biology and molecular science.",
        url: "https://www.nature.com/scitable/",
      },
      {
        title: "MIT OpenCourseWare",
        description:
          "Access open course materials in chemistry, biology, and related sciences.",
        url: "https://ocw.mit.edu/",
      },
    ],
  },

  chemist: {
    stages: [
      {
        title: "Build Your Chemistry Foundation",
        description:
          "Develop the core concepts used to explain substances, their properties, and how they change.",
        activities: [
          {
            title: "Understand atomic structure",
            description:
              "Study protons, neutrons, electrons, elements, isotopes, and the organisation of the periodic table.",
          },
          {
            title: "Explore chemical bonding",
            description:
              "Learn about ionic, covalent, and metallic bonding and how bonding influences material properties.",
          },
          {
            title: "Practise chemical calculations",
            description:
              "Work on balancing equations, relative masses, moles, concentrations, and introductory stoichiometry.",
          },
        ],
      },
      {
        title: "Explore Major Areas of Chemistry",
        description:
          "Discover how different branches of chemistry investigate substances and reactions.",
        activities: [
          {
            title: "Study organic chemistry",
            description:
              "Explore carbon compounds, functional groups, and how molecular structure relates to properties.",
          },
          {
            title: "Understand physical chemistry",
            description:
              "Learn introductory ideas about energy changes, reaction rates, equilibrium, and the behaviour of substances.",
          },
          {
            title: "Explore analytical chemistry",
            description:
              "Discover how scientists identify substances and measure their concentrations using different analytical methods.",
          },
        ],
      },
      {
        title: "Learn Scientific Investigation",
        description:
          "Understand how chemists design experiments, make observations, and report reliable findings.",
        activities: [
          {
            title: "Practise interpreting data",
            description:
              "Use sample tables and graphs to compare results, identify trends, and recognise unusual measurements.",
          },
          {
            title: "Explore laboratory equipment",
            description:
              "Learn the purpose of balances, measuring cylinders, pipettes, and other common laboratory equipment.",
          },
          {
            title: "Understand chemical safety",
            description:
              "Learn how hazard labels, safety data sheets, protective equipment, and proper waste handling reduce risks. Perform experiments only in suitable supervised settings.",
          },
        ],
      },
      {
        title: "Discover Chemistry in Everyday Life",
        description:
          "Connect chemistry to manufacturing, food, water, materials, and environmental protection.",
        activities: [
          {
            title: "Explore water quality",
            description:
              "Learn what pH, dissolved substances, and contamination indicators can tell us about water, and why appropriate testing matters.",
          },
          {
            title: "Investigate materials",
            description:
              "Compare the properties and uses of polymers, metals, ceramics, and other materials.",
          },
          {
            title: "Research industrial chemistry",
            description:
              "Explore how chemical processes contribute to pharmaceuticals, agriculture, food production, energy, and manufacturing.",
          },
        ],
      },
      {
        title: "Plan Your Chemistry Career",
        description:
          "Research further education and the many fields where chemistry knowledge can be applied.",
        activities: [
          {
            title: "Research university programmes",
            description:
              "Compare Chemistry programmes in Nigeria and verify the current admission requirements of selected institutions.",
          },
          {
            title: "Explore specialisations",
            description:
              "Investigate analytical, industrial, environmental, materials, medicinal, and research chemistry.",
          },
          {
            title: "Prepare a science portfolio",
            description:
              "Collect worked calculations, labelled diagrams, data interpretation exercises, and summaries of chemistry applications.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Chemistry LibreTexts",
        description:
          "Explore open educational material across major areas of chemistry.",
        url: "https://chem.libretexts.org/",
      },
      {
        title: "Royal Society of Chemistry",
        description:
          "Discover chemistry explanations, learning activities, and resources for students.",
        url: "https://www.rsc.org/",
      },
      {
        title: "PhET Interactive Simulations",
        description:
          "Use interactive simulations to explore atoms, molecules, reactions, and other science concepts.",
        url: "https://phet.colorado.edu/",
      },
      {
        title: "Khan Academy",
        description:
          "Practise chemistry concepts and foundational calculations.",
        url: "https://www.khanacademy.org/",
      },
    ],
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
              "Learn about seeds, roots, stems, leaves, photosynthesis, and the factors plants need to grow.",
          },
          {
            title: "Study soil fundamentals",
            description:
              "Explore soil texture, nutrients, organic matter, drainage, and the role soil plays in supporting crops.",
          },
          {
            title: "Understand agricultural ecosystems",
            description:
              "Learn how crops, livestock, insects, microorganisms, water, and weather interact on farms.",
          },
        ],
      },
      {
        title: "Learn Crop and Livestock Systems",
        description:
          "Discover the scientific principles behind producing food and managing agricultural resources.",
        activities: [
          {
            title: "Explore crop production",
            description:
              "Research how crop choice, planting time, spacing, water, and soil conditions influence growth.",
          },
          {
            title: "Understand livestock management",
            description:
              "Learn the basic roles of animal nutrition, housing, welfare, breeding, and disease prevention.",
          },
          {
            title: "Study pests and plant health",
            description:
              "Explore common categories of crop pests and diseases and the principles of integrated pest management.",
          },
        ],
      },
      {
        title: "Explore Agricultural Research",
        description:
          "Learn how observations, measurements, and experiments help improve agricultural practices.",
        activities: [
          {
            title: "Keep a sample field record",
            description:
              "Design a record sheet for planting dates, rainfall observations, crop growth, and other relevant measurements.",
          },
          {
            title: "Understand experimental comparisons",
            description:
              "Use a fictional dataset to compare crop growth under different conditions and consider which factors may explain the differences.",
          },
          {
            title: "Explore weather and farm decisions",
            description:
              "Learn how rainfall forecasts, temperature, and seasonal patterns can inform planting and farm planning without guaranteeing outcomes.",
          },
        ],
      },
      {
        title: "Discover Modern and Sustainable Agriculture",
        description:
          "Explore how science and technology can support productive farming and responsible resource use.",
        activities: [
          {
            title: "Learn about precision agriculture",
            description:
              "Explore how GPS, sensors, satellite imagery, and data can help farmers monitor crops and manage resources.",
          },
          {
            title: "Investigate soil and water conservation",
            description:
              "Research crop rotation, mulching, erosion control, water-efficient irrigation, and other conservation practices.",
          },
          {
            title: "Explore agricultural value chains",
            description:
              "Trace how crops or livestock products move from production through storage, processing, transport, and markets.",
          },
        ],
      },
      {
        title: "Plan Your Agricultural Science Pathway",
        description:
          "Explore educational routes and career opportunities in agricultural research and production.",
        activities: [
          {
            title: "Research relevant programmes",
            description:
              "Compare Agricultural Science and related degree programmes in Nigeria and check current admission requirements.",
          },
          {
            title: "Explore specialisations",
            description:
              "Investigate agronomy, soil science, crop protection, animal science, agricultural economics, and extension services.",
          },
          {
            title: "Build a project portfolio",
            description:
              "Prepare a small research proposal or agricultural observation report with clear objectives, findings, and limitations.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Food and Agriculture Organization",
        description:
          "Explore global resources on crop production, livestock, food systems, and sustainable agriculture.",
        url: "https://www.fao.org/",
      },
      {
        title: "CGIAR",
        description:
          "Discover agricultural research addressing food security, climate resilience, and farming systems.",
        url: "https://www.cgiar.org/",
      },
      {
        title: "IITA",
        description:
          "Explore agricultural research and innovations relevant to tropical farming and African food systems.",
        url: "https://www.iita.org/",
      },
      {
        title: "NiMet",
        description:
          "Consult Nigeria's meteorological agency for weather and climate information relevant to agricultural planning.",
        url: "https://nimet.gov.ng/",
      },
    ],
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
              "Study food chains, biodiversity, habitats, energy flow, and interactions between organisms and their environment.",
          },
          {
            title: "Learn about Earth's systems",
            description:
              "Explore the water cycle, atmosphere, soil, rocks, and how these systems interact.",
          },
          {
            title: "Strengthen scientific reasoning",
            description:
              "Practise reading graphs, comparing observations, and distinguishing measured evidence from assumptions.",
          },
        ],
      },
      {
        title: "Understand Pollution and Environmental Change",
        description:
          "Explore the causes, effects, and measurement of common environmental problems.",
        activities: [
          {
            title: "Study air and water pollution",
            description:
              "Learn about common pollutants, their sources, their possible effects, and approaches to monitoring them.",
          },
          {
            title: "Explore waste management",
            description:
              "Compare waste reduction, reuse, recycling, composting, and safe disposal.",
          },
          {
            title: "Understand climate change",
            description:
              "Learn about greenhouse gases, observed climate trends, potential impacts, and adaptation and mitigation strategies.",
          },
        ],
      },
      {
        title: "Learn Environmental Monitoring",
        description:
          "Discover how scientists collect and interpret evidence about environmental conditions.",
        activities: [
          {
            title: "Design a simple observation study",
            description:
              "Plan a non-hazardous observation project, such as documenting litter types around a public area without handling dangerous waste.",
          },
          {
            title: "Explore environmental measurements",
            description:
              "Learn what measurements such as temperature, rainfall, pH, and particulate matter can tell us about environmental conditions.",
          },
          {
            title: "Practise data interpretation",
            description:
              "Use a sample dataset to create a graph, identify trends, and explain limitations in the available evidence.",
          },
        ],
      },
      {
        title: "Explore Conservation and Environmental Solutions",
        description:
          "Learn how science supports conservation, environmental planning, and more sustainable communities.",
        activities: [
          {
            title: "Investigate local environmental challenges",
            description:
              "Research a documented issue such as erosion, flooding, deforestation, or waste disposal in a Nigerian community.",
          },
          {
            title: "Compare possible interventions",
            description:
              "Evaluate potential solutions by considering environmental impact, cost, feasibility, and community needs.",
          },
          {
            title: "Prepare an evidence-based proposal",
            description:
              "Write a short proposal outlining the problem, supporting evidence, suggested action, and how its effectiveness could be evaluated.",
          },
        ],
      },
      {
        title: "Plan Your Environmental Science Career",
        description:
          "Explore further education and careers in environmental research, monitoring, and management.",
        activities: [
          {
            title: "Research relevant programmes",
            description:
              "Compare Environmental Science and related programmes in Nigeria and verify current entry requirements.",
          },
          {
            title: "Explore career pathways",
            description:
              "Investigate conservation, environmental assessment, pollution monitoring, climate research, waste management, and sustainability.",
          },
          {
            title: "Build an environmental portfolio",
            description:
              "Collect research summaries, graphs, observation reports, and a proposal addressing a real environmental issue.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "United Nations Environment Programme",
        description:
          "Explore global information about pollution, ecosystems, climate change, and environmental solutions.",
        url: "https://www.unep.org/",
      },
      {
        title: "NASA Climate",
        description:
          "Learn about climate science through explanations, data, and visual resources.",
        url: "https://science.nasa.gov/climate-change/",
      },
      {
        title: "Our World in Data",
        description:
          "Explore environmental datasets and visualisations on energy, emissions, land use, and related topics.",
        url: "https://ourworldindata.org/",
      },
      {
        title: "Nigerian Meteorological Agency",
        description:
          "Explore official weather and climate information for Nigeria.",
        url: "https://nimet.gov.ng/",
      },
    ],
  },
  //Business

  accountant: {
    stages: [
      {
        title: "Build Your Mathematics and Business Foundation",
        description:
          "Develop confidence with numbers and understand how organisations manage money.",
        activities: [
          {
            title: "Practise everyday calculations",
            description:
              "Work with percentages, ratios, fractions, averages, and basic financial calculations.",
          },
          {
            title: "Understand how businesses operate",
            description:
              "Explore revenue, expenses, profit, assets, liabilities, and why organisations keep financial records.",
          },
        ],
      },
      {
        title: "Learn Accounting Fundamentals",
        description:
          "Discover how financial transactions are recorded and organised.",
        activities: [
          {
            title: "Explore basic accounting concepts",
            description:
              "Learn about debits and credits, journals, ledgers, trial balances, and financial statements.",
          },
          {
            title: "Practise simple bookkeeping",
            description:
              "Create a sample record of income and expenses for a small school club or imaginary business.",
          },
        ],
      },
      {
        title: "Develop Spreadsheet and Analysis Skills",
        description:
          "Use digital tools to organise financial information and check calculations.",
        activities: [
          {
            title: "Learn spreadsheet basics",
            description:
              "Practise formulas, SUM, AVERAGE, sorting, filtering, and simple tables in Excel or Google Sheets.",
          },
          {
            title: "Prepare a basic financial summary",
            description:
              "Use fictional transactions to calculate total income, total expenses, and profit or loss.",
          },
        ],
      },
      {
        title: "Understand Ethics and Financial Reporting",
        description:
          "Learn why accurate records, confidentiality, and honesty matter in accounting.",
        activities: [
          {
            title: "Explore financial statements",
            description:
              "Study the purpose of an income statement, statement of financial position, and cash flow statement.",
          },
          {
            title: "Discuss professional ethics",
            description:
              "Consider how accountants should respond to errors, misleading records, and requests to falsify figures.",
          },
        ],
      },
      {
        title: "Explore Accounting Education and Careers",
        description:
          "Research the qualifications and practical experience needed to enter the profession.",
        activities: [
          {
            title: "Research Nigerian study pathways",
            description:
              "Check university accounting programmes and current admission requirements through official sources.",
          },
          {
            title: "Explore professional qualifications",
            description:
              "Learn about ICAN and ANAN, their entry routes, and the requirements that apply to your circumstances.",
          },
          {
            title: "Build a sample portfolio",
            description:
              "Organise your practice spreadsheets and fictional financial reports into a small learning portfolio.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "AccountingCoach",
        description:
          "Accessible explanations of accounting concepts, bookkeeping, and financial statements.",
        url: "https://www.accountingcoach.com/",
      },
      {
        title: "Microsoft Excel Help",
        description:
          "Learn spreadsheet formulas, tables, and data organisation.",
        url: "https://support.microsoft.com/excel",
      },
      {
        title: "ICAN",
        description:
          "Check official information about the Institute of Chartered Accountants of Nigeria and its qualification pathways.",
        url: "https://www.icanig.org/",
      },
      {
        title: "ANAN",
        description:
          "Explore the Association of National Accountants of Nigeria and its professional development information.",
        url: "https://anan.org.ng/",
      },
    ],
  },

  economist: {
    stages: [
      {
        title: "Build Your Mathematics and Social Science Foundation",
        description:
          "Develop the quantitative and critical-thinking skills used to understand economies.",
        activities: [
          {
            title: "Strengthen your mathematics",
            description:
              "Practise percentages, ratios, graphs, averages, and interpreting numerical information.",
          },
          {
            title: "Explore economic questions",
            description:
              "Think about why prices change, how people make choices, and how communities allocate limited resources.",
          },
        ],
      },
      {
        title: "Understand Microeconomics",
        description:
          "Study how individuals, households, and businesses make economic decisions.",
        activities: [
          {
            title: "Explore supply and demand",
            description:
              "Use familiar examples such as food prices, transport fares, or phone data to understand price changes.",
          },
          {
            title: "Learn core concepts",
            description:
              "Study scarcity, opportunity cost, incentives, competition, and the role of markets.",
          },
        ],
      },
      {
        title: "Explore Macroeconomics",
        description:
          "Understand the wider economy and the indicators used to describe its performance.",
        activities: [
          {
            title: "Learn key economic indicators",
            description:
              "Explore inflation, unemployment, economic growth, exchange rates, and interest rates.",
          },
          {
            title: "Connect concepts to Nigeria",
            description:
              "Choose a current Nigerian economic issue and explain the possible effects on households and businesses.",
          },
        ],
      },
      {
        title: "Develop Data and Research Skills",
        description:
          "Learn to investigate economic questions using evidence instead of assumptions.",
        activities: [
          {
            title: "Practise reading datasets",
            description:
              "Use a public dataset to create a table or chart and identify meaningful patterns.",
          },
          {
            title: "Write a short economic briefing",
            description:
              "Summarise one issue, present supporting evidence, and distinguish facts from your own interpretation.",
          },
        ],
      },
      {
        title: "Plan Your Economics Pathway",
        description:
          "Explore university study and the different careers that use economic reasoning.",
        activities: [
          {
            title: "Research Nigerian programmes",
            description:
              "Check economics degree options and current admission requirements from universities and JAMB.",
          },
          {
            title: "Explore related careers",
            description:
              "Investigate policy research, banking, public service, market research, development work, and data analysis.",
          },
          {
            title: "Build a mini research portfolio",
            description:
              "Keep your charts, source notes, and economic briefing together as evidence of your developing skills.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "CORE Econ",
        description:
          "Free learning materials that introduce economics through real-world problems.",
        url: "https://www.core-econ.org/",
      },
      {
        title: "Khan Academy Economics",
        description:
          "Beginner-friendly lessons covering microeconomics and macroeconomics.",
        url: "https://www.khanacademy.org/economics-finance-domain",
      },
      {
        title: "National Bureau of Statistics Nigeria",
        description:
          "Find official Nigerian statistics and reports for economic research.",
        url: "https://www.nigerianstat.gov.ng/",
      },
      {
        title: "Our World in Data",
        description:
          "Explore data visualisations and explanations about economies and development.",
        url: "https://ourworldindata.org/",
      },
    ],
  },

  "banking-finance-professional": {
    stages: [
      {
        title: "Understand Money and Financial Systems",
        description:
          "Learn how people, businesses, banks, and other institutions manage money.",
        activities: [
          {
            title: "Explore personal finance",
            description:
              "Learn about budgeting, saving, interest, borrowing, and the importance of financial planning.",
          },
          {
            title: "Discover how banks work",
            description:
              "Study deposits, payments, loans, customer accounts, and the role banks play in the economy.",
          },
        ],
      },
      {
        title: "Build Numeracy and Analytical Skills",
        description:
          "Develop the accuracy needed to interpret financial information and compare options.",
        activities: [
          {
            title: "Practise financial calculations",
            description:
              "Work through simple percentages, compound interest examples, ratios, and repayment calculations.",
          },
          {
            title: "Use spreadsheets",
            description:
              "Create a fictional monthly budget and compare different saving or spending scenarios.",
          },
        ],
      },
      {
        title: "Explore Financial Products and Risk",
        description:
          "Understand common financial services and why responsible risk management matters.",
        activities: [
          {
            title: "Compare financial products",
            description:
              "Research the general purposes of savings accounts, loans, insurance, and investment products.",
          },
          {
            title: "Learn about financial risk",
            description:
              "Explore credit risk, fraud prevention, identity protection, and why customers should verify financial providers.",
          },
        ],
      },
      {
        title: "Develop Customer Service and Professional Ethics",
        description:
          "Build communication, confidentiality, and responsible decision-making skills.",
        activities: [
          {
            title: "Practise explaining financial concepts",
            description:
              "Explain a basic banking concept in plain language to a classmate or family member.",
          },
          {
            title: "Explore ethical scenarios",
            description:
              "Consider how a finance professional should handle private customer information, suspicious transactions, or mistakes.",
          },
        ],
      },
      {
        title: "Explore Finance Education and Career Routes",
        description:
          "Research the qualifications, specialist areas, and entry-level experience relevant to finance.",
        activities: [
          {
            title: "Research study options",
            description:
              "Explore banking and finance, economics, accounting, mathematics, and related programmes in Nigeria.",
          },
          {
            title: "Investigate the Nigerian financial sector",
            description:
              "Learn about the roles of the Central Bank of Nigeria, NDIC, SEC, and other relevant institutions.",
          },
          {
            title: "Create a sample finance project",
            description:
              "Prepare a fictional budget, savings comparison, or financial literacy guide using reliable sources.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Central Bank of Nigeria",
        description:
          "Learn about Nigeria's central bank, monetary policy, and financial system.",
        url: "https://www.cbn.gov.ng/",
      },
      {
        title: "NDIC",
        description:
          "Explore deposit insurance and public information about the Nigerian banking system.",
        url: "https://ndic.gov.ng/",
      },
      {
        title: "SEC Nigeria",
        description:
          "Find official information about capital markets, investment regulation, and investor awareness.",
        url: "https://sec.gov.ng/",
      },
      {
        title: "Khan Academy Personal Finance",
        description:
          "Study foundational concepts in saving, borrowing, and managing money.",
        url: "https://www.khanacademy.org/college-careers-more/personal-finance",
      },
    ],
  },

  "marketing-specialist": {
    stages: [
      {
        title: "Understand People, Products, and Markets",
        description:
          "Explore why people choose certain products and how businesses communicate value.",
        activities: [
          {
            title: "Observe everyday marketing",
            description:
              "Compare adverts for two similar products and identify the audience, message, and promised benefit.",
          },
          {
            title: "Learn the marketing mix",
            description:
              "Explore product, price, place, and promotion, and how these influence a marketing strategy.",
          },
        ],
      },
      {
        title: "Learn Audience Research and Positioning",
        description:
          "Understand how marketers research customer needs and differentiate a product.",
        activities: [
          {
            title: "Create a simple audience profile",
            description:
              "Choose a fictional product and describe the needs, interests, and challenges of its intended audience.",
          },
          {
            title: "Practise ethical research",
            description:
              "Write a short, respectful survey and learn to avoid misleading questions or collecting unnecessary personal information.",
          },
        ],
      },
      {
        title: "Develop Content and Communication Skills",
        description:
          "Practise creating clear messages that match a brand and its audience.",
        activities: [
          {
            title: "Write sample marketing content",
            description:
              "Create a headline, short product description, and social media post for a fictional local business.",
          },
          {
            title: "Explore visual communication",
            description:
              "Study how layout, imagery, colour, and typography affect the clarity of a campaign.",
          },
        ],
      },
      {
        title: "Explore Digital Marketing and Measurement",
        description:
          "Learn how online campaigns reach audiences and how results can be evaluated.",
        activities: [
          {
            title: "Study digital channels",
            description:
              "Explore search engines, social media, email, websites, and content marketing at a beginner level.",
          },
          {
            title: "Learn basic campaign metrics",
            description:
              "Understand reach, impressions, clicks, conversion rate, and engagement without treating any single metric as the whole story.",
          },
          {
            title: "Review a sample campaign",
            description:
              "Set a clear goal for a fictional campaign and suggest how you would measure whether it worked.",
          },
        ],
      },
      {
        title: "Build a Marketing Portfolio",
        description:
          "Bring your research and creative work together while exploring study and career opportunities.",
        activities: [
          {
            title: "Create a mini campaign",
            description:
              "Develop an audience profile, key message, content samples, and simple measurement plan for a fictional business.",
          },
          {
            title: "Research education pathways",
            description:
              "Explore marketing, business administration, communications, and related Nigerian study programmes.",
          },
          {
            title: "Explore professional roles",
            description:
              "Compare digital marketing, brand management, market research, advertising, and communications roles.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Google Skillshop",
        description:
          "Explore training resources for Google's advertising and analytics tools.",
        url: "https://skillshop.withgoogle.com/",
      },
      {
        title: "HubSpot Academy",
        description:
          "Find beginner-friendly lessons in content marketing, digital marketing, and customer relationships.",
        url: "https://academy.hubspot.com/",
      },
      {
        title: "Meta Blueprint",
        description:
          "Explore educational resources about marketing across Meta platforms.",
        url: "https://www.facebook.com/business/learn",
      },
      {
        title: "Think with Google",
        description:
          "Read research and insights about consumer behaviour and digital marketing.",
        url: "https://www.thinkwithgoogle.com/",
      },
    ],
  },

  entrepreneur: {
    stages: [
      {
        title: "Learn to Spot Real Problems",
        description:
          "Start with people's needs instead of assuming every idea is a viable business.",
        activities: [
          {
            title: "Observe everyday challenges",
            description:
              "List problems students, families, or small businesses experience and identify who is affected.",
          },
          {
            title: "Choose one problem to investigate",
            description:
              "Describe who experiences it, how they currently manage it, and why a better solution might help.",
          },
        ],
      },
      {
        title: "Research Customers and Test Your Idea",
        description:
          "Check whether the problem matters to potential customers before investing significant money.",
        activities: [
          {
            title: "Talk to potential users",
            description:
              "Ask a few people open-ended questions about the problem, without pressuring them to praise your idea.",
          },
          {
            title: "Study alternatives",
            description:
              "Look at existing products or services and identify what customers may still find difficult.",
          },
          {
            title: "Define your value proposition",
            description:
              "Write one or two sentences explaining who your idea serves, what problem it addresses, and why it may be useful.",
          },
        ],
      },
      {
        title: "Plan a Simple Business Model",
        description:
          "Understand how a business creates value, reaches customers, and covers its costs.",
        activities: [
          {
            title: "Draft a business model",
            description:
              "Identify customer groups, the offer, distribution channels, key costs, and possible sources of revenue.",
          },
          {
            title: "Create a basic budget",
            description:
              "Estimate startup costs, recurring expenses, selling price, and the number of sales needed to cover costs.",
          },
        ],
      },
      {
        title: "Build and Test a Small Prototype",
        description:
          "Turn your idea into something people can react to without taking unnecessary financial risks.",
        activities: [
          {
            title: "Make a minimum viable version",
            description:
              "Create a simple mock-up, sample service, demo website, or description that demonstrates the core idea.",
          },
          {
            title: "Collect feedback and improve",
            description:
              "Ask potential users what is confusing, useful, or missing, then document what you would change.",
          },
          {
            title: "Learn basic marketing",
            description:
              "Draft a clear message explaining the offer, intended customer, and benefit without making exaggerated claims.",
          },
        ],
      },
      {
        title: "Understand Responsible Business Practice",
        description:
          "Explore the practical responsibilities involved in operating a business sustainably and legally.",
        activities: [
          {
            title: "Learn about customer trust",
            description:
              "Study honest advertising, data privacy, transparent pricing, and responsible handling of complaints.",
          },
          {
            title: "Research Nigerian business requirements",
            description:
              "Explore CAC registration information and identify which tax, licensing, or regulatory rules might apply to a real business.",
          },
          {
            title: "Present your business concept",
            description:
              "Prepare a short pitch covering the problem, customer, solution, evidence, business model, costs, and next steps.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Tony Elumelu Foundation",
        description:
          "Explore entrepreneurship programmes, learning resources, and information for African entrepreneurs.",
        url: "https://www.tonyelumelufoundation.org/",
      },
      {
        title: "SMEDAN",
        description:
          "Find Nigerian small-business development information and support resources.",
        url: "https://smedan.gov.ng/",
      },
      {
        title: "Corporate Affairs Commission",
        description:
          "Check official information about business-name and company registration in Nigeria.",
        url: "https://www.cac.gov.ng/",
      },
      {
        title: "Y Combinator Startup Library",
        description:
          "Learn about customer discovery, building products, and testing early-stage business ideas.",
        url: "https://www.ycombinator.com/library",
      },
    ],
  },
  //Law, Education & Social

  lawyer: {
    stages: [
      {
        title: "Develop Your Reading and Reasoning Skills",
        description:
          "Build the communication, comprehension, and critical-thinking skills that legal study requires.",
        activities: [
          {
            title: "Practise close reading",
            description:
              "Read an article or short argument and identify its main claim, supporting evidence, and assumptions.",
          },
          {
            title: "Learn to construct arguments",
            description:
              "Choose a school or community issue and write a balanced argument supported by evidence.",
          },
        ],
      },
      {
        title: "Understand the Purpose of Law",
        description:
          "Explore how laws establish rights, responsibilities, and processes for resolving disputes.",
        activities: [
          {
            title: "Explore areas of law",
            description:
              "Learn the basic differences between criminal, civil, constitutional, commercial, and family law.",
          },
          {
            title: "Discover Nigeria's legal system",
            description:
              "Research the roles of courts, legislatures, lawyers, and the Constitution of Nigeria.",
          },
        ],
      },
      {
        title: "Build Research and Legal Writing Skills",
        description:
          "Learn how to find reliable information and communicate a reasoned position clearly.",
        activities: [
          {
            title: "Practise source evaluation",
            description:
              "Compare a news report with an official legal or government source and identify what each can establish.",
          },
          {
            title: "Write a case summary",
            description:
              "Using a publicly available educational case summary, identify the issue, relevant facts, decision, and reasoning.",
          },
        ],
      },
      {
        title: "Explore Legal Ethics and Practice",
        description:
          "Understand the responsibilities involved in handling legal matters and representing others.",
        activities: [
          {
            title: "Discuss ethical scenarios",
            description:
              "Consider confidentiality, honesty, conflicts of interest, and the importance of fair treatment.",
          },
          {
            title: "Explore legal career settings",
            description:
              "Research work in law firms, public service, business, human rights, policy, and legal research.",
          },
        ],
      },
      {
        title: "Plan Your Nigerian Legal Education Pathway",
        description:
          "Research the current requirements for studying law and qualifying to practise in Nigeria.",
        activities: [
          {
            title: "Check admission requirements",
            description:
              "Review current JAMB, WAEC, and university requirements for law using official sources.",
          },
          {
            title: "Understand professional qualification",
            description:
              "Research the recognised legal education and professional training route, including the Nigerian Law School and applicable current requirements.",
          },
          {
            title: "Build a learning portfolio",
            description:
              "Collect your argument essays, research notes, and case summaries to demonstrate your developing skills.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Nigerian Constitution",
        description:
          "Explore the constitutional framework underpinning Nigeria's government and fundamental rights.",
        url: "https://nigerialii.org/",
      },
      {
        title: "Nigerian Law School",
        description:
          "Check official information about professional legal education and training.",
        url: "https://www.nigerianlawschool.edu.ng/",
      },
      {
        title: "Nigerian Bar Association",
        description:
          "Explore the legal profession and professional information in Nigeria.",
        url: "https://nigerianbar.org.ng/",
      },
      {
        title: "JAMB",
        description:
          "Verify current admission information and requirements for law programmes.",
        url: "https://www.jamb.gov.ng/",
      },
    ],
  },

  teacher: {
    stages: [
      {
        title: "Understand How People Learn",
        description:
          "Explore how learners develop knowledge, practise skills, and build understanding at different speeds.",
        activities: [
          {
            title: "Reflect on effective teaching",
            description:
              "Think of a topic someone explained well to you and identify what made the explanation easy to understand.",
          },
          {
            title: "Explore learning differences",
            description:
              "Learn why learners may need different examples, explanations, practice opportunities, or levels of support.",
          },
        ],
      },
      {
        title: "Build Subject Knowledge",
        description:
          "Develop a strong understanding of the subject you may want to teach.",
        activities: [
          {
            title: "Choose a subject area",
            description:
              "Identify a subject you enjoy and review the topics expected at the secondary-school level.",
          },
          {
            title: "Practise explaining concepts",
            description:
              "Choose a difficult concept and explain it using simple language, examples, and a short summary.",
          },
        ],
      },
      {
        title: "Learn Lesson Planning",
        description:
          "Discover how teachers organise lessons around clear objectives and meaningful activities.",
        activities: [
          {
            title: "Write a simple lesson plan",
            description:
              "Include a learning objective, introduction, explanation, learner activity, and a way to check understanding.",
          },
          {
            title: "Create learning materials",
            description:
              "Prepare a short worksheet, diagram, or presentation that supports the lesson.",
          },
        ],
      },
      {
        title: "Practise Communication and Assessment",
        description:
          "Develop skills for explaining ideas, checking progress, and giving constructive feedback.",
        activities: [
          {
            title: "Deliver a mini-lesson",
            description:
              "Teach a short topic to a willing classmate or small group and ask what was clear or confusing.",
          },
          {
            title: "Design a quick assessment",
            description:
              "Create a few questions that check whether learners can apply the concept rather than only repeat definitions.",
          },
          {
            title: "Explore inclusive teaching",
            description:
              "Learn about respectful classroom management, accessibility, and supporting learners with different needs.",
          },
        ],
      },
      {
        title: "Explore Teacher Training and Career Options",
        description:
          "Research the qualifications and professional expectations for teaching in Nigeria.",
        activities: [
          {
            title: "Research education pathways",
            description:
              "Explore relevant degree programmes, education courses, and NCE pathways where applicable.",
          },
          {
            title: "Check professional requirements",
            description:
              "Consult the Teachers Registration Council of Nigeria and relevant institutions for current requirements.",
          },
          {
            title: "Build a teaching portfolio",
            description:
              "Save sample lesson plans, worksheets, and reflections on what you learned from teaching practice.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Teachers Registration Council of Nigeria",
        description:
          "Find official information about teacher registration and professional standards.",
        url: "https://trcn.gov.ng/",
      },
      {
        title: "UNESCO Education",
        description:
          "Explore educational initiatives, learning challenges, and teaching-related resources.",
        url: "https://www.unesco.org/en/education",
      },
      {
        title: "Khan Academy",
        description:
          "Explore subject lessons that can inspire explanations, examples, and practice activities.",
        url: "https://www.khanacademy.org/",
      },
      {
        title: "CAST Universal Design for Learning",
        description:
          "Learn about designing learning experiences that support different learner needs.",
        url: "https://udlguidelines.cast.org/",
      },
    ],
  },

  "psychologist-counsellor": {
    stages: [
      {
        title: "Explore Human Behaviour and Development",
        description:
          "Begin learning how people think, feel, learn, and behave in different situations.",
        activities: [
          {
            title: "Study introductory psychology",
            description:
              "Explore memory, motivation, emotion, learning, personality, and social behaviour.",
          },
          {
            title: "Observe behaviour thoughtfully",
            description:
              "Reflect on how situations and environments influence behaviour without jumping to conclusions about people.",
          },
        ],
      },
      {
        title: "Build Communication and Listening Skills",
        description:
          "Learn how empathy, respectful questions, and careful listening support constructive conversations.",
        activities: [
          {
            title: "Practise active listening",
            description:
              "In an ordinary conversation, practise listening without interrupting and summarise what the other person said.",
          },
          {
            title: "Learn about boundaries",
            description:
              "Explore confidentiality, consent, personal boundaries, and when a concern should be referred to a qualified adult or professional.",
          },
        ],
      },
      {
        title: "Understand Research and Evidence",
        description:
          "Learn why psychology relies on careful research rather than stereotypes or assumptions.",
        activities: [
          {
            title: "Explore research methods",
            description:
              "Learn the basic differences between surveys, interviews, observations, and experiments.",
          },
          {
            title: "Evaluate a psychology claim",
            description:
              "Choose a popular claim about behaviour and look for reliable evidence that supports or challenges it.",
          },
        ],
      },
      {
        title: "Explore Counselling and Psychological Practice",
        description:
          "Understand the different roles of psychologists and counsellors and the training these roles require.",
        activities: [
          {
            title: "Compare professional roles",
            description:
              "Research the differences between psychology, counselling, psychiatry, and related support professions.",
          },
          {
            title: "Learn about ethical practice",
            description:
              "Explore informed consent, confidentiality limits, professional boundaries, and safeguarding.",
          },
          {
            title: "Understand referral",
            description:
              "Learn why serious or complex mental-health concerns require support from appropriately qualified professionals.",
          },
        ],
      },
      {
        title: "Plan Your Education and Professional Pathway",
        description:
          "Research recognised programmes and the applicable professional requirements in Nigeria.",
        activities: [
          {
            title: "Explore relevant courses",
            description:
              "Research psychology, guidance and counselling, and related university programmes.",
          },
          {
            title: "Verify professional requirements",
            description:
              "Check current requirements with relevant Nigerian institutions and professional regulators before choosing a route.",
          },
          {
            title: "Create a learning portfolio",
            description:
              "Collect your research summaries, reflections, and notes on ethical practice.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "American Psychological Association",
        description:
          "Explore introductory psychology topics, research, and explanations of human behaviour.",
        url: "https://www.apa.org/",
      },
      {
        title: "OpenStax Psychology",
        description:
          "Access a free introductory psychology textbook for structured learning.",
        url: "https://openstax.org/details/books/psychology-2e",
      },
      {
        title: "British Psychological Society",
        description:
          "Explore psychology as a discipline and learn about professional practice.",
        url: "https://www.bps.org.uk/",
      },
      {
        title: "WHO Mental Health",
        description:
          "Learn about mental health, wellbeing, and public-health approaches.",
        url: "https://www.who.int/health-topics/mental-health",
      },
    ],
  },

  "human-resources-professional": {
    stages: [
      {
        title: "Understand People and Organisations",
        description:
          "Explore how workplaces function and how organisations coordinate people toward shared goals.",
        activities: [
          {
            title: "Explore organisational roles",
            description:
              "Choose a familiar organisation and map the different roles that help it operate.",
          },
          {
            title: "Learn basic management concepts",
            description:
              "Study teamwork, leadership, motivation, communication, and workplace culture.",
          },
        ],
      },
      {
        title: "Learn Human Resources Fundamentals",
        description:
          "Discover how organisations recruit, support, develop, and manage employees.",
        activities: [
          {
            title: "Explore the employee lifecycle",
            description:
              "Learn about recruitment, onboarding, training, performance reviews, and employee development.",
          },
          {
            title: "Understand workplace policies",
            description:
              "Explore why organisations use clear policies for attendance, conduct, leave, and grievance handling.",
          },
        ],
      },
      {
        title: "Develop Communication and Organisation Skills",
        description:
          "Practise the careful communication and record-keeping needed in people-focused roles.",
        activities: [
          {
            title: "Draft a job description",
            description:
              "Write a fictional job description with responsibilities, essential skills, and clear selection criteria.",
          },
          {
            title: "Practise interview planning",
            description:
              "Prepare fair, role-related interview questions and learn to avoid irrelevant or discriminatory questions.",
          },
          {
            title: "Use spreadsheets responsibly",
            description:
              "Create a fictional staff-training schedule or leave tracker using sample data only.",
          },
        ],
      },
      {
        title: "Explore Employment Ethics and Workplace Practice",
        description:
          "Understand fairness, privacy, inclusion, and the responsibilities involved in managing employee information.",
        activities: [
          {
            title: "Discuss workplace scenarios",
            description:
              "Consider how a professional should handle complaints, conflict, confidential records, and possible unfair treatment.",
          },
          {
            title: "Research employment rights",
            description:
              "Explore Nigerian labour and employment information using current official sources.",
          },
        ],
      },
      {
        title: "Plan Your HR Career Pathway",
        description:
          "Research relevant education, professional development, and entry-level experience.",
        activities: [
          {
            title: "Explore study options",
            description:
              "Research human resource management, industrial relations, business administration, psychology, and related courses.",
          },
          {
            title: "Investigate professional development",
            description:
              "Explore the Chartered Institute of Personnel Management of Nigeria and its current membership and qualification routes.",
          },
          {
            title: "Build a sample portfolio",
            description:
              "Organise your fictional job description, interview guide, and training schedule into a small portfolio.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "CIPM Nigeria",
        description:
          "Explore professional development and information about human resource management in Nigeria.",
        url: "https://cipmnigeria.org/",
      },
      {
        title: "International Labour Organization",
        description:
          "Learn about decent work, employment standards, and workplace issues.",
        url: "https://www.ilo.org/",
      },
      {
        title: "SHRM",
        description:
          "Explore human resources concepts, workplace practices, and professional insights.",
        url: "https://www.shrm.org/",
      },
      {
        title: "Microsoft Excel Help",
        description:
          "Learn spreadsheet skills useful for organising schedules and analysing sample workforce data.",
        url: "https://support.microsoft.com/excel",
      },
    ],
  },

  "social-worker": {
    stages: [
      {
        title: "Understand Communities and Social Issues",
        description:
          "Explore how family, education, income, health, and community conditions affect people's lives.",
        activities: [
          {
            title: "Explore community needs",
            description:
              "Choose a social issue and investigate its possible causes, who it affects, and what support already exists.",
          },
          {
            title: "Learn about social systems",
            description:
              "Study how families, schools, community organisations, public services, and government programmes interact.",
          },
        ],
      },
      {
        title: "Develop Empathy and Communication",
        description:
          "Build respectful listening and communication skills while recognising individual dignity.",
        activities: [
          {
            title: "Practise respectful listening",
            description:
              "Learn to listen without blaming people or making assumptions about their circumstances.",
          },
          {
            title: "Understand boundaries and privacy",
            description:
              "Explore confidentiality, consent, safeguarding, and why sensitive information should not be shared casually.",
          },
        ],
      },
      {
        title: "Explore Support Services and Advocacy",
        description:
          "Discover how social workers and community organisations help people access services and support.",
        activities: [
          {
            title: "Map local support systems",
            description:
              "Research publicly listed community services and organisations that support children, families, older people, or people with disabilities.",
          },
          {
            title: "Learn about advocacy",
            description:
              "Explore how professionals help people understand their options and access appropriate services.",
          },
        ],
      },
      {
        title: "Understand Ethics and Evidence-Based Practice",
        description:
          "Learn why social support requires professionalism, safety, and respect for people's choices.",
        activities: [
          {
            title: "Explore ethical scenarios",
            description:
              "Consider how to respond when someone needs help, when information is private, or when there may be a safeguarding concern.",
          },
          {
            title: "Research a social issue",
            description:
              "Use credible reports to write a short summary of an issue, its possible causes, and existing support approaches.",
          },
          {
            title: "Understand professional limits",
            description:
              "Learn why complex legal, medical, or mental-health needs should be referred to qualified professionals.",
          },
        ],
      },
      {
        title: "Explore Education and Social Work Careers",
        description:
          "Research study options and the requirements for social-service roles in Nigeria.",
        activities: [
          {
            title: "Research relevant programmes",
            description:
              "Explore social work, sociology, psychology, community development, and related courses.",
          },
          {
            title: "Investigate Nigerian organisations",
            description:
              "Learn about relevant government social welfare services and reputable community organisations.",
          },
          {
            title: "Build a research portfolio",
            description:
              "Collect your issue brief, service map, and reflections on ethics and community support.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "UNICEF Nigeria",
        description:
          "Explore information and programmes related to child welfare, education, and protection.",
        url: "https://www.unicef.org/nigeria/",
      },
      {
        title: "International Federation of Social Workers",
        description:
          "Learn about social work values, professional ethics, and the role of social workers.",
        url: "https://www.ifsw.org/",
      },
      {
        title: "National Human Rights Commission Nigeria",
        description:
          "Explore human rights information and the Commission's work in Nigeria.",
        url: "https://nhrc.gov.ng/",
      },
      {
        title: "World Health Organization",
        description:
          "Explore public-health and community wellbeing resources relevant to social support.",
        url: "https://www.who.int/",
      },
    ],
  },
  //Creative & Media

  "graphic-designer": {
    stages: [
      {
        title: "Develop Your Visual Design Awareness",
        description:
          "Learn how visual choices communicate ideas and influence how people understand information.",
        activities: [
          {
            title: "Study design fundamentals",
            description:
              "Explore colour, typography, contrast, alignment, spacing, hierarchy, and visual balance.",
          },
          {
            title: "Analyse everyday designs",
            description:
              "Compare posters, flyers, book covers, and adverts. Identify what makes each design clear or confusing.",
          },
        ],
      },
      {
        title: "Learn Design Tools",
        description:
          "Become familiar with tools used to create digital graphics and layouts.",
        activities: [
          {
            title: "Explore a design application",
            description:
              "Practise with tools such as Canva, GIMP, or Inkscape, starting with the features available for free.",
          },
          {
            title: "Recreate a simple layout",
            description:
              "Use your own text and shapes to practise recreating the structure of a poster without copying another designer's work for submission.",
          },
        ],
      },
      {
        title: "Practise Branding and Visual Communication",
        description:
          "Learn to make design decisions based on a message and its intended audience.",
        activities: [
          {
            title: "Create a fictional brand",
            description:
              "Choose a fictional school club or small business and develop a name, colour palette, and typography choices.",
          },
          {
            title: "Design a poster",
            description:
              "Create a poster with a clear headline, supporting details, readable text, and a purposeful visual hierarchy.",
          },
        ],
      },
      {
        title: "Build a Small Design Portfolio",
        description:
          "Show how your work responds to a communication goal and improves through feedback.",
        activities: [
          {
            title: "Create three different pieces",
            description:
              "Produce a poster, a social media graphic, and a simple brand identity for fictional projects.",
          },
          {
            title: "Explain your design decisions",
            description:
              "Write a short note for each piece explaining its audience, purpose, and visual choices.",
          },
          {
            title: "Improve through feedback",
            description:
              "Ask others whether your designs are readable and effective, then make thoughtful revisions.",
          },
        ],
      },
      {
        title: "Explore Design Careers and Opportunities",
        description:
          "Discover where graphic design is used and how designers develop professionally.",
        activities: [
          {
            title: "Explore specialist areas",
            description:
              "Research branding, advertising, publication design, packaging, illustration, and digital graphics.",
          },
          {
            title: "Learn about client work",
            description:
              "Practise writing a simple project brief with a goal, audience, deliverables, and deadline.",
          },
          {
            title: "Publish your portfolio",
            description:
              "Organise your strongest work in a shareable portfolio and clearly label personal or practice projects.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Canva Design School",
        description:
          "Explore design principles, visual communication, and beginner-friendly creative tutorials.",
        url: "https://www.canva.com/designschool/",
      },
      {
        title: "GIMP Documentation",
        description:
          "Learn image editing and graphic creation with a free, open-source application.",
        url: "https://www.gimp.org/docs/",
      },
      {
        title: "Inkscape Tutorials",
        description:
          "Learn vector illustration and scalable graphics using a free, open-source tool.",
        url: "https://inkscape.org/learn/tutorials/",
      },
      {
        title: "Adobe Color",
        description:
          "Explore colour relationships and experiment with colour palettes.",
        url: "https://color.adobe.com/",
      },
    ],
  },

  "ui-ux-designer": {
    stages: [
      {
        title: "Understand Users and Digital Products",
        description:
          "Learn how user interface and user experience design help people use digital products effectively.",
        activities: [
          {
            title: "Compare familiar interfaces",
            description:
              "Compare two websites or apps and identify which makes common tasks easier and why.",
          },
          {
            title: "Learn UI versus UX",
            description:
              "Explore the difference between interface appearance, user journeys, usability, and the overall experience.",
          },
        ],
      },
      {
        title: "Learn User Research and Problem Definition",
        description:
          "Discover how designers investigate real user needs before deciding on a solution.",
        activities: [
          {
            title: "Choose a small problem",
            description:
              "Identify a task students commonly struggle with, such as finding information or organising schoolwork.",
          },
          {
            title: "Create a user journey",
            description:
              "Map the steps a person takes to complete the task and note where confusion or unnecessary effort occurs.",
          },
          {
            title: "Practise ethical research",
            description:
              "Ask a few willing people about their experiences without collecting unnecessary personal information.",
          },
        ],
      },
      {
        title: "Learn Wireframing and Prototyping",
        description:
          "Turn your understanding of a problem into a simple layout that can be tested.",
        activities: [
          {
            title: "Sketch low-fidelity wireframes",
            description:
              "Draw basic screen layouts showing navigation, headings, actions, and content placement.",
          },
          {
            title: "Build a clickable prototype",
            description:
              "Use a tool such as Figma to link screens and demonstrate a simple user journey.",
          },
          {
            title: "Apply accessibility principles",
            description:
              "Check text readability, colour contrast, clear labels, and whether important actions are easy to find.",
          },
        ],
      },
      {
        title: "Test, Evaluate, and Improve",
        description:
          "Learn to evaluate a design through observation and user feedback rather than personal preference alone.",
        activities: [
          {
            title: "Prepare usability tasks",
            description:
              "Write a few simple tasks that let someone try your prototype without you explaining every step.",
          },
          {
            title: "Observe and take notes",
            description:
              "Notice where users hesitate, misunderstand labels, or struggle to finish a task.",
          },
          {
            title: "Refine your prototype",
            description:
              "Make improvements based on what you observed and explain why each change helps.",
          },
        ],
      },
      {
        title: "Build a UX Portfolio and Explore Careers",
        description:
          "Present your design process and research the skills used in professional product teams.",
        activities: [
          {
            title: "Write a case study",
            description:
              "Document the problem, research, user journey, wireframes, prototype, feedback, and design decisions.",
          },
          {
            title: "Explore related roles",
            description:
              "Compare UX design, UI design, interaction design, UX research, and product design.",
          },
          {
            title: "Explore the technical side",
            description:
              "Learn basic HTML and CSS concepts to understand how interface designs can be implemented.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Figma Learn",
        description:
          "Explore interface design, prototyping, and collaborative design workflows.",
        url: "https://help.figma.com/hc/en-us/categories/360002051613-Learn-design",
      },
      {
        title: "Nielsen Norman Group",
        description:
          "Learn about usability, user research, interaction design, and UX principles.",
        url: "https://www.nngroup.com/articles/",
      },
      {
        title: "Laws of UX",
        description:
          "Explore psychology-informed principles that help explain common design decisions.",
        url: "https://lawsofux.com/",
      },
      {
        title: "W3C Web Accessibility Initiative",
        description:
          "Learn about digital accessibility and designing for people with different needs.",
        url: "https://www.w3.org/WAI/",
      },
    ],
  },

  "mass-communication-media-professional": {
    stages: [
      {
        title: "Understand Media and Communication",
        description:
          "Explore how information reaches audiences through journalism, broadcasting, public relations, and digital media.",
        activities: [
          {
            title: "Compare media formats",
            description:
              "Study how a news story is presented in print, radio, television, and online.",
          },
          {
            title: "Learn about audiences",
            description:
              "Explore how audience needs, context, language, and the communication channel affect a message.",
          },
        ],
      },
      {
        title: "Develop Research and News Literacy",
        description:
          "Learn to find reliable information and distinguish verified facts from opinion and misinformation.",
        activities: [
          {
            title: "Verify a news claim",
            description:
              "Compare a report with credible independent sources and look for original statements or documents.",
          },
          {
            title: "Practise interview preparation",
            description:
              "Choose a public-interest topic and write open-ended questions for a hypothetical interview.",
          },
          {
            title: "Understand media ethics",
            description:
              "Explore accuracy, fairness, privacy, attribution, corrections, and the potential harm caused by publishing unverified claims.",
          },
        ],
      },
      {
        title: "Practise Writing and Storytelling",
        description: "Learn to communicate clearly in different media formats.",
        activities: [
          {
            title: "Write a short news report",
            description:
              "Use a fictional or verified public-interest event to practise a clear headline, lead, and supporting details.",
          },
          {
            title: "Create a broadcast script",
            description:
              "Adapt the report into a concise script that sounds natural when read aloud.",
          },
          {
            title: "Explore public relations",
            description:
              "Draft a simple press release for a fictional school event, clearly distinguishing facts from promotional language.",
          },
        ],
      },
      {
        title: "Explore Digital Media Production",
        description:
          "Understand how media teams plan, produce, and distribute content across channels.",
        activities: [
          {
            title: "Plan a short media piece",
            description:
              "Create a basic production brief with an audience, purpose, format, key message, and distribution channel.",
          },
          {
            title: "Learn content analytics",
            description:
              "Explore audience reach, engagement, and feedback, while considering accuracy and quality alongside popularity.",
          },
          {
            title: "Practise responsible publishing",
            description:
              "Check names, dates, permissions, image rights, and source attribution before sharing a sample piece.",
          },
        ],
      },
      {
        title: "Build a Media Portfolio and Plan Your Pathway",
        description:
          "Explore media specialisations and research relevant education and professional opportunities.",
        activities: [
          {
            title: "Create a portfolio",
            description:
              "Collect a news report, interview plan, broadcast script, and press release or digital media piece.",
          },
          {
            title: "Explore career specialisations",
            description:
              "Research journalism, broadcasting, public relations, corporate communication, and digital content production.",
          },
          {
            title: "Research Nigerian education options",
            description:
              "Explore mass communication and related programmes, and verify current admission requirements with JAMB and the institutions.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "BBC Academy",
        description:
          "Explore learning materials about journalism, production, and media skills.",
        url: "https://www.bbc.co.uk/academy",
      },
      {
        title: "Reuters Handbook of Journalism",
        description:
          "Learn about reporting standards, verification, accuracy, and editorial practice.",
        url: "https://www.reutersagency.com/en/about/standards-values/",
      },
      {
        title: "Poynter",
        description:
          "Explore journalism education, fact-checking, and media literacy resources.",
        url: "https://www.poynter.org/",
      },
      {
        title: "Nigerian Press Council",
        description:
          "Explore information related to responsible journalism and the Nigerian media environment.",
        url: "https://presscouncil.gov.ng/",
      },
    ],
  },

  "filmmaker-video-editor": {
    stages: [
      {
        title: "Learn Visual Storytelling",
        description:
          "Explore how images, sound, pacing, and story structure communicate meaning.",
        activities: [
          {
            title: "Analyse a short film",
            description:
              "Choose a film or short video and note how framing, lighting, sound, and editing influence the story.",
          },
          {
            title: "Learn basic story structure",
            description:
              "Practise outlining a beginning, middle, and end for a short scene or documentary idea.",
          },
        ],
      },
      {
        title: "Understand Camera and Sound Basics",
        description:
          "Learn the fundamentals of capturing clear and useful footage.",
        activities: [
          {
            title: "Practise shot types",
            description:
              "Use a phone camera to practise wide shots, medium shots, close-ups, and stable framing.",
          },
          {
            title: "Explore lighting and sound",
            description:
              "Compare footage recorded in different lighting conditions and listen for background noise or unclear dialogue.",
          },
          {
            title: "Plan a shot list",
            description:
              "Break a simple scene into the shots needed to tell the story clearly.",
          },
        ],
      },
      {
        title: "Learn Video Editing",
        description:
          "Develop the skills needed to organise footage and assemble a coherent sequence.",
        activities: [
          {
            title: "Explore an editing tool",
            description:
              "Practise with a suitable editor such as Kdenlive, Shotcut, or DaVinci Resolve, checking hardware requirements first.",
          },
          {
            title: "Edit a short sequence",
            description:
              "Import footage, trim clips, arrange a timeline, adjust audio levels, and add simple titles.",
          },
          {
            title: "Understand export settings",
            description:
              "Learn the basics of resolution, frame rate, file formats, and choosing settings for the intended platform.",
          },
        ],
      },
      {
        title: "Create a Complete Short Project",
        description:
          "Apply planning, filming, editing, and storytelling to a manageable project.",
        activities: [
          {
            title: "Write a short treatment",
            description:
              "Summarise the concept, audience, key message, and intended look of a one- to three-minute video.",
          },
          {
            title: "Film and edit the project",
            description:
              "Capture your footage, organise your files, edit the sequence, and check the final sound and picture.",
          },
          {
            title: "Respect rights and safety",
            description:
              "Obtain appropriate permission from people you film and use music, images, and footage you have rights to use.",
          },
        ],
      },
      {
        title: "Build a Video Portfolio and Explore Careers",
        description:
          "Present your work and learn about different roles in film and video production.",
        activities: [
          {
            title: "Prepare a showreel",
            description:
              "Select a few strong clips and label your contribution clearly, especially when collaborating with others.",
          },
          {
            title: "Explore production roles",
            description:
              "Research directing, editing, cinematography, sound, production management, and documentary filmmaking.",
          },
          {
            title: "Plan your learning route",
            description:
              "Explore film, theatre and media, communication, and practical production learning opportunities.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Blackmagic Design Training",
        description:
          "Find official learning materials for DaVinci Resolve, including editing and colour workflows.",
        url: "https://www.blackmagicdesign.com/products/davinciresolve/training",
      },
      {
        title: "Kdenlive Documentation",
        description: "Learn to edit video using a free, open-source editor.",
        url: "https://docs.kdenlive.org/",
      },
      {
        title: "Shotcut Tutorials",
        description:
          "Explore video-editing workflows with a free, cross-platform editor.",
        url: "https://www.shotcut.org/tutorials/",
      },
      {
        title: "StudioBinder",
        description:
          "Explore filmmaking guides covering storyboarding, shot lists, and production planning.",
        url: "https://www.studiobinder.com/blog/",
      },
    ],
  },

  "writer-content-creator": {
    stages: [
      {
        title: "Build Your Writing Foundation",
        description:
          "Develop the clarity, structure, and language skills needed to communicate ideas effectively.",
        activities: [
          {
            title: "Practise different writing formats",
            description:
              "Write a short explanation, a personal reflection, and an informative article on topics you understand.",
          },
          {
            title: "Learn editing fundamentals",
            description:
              "Revise your writing for clarity, grammar, structure, repetition, and unnecessary words.",
          },
        ],
      },
      {
        title: "Discover Your Audience and Purpose",
        description:
          "Learn to adapt content to the needs of its readers or viewers.",
        activities: [
          {
            title: "Choose a content niche",
            description:
              "Explore topics such as education, technology, culture, business, entertainment, or everyday learning.",
          },
          {
            title: "Define your audience",
            description:
              "Describe who the content is for, what they need, and what they should understand after engaging with it.",
          },
          {
            title: "Study strong examples",
            description:
              "Analyse a few credible creators or publications and identify how they structure information and maintain audience trust.",
          },
        ],
      },
      {
        title: "Learn Research and Content Planning",
        description:
          "Build a reliable process for finding information and planning useful content.",
        activities: [
          {
            title: "Practise source verification",
            description:
              "Check claims against trustworthy sources and record links or references so readers can verify important information.",
          },
          {
            title: "Create a content outline",
            description:
              "Organise a topic into a headline, introduction, key sections, supporting evidence, and conclusion.",
          },
          {
            title: "Build a content calendar",
            description:
              "Plan a small set of pieces with topics, formats, target audiences, and realistic deadlines.",
          },
        ],
      },
      {
        title: "Explore Digital Publishing and Content Formats",
        description:
          "Learn how writing can be adapted for websites, newsletters, social platforms, and multimedia.",
        activities: [
          {
            title: "Publish a sample article",
            description:
              "Write an informative piece with a clear headline, helpful subheadings, and useful references.",
          },
          {
            title: "Repurpose your content",
            description:
              "Turn the article into a short social post, a brief script, or a simple carousel outline without changing the facts.",
          },
          {
            title: "Understand basic analytics",
            description:
              "Explore views, reading time, clicks, and engagement while prioritising usefulness and accuracy over popularity alone.",
          },
        ],
      },
      {
        title: "Build a Writing Portfolio and Explore Opportunities",
        description:
          "Organise your work and investigate different writing and content-related career routes.",
        activities: [
          {
            title: "Create a portfolio",
            description:
              "Collect three to five polished samples and briefly explain the purpose and audience of each.",
          },
          {
            title: "Explore specialist roles",
            description:
              "Research copywriting, technical writing, journalism, editing, scriptwriting, blogging, and content strategy.",
          },
          {
            title: "Learn professional practice",
            description:
              "Explore attribution, copyright, consent, fact-checking, deadlines, and how to respond constructively to edits.",
          },
        ],
      },
    ],
    resources: [
      {
        title: "Purdue OWL",
        description: "Explore writing, grammar, research, and editing guides.",
        url: "https://owl.purdue.edu/",
      },
      {
        title: "Google Search Central",
        description:
          "Learn how search engines discover and understand useful web content.",
        url: "https://developers.google.com/search/docs",
      },
      {
        title: "Grammarly Handbook",
        description:
          "Review writing and grammar concepts to help strengthen your editing process.",
        url: "https://www.grammarly.com/blog/",
      },
      {
        title: "Creative Commons",
        description:
          "Understand copyright licences and how to use or share creative work responsibly.",
        url: "https://creativecommons.org/share-your-work/cclicenses/",
      },
    ],
  },
};
