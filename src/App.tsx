import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyTerraHomepage from "./pages/SurveyTerraHomepage";
import SurveyTerraLogin from "./pages/SurveyTerraLogin";
import Index from "./pages/Index";
import Surveys from "./pages/Surveys";
import Offers from "./pages/Offers";
import Leaderboard from "./pages/Leaderboard";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/surveys" element={<Surveys />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<SurveyTerraHomepage />} />
          <Route path="/login" element={<SurveyTerraLogin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
