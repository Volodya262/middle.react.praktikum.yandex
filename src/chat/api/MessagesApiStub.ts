import {IChatPreview} from "../types/i-chat-preview";
import {ISingleMessage} from "../types/i-single-message";
import {chatMessages, chatNames, imgUrl3} from "./stub-data";
import _ from "lodash";
import {IChatCoreInfo} from "../types/i-chat-core-info";
import {IChatMessages} from "../types/i-chat-messages";
import {maxBy} from "../../common/utils/max-by";

export interface IChatApi {
    getChats(): Promise<IChatPreview[]>;

    getChatMessages(chatId: number): Promise<ISingleMessage[]>;

    sendMessage(chatId: number, messageText: string, userId: number, userName: string): Promise<void>;
}

export class ChatApiStub implements IChatApi {

    private chatNames = chatNames;
    private chatsMessages = chatMessages;

    public getChatMessages(chatId: number): Promise<ISingleMessage[]> {
        const res = this.chatsMessages.find(msgs => msgs.chatId === chatId);

        return new Promise<ISingleMessage[]>(resolve => {
            setTimeout(() => resolve(res?.messages || []), 100);
        });
    }

    public getChats(): Promise<IChatPreview[]> {
        const chats = this.makeChatPreviews(this.chatNames, this.chatsMessages)
        return new Promise<IChatPreview[]>(resolve => {
            setTimeout(() => resolve(chats), 100);
        })
    }

    public sendMessage(chatId: number, messageText: string, userId: number, userName: string): Promise<void> {
        const newMsg: ISingleMessage = {
            date: new Date(),
            avatarUrl: imgUrl3,
            authorId: userId,
            authorName: userName,
            message: messageText
        }

        const newChatsMessages = _.cloneDeep(this.chatsMessages);
        const chatMessagesIndex = newChatsMessages.findIndex(chatMsgs => chatMsgs.chatId === chatId);

        let chatMessages: IChatMessages;
        if (chatMessagesIndex === -1) {
            chatMessages = {chatId: chatId, messages: []};
        } else {
            chatMessages = newChatsMessages[chatMessagesIndex];
            newChatsMessages.splice(chatMessagesIndex, 1);
        }
        chatMessages.messages.push(newMsg);
        newChatsMessages.push(chatMessages);

        this.chatsMessages = newChatsMessages;

        return new Promise<void>(resolve => {
            setTimeout(() => resolve(), 500);
        })
    }

    private makeChatPreviews(chatNames: IChatCoreInfo[], allChatsMessages: IChatMessages[]): IChatPreview[] {
        const previews: IChatPreview[] = [];
        for (const chat of chatNames) {
            const chatMessages = allChatsMessages.find(msgs => msgs.chatId === chat.id)?.messages;
            if (chatMessages == null || chatMessages.length === 0) {
                const preview = {
                    id: chat.id,
                    title: chat.title,
                    date: new Date(),
                    author: 'none',
                    message: 'No messages for this chat found',
                    logoUrl: imgUrl3
                };
                previews.push(preview);
            } else {
                const lastMessage = maxBy(chatMessages, msgs => msgs.date, (a, b) => b.getTime() - a.getTime());
                const preview: IChatPreview = {
                    id: chat.id,
                    title: chat.title,
                    logoUrl: lastMessage.avatarUrl,
                    message: lastMessage.message,
                    author: lastMessage.authorName,
                    date: lastMessage.date
                }
                previews.push(preview);
            }
        }
        return previews;
    }
}