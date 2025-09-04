<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<Header />

	<!-- Main Content Area -->
	<div class="container mx-auto grid w-full grid-cols-1 xl:grid-cols-[200px_minmax(0,_1fr)_200px]">
		<!-- Left Sidebar (mobile hidden) -->
		<aside class="sticky top-0 hidden h-full bg-transparent p-4 xl:block"><!-- (sidebar) --></aside>

		<!-- Main Content -->
		<main class="space-y-4 bg-transparent p-4">
			{@render children()}
		</main>

		<!-- Right Sidebar (mobile hidden) -->
		<aside class="sticky top-0 hidden h-full bg-transparent p-4 xl:block"><!-- (sidebar) --></aside>
	</div>

	<!-- Footer -->
	<Footer />
</div>
