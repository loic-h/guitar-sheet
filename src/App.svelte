<script>
	import Grid from "./grid.svelte";

	const pitches = ['e', 'a', 'd', 'g', 'b', 'e'];
</script>

<main>
	<Grid
		start={1}
		end={12}
		pitches={pitches} />
</main>

<style>
</style>
