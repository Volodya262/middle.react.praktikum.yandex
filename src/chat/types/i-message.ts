/**
 * Сообщение в чате
 */
export interface IMessage {
    message: string;
    author: string;
    avatarUrl: string;
    date: Date;
}