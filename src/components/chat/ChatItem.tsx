import * as React from 'react';
import {format} from 'date-fns';
import './ChatItem.css'

interface IProps {
    iconUrl: string;
    title: string;
    author: string;
    message: string;
    date: Date;
}

const Message: React.FunctionComponent<IProps> = (props: IProps) => (
    <div className="chat-item">
        <img src={props.iconUrl} className="chat-item__logo" alt="logo"/>
        <div className="chat-item__all-text-container">
            <div className="chat-item__title-and-date-container">
                <span className="chat-item__title">{props.title}</span>
                <span className="chat-item__date">{format(props.date, 'dd/mm/yyyy')}</span>
            </div>
            <div className="chat-item__author-and-message-container">
                <span className="chat-item__author">{props.author}:</span>
                <span className="chat-item__message">{props.message}</span>
            </div>
        </div>
    </div>
);

export default Message;