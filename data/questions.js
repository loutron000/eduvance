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
];