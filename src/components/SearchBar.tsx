import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchMedicines, type Medicine } from "@/data/medicines";

interface SearchBarProps {
  onSelect: (medicine: Medicine) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const SearchBar = ({ onSelect, inputRef }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Medicine[]>([]);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchMedicines(query));
      setOpen(true);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (med: Medicine) => {
    onSelect(med);
    setQuery("");
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto" id="search">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type="text"
          placeholder="Search medicine name, composition, or brand..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 pr-10 h-14 text-base rounded-xl border-border bg-card shadow-sm focus-visible:ring-primary"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setOpen(false); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card rounded-xl border border-border shadow-xl z-50 overflow-hidden">
          {results.map((med) => (
            <button
              key={med.id}
              onClick={() => handleSelect(med)}
              className="w-full text-left px-4 py-3 hover:bg-accent transition-colors flex items-center justify-between"
            >
              <div>
                <p className="font-semibold text-foreground">{med.name}</p>
                <p className="text-sm text-muted-foreground">{med.composition} • {med.manufacturer}</p>
              </div>
              <span className="text-primary font-bold text-sm">₹{med.price}</span>
            </button>
          ))}
        </div>
      )}
      {open && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-card rounded-xl border border-border shadow-xl z-50 p-4 text-center text-muted-foreground">
          No medicines found for "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;
