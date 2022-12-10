import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {CoreModule} from "./core/core.module";
import {GraphQLModule} from "./graphql/graphql.module";
import {AccountModule} from "./account/account.module";
import {AuthorizationModule} from "./authorization/authorization.module";
import {ReminderModule} from "./reminder/reminder.module";

@Module({
    imports: [
        ConfigModule,
        CoreModule,
        GraphQLModule,
        AccountModule,
        AuthorizationModule,
        ReminderModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
