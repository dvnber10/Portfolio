import logo from './logo.svg';
import './Styles/App.scss';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Index from './Routes/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index/>}/>
      </Routes>
    </Router>
  );
}

export default App;
