export class UninitializeMethodError extends Error {
    constructor() {
      super("This method is not initialize yet");
      this.name = "UninitializeMethodError";
    }
  }