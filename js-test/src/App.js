import logo from './logo.svg';
import './App.css';
import {useEffect, useRef} from 'react'

function App() {
  const progressbar = useRef(null)
  useEffect(()=>{
      window.addEventListener("scroll", function(){
          // 프로그래스 바가 있다면 실행할 수 있도록
          if( progressbar != null) {
              // 프로그래스바 세팅함수 실행
              setProgress();
          }
      })
  },[])

  // progress의 width를 스크롤 길이에 따라서 수정
  function setProgress(){
      // 스크롤한 높이
      let curreY = document.documentElement.scrollTop;
      console.log(curreY);
      // 전체 높이
      let totalY = document.documentElement.scrollHeight-document.documentElement.clientHeight;
      console.log(totalY);

      // 퍼센트로 바꿔서 progress css의width값에 넣어주기
      let percentage = (curreY/totalY)*100;
      document.querySelector(".progress").style.width= percentage+"%";
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* 프로그래스 바 div */}
        <div id="progressbar" className="progressbar" ref={progressbar}>
            <div className="progress"></div>
        </div>
    </div>
  );
}

export default App;