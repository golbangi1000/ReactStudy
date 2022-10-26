import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MyComponent4 from './MyComponent4';
import MyComponent5 from './MyComponent5';
import MyComponent6 from './MyComponent6';

import './App2.css';



function App() {


  const name = "리액트";
  return (
    <div>
    <div className="react">
     {name}
    </div>
    
    <MyComponent  />

    <MyComponent4/>

    <MyComponent5/>

    <MyComponent6/>
    </div>
  );
}

export default App;
