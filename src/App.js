import './App.css';
import 'tachyons';
import Navbar from './components/Navbar';
import MainAd from './components/MainAd';
import Footer from './components/Footer';
import HomeBanner from './components/Home/HomeBanner';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <MainAd />
      <HomeBanner />
      <Footer />
    </div>
  );
}

export default App;
