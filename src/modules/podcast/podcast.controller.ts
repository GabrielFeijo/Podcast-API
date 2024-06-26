import { FastifyReply, FastifyRequest } from 'fastify';
import { CreatePodcastInput } from './podcast.schema';
import { createPodcast, getPodcasts } from './podcast.service';

export async function createPodcastHandler(
	request: FastifyRequest<{ Body: CreatePodcastInput }>,
	reply: FastifyReply
) {
	const podcast = await createPodcast(request.body);

	return reply.code(201).send(podcast);
}

export async function getPodcastsHandler() {
	const podcasts = await getPodcasts();

	return podcasts;
}
