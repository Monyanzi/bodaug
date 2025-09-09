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
import AlurTribe from "./pages/tribes/AlurTribe";
import LangoTribe from "./pages/tribes/LangoTribe";
import KaramojongTribe from "./pages/tribes/KaramojongTribe";
import Gomesi from "./pages/attire/Gomesi";
import Kanzu from "./pages/attire/Kanzu";
import BarkCloth from "./pages/materials/BarkCloth";
import Mukasa from "./pages/names/Mukasa";
import Nambi from "./pages/names/Nambi";
import Mugisha from "./pages/names/Mugisha";
import CowrieShells from "./pages/materials/CowrieShells";
import Luwombo from "./pages/food/Luwombo";
import RolexPage from './pages/food/RolexPage';
import WhyBoda from "./pages/blog/WhyBoda";
import GipirAndLabong from "./pages/stories/GipirAndLabong";
import CovenantOfMasaba from "./pages/stories/CovenantOfMasaba";
import SorrowOfIsheKatabazi from "./pages/stories/SorrowOfIsheKatabazi";
import ManWhoFacedAdroa from "./pages/stories/ManWhoFacedAdroa";
import IndecisionOfTheBat from "./pages/stories/IndecisionOfTheBat";
import NdahuraAtTheGateOfBukuku from "./pages/stories/NdahuraAtTheGateOfBukuku";
import DepartureOfTheBachwezi from "./pages/stories/DepartureOfTheBachwezi";
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
import AttireIndexPage from "./pages/AttireIndexPage";
import FoodIndexPage from "./pages/FoodIndexPage";
import MaterialsIndexPage from "./pages/MaterialsIndexPage";
import NamesIndexPage from "./pages/NamesIndexPage";

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
              <Route path="/tribes/alur" element={<AlurTribe />} />
              <Route path="/tribes/lango" element={<LangoTribe />} />
              <Route path="/tribes/karamojong" element={<KaramojongTribe />} />
              <Route path="/attire/gomesi" element={<Gomesi />} />
              <Route path="/attire/kanzu" element={<Kanzu />} />
              <Route path="/materials/bark-cloth" element={<BarkCloth />} />
              <Route path="/materials/cowrie-shells" element={<CowrieShells />} />
              <Route path="/names/mukasa" element={<Mukasa />} />
              <Route path="/names/nambi" element={<Nambi />} />
              <Route path="/names/mugisha" element={<Mugisha />} />
              <Route path="/food/luwombo" element={<Luwombo />} />
              <Route path="/food/rolex" element={<RolexPage />} />
              <Route path="/stories/gipir-and-labong" element={<GipirAndLabong />} />
              <Route path="/stories/covenant-of-masaba" element={<CovenantOfMasaba />} />
              <Route path="/stories/sorrow-of-ishe-katabazi" element={<SorrowOfIsheKatabazi />} />
              <Route path="/stories/man-who-faced-adroa" element={<ManWhoFacedAdroa />} />
              <Route path="/stories/indecision-of-the-bat" element={<IndecisionOfTheBat />} />
              <Route path="/stories/ndahura-at-the-gate-of-bukuku" element={<NdahuraAtTheGateOfBukuku />} />
              <Route path="/stories/departure-of-the-bachwezi" element={<DepartureOfTheBachwezi />} />
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
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
