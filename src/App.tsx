import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import ChessClub from "./pages/ChessClub";
import Donate from "./pages/Donate";
import Team from "./pages/Team";
import InventionConvention from "./pages/InventionConvention";
import SummerRobotics from "./pages/SummerRobotics";
import OurImpact from "./pages/OurImpact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/invention-convention" element={<InventionConvention />} />
          <Route path="/chess-club" element={<ChessClub />} />
          <Route path="/summer-robotics" element={<SummerRobotics />} />
          <Route path="/team" element={<Team />} />
          <Route path="/impact" element={<OurImpact />} />
          <Route path="/donate" element={<Donate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
