const questions = [
  {
    id: 1,
    title: "Something stops working",
    prompt:
      "A device you normally use suddenly stops doing what it is supposed to do. What would you most likely do first?",
    options: [
      {
        id: "A",
        text: "Try a few things myself to see if I can get it working again.",
        dimension: "PR",
        points: 3,
      },
      {
        id: "B",
        text: "Look up the problem and compare possible causes.",
        dimension: "AT",
        points: 3,
      },
      {
        id: "C",
        text: "Ask someone who knows more about it to help.",
        dimension: "PH",
        points: 3,
      },
      {
        id: "D",
        text: "Check the device’s power, connections, or physical parts before trying anything else.",
        dimension: "PR",
        points: 3,
      },
    ],
  },
  {
    id: 2,
    title: "A group assignment",
    prompt:
      "Your group receives a difficult assignment, but nobody is sure how to begin. What would you most likely do?",
    options: [
      {
        id: "A",
        text: "Suggest breaking the assignment into smaller parts.",
        dimension: "LE",
        points: 3,
      },
      {
        id: "B",
        text: "Start looking for information about the topic.",
        dimension: "SC",
        points: 3,
      },
      {
        id: "C",
        text: "Ask everyone what they think should be done first.",
        dimension: "CO",
        points: 3,
      },
      {
        id: "D",
        text: "Plan how the group can explain its final work clearly to others.",
        dimension: "CO",
        points: 3,
      },
    ],
  },
  {
    id: 3,
    title: "Two different answers",
    prompt:
      "Two people give convincing but different explanations for the same question. What would you most likely do?",
    options: [
      {
        id: "A",
        text: "Find information that can help determine which explanation is stronger.",
        dimension: "SC",
        points: 3,
      },
      {
        id: "B",
        text: "Work out how each person arrived at their conclusion.",
        dimension: "AT",
        points: 3,
      },
      {
        id: "C",
        text: "Think of another explanation that could also make sense.",
        dimension: "CR",
        points: 3,
      },
      {
        id: "D",
        text: "Ask someone experienced in the subject to explain how they would approach the question.",
        dimension: "CO",
        points: 3,
      },
    ],
  },
  {
    id: 4,
    title: "A free afternoon",
    prompt:
      "You have a free afternoon with no schoolwork to complete. Which activity would you most likely choose?",
    options: [
      {
        id: "A",
        text: "Learn how to use something new on my phone or computer.",
        dimension: "TD",
        points: 3,
      },
      {
        id: "B",
        text: "Make, repair, assemble, or change something.",
        dimension: "PR",
        points: 3,
      },
      {
        id: "C",
        text: "Draw, design, write, edit, or create something.",
        dimension: "CR",
        points: 3,
      },
      {
        id: "D",
        text: "Watch or read something that explains how something works.",
        dimension: "SC",
        points: 3,
      },
    ],
  },
  {
    id: 5,
    title: "An unexpected result",
    prompt:
      "During a school practical, your group gets a result nobody expected. What would interest you most?",
    options: [
      {
        id: "A",
        text: "Finding out what caused the unexpected result.",
        dimension: "AT",
        points: 3,
      },
      {
        id: "B",
        text: "Checking whether the same thing would happen if the practical were repeated.",
        dimension: "SC",
        points: 3,
      },
      {
        id: "C",
        text: "Thinking about whether the result could help solve a real problem.",
        dimension: "PS",
        points: 3,
      },
      {
        id: "D",
        text: "Working out how to explain clearly to someone else what happened.",
        dimension: "CO",
        points: 3,
      },
    ],
  },
  {
    id: 6,
    title: "Helping a classmate",
    prompt:
      "A classmate is struggling to understand something you already understand. What would you most likely do?",
    options: [
      {
        id: "A",
        text: "Explain it using an example they can relate to.",
        dimension: "CO",
        points: 3,
      },
      {
        id: "B",
        text: "Let them try it while I guide them when they get stuck.",
        dimension: "PH",
        points: 3,
      },
      {
        id: "C",
        text: "Find another way of explaining it if the first explanation does not work.",
        dimension: "CR",
        points: 3,
      },
      {
        id: "D",
        text: "Show them a useful online resource or digital learning tool.",
        dimension: "TD",
        points: 3,
      },
    ],
  },
  {
    id: 7,
    title: "A frustrating school routine",
    prompt:
      "Your school has a routine that takes too much time or creates unnecessary stress. What thought is most likely to cross your mind?",
    options: [
      {
        id: "A",
        text: "“There must be a faster way to do this.”",
        dimension: "PS",
        points: 3,
      },
      {
        id: "B",
        text: "“I wonder why we have to do it this way in the first place.”",
        dimension: "AT",
        points: 3,
      },
      {
        id: "C",
        text: "“Maybe we could use a phone or computer to handle some of it.”",
        dimension: "TD",
        points: 3,
      },
      {
        id: "D",
        text: "“I wonder whether a better way of doing this could become a useful service.”",
        dimension: "BE",
        points: 3,
      },
    ],
  },
  {
    id: 8,
    title: "Different opinions in a group project",
    prompt:
      "Your group has several different ideas for completing a project. What would you most likely do?",
    options: [
      {
        id: "A",
        text: "Explain to the group what each idea does well so they can compare them.",
        dimension: "CO",
        points: 3,
      },
      {
        id: "B",
        text: "Suggest that the group choose one direction and start working.",
        dimension: "LE",
        points: 3,
      },
      {
        id: "C",
        text: "Try to combine the strongest parts of different ideas.",
        dimension: "CR",
        points: 3,
      },
      {
        id: "D",
        text: "Ask group members what they are comfortable taking responsibility for.",
        dimension: "LE",
        points: 3,
      },
    ],
  },
  {
    id: 9,
    title: "Choosing a challenge",
    prompt:
      "You can spend time working on one of the following challenges. Which would you most likely choose?",
    options: [
      {
        id: "A",
        text: "Inspect a machine, device, or system and try to locate the physical fault.",
        dimension: "PR",
        points: 3,
      },
      {
        id: "B",
        text: "Figure out why people respond differently to the same situation.",
        dimension: "PH",
        points: 3,
      },
      {
        id: "C",
        text: "Design something that looks good and is easy to use.",
        dimension: "CR",
        points: 3,
      },
      {
        id: "D",
        text: "Find patterns in information that could reveal a useful business opportunity.",
        dimension: "BE",
        points: 3,
      },
    ],
  },
  {
    id: 10,
    title: "Planning a school event",
    prompt:
      "Your class is organising a school event. Which task would you most likely enjoy taking responsibility for?",
    options: [
      {
        id: "A",
        text: "Making sure the schedule and tasks stay organised.",
        dimension: "LE",
        points: 3,
      },
      {
        id: "B",
        text: "Creating the posters, decorations, and overall look.",
        dimension: "CR",
        points: 3,
      },
      {
        id: "C",
        text: "Promoting the event and finding ways to attract support or sponsors.",
        dimension: "BE",
        points: 3,
      },
      {
        id: "D",
        text: "Helping everyone decide what to do when unexpected problems come up.",
        dimension: "LE",
        points: 3,
      },
    ],
  },

  {
    id: 11,
    title: "Choosing a practical project",
    prompt:
      "You can choose one project to work on. Which appeals to you most?",
    options: [
      {
        id: "A",
        text: "Build something that solves a real problem.",
        dimension: "PR",
        points: 3,
      },
      {
        id: "B",
        text: "Carry out an investigation and see what you discover.",
        dimension: "SC",
        points: 3,
      },
      {
        id: "C",
        text: "Create a digital product, such as a website or simple app.",
        dimension: "TD",
        points: 3,
      },
      {
        id: "D",
        text: "Create something where design and appearance matter.",
        dimension: "CR",
        points: 3,
      },
    ],
  },
  {
    id: 12,
    title: "You have ₦50,000",
    prompt:
      "Imagine you have ₦50,000 available for a project or personal initiative. Which question would you naturally think about first?",
    options: [
      {
        id: "A",
        text: "What useful thing could I make or build with it?",
        dimension: "PR",
        points: 3,
      },
      {
        id: "B",
        text: "How could I use it to make more money?",
        dimension: "BE",
        points: 3,
      },
      {
        id: "C",
        text: "How should I organise the spending so every part of a project is covered?",
        dimension: "LE",
        points: 3,
      },
      {
        id: "D",
        text: "What problem could I solve for people with it?",
        dimension: "PS",
        points: 3,
      },
    ],
  },
  {
    id: 13,
    title: "A difficult topic",
    prompt:
      "You are struggling to understand a difficult topic in one of your subjects. What would you most likely do?",
    options: [
      {
        id: "A",
        text: "Break it into smaller parts and tackle one at a time.",
        dimension: "PS",
        points: 3,
      },
      {
        id: "B",
        text: "Find an online explanation or digital learning tool that explains it differently.",
        dimension: "TD",
        points: 3,
      },
      {
        id: "C",
        text: "Try solving examples until I understand the pattern.",
        dimension: "AT",
        points: 3,
      },
      {
        id: "D",
        text: "Ask someone who understands it to show me how they approach it.",
        dimension: "PH",
        points: 3,
      },
    ],
  },
  {
    id: 14,
    title: "New technology at school",
    prompt:
      "Your school introduces a technology you have never used before. What would you most likely do?",
    options: [
      {
        id: "A",
        text: "Find out how it works.",
        dimension: "TD",
        points: 3,
      },
      {
        id: "B",
        text: "Learn what I can actually use it for.",
        dimension: "TD",
        points: 3,
      },
      {
        id: "C",
        text: "Think about what could make it better.",
        dimension: "CR",
        points: 3,
      },
      {
        id: "D",
        text: "See how other people are using it.",
        dimension: "CO",
        points: 3,
      },
    ],
  },
  {
    id: 15,
    title: "Someone has a problem",
    prompt:
      "Someone you know tells you they are dealing with a difficult situation. What would you most likely do first?",
    options: [
      {
        id: "A",
        text: "Listen carefully so I understand what they are dealing with.",
        dimension: "PH",
        points: 3,
      },
      {
        id: "B",
        text: "Help them work out what they could do next.",
        dimension: "PS",
        points: 3,
      },
      {
        id: "C",
        text: "Explain something they may not understand.",
        dimension: "CO",
        points: 3,
      },
      {
        id: "D",
        text: "Help them find someone or something that could help.",
        dimension: "PH",
        points: 3,
      },
    ],
  },

  {
    id: 16,
    title: "A difficult question",
    prompt:
      "You encounter a difficult question and do not immediately know the answer. What would you most likely do?",
    options: [
      {
        id: "A",
        text: "Use what I already know to try to work it out.",
        dimension: "AT",
        points: 3,
      },
      {
        id: "B",
        text: "Search for information and compare what I find.",
        dimension: "SC",
        points: 3,
      },
      {
        id: "C",
        text: "Try an approach that is not immediately obvious.",
        dimension: "PS",
        points: 3,
      },
      {
        id: "D",
        text: "Find someone who has dealt with something similar.",
        dimension: "PH",
        points: 3,
      },
    ],
  },
  {
    id: 17,
    title: "A week gaining experience",
    prompt:
      "You have an opportunity to spend a week gaining experience in one of these environments. Which would you prefer?",
    options: [
      {
        id: "A",
        text: "A place where people build or work with software and digital tools.",
        dimension: "TD",
        points: 3,
      },
      {
        id: "B",
        text: "A laboratory or similar environment where things are tested and investigated.",
        dimension: "SC",
        points: 3,
      },
      {
        id: "C",
        text: "A workshop, site, or other environment where things are built, repaired, or operated.",
        dimension: "PR",
        points: 3,
      },
      {
        id: "D",
        text: "A place where people work directly with or help other people.",
        dimension: "PH",
        points: 3,
      },
    ],
  },
  {
    id: 18,
    title: "A deadline is approaching",
    prompt:
      "Your group project is due in three days, but the group is becoming disorganised. What would you most likely do?",
    options: [
      {
        id: "A",
        text: "Help everyone figure out what still needs to be done.",
        dimension: "LE",
        points: 3,
      },
      {
        id: "B",
        text: "Focus on completing my own part properly.",
        dimension: "PR",
        points: 3,
      },
      {
        id: "C",
        text: "Suggest a different approach that could save time.",
        dimension: "PS",
        points: 3,
      },
      {
        id: "D",
        text: "Ask everyone what they have completed before deciding what to do next.",
        dimension: "LE",
        points: 3,
      },
    ],
  },
  {
    id: 19,
    title: "A problem around you",
    prompt:
      "You notice that students regularly struggle to get something they need. Which thought would most likely interest you?",
    options: [
      {
        id: "A",
        text: "“Why does this problem keep happening?”",
        dimension: "AT",
        points: 3,
      },
      {
        id: "B",
        text: "“Could someone create a useful solution for this?”",
        dimension: "PS",
        points: 3,
      },
      {
        id: "C",
        text: "“I wonder if this could become a small business.”",
        dimension: "BE",
        points: 3,
      },
      {
        id: "D",
        text: "“I wonder whether enough students would pay for a solution.”",
        dimension: "BE",
        points: 3,
      },
    ],
  },
  {
    id: 20,
    title: "Improving something",
    prompt:
      "A system or process works, but people find it frustrating to use. What would you most likely focus on?",
    options: [
      {
        id: "A",
        text: "Finding a way to make it faster.",
        dimension: "PS",
        points: 3,
      },
      {
        id: "B",
        text: "Making it easier for people to understand and use.",
        dimension: "CO",
        points: 3,
      },
      {
        id: "C",
        text: "Changing the way it is designed.",
        dimension: "CR",
        points: 3,
      },
      {
        id: "D",
        text: "Understanding why it was designed that way before changing it.",
        dimension: "SC",
        points: 3,
      },
    ],
  }
];