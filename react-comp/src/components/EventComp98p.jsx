// 클래스형 컴포넌트
// 생활코딩 리액트 98p 내용 비교

import { Component } from "react";

class EventComp98p extends Component{
    constructor(props) {
        super(props)
        this.state = {
            mode : " start",
        }
    }
    render() {
        return(
            <div>
                <h1>
                    <a href="" onClick={
                        function(e){
                            e.preventDefault(); // 새로고침 막음

                            // state에 직접 접근해서 수정
                            // this.state.mode = "welcom"
                            // 리액트 내부에서 직접접근해서 수정하는 것을 막고 있음
                            // 리액트에서 값이 변경된 것을 알게 하기 위함 

                            // 이때까지 setState로 접근 > 값 수정 "권장"
                            this.setState({mode : "welcom"})
                        }.bind(this) // 연결해주는 이유: this가 사용하는 class로 연결하기 위해서 
                        // StateComp.jsx 비교를 하면
                        // 화살표 함수와 익명함수로 인한
                        // this값이 달라짐 : ctrl 키로 확인 
                    }>
                        {this.state.mode}
                    </a>
                    </h1>
            </div>
        )
    }
}

export default EventComp98p;