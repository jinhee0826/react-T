//  클래스형 검포넌트

import React, { Component } from "react";

class EventRefCompTest extends Component{
    constructor(props) {
        super(props);
        // 콜백함수를 통해 DOM을 가져오는 내용
        this.input = null;
        this.setInput = (element) => {
            this.input = element;
        }
        this.changeBackground = () => {
            this.input.style.backgroundColor = "red";
        }

        // createRef를 통해서 DOM을 가져오는 내용
        this.inputRef = React.createRef();
        this.changeRefBackground = () => {
            this.inputRef.current.style.backgroundColor = "red";
        }
    }
    render () {
        return(
            <div>
                <input type="text" ref={this.setInput}/>
                <button onClick={this.changeBackground}>색을 바꿉니다</button>
    
                <input type="text" ref={this.inputRef} />
                <button onClick={this.changeRefBackground}>색을 바꿉니다</button>
            </div>
        )
    }
    

}

export default EventRefCompTest;