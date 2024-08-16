import Login from './pages/login';
import Training from './pages/training';
import Profile from './pages/profile';
import Meet from './pages/meet';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/training" element={<Training />} />
          <Route path="/meeting" element={<Meet />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
