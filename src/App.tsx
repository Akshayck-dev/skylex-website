import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Button } from "./components/ui/button";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { HomePage } from "./pages/Home";
import { InteriorsPage } from "./pages/Interiors";
import { NotFoundPage } from "./pages/NotFound";
import { ProcessPage } from "./pages/Process";
import { ProjectsPage } from "./pages/Projects";
import { ServicesPage } from "./pages/Services";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function MobileStickyCTA() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  if (pathname === "/contact") return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-cream/95 px-5 py-3 backdrop-blur-md md:hidden">
      <Button variant="default" className="w-full" onClick={() => navigate("/contact")}>
        Start a Project
        <ArrowUpRight aria-hidden="true" />
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-cream text-charcoal">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/interiors" element={<InteriorsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </HashRouter>
  );
}
