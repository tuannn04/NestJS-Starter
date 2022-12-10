import {Query, Mutation, Resolver, Args} from "@nestjs/graphql"
import {AccountOutput} from "../output/account.output";
import {AccountService} from "../service/account.service";
import {AccountInput} from "../input/account.input";

@Resolver(of => AccountOutput)
export class AccountResolver {
    constructor(private accountService: AccountService) {
    }

    @Query(returns => AccountOutput)
    async account(@Args('id') id: string) {
        return await this.accountService.findById(id);
    }

    @Mutation(returns => AccountOutput)
    async createAccount(@Args('account') accountInput: AccountInput) {
        return await this.accountService.create(accountInput);
    }
}