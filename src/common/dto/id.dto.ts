import { IsInt, IsPositive, IsString } from "class-validator";


export class IdDto {
  @IsInt()
  @IsPositive()
  id: number
}