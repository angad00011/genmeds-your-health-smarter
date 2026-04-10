import logo from "@/assets/genmeds-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="GenMeds" className="h-8 w-8 object-contain" />
          <span className="font-heading font-bold">Gen<span className="text-primary">Meds</span></span>
        </div>
        <p className="text-xs text-muted-foreground text-center max-w-md">
          ⚕️ Disclaimer: GenMeds provides information for educational purposes only. Always consult a qualified healthcare professional before making changes to your medication.
        </p>
        <p className="text-xs text-muted-foreground">© 2026 GenMeds. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
