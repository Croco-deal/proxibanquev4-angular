import { Client } from './../client';
import { Service } from './../service';
import { Survey } from './../survey';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  isYes: boolean;
  isThumb: boolean;
  response: Response;
  survey: Survey;

  constructor(private service: Service) {
    this.isYes = false;
    this.isThumb = true;
    this.response = new Response(undefined, undefined);
    this.survey = new Survey(undefined, '', '');
  }

  ngOnInit() {
    this.survey = this.service.getSurvey();
  }

  surveyResponse(survey: Survey) {
  }



  yes(survey: Survey) {
    this.service.createOpinion();
  }

  no(survey: Survey) {
    this.service.check();
  }
}
