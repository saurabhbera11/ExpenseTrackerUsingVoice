import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { Provider } from './context/context'
import './index.css';
import { SpeechProvider } from '@speechly/react-client'

ReactDom.render(
    <SpeechProvider appId="b46e2c4b-93e6-4331-8d29-c02962d754e5" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>
    , document.getElementById('root'));
