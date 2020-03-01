<script>
import { push, querystring } from 'svelte-spa-router';
import qs from 'qs';
import Scale from '../components/Scale.svelte';
import { allNotes, scales } from '../stores/index.js';

const queries = qs.parse($querystring);

let root = queries.root || Object.keys($scales)[0];
let scale = queries.scale || $allNotes[0][0];

const selectableNotes = $allNotes.map(a => a[0]);

function onChange() {
  push(`/scales?scale=${scale}&root=${root}`);
};
</script>

<div class="scales">
  <div class="selector">
    <select bind:value={root} on:change={onChange}>
      {#each selectableNotes as note}
        <option value={note}>{note}</option>
      {/each}
    </select>
    <select bind:value={scale} on:change={onChange}>
      {#each Object.keys($scales) as key}
        <option value={key}>{$scales[key].label}</option>
      {/each}
    </select>
  </div>
  <Scale {root} scaleKey={scale} />
</div>
