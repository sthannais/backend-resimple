import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'companies' })
export class Company {
  @ObjectIdColumn()
  id: string;

  @Column()
  company_id: number;

  @Column()
  area_id: string;

  @Column()
  rut_trabajador: string;

  @Column()
  name_worker: string;

  @Column()
  age: number;

  @Column()
  profesion: string;

  @Column()
  position: string;
}
