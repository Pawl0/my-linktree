import { IsInt, IsString, IsUrl } from 'class-validator';

export class CreateLinkDto {
  @IsString()
  title: string;

  @IsUrl()
  url: string;

  @IsInt()
  userId: number;
}
