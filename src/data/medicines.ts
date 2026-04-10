export interface Medicine {
  id: string;
  name: string;
  brand: string;
  composition: string;
  dosage: string;
  category: string;
  price: number;
  manufacturer: string;
  approved: boolean;
  description: string;
}

export interface Alternative {
  id: string;
  name: string;
  brand: string;
  composition: string;
  dosage: string;
  price: number;
  manufacturer: string;
  approved: boolean;
  safety: "safe" | "consult" | "not-recommended";
  safetyNote: string;
}

export interface Interaction {
  drug1: string;
  drug2: string;
  severity: "mild" | "moderate" | "severe";
  description: string;
  consequences: string;
  suggestion: string;
}

export interface Pharmacy {
  name: string;
  distance: string;
  available: boolean;
  address: string;
  phone: string;
}

export const medicineDatabase: Medicine[] = [
  {
    id: "1",
    name: "Dolo 650",
    brand: "Dolo",
    composition: "Paracetamol 650mg",
    dosage: "650mg",
    category: "Analgesic / Antipyretic",
    price: 30.5,
    manufacturer: "Micro Labs Ltd",
    approved: true,
    description: "Used to relieve pain and reduce fever. Works by blocking the production of certain chemicals in the brain that cause pain and fever.",
  },
  {
    id: "2",
    name: "Crocin 650",
    brand: "Crocin",
    composition: "Paracetamol 650mg",
    dosage: "650mg",
    category: "Analgesic / Antipyretic",
    price: 28.0,
    manufacturer: "GSK Pharmaceuticals",
    approved: true,
    description: "A common pain reliever and fever reducer containing Paracetamol.",
  },
  {
    id: "3",
    name: "Azithral 500",
    brand: "Azithral",
    composition: "Azithromycin 500mg",
    dosage: "500mg",
    category: "Antibiotic (Macrolide)",
    price: 98.0,
    manufacturer: "Alembic Pharmaceuticals",
    approved: true,
    description: "An antibiotic used to treat bacterial infections of the respiratory tract, ear, nose, throat, lungs, skin, and eyes.",
  },
  {
    id: "4",
    name: "Pan 40",
    brand: "Pan",
    composition: "Pantoprazole 40mg",
    dosage: "40mg",
    category: "Proton Pump Inhibitor",
    price: 65.0,
    manufacturer: "Alkem Laboratories",
    approved: true,
    description: "Reduces stomach acid production. Used to treat acidity, gastric ulcers, and gastroesophageal reflux disease (GERD).",
  },
  {
    id: "5",
    name: "Augmentin 625",
    brand: "Augmentin",
    composition: "Amoxicillin 500mg + Clavulanic Acid 125mg",
    dosage: "625mg",
    category: "Antibiotic (Penicillin)",
    price: 210.0,
    manufacturer: "GSK Pharmaceuticals",
    approved: true,
    description: "A combination antibiotic used to treat a wide variety of bacterial infections including sinusitis, pneumonia, ear infections, and urinary tract infections.",
  },
  {
    id: "6",
    name: "Metformin 500",
    brand: "Glycomet",
    composition: "Metformin 500mg",
    dosage: "500mg",
    category: "Antidiabetic (Biguanide)",
    price: 22.0,
    manufacturer: "USV Pvt Ltd",
    approved: true,
    description: "Used to control blood sugar levels in Type 2 Diabetes. Works by improving insulin sensitivity and reducing glucose production in the liver.",
  },
  {
    id: "7",
    name: "Atorvastatin 10",
    brand: "Atorva",
    composition: "Atorvastatin 10mg",
    dosage: "10mg",
    category: "Statin (Cholesterol-lowering)",
    price: 78.0,
    manufacturer: "Zydus Cadila",
    approved: true,
    description: "Lowers cholesterol and triglycerides in the blood. Helps prevent cardiovascular disease.",
  },
  {
    id: "8",
    name: "Cetirizine 10",
    brand: "Cetzine",
    composition: "Cetirizine 10mg",
    dosage: "10mg",
    category: "Antihistamine",
    price: 18.0,
    manufacturer: "Dr Reddy's",
    approved: true,
    description: "An antihistamine used to relieve allergy symptoms such as runny nose, sneezing, itching, and watery eyes.",
  },
];

