import { Field, ObjectType, Query, Resolver } from "@nestjs/graphql";

@ObjectType()
class HelloResponse {
    @Field()
    message: string;
}

@Resolver(() => HelloResponse)
export class AppResolver {
    @Query(() => HelloResponse)
    hello(): HelloResponse {
        return { message: "Hello World from api gateway via graphql!" };
    }
}