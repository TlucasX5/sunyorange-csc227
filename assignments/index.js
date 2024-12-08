import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import zipState from 'zip-state';
import { FluentProvider, teamsLightTheme, Button } from
'@fluentui/react-components';

function HelloWorld() {
  const region = zipState('12721');
  return <h1 className='greeting'>Hello, World!
           <p>Your zip code is: {region}</p>
         </h1>;

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    
    <FluentProvider theme={teamsLightTheme}>
        <Button appearance="primary">I am a button.</Button>
    </FluentProvider>

  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
