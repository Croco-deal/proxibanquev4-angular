import { environment as ENV } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Response } from './response';
import { Client } from './client';

/**
 * Décorateur permettant d'initialiser un contexte de détectabilité nécessaire au bon fonctionnement de l'injection des services
*/
@Injectable({
  providedIn: 'root'
})

/**
 * Classe Service contenant toutes les méthodes permettant de communiquer avec le WebService J2EE.
 * @author: JLSS
*/
export class Service {
  survey: Survey;
  response: Response;
  wsUrlSurvey: string;
  wsUrlClient: string;
  wsUrlResponse: string;

/**
 * Constructeur unique du composant permettant l'injection de dépendance à la classe HttpClient
 * @param httpClient : instance de la classe HttpClient
*/
  constructor(private httpClient: HttpClient) {
    this.wsUrlSurvey = ENV.apiUrl + '/survey';
    this.wsUrlClient = ENV.apiUrl + '/client';
    this.wsUrlResponse = ENV.apiUrl + '/response';
  }

/**
 * Méthode permettant de retourner un objet Observable, capable de déclencher du code lorsque la réponse
 * asynchrone à la requête Http vers le WebService J2EE est reçue.
 * La requête Http GET permet de récupérer un objet de type Survey.
 * @return un objet de type Observable
*/
  checkSurvey(): Observable<Survey> {
    return this.httpClient.get<Survey>(this.wsUrlSurvey).pipe(tap((survey) => this.survey = survey));
  }

/**
 * Méthode permettant de comparer le numéro de client entré dans le formulaire avec le numéro de client enregistré en BDD,
 * via une requête Http GET.
 * @param clientNumber: numéro de client, attribut de la classe Client
 * @return un objet type Survey
 *
*/
  checkClient(clientNumber: string): Observable<Client> {
    return this.httpClient.get<Client>(this.wsUrlClient + `/${clientNumber}`);
  }

/**
 * Méthode permettant de récupérer une instance de type Survey.
 * @return un objet type Survey
*/
  getSurvey(): Survey {
    return this.survey;
  }

/**
 * Méthode permettant de créer et de soummettre une nouvelle réponse (newResponse), via une requête Http GET, au backend.
 * @param response: instance de la classe Response
 * @return un objet de type Observable
*/
  createResponse(response: Response): Observable<Response> {
    const newResponse = new Response(response.isTrue, response.comment, response.client, response.survey);
    return this.httpClient.post<Response>(this.wsUrlResponse, newResponse);
  }

  createClient(client: Client): Observable<Client> {
    const newClient = new Client(
      client.clientNumber, client.firstname, client.lastname, client.tel, client.mail);
    return this.httpClient.post<Client>(this.wsUrlClient, newClient);
  }
}

