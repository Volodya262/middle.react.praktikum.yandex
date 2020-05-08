import React from 'react';
import './InputMain.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

interface IProps {
    onMessageSent: (s: string) => void;
}

interface IState {
    message: string;
}

export class InputMain extends React.Component<IProps, IState> {
    state: IState = {
        message: ''
    }

    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({message: event.target.value})
    }

    onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.sendMessage();
        }
    }

    sendMessage = () => {
        this.props.onMessageSent(this.state.message);
    }

    onBtnClick = () => {
        this.sendMessage();
    }

    render(): React.ReactNode {
        return (
            <div className="input-main-container">
                <input type="text" className="input-main__input"
                       onKeyDown={this.onInputKeyDown}
                       onChange={this.onInputChange}
                       value={this.state.message}>
                </input>
                <div className="input-main__send-button-container">
                    <button className="input__send-button" onClick={this.onBtnClick}>
                        <FontAwesomeIcon icon={faPaperPlane} size={"lg"}/>
                    </button>
                </div>
            </div>
        );
    }
}