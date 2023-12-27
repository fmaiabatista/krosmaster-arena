import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params.slug === 'king-of-the-gobballs') {
		const character = {
			name: 'King of the Goballs'
		};
		return { title: character.name, content: `This is the page for character: ${character.name}` };
	} else if (params.slug === 'queen-of-the-tofus') {
		const character = {
			name: 'Queen of the Tofus'
		};
		return { title: character.name, content: `This is the page for character: ${character.name}` };
	} else if (params.slug === 'anna-tommy') {
		const character = {
			name: 'Anna Tommy'
		};
		return { title: character.name, content: `This is the page for character: ${character.name}` };
	} else if (params.slug === 'bad-aboum') {
		const character = {
			name: 'Bad Aboum'
		};
		return { title: character.name, content: `This is the page for character: ${character.name}` };
	} else if (params.slug === 'bill-tell') {
		const character = {
			name: 'Bill Tell'
		};
		return { title: character.name, content: `This is the page for character: ${character.name}` };
	} else if (params.slug === 'lil-healey') {
		const character = {
			name: 'Lil Healey'
		};
		return { title: character.name, content: `This is the page for character: ${character.name}` };
	} else if (params.slug === 'kassius-kaos') {
		const character = {
			name: 'Kassius Kaos'
		};
		return { title: character.name, content: `This is the page for character: ${character.name}` };
	} else if (params.slug === 'oscar-kass') {
		const character = {
			name: 'Oscar Kass'
		};
		return { title: character.name, content: `This is the page for character: ${character.name}` };
	} else {
		// Handle unknown slug
		return { title: 'Not Found', content: 'Character not found.' };
	}
	error(404, 'Not found');
};
