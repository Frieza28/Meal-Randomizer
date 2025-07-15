import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Randomizer from './pages/Randomizer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/randomizer" element={<Randomizer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;
