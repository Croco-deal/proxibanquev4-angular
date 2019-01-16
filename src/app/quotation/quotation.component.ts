import { Component, OnInit } from '@angular/core';

/**
 * Composant app-survey permettant l'utilisation de la balise éponyme dans le template HTML principal (app.component.html).
 * Ce composant permet d'afficher une page de devis, si aucun sondage n'est en cours.
 * @author: JLSS.
*/
@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})

/**
 * Classe du composant Quotation implémentant l'interface OnInit.
*/
export class QuotationComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
