import { PrismaService } from '@master-bard/prisma/api';
import { Injectable } from '@nestjs/common';
import { Playlist, Prisma } from '@prisma/client';

@Injectable()
export class PlaylistService {

	constructor(private prismaService: PrismaService) {

		this.prismaService.playlist.count().then((c) => console.log({ playlists: c }))

	}

	create(data: Prisma.PlaylistCreateInput): Promise<Playlist> {
		return this.prismaService.playlist.create({ data });
	}

	findAll(): Promise<Playlist[]> {
		return this.prismaService.playlist.findMany();
	}

	findOneById(id: string) {
		return this.prismaService.playlist.findUniqueOrThrow({
			where: {
				id
			}
		});
	}

	update(id: string, data: Prisma.PlaylistUpdateInput) {
		return this.prismaService.playlist.update({
			where: {
				id
			},
			data
		});
	}

	remove(id: string) {
		return this.prismaService.playlist.delete({
			where: {
				id
			}
		});
	}
}
