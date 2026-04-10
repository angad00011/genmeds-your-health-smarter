import { useState, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import MedicineCard from "@/components/MedicineCard";
import AlternativesPanel from "@/components/AlternativesPanel";
import InteractionAlert from "@/components/InteractionAlert";
import PharmacyFinder from "@/components/PharmacyFinder";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { checkInteractions, type Medicine } from "@/data/medicines";

const Index = () => {
  const [selectedMedicines, setSelectedMedicines] = useState<Medicine[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSelect = (medicine: Medicine) => {
    setSelectedMedicines((prev) => {
      if (prev.find((m) => m.id === medicine.id)) return prev;
      return [...prev, medicine];
    });
  };

  const handleRemove = (id: string) => {
    setSelectedMedicines((prev) => prev.filter((m) => m.id !== id));
  };

  const interactions = selectedMedicines.length >= 2 ? checkInteractions(selectedMedicines) : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onSearchFocus={() => searchRef.current?.focus()} />

      {/* Search Section */}
      <section className="py-12 container" id="search-section">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl font-bold mb-2">Search & Analyze Medicines</h2>
          <p className="text-muted-foreground text-sm">
            Add multiple medicines to check for interactions
          </p>
        </div>
        <SearchBar onSelect={handleSelect} inputRef={searchRef} />

        {selectedMedicines.length > 0 && (
          <div className="mt-10 space-y-8 max-w-4xl mx-auto">
            {/* Interaction Check */}
            {selectedMedicines.length >= 2 && (
              <InteractionAlert interactions={interactions} />
            )}

            {/* Medicine Cards & Alternatives */}
            {selectedMedicines.map((med) => (
              <div key={med.id} className="space-y-4">
                <MedicineCard medicine={med} onRemove={handleRemove} />
                <AlternativesPanel medicine={med} />
              </div>
            ))}

            {/* Pharmacy Finder */}
            <PharmacyFinder />
          </div>
        )}
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30" id="how-it-works">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-10">
            How It Works
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Search or Upload", desc: "Enter a medicine name or upload your prescription" },
              { step: "2", title: "AI Analysis", desc: "We analyze composition, safety, and find alternatives" },
              { step: "3", title: "Interaction Check", desc: "Automatically detect harmful drug combinations" },
              { step: "4", title: "Compare & Save", desc: "Compare prices, find nearby pharmacies, and export reports" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-10 w-10 shrink-0 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
