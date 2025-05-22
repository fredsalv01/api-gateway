import { Field, Mutation, ObjectType, Query, Resolver } from "@nestjs/graphql";
import { KafkaService } from "./kafka/kafka.service";

@ObjectType()
class HelloResponse {
    @Field()
    message: string;
}

@Resolver(() => HelloResponse)
export class AppResolver {

    constructor(
        private readonly kafkaService: KafkaService,
    ) {}

    @Query(() => HelloResponse)
    hello(): HelloResponse {
        return { message: "Hello World from api gateway via graphql!" };
    }

    @Mutation(() => Boolean)
    async createTransaction() {
        await this.kafkaService.emitTransaction({
            amount: 123,
        })
        return true;
    }
}