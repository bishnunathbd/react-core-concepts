import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name='Mukul' job='Employee'></Person>
        <Person name='Shaquib' job='Programmer'></Person>
        <Person name='Sagar' job='Designer'></Person>
        <Person name='Tania' job='Programmer'></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    width: '400px',
    border: '2px solid green',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px'
  }

  return (
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <h5>Profession: {props.job}</h5>
    </div>
  );
}

export default App;
