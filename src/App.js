import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <div>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='Contact' element={< Contact />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
