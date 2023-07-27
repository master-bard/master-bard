import { Module } from '@nestjs/common';
import { PrismaService } from '@master-bard/prisma/api';
import { AppBlobController } from '@master-bard/api/controllers';
import { AppBlobService } from '@master-bard/api/services';

@Module({
  controllers: [AppBlobController],
  providers: [AppBlobService, PrismaService],
})
export class AppBlobModule {}
