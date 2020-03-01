<script>
export let type;
export let notes;

const title = notes.join("/");
</script>

<div class="note {type}" title={title}/>

<style>
.note {
  --size: 35%;
  border-radius: 50%;
  width: var(--size);
  height: 0;
  padding-top: var(--size);
  border-width: 1px;
  border-style: solid;
}

.note.default {
  --color: var(--black);
  background-color: var(--color);
  border-color: var(--color);
}

.note.root {
  --color: var(--red);
  background-color: var(--color);
  border-color: var(--color);
}

.note.blue {
  --color: var(--blue);
  background-color: var(--color);
  border-color: var(--color);
}

.note.light {
  --color: #666;
  background-color: var(--color);
  border-color: var(--color);
}
</style>
