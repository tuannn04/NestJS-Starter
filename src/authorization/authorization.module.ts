import {Global, Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {CoreModule} from "../core/core.module";
import {AccountModule} from "../account/account.module";
import DatabaseConfiguration from "./config/database-configuration.config";
import {ConfigService} from "./service/config.service";
import {TokenService} from "./service/token.service";
import {AccountResolver} from "./resolver/account.resolver";

@Global()
@Module({
    imports: [
        ConfigModule.forRoot(),
        CoreModule,
        AccountModule,
        ...DatabaseConfiguration
    ],
    controllers: [
    ],
    providers: [
        ConfigService,
        TokenService,
        AccountResolver
    ]
})
export class AuthorizationModule {
}