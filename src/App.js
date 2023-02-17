import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Footer from '../Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <div>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
      </Routes>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
