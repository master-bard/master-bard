import { PrismaService } from '@master-bard/prisma/api';
import { Injectable } from '@nestjs/common';
import { AudioModule, Prisma } from '@prisma/client';

@Injectable()
export class AudioModuleService {

	constructor(private prismaService: PrismaService) {

		this.prismaService.audioModule.count().then((c) => console.log({ audioModules: c }))

	}

	create(data: Prisma.AudioModuleCreateInput): Promise<AudioModule> {
		return this.prismaService.audioModule.create({ data });
	}

	findAll(): Promise<AudioModule[]> {
		return this.prismaService.audioModule.findMany();
	}

	findOneById(id: string) {
		return this.prismaService.audioModule.findUniqueOrThrow({
			where: {
				id
			}
		});
	}

	update(id: string, data: Prisma.AudioModuleUpdateInput) {
		return this.prismaService.audioModule.update({
			where: {
				id
			},
			data
		});
	}

	remove(id: string) {
		return this.prismaService.audioModule.delete({
			where: {
				id
			}
		});
	}
}
