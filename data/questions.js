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
  }

  
];