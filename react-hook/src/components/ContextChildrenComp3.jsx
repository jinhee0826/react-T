import { useContext } from "react";
// 사용할 컨텍스트를 가져오기 
import { CountContext } from "./ContextComp2";

const ContextChildernComp3 = () => {
    const {state, dispatch} = useContext(CountContext)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={ () => {dispatch({type :"increment"})} }>+1</button>
        </div>
    );
}

export default ContextChildernComp3;