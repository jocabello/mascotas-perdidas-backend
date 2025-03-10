import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AnimalGender, AnimalState, AnimalType } from './animal-type.enum';
import { Owner } from 'src/owner/entities/owner.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column({
    type: 'enum',
    enum: AnimalType,
  })
  type: AnimalType;

  @Column('text')
  breed: string;

  @Column({
    type: 'enum',
    enum: AnimalGender,
  })
  gender: AnimalGender;

  @Column('text')
  color: string;

  @Column('text', { array: true })
  pictures: string[];

  @Column('int')
  age: number;

  @Column('boolean')
  isAgeExact: boolean;

  @Column('int')
  weight: number;

  @Column('boolean')
  isWeightExact: boolean;

  @Column('Date')
  dateOfBirth: Date;

  @Column('text')
  description: string;

  @Column('date', { array: true })
  lastSeen: Date[];

  @Column('boolean')
  hasMicrochip: boolean;

  @Column('text')
  microchipId: string;

  @Column('boolean')
  isVaccinated: boolean;

  @Column('boolean')
  isSterilized: boolean;

  @Column('text')
  specialNeeds: string;

  @Column({
    type: 'enum',
    enum: AnimalState,
    array: true,
  })
  state: AnimalState[];

  @ManyToOne(() => Owner, (owner) => owner.animals)
  owner: Owner;

  @Column('text')
  comment: string;

  @Column('simple-json', { array: true })
  geolocations: Geolocation[];
}
