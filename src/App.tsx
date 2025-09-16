import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Heritage from "./pages/Heritage";
import Virtual from "./pages/Virtual";
import Tourism from "./pages/Tourism";
import Community from "./pages/Community";
import Donations from "./pages/Donations";
import Marketplace from "./pages/Marketplace";
import About from "./pages/About";
import MusicMeditation from "./pages/MusicMeditation";
import NotFound from "./pages/NotFound";

// ✅ NEW IMPORT
import Meditation from "./pages/Meditation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/virtual" element={<Virtual />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/community" element={<Community />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/music" element={<Music />} />
            <Route path="/about" element={<About />} />

            {/* ✅ NEW ROUTE */}
            <Route path="/music/meditation" element={<Meditation />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
