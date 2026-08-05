const airforce = {
  slug: "air-force",
  branchName: "Pakistan Air Force",
  motto: "Victory Through Airpower",
  heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
  tagline: "Second to none — command the skies as a pilot, engineer or specialist officer.",
  portal: "https://www.joinpaf.gov.pk",
  intro:
    "The PAF is best known for the General Duty Pilot (GDP) route, but commissions equally strong numbers into Aeronautical Engineering, Air Defence, Air Traffic Control, Logistics, Admin, Education, Medical and Special Duties branches — most with the same initial-test-to-ISSB pipeline.",
  stats: [
    { label: "Flagship Route", value: "GD Pilot (GDP)" },
    { label: "Training Academy", value: "PAF Academy, Risalpur" },
    { label: "GDP Training Length", value: "~4 Years" },
    { label: "Selection Stages", value: "5" },
  ],
  entries: [
    {
      name: "GD Pilot (GDP)",
      education: "FSc Pre-Engineering / A-Level with Physics, Maths & Chemistry, min. 60–65%",
      age: "16 – 22 yrs",
      gender: "Male / Female",
      notes: "Permanent Commission for men, Short Service Commission for women; includes a dedicated Flying Aptitude Test after ISSB.",
    },
    {
      name: "Aeronautical Engineering",
      education: "FSc Pre-Engineering with 65%+ (Matric 1st Division) or A-Level equivalent",
      age: "16 – 22 yrs",
      gender: "Male / Female",
      notes: "4-year training at the College of Aeronautical Engineering, Risalpur.",
    },
    {
      name: "Air Defence / Admin & Special Duties",
      education: "Graduation (BA/BSc/BS) or Intermediate depending on branch, min. 2nd Division",
      age: "17 – 25 yrs",
      gender: "Male / Female",
      notes: "Covers Air Defence, Administration, Provost, Education and related ground branches.",
    },
    {
      name: "Logistics / Accounts / Legal Branches",
      education: "Relevant Bachelor's or Master's (BBA, BSCS, MCom, LLB) with 2nd Division",
      age: "20 – 28 yrs",
      gender: "Male / Female",
      notes: "Specialist graduate-entry commissions for logistics, finance and legal roles within PAF.",
    },
    {
      name: "Medical Branch",
      education: "MBBS with 2nd Division and completed house job",
      age: "As per current medical graduate standards",
      gender: "Male / Female",
      notes: "Special Purpose Short Service Commission for doctors.",
    },
    {
      name: "Airman (Non-Commissioned)",
      education: "Matric to Intermediate depending on trade",
      age: "16 – 23 yrs (trade-dependent)",
      gender: "Male",
      notes: "Technical and non-technical airman trades; recruitment through PAF Selection & Recruitment Centres, no ISSB required.",
    },
  ],
  eligibilityGeneral: [
    "Pakistani citizenship, unmarried status required for GDP and most cadet-entry branches.",
    "Minimum height around 5'4\" (163 cm) for both men and women in flying and technical branches.",
    "Excellent, uncorrected or correctable-to-standard vision for GDP; less strict for ground branches.",
    "Sound cardiovascular and general medical fitness confirmed at multiple stages.",
    "No history of disciplinary action or criminal record.",
  ],
  selectionProcess: [
    {
      title: "Online Registration",
      description:
        "Register on joinpaf.gov.pk against the relevant course advertisement, choosing your preferred branch and selection centre.",
    },
    {
      title: "Computerised Intelligence Test",
      description:
        "A verbal and non-verbal reasoning test at your selection centre — usually the first hurdle and the one that eliminates the largest share of applicants.",
    },
    {
      title: "Academic Test",
      description:
        "Subject-based MCQs matched to your entry route: Physics, Mathematics and English for GDP/Engineering candidates; general and branch-specific knowledge for other officer routes.",
    },
    {
      title: "Preliminary Medical & Interview",
      description:
        "An initial medical screening rules out obvious disqualifications, followed by a short interview with selection centre staff.",
    },
    {
      title: "Physical Test",
      description:
        "Includes a 1.6 km run, push-ups, sit-ups and a standing long jump, assessed against PAF's age- and gender-specific benchmarks.",
    },
    {
      title: "ISSB (4 Days)",
      description:
        "Shortlisted candidates attend a PAF-affiliated Selection Board; GDP applicants face an additional aptitude component geared toward flying-related cognitive skills.",
    },
    {
      title: "Flying Aptitude Test & Final Medical (GDP only)",
      description:
        "ISSB-recommended GDP candidates sit a Flying Aptitude Test, followed by a comprehensive medical board at a CMH before final merit is compiled by Air Headquarters.",
    },
  ],
  physicalStandards: [
    { title: "1.6 KM Run", text: "A core fitness benchmark for all cadet-entry branches; train progressively over several weeks." },
    { title: "Push-Ups & Sit-Ups", text: "Timed sets assessed against age-based minimums — consistency beats last-minute cramming." },
    { title: "Standing Long Jump", text: "Tests explosive leg strength; practice technique as well as raw power." },
    { title: "Vision Standard", text: "GDP applies the strictest eyesight criteria of any branch — get an optometrist check before applying if in doubt." },
  ],
  preparationSubjects: [
    { title: "Intelligence Test", list: ["Verbal reasoning and analogies", "Non-verbal pattern recognition", "Number series and coding", "Timed practice sets"] },
    { title: "Physics & Mathematics", list: ["FSc-level mechanics and waves", "Algebra, trigonometry, coordinate geometry", "Applied numerical problems", "Quick mental-math drills"] },
    { title: "English", list: ["Grammar accuracy", "Vocabulary and comprehension", "Précis writing", "Everyday communication fluency for the interview"] },
    { title: "General Knowledge & Current Affairs", list: ["PAF history and notable operations", "Aviation and aerospace basics", "National and defence current affairs", "Pakistan Studies essentials"] },
  ],
  tips: [
    "GDP hopefuls should read up on basic aerodynamics and aviation concepts — it signals genuine interest during the ISSB interview and Flying Aptitude briefing.",
    "The PAF intelligence test moves fast; timed daily practice for a month is more effective than occasional long sessions.",
    "If targeting GDP, get your eyesight checked by an ophthalmologist months in advance so there's time to address any correctable issues.",
    "Rehearse a clear, honest answer for 'why PAF over Army or Navy' — panels expect a specific, personal reason.",
  ],
  documents: [
    "Original CNIC / B-Form",
    "Original Matric/FSc/degree certificates and mark sheets",
    "Domicile certificate",
    "Character certificate from your institution",
    "Recent passport-size photographs per advertisement specification",
    "Printed registration slip / roll number slip",
  ],
};

export default airforce;
