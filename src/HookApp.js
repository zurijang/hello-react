import React, { useState } from 'react';
import Average from './Average';
import HookCounter from './HookCounter';
import HookInfo from './HookInfo';
import ReducerInfo from './ReducerInfo';

const HookApp = () => {

    const [visible, setVisible] = useState(false);
    
    return (
        <div style={{backgroundColor: 'yellow'}}>
            <HookCounter />

            <div>
                <button onClick={() => {
                    setVisible(!visible);
                }}>
                    {visible ? '숨기기' : '보이기'}
                </button>
                <hr />
                {visible && <HookInfo />}
            </div>

            <div style={{backgroundColor : 'brown'}}>
                ReducerInfo
                <ReducerInfo />
            </div>

            <div>
                <Average />
            </div>
        </div>

    );
};

export default HookApp;