<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/logos-convivencia.svg';
	import github from '$lib/images/github.svg';
	import { Settings as Admin } from '@lucide/svelte';
	import { PUBLIC_BASE_PATH, PUBLIC_APP_PATH, PUBLIC_APP_NAME } from '$env/static/public';

	const basepath = PUBLIC_BASE_PATH;
	const apppath = PUBLIC_APP_PATH;
	const appname = PUBLIC_APP_NAME;

	let menuOpen = false;
</script>

<header class="shadow-md">
	<div
		class="mx-auto flex max-w-7xl items-center justify-between bg-white px-4 py-3 sm:px-6 lg:px-8"
	>
		<!-- Logo -->
		<a href={`${basepath}${apppath}`} class="flex items-center space-x-2">
			<img src={logo} alt="Logo" class="h-10 object-contain sm:h-12" />
		</a>

		<!-- Mobile menu button -->
		<button
			class="inline-flex items-center justify-center p-2 text-gray-700 sm:hidden"
			on:click={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
				/>
			</svg>
		</button>

		<!-- Desktop Nav -->
		<nav class="hidden space-x-6 sm:flex">
			<a
				href={basepath}
				class="text-sm font-semibold text-gray-700 hover:text-[#621132]"
				aria-current={$page.url.pathname === basepath ? 'page' : undefined}
			>
				Inicio
			</a>
			<a
				href={`${basepath}${apppath}`}
				class="text-sm font-semibold text-gray-700 hover:text-[#621132]"
				aria-current={$page.url.pathname.startsWith(`${basepath}${apppath}`) ? 'page' : undefined}
			>
				{appname}
			</a>

			<!--<a
				href={`${basepath}/admin`}
				class="text-sm font-semibold text-gray-700 hover:text-[#621132]"
				aria-current={$page.url.pathname.startsWith(`${basepath}/admin`) ? 'page' : undefined}
			>
				Admin
			</a>
			-->
		</nav>
	</div>

	<!-- Mobile Menu -->
	{#if menuOpen}
		<nav class="bg-[#621132] px-4 pb-4 text-white sm:hidden">
			<a href={basepath} class="block py-2 text-sm font-medium">Inicio</a>
			<a href={`${basepath}${apppath}`} class="block py-2 text-sm font-medium">{appname}</a>
			<!---<a href={`${basepath}/admin`} class="block py-2 text-sm font-medium">Admin</a>-->
		</nav>
	{/if}

	<div
		class="mx-auto flex h-16 max-w-screen items-center justify-between bg-[#621132] px-4 py-3 sm:px-6 lg:px-8"
	>
		<!-- Title -->
		<p class="text-white">VISOR DE...</p>

		<!-- Mobile menu button -->
		<button
			class="inline-flex items-center justify-center p-2 text-gray-700 sm:hidden"
			on:click={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
				/>
			</svg>
		</button>

		<!-- Desktop Nav -->
		<nav class="hidden space-x-6 sm:flex">
			<a
				href={basepath}
				class="text-sm font-semibold text-white hover:text-[#821132]"
				aria-current={$page.url.pathname === basepath ? 'page' : undefined}
			>
				Inicio
			</a>
			<a
				href={`${basepath}${apppath}`}
				class="text-sm font-semibold text-white hover:text-[#821132]"
				aria-current={$page.url.pathname.startsWith(`${basepath}${apppath}`) ? 'page' : undefined}
			>
				{appname}
			</a>

			<!--<a
				href={`${basepath}/admin`}
				class="text-sm font-semibold text-gray-700 hover:text-[#621132]"
				aria-current={$page.url.pathname.startsWith(`${basepath}/admin`) ? 'page' : undefined}
			>
				Admin
			</a>
			-->
		</nav>
	</div>
</header>
