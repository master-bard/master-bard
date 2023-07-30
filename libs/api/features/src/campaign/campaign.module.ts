import { Module } from '@nestjs/common';
import { PrismaService } from '@master-bard/prisma/api';
import { CampaignController } from '@master-bard/api/controllers';
import { CampaignService } from '@master-bard/api/services';

@Module({
  controllers: [CampaignController],
  providers: [CampaignService, PrismaService],
})
export class CampaignModule {}
