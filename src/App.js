import React from 'react';
import './App.css';
import ClassEventPractice from './ClassEventPractice';
import ClassMyComponent from './ClassMyComponent';
import Counter from './Counter';
import CreateRef from './CreateRef';
import EventPractice from './EventPractice';
import IterationSample from './IterationSample';
import MyComponent from './MyComponent';
import Say from './Say';
import ScrollBox from './ScrollBox';
import ValidationSample from './ValidationSample';

function App() {

  const name = undefined;
  const style = { // JS에서 style CSS 설정하려 할 때는 ' - ' 생략하고 카멜표기법으로 작성
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  };

  return (
  <div>
    <div className='react'>
      {/* ㅋㅋㅋ */}
      <MyComponent name='주리' favoriteNumber={2}>
        {/* children data start */}
        <div>
          <input />
        </div>
        {/* children data end */}
      </MyComponent>

    </div>
    <div style={style}>
      <ClassMyComponent name='쭈그리' favoriteNumber={7}>
        둠칫 ClassMyComponent
      </ClassMyComponent>
    </div>
    <div>
      <Counter />
      <Say />
    </div>
    <div style={{backgroundColor:'purple'}}>
      <EventPractice />
    </div>
    <div style={{backgroundColor:'ivory'}}>
      <ClassEventPractice />
    </div>
    <div style={{backgroundColor:'grey'}}>
      <ValidationSample />
    </div>
    <div>
      CreateRef
      <CreateRef />
    </div>
    <div>
      ScrollBox
      <ScrollBox />
    </div>
    <div>
      <IterationSample />
    </div>
  </div>
  );
}

export default App;
