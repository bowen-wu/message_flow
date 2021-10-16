export interface User {
    id: string;
    avatar: string;
    alias: string;
    isOnline: boolean;
    ipAddress: string;
    port: number;
}

export enum MessageType {
    TEXT = 'text',
    IMAGE = 'image',
    SYSTEM = 'system',
}

export interface Message {
    id: string,
    user?: User,
    time: number;
    type: MessageType;
    content: string;
}
