import { PrismaService } from '@master-bard/prisma/api';
import { Injectable } from '@nestjs/common';
import { CampaignProfile, Prisma } from '@prisma/client';

@Injectable()
export class CampaignProfileService {

	constructor(private prismaService: PrismaService) {

		this.prismaService.campaignProfile.count().then((c) => console.log({ campaignProfiles: c }))

	}

	create(data: Prisma.CampaignProfileCreateInput): Promise<CampaignProfile> {
		return this.prismaService.campaignProfile.create({ data });
	}

	findAll(): Promise<CampaignProfile[]> {
		return this.prismaService.campaignProfile.findMany();
	}

	findOneById(id: string) {
		return this.prismaService.campaignProfile.findUniqueOrThrow({
			where: {
				id
			}
		});
	}

	update(id: string, data: Prisma.CampaignProfileUpdateInput) {
		return this.prismaService.campaignProfile.update({
			where: {
				id
			},
			data
		});
	}

	remove(id: string) {
		return this.prismaService.campaignProfile.delete({
			where: {
				id
			}
		});
	}
}
