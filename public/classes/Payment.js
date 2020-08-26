export class Payment {
    // Have to put the modifiers for this to work
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed RM${this.amount} for ${this.details}`;
    }
}
