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
