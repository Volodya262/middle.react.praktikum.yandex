import React from 'react';
import {IChatPreview} from "../../model/i-chat-preview";
import ChatList from "./chat-list/ChatList";
import {IMessage} from "../../model/i-message";
import MessageList from "./messages-list/MessagesList";
import './Chat.css'
import {chatMessages, chats} from "../../stub-data";

function getChatMessages(chatId: number): IMessage[] { // как будто сходили на бэк лел
    const res = chatMessages.find(msgs => msgs.chatId === chatId);
    return res != null ? res.messages : [];
}

interface IProps {

}

interface IState {
    chats: IChatPreview[],
    selectedChatId?: number; // if null then no chat is selected
    selectedChatMessages?: IMessage[]; // if null then no chat is selected
}

class Chat extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            chats: chats
        }
    }

    onChatSelected = (id: number) => {
        const messages = getChatMessages(id);
        const newState = {...this.state, selectedChatId: id, selectedChatMessages: messages}
        this.setState(newState);
    };

    render(): React.ReactNode {
        return (
            <div className="chat-window">
                <ChatList chatPreviews={this.state.chats}
                          selectedChatId={this.state.selectedChatId}
                          onChatSelected={this.onChatSelected}/>
                <MessageList messages={this.state.selectedChatMessages}/>
            </div>
        )
    }
}

export default Chat;