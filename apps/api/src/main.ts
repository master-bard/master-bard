import morgan from 'morgan';
import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from '@master-bard/api/exceptions';
import { TransformInterceptor } from '@master-bard/api/interceptors';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(
		AppModule,
		new ExpressAdapter(),
		{
			cors: true,
		}
	);

	const configService = app.get(ConfigService);
	const port = configService.get<number>('API_PORT') || 3333;
	const prefix = configService.get<string>('API_PREFIX') ?? 'api';
	const reflector = app.get(Reflector);
	const options = new DocumentBuilder()
		.setTitle('MasterBard')
		.setDescription('Application for role-playing games')
		.setVersion('0.1')
		.addTag('MasterBard 🧙‍♂️')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api/documentation', app, document);

	app.use(morgan('combined')); // LOGGER

	app.useGlobalFilters(new HttpExceptionFilter());
	app.useGlobalInterceptors(
		new ClassSerializerInterceptor(reflector),
		new TransformInterceptor()
	);
	app.useGlobalPipes(new ValidationPipe());
	app.setGlobalPrefix(prefix);

	await app.listen(port);

	Logger.log(
		`🎲 Application is running on: http://localhost:${port}/${prefix}`
	);
	Logger.log(
		`👁️  Swagger at http://localhost:${port}/api/documentation`
	);
}

bootstrap();
