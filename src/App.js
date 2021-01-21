import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EmployeeScreen from './pages/Home'
import Task from './components/Task'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="contentContainer">
            {/* <Router>
              <Route path="/home" component={EmployeeScreen} />
            </Router> */}
            <h1>Task Component</h1>
            <div className="Tasks-container">
              <Task />
              <Task />
              <Task />
            </div>
            
      </div>
    </div>
  );
}

export default App;
