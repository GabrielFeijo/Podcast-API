import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const podcasts = [
		{
			podcastName: 'Tech Talk',
			episode: 'Episode 1: Introduction to Tech',
			videoId: 'vid1',
			cover: 'https://example.com/cover1.jpg',
			link: 'https://example.com/video1',
			categories: ['Technology', 'Education'],
		},
		{
			podcastName: 'Health Hub',
			episode: 'Episode 2: Healthy Living',
			videoId: 'vid2',
			cover: 'https://example.com/cover2.jpg',
			link: 'https://example.com/video2',
			categories: ['Health', 'Wellness'],
		},
		{
			podcastName: 'Money Matters',
			episode: 'Episode 3: Personal Finance',
			videoId: 'vid3',
			cover: 'https://example.com/cover3.jpg',
			link: 'https://example.com/video3',
			categories: ['Finance', 'Education'],
		},
		{
			podcastName: 'History Hour',
			episode: 'Episode 4: Ancient Civilizations',
			videoId: 'vid4',
			cover: 'https://example.com/cover4.jpg',
			link: 'https://example.com/video4',
			categories: ['History', 'Education'],
		},
		{
			podcastName: 'Science Show',
			episode: 'Episode 5: Space Exploration',
			videoId: 'vid5',
			cover: 'https://example.com/cover5.jpg',
			link: 'https://example.com/video5',
			categories: ['Science', 'Education'],
		},
		{
			podcastName: 'Book Club',
			episode: 'Episode 6: Bestsellers',
			videoId: 'vid6',
			cover: 'https://example.com/cover6.jpg',
			link: 'https://example.com/video6',
			categories: ['Books', 'Discussion'],
		},
		{
			podcastName: 'Music Mix',
			episode: 'Episode 7: Indie Hits',
			videoId: 'vid7',
			cover: 'https://example.com/cover7.jpg',
			link: 'https://example.com/video7',
			categories: ['Music', 'Entertainment'],
		},
		{
			podcastName: 'Film Fanatics',
			episode: 'Episode 8: Movie Reviews',
			videoId: 'vid8',
			cover: 'https://example.com/cover8.jpg',
			link: 'https://example.com/video8',
			categories: ['Movies', 'Reviews'],
		},
		{
			podcastName: 'Travel Tales',
			episode: 'Episode 9: Exotic Destinations',
			videoId: 'vid9',
			cover: 'https://example.com/cover9.jpg',
			link: 'https://example.com/video9',
			categories: ['Travel', 'Adventure'],
		},
		{
			podcastName: 'Sports Spotlight',
			episode: 'Episode 10: Football Highlights',
			videoId: 'vid10',
			cover: 'https://example.com/cover10.jpg',
			link: 'https://example.com/video10',
			categories: ['Sports', 'Highlights'],
		},
	];

	for (const podcast of podcasts) {
		await prisma.podcast.create({
			data: podcast,
		});
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
