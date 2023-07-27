import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { 
	AppBlobModule,
	AudioModuleModule,
	CampaignModule,
	CampaignProfileModule,
	NoteModule, 
	PlaylistModule,
	UserModule
} from '@master-bard/api/features';

@Module({
	imports: [
		ConfigModule,
		AppBlobModule,
		AudioModuleModule,
		CampaignModule,
		CampaignProfileModule,
		NoteModule,
		PlaylistModule,
		UserModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
