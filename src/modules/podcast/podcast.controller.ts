import { FastifyReply, FastifyRequest } from 'fastify';
import { CreatePodcastInput } from './podcast.schema';
import {
	createPodcast,
	deletePodcast,
	getPodcast,
	getPodcasts,
} from './podcast.service';

export async function createPodcastHandler(
	request: FastifyRequest<{ Body: CreatePodcastInput }>,
	reply: FastifyReply
) {
	const podcast = await createPodcast(request.body);

	return reply.code(201).send(podcast);
}

export async function getPodcastsHandler(
	request: FastifyRequest<{
		Querystring: { category: string; episode: string };
	}>
) {
	const { category, episode } = request.query;

	const podcasts = await getPodcasts({
		category,
		episode,
	});

	return podcasts;
}

export async function getPodcastHandler(
	request: FastifyRequest<{ Params: { id: string } }>
) {
	const podcast = await getPodcast(request.params.id);

	return podcast;
}

export async function deletePodcastHandler(
	request: FastifyRequest<{ Params: { id: string } }>,
	reply: FastifyReply
) {
	try {
		const podcast = await deletePodcast(request.params.id);
		return reply.code(200).send(podcast);
	} catch (error) {
		reply.code(404).send(error);
	}
}
