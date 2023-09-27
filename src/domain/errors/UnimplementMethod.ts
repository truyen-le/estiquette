export class UnimplementMethodError extends Error {
  constructor() {
    super("This method is not implement yet");
    this.name = "UnimplementMethodError";
  }
}
