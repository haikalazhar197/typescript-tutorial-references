export class Invoice {
    // Have to put the modifiers for this to work
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes RM${this.amount} for ${this.details}`;
    }
}
