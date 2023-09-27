export interface LocalStorage {
  get: (key: string) => any;
  set: (key: string, value: object) => void;
}
