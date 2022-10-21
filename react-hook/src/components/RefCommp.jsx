// 함수형 컴포넌트

import { useRef } from "react";

const RefComp = () => {
    // 사용하는 방식은 클래스 컴포넌트의 React.createRef와 동일
    // 요소를 DOM 객체로 가져와 사용
    
    // 요소의 직접적인 접근이 필요하면 ref를 사용하면 됨
    const inputRef = useRef(null);
    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={()=>{
                console.log(inputRef)
                inputRef.current.style.backgroundColor = "red";
            }}> Ref 확인 </button>
        </div>
    );
}

export default RefComp;