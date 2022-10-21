// 함수형 컴포넌트 state
// 리액트 16.8버전 이후로 추가된 내용
// react에서 useState (hook의 하나)를 가져와서 사용한다.
import { useState } from "react";

const StateFuncComp = ()=> {
    // 구조화 할당을 통해서 값과, 수정하는 함수를 리턴 받음
    const [message, setMessage] = useState("메세지입니다")
    const [name, setName] = useState("홍길동");
    const [count, setCount] = useState(1); // 숫자값
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={
                ()=>setMessage("글자를 수정하였습니다")
            }>수정</button>

            <h1>{name}</h1>
            <button onClick={
                ()=>setName("성춘향")
            }>이름 수정</button>

            <h1>{count}</h1>
            <button onClick={
                ()=>setCount(17)
            }>숫자 수정</button>
        </div>
    );
}

export default StateFuncComp;