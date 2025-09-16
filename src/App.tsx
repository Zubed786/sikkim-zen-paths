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
import Music from "./pages/Music";
import Manuscripts from "./pages/Manuscripts";
import MonasteryMap from "./pages/MonasteryMap";
import NotFound from "./pages/NotFound";

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
            <Route path="/manuscripts" element={<Manuscripts />} />
            <Route path="/map" element={<MonasteryMap />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
