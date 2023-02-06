<script lang="ts">
	import '@styles/twbase.css';
	import Navigation from '$lib/components/layout/topnav.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
</script>

<div class="flex flex-col h-screen justify-between bg-slate-600">
	<Navigation />
	<main class="mb-auto">
		<slot />
	</main>
	<Footer />
</div>
