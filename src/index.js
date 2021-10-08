import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClassApp from './ClassApp';
import reportWebVitals from './reportWebVitals';
import HookApp from './HookApp';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
    <ClassApp />
    <HookApp />
  </React.StrictMode>,
  // public/index.html 의 id가 root인 리액트 컴포넌트를 렌더링하라
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
