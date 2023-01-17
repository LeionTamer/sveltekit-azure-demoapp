<script lang="ts">
	import '@styles/twbase.css';
	import Navigation from '@components/layout/topnav.svelte';
	import Footer from '@components/layout/footer.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		fetch('/api/test').then(resp => console.log(resp))
	})
</script>

<div class="flex flex-col h-screen justify-between">
	<Navigation />
	<main class="mb-auto">
		<slot />
	</main>
	<Footer />
</div>
