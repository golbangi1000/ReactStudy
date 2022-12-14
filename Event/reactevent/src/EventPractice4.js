import { Component } from "react";



class EventPractice4 extends Component{


    state = {
        message: ''
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState(
            {
                message: e.target.value
            }
        );
    }

    handleClick(){
        alert(this.state.message);
        this.setState({
            message:''
        }
        );
    }

    render(){
        return(
            <div>
                <h1>이벤트연습</h1>
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보세요"
                value = {this.state.message}
                onChange = {this.handleChange}
                />

                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice4;
