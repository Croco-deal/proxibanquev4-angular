/**
 * Classe Response permettant de stocker les informations relatives au sondage en cours.
 * @author: JLSS.
*/
export class Survey {
     id: number;
     openDate: Date;
     endDate: Date;

    constructor(id: number, openDate: Date, endDate: Date) {
        this.id = id;
        this.openDate = openDate;
        this.endDate = endDate;
    }
}
