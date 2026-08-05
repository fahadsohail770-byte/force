const navy = {
  slug: "navy",
  branchName: "Pakistan Navy",
  motto: "Ready to Fight, Ready to Serve",
  heroImage: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",
  tagline: "Guardians of the coastline — command at sea, in the air, and below the surface.",
  portal: "https://www.joinpaknavy.gov.pk",
  intro:
    "The Navy commissions officers through the PN Cadet entry straight after Intermediate, and through Short Service Commission for graduates and specialists across engineering, logistics, medical, IT and law branches. Sailors join separately through Matric or Intermediate-level trades at Naval Recruitment Centres.",
  stats: [
    { label: "Main Officer Route", value: "PN Cadet Entry" },
    { label: "Training Academy", value: "PNA, Karachi" },
    { label: "ISSB Location", value: "Malir / Karachi" },
    { label: "Selection Stages", value: "4" },
  ],
  entries: [
    {
      name: "PN Cadet Entry",
      education: "FSc (Pre-Engineering) or A-Level with Physics, Maths & Chemistry/Computer Science, min. 60%",
      age: "16.5 – 21 yrs",
      gender: "Male",
      notes: "Direct-from-Intermediate route into the Pakistan Naval Academy; commissioned as Midshipman.",
    },
    {
      name: "Short Service Commission (SSC)",
      education: "14–18 years of education depending on branch (Engineering, Logistics, IT, Law, Education, Medical)",
      age: "20 – 40 yrs (branch-dependent)",
      gender: "Male / Female (branch-dependent)",
      notes: "Graduate-entry commission; several branches allow lateral entry with a higher starting rank for experienced professionals.",
    },
    {
      name: "M Cadet (Medical)",
      education: "4th or 5th year MBBS from a recognised medical college",
      age: "As per current MBBS cohort standards",
      gender: "Male / Female",
      notes: "Sponsors medical students in their final years toward a naval medical commission.",
    },
    {
      name: "Sailor (Matric Entry)",
      education: "Matric (Science), min. 60%",
      age: "17 – 21 yrs",
      gender: "Male",
      notes: "Trades include Seaman, Technical, Writer/Steward and Medical Technician branches; no ISSB required.",
    },
    {
      name: "Sailor (Intermediate / MTD Entry)",
      education: "FSc Pre-Engineering/ICS, min. 60%; MTD (driver trades) accept Matric with valid LTV/HTV license",
      age: "16 – 24 yrs depending on trade",
      gender: "Male",
      notes: "Includes technical and driving trades with slightly different age brackets per branch.",
    },
  ],
  eligibilityGeneral: [
    "Pakistani citizenship with valid CNIC/B-Form.",
    "Minimum height around 5'4\" for cadet-entry officers (branch-specific for sailors).",
    "Unmarried status generally required for civilian PN Cadet applicants.",
    "Sound medical fitness including naval-specific vision and hearing standards (colour vision matters for seamanship branches).",
    "No adverse police or character record.",
  ],
  selectionProcess: [
    {
      title: "Online Registration",
      description:
        "Register against a live advertisement on joinpaknavy.gov.pk, upload documents, and print your registration slip with allocated test centre and date.",
    },
    {
      title: "Intelligence & Academic Test",
      description:
        "A computer-based or written test covering intelligence, English, Mathematics and, for technical branches, Physics/Chemistry at Intermediate level.",
    },
    {
      title: "Preliminary Interview & Documentation Check",
      description:
        "A short panel interview verifies your academic record and motivation, alongside a document scrutiny of originals against your online application.",
    },
    {
      title: "Physical & Medical Screening",
      description:
        "Height, weight, chest expansion and a basic fitness routine are assessed, followed by an initial medical check for obvious disqualifications.",
    },
    {
      title: "ISSB (4 Days)",
      description:
        "Recommended candidates proceed to a Naval Selection Board for the standard four-day ISSB process — psychological tests, outdoor group tasks and a final board interview.",
    },
    {
      title: "Final Medical Board & Merit",
      description:
        "A detailed CMH medical board follows ISSB recommendation; the final merit list combines ISSB grading with academic score and medical fitness.",
    },
  ],
  physicalStandards: [
    { title: "Swimming Familiarity", text: "Not always compulsory before joining, but basic swimming confidence helps considerably during initial training at PNA." },
    { title: "1.6 KM Run & Push-Ups", text: "Comparable to other services' cadet-entry standards; build endurance and upper-body strength together." },
    { title: "Height & Chest", text: "Minimum height around 5'4\" for male cadet entry; chest expansion measured at the medical stage." },
    { title: "Colour Vision", text: "Seamanship and aviation-linked branches enforce strict colour vision standards — get this checked early if unsure." },
  ],
  preparationSubjects: [
    { title: "Intelligence / IQ", list: ["Verbal and non-verbal reasoning", "Pattern and series completion", "Spatial and diagrammatic reasoning", "Speed drills under time pressure"] },
    { title: "English", list: ["Grammar and error spotting", "Vocabulary building", "Reading comprehension", "Letter and paragraph writing"] },
    { title: "Mathematics & Physics", list: ["Algebra and trigonometry basics", "Mechanics fundamentals (for technical branches)", "Unit conversions", "Word and applied problems"] },
    { title: "General & Maritime Knowledge", list: ["Pakistan's coastline and maritime geography", "Basic naval ranks and ship types", "Current regional maritime affairs", "General knowledge of Pakistan Studies"] },
  ],
  tips: [
    "For technical and engineering branches, revisit FSc Physics numericals — the academic test leans harder on applied problems than pure theory.",
    "Familiarise yourself with basic maritime and naval terminology before the interview; it signals genuine interest to the panel.",
    "If you wear corrective lenses, get an eye test early — naval vision standards can be stricter than Army or Air Force for certain branches.",
    "Practice mock interviews focused on 'why the Navy specifically' — panels probe this more directly than in other services.",
  ],
  documents: [
    "Original CNIC / B-Form",
    "Original Matric and Intermediate/degree certificates with mark sheets",
    "Domicile certificate",
    "Character certificate from the last institution attended",
    "Recent passport-size photographs as specified in the advertisement",
    "Printed registration slip and admit card",
  ],
};

export default navy;
