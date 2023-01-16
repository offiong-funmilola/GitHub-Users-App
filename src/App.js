import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="bg-slate-200 flex flex-col justify-between h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/NotFound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
