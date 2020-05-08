/**
 * Сообщение в чате
 */
export interface ISingleMessage {
    message: string;
    authorName: string;
    authorId: number;
    avatarUrl: string;
    date: Date;
}