import { Cube } from './cube';

export class CubeSet {
  public cubes: Array<Cube>;

  constructor() {
    this.cubes = Array.from({ length: 5 }, () => new Cube());
  }

  public roleDices(): Array<number> {
    this.cubes.forEach((cube) => cube.role());
    return this.getDiceValues();
  }

  public getDiceValues(): Array<number> {
    return this.cubes.map((cube) => cube.value);
  }
}
