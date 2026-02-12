import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CharacterDetails from "./pages/CharacterDetails";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetails />}/>
      </Routes>
    </Router>
  );
}

export default App;