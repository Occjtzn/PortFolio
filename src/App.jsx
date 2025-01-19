import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { CV } from './Pages/CV';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CV" element={<CV />} />
      </Routes>
    </Router>
  );
}

export default App;
