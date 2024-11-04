  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './JS/Home.js';
import Footer from './JS/Footer.js';
import Navbar from './JS/Nav.js';
import Login from './JS/login.js';

function App() {
  return (
    <div>
        <Router>
          <div className="App">
            <Navbar/>
          </div>
          <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/Login" element={<Login/>} />
          </Routes>
        <Footer/>
        </Router>
      </div>
  );
}


export default App;
  