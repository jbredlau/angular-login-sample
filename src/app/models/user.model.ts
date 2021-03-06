/*
 * repraesentiert einen User zur Authentifizierung
 */ 
export class User {

    /*
     * user sollte einen künstlichen Schlüssel besitzen
     * kann z.B. ueber einen uuid-Service gesetzt werden
     */
    // id: string;

    constructor(
    public email: string,
    public password: string,
    public firstName?: string,
    public lastName?: string,
    public comment?: string,
    public avatar?: string,
    ) { }

}
 

