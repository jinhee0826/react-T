// 함수형 컴포넌트(화살표함수 컴포넌트 자동완성 sfc)

import { useState } from "react";
import { useEffect } from "react";

// import React, { useState, useEffect } from 'react'
// 이렇게 한번에 적어도 됨

const StateEffectHookComp = () => {
    // 클래스형 컴포넌트의 state처럼 사용할 수 있다.
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());
    // state와 다른 점은 state 객체안에 만들어서 사용했지만 
    // 여기는 하나의 접근 안에 다 씀..?ㅎ
    
    // 클래스 컴포넌트의 라이프사이클과 동일하게 사용 할 수 있다. -> 시간가능
    // 이펙트 훅 : componentDidMount()와 componentDidUpdate() 내용을 같이 가지고 있다
    // 마운트 될 때와 업데이트 될 때 실행된다 
    useEffect(()=>{
        console.log("이펙트훅이 실행되었습니다")
        // f12 콘솔에 두번 나옴 => componentDidMount로 열었을때1 componentDidUpdate로 업뎃했을 때 한번 총 2회
        // state값이 바뀌거나 props값이 바뀌면 업데이트가 됨 => f12 콘솔에 계속 뜸 
        
        // 언마운트 될 때 실행 할 코드를 넣어줄 수 있다.
        /*
        return(()=>{
            console.log("종료하였습니다")
        })
        */
    }); // 두번째 인수 값을 넣어주지 않으면 모든 state와 props 값에 대해 실행

    // 1초 마다 시간을 넣어주기
    // useEffect는 두번째 인수를 배열로 받아올 수 있다.
    // 두번째 인수: 업데이트할 때 참고 할 state나 props
    // 두번째 인수 [] : 빈 배열로 넣어주게되면 시작할 때 한번만 실행
    useEffect(()=>{
        setInterval(()=>{ // 1초마다 새로 작동되기 때문에 콘솔창에 계속 뜸 
            setTime(new Date());
        }, 1000);
    },[]); // 두번째 인수에 ,[] 추가  => state가 바뀔때 시작할 때 한먼반 실행

    // 특정한 stste의 값이 바뀔때 실행하고 싶을때 useEffect 사용
    useEffect(()=>{
        console.log("카운트가 증가하였습니다")
    }, [count]) // 콘솔창에 이벤트훅이 실행되었습니다가 또 나오는데 그건 첫번째에함수의 두번째 인수에 빈배열을 넣지 않았기때문

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={ () => {
                // 버튼을 누를 때 마다 1씩 증가
                // count++ 하면 안됨 ㄱ
                // class에서는 구조 할당을 가져와서 별개의 값으로 들어가 있고 수정을 해서 값을 들고오기 때문에 
                // this.state에 바로 접근하면 오류였음 
                //함수형에서는 count에 직접 접근하여 오류가 생김 
                // 그래서 값만 가져와서 바꿔야하기 때문에 count+1 해야함 
                setCount(count+1)} 
                }>+1</button>

                {/* 시간 */}
                <h2>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h2>
        </div>
    );
}

export default StateEffectHookComp;