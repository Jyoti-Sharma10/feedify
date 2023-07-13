import './App.css';
import Home from './screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './screens/SignUp';
import Login from './screens/Login';

function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route exact path='/' Component={Home} /> 
        <Route exact path='/login' Component={Login} />
        <Route exact path='/createuser' Component={SignUp} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
