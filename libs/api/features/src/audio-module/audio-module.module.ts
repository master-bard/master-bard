import { Module } from '@nestjs/common';
import { PrismaService } from '@master-bard/prisma/api';
import { AudioModuleController } from '@master-bard/api/controllers';
import { AudioModuleService } from '@master-bard/api/services';

@Module({
  controllers: [AudioModuleController],
  providers: [AudioModuleService, PrismaService],
})
export class AudioModuleModule {}
