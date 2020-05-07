import {IChatPreview} from "./chat/types/i-chat-preview";
import {IChatMessages} from "./chat/types/i-chat-messages";

const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

export const chats: IChatPreview[] = [
    {
        id: 1,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'Вова',
        date: new Date(2020, 0, 1),
        message: 'олды тут...',
        title: 'чатик с Вовой'
    },
    {
        id: 2,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'Вова',
        date: new Date(2020, 0, 1, 12),
        message: 'Настал следующий день.' + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum,
        title: 'чатик с Вовой'
    },
    {
        id: 3,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'Вова',
        date: new Date(2020, 0, 2),
        message: 'три',
        title: 'чатик с Вовой'
    },
    {
        id: 4,
        logoUrl: 'https://placekitten.com/200/200',
        author: 'vasya',
        date: new Date(2020, 0, 2),
        message: ipsum,
        title: 'чатик с Вовой'
    }
]

export const chatMessages: IChatMessages[] = [
    {
        chatId: 1,
        messages: [
            {
                author: 'Вова',
                date: new Date(2020, 0, 1),
                message: 'олды тут...',
                avatarUrl: 'https://placekitten.com/200/200'
            }
        ]
    },
    {
        chatId: 2,
        messages: [
            {
                author: 'Вова',
                date: new Date(2020, 0, 1, 12),
                message: 'Настал следующий день.' + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum,
                avatarUrl: 'https://placekitten.com/200/200'
            },
            {
                author: 'Валя',
                date: new Date(2020, 0, 1, 13),
                message: 'Привет!!!!',
                avatarUrl: 'https://placekitten.com/250/250'
            },
            {
                author: 'Валя',
                date: new Date(2020, 0, 1, 14),
                message: 'Как дела?????',
                avatarUrl: 'https://placekitten.com/250/250'
            },
            {
                author: 'Валя',
                date: new Date(2020, 0, 1, 16),
                message: 'ау??????',
                avatarUrl: 'https://placekitten.com/250/250'
            },
            {
                author: 'Вова',
                date: new Date(2020, 0, 2, 12),
                message: 'Настал следующий день.' + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum + ipsum,
                avatarUrl: 'https://placekitten.com/200/200'
            }
        ]
    },
    {
        chatId: 3,
        messages: [
            {
                author: 'Вова',
                date: new Date(2020, 0, 1),
                message: 'раз',
                avatarUrl: 'https://placekitten.com/200/200'
            },
            {
                author: 'Вова',
                date: new Date(2020, 0, 3),
                message: 'три',
                avatarUrl: 'https://placekitten.com/200/200'
            },
            {
                author: 'Вова',
                date: new Date(2020, 0, 2),
                message: 'два',
                avatarUrl: 'https://placekitten.com/200/200'
            }
        ]
    },
]
