import logo from './logo.svg';
import './App.css';
import Todo from './comp/Todo';
import ShowComponent from './comp/ShowComponent';

function App() {
  return (
    <div className="App">
      <ShowComponent></ShowComponent>
      <Todo></Todo>
    </div>
  );
}

export default App;
