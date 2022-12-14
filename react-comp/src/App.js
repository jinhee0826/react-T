import logo from './logo.svg';
import './App.css';
import HelloComp from './components/HelloComp';
import HelloFuncComp from './components/HellofuncComp';
import MyLogin from './components/MyLogin';
import ArrowLogin from './components/ArrowLogin';
import StateComp from './components/StateComp';
import StateFuncComp from './components/StateFuncComp';
import EventComp from './components/EventComp';
import EventFuncComp from './components/EventFuncComp';
//10.17
import EventComp98p from './components/EventComp98p';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 아래 num은 숫자지만 string으로 인식,
        console.log(typeof parseInt(num)) 해서 숫자로 인식  */}
        <HelloComp name="홍길동" adress="부산" num="1">반갑습니다</HelloComp>
        <HelloFuncComp name="성춘향" />
        {/* props은 컴포넌트를 사용할 때 작성, html요소의 속성과 동일 */}
        <MyLogin login="true" name="김아무개" />
        {/* JSX언어이므로 {}통해서 자바스크립트를 쓸 수 있다 */}
        {/* 자료형을 살리고 싶다면 login={false}이렇게 적어야함  */}
        <ArrowLogin login={true} />
        <StateComp />
        <StateComp />
        <StateFuncComp />
        <EventComp />
        <EventFuncComp />
        <EventComp98p />
      </header>
    </div>
  );
}

export default App;
