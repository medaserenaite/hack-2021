import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EmployeeScreen from './pages/Home'
import Task from './components/Task'


function App() {
  return (
    <div className="App">
      <div className="contentContainer">
            {/* <Router>
              <Route path="/home" component={EmployeeScreen} />
            </Router> */}
            <Task />
            <Task />
            <Task />
      </div>
    </div>
  );
}

export default App;
