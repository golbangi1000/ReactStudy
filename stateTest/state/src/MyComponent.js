import { Component } from "react";  



class MyComponent extends Component{

    render(){
        const {className,children} = this.props

        return(
            <div className="test2">
                {children}{className}
            </div>
        )
    }
       
  }
    

export default MyComponent;