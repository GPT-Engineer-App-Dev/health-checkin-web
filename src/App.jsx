import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Results from "./pages/Results.jsx";
import BottomNav from "./components/BottomNav.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;