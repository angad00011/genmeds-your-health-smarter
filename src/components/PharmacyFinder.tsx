import { MapPin, Phone, Navigation, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pharmacyData } from "@/data/medicines";

const PharmacyFinder = () => {
  return (
    <Card className="glass-card animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="font-heading text-base flex items-center gap-2">
          <MapPin className="h-5 w-5 text-secondary" />
          Nearby Pharmacies
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {pharmacyData.map((pharmacy, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30 hover:bg-accent/50 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{pharmacy.name}</span>
                {pharmacy.available ? (
                  <Badge className="bg-safe/10 text-safe border-safe/20 text-xs gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    In Stock
                  </Badge>
                ) : (
                  <Badge className="bg-muted text-muted-foreground border-border text-xs gap-1">
                    <XCircle className="h-3 w-3" />
                    Out of Stock
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {pharmacy.address}
              </p>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <span className="text-sm font-medium text-foreground">{pharmacy.distance}</span>
              <button className="text-xs text-secondary hover:underline flex items-center gap-1">
                <Navigation className="h-3 w-3" />
                Directions
              </button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PharmacyFinder;
