const initialTest = {
  overview:
    "Before anyone reaches ISSB, they must clear the service's own 'initial test' at a Selection & Recruitment Centre. This is the first and highest-attrition filter — most applicants who fail the process do so here, not at ISSB. It typically combines an intelligence/IQ test with a subject-based academic test, followed by a preliminary interview and physical/medical screening.",
  sections: [
    {
      title: "Intelligence / IQ Test",
      description:
        "A timed test of verbal and non-verbal reasoning — number series, analogies, coding-decoding, pattern completion and classification. It measures how quickly and accurately you process new information, not prior knowledge.",
      practice: [
        "Do daily 20–30 minute timed practice sets rather than long irregular sessions.",
        "Learn the common series and analogy patterns (arithmetic, geometric, alphabetical) so you recognise them instantly.",
        "Skip a stuck question after ~30 seconds and return to it — the clock punishes hesitation more than the occasional wrong answer.",
      ],
    },
    {
      title: "Academic / Subject Test",
      description:
        "Content matches your entry route: English, Mathematics and General Science for Intermediate-level entries; Physics and advanced Maths for engineering and GDP routes; broader general knowledge and Pakistan Studies for graduate-entry branches.",
      practice: [
        "Revise Intermediate-level Physics and Maths formulas even if your entry doesn't strictly require them — many papers borrow cross-subject questions.",
        "Keep an English error-log of grammar mistakes you repeatedly make and drill those specifically.",
        "Build a simple current-affairs notebook covering the last 6 months of national and defence news.",
      ],
    },
    {
      title: "Preliminary Interview",
      description:
        "A short, informal panel discussion at the selection centre — confirming your documents, motivation, and basic general knowledge before you're forwarded for physical and medical checks.",
      practice: [
        "Prepare a clear 60-second answer for 'why do you want to join' specific to the service and branch you've chosen.",
        "Know your own academic record, city, and family background details precisely — vague answers stand out immediately.",
        "Dress and present yourself exactly as instructed on the call letter; small detail matters at this stage.",
      ],
    },
    {
      title: "Physical & Preliminary Medical",
      description:
        "Height, weight, chest, vision and a basic fitness routine (run, push-ups, sit-ups) are checked against the entry route's published standards.",
      practice: [
        "Start a structured running and calisthenics routine at least 6–8 weeks before your test date.",
        "Get a basic dental and vision check beforehand — easily fixed issues shouldn't cost you a slot.",
        "Follow the exact clothing and reporting instructions on your call letter to avoid an on-the-spot disqualification.",
      ],
    },
  ],
generalTips: [
    "Arrive at the centre the evening before if travelling from another city — test-day stress from a rushed journey affects performance.",
    "Bring extra photocopies of every document, even ones not explicitly requested; centres frequently ask for spares.",
    "Sleep normally in the days before the test — cramming the night before rarely helps with reasoning-heavy papers.",
    "Treat the preliminary interview as seriously as the written test; a large share of eliminations happen here, not just on paper.",
  ],
  quiz: {
    passPercentage: 80,
    sets: [
      {
        id: "verbal",
        title: "Verbal Reasoning",
        description:
          "Word analogies, series, coding-decoding and classification. These measure your command of language and logical relationships.",
        questions: [
          {
            q: "Complete the series: Hand : Glove :: Foot : ?",
            options: ["Sock", "Shoe", "Toe", "Boot"],
            answer: 0,
          },
          {
            q: "If CAT is coded as DBU, how is DOG coded?",
            options: ["EPH", "FQJ", "ENH", "EQI"],
            answer: 0,
          },
          {
            q: "Which word does NOT belong to the group?",
            options: ["Apple", "Mango", "Potato", "Orange"],
            answer: 2,
          },
          {
            q: "Find the next number: 2, 6, 12, 20, ?",
            options: ["28", "30", "32", "36"],
            answer: 1,
          },
          {
            q: "Book is to Reading as Fork is to ?",
            options: ["Eating", "Cooking", "Kitchen", "Silver"],
            answer: 0,
          },
          {
            q: "If PEN is related to INK, then BRUSH is related to ?",
            options: ["Paint", "Wall", "Wood", "Bristle"],
            answer: 0,
          },
          {
            q: "Choose the odd one out:",
            options: ["Tiger", "Lion", "Leopard", "Cow"],
            answer: 3,
          },
          {
            q: "What is the next letter in the series: A, C, F, J, ?",
            options: ["M", "N", "O", "P"],
            answer: 2,
          },
          {
            q: "Doctor is to Hospital as Teacher is to ?",
            options: ["School", "Class", "Students", "Books"],
            answer: 0,
          },
          {
            q: "If MONDAY is written as 4, how is FRIDAY written if Monday=3?",
            options: ["4", "5", "6", "7"],
            answer: 1,
          },
        ],
      },
      {
        id: "nonverbal",
        title: "Non-Verbal Reasoning",
        description:
          "Pattern completion, figure series, classification and spatial reasoning. These measure your ability to think in shapes and sequences.",
        questions: [
          {
            q: "Which figure comes next in a sequence of squares, circles, squares, circles, ?",
            options: ["Square", "Circle", "Triangle", "Rectangle"],
            answer: 0,
          },
          {
            q: "A pattern rotates 90° clockwise each step. After 3 steps it has rotated a total of ?",
            options: ["90°", "180°", "270°", "360°"],
            answer: 2,
          },
          {
            q: "Which item is the odd one out: ▲, ●, ■, ★ (all in same group)?",
            options: ["▲", "●", "■", "★"],
            answer: 3,
          },
          {
            q: "If a shape is folded in half, the number of layers is ?",
            options: ["1", "2", "3", "4"],
            answer: 1,
          },
          {
            q: "Complete the series: 1, 4, 9, 16, ? (squares of numbers)",
            options: ["20", "24", "25", "36"],
            answer: 2,
          },
          {
            q: "A cube has 6 faces. How many faces does two cubes glued together have?",
            options: ["8", "10", "12", "14"],
            answer: 1,
          },
          {
            q: "Which shape can be formed by joining two triangles?",
            options: ["Square", "Circle", "Oval", "A star"],
            answer: 0,
          },
          {
            q: "In a mirror, the letter 'b' appears as ?",
            options: ["b", "d", "p", "q"],
            answer: 1,
          },
          {
            q: "What comes next: 1, 2, 4, 8, ?",
            options: ["10", "12", "16", "32"],
            answer: 2,
          },
          {
            q: "If you rotate a square 90°, it remains a ?",
            options: ["Rectangle", "Square", "Rhombus", "Trapezoid"],
            answer: 1,
          },
        ],
      },
    ],
  },
};

export default initialTest;
