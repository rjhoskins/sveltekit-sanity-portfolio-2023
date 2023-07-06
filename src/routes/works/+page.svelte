<script lang="ts">
	import Project from './../../components/Project.svelte';
	import type { PageData } from './$types';
	import { flip } from 'svelte/animate'
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	

	export let data: PageData;
	const { Title, subTitle, projects } = data;

	// add design file
	// add public

</script>

<div class="space-y-4 p-4">
	<h1 class="my-4 text-center">{Title}</h1>
	<h3 class=" !font-thin !text-sm text-center">{subTitle}</h3>
	<label class="label">
		<p class="m-2">search for something I've done or worked with</p>
		<!-- (input here) -->
	<input class="input" title="Input (text)" type="text" placeholder="input text" />
	</label>
	
	<div class="w-full text-token grid grid-cols-fluid align-items-center gap-4 sizes">
	
	
	{#each projects as project, i}
	<Project project={project} delay={i} />
	{/each}
	
	</div>
</div>

<!-- <pre>
{JSON.stringify(projects[0],null,2)}
</pre> -->
