export class Survey {
     id: number;
     openDate: string;
     endDate: string;

    constructor(id: number, openDate: string, endDate: string) {
        this.id = id;
        this.openDate = openDate;
        this.endDate = endDate;
    }
}
