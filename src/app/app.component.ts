import { Service } from './service';
import { Component, OnInit } from '@angular/core';


/**
 * Composant de base. Côté Html, ce composant permet l'affichage d'une page de devis ou d'un sondage (si un sondage est en cours).
 *
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proxibanquev4-angular';
  isActive: boolean;

  constructor(private service: Service) {
  }

/**
 * Fonction d'Angular appelée lorque le composant est inité.
 * Cette fonction appelle la méthode du service permettant de vérifier si un sondage est en cours.
 * Le cas échéant, le sondage est non nul et le boolean isActive est inité à la valeur "true".
*/
  ngOnInit() {
      this.service.checkSurvey().subscribe((survey) => {
        this.isActive = survey != null;
      });
  }
}
