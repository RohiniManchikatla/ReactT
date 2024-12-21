import { Component } from "react";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";
class App extends Component{
  render(){
    return(
      <div>
        <Test2/>
        <Test3/>
        <Test4/>
      </div>
    )
  }
}
export default App;