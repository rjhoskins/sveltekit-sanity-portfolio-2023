<script lang="ts">
	import Project from '$/components/Project.svelte';
	import type { PageData } from './$types';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { onDestroy } from 'svelte';

	export let data: PageData;

	const { title, subTitle, projects } = data;

	let searchText = '';
	
	const searchProjects = projects.map((project: any) => ({
		...project,
		searchTerms: `${project.name} ${project.description.toString()} ${project.techTags?.join(
			' '
			)}`.toLowerCase()
		}));
		
	
	
	//computed
	$: filteredProjects = searchProjects.filter((project) => project.searchTerms.includes((searchText || "").toLowerCase()));
	// $: console.log(filteredProjects);
	
	
</script>

<div class="space-y-4 p-4">
	<h1 class="my-4 text-center">{title}</h1>
	<h3 class=" !font-thin !text-sm text-center">{subTitle}</h3>
	<label class="label">
		<p class="m-2">search for something I've done or worked with</p>
		<!-- (input here) -->
		<input
			bind:value={searchText}
			class="input"
			title="Input (text)"
			type="text"
			placeholder="input text"
		/>
	</label>

	<div class="w-full text-token grid grid-cols-fluid align-items-center gap-4 sizes">
		{#each filteredProjects as project, i (project._id)}
			<Project {project} delay={i} />
		{/each}

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
