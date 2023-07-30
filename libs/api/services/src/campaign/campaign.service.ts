import { PrismaService } from '@master-bard/prisma/api';
import { Injectable } from '@nestjs/common';
import { Campaign, Prisma } from '@prisma/client';

@Injectable()
export class CampaignService {

	constructor(private prismaService: PrismaService) {

		this.prismaService.campaign.count().then((c) => console.log({ campaigns: c }))

	}

	create(data: Prisma.CampaignCreateInput): Promise<Campaign> {
		return this.prismaService.campaign.create({ data });
	}

	findAll(): Promise<Campaign[]> {
		return this.prismaService.campaign.findMany();
	}

	findOneById(id: string) {
		return this.prismaService.campaign.findUniqueOrThrow({
			where: {
				id
			}
		});
	}

	update(id: string, data: Prisma.CampaignUpdateInput) {
		return this.prismaService.campaign.update({
			where: {
				id
			},
			data
		});
	}

	remove(id: string) {
		return this.prismaService.campaign.delete({
			where: {
				id
			}
		});
	}
}
