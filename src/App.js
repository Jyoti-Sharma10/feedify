import './App.css';
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route exact path='/' Component={Home} /> 
      </Routes>
    </div>
   </Router>
  );
}

export default App;
