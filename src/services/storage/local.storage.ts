class LocalStorage {
  private property: string;

  constructor(property: string) {
    this.property = property;
  }

  getStorage(canJson = false): string | null {
    const value = localStorage.getItem(this.property);
    if (!value || !canJson) return value;

    return JSON.parse(value);
  }

  setStorage<T>(data: T, toJSON = false): void {
    let value = data as string;
    if (toJSON) value = JSON.stringify(data);

    localStorage.setItem(this.property, value);
  }

  removeStorage(): void {
    localStorage.removeItem(this.property);
  }
}

export default LocalStorage;
