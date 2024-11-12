import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  id: number;
  @Field()
  firstName?: string;
  @Field()
  lastName?: string;
}
