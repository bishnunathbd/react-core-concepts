import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: 'Photoshop', price: '$60.99'},
    {name: 'Illustrator', price: '$70.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere EL', price: '$244.99'}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Users></Users>
        <Counter></Counter>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <Person name='Mukul' job='Employee'></Person>
        <Person name='Shaquib' job='Programmer'></Person>
        <Person name='Sagar' job='Designer'></Person>
        <Person name='Tania' job='Programmer'></Person>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })

  return (
    <div style={{border: '3px solid tomato'}}>
      <h2>Dynamic Users: {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);

  const handleIncrease = () => {
    // const newCount = count + 1;
    // setCount(newCount);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const {name, price} = props.product;

  const productStyle = {
    width: '200px',
    height: '200px',
    border: '2px solid lightgray',
    borderRadius: '10px',
    marginTop: '10px'
  };
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
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
