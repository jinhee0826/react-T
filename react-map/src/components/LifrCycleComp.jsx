// 클래스형 컴포넌트

import { Component } from "react";

class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title : "라이프사이클",
            time : new Date()
        };
    }
    // 클래스 안에 있는 속성(변수) >this를 통해서 접근
    id = 0;
    count = 0;

    // 컴포넌트의 실행시기에 따라서 라이프사이클 메서드를 사용할 수 있다.
    componentDidMount () {
        console.log("마운트하였습니다");
        // 1초마다 함수를 실행하는 타이머 함수 실행
        this.id = setInterval( ()=>{this.setState({time : new Date()})} , 1000);
    }
    componentDidUpdate () {console.log("업데이트 하였습니다");}
    componentWillUnmount () {
        console.log("언마운트 하였습니다");
        clearInterval(this.id);
    }


    render() { 
        return (
            <div>
                <h1 onClick={() => {
                    // setState가 실행되면 라이프사이클 업데이트 메소드가 실행 
                    // 화면에 내용이 출력이 된다
                    this.setState({title : '라이프사이클 중 업데이트'})
                }}>
                    {this.state.title}
                </h1>
                {/* state의 값이 아닌 변수로 사용된 내용은 업데이트 메소드를 실행되지 않는다  */}
                {/* 즉, 화면이 바뀌지않는다. 그러나 그 안에 있는 데이터는 계속 바뀌고 있다 */}
                <button onClick={()=>{this.count++}}> {this.count} </button>
                <p> {this.state.time.getHours()} : 
                    {this.state.time.getMinutes()} :
                    {this.state.time.getSeconds()}
                </p>
            </div>
        );
    }
}

export default LifeCycleComp;