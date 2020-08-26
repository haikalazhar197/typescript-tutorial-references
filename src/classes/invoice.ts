export class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  // Have to put the modifiers for this to work
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes RM${this.amount} for ${this.details}`;
  }
}
