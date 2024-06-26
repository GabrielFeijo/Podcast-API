import { FastifyInstance } from 'fastify';
import { $ref } from './podcast.schema';
import { createPodcastHandler, getPodcastsHandler } from './podcast.controller';
import { getPodcast } from './podcast.service';

async function podcastRoutes(fastify: FastifyInstance) {
	fastify.post(
		'/',
		{
			schema: {
				body: $ref('createPodcastSchema'),
				response: {
					201: $ref('podcastResponseSchema'),
				},
			},
		},
		createPodcastHandler
	);

	fastify.get(
		'/',
		{
			schema: {
				response: {
					200: $ref('podcastsResponseSchema'),
				},
			},
		},
		getPodcastsHandler
	);

	fastify.get(
		'/:id',
		{
			schema: {
				response: {
					200: $ref('podcastResponseSchema'),
				},
			},
		},
		async (request: any, reply) => {
			const { id } = request.params;
			const podcast = await getPodcast(id);
			reply.send(podcast);
		}
	);
}

export default podcastRoutes;
