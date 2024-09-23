import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// this is new commit in main brnach which will make conflict for feature-1234
root.render(
  <React.StrictMode>
    <App />
    <TEST></TEST>
    <TEST1></TEST1>
    <TEST2></TEST2>
    <TEST4></TEST4>
    <TEST5></TEST5>
  </React.StrictMode>
);
// THis is direct commit in master branch
// If you want to start measuring performance in your app, pass a function
// New commint form main aaaaaaaaaaaaaaaaa
//now this is direct commit from main branch for make conflict
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Now this is new comment in new-feature branch
reportWebVitals();

// TO do new line added on the same place which will make conflict
//Comment added in feature-1234 branch which is second commit
