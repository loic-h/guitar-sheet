import Home from './views/Home.svelte';
import Scales from './views/Scales.svelte';

export default {
  '/scales/:scaleId?': Scales,
  '*': Home
};
