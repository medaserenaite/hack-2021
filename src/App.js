import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EmployeeScreen from './pages/Home'


function App() {
  return (
    <div className="App">
      <div className="contentContainer">
            <Router>
              <Route path="/home" component={EmployeeScreen} />
              <Link to="/">Admin</Link><br/>
              <Link to="/home">Employee</Link>
            </Router>
            
      </div>
    </div>
  );
}

export default App;
