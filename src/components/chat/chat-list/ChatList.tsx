import React from 'react';
import {IChatPreview} from "../../../model/i-chat-preview";
import "./ChatList.css"
import {ChatItem} from "../chat-item/ChatItem";

interface IProps {
    chatPreviews: IChatPreview[],
    selectedChatId?: number | null
    onChatSelected: (id: number) => void;
}

export const ChatList: React.FunctionComponent<IProps> = ({chatPreviews, onChatSelected, selectedChatId}) => {
    const sortedChatsWithSelectedInfo = chatPreviews
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map(chat => ({chatPreview: chat, isSelected: chat.id === selectedChatId}));

    return (
        <div className="chat-list-container">
            {sortedChatsWithSelectedInfo.map(chatInfo => (
                <ChatItem key={chatInfo.chatPreview.id}
                          chatPreview={chatInfo.chatPreview}
                          isSelected={chatInfo.isSelected}
                          onChatSelected={onChatSelected}/>
            ))}
        </div>
    );
};