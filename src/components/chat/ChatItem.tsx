import * as React from 'react';
import {format} from 'date-fns';
import './ChatItem.css'
import {IChatPreview} from "../../model/i-chat-preview";

interface IProps {
    chatPreview: IChatPreview
}

const ChatItem: React.FunctionComponent<IProps> = (props: IProps) => (
    <div className="chat-item">
        <img src={props.chatPreview.logoUrl} className="chat-item__logo" alt="logo"/>
        <div className="chat-item__all-text-container">
            {/* ↑ chat-item__all-text-container вылезает за границы chat-item без костыля*/}
            <div className="chat-item__title-and-date-container">
                <span className="chat-item__title">{props.chatPreview.title}</span>
                <span className="chat-item__date">
                    {format(props.chatPreview.date, 'dd/MM/yyyy')}
                </span>
            </div>
            <div className="chat-item__author-and-message-container">
                <span className="chat-item__author">{props.chatPreview.author}:</span>
                <span className="chat-item__message">{props.chatPreview.message}</span>
            </div>
        </div>
    </div>
);

export default ChatItem;