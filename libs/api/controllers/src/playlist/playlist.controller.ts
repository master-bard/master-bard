import { PlaylistService } from '@master-bard/api/services';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Playlist, Prisma } from '@prisma/client';

@ApiTags('playlist')
@Controller('playlist')
export class PlaylistController {

	constructor(private readonly playlistService: PlaylistService) {}

	@Post()
	@ApiOperation({ summary: 'Create playlist' })
	@ApiResponse({ status: 201, description: 'The playlist has been successfully created.'})
	create(@Body() data: Prisma.PlaylistCreateInput): Promise<Playlist> {
		return this.playlistService.create(data);
	}

	@Get()
	@ApiOperation({ summary: 'Find all playlists' })
	@ApiResponse({ status: 200, description: 'List of all playlists.'})
	findAll(): Promise<Playlist[]> {
		return this.playlistService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Find playlist by ID' })
	@ApiParam({ name: 'id', description: 'Playlist ID', type: String })
	@ApiResponse({ status: 200, description: 'Playlist details.'})
	@ApiResponse({ status: 404, description: 'Playlist not found.'})
	findOneById(@Param('id') id: string): Promise<Playlist> {
		return this.playlistService.findOneById(id);
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update playlist by ID' })
	@ApiParam({ name: 'id', description: 'Playlist ID', type: String })
	@ApiResponse({ status: 200, description: 'Playlist updated successfully.'})
	@ApiResponse({ status: 404, description: 'Playlist not found.'})
	update(@Param('id') id: string, @Body() data: Prisma.PlaylistUpdateInput): Promise<Playlist> {
		return this.playlistService.update(id, data);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete playlist by ID' })
	@ApiParam({ name: 'id', description: 'Playlist ID', type: String })
	@ApiResponse({ status: 200, description: 'Playlist deleted successfully.'})
	@ApiResponse({ status: 404, description: 'Playlist not found.'})
	remove(@Param('id') id: string): Promise<Playlist> {
		return this.playlistService.remove(id);
	}
}
