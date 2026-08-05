const army = {
  slug: "army",
  branchName: "Pakistan Army",
  motto: "Faith, Unity, Discipline",
  heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
  tagline: "Junoon, Josh, Jazba — become a leader of soldiers.",
  portal: "https://www.joinpakarmy.gov.pk",
  intro:
    "The Army is Pakistan's largest service and offers the widest range of entry points — from Matric-level soldier recruitment to postgraduate specialist commissions. Most officer routes end the same way: a written/initial test, a medical and physical screening, and a four-day ISSB assessment at Kohat, Gujranwala or another selection board.",
  stats: [
    { label: "Main Officer Route", value: "PMA Long Course" },
    { label: "Training Duration", value: "2 Years, Kakul" },
    { label: "ISSB Attempts", value: "2 (3 with Masters)" },
    { label: "Selection Stages", value: "4" },
  ],
  entries: [
    {
      name: "PMA Long Course",
      education: "Intermediate (FSc/FA/ICS) or equivalent, min. 60% marks; graduates also eligible",
      age: "17 – 22 yrs (up to 23–25 with relaxations for BS graduates/serving soldiers)",
      gender: "Male",
      notes: "Premier 2-year commission at Pakistan Military Academy, Kakul. Commissioned as Second Lieutenant.",
    },
    {
      name: "Direct Short Service Commission (DSSC)",
      education: "16 years of education (BS/MA/MSc) in relevant specialisation, min. 2.5 CGPA or 62.5%",
      age: "Up to 28 yrs (varies by branch)",
      gender: "Male / Female (branch-dependent)",
      notes: "Fast-track commission for education, psychology, IT, engineering and veterinary specialists as Captain.",
    },
    {
      name: "Army Medical Corps / MBBS Entry",
      education: "MBBS from a PM&DC-recognised institute",
      age: "Up to 28 yrs",
      gender: "Male / Female",
      notes: "For qualified doctors seeking a commissioned medical career in uniform.",
    },
    {
      name: "Lady Cadet Course (LCC)",
      education: "Intermediate or Bachelor's, min. 60%",
      age: "17 – 24 yrs",
      gender: "Female",
      notes: "Regular commission for women through PMA, mirroring the male Long Course structure.",
    },
    {
      name: "Soldier / Sipahi (General Duty)",
      education: "Matric (any group)",
      age: "17.5 – 23 yrs",
      gender: "Male",
      notes: "Enrolment via nearest Army Selection & Recruitment Centre (AS&RC); no ISSB required.",
    },
    {
      name: "Technical Cadet Course (TCC)",
      education: "Pre-Engineering Intermediate, min. 60%",
      age: "17 – 22 yrs",
      gender: "Male",
      notes: "Engineering-track cadets trained at NUST-affiliated colleges before commissioning through PMA.",
    },
  ],
  eligibilityGeneral: [
    "Must hold valid Pakistani citizenship (including AJK and Gilgit-Baltistan domiciles).",
    "Minimum height 5'4\" for men and 5'2\" for women (varies slightly by branch).",
    "No history of criminal conviction or dismissal from a government department.",
    "Free from correctable vision or dental disqualifications at the medical board stage.",
    "Unmarried for cadet-entry courses; DSSC entries may permit married applicants.",
  ],
  selectionProcess: [
    {
      title: "Online Registration",
      description:
        "Applications open on joinpakarmy.gov.pk against a specific advertisement. Fill in academic, domicile and CNIC details accurately and print the registration slip — it carries your roll number and test centre.",
    },
    {
      title: "Initial Test at AS&RC",
      description:
        "A one-day written screening covering intelligence/IQ and academic subjects relevant to your entry (Math, English, General Science, Pakistan Studies). A short interview with the centre's selection staff typically follows on the same day.",
    },
    {
      title: "Preliminary Medical & Physical Test",
      description:
        "Height, weight, chest, vision and general fitness are checked, followed by a physical routine — usually a timed run, push-ups and sit-ups against Army standards for your age group.",
    },
    {
      title: "ISSB Assessment (4 Days)",
      description:
        "Shortlisted candidates travel to a Selection Board (Kohat, Gujranwala, Malir or Quetta) for the four-day psychological, group-task and board-interview process described in detail on the ISSB page.",
    },
    {
      title: "Final Medical Board & Merit List",
      description:
        "ISSB-recommended candidates undergo a detailed medical board at a Combined Military Hospital. A final merit list is drawn from ISSB grading, academic marks and the medical outcome.",
    },
  ],
  physicalStandards: [
    { title: "1.6 KM Run", text: "Target under 8 minutes for male cadet-entry candidates; standards are age- and gender-adjusted." },
    { title: "Push-Ups", text: "A minimum count is expected within a set time — build up gradually over 8-10 weeks rather than peaking too early." },
    { title: "Chin-Ups / Sit-Ups", text: "Upper body and core endurance are tested alongside the run; both are trainable with a simple weekly routine." },
    { title: "Height & Chest", text: "Minimum height thresholds apply by gender and branch; chest expansion is measured during the medical." },
  ],
  preparationSubjects: [
    { title: "Intelligence / IQ", list: ["Number and letter series", "Verbal & non-verbal reasoning", "Analogies and classification", "Coding-decoding puzzles"] },
    { title: "English", list: ["Grammar and sentence correction", "Vocabulary and synonyms/antonyms", "Comprehension passages", "Précis and basic composition"] },
    { title: "General Science & Math", list: ["Intermediate-level Physics/Chemistry basics", "Percentages, ratios, mensuration", "Basic algebra and word problems", "General knowledge of Pakistan's geography"] },
    { title: "Current Affairs & Pakistan Studies", list: ["Constitutional history milestones", "Recent national and defence news", "Regional geography and neighbours", "Kashmir issue and foreign relations basics"] },
  ],
  tips: [
    "Start a daily current-affairs habit 2–3 months before applying; ISSB interviewers probe recent events far more than static facts.",
    "Practice under timed conditions — Army initial tests are fast-paced with negative marking on some centres, so speed matters as much as accuracy.",
    "Begin the physical routine early. Fitness built in a rush before the test date is the most common reason candidates fail the physical stage.",
    "Read your own Personal Information Questionnaire (PIQ) answers carefully before ISSB — the interview is built around cross-checking what you wrote.",
  ],
  documents: [
    "Original CNIC / B-Form (for under-18 applicants)",
    "Original academic certificates and mark sheets (Matric onward)",
    "Domicile certificate",
    "Character certificate from your last institution",
    "Recent passport-size photographs (attested, per advertisement spec)",
    "Printed online registration/roll number slip",
  ],
};

export default army;
