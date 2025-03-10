// filepath: /home/jirafa/source/mascotas-perdidas-backend/src/owner/entities/owner.entity.ts
import { Animal } from 'src/animals/entities/animal.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  fullName: string;

  @Column('text')
  mail: string;

  @Column('text')
  phoneNumber: string;

  @Column('text')
  address: string;

  @OneToMany(() => Animal, (animal) => animal.owner)
  animals: Animal[];
}
