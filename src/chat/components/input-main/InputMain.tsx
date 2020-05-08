import React from 'react';
import './InputMain.css'

interface IProps {

}

export const InputMain: React.FunctionComponent<IProps> = (props) => (
    <div className="input-main-container">
        <input className="input-main__input" type="text"/>
        <div className="input-main__send-button-container">
            <button className="input__send-button">SEND</button>
        </div>
    </div>
);