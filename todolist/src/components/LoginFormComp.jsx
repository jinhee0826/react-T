const LoginFormComp = (props) => { // 전달 내용이 많다면 context로 전달하는게 더 편함
    const {setLogin, setName} = props
    return ( 
        <form onSubmit={(e)=>{
            e.preventDefault();
            setLogin(true);}}
        >
        <input type="text" onChange={ (e)=>{ setName(e.target.value); } } />
        <input type="submit" value="로그인" />
        </form>
    );
}

export default LoginFormComp;