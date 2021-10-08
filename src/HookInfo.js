import React, { useEffect, useState } from 'react';
import useInputs from './UseInputs';

const HookInfo = () => {
    
    // const [name,setName] = useState('');
    // const [nickname, setNickname] = useState('');
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;

    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

    // // 두번째 인자로 빈 배열 전달
    // useEffect(() => {
    //     console.log('마운트될 때만 실행됩니다.');
    // }, []);

    // useEffect(() => {
    //     console.log('name이 변경될 때만 실행됩니다.');
    //     console.log(name);
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // }, [name]);

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // };
    
    return (
        <div>
            <div>
                <input value={name} onChange={onChange} />
                <input value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>

    );
};

export default HookInfo;