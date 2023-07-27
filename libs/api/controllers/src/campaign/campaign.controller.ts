import { CampaignService } from '@master-bard/api/services';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Campaign, Prisma } from '@prisma/client';

@ApiTags('campaign')
@Controller('campaign')
export class CampaignController {

	constructor(private readonly campaignService: CampaignService) {}

	@Post()
	@ApiOperation({ summary: 'Create campaign' })
	@ApiResponse({ status: 201, description: 'The campaign has been successfully created.'})
	create(@Body() data: Prisma.CampaignCreateInput): Promise<Campaign> {
		return this.campaignService.create(data);
	}

	@Get()
	@ApiOperation({ summary: 'Find all campaigns' })
	@ApiResponse({ status: 200, description: 'List of all campaigns.'})
	findAll(): Promise<Campaign[]> {
		return this.campaignService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Find campaign by ID' })
	@ApiParam({ name: 'id', description: 'Campaign ID', type: String })
	@ApiResponse({ status: 200, description: 'Campaign details.'})
	@ApiResponse({ status: 404, description: 'Campaign not found.'})
	findOneById(@Param('id') id: string): Promise<Campaign> {
		return this.campaignService.findOneById(id);
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update campaign by ID' })
	@ApiParam({ name: 'id', description: 'Campaign ID', type: String })
	@ApiResponse({ status: 200, description: 'Campaign updated successfully.'})
	@ApiResponse({ status: 404, description: 'Campaign not found.'})
	update(@Param('id') id: string, @Body() data: Prisma.CampaignUpdateInput): Promise<Campaign> {
		return this.campaignService.update(id, data);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete campaign by ID' })
	@ApiParam({ name: 'id', description: 'Campaign ID', type: String })
	@ApiResponse({ status: 200, description: 'Campaign deleted successfully.'})
	@ApiResponse({ status: 404, description: 'Campaign not found.'})
	remove(@Param('id') id: string): Promise<Campaign> {
		return this.campaignService.remove(id);
	}
}