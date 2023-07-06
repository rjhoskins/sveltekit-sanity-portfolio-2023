<script lang="ts">
	import type { PageData } from './$types';


	export let data: PageData;
	const { hello, project } = data;

</script>
<a class="m-4 float-left" href="/works">
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>Back</a>

<div class="p-4 space-y-4  container mx-auto flex flex-col justify-center items-center">
	<h1 class="sr-only">{`${project.name} ${project.description}`}</h1>
	<h2 class=" text-center">{project.name}</h2>
	<img src={project.imageUrl} alt={project.name} srcset="" class="aspect-video md:max-w-fit" />
	<div class="">
		<div class="flex justify-center gap-4">
			{#if project.sandboxUrl}
				<a href={project.sandboxUrl}>sandbox</a>
			{/if}
			{#if project.loomDemoUrl}
				<a href={project.loomDemoUrl}>demo</a>
			{/if}
			{#if project.designUrl}
				<a href={project.designUrl}>design</a>
			{/if}
			{#if project.liveUrl}
				<a href={project.liveUrl}>in the wild</a>
			{/if}
		</div>
	</div>
	<div>
		<h6 class=" text-center bg-transparent">description</h6>
		<pre class="mt-2 !bg-transparent font-sans">{project.description}</pre>
	</div>
	<div class="text-center">
		<h6>tech stack</h6>
		<!-- <ul class="flex gap-2 flex-wrap justify-center items-center">
			{#each project.techTags as tag}
				 <li>{tag}</li>
			{/each}
			<li></li>
		</ul> -->
		<p class="mt-2">{project.techTags.join(' | ')}</p>
	</div>
</div>

<!-- <pre>
{JSON.stringify(project,null,2)}
</pre> -->
