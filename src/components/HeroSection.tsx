import { Search, Upload, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onSearchFocus: () => void;
}

const HeroSection = ({ onSearchFocus }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 md:py-28">
      <div className="container text-center max-w-3xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 text-sm font-medium text-secondary mb-6 animate-fade-in">
          <Shield className="h-4 w-4" />
          AI-Powered Medicine Intelligence
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in">
          Find <span className="text-primary">Safer</span>,{" "}
          <span className="text-secondary">Cheaper</span> &{" "}
          <span className="text-primary">Smarter</span> Medicine
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Search any medicine, discover affordable alternatives, check drug interactions, and find nearby pharmacies — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 gap-2"
            onClick={onSearchFocus}
          >
            <Search className="h-5 w-5" />
            Search Medicine
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-accent font-semibold text-base px-8 gap-2"
          >
            <Upload className="h-5 w-5" />
            Upload Prescription
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          ⚕️ Always consult a doctor before switching medicines
        </p>
      </div>
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
