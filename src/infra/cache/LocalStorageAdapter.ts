import { LocalStorage } from "@data/protocols/cache";
import { injectable } from "inversify";

@injectable()
export class LocalStorageAdapter implements LocalStorage {
  set(key: string, value: object): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }

  get(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
