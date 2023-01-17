<script lang="ts">
	const links: {
		name: string;
		link: string;
	}[] = [
		{ name: 'cat', link: '/' },
		{ name: 'dog', link: '/' },
		{ name: 'mouse', link: '/' }
	];
</script>

<nav class="relative container mx-auto px-6">
	<div class="flex items-center justify-between">
		{#each links as link}
			<div class="p-2">{link.name}</div>
			<!-- <div class="p-2">dogs</div> -->
		{/each}
	</div>
</nav>
