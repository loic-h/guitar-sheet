<script>
import { scales, tunings, allNotes } from '../stores/index.js';
import Grid from './grid.svelte';

export let scaleKey = 'major';
export let root = 'd';
export let tuningKey = 'standard';

const startFret = 1;
const endFret = 15;
const tuning = $tunings[tuningKey];
const pitches = tuning.pitches;
const scale = $scales[scaleKey];
const matrix = [];
const range = endFret - startFret + 1;
let scaleNotes;

const getNotes = (stringIndex, cellIndex) => {
  const startIndexOnString = getNoteIndex(pitches[stringIndex]);
  const noteIndex = (startIndexOnString + cellIndex) % $allNotes.length;
  return $allNotes[noteIndex];
}

const getScaleNotes = (root, intervals) => {
  const rootIndex = getNoteIndex(root);
  let pointer = rootIndex;
  return [$allNotes[rootIndex]].concat(intervals.map(n => {
    pointer = pointer + n;
    if (pointer >= $allNotes.length) {
      pointer = pointer % $allNotes.length;
    }
    return $allNotes[pointer]
  }));
};

const getNoteIndex = note => {
  return $allNotes.findIndex((_, i) => $allNotes[i].includes(note));
};

const getNoteType = notes => {
  if (notes.includes(root)) {
    return "root";
  }
  if (scaleNotes.includes(notes)) {
    return "default";
  }
};

$: {
	scaleNotes = getScaleNotes(root, scale.progression);

	for (let i = 0; i < pitches.length; i++) {
		matrix[i] = [];
		for (let j = 0; j < range; j++) {
			const notes = getNotes(i, j + startFret);
			const type = getNoteType(notes);
			matrix[i][j] = { notes, type }
		}
	}
}
</script>

<div class="scale">
  <Grid
		matrix={matrix}
		startFret={startFret}
		endFret={endFret} />
</div>
