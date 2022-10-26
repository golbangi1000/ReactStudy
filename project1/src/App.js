import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MyComponent4 from './MyComponent4';
function App() {

  const style = {
    backgroundColor: 'black',
    color: 'blue',
    fontSize: '42px',
    padding: 60
  }
  const name = "리액트";
  return (
    <div>
    <div className="App" style = {style}>
     {name}
    </div>
    
    <MyComponent />

    <MyComponent4 className = "리액트"/>
    </div>
  );
}

export default App;
