<script>
export let inFirstString = false;
</script>

<div
  class="cell"
  class:in-first-string={inFirstString}
/>

<style>
.cell {
  flex-grow: 1;
  padding-top: var(--cell-ratio);
}

.cell:not(.in-first-string) {
  border-left: var(--black) solid 3px;
}

.cell:not(.in-first-string):last-child {
  border-right: var(--black) solid 3px;
}
</style>
