import logo from './logo.svg';
import './App.css';
import HelloCompPrac from './components/HelloCompPrac';
import HelloFuncCompPrac from './components/HelloFuncCompPrac';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloComp name="홍길동" adress="부산" num="1">반갑습니다</HelloComp>
        <HelloFuncComp name="성춘향" />
      </header>
    </div>
  );
}

export default App;
