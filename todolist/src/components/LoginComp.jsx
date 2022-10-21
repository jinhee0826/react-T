import { useState } from "react";
import LoginFormComp from "./LoginFormComp";

const LoginComp = () => {
    const [ login, setLogin ] =useState(false);
    const [ name, setName ] = useState("");
    return (
        <div>
            {/* 로그인이 false일때 로그인 창, true 인사창 */}
            { login ? (<h1>{name}님 반갑습니다</h1>) : 
            // props 값으로 set메소드 전달 
            <LoginFormComp setLogin={setLogin} setName={setName} /> }
        </div>
    );
}

export default LoginComp;