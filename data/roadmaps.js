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
              "Explore files, applications, user accounts, permissions, and basic Windows or Linux commands."
          },
          {
            title: "Understand how the internet works",
            description:
              "Learn about IP addresses, websites, DNS, routers, and how devices communicate."
          },
          {
            title: "Explore common cybersecurity threats",
            description:
              "Study phishing, malware, weak passwords, social engineering, and common ways accounts are compromised."
          }
        ]
      },
      {
        title: "Learn Security Fundamentals",
        description:
          "Understand the principles used to protect devices, accounts, networks, and information.",
        activities: [
          {
            title: "Study the CIA triad",
            description:
              "Understand confidentiality, integrity, and availability, and consider how each applies to school records or online accounts."
          },
          {
            title: "Practise password and account security",
            description:
              "Learn about password managers, multifactor authentication, software updates, and least-privilege access."
          },
          {
            title: "Explore basic Linux commands",
            description:
              "Practise navigating directories, listing files, reading text files, and understanding file permissions in a safe environment."
          }
        ]
      },
      {
        title: "Practise Defensive Security",
        description:
          "Learn how security professionals identify suspicious activity and reduce risks.",
        activities: [
          {
            title: "Recognise phishing attempts",
            description:
              "Review sample messages and identify suspicious links, misleading senders, urgent demands, and requests for sensitive information."
          },
          {
            title: "Explore security logs",
            description:
              "Learn what logs record and how repeated failed logins or unusual events can help an analyst investigate a problem."
          },
          {
            title: "Try beginner security labs",
            description:
              "Use guided exercises in an authorised training environment to practise security concepts without targeting real systems."
          }
        ]
      },
      {
        title: "Build a Security Portfolio",
        description:
          "Turn what you learn into clear evidence of your knowledge and responsible security practices.",
        activities: [
          {
            title: "Create a personal security checklist",
            description:
              "Document practical steps for securing a computer, email account, browser, and home Wi-Fi network."
          },
          {
            title: "Write a sample incident report",
            description:
              "Use a fictional phishing incident to explain what happened, the warning signs, the potential impact, and recommended responses."
          },
          {
            title: "Document a guided lab",
            description:
              "Record the objective, steps, observations, and lessons from a beginner cybersecurity exercise."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Cisco Networking Academy",
        description:
          "Explore introductory cybersecurity and networking learning opportunities.",
        url: "https://www.netacad.com/"
      },
      {
        title: "TryHackMe",
        description:
          "Practise security fundamentals through guided, beginner-friendly learning paths.",
        url: "https://tryhackme.com/"
      },
      {
        title: "Microsoft Learn",
        description:
          "Study security, identity, Windows, and related technical fundamentals.",
        url: "https://learn.microsoft.com/"
      },
      {
        title: "Cybersecurity and Infrastructure Security Agency",
        description:
          "Read practical security guidance and learn about common cyber threats.",
        url: "https://www.cisa.gov/"
      }
    ]
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
              "Choose a familiar topic, such as class attendance, study time, or transport costs, and identify what information could help answer a question."
          },
          {
            title: "Understand types of data",
            description:
              "Learn the difference between numerical and categorical data, structured records, and missing or inconsistent values."
          },
          {
            title: "Ask useful questions",
            description:
              "Practise turning a broad topic into specific questions that can be answered using collected information."
          }
        ]
      },
      {
        title: "Learn Spreadsheets",
        description:
          "Use spreadsheet tools to organise, clean, calculate, and summarise information.",
        activities: [
          {
            title: "Create a small dataset",
            description:
              "Build a spreadsheet using fictional sales, attendance, or study records with clear column headings."
          },
          {
            title: "Practise formulas",
            description:
              "Use SUM, AVERAGE, COUNT, IF, and other suitable functions to calculate and compare values."
          },
          {
            title: "Clean and organise data",
            description:
              "Identify duplicates, missing values, inconsistent labels, and formatting problems, then correct them."
          },
          {
            title: "Create charts and summaries",
            description:
              "Use suitable charts, filters, sorting, and pivot tables where available to communicate patterns."
          }
        ]
      },
      {
        title: "Explore SQL and Basic Statistics",
        description:
          "Learn how analysts retrieve information and determine what the numbers actually mean.",
        activities: [
          {
            title: "Understand descriptive statistics",
            description:
              "Practise calculating and interpreting mean, median, mode, range, and percentages."
          },
          {
            title: "Learn basic SQL",
            description:
              "Practise SELECT, WHERE, ORDER BY, GROUP BY, and simple aggregate functions using sample databases."
          },
          {
            title: "Question your findings",
            description:
              "Consider sample size, missing information, misleading comparisons, and why correlation does not necessarily mean causation."
          }
        ]
      },
      {
        title: "Visualise and Explain Findings",
        description:
          "Turn calculations into understandable insights that help someone make a decision.",
        activities: [
          {
            title: "Build a simple dashboard",
            description:
              "Combine summary figures, charts, and clear labels into a dashboard using a spreadsheet or an introductory visualisation tool."
          },
          {
            title: "Write evidence-based observations",
            description:
              "Describe what the data shows, support each observation with figures, and distinguish facts from assumptions."
          },
          {
            title: "Present a recommendation",
            description:
              "Explain your findings to a classmate or friend and suggest a practical next step supported by the data."
          }
        ]
      },
      {
        title: "Complete a Data Project",
        description:
          "Demonstrate your skills with a small, well-documented analysis project.",
        activities: [
          {
            title: "Choose a manageable question",
            description:
              "For example, analyse fictional shop sales or a public dataset to investigate changes, differences, or patterns."
          },
          {
            title: "Document your analysis",
            description:
              "Explain the question, data source, cleaning decisions, calculations, charts, limitations, and conclusions."
          },
          {
            title: "Publish your work",
            description:
              "Prepare a readable report or dashboard and, if appropriate, share your files or project notes in a portfolio."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Kaggle Learn",
        description:
          "Practise introductory data analysis, spreadsheets, SQL, and Python through short lessons.",
        url: "https://www.kaggle.com/learn"
      },
      {
        title: "SQLBolt",
        description:
          "Learn SQL fundamentals through interactive exercises.",
        url: "https://sqlbolt.com/"
      },
      {
        title: "Microsoft Learn",
        description:
          "Explore data concepts and introductory Power BI learning materials.",
        url: "https://learn.microsoft.com/"
      },
      {
        title: "Our World in Data",
        description:
          "Explore public datasets, charts, and examples of evidence-based analysis.",
        url: "https://ourworldindata.org/"
      }
    ]
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
              "Understand LANs, WANs, wireless networks, and how networks are used in homes, schools, and offices."
          },
          {
            title: "Learn essential network concepts",
            description:
              "Study IP addresses, MAC addresses, routers, switches, access points, and basic network protocols."
          },
          {
            title: "Trace a connection",
            description:
              "Draw how a device connects through a router to a website and learn the basic roles of DNS and DHCP."
          }
        ]
      },
      {
        title: "Learn Addressing and Network Services",
        description:
          "Understand how devices receive addresses and how common services help networks operate.",
        activities: [
          {
            title: "Practise IPv4 addressing",
            description:
              "Learn about network addresses, subnet masks, private IP ranges, and default gateways."
          },
          {
            title: "Explore DNS and DHCP",
            description:
              "Explain how devices obtain network settings and how domain names are translated into IP addresses."
          },
          {
            title: "Use basic diagnostic commands",
            description:
              "Practise commands such as ipconfig or ip addr, ping, and tracert or traceroute on your own device."
          }
        ]
      },
      {
        title: "Design and Simulate Networks",
        description:
          "Apply networking concepts to small network designs before working with physical equipment.",
        activities: [
          {
            title: "Draw a small office network",
            description:
              "Plan the connections between computers, a switch, a router, a wireless access point, and an internet connection."
          },
          {
            title: "Try a network simulator",
            description:
              "Use Cisco Packet Tracer or another suitable simulator to connect devices and practise basic configurations."
          },
          {
            title: "Explore network segmentation",
            description:
              "Learn why organisations separate devices or departments into different networks and how this can improve management and security."
          }
        ]
      },
      {
        title: "Troubleshoot Network Problems",
        description:
          "Develop a systematic approach to identifying and resolving connectivity issues.",
        activities: [
          {
            title: "Follow a troubleshooting sequence",
            description:
              "Check physical or wireless connections, device settings, gateway reachability, DNS, and the destination service in a logical order."
          },
          {
            title: "Investigate common scenarios",
            description:
              "Work through simulated cases involving incorrect IP settings, weak Wi-Fi, failed DNS resolution, or disconnected equipment."
          },
          {
            title: "Document the solution",
            description:
              "Record the symptoms, checks performed, root cause, fix, and any preventive recommendation."
          }
        ]
      },
      {
        title: "Build a Networking Portfolio",
        description:
          "Show that you can plan, explain, and troubleshoot a basic network.",
        activities: [
          {
            title: "Complete a simulated network",
            description:
              "Build a small network, document the addressing plan, and test connectivity between devices."
          },
          {
            title: "Create a network diagram",
            description:
              "Label devices, connections, IP ranges, and the purpose of each part of your design."
          },
          {
            title: "Explore professional pathways",
            description:
              "Research networking support roles, entry-level certifications, and further training that fits your goals and resources."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Cisco Networking Academy",
        description:
          "Explore introductory networking courses and guided practical learning.",
        url: "https://www.netacad.com/"
      },
      {
        title: "Cisco Packet Tracer",
        description:
          "Learn about network simulation tools and practise building virtual networks.",
        url: "https://www.netacad.com/courses/packet-tracer"
      },
      {
        title: "Practical Networking",
        description:
          "Study networking concepts through accessible explanations and diagrams.",
        url: "https://www.practicalnetworking.net/"
      },
      {
        title: "Cloudflare Learning Center",
        description:
          "Understand DNS, IP addresses, routing, and other internet fundamentals.",
        url: "https://www.cloudflare.com/learning/"
      }
    ]
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
              "Learn the purpose of the CPU, RAM, storage, motherboard, power supply, and common peripherals."
          },
          {
            title: "Explore operating systems",
            description:
              "Practise managing files, applications, user accounts, settings, and updates in an operating system you can access."
          },
          {
            title: "Understand common computer problems",
            description:
              "Study symptoms such as slow performance, storage shortages, application crashes, and connection failures."
          }
        ]
      },
      {
        title: "Learn Troubleshooting",
        description:
          "Develop a careful, repeatable process for diagnosing technical issues.",
        activities: [
          {
            title: "Ask the right questions",
            description:
              "Practise gathering symptoms, error messages, recent changes, and the impact of a problem before attempting a fix."
          },
          {
            title: "Use built-in diagnostic tools",
            description:
              "Explore task managers, system settings, storage tools, and basic network diagnostics available on your device."
          },
          {
            title: "Practise safe troubleshooting",
            description:
              "Work through fictional support cases and try low-risk fixes before considering more disruptive changes."
          },
          {
            title: "Record what you did",
            description:
              "Write down the problem, diagnostic steps, solution, and outcome so another person can follow your work."
          }
        ]
      },
      {
        title: "Explore Networks and Security",
        description:
          "Learn the common connectivity and security issues that affect computer users.",
        activities: [
          {
            title: "Understand everyday networking",
            description:
              "Learn about Wi-Fi, routers, IP addresses, DNS, and common reasons a device might lose connectivity."
          },
          {
            title: "Practise basic account security",
            description:
              "Learn how to recognise phishing, protect credentials, use multifactor authentication, and apply software updates."
          },
          {
            title: "Understand permissions and backups",
            description:
              "Explore user access levels, safe file handling, backup practices, and why sensitive data needs protection."
          }
        ]
      },
      {
        title: "Develop Support and Communication Skills",
        description:
          "Learn to help people clearly, respectfully, and without making technical problems more confusing.",
        activities: [
          {
            title: "Explain a fix in simple language",
            description:
              "Practise explaining a technical issue to someone without assuming they already understand the terminology."
          },
          {
            title: "Write a support ticket",
            description:
              "Create a sample ticket containing the issue, affected device, urgency, troubleshooting steps, and resolution."
          },
          {
            title: "Practise a support scenario",
            description:
              "Role-play helping someone with a common issue and ask clarifying questions before recommending a solution."
          }
        ]
      },
      {
        title: "Build a Practical Support Portfolio",
        description:
          "Collect examples that demonstrate your troubleshooting process and technical communication.",
        activities: [
          {
            title: "Create a troubleshooting guide",
            description:
              "Write a beginner-friendly guide for a common issue, such as a device failing to connect to Wi-Fi."
          },
          {
            title: "Build a small lab",
            description:
              "Use your own device or a permitted practice environment to explore settings, users, updates, and basic diagnostics."
          },
          {
            title: "Research entry-level roles",
            description:
              "Explore help desk, desktop support, and IT technician responsibilities, along with the skills employers commonly request."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Google IT Support Certificate",
        description:
          "Explore structured learning covering computer hardware, operating systems, networking, and troubleshooting.",
        url: "https://www.coursera.org/professional-certificates/google-it-support"
      },
      {
        title: "Microsoft Learn",
        description:
          "Study Windows, Microsoft technologies, security, and technical support concepts.",
        url: "https://learn.microsoft.com/"
      },
      {
        title: "Cisco Networking Academy",
        description:
          "Build networking and cybersecurity knowledge useful in IT support.",
        url: "https://www.netacad.com/"
      },
      {
        title: "iFixit",
        description:
          "Explore repair guides to understand device components and common hardware repairs. Follow safety guidance and seek supervision where needed.",
        url: "https://www.ifixit.com/"
      }
    ]
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
              "Practise algebra, geometry, trigonometry, ratios, and interpreting graphs."
          },
          {
            title: "Explore forces and motion",
            description:
              "Learn about forces, equilibrium, friction, motion, and how loads affect objects."
          },
          {
            title: "Observe the built environment",
            description:
              "Study bridges, buildings, drainage systems, and roads around you, and consider the problems each structure must solve."
          }
        ]
      },
      {
        title: "Understand Civil Engineering Fundamentals",
        description:
          "Explore the materials, measurements, and design principles behind infrastructure.",
        activities: [
          {
            title: "Learn about construction materials",
            description:
              "Explore the properties and uses of concrete, steel, timber, bricks, and other common building materials."
          },
          {
            title: "Study structural concepts",
            description:
              "Learn introductory concepts such as tension, compression, bending, stability, and load distribution."
          },
          {
            title: "Explore surveying and site planning",
            description:
              "Understand how measurements, levels, site conditions, and maps inform construction planning."
          }
        ]
      },
      {
        title: "Explore Engineering Design Tools",
        description:
          "Become familiar with the drawings and digital tools used to communicate engineering designs.",
        activities: [
          {
            title: "Practise technical drawing",
            description:
              "Create simple, clearly labelled plans and elevations using appropriate drawing tools."
          },
          {
            title: "Explore CAD software",
            description:
              "Try beginner tutorials in a computer-aided design tool to understand how accurate technical drawings are created."
          },
          {
            title: "Learn about environmental considerations",
            description:
              "Explore drainage, erosion, waste management, and how construction can affect nearby communities."
          }
        ]
      },
      {
        title: "Apply Your Knowledge to a Design Challenge",
        description:
          "Use a small hypothetical project to practise planning, research, and technical communication.",
        activities: [
          {
            title: "Choose an infrastructure problem",
            description:
              "For example, investigate how a school walkway could manage rainwater or how a pedestrian crossing could be made safer."
          },
          {
            title: "Develop a concept proposal",
            description:
              "Prepare a labelled sketch, list design considerations, and explain why your proposed approach might help."
          },
          {
            title: "Explain limitations and safety",
            description:
              "Identify the information, calculations, professional review, and approvals that would be needed before real construction."
          }
        ]
      },
      {
        title: "Explore Education and Career Pathways",
        description:
          "Understand how to progress from secondary school into civil engineering study and professional practice.",
        activities: [
          {
            title: "Research accredited programmes",
            description:
              "Investigate Nigerian institutions offering Civil Engineering and verify current admission requirements and programme accreditation."
          },
          {
            title: "Explore specialist fields",
            description:
              "Learn about structural, transportation, geotechnical, water resources, and environmental engineering."
          },
          {
            title: "Build a learning portfolio",
            description:
              "Keep your technical drawings, design proposal, research notes, and reflections together as evidence of your learning."
          }
        ]
      }
    ],
    resources: [
      {
        title: "NPTEL",
        description:
          "Explore engineering lectures and introductory courses covering civil engineering and related subjects.",
        url: "https://nptel.ac.in/"
      },
      {
        title: "Autodesk Education",
        description:
          "Explore educational access and learning resources for computer-aided design tools.",
        url: "https://www.autodesk.com/education/"
      },
      {
        title: "MIT OpenCourseWare",
        description:
          "Access open engineering course materials and strengthen your understanding of technical concepts.",
        url: "https://ocw.mit.edu/"
      },
      {
        title: "Council for the Regulation of Engineering in Nigeria",
        description:
          "Learn about engineering regulation and professional practice in Nigeria.",
        url: "https://coren.gov.ng/"
      }
    ]
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
              "Strengthen algebra, trigonometry, geometry, graphs, and unit conversions."
          },
          {
            title: "Explore forces and motion",
            description:
              "Study speed, acceleration, Newton's laws, friction, momentum, and equilibrium."
          },
          {
            title: "Investigate energy and heat",
            description:
              "Learn about energy transfer, temperature, heat, work, and basic thermodynamic ideas."
          }
        ]
      },
      {
        title: "Explore Machines and Mechanical Systems",
        description:
          "Discover how mechanical components work together to perform useful tasks.",
        activities: [
          {
            title: "Identify common machine components",
            description:
              "Explore gears, pulleys, bearings, shafts, springs, levers, and fasteners."
          },
          {
            title: "Study simple mechanisms",
            description:
              "Investigate how bicycles, hand tools, pumps, and other everyday machines transfer force or movement."
          },
          {
            title: "Learn about materials",
            description:
              "Compare common metals, plastics, and composites in terms of strength, weight, durability, and suitable uses."
          }
        ]
      },
      {
        title: "Learn Technical Drawing and Modelling",
        description:
          "Practise communicating mechanical ideas through accurate drawings and digital models.",
        activities: [
          {
            title: "Create dimensioned drawings",
            description:
              "Draw simple objects with appropriate dimensions, views, labels, and proportions."
          },
          {
            title: "Try a CAD tool",
            description:
              "Follow a beginner tutorial to model a basic mechanical part and inspect it from different angles."
          },
          {
            title: "Explore design constraints",
            description:
              "Consider how cost, material choice, safety, maintenance, and manufacturing affect a design."
          }
        ]
      },
      {
        title: "Solve a Mechanical Design Problem",
        description:
          "Apply your knowledge to a small concept design and explain how it could work.",
        activities: [
          {
            title: "Choose a practical problem",
            description:
              "Consider a simple hand-operated device, a low-cost trolley concept, or an improvement to an everyday mechanism."
          },
          {
            title: "Sketch a proposed solution",
            description:
              "Label the important components and explain how movement or force passes through the system."
          },
          {
            title: "Review the design",
            description:
              "Identify possible failure points, safety concerns, material needs, and improvements."
          }
        ]
      },
      {
        title: "Explore Mechanical Engineering Careers",
        description:
          "Learn how mechanical engineers contribute to industry, energy, manufacturing, and product development.",
        activities: [
          {
            title: "Research study routes",
            description:
              "Compare Nigerian Mechanical Engineering programmes and verify their current admission requirements and accreditation."
          },
          {
            title: "Explore areas of specialisation",
            description:
              "Investigate manufacturing, automotive systems, energy, HVAC, robotics, and maintenance engineering."
          },
          {
            title: "Document your projects",
            description:
              "Collect drawings, design explanations, and lessons learned in a portfolio that shows how you approach problems."
          }
        ]
      }
    ],
    resources: [
      {
        title: "MIT OpenCourseWare",
        description:
          "Explore open courses and materials in mechanics, thermodynamics, and engineering design.",
        url: "https://ocw.mit.edu/"
      },
      {
        title: "Autodesk Education",
        description:
          "Learn about CAD tools and educational resources for technical modelling.",
        url: "https://www.autodesk.com/education/"
      },
      {
        title: "Engineering Explained",
        description:
          "Explore accessible explanations of mechanical and automotive engineering concepts.",
        url: "https://www.youtube.com/user/EngineeringExplained"
      },
      {
        title: "Council for the Regulation of Engineering in Nigeria",
        description:
          "Explore the regulation of engineering practice in Nigeria.",
        url: "https://coren.gov.ng/"
      }
    ]
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
              "Study voltage, current, resistance, power, and energy, including their units and relationships."
          },
          {
            title: "Explore basic circuit laws",
            description:
              "Practise simple calculations using Ohm's law and introductory series and parallel circuits."
          },
          {
            title: "Strengthen mathematical skills",
            description:
              "Work on algebra, graphs, ratios, and trigonometry used in electrical calculations."
          }
        ]
      },
      {
        title: "Explore Circuits and Components",
        description:
          "Discover how electrical and electronic components work together in practical systems.",
        activities: [
          {
            title: "Identify common components",
            description:
              "Learn the roles of resistors, capacitors, diodes, transistors, switches, and integrated circuits."
          },
          {
            title: "Simulate simple circuits",
            description:
              "Use a circuit simulator to investigate how changing component values affects circuit behaviour."
          },
          {
            title: "Understand digital logic",
            description:
              "Explore binary numbers and basic AND, OR, and NOT logic gates."
          }
        ]
      },
      {
        title: "Practise Safe Design and Measurement",
        description:
          "Learn how engineers test circuits, interpret measurements, and work responsibly around electrical systems.",
        activities: [
          {
            title: "Explore virtual instruments",
            description:
              "Use a circuit simulator to understand the purpose of a multimeter, oscilloscope, and power supply."
          },
          {
            title: "Read simple circuit diagrams",
            description:
              "Identify component symbols, connections, power sources, and ground references in basic schematics."
          },
          {
            title: "Learn electrical safety",
            description:
              "Understand insulation, current hazards, protective devices, and why mains electrical work requires appropriate training and supervision."
          }
        ]
      },
      {
        title: "Build a Beginner Electronics Project",
        description:
          "Apply your knowledge to a small, low-voltage project or simulation.",
        activities: [
          {
            title: "Choose a simple project",
            description:
              "Try simulating an LED indicator, a basic sensor circuit, or a simple logic circuit."
          },
          {
            title: "Record your design",
            description:
              "Document the circuit diagram, component choices, expected behaviour, and observations."
          },
          {
            title: "Test and improve",
            description:
              "Compare expected and observed behaviour in the simulator and explain what you changed and why."
          }
        ]
      },
      {
        title: "Explore Study and Career Options",
        description:
          "Discover the different directions electrical and electronics engineering can take.",
        activities: [
          {
            title: "Research Nigerian programmes",
            description:
              "Compare relevant degree programmes and verify current admission requirements and accreditation."
          },
          {
            title: "Explore specialist areas",
            description:
              "Investigate power systems, telecommunications, control systems, embedded electronics, and instrumentation."
          },
          {
            title: "Create a project portfolio",
            description:
              "Save your circuit diagrams, simulation results, and explanations of the engineering principles involved."
          }
        ]
      }
    ],
    resources: [
      {
        title: "All About Circuits",
        description:
          "Study electronics textbooks, circuit concepts, and practical explanations.",
        url: "https://www.allaboutcircuits.com/"
      },
      {
        title: "CircuitJS",
        description:
          "Experiment with electronic circuits in an interactive simulator.",
        url: "https://www.falstad.com/circuit/"
      },
      {
        title: "PhET Interactive Simulations",
        description:
          "Explore interactive science and physics simulations, including electricity concepts.",
        url: "https://phet.colorado.edu/"
      },
      {
        title: "Council for the Regulation of Engineering in Nigeria",
        description:
          "Learn about engineering regulation and professional practice.",
        url: "https://coren.gov.ng/"
      }
    ]
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
              "Learn the roles of processors, memory, storage, motherboards, and input/output devices."
          },
          {
            title: "Strengthen mathematics and physics",
            description:
              "Practise algebra, binary numbers, basic electricity, and logical reasoning."
          },
          {
            title: "Understand the software-hardware relationship",
            description:
              "Explore how programs use processors, memory, storage, and connected devices to perform tasks."
          }
        ]
      },
      {
        title: "Learn Programming and Digital Logic",
        description:
          "Discover how software instructions and digital circuits form the foundation of computing systems.",
        activities: [
          {
            title: "Learn programming fundamentals",
            description:
              "Use a beginner-friendly language to practise variables, conditions, loops, functions, and simple problem-solving."
          },
          {
            title: "Explore binary and logic gates",
            description:
              "Practise converting simple binary numbers and understanding how logic gates process digital signals."
          },
          {
            title: "Study basic computer architecture",
            description:
              "Learn the introductory roles of the CPU, registers, memory, instructions, and data buses."
          }
        ]
      },
      {
        title: "Explore Hardware and Embedded Systems",
        description:
          "Investigate how computers interact with sensors, electronic components, and physical devices.",
        activities: [
          {
            title: "Explore microcontrollers",
            description:
              "Learn what microcontrollers do and how they differ from general-purpose computers."
          },
          {
            title: "Try an online electronics simulator",
            description:
              "Use a safe simulation environment to explore a simple sensor, LED, or input-and-output project."
          },
          {
            title: "Understand interfaces",
            description:
              "Learn the basic purposes of USB, serial communication, GPIO, and other ways devices exchange information."
          }
        ]
      },
      {
        title: "Create a Small Computing Project",
        description:
          "Combine programming, logical thinking, and hardware concepts in a documented beginner project.",
        activities: [
          {
            title: "Choose a project idea",
            description:
              "Consider a simulated traffic light, a basic temperature-monitoring concept, or a program that reads and processes sample sensor data."
          },
          {
            title: "Plan how it works",
            description:
              "Draw a simple system diagram and explain the roles of the input, processing, and output."
          },
          {
            title: "Test and document",
            description:
              "Record the expected behaviour, observations, limitations, and possible improvements."
          }
        ]
      },
      {
        title: "Explore Computer Engineering Pathways",
        description:
          "Understand the education and specialisations that can lead into computer engineering.",
        activities: [
          {
            title: "Research degree programmes",
            description:
              "Compare Computer Engineering programmes in Nigeria and verify current admission requirements and accreditation."
          },
          {
            title: "Explore career directions",
            description:
              "Investigate embedded systems, computer hardware, firmware, robotics, digital systems, and hardware testing."
          },
          {
            title: "Build a technical portfolio",
            description:
              "Collect code, diagrams, simulations, and project explanations to demonstrate your progress."
          }
        ]
      }
    ],
    resources: [
      {
        title: "Nand2Tetris",
        description:
          "Explore how computers are built from fundamental logic components and how hardware relates to software.",
        url: "https://www.nand2tetris.org/"
      },
      {
        title: "Arduino Documentation",
        description:
          "Learn about microcontrollers, electronics projects, and embedded programming.",
        url: "https://docs.arduino.cc/"
      },
      {
        title: "Wokwi",
        description:
          "Experiment with simulated microcontrollers and electronics projects in a browser.",
        url: "https://wokwi.com/"
      },
      {
        title: "MIT OpenCourseWare",
        description:
          "Access open learning materials covering computing, electronics, and engineering.",
        url: "https://ocw.mit.edu/"
      }
    ]
  },

  "architect": {
    stages: [
      {
        title: "Develop Your Design Awareness",
        description:
          "Learn how buildings combine function, appearance, comfort, safety, and their surrounding environment.",
        activities: [
          {
            title: "Observe buildings around you",
            description:
              "Compare classrooms, homes, shops, and public buildings. Notice how their layouts support the activities inside."
          },
          {
            title: "Practise visual observation",
            description:
              "Sketch a room or small building and note its proportions, entrances, windows, circulation, and use of natural light."
          },
          {
            title: "Explore basic geometry and scale",
            description:
              "Practise measurements, geometric shapes, proportions, and scale drawings."
          }
        ]
      },
      {
        title: "Learn Architectural Drawing",
        description:
          "Explore the drawings architects use to communicate spaces and design ideas.",
        activities: [
          {
            title: "Draw a simple floor plan",
            description:
              "Create a labelled plan of a small room or study area with approximate dimensions and furniture placement."
          },
          {
            title: "Explore elevations and sections",
            description:
              "Learn how different views communicate a building's external appearance and internal arrangement."
          },
          {
            title: "Understand scale and annotations",
            description:
              "Practise clear labels, dimensions, symbols, and consistent drawing conventions."
          }
        ]
      },
      {
        title: "Explore Space Planning and Design",
        description:
          "Learn how architects organise spaces around people, activities, and practical constraints.",
        activities: [
          {
            title: "Plan for users",
            description:
              "Design a small study space or reading room, considering movement, accessibility, privacy, and comfort."
          },
          {
            title: "Explore light and ventilation",
            description:
              "Investigate how window placement, shading, airflow, and orientation affect indoor environments."
          },
          {
            title: "Discover digital design tools",
            description:
              "Try a beginner-friendly 2D or 3D design tool to develop and present a simple architectural concept."
          }
        ]
      },
      {
        title: "Develop an Architectural Concept",
        description:
          "Combine observation, drawing, and design decisions into a small concept project.",
        activities: [
          {
            title: "Choose a design brief",
            description:
              "Create a hypothetical brief for a small reading room, student study area, or community space."
          },
          {
            title: "Produce a concept presentation",
            description:
              "Prepare a floor plan, sketches, a simple model or visualisation, and a short explanation of your design choices."
          },
          {
            title: "Review the design responsibly",
            description:
              "Consider accessibility, weather, materials, safety, site conditions, and why real projects require qualified professionals and approvals."
          }
        ]
      },
      {
        title: "Explore Architectural Education",
        description:
          "Research the study route and professional requirements for practising architecture.",
        activities: [
          {
            title: "Research recognised programmes",
            description:
              "Investigate architecture programmes in Nigeria and confirm current admission requirements and accreditation."
          },
          {
            title: "Understand professional progression",
            description:
              "Research the role of the Architects Registration Council of Nigeria and the professional requirements applicable to architectural practice."
          },
          {
            title: "Build a design portfolio",
            description:
              "Organise sketches, plans, concept presentations, and reflections to demonstrate your creativity and design thinking."
          }
        ]
      }
    ],
    resources: [
      {
        title: "ArchDaily",
        description:
          "Explore building projects, architectural drawings, design ideas, and examples from around the world.",
        url: "https://www.archdaily.com/"
      },
      {
        title: "Autodesk Education",
        description:
          "Explore educational design tools and resources for architectural modelling and drafting.",
        url: "https://www.autodesk.com/education/"
      },
      {
        title: "SketchUp Campus",
        description:
          "Learn 3D modelling through tutorials and educational materials.",
        url: "https://learn.sketchup.com/"
      },
      {
        title: "Architects Registration Council of Nigeria",
        description:
          "Explore information about architectural regulation and professional practice in Nigeria.",
        url: "https://arcon.gov.ng/"
      }
    ]
  },

};
