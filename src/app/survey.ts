export class Survey {
     idSurvey: number;
     openDate: string;
     endDate: string;

    constructor(idSurvey: number, openDate: string, endDate: string) {
        this.idSurvey = idSurvey;
        this.openDate = openDate;
        this.endDate = endDate;
    }
}
