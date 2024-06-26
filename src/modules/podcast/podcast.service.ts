import { db } from '../../utils/prisma';
import { CreatePodcastInput } from './podcast.schema';

export async function createPodcast(data: CreatePodcastInput) {
	return db.podcast.create({ data });
}

export async function getPodcasts() {
	return db.podcast.findMany();
}

export async function getPodcast(id: string) {
	return db.podcast.findUnique({ where: { id } });
}
