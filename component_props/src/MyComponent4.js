
const MyComponent4 = props2 => {
    const { name, children } = props2;
    return  <div style = {{fontSize: '45px'}}> 
                안녕하세요props {name}입니다. <br/>
                children 값은 {children}
                입니다.
            </div>
}
// page 94
// defaultProps는 내장함수
MyComponent4.defaultProps = {
    name: '(기본 이름)',
    children: '칠드런'

}
export default MyComponent4;