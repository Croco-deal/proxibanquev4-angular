import { environment as ENV } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service {
  survey: Survey;
  wsUrl: string;

  constructor(private httpClient: HttpClient) {
    this.wsUrl = ENV.apiUrl + '/survey';
   }

   check(): Observable<Survey> {
     return this.httpClient.get<Survey>(this.wsUrl).pipe(tap((survey) => this.survey = survey));
   }

   getSurvey(): Survey {
    return this.survey;
  }

  updateResponse(response){
    const newResponse = new Response(response.isTrue, );
  }

}
