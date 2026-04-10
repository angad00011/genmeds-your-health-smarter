import { Search, Shield, IndianRupee, MapPin, Brain, FileDown } from "lucide-react";

const features = [
  { icon: Search, title: "Smart Search", desc: "Search by name, composition, or upload a prescription" },
  { icon: Shield, title: "Interaction Check", desc: "Detect harmful drug combinations instantly" },
  { icon: IndianRupee, title: "Price Comparison", desc: "Find the cheapest alternatives and save money" },
  { icon: MapPin, title: "Pharmacy Finder", desc: "Locate nearby pharmacies with stock availability" },
  { icon: Brain, title: "AI Insights", desc: "Understand why alternatives are safe and effective" },
  { icon: FileDown, title: "Export Reports", desc: "Download comparison reports as styled PDFs" },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-muted/30" id="features">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
          Everything you need for <span className="text-primary">smarter</span> medicine choices
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Powered by AI, built for safety and affordability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
