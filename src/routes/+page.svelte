<script lang="ts">
	// Example page content demonstrating mobile-first layout
</script>

<section class="grid gap-6">
	<div class="prose max-w-none dark:prose-invert">
		<h1 class="text-balance">Mobile‑first VAC layout template</h1>
		<p>
			This starter gives you a clean, <strong>header / body / footer</strong> scaffold inspired by a
			typical VAC example project, built with <em>SvelteKit</em>, <em>Tailwind CSS</em>, and
			<em>Skeleton.dev</em>.
		</p>
		<p>Use it as a base and start dropping in routes, components, and APIs.</p>
	</div>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<article class="card rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
			<h3 class="mb-2 font-semibold">Accessible</h3>
			<p class="text-sm text-gray-600 dark:text-gray-400">
				Skip links, sensible landmarks, and focus styles baked in.
			</p>
		</article>

		<article class="card rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
			<h3 class="mb-2 font-semibold">Mobile‑first</h3>
			<p class="text-sm text-gray-600 dark:text-gray-400">
				Designed for small screens first; scales up with responsive utilities.
			</p>
		</article>

		<article class="card rounded-2xl border border-gray-200 p-5 dark:border-gray-800">
			<h3 class="mb-2 font-semibold">Theming</h3>
			<p class="text-sm text-gray-600 dark:text-gray-400">
				Skeleton.dev themes via Tailwind plugin. Toggle dark mode in the header.
			</p>
		</article>
	</div>

	<div class="flex gap-3">
		<a
			class="variant-filled-primary btn"
			href="https://kit.svelte.dev/docs"
			target="_blank"
			rel="noreferrer">SvelteKit Docs</a
		>
		<a
			class="variant-outline-primary btn"
			href="https://www.skeleton.dev"
			target="_blank"
			rel="noreferrer">Skeleton.dev</a
		>
	</div>
</section>
