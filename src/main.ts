import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";

const PORT = [3000, 3001, 3002];

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({transform: true}));
    await startApp(app);
}

async function startApp(app, portIndex = 0) {
    const port = PORT[portIndex];
    if (!port) {
        app.close();
        return;
    }
    try {
        await app.listen(port);
    } catch (error) {
        await startApp(app, portIndex + 1);
    }
}

bootstrap();
