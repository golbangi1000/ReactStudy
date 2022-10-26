
import PropTypes from 'prop-types';
const MyComponent5 = ({ name, children }) => {

    return  <div style = {{fontSize: '45px', backgroundColor:'black',color:"red"}}> 
                안녕하세요props {name}입니다. <br/>
                children 값은 {children}
                입니다.
            </div>
}
// page 94
// defaultProps는 내장함수
MyComponent5.defaultProps = {
    name: 2,
    children: '칠드런'

};

MyComponent5.propTypes = {
    name:PropTypes.any

};
export default MyComponent5;