import React, { useReducer } from 'react';


// Info 컴포넌트에서 여러 개의 인풋을 관리하기 위해 userReducer로 작성했던 로직을
// useInputs라는 Hook으로 따로 분리
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };

    return [state, onChange];
}