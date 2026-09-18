import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useRoute } from "./hooks/useRoute";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SearchModal } from "./components/SearchModal";
import { CommunityModal, StickyWidgets } from "./components/StickyWidgets";
import { Home } from "./pages/Home";
import { Academy } from "./pages/Academy";
import { CourseDetail, Courses } from "./pages/Courses";
import { InsightDetail, Insights } from "./pages/Insights";
import { Masterclasses } from "./pages/Masterclasses";
import { About } from "./pages/About";
import { Resources } from "./pages/Resources";
import { Contact } from "./pages/Contact";
import { Button } from "./components/ui";

function Routes({ path, onCommunity }: { path: string; onCommunity: () => void }) {
  if (path === "/" || path === "") return <Home onCommunity={onCommunity} />;
  if (path === "/academy") return <Academy />;
  if (path === "/courses") return <Courses />;
  if (path.startsWith("/courses/")) return <CourseDetail slug={path.replace("/courses/", "")} />;
  if (path === "/insights") return <Insights />;
  if (path.startsWith("/insights/")) return <InsightDetail slug={path.replace("/insights/", "")} />;
  if (path === "/masterclasses") return <Masterclasses />;
  if (path === "/about") return <About />;
  if (path === "/resources") return <Resources />;
  if (path === "/contact") return <Contact />;
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h1 className="font-display text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">That route is not part of the Ralu Markets site.</p>
      <Button href="#/" className="mt-6">
        Back home
      </Button>
    </div>
  );
}

function Shell() {
  const path = useRoute();
  const [search, setSearch] = useState(false);
  const [community, setCommunity] = useState(false);

  useEffect(() => {
    const open = () => setSearch(true);
    document.addEventListener("ralu-search", open);
    return () => document.removeEventListener("ralu-search", open);
  }, []);

  return (
    <div className="bg-app min-h-screen pb-16 md:pb-0">
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10 opacity-70" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-[#042016]"
      >
        Skip to content
      </a>
      <Navbar path={path} onSearch={() => setSearch(true)} />
      <main id="main">
        <Routes path={path} onCommunity={() => setCommunity(true)} />
      </main>
      <Footer />
      <SearchModal open={search} onClose={() => setSearch(false)} />
      <CommunityModal open={community} onClose={() => setCommunity(false)} />
      <StickyWidgets onCommunity={() => setCommunity(true)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
