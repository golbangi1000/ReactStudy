import './App.css';
import { Component, Fragment } from 'react';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import MyState from './MyState';

class App extends Component {
  render(){
    return(
    <div>
      <div className='test1'  >   
      
      <MyComponent className='클래스네임'>
      파란색박스 안쪽 글씨입니다.
      </MyComponent>

      <MyState>

      </MyState>

      </div>
    </div>
    )
  }
}

export default App;
