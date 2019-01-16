import { Survey } from './survey';
import { Client } from './client';

/**
 * Classe Response permettant de stocker les informations des utilisateurs, relatives au sondage.
 * @author: JLSS.
*/
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

