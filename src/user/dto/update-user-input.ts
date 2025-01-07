import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  @IsNumber()
  id: number;
  @Field()
  @IsString()
  @IsOptional()
  firstName?: string;
  @Field()
  @IsString()
  @IsOptional()
  lastName?: string;
}
