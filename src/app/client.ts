
/**
 * Classe Response permettant de stocker le numéro client de l'utilisateur.
 * @author: JLSS.
*/
export class Client {
    clientNumber: string;
    firstname: string;
    lastname: string;
    tel: number;
    email: string;

    constructor(clientNumber: string, firstname: string, lastname: string, tel?: number, email?: string) {
        this.clientNumber = clientNumber;
        this.firstname = firstname;
        this.lastname = lastname;
        this.tel = tel;
        this.email = email;
    }

}
