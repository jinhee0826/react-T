// 클래스형 컴포넌트로 
// props 값을 login 과 name을 받아와서
// login이 true 일 때
// 로그인에 성공하였습니다. name입니다를 출력하고
// 아닐 때, 로그인이 필요합니다를 출력하는 컴포넌트 작성

import { Component } from "react";

class MyLogin extends Component{
    render() {
        const {login, name} = this.props;
        return(
            <div>
                {
                    login == "true" ? (
                        <div>
                            <h1>로그인에 성공하였습니다</h1>
                            <p>{name}입니다</p>
                        </div>
                    ) : (
                        <h1>로그인이 필요합니다</h1>
                    )
                }
            </div>
        );
    }
}

export default MyLogin;
