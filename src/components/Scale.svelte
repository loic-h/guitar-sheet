<script>
import { scales, tunings, allNotes } from '../stores/index.js';
import Grid from './Grid.svelte';

export let scaleKey;
export let root;
export let tuningKey = 'standard';

$: scale = $scales[scaleKey];

const startFret = 1;
const endFret = 15;
const tuning = $tunings[tuningKey];
const pitches = tuning.pitches;
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
    const index = scaleNotes.indexOf(notes);
    if (scale.types && scale.types[index]) {
      return scale.types[index];
    }
    return "default";
  }
};

$: {
	scaleNotes = getScaleNotes(root, scale.progression);

	for (let i = 0; i < pitches.length; i++) {
		matrix[i] = [];
		for (let j = 0; j < range; j++) {
      const fretNumber = startFret + j;
			const notes = getNotes(i, fretNumber);
      const type = getNoteType(notes);
			matrix[i][j] = { notes, type, fretNumber }
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
