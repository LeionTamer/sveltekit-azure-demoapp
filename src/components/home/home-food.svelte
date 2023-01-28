<script lang="ts">
	import brekkie from './food/brekkie.jpg';
	import burger from './food/burger.jpg';
	import falafel from './food/falafel.jpg';
	import quiche from './food/quiche.jpg';
	import sandwich from './food/sandwich.jpg';
</script>

<section id="food">
	<div class="hero min-h-[30vh] bg-base-300">
		<div class="hero-content flex-col lg:flex-row">
			<div class="carousel w-full md:w-[50%]">
				<img src={brekkie} alt="brekkie" class="object-fit-cover w-[300px]" />
				<img src={burger} alt="brekkie" class="object-fit-cover w-[300px]" />
				<img src={falafel} alt="brekkie" class="object-fit-cover w-[300px]" />
				<img src={quiche} alt="brekkie" class="object-fit-cover w-[300px]" />
				<img src={sandwich} alt="brekkie" class="object-fit-cover w-[300px]" />
			</div>
			<div>
				<h1 class="text-5xl font-bold">Foodie</h1>
				<p class="py-6">Food Aventures</p>
			</div>
		</div>
	</div>
</section>
