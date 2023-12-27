<script lang="ts">
	const characters = [
		{
			name: 'King of the Goballs',
			slug: 'king-of-the-gobballs'
		},
		{
			name: 'Queen of the Tofus',
			slug: 'queen-of-the-tofus'
		},
		{
			name: 'Anna Tommy',
			slug: 'anna-tommy'
		},
		{
			name: 'Bad Aboum',
			slug: 'bad-aboum'
		},
		{
			name: 'Bill Tell',
			slug: 'bill-tell'
		},
		{
			name: 'Lil Healey',
			slug: 'lil-healey'
		},
		{
			name: 'Kassius Kaos',
			slug: 'kassius-kaos'
		},
		{
			name: 'Oscar Kass',
			slug: 'oscar-kass'
		}
	];
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
	{#each characters as character}
		<li>
			<a href={`/characters/${character.slug}`}>{character.name}</a>
		</li>
	{/each}
</ul>
