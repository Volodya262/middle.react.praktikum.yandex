import React from 'react';
import {IChatPreview} from "../types/i-chat-preview";
import {ISingleMessage} from "../types/i-single-message";
import './Chat.css'
import {chatMessages, chats} from "../../stub-data";
import {ChatList} from "./chat-list/ChatList";
import {MessagesList} from "./messages-list/MessagesList";

interface IState {
    chats: IChatPreview[],
    selectedChatId: number | null; // if null or undefined then no chat is selected
    selectedChatMessages: ISingleMessage[]; // if null or undefined then no chat is selected
    isLoading: boolean;
}

interface IProps {
    /**
     * Выбранный "снаружи" chatId. Если null, то не выбрано
     */
    id: number | null

    /**
     * Выкидывание наружу выбранного chatId
     * @param id
     */
    idChangeHandler: (id: number) => void;
}

export class Chat extends React.Component<IProps, IState> {
    state: IState = {
        chats: chats,
        selectedChatMessages: [],
        selectedChatId: null,
        isLoading: false
    }

    getChatMessages(chatId: number): ISingleMessage[] { // как будто сходили на бэк лел
        const res = chatMessages.find(msgs => msgs.chatId === chatId);
        return res != null ? res.messages : [];
    }

    getChatMessagesPromise(chatId: number): Promise<ISingleMessage[]> {
        return new Promise<ISingleMessage[]>((resolve) => {
            setTimeout(() => resolve(this.getChatMessages(chatId)), 1000);
        })
    }

    onChatSelected = (id: number) => {
        this.tryInvokeIdChangeHandler(id);
        this.setState({selectedChatId: id}) // надо ли здесь использовать функцию для setState и класть loadChatMessages в коллбэк? 
        this.loadChatMessages(id);
    };

    loadChatMessages = (id: number) => {
        this.setState({isLoading: true});

        this.getChatMessagesPromise(id).then(
            res => this.setState({selectedChatMessages: res, isLoading: false})
        )
    }

    tryInvokeIdChangeHandler(id: number): void {
        if (this.props.idChangeHandler != null) {
            this.props.idChangeHandler(id);
        }
    }

    componentDidMount(): void {
        if (this.props.id != null) {
            this.loadChatMessages(this.props.id)
        }
    }

    componentDidUpdate(prevProps: Readonly<IProps>): void {
        if (this.props.id != null && prevProps.id !== this.props.id) {
            this.loadChatMessages(this.props.id)
        }
    }

    render() {
        return (
            <div className="chat-window">
                <ChatList chatPreviews={this.state.chats}
                          selectedChatId={this.state.selectedChatId}
                          onChatSelected={this.onChatSelected}/>
                {this.state.isLoading ? 'ЗАГРУЗКА' : <MessagesList messages={this.state.selectedChatMessages}/>}
            </div>
        )
    }
}