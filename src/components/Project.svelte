<script lang="ts">
	// your script goes here
	// 	import { flip } from 'svelte/animate'
	// 	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	let animate = false;
	onMount(() => (animate = true));

	export let delay: any;
	export let project: any;
	const { imageUrl, name, shortDescription, loomDemoUrl, designUrl, liveUrl, _id, sandboxUrl } = project;


</script>

{#if animate}
	{#key _id}
		<div
			in:fly={{
				y: 100,
				x: -100,

				delay: 100 * delay,
				easing: cubicOut
			}}
			class="card card-hover max-w-md rounded-md overflow-hidden mx-auto shadow-md !border dark:border-transparent "
		>
			<a
				href={`/works/${_id}`}
				class=" text-base !text-base-token dark:!text-dark-token decoration-transparent h-full flex gap-y-4 flex-col"
			>
				<header class="card-header p-0 ">
					<img src={imageUrl} alt={name} srcset="" class="aspect-video cover" data-flip-id="cover-{_id}" />
				</header>
				<h3 class=" text-center title" data-flip-id="title-{_id}">{name}</h3>
				<p class="text-clip overflow-hidden p-4  grow">{shortDescription}</p>
				<footer class="card-footer">
					<div class="flex  gap-4 justify-center">
						{#if sandboxUrl}
							<a href={sandboxUrl}>sandbox</a>
						{/if}
						{#if loomDemoUrl}
							<a href={loomDemoUrl}>demo</a>
						{/if}
						{#if designUrl}
							<a href={designUrl}>design</a>
						{/if}
						{#if liveUrl}
							<a href={project.liveUrl}>in the wild</a>
						{/if}
					</div>
				</footer>
			</a>
		</div>
	{/key}
{/if}
