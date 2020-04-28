import * as React from 'react';
import './MessageItem.css'
import {format} from "date-fns";
import {IMessage} from "../../../model/i-message";

const MessageItem: React.FunctionComponent<IMessage> = (props: IMessage) => {

    const formattedTime = format(props.date, 'HH:mm'); // HH - 24h format

    return (
        <div className="message-item">
            <img src={props.avatarUrl} className="message-item__avatar" alt="user avatar"/>
            <div className="message-item__all-text-container">
                <div className="message-item__author-and-date-container">
                    <span className="message-item__author">{props.author}</span>
                    <span className="message-item__date">{formattedTime}</span>
                </div>
                <div className="message-item__author-and-message-container">
                    <div className="message-item__message">{props.message}</div>
                </div>
            </div>
        </div>
    );
}

export default MessageItem;