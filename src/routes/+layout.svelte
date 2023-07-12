<script lang="ts">
	import { flip } from 'svelte/animate';
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '$/app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$/components/Header.svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

import gsap from 'gsap';
import Flip from 'gsap/Flip';

// let state: Flip.FlipState

// gsap.registerPlugin(Flip)

// beforeNavigate(() => {
// 	state = Flip.getState('.cover, .title', )
// 	console.log('beforeNavigate',state);

// })

// afterNavigate(() => {
// 	console.log('afterNavigate',state);
// 	Flip.from(state, {
// 		targets: '.cover, .title',
// 		duration: .03,
// 		scale: true,
// 		ease: 'ease-out',
// 		onComplete: () => console.log("done")
// 	})
// })

	
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">

	<Header />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />

</AppShell>
