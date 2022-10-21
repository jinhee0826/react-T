// 함수형 컴포넌트

import { useCallback } from "react";
import { useState } from "react";

const CallbackComp = () => {
    const [name, setName] = useState ("");
    const [count, setCount] = useState(1);
    // useCallback : 함수를 기록해서 계속 쓰는 Hook
    // 두번째 인자[] : 두번째인자의 값이 바뀔때만, 함수를 새로 생성해서 사용

    // 익명함수의 특징: 한 번만 쓰고 사라진다.
    // function 함수이름 (){}, const 함수이름 = ()=>{} 
    // : 함수이름을 통해 여러번 꺼내 쓸 수 있다

    const changeName = useCallback(()=>{setName("홍길동")}, [])
    // setName이 수정되어 [name]에 들어감 => 위의 함수에는 name을 지워도 실행됨 (?항상 홍길동으로 이름이 들어가있으므로)
    
    //[]의 인자값이 바뀔 때, 안의 콜백함수가 새로 만들어져서 사용될 수 있다.
    const onchange = useCallback((e)=>{
        console.log(count)
        setName(e.target.value)
        setCount(count+1) // 1이증가 하지않고 계속 1만 생김 (? 여기 들어간 변수값이 가장 처음에 들어간 값으로 고정, 그래서 콘솔로그에 1로 고정됨)
    }, [count]) // 2인수에 [count] 넣어야 숫자 증가 

    return (
        <div>
            <input type="text" onChange={onchange} />
            <button onClick={ changeName }>이름:{name}</button>
            {/* 리턴을 통해서 렌더해줄 때 익명함수를 기억하기 위해서 useCallback을 사용함 
            업뎃될 때 마다 새로 만들어짐 
            -> 막기 위해: 함수를 새로 수정해서 들어감..? <changeName>*/}

        </div>
    );
}

export default CallbackComp