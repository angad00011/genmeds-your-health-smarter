import logo from "@/assets/genmeds-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="GenMeds Logo" className="h-10 w-10 object-contain" />
          <span className="font-heading text-xl font-bold">
            Gen<span className="text-primary">Meds</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#search" className="hover:text-foreground transition-colors">Search</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        </nav>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">v1.0 Beta</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
