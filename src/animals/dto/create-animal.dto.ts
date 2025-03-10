import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  isString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Owner } from 'src/owner/entities/owner.entity';
import {
  AnimalGender,
  AnimalState,
  AnimalType,
} from '../entities/animal-type.enum';

export class CreateAnimalDto {
  @IsString()
  @MinLength(1)
  @IsOptional()
  name?: string;

  @IsEnum(AnimalType)
  type: AnimalType;

  @IsOptional()
  breed?: string;

  @IsEnum(AnimalGender)
  @IsOptional()
  gender?: AnimalGender;

  @IsString()
  @MinLength(1)
  color: string;

  @IsString({ each: true })
  @IsOptional()
  pictures?: string[];

  @IsNumber()
  @IsPositive()
  @IsOptional()
  age?: number;

  @IsBoolean()
  @IsOptional()
  isAgeExact?: boolean;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  weight?: number;

  @IsBoolean()
  @IsOptional()
  isWeightExact?: boolean;

  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;

  @IsString()
  @MinLength(1)
  @IsOptional()
  description?: string;

  @IsDate({ each: true })
  @IsOptional()
  lastSeen?: Date[];

  @IsBoolean()
  @IsOptional()
  hasMicrochip?: boolean;

  @IsString()
  @IsOptional()
  microchipId?: string;

  @IsBoolean()
  @IsOptional()
  isVaccinated?: boolean;

  @IsBoolean()
  @IsOptional()
  isSterilized?: boolean;

  @IsString()
  @MinLength(1)
  @IsOptional()
  specialNeeds?: string;

  @IsEnum(AnimalState, { each: true })
  @IsOptional()
  state?: AnimalState[];

  @ValidateNested()
  @Type(() => Owner)
  @IsOptional()
  owner?: Owner;

  @IsString()
  @MinLength(1)
  @IsOptional()
  comment?: string;

  @ValidateNested({ each: true })
  @Type(() => Geolocation)
  @IsOptional()
  geolocations?: Geolocation[];
}
