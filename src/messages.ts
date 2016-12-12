export class ContactUpdated {
    constructor(public contact) {
        this.contact = contact;
    }
}

export class ContactViewed {
    constructor(public contact) {
        this.contact = contact;
    }
}