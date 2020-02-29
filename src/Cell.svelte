<script>
import Note from "./Note.svelte";

export let inFirstString = false;
export let notes = [];
export let noteType;
</script>

<div
  class="cell"
  class:in-first-string={inFirstString}
>
  {#if noteType}
    <div class="note">
      <Note type={noteType} />
    </div>
  {/if}
</div>

<style>
.cell {
  position: relative;
  flex-grow: 1;
  padding-top: var(--cell-ratio);
  border-left: var(--black) solid 2px;
}

.cell.in-first-string {
  border-color: transparent;
}

.cell:last-child {
  border-right: transparent solid 2px;
}

.cell:not(.in-first-string):last-child {
  border-color: var(--black);
}

.note {
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