export const alternativesMap: Record<string, Alternative[]> = {
  "1": [
    { id: "a1", name: "Calpol 650", brand: "Calpol", composition: "Paracetamol 650mg", dosage: "650mg", price: 16.0, manufacturer: "GSK", approved: true, safety: "safe", safetyNote: "Same composition, safe to substitute" },
    { id: "a2", name: "P-650", brand: "P-650", composition: "Paracetamol 650mg", dosage: "650mg", price: 8.5, manufacturer: "Cipla", approved: true, safety: "safe", safetyNote: "Identical generic, lowest price" },
    { id: "a3", name: "Pacimol 650", brand: "Pacimol", composition: "Paracetamol 650mg", dosage: "650mg", price: 12.0, manufacturer: "Ipca Labs", approved: true, safety: "safe", safetyNote: "Trusted manufacturer, same formula" },
  ],
  "3": [
    { id: "a4", name: "Azee 500", brand: "Azee", composition: "Azithromycin 500mg", dosage: "500mg", price: 67.0, manufacturer: "Cipla", approved: true, safety: "safe", safetyNote: "Same composition, widely prescribed" },
    { id: "a5", name: "Azicip 500", brand: "Azicip", composition: "Azithromycin 500mg", dosage: "500mg", price: 55.0, manufacturer: "Cipla", approved: true, safety: "safe", safetyNote: "Generic equivalent, great price" },
    { id: "a6", name: "Zithromax 500", brand: "Zithromax", composition: "Azithromycin 500mg", dosage: "500mg", price: 120.0, manufacturer: "Pfizer", approved: true, safety: "safe", safetyNote: "Original brand, premium price" },
  ],
  "4": [
    { id: "a7", name: "Pantocid 40", brand: "Pantocid", composition: "Pantoprazole 40mg", dosage: "40mg", price: 42.0, manufacturer: "Sun Pharma", approved: true, safety: "safe", safetyNote: "Same composition, trusted brand" },
    { id: "a8", name: "P-Zole 40", brand: "P-Zole", composition: "Pantoprazole 40mg", dosage: "40mg", price: 28.0, manufacturer: "Cipla", approved: true, safety: "safe", safetyNote: "Cheapest generic alternative" },
    { id: "a9", name: "Omeprazole 20", brand: "Omez", composition: "Omeprazole 20mg", dosage: "20mg", price: 35.0, manufacturer: "Dr Reddy's", approved: true, safety: "consult", safetyNote: "Different compound, similar effect — consult doctor" },
  ],
  "5": [
    { id: "a10", name: "Moxikind-CV 625", brand: "Moxikind", composition: "Amoxicillin 500mg + Clavulanic Acid 125mg", dosage: "625mg", price: 145.0, manufacturer: "Mankind Pharma", approved: true, safety: "safe", safetyNote: "Same composition, affordable" },
    { id: "a11", name: "Clavam 625", brand: "Clavam", composition: "Amoxicillin 500mg + Clavulanic Acid 125mg", dosage: "625mg", price: 155.0, manufacturer: "Alkem Labs", approved: true, safety: "safe", safetyNote: "Same formula, trusted brand" },
  ],
  "6": [
    { id: "a12", name: "Metsmall 500", brand: "Metsmall", composition: "Metformin 500mg", dosage: "500mg", price: 12.0, manufacturer: "Cipla", approved: true, safety: "safe", safetyNote: "Identical generic, half the price" },
    { id: "a13", name: "Obimet 500", brand: "Obimet", composition: "Metformin 500mg", dosage: "500mg", price: 18.0, manufacturer: "Abbott", approved: true, safety: "safe", safetyNote: "Trusted brand, same composition" },
  ],
  "7": [
    { id: "a14", name: "Lipitor 10", brand: "Lipitor", composition: "Atorvastatin 10mg", dosage: "10mg", price: 145.0, manufacturer: "Pfizer", approved: true, safety: "safe", safetyNote: "Original brand, premium" },
    { id: "a15", name: "Atocor 10", brand: "Atocor", composition: "Atorvastatin 10mg", dosage: "10mg", price: 38.0, manufacturer: "Cipla", approved: true, safety: "safe", safetyNote: "Affordable generic alternative" },
  ],
  "8": [
    { id: "a16", name: "Alerid 10", brand: "Alerid", composition: "Cetirizine 10mg", dosage: "10mg", price: 12.0, manufacturer: "Cipla", approved: true, safety: "safe", safetyNote: "Same composition, lower price" },
    { id: "a17", name: "Okacet 10", brand: "Okacet", composition: "Cetirizine 10mg", dosage: "10mg", price: 15.0, manufacturer: "Cipla", approved: true, safety: "safe", safetyNote: "Trusted alternative" },
  ],
};

