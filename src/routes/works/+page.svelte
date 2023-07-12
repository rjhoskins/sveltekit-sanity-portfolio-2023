<script lang="ts">
	import Project from '$/components/Project.svelte';
	import type { PageData } from './$types';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { onDestroy } from 'svelte';
	import { Paginator } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	export let data: PageData;

	const { title, subTitle, projects } = data;

	let searchText = '';

	const searchProjects = projects.map((project: any) => ({
		...project,
		searchTerms: `${project.name} ${project.shortDescription?.toString()} ${project.techTags?.join(
			' '
		)}`.toLowerCase()
	}));

	//computed
	$: filteredProjects = searchProjects.filter((project: { searchTerms: string | string[] }) =>
		project.searchTerms.includes((searchText || '').toLowerCase())
	);

	// PaginatorSettings
	let paginator = {
		offset: 0,
		limit: 5,
		size: 5,
		amounts: [1, 2, 6, 10]
	};
	$: paginator.size = filteredProjects.length;
	// $: console.log(filteredProjects);
</script>

<div class="space-y-4 p-4">
	<h1 class="my-4 text-center">{title}</h1>
	<h3 class=" !font-thin !text-sm text-center">{subTitle}</h3>
	<p class="m-2">search for something I've done or worked with</p>
	<label class="label relative !mt-0">
		<!-- (input here) -->
		<input
			bind:value={searchText}
			class="input"
			title="Input (text)"
			type="text"
			placeholder="input text"
		/>
		{#if true}
			<button
				on:click={() => (searchText = '')}
				class="absolute -translate-x-4 right-0 top-1/2 -translate-y-1/2 !mt-0"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		{/if}
	</label>
	{#if filteredProjects.length  > 0}
		 <Paginator
			 bind:settings={paginator}
			 showFirstLastButtons={false}
			 showPreviousNextButtons={true}
		 />
	{/if}

	<div class="w-full text-token grid grid-cols-fluid align-items-center gap-4 sizes">
		{#if filteredProjects.length === 0}
		<!-- content here -->
		<div class="text-center">
			<h6>hmmm... looks like I haven't used that tool to build a web or mobile experience yet</h6>
			<p>if you're looking for my sweetspot try: app, next, tailwind, T3, or svelte (yes plz!) </p>
		</div>
		{:else}
			<!-- else content here -->
			{#each filteredProjects.slice(paginator.offset * paginator.limit, paginator.offset * paginator.limit + paginator.limit) as project, i (project._id)}
				<Project {project} delay={i} />
			{/each}
		{/if}

		<!-- {#each getFilteredProjects(searchProjects, searchText) as project, i}
			<div class="border border-red-700">
				<Project {project} delay={i} />
			</div>
		{/each} -->
	</div>
</div>

<!-- <pre>
{JSON.stringify(filteredProjects, null, 2)}
</pre> -->
