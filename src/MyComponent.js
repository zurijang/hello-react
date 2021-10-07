import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {

    /* 비구조화 할당 : 인자로 props를 받을 때*/
    //const {name, children} = props;

    return (
        <div>
            나의 새롭고 멋진 컴포넌트
            <strong>나의 이름은 {name}</strong>
            {children}

            <br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    );
}

MyComponent.defaultProps = {
    name : '기본 값'
}

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;