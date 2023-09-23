// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

// TODO: GET DATA FROM .env
async function main() {
	// create two dummy articles
	const sysAdmin = await prisma.user.upsert({
		where: { username: 'SUPER_ADMIN' },
		update: {},
		create: {
			username: 'SUPER_ADMIN',
			email: 'your@email.com',
			password: 'your hashed password',
			role: 'SYS_ADMIN',
		},
	});

	const user = await prisma.user.upsert({
		where: { username: 'normal_user' },
		update: {
			note: {
				create: {
					name: 'some name'
				}
			}
		},
		create: {
			username: 'normal_user',
			email: 'your2@email.com',
			password: 'your hashed password ftw',
			note: {
				create: {
					name: 'a blob name',
				}
			}
		},
	});

	console.log({ sysAdmin, user });
}

// execute the main function
main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		// close Prisma Client at the end
		await prisma.$disconnect();
	});