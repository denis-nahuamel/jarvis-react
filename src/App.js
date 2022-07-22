import logo from './logo.svg';
import './App.css';
import { getEmployees } from './services/employees-service';

function App() {
  getEmployees().then(response =>console.log(response))
  
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
