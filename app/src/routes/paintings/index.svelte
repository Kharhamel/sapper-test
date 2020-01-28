<style>
	
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
	
</style>

<script context="module">
	export async function preload(page, session) {
		let r = await this.fetch(`paintings.json`);
		let paintings = await r.json();
		return { paintings };
	}
</script>

<script>
	import {Painting} from "../../models/painting";
	export let paintings;
	
	let form;
	
	function getCount() {
		const count = paintings.length;
		return count ? '('+count+')' : '';
	}
	
	let newPainting = new Painting();
	
	function add() {
		paintings.push(newPainting);
		newPainting = new Painting;
		paintings = paintings;
	}
	function del(i) {
		paintings.splice(i, 1);
		paintings = paintings;
	}
</script>

<svelte:head>
	<title>Liste des peintures</title>
</svelte:head>

<p><strong>Voici la page de gestion des peintures {getCount()}</strong></p>

<section>
	<h3>Liste</h3>
	<table>
		<tr>
			<th>Nom</th>
			<th>Description</th>
			<th>Aperçu</th>
			<th>Actions</th>
		</tr>
		{#each paintings as painting, i}
			<tr>
				<td>{painting.label}</td>
				<td>{painting.description}</td>
				<td>
					<img class="icon" alt='une joli peinture' src='{painting.src}'>
				</td>
				<td><button on:click={() => del(i)}>Supprimer</button></td>
			</tr>
		{/each}
	</table>
</section>
<section>
	<h3>Ajouter une peinture</h3>
	<form on:submit|preventDefault={add}>
		<section>
			<label for=""label>Nom: <input id="label" type="text" required bind:value={newPainting.label}></label>
		</section>
		<section>
			<label for="description">Description: <input id="description" type="text" required bind:value={newPainting.description}></label>
		</section>
		<section>
			<label for="src">Nom: <input id="src" type="text" required bind:value={newPainting.src}></label>
		</section>
		<section>
			<button type="submit">Ajouter</button>
		</section>
	</form>
</section>
