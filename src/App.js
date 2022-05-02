import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Setting from './pages/Setting';
import Nominee from './pages/Nominee';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
    <Navbar>
      <Routes>
        <Route path = '/' element={<Dashboard/>} />
        <Route path = '/users' element={<Users/>} />
        <Route path = '/setting' element={<Setting/>} />
        <Route path = '/nominee' element={<Nominee/>} />
      </Routes>
      </Navbar>
    </Router>
  );
}

export default App;
