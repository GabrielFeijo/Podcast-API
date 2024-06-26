import * as z from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const podcastInput = {
	podcastName: z.string(),
	episode: z.string(),
	videoId: z.string(),
	cover: z.string(),
	link: z.string(),
	categories: z.array(z.string()),
};

const podcastGenerated = {
	id: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
};

const createPodcastSchema = z.object(podcastInput);

const podcastResponseSchema = z.object({
	...podcastInput,
	...podcastGenerated,
});

const podcastsResponseSchema = z.array(podcastResponseSchema);

export type CreatePodcastInput = z.infer<typeof createPodcastSchema>;

export const { schemas: podcastSchemas, $ref } = buildJsonSchemas({
	createPodcastSchema,
	podcastResponseSchema,
	podcastsResponseSchema,
});
