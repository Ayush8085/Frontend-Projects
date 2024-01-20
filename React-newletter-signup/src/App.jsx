import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import ThanksCard from "./components/ThanksCard";

function App() {
  return (
    <div className="wrapper min-h-screen grid place-content-center sm:bg-clr-charcoal-grey bg-clr-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/thanks" element={<ThanksCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
