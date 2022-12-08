import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {CoreModule} from "./core/core.module";
import {ReminderModule} from "./reminder/reminder.module";
import {GraphQLModule} from "./graphql/graphql.module";

@Module({
    imports: [
        ConfigModule,
        CoreModule,
        GraphQLModule,
        ReminderModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
