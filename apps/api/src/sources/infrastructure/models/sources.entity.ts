import { Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class SourceModel {
  @PrimaryKey()
  id: number;
}
