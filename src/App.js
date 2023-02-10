import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />
    <div>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
