import { Module } from '@nestjs/common';
import { PrismaService } from '@master-bard/prisma/api';
import { PlaylistController } from '@master-bard/api/controllers';
import { PlaylistService } from '@master-bard/api/services';

@Module({
  controllers: [PlaylistController],
  providers: [PlaylistService, PrismaService],
})
export class PlaylistModule {}
