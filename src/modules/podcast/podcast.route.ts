import { FastifyInstance } from 'fastify';
import { $ref } from './podcast.schema';
import {
	createPodcastHandler,
	deletePodcastHandler,
	getPodcastHandler,
	getPodcastsHandler,
} from './podcast.controller';

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
		getPodcastHandler
	);

	fastify.delete(
		'/:id',
		{
			schema: {
				response: {
					200: $ref('podcastResponseSchema'),
				},
			},
		},
		deletePodcastHandler
	);
}

export default podcastRoutes;
