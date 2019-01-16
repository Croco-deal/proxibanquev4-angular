import { Response } from './../response';
import { Client } from './../client';
import { Service } from '../service';
import { Survey } from './../survey';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

/**
 * Composant app-survey permettant l'utilisation de la balise éponyme dans le template HTML principal (app.component.html).
 * Ce composant permet d'afficher les éléments relatifs au sondage en cours.
 * @author: JLSS.
*/
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})

/**
 * Classe du composant Survey implémentant l'interface OnInit.
 * Cette classe contient les méthodes relatives au sondage en cours.
*/
export class SurveyComponent implements OnInit {
  response: Response;
  survey: Survey;
  client: Client;
  switchOption: string;
  dayNumber: number;
  isOk: boolean;
  isComment: boolean;
  isNew: boolean;

/**
 * Constructeur unique du composant permettant l'injection de dépendance au service du composant Survey.
 * @param service : instance du Service du composant Survey.
*/
  constructor(private service: Service) {
    this.response = new Response(null, null, null, null);
    this.survey = new Survey(null, null, null);
    this.client = new Client(null, null, null, null, null);
    this.switchOption = 'survey';
    this.isComment = true;
  }

/**
 * Fonction d'Angular appelée lorque le composant est inité.
 * Cette fonction appelle les méthodes du service permettant de récupérer une instance de Survey
 * et de le stocker sous forme d'attribut dans la classe Response.
*/
  ngOnInit() {
    this.survey = this.service.getSurvey();
    this.response.survey = this.survey;
  }

/**
 * Méthode permettant d'afficher le formulaire de commentaire en cas de réponse négative au sondage
 * @param survey : instance de type Survey
*/
  no(survey: Survey) {
    this.response.isTrue = false;
    this.switchOption = 'no';
  }

/**
 * Méthode permettant d'afficher le formulaire de saisie de N° Client en cas de réponse positive au sondage
 * @param survey : instance de type Survey
*/
  yes(survey: Survey) {
    this.response.isTrue = true;
    this.switchOption = 'yes';
  }

/**
 * Méthode permettant la création et la soummission de la réponse positive au backend.
 * si le client (identifié par son numéro) existe. Sinon, le message "Numéro invalide" apparaît.
 *  @param formSurvey : instance de la classe NgForm d'Angular, permettant la liaison à la directive NgForm du template html.
*/
  validatePos(formSurvey: NgForm) {
    this.service.checkClient(this.client.clientNumber).subscribe((client) => {
      if (client) {
        this.response.client = client;
      this.service.createResponse(this.response).subscribe(() => {
        console.log('Avis positif créé en BDD');
        this.isOk = true;
      });
      this.getDays();
      } else {
        this.isOk = false;
      }
    });
  }

/**
 * Méthode permettant la création et la soummission du commentaire au backend.
 * Cette méthode permet également de réinitialiser les champs du formulaire après validation.
 *  @param formSurvey : instance de la classe NgForm d'Angular, permettant la liaison à la directive NgForm du template html.
*/
  validateNeg(formSurvey: NgForm) {
    this.service.createResponse(this.response).subscribe(() => {
      console.log('Avis négatif créé en BDD');
    });
    formSurvey.resetForm(new Response(null, null, null, null));
    this.isComment = false;
  }

/**
 * Méthode permettant de calculer le nombre de jours restant avant la date de fin prévisionnelle du sondage.
*/
  getDays() {
    console.log(Date.now());
    console.log(this.survey.endDate);
    const nowDate = Date.now();
    const endDate = new Date(this.survey.endDate[0], this.survey.endDate[1] - 1, this.survey.endDate[2]);
    const dayNumberMs = endDate.getTime() - nowDate;
    this.dayNumber = Math.ceil(dayNumberMs / (1000 * 60 * 60 * 24));
  }

/**
 * Méthode permettant la création et la soummission d'un nouveau client au backend.
 * Cette méthode permet également de réinitialiser les champs du formulaire après validation.
 *  @param formClient : instance de la classe NgForm d'Angular, permettant la liaison à la directive NgForm du template html.
*/
  validateNewClient(formClient: NgForm) {
      this.service.createClient(this.client).subscribe((newClient) => {
        console.log('Nouveau Client créé en BDD');
        this.service.checkClient(this.client.clientNumber).subscribe((client) => {
          if (client) {
            this.response.client = client;
          this.service.createResponse(this.response).subscribe(() => {
            console.log('Avis positif créé en BDD');

          });
          this.getDays();
          }
          this.isOk = true;
        });
    });
    formClient.resetForm(new Client(null, null, null, null, null));
  }
}
