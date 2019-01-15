import { Client } from './client';
export class Response {
    private id: number;
    private isTrue: boolean;
    private comment: string;
    private clientNumber: Client;

    constructor (id: number, isTrue: boolean, comment: string, clientNumber: Client) {
        this.id = id;
        this.isTrue = isTrue;
        this.comment = comment;
        this.clientNumber = clientNumber;
    }

}

