import { Component } from "react";
import PropTypes from "prop-types";

class Classprops extends Component{
    render(){
        const { name, favoriteNumber, children} = this.props;
        return (
            <div>
                안녕하세요 제이름은 {name}입니다 <br/>
                children 값은 {children}
                입니다
                <br/>
                제가 좋아하는 숫자는 {favoriteNumber}입니다
            </div>
        );
    }
}

Classprops.defaultProps = {
    name : '기본 이름'
};

Classprops.propTypes ={
    name:PropTypes.string.isRequired,
    favoriteNumber: PropTypes.number.isRequired
}


export default Classprops;
