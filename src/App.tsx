// for toast
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init({ offset: 120, duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <div className="App">
      <ToastContainer/>
        <Navbar />
        <Home />
    </div>
  );
}

export default App;
