import React from 'react'
import './MessageItem.css'
import {format} from "date-fns";
import {IMessage} from "../../../types/i-message";

export const MessageItem: React.FunctionComponent<IMessage> = ({author, avatarUrl, date, message}) => {

    const formattedTime = format(date, 'HH:mm'); // HH - 24h format

    return (
        <div className="message-item">
            <img src={avatarUrl} className="message-item__avatar" alt="user avatar"/>
            <div className="message-item__all-text-container">
                <div className="message-item__author-and-date-container">
                    <span className="message-item__author">{author}</span>
                    <span className="message-item__date">{formattedTime}</span>
                </div>
                <div className="message-item__author-and-message-container">
                    <div className="message-item__message">{message}</div>
                </div>
            </div>
        </div>
    );
}