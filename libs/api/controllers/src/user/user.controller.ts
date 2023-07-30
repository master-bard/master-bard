import { UserService } from '@master-bard/api/services';
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { User, Prisma } from '@prisma/client';

@ApiTags('user')
@Controller('user')
export class UserController {

	constructor(private readonly userService: UserService) {}

	@Post()
	@ApiOperation({ summary: 'Create user' })
	@ApiResponse({ status: 201, description: 'The user has been successfully created.'})
	create(@Body() data: Prisma.UserCreateInput): Promise<User> {
		return this.userService.create(data);
	}

	@Get()
	@ApiOperation({ summary: 'Find all users' })
	@ApiResponse({ status: 200, description: 'List of all users.'})
	findAll(): Promise<User[]> {
		return this.userService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Find user by ID' })
	@ApiParam({ name: 'id', description: 'User ID', type: String })
	@ApiResponse({ status: 200, description: 'User details.'})
	@ApiResponse({ status: 404, description: 'User not found.'})
	findOneById(@Param('id') id: string): Promise<User> {
		return this.userService.findOneById(id);
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update user by ID' })
	@ApiParam({ name: 'id', description: 'User ID', type: String })
	@ApiResponse({ status: 200, description: 'User updated successfully.'})
	@ApiResponse({ status: 404, description: 'User not found.'})
	update(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput): Promise<User> {
		return this.userService.update(id, data);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete user by ID' })
	@ApiParam({ name: 'id', description: 'User ID', type: String })
	@ApiResponse({ status: 200, description: 'User deleted successfully.'})
	@ApiResponse({ status: 404, description: 'User not found.'})
	remove(@Param('id') id: string): Promise<User> {
		return this.userService.remove(id);
	}
}
