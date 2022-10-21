// 클래스형 컴포넌트

import { Component } from "react";

class MapComp extends Component{
    constructor(props) {
        super(props);
        // 배열의 map을 통해서 반복 컴포넌트를 작성
        this.state = {
            season : ['봄','여름','가을','다른계절'],
            book : [
                {
                    title : "홍길동전",
                    page : 100,
                    author : "허균",
                    pay : 8000,
                    number : "abcd1111"
                }
            ],
            inputContent : {
                title : "",
                aythor : "",
                number : ""
            }
        };
        this.onChange = (e) => {
            // this.state.inputContent의 값이 객체이므로 안의 속성을 유지하기위해 ...연산자사용 
            const newContent = {
                ...this.state.inputContent,
                [e.target.name] : e.target.value
            }
            this.setState({ inputContent : newContent })
        }
        this.getBook = (e) => {
            e.preventDefault();
            // 작성된 inputContent를 state.book 배열에 추가
            const newBook = this.state.book.concat(this.state.inputContent)
            this.setState({book : newBook})
        }
    }

    render() { 
        const { season, book,} = this.state;
        // state에 있는 season 배열을 map을 통해 태그 안에 값을 넣어서 사용
        const seasonItem = season.map(
            (season, index) => <li key={index}>{season}</li> 
            // key : index(봄~겨울,1~3)의 값이 중복되는지 확인
            // key 안 적어도 뜨긴하지만 콘솔창에 오류 뜸
        ); // 컴포넌트에 감싸서 map에 넣어둘 수 있음

        const bookItem = book.map(
            // book.title을 클릭하면 삭제 할 수 있도록 내용 추가
            (book, index) => (
                <li key={book.number} onClick={ () => {
                    const newBook = this.state.book.filter((b)=>(b.number!=book.number));
                    this.setState({book: newBook})
                }}> 
                {book.title}</li>
            )
        );

        return (
            <div>
                <ul>
                    {season.map(
                        (season, index) => (
                        // 여러줄로 작성할 때 소괄호로 감싸서 작성 
                        <li key={index}>
                            <a href="#">
                            {season}
                            </a>
                        </li>
                        )
                    )} 
                </ul>

                {/* 책 이름을 추가하는 input을 작성하고  버튼을 누르면 */}
                {/* this.state.book에 추가될 수 있도록 자성 */}
                {/* 각각의 값들이 저장된 변수공간을 만들어서 사용, 태그속성 추가가능 */}
                <form onSubmit={this.getBook}>
                    <label htmlFor="">책이름</label>
                    <input type="text" name="title" onChange={this.onChange} />
                    <label htmlFor="">저자</label>
                    <input type="text" name="aythor" onChange={this.onChange} />
                    <label htmlFor="">책넘버</label>
                    <input type="text" name="number" onChange={this.onChange} />
                    <input type="submit" value="제출" />
                </form>

                <ol>{bookItem}</ol>
            </div>

        );
    }
}
export default MapComp;