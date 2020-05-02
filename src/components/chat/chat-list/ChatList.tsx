import React from 'react';
import {IChatPreview} from "../../../model/i-chat-preview";
import ChatItem from "../chat-item/ChatItem";
import "./ChatList.css"

interface IProps {
    chatPreviews: IChatPreview[],
    selectedChatId?: number
    onChatSelected: (id: number) => void;
}

const ChatList: React.FunctionComponent<IProps> = ({chatPreviews, onChatSelected, selectedChatId}) => {
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

export default ChatList;