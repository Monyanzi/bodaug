import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "./pages/Home";
import Preorder from "./pages/Preorder";
import Book from "./pages/Book";
import Tribes from "./pages/Tribes";
import BagandaTribe from "./pages/tribes/BagandaTribe";
import Gomesi from "./pages/attire/Gomesi";
import Kanzu from "./pages/attire/Kanzu";
import BarkCloth from "./pages/materials/BarkCloth";
import Mukasa from "./pages/names/Mukasa";
import Luwombo from "./pages/food/Luwombo";
import KintuAndNambi from "./pages/stories/KintuAndNambi";
import WhyBoda from "./pages/stories/WhyBoda";
import Stories from "./pages/Stories";
import Experiences from "./pages/Experiences";
import Blog from "./pages/Blog";
import EtiquetteStarter from "./pages/blog/EtiquetteStarter";
import Join from "./pages/Join";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/preorder" element={<Preorder />} />
              <Route path="/book" element={<Book />} />
              <Route path="/tribes" element={<Tribes />} />
              <Route path="/tribes/baganda" element={<BagandaTribe />} />
              <Route path="/attire/gomesi" element={<Gomesi />} />
              <Route path="/attire/kanzu" element={<Kanzu />} />
              <Route path="/materials/bark-cloth" element={<BarkCloth />} />
              <Route path="/names/mukasa" element={<Mukasa />} />
              <Route path="/food/luwombo" element={<Luwombo />} />
              <Route path="/stories/kintu-and-nambi" element={<KintuAndNambi />} />
              <Route path="/stories/why-boda" element={<WhyBoda />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/etiquette-starter" element={<EtiquetteStarter />} />
              <Route path="/join" element={<Join />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
