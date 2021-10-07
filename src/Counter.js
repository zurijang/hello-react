import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fixedNumber: 0
        };
    }

    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        
                        this.setState({number: number + 1}, () => {
                            console.log('첫번재 setState 호출');
                            console.log(this.state);
                        });
                        this.setState({number: this.state.number + 1}, () => {
                            console.log('두번째 setState 호출');
                            console.log(this.state);
                        });

                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            };
                        }, ()=> {
                            console.log('세번째 setState 호출');
                            console.log(this.state);
                        });
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }), () => {
                            console.log('네번째 setState 호출');
                            console.log(this.state);
                        });
                    }}
                >+1</button>
            </div>
        );
    }
}

export default Counter;