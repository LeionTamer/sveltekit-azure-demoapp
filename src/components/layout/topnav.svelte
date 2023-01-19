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

<section class="bg-slate-700">

	<nav class="relative container mx-auto p-6 ">
		<div class="flex items-center justify-between">
			{#each links as link}
				<div class="p-2 text-slate-50 hover:text-orange-400">{link.name}</div>
				<!-- <div class="p-2">dogs</div> -->
			{/each}
		</div>
	</nav>
</section>
