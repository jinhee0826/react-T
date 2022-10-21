// 클래스형 컴포넌트

import { Component } from "react";

class StoryTitle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time : new Date()
        };
    }
    render() { 
        const {children} = this.props; 
        {/* 위에처럼 나눠서 사용해도 됨  */}
        const {time} = this.state;
        return (
            <div>
                <h1>{children}</h1>
                <p>{time.getMonth()+1}/{time.getDate()}</p>
            </div>
        );
    } 
}

export default StoryTitle;