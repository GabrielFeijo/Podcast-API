import Fastify from 'fastify';
import * as dotenv from 'dotenv';
import { podcastSchemas } from './modules/podcast/podcast.schema';
import podcastRoutes from './modules/podcast/podcast.route';

dotenv.config();

const fastify = Fastify();

fastify.get('/', async () => {
	return { message: 'API is up and running' };
});

async function main() {
	for (const schema of [...podcastSchemas]) {
		fastify.addSchema(schema);
	}

	fastify.register(podcastRoutes, { prefix: 'api/podcasts' });

	try {
		await fastify.listen({ port: 3000, host: '0.0.0.0' });
		console.log('Server listening at http://localhost:3000');
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

main();
