import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import DestinationList from './DestinationList';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationList />} />
      </Routes>
    </Router>
  );
}

export default App;



