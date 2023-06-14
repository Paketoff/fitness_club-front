// import { Transform } from "class-transformer";
// import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Matches, MaxLength, MinLength, ValidateNested } from "class-validator";


// export class UserDTO {

//   @IsOptional()
//   @IsInt()
//   id_user: number;

//   @IsString()
//   @IsNotEmpty()
//   @MaxLength(45)
//   name: string;

//   @IsString()
//   @IsNotEmpty()
//   @MaxLength(45)
//   surname: string;

//   @IsString()
//   @IsEmail()
//   @IsNotEmpty()
//   @MaxLength(45)
//   email: string;

//   @IsString()
//   @IsNotEmpty()
//   @MaxLength(12)
//   @MinLength(10)
//   phone: string;

//   @MaxLength(255)
//   @IsNotEmpty()
//   password: string;

//   @IsOptional()
//   @IsInt()
//   @Transform(({ value }) => value === undefined || value === '' ? 3 : parseInt(value, 30))
//   user_role_id: number;

//   @IsOptional()
//   @IsInt()
//   @Transform(({ value }) => value === undefined || value === '' ? 1 : parseInt(value, 10))
//   user_status_id: number;

//   @IsOptional()
//   @IsInt()
//   @Transform(({ value }) => value === undefined || value === '' ? 1 : parseInt(value, 10))
//   user_gender_id: number;
// }