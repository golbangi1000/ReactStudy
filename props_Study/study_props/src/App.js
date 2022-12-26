import { Component } from "react";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import MyComponent3 from "./MyComponent3";
import PropsComp from "./PropsComp";
import Test from "./Test";
import Classprops from "./Classprops";

class App extends Component {
  render() {
    const name = 'react';
    return <div className = "react"> 
      <h1>{name}</h1>
      <MyComponent></MyComponent> 
      <MyComponent2></MyComponent2> 
      <MyComponent3></MyComponent3> 
      <PropsComp name ="김동욱"></PropsComp>
      {/* 주석 */}
      <Test className="투썸" name = "React" asdf = "asdfawef">안녕하세요</Test>
      <Classprops name= {10} favoriteNumber = {10}>ㅎㅇㅎㅇ</Classprops>
    </div>
    
  }
}


export default App;