<script>
import Cell from './Cell.svelte';
import { allNotes, marks } from '../stores/index.js';

export let matrix = [];
export let startFret = 0;
export let endFret = 0;

const range = endFret - startFret + 1;

const getMark = index => {
  const mark = $marks.find(el => {
    return index + 1 === el.step
      || (index > $allNotes.length && (index + 1) % $allNotes.length === el.step);
  });
  return mark ? ` ${mark.type}` : "";
}
</script>

<div class="grid">
  {#each matrix.reverse() as pitch, stringIndex}
    <div class="string">
      {#each pitch as item}
        <Cell
          inFirstString={stringIndex === 0}
          notes={item.notes}
          noteType={item.type} />
      {/each}
    </div>
  {/each}
  <div class="frets">
    {#each Array(range) as _, cellIndex}
      <div class="fret{ getMark(cellIndex)}" />
    {/each}
  </div>
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

.frets {
  display: inline-flex;
  flex-grow: 1;
}

.fret {
  position: relative;
  display: flex;
  flex-grow: 1;
  margin-top: 2rem;
  justify-content: center;
}

.single:before,
.double:before,
.double:after {
  --size: 10%;
  content: '';
  border: solid 1px var(--black);
  border-radius: 50%;
  width: var(--size);
  height: 0;
  padding-top: var(--size);
  margin: 0 0.2rem;
}
</style>
