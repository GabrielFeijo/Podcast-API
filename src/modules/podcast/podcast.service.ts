import { db } from '../../utils/prisma';
import { CreatePodcastInput } from './podcast.schema';

export async function createPodcast(data: CreatePodcastInput) {
	return db.podcast.create({ data });
}

export async function getPodcasts({
	category,
	episode,
}: {
	category?: string;
	episode?: string;
}) {
	return db.podcast.findMany({
		where: {
			AND: [
				category ? { categories: { has: category } } : {},
				episode ? { episode: { contains: episode } } : {},
			],
		},
	});
}

export async function getPodcast(id: string) {
	return db.podcast.findUnique({ where: { id } });
}

export async function deletePodcast(id: string) {
	const podcast = await db.podcast.findUnique({ where: { id } });

	if (!podcast) {
		throw new Error('Podcast not found');
	}

	return db.podcast.delete({ where: { id } });
}
