import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, updateNewMessagesText, updateNewpostText } from './redux/state.js'
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode >
                <App state={state} addPost={addPost} updateNewpostText={updateNewpostText} addMessage={addMessage} updateNewMessagesText={updateNewMessagesText} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}