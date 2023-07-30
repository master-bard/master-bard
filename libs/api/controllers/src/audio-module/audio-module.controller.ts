import { AudioModuleService } from '@master-bard/api/services';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AudioModule, Prisma } from '@prisma/client';

@ApiTags('audiomodule')
@Controller('audiomodule')
export class AudioModuleController {

	constructor(private readonly audioModuleService: AudioModuleService) {}

	@Post()
	@ApiOperation({ summary: 'Create audio module' })
	@ApiResponse({ status: 201, description: 'The audio module has been successfully created.'})
	create(@Body() data: Prisma.AudioModuleCreateInput): Promise<AudioModule> {
		return this.audioModuleService.create(data);
	}

	@Get()
	@ApiOperation({ summary: 'Find all audio modules' })
	@ApiResponse({ status: 200, description: 'List of all audio modules.'})
	findAll(): Promise<AudioModule[]> {
		return this.audioModuleService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Find audio module by ID' })
	@ApiParam({ name: 'id', description: 'Audio Module ID', type: String })
	@ApiResponse({ status: 200, description: 'Audio module details.'})
	@ApiResponse({ status: 404, description: 'Audio module not found.'})
	findOneById(@Param('id') id: string): Promise<AudioModule> {
		return this.audioModuleService.findOneById(id);
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update audio module by ID' })
	@ApiParam({ name: 'id', description: 'Audio Module ID', type: String })
	@ApiResponse({ status: 200, description: 'Audio module updated successfully.'})
	@ApiResponse({ status: 404, description: 'Audio module not found.'})
	update(@Param('id') id: string, @Body() data: Prisma.AudioModuleUpdateInput): Promise<AudioModule> {
		return this.audioModuleService.update(id, data);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete audio module by ID' })
	@ApiParam({ name: 'id', description: 'Audio Module ID', type: String })
	@ApiResponse({ status: 200, description: 'Audio module deleted successfully.'})
	@ApiResponse({ status: 404, description: 'Audio module not found.'})
	remove(@Param('id') id: string): Promise<AudioModule> {
		return this.audioModuleService.remove(id);
	}
}