// Set default alternatives for medicines without specific alternatives
medicineDatabase.forEach(med => {
  if (!alternativesMap[med.id]) {
    alternativesMap[med.id] = [];
  }
});

export const interactionsDatabase: Interaction[] = [
  {
    drug1: "Paracetamol",
    drug2: "Azithromycin",
    severity: "mild",
    description: "Minor interaction — generally safe when taken as prescribed.",
    consequences: "No significant adverse effects expected at normal doses.",
    suggestion: "Safe to take together. Monitor for any unusual symptoms.",
  },
  {
    drug1: "Metformin",
    drug2: "Atorvastatin",
    severity: "mild",
    description: "Both are commonly prescribed together for diabetic patients with high cholesterol.",
    consequences: "Minimal interaction risk. Slight chance of muscle pain.",
    suggestion: "Generally safe. Report any muscle pain or weakness to your doctor.",
  },
  {
    drug1: "Amoxicillin",
    drug2: "Metformin",
    severity: "moderate",
    description: "Amoxicillin may affect blood sugar levels when combined with Metformin.",
    consequences: "Can cause unexpected drops in blood sugar (hypoglycemia), leading to dizziness or confusion.",
    suggestion: "Monitor blood sugar closely while on both medications. Consult your doctor if symptoms occur.",
  },
  {
    drug1: "Azithromycin",
    drug2: "Atorvastatin",
    severity: "moderate",
    description: "Azithromycin may increase Atorvastatin levels in the blood.",
    consequences: "Increased risk of muscle pain (myopathy) and in rare cases, rhabdomyolysis (muscle breakdown).",
    suggestion: "Use with caution. Consult your doctor. They may adjust your statin dosage temporarily.",
  },
  {
    drug1: "Pantoprazole",
    drug2: "Metformin",
    severity: "moderate",
    description: "Long-term Pantoprazole use may reduce Vitamin B12 absorption, which Metformin also affects.",
    consequences: "Increased risk of Vitamin B12 deficiency, leading to fatigue, numbness, and nerve problems.",
    suggestion: "Consider B12 supplementation. Consult your doctor for regular monitoring.",
  },
  {
    drug1: "Cetirizine",
    drug2: "Azithromycin",
    severity: "severe",
    description: "Both drugs may prolong the QT interval in the heart's electrical activity.",
    consequences: "Increased risk of irregular heartbeat (arrhythmia). Can be dangerous in patients with heart conditions.",
    suggestion: "⚠️ Consult a doctor immediately before taking these together. An ECG may be recommended.",
  },
];

export const pharmacyData: Pharmacy[] = [
  { name: "Apollo Pharmacy", distance: "0.3 km", available: true, address: "12 MG Road, Bengaluru", phone: "+91 80 4112 3456" },
  { name: "MedPlus", distance: "0.8 km", available: true, address: "45 Brigade Road, Bengaluru", phone: "+91 80 4556 7890" },
  { name: "Netmeds Store", distance: "1.2 km", available: false, address: "78 Church Street, Bengaluru", phone: "+91 80 4998 1234" },
  { name: "Wellness Forever", distance: "1.5 km", available: true, address: "23 Residency Road, Bengaluru", phone: "+91 80 4223 4567" },
  { name: "Frank Ross Pharmacy", distance: "2.1 km", available: false, address: "90 Commercial St, Bengaluru", phone: "+91 80 4667 8901" },
];

export function searchMedicines(query: string): Medicine[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return medicineDatabase.filter(
    (m) =>
      m.name.toLowerCase().includes(q) ||
      m.brand.toLowerCase().includes(q) ||
      m.composition.toLowerCase().includes(q)
  );
}

export function checkInteractions(medicines: Medicine[]): Interaction[] {
  const found: Interaction[] = [];
  for (let i = 0; i < medicines.length; i++) {
    for (let j = i + 1; j < medicines.length; j++) {
      const comp1 = medicines[i].composition.split(" ")[0].toLowerCase();
      const comp2 = medicines[j].composition.split(" ")[0].toLowerCase();
      for (const interaction of interactionsDatabase) {
        const d1 = interaction.drug1.toLowerCase();
        const d2 = interaction.drug2.toLowerCase();
        if (
          (comp1.includes(d1) && comp2.includes(d2)) ||
          (comp1.includes(d2) && comp2.includes(d1))
        ) {
          found.push(interaction);
        }
      }
    }
  }
  return found;
}
