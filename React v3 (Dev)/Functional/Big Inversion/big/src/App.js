import logo from './logo.svg';
import './App.css';
import Big from './Big';

function App() {
  return (
    <div className="App">
      <Big name="ahmad" age = {45} haircolor="black"/>
      <Big name="ali" age = {35} haircolor="black"/>
      <Big name="abood" age = {50} haircolor="black"/>

    </div>
  );
}

export default App;
