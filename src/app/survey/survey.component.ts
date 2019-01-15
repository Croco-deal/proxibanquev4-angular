import { Response } from './../response';
import { Client } from './../client';
import { Service } from './../service';
import { Survey } from './../survey';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  response: Response;
  survey: Survey;
  client: Client;
  switchOption: string;
  dayNumber: number;
  isOk: Boolean;

  constructor(private service: Service) {
    this.response = new Response(null, null, null, null);
    this.survey = new Survey(null, null, null);
    this.client = new Client(undefined);
    this.switchOption = '';
  }

  ngOnInit() {
    this.survey = this.service.getSurvey();
    this.response.survey = this.survey;
  }

  displaySurvey() {
    this.switchOption = 'survey';
  }

  no(survey: Survey) {
    this.response.isTrue = false;
    this.switchOption = 'no';
   // this.service.createOpinion();
  }

  yes(survey: Survey) {
    this.response.isTrue = true;
    this.switchOption = 'yes';
   // this.service.check();
  }

  clientValidation() {
    this.isOk = true;
  }

  validatePos(formSurvey: NgForm) {
    this.service.checkClient(this.client.clientNumber).subscribe((client) => {
      this.response.client = client;
      this.service.createResponse(this.response).subscribe(() => {
        console.log('Avis positif créé en BDD');
      });
      this.getDays();
    });
  }
  validateNeg(formSurvey: NgForm) {
    this.service.createResponse(this.response).subscribe(() => {
      console.log('Avis négatif créé en BDD');
    });
    formSurvey.resetForm(new Response(null, null, null, null));
  }

  getDays() {
    console.log(Date.now());
    console.log(this.survey.endDate.getTime());
    const left = this.survey.endDate.getTime() - Date.now();
    const dayNumber = Math.ceil(left / (1000 * 60 * 60 * 24));
    return dayNumber;
  }

}
