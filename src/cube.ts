function randome6() {
  return Math.floor(Math.random() * 6 + 1);
}

export class Cube {
  public value: number;
  public save: boolean;

  constructor(value: number = randome6(), save: boolean = false) {
    this.value = value;
    this.save = save;
  }

  public role(value: number = randome6()): number {
    if (!this.save) this.value = value;
    return this.value;
  }
}
