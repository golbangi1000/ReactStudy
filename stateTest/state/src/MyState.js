import { Component } from "react";


class MyState extends Component{
    constructor(props){
        super(props);
        //state의 초깃값 설정하기
        this.state = {
            number: 0,
            number2: 0,
            number3: 0           
        }
    }
    render( ){
        const { number, number2,number3} = this.state; //state를 조회할때는 this.state로 조회합니다
        return(
            <div>
                <h1>
                    <table>
                    <thead>

                    </thead>
                        <tbody>
                        <tr>
                            <td>{number}</td>
                        </tr>
                        <tr>  
                            <td>{number2}</td>
                        </tr>
                        <tr>  
                            <td>{number3}</td>
                        </tr>
                        </tbody>
                    </table>
                </h1>
                <button onClick= {() =>{this.setState({number: number + 1, number2: number2 + 1, number3: number3 + 2})}}>
                {/* onClick을 통해 버튼이 클릭되었을때 호출할 함수를 지정합니다 */}
                +1
                </button>
            </div>
        )
    }


}

export default MyState;