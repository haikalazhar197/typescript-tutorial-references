import { HasFormatter } from "../Interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  // Have to put the modifiers for this to work
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed RM${this.amount} for ${this.details}`;
  }
}
