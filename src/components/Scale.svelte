<script>
import { root, scale, tuning, scales, tunings } from '../stores/index.js';
import Grid from './grid.svelte';
</script>

<div class="scale">
  <Grid
		pitches={$tunings[$tuning]}
		scale={$scales[$scale]}
		root={$root} />
</div>
