import { PrismaService } from '@master-bard/prisma/api';
import { Injectable } from '@nestjs/common';
import { AppBlob, Prisma } from '@prisma/client';

@Injectable()
export class AppBlobService {

	constructor(private prismaService: PrismaService) {

		this.prismaService.appBlob.count().then((c) => console.log({ appBlobs: c }))

	}

	create(data: Prisma.AppBlobCreateInput): Promise<AppBlob> {
		return this.prismaService.appBlob.create({ data });
	}

	findAll(): Promise<AppBlob[]> {
		return this.prismaService.appBlob.findMany();
	}

	findOneById(id: string) {
		return this.prismaService.appBlob.findUniqueOrThrow({
			where: {
				id
			}
		});
	}

	update(id: string, data: Prisma.AppBlobUpdateInput) {
		return this.prismaService.appBlob.update({
			where: {
				id
			},
			data
		});
	}

	remove(id: string) {
		return this.prismaService.appBlob.delete({
			where: {
				id
			}
		});
	}
}
