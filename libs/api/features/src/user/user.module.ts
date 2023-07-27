import { Module } from '@nestjs/common';
import { PrismaService } from '@master-bard/prisma/api';
import { UserController } from '@master-bard/api/controllers';
import { UserService } from '@master-bard/api/services';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
