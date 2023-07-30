import { AppBlobService } from '@master-bard/api/services';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AppBlob, Prisma } from '@prisma/client';

@ApiTags('appblob')
@Controller('appblob')
export class AppBlobController {

	constructor(private readonly appBlobService: AppBlobService) { }

	@Post()
	@ApiOperation({ summary: 'Create app blob' })
	@ApiResponse({ status: 201, description: 'The app blob has been successfully created.' })
	create(@Body() data: Prisma.AppBlobCreateInput): Promise<AppBlob> {
		return this.appBlobService.create(data);
	}

	@Get()
	@ApiOperation({ summary: 'Find all app blobs' })
	@ApiResponse({ status: 200, description: 'List of all app blobs.' })
	findAll(): Promise<AppBlob[]> {
		return this.appBlobService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Find app blob by ID' })
	@ApiParam({ name: 'id', description: 'App Blob ID', type: String })
	@ApiResponse({ status: 200, description: 'App blob details.' })
	@ApiResponse({ status: 404, description: 'App blob not found.' })
	findOneById(@Param('id') id: string): Promise<AppBlob> {
		return this.appBlobService.findOneById(id);
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update app blob by ID' })
	@ApiParam({ name: 'id', description: 'App Blob ID', type: String })
	@ApiResponse({ status: 200, description: 'App blob updated successfully.' })
	@ApiResponse({ status: 404, description: 'App blob not found.' })
	update(@Param('id') id: string, @Body() data: Prisma.AppBlobUpdateInput): Promise<AppBlob> {
		return this.appBlobService.update(id, data);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete app blob by ID' })
	@ApiParam({ name: 'id', description: 'App Blob ID', type: String })
	@ApiResponse({ status: 200, description: 'App blob deleted successfully.' })
	@ApiResponse({ status: 404, description: 'App blob not found.' })
	remove(@Param('id') id: string): Promise<AppBlob> {
		return this.appBlobService.remove(id);
	}
}