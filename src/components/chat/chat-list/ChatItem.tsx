import * as React from 'react';
import {format} from 'date-fns';
import './ChatItem.css'
import {IChatPreview} from "../../../model/i-chat-preview";

interface IProps {
    chatPreview: IChatPreview,
    isSelected?: boolean,
    onChatSelected?: (id: number) => void;
}

const ChatItem: React.FunctionComponent<IProps> = (props: IProps) => {
    const onChatSelected = () => {
        if (props.onChatSelected != null) {
            props.onChatSelected(props.chatPreview.id);
        }
    };

    const chatItemClassName = props.isSelected ? "chat-item chat-item__selected" : "chat-item";

    const formattedDate = format(props.chatPreview.date, 'dd.MM.yyyy');

    return (
        <div className={chatItemClassName} onClick={onChatSelected}>
            <img src={props.chatPreview.logoUrl} className="chat-item__logo" alt="logo"/>
            <div className="chat-item__all-text-container">
                {/* ↑ chat-item__all-text-container вылезает за границы chat-item без костыля*/}
                <div className="chat-item__title-and-date-container">
                    <span className="chat-item__title">{props.chatPreview.title}</span>
                    <span className="chat-item__date">{formattedDate}</span>
                </div>
                <div className="chat-item__author-and-message-container">
                    <span className="chat-item__author">{props.chatPreview.author}:</span>
                    <span className="chat-item__message">{props.chatPreview.message}</span>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;