import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter,Route,Routes,useParams } from 'react-router-dom';
import Employee from './Employee';
import ID from './ID';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h2>Customer</h2>
      <ul>
        <li><Link to="/ram">Ram</Link></li>
        <li><Link to="/rakshman">Rakshman</Link></li>
        <li><Link to="/bheem">Bheem</Link></li>
      </ul>
      <h2>Ids</h2>
      <ul>
        <li><Link to="/ids/1">1</Link></li>
        <li><Link to="/ids/2">2</Link></li>
        <li><Link to="/ids/3">3</Link></li>
        <li><Link to="/ids/4">4</Link></li>
      </ul>  
        <Routes>
          <Route path="/:name" element={<Employee />}  />
          <Route path='ids/:id' element={<ID />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
