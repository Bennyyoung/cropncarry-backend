import { IsInt, IsPositive, IsString } from "class-validator";
import { IsCardinal } from "common/decorators/is-cardinal.decorator";


export class IdDto {
  @IsCardinal()
  id: number
}