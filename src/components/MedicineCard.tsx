import { BadgeCheck, Pill, Tag, Layers, Info, X } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Medicine } from "@/data/medicines";

interface MedicineCardProps {
  medicine: Medicine;
  onRemove: (id: string) => void;
}

const MedicineCard = ({ medicine, onRemove }: MedicineCardProps) => {
  return (
    <Card className="glass-card animate-fade-in overflow-hidden">
      <CardHeader className="pb-3 flex flex-row items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center">
            <Pill className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-foreground">{medicine.name}</h3>
            <p className="text-sm text-muted-foreground">{medicine.manufacturer}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {medicine.approved && (
            <Badge className="bg-safe/10 text-safe border-safe/20 gap-1">
              <BadgeCheck className="h-3 w-3" />
              Approved
            </Badge>
          )}
          <button onClick={() => onRemove(medicine.id)} className="text-muted-foreground hover:text-destructive transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Composition:</span>
            <span className="font-medium text-foreground">{medicine.composition}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Tag className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Price:</span>
            <span className="font-bold text-primary">₹{medicine.price}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Info className="h-4 w-4 text-secondary" />
          <span className="text-muted-foreground">Category:</span>
          <span className="font-medium text-foreground">{medicine.category}</span>
        </div>
        <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
          💡 {medicine.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default MedicineCard;
