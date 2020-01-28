<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	
	table {
		width: 100%;
		border-collapse: collapse;
	}
	
	table, th, td {
		border: 1px solid black;
	}

	img.icon {
		width: 50px;
		height: 50px;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script context="module">
	export async function preload(page, session) {
		let r = await this.fetch(`paintings.json`);
		let paintings = await r.json();
		return { paintings };
	}
</script>

<script>
	export let paintings;
	
	export function getCount() {
		const count = paintings.length;
		return count ? '('+count+')' : '';
	}
</script>

<svelte:head>
	<title>Liste des peintures</title>
</svelte:head>

<p><strong>Voici la liste des peintures {getCount()}</strong></p>

<table>
	<tr>
		<th>Nom</th>
		<th>Description</th>
		<th>Aperçu</th>
	</tr>
	{#each paintings as painting}
		<tr>
			<td>{painting.label}</td>
			<td>{painting.description}</td>
			<td>
				<img class="icon" alt='peinture' src='{painting.src}'>
			</td>
		</tr>
	{/each}
</table>
<ul>

</ul>
