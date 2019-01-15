import { Survey } from './survey';
import { Client } from './client';
export class Response {
    id: number;
    isTrue: boolean;
    comment: string;
    client: Client;
    survey: Survey;

    constructor (isTrue: boolean, comment: string, client: Client, survey: Survey) {
        this.isTrue = isTrue;
        this.comment = comment;
        this.client = client;
        this.survey = survey;
    }

}

