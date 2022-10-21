//클래스 컴포넌트

import { Component } from "react";
import StoryTitle from "./StoryTitle"; // 컴포넌트 안에 컴포넌트 연결
import SroryDescript from "./StoryDescript";

class StoryBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return ( 
            <div>
                <StoryTitle>제목입니다</StoryTitle>
                <SroryDescript visible={true}>본문내용입니다1</SroryDescript>
                <SroryDescript visible={false}>본문내용입니다2</SroryDescript>
                {/* 이렇게 사용할 수 있게 해줘야함 */}
            </div>
        );
    }
}

export default StoryBox;