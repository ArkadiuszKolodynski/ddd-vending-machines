export abstract class Entity {
  readonly id: string = 'id';

  equals(object?: Entity): boolean {
    if (object == null || object == undefined) {
      return false;
    }

    if (!(object instanceof Entity)) {
      return false;
    }

    if (object === this) {
      return true;
    }

    return this.id === object.id;
  }
}