import React, { Component } from 'react';

class ClassEventPractice extends Component {
    
    state = {
        username: '',
        message: ''
    }
    
    /* 클래스 컴포넌트 constructor에 메서드 바인딩하는 방식
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }*/

    
     handleChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         });
     }

     handleClick = () => {
         alert(this.state.username + ' : ' + this.state.message);
         this.setState({
             username: '',
             message:''
         });
     }

     handleKeyPress = (e) => {
         if(e.key ==='Enter') {
             this.handleClick();
         }
     }

    render() {
        return (
            <div>
                <h1>이벤트 연습 클래스</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='사용자명'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='아무거나 입력해 보세요'
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default ClassEventPractice;