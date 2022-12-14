import {Component} from "react";

class EventPractice5 extends Component{

    state = {
        message:''
    }


    handleChange =(e) => {
        this.setState(
            {
                message:e.target.value
            }
        )
    }

    handleClick = () =>{
        alert(this.state.message);
        this.setState({
            message:''
        });
    }


    render(){
        return(
            <div>

            <h1>이벤트연습</h1>


            <input
                type="text"
                name="message"
                placeholder="아무거나 입력 하세요"

                value={this.state.message}
                onChange={this.handleChange}
            />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }





}

export default EventPractice5;