import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Navbar from './PortfolioContainer/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
        <Navbar />
        <Home />
    </div>
  );
}

export default App;
