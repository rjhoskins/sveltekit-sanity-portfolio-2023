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
	const { imageUrl, name, description, loomDemoUrl, designUrl, liveUrl, _id, sandboxUrl } = project;
	const descriptionLength = 20;
	let descriptionText: string;
	if (description?.length > descriptionLength) {
		descriptionText =
			project.description.split(' ').length > descriptionLength
				? `${project.description.split(' ').slice(0, descriptionLength)?.join(' ')}...`
				: description;
	}
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
			class="card card-hover max-w-md rounded-md overflow-hidden mx-auto  !border ![&_*]:border-primary-900"
		>
			<a
				href={`/works/${_id}`}
				class=" decoration-transparent text-inherit h-full flex gap-y-4 flex-col"
			>
				<header class="card-header p-0 ">
					<img src={imageUrl} alt={name} srcset="" class="aspect-video" />
				</header>
				<h3 class=" text-center">{name}</h3>
				<p class="text-clip overflow-hidden p-4  grow">{descriptionText}</p>
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
