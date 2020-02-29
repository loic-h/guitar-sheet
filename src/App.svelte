<script>
	import Grid from "./grid.svelte";

	const pitches = ['e', 'a', 'd', 'g', 'b', 'e'];
	const scales = {
		major: {
			label: "Major",
			intervals: [
				2, 2, 1, 2, 2, 2
			]
		}
	};
	const root = "c";
</script>

<main>
	<Grid
		start={1}
		end={12}
		pitches={pitches}
		scale={scales.major}
		root={root} />
</main>

<style>
</style>
