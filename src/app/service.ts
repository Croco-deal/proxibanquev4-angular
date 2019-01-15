import { environment as ENV } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Response } from './response';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class Service {
  survey: Survey;
  response: Response;
  wsUrlSurvey: string;
  wsUrlClient: string;
  wsUrlResponse: string;

  constructor(private httpClient: HttpClient) {
    this.wsUrlSurvey = ENV.apiUrl + '/survey';
    this.wsUrlClient = ENV.apiUrl + '/client';
    this.wsUrlResponse = ENV.apiUrl + '/response';

  }

  checkSurvey(): Observable<Survey> {
    return this.httpClient.get<Survey>(this.wsUrlSurvey).pipe(tap((survey) => this.survey = survey));
  }

  checkClient(clientNumber: string): Observable<Client> {
    return this.httpClient.get<Client>(this.wsUrlClient + `/${clientNumber}`);
  }

  getSurvey(): Survey {
    return this.survey;
  }

  createResponse(response: Response): Observable<Response> {
    const newResponse = new Response(response.isTrue, response.comment, response.client, response.survey);

// .subscribe(() => {
// Afficher le message de confirmation à l'utilisateur (paramètre: message positif ou négatif)
// console.log('Response Commentaire bien créée en BDD');
// });
    return this.httpClient.post<Response>(this.wsUrlResponse, newResponse);
  }

}

