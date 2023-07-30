import { Module } from '@nestjs/common';
import { PrismaService } from '@master-bard/prisma/api';
import { NoteController } from '@master-bard/api/controllers';
import { NoteService } from '@master-bard/api/services';

@Module({
  controllers: [NoteController],
  providers: [NoteService, PrismaService],
})
export class NoteModule {}
