import { Module } from '@nestjs/common';
import { PrismaService } from '@master-bard/prisma/api';
import { CampaignProfileController } from '@master-bard/api/controllers';
import { CampaignProfileService } from '@master-bard/api/services';

@Module({
  controllers: [CampaignProfileController],
  providers: [CampaignProfileService, PrismaService],
})
export class CampaignProfileModule {}
