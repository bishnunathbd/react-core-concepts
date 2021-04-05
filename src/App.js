import logo from './logo.svg';
import './App.css';

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
