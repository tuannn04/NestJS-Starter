import {Module, Global, NestModule, MiddlewareConsumer} from '@nestjs/common';

import {ControllerLoggerMiddleware} from "./middleware/controller-logger.middleware"

@Global()
@Module({
    imports: [],
    controllers: [],
    providers: []
})
export class CoreModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ControllerLoggerMiddleware).forRoutes('*');
    }
}