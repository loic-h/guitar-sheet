<script>
export let type;
</script>

<div class="note {type}" />

<style>
.note {
  --size: 35%;
  border-radius: 50%;
  width: var(--size);
  height: 0;
  padding-top: var(--size);
}

.note.default {
  background-color: var(--black);
}

.note.root {
  background-color: red;
}
</style>
