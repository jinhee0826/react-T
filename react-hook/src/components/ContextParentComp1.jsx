// 부모 컴포넌트가 되어서 ontext를 통해서 value 전달
// value값에 state와 dispatch를 전달 (객체형태) - useReducer 사용

//import React from "react";
//const CountContext = React.createContext(null) 
// 이 공간에서만 사용할 수 있어서 자식 컴포넌트에 전달x  -> ContextComp2 (자식컴포넌트)에 따로 뺴서 사용
import { useReducer } from "react";
// NumContext를 통해서, useState를 사용하여  num값과 setNum전달하기
// ContextChilrenComp4를 만들어 화면에 출력하고 증가하는 버튼을 사용하세요.
import { CountContext, NumContext } from "./ContextComp2";
import ContextChildrenComp3 from "./ContextChildrenComp3";
import ContextChildrenComp4 from "./ContextChildrenComp4";
import { useState } from "react";

function reducer (state, action) {
    switch(action.type) {
        case "increment":
            return {count : state.count+1};
        case "decrement":
            return {count : state.count-1};
    }

}

const ContextParentComp1 = () => {
    const [ state, dispatch ] = useReducer(reducer, {count : 0});
    const [ num, setNum ] = useState(1) // NumContext를 통해서, useState를 사용하여  num값과 setNum전달하기
    return (
        <div>
            <CountContext.Provider value={ {state:state, dispatch: dispatch} }>
                <ContextChildrenComp3 />
            </CountContext.Provider>

            <NumContext.Provider value={{ num : num, setNum: setNum}}>
                <ContextChildrenComp4 />
            </NumContext.Provider>
        </div>
    );
}

export default ContextParentComp1;