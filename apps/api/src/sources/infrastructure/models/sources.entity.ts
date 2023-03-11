import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'sources' })
export class SourceModel {
  @PrimaryKey({ type: 'uuid' })
  id: number;

  @Property()
  name: string;

  @Property()
  url: string;
}
