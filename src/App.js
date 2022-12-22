import './App.css';
import BeautifulComponents from './components/BeautifulComponents';
import Features from './components/Features';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Resources from './components/Resources';
import VideoSection from './components/VideoSection';
import Work from './components/Work';

function App() {
  return (
    <div className=" w-screen h-screen overflow-scroll overflow-x-hidden">
      <Navbar />
      <Home />
      <Partners />
      <VideoSection />
      <Features />
      <Work />
      <BeautifulComponents />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
