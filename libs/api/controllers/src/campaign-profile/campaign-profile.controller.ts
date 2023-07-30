import { CampaignProfileService } from '@master-bard/api/services';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CampaignProfile, Prisma } from '@prisma/client';

@ApiTags('campaignprofile')
@Controller('campaignprofile')
export class CampaignProfileController {

	constructor(private readonly campaignProfileService: CampaignProfileService) {}

	@Post()
	@ApiOperation({ summary: 'Create campaign profile' })
	@ApiResponse({ status: 201, description: 'The campaign profile has been successfully created.'})
	create(@Body() data: Prisma.CampaignProfileCreateInput): Promise<CampaignProfile> {
		return this.campaignProfileService.create(data);
	}

	@Get()
	@ApiOperation({ summary: 'Find all campaign profiles' })
	@ApiResponse({ status: 200, description: 'List of all campaign profiles.'})
	findAll(): Promise<CampaignProfile[]> {
		return this.campaignProfileService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Find campaign profile by ID' })
	@ApiParam({ name: 'id', description: 'Campaign Profile ID', type: String })
	@ApiResponse({ status: 200, description: 'Campaign profile details.'})
	@ApiResponse({ status: 404, description: 'Campaign profile not found.'})
	findOneById(@Param('id') id: string): Promise<CampaignProfile> {
		return this.campaignProfileService.findOneById(id);
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update campaign profile by ID' })
	@ApiParam({ name: 'id', description: 'Campaign Profile ID', type: String })
	@ApiResponse({ status: 200, description: 'Campaign profile updated successfully.'})
	@ApiResponse({ status: 404, description: 'Campaign profile not found.'})
	update(@Param('id') id: string, @Body() data: Prisma.CampaignProfileUpdateInput): Promise<CampaignProfile> {
		return this.campaignProfileService.update(id, data);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete campaign profile by ID' })
	@ApiParam({ name: 'id', description: 'Campaign Profile ID', type: String })
	@ApiResponse({ status: 200, description: 'Campaign profile deleted successfully.'})
	@ApiResponse({ status: 404, description: 'Campaign profile not found.'})
	remove(@Param('id') id: string): Promise<CampaignProfile> {
		return this.campaignProfileService.remove(id);
	}
}
