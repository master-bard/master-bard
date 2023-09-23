import { PrismaService } from '@master-bard/prisma/api';
import { Injectable } from '@nestjs/common';
import { Note, Prisma } from '@prisma/client';

@Injectable()
export class NoteService {

	constructor(private prismaService: PrismaService) {

		this.prismaService.note.count().then((c) => console.log({ notes: c }))

	}

	create(data: Prisma.NoteCreateInput): Promise<Note> {
		return this.prismaService.note.create({ data });
	}

	findAll(): Promise<Note[]> {
		return this.prismaService.note.findMany({
			include: {
				user: true,
			}
		});
	}

	findOneById(id: string) {
		return this.prismaService.note.findUniqueOrThrow({
			where: {
				id
			}
		});
	}

	update(id: string, data: Prisma.NoteUpdateInput) {
		return this.prismaService.note.update({
			where: {
				id
			},
			data
		});
	}

	remove(id: string) {
		return this.prismaService.note.delete({
			where: {
				id
			}
		});
	}
}
