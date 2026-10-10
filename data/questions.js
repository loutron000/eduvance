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
];