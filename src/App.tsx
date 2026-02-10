// File: src/App.tsx
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page Imports (match file names exactly)
import Index from "./pages/index";
import ChessClub from "./pages/ChessClub";
import Donate from "./pages/support-us";           // support-us.tsx
import Team from "./pages/Team";
import InventionConvention from "./pages/InventionConvention";
import SummerRobotics from "./pages/SummerRobotics";
import OurImpact from "./pages/OurImpact";
import JoinUs from "./pages/JoinUs";               // JoinUs.tsx
import CADImpactPage from "./pages/cad-impact";   // cad-impact.tsx
import UpcomingEvents from "./pages/upcoming-events"; // upcoming-events.tsx
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
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

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
