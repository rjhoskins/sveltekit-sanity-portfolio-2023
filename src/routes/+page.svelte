<script>
	import BuiltWith from "../components/BuiltWith.svelte";

</script>
<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center overflow-hidden">
	<h1 class="sr-only">rob hoskins portfolio home page</h1>
	<div class="space-y-4 text-center">
		<h2 class="font-bold">Hello, I'm Rob</h2>
		<p>I bring cool ideas to life on the interwebs</p>
		<p>-apps, sites, APIs, all the fun stuff-</p>
		<p>using whatever tool(s) makes sense</p>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-3/4 " />

		</figure>
		<div class="flex justify-center space-x-2">
			<!-- / 
			<a
				class="btn btn-filled"
				href="https://skeleton.dev/"
				target="_blank"
				rel="noreferrer"
			>
				Launch Documentation
			</a> -->
			<a
				class="btn btn-filled"
				href="/works"
			>
				check out my works

				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
				  </svg>
				  
			</a>

		</div>
		<div class="absolute bottom-0 left-0 w-[100vw]">
			<BuiltWith />
		</div>

	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
			transform-origin: center ;
		}
	}
</style>
