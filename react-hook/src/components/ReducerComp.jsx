// 함수형 컴포넌트

// 이벤트 훅 x : 라이프사이클은 항상 현재 컴포넌트에서만 진행

import { useReducer } from "react";

import ReducerCountComp from "./ReducerCountComp";
import MemoComp from "./MemoComp";

function reducer(state, action) {
    // state안에 여러개의 값이 있을 때, 이전 값을 유지해주어야 한다.
    switch(action.type) {
        case 'increment' : 
            return {...state, count : state.count+1}; //위에 있는 state에 접근해서 안에 카운트에 접근
        case 'decrement' :
            return {...state, count : state.count-1};
        case 'zero' :
            return {...state, count : 0}; 
        case 'changeInput' :
            return {...state, input : action.payload} // e.target.value 의 값은 payload로 들어감
    }
}


const ReducerComp = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0, input : ""}) // useReducer(함수,초기값)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={ ()=>{dispatch({type:'increment'})} }>+1</button>
            <button onClick={ ()=>{dispatch({type:'decrement'})} }>-1</button>
            {/* 아래버튼에 들어갈 action.type에 관한 내용을 reducer에 추가 */}
            <button onClick={ ()=>{dispatch({type:'zero'})} }>0</button>

            {/* 자식컴포넌트에 props 값으로 state와 dispatch를 전달할 수 있다. */}
            <ReducerCountComp state={state} dispatch ={dispatch} />
            {/* 자식컴포넌트에 MemoComp를 하나 만들고,
                ReducerComp의 state에 input="" 추가하여, reducer를 작성하여
                MemoComp에서 작성한 글이 ReducerComp에서 수정되어 나올 수 있게 하세요
            */}
            <h1>{state.input}</h1>
            {/** 먼저 ReducerComp에서 실행해보기, e객체의 값을 어떻게 가져갈지 생각하기 */}
            <input type="text" onChange={(e)=>{ // 값을 가져와서 사용할때 씀
                //setState(e.target.value) >> dispatch에서 쓸 수 있도록
                dispatch( {type:'changeInput', payload : e.target.value} ) 
                //payload를 여러개로 보낼때는 문자,배열,객체형태로 보낼수도 있음 
            }}/>
            <MemoComp dispatch={dispatch} />
        </div>
    );
}

export default ReducerComp;