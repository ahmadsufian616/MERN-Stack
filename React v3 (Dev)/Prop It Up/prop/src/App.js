import logo from './logo.svg';
import './App.css';
import PersonCard from './mycomp';

function App() {
    return ( <
        div className = "App" >
        <
        PersonCard firstname = { "Doe" }
        lastname = { "jane" }
        Age = { "45" }
        haircolor = { "Black" }
        /> <
        PersonCard firstname = { "smith" }
        lastname = { "john" }
        Age = { "88" }
        hairc olor = { "Brown" }
        /> <
        PersonCard firstname = { "fillmore" }
        lastname = { "millard" }
        Age = { "50" }
        haircolor = { "Brown" }
        /> <
        PersonCard firstname = { "smith" }
        lastname = { "maria" }
        Age = { "62" }
        hai rcolor = { "Bro wn" }
        /> 

        <
        /div> 
    );
}

export default App;