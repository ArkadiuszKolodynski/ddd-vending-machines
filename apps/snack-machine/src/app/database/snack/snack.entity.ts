import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'snack' })
export default class SnackEntity extends BaseEntity {
  @PrimaryKey({ type: 'uuid' })
  id!: string;

  @Property()
  name!: string;
}
