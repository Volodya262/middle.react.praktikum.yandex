import React from 'react';
import './InputMain.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

interface IProps {
    onMessageSent: (s: string) => void;
}

interface IState {
    message: string;
    expanded: boolean;
}

export class InputMain extends React.Component<IProps, IState> {
    state: IState = {
        message: '',
        expanded: false
    }

    onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({message: event.target.value})
    }

    onInputKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                this.addNewLine();
            } else {
                this.sendMessage();
            }
            e.preventDefault();
        }
    }

    sendMessage = () => {
        this.props.onMessageSent(this.state.message);
        this.clearInput();
    }

    addNewLine = () => {
        this.setState(state => ({message: state.message + '\n', expanded: true}));
    }

    clearInput = () => {
        this.setState(state => ({message: '', expanded: false}))
    }

    onBtnClick = () => {
        this.sendMessage();
    }

    render(): React.ReactNode {
        const rows = this.state.expanded ? 5 : 1;
        return (
            <div className="input-main-container">
                <textarea className="input-main__input"
                          rows={rows}
                          onKeyDown={this.onInputKeyDown}
                          onChange={this.onInputChange}
                          value={this.state.message}>
                </textarea>
                <div className="input-main__send-button-container">
                    <button className="input__send-button" onClick={this.onBtnClick}>
                        <FontAwesomeIcon icon={faPaperPlane} size={"lg"}/>
                    </button>
                </div>
            </div>
        );
    }
}