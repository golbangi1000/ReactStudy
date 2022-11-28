import { Component } from "react";



const MyComponent2 = props =>{
    const {className,children}= props

    return(
        <div className="test3">
            {children} {className}
        </div>
    )


}



export default MyComponent2;