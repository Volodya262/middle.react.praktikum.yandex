import React from 'react';
import {IChatPreview} from "../types/i-chat-preview";
import {IMessage} from "../types/i-message";
import './Chat.css'
import {chatMessages, chats} from "../../stub-data";
import {ChatList} from "./chat-list/ChatList";
import {MessageList} from "./messages-list/MessagesList";

interface IState {
    chats: IChatPreview[],
    selectedChatId: number | null; // if null then no chat is selected
    selectedChatMessages: IMessage[]; // if null then no chat is selected
}

interface IProps {
    selectedChatId?: number
}

export class Chat extends React.Component<IProps, IState> {
    state: IState = {
        chats: chats,
        selectedChatMessages: [],
        selectedChatId: null
    }

    constructor(props: IProps) {
        super(props);
        console.log(props)
        if (props.selectedChatId != null) {

        }
    }

    getChatMessages(chatId: number): IMessage[] { // как будто сходили на бэк лел
        const res = chatMessages.find(msgs => msgs.chatId === chatId);
        return res != null ? res.messages : [];
    }

    onChatSelected = (id: number) => {
        const messages = this.getChatMessages(id);
        this.setState({selectedChatId: id, selectedChatMessages: messages});
    };

    render() {
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