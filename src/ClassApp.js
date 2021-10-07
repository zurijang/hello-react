import React, { Component } from 'react';
import './App.css';
import LifeCycleSample from './LifeCycleSample';
import ScrollBox from './ScrollBox';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class ClassApp extends Component {

    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        const name = 'react';
        return (
            <div className='react'>
                {name} 여기는 Class App
                <div>
                    ScrollBox
                    <ScrollBox ref={(ref) => {this.scrollBox=ref}} />
                    <button onClick={() => this.scrollBox.scrollToBottom()}>
                        맨 밑으로
                    </button>
                </div>

                <div>
                    LifeCycleSample
                    <button onClick={this.handleClick}>랜덤 색상</button>
                    <LifeCycleSample color={this.state.color}/>
                </div>
            </div>
        );
    }
}

export default ClassApp;