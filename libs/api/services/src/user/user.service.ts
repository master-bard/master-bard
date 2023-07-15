import { PrismaService } from '@master-bard/prisma/api';
import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {

	constructor(private prismaService: PrismaService) {

		this.prismaService.user.count().then((c) => console.log({ users: c }))

	}

	create(data: Prisma.UserCreateInput): Promise<User> {
		return this.prismaService.user.create({ data });
	}

	findAll(): Promise<User[]> {
		return this.prismaService.user.findMany();
	}

	findOneById(id: string) {
		return this.prismaService.user.findUniqueOrThrow({
			where: {
				id
			}
		});
	}

	update(id: string, data: Prisma.UserUpdateInput) {
		return this.prismaService.user.update({
			where: {
				id
			},
			data
		});
	}

	remove(id: string) {
		return this.prismaService.user.delete({
			where: {
				id
			}
		});
	}
}
