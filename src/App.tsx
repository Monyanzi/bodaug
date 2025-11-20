import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Preorder = lazy(() => import("./pages/Preorder"));
const Book = lazy(() => import("./pages/Book"));
const Tribes = lazy(() => import("./pages/Tribes"));
const TribeDetails = lazy(() => import("./pages/TribeDetails"));
const AttireDetails = lazy(() => import("./pages/AttireDetails"));
const FoodDetails = lazy(() => import("./pages/FoodDetails"));
const MaterialDetails = lazy(() => import("./pages/MaterialDetails"));
const NameDetails = lazy(() => import("./pages/NameDetails"));
const StoryDetails = lazy(() => import("./pages/StoryDetails"));
const WhyBoda = lazy(() => import("./pages/blog/WhyBoda"));
const Stories = lazy(() => import("./pages/Stories"));
const Experiences = lazy(() => import("./pages/Experiences"));
const Blog = lazy(() => import("./pages/Blog"));
const EtiquetteStarter = lazy(() => import("./pages/blog/EtiquetteStarter"));
const Join = lazy(() => import("./pages/Join"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AttireIndexPage = lazy(() => import("./pages/AttireIndexPage"));
const FoodIndexPage = lazy(() => import("./pages/FoodIndexPage"));
const MaterialsIndexPage = lazy(() => import("./pages/MaterialsIndexPage"));
const NamesIndexPage = lazy(() => import("./pages/NamesIndexPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 mb-16 md:mb-0">
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/preorder" element={<Preorder />} />
                <Route path="/book" element={<Book />} />
                <Route path="/tribes" element={<Tribes />} />
                <Route path="/tribes/:tribeId" element={<TribeDetails />} />
                <Route path="/attire/:attireId" element={<AttireDetails />} />
                <Route path="/food/:foodId" element={<FoodDetails />} />
                <Route path="/materials/:materialId" element={<MaterialDetails />} />
                <Route path="/names/:nameId" element={<NameDetails />} />
                <Route path="/stories/:storyId" element={<StoryDetails />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/etiquette-starter" element={<EtiquetteStarter />} />
                <Route path="/blog/why-boda" element={<WhyBoda />} />
                <Route path="/join" element={<Join />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/attire" element={<AttireIndexPage />} />
                <Route path="/food" element={<FoodIndexPage />} />
                <Route path="/materials" element={<MaterialsIndexPage />} />
                <Route path="/names" element={<NamesIndexPage />} />
                <Route path="/privacy" element={<Privacy />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
