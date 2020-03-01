<script>
import Scale from '../components/Scale.svelte';
import { allNotes } from '../stores/index.js';

let root;
let scale;

const selectableNotes = $allNotes.map(a => a[0]);
</script>

<div class="scales">
  <div class="selector">
    <select bind:value={root}>
      {#each selectableNotes as note}
        <option value={note}>{note}</option>
      {/each}
    </select>
  </div>
  <Scale {root} />
</div>
