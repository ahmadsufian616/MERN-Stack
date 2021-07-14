import logo from './logo.svg';
import './App.css';
import mycom from './Components/Mycom';
function App() {
  return (
    <div className="App">
     
<mycom name="Doe,jane" age="45" haircolor="brown"></mycom>
<mycom name="smith,john" age="88" haircolor="black"/>
<mycom name="fillmore,millard" age="50" haircolor="black"/>
<mycom name="simth,maria" age="62" haircolor="brown"/>

    </div>
  );
}

export default App;
