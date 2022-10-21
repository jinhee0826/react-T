// 클래스형 컴포넌트에서 state

import { Component } from "react";

class StateComp extends Component {
    // props 값을 this를 통해서 사용(state를 사용하지 않을 때)
    // state 컴포넌트에서 사용하는 값을 작성
    // >> props값은 Component에서 상속받아온 값
    // >> 명시적으로 값을 가져올 필요있다

    // 자바스크립트 클래스의 constructor() {}
    constructor(props) {
        //constructor를 통해서 클래스의 속성관리
        super(props);
        // state는 객체의 형식으로 작성 (문자,숫자,배열,객체 다 들어감)
        this.state = {
            number : 4,
            count : 0,
        }
    }
    render () {
        const { name } = this.props;
        const { number, count } = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <button onClick={ // +1증가
                    ()=>{ this.setState({number : number+1})}
                }>+1</button>

                <button onClick={ // 0으로 리셋
                    ()=>{this.setState({number: 0})} 
                }>reset to 0</button>

                <button onClick={ // -1감소
                    ()=>{this.setState({number : number -1})}
                }>-1</button>

                <h1>{count}</h1>
                <button onClick={
                    ()=>{ this.setState({count : count+1})}
                }>count +1</button>

            </div>
        )
    }
}

export default StateComp;