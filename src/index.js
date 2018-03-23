import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRouting from './routing'
import registerServiceWorker from './registerServiceWorker'
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom'

render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRouting/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
