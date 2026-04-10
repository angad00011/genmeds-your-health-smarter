import { ArrowDown, BadgeCheck, CircleAlert, CircleX, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { alternativesMap, type Medicine, type Alternative } from "@/data/medicines";

interface AlternativesPanelProps {
  medicine: Medicine;
}

const safetyConfig = {
  safe: { icon: "🟢", label: "Safe to substitute", badgeClass: "bg-safe/10 text-safe border-safe/20" },
  consult: { icon: "🟡", label: "Consult doctor", badgeClass: "bg-warning/10 text-warning border-warning/20" },
  "not-recommended": { icon: "🔴", label: "Not recommended", badgeClass: "bg-destructive/10 text-destructive border-destructive/20" },
};

const AlternativesPanel = ({ medicine }: AlternativesPanelProps) => {
  const alternatives = alternativesMap[medicine.id] || [];
  const cheapest = alternatives.length > 0 ? alternatives.reduce((a, b) => (a.price < b.price ? a : b)) : null;

  if (alternatives.length === 0) {
    return (
      <Card className="glass-card">
        <CardContent className="py-6 text-center text-muted-foreground">
          No alternatives found for {medicine.name}
        </CardContent>
      </Card>
    );
  }

  const savings = cheapest ? medicine.price - cheapest.price : 0;
  const savingsPercent = cheapest ? Math.round((savings / medicine.price) * 100) : 0;

  return (
    <Card className="glass-card animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="font-heading text-base flex items-center gap-2">
          <Star className="h-5 w-5 text-primary" />
          Alternatives for {medicine.name}
          {savings > 0 && (
            <Badge className="bg-safe/10 text-safe border-safe/20 ml-auto gap-1">
              <ArrowDown className="h-3 w-3" />
              Save up to ₹{savings.toFixed(0)} ({savingsPercent}%)
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alternatives
          .sort((a, b) => a.price - b.price)
          .map((alt) => {
            const cfg = safetyConfig[alt.safety];
            const isCheapest = cheapest && alt.id === cheapest.id;
            return (
              <div
                key={alt.id}
                className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  isCheapest ? "border-safe/40 bg-safe/5" : "border-border bg-muted/30"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{alt.name}</span>
                    {isCheapest && (
                      <Badge className="bg-safe text-safe-foreground text-xs">Cheapest</Badge>
                    )}
                    {alt.approved && <BadgeCheck className="h-4 w-4 text-safe" />}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{alt.manufacturer} • {alt.composition}</p>
                  <p className="text-xs mt-1">
                    <span className="mr-1">{cfg.icon}</span>
                    <span className="text-muted-foreground">{alt.safetyNote}</span>
                  </p>
                </div>
                <div className="text-right ml-4">
                  <p className="font-bold text-lg text-primary">₹{alt.price}</p>
                  {alt.price < medicine.price && (
                    <p className="text-xs text-safe">
                      Save ₹{(medicine.price - alt.price).toFixed(0)}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
      </CardContent>
    </Card>
  );
};

export default AlternativesPanel;
