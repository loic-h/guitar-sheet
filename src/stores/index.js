import { readable, writable } from 'svelte/store';
import allNotesData from '../data/all-notes.json';
import marksData from '../data/marks.json';
import tuningsData from '../data/tunings.json';
import scalesData from '../data/scales.json';

export const allNotes = readable(allNotesData);
export const marks = readable(marksData);
export const tunings = readable(tuningsData);
export const scales = readable(scalesData);

export const tuning = writable('standard');
