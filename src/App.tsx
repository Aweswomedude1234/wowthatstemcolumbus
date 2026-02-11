import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GroupMeBanner from "./components/GroupMeBanner"; 
import Index from "./pages/index";
import ChessClub from "./pages/ChessClub";
import Donate from "./pages/support-us";
import Team from "./pages/Team";
import InventionConvention from "./pages/InventionConvention";
import SummerRobotics from "./pages/SummerRobotics";
import OurImpact from "./pages/OurImpact";
import JoinUs from "./pages/JoinUs";
import CADImpactPage from "./pages/cad-impact";
import UpcomingEvents from "./pages/upcoming-events";
import AboutUs from "./pages/aboutus";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GroupMeBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/invention-convention" element={<InventionConvention />} />
          <Route path="/chess-club" element={<ChessClub />} />
          <Route path="/summer-robotics" element={<SummerRobotics />} />
          <Route path="/team" element={<Team />} />
          <Route path="/impact" element={<OurImpact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/cad-impact" element={<CADImpactPage />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;