// 함수형 컴포넌트  - 시간 출력

import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ClockComp = () => {
    const [ time, setTime ] =useState(new Date())

    // 1초 마다 반복하기 위한 setInterval 사용 - 생성될 때 한번만 실행
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date())
        },1000);
    },[])

    // useMemo 지장한 state 값이 바뀌지 않는다면, 이전의  return 값을 그대로 쓸 수 있다
    // useMemo는 return값이 있어야 함 
    const Hours = useMemo(()=>{
        let stringHour = String(time.getHours())
        return stringHour.padStart(2,"0"); 
        // => return의 결과 값이 화면에 출력 // 두자리 숫자로 맞추기위해 
    }, [time]);

    const Minutes = useMemo(()=>{
        let stringMinutes = String(time.getMinutes())
        return stringMinutes.padStart(2,"0");
    }, [time]);

    const Seconds = useMemo(()=>{
        let stringSeconds = String(time.getSeconds())
        return stringSeconds.padStart(2,"0");
    }, [time]);

    const week =[ 'Sunday','Mondat','Tuesday','Wednseday','Thursday','Friday','Saturday'];
    let dayofweek = week[time.getDay()];

    return (
        <div>
            <h3>{time.getFullYear()}.{time.getMonth()+1}.{time.getDate()}.{dayofweek}</h3>
            <h1>{Hours} : {Minutes} : {Seconds}</h1>
        </div>
    );
}

export default ClockComp;