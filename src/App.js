import './App.css';
import 'tachyons';
import Navbar from './components/Navbar';
import MainAd from './components/MainAd';
import Footer from './components/Footer';
import HomeBanner from './components/Home/HomeBanner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './components/Store/Store';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainAd} />
          <Route exact path='/store' component={Store} />
        </Switch>
        <HomeBanner />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
