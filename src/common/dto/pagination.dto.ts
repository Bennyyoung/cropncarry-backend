import { IsInt, IsOptional, IsPositive } from "class-validator"
import { IsCardinal } from "common/decorators/is-cardinal.decorator"

export class PaginationDto {
  @IsInt()
  @IsCardinal()
  readonly limit: number

  @IsInt()
  @IsCardinal()
  readonly offset: number
}