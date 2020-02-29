<script>
import Cell from './Cell.svelte';

export let pitches;
export let scale;
export let root;

const start = 0;
const end = 15;
const range = end - start + 1;
const notes = [
  ["a"],
  ["a#", "bb"],
  ["b", "cb"],
  ["c", "b#"],
  ["c#", "db"],
  ["d"],
  ["d#", "eb"],
  ["e", "fb"],
  ["f", "e#"],
  ["f#", "gb"],
  ["g"],
  ["g#", "ab"]
];
const marks = [
  { step: 3, type: "single" },
  { step: 5, type: "single" },
  { step: 7, type: "single" },
  { step: 9, type: "single" },
  { step: 12, type: "double" }
];

const getNotes = (stringIndex, cellIndex) => {
  const startIndexOnString = getNoteIndex(pitches[stringIndex]);
  const noteIndex = (startIndexOnString + cellIndex) % notes.length;
  return notes[noteIndex];
}

const getMark = index => {
  const mark = marks.find(el => {
    return index + 1 === el.step
      || (index > notes.length && (index + 1) % notes.length === el.step);
  });
  return mark ? ` ${mark.type}` : "";
}

const getScaleNotes = (root, intervals) => {
  const rootIndex = getNoteIndex(root);
  let pointer = rootIndex;
  return [notes[rootIndex]].concat(intervals.map(n => {
    pointer = pointer + n;
    if (pointer >= notes.length) {
      pointer = pointer % notes.length;
    }
    return notes[pointer]
  }));
};

const getNoteIndex = note => {
  return notes.findIndex((_, i) => notes[i].includes(note));
};

const isInScale = (note, scaleNotes = scaleNotes) => {
  return scaleNotes.find(a => a.includes(note));
};

const getNotesOnString = stringIndex => {
  const notes = [];
  for (let i = 1; i <= range; i++) {
    notes.push(getNotes(stringIndex, i));
  }
  return notes;
}

const getNoteType = notes => {
  if (notes.includes(root)) {
    return "root";
  }
  if (scaleNotes.includes(notes)) {
    return "default";
  }
};


let scaleNotes = getScaleNotes(root, scale.intervals);
</script>

<div class="grid">
  {#each pitches.reverse() as pitch, stringIndex}
    <div class="string">
      {#each getNotesOnString(stringIndex) as notes, cellIndex}
        <Cell
          inFirstString={stringIndex === 0}
          notes={notes}
          noteType={getNoteType(notes)} />
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
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
}

.single:before,
.double:before,
.double:after {
  --size: 25%;
  content: '';
  border: solid 1px var(--black);
  border-radius: 50%;
  width: var(--size);
  height: 0;
  padding-top: var(--size);
  margin-bottom: 0.5rem;
}
</style>
