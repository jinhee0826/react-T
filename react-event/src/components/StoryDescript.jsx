// 클래스형 컴포넌트

import { Component } from "react";
import './css/SroryDescript.css' // css 연결


class SroryDescript extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() { 
        const {children, visible} = this.props;
        return ( 
            <div className="story-descript">
                <h3>본문</h3>
                <p>{children}</p>
                {visible ? (<p>공개</p>) : (<p>비공개</p>)} 
            </div>
        );
    }
}

export default SroryDescript;