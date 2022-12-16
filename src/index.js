import React from 'react'
import ReactDOM from 'react-dom'
import SSRProvider from 'react-bootstrap/SSRProvider';
import App from './app'
ReactDOM.render(
    <SSRProvider>
    <App/>
    </SSRProvider>,
    document.getElementById("root")
)