
import { NoteService } from '@master-bard/api/services';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Note, Prisma } from '@prisma/client';

@ApiTags('note')
@Controller('note')
export class NoteController {

	constructor(private readonly noteService: NoteService) {}

	@Post()
	@ApiOperation({ summary: 'Create note' })
	@ApiResponse({ status: 201, description: 'The note has been successfully created.'})
	create(@Body() data: Prisma.NoteCreateInput): Promise<Note> {
		return this.noteService.create(data);
	}

	@Get()
	@ApiOperation({ summary: 'Find all notes' })
	@ApiResponse({ status: 200, description: 'List of all notes.'})
	findAll(): Promise<Note[]> {
		return this.noteService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Find note by ID' })
	@ApiParam({ name: 'id', description: 'Note ID', type: String })
	@ApiResponse({ status: 200, description: 'Note details.'})
	@ApiResponse({ status: 404, description: 'Note not found.'})
	findOneById(@Param('id') id: string): Promise<Note> {
		return this.noteService.findOneById(id);
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update note by ID' })
	@ApiParam({ name: 'id', description: 'Note ID', type: String })
	@ApiResponse({ status: 200, description: 'Note updated successfully.'})
	@ApiResponse({ status: 404, description: 'Note not found.'})
	update(@Param('id') id: string, @Body() data: Prisma.NoteUpdateInput): Promise<Note> {
		return this.noteService.update(id, data);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete note by ID' })
	@ApiParam({ name: 'id', description: 'Note ID', type: String })
	@ApiResponse({ status: 200, description: 'Note deleted successfully.'})
	@ApiResponse({ status: 404, description: 'Note not found.'})
	remove(@Param('id') id: string): Promise<Note> {
		return this.noteService.remove(id);
	}
}
