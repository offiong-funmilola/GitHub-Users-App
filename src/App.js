import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import { GitHubProvider } from "./Components/Context/GitHub/GitHubContext";

function App() {
  return (
    <GitHubProvider>
      <Router>
        <div className="bg-slate-200 flex flex-col justify-between w-screen h-fit">
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
    </GitHubProvider>
  );
}

export default App;
