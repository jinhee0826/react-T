// 클래스 컴포넌트
import { Component } from "react";

class HelloCompPrac extends Component{
    render() {
        // 비구조화/구조화 할당 : 객체나 배열의 값을 변수에다 각각 할당
        // props의 값은 항상 문자열로 들어온다.
        // 숫자도 문자열로 들어오기 때문에 parseInt(num) 해줘야 함
        const { name, adress, num, children } = this.props;
        console.log(typeof parseInt(num))
        return (
            <div>
                <h1>{name}안녕하세요</h1>
                <p>{adress}에 살고 계시는군요</p>
                <p>{children}</p>
            </div>
        );
    }
}

export default HelloCompPrac;
