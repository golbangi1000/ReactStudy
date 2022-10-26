import { Component } from "react";
import PropTypes from 'prop-types';


class MyComponent6 extends Component {

    static defaultProps = {
        name: '(기본 이름)',
    };
    
    static propTypes = {
        name:PropTypes.any
    
    };

    render(){

        const { name, children } = this.props;
        
        return  (<div style = {{fontSize: '32px'}}> 
                    안녕하세요props {name}입니다. <br/>
                    children 값은 {children}
                    입니다.
                </div>
                );
    }
}


export default MyComponent6;