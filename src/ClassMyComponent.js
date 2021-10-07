import React, {Component} from 'react';
import PropType from 'prop-types';

class ClassMyComponent extends Component {

    /* class 내부 설정 start */
    static defaultProps = {
        name : '기본 이름'
    }

    static propTypes = {
        name : PropType.string,
        favoriteNumber : PropType.number.isRequired
    }
    /* class 내부 설정 end */

    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name} 입니다.<br/>
                children 값은 {children} 입니다. <br/>
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}

ClassMyComponent.defaultProps = {
    name: '기본 이름'
};

ClassMyComponent.propType = {
    name: PropType.string,
    favoriteNumber: PropType.number.isRequired
}

export default ClassMyComponent;