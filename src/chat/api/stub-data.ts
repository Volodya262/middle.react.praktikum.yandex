import {IChatPreview} from "../types/i-chat-preview";
import {IChatMessages} from "../types/i-chat-messages";
import {IChatCoreInfo} from "../types/i-chat-core-info";

const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
export const imgUrl1 = 'https://placekitten.com/200/200';
export const imgUrl2 = 'https://placekitten.com/250/250';
export const imgUrl3 = 'https://placekitten.com/300/300';

export const chatNames: IChatCoreInfo[] = [
    {
        id: 1,
        title: 'чатик с Вовой'
    },
    {
        id: 2,
        title: 'чатик с Вовой'
    },
    {
        id: 3,
        title: 'чатик с Вовой'
    },
    {
        id: 4,
        title: 'Пустой чатик'
    },
]

export const chats: IChatPreview[] = [
    {
        id: 1,
        logoUrl: imgUrl1,
        author: 'Вова',
        date: new Date(2020, 0, 1),
        message: 'олды тут...',
        title: 'чатик с Вовой'
    },
    {
        id: 2,
        logoUrl: imgUrl1,
        author: 'Вова',
        date: new Date(2020, 0, 1, 12),
        message: 'Настал следующий день.' + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum,
        title: 'чатик с Вовой'
    },
    {
        id: 3,
        logoUrl: imgUrl1,
        author: 'Вова',
        date: new Date(2020, 0, 2),
        message: 'три',
        title: 'чатик с Вовой'
    },
    {
        id: 4,
        logoUrl: imgUrl1,
        author: 'vasya',
        date: new Date(2020, 0, 2),
        message: 'Сообщений для этого чата нет. Приложение не должно крашнутся',
        title: 'Пустой чатик'
    }
]

export const chatMessages: IChatMessages[] = [
    {
        chatId: 1,
        messages: [
            {
                authorName: 'Вова',
                authorId: 1,
                date: new Date(2020, 0, 1),
                message: 'олды тут...',
                avatarUrl: imgUrl1
            }
        ]
    },
    {
        chatId: 2,
        messages: [
            {
                authorName: 'Вова',
                authorId: 1,
                date: new Date(2020, 0, 1, 12),
                message: 'Настал следующий день.' + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum,
                avatarUrl: imgUrl1
            },
            {
                authorName: 'Валя',
                authorId: 2,
                date: new Date(2020, 0, 1, 13),
                message: 'Привет!!!!',
                avatarUrl: imgUrl2
            },
            {
                authorName: 'Валя',
                authorId: 2,
                date: new Date(2020, 0, 1, 14),
                message: 'Как дела?????' + ipsum + ipsum + ipsum + ipsum,
                avatarUrl: imgUrl2
            },
            {
                authorName: 'Валя',
                authorId: 2,
                date: new Date(2020, 0, 1, 16),
                message: 'ау??????',
                avatarUrl: imgUrl2
            },
            {
                authorName: 'Вова',
                authorId: 1,
                date: new Date(2020, 0, 1, 18),
                message: 'Это сообщение должно отображаться в отдельном блоке',
                avatarUrl: imgUrl1
            },
            {
                authorName: 'Вова',
                authorId: 1,
                date: new Date(2020, 0, 2, 12),
                message: 'Настал следующий день.' + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum,
                avatarUrl: imgUrl1
            }
        ]
    },
    {
        chatId: 3,
        messages: [
            {
                authorName: 'Вова',
                authorId: 1,
                date: new Date(2020, 0, 1),
                message: 'раз',
                avatarUrl: imgUrl1
            },
            {
                authorName: 'Вова',
                authorId: 1,
                date: new Date(2020, 0, 3),
                message: 'три',
                avatarUrl: imgUrl1
            },
            {
                authorName: 'Вова',
                authorId: 1,
                date: new Date(2020, 0, 2),
                message: 'два',
                avatarUrl: imgUrl1
            }
        ]
    },
]
