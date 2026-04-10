import { AlertTriangle, CheckCircle2, ShieldAlert, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Interaction } from "@/data/medicines";

interface InteractionAlertProps {
  interactions: Interaction[];
}

const severityConfig = {
  mild: {
    bg: "bg-safe/5 border-safe/30",
    icon: <ShieldCheck className="h-5 w-5 text-safe" />,
    label: "Mild",
    labelClass: "text-safe bg-safe/10",
  },
  moderate: {
    bg: "bg-warning/5 border-warning/30",
    icon: <AlertTriangle className="h-5 w-5 text-warning" />,
    label: "Moderate",
    labelClass: "text-warning bg-warning/10",
  },
  severe: {
    bg: "bg-destructive/5 border-destructive/30",
    icon: <ShieldAlert className="h-5 w-5 text-destructive" />,
    label: "Severe",
    labelClass: "text-destructive bg-destructive/10",
  },
};

const InteractionAlert = ({ interactions }: InteractionAlertProps) => {
  if (interactions.length === 0) {
    return (
      <Card className="glass-card border-safe/30 bg-safe/5 animate-fade-in">
        <CardContent className="py-6 flex items-center gap-3 justify-center">
          <CheckCircle2 className="h-6 w-6 text-safe" />
          <p className="font-semibold text-safe">No harmful interactions detected — safe to take together!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3 animate-fade-in">
      <h3 className="font-heading font-bold text-lg flex items-center gap-2">
        <ShieldAlert className="h-5 w-5 text-destructive" />
        Drug Interaction Warnings
      </h3>
      {interactions.map((interaction, idx) => {
        const cfg = severityConfig[interaction.severity];
        return (
          <Card key={idx} className={`border ${cfg.bg}`}>
            <CardContent className="py-4 space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                {cfg.icon}
                <span className="font-bold text-foreground">
                  {interaction.drug1} + {interaction.drug2}
                </span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.labelClass}`}>
                  ⚠️ {cfg.label}
                </span>
              </div>
              <p className="text-sm text-foreground">{interaction.description}</p>
              <p className="text-sm text-muted-foreground">
                <strong>Consequences:</strong> {interaction.consequences}
              </p>
              <p className="text-sm font-medium text-secondary">
                💡 {interaction.suggestion}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default InteractionAlert;
