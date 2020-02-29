<script>
const pitches = ['e', 'a', 'd', 'g', 'b', 'e'];
const start = 1;
const end = 12
const range = end - start + 1;
</script>

<div class="grid">
  {#each ['e', 'a', 'd', 'g', 'b', 'e'] as pitch}
    <div class="string">
      {#each Array(range) as _, i}
        <div class="cell"></div>
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
  border-bottom: var(--black) solid 2px;
}

.string:first-child {
  border-top: var(--black) solid 2px;
}

.cell {
  flex-grow: 1;
  padding-top: 2%;
  border-left: var(--black) solid 3px;
}

.cell:last-child {
  border-right: var(--black) solid 3px;
}
</style>
