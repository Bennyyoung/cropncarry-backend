import { IS_LENGTH, IsEmail, IsPhoneNumber, IsString, Length, isString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @Length(2, 50)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsPhoneNumber('NG')
  readonly phone: string;

  @IsString()
  readonly password: string;
}
