import { Client } from './client';
export class Response {
    private id: number;
    private isTrue: boolean;
    private comment: string;
    private clientNumber: Client;

    constructor (isTrue: boolean, comment: string, clientNumber: Client) {
        this.isTrue = isTrue;
        this.comment = comment;
        this.clientNumber = clientNumber;
    }

}

