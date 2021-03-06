import React, { useState } from 'react';

const EventPractice = () => {
    
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message } = form;
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }
    const onClick = () => {
        alert(username + ' : ' + message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <div>
                <h1>이벤트 연습 클래스</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='사용자명'
                    value={username}
                    onChange={onChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='아무거나 입력해 보세요'
                    value={message}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                />
                <button onClick={onClick}>확인</button>
            </div>
        </div>
    );
};

export default EventPractice;