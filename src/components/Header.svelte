<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';

	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar, LightSwitch, menu } from '@skeletonlabs/skeleton';

	$: menuIsOpen = false;
	let menuExample: boolean = true;

	function stateHandler(response: { menu: string; state: boolean }): void {
		if (response.menu === 'menuz') menuIsOpen = response.state;
	}

	const links = [
		{
			text: 'works',
			href: '/works'
		},
		{
			text: 'home',
			href: '/'
		},
		{
			text: 'upwork',
			href: 'https://www.upwork.com/freelancers/~010303de46dda7facc?viewMode=1',

		}
	];
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl uppercase"><a class="!rounded-lg" href="/">{`RJ}{`}</a></strong>
	</svelte:fragment>
	<svelte:fragment>
		<div class=" flex justify-end md:justify-center items-center">
            <div class="relative  justify-self-center hidden md:block">
                <nav class="">
                    <ul class="flex gap-4 justify-center text-xl font-semibold">
                        {#each links as link}
                            <li>
                                {#if link.iconLinkText}
                                <img src={link.iconLinkText} alt={link.text} srcset="">
                                {/if}                                
                                <a class="!rounded-lg" href={link.href}>{link.text}</a></li>                           
                        {/each}
                    </ul>
                </nav>
            </div>
            <div class="relative md:hidden">
                <button class="ml-auto block" use:menu={{ menu: 'menuz', state: stateHandler }}>
                    {#if menuIsOpen}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    {:else}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                        <!-- else content here -->
                    {/if}
                </button>
                <nav class="list-nav card p-4 shadow-xl top-[35px] right-0"  data-menu="menuz">
                    <ul>
                        {#each links as link}
                            <li>
                                {#if link.iconLinkText}
                                <img src={link.iconLinkText} alt={link.text} srcset="">
                                {/if}                                
                                <a class="!rounded-lg" href={link.href}>{link.text}</a></li>                           
                        {/each}
                    </ul>
                </nav>
            </div>
        </div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<a
			class="btn !rounded-lg btn-sm variant-ghost-surface"
			href="https://github.com/rjhoskins"
			target="_blank"
			rel="noreferrer"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path
					d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
				/>
			</svg>
		</a>
	</svelte:fragment>
</AppBar>
