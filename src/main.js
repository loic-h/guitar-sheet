import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Guitar Cheat Sheet'
	}
});

export default app;
