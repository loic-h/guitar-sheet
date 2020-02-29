<script>
import Cell from './Cell.svelte';

export let pitches;
const start = 1;
const end = 12
const range = end - start + 1;
</script>

<div class="grid">
  {#each pitches.reverse() as pitch, stringIndex}
    <div class="string">
      {#each Array(range) as _, cellIndex}
        <Cell inFirstString={stringIndex === 0}/>
      {/each}
    </div>
  {/each}
</div>

<style>
.grid {
  display: inline-flex;
  flex-direction: column;
  width: 80rem;
  max-width: 100%;
}

.string {
  display: inline-flex;
  border-bottom: var(--black) solid 1px;
}
</style>
