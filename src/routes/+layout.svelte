<script>
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, menu } from '@skeletonlabs/skeleton';
	import Header from '../components/Header.svelte';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">

	<Header />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />

</AppShell>
